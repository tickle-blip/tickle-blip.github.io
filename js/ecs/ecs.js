
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {addComponent, addEntity, pipe} from 'bitecs'

import { createWorld } from './factory/createWorld.js'
import {bindObject3DToEntity} from "./factory/bindObject3DEntity.js";
import {InputSystem} from "../Input/InputSystem.js";
import {AudioSystem} from "../Audio/AudioSystem.js";
import {timeSystem} from "./system/time.js";
import {renderSystem} from "./system/render.js";
import {cameraMovementSystem} from "./system/cameraMovement.js";
import {movementSystem} from "./system/movement.js";
import {animationSystem} from "./system/AnimationSystem.js";
import {CurvedWorld} from "./system/curve.js";
import {interactionSystem} from "./system/interactionSystem.js";
import { TransformComponent,CameraTag,DummyTag } from "./components/components.js"

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { GodRaysShader } from '../shaders/GodRaysShader.js';
import {
    BeamInstancedFlowRenderable, BombInteractionInstancedFlowRenderable, ElectricityInteractionInstancedFlowRenderable,
    FlowLevelGroup,
    InstancedFlowRenderable,
    InteractionInstancedFlowRenderable,
    modifyTriInteractionShader,
    TriInstancedFlowRenderable,
    VisualQuadInstancedFlowRenderable
} from "../curveModifier/CurveModifier.js";
import {musicInteractionSystem} from "./system/musicInteractionSystem.js";
import {debugViewSystem} from "./system/debugViewSystem.js";
import {removeFingerSystem} from "./system/removeFingerSystem.js";
import {deathSystem} from "./system/deathSystem.js";
import {
    AmbientLight, AnimationMixer,
    AnimationUtils,
    AxesHelper, LoopRepeat,
    Mesh,
    MeshBasicMaterial, Scene,
    SphereGeometry,
    SpotLight,
    Vector3
} from "three";
import {progressSystem} from "./system/progressSystem.js";
import {winSystem} from "./system/winSystem.js";

// Initialize the default sets of entities and systems
class ECS_Container
{
    world;
    #pipeline;
    //time, recalculate position on Curve. recalculate geometry if needed, update
    #flow;
    #game_scene = new Scene();
    #flag = false;
    constructor(scene) {
        this.world = createWorld();
        this.world.songEditingUnlocked = false;
        this.world.editMode= false;
        this.world.paused = true;
        this.world.progressMustUpdate=false;
        this.world.win = false;
        
        //bar size, geometry loops count.
        this.world.GlobalParameters = {speed:2.5, curveCount:3,curveLength:8,barSize:8,loops:1,safeTime:2.,rotationSpeed: {value:0.}, triAmplitude: {value:1.}};
        
        this.world.Input = new InputSystem(this.world.renderer.domElement);
        this.world.Curve = new CurvedWorld(this.world.GlobalParameters.curveCount,this.world.GlobalParameters.curveLength,this.world.GlobalParameters.barSize*this.world.GlobalParameters.loops);
        this.world.AudioSystem = new AudioSystem(this.world.GlobalParameters.barSize);
        //speed = how much seconds to pass on curve
    
        if (scene !== undefined) {
            this.#initializeModels(scene);
            this.world.scene.add(this.#game_scene);
        }
        
        this.#createTOScene();

        this.#initControls();
        
        
        //init pipeline
        this.#pipeline = pipe( 
            timeSystem,
            this.world.Curve.curveSystem,
            this.world.Curve.updateGeometry,
            cameraMovementSystem,
            movementSystem,
            animationSystem,
            interactionSystem,
            //comment removeFingerSystem for godmode
            removeFingerSystem,
            deathSystem,
            progressSystem,
            winSystem,
            musicInteractionSystem,
            //debugViewSystem,
             renderSystem);

    }
    #createTOScene(){
        const eid = addEntity(this.world);
        bindObject3DToEntity(this.world.camera, eid);
        addComponent(this.world, TransformComponent, eid)
        addComponent(this.world, CameraTag, eid)
        this.world.objects.set(this.world.camera.eid, this.world.camera);
           this.world.camera.userData.speed = this.world.GlobalParameters.speed;
        this.world.camera.userData.dirV = new Vector3(0,0,-1);
        this.world.camera.userData.offset = new Vector3(0,0,0);
        const m = new Mesh(new SphereGeometry(0.0001,32,32), new MeshBasicMaterial({color:0x00ff00}));
        
        this.world.scene.add(new AxesHelper( 5 ));
        this.world.scene.add(new AmbientLight(0xffffff,0.05));
        this.world.scene.add(m);
        let sl = new SpotLight(0xffffff, 3);
        
        sl.position.set(0,0,0.5);
        sl.angle = 3.14/4;
        sl.decay = 2;
        sl.distance = 30;
        sl.penumbra = 0.0;
        sl.target = this.world.camera;
        sl.castShadow =false;
        this.world.camera.add(sl);
        //m.add(sl);
        //this.world.scene.background = new Color(1 ,0.3,0.3);
        this.world.scene.add(this.world.camera);
        
        this.world.composer = new EffectComposer( this.world.renderer );
        const renderPass = new RenderPass( this.world.scene, this.world.camera );
        this.world.composer.addPass( renderPass );

        const luminosityPass = new ShaderPass( GodRaysShader );
        luminosityPass.uniforms.time = {value:0};
        this.world.composer.addPass( luminosityPass );

        const outputPass = new OutputPass();
       // this.world.renderer.toneMapping = ACESFilmicToneMapping;
        outputPass.material.defines.ACES_FILMIC_TONE_MAPPING = true;
        this.world.composer.addPass( outputPass );
       // sl.matrixWorldNeedsUpdate   = true;
       // sl.rotation.set(0,0,0)
        /*const debug = this.world.Curve.createDebugGeometry("line", false);
        if (debug.length !== undefined){
            debug.forEach((e)=>{this.world.scene.add(e)});
        }
        else this.world.scene.add(debug)
        */
    }

    update(){
        this.world.Input.update();
//        this.world.controls.update( this.world.time.delta);
        this.world.composer.passes[1].uniforms.time.value = this.world.time.elapsedTime;
        this.#pipeline(this.world);
    }
    
    #initControls(){
//        this.world.controls = new FreeCameraControls( this.world.camera, this.world.renderer.domElement );
        //this.world.controls.movementSpeed /=10;
        //this.world.controls.dragToLook = true;
    }
    #initializeModels(scene){
        //create world which holds all rendering

        
        const loader = new GLTFLoader().setPath('/models/');

        let tube_part;
        let knobs = [];
        let knob_matrices = [];
        let visual_quad;
        let hand;
        let electricity;
        let bomb;
        scene.traverse(function (child) 
        {
            {
                if (child.name.includes("TO_SELF"))
                tube_part= child;
                else if (child.name.includes("TO1"))
                    knobs.push(child);
                else if(child.name.includes("VISUAL_QUAD"))
                {
                    visual_quad = child;
                }
                else if(child.name.includes("HAND")){
                    hand = child;
                }
                else if(child.name.includes("ELECTRICITY")){
                    electricity = child;
                }
                else if (child.name.includes("BOMB"))
                {
                    bomb = child;
                }
            if (child.name.includes("knobs")){
                child.updateMatrixWorld();
                knob_matrices.push(child.matrixWorld);
            }  
            }
        });
/*        const eid = addEntity(this.world);
        bindObject3DToEntity(tube_part, eid);
        addComponent(this.world, TransformComponent, eid)
        addComponent(this.world, DummyTag, eid)
        this.world.objects.set(tube_part.eid, tube_part);
*/
        
        //keep geometry loop number divisible by barSize
        const loops_number = this.world.GlobalParameters.loops*this.world.GlobalParameters.barSize;
        this.world.geometry = {};
        this.world.geometry.level = [];
        this.world.geometry.level = new FlowLevelGroup(loops_number,knob_matrices);
      
        const kno = this.world.geometry.level.addObject(InstancedFlowRenderable,knobs,{activeEffectID:{value:this.world.AudioSystem.activeEffectID}, barLoops: {value:this.world.GlobalParameters.loops}, rotationSpeed: this.world.GlobalParameters.rotationSpeed, triAmplitude: this.world.GlobalParameters.triAmplitude});
        
        kno.object3D.forEach((e)=>{
            this.#game_scene.add(e);
        });
        const tri = this.world.geometry.level.addObject(TriInstancedFlowRenderable, tube_part, {melodyInstrumentID: {value:this.world.AudioSystem.melodyInstrumentID}, rotationSpeed: this.world.GlobalParameters.rotationSpeed, triAmplitude: this.world.GlobalParameters.triAmplitude});
        this.#game_scene.add(tri.object3D);

        tube_part.material.emissiveIntensity = 0.5;
        tube_part.material.emissiveMap = tube_part.material.map;
        tube_part.material.emissive = tube_part.material.color;
        const visualQuadInstanced = this.world.geometry.level.addObject(BeamInstancedFlowRenderable, visual_quad, {melodyInstrumentID: {value:this.world.AudioSystem.melodyInstrumentID}, melody: {value:this.world.AudioSystem.melody},rotationSpeed: this.world.GlobalParameters.rotationSpeed});
        visualQuadInstanced.object3D.position.set(0,-0.2,-0.08);
        visualQuadInstanced.object3D.scale.set(1.25,1.25,1.25);
        this.#game_scene.add(visualQuadInstanced.object3D);
        
        //init
        for ( let i = 0; i < loops_number; i ++ ) {
            const {curveIndex: ccc, u: uuu} = this.world.Curve.getCurveIndexAndUAt((0.5 + i));
            this.world.geometry.level.moveGeometryForward(i,uuu,ccc);
            
        }

        
        //this.#game_scene.add(knobsFlow.object3D)
        //knobsFlow.object3D.forEach((e)=>{this.#game_scene.add(e)});
        
        //this.world.geometry.level.push(knobsFlow);

        //const tube_mesh = this.world.Curve.createInstancedCurvedGeometry(tube_part,knob_matrices);
        //const tube_mesh = this.world.Curve.createCurvedGeometry(tube_part);
      //  this.#game_scene.add(tube_mesh);



        this.world.geometry.interactives = [];
        
        knobs.forEach((e)=>{
            const l= new InteractionInstancedFlowRenderable(this.world.GlobalParameters.curveCount, e, e.material, 100)
            
            this.world.geometry.interactives.push(l);
            this.#game_scene.add(l.object3D)});


        const tri_interaction= new InteractionInstancedFlowRenderable(this.world.GlobalParameters.curveCount, tube_part, tube_part.material, 400,modifyTriInteractionShader)

        this.world.geometry.interactives.push(tri_interaction);
        this.#game_scene.add(tri_interaction.object3D);

        const electricityInteractionInstancedFlowRenderable= new ElectricityInteractionInstancedFlowRenderable(this.world.GlobalParameters.curveCount, electricity, electricity.material, 400,modifyTriInteractionShader)
        
        this.world.geometry.interactives.push(electricityInteractionInstancedFlowRenderable);
        this.#game_scene.add(electricityInteractionInstancedFlowRenderable.object3D);
        
        const b= new BombInteractionInstancedFlowRenderable(this.world.GlobalParameters.curveCount, bomb, bomb.material, 400,modifyTriInteractionShader)
        
        this.world.geometry.interactives.push(b);
        this.#game_scene.add(b.object3D);
        
        //this.world.Curve.placeInteractive(this.world,0);
        //this.world.Curve.placeInteractive(this.world,1);
        //this.world.Curve.placeInteractive(this.world,2);
        const a =hand.animations[0];
        const delete_indices = [];
        a.tracks.forEach((t,i)=>{
            if (t.name.includes("scale")){
                delete_indices.push(i);
            }
        })
        for(let k=delete_indices.length;k>0;k--)
            a.tracks.splice(delete_indices[k-1],1);
        const fps = a.tracks[0].times.length/a.duration;

        AnimationUtils.makeClipAdditive( a );
        const i = AnimationUtils.subclip ( a, "IDLE", 0, 1, fps );
        const l = AnimationUtils.subclip ( a, "LEFT", 2, 3, fps );
        const r = AnimationUtils.subclip ( a, "RIGHT", 4, 5, fps );
        const d = AnimationUtils.subclip ( a, "UP", 6, 7, fps );
        const u = AnimationUtils.subclip ( a, "DOWN", 8, 9, fps );
        const m = AnimationUtils.subclip ( a, "MOVING", 10, 34, fps );
        
        hand.position.set(0,-0.,-0.2);
        hand.rotation.set(0,0 ,0);
        hand.scale.set(0.01,0.01,0.01);
        hand.userData.fingers_bones = [hand.getObjectByName("middle_01_l"),hand.getObjectByName("thumb_02_l"),hand.getObjectByName("index_01_l"),hand.getObjectByName("ring_01_l"),hand.getObjectByName("pinky_01_l")];
        hand.userData.fingers = [hand.getObjectByName("heroBodymiddle"),hand.getObjectByName("heroBodythumb"),hand.getObjectByName("heroBodyindex"),hand.getObjectByName("heroBodyring"),hand.getObjectByName("heroBodypinky")];
        hand.userData.storedFingerData = [];
        hand.userData.fingers.forEach((f)=>{
           hand.userData.storedFingerData.push({position:f.position.clone(),rotation:f.rotation.clone(),scale:f.scale.clone()}); 
        });
        this.world.fingersAlive = hand.userData.fingers.length;
        hand.userData.fingers.forEach((f)=>{
            //f.rotateX(-Math.PI/2);
            f.visible=false;
        })
        hand.userData.removeFinger=false;
        
        //hand.userData.fingers[0].updateMatrixWorld();
        this.world.mixer = new AnimationMixer( hand );

        this.world.hand = hand;
        const eid1 = addEntity(this.world);
        bindObject3DToEntity(hand, eid1);
        addComponent(this.world, TransformComponent, eid1)
        addComponent(this.world, DummyTag, eid1)
        this.world.objects.set(hand.eid, hand);

        const idle = this.world.mixer.clipAction( i);
        const left = this.world.mixer.clipAction( l);
        const right = this.world.mixer.clipAction( r);
        const up = this.world.mixer.clipAction( u);
        const down = this.world.mixer.clipAction( d);
        const moving = this.world.mixer.clipAction( m);
        moving.loop = LoopRepeat;

        function setWeight( action, weight ) {

            action.enabled = true;
            action.setEffectiveTimeScale( 1 );
            action.setEffectiveWeight( weight );

        }
        this.world.hand_actions = [idle,left,right,up,down,moving];
        this.world.hand_actions.forEach((a)=>{
           
            setWeight(a,0);
            a.play();
        })
        setWeight(moving,1);
        this.#game_scene.add(hand);
        //this.world.camera.add(hand);
    }
    resetGameState(){
        this.world.win = false;
        this.world.GlobalParameters.rotationSpeed.value = 0;
        this.world.GlobalParameters.triAmplitude.value = 1;
        
        this.world.hand.userData.fingers.forEach((f,i)=>{
            f.position.copy(this.world.hand.userData.storedFingerData[i].position);
            f.rotation.copy(this.world.hand.userData.storedFingerData[i].rotation);
            f.scale.copy(this.world.hand.userData.storedFingerData[i].scale);
            f.visible = false;    
        });
        this.world.hand.userData.fingers_bones.forEach((f)=>{
            f.scale.set(1,1,1);
        });
        this.world.hand.userData.removeFinger = false;
        this.world.fingersAlive=5;

        this.world.AudioSystem.resetMelody();
        this.world.Curve.resetCurves(this.world);
        this.world.progressMustUpdate=true;
        this.world.camera.position.set(0,0,0);
    }
}
export {ECS_Container};