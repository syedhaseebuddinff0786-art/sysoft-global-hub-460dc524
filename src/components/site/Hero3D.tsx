import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Environment, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

function TripleS({
  mouse,
  unfolded,
  onClick,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  unfolded: boolean;
  onClick: () => void;
}) {
  const group = useRef<THREE.Group>(null);
  const letters = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * (unfolded ? 0.05 : 0.25);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.current.y * 0.25,
      0.05,
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      mouse.current.x * 0.35,
      0.05,
    );
    // idle breathing
    const breath = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.025;
    group.current.scale.setScalar(unfolded ? breath * 0.85 : breath);

    if (letters.current) {
      letters.current.children.forEach((child, i) => {
        const target = unfolded ? (i - 1) * 2.1 : (i - 1) * 0.85;
        child.position.x = THREE.MathUtils.lerp(child.position.x, target, 0.08);
        child.rotation.y = THREE.MathUtils.lerp(
          child.rotation.y,
          unfolded ? Math.sin(state.clock.elapsedTime + i) * 0.4 : 0,
          0.05,
        );
      });
    }
  });

  return (
    <group ref={group} onClick={onClick}>
      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.6}>
        <group ref={letters}>
          {[0, 1, 2].map((i) => (
            <Center key={i} position={[(i - 1) * 0.85, 0, 0]}>
              <Text3D
                font="/fonts/inter-bold.json"
                size={0.9}
                height={0.28}
                bevelEnabled
                bevelSegments={4}
                bevelSize={0.03}
                bevelThickness={0.04}
                curveSegments={12}
              >
                S
                <meshPhysicalMaterial
                  color={i === 1 ? "#8ab4ff" : "#c9d4e5"}
                  metalness={0.95}
                  roughness={0.18}
                  clearcoat={1}
                  clearcoatRoughness={0.05}
                  reflectivity={1}
                  envMapIntensity={1.4}
                  emissive={i === 1 ? "#1a4aff" : "#000000"}
                  emissiveIntensity={i === 1 ? 0.35 : 0}
                />
              </Text3D>
            </Center>
          ))}
        </group>
      </Float>

      {/* Glass halo */}
      <mesh>
        <torusGeometry args={[2.4, 0.02, 16, 160]} />
        <meshBasicMaterial color="#8ab4ff" transparent opacity={0.35} />
      </mesh>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.6, i * 0.9, i * 0.3]}>
          <torusGeometry args={[2.1 + i * 0.35, 0.006, 12, 128]} />
          <meshBasicMaterial color="#8ab4ff" transparent opacity={0.28 - i * 0.06} />
        </mesh>
      ))}
    </group>
  );
}

// Fallback: if Text3D font fails, render metallic glass spheres arranged as SSS
function TripleSFallback({
  mouse,
  unfolded,
  onClick,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  unfolded: boolean;
  onClick: () => void;
}) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * (unfolded ? 0.05 : 0.2);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.current.y * 0.25,
      0.05,
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      mouse.current.x * 0.35,
      0.05,
    );
    const breath = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.03;
    group.current.scale.setScalar(breath);
    group.current.children.forEach((child, i) => {
      if (i < 3) {
        const target = unfolded ? (i - 1) * 2.4 : (i - 1) * 1.1;
        child.position.x = THREE.MathUtils.lerp(child.position.x, target, 0.08);
      }
    });
  });
  return (
    <group ref={group} onClick={onClick}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[(i - 1) * 1.1, 0, 0]}>
          <torusKnotGeometry args={[0.42, 0.14, 128, 24, 2, 3]} />
          <meshPhysicalMaterial
            color={i === 1 ? "#8ab4ff" : "#c9d4e5"}
            metalness={0.95}
            roughness={0.18}
            clearcoat={1}
            clearcoatRoughness={0.05}
            reflectivity={1}
            envMapIntensity={1.4}
            emissive={i === 1 ? "#1a4aff" : "#000000"}
            emissiveIntensity={i === 1 ? 0.3 : 0}
          />
        </mesh>
      ))}
      {[0, 1, 2].map((i) => (
        <mesh key={`r${i}`} rotation={[Math.PI / 2 + i * 0.6, i * 0.9, i * 0.3]}>
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