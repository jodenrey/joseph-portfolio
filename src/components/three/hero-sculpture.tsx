"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import type { HeroScene } from "./hero-scene";
import styles from "./hero-sculpture.module.css";

function SculptureFallback() {
  return (
    <svg viewBox="0 0 540 540" className={styles.fallback} aria-hidden="true">
      <defs>
        <linearGradient id="sculpture-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff6a32" />
          <stop offset="1" stopColor="#eb3c12" />
        </linearGradient>
        <linearGradient id="sculpture-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dc3611" />
          <stop offset="1" stopColor="#aa250c" />
        </linearGradient>
        <radialGradient id="sculpture-sphere" cx="30%" cy="23%" r="75%">
          <stop offset="0" stopColor="#fffefa" />
          <stop offset="0.55" stopColor="#e2dfd6" />
          <stop offset="1" stopColor="#9e9b94" />
        </radialGradient>
      </defs>
      <g transform="translate(32 40)">
        {[252, 171, 90].map((y, index) => (
          <g key={y} transform={`translate(${index * 9} ${y})`}>
            <path
              d="M81 79Q77 72 88 68L229 6Q242 0 256 7L396 75Q405 79 404 89L404 124Q404 132 394 137L260 204Q248 210 236 204L86 127Q79 123 79 114Z"
              fill="url(#sculpture-side)"
            />
            <path
              d="M89 66 229 4Q243-2 257 5L397 73Q411 80 396 88L261 158Q248 164 236 158L88 83Q73 75 89 66ZM165 73 246 115 326 75 246 37Z"
              fill="url(#sculpture-top)"
              fillRule="evenodd"
            />
            <path d="M165 73 246 115 246 141 165 99Z" fill="#d6320f" />
            <path d="M246 115 326 75 326 100 246 141Z" fill="#a52a10" />
          </g>
        ))}
        <circle cx="404" cy="301" r="36" fill="url(#sculpture-sphere)" />
      </g>
    </svg>
  );
}

/** Decorative WebGL artwork. The static artwork also works without JavaScript. */
export function HeroSculpture() {
  const hostRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HeroScene | null>(null);
  const [ready, setReady] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (!host || connection?.saveData) return;

    let cancelled = false;
    import("./hero-scene")
      .then(({ createHeroScene }) => {
        if (cancelled) return;
        sceneRef.current = createHeroScene(host, {
          onReady: () => setReady(true),
          onMotionAvailability: setCanAnimate,
          onContextLost: () => {
            setReady(false);
            setCanAnimate(false);
          },
        });
      })
      .catch(() => {
        // Keep the complete static artwork when WebGL is unavailable.
      });

    return () => {
      cancelled = true;
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    sceneRef.current?.setPaused(paused);
  }, [paused]);

  return (
    <div className={styles.artwork} data-ready={ready}>
      <div className={styles.orbit} aria-hidden="true" />
      <div className={styles.ground} aria-hidden="true" />
      <SculptureFallback />
      <div ref={hostRef} className={styles.canvasHost} aria-hidden="true" />
      <span className={styles.axis} aria-hidden="true">
        +
      </span>
      {ready && canAnimate && (
        <button
          type="button"
          className={styles.motionButton}
          onClick={() => setPaused((value) => !value)}
          aria-label={
            paused ? "Play sculpture animation" : "Pause sculpture animation"
          }
          aria-pressed={paused}
        >
          {paused ? (
            <Play size={11} aria-hidden="true" />
          ) : (
            <Pause size={11} aria-hidden="true" />
          )}
          <span>{paused ? "Play motion" : "Pause motion"}</span>
        </button>
      )}
    </div>
  );
}
