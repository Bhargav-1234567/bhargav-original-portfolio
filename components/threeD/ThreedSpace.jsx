import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  CameraControls,
  Stars,
  CameraShake,
  Sphere,
  useTexture,
  useHelper,
  OrbitControls,
  Sparkles,
  MeshTransmissionMaterial,
  Ring,
  GradientTexture,
  Backdrop,
  MeshDistortMaterial,
  Text,
  Points,
  Scroll,
  ScrollControls,
  Html,
  useScroll,
} from "@react-three/drei";
import * as THREE from "three";
import earth from "../../public/8k_earth_daymap.jpg";

import ThreeParticles from "./ThreeParticles";

// const earthTexture = useTexture(earth);
const vertexShader = `
varying vec2 virtexUV;
varying vec3 vectorNormal;
   void main() {
  virtexUV = uv;
       vectorNormal =normalize(normalMatrix * normal) ;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D globTexture;
varying vec2 virtexUV;
varying vec3 vectorNormal;
 void main() {
 float intensity = 1.05 - dot(vectorNormal,vec3(0.0,0.0,0.9));
 vec3 atmosphere = vec3(0.3,0.6,1.0) * pow(intensity, 1.5);
   gl_FragColor =vec4(atmosphere + texture2D(globTexture, virtexUV).xyz,1.0);
}
`;
function Earth() {
  const earthRef = useRef();
  useFrame(() => {
    earthRef.current.rotation.y += 0.009;
  });

  return (
    <mesh position={[10, 4, 0]}>
      <Sphere args={[6, 32, 50]} ref={earthRef}>
        {/* <meshStandardMaterial  /> */}

        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={{
            globTexture: {
              value: new THREE.TextureLoader().load(
                "../../public/8k_earth_daymap.jpg"
              ),
            },
          }}
        />
      </Sphere>
      <Sphere args={[6, 32, 50]} scale={1.1}>
        <shaderMaterial
          fragmentShader={`
          varying vec3 vectorNormal;
            void main() {
            float intensity = pow(0.9 - dot(vectorNormal,vec3(0,0,1.0)),2.0);
                gl_FragColor =vec4(0.3,0.6,1.0,1.0) * intensity;
            }
          `}
          vertexShader={`
            varying vec3 vectorNormal;
              void main() {
              vectorNormal =normalize(normalMatrix * normal) ;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </Sphere>
    </mesh>
  );
}

function BlackHole() {
  return (
    <mesh position={[0, 0, 0]}>
      {/* <Ring args={[2.5, 3, 100]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        
        <meshBasicMaterial side={THREE.DoubleSide}>
    <GradientTexture
      stops={[0, 0.5,1]} // As many stops as you want
      colors={['#ffffff', '#e730ff', '#8c009e']} // Colors need to match the number of stops
      size={1024} // Size is optional, default = 1024
      
    />
   </meshBasicMaterial>
      </Ring> */}

      <Sphere args={[2.5, 36, 36]}>
        <MeshTransmissionMaterial
          side={THREE.DoubleSide}
          transmission={1}
          backsideThickness={1}
          thickness={5}
          roughness={0}
          chromaticAberration={0.01}
        />
      </Sphere>

      {/* <Sphere args={[2.6,36,36]}  >
        <MeshTransmissionMaterial  transmission={1} backside={true}  ior={0} anisotropicBlur={2}  thickness={5} roughness={0} chromaticAberration={0.01}/>
      </Sphere> */}
      <meshBasicMaterial color={"black"} />
      <Particles pradius={3} speed={0.05} spredy={0.1} />
      <Particles pradius={4.3} speed={0.04} spredy={0.6} />
      <Particles pradius={5} speed={0.03} spredy={0.5} />
      <Particles pradius={6} speed={0.02} spredy={0.09} />
      <Particles pradius={7} speed={0.01} spredy={0.09} />
      <Particles pradius={8} speed={0.01} pCount={700} spredy={0.09} />
      <Particles pradius={10} speed={0.01} pCount={200} spredy={0.09} />
    </mesh>
  );
}

function PointLightWithHelper() {
  const lightRef = useRef();
  // useHelper(lightRef, THREE.PointLightHelper, 1);

  return <pointLight ref={lightRef} position={[0, 0, 0]} intensity={100} />;
}

function Particles({ pradius, speed, pCount, spredy }) {
  const particlesRef = useRef();
  const particleCount = pCount || 1000; // Number of particles
  const particles = new THREE.BufferGeometry(); // Create BufferGeometry object
  const positions = new Float32Array(particleCount * 3); // Array to store particle positions

  for (let i = 0; i < particleCount; i++) {
    const theta = Math.random() * Math.PI * 2; // Random angle between 0 and 2π
    const radius = pradius || 3; // Radius of the circle

    positions[i * 3] = radius * Math.cos(theta) + (Math.random() - 0.5) * 2; // x-coordinate with randomness
    positions[i * 3 + 1] = (Math.random() - 0.5) * 0.09; // y-coordinate (currently zero, no spread in y-axis)
    positions[i * 3 + 2] = radius * Math.sin(theta) + (Math.random() - 0.5) * 2; // z-coordinate with randomness
  }

  particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  useFrame(() => {
    particlesRef.current.rotation.y += speed || 0.01;
  });

  return (
    <>
      <points ref={particlesRef} geometry={particles}>
        <pointsMaterial color="#ffffff" size={0.01} opacity={1} />
      </points>
    </>
  );
}

const StarBack = () => {
  const startRef = useRef(null);
  useFrame(() => {
    startRef.current.rotation.y += 0.001;
  });

  return (
    <Stars
      radius={100} // Radius of the inner sphere where stars are placed
      depth={50} // Depth of area where stars are placed
      count={4000} // Number of stars
      factor={4} // Size factor for stars
      saturation={1} // Saturation of stars
      fade // Enable fade for stars
      ref={startRef}
    />
  );
};

export default function ThreedSpace({ children }) {
  const scroll = useScroll();

  return (
    <Canvas
      camera={{ position: [0.2, 0.1, 10], fov: 80 }}
      style={{ background: "black", height: "100vh", width: "100vw" }}
    >
      {/* <ambientLight intensity={2} /> */}

      <StarBack />

      <mesh rotation-x={0.03} rotation-z={Math.PI * 0.1}>
        <Suspense fallback={null}>
          <BlackHole />
          <ScrollControls pages={1} damping={0} maxSpeed={1}>
            <Scroll>
              <Html fullscreen position={[0, 10, 40]}>
                {children}
              </Html>
            </Scroll>
          </ScrollControls>

          <Earth />
        </Suspense>
        {/* <OrbitControls maxDistance={20} /> */}
      </mesh>

      {/* <ThreeParticles count={10000} /> */}
    </Canvas>
  );
}
