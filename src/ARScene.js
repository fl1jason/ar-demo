// src/ARScene.js
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton";

const ARScene = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    canvasRef.current.appendChild(renderer.domElement);

    const arButton = ARButton.createButton(renderer);
    document.body.appendChild(arButton);

    // Add a simple cube to the scene
    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, -0.5);
    scene.add(cube);

    function animate() {
      renderer.setAnimationLoop(() => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      });
    }

    animate();

    return () => {
      document.body.removeChild(arButton);
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default ARScene;
