import * as THREE from 'three';

export default class GL {
  constructor() {
    const canvas = document.querySelector('.webgl');
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xffffff, 0);

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.camera.position.set(0, 0, 5);

    this.scene = new THREE.Scene();

    this.clock = new THREE.Clock();

    this.mouse = new THREE.Vector2();
    this.mouseTarget = new THREE.Vector2();

    this.init();
    this.animate();
  }

  init() {
    this.addLight();
    this.addEvents();
  }

  addLight() {
    const ambient = new THREE.AmbientLight('#052C4C', 3.2);
    this.scene.add(ambient);

    const spotLight = new THREE.PointLight('#330201', 400, 10);
    spotLight.position.set(-1.2, 2.1, 2.5);
    this.scene.add(spotLight);
    this.scene.add(spotLight.target);
  }

  addEvents() {
    window.addEventListener('resize', this.resize.bind(this));
    // window.addEventListener('mousemove', this.mouseMove.bind(this));
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.renderer.setSize(width, height);

    this.camera.updateProjectionMatrix();
  }

  mouseMove(e) {
    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  render() {
    this.scene.traverse(child => {
      if (
        child.isMesh &&
        child.material &&
        child.material.uniforms &&
        child.material.uniforms.uTime
      ) {
        child.material.uniforms.uTime.value = this.clock.getElapsedTime();
      }
    });

    this.renderer.render(this.scene, this.camera);
  }
}
