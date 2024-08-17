import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ThreeParticles({ count }) {
  const meshRef = useRef();
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const opacities = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1000;

      opacities[i] = Math.random();
    }

    return { positions, opacities };
  }, [count]);
  //   useFrame(({ clock }) => {
  //      const time = clock.getElapsedTime();
  //     for (let i = 0; i < count; i++) {
  //       const opacity = Math.sin(time * 2 + i * 0.1) * 0.5 + 0.5;
  //        meshRef.current.geometry.attributes.opacity.array[i] = opacity;
  //     }
  //     meshRef.current.geometry.attributes.opacity.needsUpdate = true;
  //   });

  console.log(meshRef.current, "asdasdasd", Math.sin());

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-opacity"
          count={particles.opacities.length}
          array={particles.opacities}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        transparent
        vertexShader={`
          attribute float opacity;
          varying float vOpacity;
          void main() {
            vOpacity = opacity;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = 2.0;
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          varying float vOpacity;
          void main() {
            gl_FragColor = vec4(1.0, 1.0, 1.0, vOpacity);
          }
        `}
      />
    </points>
  );
}

export default ThreeParticles;
