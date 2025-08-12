"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

function BgRings() {
  const g = new THREE.RingGeometry(1.2, 1.25, 128);
  const m = new THREE.MeshBasicMaterial({ color: "#10B981", transparent: true, opacity: 0.2 });
  const group = useRef<THREE.Group>(null!);
  useFrame((_, d) => {
    if (!group.current) return;
    group.current.rotation.z += 0.02 * d;
  });
  const rings = new Array(14).fill(0).map((_, i) => (
    <mesh key={i} geometry={g} material={m} scale={1 + i * 0.28} />
  ));
  return <group ref={group} position={[-0.7, 0.15, -0.4]}>{rings}</group>;
}

function BgGlow() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((_, d) => { if (mesh.current) mesh.current.rotation.y += 0.05 * d; });
  return (
    <mesh ref={mesh} position={[0.6, 0.1, -0.2]}>
      <sphereGeometry args={[0.35, 32, 32]} />
      <meshPhongMaterial emissive="#10B981" emissiveIntensity={0.35} color="#ffffff" transparent opacity={0.4} />
    </mesh>
  );
}

export default function R3FBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      <Canvas gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 2.0], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={0.4} />
        <BgRings />
        <BgGlow />
      </Canvas>
    </div>
  );
}


