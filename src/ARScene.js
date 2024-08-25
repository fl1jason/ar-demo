// src/ARScene.js
import React from "react";
import "aframe";
import "react-aframe-ar";

const ARScene = () => {
  return (
    <a-scene embedded arjs="sourceType: webcam;">
      {/* Marker Example (Hiro) */}
      <a-marker preset="hiro">
        <a-box position="0 0.5 0" material="color: yellow;"></a-box>
      </a-marker>

      {/* Camera */}
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARScene;
