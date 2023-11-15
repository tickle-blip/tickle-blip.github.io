import {Quaternion, Vector3} from "three";

const v = new Vector3();
const v_t = new Vector3();
const v1 = new Vector3();
const v1_t = new Vector3();
const q = new Quaternion();
let c = 0;
let iter=0;

function sdCylinder(p,a,b,r)
{
    v.subVectors(b,a);
    v1.subVectors(p,a);
    const baba = v.dot(v);
    const paba = v1.dot(v);
    const x = (v1.multiplyScalar(baba).sub(v.multiplyScalar(paba))).length() - r*baba;
    const y = Math.abs(paba-baba*0.5)-baba*0.5;
    const x2 = x*x;
    const y2 = y*y*baba;

    const d = (Math.max(x,y)<0.0)?-Math.min(x2,y2):(((x>0.0)?x2:0.0)+((y>0.0)?y2:0.0));

    return Math.sign(d)*Math.sqrt(Math.abs(d))/baba;
}
export const interactionSystem = (world) => {
    let procceedInteraction = (name,variation)=>{
        switch (name){
            default:
                break;
            case "TO_SELF":
                world.AudioSystem.addInstrumentOnRandomAvailablePosition(variation);
                world.progressMustUpdate=true;
                world.Curve.geometryNeedsUpdate = true;
                break;
            case "ELECTRICITY":
                world.hand.userData.removeFinger=true;
                break;
            case "BOMB":
                world.hand.userData.removeFinger=true;
                break;
            case "TO1-Knob-C":
                world.AudioSystem.addEffectOnRandomAvailablePosition(0,variation);
                world.Curve.geometryNeedsUpdate = true;
                break;
            case "TO1-Knob-T":
                world.AudioSystem.addEffectOnRandomAvailablePosition(1,variation);
                world.Curve.geometryNeedsUpdate = true;
                break;            
            case "TO1-Knob-Ic":
            world.AudioSystem.addEffectOnRandomAvailablePosition(2,variation);
                world.Curve.geometryNeedsUpdate = true;
            break;
            //floor need update
        }

    }
    world.geometry.interactives.forEach((interactive)=> {
        const n = interactive.object3D.name;
        
        interactive.object3D.userData.indexDictionary[world.Curve.ccc].id.forEach((matrix)=>
        {
            
            let d = 100;
            if (n === "ELECTRICITY"){
                q.setFromRotationMatrix(matrix);
                v.setFromMatrixPosition(matrix);
                
                v_t.set(0,1,0).applyQuaternion(q);
                v1_t.set(0,-1,0).applyQuaternion(q);
                v_t.add(v);
                v1_t.add(v);
                d = sdCylinder(world.hand.position,v_t,v1_t,0.1);
                    
                if (d<0){
                    d=0;
                }
                else{
                    d = 100;
                }
            }
            else {
                v.setFromMatrixPosition(matrix);
                d = v.distanceTo(world.hand.position);
             //   d = 100;
            }
            //move to proceed interaction
            if (d<0.25 && matrix.elements[7]!==-1){
                procceedInteraction(n,matrix.elements[3]);
                matrix.elements[7] = -1;
                if (n === "ELECTRICITY")
                if (c=== world.Curve.ccc){
                    iter++;
                }
                else{
                    //iter = 0;
                    c= world.Curve.ccc;
                    
                }
            }
            
        });
    });
    return world
}