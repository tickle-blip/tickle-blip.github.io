
export const renderSystem = (world) => {
  world.composer.render(world.scene,world.camera);
  return world
}