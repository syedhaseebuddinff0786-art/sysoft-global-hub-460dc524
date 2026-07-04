import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Environment } from "@react-three/drei";
import * as THREE from "three";

function Core({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.current.y * 0.35,
      0.05,
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      mouse.current.x * 0.4,
      0.05,
    );
    if (inner.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.03;
      inner.current.scale.setScalar(s);
    }
  });
  return (
    <group ref={group}>
      {/* Distorted core sphere */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh ref={inner}>
          <icosahedronGeometry args={[1.15, 8]} />
          <MeshDistortMaterial
            color="#4b7dff"
            emissive="#1a4aff"
            emissiveIntensity={0.4}
            distort={0.35}
            speed={1.6}
            roughness={0.15}
            metalness={0.85}
          />
        </mesh>
      </Float>
      {/* Wireframe outer shell */}
      <mesh>
        <icosahedronGeometry args={[1.7, 2]} />
        <meshBasicMaterial color="#7aa2ff" wireframe transparent opacity={0.18} />
      </mesh>
      {/* Orbit rings */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.6, i * 0.9, i * 0.3]}>
          <torusGeometry args={[2.1 + i * 0.35, 0.008, 12, 128]} />
          <meshBasicMaterial color="#8ab4ff" transparent opacity={0.35 - i * 0.08} />
        </mesh>
      ))}
    </group>
  );
}

function Nodes() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.08;
  });
  const nodes: [number, number, number][] = [];
  const count = 14;
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    const r = 2.6;
    nodes.push([
      r * Math.cos(theta) * Math.sin(phi),
      r * Math.sin(theta) * Math.sin(phi),
      r * Math.cos(phi),
    ]);
  }
  return (
    <group ref={ref}>
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color="#c9dcff" />
        </mesh>
      ))}
    </group>
  );
}

export function Hero3D() {
  const mouse = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      mouse.current.x = x;
      mouse.current.y = y;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  if (!mounted) return null;
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} color="#a8c4ff" />
      <pointLight position={[-4, -2, -2]} intensity={2} color="#7a5cff" />
      <pointLight position={[4, 3, 2]} intensity={1.5} color="#3ad7ff" />
      <Suspense fallback={null}>
        <Core mouse={mouse} />
        <Nodes />
        <Sparkles count={80} scale={[8, 6, 6]} size={2} speed={0.4} color="#8ab4ff" opacity={0.6} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}