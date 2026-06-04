import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    Float,
    Stars,
    MeshDistortMaterial,
    Icosahedron,
    Torus,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* Camera gently follows the cursor for a parallax / depth feel */
function CameraRig() {
    const { camera, pointer } = useThree();
    useFrame(() => {
        camera.position.x += (pointer.x * 1.6 - camera.position.x) * 0.05;
        camera.position.y += (pointer.y * 1.0 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
    });
    return null;
}

/* Glowing distorted core — the centerpiece */
function Core() {
    const ref = useRef();
    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.15;
            ref.current.rotation.x += delta * 0.05;
        }
    });
    return (
        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
            <Icosahedron ref={ref} args={[1.4, 6]}>
                <MeshDistortMaterial
                    color="#7c3aed"
                    emissive="#4f46e5"
                    emissiveIntensity={0.5}
                    roughness={0.15}
                    metalness={0.6}
                    distort={0.4}
                    speed={2}
                />
            </Icosahedron>
        </Float>
    );
}

/* A ring of small emissive shards orbiting the core */
function OrbitingShards({ count = 14, radius = 3 }) {
    const group = useRef();
    const shards = useMemo(
        () =>
            Array.from({ length: count }).map((_, i) => {
                const angle = (i / count) * Math.PI * 2;
                return {
                    position: [
                        Math.cos(angle) * radius,
                        (Math.random() - 0.5) * 1.5,
                        Math.sin(angle) * radius,
                    ],
                    scale: Math.random() * 0.18 + 0.08,
                    color: i % 2 === 0 ? "#60a5fa" : "#a78bfa",
                };
            }),
        [count, radius]
    );

    useFrame((_, delta) => {
        if (group.current) group.current.rotation.y += delta * 0.25;
    });

    return (
        <group ref={group}>
            {shards.map((s, i) => (
                <Float key={i} speed={2} rotationIntensity={2} floatIntensity={1.5}>
                    <mesh position={s.position} scale={s.scale}>
                        <octahedronGeometry args={[1, 0]} />
                        <meshStandardMaterial
                            color={s.color}
                            emissive={s.color}
                            emissiveIntensity={0.8}
                            roughness={0.2}
                            metalness={0.4}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

/* A faint wireframe halo ring */
function HaloRing() {
    const ref = useRef();
    useFrame((_, delta) => {
        if (ref.current) ref.current.rotation.z += delta * 0.08;
    });
    return (
        <Torus ref={ref} args={[2.6, 0.012, 16, 120]} rotation={[Math.PI / 2.2, 0, 0]}>
            <meshBasicMaterial color="#818cf8" transparent opacity={0.5} />
        </Torus>
    );
}

export default function Hero3D() {
    return (
        <Canvas
            className="!fixed inset-0"
            dpr={[1, 1.75]}
            gl={{ antialias: true, powerPreference: "high-performance" }}
            camera={{ position: [0, 0, 6], fov: 45 }}
        >
            <color attach="background" args={["#0a0a12"]} />
            <fog attach="fog" args={["#0a0a12", 6, 14]} />

            <ambientLight intensity={0.4} />
            <pointLight position={[5, 5, 5]} intensity={120} color="#a78bfa" />
            <pointLight position={[-5, -3, 2]} intensity={80} color="#60a5fa" />

            <Core />
            <OrbitingShards />
            <HaloRing />

            <Stars radius={60} depth={40} count={2500} factor={4} saturation={0} fade speed={1} />

            <CameraRig />

            <EffectComposer disableNormalPass>
                <Bloom
                    intensity={0.9}
                    luminanceThreshold={0.2}
                    luminanceSmoothing={0.9}
                    mipmapBlur
                />
            </EffectComposer>
        </Canvas>
    );
}
