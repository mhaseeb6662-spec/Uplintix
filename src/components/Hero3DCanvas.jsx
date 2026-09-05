import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();
    
    // Camera Setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 12);

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Main Group for Interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Central Core
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // slate-900
      metalness: 0.9,
      roughness: 0.1,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Core Solid Inner
    const innerCoreGeo = new THREE.IcosahedronGeometry(0.8, 0);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x10b981, // emerald-500
      metalness: 0.5,
      roughness: 0.2,
      emissive: 0x059669,
      emissiveIntensity: 0.5
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    mainGroup.add(innerCoreMesh);

    // Orbital Nodes (Creative, Web, Software, AI, Automation)
    const nodeCount = 5;
    const nodes = [];
    const orbitRadius = 3.5;
    
    const nodeGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x34d399,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x10b981,
      emissiveIntensity: 0.8
    });

    const linesMat = new THREE.LineBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.3
    });

    // Create orbits and nodes
    for (let i = 0; i < nodeCount; i++) {
      // Orbit Ring
      const ringGeo = new THREE.RingGeometry(orbitRadius - 0.02, orbitRadius + 0.02, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xcbd5e1, transparent: true, opacity: 0.1, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      
      // Random tilt for each orbit
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      mainGroup.add(ring);

      // Node on the ring
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / nodeCount) * Math.PI * 2;
      
      // We will update node positions in the animation loop based on ring rotation
      nodes.push({
        mesh: node,
        ring: ring,
        angle: angle,
        speed: 0.2 + Math.random() * 0.3
      });
      mainGroup.add(node);
    }

    // Connect nodes to core with lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(nodeCount * 6); // 2 points (core + node) per line * 3 coordinates
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, linesMat);
    mainGroup.add(lines);

    // Ambient Particles
    const particlesCount = 100;
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      particlePositions[i] = (Math.random() - 0.5) * 15;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x10b981,
      transparent: true,
      opacity: 0.4
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 4, 15);
    emeraldLight.position.set(0, 0, 0);
    scene.add(emeraldLight);

    // Mouse Interaction
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 1.5; // Sensitivity
      targetY = (y / rect.height) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth Mouse Follow
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      mainGroup.rotation.y = time * 0.1 + currentX;
      mainGroup.rotation.x = Math.sin(time * 0.1) * 0.1 + currentY;

      // Core Animation
      coreMesh.rotation.x -= 0.2 * delta;
      coreMesh.rotation.y += 0.3 * delta;
      innerCoreMesh.rotation.x += 0.4 * delta;
      innerCoreMesh.rotation.y -= 0.5 * delta;
      
      // Pulse core light
      emeraldLight.intensity = 3 + Math.sin(time * 2) * 1;

      // Orbit Nodes
      const positions = lines.geometry.attributes.position.array;
      
      nodes.forEach((node, i) => {
        node.angle += node.speed * delta;
        
        // Calculate position on the tilted ring
        const x = Math.cos(node.angle) * orbitRadius;
        const y = Math.sin(node.angle) * orbitRadius;
        
        // Apply ring's rotation matrix to get world position relative to mainGroup
        const vec = new THREE.Vector3(x, y, 0);
        vec.applyEuler(node.ring.rotation);
        
        node.mesh.position.copy(vec);

        // Update lines
        const lineIdx = i * 6;
        // Point 1 (Core)
        positions[lineIdx] = innerCoreMesh.position.x;
        positions[lineIdx + 1] = innerCoreMesh.position.y;
        positions[lineIdx + 2] = innerCoreMesh.position.z;
        // Point 2 (Node)
        positions[lineIdx + 3] = vec.x;
        positions[lineIdx + 4] = vec.y;
        positions[lineIdx + 5] = vec.z;
      });
      
      lines.geometry.attributes.position.needsUpdate = true;

      // Particles
      particlesMesh.rotation.y = time * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      
      // Dispose Geometries & Materials
      coreGeo.dispose();
      coreMat.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      lineGeometry.dispose();
      linesMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Very subtle glow behind the canvas to give it a premium feel without overdoing it */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-emerald-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      <div ref={mountRef} className="w-full h-full relative z-10 cursor-default" />
    </div>
  );
}
