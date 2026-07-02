import * as THREE from "./assets/vendor/three.module.min.js";

const canvas = document.querySelector("#webglCanvas");
const spatialScroll = document.querySelector("#spatialScroll");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMobile = window.innerWidth < 768;

if (canvas && spatialScroll && !reduceMotion) {
  try {
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !isMobile, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.15 : 1.6));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x080b12, 0);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x080b12, 11, 48);
    const camera = new THREE.PerspectiveCamera(isMobile ? 64 : 50, window.innerWidth / window.innerHeight, 0.1, 120);
    camera.position.set(0, 0, 12);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x8fa8bd, 1.7));
    const keyLight = new THREE.PointLight(0xaee0ff, 16, 36, 2);
    keyLight.position.set(5, 6, 9);
    scene.add(keyLight);

    const particleCount = isMobile ? 360 : 760;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const babyBlue = new THREE.Color(0xaee0ff);
    const pearl = new THREE.Color(0xffffff);
    for (let index = 0; index < particleCount; index += 1) {
      particlePositions[index * 3] = (Math.random() - 0.5) * 28;
      particlePositions[index * 3 + 1] = (Math.random() - 0.5) * 22;
      particlePositions[index * 3 + 2] = 14 - Math.random() * 82;
      const color = index % 4 === 0 ? pearl : babyBlue;
      particleColors[index * 3] = color.r;
      particleColors[index * 3 + 1] = color.g;
      particleColors[index * 3 + 2] = color.b;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));
    const particleMaterial = new THREE.PointsMaterial({ size: isMobile ? 0.055 : 0.07, transparent: true, opacity: 0.6, vertexColors: true, sizeAttenuation: true, depthWrite: false });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const pathCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -3.4, 11),
      new THREE.Vector3(-3.4, -2.9, -4),
      new THREE.Vector3(3.2, -3.2, -17),
      new THREE.Vector3(-3.8, -2.7, -30),
      new THREE.Vector3(2.8, -3.1, -45),
      new THREE.Vector3(-1.2, -2.8, -61)
    ], false, "catmullrom", 0.5);
    const pathGeometry = new THREE.BufferGeometry().setFromPoints(pathCurve.getPoints(220));
    const pathMaterial = new THREE.LineDashedMaterial({ color: 0x7fcdf7, transparent: true, opacity: 0.42, dashSize: 0.5, gapSize: 0.32 });
    const path = new THREE.Line(pathGeometry, pathMaterial);
    path.computeLineDistances();
    scene.add(path);

    const glassGroup = new THREE.Group();
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc9ebff,
      transparent: true,
      opacity: 0.24,
      roughness: 0.12,
      metalness: 0,
      transmission: 0.72,
      thickness: 0.7,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
      depthWrite: false
    });
    [
      { position: [-4.6, 3.1, -7], scale: 1.15 },
      { position: [4.8, -2.3, -23], scale: 0.78 },
      { position: [-4.3, 2.2, -39], scale: 0.94 },
      { position: [3.6, 2.8, -54], scale: 0.66 }
    ].forEach((item, index) => {
      const geometry = index % 2 ? new THREE.OctahedronGeometry(item.scale, 1) : new THREE.IcosahedronGeometry(item.scale, 1);
      const mesh = new THREE.Mesh(geometry, glassMaterial.clone());
      mesh.position.set(...item.position);
      mesh.rotation.set(index * 0.7, index * 0.4, index * 0.3);
      glassGroup.add(mesh);
    });
    scene.add(glassGroup);

    const projectGroup = new THREE.Group();
    const projectMeshes = [];
    const projectSources = [
      "assets/images/hainan-sunset.webp",
      "assets/images/ui-food-home.webp",
      "assets/images/theatre-stage.webp",
      "assets/images/hero-wave.webp"
    ];
    const textureLoader = new THREE.TextureLoader();
    projectSources.forEach((source, index) => {
      const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4.3, 3), material);
      mesh.position.set(index % 2 === 0 ? -2.7 : 2.7, -0.2 + (index % 2) * 0.8, -8 - index * 13);
      mesh.rotation.x = -1.18;
      mesh.rotation.z = (index % 2 ? 1 : -1) * 0.07;
      mesh.userData.baseX = mesh.position.x;
      mesh.userData.index = index;
      projectGroup.add(mesh);
      projectMeshes.push(mesh);

      textureLoader.load(source, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        material.map = texture;
        material.needsUpdate = true;
        const image = texture.image;
        const aspect = image.width / image.height;
        const maxWidth = 4.6;
        const maxHeight = 3.3;
        const width = aspect >= maxWidth / maxHeight ? maxWidth : maxHeight * aspect;
        const height = aspect >= maxWidth / maxHeight ? maxWidth / aspect : maxHeight;
        mesh.geometry.dispose();
        mesh.geometry = new THREE.PlaneGeometry(width, height);
      });
    });
    scene.add(projectGroup);

    const pointer = new THREE.Vector2();
    let targetProgress = 0;
    let currentProgress = 0;
    let sectionVisibility = 0;
    let animationFrame = 0;
    const clock = new THREE.Clock();

    function measureScroll() {
      const rect = spatialScroll.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      targetProgress = THREE.MathUtils.clamp(-rect.top / travel, 0, 1);
      const visiblePixels = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
      sectionVisibility = THREE.MathUtils.clamp(visiblePixels / Math.min(window.innerHeight, rect.height), 0, 1);
      canvas.classList.toggle("spatial-active", sectionVisibility > 0.08);
    }

    function renderScene() {
      animationFrame = requestAnimationFrame(renderScene);
      const elapsed = clock.getElapsedTime();
      currentProgress = THREE.MathUtils.lerp(currentProgress, targetProgress, isMobile ? 0.1 : 0.055);
      const travel = 51;
      const cameraZ = 12 - currentProgress * travel;
      const swayX = Math.sin(currentProgress * Math.PI * 4) * 1.25 + pointer.x * (isMobile ? 0 : 0.75);
      const swayY = Math.cos(currentProgress * Math.PI * 2) * 0.22 + pointer.y * (isMobile ? 0 : 0.42);
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, swayX, 0.055);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, swayY, 0.055);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, cameraZ, 0.065);
      particles.position.z = (elapsed * 0.22) % 8;
      particles.rotation.z = Math.sin(elapsed * 0.08) * 0.025;
      glassGroup.children.forEach((mesh, index) => {
        mesh.rotation.x += 0.0015 + index * 0.00025;
        mesh.rotation.y += 0.002 + index * 0.0002;
      });

      projectMeshes.forEach((mesh, index) => {
        const distance = camera.position.z - mesh.position.z;
        const focus = 1 - THREE.MathUtils.smoothstep(Math.abs(distance - 7), 1.5, 10);
        const passed = distance < 2.3;
        const targetOpacityForMesh = passed ? 0 : (0.08 + focus * 0.34) * sectionVisibility;
        mesh.material.opacity = THREE.MathUtils.lerp(mesh.material.opacity, targetOpacityForMesh, 0.075);
        mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, focus > 0.35 ? -0.05 : -1.18, 0.06);
        mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, focus > 0.35 ? (index % 2 ? -1.5 : 1.5) : mesh.userData.baseX, 0.055);
        const scale = 0.88 + focus * 0.2;
        mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, scale, 0.06));
      });

      renderer.render(scene, camera);
    }

    function resize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.fov = window.innerWidth < 768 ? 64 : 50;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.15 : 1.6));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      measureScroll();
    }

    window.addEventListener("scroll", measureScroll, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", (event) => {
      pointer.x = event.clientX / window.innerWidth * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight * 2 - 1);
    }, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(animationFrame);
      else renderScene();
    });
    canvas.addEventListener("webglcontextlost", (event) => event.preventDefault());

    measureScroll();
    renderScene();
  } catch (error) {
    canvas.classList.add("webgl-unavailable");
  }
}
