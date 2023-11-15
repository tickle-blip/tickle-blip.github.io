import { defineQuery } from "bitecs"

import {TransformComponent, CameraTag} from "../components/components.js"
import {Vector3} from "three";

export const movementQuery = defineQuery([TransformComponent,CameraTag])
const exp = (t) =>
    1 / (1 + t + 0.48 * t * t + 0.235 * t * t * t);
export function damp(
    /** The object */
    current,
    /** The key to animate */
    prop,
    /** To goal value */
    target,
    /** Approximate time to reach the target. A smaller value will reach the target faster. */
    smoothTime = 0.25,
    /** Frame delta, for refreshrate independence */
    delta = 0.01,
    /** Optionally allows you to clamp the maximum speed. If smoothTime is 0.25s and looks OK
     *  going between two close points but not for points far apart as it'll move very rapid,
     *  then a maxSpeed of e.g. 1 which will clamp the speed to 1 unit per second, it may now
     *  take much longer than smoothTime to reach the target if it is far away. */
    maxSpeed = Infinity,
    /** Easing function */
    easing = exp,
    /** End of animation precision */
    eps = 0.001
) {
    const vel = "velocity_" + prop;
    if (current.__damp === undefined) current.__damp = {};
    if (current.__damp[vel] === undefined) current.__damp[vel] = 0;

    if (Math.abs(current[prop] - target) <= eps) {
        current[prop] = target;
        return false;
    }

    smoothTime = Math.max(0.0001, smoothTime);
    const omega = 2 / smoothTime;
    const t = easing(omega * delta);
    let change = current[prop] - target;
    const originalTo = target;
    // Clamp maximum maxSpeed
    const maxChange = maxSpeed * smoothTime;
    change = Math.min(Math.max(change, -maxChange), maxChange);
    target = current[prop] - change;
    const temp = (current.__damp[vel] + omega * change) * delta;
    current.__damp[vel] = (current.__damp[vel] - omega * temp) * t;
    let output = target + (change + temp) * t;
    // Prevent overshooting
    if (originalTo - current[prop] > 0.0 === output > originalTo) {
        output = originalTo;
        current.__damp[vel] = (output - originalTo) / delta;
    }
    current[prop] = output;
    return true;
}
const v3d = /*@__PURE__*/ new Vector3();
let a3, b3, c3;
export function damp3(
    current,
    target,
    smoothTime,
    delta,
    maxSpeed,
    easing,
    eps
) {
    //if (typeof target === "number") v3d.setScalar(target);
  //  else if (Array.isArray(target)) v3d.set(target[0], target[1], target[2]);
 //   else 
    v3d.copy(target);
    a3 = damp(current, "x", v3d.x, smoothTime, delta, maxSpeed, easing, eps);
    b3 = damp(current, "y", v3d.y, smoothTime, delta, maxSpeed, easing, eps);
    c3 = damp(current, "z", v3d.z, smoothTime, delta, maxSpeed, easing, eps);
    return a3 || b3 || c3;
}
export function damp2(
    current,
    target,
    smoothTime,
    delta,
    maxSpeed,
    easing,
    eps
) {
    //if (typeof target === "number") v3d.setScalar(target);
    //  else if (Array.isArray(target)) v3d.set(target[0], target[1], target[2]);
    //   else 
    v3d.copy(target);
    a3 = damp(current, "x", v3d.x, smoothTime, delta, maxSpeed, easing, eps);
    b3 = damp(current, "y", v3d.y, smoothTime, delta, maxSpeed, easing, eps);
    //c3 = damp(current, "z", v3d.z, smoothTime, delta, maxSpeed, easing, eps);
    return a3 || b3;
}
const offset = new Vector3();
const v3 = new Vector3();
export const cameraMovementSystem = (world) => {

    const camera = movementQuery(world)
    for (let i = 0; i < camera.length; i++) {
        const e = camera[i]
        const obj3d = world.objects.get(e)

        if (!world.win) {
            if (world.Input.current_input.mouseMove) {
                obj3d.userData.tbnVelocity.x += world.Input.current_input.diffX * 4 * 3.14;
                obj3d.userData.tbnVelocity.y -= world.Input.current_input.diffY * 4 * 3.14;
                //obj3d.userData.tbnVelocity.set(world.Input.current_input.pointerX - world.Input.current_input.startX, world.Input.current_input.pointerY - world.Input.current_input.startY, 0);
            }
            {
              //  obj3d.userData.tbnVelocity.x += world.Input.current_input.MoveDir.x / 8 / 3.14;
              //  obj3d.userData.tbnVelocity.y += world.Input.current_input.MoveDir.y / 8 / 3.14;
                obj3d.userData.tbnVelocity.x+= world.Input.current_input.accX;
                obj3d.userData.tbnVelocity.y-= world.Input.current_input.accY;
                //obj3d.userData.tbnVelocity.set(world.Input.current_input.pointerX - world.Input.current_input.startX, world.Input.current_input.pointerY - world.Input.current_input.startY, 0);
            }
        }
        obj3d.userData.tbnVelocity.x = Math.min(Math.max(obj3d.userData.tbnVelocity.x, -1), 1);
        obj3d.userData.tbnVelocity.y = Math.min(Math.max(obj3d.userData.tbnVelocity.y, -1), 1);
        obj3d.userData.tbnVelocity.clampLength(0,1);
        const p = world.Curve.pos.clone();
       
        
        let z_vel= (Math.max(0.01,1 - obj3d.userData.tbnVelocity.dot(obj3d.userData.tbnVelocity)));
        z_vel = Math.sqrt(z_vel);

        //offset.multiplyScalar(1-z_vel);
        world.GlobalParameters.speed = obj3d.userData.speed*z_vel;
        
        //max offset 0.65
        //starting from 0.6 damp velocity to 0
        obj3d.userData.offset.add(obj3d.userData.tbnVelocity.clone().multiplyScalar(obj3d.userData.speed*world.time.delta)).clampLength(0,0.65);

        //velocity damping near borders
        /*const offset_length = obj3d.userData.offset.length();
        const damping_start = 0.55;
        const damping_end = 0.65;
        if (offset_length>damping_start){
            const st = (offset_length-damping_start)/obj3d.userData.tbnVelocity.length();
            damp2(obj3d.userData.tbnVelocity, v3.set(0, 0, 0), st, world.time.delta);
        }*/
        if (!world.Input.current_input.mouseMove) {
            damp3(obj3d.userData.tbnVelocity, v3.set(0, 0, 0), 0.25, world.time.delta)
           // damp3(obj3d.userData.offset, v3.set(0, 0, 0), 0.25, world.time.delta)
        }
        if (world.win === true || (world.editMode === true && !world.Input.current_input.mouseMove)){
            damp3(obj3d.userData.tbnVelocity, v3.set(0, 0, 0), 0.25, world.time.delta)
            damp3(obj3d.userData.offset, v3.set(0, 0, 0), 0.25, world.time.delta)
        }
        //obj3d.position.copy(p.add(obj3d.userData.offset));
        const tbn_offset = obj3d.userData.offset.clone();
        tbn_offset.copy(world.Curve.biNormal.clone().multiplyScalar(tbn_offset.x).add(world.Curve.normal.clone().multiplyScalar(tbn_offset.y)));
        obj3d.position.copy(p.add(tbn_offset));
        obj3d.up.copy(world.Curve.normal);

        //look_atOffset
        offset.copy(world.Curve.biNormal.clone().multiplyScalar(obj3d.userData.tbnVelocity.x).add(world.Curve.normal.clone().multiplyScalar(obj3d.userData.tbnVelocity.y)));        
        offset.add(world.Curve.tangent.clone().multiplyScalar(2));

        obj3d.lookAt(p.clone().add(offset))
    }
    return world
}
