import { defineComponent, Types } from "bitecs"

const { f32 } = Types

export const Vector3Schema = { x: f32, y: f32, z: f32 }
export const QuaternionSchema = { x: f32, y: f32, z: f32, w: f32 }

export const TransformSchema = {
  position: Vector3Schema,
  rotation: QuaternionSchema,
  scale: Vector3Schema,
}
export const MovementParametersSchema = {
  speedV: Vector3Schema,
  speed: f32,
}
export const TransformComponent = defineComponent(TransformSchema)
export const CameraTag = defineComponent()
export const DummyTag = defineComponent()