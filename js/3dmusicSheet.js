import {UIInputSystem} from "./Input/UIInputSystem.js";
import {
    AmbientLight, Box3, Box3Helper,
    Color,
    DirectionalLight,
    DynamicDrawUsage,
    InstancedBufferAttribute,
    InstancedMesh,
    Matrix4, Mesh,
    MeshBasicMaterial, MeshDepthMaterial,
    MeshPhongMaterial,
    Object3D,
    OrthographicCamera,
    PCFSoftShadowMap, PlaneGeometry,
    Quaternion,
    Raycaster, RepeatWrapping,
    Scene,
    Vector2,
    Vector3,
    WebGLRenderer
} from "three";
import fs from 'fs'
import path from 'path'
import {modulationTypes, noiseTypes} from "./audio/AudioSystem.js";

let ui_visible = false;

const canvas = document.getElementById("musicSheet");
const msc = document.getElementById("musicSheetContainer");
const sl = document.getElementById("slider");
const slp = document.getElementById("slider_position");
const menu = document.getElementById("sheetMenu");
const sheet_tooltips = document.getElementById("sheet_tooltips");
const scale_div = document.getElementById("scale-div");
const synth_info = document.getElementById("synth-name");
const params_list = document.getElementById("e-list");
const sheet_song_list = document.getElementById("sheet_songList");

const first_row = [28,38,29,39,20,30,21,31,22,32,23,33,24,34,25,35,26,36,27,37];
const second_row = [18,17,16,13,12,11,10,8,7,6,5,3,4,2,9,14,15,1,0,19];
const colors= [ 0.05,0.2,0.6, 0.1,0.6,0.3, 0.5,0.5,0.65, 0.7,0.1,0.1, 0.05,0.05,0.05];
let json_d;
const scene = new Scene();
scene.background = new Color(0x333333);
//scene.back

const camera_size = 10;
[canvas.width,canvas.height] = [window.innerWidth,window.innerHeight];
let camera,canvas_aspect;
let rotationActive;

//set up canvas size and create OrthoCamera
{
    canvas.width*=0.95;
    canvas.height*=0.95;
    canvas_aspect = (canvas.width/canvas.height);
    if (canvas_aspect>1)
        canvas_aspect =8/10;
    canvas.width=canvas.height*canvas_aspect;

    camera = new OrthographicCamera(canvas_aspect*camera_size/-2,canvas_aspect*camera_size/2,camera_size/2,camera_size/-2,1,1000);

    camera.position.y=-0.1;
    camera.position.z = 5;
    camera.position.y = -2.5;
    camera.lookAt(0,0,0);
}
slp.style.width = `${canvas_aspect/0.804    *100}%`;
    
const slider_ratio = 1-canvas_aspect/0.804;    
document.getElementById('sheetMenu').style.width=`${canvas.width}px`;

showSheetCanvas(false);

//create Renderer
let renderer = new WebGLRenderer( {canvas:canvas, antialias: true, alpha:true } );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap; // default THREE.PCFShadowMap


let to_body;
const uniforms = {};
const raycaster = new Raycaster();
const pointer = new Vector2();
const slider_pointer = new Vector2();
const current_pointer = new Vector2();
const old_pointer = new Vector2();
const old_slider_pointer = new Vector2();
const tri_instance_meshes =[];
const mixer_knobs = [];
let knob_meshes = [] ;
let world;
let selected_id = undefined;
let last_selected_id = undefined;
let selected_instrument = undefined;
let selected_color = undefined;

const default_note = {
    instrument:0,
    pitch:10
};
let wires = [];
//events and input system
let sheet_time=0;
const uiInputSystem = new UIInputSystem(msc);

msc.addEventListener('pointerdown', onPointerDown,false);
sl.addEventListener('pointerdown', onSliderPointerDown,false);
function contextmenu( event ) {

    event.preventDefault();

}
function onMouseWheel(event){

    event.preventDefault();
}
function getCursorPosition(canvas, event, target) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    target.set(x,y);
}
function onPointerDown( event ) {

  /*  msc.setPointerCapture( event.pointerId );
    msc.addEventListener('pointerout', onPointerUp);
    msc.addEventListener('pointermove', onPointerMove);*/
    msc.addEventListener( 'pointerup', onPointerUp );
    getCursorPosition(msc,event,pointer);
    old_pointer.copy(pointer);
    pointer.x = pointer.x/msc.clientWidth * 2 - 1;
    pointer.y = - pointer.y/msc.clientHeight * 2 + 1;
    
    
}

function onPointerUp( event ) {
    
    msc.releasePointerCapture( event.pointerId );
    if (rotationActive !== undefined && selected_instrument !== undefined && selected_instrument !==4) {
        const instrument = world.AudioSystem.instruments[selected_instrument];
        instrument.modifyParameter(rotationActive.userData.parameter.name,rotationActive.userData.parameter.value);
        default_note.instrument = selected_instrument;
        console.log("playing note ", instrument)
        world.AudioSystem.playInstrumentAt(default_note);
    }
    rotationActive = undefined;
    //msc.removeEventListener('pointermove', onPointerMove);
    msc.removeEventListener('pointerup', onPointerUp);
    //msc.removeEventListener('pointerout', onPointerUp);
}
function onSliderPointerDown( event ) {
  /*  msc.setPointerCapture( event.pointerId );
    msc.addEventListener('pointerout', onPointerUp);
    msc.addEventListener('pointermove', onPointerMove);*/
    sl.addEventListener( 'pointerup', onSliderPointerUp );
    sl.addEventListener( 'pointermove', onSliderPointerMove );
    getCursorPosition(sl,event,slider_pointer);
    const slp_rect = slp.getBoundingClientRect();
    let slp_pos = ((slp_rect.right-slp_rect.left)/2);
    slp_pos = slp_pos/sl.clientWidth;
    console.log(slp_pos)

    slider_pointer.x = slider_pointer.x/sl.clientWidth;
    let difX = slider_pointer.x-slp_pos;
    slider_pointer.x = Math.max(0,Math.min(slider_ratio,slider_pointer.x));
    difX = Math.max(0,Math.min(slider_ratio,difX));
    for (let i = 0; i < tri_instance_meshes.length; i++){
        const m = tri_instance_meshes[i];
        m.position.x=m.userData.cachedXPos-difX*camera_size/1.23;
    }
    slp.style.transform = `translateX(${difX*100/(1-slider_ratio)}%)`;
    
    console.log(slider_pointer)
}
function onSliderPointerUp( event ) {
    sl.releasePointerCapture( event.pointerId );
    sl.removeEventListener('pointermove', onSliderPointerMove);
    sl.removeEventListener('pointerup', onSliderPointerUp);
    //msc.removeEventListener('pointerout', onPointerUp);
}
function onSliderPointerMove( event ) {
    getCursorPosition(canvas,event,slider_pointer);
    const slp_rect = slp.getBoundingClientRect();
    let slp_pos = ((slp_rect.right-slp_rect.left)/2);
    slp_pos = slp_pos/sl.clientWidth;
    console.log(slp_pos)
    
    slider_pointer.x = slider_pointer.x/sl.clientWidth;
    let difX = slider_pointer.x-slp_pos;
    slider_pointer.x = Math.max(0,Math.min(slider_ratio,slider_pointer.x));
    difX = Math.max(0,Math.min(slider_ratio,difX));
    for (let i = 0; i < tri_instance_meshes.length; i++){
        const m = tri_instance_meshes[i];
        m.position.x=m.userData.cachedXPos-difX*camera_size/1.23;
    }
    slp.style.transform = `translateX(${difX*100/(1-slider_ratio)}%)`;
    
}
function touchHandler( event ) {
    if(event.touches.length > 1){
        //the event is multi-touch
        //you can then prevent the behavior
        event.preventDefault()
    }
}
function modifyShader ( material, uniforms,...args ) {

    if ( material.utils_modified ) return;
    material.utils_modified = true;
    material.onBeforeCompile = ( shader ) => {

        if ( shader._utils_modified ) return;
        shader._utils_modified = true;

        Object.assign( shader.uniforms, uniforms );

        const vertexShader = `
				attribute int instanceID;
				/*attribute int flowID;*/
				attribute int melodyInstrumentID;
				uniform sampler2D spineTexture;
				
				uniform float pathOffset;
				uniform float pathSegment;
				uniform float spineOffset;
				uniform float spineLength;
				//uniform int melodyInstrumentID[40];
				uniform float flowData[16];
				uniform vec3 colors[5];
				uniform int picked;
				
				uniform int flow;
				uniform float time;
uint hash( uint x ) {
					x += ( x << 10u );
					x ^= ( x >>  6u );
					x += ( x <<  3u );
					x ^= ( x >> 11u );
					x += ( x << 15u );
					return x;
				}
				float floatConstruct( uint m ) {
					const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
					const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
				
					m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
					m |= ieeeOne;                          // Add fractional part to 1.0
				
					float  f = uintBitsToFloat( m );       // Range [1:2]
					return f - 1.0;                        // Range [0:1]
				}
				
				float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
				

		${shader.vertexShader}
		`
       
            // shader override
                        .replace(
                "#include <begin_vertex>",
                `
                
					vec3 transformed = vec3( position );
					float a = time*2.-1.;
					if (picked==instanceID) 
					    transformed*=0.2*a*a+0.8;
                    #ifdef USE_ALPHAHASH
                        vPosition = vec3( position );
                    #endif
						` )
            
            
            .replace('#include <color_vertex>',
                `
				
				int r_n = melodyInstrumentID;
				if (r_n==4)
					{
						vColor.xyz = vec3(0.2);
						vColor.x = mix(vColor.x,0.45,0.9);
						r_n = 2;
					}
					else
						vColor.xyz = vec3(1);
				#if defined( USE_MAP )
				vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
				vMapUv/=2.;
				vMapUv.xy += nUv;
				#endif
	
	`);

        shader.vertexShader = vertexShader;

    };
}

function modifyKnobShader ( material, uniforms,...args ) {

    if ( material.utils_modified ) return;
    material.utils_modified = true;
    material.onBeforeCompile = ( shader ) => {

        if ( shader._utils_modified ) return;
        shader._utils_modified = true;

        Object.assign( shader.uniforms, uniforms );

        const vertexShader = `
				attribute int instanceID;
				/*attribute int flowID;*/
				attribute int melodyInstrumentID;
				uniform sampler2D spineTexture;
				
				uniform float pathOffset;
				uniform float pathSegment;
				uniform float spineOffset;
				uniform float spineLength;
				//uniform int melodyInstrumentID[40];
				uniform float flowData[16];
				uniform mat4 iMatrix[40];
				uniform vec3 colors[5];
				
				
				uniform int flow;
				uniform float time;
uint hash( uint x ) {
					x += ( x << 10u );
					x ^= ( x >>  6u );
					x += ( x <<  3u );
					x ^= ( x >> 11u );
					x += ( x << 15u );
					return x;
				}
				float floatConstruct( uint m ) {
					const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
					const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
				
					m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
					m |= ieeeOne;                          // Add fractional part to 1.0
				
					float  f = uintBitsToFloat( m );       // Range [1:2]
					return f - 1.0;                        // Range [0:1]
				}
				
				float random( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
				

		${shader.vertexShader}
		`
            // chunk import moved in front of modified shader below
            .replace( '#include <beginnormal_vertex>', '' )

            // vec3 transformedNormal declaration overriden below
            .replace( '#include <defaultnormal_vertex>', '' )

            // vec3 transformed declaration overriden below
            .replace( '#include <begin_vertex>', '' )

            // shader override
            .replace(
                /void\s*main\s*\(\)\s*\{/,
                `
				mat3 getRotZ(float angle){
				 float si = sin(angle);
					  float co = cos(angle);
					  return mat3(
						co, si, 0.0,
						-si, co, 0.0,
						0.0, 0.0, 1.0
					  );
				}
				void main() {
					#include <beginnormal_vertex>
					vec3 pos = position.xyz;
					
					mat4 im = iMatrix[instanceID];
					
					float r = random(float(instanceID));
					float angle= 1.;
					
					//rotate in at origin, then translate to world 
					vec4 worldPos = modelMatrix* im * vec4( pos, 1.);
					
					//yz - towards center direction
					//worldPos.yz+=worldPos.yz*sin(time*10.+2.*random(float(instanceID)))*0.05;

					bool bend = flow > 0;
					float xWeight = bend ? 0. : 1.;
					
					vec3 transformed = worldPos.xyz;
					//transformed = worldPos.xyz;
					vec3 transformedNormal =  objectNormal;
				
					mat3 im_rot = mat3( im );
					transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
					transformedNormal = im_rot *transformedNormal;
						
					transformedNormal = normalMatrix * objectNormal;
					
						` ).replace(
                '#include <project_vertex>',
                `vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
							gl_Position = projectionMatrix * mvPosition;`
            )
            .replace('#include <color_vertex>',
                `
				
				int r_n = melodyInstrumentID;
				vColor.xyz = colors[r_n];
				/*
				if (r_n==4)
					{
						vColor.xyz = vec3(0.2);
						vColor.x = mix(vColor.x,0.45,sin(time*10.+2.*random(float(1)))*0.5+0.5);
						r_n = 2;
					}
					else
						vColor.xyz = vec3(1);
				#if defined( USE_MAP )
				vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
				vMapUv/=2.;
				vMapUv.xy += nUv;
				#endif*/
	
	`);

        shader.vertexShader = vertexShader;

    };
}
function assignAttribute(mesh, name, count,stride){
    mesh.setAttribute(name.toString(), new InstancedBufferAttribute(new Int32Array(count), stride));
    mesh.attributes[name.toString()].setUsage(DynamicDrawUsage);
    mesh.attributes[name.toString()].needsUpdate = true;
}
let createInstancedMeshFrom = (geometry, matrices,beat)=> {
    const mesh = new InstancedMesh(
        geometry.geometry.clone(),
        geometry.material.clone(),
        matrices.length //because we store matrices as uniforms.
    );
    mesh.name = geometry.name;
    mesh.material.vertexColors = true;
    mesh.frustumCulled = false;
    //mesh.count =40;
    assignAttribute(mesh.geometry, 'instanceID', 40,1 );
    assignAttribute(mesh.geometry, 'melodyInstrumentID', 40,1 );

    for (let i = 0; i < matrices.length; i++) {
        mesh.geometry.attributes.instanceID.array[i] = i+beat*40;
        mesh.setMatrixAt(i,matrices[i]);
        //fill first beat melody ids;
        mesh.geometry.attributes.melodyInstrumentID.array[i]= uniforms.melodyInstrumentID.value[i];
    }
    mesh.geometry.attributes.instanceID.needsUpdate = true;
    mesh.geometry.attributes.melodyInstrumentID.needsUpdate = true;
    
    uniforms.picked = {value:-1};

    //const un= {picked:mesh.userData.picked.value};

    //Object.assign( un, uniforms );
    modifyShader(mesh.material,uniforms);
    /*   assignAttribute(mesh.geometry, 'flowID', cellCount*instance_count,1 );
       assignAttribute(mesh.geometry, 'melodyInstrumentID', cellCount*instance_count,1 );
   */
    return mesh;
};
let createVariantMeshFrom = (geometry, matrices)=> {
    const mesh = new InstancedMesh(
        geometry.geometry.clone(),
        geometry.material.clone(),
        matrices.length //because we store matrices as uniforms.
    );
    mesh.name = geometry.name;
    mesh.material.vertexColors = true;
    //mesh.frustumCulled = false;
    assignAttribute(mesh.geometry, 'instanceID', matrices.length,1 );
    assignAttribute(mesh.geometry, 'melodyInstrumentID', matrices.length,1 );
    for (let i = 0; i < matrices.length; i++) {
        //offset id by -40 to not overlap with melody ids when using pick effect
        mesh.geometry.attributes.instanceID.array[i] = i-40;
        mesh.setMatrixAt(i,matrices[i]);
        //fill first beat melody ids;
        mesh.geometry.attributes.melodyInstrumentID.array[i]= (i+4)%4;
    }
    mesh.instanceMatrix.needsUpdate=true;
    mesh.geometry.attributes.instanceID.needsUpdate = true;
    mesh.geometry.attributes.melodyInstrumentID.needsUpdate = true;
    modifyShader(mesh.material,uniforms);
    /*   assignAttribute(mesh.geometry, 'flowID', cellCount*instance_count,1 );
       assignAttribute(mesh.geometry, 'melodyInstrumentID', cellCount*instance_count,1 );
   */
    return mesh;
};
let createKnobMesh = (geometry, matrices)=> {
    const mesh = new InstancedMesh(
        geometry.geometry.clone(),
        geometry.material.clone(),
        0 //because we store matrices as uniforms.
    );
    mesh.name = geometry.name;
    mesh.material.vertexColors = true;
    mesh.frustumCulled = false;
    
    ///at start
    mesh.count =0;
    assignAttribute(mesh.geometry, 'instanceID', matrices.length,1 );
    assignAttribute(mesh.geometry, 'melodyInstrumentID', matrices.length,1 );
    const un = {iMatrix : {value: new Array(matrices.length * 16).fill(0)},colors:{ value: [ 0.05,0.2,0.6, 0.1,0.6,0.3, 0.3,0.3,0.45, 0.7,0.1,0.1, 0.05,0.05,0.05]}};
    for (let i = 0; i < matrices.length; i++) {
        matrices[i].toArray(un.iMatrix.value,i*16);
        mesh.geometry.attributes.instanceID.array[i] = i;
       // mesh.setMatrixAt(i,matrices[i]);
        //fill first beat melody ids;
        mesh.geometry.attributes.melodyInstrumentID.array[i]= (i+4)%4;
    }
    mesh.geometry.attributes.instanceID.needsUpdate = true;
    mesh.geometry.attributes.melodyInstrumentID.needsUpdate = true;
        modifyKnobShader(mesh.material, un);
    /*   assignAttribute(mesh.geometry, 'flowID', cellCount*instance_count,1 );
       assignAttribute(mesh.geometry, 'melodyInstrumentID', cellCount*instance_count,1 );
   */
    return mesh;
};
export function initUI(ui_pre_scene,ecs_world) {
    world = ecs_world;
    uniforms.melodyInstrumentID= {value:ecs_world.AudioSystem.melodyInstrumentID};
    uniforms.time = {value: 0};
    let body_matrices = [];
    let to_parent ;
    let TO_matrices=[];
    let to_body_sheet;
    let knob_matrices = [];
    let mixer_matrix;
    
    let material = new MeshBasicMaterial( { color: 0x00ff00 } );
    ui_pre_scene.traverse(function (child)
    {
        if (child.name.includes("TO_SELF"))
            to_body= child;
        else if (child.name.includes("TO1"))
            knob_meshes.push(child);
        //pick parent, move it, loops through child and select matrices
        if (child.name.includes("Node")){
            to_parent = child;
        }
        if (child.parent !== null && child.parent.name.includes("sheet_positions"))
            
        if (child.name.includes("TO_")){
            
            if (child.name.includes("TO_position1"))
                to_body_sheet = child;
            //child.rotateZ(3.14);
            child.updateMatrixWorld();
            TO_matrices.push(child.matrixWorld.clone());
        }
        if (child.name.includes("knob_")){
            child.updateMatrixWorld();
            knob_matrices.push(child.matrixWorld);
        }
        
        if (child.name.includes("mixer")){
            child.updateMatrixWorld();
            
            mixer_matrix = child;
            mixer_matrix.userData.skipInteraction = true;
            //mixer_matrix.rotateX();
            //mixer_matrix.rotateX(3.14);
            //mixer_matrix.rotateZ(3.14);
        }
        
        if (child.name.includes("bezier")){
            child.updateMatrixWorld();
            wires.push(child);
        }
    });
    
    to_parent.children.forEach((child)=>{
        child.updateMatrixWorld();

        child.matrixWorld.elements[14] = +child.name.slice(-(child.name.length - 3));
        body_matrices.push(child.matrixWorld);

        child.material = new MeshPhongMaterial({color: 0xffffff});

    });
    body_matrices.sort((a,b)=> {
        if (a.elements[14]>b.elements[14]) return 1;
        else if( a.elements[14]<b.elements[14]) return -1;
        else if (a.elements[14]===b.elements[14]) return 0;
    })
    
    body_matrices.forEach((m)=>{
        m.elements[14]=0});

    /*wires.sort((a,b)=> {
        
        if (a.elements[14]>b.elements[14]) return 1;
        else if( a.elements[14]<b.elements[14]) return -1;
        else if (a.elements[14]===b.elements[14]) return 0;
    })*/

    to_body.material = to_body.material.clone();
    to_body.material.emissivemap = undefined;
    to_body.material.emissiveColor = {r:0,g:0,b:0};
    to_body.material.emissiveIntensity = 0.0;
    to_body.material.vertexColors = true;
    to_body.geometry.computeBoundingBox() ;
    var geo = new PlaneGeometry(camera_size*2, camera_size*2, 2, 2);
    const print = knob_meshes[0].material.map.clone();

    print.wrapS = RepeatWrapping;
    print.wrapT = RepeatWrapping;
    print.repeat = new Vector2(3.5,3.5);

    const c_offset=4    ;
    var mat = new MeshBasicMaterial({ color: new Color(colors[c_offset*3+0],colors[c_offset*3+1],colors[c_offset*3+2]).multiply(new Color(0.5,0.5,.5)),map:print });
    
    var plane = new Mesh(geo, mat);
    plane.userData.skipInteraction=true;
    plane.position.z=-1    ;

    scene.add(plane);
    
    scene.add(new AmbientLight(0xffffff,0.5));
    const dir_light = new DirectionalLight(0xffffff, 2);
    dir_light.castShadow=true;
    dir_light.name = "DIRLIGHT";
    dir_light.shadow.mapSize.width = 512; // default
    dir_light.shadow.mapSize.height = 512; // default
    dir_light.shadow.camera.near = 0; // default
    dir_light.shadow.camera.far = 1000; // default
    dir_light.shadow.camera.position.copy(camera.position);
    dir_light.position.set(50,50,50);
    scene.add(dir_light);
        
    const tri_instanced_mesh = createInstancedMeshFrom(to_body, body_matrices,0);
    tri_instanced_mesh.position.set(-camera_size*canvas_aspect/2+0.75,camera_size/2+0.35);
    tri_instanced_mesh.setRotationFromAxisAngle(new Vector3(0,0,1),-3.14/2.)
    tri_instanced_mesh.userData.beat = 0;
    tri_instanced_mesh.userData.cachedXPos = tri_instanced_mesh.position.x;
    tri_instance_meshes.push(tri_instanced_mesh);
    scene.add(tri_instanced_mesh );

    
    for (let i=1; i<ecs_world.GlobalParameters.barSize;i++ ){
        
        const tri_ins_mesh = createInstancedMeshFrom(to_body, body_matrices,i);
        tri_ins_mesh.position.set(-camera_size*canvas_aspect/2+0.75+i,camera_size/2+0.35,0);
        tri_ins_mesh.setRotationFromAxisAngle(new Vector3(0,0,1),-3.14/2.)
        tri_ins_mesh.userData.beat = i;
        tri_ins_mesh.geometry.attributes.melodyInstrumentID.needsUpdate = true;
        tri_ins_mesh.userData.cachedXPos = tri_ins_mesh.position.x;
        tri_instance_meshes.push(tri_ins_mesh);
        scene.add(tri_ins_mesh );
        
        for (let j = 0; j < 40; j++) {
            //fill rest beat melody ids;
            //iim.geometry.attributes.melodyInstrumentID=iim.geometry.attributes.melodyInstrumentID.clone();
            tri_ins_mesh.geometry.attributes.melodyInstrumentID.array[j]= uniforms.melodyInstrumentID.value[i*40+j];
        }
    }
    

    let max_tri_ident_x = -camera_size*canvas_aspect/2+0.75+ecs_world.GlobalParameters.barSize-1;
    max_tri_ident_x = 2.;
    let scale = 2.5;
    const tri_variant_matrices = new Array(4).fill(0).map((e,i)=> {
        const m  =new Matrix4();
        //m.compose(new Vector3((max_tri_ident_x+0.35*scale),camera_size/2-0.25*scale-i*0.25*scale,0),new Quaternion().setFromAxisAngle(new Vector3(0,0,1),3.14/2+i*3.14),new Vector3(scale,scale,scale));
        m.compose(new Vector3(-camera_size*canvas_aspect/2+0.25*scale+i*0.27*scale,-camera_size/2+1.5 ,0),new Quaternion().setFromAxisAngle(new Vector3(0,0,1),i*3.14),new Vector3(scale,scale,scale));
        return m;
        
    })
    const max_tri_ident = max_tri_ident_x+0.25*scale;
    const instruments_container = new Object3D();
    to_body_sheet.material=to_body.material.clone();
    const tri_variants = createVariantMeshFrom(to_body_sheet, TO_matrices);
  /*  const tri_variants = new InstancedMesh(to_body_sheet, to_body_sheet.material,4);
    tri_variants.setMatrixAt(0,TO_matrices[0]);
    tri_variants.setMatrixAt(1,TO_matrices[1]);
    tri_variants.setMatrixAt(2,TO_matrices[2]);
    tri_variants.setMatrixAt(3,TO_matrices[3]);*/
    tri_variants.receiveShadow = true;
    //tri_variants.customDepthMaterial = new MeshDepthMaterial();
 /*   tri_variants.customDepthMaterial.onBeforeCompile = (shader)=>{
        
    };*/
    tri_variants.name = to_body.name;
    tri_variants.userData.beat = -1;
    instruments_container.add(tri_variants);

    mixer_matrix.castShadow = false;
    instruments_container.add(mixer_matrix)
    const w0 = wires[0];
    wires[0]=wires[1];
    wires[1]=w0;
    for(let i=0;i<wires.length;i++){
        wires[i].visible = false;
        wires[i].userData.skipInteraction= true;
        wires[i].castShadow = true;
        instruments_container.add(wires[i])
    }
    const offset = 3;
    const k_scale = 5;
    
    
    for(let i=0;i<knob_matrices.length;i++){
        const v = new Vector3().setFromMatrixPosition(knob_matrices[knob_matrices.length-i-1]);
        const knob_index = Math.floor(Math.random()*(knob_meshes.length-1))+1;
        console.log(knob_meshes.length)
        console.log(knob_index)
        const k= knob_meshes[knob_index].clone();
        k.material = knob_meshes[knob_index].material.clone();
        k.rotateX(3.14 / 2);
        k.position.copy(v);
        k.material.color = new Color(colors[(i*3+offset)%(colors.length-3)], colors[(i*3+1+offset)%(colors.length-3)], colors[(i*3+2+offset)%(colors.length-3)]);
        k.userData.knob = i+1;
        k.userData.color = i+offset;
        k.castShadow = true;
        k.recieveShadow=false;
        const s = 0.8;
        k.scale.set(s,s,s);
        k.updateMatrixWorld();
        //k.visible = false;
        mixer_knobs.push(k);
        instruments_container.add(k);
    }
    instruments_container.castShadow=true;
    instruments_container.receiveShadow=true;
    const ss = camera_size*canvas_aspect/1.85;
    
    instruments_container.scale.set(ss,ss,ss);
    //
    let containerBBxes =[];
    let containerBB = new Box3();
    instruments_container.traverse((e)=>
    {
        if (e.geometry) {
            const box = new Box3();
            e.geometry.computeBoundingBox()
            box.copy( e.geometry.boundingBox ).applyMatrix4( e.matrixWorld );
            containerBBxes.push(box);
        }
    });
    containerBB.setFromObject(instruments_container);
    const bbs = new Vector3();
    const bbc = new Vector3();
    const cP = new Vector3();
    containerBB.getSize(bbs)
    containerBB.getCenter(bbc)
    //const helper = new Box3Helper( containerBB, 0xffff00 );
    //instruments_container.add( helper );
    instruments_container.position.y=-camera_size/2-bbc.y+bbs.y/2+ss/8;
    //instruments_container.position.x+=-camera_size*canvas_aspect/2+ss/1.4;
    instruments_container.position.x+=-camera_size*canvas_aspect/2-bbc.x+bbs.x/2;
    scene.add(instruments_container);
    mixer_matrix.receiveShadow=true;
  /*  for(let i=0;i<knobs.length;i++)
    {
        knobs[i].scale.set(k_scale, k_scale, k_scale);
        knobs[i].rotateX(3.14 / 2);
        knobs[i].material.color = new Color(colors[i*3+offset], colors[i*3+1+offset], colors[i*3+2+offset]);
        knobs[i].position.x = max_tri_ident-camera_size*canvas_aspect/2+ 0.2 * k_scale+i*0.15*k_scale;
        knobs[i].position.y = -camera_size/2+1.5;
        knobs[i].userData.knob = i+1;
        knobs[i].userData.color = i+offset;
        
        scene.add(knobs[i]);
    }*/
    //scene.add(knob_variants1);
    //scene.add(knob_variants2);
    renderer.render(scene,camera);
}
export function renderUI(){
    if (!ui_visible || sheet_song_list.style.display!== "none") return;
    
    uiInputSystem.update();
    //scene.getObjectByName("DIRLIGHT").rotation.set(,0,0);
    if (pointer.x !== -2) {
        //console.log("IN script pointer: " + pointer.x + ", " + pointer.y);
        //console.log("IN INPUT pointer: " + is.current_input.pointerX + ", " + is.current_input.pointerY);
    }
    //if (is.current_input.diffX >0) 
    if (rotationActive !== undefined) {
        if (selected_instrument !== undefined && selected_instrument !==4) {
            const instrument = world.AudioSystem.instruments[selected_instrument];
            //instrument.parameters[instrument.parameterNames[-selected_id-1]] += is.current_input.diffY * 100;
            //instrument.parameters[instrument.parameterNames[-selected_id-1]] = Math.floor(instrument.parameters[instrument.parameterNames[-selected_id-1]]*100)/100;

            const parameterName = instrument.parameterNames[-selected_id-1];
            rotationActive.userData.cachedRotation = rotationActive.userData.cachedRotation || instrument.getDefault01(parameterName);
            rotationActive.userData.cachedRotation+=-uiInputSystem.current_input.diffY*10.;
            rotationActive.userData.cachedRotation = Math.min(Math.max(rotationActive.userData.cachedRotation,0),1);

            if (rotationActive.userData.parameter === undefined)
                rotationActive.userData.parameter = {name:parameterName,value:instrument.getParamValueFromNormRange(parameterName,rotationActive.userData.cachedRotation)};
            else {
                rotationActive.userData.parameter.name = parameterName;
                rotationActive.userData.parameter.value = instrument.getParamValueFromNormRange(parameterName, rotationActive.userData.cachedRotation);
            }
            changeSynthParamIndividual(selected_instrument,parameterName,rotationActive.userData.parameter.value);
            rotationActive.rotation.set(0,0,-rotationActive.userData.cachedRotation*3.14*2);
        }
        //rotationActive.rotateZ(is.current_input.diffY*10.);
    }
    if (selected_instrument === undefined){
        sheet_time +=0.02;
        mixer_knobs.forEach((e,i)=>{
            const val = Math.sin(sheet_time*1+i)*6.28;
            console.log(val);
            e.rotation.set(0,0,val);
        })
    }
    raycaster.setFromCamera(pointer,camera);

    if (uniforms.time.value>0)
        uniforms.time.value-=0.1;
    else
        uniforms.time.value = 0;
    const intersects = raycaster.intersectObjects( scene.children );
    renderer.render(scene,camera);
    if (intersects.length !== 0) {
        let interactionable = undefined;
        for (let i =0;i<intersects.length;i++){
            if (intersects[i].object.userData.skipInteraction) continue;
            interactionable = intersects[i];
            break;
        }
        if (interactionable === undefined) return;
        
        //select tri instrument
        if (interactionable.object.userData.beat ===-1){
            const current_instrument  = (interactionable.object.geometry.attributes.melodyInstrumentID.array[interactionable.instanceId])%5;
            
            if (selected_instrument !== undefined)
                wires[selected_instrument].visible = false;
            wires[current_instrument].visible = true;
            selected_instrument =current_instrument;
            
            const instrument = world.AudioSystem.instruments[selected_instrument];
            //console.log(instrument);
            //console.log(instrument.parameterNames);
            mixer_knobs.forEach((e,i)=> {
                const inRange = i < instrument.parameterNames.length;
                e.visible = inRange;
                if (inRange){
                    e.userData.cachedRotation = instrument.getDefault01(instrument.parameterNames[i]);
                    e.rotation.set(0,0,-e.userData.cachedRotation*3.14*2);
                }                
            });
            console.log("SETCACHEDROTATION")
            uniforms.time.value=1;
            uniforms.picked.value=interactionable.instanceId+interactionable.object.userData.beat*40;
            pointer.x = pointer.y = -2;

            changeSynthInfo(selected_instrument);
            return;
        }
        //set effects 
        if (interactionable.object.userData.knob !==undefined){
            selected_id  = -interactionable.object.userData.knob;
            const c= selected_color = interactionable.object.userData.color = Math.floor(Math.random()*4);
            //console.log("KNOBS " + c)
            interactionable.object.material.color = new Color(colors[c*3],colors[c*3+1],colors[c*3+2]);
            rotationActive = interactionable.object;
            pointer.x = pointer.y = -2;
            return;
        }

        const beat = interactionable.object.userData.beat;
        const instance = interactionable.instanceId;

        uniforms.time.value=1;
        uniforms.picked.value = interactionable.instanceId+beat*40;
        if (selected_instrument === undefined) {
            world.AudioSystem.playEmptyInstrument();
            pointer.x = pointer.y = -2;
            return;
        }

        let pitch = 0;
        
        if (first_row.includes(instance))
            pitch = first_row.length-1-first_row.indexOf(instance);
        else if (second_row.includes(instance))
            pitch = second_row.length-1-second_row.indexOf(instance);
        else
            console.log("there is no instance with given id");
        //setting effect on empty tri
        let id_val = interactionable.object.geometry.attributes.melodyInstrumentID.array[instance];
/*        if (selected_id <0 )
        {
            pointer.x = pointer.y = -2;
            console.log(id_val)
            if (id_val ===4) {
                world.AudioSystem.playEmptyInstrument();
                pointer.x = pointer.y = -2;
                return;
            }
            console.log("setting effect on tri");
            const note = world.AudioSystem.addEffectOnPosition(-selected_id-1,beat,instance,1.,selected_color);
            updateUIKnobs(beat,instance,-selected_id-1);
            world.AudioSystem.playInstrumentAt(note);
            world.Curve.geometryNeedsUpdate = true;
            return;
        }*/
        id_val = id_val === selected_instrument ? 4 : selected_instrument;
        interactionable.object.geometry.attributes.melodyInstrumentID.array[instance] = id_val;
        uniforms.melodyInstrumentID.value[beat*40+instance] = id_val;

        const note = world.AudioSystem.addInstrumentOnPosition(id_val,beat,instance,pitch);
        
        if (id_val !== 4) {
            
            world.AudioSystem.playInstrumentAt(note)
        };
        world.Curve.geometryNeedsUpdate = true;
        for (let j = 0; j < 40; j++) {
            //fill beat melody ids;
          //  interactionable.object.geometry.attributes.melodyInstrumentID.array[j]= uniforms.melodyInstrumentID.value[beat*40+j];
        }
        interactionable.object.geometry.attributes.melodyInstrumentID.needsUpdate = true;
        pointer.x = pointer.y = -2;
    }
    
}
function reset_knob_count(){
    knob_effect_meshes.forEach((e)=>e.forEach((e)=>e.count=0));
}
function updateUIKnobs(beat,instance){
    console.log(world.AudioSystem.activeEffectID);
    reset_knob_count();
    for (let i=0;i<world.AudioSystem.activeEffectID.length;i++){
        const beat = world.AudioSystem.activeEffectID[i].beat;
        const id_on_beat = world.AudioSystem.activeEffectID[i].id_on_beat;
        const color = world.AudioSystem.activeEffectID[i].color;
        const effect = world.AudioSystem.activeEffectID[i].effect;
        
        //effect = [0,2];
        const obj = knob_effect_meshes[effect][beat];
        console.log(beat)
            obj.geometry.attributes.instanceID.array[obj.count] = id_on_beat;
            obj.geometry.attributes.instanceID.needsUpdate = true;

            obj.geometry.attributes.melodyInstrumentID.array[obj.count] = color;
            obj.geometry.attributes.melodyInstrumentID.needsUpdate = true;

            obj.count++;
        }
}
function placeElement(element,beat,id)
{

    // switch(element)
    //case (element.name === tri):
    // world.AudioSystem.addInstrumentOnPosition(element.id,beat,instance);
    // world.geometry.tri.updateGeometryAt(beat);

    //case (element.name === knob)
    // world.AudioSystem.addEffectOnPosition(element.id,beat,instance);
    // world.geometry.knob.updateGeometryAt(beat);

    //case(element.name === mixer)
    // world.AudioSystem.addMixerOnPosition(element.id,beat,instance);
    // world.geometry.mixer.updateGeometryAt(beat);

}
export function showSheetCanvas(flag){

    ui_visible = flag;
    if (flag) {
        canvas.style.display = "block";
        msc.style.display = "block";
        menu.style.display = "block";
        sheet_tooltips.style.display = "block";
        scale_div.style.display = "flex";
    } 
    else {
        msc.style.display = "none";
        canvas.style.display = "none";
        menu.style.display = "none";
        sheet_tooltips.style.display = "none";
        scale_div.style.display = "none";
    }
}
function toFixed(x) {
    if (Math.abs(x) < 1.0) {
        var e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10,e-1);
            x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
        }
    } else {
        var e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10,e);
            x += (new Array(e+1)).join('0');
        }
    }
    return x;
}
function changeSynthInfo(instrumentID){
    const instrument = world.AudioSystem.instruments[instrumentID]; 
    


    for(let b =0;b<params_list.children.length;b++){
        params_list.children[b].children[0].textContent ="            ";
        params_list.children[b].children[1].textContent ="   ";
    }

    Object.keys(instrument.parameters).forEach((p,index)=>
    {
        let paramValue;
        if (p === "waveform"){
            paramValue = modulationTypes[Math.floor(instrument.parameters[p].value)];
        }
        else if (p==="noiseType"){
            paramValue = noiseTypes[Math.floor(instrument.parameters[p].value)];
        }
        else {
            const displayed_val = instrument.parameters[p].value > 5? instrument.parameters[p].value.toFixed(0): instrument.parameters[p].value.toPrecision(2);
            paramValue = displayed_val;
        }

        params_list.children[index].children[0].textContent =p;
        params_list.children[index].children[1].textContent =paramValue;
    })
    synth_info.textContent=instrument.name;
}
function changeSynthParamIndividual(instrumentID,paramName,paramValue){
    const instrument = world.AudioSystem.instruments[instrumentID]; 
    
    
    Object.keys(instrument.parameters).forEach((p,index)=>
    {
        if (p !== paramName) return;
        
        if (p === "waveform"){
            paramValue = modulationTypes[Math.floor(paramValue)];
        }
        else if (p==="noiseType"){
            paramValue = noiseTypes[Math.floor(paramValue)];
        }
        else {
            const displayed_val = paramValue > 5? paramValue.toFixed(0): paramValue.toPrecision(2);
            paramValue = displayed_val;
        }

        params_list.children[index].children[0].textContent =p;
        params_list.children[index].children[1].textContent =paramValue;
    })
    synth_info.textContent=instrument.name;
}
export function updateAllInstumentUI(){
    for (let i=0;i<4;i++){
        changeSynthInfo(i);
    }
    
}
export function saveMelodyToDisk(songName){
    const data = world.AudioSystem.getMelodyData(songName);
    data.speed = world.GlobalParameters.speed;
    
    let jsonData = JSON.stringify(data);
    json_d= jsonData;
    download(jsonData, 'my_melody.txt', 'text/plain');
}
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
export function parseMelodyJSON(json,edit_mode=false){
    
    fetch(json)
        .then((response) => response.json())
        .then((json) => {
            const song_data = json
            
            //set melody
            world.AudioSystem.setMelodyFromJsonData(song_data,edit_mode);
            if (song_data.speed !== undefined) {
                world.GlobalParameters.speed = song_data.speed;
                world.camera.userData.speed = song_data.speed;
            }
            
            song_data.melody.forEach((e)=>{
                //world.AudioSystem.availableMelody[e.instrument].notes.push({beat:e.beat,id_on_beat:e.id_on_beat,pitch:e.pitch});
                
                //uniforms.melodyInstrumentID.value[e.beat*40+e.id_on_beat] = e.instrument;
                tri_instance_meshes[e.beat].geometry.attributes.melodyInstrumentID.array[e.id_on_beat] = e.instrument;
                //world.AudioSystem.addInstrumentOnPosition(e.instrument,e.beat,e.id_on_beat,e.pitch);
            })
            tri_instance_meshes.forEach((e)=> {
                e.geometry.attributes.melodyInstrumentID.needsUpdate = true
            });
            world.Curve.geometryNeedsUpdate = true;

            if (selected_instrument !== undefined && selected_instrument !==4)
                changeSynthInfo(selected_instrument);
        });
    //set instrument parameters
}
export function clearMusicSheet(json,edit_mode=false){

    tri_instance_meshes.forEach((mesh,index)=>{
        //world.AudioSystem.availableMelody[e.instrument].notes.push({beat:e.beat,id_on_beat:e.id_on_beat,pitch:e.pitch});
        for (let id_on_beat = 0; id_on_beat < 40; id_on_beat++) {
            mesh.geometry.attributes.melodyInstrumentID.array[id_on_beat] = uniforms.melodyInstrumentID.value[index*40+id_on_beat];
        }
        mesh.geometry.attributes.melodyInstrumentID.needsUpdate = true;
    });
}

export function showSheetSongList(flag) {
    let x = document.getElementById("sheet_songList");

    if (flag) {
        msc.removeEventListener('pointerdown', onPointerDown,false);
        x.style.display = "block";
        document.querySelectorAll('span') // get all elements you want
            .forEach( item => { // iterate over them and get every as "item"
                if(item.offsetWidth > 250){ // check if it's widthter than parent
                    console.log(item.offsetWidth)
                    console.log(item.textContent)
                    console.log(item.getAnimations()[0]);
                    item.animate({
                            transform: ['translateX(0px)', 'translateX(-'+(item.offsetWidth-250)+'px)']
                        },
                        {
                            duration: 2000,
                            iterations: Infinity,
                            direction: 'alternate',
                        })

                    // item.classList.add('scrolled') // if is, add him class to scroll
                }
            })
    } else {
        msc.addEventListener('pointerdown', onPointerDown,false);
        x.style.display = "none";
    }
}