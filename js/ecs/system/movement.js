import { defineQuery } from "bitecs"

import { TransformComponent,DummyTag } from "../components/components.js"

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num
}
export const movementQuery = defineQuery([TransformComponent,DummyTag])

export const movementSystem = (world) => {
  const { time: { delta, elapsed } } = world
  const ents = movementQuery(world)
  if (world.howToPlay === true) return world;
  for (let i = 0; i < ents.length; i++) {
    const e = ents[i]
    const obj3d = world.objects.get(e)
    const normal= world.Curve.normal.clone();
    obj3d.position.copy(world.camera.position.clone().add(world.Curve.tangent.clone().multiplyScalar(0.01)));
    obj3d.position.add(normal.clone().multiplyScalar(-0.08));
    obj3d.up.copy(normal.clone().multiplyScalar(-1));
    obj3d.lookAt(world.Curve.pos.clone().sub(world.Curve.tangent).sub(normal.multiplyScalar(0.2)))
  }
  return world
}
