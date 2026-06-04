import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const GREEN = "#00ff88";
const METAL = "#16161d";
const BODY = "#1f1f2a";

function Character({ waveRef }) {
    const group = useRef();
    const head = useRef();
    const rightArm = useRef();
    const ring = useRef();
    const { pointer } = useThree();

    useFrame((state) => {
        const t = state.clock.elapsedTime;

        // Idle float + gentle turn toward cursor
        if (group.current) {
            group.current.position.y = Math.sin(t * 1.6) * 0.06 - 0.15;
            group.current.rotation.y = THREE.MathUtils.lerp(
                group.current.rotation.y,
                pointer.x * 0.35,
                0.05
            );
        }
        // Head tracks cursor
        if (head.current) {
            head.current.rotation.y = THREE.MathUtils.lerp(head.current.rotation.y, pointer.x * 0.5, 0.1);
            head.current.rotation.x = THREE.MathUtils.lerp(head.current.rotation.x, -pointer.y * 0.3, 0.1);
        }
        // Right arm: wave when triggered, else subtle sway
        if (rightArm.current) {
            const waving = waveRef.current > performance.now();
            const target = waving
                ? -1.6 + Math.sin(t * 16) * 0.5
                : Math.sin(t * 1.6) * 0.12;
            rightArm.current.rotation.z = THREE.MathUtils.lerp(rightArm.current.rotation.z, target, 0.15);
        }
        // Spin the platform ring slowly
        if (ring.current) ring.current.rotation.z += 0.01;
    });

    return (
        <group ref={group}>
            {/* Glowing platform ring */}
            <mesh ref={ring} position={[0, -1.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.62, 0.035, 16, 64]} />
                <meshStandardMaterial color={GREEN} emissive={GREEN} emissiveIntensity={1.4} toneMapped={false} />
            </mesh>

            {/* Legs */}
            <mesh position={[-0.17, -0.78, 0]}>
                <capsuleGeometry args={[0.11, 0.42, 8, 16]} />
                <meshStandardMaterial color={METAL} metalness={0.5} roughness={0.4} />
            </mesh>
            <mesh position={[0.17, -0.78, 0]}>
                <capsuleGeometry args={[0.11, 0.42, 8, 16]} />
                <meshStandardMaterial color={METAL} metalness={0.5} roughness={0.4} />
            </mesh>

            {/* Torso */}
            <RoundedBox args={[0.68, 0.8, 0.4]} radius={0.16} smoothness={4} position={[0, -0.05, 0]}>
                <meshStandardMaterial color={BODY} metalness={0.55} roughness={0.3} />
            </RoundedBox>
            {/* Chest core */}
            <mesh position={[0, 0, 0.205]}>
                <circleGeometry args={[0.09, 32]} />
                <meshStandardMaterial color={GREEN} emissive={GREEN} emissiveIntensity={1.6} toneMapped={false} />
            </mesh>

            {/* Left arm */}
            <group position={[-0.42, 0.2, 0]}>
                <mesh position={[0, -0.28, 0]} rotation={[0, 0, 0.12]}>
                    <capsuleGeometry args={[0.085, 0.42, 8, 16]} />
                    <meshStandardMaterial color={METAL} metalness={0.5} roughness={0.4} />
                </mesh>
            </group>
            {/* Right arm (waves) — pivots at shoulder */}
            <group ref={rightArm} position={[0.42, 0.2, 0]}>
                <mesh position={[0, -0.28, 0]}>
                    <capsuleGeometry args={[0.085, 0.42, 8, 16]} />
                    <meshStandardMaterial color={METAL} metalness={0.5} roughness={0.4} />
                </mesh>
            </group>

            {/* Head */}
            <group ref={head} position={[0, 0.62, 0]}>
                <RoundedBox args={[0.54, 0.5, 0.46]} radius={0.14} smoothness={4}>
                    <meshStandardMaterial color="#23232f" metalness={0.55} roughness={0.28} />
                </RoundedBox>
                {/* Visor */}
                <RoundedBox args={[0.46, 0.2, 0.05]} radius={0.08} smoothness={4} position={[0, 0.02, 0.22]}>
                    <meshStandardMaterial color="#05140d" metalness={0.3} roughness={0.1} />
                </RoundedBox>
                {/* Eyes */}
                <mesh position={[-0.11, 0.03, 0.25]}>
                    <sphereGeometry args={[0.045, 16, 16]} />
                    <meshStandardMaterial color={GREEN} emissive={GREEN} emissiveIntensity={2} toneMapped={false} />
                </mesh>
                <mesh position={[0.11, 0.03, 0.25]}>
                    <sphereGeometry args={[0.045, 16, 16]} />
                    <meshStandardMaterial color={GREEN} emissive={GREEN} emissiveIntensity={2} toneMapped={false} />
                </mesh>
                {/* Antenna */}
                <mesh position={[0, 0.32, 0]}>
                    <cylinderGeometry args={[0.012, 0.012, 0.18, 8]} />
                    <meshStandardMaterial color={METAL} metalness={0.6} roughness={0.3} />
                </mesh>
                <mesh position={[0, 0.43, 0]}>
                    <sphereGeometry args={[0.04, 16, 16]} />
                    <meshStandardMaterial color={GREEN} emissive={GREEN} emissiveIntensity={2.2} toneMapped={false} />
                </mesh>
            </group>
        </group>
    );
}

export default function Avatar3D({ waveRef }) {
    return (
        <Canvas
            dpr={[1, 1.75]}
            gl={{ antialias: true, alpha: true }}
            camera={{ position: [0, 0.1, 3.1], fov: 42 }}
            style={{ background: "transparent" }}
        >
            <ambientLight intensity={0.7} />
            <pointLight position={[2, 3, 3]} intensity={40} color="#ffffff" />
            <pointLight position={[-3, 1, 2]} intensity={25} color={GREEN} />
            <pointLight position={[0, -2, 2]} intensity={12} color={GREEN} />
            <Character waveRef={waveRef} />
        </Canvas>
    );
}
