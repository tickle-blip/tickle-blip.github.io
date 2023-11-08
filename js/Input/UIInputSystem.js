import {Input} from "./Input.js";
import {EventDispatcher, MOUSE, TOUCH, Vector2} from "three";

const _changeEvent = { type: 'change' };
const _startEvent = { type: 'start' };
const _endEvent = { type: 'end' };
export class UIInputSystem extends EventDispatcher {
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
        let mouseMove = false;
        let oldX=window.innerWidth/2, oldY=window.innerHeight/2;
        let startX=window.innerWidth/2, startY=window.innerHeight/2;
        let difX=0, difY=0;

        this.update = function(delta){
            this.current_input.diffX = difX/ scope.domElement.clientWidth;
            this.current_input.diffY = difY/ scope.domElement.clientHeight;
            this.current_input.startX = startX/scope.domElement.clientWidth*2-1;
            this.current_input.startY = -(startY/scope.domElement.clientHeight) * 2 + 1;
            this.current_input.pointerX = (oldX/ scope.domElement.clientWidth) *2 -1 ;
            this.current_input.pointerY = -(oldY/ scope.domElement.clientHeight) * 2 + 1;
            this.current_input.mouseMove = mouseMove;
            
            difX = difY= 0;
        }

        function getCursorPosition(canvas, pageX,pageY) {
            const rect = canvas.getBoundingClientRect()
            const x = pageX - rect.left;
            const y = pageY - rect.top;
            return {x,y};
        }
        function trackPointer( event ) {

            let position = pointerPositions[ event.pointerId ];

            if ( position === undefined ) {

                position = new Vector2();
                pointerPositions[ event.pointerId ] = position;

            }
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
                const {x,y} = getCursorPosition(scope.domElement,pointers[ 0 ].pageX,pointers[ 0 ].pageY);
                oldX = x;
                startX =x;
                oldY = y;
                startY = y;
            }

        }
        function onTouchMove( event ) {


            trackPointer( event );

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

            const {x,y} = getCursorPosition(scope.domElement,event.pageX,event.pageY);
            let directionX = 0, directionY = 0, diffX = 0, diffY = 0;
            if (x < oldX) {
                directionX = "left"
                difX = oldX - x;
            } else if (x > oldX) {
                directionX = "right"
                difX = x - oldX;
            }
            difX = diffX = x - oldX;
            if (y < oldY) {
                directionY = "top"
                difY = oldY - y;
            } else if (y > oldY) {
                directionY = "bottom";
                difY = y - oldY;
            }

            difY = diffY = y - oldY;
            oldX = x;
            oldY = y;
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
            const {x,y} = getCursorPosition(scope.domElement,event.pageX,event.pageY);
            oldX = x;
            oldY = y;

            startX = x;
            startY = y;
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

            const {x,y} = getCursorPosition(scope.domElement,event.pageX,event.pageY);
            let directionX = 0, directionY = 0, diffX = 0, diffY = 0;
            if (x < oldX) {
                directionX = "left"
                difX = oldX - x;
            } else if (x > oldX) {
                directionX = "right"
                difX = x - oldX;
            }
            difX = diffX = x - oldX;
            if (y < oldY) {
                directionY = "top"
                difY = oldY - y;
            } else if (y > oldY) {
                directionY = "bottom";
                difY = y - oldY;
            }
            
            difY = diffY = y - oldY;
            oldX = x;
            oldY = y;
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

                event.target.setPointerCapture( event.pointerId );

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

                event.target.releasePointerCapture( event.pointerId );

                scope.domElement.removeEventListener( 'pointermove', onPointerMove );
                scope.domElement.removeEventListener( 'pointerup', onPointerUp );

            }
            scope.dispatchEvent( _endEvent );

            mouseState = -1;
            mouseMove = false;
            difX =0;
            difY=0;
        }

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
