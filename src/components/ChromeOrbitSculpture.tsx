import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ChromeOrbitSculptureProps {
  mousePosition: { x: number; y: number };
}

export const ChromeOrbitSculpture: React.FC<ChromeOrbitSculptureProps> = ({ mousePosition }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef(mousePosition);
  const isHoveredRef = useRef(false);
  const touchOffsetRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Keep mousePosRef synchronized with incoming prop without resetting Three.js scene
  useEffect(() => {
    mousePosRef.current = mousePosition;
  }, [mousePosition]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion accessibility preference
    const mediaQueryReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQueryReducedMotion.matches;
    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    mediaQueryReducedMotion.addEventListener('change', handleMotionPreferenceChange);

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // SCENE & CAMERA
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.8);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // GENERATE HIGH-END STUDIO ENVIRONMENT MAP FOR REFLECTIONS
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    // Atmospheric studio cube
    const envScene = new THREE.Scene();
    const lightBoxGeo = new THREE.BoxGeometry(20, 20, 20);
    const lightBoxMat = new THREE.MeshBasicMaterial({
      color: 0x07070b,
      side: THREE.BackSide,
    });
    const lightBox = new THREE.Mesh(lightBoxGeo, lightBoxMat);
    envScene.add(lightBox);

    // Studio softbox 1 (Electric Violet rim)
    const softbox1 = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 12),
      new THREE.MeshBasicMaterial({ color: 0x8755ff })
    );
    softbox1.position.set(-6, 3, 5);
    softbox1.lookAt(0, 0, 0);
    envScene.add(softbox1);

    // Studio softbox 2 (Soft White key light)
    const softbox2 = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 14),
      new THREE.MeshBasicMaterial({ color: 0xf6f4fa })
    );
    softbox2.position.set(6, 4, 6);
    softbox2.lookAt(0, 0, 0);
    envScene.add(softbox2);

    // Studio softbox 3 (Lavender bottom kicker)
    const softbox3 = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 6),
      new THREE.MeshBasicMaterial({ color: 0xc8a9ff })
    );
    softbox3.position.set(0, -6, 4);
    softbox3.lookAt(0, 0, 0);
    envScene.add(softbox3);

    const envMap = pmremGenerator.fromScene(envScene).texture;
    scene.environment = envMap;

    // ROOT SCULPTURE GROUP
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // --- CONTINUOUS FLOWING Z-SHAPED ABSTRACT METALLIC RIBBON ---
    const curvePoints = [
      new THREE.Vector3(-2.2, 1.6, 0.4),
      new THREE.Vector3(-0.6, 1.8, 0.8),
      new THREE.Vector3(1.4, 1.7, 0.5),
      new THREE.Vector3(2.0, 1.3, -0.2),
      new THREE.Vector3(1.2, 0.5, -0.8),
      new THREE.Vector3(-0.2, -0.1, -0.4),
      new THREE.Vector3(-1.4, -0.7, 0.2),
      new THREE.Vector3(-2.1, -1.3, 0.7),
      new THREE.Vector3(-1.6, -1.8, 0.4),
      new THREE.Vector3(0.2, -1.7, -0.2),
      new THREE.Vector3(1.8, -1.5, -0.6),
      new THREE.Vector3(2.3, -0.8, -0.2),
      new THREE.Vector3(1.5, 0.2, 0.6),
      new THREE.Vector3(0.0, 0.9, 0.9),
      new THREE.Vector3(-1.5, 1.3, 0.6),
    ];

    const zCurve = new THREE.CatmullRomCurve3(curvePoints, true, 'centripetal', 0.45);
    const zTubeGeo = new THREE.TubeGeometry(zCurve, 260, 0.28, 36, true);

    // Primary Chrome Material
    const chromeMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#D6D3E0'),
      metalness: 0.95,
      roughness: 0.12,
      clearcoat: 0.85,
      clearcoatRoughness: 0.08,
      reflectivity: 1.0,
      envMapIntensity: 2.2,
    });

    const zRibbonMesh = new THREE.Mesh(zTubeGeo, chromeMaterial);
    sculptureGroup.add(zRibbonMesh);

    // --- SECONDARY ORBITAL GLASS FILAMENT (Translucent Violet Glass) ---
    const ringPoints = [];
    const ringRadius = 2.4;
    for (let i = 0; i < 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      ringPoints.push(
        new THREE.Vector3(
          Math.cos(theta) * ringRadius,
          Math.sin(theta) * (ringRadius * 0.72),
          Math.sin(theta * 2) * 0.65
        )
      );
    }
    const ringCurve = new THREE.CatmullRomCurve3(ringPoints, true);
    const ringTubeGeo = new THREE.TubeGeometry(ringCurve, 180, 0.085, 24, true);

    const violetGlassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#8755FF'),
      emissive: new THREE.Color('#5824C9'),
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.80,
      transmission: 0.85,
      roughness: 0.14,
      metalness: 0.22,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      envMapIntensity: 2.6,
    });

    const ringMesh = new THREE.Mesh(ringTubeGeo, violetGlassMaterial);
    ringMesh.rotation.x = Math.PI * 0.28;
    ringMesh.rotation.y = Math.PI * 0.15;
    sculptureGroup.add(ringMesh);

    // --- INNER REFLECTIVE SPHERICAL CORE NODE ---
    const coreGeo = new THREE.IcosahedronGeometry(0.55, 4);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#C8A9FF'),
      emissive: new THREE.Color('#8755FF'),
      emissiveIntensity: 0.22,
      metalness: 0.98,
      roughness: 0.08,
      clearcoat: 1.0,
      envMapIntensity: 2.6,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(0.1, 0.0, 0.0);
    sculptureGroup.add(coreMesh);

    // SCENE LIGHTS
    const ambientLight = new THREE.AmbientLight(0x101018, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xf6f4fa, 3.2);
    dirLight1.position.set(5, 6, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x8755ff, 4.5);
    dirLight2.position.set(-6, -4, 4);
    scene.add(dirLight2);

    const mouseTrackingLight = new THREE.PointLight(0xc8a9ff, 3.0, 16);
    mouseTrackingLight.position.set(0, 0, 4);
    scene.add(mouseTrackingLight);

    // Initial sculptural inclination
    const baseRotationX = 0.22;
    let baseRotationY = -0.35;
    const baseRotationZ = 0.12;

    sculptureGroup.rotation.x = baseRotationX;
    sculptureGroup.rotation.y = baseRotationY;
    sculptureGroup.rotation.z = baseRotationZ;

    // INTERPOLATION & MOTION STATE
    let animId: number;
    const clock = new THREE.Clock();

    // Smoothed mouse & spring touch tracking values
    const smoothedMouse = { x: 0, y: 0 };
    let currentScale = 1.0;
    let currentCoreEmissive = 0.22;
    let currentVioletEmissive = 0.35;
    let currentLightIntensity = 3.0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Check accessibility preferences
      if (!prefersReducedMotion) {
        // 1. SUBTLE IDLE ANIMATION: Very slow, smooth floating combined with subtle rotation
        // Very slow, imperceptible continuous axial rotation
        baseRotationY += 0.0016;

        // Subtle vertical breathing levitation
        const idleFloatY = Math.sin(elapsed * 0.65) * 0.08;
        const idleFloatZ = Math.cos(elapsed * 0.45) * 0.035;
        const idleTiltZ = Math.sin(elapsed * 0.5) * 0.04;

        // Counter-rotation of outer violet glass filament
        ringMesh.rotation.z -= 0.0012;

        // 2. CURSOR-RESPONSIVE 3D MOVEMENT: Smooth spring interpolation (LERP)
        // Lerp smoothedMouse towards mousePosRef (which resets smoothly to 0,0 when mouse leaves hero)
        const mouseDamping = 0.042;
        smoothedMouse.x += (mousePosRef.current.x - smoothedMouse.x) * mouseDamping;
        smoothedMouse.y += (mousePosRef.current.y - smoothedMouse.y) * mouseDamping;

        // 4. TOUCH INTERACTION SPRING DECAY
        // Touch nudges targetX/targetY and gracefully decays back to 0
        touchOffsetRef.current.x += (touchOffsetRef.current.targetX - touchOffsetRef.current.x) * 0.08;
        touchOffsetRef.current.y += (touchOffsetRef.current.targetY - touchOffsetRef.current.y) * 0.08;
        touchOffsetRef.current.targetX *= 0.94;
        touchOffsetRef.current.targetY *= 0.94;

        const effectiveX = smoothedMouse.x + touchOffsetRef.current.x;
        const effectiveY = smoothedMouse.y + touchOffsetRef.current.y;

        // 3. HOVER RESPONSE: Scale increase & intensified purple glow/highlights
        const targetScale = isHoveredRef.current ? 1.045 : 1.0;
        const targetCoreEmissive = isHoveredRef.current ? 0.48 : 0.22;
        const targetVioletEmissive = isHoveredRef.current ? 0.65 : 0.35;
        const targetLightIntensity = isHoveredRef.current ? 4.8 : 3.0;

        currentScale += (targetScale - currentScale) * 0.055;
        currentCoreEmissive += (targetCoreEmissive - currentCoreEmissive) * 0.055;
        currentVioletEmissive += (targetVioletEmissive - currentVioletEmissive) * 0.055;
        currentLightIntensity += (targetLightIntensity - currentLightIntensity) * 0.055;

        sculptureGroup.scale.setScalar(currentScale);
        coreMat.emissiveIntensity = currentCoreEmissive;
        violetGlassMaterial.emissiveIntensity = currentVioletEmissive;
        mouseTrackingLight.intensity = currentLightIntensity;

        // ROOT GROUP TRANSFORMS (Smooth tilt + idle floating)
        const targetRotX = baseRotationX + effectiveY * 0.28;
        const targetRotY = baseRotationY + effectiveX * 0.35;
        const targetRotZ = baseRotationZ + idleTiltZ - (effectiveX * 0.08);

        sculptureGroup.rotation.x += (targetRotX - sculptureGroup.rotation.x) * 0.045;
        sculptureGroup.rotation.y = targetRotY;
        sculptureGroup.rotation.z = targetRotZ;

        sculptureGroup.position.y = idleFloatY + (effectiveY * -0.06);
        sculptureGroup.position.z = idleFloatZ;

        // 6. LAYERED PARALLAX: Different layers respond at differential depths to cursor
        // LAYER 1: Inner Reflective Core Node (Depth anchor — 0.55x speed)
        coreMesh.position.x = 0.1 + effectiveX * 0.12;
        coreMesh.position.y = effectiveY * -0.10;
        coreMesh.rotation.y = elapsed * 0.15;

        // LAYER 2: Primary Z-Ribbon (Base structure — 1.0x speed)
        zRibbonMesh.position.x = effectiveX * 0.16;
        zRibbonMesh.position.y = effectiveY * -0.14;
        zRibbonMesh.rotation.x = effectiveY * 0.06;

        // LAYER 3: Outer Orbital Glass Filament (Atmospheric halo — 1.45x speed)
        ringMesh.position.x = effectiveX * 0.28;
        ringMesh.position.y = effectiveY * -0.22;
        ringMesh.position.z = Math.sin(elapsed * 0.6) * 0.06 + effectiveX * 0.18;

        // SPECULAR HIGHLIGHT TRACKER LIGHT: Floats in 3D to trace metallic & glass reflections
        mouseTrackingLight.position.x = effectiveX * 3.8;
        mouseTrackingLight.position.y = -effectiveY * 3.8;
        mouseTrackingLight.position.z = 4.2 + (isHoveredRef.current ? 0.6 : 0.0);
      } else {
        // Reduced-motion fallback: gentle stationary pose without continuous rotations
        sculptureGroup.rotation.x = baseRotationX;
        sculptureGroup.rotation.y = baseRotationY;
        sculptureGroup.rotation.z = baseRotationZ;
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // RESIZE OBSERVER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      mediaQueryReducedMotion.removeEventListener('change', handleMotionPreferenceChange);
      pmremGenerator.dispose();
      envMap.dispose();
      zTubeGeo.dispose();
      chromeMaterial.dispose();
      ringTubeGeo.dispose();
      violetGlassMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []); // Run setup once; updates read from refs

  // TOUCH & POINTER INTERACTION HANDLERS (Non-intrusive, pan-y preserved)
  const handlePointerEnter = () => {
    isHoveredRef.current = true;
  };

  const handlePointerLeave = () => {
    isHoveredRef.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0 && containerRef.current) {
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      const nx = ((touch.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((touch.clientY - rect.top) / rect.height - 0.5) * 2;
      // Gentle spring impulse without hijacking scroll
      touchOffsetRef.current.targetX = nx * 0.35;
      touchOffsetRef.current.targetY = ny * 0.35;
      isHoveredRef.current = true;
    }
  };

  const handleTouchEnd = () => {
    isHoveredRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      style={{ touchAction: 'pan-y' }}
      className="relative w-full h-full min-h-[380px] sm:min-h-[500px] lg:min-h-[640px] flex items-center justify-center pointer-events-auto select-none cursor-default"
      role="img"
      aria-label="ZINAT STUDIO Interactive 3D Metallic Sculpture"
    >
      {/* Dynamic ambient violet bloom that intensifies on hover */}
      <div className="absolute inset-0 m-auto w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-[#8755FF]/18 via-[#C8A9FF]/8 to-transparent rounded-full blur-[100px] pointer-events-none transition-opacity duration-700" />
    </div>
  );
};
