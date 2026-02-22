import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingParticles = () => {
    const particlesRef = useRef<THREE.Points>(null);
    useFrame(({ clock }) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
            particlesRef.current.rotation.x = clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <Stars ref={particlesRef} radius={100} depth={50} count={5000} factor={3} saturation={0} fade speed={1} />
    );
};

export const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
                <ambientLight intensity={0.2} />
                <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#E4000F" />

                <FloatingParticles />

                {/* Abstract Glass/Glowing Elements - Red */}
                <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
                    <mesh position={[-4, -1, -3]}>
                        <torusGeometry args={[1.5, 0.4, 32, 100]} />
                        <meshPhysicalMaterial
                            color="#E4000F"
                            emissive="#E4000F"
                            emissiveIntensity={0.8}
                            roughness={0.2}
                            metalness={0.8}
                            clearcoat={1}
                            clearcoatRoughness={0.1}
                            transparent
                            opacity={0.8}
                        />
                    </mesh>
                </Float>

                {/* Abstract Glass/Glowing Elements - Dark */}
                <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
                    <mesh position={[5, 2, -6]}>
                        <icosahedronGeometry args={[2, 1]} />
                        <meshPhysicalMaterial
                            color="#111111"
                            emissive="#000000"
                            transmission={0.9} // glass-like
                            thickness={0.5}
                            roughness={0.1}
                            ior={1.5}
                            transparent
                            opacity={1}
                        />
                    </mesh>
                </Float>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
};
