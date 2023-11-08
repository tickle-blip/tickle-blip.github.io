
const VISUAL_STEP0 = 0.0;
const VISUAL_STEP1 = 3;
const VISUAL_STEP2 = 3;
const VISUAL_STEP3 = 3;
function shift(arr, direction, n) {
    const _arr = [...arr];
    var times = n > _arr.length ? n % _arr.length : n;
    return _arr.concat(_arr.splice(0, (direction > 0 ? _arr.length - times : times)));
}

class WinEffect{
    timer=0;
    global_timer=0;
    visual_step = 0.1;
    done = false;
    initialized = false;
    constructor(duration){
        this.duration = duration;
    }
    initialize(world) {
        if (this.initialized === true )return;
        this.timer =this.global_timer = 0;
        this.done = false;
        world.GlobalParameters.rotationSpeed.value = 0.1;
        for (let i = 0; i < world.AudioSystem.melodyInstrumentID.length; i++) {
            //world.AudioSystem.melodyInstrumentID.eventOnModify(i, Math.floor(Math.random() * 4));
            if (world.AudioSystem.melodyInstrumentID[i]===4)
                world.AudioSystem.melodyInstrumentID.eventOnModify(i, (i/40/2)%4);
        }
        this.initialized=true;
    }
    
    //initialize();
    cleanup(world){

        world.GlobalParameters.triAmplitude.value =1;
        world.GlobalParameters.rotationSpeed.value = 0;
    }
    play(world){
        if (this.timer>this.visual_step){
            const new_arr = shift(world.AudioSystem.melodyInstrumentID,1,40);
            for (let i = 0; i < world.AudioSystem.melodyInstrumentID.length; i++) {
                //world.AudioSystem.melodyInstrumentID.eventOnModify(i, (world.AudioSystem.melodyInstrumentID[i]+1)%4);
                world.AudioSystem.melodyInstrumentID.eventOnModify(i,new_arr[i]);
            }
            this.timer = 0;
        }
        this.timer+=world.time.delta;
        this.global_timer+=world.time.delta;
        if (this.global_timer>this.duration) {
            this.done = true;
            this.initialized = false;
            this.global_timer = 0;
        }
        
        if (this.global_timer>5) {
            world.GlobalParameters.triAmplitude.value =((this.global_timer-5)/2.5)*((this.global_timer-5)/2.5);
            world.GlobalParameters.rotationSpeed.value = (Math.sqrt((this.global_timer-5)))/2;
        }
    }
}
class WinEffect1{
    timer=0;
    global_timer=0;
    visual_step = 0.2;
    done = false
    constructor(duration){
        this.duration = duration;
        this.done = false;
    }
    initialize(world) {
        console.log("WinEffect1 initialize")
        this.timer =this.global_timer = 0;
        for (let i = 0; i < world.AudioSystem.melodyInstrumentID.length; i++) {
            world.AudioSystem.melodyInstrumentID.eventOnModify(i, Math.floor(Math.random() * 4));
            //world.AudioSystem.melodyInstrumentID.eventOnModify(i, 1);
        }

        for (let i = 0; i < world.AudioSystem.melodyInstrumentID.length; i++) {
            //world.AudioSystem.melodyInstrumentID.eventOnModify(i, Math.floor(Math.random() * 4));
            world.AudioSystem.melodyInstrumentID.eventOnModify(i, (i/40/2)%4);
        }
        if (this.global_timer>this.duration) {
            this.done = true;
            this.global_timer = 0;
        }
    }
    
    //initialize();
    
    play(world){
        if (this.timer>this.visual_step){
            const new_arr = shift(world.AudioSystem.melodyInstrumentID,1,40);
            for (let i = 0; i < world.AudioSystem.melodyInstrumentID.length; i++) {
                //world.AudioSystem.melodyInstrumentID.eventOnModify(i, (world.AudioSystem.melodyInstrumentID[i]+1)%4);
                world.AudioSystem.melodyInstrumentID.eventOnModify(i,new_arr[i]);
            }
            this.timer = 0;
        }
        this.timer+=world.time.delta;
        this.global_timer+=world.time.delta;
        //world.GlobalParameters.triAmplitude.value =((this.global_timer));
        world.GlobalParameters.rotationSpeed.value =Math.sqrt (Math.sqrt(this.global_timer));
    }
}
class Timeline
{
    timer = 0;
    global_timer = 0;
    effects = [];
    current_effect_index = 0;
    #first_start = true;
    constructor(){
    }
    
    addEffect(effect,duration){
        this.effects.push(new effect(duration));
    }
    play(world){
        if (this.current_effect_index>=this.effects.length) return;
        console.log("current_effect_index",this.current_effect_index,this.effects.length);
        if (this.#first_start) {
            this.effects[this.current_effect_index].initialize(world);
            this.#first_start = false;
        }
        /*if (this.timer>this.effects[this.current_effect_index].duration){
            this.current_effect_index++;
            if (this.current_effect_index===this.effects.length)
                this.current_effect_index=0;

            this.effects[this.current_effect_index].initialize(world);
            this.timer = 0;
        }*/
        this.timer+=world.time.delta;
        this.global_timer+=world.time.delta;
        this.effects[this.current_effect_index].play(world);
        if (this.effects[this.current_effect_index].done) {
            this.effects[this.current_effect_index].cleanup(world);
            this.current_effect_index++;
            if (this.current_effect_index===this.effects.length)
                this.current_effect_index=0;
            this.effects[this.current_effect_index].initialize(world);
        }
    }
    
}
let timeline = new WinEffect(15.5);
//timeline.addEffect(WinEffect,20);
//timeline.addEffect(WinEffect1,100);
export const winSystem = (world) => {
    if (world.win === true && !world.paused) {

        if (!timeline.initialized)
            timeline.initialize(world);
        
        timeline.play(world);
        if (timeline.done) {

            world.win=false;
            world.paused = true;
            world.showWinScreen(true);
        }
        /*if (timer>VISUAL_STEP0) {
            console.log("winSystem tick");
            const rand_index = Math.floor(Math.random()*world.AudioSystem.melodyInstrumentID.length);
            //world.AudioSystem.melodyInstrumentID[rand_index] = Math.floor(Math.random()*4);
            if (done) {
                for (let i = 0; i < world.AudioSystem.melodyInstrumentID.length; i++) {
                    //world.AudioSystem.melodyInstrumentID.eventOnModify(i, Math.floor(Math.random() * 4));
                    world.AudioSystem.melodyInstrumentID.eventOnModify(i, 1);
                }
                done = false;
            }
            const new_arr = shift(world.AudioSystem.melodyInstrumentID,1,40);
            //first
            for (let i = 0; i < world.AudioSystem.melodyInstrumentID.length; i++) {
                //world.AudioSystem.melodyInstrumentID.eventOnModify(i, (world.AudioSystem.melodyInstrumentID[i]+1)%4);
                world.AudioSystem.melodyInstrumentID.eventOnModify(i,new_arr[i]);
            }
            //world.AudioSystem.melodyInstrumentID.eventOnModify(rand_index, Math.floor(Math.random()*4));
            timer=0;
        }*/
    }
    return world
}