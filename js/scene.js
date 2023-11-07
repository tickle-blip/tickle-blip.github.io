import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {ECS_Container} from "./ecs/ecs.js";

import {initUI, renderUI, showSheetCanvas, saveMelodyToDisk, parseMelodyJSON, clearMusicSheet} from './3dmusicSheet.js';
import {
    AdditiveBlending,
    DoubleSide,
    MeshPhongMaterial,
    RepeatWrapping,
    Scene,
    SRGBColorSpace,
    TextureLoader, Vector2
} from "three";
//create scene
const secret_code = "sleepwell";
let ecs;

let game_pre_scene;
let ui_pre_scene;
let camera;
let game_started = false;
//initialization
await initModels().catch((err)=> console.error(err));

initECS();
initUI(ui_pre_scene,ecs.world);

ecs.update();
document.styleSheets[0].insertRule('canvas { outline:none; border:none; }', 0);
async function initModels(){
    game_pre_scene = new Scene();
    ui_pre_scene = new Scene();
    const loader = new GLTFLoader().setPath('/models/');


    const img_loader = new TextureLoader().setPath('/textures/');

    const rgbw = await img_loader.loadAsync("rgbw.png");
    rgbw.flipY = false;
    rgbw.colorSpace = SRGBColorSpace;

    //add each peace to new combined scene -> process later
    const circle = await loader.loadAsync('TO_self.gltf');
    
    const TO_Body = circle.scene.children[0];
    TO_Body.name = "TO_SELF";
    TO_Body.material = new MeshPhongMaterial({color: 0xffffff});
    TO_Body.material.roughness = 0.0;
    TO_Body.material.map = rgbw;
    
    game_pre_scene.add(TO_Body);
    
    ui_pre_scene.add(TO_Body.clone());
    
    const knob_mats = await loader.loadAsync('knob_mat.gltf');
    game_pre_scene.add(knob_mats.scene.children[0]);
    
    const w = await img_loader.loadAsync("w_k.png");
    w.flipY = false;
    w.colorSpace = SRGBColorSpace;
    const knobs = await loader.loadAsync('knobs_self.gltf');
    knobs.scene.traverse((child)=>{
        if(child.isMesh){
            //const m = child.material.map;
            child.material = new MeshPhongMaterial({color: 0xffffff});
            child.material.roughness = 0.0;
            child.material.map = w;
            
        }
    });
    game_pre_scene.add(knobs.scene);
    ui_pre_scene.add(knobs.scene.clone());

    
    const ui_to_sheet = await loader.loadAsync('musicSheetTris1.gltf');
    const sheet_positions = await loader.loadAsync('sheet_positions.gltf');
    console.log(ui_to_sheet);
    const audio_visual_quad = await loader.loadAsync('beam.gltf');
    const visual_quad = audio_visual_quad.scene.children[0];
    visual_quad.name = "VISUAL_QUAD";
    visual_quad.material = new MeshPhongMaterial({color: 0xffffff});
    visual_quad.roughness = 0.;
    visual_quad.material.side = DoubleSide;
    visual_quad.material.transparent= true;
    visual_quad.material.opacity = 0.5;
    visual_quad.material.blending= AdditiveBlending;
    visual_quad.material.depthWrite = false;

    const laser_tex = await img_loader.loadAsync("fractal1.png");
    
    laser_tex.wrapS = RepeatWrapping;
    laser_tex.wrapT = RepeatWrapping;
    laser_tex.repeat = new Vector2(1,1);
    //laser_tex.flipY = false;
    //laser_tex.colorSpace = SRGBColorSpace;
    
    visual_quad.material.map = laser_tex;

    game_pre_scene.add(visual_quad);
    ui_pre_scene.add(ui_to_sheet.scene);
    ui_pre_scene.add(sheet_positions.scene);

    const hand = await loader.loadAsync('hand_w_fingers.gltf');
    hand.scene.children[0].name = "HAND";
    while(hand.scene.children.length > 1){
        hand.scene.children[0].attach(hand.scene.children[1]);
    }
    
    hand.scene.children[0].animations = hand.animations;
    hand.scene.children[0].children[0].material = new MeshPhongMaterial({color: 0xffffff,emissive: 0x333333});
    hand.scene.children[0].children[0].material.roughness = 0.0;
    game_pre_scene.add(hand.scene.children[0]);
    
    const e = await loader.loadAsync('electricity.gltf');
    const electricity = e.scene.children[0];
    electricity.name = "ELECTRICITY";
    electricity.material = new MeshPhongMaterial({color: 0xffffff});
    electricity.roughness = 0.;
    electricity.material.side = DoubleSide;
    electricity.material.transparent= true;
    electricity.material.opacity = 0.5;
    electricity.material.blending= AdditiveBlending;
    electricity.material.depthWrite = false;

    const electricity_tex = await img_loader.loadAsync("electric.png");

    electricity_tex.wrapS = RepeatWrapping;
    electricity_tex.wrapT = RepeatWrapping;
    electricity_tex.repeat = new Vector2(1,1);
    electricity.material.map = electricity_tex;
    game_pre_scene.add(electricity);


    const b = await loader.loadAsync('bomb.gltf');
    const bomb = b.scene.children[0];
    bomb.name = "BOMB";
    bomb.material = new MeshPhongMaterial({color: 0xffffff});
    bomb.roughness = 0.;
    bomb.material.side = DoubleSide;
    bomb.material.transparent= true;
    //bomb.material.alphaTest = true;
    bomb.material.opacity = 1.;
    bomb.material.blending= AdditiveBlending;
    bomb.material.depthWrite = false;
    //bomb.material.map = laser_tex;

    game_pre_scene.add(bomb);
}

function initECS(){
    ecs = new ECS_Container(game_pre_scene);
}
function startGame(){
    game_started = true;
    ecs.world.paused = false;
}
function showMainMenu(flag) {
    let x = document.getElementById("startScreen");
    if (flag) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function showCodeMenu(flag) {
    let x = document.getElementById("codeEntering");
    if (flag) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function showPauseMenu(flag) {
    let x = document.getElementById("pauseScreen");
    if (flag) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function showSongList(flag) {
    let x = document.getElementById("songList");
    
    if (flag) {
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
        x.style.display = "none";
    }
}
function showSheetSongList(flag) {
    let x = document.getElementById("sheet_songList");
    
    if (flag) {
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
        x.style.display = "none";
    }
}
function showGameUI(flag) {
    let x = document.getElementById("playScreen");
    if (flag) {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }

    
    if(ecs.world.songEditingUnlocked && ecs.world.editMode===true)
        document.getElementById("editSongButton").style.display = "block";
    else{
        document.getElementById("editSongButton").style.display = "none";
    }
}
document.getElementById("chooseSong").addEventListener("click", function() {
    showMainMenu(false);
    showSongList(true);
    //showGameUI(false);
    //startGame();
});
document.getElementById("submitButton").addEventListener("click", function() {
    if (document.getElementById("input_text").value === secret_code) {
        ecs.world.songEditingUnlocked = true;
        showCodeMenu(false);
        showSheetCanvas(true);
    }
});
/*document.getElementById("sa").addEventListener("click", function() {
    //showMainMenu(false);

    //ecs.world.Curve.placeInteractive(ecs.world,0);
    console.log(document.getElementById("sa").dataset.url); 
    showSongList(false);
    showGameUI(true);
    //ecs.world.Curve.resetCurves(ecs.world);
    //ecs.world.camera.position.set(0,0,0);
    parseMelodyJSON();
    ecs.world.Curve.placeInteractive(ecs.world,1);
    ecs.world.Curve.placeInteractive(ecs.world,2);
    startGame();
});*/
function songChoose(event){
    console.log(event.target);
    console.log(event.target.dataset.url);
    showSongList(false);
    showGameUI(true);
    //ecs.world.Curve.resetCurves(ecs.world);
    //ecs.world.camera.position.set(0,0,0);
    parseMelodyJSON(event.target.dataset.url);
    ecs.world.Curve.placeInteractive(ecs.world,1);
    ecs.world.Curve.placeInteractive(ecs.world,2);
    startGame();
}
function sheet_songChoose(event){
    showSheetSongList(false);

    ecs.world.AudioSystem.resetMelody();
    clearMusicSheet();
    parseMelodyJSON(event.target.dataset.url,true);
    this.geometryNeedsUpdate = true;
    this.updateGeometry(ecs.world);
}
document.querySelectorAll('div.melody') // get all elements you want
    .forEach( item => {
        item.addEventListener('click', songChoose);
         });

document.querySelectorAll('div.sheet_melody') // get all elements you want
    .forEach( item => {
        item.addEventListener('click', sheet_songChoose);
         });

document.getElementById("continueBtn").addEventListener("click", function() {
    //showMainMenu(false);
    showPauseMenu(false);
    showGameUI(true);
    startGame();
});
document.getElementById("makeSong").addEventListener("click", function() {
    showMainMenu(false);
    if (ecs.world.songEditingUnlocked)
        showSheetCanvas(true);
    else 
        showCodeMenu(true);
});

document.getElementById("editSongButton").addEventListener("click", function() {
    showGameUI(false);
    ecs.world.paused=true;
    showSheetCanvas(true);
});

document.getElementById("resetAndExitToMenu").addEventListener("click", function() {
    game_started=false;
    showPauseMenu(false);
    showMainMenu(true);
    ecs.world.editMode=false;
    ecs.resetGameState();
    clearMusicSheet();
});

document.getElementById("pausebtn").addEventListener("click", function() {
    showGameUI(false);
    showPauseMenu(true);
    ecs.world.paused = true;
    //ecs.world.Curve.resetCurves(ecs.world);
    //ecs.world.paused = true;
    //ecs.world.camera.position.set(0,0,0);
});

document.getElementById("playFromSheetBtn").addEventListener("click", function() {
    showSheetCanvas(false);
    ecs.world.editMode=true;
    showGameUI(true);
    startGame();
});
document.getElementById("closeSheetBtn").addEventListener("click", function() {
    showSheetCanvas(false);
    if (game_started) {
        showPauseMenu(true);
    }
    else 
        showMainMenu(true);
    //startGame();
});
document.getElementById("rtmm").addEventListener("click", function() {
    showSongList(false);
    showMainMenu(true);
    //startGame();
});document.getElementById("sheet_goback").addEventListener("click", function() {
    showSheetSongList(false);
    //startGame();
});
document.getElementById("rtm").addEventListener("click", function() {
    showCodeMenu(false);
    showMainMenu(true);
    //startGame();
});
document.getElementById("gotomenu").addEventListener("click", function() {
    game_started=false;
    ecs.world.showEndScreen(false);
    showMainMenu(true);
    ecs.world.editMode = false;
    ecs.resetGameState();
    clearMusicSheet()
  //  startGame();
});
document.getElementById("gotomenu_w").addEventListener("click", function() {
    game_started=false;
    ecs.resetGameState();
    clearMusicSheet();
    
    ecs.world.showWinScreen(false);
    showMainMenu(true);
});
document.getElementById("savemelody").addEventListener("click", function() {
    saveMelodyToDisk();
});
document.getElementById("readFromJson").addEventListener("click", function() {
    //parseMelodyJSON(0,true);
    showSheetSongList(true);
    document.getElementById('scaleSelect').value = ecs.world.AudioSystem.getActiveScale();
    const ta = ecs.world.AudioSystem.getCurrentTonicAndOctave();
    document.getElementById('tonicSelect').value = ta.tonic;
    document.getElementById('octaveSelect').value = ta.octave;
    document.getElementById('speedSelect').value = ecs.world.GlobalParameters.speed;
});
document.getElementById('scaleSelect').onchange = (event) => {
    ecs.world.AudioSystem.setActiveScale(event.target.value);
}
document.getElementById('tonicSelect').onchange = (event) => {
    ecs.world.AudioSystem.setTonicAndOctave(event.target.value,undefined);
}
document.getElementById('octaveSelect').onchange = (event) => {
    console.log(event.target.value);
    ecs.world.AudioSystem.setTonicAndOctave(undefined,event.target.value);
}
document.getElementById('speedSelect').onchange = (event) => {
    console.log(event.target.value);
    console.log(ecs.world.GlobalParameters.speed);
    ecs.world.GlobalParameters.speed = event.target.value;
    console.log(ecs.world.GlobalParameters.speed);
    ecs.world.camera.userData.speed = ecs.world.GlobalParameters.speed;
}
ecs.world.showEndScreen = function(flag){
    showGameUI(false);
    let x = document.getElementById("endScreen");
    if (flag) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
ecs.world.showWinScreen = function(flag){
    showGameUI(false);
    let x = document.getElementById("winScreen");
    if (flag) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
ecs.world.updateProgressBar = function(percents){
}

animate();
function animate(){
    requestAnimationFrame(animate );
    renderUI();
    //input update
    //curve update
    ecs.update();
}
function makeButtons(c) {
    for (let i = 0; i < c.length; i++) {
        $('.button-holder').append('<button value=' + c[i] + '>' + c[i] +
            '</button>');
    }
}
document.addEventListener(
    "wheel",
    function touchHandler(e) {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false } );
