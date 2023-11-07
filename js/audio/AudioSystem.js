//import drums from './tidal.js';
import {MathUtils} from "three";
import * as Tone from 'tone';

let tone_loaded = false;
window.addEventListener('pointerup', async () => {
    if (tone_loaded)
        return;
    await Tone.start()
    tone_loaded=true;
    console.log('audio is ready')
})
const fr = {
    "C": [16.35, 32.70, 65.41, 130.81, 261.63, 523.25, 1046.50, 2093.00, 4186.01],
    "Db":   [17.32, 34.65, 69.30, 138.59, 277.18, 554.37, 1108.73, 2217.46, 4434.92],
    "D":   [18.35, 36.71, 73.42, 146.83, 293.66, 587.33, 1174.66, 2349.32, 4698.64],
    "Eb":   [19.45, 38.89, 77.78, 155.56, 311.13, 622.25, 1244.51, 2489.02, 4978.03],
    "E":   [20.60, 41.20, 82.41, 164.81, 329.63, 659.26, 1318.51, 2637.02],
    "F":   [21.83, 43.65, 87.31, 174.61, 349.23, 698.46, 1396.91, 2793.83],
    "Gb":   [23.12, 46.25, 92.50, 185.00, 369.99, 739.99, 1479.98, 2959.96],
    "G":   [24.50, 49.00, 98.00, 196.00, 392.00, 783.99, 1567.98, 3135.96],
    "Ab":   [25.96, 51.91, 103.83, 207.65, 415.30, 830.61, 1661.22, 3322.44],
    "A":   [27.50, 55.00, 110.00, 220.00, 440.00, 880.00, 1760.00, 3520.00],
    "Bb":   [29.14, 58.27, 116.54, 233.08, 466.16, 932.33, 1864.66, 3729.31],
    "B":   [30.87, 61.74, 123.47, 246.94, 493.88, 987.77, 1975.53, 3951.07]
};
let currentScaleFr = fr.A[2];
const tonicOctave = {tonic: "A", octave: 2};
const majorPentatonic = [0,2,4,7,9];
const bluesScale = [0,3,5,6,7,10];  
const minorPentatonic = [0,3,5,7,10]; 
const majorScale = [0,2,4,5,7,9,11];  
const melodicMinorScale = [0,2,3,5,7,9,11];  
const naturalMinorScale = [0,2,3,5,7,8,10]; 
const scales = {
    "majorPentatonic": majorPentatonic,
    "bluesScale": bluesScale,
    "minorPentatonic": minorPentatonic,
    "majorScale": majorScale,
    "melodicMinorScale": melodicMinorScale,
    "naturalMinorScale": naturalMinorScale
}
let activeScale = bluesScale;

const drumRack = ['bd', 'sn', 'hh', 'cp', 'mt', 'ht', 'lt'];
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
function mod(n, m) {
    return ((n % m) + m) % m;
}
function getPitchFromId(id_on_beat){
    const k = activeScale[randomArrIndex]/12;
    
    return k;
}
const test_synth = new Tone.Synth().toDestination();
export const modulationTypes = ["sine","amsine","amsine2","amsquare","amtriangle","amsawtooth"];
export const noiseTypes = ["white","brown","pink"];
let addModifyEvent = function(arr) {
    if (arr.callbacks ===undefined)
        arr.callbacks =  [];
    
    arr.eventOnModify = function(index, e) {
        arr[index] = e;
        if (arr.callbacks !== undefined && arr.callbacks.length>0)
            arr.callbacks.forEach(callback=>callback(index));
    };
    arr.addOnModifyEventListener = function(callback) {
        if (arr.callbacks === undefined)
            throw "addModifyEventListener: Array Modify Event Not Initialized";
        if (!arr.callbacks.includes(callback))
            arr.callbacks.push(callback);
    }
};

//const lp_filter = new Tone.Filter(18000, "lowpass").toDestination();
//const hp_filter = new Tone.Filter(2000, "highpass").connect(lp_filter);
const hp_filter = new Tone.Limiter(-10).toDestination();
const Synth1 = function(){
    
    //const reverb = new Tone.JCReverb().connect(hp_filter);
    const distortion = new Tone.Chebyshev (50).connect(hp_filter);
    const synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: {
            type: "amtriangle",
            harmonicity: 0.5,
            modulationType: "sine"
            //partials: [0, 2, 3, 4],
        }
    }).connect(distortion);
    this.name = "BasicSynth";
    this.parameters = {
        volume:{value:-15,min:-50,max:-5},
        attack:{value:0.05,min:0.005,max:3.},
        decay: {value:0.5,min:0.01,max:4.},
        harmonicity: {value:3,min:0.01,max:5.},
        waveform: {value:0,min:0,max:modulationTypes.length-1},
        distortion: {value:1,min:1,max:100.},
        reverb: {value:0.0,min:0,max:1.}
        };
    this.parameterNames=["volume","attack","decay","harmonicity","waveform","distortion","reverb"    ];
    this.modifyParameter01 = function(index, value){

        if (this.parameters[index].default === undefined){
            this.parameters[index].default = this.parameters[index].value;
        }
        this.parameters[index].value = MathUtils.lerp(this.parameters[index].min,this.parameters[index].max,value);
    }        
    this.modifyParameter = function(index, value){

        if (this.parameters[index].default === undefined){
            this.parameters[index].default = this.parameters[index].value;
        }
        this.parameters[index].value = value;
    }    
    this.getDefault01 = function(index){
        return (this.parameters[index].value-this.parameters[index].min)/(this.parameters[index].max-this.parameters[index].min);
    }
    this.play = function(pitch_index,effect){
        
        const pitch = currentScaleFr * Math.pow(2, Math.floor(pitch_index/activeScale.length)+ activeScale[mod(pitch_index,activeScale.length)]/12);
      /*  if (effect[0]>0)
            delay.wet.value = effect[0];
        
        else delay.wet.value = 0;*/
        if (synth._voices.length>0) {
            console.log(synth._voices.length)
            console.log(Tone.Destination.blockTime);
            console.log(Tone.Transport.sampleTime);
//            console.log(synth._voices[0].oscillator.type);
  //          console.log(synth._voices[0].oscillator.modulationType);
    //        console.log(synth._voices[0].oscillator.harmonicity);
        }
        synth.volume.value = this.parameters.volume.value;
        distortion.order = Math.floor(this.parameters.distortion.value);
        //reverb.dampening = this.parameters.dampening.value ;
       // tremolo.dampening = this.parameters.parm20000.value;
        //reverb.roomSize.value = this.parameters.reverb.value;
        synth.set(
        {
            oscillator: {
                harmonicity: this.parameters.harmonicity.value,
                type: modulationTypes[Math.floor(this.parameters.waveform.value)],
            },
            envelope:{
                attack:this.parameters.attack.value,
                decay: this.parameters.decay.value,
                sustain:0.,
                release:0.0
                }
            //
        });
        synth.triggerAttackRelease(pitch,this.parameters.decay.value + this.parameters.attack.value);
        }
}
const Synth2 = function(){
    const reverb = new Tone.JCReverb().connect(hp_filter);
    const distortion = new Tone.Chebyshev (50).connect(reverb);
    const synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: {
            type: "amsawtooth",
            harmonicity: 0.5,
            modulationType: "triangle"
            //partials: [0, 2, 3, 4],
        }
    }).connect(distortion);
    this.name = "BasicSynth";
    this.parameters = {
        volume:{value:-15,min:-50,max:-5},
        attack:{value:0.05,min:0.005,max:3.},
        decay: {value:0.5,min:0.01,max:4.},
        harmonicity: {value:3,min:0.01,max:5.},
        waveform: {value:0,min:0,max:modulationTypes.length-1},
        distortion: {value:1,min:1,max:100.},
        reverb: {value:0.0,min:0,max:1.}
    };
    this.parameterNames=["volume","attack","decay","harmonicity","waveform","distortion","reverb"    ];
    this.modifyParameter01 = function(index, value){

        if (this.parameters[index].default === undefined){
            this.parameters[index].default = this.parameters[index].value;
        }
        this.parameters[index].value = MathUtils.lerp(this.parameters[index].min,this.parameters[index].max,value);
    }
    this.modifyParameter = function(index, value){

        if (this.parameters[index].default === undefined){
            this.parameters[index].default = this.parameters[index].value;
        }
        this.parameters[index].value = value;
    }
    this.getDefault01 = function(index){
        return (this.parameters[index].value-this.parameters[index].min)/(this.parameters[index].max-this.parameters[index].min);
    }
    this.play = function(pitch_index,effect){

        const pitch = currentScaleFr * Math.pow(2, Math.floor(pitch_index/activeScale.length)+ activeScale[mod(pitch_index,activeScale.length)]/12);
        /*  if (effect[0]>0)
              delay.wet.value = effect[0];
          
          else delay.wet.value = 0;*/
        if (synth._voices.length>0) {
//            console.log(synth._voices[0].oscillator.type);
            //          console.log(synth._voices[0].oscillator.modulationType);
            //        console.log(synth._voices[0].oscillator.harmonicity);
        }
        synth.volume.value = this.parameters.volume.value;
        distortion.order = Math.floor(this.parameters.distortion.value);
        //reverb.dampening = this.parameters.dampening.value ;
        // tremolo.dampening = this.parameters.parm20000.value;
        reverb.roomSize.value = this.parameters.reverb.value;
        synth.set(
            {
                oscillator: {
                    harmonicity: this.parameters.harmonicity.value,
                    type: modulationTypes[Math.floor(this.parameters.waveform.value)],
                },
                envelope:{
                    attack:this.parameters.attack.value,
                    decay: this.parameters.decay.value,
                    sustain:0.,
                    release:0.0
                }
                //
            });
        synth.triggerAttackRelease(pitch,this.parameters.decay.value + this.parameters.attack.value);
    }
}
const NoiseSynth = function(){
    
    const lowPass = new Tone.Filter({
        frequency: 11000,
        type:"highpass"
    }).connect(hp_filter);
    const synth = new Tone.NoiseSynth().connect(lowPass);
    this.name = "NoiseSynth";
    this.parameters = {
        volume:{value:-15,min:-50,max:-5},
        attack:{value:0.05,min:0.005,max:3.},
        decay: {value:0.5,min:0.01,max:4.},
        noiseType: {value:0,min:0,max:noiseTypes.length-1},
        cutOffFrequency: {value:11000,min:100,max:20000.},
        playbackRate: {value:1,min:0.05,max:3}
        };
    this.parameterNames=["volume","attack","decay","noiseType","cutOffFrequency","playbackRate"];
    this.modifyParameter01 = function(index, value){

        if (this.parameters[index].default === undefined){
            this.parameters[index].default = this.parameters[index].value;
        }
        this.parameters[index].value = MathUtils.lerp(this.parameters[index].min,this.parameters[index].max,value);
    }
    this.modifyParameter = function(index, value){

        if (this.parameters[index].default === undefined){
            this.parameters[index].default = this.parameters[index].value;
        }
        this.parameters[index].value = value;
    }
    this.getDefault01 = function(index){
        return (this.parameters[index].value-this.parameters[index].min)/(this.parameters[index].max-this.parameters[index].min);
    }
    this.play = function(pitch_index,effect){
        
        const mod_pitch_index = pitch_index -20;
        //const pitch = currentScaleFr * Math.pow(2, Math.floor(mod_pitch_index/activeScale.length)+ activeScale[mod(mod_pitch_index,activeScale.length)]/12);
        const pitch = 300;
        synth.volume.value = this.parameters.volume.value;
        lowPass.frequency.value = this.parameters.cutOffFrequency.value;
        synth.noise.noiseType= noiseTypes[Math.floor(this.parameters.noiseType.value)];
        synth.noise.playbackRate= this.parameters.playbackRate.value;
        synth.envelope.set({
                attack:this.parameters.attack.value,
                decay: this.parameters.decay.value,
                sustain:0.,
                release:0.0
            //
        });
     /*   if (synth._voices.length>0) {
            console.log(synth._voices[0]);
            console.log(synth._voices.length)
        }*/
        synth.triggerAttackRelease(this.parameters.attack.value+this.parameters.decay.value);
        }
}

const FMSynth = function(){
    const delay = new Tone.PingPongDelay ('16n',0.2);
    const synth = new Tone.PolySynth(Tone.FMSynth, {
        oscillator: {
            partials: [0, 2, 3, 4],
        }
    }).toDestination();
    this.name = "FMSynth";
    this.parameters = {
        volume:{value:-15,min:-50,max:-5},
        attack:{value:0.005,min:0.005,max:3.},
        decay: {value:0.5,min:0.01,max:4.},
        harmonicity: {value:3,min:0.01,max:5.},
        modulationAttack:{value:0.005,min:0.005,max:3.},
        
        modulationIndex: {value:12.22,min:0.01,max:15.}
    };
    this.parameterNames=["volume","attack","decay","harmonicity", "modulationAttack","modulationIndex"];
    this.modifyParameter = function(index,value){
        if (this.parameters[index].default === undefined){
            this.parameters[index].default = this.parameters[index].value;
        }
        this.parameters[index].value = MathUtils.lerp(this.parameters[index].min,this.parameters[index].max,value);
    }
    this.getDefault01 = function(index){
        return (this.parameters[index].value-this.parameters[index].min)/(this.parameters[index].max-this.parameters[index].min);
    }
    this.play = function(pitch_index,effect){

        const pitch = currentScaleFr * Math.pow(2, Math.floor(pitch_index/activeScale.length)+ activeScale[mod(pitch_index,activeScale.length)]/12);

        synth.volume.value = this.parameters.volume.value;
        synth.set(
            {
                modulationIndex: this.parameters.modulationIndex.value,
                harmonicity: this.parameters.harmonicity.value,
                envelope:{
                    attack:this.parameters.attack.value,
                    decay: this.parameters.decay.value,
                    sustain:0.,
                    release:0.0
                },
                modulationEnvelope:{
                    attack:this.parameters.modulationAttack.value,
                    decay: this.parameters.decay.value,
                    sustain:0.,
                    release:0.0
                }
                //
            });
        
        synth.triggerAttackRelease(pitch,this.parameters.decay.value + this.parameters.attack.value);
    }
}
const Membrane = function(){
    const tremolo = new Tone.FeedbackDelay ().connect(hp_filter);
    const distortion = new Tone.Chebyshev (50).connect(tremolo).connect(hp_filter);
const synth = new Tone.PolySynth(Tone.MembraneSynth).connect(distortion);
this.name = "Membrane";        
    this.parameters = {
        volume:{value:-15,min:-50,max:-5},
        attack:{value:0.001,min:0.001,max:1.5},
        pitchDecay: {value:0.05,min:0.01,max:1.5},
        octaves: {value:10,min:1,max:20},
        distortion: {value:1,min:1,max:100.},
        delayTime: {value:0.1,min:0,max:1.},
        feedback: {value:0.0,min:0,max:1.}
    };
    this.parameterNames=["volume","attack","pitchDecay","octaves","distortion","delayTime","feedback"];
    this.modifyParameter01 = function(index, value){

        if (this.parameters[index].default === undefined){
            this.parameters[index].default = this.parameters[index].value;
        }
        this.parameters[index].value = MathUtils.lerp(this.parameters[index].min,this.parameters[index].max,value);
    }
    this.modifyParameter = function(index, value){

        if (this.parameters[index].default === undefined){
            this.parameters[index].default = this.parameters[index].value;
        }
        this.parameters[index].value = value;
    }
    this.getDefault01 = function(index){
        return (this.parameters[index].value-this.parameters[index].min)/(this.parameters[index].max-this.parameters[index].min);
    }
this.play = function(pitch_index,effect){

    const pitch = fr.C[0] * Math.pow(2, Math.floor(pitch_index/activeScale.length)+ activeScale[mod(pitch_index,activeScale.length)]/12);

    distortion.order = Math.floor(this.parameters.distortion.value);
    //reverb.dampening = this.parameters.dampening.value ;
    tremolo.delayTime.value = this.parameters.delayTime.value;
    tremolo.feedback.value = this.parameters.feedback.value;
  /*  if (synth._voices.length>0) {
        console.log(synth._voices.length);
        console.log(synth._voices[0].octaves);
        console.log(synth._voices[0].pitchDecay);
        console.log(synth._voices[0].envelope.attack);
        console.log(synth._voices[0].envelope.release);
        console.log(synth._voices[0].envelope.decay);
        console.log(synth._voices[0].envelope.sustain);
    }*/
    synth.volume.value = this.parameters.volume.value;
    synth.set(
    {
        octaves: Math.floor(this.parameters.octaves.value),
        //pitchDecay: this.parameters.pitchDecay.value,
        envelope:{
            attack:this.parameters.attack.value,
            decay: this.parameters.pitchDecay.value,
            sustain:0.,
            release:0.0
        }
    });
    synth.triggerAttackRelease(pitch, this.parameters.attack.value+this.parameters.pitchDecay.value);
    }
}

const Drums = function(){
    this.name = "DrumRack";
    this.play= function(pitch_index,effect){
    
        drums.triggerAttackRelease(drumRack[mod(pitch_index,drumRack.length)], 1, '1n')
        }
}
export class AudioSystem
{
    #bar_size = 4;
    
    melody = [];
    availableMelody=[{notes:[]},{notes:[]},{notes:[]},{notes:[]}];
    instruments=[new Synth1(),new Synth2(),new Membrane(),new NoiseSynth()];// [drum,bass,synth1,sampler];
    #totalInstrumentsCount=0;
    #currentInstrumentsCount=0;
    constructor(barSize) {
        this.#bar_size = barSize;
        this.melodyInstrumentID = new Array(barSize * 40).fill(4);
        
        addModifyEvent(this.melodyInstrumentID);
        this.activeEffectID = [];
        this.melodyPlaySequence = [];
        
        //this.availableIds = Array.from(Array(barSize*40).keys());
        //
        this.availableIds = [];
        
        this.availableEffectIds = [];
        for(let i = 0; i<barSize*40;i++){
            this.availableEffectIds.push({effect:-1-Math.floor(i/40),id_on_beat:i%40});
        }
        shuffle(this.availableEffectIds);
        //shuffle(this.availableIdss;
        
        this.melody = new Array(this.#bar_size);
        const obj = {instances: []};
        for (let i = 0; i<this.#bar_size;i++){
            this.melody[i] = {instances: []};
        }
    }
    
    getMelodyData(songName){
        var data = {
            name: songName,
            scale: "",
            Synth1:{},
            Synth2:{},
            Synth3:{},
            Synth4:{},
            melody:[]
        }
        Object.keys(scales).forEach((p)=> {
            if (scales[p] === activeScale)
                data.scale = p;
        });
        console.log(data.scale);
        for (let i=0;i<4;i++){
            const instrument = this.instruments[i];
            data[`Synth${i+1}`].parameters = {};
            Object.keys(instrument.parameters).forEach((p)=>
            {
                data[`Synth${i+1}`].parameters[p] = instrument.parameters[p].value;
            })
        }
        this.melody.forEach((e,i)=>{
            e.instances.forEach((e,j)=>{data.melody.push({beat:i,id_on_beat:e.id_on_beat,instrument:e.instrument,pitch:e.pitch})});
            //data.melody[i] = e;
        })
        return data;
    }
    setActiveScale(scaleName){
        activeScale = scales[scaleName];
    }
    getActiveScale(){

        Object.keys(scales).forEach((p)=> {
            if (scales[p] === activeScale)
                return p;
        });
        return "bluesScale";
    }
    setTonicAndOctave(tonic,octave){
        if (tonic !== undefined )
            tonicOctave.tonic = tonic;
        if (octave !== undefined)
            tonicOctave.octave = octave;
        currentScaleFr = fr[tonicOctave.tonic][tonicOctave.octave];
    }
    getCurrentTonicAndOctave(){

        return tonicOctave;
    }
    setMelodyFromJsonData(song_data,edit_mode=false){
        if (song_data.scale !== undefined)
            activeScale = scales[song_data.scale];
        console.log(activeScale)
        for (let i=0;i<4;i++){
            const instrument = this.instruments[i];
            Object.keys(instrument.parameters).forEach((p)=>
            {
                if (song_data[`Synth${i+1}`].parameters[p] !== undefined) {
                    console.log(p)
                    console.log(song_data[`Synth${i+1}`].parameters[p])
                    instrument.modifyParameter(p, song_data[`Synth${i + 1}`].parameters[p]);
                }
                    //instrument.parameters[p].value = song_data[`Synth${i+1}`].parameters[p];
            })

        }
        
        this.#totalInstrumentsCount=0;
        song_data.melody.forEach((e)=>{
            if (!edit_mode)
                this.availableMelody[e.instrument].notes.push({beat:e.beat,id_on_beat:e.id_on_beat,pitch:e.pitch});
            else
                this.addInstrumentOnPosition(e.instrument,e.beat,e.id_on_beat,e.pitch);
            this.#totalInstrumentsCount++;
        });
    }
    resetMelody(){
        
        //reset Synth Parameters
        for (let i=0;i<4;i++){
            const instrument = this.instruments[i];
            Object.keys(instrument.parameters).forEach((p)=>
            {   
                console.log(instrument.parameterNames[p]);
                console.log(instrument.parameters[p].default)
                console.log(instrument.parameters[p].value)
                if (instrument.parameters[p].default !== undefined)
                    instrument.parameters[p].value = instrument.parameters[p].default;
            })
        }
        
        //this.melody = new Array(this.#bar_size);
        for (let i = 0; i<this.#bar_size;i++){
            this.melody[i].instances.length=0;
        }
        console.log(this.melody)
        this.melodyInstrumentID.fill(4);

        for (let i = 0; i < this.melodyInstrumentID.length; i++) {
            //world.AudioSystem.melodyInstrumentID.eventOnModify(i, Math.floor(Math.random() * 4));
            this.melodyInstrumentID.eventOnModify(i, 4);
        }
        this.activeEffectID.length=0;
        console.log(this.activeEffectID)
        this.availableMelody=[{notes:[]},{notes:[]},{notes:[]},{notes:[]}];
        this.#totalInstrumentsCount=1;
        this.#currentInstrumentsCount=0;
    }
    //if instrument_id === 4 then remove instrument
    addInstrumentOnPosition(instrument_id, beat,id_on_beat,pitch){


        //this.melodyInstrumentID[beat * 40 + id_on_beat] = instrument_id;
        this.melodyInstrumentID.eventOnModify(beat * 40 + id_on_beat, instrument_id);
        let k;

        this.melody[beat].instances.forEach((i,n)=>{
            if (i.id_on_beat === id_on_beat) {
                k = n;
                i.instrument = instrument_id;
            }
        });
        
        if  (instrument_id === 4 ) {
            if (k !== undefined)
                this.melody[beat].instances.splice(k,1);
            return;
        }
        else{
            if (k !== undefined)
                return this.melody[beat].instances[k];
        }
        if (!this.availableIds.includes(beat*40+id_on_beat))
            this.availableIds.push(beat*40+id_on_beat);
        //const pitch = getPitchFromId(id_on_beat);
        const note = {id_on_beat: id_on_beat,instrument : instrument_id, effect: -1-beat, played_at: -1, pitch:pitch};
        this.melody[beat].instances.push(note);
        return note;
    }
    addInstrumentOnRandomAvailablePosition(instrument_id){
        if (this.availableMelody[instrument_id].notes.length === 0)
        {
            console.log("no available ids");
            return;
        }
        const n = this.availableMelody[instrument_id].notes.pop();
        
        const note = {id_on_beat: n.id_on_beat, instrument: instrument_id, effect: -1-n.beat,played_at: -1, pitch:n.pitch};
        this.melody[n.beat].instances.push(note);
        //this.availableEffectIds.push(note);
        this.#currentInstrumentsCount++;
        //this.melodyInstrumentID[n.beat * 40 + n.id_on_beat] = instrument_id;
        this.melodyInstrumentID.eventOnModify(n.beat * 40 + n.id_on_beat, instrument_id);
    }
    getProgress(){
        return this.#currentInstrumentsCount/this.#totalInstrumentsCount;
    }
    addEffectOnRandomAvailablePosition(effect_id,variation){
        if (this.availableEffectIds.length === 0) {
            console.log("no available ids");
            return;
        }
        const note = this.availableEffectIds.pop();
        const beat = -1-note.effect; // = encoded beat
        const id_on_beat = note.id_on_beat % 40;
        //note.effect = effect_id;
        
        this.activeEffectID.push({beat:beat, id_on_beat:id_on_beat, effect:effect_id, color: variation});
        
    }
    addEffectOnPosition(effect_id, beat,id_on_beat, value,color){
        let note = undefined;
        this.melody[beat].instances.forEach((i,n)=>{
            if (i.id_on_beat === id_on_beat) {
                note = i;
                i.effect[effect_id] = value;
            }
        });
        if (!note)
            return;
        
        let effect = false;
        this.activeEffectID.forEach((i,n)=>{
            if (i.beat === beat && i.id_on_beat === id_on_beat) {
                effect = true;
                i.effect = effect_id;
                i.color = color;
            }
        });
        if (!effect)
            this.activeEffectID.push({beat:beat, id_on_beat:id_on_beat, effect:effect_id, color: color});
        return note;
        
        
    }
    
    playInstrumentAt(note, distance=1.){
        let instrument = this.instruments[note.instrument];
        if (tone_loaded) {
            //const ident =Math.floor((pitch-0.5)*2*12);
            const randomArrIndex = Math.floor(Math.random() * activeScale.length);
            const d_randomArrIndex = Math.floor(Math.random() * drumRack.length);
            
            if (distance>0.5) distance =0;
            else {
                distance = Math.floor((1 - (distance) / 0.5) * 10);
            }
            instrument.play(note.pitch-distance,note.effect);
           // this.instruments[1].play(note.pitch,note.effect);
            //drums.triggerAttackRelease(drumRack[0], 0.5, '8n')
        }}    
    playEmptyInstrument(){
        if (tone_loaded) {
            test_synth.triggerAttackRelease(30,0.01);
        }}
    flattenMelody(){
        let flatMelody = [];
        this.melody.forEach((bar) => {
            bar.beat.forEach((beat) => {
                flatMelody.push(beat);
            });
        });
        return flatMelody;
    }
}