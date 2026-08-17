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
    const initialAspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(
      45,
      initialAspect,
      0.1,
      1000
    );
    
    // Dynamic camera Z positioning function to prevent horizontal/vertical frustum clipping
    const updateCameraDistance = (aspect) => {
      const targetAspect = 1.25;
      if (aspect < targetAspect) {
        camera.position.z = 10 * (targetAspect / aspect);
      } else {
        camera.position.z = 10;
      }
    };
    updateCameraDistance(initialAspect);
    camera.position.y = 0;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Group for all 3D assets
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Metallic Ring (Outer Shield Ring)
    const ringGeo = new THREE.TorusGeometry(2.4, 0.22, 32, 100);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
      thickness: 1.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });
    const ringMesh = new THREE.Mesh(ringGeo, glassMat);
    mainGroup.add(ringMesh);

    // Inner Glowing Emerald Ring
    const innerRingGeo = new THREE.TorusGeometry(1.8, 0.08, 24, 80);
    const emeraldMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x15803d,
      emissiveIntensity: 0.4
    });
    const innerRing = new THREE.Mesh(innerRingGeo, emeraldMat);
    mainGroup.add(innerRing);

    // 2. Central Logo Emblem (3D Shield & Arrow Bars)
    const logoGroup = new THREE.Group();

    // Metallic Shield Base
    const shieldGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.2, 6);
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.2,
    });
    const shieldMesh = new THREE.Mesh(shieldGeo, darkMetalMat);
    shieldMesh.rotation.x = Math.PI / 2;
    logoGroup.add(shieldMesh);

    // 3 Growth Bars (Emerald Gradient Metallic)
    const createBar = (height, xPos, colorHex) => {
      const barGeo = new THREE.BoxGeometry(0.18, height, 0.18);
      const barMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        metalness: 0.7,
        roughness: 0.2,
        emissive: 0x10b981,
        emissiveIntensity: 0.3
      });
      const bar = new THREE.Mesh(barGeo, barMat);
      bar.position.set(xPos, height / 2 - 0.5, 0.15);
      return bar;
    };

    const bar1 = createBar(0.6, -0.3, 0x16a34a);
    const bar2 = createBar(0.9, 0, 0x22c55e);
    const bar3 = createBar(1.2, 0.3, 0x4ade80);

    logoGroup.add(bar1, bar2, bar3);

    // Upward Arrow Head (Apex)
    const arrowHeadGeo = new THREE.ConeGeometry(0.4, 0.6, 3);
    const arrowMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      metalness: 0.8,
      roughness: 0.1,
      emissive: 0x16a34a,
      emissiveIntensity: 0.5
    });
    const arrowHead = new THREE.Mesh(arrowHeadGeo, arrowMat);
    arrowHead.position.set(0, 1.1, 0.15);
    logoGroup.add(arrowHead);

    mainGroup.add(logoGroup);

    // 3. Floating Glass & Emerald Spheres & Cubes
    const floatingItems = [];

    const sphereGeo = new THREE.SphereGeometry(0.35, 32, 32);
    const cubeGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);

    const positions = [
      { pos: [-3.2, 2.1, 1], type: 'sphere', color: 0x22c55e, scale: 0.9 },
      { pos: [3.4, 2.5, -1], type: 'cube', color: 0x0f172a, scale: 1.1 },
      { pos: [-3.5, -1.8, -1.5], type: 'cube', color: 0x22c55e, scale: 0.8 },
      { pos: [3.2, -2.2, 1.2], type: 'sphere', color: 0xffffff, scale: 1.0 },
      { pos: [0, 3.2, -2], type: 'sphere', color: 0x10b981, scale: 0.7 },
      { pos: [-2.2, 0.5, 2], type: 'sphere', color: 0x22c55e, scale: 0.5 },
    ];

    positions.forEach((item, index) => {
      const geo = item.type === 'sphere' ? sphereGeo : cubeGeo;
      let mat;
      if (item.color === 0xffffff) {
        mat = glassMat;
      } else if (item.color === 0x0f172a) {
        mat = darkMetalMat;
      } else {
        mat = emeraldMat;
      }

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...item.pos);
      mesh.scale.setScalar(item.scale);
      
      mainGroup.add(mesh);
      floatingItems.push({
        mesh,
        initialY: item.pos[1],
        speed: 0.001 + index * 0.0005,
        rotSpeed: 0.01 + index * 0.005
      });
    });

    // 4. Particle Background Starfield
    const particlesCount = 180;
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      particlePositions[i] = (Math.random() - 0.5) * 18;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particlesMat = new THREE.PointsMaterial({
      size: 0.06,
      color: 0x22c55e,
      transparent: true,
      opacity: 0.6
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const greenPointLight = new THREE.PointLight(0x22c55e, 5, 20);
    greenPointLight.position.set(0, 0, 4);
    scene.add(greenPointLight);

    const blueSpotLight = new THREE.SpotLight(0x0f172a, 3);
    blueSpotLight.position.set(-5, -5, 5);
    scene.add(blueSpotLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Responsive Resize Handler with ResizeObserver & Frustum Compensation
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;

      const aspect = width / height;
      camera.aspect = aspect;
      updateCameraDistance(aspect);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / group rotation based on mouse
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.3 + targetX * 0.6;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1 + targetY * 0.3;

      // Floating items animation
      floatingItems.forEach((item) => {
        item.mesh.position.y = item.initialY + Math.sin(elapsedTime * 2 + item.initialY) * 0.25;
        item.mesh.rotation.x += item.rotSpeed;
        item.mesh.rotation.y += item.rotSpeed * 0.8;
      });

      // Pulse green light
      greenPointLight.intensity = 4 + Math.sin(elapsedTime * 3) * 1.5;

      particlesMesh.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] flex items-center justify-center overflow-visible">
      {/* Glow Backdrop */}
      <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] bg-emerald-500/20 rounded-full filter blur-[80px] animate-pulse-glow pointer-events-none"></div>
      <div className="absolute w-[200px] h-[200px] bg-emerald-400/30 rounded-full filter blur-[50px] pointer-events-none"></div>

      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing z-10 overflow-visible" />

      {/* Badge overlay below 3D model */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg flex items-center gap-2 pointer-events-none">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
        <span className="text-xs font-semibold text-slate-800 tracking-wide">
          Interactive 3D Experience — Move Cursor
        </span>
      </div>
    </div>
  );
}
