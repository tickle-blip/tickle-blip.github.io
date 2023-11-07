import * as bitECS from 'bitecs'
import {Clock, PerspectiveCamera, Scene, Vector2, WebGLRenderer} from "three";

export const createWorld = (camera) => {
  const world = bitECS.createWorld()

  if (camera === undefined) {
    world.camera = new PerspectiveCamera(120, 1/(window.innerWidth / window.innerHeight), 0.01, 1000)
  }
  else{
    world.camera = camera;
  }
  
  world.scene = new Scene()

  world.renderer = new WebGLRenderer( { antialias: false } )
 // world.renderer.setPixelRatio( window.devicePixelRatio )
  
  world.renderer.setSize( window.innerWidth, window.innerHeight);
  document.body.appendChild( world.renderer.domElement )
  world.camera.aspect = window.innerWidth / window.innerHeight
  world.camera.updateProjectionMatrix()
  window.addEventListener('resize', () => {

    world.camera.aspect = window.innerWidth  / window.innerHeight;
    world.camera.updateProjectionMatrix()
    world.renderer.setSize( window.innerWidth, window.innerHeight )
 //   world.renderer.setPixelRatio( window.devicePixelRatio )
    console.log(world.renderer.getRenderTarget())

  })

  world.objects = new Map()

  world.clock = new Clock();
  
  world.time = { last: 0, delta: 0, elapsed: 0 }
  world.pointer = new Vector2();
  return world
}