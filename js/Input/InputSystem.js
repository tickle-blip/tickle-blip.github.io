import {Input} from "./Input.js";
import {EventDispatcher, MOUSE, TOUCH, Vector2} from "three";

//export let Input = {...};
//export function isKeyPressed(keyCode) { return Input.isKeyPressed(keyCode); }
//export function isKeyDown(keyCode) { return Input.isKeyDown(keyCode); }
//export function isKeyUp(keyCode) { return Input.isKeyUp(keyCode); }
//export function getMousePosition() { return Input.getMousePosition(); }
//export function getMouseDown() { return Input.getMouseDelta(); }
//export function getMouseWheelDelta() { return Input.getMouseWheelDelta(); }

const _changeEvent = { type: 'change' };
const _startEvent = { type: 'start' };
const _endEvent = { type: 'end' };
export class InputSystem extends EventDispatcher {
    constructor(domElement)
    {
        super()
        const vUp = new Vector2(0,1);
        const vDown = new Vector2(0,-1);
        const vRight = new Vector2(1,0);
        const vLeft = new Vector2(-1,0);
        this.domElement = domElement;
        this.domElement.style.touchAction = 'none';
        const scope = this;
        this.current_input = Input;
        let keyMap = [];

        this.touches = { ONE: TOUCH.MOVE, TWO: TOUCH.DOLLY_PAN };

        const pointers = [];
        const pointerPositions = {};

        const STATE = {
            NONE: - 1,
            MOVE: 0
        };

        let state = STATE.NONE;
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
        this.checkGameKeys = function(){
            this.current_input.MoveDir.set(0,0);
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
                this.current_input.MoveDir.add(vLeft)
            }
            if(key(68)){
                // D Key
                this.current_input.MoveDir.add(vRight)
            }
            if(key(87)){
                // W Key
                this.current_input.MoveDir.add(vUp)
            }
            if(key(83)){
                // S Key
                this.current_input.MoveDir.add(vDown)
            }
            //prevent alt from going to chrome settings
            if (key(18)){
                // console.log("ALT");
            }

            if (key(81)){
                //Q
            }
            if (key(69)){
                //E
            }

        }

        let mouseMove = false;
        let oldX=window.innerWidth/2, oldY=window.innerHeight/2;
        let startX=window.innerWidth/2, startY=window.innerHeight/2;
        let difX=0, difY=0;

        this.update = function(delta){
            this.checkGameKeys();
            this.current_input.diffX = difX/ window.innerWidth;
            this.current_input.diffY = difY/ window.innerWidth;
            this.current_input.startX = startX/window.innerWidth*2-1;
            this.current_input.startY = -(startY/window.innerWidth) * 2 + 1;
            this.current_input.pointerX = (oldX/ window.innerWidth) *2 -1 ;
            this.current_input.pointerY = -(oldY/ window.innerWidth) * 2 + 1;
            this.current_input.mouseMove = mouseMove;
            
            difX = difY= 0;
        }

        const _keydown = this.keydown.bind( this );

        const _keyup = this.keyup.bind( this );
/*
        if ( domElement === undefined ) {

            console.warn( 'THREE.FlyControls: The second parameter "domElement" is now mandatory.' );
            domElement = document;

        }*/

        function trackPointer( event ) {

            let position = pointerPositions[ event.pointerId ];

            if ( position === undefined ) {

                position = new Vector2();
                pointerPositions[ event.pointerId ] = position;

            }
            //console.log(event.pageX,event.pageY);
            position.set( event.pageX, event.pageY );

        }
        function onTouchStart( event ) {

            trackPointer( event );
            switch ( pointers.length ) {

                case 1:

                    if ( scope.enableRotate === false ) return;
        
                    handleTouchStart();
        
                    state = STATE.MOVE;

                break;

                case 2:

                    switch ( scope.touches.TWO ) {
/*
                        case TOUCH.DOLLY_PAN:

                            if ( scope.enableZoom === false && scope.enablePan === false ) return;

                            handleTouchStartDollyPan();

                            state = STATE.TOUCH_DOLLY_PAN;

                            break;

                        case TOUCH.DOLLY_ROTATE:

                            if ( scope.enableZoom === false && scope.enableRotate === false ) return;

                            handleTouchStartDollyRotate();

                            state = STATE.TOUCH_DOLLY_ROTATE;

                            break;
*/
                        default:

                            state = STATE.NONE;

                    }

                    break;

                default:

                    state = STATE.NONE;

            }

            if ( state !== STATE.NONE ) {

                scope.dispatchEvent( _startEvent );

            }

        }

        function handleTouchStart() {
            if ( pointers.length === 1 ) {

                oldX = pointers[ 0 ].pageX;
                startX =pointers[ 0 ].pageX;
                oldY = pointers[ 0 ].pageY;
                startY = pointers[ 0 ].pageY;
            }

        }
        function onTouchMove( event ) {


            trackPointer( event );

            //console.log(oldX,oldY)
            //console.log("touch move",pointers);
            switch ( state ) {

                case STATE.MOVE:

                    if ( scope.enableRotate === false ) return;

                    handleTouchMove( event );

                    //scope.update();

                    break;

                default:

                    state = STATE.NONE;

            }

        }
        function handleTouchMove(event){
            
            if ( pointers.length === 1 ) {

            mouseMove = true;


            let directionX = 0, directionY = 0, diffX = 0, diffY = 0;
            if (event.pageX < oldX) {
                directionX = "left"
                difX = oldX - event.pageX;
            } else if (event.pageX > oldX) {
                directionX = "right"
                difX = event.pageX - oldX;
            }
            difX = diffX = event.pageX - oldX;
            if (event.pageY < oldY) {
                directionY = "top"
                difY = oldY - event.pageY;
            } else if (event.pageY > oldY) {
                directionY = "bottom";
                difY = event.pageY - oldY;
            }

            difY = diffY = event.pageY - oldY;
            oldX = event.pageX;
            oldY = event.pageY;
            }
        }
        
        let mouseState = MOUSE.None;
        function onMouseDown( event ) {


            switch ( event.button ) {

                case 0:

                    mouseState = MOUSE.LEFT;
                    handleRMBDown( event );
                    break;

                case 1:

                    mouseState = MOUSE.MIDDLE;
                    break;

                case 2:
                    mouseState = MOUSE.RIGHT;
                    break;

                default:

                    mouseState = - 1;

            }

            if ( state !== STATE.NONE ) {

                scope.dispatchEvent( _startEvent );

            }
        }
        function handleRMBDown(event){
            oldX = event.pageX;
            oldY = event.pageY;

            startX = event.pageX;
            startY = event.pageY;
        }
        function onMouseMove( event ) {

            if ( scope.enabled === false ) return;

            switch ( mouseState) {

                case MOUSE.LEFT:

                    if ( scope.enableZoom === false ) return;

                    handleRMBMove( event );

                    break;

                case MOUSE.MIDDLE:

                    if ( scope.enablePan === false ) return;

                    handleMouseMovePan( event );

                    break;

            }

        }
        function handleRMBMove(event){
            mouseMove = true;


            let directionX = 0, directionY = 0, diffX = 0, diffY = 0;
            if (event.pageX < oldX) {
                directionX = "left"
                difX = oldX - event.pageX;
            } else if (event.pageX > oldX) {
                directionX = "right"
                difX = event.pageX - oldX;
            }
            difX = diffX = event.pageX - oldX;
            if (event.pageY < oldY) {
                directionY = "top"
                difY = oldY - event.pageY;
            } else if (event.pageY > oldY) {
                directionY = "bottom";
                difY = event.pageY - oldY;
            }
            
            difY = diffY = event.pageY - oldY;
            oldX = event.pageX;
            oldY = event.pageY;
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

                 onTouchStart( event );

            } else {

                onMouseDown( event );

            }

        }

        function onPointerMove( event ) {
            if ( scope.enabled === false ) return;
        
            if ( event.pointerType === 'touch' ) {
                onTouchMove( event );

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
            mouseMove = false;
            difX =0;
            difY=0;
        }

        window.addEventListener( 'keydown', _keydown ,false );
        window.addEventListener( 'keyup', _keyup,false );

        scope.domElement.addEventListener( 'pointerdown', onPointerDown ,false);
        scope.domElement.addEventListener( 'pointercancel', onPointerUp ,false );
        //domElement.addEventListener( 'pointerdown', this.onPointerDown );
}
    init(attributes){
    }
    execute(delta,time){
        this.checkGameKeys()
    }
}
