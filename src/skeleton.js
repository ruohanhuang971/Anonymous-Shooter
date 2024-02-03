import * as THREE from "three";

window.onload = () => {
    

    function animate() {
        requestAnimationFrame(animate);
         // Rotate the sphere
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}
