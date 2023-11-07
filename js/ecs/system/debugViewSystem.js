import {ArrowHelper, BufferGeometry, Line, LineBasicMaterial, Matrix4, Raycaster, Vector3} from "three";

const v = new Vector3();
const m = new Matrix4();
let c = -1;

const tmp = new Vector3();

const raySphereIntersection =(origin,direction,center,radius)=>{
    tmp.subVectors(origin,center);
    const a = direction.dot(direction);
    const b = 2.0 * tmp.dot(direction);
    const c = tmp.dot(tmp) - radius*radius;
    const discriminant = b*b - 4*a*c;
    if(discriminant < 0){
        return -1.0;
    }
    else{
        return (-b - Math.sqrt(discriminant)) / (2.0*a);

    }
}
export const debugViewSystem = (world) => {
    let debug_notes = (note,cell)=>{
        const id_on_beat = note.id_on_beat;
        const instrument = note.instrument;
        const effect = note.effect;

        //test
        const matrix =world.geometry.level.instancedMatrices[id_on_beat].clone();

        let v_dir = new Vector3(0,1,0);
        let transformed_dir = v_dir.applyMatrix4(matrix);
        tmp.setFromMatrixPosition(matrix);
        tmp.add(transformed_dir.multiplyScalar(-0.08));
        matrix.setPosition(tmp);
     //   for (let i = 0;i<world.GlobalParameters.loops;i++){

            const bb = cell;
            v_dir = new Vector3(0,0,1);
            const v_origin = new Vector3(0,0,0);
            const c_u = world.geometry.level.offsets[bb];
            world.Curve.getTBNAt(c_u,m);
            transformed_dir = v_dir.applyMatrix4(matrix);
            const transformed_origin = v_origin.applyMatrix4(matrix);
            transformed_origin.applyMatrix4(m);
            transformed_dir.applyMatrix4(m);
            transformed_dir.sub(transformed_origin);
            transformed_dir.normalize();

            if (note.geometry === undefined)
                note.geometry=[];
            if (note.geometry[bb] === undefined) {
                const points = [];
                const geometry = new BufferGeometry().setFromPoints(points);
                note.geometry[bb] = geometry;
                const l = new Line(geometry,new LineBasicMaterial({color:0x00ff00,linewidth:30 }))
                l.frustumCulled =false;
                world.scene.add(l);
            }
            v.set(0,0,0);
            note.geometry[bb].setFromPoints([transformed_origin,v.addVectors(transformed_dir.clone().multiplyScalar(0.6),transformed_origin)]);
            note.geometry[bb].verticesNeedUpdate = true;
      //  }
       // const d = raySphereIntersection(transformed_origin,transformed_dir,world.camera.position,0.2);

     /*   if (d !==-1){
            world.AudioSystem.playInstrumentAt(instrument,d);
        }*/


        //calculate position and direction using CURVE tangents and normals binormals.
        //cast a ray and look for interaction with camera sphere
        // if (interaction) get distance
        //  pitch instrument with distance, play instrument
    }

    //  for (let r =0; r< 1;r++)
      //  procceedInteraction(r);
  /*  world.AudioSystem.melody.forEach((beat_data,beat) => 
    {
        
        if (beat_data.instances.length !== 0)
            beat_data.instances.forEach((note)=>{
            debug_notes(note,beat);
        });
    });
*/
    const forward_beat = (world.Curve.getCurrentNormalizedCell(1)) % world.GlobalParameters.barSize;
    world.AudioSystem.melody[forward_beat].instances.forEach((note)=>{
        debug_notes(note,world.Curve.getCurrentNormalizedCell(1));
    });
   /* const prev_beat = (world.Curve.getCurrentNormalizedCell(-1)) % world.GlobalParameters.barSize;
    world.AudioSystem.melody[prev_beat].instances.forEach((note)=>{
        debug_notes(note,world.Curve.getCurrentNormalizedCell(-1));
    });*/
    /* const forward_beat = (world.Curve.ccc +1) % world.GlobalParameters.barSize;
     world.AudioSystem.melody[forward_beat].instances.forEach((note)=>{
         procceedInteraction(note);
     });*/

    return world
}