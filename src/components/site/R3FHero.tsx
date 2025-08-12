"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function Rings() {
  const g = new THREE.RingGeometry(0.9, 1, 64);
  const m = new THREE.MeshBasicMaterial({ color: "#10B981", transparent: true, opacity: 0.35 });
  const r1 = useRef<THREE.Mesh>(null!);
  const r2 = useRef<THREE.Mesh>(null!);
  const r3 = useRef<THREE.Mesh>(null!);
  useFrame((_, d) => {
    r1.current.rotation.z += 0.08 * d;
    r2.current.rotation.z -= 0.06 * d;
    r3.current.rotation.z += 0.04 * d;
  });
  return (
    <group>
      <mesh ref={r1} geometry={g} material={m} />
      <mesh ref={r2} geometry={g} material={m} scale={0.7} />
      <mesh ref={r3} geometry={g} material={m} scale={0.45} />
    </group>
  );
}

function GlowSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, d) => { ref.current.rotation.y += 0.2 * d; });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.35, 48, 48]} />
      <meshPhongMaterial emissive="#10B981" emissiveIntensity={0.6} color="#ffffff" opacity={0.85} transparent />
    </mesh>
  );
}

export default function R3FHero() {
  return (
    <div className="relative mx-auto h-[420px] w-[320px] overflow-hidden rounded-2xl border bg-white/70 shadow-xl">
      <Canvas camera={{ position: [0, 0, 2.2], fov: 45 }}>
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={0.6} />
        <Rings />
        <GlowSphere />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}


