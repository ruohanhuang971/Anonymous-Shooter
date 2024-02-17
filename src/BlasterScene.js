import * as THREE from "three";

import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";

export default class BlasterScene extends THREE.Scene {
  mtlLoader = new MTLLoader();
  objLoader = new OBJLoader();

  async initialize() {
    const targetMtl = await this.mtlLoader.loadAsync(
      "../public/assets/targetB.mtl"
    );
    targetMtl.preload();

    this.objLoader.setMaterials(targetMtl);
    const model = await this.objLoader.loadAsync(
      "../public/assets/targetB.obj"
    );
    this.add(model);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 4, 2);

    this.add(light);
  }

  update() {
    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
  }
}
