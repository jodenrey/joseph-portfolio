import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

export type HeroScene = {
  setPaused: (paused: boolean) => void;
  dispose: () => void;
};

type SceneOptions = {
  onReady: () => void;
  onMotionAvailability: (available: boolean) => void;
  onContextLost: () => void;
};

function roundedRectangle(path: THREE.Path, size: number, radius: number) {
  const half = size / 2;
  path.moveTo(-half + radius, -half);
  path.lineTo(half - radius, -half);
  path.quadraticCurveTo(half, -half, half, -half + radius);
  path.lineTo(half, half - radius);
  path.quadraticCurveTo(half, half, half - radius, half);
  path.lineTo(-half + radius, half);
  path.quadraticCurveTo(-half, half, -half, half - radius);
  path.lineTo(-half, -half + radius);
  path.quadraticCurveTo(-half, -half, -half + radius, -half);
}

export function createHeroScene(
  host: HTMLDivElement,
  options: SceneOptions,
): HeroScene {
  const cleanup: Array<() => void> = [];
  let disposed = false;
  const track = <T extends { dispose: () => void }>(resource: T): T => {
    cleanup.push(() => resource.dispose());
    return resource;
  };
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    for (const release of cleanup.reverse()) {
      try {
        release();
      } catch {
        // A lost context must not prevent the remaining resources being released.
      }
    }
  };
  try {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    cleanup.push(() => renderer.domElement.remove());
    cleanup.push(() => renderer.forceContextLoss());
    cleanup.push(() => renderer.dispose());
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio || 1, coarsePointer.matches ? 1 : 1.5),
    );
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.85;
    renderer.shadowMap.enabled = !coarsePointer.matches;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-3.4, 3.4, 3.4, -3.4, 0.1, 40);
    camera.position.set(5.8, 4.8, 7.2);
    camera.lookAt(0, 0.05, 0);

    const createEnvironment = () => {
      const pmrem = new THREE.PMREMGenerator(renderer);
      let room: RoomEnvironment | undefined;
      try {
        room = new RoomEnvironment();
        return track(pmrem.fromScene(room, 0.08));
      } finally {
        room?.dispose();
        pmrem.dispose();
      }
    };
    const environment = createEnvironment();
    scene.environment = environment.texture;
    scene.environmentIntensity = 0.65;

    scene.add(new THREE.HemisphereLight(0xfffbec, 0xa6a1a0, 0.85));
    const key = new THREE.DirectionalLight(0xfff1df, 2.2);
    track(key.shadow);
    key.position.set(-3, 7, 5);
    key.castShadow = !coarsePointer.matches;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.left = -5;
    key.shadow.camera.right = 5;
    key.shadow.camera.top = 5;
    key.shadow.camera.bottom = -5;
    key.shadow.normalBias = 0.035;
    key.shadow.bias = -0.0002;
    key.shadow.radius = 5;
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xffffff, 1.4);
    rim.position.set(4, 2, -4);
    scene.add(rim);

    const sculpture = new THREE.Group();
    sculpture.rotation.set(0.1, -0.22, -0.15);
    sculpture.position.set(-0.12, 0.14, 0);
    scene.add(sculpture);

    const profile = new THREE.Shape();
    roundedRectangle(profile, 2.55, 0.27);
    const opening = new THREE.Path();
    roundedRectangle(opening, 1.13, 0.17);
    profile.holes.push(opening);
    const frameGeometry = track(
      new THREE.ExtrudeGeometry(profile, {
        depth: 0.36,
        bevelEnabled: true,
        bevelThickness: 0.075,
        bevelSize: 0.075,
        bevelSegments: 4,
        steps: 1,
        curveSegments: 8,
      }),
    );
    frameGeometry.center();
    frameGeometry.rotateX(-Math.PI / 2);

    const orange = track(
      new THREE.MeshPhysicalMaterial({
        color: 0xf44716,
        roughness: 0.28,
        metalness: 0.1,
        clearcoat: 0.55,
        clearcoatRoughness: 0.24,
      }),
    );
    const frames = [-0.88, 0, 0.88].map((height, index) => {
      const frame = new THREE.Mesh(frameGeometry, orange);
      frame.position.y = height;
      frame.rotation.y = (index - 1) * 0.17;
      frame.castShadow = true;
      frame.receiveShadow = true;
      sculpture.add(frame);
      return frame;
    });

    const pearl = track(
      new THREE.MeshPhysicalMaterial({
        color: 0xe8e4da,
        metalness: 0.75,
        roughness: 0.22,
        clearcoat: 0.7,
      }),
    );
    const sphere = new THREE.Mesh(
      track(new THREE.SphereGeometry(0.37, 32, 24)),
      pearl,
    );
    sphere.position.set(1.87, -0.45, 0.05);
    sphere.castShadow = true;
    scene.add(sphere);

    const satellite = new THREE.Mesh(
      track(new THREE.IcosahedronGeometry(0.14, 0)),
      orange,
    );
    satellite.position.set(-1.95, 0.55, 0.2);
    satellite.rotation.set(0.3, 0.4, 0.1);
    scene.add(satellite);

    let contextLost = false;
    let paused = false;
    let visible = true;
    let frameRequest = 0;
    cleanup.push(() => cancelAnimationFrame(frameRequest));
    let previousTime = 0;
    let elapsed = 0;
    let pointerX = 0;
    let pointerY = 0;
    const canAnimate = () => !reducedMotion.matches && !coarsePointer.matches;
    const shouldAnimate = () =>
      !disposed &&
      !contextLost &&
      !paused &&
      canAnimate() &&
      visible &&
      !document.hidden;

    const render = () => {
      if (!disposed && !contextLost) renderer.render(scene, camera);
    };

    function tick(now: number) {
      frameRequest = 0;
      if (!shouldAnimate()) return;
      // Ignore long gaps after the browser or artwork was inactive.
      const delta = previousTime
        ? Math.min((now - previousTime) / 1000, 0.05)
        : 0;
      previousTime = now;
      elapsed += delta;
      const ease = 1 - Math.exp(-delta * 4);
      const targetY = -0.22 + Math.sin(elapsed * 0.23) * 0.23 + pointerX * 0.2;
      const targetX = 0.1 + pointerY * 0.1;
      sculpture.rotation.y += (targetY - sculpture.rotation.y) * ease;
      sculpture.rotation.x += (targetX - sculpture.rotation.x) * ease;
      sculpture.position.y = 0.14 + Math.sin(elapsed * 0.75) * 0.055;
      frames[2].position.y = 0.88 + Math.sin(elapsed * 0.6) * 0.04;
      frames[0].position.y = -0.88 - Math.sin(elapsed * 0.6) * 0.04;
      sphere.position.y = -0.45 + Math.sin(elapsed * 0.8 + 0.9) * 0.09;
      satellite.rotation.y += delta * 0.13;
      render();
      frameRequest = requestAnimationFrame(tick);
    }

    function syncAnimation() {
      cancelAnimationFrame(frameRequest);
      frameRequest = 0;
      previousTime = 0;
      if (shouldAnimate()) frameRequest = requestAnimationFrame(tick);
    }

    const resize = () => {
      if (disposed) return;
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      const aspect = width / height;
      const halfHeight = aspect < 1 ? 2.65 / aspect : 2.65;
      camera.left = -halfHeight * aspect;
      camera.right = halfHeight * aspect;
      camera.top = halfHeight;
      camera.bottom = -halfHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      render();
    };
    const resizeObserver = new ResizeObserver(resize);
    cleanup.push(() => resizeObserver.disconnect());
    resizeObserver.observe(host);
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        syncAnimation();
      },
      { threshold: 0.05 },
    );
    cleanup.push(() => intersectionObserver.disconnect());
    intersectionObserver.observe(host);

    const onPointerMove = (event: PointerEvent) => {
      if (!canAnimate() || paused) return;
      const bounds = host.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    const onPointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
    };
    const onPreferenceChange = () => {
      options.onMotionAvailability(canAnimate());
      syncAnimation();
    };
    const onContextLost = (event: Event) => {
      event.preventDefault();
      contextLost = true;
      syncAnimation();
      options.onContextLost();
    };
    const onContextRestored = () => {
      try {
        // Render-target pixels are lost with the context; rebuild the studio reflections.
        scene.environment = createEnvironment().texture;
        contextLost = false;
        resize();
        options.onReady();
        options.onMotionAvailability(canAnimate());
        syncAnimation();
      } catch {
        contextLost = true;
        syncAnimation();
        options.onContextLost();
      }
    };
    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerleave", onPointerLeave);
    renderer.domElement.addEventListener("webglcontextlost", onContextLost);
    renderer.domElement.addEventListener(
      "webglcontextrestored",
      onContextRestored,
    );
    document.addEventListener("visibilitychange", syncAnimation);
    reducedMotion.addEventListener("change", onPreferenceChange);
    coarsePointer.addEventListener("change", onPreferenceChange);
    cleanup.push(() => {
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      renderer.domElement.removeEventListener(
        "webglcontextlost",
        onContextLost,
      );
      renderer.domElement.removeEventListener(
        "webglcontextrestored",
        onContextRestored,
      );
      document.removeEventListener("visibilitychange", syncAnimation);
      reducedMotion.removeEventListener("change", onPreferenceChange);
      coarsePointer.removeEventListener("change", onPreferenceChange);
    });
    resize();
    options.onReady();
    options.onMotionAvailability(canAnimate());
    syncAnimation();

    return {
      setPaused(value) {
        paused = value;
        syncAnimation();
      },
      dispose,
    };
  } catch (error) {
    dispose();
    throw error;
  }
}
