import {Quaternion, Vector3,Color} from "three";

const falling_fingers=[];
const q = new Quaternion;
const v = new Vector3;
const c = new Color;
const c1 = new Color;
let timer=-1;
//damageSystem
export const removeFingerSystem = (world) => {
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

        console.log(finger.rotation);
        console.log(finger.position);
        finger.visible = true;
        //finger.rotateX(-Math.PI/2);
        finger.userData.fallDirection = v.set(Math.random()*2-1,Math.random()*2-1,-Math.random()*0.5).normalize().clone().multiplyScalar(20.);
        world.fingersAlive--;
        }
    if(timer>=0){
        
        world.hand.children[0].material.color.lerpColors(c.set(1,0,0),c1.set(1,1,1),Math.sin(timer*20)*0.5+0.5);
        timer+=world.time.delta;        
        if (timer>world.GlobalParameters.safeTime){
            timer=-1;
            world.hand.userData.removeFinger = false;
            world.hand.children[0].material.color.set(1,1,1);
        }
    }
    if (falling_fingers.length >0){
        falling_fingers.forEach((finger,i)=>{
            finger.rotateX(0.1);
            finger.rotateZ(0.1);
            
            finger.position.add(finger.userData.fallDirection.clone().multiplyScalar(world.time.delta));
            finger.scale.subScalar(world.time.delta/2.);
            if (finger.scale.x<0.01){
                finger.visible = false;
                world.scene.remove(finger);
                falling_fingers.splice(i,1);
            }
        })
    }
    
    return world
}