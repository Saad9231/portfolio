"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

function Sculpture() {
  const width = useThree((state) => state.viewport.width);
  const isMobile = width < 6;

  return (
    <group
      position={[width * (isMobile ? 0.2 : 0.24), isMobile ? -1.5 : 0.05, 0]}
      scale={isMobile ? 0.32 : 0.7}
    >
      <Float speed={1.15} rotationIntensity={0.42} floatIntensity={0.55}>
        <mesh>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshDistortMaterial
            color="#a5f3e8"
            attach="material"
            distort={0.28}
            speed={1.4}
            roughness={0.24}
            metalness={0.58}
          />
        </mesh>
      </Float>
      {!isMobile && (
        <ContactShadows position={[0, -1.5, 0]} opacity={0.28} scale={5} blur={2.5} far={4} />
      )}
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 5, 5]} intensity={2.2} color="#f2f1e9" />
      <pointLight position={[-3, -1, 2]} intensity={18} color="#ff795f" />
      <Sculpture />
      <Sparkles count={44} scale={8} size={1.5} speed={0.18} opacity={0.45} color="#f2f1e9" />
      <Environment preset="city" />
    </Canvas>
  );
}