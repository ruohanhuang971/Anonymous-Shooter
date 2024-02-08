import * as THREE from "three";
import FPSScene from "./FPSScene.js";

const width = window.innerWidth;
const height = window.innerHeight

window.onload = () => {
    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('app')
    });
    renderer.setSize(width, height);
    
    const mainCamera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
        );
    mainCamera.position.z = 5;
    // this.scene = new THREE.Scene();
    const scene = new FPSScene();


    function animate() {
        requestAnimationFrame(animate);
        scene.update();
        renderer.render(game.scene, game.mainCamera);
    }
    animate();
}
