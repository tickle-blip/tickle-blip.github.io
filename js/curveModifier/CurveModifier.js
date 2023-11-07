// Original src: https://github.com/zz85/threejs-path-flow
import {
	DataTexture,
	RGBAFormat,
	FloatType,
	RepeatWrapping,
	Mesh,
	InstancedMesh,
	NearestFilter,
	DynamicDrawUsage,
	Matrix4, Vector3, Quaternion, InstancedBufferAttribute
} from 'three';

const CHANNELS = 4;
const TEXTURE_WIDTH = 1024;
const TEXTURE_HEIGHT = 4;

const matrix = new Matrix4();
const q = new Quaternion();
const s = new Vector3(1,1,1);

let FlowSystem;
/**
 * Make a new DataTexture to store the descriptions of the curves.
 *
 * @param { number } numberOfCurves the number of curves needed to be described by this texture.
 */
export function initSplineTexture( numberOfCurves = 1 ) {

	const dataArray = new Float32Array( TEXTURE_WIDTH * TEXTURE_HEIGHT * numberOfCurves * CHANNELS );
	const dataTexture = new DataTexture(
		dataArray,
		TEXTURE_WIDTH,
		TEXTURE_HEIGHT * numberOfCurves,
		RGBAFormat,
		FloatType
	);

	dataTexture.wrapS = RepeatWrapping;
	dataTexture.wrapY = RepeatWrapping;
	dataTexture.magFilter = NearestFilter;
	dataTexture.needsUpdate = true;

	return dataTexture;

}

/**
 * Write the curve description to the data texture
 *
 * @param { DataTexture } texture The DataTexture to write to
 * @param { Curve } splineCurve The curve to describe
 * @param { number } offset Which curve slot to write to
 */
export function updateSplineTexture( texture, splineCurve, offset = 0 ) {

	const numberOfPoints = Math.floor( TEXTURE_WIDTH * ( TEXTURE_HEIGHT / 4 ) );
	splineCurve.arcLengthDivisions = numberOfPoints / 2;
	splineCurve.updateArcLengths();
	const points = splineCurve.getSpacedPoints( numberOfPoints );
	let frenetFrames;
		frenetFrames = splineCurve.computeFrenetFrames( numberOfPoints, false );

	for ( let i = 0; i < numberOfPoints; i ++ ) {

		const rowOffset = Math.floor( i / TEXTURE_WIDTH );
		const rowIndex = i % TEXTURE_WIDTH;

		let pt = points[ i ];
		setTextureValue( texture, rowIndex, pt.x, pt.y, pt.z, 0 + rowOffset + ( TEXTURE_HEIGHT * offset ) );
		pt = frenetFrames.tangents[ i ];
		setTextureValue( texture, rowIndex, pt.x, pt.y, pt.z, 1 + rowOffset + ( TEXTURE_HEIGHT * offset ) );
		pt = frenetFrames.normals[ i ];
		setTextureValue( texture, rowIndex, pt.x, pt.y, pt.z, 2 + rowOffset + ( TEXTURE_HEIGHT * offset ) );
		pt = frenetFrames.binormals[ i ];
		setTextureValue( texture, rowIndex, pt.x, pt.y, pt.z, 3 + rowOffset + ( TEXTURE_HEIGHT * offset ) );

	}

	texture.needsUpdate = true;

}
export function updateSplineTextureLookingAtPrevious( texture, splineCurve, offset = 0, lastIndex = undefined, frFrames ) {

	if (splineCurve.computeFrenetFramesLookingAtPreviuos === undefined )	
		splineCurve.computeFrenetFramesLookingAtPreviuos = function( segments, closed, lastNormal, lastBinormal ) {

		// see http://www.cs.indiana.edu/pub/techreports/TR425.pdf

		const normal = new Vector3();

		const tangents = [];
		const normals = [];
		const binormals = [];

		const vec = new Vector3();
		const mat = new Matrix4();

		// compute the tangent vectors for each segment on the curve

		for ( let i = 0; i <= segments; i ++ ) {

			const u = i / segments;

			tangents[ i ] = this.getTangentAt( u, new Vector3() );

		}

		// select an initial normal vector perpendicular to the first tangent vector,
		// and in the direction of the minimum tangent xyz component

		normals[ 0 ] = lastNormal;
		binormals[ 0 ] = lastBinormal;


		// compute the slowly-varying normal and binormal vectors for each segment on the curve


			function clamp( value, min, max ) {

				return Math.max( min, Math.min( max, value ) );

			}

			for ( let i = 1; i <= segments; i ++ ) {

			normals[ i ] = normals[ i - 1 ].clone();

			binormals[ i ] = binormals[ i - 1 ].clone();

			vec.crossVectors( tangents[ i - 1 ], tangents[ i ] );

			if ( vec.length() > Number.EPSILON ) {

				vec.normalize();

				const theta = Math.acos( clamp( tangents[ i - 1 ].dot( tangents[ i ] ), - 1, 1 ) ); // clamp for floating pt errors

				normals[ i ].applyMatrix4( mat.makeRotationAxis( vec, theta ) );

			}

			binormals[ i ].crossVectors( tangents[ i ], normals[ i ] );

		}

		// if the curve is closed, postprocess the vectors so the first and last normal vectors are the same

		if ( closed === true ) {

			let theta = Math.acos( clamp( normals[ 0 ].dot( normals[ segments ] ), - 1, 1 ) );
			theta /= segments;

			if ( tangents[ 0 ].dot( vec.crossVectors( normals[ 0 ], normals[ segments ] ) ) > 0 ) {

				theta = - theta;

			}

			for ( let i = 1; i <= segments; i ++ ) {

				// twist a little...
				normals[ i ].applyMatrix4( mat.makeRotationAxis( tangents[ i ], theta * i ) );
				binormals[ i ].crossVectors( tangents[ i ], normals[ i ] );

			}

		}

		return {
			tangents: tangents,
			normals: normals,
			binormals: binormals
		};

	}

	const numberOfPoints = Math.floor( TEXTURE_WIDTH * ( TEXTURE_HEIGHT / 4 ) );
	splineCurve.arcLengthDivisions = numberOfPoints / 2;
	splineCurve.updateArcLengths();
	const points = splineCurve.getSpacedPoints( numberOfPoints );

	let frenetFrames;
	if (lastIndex === undefined && offset ===0)
		frenetFrames = splineCurve.computeFrenetFrames( numberOfPoints, false );
	else {
		if (lastIndex === undefined) lastIndex = offset - 1;
		frenetFrames = splineCurve.computeFrenetFramesLookingAtPreviuos(numberOfPoints, false, frFrames[lastIndex].normals[numberOfPoints - 1], frFrames[lastIndex].binormals[numberOfPoints - 1]);
	}
	frenetFrames.points = points;
	frFrames[offset] = frenetFrames;
	for ( let i = 0; i < numberOfPoints; i ++ ) {

		const rowOffset = Math.floor( i / TEXTURE_WIDTH );
		const rowIndex = i % TEXTURE_WIDTH;

		let pt = frenetFrames.points[ i ];
		setTextureValue( texture, rowIndex, pt.x, pt.y, pt.z, 0 + rowOffset + ( TEXTURE_HEIGHT * offset ) );
		pt = frenetFrames.tangents[ i ];
		setTextureValue( texture, rowIndex, pt.x, pt.y, pt.z, 1 + rowOffset + ( TEXTURE_HEIGHT * offset ) );
		pt = frenetFrames.normals[ i ];
		setTextureValue( texture, rowIndex, pt.x, pt.y, pt.z, 2 + rowOffset + ( TEXTURE_HEIGHT * offset ) );
		pt = frenetFrames.binormals[ i ];
		setTextureValue( texture, rowIndex, pt.x, pt.y, pt.z, 3 + rowOffset + ( TEXTURE_HEIGHT * offset ) );
		//if (i === numberOfPoints - 1) {
		//	lastFRFrame[offset] = ( {N:frenetFrames.normals[ i ],BN : frenetFrames.binormals[ i ]});
		//}
	}

	texture.needsUpdate = true;

}


function setTextureValue( texture, index, x, y, z, o ) {

	const image = texture.image;
	const { data } = image;
	const i = CHANNELS * TEXTURE_WIDTH * o; // Row Offset
	data[ index * CHANNELS + i + 0 ] = x;
	data[ index * CHANNELS + i + 1 ] = y;
	data[ index * CHANNELS + i + 2 ] = z;
	data[ index * CHANNELS + i + 3 ] = 1;

}

/**
 * Create a new set of uniforms for describing the curve modifier
 *
 * @param { DataTexture } Texture which holds the curve description
 */
export function getUniforms( splineTexture ) {

	const uniforms = {
		spineTexture: { value: splineTexture },
		pathOffset: { type: 'f', value: 0 }, // time of path curve
		pathSegment: { type: 'f', value: 1 }, // fractional length of path
		spineOffset: { type: 'f', value: 0 },
		spineLength: { type: 'f', value: 0.01 },
		flow: { type: 'i', value: 1 },
		time: { type: 'f', value: 0 },
		colors:{ value: [0.8,0.8,0.8, 0.1,0.0,0.3, 1,1,1, 0.7,0.2,0.2, 0.2,0.2,0.6]},
	};
	return uniforms;

}


export function modifyInstancedInstancedShader( material, uniforms, numberOfCurves = 1 ) {
	
	if ( material.__ok ) return;
	material.__ok = true;

	material.onBeforeCompile = ( shader ) => {

		if ( shader.__modified ) return;
		shader.__modified = true;

		Object.assign( shader.uniforms, uniforms );

		const vertexShader = `
		attribute uint _id;
		attribute vec3 _normal_;
		uniform sampler2D spineTexture;
		uniform float pathOffset;
		uniform float pathSegment;
		uniform float spineOffset;
		uniform float spineLength;
		uniform int flow;
		uniform float time;
		uniform vec3 colors[5];
		float textureLayers = ${TEXTURE_HEIGHT * numberOfCurves}.;
		float textureStacks = ${numberOfCurves}.;

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
void main() {
#include <beginnormal_vertex>
vec3 pos = position.xyz;
pos.yz+=pos.yz*sin(time*10.+2.*random(float(_id)))*0.05;
float n03 = instanceMatrix[0][3];
float n13 = instanceMatrix[1][3];
float n23 = instanceMatrix[2][3];
instanceMatrix[0][3] = instanceMatrix[1][3] = instanceMatrix[2][3] = 0.;

vec4 worldPos = instanceMatrix * modelMatrix * vec4(pos, 1.);

bool bend = flow > 0;
float xWeight = bend ? 0. : 1.;
#ifdef USE_INSTANCING
float pathOffsetFromInstanceMatrix = n23;
float spineLengthFromInstanceMatrix = n03;

float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
float mt = (spinePortion * pathSegment + pathOffset + pathOffsetFromInstanceMatrix);
//mt = pathOffset;
#else
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
float mt = (spinePortion * pathSegment + pathOffset)*textureStacks;
#endif

float m_mt = mod(mt, textureStacks);
float rowOffset = floor(m_mt)*4.;
mt = fract(m_mt);
#ifdef USE_INSTANCING
//rowOffset += n13 * ${TEXTURE_HEIGHT}.;
#endif

vec3 spinePos = texture2D(spineTexture, vec2(mt, (0. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 a =        texture2D(spineTexture, vec2(mt, (1. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 b =        texture2D(spineTexture, vec2(mt, (2. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 c =        texture2D(spineTexture, vec2(mt, (3. + rowOffset + 0.5) / textureLayers)).xyz;
mat3 basis = mat3(a, b, c);

vec3 transformed = basis*
 vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
	+ spinePos;

vec3 transformedNormal = normalMatrix * (basis * objectNormal);

			` ).replace(
				'#include <project_vertex>',
				`vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`
			)
			.replace('#include <color_vertex>',
				`#ifdef USE_INSTANCING_COLOR
				int r_n = int(random(float(_id)+pathOffsetFromInstanceMatrix)*4.);
				r_n = int(time/2.)%4;
				r_n = int(pathOffsetFromInstanceMatrix);
	//vColor.xyz = colors[r_n];
	vColor.xyz = vec3(1,1,1);
	#if defined( USE_MAP )
	vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
	vMapUv/=2.;
	vMapUv.xy += nUv;
	#endif
	#endif`);

		shader.vertexShader = vertexShader;

	};
}
function assignAttribute(mesh, name, count,stride){
	mesh.setAttribute(name.toString(), new InstancedBufferAttribute(new Int32Array(count), stride));
	mesh.attributes[name.toString()].setUsage(DynamicDrawUsage);
	mesh.attributes[name.toString()].needsUpdate = true;
}
/**
 * A helper class for making meshes bend aroudn curves
 */
export class Flow {
	
	constructor( numberOfCurves = 1 ) {

		
		const splineTexure = initSplineTexture( numberOfCurves );
		const uniforms = getUniforms( splineTexure );
		/*
		const obj3D = mesh.clone();
		obj3D.traverse( function ( child ) {

			if (
				child instanceof Mesh ||
				child instanceof InstancedMesh
			) {

				child.material = child.material.clone();
				modifyShader( child.material, uniforms, numberOfCurves );
				
			}

		} );
		this.object3D = obj3D;

		*/
		this.renderable = [];
		this.curveArray = new Array( numberOfCurves );
		this.curveLengthArray = new Array( numberOfCurves );

		this.splineTexure = splineTexure;
		this.uniforms = uniforms;
		this.frenetFrames = new Array( numberOfCurves );
		FlowSystem = this;
	}

	updateCurve( index, curve,lastIndex = undefined ) {

		if ( index >= this.curveArray.length ) throw Error( 'Index out of range for Flow' );
		const curveLength = curve.getLength();
		this.uniforms.spineLength.value = curveLength;
		this.curveLengthArray[ index ] = curveLength;
		this.curveArray[ index ] = curve;
		//updateSplineTexture( this.splineTexure, curve, index );
		updateSplineTextureLookingAtPrevious( this.splineTexure, curve, index,lastIndex, this.frenetFrames );
		
	}

	addFlowRenderer(object){
		let r = new FlowRenderable(this,object);
		this.renderable.push(r);
		return r;
	}
	addSIFlowRenderer(count,geometry,material){
		let r = new SimpleInstancedFlowRenderable(count, geometry, material);
		this.renderable.push(r);
		return r;
	}
	addIFlowRenderer(count,geometry,material,instancedMatrices){
		let r = new InstancedFlowRenderable(count, geometry, material, instancedMatrices);
		this.renderable.push(r);
		return r;
	}	
	addIIFlowRenderer(count,geometry,material,instancedMatrices){
		let r = new InteractionInstancedFlowRenderable(count, geometry, material, instancedMatrices);
		this.renderable.push(r);
		return r;
	}
}
/**
 * A helper class for creating instanced versions of flow, where the instances are placed on the curve.
 */
export class FlowLevelGroup{
	constructor(cellCount,instancedMatrices) {
		this.cellCount = cellCount;
		this.instancedMatrices = instancedMatrices;
		this.uniforms = {
			flowData: {value: new Array(cellCount * 2).fill(0)},
			iMatrix: {value: new Array(instancedMatrices.length * 16).fill(0)}
		}

		for (let i =0; i<instancedMatrices.length; i++){
			instancedMatrices[i].toArray(this.uniforms.iMatrix.value,i*16);
		}
		
		this.offsets = new Array( cellCount ).fill( 0 );
	}
	renderables = [];
	addObject(type, objectGeometry,uniforms = undefined){

		const m = new type(this.cellCount, objectGeometry,this.instancedMatrices,{...this.uniforms, ...uniforms} );
		
		//if (uniforms !== undefined)
		//Object.assign(m.uniforms,uniforms);
		this.renderables.push(m);
		return m;	
	}

	writeChanges( index, cI = undefined ) {
		/*	this.object3D.getMatrixAt(index, matrix);
            matrix.elements[ 3 ] = this.curveLengthArray[ cI ];
            matrix.elements[ 7 ] = cI;
            matrix.elements[ 11 ] = this.offsets[ index ];
            console.log(matrix)*/
		//const indexArray = this.object3D.userData.indexDictionary[index].value;
		//set uniform at index to 3 values.
		
		this.uniforms.flowData.value[index*2+0] = FlowSystem.curveLengthArray[ cI ];
		this.uniforms.flowData.value[index*2+1] = this.offsets[ index ];
		/*for (let i=0; i<indexArray.length; i++){
			
			this.object3D.getMatrixAt( indexArray[i], matrix );
			matrix.elements[ 3 ] = this.curveLengthArray[ cI ];
			matrix.elements[ 7 ] = cI;
			matrix.elements[ 11 ] = this.offsets[ index ];
			//this.object3D.instanceMatrix.array[index*this.instanceCount+3+i*16]  = this.curveLengthArray[ cI ];
			//this.object3D.instanceMatrix.array[index*this.instanceCount+7+i*16]= cI;
			//this.object3D.instanceMatrix.array[index*this.instanceCount+11+i*16]= this.offsets[ index ];
			this.object3D.setMatrixAt( indexArray[i], matrix );
		}
		//console.log(this.object3D.instanceMatrix.array)
		this.object3D.getMatrixAt( index, matrix )
		this.object3D.instanceMatrix.needsUpdate = true;
*/
	}

	moveIndividualAlongCurve( index, offset, cI = undefined) {
		this.offsets[ index ] += offset;
		this.writeChanges( index,cI );
	}

	setIndividualAlongCurve( index, offset, cI = undefined) {
		this.offsets[ index ] = offset;
		this.writeChanges( index,cI );
	}

	updatePerPlacingIndex = (cell, uuu,ccc) =>{

		//clear objects from current cell (bar_cell or curve_cell)
		
		this.renderables.forEach(r => r.updatePerPlacingIndex(cell,uuu,ccc));
		//instancedObject.updateInstancesAt(cell)
		//per curve indexes and matrices    
	}	
	moveGeometryForward = (cell, uuu,ccc) =>{
		this.setIndividualAlongCurve( cell, uuu+ccc,ccc  );
	}
}
class FlowRenderable{
	uniforms  = {
		spineTexture: { value: null },
		pathOffset: { type: 'f', value: 0 }, // time of path curve
		pathSegment: { type: 'f', value: 1 }, // fractional length of path
		spineOffset: { type: 'f', value: 0 },
		spineLength: { type: 'f', value: 400 },
		flow: { type: 'i', value: 1 },
		time: { type: 'f', value: 0 },
		colors:{ value: [ 0.05,0.2,0.6, 0.1,0.6,0.3, 0.3,0.3,0.45, 0.7,0.1,0.1, 0.05,0.05,0.05]},
	};
	curveLengthArray;
	attributeNames;
	
	modifyShader( material, uniforms, numberOfCurves = 1 ) {

		if ( material.__ok ) return;
		material.__ok = true;

		material.onBeforeCompile = ( shader ) => {

			if ( shader.__modified ) return;
			shader.__modified = true;

			Object.assign( shader.uniforms, uniforms );

			const vertexShader = `
		attribute uint _id;
		attribute vec3 _normal_;
		attribute uint instanceID;
		uniform sampler2D spineTexture;
		uniform float pathOffset;
		uniform float pathSegment;
		uniform float spineOffset;
		uniform float spineLength;
		uniform int flow;
		uniform float time;
		uniform vec3 colors[4];
		float textureLayers = ${TEXTURE_HEIGHT * numberOfCurves}.;
		float textureStacks = ${numberOfCurves}.;

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
void main() {
#include <beginnormal_vertex>
vec3 pos = position.xyz;
pos.yz+=pos.yz*sin(time*10.+2.*random(float(_id)))*0.05;
vec4 worldPos = modelMatrix * vec4(pos, 1.);

bool bend = flow > 0;
float xWeight = bend ? 0. : 1.;
#ifdef USE_INSTANCING
float pathOffsetFromInstanceMatrix = instanceMatrix[2][3];
float spineLengthFromInstanceMatrix = instanceMatrix[0][3];
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
float mt = (spinePortion * pathSegment + pathOffset + pathOffsetFromInstanceMatrix);
//mt = pathOffset;
#else
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
float mt = (spinePortion * pathSegment + pathOffset)*textureStacks;
#endif

float m_mt = mod(mt, textureStacks);
float rowOffset = floor(m_mt)*4.;
mt = fract(m_mt);
#ifdef USE_INSTANCING
//rowOffset += instanceMatrix[1][3] * ${TEXTURE_HEIGHT}.;
#endif

vec3 spinePos = texture2D(spineTexture, vec2(mt, (0. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 a =        texture2D(spineTexture, vec2(mt, (1. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 b =        texture2D(spineTexture, vec2(mt, (2. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 c =        texture2D(spineTexture, vec2(mt, (3. + rowOffset + 0.5) / textureLayers)).xyz;
mat3 basis = mat3(a, b, c);

vec3 transformed = basis*
 vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
	+ spinePos;

vec3 transformedNormal = normalMatrix * (basis * objectNormal);

			` ).replace(
					'#include <project_vertex>',
					`vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`
				)
				.replace('#include <color_vertex>',
					`#ifdef USE_INSTANCING_COLOR
				int r_n = int(random(float(_id)+pathOffsetFromInstanceMatrix)*4.);
				r_n = int(time/2.)%4;
				r_n = int(pathOffsetFromInstanceMatrix);
	//vColor.xyz = colors[r_n];
	vColor.xyz = vec3(1,1,1);
	#if defined( USE_MAP )
	vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
	vMapUv/=2.;
	vMapUv.xy += nUv;
	#endif
	#endif`);

			shader.vertexShader = vertexShader;

		};
	}
	constructor(objectGeometry,_uniforms){
		this.uniforms.spineTexture = FlowSystem.uniforms.spineTexture; 
		this.uniforms.spineLength = FlowSystem.uniforms.spineLength; 
		this.uniforms.pathOffset = FlowSystem.uniforms.pathOffset; 
		this.uniforms.time = FlowSystem.uniforms.time; 
		this.curveLengthArray = FlowSystem.curveLengthArray;
		//const obj3D = geometry.clone();
		let modifyShaderOn = (geometry) =>{
			geometry.traverse( function ( child ) {

				if (
					child instanceof Mesh ||
					child instanceof InstancedMesh
				) {

					child.material = child.material.clone();
					
					this.modifyShader( child.material, this.uniforms, this.curveLengthArray.length );

				}

			}.bind(this) )
		}
		if (Array.isArray(objectGeometry))
			objectGeometry.forEach((geometry) =>{modifyShaderOn(geometry)});
		else
			modifyShaderOn(objectGeometry);
		
		if (_uniforms !== undefined)
			Object.assign(this.uniforms,_uniforms);
		
		this.object3D = objectGeometry;
	}

	moveAlongCurve( amount ) {

		this.uniforms.pathOffset.value += amount;
		//console.log( this.uniforms.pathOffset.value );
	}

	setAlongCurve( amount ) {
		this.uniforms.pathOffset.value = amount;
	}


}
class SimpleInstancedFlowRenderable  extends FlowRenderable{
	modifyShader( material, uniforms, numberOfCurves = 1 ) {

		if ( material.__ok ) return;
		material.__ok = true;

		material.onBeforeCompile = ( shader ) => {

			if ( shader.__modified ) return;
			shader.__modified = true;

			Object.assign( shader.uniforms, uniforms );

			const vertexShader = `
		attribute uint _id;
		attribute vec3 _normal_;
		attribute uint instanceID;
		uniform sampler2D spineTexture;
		uniform float pathOffset;
		uniform float pathSegment;
		uniform float spineOffset;
		uniform float spineLength;
		uniform int flow;
		uniform float time;
		uniform vec3 colors[4];
		float textureLayers = ${TEXTURE_HEIGHT * numberOfCurves}.;
		float textureStacks = ${numberOfCurves}.;

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
void main() {
#include <beginnormal_vertex>

  //float angle =    sin(time*0.5+2.*random(float(instanceMatrix[2][3])));
  
  float angle = time*0.5+float(instanceMatrix[2][3])*time;
  float si = sin(angle);
  float co = cos(angle);
  mat3 rotMat = mat3(
    1,0,0,
    0,co, si, 
    0,-si, co 
  );
  rotMat = mat3(1);
  
vec3 pos = rotMat * position.xyz;
pos.yz+=pos.yz*sin(time*10.+2.*random(float(_id)))*0.05;
vec4 worldPos = modelMatrix * vec4(pos, 1.);

bool bend = flow > 0;
float xWeight = bend ? 0. : 1.;
#ifdef USE_INSTANCING
float pathOffsetFromInstanceMatrix = instanceMatrix[2][3];
float spineLengthFromInstanceMatrix = instanceMatrix[0][3];
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
float mt = (spinePortion * pathSegment + pathOffset + pathOffsetFromInstanceMatrix);
//mt = pathOffset;
#else
float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
float mt = (spinePortion * pathSegment + pathOffset)*textureStacks;
#endif

float m_mt = mod(mt, textureStacks);
float rowOffset = floor(m_mt)*4.;
mt = fract(m_mt);
#ifdef USE_INSTANCING
//rowOffset += instanceMatrix[1][3] * ${TEXTURE_HEIGHT}.;
#endif

vec3 spinePos = texture2D(spineTexture, vec2(mt, (0. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 a =        texture2D(spineTexture, vec2(mt, (1. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 b =        texture2D(spineTexture, vec2(mt, (2. + rowOffset + 0.5) / textureLayers)).xyz;
vec3 c =        texture2D(spineTexture, vec2(mt, (3. + rowOffset + 0.5) / textureLayers)).xyz;
mat3 basis = mat3(a, b, c);

vec3 transformed = basis*
 vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
	+ spinePos;

vec3 transformedNormal = normalMatrix * (basis * rotMat * objectNormal);

			` ).replace(
					'#include <project_vertex>',
					`vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`
				)
				.replace('#include <color_vertex>',
					`#ifdef USE_INSTANCING_COLOR
				int r_n = int(random(float(_id)+pathOffsetFromInstanceMatrix)*4.);
				
				r_n = int(random(float(_id)+pathOffsetFromInstanceMatrix)*4.);
			//	r_n = int(time/2.)%4;
			//	r_n = int(pathOffsetFromInstanceMatrix);
	//			r_n = int(_id)%2;
	r_n =2;
				vColor.xyz = vec3(0.05);
				vColor.x = mix(vColor.x,0.25,sin(time*10.+2.*random(float(_id)))*0.5+0.5);
			/*	if (float(_id) < 0.5) vColor.xyz = vec3(1,0,0);
				else if (float(_id) < 1.5 ) vColor.xyz = vec3(0,1,0);
				else if (float(_id) < 2.5 ) vColor.xyz = vec3(0,0,1);
				else vColor.xyz = vec3(0);*/
				//vColor.xyz = vec3(1,1,1);
				#if defined( USE_MAP )
				vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
				vMapUv/=2.;
				vMapUv.xy += nUv;
				#endif
				#endif`
				);

			shader.vertexShader = vertexShader;

		};
	}
	constructor( count, geometry, material){

		const mesh = new InstancedMesh(
			geometry,
			material,
			count
		);
		
		mesh.instanceMatrix.setUsage( DynamicDrawUsage );
		mesh.frustumCulled = false;
		super( mesh,undefined );
		console.log(this.uniforms)
		this.offsets = new Array( count ).fill( 0 );
	}
	writeChanges( index, cI = undefined ) {

		matrix.elements[ 3 ] = this.curveLengthArray[ cI ];
		matrix.elements[ 7 ] = cI;
		matrix.elements[ 11 ] = this.offsets[ index ];
		this.object3D.setMatrixAt( index, matrix );
		this.object3D.instanceMatrix.needsUpdate = true;

	}

	moveIndividualAlongCurve( index, offset, cI = undefined) {
		this.offsets[ index ] += offset;
		this.writeChanges( index,cI );
	}

	setIndividualAlongCurve( index, offset, cI = undefined) {
		this.offsets[ index ] = offset;
		this.writeChanges( index,cI );
	}

	/**
	 * Select which curve to use for an element
	 *
	 * @param {number} index the index of the instanced element to update
	 * @param {number} curveNo the index of the curve it should use
	 */
	setCurve( index, curveNo ) {

		if ( isNaN( curveNo ) ) throw Error( 'curve index being set is Not a Number (NaN)' );
		this.writeChanges( index,curveNo );

	}

}
export class InstancedFlowRenderable  extends FlowRenderable{
	matrices = undefined;
	cell_count = 0;
	instane_count = 0;
	modifyShader( material, uniforms, numberOfCurves = 1 ) {

		if ( material.__ok ) return;
		material.__ok = true;
		
		material.onBeforeCompile = ( shader ) => {

			if ( shader.__modified ) return;
			shader.__modified = true;

			Object.assign( shader.uniforms, uniforms );

			const vertexShader = `
				attribute int instanceID;
				attribute int flowID;
				attribute int effectID;

				uniform sampler2D spineTexture;
				
				uniform float pathOffset;
				uniform float pathSegment;
				uniform float spineOffset;
				uniform float spineLength;
				
				uniform float flowData[16];
				uniform mat4 iMatrix[40];
				uniform vec3 colors[4];
				uniform float rotationSpeed;
				uniform float triAmplitude;
				
				uniform int flow;
				uniform float time;

				float textureLayers = ${TEXTURE_HEIGHT * numberOfCurves}.;
				float textureStacks = ${numberOfCurves}.;

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
				
				mat3 getRotZ(float angle){
				 float si = sin(angle);
					  float co = cos(angle);
					  return mat3(
						co, si, 0.0,
						-si, co, 0.0,
						0.0, 0.0, 1.0
					  );
				}
				
				mat3 rotationMatrix(vec3 axis, float angle) {
					axis = normalize(axis);
					float s = sin(angle);
					float c = cos(angle);
					float oc = 1.0 - c;

					return mat3(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,
					oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  
					oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c      );
				}

				vec3 rotate(vec3 v, vec3 axis, float angle,out mat3 rotMat) {
				mat3 m = rotationMatrix(axis, angle);
				rotMat =m;
					return (m * v).xyz;
				}
				void main() {
					#include <beginnormal_vertex>
					vec3 pos = position.xyz;
					float n03 =  flowData[0+flowID*2];
					float n23 = flowData[1+flowID*2];
					
					mat4 im = iMatrix[instanceID];
					float r = random(float(instanceID));
					float local_angle =    sin(time*10.+2.*random(float(instanceID)));
					mat3 local_rotMat = getRotZ(local_angle);
					
					float angle =    sin((time+random(float(flowID)*100.)))*rotationSpeed*3.14;
					//rotate in at origin, then translate to world 
					mat3 rotMat;
					vec4 worldPos = /*modelMatrix **/ im  * vec4(local_rotMat*pos, 1.);
					
					worldPos.xyz = rotate(worldPos.xyz,vec3(1,0,0),angle,rotMat);
					//yz - towards center direction
					worldPos.yz+=worldPos.yz*sin(time*10.+2.*random(float(instanceID)))*0.05*triAmplitude;
					//yz - towards center direction

					bool bend = flow > 0;
					float xWeight = bend ? 0. : 1.;
					#ifdef USE_INSTANCING
					float pathOffsetFromInstanceMatrix = n23;
					float spineLengthFromInstanceMatrix = n03;
					
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffsetFromInstanceMatrix);
					
					#else
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffset);
					#endif
					
					float cI = mod(u_per_vertex, textureStacks);
					float rowOffset = floor(cI)*4.;
					
					float u_norm = fract(u_per_vertex);
					
					vec3 spinePos = texture2D(spineTexture, vec2(u_norm, (0. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 a =        texture2D(spineTexture, vec2(u_norm, (1. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 b =        texture2D(spineTexture, vec2(u_norm, (2. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 c =        texture2D(spineTexture, vec2(u_norm, (3. + rowOffset + 0.5) / textureLayers)).xyz;

					mat3 basis = mat3(a, b, c);
					
					vec3 transformed = basis*
					 vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
						+ spinePos;
						
					//transformed = worldPos.xyz+0.1*float(instanceID);
					
					vec3 transformedNormal =  local_rotMat*objectNormal;
					
					mat3 im_rot = mat3( im );
					transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
					transformedNormal = im_rot *transformedNormal;
					transformedNormal = rotMat * transformedNormal;
					transformedNormal = normalMatrix * (basis * transformedNormal);
					
						` ).replace(
								'#include <project_vertex>',
								`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
							gl_Position = projectionMatrix * mvPosition;`
							)
							.replace('#include <color_vertex>',
								`
							int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
							r_n = effectID;
							//r_n = int(time/2.)%4;
							//r_n = int(pathOffsetFromInstanceMatrix);
				vColor.xyz = colors[r_n];
				#if defined( USE_MAP )
				vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
				vMapUv/=2.;
				vMapUv.xy += nUv;
				#endif
				//vColor.xyz = vec3(1,1,1);
	
	`);

			shader.vertexShader = vertexShader;

		};
	}

	constructor(cellCount, objectGeometry, instancedMatrices,uniforms = undefined){
		const instance_count = instancedMatrices.length;
		let createMeshFrom = (geometry)=> {
			const mesh = new InstancedMesh(
				geometry.geometry.clone() ,
				geometry.material.clone(),
				0 //because we store matrices as uniforms.
			);
			mesh.name = geometry.name;
			mesh.material.vertexColors = true;
			mesh.frustumCulled = false;
			mesh.userData.per_cell_count = 0;
			let iy = 0;
			let id = 0;
			assignAttribute(mesh.geometry, 'instanceID', cellCount*instance_count,1 );
			assignAttribute(mesh.geometry, 'flowID', cellCount*instance_count,1 );
			assignAttribute(mesh.geometry, 'effectID', cellCount*instance_count,1 );
			
			return mesh;
		};
		let mesh;
		
		if (Array.isArray(objectGeometry)){
			mesh = [];
			objectGeometry.forEach((geometry)=>{
				mesh.push(createMeshFrom(geometry));
			});
		}
		else{
			mesh = createMeshFrom(objectGeometry);
		}
		super( mesh, uniforms);

		this.matrices = instancedMatrices;
		this.cell_count = cellCount;
		this.instane_count = instance_count;
		
		for (let i = 0; i < cellCount; i++) {
			this.clearInstanceIdsAt(i)
		}
		//pass uniforms to merge for shared uniforms
		if (uniforms === undefined || uniforms.flowData === undefined || uniforms.iMatrix === undefined) {
			this.uniforms.flowData = {value: new Array(cellCount * 2).fill(0)};
			this.uniforms.iMatrix = {value: new Array(instance_count * 16).fill(0)};
		
			for (let i =0; i<instancedMatrices.length; i++){
				instancedMatrices[i].toArray(this.uniforms.iMatrix.value,i*16);
			}
		}
		else 
		{
			this.uniforms.flowData = uniforms.flowData;
			this.uniforms.iMatrix = uniforms.iMatrix;
		}
		this.offsets = new Array( cellCount ).fill( 0 );
	}
	
	writeChanges( index, cI = undefined ) {
		/*	this.object3D.getMatrixAt(index, matrix);
            matrix.elements[ 3 ] = this.curveLengthArray[ cI ];
            matrix.elements[ 7 ] = cI;
            matrix.elements[ 11 ] = this.offsets[ index ];
            console.log(matrix)*/
		//const indexArray = this.object3D.userData.indexDictionary[index].value;
		//set uniform at index to 3 values.
	
		this.uniforms.flowData.value[index*2+0] = this.curveLengthArray[ cI ];
		this.uniforms.flowData.value[index*2+1] = this.offsets[ index ];
		/*for (let i=0; i<indexArray.length; i++){
			
			this.object3D.getMatrixAt( indexArray[i], matrix );
			matrix.elements[ 3 ] = this.curveLengthArray[ cI ];
			matrix.elements[ 7 ] = cI;
			matrix.elements[ 11 ] = this.offsets[ index ];
			//this.object3D.instanceMatrix.array[index*this.instanceCount+3+i*16]  = this.curveLengthArray[ cI ];
			//this.object3D.instanceMatrix.array[index*this.instanceCount+7+i*16]= cI;
			//this.object3D.instanceMatrix.array[index*this.instanceCount+11+i*16]= this.offsets[ index ];
			this.object3D.setMatrixAt( indexArray[i], matrix );
		}
		//console.log(this.object3D.instanceMatrix.array)
		this.object3D.getMatrixAt( index, matrix )
		this.object3D.instanceMatrix.needsUpdate = true;
*/
		
	}

	moveIndividualAlongCurve( index, offset, cI = undefined) {
		this.offsets[ index ] += offset;
		this.writeChanges( index,cI );
	}

	setIndividualAlongCurve( index, offset, cI = undefined) {
		this.offsets[ index ] = offset;
		this.writeChanges( index,cI );
	}

	/**
	 * Select which curve to use for an element
	 *
	 * @param {number} index the index of the instanced element to update
	 * @param {number} curveNo the index of the curve it should use
	 */
	setCurve( index, curveNo ) {

		if ( isNaN( curveNo ) ) throw Error( 'curve index being set is Not a Number (NaN)' );
		this.writeChanges( index,curveNo );

	}
	clearInstanceIdsAt = (cell) =>
	{
		let clearAt = (obj)=>{
			obj.count = 0;
		}
		
		if (Array.isArray(this.object3D))
		{
			this.object3D.forEach((obj)=>
			{
				clearAt(obj,cell);
			})
		}
		else
		{

			clearAt(this.object3D,cell);
		}
	}
	updateInstancesAt = ()=>
	{
		//set new instance matrix indexes for given cell (bar_cell or curve_cell)
		/*const index_array = Array.from(Array(this.matrices.length).keys())
		if (Array.isArray(this.object3D)) {
			this.object3D.forEach((obj) => {
				if (obj.userData.random_indexes === undefined) obj.userData.random_indexes = []
				else obj.userData.random_indexes = [];
				for (let i=0;i<obj.userData.per_cell_count;i++){
						obj.userData.random_indexes.push(Math.floor(Math.random()*this.matrices.length));
				}
			})
		}*/
		for (let i=0;i<this.uniforms.activeEffectID.value.length;i++){
			const beat = this.uniforms.activeEffectID.value[i].beat;
			const id_on_beat = this.uniforms.activeEffectID.value[i].id_on_beat;
			const effect = this.uniforms.activeEffectID.value[i].effect;
			const color = this.uniforms.activeEffectID.value[i].color;
			//effect = [0,2];
			const obj = this.object3D[effect];
			
			const bar_size = this.cell_count/this.uniforms.barLoops.value;
			//for (let j=0; j<this.uniforms.barLoops.value;j++) {
				obj.geometry.attributes.flowID.array[obj.count] = beat;
				obj.geometry.attributes.flowID.needsUpdate = true;

				obj.geometry.attributes.instanceID.array[obj.count] = id_on_beat;
				obj.geometry.attributes.instanceID.needsUpdate = true;

				obj.geometry.attributes.effectID.array[obj.count] = color;
				obj.geometry.attributes.effectID.needsUpdate = true;

				obj.count++;
			//}
		}
	}
	
/*	fillInstanceData = () =>{
		let fillData = (obj) =>{
			let counter=0;
			//fill all instance attributes to updated values
			
			for (let i = 0; i < obj.userData.indexDictionary.length; i++)
			{
				
				const arr = obj.userData.indexDictionary[i].id;
				for (let j = 0; j < arr.length; j++) {
					//flowID is cell_number
					obj.geometry.attributes.flowID.array[obj.count] = i;
					obj.geometry.attributes.flowID.needsUpdate = true;
					obj.geometry.attributes.instanceID.array[obj.count] = arr[j];
					obj.geometry.attributes.instanceID.needsUpdate = true;
					
					//todo rename to melodyID
					console.log(obj.name)
					let melodyID = i*this.instane_count+arr[j];
					if (this.uniforms.melodyInstrumentID !== undefined) {

						melodyID %=this.uniforms.melodyInstrumentID.value.length;
						obj.geometry.attributes.melodyInstrumentID.array[obj.count] = this.uniforms.melodyInstrumentID.value[melodyID];
					}
					if (this.uniforms.melodyEffectID !== undefined) {
						melodyID %=this.uniforms.melodyEffectID.length;
						obj.geometry.attributes.melodyInstrumentID.array[obj.count] = this.uniforms.melodyEffectID[melodyID];
					}
					obj.geometry.attributes.melodyInstrumentID.needsUpdate = true;

					obj.count++;
				}
			}
			
		}
		if(Array.isArray(this.object3D))
		{
			this.object3D.forEach((obj)=>{
				fillData(obj);
			})
		}
		else
		{
			fillData(this.object3D);
		}
	}*/
	
	updatePlacement = (cell,uuu,ccc)=>{
		
		this.setIndividualAlongCurve( cell, uuu+ccc,ccc  );
	}

	updatePerPlacingIndex = (cell, uuu,ccc) =>{

		//clear objects from current cell (bar_cell or curve_cell)
		this.clearInstanceIdsAt(cell);
		this.updateInstancesAt(cell);
		//this.fillInstanceData();
		//this.updatePlacement(cell,uuu,ccc);
		//instancedObject.updateInstancesAt(cell)
		//per curve indexes and matrices    
	}
}
export class TriInstancedFlowRenderable  extends FlowRenderable{
	matrices = undefined;
	cell_count = 0;
	instane_count = 0;

	modifyShader ( material, uniforms, numberOfCurves = 1 ) {

		if ( material.__ok ) return;
		material.__ok = true;
		material.onBeforeCompile = ( shader ) => {

			if ( shader.__modified ) return;
			shader.__modified = true;

			Object.assign( shader.uniforms, uniforms );

			// language=GLSL
			const vertexShader = `
				attribute int instanceID;
				attribute int flowID;
				attribute int melodyInstrumentID;
				uniform sampler2D spineTexture;
				
				uniform float pathOffset;
				uniform float pathSegment;
				uniform float spineOffset;
				uniform float spineLength;
				//uniform int melodyInstrumentID[40];
				uniform float flowData[16];
				uniform mat4 iMatrix[40];
				uniform vec3 colors[5];
				uniform float rotationSpeed;
				uniform float triAmplitude;
				
				uniform int flow;
				uniform float time;

				float textureLayers = ${TEXTURE_HEIGHT * numberOfCurves}.;
				float textureStacks = ${numberOfCurves}.;

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
				
				mat3 getRotZ(float angle){
				 float si = sin(angle);
					  float co = cos(angle);
					  return mat3(
						co, si, 0.0,
						-si, co, 0.0,
						0.0, 0.0, 1.0
					  );
				}
				mat3 getRotX(float angle){
				
				  float si = sin(angle);
				  float co = cos(angle);
				  return mat3(
					co, 0, si,
					0, co, -si,
					0.0, 0.0, 1.0
				  );
				 }
				mat3 rotationMatrix(vec3 axis, float angle) {
					axis = normalize(axis);
					float s = sin(angle);
					float c = cos(angle);
					float oc = 1.0 - c;

					return mat3(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,
					oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  
					oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c      );
				}

				vec3 rotate(vec3 v, vec3 axis, float angle,out mat3 rotMat) {
				mat3 m = rotationMatrix(axis, angle);
				rotMat =m;
					return (m * v).xyz;
				}
				void main() {
					#include <beginnormal_vertex>
					vec3 pos = position.xyz;
					float n03 =  flowData[0+flowID*2];
					float n23 = flowData[1+flowID*2];
					
					mat4 im = iMatrix[instanceID];
					float r = random(float(instanceID));
					float angle =    sin((time+random(float(flowID)*100.)))*rotationSpeed*3.14;
					mat3 rotMat;
					
					//rotate in at origin, then translate to world 
					vec4 worldPos = /*modelMatrix **/ im  * vec4(pos, 1.);
					worldPos.xyz = rotate(worldPos.xyz,vec3(1,0,0),angle,rotMat);
					//yz - towards center direction
					worldPos.yz+=worldPos.yz*sin(time*10.+2.*random(float(instanceID)))*0.05*triAmplitude;

					bool bend = flow > 0;
					float xWeight = bend ? 0. : 1.;
					#ifdef USE_INSTANCING
					float pathOffsetFromInstanceMatrix = n23;
					float spineLengthFromInstanceMatrix = n03;
					
					
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffsetFromInstanceMatrix);
					
					#else
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffset);
					#endif
					
					float cI = mod(u_per_vertex, textureStacks);
					float rowOffset = floor(cI)*4.;
					
					float u_norm = fract(u_per_vertex);
					
					vec3 spinePos = texture2D(spineTexture, vec2(u_norm, (0. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 a =        texture2D(spineTexture, vec2(u_norm, (1. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 b =        texture2D(spineTexture, vec2(u_norm, (2. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 c =        texture2D(spineTexture, vec2(u_norm, (3. + rowOffset + 0.5) / textureLayers)).xyz;

					mat3 basis = mat3(a, b, c);
					
					vec3 transformed = basis*
					 vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
						+ spinePos;
						
					//transformed = worldPos.xyz+0.1*float(instanceID);
					
					vec3 transformedNormal =  objectNormal;
					
					mat3 im_rot = mat3( im );
					transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
					transformedNormal =rotMat* im_rot *transformedNormal;
						
					transformedNormal = normalMatrix * (basis * transformedNormal);
					
						` ).replace(
					'#include <project_vertex>',
					`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
							gl_Position = projectionMatrix * mvPosition;`
				)
				.replace('#include <color_vertex>',
					`
				//int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
				//int r_n = 2;
				//r_n = int(time/2.)%4;
				//r_n = int(pathOffsetFromInstanceMatrix);
				int r_n = melodyInstrumentID;
				//vColor.xyz = colors[];
				if (r_n==4)
					{
						vColor.xyz = vec3(0.3,0.3,0.3);
						vColor.x = mix(vColor.x,0.45,sin(time*10.+2.*random(float(instanceID)))*0.5+0.5);
						r_n = 2;
					}
					else
						vColor.xyz = vec3(1);
				#if defined( USE_MAP )
				vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
				vMapUv/=2.;
				vMapUv.xy += nUv;
				#endif
				//vColor.xyz = vec3(1,1,1);
	
	`);

			shader.vertexShader = vertexShader;

		};
	}
	constructor(cellCount, objectGeometry, instancedMatrices,uniforms = undefined){
		const instance_count = instancedMatrices.length;
		let createMeshFrom = (geometry)=> {
			const mesh = new InstancedMesh(
				geometry.geometry.clone() ,
				geometry.material.clone(),
				0 //because we store matrices as uniforms.
			);
			mesh.name = geometry.name;
			mesh.material.vertexColors = true;
			mesh.frustumCulled = false;
			mesh.userData.per_cell_count = 0;
			let iy = 0;
			let id = 0;
			assignAttribute(mesh.geometry, 'instanceID', cellCount*instance_count,1 );
			assignAttribute(mesh.geometry, 'flowID', cellCount*instance_count,1 );
			assignAttribute(mesh.geometry, 'melodyInstrumentID', cellCount*instance_count,1 );
			
			return mesh;
		};
		let mesh;
		
		if (Array.isArray(objectGeometry)){
			mesh = [];
			objectGeometry.forEach((geometry)=>{
				mesh.push(createMeshFrom(geometry));
			});
		}
		else{
			mesh = createMeshFrom(objectGeometry);
		}
		
		super( mesh,uniforms);

		this.matrices = instancedMatrices;
		this.cell_count = cellCount;
		this.instane_count = instance_count;
		
		this.fillInstanceData(cellCount,instance_count);
		if (this.uniforms.melodyInstrumentID !== undefined) {
			this.uniforms.melodyInstrumentID.value.addOnModifyEventListener((index)=>{

				const id_on_beat= index%40 ;
				const beat = Math.floor(index/40);
				//this.updateInstanceAt(beat,id_on_beat);
				this.updateInstanceAt(index);
			});
		}
		//pass uniforms to merge for shared uniforms
		if (uniforms === undefined || uniforms.flowData === undefined || uniforms.iMatrix === undefined) {
			this.uniforms.flowData = {value: new Array(cellCount * 2).fill(0)};
			this.uniforms.iMatrix = {value: new Array(instance_count * 16).fill(0)};
		
			for (let i =0; i<instancedMatrices.length; i++){
				instancedMatrices[i].toArray(this.uniforms.iMatrix.value,i*16);
			}
		}
		else 
		{
			this.uniforms.flowData = uniforms.flowData;
			this.uniforms.iMatrix = uniforms.iMatrix;
		}
		this.offsets = new Array( cellCount ).fill( 0 );
	}
	
	writeChanges( index, cI = undefined ) {
		/*	this.object3D.getMatrixAt(index, matrix);
            matrix.elements[ 3 ] = this.curveLengthArray[ cI ];
            matrix.elements[ 7 ] = cI;
            matrix.elements[ 11 ] = this.offsets[ index ];
            console.log(matrix)*/
		//const indexArray = this.object3D.userData.indexDictionary[index].value;
		//set uniform at index to 3 values.
	
		this.uniforms.flowData.value[index*2+0] = this.curveLengthArray[ cI ];
		this.uniforms.flowData.value[index*2+1] = this.offsets[ index ];
		/*for (let i=0; i<indexArray.length; i++){
			
			this.object3D.getMatrixAt( indexArray[i], matrix );
			matrix.elements[ 3 ] = this.curveLengthArray[ cI ];
			matrix.elements[ 7 ] = cI;
			matrix.elements[ 11 ] = this.offsets[ index ];
			//this.object3D.instanceMatrix.array[index*this.instanceCount+3+i*16]  = this.curveLengthArray[ cI ];
			//this.object3D.instanceMatrix.array[index*this.instanceCount+7+i*16]= cI;
			//this.object3D.instanceMatrix.array[index*this.instanceCount+11+i*16]= this.offsets[ index ];
			this.object3D.setMatrixAt( indexArray[i], matrix );
		}
		//console.log(this.object3D.instanceMatrix.array)
		this.object3D.getMatrixAt( index, matrix )
		this.object3D.instanceMatrix.needsUpdate = true;
*/
		
	}

	moveIndividualAlongCurve( index, offset, cI = undefined) {
		this.offsets[ index ] += offset;
		this.writeChanges( index,cI );
	}

	setIndividualAlongCurve( index, offset, cI = undefined) {
		this.offsets[ index ] = offset;
		this.writeChanges( index,cI );
	}

	/**
	 * Select which curve to use for an element
	 *
	 * @param {number} index the index of the instanced element to update
	 * @param {number} curveNo the index of the curve it should use
	 */
	setCurve( index, curveNo ) {

		if ( isNaN( curveNo ) ) throw Error( 'curve index being set is Not a Number (NaN)' );
		this.writeChanges( index,curveNo );

	}

	fillInstanceData = (beats,instance_count) =>{
		const obj =this.object3D;
		{
			let counter=0;
			//fill all instance attributes to updated values
			obj.count = 0;
			for (let i = 0; i < beats; i++)
			{
				for (let j = 0; j < instance_count; j++) {
					//flowID is cell_number
					obj.geometry.attributes.flowID.array[obj.count] = i;
					obj.geometry.attributes.flowID.needsUpdate = true;
					obj.geometry.attributes.instanceID.array[obj.count] = j;
					obj.geometry.attributes.instanceID.needsUpdate = true;
					
					//todo rename to melodyID
					let melodyID = i*this.instane_count+j;
					if (this.uniforms.melodyInstrumentID !== undefined) {
						melodyID %=this.uniforms.melodyInstrumentID.value.length;
						//obj.geometry.attributes.melodyInstrumentID.array[obj.count] = Math.floor(Math.random()*4);
						obj.geometry.attributes.melodyInstrumentID.array[obj.count] = this.uniforms.melodyInstrumentID.value[melodyID];
					}
					obj.geometry.attributes.melodyInstrumentID.needsUpdate = true;

					obj.count++;
				}
			}
			
		}
	}
	updateInstanceAt = (index) =>{
		const obj =this.object3D;

		if (this.uniforms.melodyInstrumentID !== undefined) {
			obj.geometry.attributes.melodyInstrumentID.array[index] = this.uniforms.melodyInstrumentID.value[index];
		}
		obj.geometry.attributes.melodyInstrumentID.needsUpdate = true;

	}
	updatePlacement = (cell,uuu,ccc)=>{
		
		this.setIndividualAlongCurve( cell, uuu+ccc,ccc  );
	}

	updatePerPlacingIndex = (cell, uuu,ccc) =>{

	//	this.fillInstanceData(this.cell_count,this.instane_count);
		//this.updatePlacement(cell,uuu,ccc);
		//instancedObject.updateInstancesAt(cell)
		//per curve indexes and matrices    
	}
}
export class VisualQuadInstancedFlowRenderable  extends FlowRenderable{
	matrices = undefined;
	cell_count = 0;
	instane_count = 0;

	modifyShader ( material, uniforms, numberOfCurves = 1 ) {

		if ( material.__ok ) return;
		material.__ok = true;
		material.onBeforeCompile = ( shader ) => {

			if ( shader.__modified ) return;
			shader.__modified = true;

			Object.assign( shader.uniforms, uniforms );

			const vertexShader = `
				attribute int instanceID;
				attribute int flowID;
				attribute int melodyInstrumentID;
				uniform sampler2D spineTexture;
				
				uniform float pathOffset;
				uniform float pathSegment;
				uniform float spineOffset;
				uniform float spineLength;
				//uniform int melodyInstrumentID[40];
				uniform float flowData[16];
				uniform mat4 iMatrix[40];
				uniform vec3 colors[5];
				
				
				uniform int flow;
				uniform float time;

				float textureLayers = ${TEXTURE_HEIGHT * numberOfCurves}.;
				float textureStacks = ${numberOfCurves}.;

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
				
				mat3 getRotZ(float angle){
				 float si = sin(angle);
					  float co = cos(angle);
					  return mat3(
						co, si, 0.0,
						-si, co, 0.0,
						0.0, 0.0, 1.0
					  );
				}
				vec2 SpriteSheetAnimationUV(vec2 uv, float size, float speed)
				{
					uv /= size;
					uv.x += floor(mod(time * speed, 1.0) * size) / size;
					uv.y -= 1./size;
					uv.y += (1. - floor(mod(time * speed / size, 1.0) * size) / size);
					return uv;
				}
				void main() {
					#include <beginnormal_vertex>
					vec3 pos = position.xyz;
					float n03 =  flowData[0+flowID*2];
					float n23 = flowData[1+flowID*2];
					
					mat4 im = iMatrix[instanceID];
					float r = random(float(instanceID));
					float angle =    sin(time*10.+2.*random(float(instanceID)));
					mat3 rotMat = getRotZ(angle);
					
					//rotate in at origin, then translate to world 
					vec4 worldPos = /*modelMatrix **/ im  * vec4(pos, 1.);
					
					//yz - towards center direction
					worldPos.yz+=worldPos.yz*sin(time*10.+2.*random(float(instanceID)))*0.05;

					bool bend = flow > 0;
					float xWeight = bend ? 0. : 1.;
					#ifdef USE_INSTANCING
					float pathOffsetFromInstanceMatrix = n23;
					float spineLengthFromInstanceMatrix = n03;
					
					
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffsetFromInstanceMatrix);
					
					#else
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffset);
					#endif
					
					float cI = mod(u_per_vertex, textureStacks);
					float rowOffset = floor(cI)*4.;
					
					float u_norm = fract(u_per_vertex);
					
					vec3 spinePos = texture2D(spineTexture, vec2(u_norm, (0. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 a =        texture2D(spineTexture, vec2(u_norm, (1. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 b =        texture2D(spineTexture, vec2(u_norm, (2. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 c =        texture2D(spineTexture, vec2(u_norm, (3. + rowOffset + 0.5) / textureLayers)).xyz;

					mat3 basis = mat3(a, b, c);
					
					vec3 transformed = basis*
					 vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
						+ spinePos;
						
					//transformed = worldPos.xyz+0.1*float(instanceID);
					
					vec3 transformedNormal =  rotMat*objectNormal;
					
					mat3 im_rot = mat3( im );
					transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
					transformedNormal = im_rot *transformedNormal;
						
					transformedNormal = normalMatrix * (basis * transformedNormal);
					
						` ).replace(
					'#include <project_vertex>',
					`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
							gl_Position = projectionMatrix * mvPosition;`
				)
				.replace('#include <color_vertex>',
					`
				//int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
				//int r_n = 2;
				//r_n = int(time/2.)%4;
				//r_n = int(pathOffsetFromInstanceMatrix);
				//vColor.xyz = colors[];
				
					vColor.xyz = vec3(2.,1.,0.9);
					//vColor.xyz*=(1.-vMapUv.y);
					//vColor.xyz = vec3(10.);
					//vColor.xyz = vec3(10.);
				
				#if defined( USE_MAP )
				
				float r_n = floor((random(float(instanceID)))*3.)/3.;
				float r_n_1 = floor((random(float(instanceID+14))*3.))/3.;
				r_n=0.;
				r_n_1=0.;
				float swap = vMapUv.x;
				//vMapUv.x = (vMapUv.y+r_n);
				//vMapUv.y = (swap+r_n_1);
				
				//vMapUv=SpriteSheetAnimationUV(vMapUv,3.,4.);
				//vMapUv.xy/=3.;
				//vMapUv.x+= mod(floor(time/3.),3.);
				//vMapUv.y+= mod(floor(mod(time,3.)),3.);
				//vMapUv=fract(vMapUv);
				vMapUv.y -= time*2.;
				#endif
				//vColor.xyz = vec3(1,1,1);
	
	`);

			shader.vertexShader = vertexShader;

		};
	}
	constructor(cellCount, objectGeometry, instancedMatrices,uniforms = undefined){
		const instance_count = instancedMatrices.length;
		let createMeshFrom = (geometry)=> {
			const mesh = new InstancedMesh(
				geometry.geometry.clone() ,
				geometry.material.clone(),
				0 //because we store matrices as uniforms.
			);
			mesh.name = geometry.name;
			mesh.material.vertexColors = true;
			mesh.frustumCulled = false;
			mesh.userData.per_cell_count = 0;
			let iy = 0;
			let id = 0;
			assignAttribute(mesh.geometry, 'instanceID', cellCount*instance_count,1 );
			assignAttribute(mesh.geometry, 'flowID', cellCount*instance_count,1 );
			assignAttribute(mesh.geometry, 'melodyInstrumentID', cellCount*instance_count,1 );
			
			return mesh;
		};
		let mesh;
		
		if (Array.isArray(objectGeometry)){
			mesh = [];
			objectGeometry.forEach((geometry)=>{
				mesh.push(createMeshFrom(geometry));
			});
		}
		else{
			mesh = createMeshFrom(objectGeometry);
		}
		super( mesh);

		this.matrices = instancedMatrices;
		this.cell_count = cellCount;
		this.instane_count = instance_count;
		
		//todo rework clear update fill
		for (let i = 0; i < cellCount; i++) {

			this.clearInstanceIdsAt(i);
			this.updateInstancesAt(i);
		}
			this.fillInstanceData();
		//pass uniforms to merge for shared uniforms
		if (uniforms === undefined || uniforms.flowData === undefined || uniforms.iMatrix === undefined) {
			this.uniforms.flowData = {value: new Array(cellCount * 2).fill(0)};
			this.uniforms.iMatrix = {value: new Array(instance_count * 16).fill(0)};
		
			for (let i =0; i<instancedMatrices.length; i++){
				instancedMatrices[i].toArray(this.uniforms.iMatrix.value,i*16);
			}
		}
		else 
		{
			this.uniforms.flowData = uniforms.flowData;
			this.uniforms.iMatrix = uniforms.iMatrix;
		}
		this.offsets = new Array( cellCount ).fill( 0 );
	}
	
	writeChanges( index, cI = undefined ) {
		/*	this.object3D.getMatrixAt(index, matrix);
            matrix.elements[ 3 ] = this.curveLengthArray[ cI ];
            matrix.elements[ 7 ] = cI;
            matrix.elements[ 11 ] = this.offsets[ index ];
            console.log(matrix)*/
		//const indexArray = this.object3D.userData.indexDictionary[index].value;
		//set uniform at index to 3 values.
	
		this.uniforms.flowData.value[index*2+0] = this.curveLengthArray[ cI ];
		this.uniforms.flowData.value[index*2+1] = this.offsets[ index ];
		/*for (let i=0; i<indexArray.length; i++){
			
			this.object3D.getMatrixAt( indexArray[i], matrix );
			matrix.elements[ 3 ] = this.curveLengthArray[ cI ];
			matrix.elements[ 7 ] = cI;
			matrix.elements[ 11 ] = this.offsets[ index ];
			//this.object3D.instanceMatrix.array[index*this.instanceCount+3+i*16]  = this.curveLengthArray[ cI ];
			//this.object3D.instanceMatrix.array[index*this.instanceCount+7+i*16]= cI;
			//this.object3D.instanceMatrix.array[index*this.instanceCount+11+i*16]= this.offsets[ index ];
			this.object3D.setMatrixAt( indexArray[i], matrix );
		}
		//console.log(this.object3D.instanceMatrix.array)
		this.object3D.getMatrixAt( index, matrix )
		this.object3D.instanceMatrix.needsUpdate = true;
*/
		
	}

	moveIndividualAlongCurve( index, offset, cI = undefined) {
		this.offsets[ index ] += offset;
		this.writeChanges( index,cI );
	}

	setIndividualAlongCurve( index, offset, cI = undefined) {
		this.offsets[ index ] = offset;
		this.writeChanges( index,cI );
	}

	/**
	 * Select which curve to use for an element
	 *
	 * @param {number} index the index of the instanced element to update
	 * @param {number} curveNo the index of the curve it should use
	 */
	setCurve( index, curveNo ) {

		if ( isNaN( curveNo ) ) throw Error( 'curve index being set is Not a Number (NaN)' );
		this.writeChanges( index,curveNo );

	}
	clearInstanceIdsAt = (cell) =>
	{
		let clearAt = (obj,cell)=>{
			if (obj.userData.indexDictionary === undefined) obj.userData.indexDictionary = new Array(this.cell_count);
			if (obj.userData.indexDictionary[cell] === undefined ) {
				obj.userData.indexDictionary[cell] = {id: []};
			}
			//obj.count-=obj.userData.indexDictionary[cell].id.length;
			obj.count = 0;
			obj.userData.indexDictionary[cell].id = [];
		}
		
		if (Array.isArray(this.object3D))
		{
			this.object3D.forEach((obj)=>
			{
				clearAt(obj,cell);
			})
		}
		else
		{

			clearAt(this.object3D,cell);
		}
	}
	updateInstancesAt = (cell)=>
	{
		//set new instance matrix indexes for given cell (bar_cell or curve_cell)
		/*const index_array = Array.from(Array(this.matrices.length).keys())
		if (Array.isArray(this.object3D)) {
			this.object3D.forEach((obj) => {
				if (obj.userData.random_indexes === undefined) obj.userData.random_indexes = []
				else obj.userData.random_indexes = [];
				for (let i=0;i<obj.userData.per_cell_count;i++){
						obj.userData.random_indexes.push(Math.floor(Math.random()*this.matrices.length));
				}
			})
		}*/
		for (let j =0;j<this.matrices.length;j++)
		{
			if (Array.isArray(this.object3D))
			{
				let choice = Math.floor(Math.random()*(this.object3D.length+10));
				if (choice >= this.object3D.length) continue;
				const m = this.object3D[choice];
				if (m.userData.indexDictionary === undefined) m.userData.indexDictionary = new Array(this.cell_count);
				if (m.userData.indexDictionary[cell] === undefined ) {
					m.userData.indexDictionary[cell] = {id: []};
				}
				m.userData.indexDictionary[cell].id.push(j);
				//m.count++;
			}	
			else {
				this.object3D.userData.indexDictionary[cell].id.push(j);
			}
		}
	}
	
	fillInstanceData = () =>{
		let fillData = (obj) =>{
			let counter=0;
			//fill all instance attributes to updated values
			
			for (let i = 0; i < obj.userData.indexDictionary.length; i++)
			{
				
				const arr = obj.userData.indexDictionary[i].id;
				for (let j = 0; j < arr.length; j++) {
					//flowID is cell_number
					obj.geometry.attributes.flowID.array[obj.count] = i;
					obj.geometry.attributes.flowID.needsUpdate = true;
					obj.geometry.attributes.instanceID.array[obj.count] = arr[j];
					obj.geometry.attributes.instanceID.needsUpdate = true;
					
					//todo rename to melodyID
					let melodyID = i*this.instane_count+arr[j];
					if (this.uniforms.melodyInstrumentID !== undefined) {

						melodyID %=this.uniforms.melodyInstrumentID.value.length;
						obj.geometry.attributes.melodyInstrumentID.array[obj.count] = this.uniforms.melodyInstrumentID.value[melodyID];
					}
					obj.geometry.attributes.melodyInstrumentID.needsUpdate = true;

					obj.count++;
				}
			}
			
		}
		if(Array.isArray(this.object3D))
		{
			this.object3D.forEach((obj)=>{
				fillData(obj);
			})
		}
		else
		{
			fillData(this.object3D);
		}
	}
	
	updatePlacement = (cell,uuu,ccc)=>{
		
		this.setIndividualAlongCurve( cell, uuu+ccc,ccc  );
	}

	updatePerPlacingIndex = (cell, uuu,ccc) =>{

		//clear objects from current cell (bar_cell or curve_cell)
		this.clearInstanceIdsAt(cell);
		this.updateInstancesAt(cell);
		this.fillInstanceData();
		//this.updatePlacement(cell,uuu,ccc);
		//instancedObject.updateInstancesAt(cell)
		//per curve indexes and matrices    
	}
}
export class BeamInstancedFlowRenderable  extends FlowRenderable{
	matrices = undefined;
	cell_count = 0;
	instane_count = 0;

	modifyShader ( material, uniforms, numberOfCurves = 1 ) {
		
		if ( material.__ok ) return;
		material.__ok = true;
		material.onBeforeCompile = ( shader ) => {

			if ( shader.__modified ) return;
			shader.__modified = true;

			Object.assign( shader.uniforms, uniforms );

			const vertexShader = `
				attribute int instanceID;
				attribute int flowID;
				attribute int melodyInstrumentID;
				attribute uint _tube_id;
				uniform sampler2D spineTexture;
				
				uniform float pathOffset;
				uniform float pathSegment;
				uniform float spineOffset;
				uniform float spineLength;
				//uniform int melodyInstrumentID[40];
				uniform float flowData[16];
				uniform mat4 iMatrix[40];
				uniform vec3 colors[5];
				
				uniform float rotationSpeed;
				uniform float triAmplitude;
				
				uniform int flow;
				uniform float time;

				float textureLayers = ${TEXTURE_HEIGHT * numberOfCurves}.;
				float textureStacks = ${numberOfCurves}.;

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
				
				mat3 getRotZ(float angle){
				 float si = sin(angle);
					  float co = cos(angle);
					  return mat3(
						co, si, 0.0,
						-si, co, 0.0,
						0.0, 0.0, 1.0
					  );
				}
				vec2 SpriteSheetAnimationUV(vec2 uv, float size, float speed)
				{
					uv /= size;
					uv.x += floor(mod(time * speed, 1.0) * size) / size;
					uv.y -= 1./size;
					uv.y += (1. - floor(mod(time * speed / size, 1.0) * size) / size);
					return uv;
				}
				mat3 rotationMatrix(vec3 axis, float angle) {
					axis = normalize(axis);
					float s = sin(angle);
					float c = cos(angle);
					float oc = 1.0 - c;

					return mat3(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,
					oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  
					oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c      );
				}

				vec3 rotate(vec3 v, vec3 axis, float angle,out mat3 rotMat) {
				mat3 m = rotationMatrix(axis, angle);
				rotMat =m;
					return (m * v).xyz;
				}
				void main() {
					#include <beginnormal_vertex>
					vec3 pos = position.xyz;
					float n03 =  flowData[0+flowID*2];
					float n23 = flowData[1+flowID*2];
					
					mat4 im = iMatrix[instanceID];
					float r = random(float(instanceID));
					float angle =    sin((time+random(float(flowID)*100.)))*rotationSpeed*3.14;
					mat3 rotMat = getRotZ(angle);
					
					//rotate in at origin, then translate to world 
					float rand = random(float(instanceID));
					vec3 n_pos= pos.xyz;
					n_pos.xy+= pos.xy*sin(pos.z*50.-time*20.+rand)*float(_tube_id+uint(1))*10./100.;
					vec4 worldPos = /*modelMatrix **/ im  *  modelMatrix*vec4(n_pos, 1.);
					
					worldPos.xyz = rotate(worldPos.xyz,vec3(1,0,0),angle,rotMat);
					
					//yz - towards center direction
					worldPos.yz+=worldPos.yz*sin(time*10.+2.*rand)*0.05*triAmplitude;

					bool bend = flow > 0;
					float xWeight = bend ? 0. : 1.;
					#ifdef USE_INSTANCING
					float pathOffsetFromInstanceMatrix = n23;
					float spineLengthFromInstanceMatrix = n03;
					
					
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLengthFromInstanceMatrix : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffsetFromInstanceMatrix);
					
					#else
					float spinePortion = bend ? (worldPos.x + spineOffset) / spineLength : 0.;
					float u_per_vertex = (spinePortion * pathSegment + pathOffset);
					#endif
					
					float cI = mod(u_per_vertex, textureStacks);
					float rowOffset = floor(cI)*4.;
					
					float u_norm = fract(u_per_vertex);
					
					vec3 spinePos = texture2D(spineTexture, vec2(u_norm, (0. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 a =        texture2D(spineTexture, vec2(u_norm, (1. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 b =        texture2D(spineTexture, vec2(u_norm, (2. + rowOffset + 0.5) / textureLayers)).xyz;
					vec3 c =        texture2D(spineTexture, vec2(u_norm, (3. + rowOffset + 0.5) / textureLayers)).xyz;

					mat3 basis = mat3(a, b, c);
					
					vec3 transformed = basis*
					 vec3(worldPos.x * xWeight, worldPos.y * 1., worldPos.z * 1.)
						+ spinePos;
						
					//transformed = worldPos.xyz+0.1*float(instanceID);
					
					vec3 transformedNormal =  objectNormal;
					
					mat3 im_rot = mat3( im );
					transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
					transformedNormal = im_rot *transformedNormal;
						
					transformedNormal = normalMatrix * (basis * transformedNormal);
					
						` ).replace(
					'#include <project_vertex>',
					`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
							gl_Position = projectionMatrix * mvPosition;`
				)
				.replace('#include <color_vertex>',
					`
				//int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
				//int r_n = 2;
				//r_n = int(time/2.)%4;
				//r_n = int(pathOffsetFromInstanceMatrix);
				vColor.xyz = colors[_tube_id+uint(1)]*(2.-float(_tube_id)/3.)*2.;
				vColor.xyz = colors[melodyInstrumentID*int(_tube_id)]*(5.-4.*float(_tube_id));
				
					vColor.xyz*=vMapUv.y;
					//vColor.xyz = vec3(10.);
					//vColor.xyz = vec3(10.);
				
				#if defined( USE_MAP )
				
				float r_n = floor((random(float(instanceID)))*3.)/3.;
				float r_n_1 = floor((random(float(instanceID+14))*3.))/3.;
				r_n=0.;
				r_n_1=0.;
				vMapUv.y += time+rand;
				#endif
				//vColor.xyz = vec3(1,1,1);
	
	`);

			shader.vertexShader = vertexShader;

		};
	}
	constructor(cellCount, objectGeometry, instancedMatrices,uniforms = undefined){
		const instance_count = instancedMatrices.length;
		let createMeshFrom = (geometry)=> {
			const mesh = new InstancedMesh(
				geometry.geometry.clone() ,
				geometry.material.clone(),
				0 //because we store matrices as uniforms.
			);
			mesh.name = geometry.name;
			mesh.material.vertexColors = true;
			mesh.frustumCulled = false;
			mesh.userData.per_cell_count = 0;
			let iy = 0;
			let id = 0;
			assignAttribute(mesh.geometry, 'instanceID', cellCount*instance_count,1 );
			assignAttribute(mesh.geometry, 'flowID', cellCount*instance_count,1 );
			assignAttribute(mesh.geometry, 'melodyInstrumentID', cellCount*instance_count,1 );
			
			return mesh;
		};
		let mesh;
		if (Array.isArray(objectGeometry)){
			mesh = [];
			objectGeometry.forEach((geometry)=>{
				mesh.push(createMeshFrom(geometry));
			});
		}
		else{
			mesh = createMeshFrom(objectGeometry);
		}
		super( mesh,uniforms);

		this.matrices = instancedMatrices;
		this.cell_count = cellCount;
		this.instane_count = instance_count;
		
		//todo rework clear update fill
		/*for (let i = 0; i < cellCount; i++) {

			this.clearInstanceIdsAt(i);
			this.updateInstancesAt(i);
		}
			this.fillInstanceData();*/
		//pass uniforms to merge for shared uniforms
		if (uniforms === undefined || uniforms.flowData === undefined || uniforms.iMatrix === undefined) {
			this.uniforms.flowData = {value: new Array(cellCount * 2).fill(0)};
			this.uniforms.iMatrix = {value: new Array(instance_count * 16).fill(0)};
		
			for (let i =0; i<instancedMatrices.length; i++){
				instancedMatrices[i].toArray(this.uniforms.iMatrix.value,i*16);
			}
		}
		else 
		{
			this.uniforms.flowData = uniforms.flowData;
			this.uniforms.iMatrix = uniforms.iMatrix;
		}
		this.offsets = new Array( cellCount ).fill( 0 );
	}
	
	writeChanges( index, cI = undefined ) {
		/*	this.object3D.getMatrixAt(index, matrix);
            matrix.elements[ 3 ] = this.curveLengthArray[ cI ];
            matrix.elements[ 7 ] = cI;
            matrix.elements[ 11 ] = this.offsets[ index ];
            console.log(matrix)*/
		//const indexArray = this.object3D.userData.indexDictionary[index].value;
		//set uniform at index to 3 values.
	
		this.uniforms.flowData.value[index*2+0] = this.curveLengthArray[ cI ];
		this.uniforms.flowData.value[index*2+1] = this.offsets[ index ];
		/*for (let i=0; i<indexArray.length; i++){
			
			this.object3D.getMatrixAt( indexArray[i], matrix );
			matrix.elements[ 3 ] = this.curveLengthArray[ cI ];
			matrix.elements[ 7 ] = cI;
			matrix.elements[ 11 ] = this.offsets[ index ];
			//this.object3D.instanceMatrix.array[index*this.instanceCount+3+i*16]  = this.curveLengthArray[ cI ];
			//this.object3D.instanceMatrix.array[index*this.instanceCount+7+i*16]= cI;
			//this.object3D.instanceMatrix.array[index*this.instanceCount+11+i*16]= this.offsets[ index ];
			this.object3D.setMatrixAt( indexArray[i], matrix );
		}
		//console.log(this.object3D.instanceMatrix.array)
		this.object3D.getMatrixAt( index, matrix )
		this.object3D.instanceMatrix.needsUpdate = true;
*/
		
	}

	moveIndividualAlongCurve( index, offset, cI = undefined) {
		this.offsets[ index ] += offset;
		this.writeChanges( index,cI );
	}

	setIndividualAlongCurve( index, offset, cI = undefined) {
		this.offsets[ index ] = offset;
		this.writeChanges( index,cI );
	}

	/**
	 * Select which curve to use for an element
	 *
	 * @param {number} index the index of the instanced element to update
	 * @param {number} curveNo the index of the curve it should use
	 */
	setCurve( index, curveNo ) {

		if ( isNaN( curveNo ) ) throw Error( 'curve index being set is Not a Number (NaN)' );
		this.writeChanges( index,curveNo );

	}
	clearInstanceIdsAt = () =>
	{
		this.object3D.count = 0;
	}
	updateInstancesAt = ()=>
	{
		//set new instance matrix indexes for given cell (bar_cell or curve_cell)
		/*const index_array = Array.from(Array(this.matrices.length).keys())
		if (Array.isArray(this.object3D)) {
			this.object3D.forEach((obj) => {
				if (obj.userData.random_indexes === undefined) obj.userData.random_indexes = []
				else obj.userData.random_indexes = [];
				for (let i=0;i<obj.userData.per_cell_count;i++){
						obj.userData.random_indexes.push(Math.floor(Math.random()*this.matrices.length));
				}
			})
		}*/

			{
				const obj = this.object3D;
				for (let i=0;i<this.uniforms.melody.value.length;i++)
				{
					
					const beat = this.uniforms.melody.value[i];
					for (let k=0;k<beat.instances.length;k++)
					{
						const id_on_beat = beat.instances[k].id_on_beat;
						obj.geometry.attributes.flowID.array[obj.count] = i;
						obj.geometry.attributes.flowID.needsUpdate = true;

						obj.geometry.attributes.instanceID.array[obj.count] = id_on_beat;
						obj.geometry.attributes.instanceID.needsUpdate = true;

						//todo rename to melodyID
						let melodyID = i*this.instane_count+id_on_beat;
						if (this.uniforms.melodyInstrumentID !== undefined) {

							melodyID %=this.uniforms.melodyInstrumentID.value.length;
							obj.geometry.attributes.melodyInstrumentID.array[obj.count] = this.uniforms.melodyInstrumentID.value[melodyID];
						}
						obj.geometry.attributes.melodyInstrumentID.needsUpdate = true;

						obj.count++;
					}
					

				}
			}
	}
	
	updatePlacement = (cell,uuu,ccc)=>{
		
		this.setIndividualAlongCurve( cell, uuu+ccc,ccc  );
	}

	updatePerPlacingIndex = (cell, uuu,ccc) =>{

		this.clearInstanceIdsAt();
		this.updateInstancesAt();  
	}
}
export class InteractionInstancedFlowRenderable  extends FlowRenderable{
	modifyShader( material, uniforms, numberOfCurves = 1 ) {

		if ( material.__ok ) return;
		material.__ok = true;

		material.onBeforeCompile = ( shader ) => {

			if ( shader.__modified ) return;
			shader.__modified = true;

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
			float textureLayers = ${TEXTURE_HEIGHT * numberOfCurves}.;
			float textureStacks = ${numberOfCurves}.;

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
				int instanceID = int(instanceMatrix[0][3]);
				vec3 pos = position.xyz;
				
				mat4 im = instanceMatrix;
				im[0][3] = 0.;
				  
				float angle =    sin(time*10.+2.*random(float(instanceID)));
				mat3 rotMat = getRotX(angle);
				rotMat = mat3(1);
				  
				vec4 worldPos = modelMatrix * im  * vec4(rotMat*pos, 1.);
				
				//worldPos.yz+=worldPos.yz*sin(time*10.+2.*random(float(instanceID)))*0.05;
				
				vec3 transformed = worldPos.xyz;

				vec3 transformedNormal =  rotMat*objectNormal;
				
				mat3 im_rot = mat3( im );
				transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
				transformedNormal = im_rot *transformedNormal;
					
				transformedNormal = normalMatrix * transformedNormal;
					
			` ).replace(
					'#include <project_vertex>',
					`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`
				)
				.replace('#include <color_vertex>',
					`
				//int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
				//r_n = int(time/2.)%4;
				int r_n = int(instanceID);
	vColor.xyz = colors[r_n];
	#if defined( USE_MAP )
	vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
	vMapUv/=2.;
	vMapUv.xy += nUv;
		#ifdef USE_EMISSIVEMAP
		vEmissiveMapUv = vMapUv;
	#endif
	//vColor.xyz = vec3(1,1,1);
	
	#endif`);

			shader.vertexShader = vertexShader;

		};
	}

	constructor(cellCount, objectGeometry, material, instanceCount,modShader = undefined){
		//pack everything into instanceMatrix
		let createMeshFrom = (geometry)=> {
			const mesh = new InstancedMesh(
				geometry.geometry.clone() ,
				geometry.material.clone(),
				instanceCount
			);
			let iy = 0;
			let id = 0;
			mesh.name = geometry.name;
			//assignAttribute(mesh.geometry, 'instanceID', instanceCount,1 );
			mesh.material.vertexColors = true;
			mesh.frustumCulled = false;
			mesh.count = 0;
			return mesh;
		};
		let mesh;
		
		if (Array.isArray(objectGeometry)){
			mesh = [];
			objectGeometry.forEach((geometry)=>{
				mesh.push(createMeshFrom(geometry));
			});
		}
		else{
			mesh = createMeshFrom(objectGeometry);
		}
		super( mesh, modShader );

		this.cell_count = cellCount;

		for (let i = 0; i < cellCount; i++) {
			this.clearInstanceIdsAt(i)
		}
	}

clearInstanceIdsAt = (cell) =>
{
let clearAt = (obj,cell)=>{
    if (obj.userData.indexDictionary === undefined) obj.userData.indexDictionary = new Array(this.cell_count);
    if (obj.userData.indexDictionary[cell] === undefined ) {
        obj.userData.indexDictionary[cell] = {id: []};
    }
    obj.count-=obj.userData.indexDictionary[cell].id.length;
    obj.userData.indexDictionary[cell].id = [];
}

if (Array.isArray(this.object3D))
{
    this.object3D.forEach((obj)=>
    {
        clearAt(obj,cell);
    })
}
else
{

    clearAt(this.object3D,cell);
}
}
updateInstancesAt = (cell,matrix)=>
{
//set new instance matrix indexes for given cell (bar_cell or curve_cell)
	let updateInstanceAtObj = (m)=>{
		if (m.userData.indexDictionary === undefined) m.userData.indexDictionary = new Array(this.cell_count);
		if (m.userData.indexDictionary[cell] === undefined) {
			m.userData.indexDictionary[cell] = {id: []};
		}

		m.userData.indexDictionary[cell].id.push(matrix.clone());
		m.count++;
}
	if (Array.isArray(this.object3D))
	{
		this.object3D.forEach((m)=>
		{
			updateInstanceAtObj(m);
		})
	}
	else
	{
		updateInstanceAtObj(this.object3D);
	}
	

}

fillInstanceData = () =>{
	let fillData = (obj) =>{
		let counter=0;
		//fill all instance attributes to updated values
		
		for (let i = 0; i < obj.userData.indexDictionary.length; i++)
		{
			const arr = obj.userData.indexDictionary[i].id;
			for (let j = 0; j < arr.length; j++) {
				obj.setMatrixAt( counter, arr[j] );
				/*obj.geometry.attributes.instanceID.array[counter] = counter;
				obj.geometry.attributes.instanceID.needsUpdate = true;*/
				counter++;
			}
		}
		obj.instanceMatrix.needsUpdate = true;
	}
	if(Array.isArray(this.object3D))
	{
		this.object3D.forEach((obj)=>{
			fillData(obj);
		})
	}
	else
	{
		fillData(this.object3D);
	}
}

updatePerPlacingIndex = (cell) =>{

this.clearInstanceIdsAt(cell);
this.updateInstancesAt(cell);
this.fillInstanceData();
}
}
export class ElectricityInteractionInstancedFlowRenderable  extends FlowRenderable{
	modifyShader( material, uniforms, numberOfCurves = 1 ) {

		if ( material.__ok ) return;
		material.__ok = true;

		material.onBeforeCompile = ( shader ) => {

			if ( shader.__modified ) return;
			shader.__modified = true;

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
			float textureLayers = ${TEXTURE_HEIGHT * numberOfCurves}.;
			float textureStacks = ${numberOfCurves}.;

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
				int instanceID = int(instanceMatrix[0][3]);
				vec3 pos = position.xyz;
				
				mat4 im = instanceMatrix;
				im[0][3] = 0.;
				  
				float angle =    sin(time*10.+2.*random(float(instanceID)));
				mat3 rotMat = getRotX(angle);
				rotMat = mat3(1);
				  
				vec4 worldPos = modelMatrix * im  * vec4(rotMat*pos, 1.);
				
				//worldPos.yz+=worldPos.yz*sin(time*10.+2.*random(float(instanceID)))*0.05;
				
				vec3 transformed = worldPos.xyz;

				vec3 transformedNormal =  rotMat*objectNormal;
				
				mat3 im_rot = mat3( im );
				transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
				transformedNormal = im_rot *transformedNormal;
					
				transformedNormal = normalMatrix * transformedNormal;
					
			` ).replace(
					'#include <project_vertex>',
					`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`
				)
				.replace('#include <color_vertex>',
					`
				//int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
				//int r_n = 2;
				//r_n = int(time/2.)%4;
				//r_n = int(pathOffsetFromInstanceMatrix);
				//vColor.xyz = colors[];
				
					vColor.xyz = vec3(2.,1.,0.9);
					//vColor.xyz*=(1.-vMapUv.y);
					//vColor.xyz = vec3(10.);
					vColor.xyz = vec3(100.);
				
				#if defined( USE_MAP )
				
				float r_n = floor((random(float(instanceID)))*3.)/3.;
				float r_n_1 = floor((random(float(instanceID+14))*3.))/3.;
				r_n=0.;
				r_n_1=0.;
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

		};
	}

	constructor(cellCount, objectGeometry, material, instanceCount,modShader = undefined){
		//pack everything into instanceMatrix
		let createMeshFrom = (geometry)=> {
			const mesh = new InstancedMesh(
				geometry.geometry.clone() ,
				geometry.material.clone(),
				instanceCount
			);
			let iy = 0;
			let id = 0;
			mesh.name = geometry.name;
			//assignAttribute(mesh.geometry, 'instanceID', instanceCount,1 );
			mesh.material.vertexColors = true;
			mesh.frustumCulled = false;
			mesh.count = 0;
			return mesh;
		};
		let mesh;
		
		if (Array.isArray(objectGeometry)){
			mesh = [];
			objectGeometry.forEach((geometry)=>{
				mesh.push(createMeshFrom(geometry));
			});
		}
		else{
			mesh = createMeshFrom(objectGeometry);
		}
		super( mesh, modShader );

		this.cell_count = cellCount;

		for (let i = 0; i < cellCount; i++) {
			this.clearInstanceIdsAt(i)
		}
	}

clearInstanceIdsAt = (cell) =>
{
let clearAt = (obj,cell)=>{
    if (obj.userData.indexDictionary === undefined) obj.userData.indexDictionary = new Array(this.cell_count);
    if (obj.userData.indexDictionary[cell] === undefined ) {
        obj.userData.indexDictionary[cell] = {id: []};
    }
    obj.count-=obj.userData.indexDictionary[cell].id.length;
    obj.userData.indexDictionary[cell].id = [];
}

if (Array.isArray(this.object3D))
{
    this.object3D.forEach((obj)=>
    {
        clearAt(obj,cell);
    })
}
else
{

    clearAt(this.object3D,cell);
}
}
updateInstancesAt = (cell,matrix)=>
{
//set new instance matrix indexes for given cell (bar_cell or curve_cell)
	let updateInstanceAtObj = (m)=>{
		if (m.userData.indexDictionary === undefined) m.userData.indexDictionary = new Array(this.cell_count);
		if (m.userData.indexDictionary[cell] === undefined) {
			m.userData.indexDictionary[cell] = {id: []};
		}

		m.userData.indexDictionary[cell].id.push(matrix.clone());
		m.count++;
}
	if (Array.isArray(this.object3D))
	{
		this.object3D.forEach((m)=>
		{
			updateInstanceAtObj(m);
		})
	}
	else
	{
		updateInstanceAtObj(this.object3D);
	}
	

}

fillInstanceData = () =>{
	let fillData = (obj) =>{
		let counter=0;
		//fill all instance attributes to updated values
		
		for (let i = 0; i < obj.userData.indexDictionary.length; i++)
		{
			const arr = obj.userData.indexDictionary[i].id;
			for (let j = 0; j < arr.length; j++) {
				obj.setMatrixAt( counter, arr[j] );
				/*obj.geometry.attributes.instanceID.array[counter] = counter;
				obj.geometry.attributes.instanceID.needsUpdate = true;*/
				counter++;
			}
		}
		obj.instanceMatrix.needsUpdate = true;
	}
	if(Array.isArray(this.object3D))
	{
		this.object3D.forEach((obj)=>{
			fillData(obj);
		})
	}
	else
	{
		fillData(this.object3D);
	}
}

updatePerPlacingIndex = (cell) =>{

this.clearInstanceIdsAt(cell);
this.updateInstancesAt(cell);
this.fillInstanceData();
}
}
export class BombInteractionInstancedFlowRenderable  extends FlowRenderable{
	modifyShader( material, uniforms, numberOfCurves = 1 ) {

		if ( material.__ok ) return;
		material.__ok = true;

		material.onBeforeCompile = ( shader ) => {

			if ( shader.__modified ) return;
			shader.__modified = true;
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
			float textureLayers = ${TEXTURE_HEIGHT * numberOfCurves}.;
			float textureStacks = ${numberOfCurves}.;
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
				int instanceID = int(instanceMatrix[0][3]);
				vec3 pos = position.xyz;
				
				mat4 im = instanceMatrix;
				im[0][3] = 0.;
				  
				float angle =    sin(time*10.+2.*random(float(instanceID)));
				mat3 rotMat = getRotX(angle);
				//rotMat = mat3(1);
				 
				vec3 n_pos = pos;
				
				n_pos.xyz+=objectNormal.xyz*sin(time*10.+2.*random(float(instanceID))+pos.z*3.+float(_tube_id)*3.14*0.5)*0.05*float(_tube_id);
				vec4 worldPos = modelMatrix * im  * vec4(n_pos, 1.);
				
				
				vec3 transformed = worldPos.xyz;

				vec3 transformedNormal =  rotMat*objectNormal;
				
				mat3 im_rot = mat3( im );
				transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
				transformedNormal = im_rot *transformedNormal;
					
				transformedNormal = normalMatrix * transformedNormal;
					
			` ).replace(
					'#include <project_vertex>',
					`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`
				)
				.replace('#include <color_vertex>',
					`
				//int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
				//int r_n = 2;
				//r_n = int(time/2.)%4;
				//r_n = int(pathOffsetFromInstanceMatrix);
				//vColor.xyz = colors[];
				
				//	vColor.xyz = vec3(2.,1.,0.9);
				vColor.xyz = bomb_colors[_tube_id]*0.5;
			//	if (float(_tube_id)<0.5) vColor.xyzw = vec4(1,1,1,1);
			//	else if (float(_tube_id)<1.5) vColor.xyzw = vec4(1,1,0,1);
			//	else vColor.xyzw = vec4(1,0,0,1);
				//vColor.xyz = vec3(0,0,0);
				//vColor.a = 1.;
				#if defined( USE_MAP )
				
				float r_n = floor((random(float(instanceID)))*3.)/3.;
				float r_n_1 = floor((random(float(instanceID+14))*3.))/3.;
				r_n=0.;
				r_n_1=0.;
				
				vMapUv.xy*=1.;
				
								vMapUv.y += time/10.+float(_tube_id)*0.5;
							//	if (_tube_id ==uint(0)) vMapUv.xy = vec2(1,1);

				#endif
				//vColor.xyz = vec3(1,1,1);
	
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

	constructor(cellCount, objectGeometry, material, instanceCount,modShader = undefined){
		//pack everything into instanceMatrix
		let createMeshFrom = (geometry)=> {
			const mesh = new InstancedMesh(
				geometry.geometry.clone() ,
				geometry.material.clone(),
				instanceCount
			);
			let iy = 0;
			let id = 0;
			mesh.name = geometry.name;
			//assignAttribute(mesh.geometry, 'instanceID', instanceCount,1 );
			mesh.material.vertexColors = true;
			mesh.frustumCulled = false;
			mesh.count = 0;
			return mesh;
		};
		let mesh;
		
		if (Array.isArray(objectGeometry)){
			mesh = [];
			objectGeometry.forEach((geometry)=>{
				mesh.push(createMeshFrom(geometry));
			});
		}
		else{
			mesh = createMeshFrom(objectGeometry);
		}
		super( mesh, modShader );

		this.cell_count = cellCount;

		for (let i = 0; i < cellCount; i++) {
			this.clearInstanceIdsAt(i)
		}
	}

clearInstanceIdsAt = (cell) =>
{
let clearAt = (obj,cell)=>{
    if (obj.userData.indexDictionary === undefined) obj.userData.indexDictionary = new Array(this.cell_count);
    if (obj.userData.indexDictionary[cell] === undefined ) {
        obj.userData.indexDictionary[cell] = {id: []};
    }
    obj.count-=obj.userData.indexDictionary[cell].id.length;
    obj.userData.indexDictionary[cell].id = [];
}

if (Array.isArray(this.object3D))
{
    this.object3D.forEach((obj)=>
    {
        clearAt(obj,cell);
    })
}
else
{

    clearAt(this.object3D,cell);
}
}
updateInstancesAt = (cell,matrix)=>
{
//set new instance matrix indexes for given cell (bar_cell or curve_cell)
	let updateInstanceAtObj = (m)=>{
		if (m.userData.indexDictionary === undefined) m.userData.indexDictionary = new Array(this.cell_count);
		if (m.userData.indexDictionary[cell] === undefined) {
			m.userData.indexDictionary[cell] = {id: []};
		}

		m.userData.indexDictionary[cell].id.push(matrix.clone());
		m.count++;
}
	if (Array.isArray(this.object3D))
	{
		this.object3D.forEach((m)=>
		{
			updateInstanceAtObj(m);
		})
	}
	else
	{
		updateInstanceAtObj(this.object3D);
	}
	

}

fillInstanceData = () =>{
	let fillData = (obj) =>{
		let counter=0;
		//fill all instance attributes to updated values
		
		for (let i = 0; i < obj.userData.indexDictionary.length; i++)
		{
			const arr = obj.userData.indexDictionary[i].id;
			for (let j = 0; j < arr.length; j++) {
				obj.setMatrixAt( counter, arr[j] );
				/*obj.geometry.attributes.instanceID.array[counter] = counter;
				obj.geometry.attributes.instanceID.needsUpdate = true;*/
				counter++;
			}
		}
		obj.instanceMatrix.needsUpdate = true;
	}
	if(Array.isArray(this.object3D))
	{
		this.object3D.forEach((obj)=>{
			fillData(obj);
		})
	}
	else
	{
		fillData(this.object3D);
	}
}

updatePerPlacingIndex = (cell) =>{

this.clearInstanceIdsAt(cell);
this.updateInstancesAt(cell);
this.fillInstanceData();
}
}

export const modifyTriInteractionShader = ( material, uniforms, numberOfCurves = 1 )=> {

	if ( material.__ok ) return;
	material.__ok = true;
	material.vertexColors = false;
	material.onBeforeCompile = ( shader ) => {
		
		if ( shader.__modified ) return;
		shader.__modified = true;

		Object.assign( shader.uniforms, uniforms );

		const vertexShader = `

			uniform sampler2D spineTexture;
			uniform float pathOffset;
			uniform float pathSegment;
			uniform float spineOffset;
			uniform float spineLength;
			uniform int flow;
			uniform float time;
			uniform vec3 colors[5];
			//uniform mat4 iMatrix[40];
			//uniform float flowData[48];
			float textureLayers = ${TEXTURE_HEIGHT * numberOfCurves}.;
			float textureStacks = ${numberOfCurves}.;

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
				int instanceID = int(instanceMatrix[0][3]);
				vec3 pos = position.xyz;
				
				mat4 im = instanceMatrix;
				im[0][3] = 0.;
				  
				float angle =    sin(time*10.+2.*random(float(instanceID)));
				mat3 rotMat = getRotX(angle);
				rotMat = mat3(1);
				  
				vec4 worldPos = modelMatrix * im  * vec4(rotMat*pos, 1.);
				
				//worldPos.yz+=worldPos.yz*sin(time*10.+2.*random(float(instanceID)))*0.05;
				
				vec3 transformed = worldPos.xyz;

				vec3 transformedNormal =  rotMat*objectNormal;
				
				mat3 im_rot = mat3( im );
				transformedNormal /= vec3( dot( im_rot[ 0 ], im_rot[ 0 ] ), dot( im_rot[ 1 ], im_rot[ 1 ] ), dot( im_rot[ 2 ], im_rot[ 2 ] ) );
				transformedNormal = im_rot *transformedNormal;
					
				transformedNormal = normalMatrix * transformedNormal;
					
			` ).replace(
				'#include <project_vertex>',
				`vec4 mvPosition = viewMatrix * vec4( transformed, 1.0 );
				gl_Position = projectionMatrix * mvPosition;`
			)
			.replace('#include <color_vertex>',
				`
				//int r_n = int(random(random(float(instanceID))+pathOffsetFromInstanceMatrix)*4.);
				//r_n = int(time/2.)%4;
				int r_n = instanceID;
	#if defined( USE_MAP )
	vec2 nUv = vec2(r_n % 2 , ((r_n)/2))*0.5;
	vMapUv/=2.;
	vMapUv.xy += nUv;
	//vColor.xyz = vec3(1,1,1);
	
	#endif`);

		shader.vertexShader = vertexShader;

	};
}
