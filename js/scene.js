import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {ECS_Container} from "./ecs/ecs.js";

import {
    initUI,
    renderUI,
    showSheetCanvas,
    saveMelodyToDisk,
    parseMelodyJSON,
    clearMusicSheet,
    showSheetSongList
} from './3dmusicSheet.js';

import {
    showHowToPlayScreen as showHowToPlayScreen,
    initUI as initHowToPlayUI,
    renderUI as renderHowToPlayUI,
} from './howToPlayScreen.js';

import {
    AdditiveBlending,
    DoubleSide,
    MeshPhongMaterial,
    MeshBasicMaterial,
    RepeatWrapping,
    Scene,
    SRGBColorSpace,
    TextureLoader, Vector2, Color
} from "three";
//create scene
const secret_code = "sleepwell";
let ecs;

let game_pre_scene;
let ui_pre_scene;
let how_to_play_pre_scene;
let camera;
let game_started = false;
//initialization
await initModels().catch((err)=> console.error(err));

initECS();
initUI(ui_pre_scene,ecs.world);
initHowToPlayUI(how_to_play_pre_scene,ecs.world);

ecs.update();
//const acl = new Accelerometer({ frequency: 60 });
/*
acl.addEventListener("reading", () => {
    console.log(`Acceleration along the X-axis ${acl.x}`);
    console.log(`Acceleration along the Y-axis ${acl.y}`);
    console.log(`Acceleration along the Z-axis ${acl.z}`);
});
*/

//acl.start();


/*window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
    // Do stuff with the new orientation data
    console.log(absolute);
    console.log(alpha);
    console.log(beta);
    console.log(gamma);
}*/
document.styleSheets[0].insertRule('canvas { outline:none; border:none; }', 0);
async function initModels(){
    let loading_progress = document.getElementById("loadingprogressbar_position");
    loading_progress.style.width = Math.floor(0)+"%";
    game_pre_scene = new Scene();
    ui_pre_scene = new Scene();
    how_to_play_pre_scene = new Scene();
    const loader = new GLTFLoader().setPath('/models/');


    const img_loader = new TextureLoader().setPath('/textures/');

    const rgbw = await img_loader.loadAsync("rgbw.png");
    loading_progress.style.width = "5%";
    rgbw.flipY = false;
    rgbw.colorSpace = SRGBColorSpace;

    //add each peace to new combined scene -> process later
    const circle = await loader.loadAsync('TO_self.gltf');
    loading_progress.style.width = "10%";
    const TO_Body = circle.scene.children[0];
    TO_Body.name = "TO_SELF";
    TO_Body.material = new MeshPhongMaterial({color: 0xffffff});
    TO_Body.material.roughness = 0.0;
    TO_Body.material.map = rgbw;
    
    game_pre_scene.add(TO_Body);
    
    ui_pre_scene.add(TO_Body.clone());
    how_to_play_pre_scene.add(TO_Body.clone());
    const knob_mats = await loader.loadAsync('knob_mat.gltf');
    loading_progress.style.width = "20%";
    game_pre_scene.add(knob_mats.scene.children[0]);
    
    const w = await img_loader.loadAsync("w_k.png");
    loading_progress.style.width = "25%";
    w.flipY = false;
    w.colorSpace = SRGBColorSpace;
    const knobs = await loader.loadAsync('knobs_self.gltf');
    loading_progress.style.width = "35%";
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
    loading_progress.style.width = "40%";
    const sheet_positions = await loader.loadAsync('sheet_positions.gltf');
    loading_progress.style.width = "50%";
    const audio_visual_quad = await loader.loadAsync('beam.gltf');
    loading_progress.style.width = "55%";
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
    loading_progress.style.width = "60%";
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
    loading_progress.style.width = "75%";
    hand.scene.children[0].name = "HAND";
    while(hand.scene.children.length > 1){
        hand.scene.children[0].attach(hand.scene.children[1]);
    }
    
    hand.scene.children[0].animations = hand.animations;
    hand.scene.children[0].frustumCulled=false;
    hand.scene.children[0].children[0].material = new MeshPhongMaterial({color: 0xffffff,emissive: 0x333333});

    hand.scene.children[0].children[0].material.userData.default_color = new Color(0.5,0.5,0.5);
    hand.scene.children[0].children[0].material.color.copy(hand.scene.children[0].children[0].material.userData.default_color);
    hand.scene.children[0].children[0].material.roughness = 0.0;
    const h = hand.scene.children[0];
    game_pre_scene.add(h);
    
    //how_to_play_pre_scene.add(h.clone());
    const e = await loader.loadAsync('electricity.gltf');
    loading_progress.style.width = "80%";
    const electricity = e.scene.children[0];
    electricity.name = "ELECTRICITY";
    electricity.material = new MeshPhongMaterial({color: 0xffffff});
    electricity.roughness = 0.;
    electricity.material.side = DoubleSide;
    electricity.material.transparent= true;
    electricity.material.opacity = 1;
    electricity.material.blending= AdditiveBlending;
    electricity.material.depthWrite = false;

    const electricity_tex = await img_loader.loadAsync("electric.png");
    loading_progress.style.width = "90%";
    electricity_tex.wrapS = RepeatWrapping;
    electricity_tex.wrapT = RepeatWrapping;
    electricity_tex.repeat = new Vector2(1,1);
    electricity.material.map = electricity_tex;
    game_pre_scene.add(electricity);
    how_to_play_pre_scene.add(electricity.clone());

    loading_progress.style.width = "100%";
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
    how_to_play_pre_scene.add(bomb.clone());
    document.getElementById("loadingScreen").style.display = "none";
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
function showAboutScreen(flag){
    let x = document.getElementById("aboutscreen");
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
function openHowToPlayScreen(event){
    showSongList(false);
    parseMelodyJSON(event.target.dataset.url);
    showHowToPlayScreen(true);
}
document.getElementById("howToPlayContainer").addEventListener("click", function() {
   songChoose();
});
function songChoose(event){
    showHowToPlayScreen(false);
    showGameUI(true);
    //ecs.world.Curve.resetCurves(ecs.world);
    //ecs.world.camera.position.set(0,0,0);
    ecs.world.Curve.placeInteractive(ecs.world,1);
    ecs.world.Curve.placeInteractive(ecs.world,2);
    startGame();
    ecs.world.Input.calibrateXY();
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
        item.addEventListener('click', openHowToPlayScreen);
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
    ecs.world.AudioSystem.instruments.forEach(
        (instrument)=>{
            instrument.releaseAll();
        }
    );
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

document.getElementById("whatisthis").addEventListener("click", function() {
    showMainMenu(false);
    showAboutScreen(true);
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
});document.getElementById("rtmmm").addEventListener("click", function() {
    showAboutScreen(false);
    showMainMenu(true);
    //startGame();
});
document.getElementById("sheet_goback").addEventListener("click", function() {
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
    //document.getElementById('scaleSelect').value = ecs.world.AudioSystem.getActiveScale();
    //const ta = ecs.world.AudioSystem.getCurrentTonicAndOctave();
    //document.getElementById('tonicSelect').value = ta.tonic;
    //document.getElementById('octaveSelect').value = ta.octave;
    //document.getElementById('speedSelect').value = ecs.world.GlobalParameters.speed;
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
    renderHowToPlayUI();
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
