import * as THREE from 'three';
import * as Tone from 'tone';
export function setupCounter(element) {
  let counter = 0
  
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    const v = new THREE.Vector3(1, 1, 1);
    const Synth = new Tone.Synth().toDestination();
    console.log(Synth)
  }
  
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
