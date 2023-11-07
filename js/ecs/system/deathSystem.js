
export const deathSystem = (world) => {
    if (world.fingersAlive === 0) {
        console.log("U DED");
        world.paused = true;
        world.showEndScreen(true);
        
    }
    return world
}