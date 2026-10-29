import React, { useEffect, useRef, useState } from 'react';
import { IMAGES } from '../assets';

interface VehicleSprite {
  // Bounding box in original 1376x768 photo
  cropX: number;
  cropY: number;
  cropW: number;
  cropH: number;
  // Offset to sample clean road for patching the stationary photo spot
  patchOffsetX: number;
  patchOffsetY: number;
  // Road trajectory
  pathIndex: number;
  initialT: number;
  speed: number;
  laneOffset: number;
  // Pre-extracted canvas sprite
  spriteCanvas?: HTMLCanvasElement;
}

interface PathDef {
  points: { x: number; y: number }[];
  baseScaleStart: number;
  baseScaleEnd: number;
}

// Catmull-Rom spline interpolation for smooth highway curves
function getSplinePoint(points: { x: number; y: number }[], t: number) {
  const n = points.length - 1;
  const i = Math.min(Math.floor(t * n), n - 1);
  const localT = (t * n) - i;

  const p0 = points[Math.max(i - 1, 0)];
  const p1 = points[i];
  const p2 = points[Math.min(i + 1, n)];
  const p3 = points[Math.min(i + 2, n)];

  const t2 = localT * localT;
  const t3 = t2 * localT;

  const x = 0.5 * (
    (2 * p1.x) +
    (-p0.x + p2.x) * localT +
    (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
    (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3
  );

  const y = 0.5 * (
    (2 * p1.y) +
    (-p0.y + p2.y) * localT +
    (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
    (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3
  );

  const dx = 0.5 * (
    (-p0.x + p2.x) +
    2 * (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * localT +
    3 * (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t2
  );

  const dy = 0.5 * (
    (-p0.y + p2.y) +
    2 * (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * localT +
    3 * (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t2
  );

  const angle = Math.atan2(dy, dx);
  return { x, y, angle };
}

export const HeroLivingLandscape: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = IMAGES.abujaInfrastructurePanorama;

    let animationFrameId: number;
    let offscreenBgCanvas: HTMLCanvasElement | null = null;

    const CANVAS_WIDTH = 1376;
    const CANVAS_HEIGHT = 768;
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    // Trajectory Paths corresponding accurately to highway lanes in the panorama
    const PATHS: PathDef[] = [
      // 0. Outbound Flyover Bridge (heading NE towards Aso/Zuma corridor)
      {
        points: [
          { x: -50, y: 785 },
          { x: 220, y: 720 },
          { x: 480, y: 642 },
          { x: 744, y: 546 }, // Outbound white sedan original pos
          { x: 828, y: 510 }, // Outbound dark car original pos
          { x: 843, y: 480 }, // Outbound blue bus original pos
          { x: 908, y: 460 }, // Outbound white van original pos
          { x: 1080, y: 425 },
          { x: 1260, y: 360 },
          { x: 1440, y: 295 },
        ],
        baseScaleStart: 1.15,
        baseScaleEnd: 0.38,
      },
      // 1. Inbound Flyover Bridge (heading SW towards city center)
      {
        points: [
          { x: 1440, y: 290 },
          { x: 1260, y: 350 },
          { x: 1080, y: 415 },
          { x: 880, y: 485 },
          { x: 670, y: 560 },
          { x: 586, y: 614 }, // Inbound dark sedan original pos
          { x: 420, y: 645 },
          { x: 180, y: 720 },
          { x: -60, y: 780 },
        ],
        baseScaleStart: 0.38,
        baseScaleEnd: 1.15,
      },
      // 2. Underpass Highway (eastbound underneath the bridge)
      {
        points: [
          { x: 620, y: 618 },
          { x: 820, y: 628 },
          { x: 976, y: 618 }, // Underpass car original pos
          { x: 1140, y: 638 },
          { x: 1300, y: 652 },
          { x: 1440, y: 662 },
        ],
        baseScaleStart: 0.72,
        baseScaleEnd: 0.82,
      },
      // 3. Foreground Arterial Highway (westbound bottom lane)
      {
        points: [
          { x: 1440, y: 742 },
          { x: 1140, y: 742 },
          { x: 868, y: 740 },  // Foreground SUV original pos
          { x: 520, y: 742 },
          { x: 180, y: 742 },
          { x: -60, y: 742 },
        ],
        baseScaleStart: 1.1,
        baseScaleEnd: 1.1,
      },
    ];

    // The ACTUAL vehicles present in the background photograph:
    // We sample their real photographic pixels directly from the image
    const vehicles: VehicleSprite[] = [
      // Car 1: Outbound White Sedan on bridge
      {
        cropX: 742,
        cropY: 543,
        cropW: 28,
        cropH: 19,
        patchOffsetX: -32,
        patchOffsetY: 12,
        pathIndex: 0,
        initialT: 0.33,
        speed: 0.00028,
        laneOffset: 4,
      },
      // Car 2: Outbound Dark Sedan on bridge
      {
        cropX: 826,
        cropY: 507,
        cropW: 24,
        cropH: 18,
        patchOffsetX: 30,
        patchOffsetY: -12,
        pathIndex: 0,
        initialT: 0.44,
        speed: 0.00026,
        laneOffset: -3,
      },
      // Car 3: Outbound Blue Transit Coaster Bus on bridge
      {
        cropX: 840,
        cropY: 477,
        cropW: 30,
        cropH: 20,
        patchOffsetX: 32,
        patchOffsetY: -12,
        pathIndex: 0,
        initialT: 0.55,
        speed: 0.00023,
        laneOffset: 5,
      },
      // Car 4: Outbound White Utility Van on bridge
      {
        cropX: 906,
        cropY: 457,
        cropW: 22,
        cropH: 16,
        patchOffsetX: 28,
        patchOffsetY: -10,
        pathIndex: 0,
        initialT: 0.66,
        speed: 0.00025,
        laneOffset: -2,
      },
      // Car 5: Inbound Dark Sedan on bridge (heading toward foreground)
      {
        cropX: 585,
        cropY: 613,
        cropW: 38,
        cropH: 24,
        patchOffsetX: -42,
        patchOffsetY: 14,
        pathIndex: 1,
        initialT: 0.55,
        speed: 0.00030,
        laneOffset: -4,
      },
      // Car 6: Underpass Dark Sedan
      {
        cropX: 975,
        cropY: 616,
        cropW: 28,
        cropH: 18,
        patchOffsetX: 35,
        patchOffsetY: 0,
        pathIndex: 2,
        initialT: 0.38,
        speed: 0.00032,
        laneOffset: 2,
      },
      // Car 7: Foreground Bottom SUV
      {
        cropX: 866,
        cropY: 738,
        cropW: 50,
        cropH: 28,
        patchOffsetX: -60,
        patchOffsetY: 0,
        pathIndex: 3,
        initialT: 0.38,
        speed: 0.00034,
        laneOffset: 0,
      },
    ];

    img.onload = () => {
      setImageLoaded(true);

      // 1. Extract photographic vehicle sprites with soft edge blending
      vehicles.forEach((v) => {
        const spriteCanvas = document.createElement('canvas');
        spriteCanvas.width = v.cropW;
        spriteCanvas.height = v.cropH;
        const sCtx = spriteCanvas.getContext('2d');
        if (!sCtx) return;

        // Cut out the genuine vehicle pixels from the photograph
        sCtx.drawImage(
          img,
          v.cropX,
          v.cropY,
          v.cropW,
          v.cropH,
          0,
          0,
          v.cropW,
          v.cropH
        );

        v.spriteCanvas = spriteCanvas;
      });

      // 2. Pre-render a clean background canvas with asphalt patches where stationary cars sat
      offscreenBgCanvas = document.createElement('canvas');
      offscreenBgCanvas.width = CANVAS_WIDTH;
      offscreenBgCanvas.height = CANVAS_HEIGHT;
      const bgCtx = offscreenBgCanvas.getContext('2d');
      if (!bgCtx) return;

      // Draw full original panorama
      bgCtx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Seamlessly patch each vehicle spot using adjacent road texture
      vehicles.forEach((v) => {
        bgCtx.save();
        bgCtx.beginPath();
        bgCtx.ellipse(
          v.cropX + v.cropW / 2,
          v.cropY + v.cropH / 2,
          v.cropW / 2 + 1,
          v.cropH / 2 + 1,
          0,
          0,
          Math.PI * 2
        );
        bgCtx.clip();
        bgCtx.drawImage(
          img,
          v.cropX + v.patchOffsetX,
          v.cropY + v.patchOffsetY,
          v.cropW,
          v.cropH,
          v.cropX,
          v.cropY,
          v.cropW,
          v.cropH
        );
        bgCtx.restore();
      });

      let progressOffset = 0;

      // 3. 60fps render loop animating the real background cars in a smooth unnoticeable loop
      const render = () => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Blit pre-patched clean background
        if (offscreenBgCanvas) {
          ctx.drawImage(offscreenBgCanvas, 0, 0);
        }

        // Animate each photographed vehicle along its real road path
        for (let i = 0; i < vehicles.length; i++) {
          const v = vehicles[i];
          if (!v.spriteCanvas) continue;

          const path = PATHS[v.pathIndex];
          // Continuous smooth progression
          let currentT = (v.initialT + progressOffset * v.speed) % 1;
          if (currentT < 0) currentT += 1;

          // Compute spline point along highway
          const { x: baseX, y: baseY, angle } = getSplinePoint(path.points, currentT);

          // Perspective scale matching distance
          const scale = path.baseScaleStart + (path.baseScaleEnd - path.baseScaleStart) * currentT;

          // Subtle lane offset perpendicular to travel direction
          const perpAngle = angle + Math.PI / 2;
          const actualX = baseX + Math.cos(perpAngle) * (v.laneOffset * scale);
          const actualY = baseY + Math.sin(perpAngle) * (v.laneOffset * scale);

          const drawW = v.cropW * scale;
          const drawH = v.cropH * scale;

          // Fade out gently near edges for seamless unnoticeable loop wrap
          let alpha = 1;
          if (currentT < 0.08) {
            alpha = currentT / 0.08;
          } else if (currentT > 0.92) {
            alpha = (1 - currentT) / 0.08;
          }

          ctx.save();
          ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
          ctx.translate(actualX, actualY);

          // Subtle road contact shadow underneath the moving car
          ctx.save();
          ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
          ctx.beginPath();
          ctx.ellipse(0, drawH * 0.45, drawW * 0.52, drawH * 0.22, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          // Render the genuine photographic vehicle sprite
          ctx.drawImage(
            v.spriteCanvas,
            -drawW / 2,
            -drawH / 2,
            drawW,
            drawH
          );

          ctx.restore();
        }

        progressOffset += 1;
        animationFrameId = requestAnimationFrame(render);
      };

      animationFrameId = requestAnimationFrame(render);
    };

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-neutral-900 select-none">
      {/* High-fidelity Fallback (instant render on load) */}
      <img
        src={IMAGES.abujaInfrastructurePanorama}
        alt="Abuja Federal Capital Territory Modern Infrastructure Landscape"
        referrerPolicy="no-referrer"
        className={`w-full h-full object-cover object-bottom transition-opacity duration-500 ${
          imageLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Living Canvas: Smooth continuous loop of genuine background cars along highway */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-500 pointer-events-none ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Soft upward blend gradient so the sky blends seamlessly into the white hero container */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/50 to-white pointer-events-none" />
    </div>
  );
};
