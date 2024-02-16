import * as THREE from "three";
// import Game from "./game.js"
import BlasterScene from "./BlasterScene.js";

const width = window.innerWidth;
const height = window.innerHeight;

window.onload = () => {
    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('app')
    });
    renderer.setSize(width, height);
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const scene = new BlasterScene();
    scene.initialize();

    // renderer.render(scene, camera);
    

    // const game = new Game();
    function animate() {
        requestAnimationFrame(animate);
        scene.update();
        renderer.render(scene, camera);
    }
    animate();
}