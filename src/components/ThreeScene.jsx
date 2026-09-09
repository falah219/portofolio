import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, Torus } from '@react-three/drei';
import * as THREE from 'three';

// ─── Animated Glowing Orb ────────────────────────────────────────────────────
function GlowOrb() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={1.8}>
        <Sphere args={[1, 100, 100]}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.45}
            speed={2.5}
            roughness={0}
            metalness={0.9}
            emissive="#6366f1"
            emissiveIntensity={0.15}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

// ─── Orbiting Ring ────────────────────────────────────────────────────────────
function OrbitRing({ radius, color, speed, tilt }) {
  const ringRef = useRef();
  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z = state.clock.elapsedTime * speed;
  });

  return (
    <mesh ref={ringRef} rotation={[tilt, 0, 0]}>
      <Torus args={[radius, 0.015, 16, 100]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          transparent
          opacity={0.5}
        />
      </Torus>
    </mesh>
  );
}

// ─── Floating Particles ───────────────────────────────────────────────────────
function Particles({ count = 80 }) {
  const mesh = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.04;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#22d3ee"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

// ─── Mouse-reactive Scene ─────────────────────────────────────────────────────
function Scene({ mouseX, mouseY }) {
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += (mouseX * 0.5 - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (-mouseY * 0.3 - groupRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <GlowOrb />
      <OrbitRing radius={2.5} color="#6366f1" speed={0.4} tilt={Math.PI / 4} />
      <OrbitRing radius={3.2} color="#22d3ee" speed={-0.25} tilt={Math.PI / 6} />
      <OrbitRing radius={3.8} color="#8b5cf6" speed={0.18} tilt={Math.PI / 2.5} />
      <Particles count={100} />
    </group>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function ThreeScene({ mouseX = 0, mouseY = 0 }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#6366f1" />
      <pointLight position={[-5, -5, 5]} intensity={1} color="#22d3ee" />
      <pointLight position={[0, 5, -5]} intensity={0.8} color="#8b5cf6" />

      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={3}
        saturation={0.5}
        fade
        speed={0.5}
      />

      <Scene mouseX={mouseX} mouseY={mouseY} />
    </Canvas>
  );
}
