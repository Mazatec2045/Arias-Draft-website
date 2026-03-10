import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Axolotl = ({ isMobile }) => {
    const axolotlRef = React.useRef();

    // Scroll rotation logic
    useEffect(() => {
        const handleScroll = () => {
            if (axolotlRef.current) {
                // Rotate based on scroll position - roughly 1 full rotation per 1000px scrolled
                axolotlRef.current.rotation.y = window.scrollY * 0.005;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Axolotl built from primitive blocks to match the Minecraft aesthetic
    return (
        <group 
            ref={axolotlRef}
            scale={isMobile ? 0.8 : 1}
            position={isMobile ? [0, -2, 0] : [0, -1.5, 0]}
        >
            <hemisphereLight intensity={0.5} groundColor='black' />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={2} color="#ffffff" distance={50} decay={2} position={[0, 10, 0]} />
            
            <group rotation={[0.2, 0, 0]}>
                {/* Body (Pink) */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1.2, 0.8, 2.5]} />
                    <meshStandardMaterial color='#ffb6c1' />
                </mesh>
                
                {/* Head (Pink) */}
                <mesh position={[0, 0.2, 1.5]}>
                    <boxGeometry args={[1.5, 1.2, 1.2]} />
                    <meshStandardMaterial color='#ffb6c1' />
                </mesh>

                {/* Eyes (Black) */}
                <mesh position={[-0.5, 0.4, 2.15]}>
                    <boxGeometry args={[0.2, 0.2, 0.1]} />
                    <meshStandardMaterial color='#000000' />
                </mesh>
                <mesh position={[0.5, 0.4, 2.15]}>
                    <boxGeometry args={[0.2, 0.2, 0.1]} />
                    <meshStandardMaterial color='#000000' />
                </mesh>

                {/* Gills (Darker Pink) - Left */}
                <mesh position={[-0.9, 0.6, 1.3]}>
                    <boxGeometry args={[0.4, 0.2, 0.2]} />
                    <meshStandardMaterial color='#ff69b4' />
                </mesh>
                <mesh position={[-0.9, 0.2, 1.3]}>
                    <boxGeometry args={[0.4, 0.2, 0.2]} />
                    <meshStandardMaterial color='#ff69b4' />
                </mesh>
                
                {/* Gills (Darker Pink) - Right */}
                <mesh position={[0.9, 0.6, 1.3]}>
                    <boxGeometry args={[0.4, 0.2, 0.2]} />
                    <meshStandardMaterial color='#ff69b4' />
                </mesh>
                <mesh position={[0.9, 0.2, 1.3]}>
                    <boxGeometry args={[0.4, 0.2, 0.2]} />
                    <meshStandardMaterial color='#ff69b4' />
                </mesh>

                {/* Tail (Darker Pink) */}
                <mesh position={[0, 0, -1.5]}>
                    <boxGeometry args={[0.2, 0.6, 1.0]} />
                    <meshStandardMaterial color='#ff69b4' />
                </mesh>
            </group>
        </group>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(() => {
        // Check if window is defined (for server-side rendering)
        if (typeof window !== 'undefined') {
            return window.matchMedia("(max-width: 500px)").matches;
        }
        return false;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            onCreated={({ gl }) => {
                gl.setClearColor('#87ceeb', 1);
            }}
            style={{ background: '#87ceeb' }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Axolotl isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
