import { defineQuery } from "bitecs"
import {Flow} from "../../curveModifier/CurveModifier.js";
import {CubicBezierCurve3, MathUtils, Matrix4, Quaternion, Vector3} from "three";

const matrix = new Matrix4();
const q = new Quaternion();
const s = new Vector3(1,1,1);
export class CurvedWorld {
    u;
    ccc;
    pos;
    normal;
    tangent;
    biNormal;
    
    geometryNeedsUpdate=true;
    #curves;
    #flow;
    #circle_object;
    
    #knobs ;
    #int_instances;
    #k;
    #cell_size;
    #currentCellIndex;
    
    #distancePassed;
    #distancePassedTotal;
    #firstCurveIndex;
    curveLength;
    #r_spr;

    constructor(count=3, curveLength=7, barSize=8) {

        this.pos =  new Vector3();
        this.normal =  new Vector3();
        this.tangent = new Vector3();
        this.biNormal = new Vector3();
        this.u =  0;
        this.#distancePassed = this.#distancePassedTotal=  0;
        this.#curves= new Array( count );
        this.curveLength = curveLength;
        this.#firstCurveIndex = 0;
        this.#cell_size= barSize;
        this.#currentCellIndex = 0;
        
        //Editor
        this.#r_spr = 7;
        const r_spr = this.#r_spr; 
        {
            let startPoint = new Vector3(0,0,0);
            let cPoint1 = new Vector3(MathUtils.randFloatSpread(r_spr),MathUtils.randFloatSpread(r_spr),-curveLength/2);
            let cPoint2 = new Vector3(MathUtils.randFloatSpread(r_spr),MathUtils.randFloatSpread(r_spr),-curveLength/2);
            let endPoint = new Vector3(MathUtils.randFloatSpread(r_spr),MathUtils.randFloatSpread(r_spr),-curveLength);
            let dir_at_border = new Vector3(0,0,0);
            //MathUtils.randFloatSpread(5);
            
            for (let i = 0; i < count; i++){

                cPoint1.copy(dir_at_border.clone());

                cPoint2.set(MathUtils.randFloatSpread(r_spr),MathUtils.randFloatSpread(r_spr),-curveLength/2);
                endPoint.set(MathUtils.randFloatSpread(r_spr),MathUtils.randFloatSpread(r_spr),-curveLength);

                const curve = new CubicBezierCurve3(
                    startPoint.clone(),
                    cPoint1.add(startPoint).clone(),
                    cPoint2.add(startPoint).clone(),
                    endPoint.add(startPoint).clone()
                );
                dir_at_border.subVectors(endPoint,cPoint2);

                
                startPoint.copy(endPoint);
                
                this.#curves[i] = curve;
            }
        }

        this.#flow = new Flow(this.#curves.length);
        //create instancedFlow
        this.#curves.forEach( function (curve , i ) {
            this.#flow.updateCurve( i, curve );
        }.bind(this) );
        
    }
    resetCurves(world){
        const count=this.#curves.length, curveLength=this.curveLength, barSize=this.#cell_size;
        this.u =  0;
        this.#distancePassed = this.#distancePassedTotal=  0;
        this.#firstCurveIndex = 0;
        this.#currentCellIndex = 0;

        //Editor
        this.#r_spr = 7;
        const r_spr = this.#r_spr;
        {
            let startPoint = new Vector3(0,0,0);
            let cPoint1 = new Vector3(MathUtils.randFloatSpread(r_spr),MathUtils.randFloatSpread(r_spr),-curveLength/2);
            let cPoint2 = new Vector3(MathUtils.randFloatSpread(r_spr),MathUtils.randFloatSpread(r_spr),-curveLength/2);
            let endPoint = new Vector3(MathUtils.randFloatSpread(r_spr),MathUtils.randFloatSpread(r_spr),-curveLength);
            let dir_at_border = new Vector3(0,0,0);
            //MathUtils.randFloatSpread(5);

            for (let i = 0; i < count; i++){

                cPoint1.copy(dir_at_border.clone());

                cPoint2.set(MathUtils.randFloatSpread(r_spr),MathUtils.randFloatSpread(r_spr),-curveLength/2);

                endPoint.set(MathUtils.randFloatSpread(r_spr),MathUtils.randFloatSpread(r_spr),-curveLength);

                const curve = new CubicBezierCurve3(
                    startPoint.clone(),
                    cPoint1.add(startPoint).clone(),
                    cPoint2.add(startPoint).clone(),
                    endPoint.add(startPoint).clone()
                );
                dir_at_border.subVectors(endPoint,cPoint2);


                startPoint.copy(endPoint);

                this.#curves[i] = curve;
            }
        }

        this.#curves.forEach( function (curve , i ) {
            this.#flow.updateCurve( i, curve );
        }.bind(this) );

        //init
        for ( let i = 0; i < barSize; i ++ ) {
            const {curveIndex: ccc, u: uuu} = this.getCurveIndexAndUAt((0.5 + i));
            world.geometry.level.moveGeometryForward(i,uuu,ccc);

        }
        this.geometryNeedsUpdate = true;
        this.updateGeometry(world);
        //reset and place interactives
        world.geometry.interactives.forEach((interactive)=>{
            
            for(let cI=0;cI<count;cI++)
                interactive.clearInstanceIdsAt(cI);
            /*
            for(let cI=1;cI<count;cI++)
                this.placeInteractive(world,cI);*/
        });

    }
    updateCurve(u,cI){
        
        let updC = (fci) =>{

            const curveLength = this.curveLength;
            const random_spread = this.#r_spr;

            //second controlPoint and endPoint of last curve
            const lastCurveIndex = fci-1 < 0 ? this.#curves.length-1 : fci-1;
            this.#distancePassed -= this.#curves[fci].getLength();
            const cP2 = this.#curves[lastCurveIndex].v2;
            const eP = this.#curves[lastCurveIndex].v3;

            this.#curves[fci].v0 = eP.clone();
            const cP1 = new Vector3();
            cP1.subVectors(eP,cP2).add(eP);
            this.#curves[fci].v1 = cP1;
            this.#curves[fci].v2 = new Vector3(MathUtils.randFloatSpread(random_spread),MathUtils.randFloatSpread(random_spread),-curveLength/2).add(eP);
            this.#curves[fci].v3 = new Vector3(MathUtils.randFloatSpread(random_spread),MathUtils.randFloatSpread(random_spread),-curveLength).add(eP);

            this.#curves[fci].updateArcLengths ();
            this.#flow.updateCurve( fci, this.#curves[fci],lastCurveIndex );
            
            
        }
        
        //9.3 - 0.3 > 8+1
        if (u>0.3 && this.#firstCurveIndex !== cI )
         {
            updC(this.#firstCurveIndex , this.#curves.length);
            
            //this.#distancePassed -= this.#curves[this.#firstCurveIndex].getLength();
            const prev_index = this.#firstCurveIndex; 
            this.#firstCurveIndex = cI;
            return prev_index; 
        }
        else 
            return -1;
    }
    #q = new Quaternion();
    
    placeInteractive = (world,cI) => {
        
        if (world.geometry.interactives === undefined) return;
        if (world.win === true || world.editMode === true) return;        
        world.geometry.interactives.forEach((interactive)=>{

            interactive.clearInstanceIdsAt(cI);

            const frFrame = this.#flow.frenetFrames[cI];
            for (let i=0;i<3;i++) {
                //random_matrix

                let r = Math.random();
                const index = Math.floor(r * frFrame.points.length);
                let r1 = Math.random()*0.5 -0.25;
                let r2 = Math.random()*0.5 - 0.25;
                r1*=2;
                r2*=2;
                let p = frFrame.points[index].clone();
                const n = frFrame.normals[index].clone();
                const b = frFrame.binormals[index].clone();

                p.add(n.multiplyScalar(r1)).add(b.multiplyScalar(r2));
                //matrix.makeRotationFromQuaternion(q.random());
                let scaleFactor = 1.;
                if (interactive.object3D.name.includes("ELECTRICITY")) {
                  //  p = frFrame.points[index].clone();
                    matrix.compose(p, q.identity(), s.set(scaleFactor,scaleFactor,scaleFactor));
                    matrix.lookAt(p,p.clone().add(frFrame.tangents[index]),n.clone().applyAxisAngle(frFrame.tangents[index],Math.random()*3.14*2));
                }
                else if(interactive.object3D.name.includes("TO_SELF")) {
                    matrix.compose(p, q.identity(), s.set(scaleFactor,scaleFactor,scaleFactor));
                    matrix.lookAt(p,p.clone().add(frFrame.tangents[index]),n.clone().applyAxisAngle(frFrame.tangents[index],Math.random()*3.14*2));
                }
                else {
                    q.random();
                    matrix.compose(p, q, s.set(scaleFactor,scaleFactor,scaleFactor));
                }
                //matrix.elements[3] = instrument id;


                if (interactive.object3D.name.includes("TO1-Knob")) {
                    matrix.elements[3] = Math.floor(Math.random() * 4.);
                }
                
                if (interactive.object3D.name.includes("TO_SELF")) {
                    let z =0;
                    
                    while(z<4){
                        if (world.AudioSystem.availableMelody[z].notes.length !== 0){
                            matrix.elements[3] = z;
                            break;
                        }    
                        z++;
                    }
                    if (z===4) return;
                }
                matrix.elements[7] = 2;
                interactive.updateInstancesAt(cI,matrix);
            }
            interactive.fillInstanceData();
        })
    }
    updateGeometry =(world) => {

        const { time: { delta, elapsed } } = world

        if ( this.#flow && world.geometry.level !==undefined) {
            this.#flow.uniforms.time.value +=world.time.delta;
            //CircleGeometry Update
            
            //geometry cell has bounding box at z = 1, so we compare without units of measure conversions.
            if ((Math.floor(this.#distancePassedTotal-1))>this.#currentCellIndex){

                const k = this.#currentCellIndex % this.#cell_size;
                //per Cell indexes
                const { curveIndex: ccc, u: uuu} =this.getCurveIndexAndUAt(this.#cell_size+0.5+ this.#currentCellIndex -(this.#distancePassedTotal-this.#distancePassed) );

                world.geometry.level.moveGeometryForward(k,uuu,ccc);

                this.#currentCellIndex++;
            }
            
            if (this.geometryNeedsUpdate === true) {
                this.geometryNeedsUpdate = false;
                world.geometry.level.updatePerPlacingIndex();
            }
        }
        
        return world;
    }
    
    curveSystem = (world) => {
        
        const { time: { delta, elapsed } } = world

        this.#distancePassed += world.GlobalParameters.speed * world.time.delta;
        this.#distancePassedTotal += world.GlobalParameters.speed * world.time.delta;
        
    
        const { curveIndex: ccc, u: uuu} = this.getCurveIndexAndUAt(this.#distancePassed);
        
        this.u = uuu;
        this.ccc= ccc;
        const prev_index = this.updateCurve(uuu,ccc);
        if (prev_index >=0){
            console.log("placingInteractive "+ prev_index);
            this.placeInteractive(world,prev_index);
        }
        const curveFR = this.#flow.frenetFrames[ccc];
        
        this.pos = curveFR.points[Math.floor(uuu*curveFR.points.length)];
        
        this.tangent = curveFR.tangents[Math.floor(uuu*curveFR.tangents.length)];
        this.normal = curveFR.normals[Math.floor(uuu*curveFR.normals.length)];
        this.biNormal = curveFR.binormals[Math.floor(uuu*curveFR.binormals.length)];
        const i=ccc;


        return world
    }
    getCurrentNormalizedCell(offset = 0){
        return (this.#currentCellIndex+offset)% this.#cell_size;
    }
    getCurrentCell(offset = 0){
        return (this.#currentCellIndex+offset);
    }
    getTBNAt(c_u,matrix){
        
        const cI = Math.floor(c_u);
        const u = c_u - cI;
        
        const frFrames = this.#flow.frenetFrames[cI];
        const index = Math.floor(u*frFrames.points.length);
        
        matrix.set(
          /*  frFrames.tangents[index].x,
            frFrames.tangents[index].y,
            frFrames.tangents[index].z,
            0,
            frFrames.normals[index].x,
            frFrames.normals[index].y,
            frFrames.normals[index].z,
            0,
            frFrames.binormals[index].x,
            frFrames.binormals[index].y,
            frFrames.binormals[index].z,
            0,
            frFrames.points[index].x,
            frFrames.points[index].y,
            frFrames.points[index].z,
            1*/

            frFrames.tangents[index].x,
            frFrames.normals[index].x,
            frFrames.binormals[index].x,
            frFrames.points[index].x,

            frFrames.tangents[index].y,
            frFrames.normals[index].y,
            frFrames.binormals[index].y,
            frFrames.points[index].y,
            
            frFrames.tangents[index].z,
            frFrames.normals[index].z,
            frFrames.binormals[index].z,
            frFrames.points[index].z,
            0,
            0,
            0,
            1
        )
    }
    getCurveIndexAndUAt(d){


        let sum=0,bSum=0;
        const l = this.#curves;
        for (let i=0;i<l.length;i++){
            
            const cI = MathUtils.euclideanModulo(i+this.#firstCurveIndex, l.length);
   
            sum+=l[cI].getLength();
            if (sum>d) {
                return {curveIndex: cI, u: (d-bSum)/l[cI].getLength()};
            }
            bSum=sum;
        }
        return {curveIndex: 0, u: 0};
    };
   
}