import * as THREE from 'three';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

export default class Sphere extends THREE.Object3D {
  constructor(size) {
    super();
    this.geometry = new THREE.SphereGeometry(size, 48, 48);
    // this.geometry = new THREE.IcosahedronGeometry(1.3, 200);

    this.material = new THREE.MeshPhysicalMaterial({ color: 0xffffff });

    // this.material = new THREE.ShaderMaterial({
    //   vertexShader,
    //   fragmentShader,
    //   uniforms: {
    //     uTime: { value: 0.0 },
    //     uLightDirection: {
    //       value: new THREE.Vector3(1.0, -2, 0.6).normalize(),
    //     },
    //     uColor1: { value: new THREE.Color('#052C4C') },
    //     uColor2: { value: new THREE.Color('#B98A63') },
    //   },
    //   // wireframe: true,
    //   transparent: true,
    // });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.add(this.mesh);
  }
}
