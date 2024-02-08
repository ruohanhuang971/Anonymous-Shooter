import * as THREE from "three";
export default class FPSScene extends THREE.Scene {
    initialize() {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshPhongMaterial({color: 0x00ff00});
        
        this.cube = new THREE.Mesh(geometry, material);
        this.add(this.cube);

        const light = new THREE.DirectionalLight(0xFFFFFF, 1);
        light.position.set(0, 4, 2);
        this.add(light);
    }

    update() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    }
}
