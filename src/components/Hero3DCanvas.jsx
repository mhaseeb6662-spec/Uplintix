import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Html, Line, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Cinematic Ecosystem Node
const EcosystemNode = ({ position, label, delay, color }) => {
  const meshRef = useRef();
  const htmlRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating and rotation
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
      
      // Scale animation on reveal
      if (visible) {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.05);
        if (htmlRef.current) htmlRef.current.style.opacity = 1;
      } else {
        meshRef.current.scale.set(0, 0, 0);
        if (htmlRef.current) htmlRef.current.style.opacity = 0;
      }
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.2} 
          emissive={color}
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>
      
      {/* HTML Label attached to the 3D Node */}
      <Html 
        distanceFactor={15} 
        zIndexRange={[100, 0]} 
        center
        position={[0, -0.6, 0]}
      >
        <div 
          ref={htmlRef}
          className="transition-opacity duration-1000 ease-in-out pointer-events-none opacity-0"
        >
          <div className="px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full text-[10px] font-extrabold tracking-wider text-slate-300 whitespace-nowrap shadow-xl">
            {label}
          </div>
        </div>
      </Html>
    </group>
  );
};

// Orbital Rings and Connecting Lines
const Connections = ({ nodes, coreVisible }) => {
  const lineRef = useRef();

  useFrame(() => {
    if (lineRef.current) {
      lineRef.current.material.opacity = THREE.MathUtils.lerp(
        lineRef.current.material.opacity, 
        coreVisible ? 0.3 : 0, 
        0.02
      );
    }
  });

  // Create smooth orbital paths based on node positions
  const points = useMemo(() => {
    return nodes.map(n => new THREE.Vector3(...n.position));
  }, [nodes]);

  // Connect them to core (0,0,0) and to each other
  const linePoints = useMemo(() => {
    const pts = [];
    nodes.forEach(n => {
      pts.push(new THREE.Vector3(0,0,0));
      pts.push(new THREE.Vector3(...n.position));
    });
    // Add outer ring connection
    for (let i = 0; i < nodes.length; i++) {
      pts.push(new THREE.Vector3(...nodes[i].position));
      pts.push(new THREE.Vector3(...nodes[(i + 1) % nodes.length].position));
    }
    return pts;
  }, [nodes]);

  return (
    <group>
      <Line
        ref={lineRef}
        points={linePoints}
        color="#10b981"
        lineWidth={1}
        transparent
        opacity={0}
      />
    </group>
  );
};

// Core Uplintix Object
const Core = ({ onReveal }) => {
  const groupRef = useRef();
  const innerRef = useRef();
  const htmlRef = useRef();
  
  useEffect(() => {
    // Cinematic start delay
    const timer = setTimeout(() => onReveal(true), 1500);
    return () => clearTimeout(timer);
  }, [onReveal]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Cage */}
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial 
          color="#0f172a" 
          metalness={1} 
          roughness={0.1} 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </mesh>
      
      {/* Glowing Inner Core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial 
          color="#10b981" 
          metalness={0.5} 
          roughness={0.2} 
          emissive="#059669"
          emissiveIntensity={1}
        />
      </mesh>

      <Html center position={[0, -2, 0]} distanceFactor={15}>
        <div className="flex flex-col items-center pointer-events-none">
          <div className="text-xl font-black tracking-[0.2em] text-white drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">
            UPLINTIX
          </div>
          <div className="text-[9px] font-bold tracking-[0.3em] text-emerald-400 mt-1 uppercase">
            Create • Build • Grow
          </div>
        </div>
      </Html>
    </group>
  );
};

// Mouse Parallax System
const Rig = () => {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 2, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 2, 0.05);
    camera.lookAt(0, 0, 0);
  });
  return null;
};

// Ambient Particle Dust
const Particles = () => {
  const [positions] = useState(() => {
    const pos = new Float32Array(300);
    for (let i = 0; i < 300; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    return pos;
  });

  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#34d399" size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.3} />
    </Points>
  );
};

// Main Scene
const CinematicScene = () => {
  const [coreVisible, setCoreVisible] = useState(false);

  const services = useMemo(() => [
    { label: "Creative & Content", pos: [-3, 2.5, -2], color: "#34d399", delay: 2500 },
    { label: "Web Development", pos: [3.5, 1.5, -1], color: "#10b981", delay: 3000 },
    { label: "Software Solutions", pos: [2.5, -2.5, 1], color: "#059669", delay: 3500 },
    { label: "AI & Automation", pos: [-2.5, -2, 2], color: "#34d399", delay: 4000 },
    { label: "Digital Growth", pos: [0, 3.5, 1], color: "#10b981", delay: 4500 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[0, 0, 0]} intensity={2} color="#10b981" distance={10} />
      
      {/* Reveal Core */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Core onReveal={setCoreVisible} />
      </Float>

      {/* Reveal Services around Core */}
      {services.map((srv, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.5} floatIntensity={1} position={[0, Math.sin(i)*0.5, 0]}>
          <EcosystemNode 
            position={srv.pos} 
            label={srv.label} 
            delay={srv.delay} 
            color={srv.color} 
          />
        </Float>
      ))}

      <Connections nodes={services} coreVisible={coreVisible} />
      <Particles />
      <Rig />
      
      {/* Cinematic Fog for depth */}
      <fog attach="fog" args={['#020617', 5, 25]} />
    </>
  );
};

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]} // limit pixel ratio for performance
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <CinematicScene />
      </Canvas>
    </div>
  );
}
