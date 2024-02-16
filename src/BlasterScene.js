import * as THREE from "three";

import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader';

export default class BlasterScene extends THREE.Scene {
    static mtlLoader = new MTLLoader();
    static objLoader = new OBJLoader(); 

    initialize() {
        const targetMtl = this.mtlLoader.loadAsync('../public/assets/targetB.mtl');
        targetMtl.preload();

        const light = new THREE.DirectionalLight(0xFFFFFF, 1);
        light.position.set(0, 4, 2);
        
        this.add(light);
    }

    update() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    }
}