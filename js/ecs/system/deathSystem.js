
export const deathSystem = (world) => {
    if (world.fingersAlive === 0 && world.paused === false) {
        world.paused = true;
        world.showEndScreen(true);
        
    }
    return world
}