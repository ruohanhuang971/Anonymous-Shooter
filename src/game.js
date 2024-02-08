import * as THREE from "three";
export default class Game {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
        );

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshPhongMaterial({color: 0x00ff00});
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
        this.camera.position.z = 5;

        const light = new THREE.DirectionalLight(0xFFFFFF, 1);
        light.position.set(0, 4, 2);
        this.scene.add(light);
    }

    update() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    }
}
