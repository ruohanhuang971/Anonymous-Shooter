import * as THREE from "three";
import Game from "./game.js"

window.onload = () => {
    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('app')
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const game = new Game();
    function animate() {
        requestAnimationFrame(animate);
        game.update();
        renderer.render(game.scene, game.camera);
    }
    animate();
}
