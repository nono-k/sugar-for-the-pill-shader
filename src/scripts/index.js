import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import GL from './gl';
import Sphere from './gl/Sphere';

class App {
  constructor() {
    this.gl = new GL();
    this.sphere = this.createSphere(1);
    this.sphere2 = this.createSphere(2.5);
    this.sphere3 = this.createSphere(0.5);
    this.sphere4 = this.createSphere(0.1);

    this.sphere.position.set(-0.3, 0.4, -2);
    this.sphere2.position.set(0, 0, -5);
    this.sphere3.position.set(0, 0, -0.8);
    this.sphere4.position.set(0, 0, 0);

    this.gl.scene.add(this.sphere);
    this.gl.scene.add(this.sphere2);
    this.gl.scene.add(this.sphere3);
    this.gl.scene.add(this.sphere4);

    this.controls = new OrbitControls(
      this.gl.camera,
      this.gl.renderer.domElement,
    );
  }

  createSphere(size) {
    const sphere = new Sphere(size);
    return sphere;
  }
}

const app = new App();
