
export const timeSystem = (world) => {
  const d = world.clock.getDelta();
  if (world.paused || document.hidden) {
    world.time.delta = 0;
    return world;
  }
  if (d>0.5) {
    world.time.delta = 0;
    return world;
  }
  world.time.delta = d;
  world.time.elapsed = world.clock.elapsedTime;
  return world
}