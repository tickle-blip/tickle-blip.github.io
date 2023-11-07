import * as THREE from 'three';
import { MOUSE, Vector2 } from 'three'

const _changeEvent = { type: 'change' };
const _startEvent = { type: 'start' };
const _endEvent = { type: 'end' };


export class FreeCameraControls extends THREE.EventDispatcher {

    constructor( object, domElement ) {

        super();

        if ( domElement === undefined ) {

            console.warn( 'THREE.FlyControls: The second parameter "domElement" is now mandatory.' );
            domElement = document;

        }

        this.object = object;
        this.domElement = domElement; // API

        this.movementSpeed = 5.0;
        this.rollSpeed = 1;
        this.dragToLook = false;
        this.autoForward = false; // disable default target object behavior
        // internals
        this.movementSpeedMultiplier = 1.;
        const pointers = [];
        const pointerPositions = {};

        
        const scope = this;
        const EPS = 0.000001;
        const lastQuaternion = new THREE.Quaternion();
        const lastPosition = new THREE.Vector3();
        const vUp = new THREE.Vector3(0,1,0);
        const vDown = new THREE.Vector3(0,-1,0);
        const vRight = new THREE.Vector3(1,0,0);
        const vLeft = new THREE.Vector3(-1,0,0);
        const vForward = new THREE.Vector3(0,0,-1);
        const vBackward = new THREE.Vector3(0,0,1);
        this.tmpQuaternion = new THREE.Quaternion();
        this.mouseStatus = 0;
        let cameraState = {
            yaw:0,
            pitch:0,
            roll:0,
            x:0,
            y:0,
            z:0,
            quaternion: new THREE.Quaternion()
        };
        let moveVector = new THREE.Vector3( 0, 0, 0 );
        this.rotationVector = new THREE.Vector3( 0, 0, 0 );
        this.rotateSpeed = 100;
        const rotateStart = new Vector2();
        const rotateEnd = new Vector2();
        const rotateDelta = new Vector2();


        function onMouseWheel( event ) {

            if ( scope.enabled === false ) return;

            event.preventDefault();

            scope.dispatchEvent( _startEvent );

            handleMouseWheel( event );

            scope.dispatchEvent( _endEvent );

        }
        function handleMouseWheel(event){
            const dir = Math.sign(event.deltaY);
            scope.movementSpeed*= (1.-0.1*dir);
        }    
            
        let mouseState = MOUSE.None;
        function onMouseDown( event ) {


            switch ( event.button ) {

                case 0:

                    mouseState = MOUSE.LEFT;
                    break;

                case 1:

                    mouseState = MOUSE.MIDDLE;
                    break;

                case 2:
                    mouseState = MOUSE.RIGHT;
                    handleRMBDown( event );
                    break;

                default:

                    mouseState = - 1;

            }
        }
        function handleRMBDown(event){
            oldX = event.pageX;
            oldY = event.pageY;
            rotateStart.set( event.clientX, event.clientY );
        }
        function onMouseMove( event ) {

            if ( scope.enabled === false ) return;

            switch ( mouseState) {

                case MOUSE.RIGHT:

                    if ( scope.enableZoom === false ) return;

                    handleRMBMove( event );

                    break;

                case MOUSE.MIDDLE:

                    if ( scope.enablePan === false ) return;

                    handleMouseMovePan( event );

                    break;

            }

        }
        let mouseMove = false;
        let oldX=0, oldY=0;
        function handleRMBMove(event){
            mouseMove = true;


            let directionX = 0, directionY = 0, diffX = 0, diffY = 0;
            if (event.pageX < oldX) {
                directionX = "left"
                diffX = oldX - event.pageX;
            } else if (event.pageX > oldX) {
                directionX = "right"
                diffX = event.pageX - oldX;
            }
            diffX = event.pageX - oldX;
            if (event.pageY < oldY) {
                directionY = "top"
                diffY = oldY - event.pageY;
            } else if (event.pageY > oldY) {
                directionY = "bottom";
                diffY = event.pageY - oldY;
            }
            diffY = event.pageY - oldY;
            oldX = event.pageX;
            oldY = event.pageY;
            
            
            
            rotateEnd.set( event.pageX, event.pageY );

            const element = scope.domElement;

            const rotMult = 0.003 * scope.rollSpeed;
            rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed  );
            
            cameraState.yaw -= ( diffY)*rotMult;
            cameraState.pitch -=(diffX)*rotMult;
            scope.tmpQuaternion.setFromAxisAngle(scope.object.up,-diffX*rotMult);
//            scope.object.rotateY(-diffX*rotMult);
            scope.object.applyQuaternion(scope.tmpQuaternion);
            const vec3 = vRight.clone();
            vec3.applyQuaternion(scope.object.quaternion)
            scope.tmpQuaternion.setFromAxisAngle(vec3,-diffY*rotMult);
            scope.object.applyQuaternion(scope.tmpQuaternion);
            //
            //console.log(cameraState.yaw)
        }
        function addPointer( event ) {

            pointers.push( event );

        }
        function removePointer( event ) {

            delete pointerPositions[ event.pointerId ];

            for ( let i = 0; i < pointers.length; i ++ ) {

                if ( pointers[ i ].pointerId == event.pointerId ) {

                    pointers.splice( i, 1 );
                    return;

                }

            }

        }
        function onPointerDown( event ) {

            if ( scope.enabled === false ) return;

            if ( pointers.length === 0 ) {

                scope.domElement.setPointerCapture( event.pointerId );

                scope.domElement.addEventListener( 'pointermove', onPointerMove );
                scope.domElement.addEventListener( 'pointerup', onPointerUp );

            }

            //

            addPointer( event );

            if ( event.pointerType === 'touch' ) {

               // onTouchStart( event );

            } else {

                onMouseDown( event );

            }

        }

        function onPointerMove( event ) {
            //console.log("mouse move");
            if ( scope.enabled === false ) return;

            if ( event.pointerType === 'touch' ) {

                //onTouchMove( event );

            } else {

                onMouseMove( event );

            }

        }

        function onPointerUp( event ) {

            removePointer( event );

            if ( pointers.length === 0 ) {

                scope.domElement.releasePointerCapture( event.pointerId );

                scope.domElement.removeEventListener( 'pointermove', onPointerMove );
                scope.domElement.removeEventListener( 'pointerup', onPointerUp );

            }
            //console.log("mouse up");
            //cameraState.pitch = 0;
            //cameraState.yaw =0;
            scope.dispatchEvent( _endEvent );

            mouseState = -1;

        }

        function onPointerCancel( event ) {

            removePointer( event );

        }
        var keyMap = [];

        function key(x){
            return (keyMap.includes(x));
        }
        this.keydown = function ( event ) {

            if(!keyMap.includes(event.keyCode)){
                keyMap.push(event.keyCode);
            }
            /*
            if ( event.altKey ) {

                return;

            }
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                this.movementSpeedMultiplier = .1
            } 
            if (event.code === 'KeyW') {
                moveVector.add(vForward)
                console.log(event.code + " down");
            } 
            if (event.code === 'KeyS') {
                moveVector.add(vBackward)
                console.log(event.code + " down");
            }
            if (event.code === 'KeyA') {
                moveVector.add(vLeft)
                console.log(event.code + " down");
            }
            if (event.code === 'KeyD') {
                moveVector.add(vRight)
                console.log(event.code + " down");
            }
            if (event.code === 'KeyQ') {
                moveVector.add(vDown)
                console.log(event.code + " down");
            }
            if (event.code === 'KeyE') {
                moveVector.add(vUp)
                console.log(event.code + " down");


            }*/
        };

        this.keyup = function ( event ) {

            if(keyMap.includes(event.keyCode)){
                keyMap.splice(keyMap.indexOf(event.keyCode), 1);
            }
           /* if (event.code === 'KeyW') {
                moveVector.sub(vForward)
                console.log(event.code);
            }
            if (event.code === 'KeyS') {
                moveVector.sub(vBackward)
            }
            if (event.code === 'KeyA') {
                moveVector.sub(vLeft)
            }
            if (event.code === 'KeyD') {
                moveVector.sub(vRight)
            }
            if (event.code === 'KeyQ') {
                moveVector.sub(vDown)
            }
            if (event.code === 'KeyE') {
                moveVector.sub(vUp)

            }
*/

        };
        function checkGameKeys(){

            moveVector.set(0,0,0);
            if(key(32)){
                // Space Key
            }
            if(key(37)){
                // Left Arrow Key
            }
            if(key(39)){
                // Right Arrow Key
            }
            if(key(38)){
                // Up Arrow Key
            }
            if(key(40)){
                // Down Arrow Key
            }
            if(key(65)){
                // A Key
                moveVector.add(vLeft)
            }
            if(key(68)){
                // D Key
                moveVector.add(vRight)
            }
            if(key(87)){
                // W Key
                moveVector.add(vForward)
            }
            if(key(83)){
                // S Key
                moveVector.add(vBackward)
            }
            //prevent alt from going to chrome settings
            if (key(18)){
               // console.log("ALT");
            }

            if (key(81)){
                //Q
                moveVector.add(vDown);
            }
            if (key(69)){
                moveVector.add(vUp);
            }
            moveVector.normalize(moveVector);
            
        }
        this.update = function ( delta ) {

            //is button events proceeded?
            //if yes
            //if RMB active 
            //check movement and update rotation
            //get translation vector(multiplied by shift already
            //updateTranslation
            checkGameKeys();
            const moveMult = delta * scope.movementSpeed*10.;
            scope.object.translateX( moveVector.x * moveMult );
            scope.object.translateY( moveVector.y * moveMult );
            scope.object.translateZ( moveVector.z * moveMult );
            let a = new THREE.Euler(cameraState.yaw,cameraState.pitch,0, 'XYZ' );
            //scope.object.rotateOnWorldAxis(vUp, cameraState.pitch);

            //scope.object.rotateOnWorldAxis(vForward,cameraState.yaw);
            //
            //scope.tmpQuaternion.setFromEuler(a);
            //scope.object.rotation.order = 'ZYX';
            //scope.object.rotation.set(cameraState.yaw,cameraState.pitch,cameraState.roll);
           // scope.
            //scope.tmpQuaternion.set( cameraState.yaw * rotMult, cameraState.pitch * rotMult, scope.rotationVector.z * rotMult, 1 ).normalize();
            //scope.object.rotation.set( cameraState.pitch* rotMult,cameraState.yaw* rotMult, scope.object.rotation.z );
            //console.log(cameraState.pitch* rotMult);
            
            //scope.object.setRotationFromEuler(a);
            //scope.object.rotation
            //scope.object.quaternion.multiply(scope.tmpQuaternion);
            //scope.object.
            //scope.object.rotateZ(cameraState.pitch);
            //scope.object.rotateY(cameraState.yaw*rotMult);
            //console.log(scope.object.rotation)

            /*if ( lastPosition.distanceToSquared( scope.object.position ) > EPS || 8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

                scope.dispatchEvent( _changeEvent );
                lastQuaternion.copy( scope.object.quaternion );
                lastPosition.copy( scope.object.position );

            }*/
        };

        this.getContainerDimensions = function () {

            if ( this.domElement != document ) {

                return {
                    size: [ this.domElement.offsetWidth, this.domElement.offsetHeight ],
                    offset: [ this.domElement.offsetLeft, this.domElement.offsetTop ]
                };

            } else {

                return {
                    size: [ window.innerWidth, window.innerHeight ],
                    offset: [ 0, 0 ]
                };

            }

        };

        this.dispose = function () {

            this.domElement.removeEventListener( 'contextmenu', contextmenu );
            this.domElement.removeEventListener( 'mousedown', _mousedown );
            this.domElement.removeEventListener( 'mousemove', _mousemove );
            this.domElement.removeEventListener( 'mouseup', _mouseup );
            window.removeEventListener( 'keydown', _keydown );
            window.removeEventListener( 'keyup', _keyup );

        };

        
        
        this.init= function(){
            cameraState.yaw = 0
            cameraState.pitch = 0;
            cameraState.roll = 0;
       
            cameraState.x = object.rotation.x;
            cameraState.y = object.rotation.y;
            cameraState.z = object.rotation.z;
            cameraState.quaternion = object.quaternion;
        }
        scope.init();
        const _keydown = this.keydown.bind( this );

        const _keyup = this.keyup.bind( this );
        this.domElement.addEventListener( 'contextmenu', contextmenu );
        scope.domElement.addEventListener( 'pointerdown', onPointerDown ,false);
        scope.domElement.addEventListener( 'pointercancel', onPointerCancel ,false );
        scope.domElement.addEventListener( 'wheel', onMouseWheel, { passive: false } );
        window.addEventListener( 'keydown', _keydown ,false );
        window.addEventListener( 'keyup', _keyup,false );
        //this.updateMovementVector();
       // this.updateRotationVector();

    }

}

function contextmenu( event ) {

    event.preventDefault();

}
