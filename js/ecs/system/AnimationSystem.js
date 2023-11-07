
function setWeight( action, weight ) {

    action.enabled = true;
    action.setEffectiveTimeScale( 1 );
    action.setEffectiveWeight( weight );

}
function executeCrossFade( startAction, endAction, duration ) {

    // Not only the start action, but also the end action must get a weight of 1 before fading
    // (concerning the start action this is already guaranteed in this place)

    if ( endAction ) {

        setWeight( endAction, 1 );
        endAction.time = 0;

        if ( startAction ) {

            // Crossfade with warping

            startAction.crossFadeTo( endAction, duration, true );

        } else {

            // Fade in

            endAction.fadeIn( duration );

        }

    } else {

        // Fade out

        startAction.fadeOut( duration );

    }

}
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
export const animationSystem = (world) => {
    const camera = world.camera;
    //world.mixer
    const horisontal = clamp(camera.userData.dirV.x,-1,1);
    const vertical = clamp(camera.userData.dirV.y,-1,1);
    const left_weight = horisontal < 0 ? -horisontal : 0;
    const right_weight = horisontal > 0 ? horisontal : 0;
    setWeight(world.hand_actions[1],left_weight);
    setWeight(world.hand_actions[2],right_weight);

    const up_weight = vertical > 0 ? vertical : 0;
    const down_weight = vertical < 0 ? -vertical : 0;
    setWeight(world.hand_actions[3],up_weight);
    setWeight(world.hand_actions[4],down_weight);
    world.mixer.update(world.time.delta);
    return world
}
