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

const canvas = document.getElementById("howToPlayScreen");
const msc = document.getElementById("howToPlayContainer");
const first_row = [28,38,29,39,20,30,21,31,22,32,23,33,24,34,25,35,26,36,27,37];
const second_row = [18,17,16,13,12,11,10,8,7,6,5,3,4,2,9,14,15,1,0,19];
const colors= [ 0.05,0.2,0.6, 0.1,0.6,0.3, 0.5,0.5,0.65, 0.7,0.1,0.1, 0.05,0.05,0.05];
let json_d;
const scene = new Scene();
//scene.background = new Color(0,0,0,0);
//scene.alpha = true;
//scene.back

const camera_size = 2;
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
    msc.style.width=`${canvas.width}px`;
    msc.style.height=`${canvas.height}px`;
    camera = new OrthographicCamera(canvas_aspect*camera_size/-2,canvas_aspect*camera_size/2,camera_size/2,camera_size/-2,1,1000);

    //camera.position.y=-0.1;
    camera.position.z = 5;
    //camera.position.y = -2.5;
    camera.lookAt(0,0,0);
}
    
const slider_ratio = 1-canvas_aspect/0.804;    
document.getElementById('sheetMenu').style.width=`${canvas.width}px`;

//showSheetCanvas(false);

//create Renderer
let renderer = new WebGLRenderer( {canvas:canvas, antialias: true, alpha:true } );

renderer.setClearColor( 0x000000, 0 ); // the default
//renderer.shadowMap.enabled = true;
//renderer.shadowMap.type = PCFSoftShadowMap; // default THREE.PCFShadowMap


let to_body;
let electricity;
let hand;
let hand_container;
let bomb;

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
					    transformed+=transformed*sin(time*6.*3.14)*0.1;
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
        mesh.geometry.attributes.instanceID.array[i] = i;
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
function modifyBOMBShader( material, uniforms ) {

    if ( material.__ok ) return;
    material.__ok = true;
    material.vertexColors=true;
    material.onBeforeCompile = ( shader ) => {

        if ( shader.__htp_modified ) return;
        shader.__htp_modified = true;
        Object.assign( shader.uniforms, uniforms );
        const un = {
            bomb_colors:{ value: [ 1,1,1 , 1,1,0,   1,0,0]}}
        Object.assign( shader.uniforms, un );
        const vertexShader = `
			
			attribute uint _tube_id;
			uniform sampler2D spineTexture;
			uniform float pathOffset;
			uniform float pathSegment;
			uniform float spineOffset;
			uniform float spineLength;
			uniform int flow;
			uniform float time;
			uniform vec3 colors[4];
			uniform vec3 bomb_colors[3];
			//uniform mat4 iMatrix[40];
			//uniform float flowData[48];
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

				mat3 getRotX(float angle){
				
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
				
				vec3 n_pos = pos;
				
				n_pos.xyz+=objectNormal.xyz*sin(time*10.+pos.z*3.+float(_tube_id)*3.14*0.5)*0.05*float(_tube_id);
				vec4 worldPos = modelMatrix  * vec4(n_pos, 1.);
				
				
				vec3 transformed = worldPos.xyz;

				vec3 transformedNormal =  objectNormal;
				
				transformedNormal = normalMatrix * transformedNormal;
					
			` ).replace(
                '#include <project_vertex>',
                `vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`
            )
            .replace('#include <color_vertex>',
                `
				vColor.xyz = bomb_colors[_tube_id]*0.5;
				#if defined( USE_MAP )
                    
                    r_n=0.;
                    r_n_1=0.;
                    
                    vMapUv.xy*=1.;
                    
                    vMapUv.y += time/10.+float(_tube_id)*0.5;
                    //	if (_tube_id ==uint(0)) vMapUv.xy = vec2(1,1);

				#endif
	
	`);

        shader.vertexShader = vertexShader;
        /*
        const fragmentShader = `


    #define USE_COLOR_ALPHA 1
    ${shader.fragmentShader}
    `
            .replace('#include <color_fragment>',
                `
            #if defined( USE_COLOR_ALPHA )
                diffuseColor *= vColor;
                //diffuseColor.xyz = vec3(1,1,1);
                diffuseColor.w = vColor.w;
            #elif defined( USE_COLOR )
                diffuseColor.rgb *= vColor;
            #endif

`);
        shader.fragmentShader = fragmentShader;*/
    };


}
function modifyElectricityShader( material, uniforms, numberOfCurves = 1 ) {

    if ( material.__ok ) return;
    material.__ok = true;
    material.vertexColors = true;
    material.onBeforeCompile = ( shader ) => {

        if ( shader.__htp_modified ) return;
        shader.__htp_modified = true;

        Object.assign( shader.uniforms, uniforms );

        const vertexShader = `

			uniform sampler2D spineTexture;
			uniform float pathOffset;
			uniform float pathSegment;
			uniform float spineOffset;
			uniform float spineLength;
			uniform int flow;
			uniform float time;
			uniform vec3 colors[4];
			//uniform mat4 iMatrix[40];
			//uniform float flowData[48];
			
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
				vec2 SpriteSheetAnimationUV(vec2 uv, float size, float speed)
				{
					uv /= size;
					uv.x += floor(mod(time * speed, 1.0) * size) / size;
					uv.y -= 1./size;
					uv.y += (1. - floor(mod(time * speed / size, 1.0) * size) / size);
					return uv;
				}
				mat3 getRotX(float angle){
				
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
				
				vec4 worldPos = modelMatrix * vec4(pos, 1.);
				
				
				vec3 transformed = worldPos.xyz;

				vec3 transformedNormal =  objectNormal;
				
				transformedNormal = normalMatrix * transformedNormal;
					
			` ).replace(
                '#include <project_vertex>',
                `vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`
            )
            .replace('#include <color_vertex>',
                `
								
					vColor.xyz = vec3(2.,1.,0.9);
				
					vColor.xyz = vec3(100.);
				
				#if defined( USE_MAP )
				
				float r_n=0.;
				float r_n_1=0.;
				float swap = vMapUv.x;
				vMapUv.x = (vMapUv.y+r_n);
				vMapUv.y = (swap+r_n_1);
				
				vMapUv=SpriteSheetAnimationUV(vMapUv,3.,4.);
				//vMapUv.xy/=3.;
				//vMapUv.x+= mod(floor(time/3.),3.);
				//vMapUv.y+= mod(floor(mod(time,3.)),3.);
				//vMapUv=fract(vMapUv);
				//vMapUv.y -= time*2.;
				#endif
				//vColor.xyz = vec3(1,1,1);
	
	`);

        shader.vertexShader = vertexShader;
        const fragmentShader = shader.fragmentShader.replace("#include <opaque_fragment>",
            `
            	#ifdef OPAQUE
	diffuseColor.a = 1.0;
	#endif
	#ifdef USE_TRANSMISSION
	diffuseColor.a *= material.transmissionAlpha;
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.r);`);
        shader.fragmentShader=fragmentShader;
    };
}
function assignAttribute(mesh, name, count,stride){
    mesh.setAttribute(name.toString(), new InstancedBufferAttribute(new Int32Array(count), stride));
    mesh.attributes[name.toString()].setUsage(DynamicDrawUsage);
    mesh.attributes[name.toString()].needsUpdate = true;
}
export function initUI(ui_pre_scene,ecs_world) {
    world = ecs_world;
    uniforms.melodyInstrumentID= {value:ecs_world.AudioSystem.melodyInstrumentID};
    uniforms.time = {value: 1};

    uniforms.picked = {value:-1};
    
    let material = new MeshBasicMaterial( { color: 0x00ff00 } );
    ui_pre_scene.traverse(function (child)
    {
        if (child.name.includes("TO_SELF"))
            to_body= child;
        else if (child.name.includes("ELECTRICITY"))
            electricity=(child);        
        else if (child.name.includes("BOMB"))
            bomb=(child);        
        //else if (child.name.includes("HAND"))
          //  hand= (child);
    });
    
    to_body.material = to_body.material.clone();
    to_body.material.emissivemap = undefined;
    to_body.material.emissiveColor = {r:0,g:0,b:0};
    to_body.material.emissiveIntensity = 0.0;
    to_body.material.vertexColors = true;
    to_body.geometry.computeBoundingBox() ;
    let scale = 0.36;
    const tri_variant_matrices = new Array(4).fill(0).map((e,i)=> {
        const m  =new Matrix4();
        //m.compose(new Vector3((max_tri_ident_x+0.35*scale),camera_size/2-0.25*scale-i*0.25*scale,0),new Quaternion().setFromAxisAngle(new Vector3(0,0,1),3.14/2+i*3.14),new Vector3(scale,scale,scale));
        m.compose(new Vector3(-camera_size*canvas_aspect/2+camera_size*canvas_aspect*0.25+i/6*camera_size*canvas_aspect,0 ,0),new Quaternion().setFromAxisAngle(new Vector3(0,0,1),i*3.14),new Vector3(scale,scale,scale));
        return m;

    })
    const tri_variants = createVariantMeshFrom(to_body,tri_variant_matrices);
    tri_variants.rotateX(0);
    tri_variants.position.y=-camera_size/3.5;
    scene.add(tri_variants);
    var geo = new PlaneGeometry(camera_size*2, camera_size*2, 2, 2);
    const c_offset=4    ;
    var mat = new MeshBasicMaterial({ color: new Color(colors[c_offset*3+0],colors[c_offset*3+1],colors[c_offset*3+2]).multiply(new Color(0.5,0.5,.5)) });
    
    var plane = new Mesh(geo, mat);
    plane.userData.skipInteraction=true;
    plane.position.z=-1    ;
    
    //scene.add(plane);
    
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
    
    //scene.add(electricity);
    const prev_b_mat = bomb.material;
    //bomb.material = new MeshBasicMaterial();
    //MeshBasicMaterial.prototype.copy.call( bomb.material, prev_b_mat );
    modifyBOMBShader(bomb.material,uniforms);
    bomb.scale.set(0.35,0.35,0.35);
    bomb.position.set(0,camera_size/2-0.65,0);
    scene.add(bomb);
    const prev_el_mat = electricity.material; 
    //electricity.material = new MeshBasicMaterial();
    //MeshBasicMaterial.prototype.copy.call( electricity.material, prev_el_mat );
    //electricity.material.roughness = 1;
    
    modifyElectricityShader(electricity.material,uniforms);
    electricity.scale.set(0.35,0.35,0.35);
    //electricity.rotateZ(3.14/2);
    //electricity.rotateY(3.14/2);
    //electricity.rotateX(3.14/2);
    electricity.position.set(0,camera_size/2-0.65,0);
    scene.add(electricity);
    
    //hand.getObjectByName("lowerarm_l").scale.set(100,100,100);
    hand_container = new Object3D();
    hand_container.add(world.hand);

    //world.hand.position.set(0,0,0)
    //hand_container.scale.set(5,5,5);
    //world.hand.scale.set(1,1,1);
    hand_container.name = "HAND_CONTAINER";
    hand_container.position.set(-camera_size*canvas_aspect/2,camera_size/2-0.65,2);
    //hand.position.x+=4;
    hand_container.rotateX(-3.14);
    //hand_container.rotateZ(-3.14/2);
    hand_container.rotateY(-3.14/2);
    //world.hand.children[0].isSkinnedMesh=false;

    //hand.position.y+=4;

    //hand.position.set(0,0,0);
    //hand.detach();
    scene.add(hand_container);
    showHowToPlayScreen(false);
    renderer.render(scene,camera);
}
let fly_timer=0;
let timer = -1;

const falling_fingers=[];
const q = new Quaternion;
const v = new Vector3;
const c = new Color;
const c1 = new Color;
let remFingerFlag = false;
let TriinstanceSin = 1;
let enemy_flag = false;
const removeFingerSystem = (world) => {
    if (timer<0 && world.hand.userData.removeFinger === true && world.fingersAlive > 0) {
        world.hand.userData.removeFinger= false;

        world.AudioSystem.playEmptyInstrument();

        world.hand.children[0].material.color.set(1,0,0);
        timer =0;
        const f_bone = world.hand.userData.fingers_bones[world.fingersAlive-1];
        f_bone.scale.set(0, 0, 0);
        const finger =  world.hand.userData.fingers[world.fingersAlive-1];
        finger.bindMode = "detached";
        falling_fingers.push(finger);

        finger.visible = true;
        //finger.rotateX(-Math.PI/2);
        finger.userData.fallDirection = v.set(Math.random()*2-1,Math.random()*2-1,-Math.random()*0.5).normalize().clone().multiplyScalar(20.);
        world.fingersAlive--;
    }
    if(timer>=0){

        world.hand.children[0].material.color.lerpColors(c.set(1,0,0),c1.copy(world.hand.children[0].material.userData.default_color),Math.sin(timer*20)*0.5+0.5);
        timer+=world.time.UIdelta;
        if (timer>1){
            timer=-1;
            world.hand.userData.removeFinger = false;
            world.hand.children[0].material.color.copy(world.hand.children[0].material.userData.default_color);
        }
    }
    if (falling_fingers.length >0){
        falling_fingers.forEach((finger,i)=>{
            finger.rotateX(0.1);
            finger.rotateZ(0.1);

            finger.position.add(finger.userData.fallDirection.clone().multiplyScalar(world.time.UIdelta));
            finger.scale.subScalar(world.time.UIdelta/2.);
            if (finger.scale.x<0.01){
                finger.visible = false;
                world.scene.remove(finger);
                falling_fingers.splice(i,1);
            }
        })
    }

    return world
}
function setWeight( action, weight ) {

    action.enabled = true;
    action.setEffectiveTimeScale( 1 );
    action.setEffectiveWeight( weight );

}
export function renderUI(){
    if (!ui_visible ) return;
    //uniforms.time.value=0.02;
    //uniforms.time.value%=1;
    fly_timer+=world.time.UIdelta/2;
    electricity.rotateY(0.02);

 //   if (uniforms.time.value>0)
        uniforms.time.value+=world.time.UIdelta/2;
   // else
     //   uniforms.time.value = 0;
    setWeight(world.hand_actions[1], 0.0);
    setWeight(world.hand_actions[2], 0.1);

    setWeight(world.hand_actions[3], 0);
    setWeight(world.hand_actions[4], 0);
    const timer = fly_timer%2;
    if (timer<1)
    {
        TriinstanceSin = -1;
        uniforms.picked.value = -1;
        hand_container.position.y = camera_size/2-0.65;
        if (timer > 0.4 && remFingerFlag) {
            world.hand.userData.removeFinger = true;
            remFingerFlag = false;
        }
        if (timer < 0.1 && !remFingerFlag) {
            if (enemy_flag) {
                electricity.visible = false;
                bomb.visible = true;
            } else {
                electricity.visible = true;
                bomb.visible = false;
            }
            enemy_flag = !enemy_flag;
            remFingerFlag = true;
        }

        if (timer < 0.1 && world.fingersAlive === 0) {
            world.hand.userData.fingers.forEach((f, i) => {
                f.position.copy(world.hand.userData.storedFingerData[i].position);
                f.rotation.copy(world.hand.userData.storedFingerData[i].rotation);
                f.scale.copy(world.hand.userData.storedFingerData[i].scale);
                f.visible = false;
            });
            world.hand.userData.fingers_bones.forEach((f) => {
                f.scale.set(1, 1, 1);
            });
            world.hand.userData.removeFinger = false;
            world.fingersAlive = 5;
        }
    }
    else{
        if (world.fingersAlive===0) fly_timer=0;
        hand_container.position.y = -camera_size/3.5;
        if (timer>1.7 && TriinstanceSin === 2){
            TriinstanceSin = 3;
            uniforms.picked.value = TriinstanceSin;
            default_note.instrument=TriinstanceSin;
            world.AudioSystem.playInstrumentAt(default_note);
        }        
        else if (timer>1.5 && TriinstanceSin === 1){
            TriinstanceSin = 2;
            uniforms.picked.value = TriinstanceSin;
            default_note.instrument=TriinstanceSin;
            world.AudioSystem.playInstrumentAt(default_note);
        }
        else if (timer>1.3 && TriinstanceSin === 0){
            TriinstanceSin = 1;
            uniforms.picked.value = TriinstanceSin;
            default_note.instrument=TriinstanceSin;
            world.AudioSystem.playInstrumentAt(default_note);
        }
        else if (timer>1.1 && TriinstanceSin === -1){
            TriinstanceSin = 0;
            uniforms.picked.value = TriinstanceSin;
            default_note.instrument=TriinstanceSin;
            world.AudioSystem.playInstrumentAt(default_note);
        }
    }

    if (world.fingersAlive !== 0) {
        hand_container.position.x = -camera_size * canvas_aspect / 2 + timer%1 * (camera_size * canvas_aspect - 0.23)-0.2;

        world.mixer.update(world.time.UIdelta);
    }
    removeFingerSystem(world);
    renderer.render(scene,camera);
}

export function showHowToPlayScreen(flag){

    ui_visible = flag;
    world.hand.children[0].material.color.set(world.hand.children[0].material.userData.default_color);
    if (flag) {
        msc.style.display = "block";
        canvas.style.display = "block";

        world.hand.userData.fingers.forEach((f, i) => {
            f.position.copy(world.hand.userData.storedFingerData[i].position);
            f.rotation.copy(world.hand.userData.storedFingerData[i].rotation);
            f.scale.copy(world.hand.userData.storedFingerData[i].scale);
            f.visible = false;
        });
        world.hand.userData.fingers_bones.forEach((f) => {
            f.scale.set(1, 1, 1);
        });
        world.hand.userData.removeFinger = false;
        world.fingersAlive = 5;
        world.howToPlay = true;
        world.hand.position.set(0,-0.,-0.2);
        world.hand.rotation.set(0,0 ,0);
        fly_timer=0;
        hand_container.add(world.hand);
    }
    else {
        msc.style.display = "none";
        canvas.style.display = "none";
        world.scene.add(world.hand);
        world.hand.userData.fingers.forEach((f, i) => {
            f.position.copy(world.hand.userData.storedFingerData[i].position);
            f.rotation.copy(world.hand.userData.storedFingerData[i].rotation);
            f.scale.copy(world.hand.userData.storedFingerData[i].scale);
            f.visible = false;
        });
        world.hand.userData.fingers_bones.forEach((f) => {
            f.scale.set(1, 1, 1);
        });
        world.hand.userData.removeFinger = false;
        world.howToPlay=false;
        world.fingersAlive = 5;
    }
}