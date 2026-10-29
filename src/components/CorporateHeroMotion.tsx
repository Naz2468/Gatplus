import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export const CorporateHeroMotion: React.FC = () => {
  const [isReduced, setIsReduced] = useState(false);

  // Smooth mouse tracking for subtle corporate spotlight
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 24 });

  const spotlightLeft = useTransform(smoothX, (val) => `${val * 100}%`);
  const spotlightTop = useTransform(smoothY, (val) => `${val * 100}%`);

  useEffect(() => {
    setIsReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

    const handleWindowMouseMove = (e: MouseEvent) => {
      const x = Math.max(0, Math.min(1, e.clientX / window.innerWidth));
      const y = Math.max(0, Math.min(1, (e.clientY % 900) / 900));
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Base Subtle Corporate Gradient Wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/70 to-slate-100/50" />

      {/* 1. Large Fluid Corporate Aurora Waves (Deep Forest #072118 & Electric Lime #8EE263) */}
      <motion.div
        animate={
          isReduced
            ? undefined
            : {
                x: [-40, 60, -20, -40],
                y: [-30, 40, -50, -30],
                scale: [1, 1.15, 0.95, 1],
                opacity: [0.45, 0.65, 0.45],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-20 w-[580px] h-[580px] bg-gradient-to-br from-[#8EE263]/18 via-emerald-400/10 to-transparent rounded-full blur-3xl will-change-transform"
      />

      <motion.div
        animate={
          isReduced
            ? undefined
            : {
                x: [40, -50, 30, 40],
                y: [20, -40, 50, 20],
                scale: [1, 1.2, 0.9, 1],
                opacity: [0.35, 0.55, 0.35],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 -right-28 w-[620px] h-[620px] bg-gradient-to-bl from-[#072118]/8 via-emerald-600/6 to-transparent rounded-full blur-3xl will-change-transform"
      />

      <motion.div
        animate={
          isReduced
            ? undefined
            : {
                x: [-30, 50, -60, -30],
                y: [30, -30, 40, 30],
                scale: [0.95, 1.12, 1, 0.95],
                opacity: [0.25, 0.45, 0.25],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#8EE263]/12 via-[#072118]/5 to-transparent rounded-full blur-3xl will-change-transform"
      />

      {/* 2. Interactive Corporate Spotlight (Follows cursor smoothly) */}
      <motion.div
        style={{
          left: spotlightLeft,
          top: spotlightTop,
          transform: 'translate(-50%, -50%)',
        }}
        className="absolute w-[440px] h-[440px] bg-radial from-[#8EE263]/14 via-[#072118]/4 to-transparent rounded-full blur-2xl pointer-events-none transition-opacity duration-300"
      />

      {/* 3. Executive Ambient Light Ribbon (Diagonal light sweep) */}
      <motion.div
        animate={
          isReduced
            ? undefined
            : {
                x: ['-120%', '220%'],
                opacity: [0, 0.6, 0.6, 0],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
          repeatDelay: 3,
        }}
        className="absolute -inset-y-20 w-72 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-25 blur-md will-change-transform"
      />

      {/* 4. Elegant Corporate Architectural Fluid Lines (Curved vector ribbons, NOT grids) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="corpGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#072118" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#8EE263" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#072118" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="corpGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8EE263" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#072118" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Dynamic undulating wave ribbons */}
        <motion.path
          d="M -100 220 C 300 120, 600 320, 1300 180"
          fill="none"
          stroke="url(#corpGrad1)"
          strokeWidth="1.5"
          animate={
            isReduced
              ? undefined
              : {
                  d: [
                    'M -100 220 C 300 120, 600 320, 1300 180',
                    'M -100 240 C 350 290, 750 140, 1300 220',
                    'M -100 220 C 300 120, 600 320, 1300 180',
                  ],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.path
          d="M -100 340 C 400 420, 800 220, 1300 360"
          fill="none"
          stroke="url(#corpGrad2)"
          strokeWidth="1.2"
          animate={
            isReduced
              ? undefined
              : {
                  d: [
                    'M -100 340 C 400 420, 800 220, 1300 360',
                    'M -100 300 C 450 180, 700 440, 1300 310',
                    'M -100 340 C 400 420, 800 220, 1300 360',
                  ],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* 5. Subtle Corporate Floating Accent Rings */}
      <motion.div
        animate={
          isReduced
            ? undefined
            : {
                rotate: 360,
                scale: [1, 1.05, 1],
              }
        }
        transition={{
          rotate: { duration: 55, repeat: Infinity, ease: 'linear' },
          scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute -top-20 right-1/4 w-80 h-80 rounded-full border border-[#072118]/[0.06] pointer-events-none"
      />

      <motion.div
        animate={
          isReduced
            ? undefined
            : {
                rotate: -360,
              }
        }
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -top-10 right-[28%] w-60 h-60 rounded-full border border-dashed border-[#8EE263]/25 pointer-events-none"
      />
    </div>
  );
};
