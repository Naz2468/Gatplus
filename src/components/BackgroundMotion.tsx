import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export const BackgroundMotion: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smoothing
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Architectural geometric nodes representing infrastructure & logistics networks
    const nodeCount = Math.min(36, Math.max(16, Math.floor(width / 45)));
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseX: number;
      baseY: number;
      size: number;
      type: 'dot' | 'cross' | 'square';
      opacity: number;
      pulseSpeed: number;
      pulseAngle: number;
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const types: Array<'dot' | 'cross' | 'square'> = ['dot', 'cross', 'square'];
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() > 0.7 ? 3.5 : 2,
        type: types[i % 3],
        opacity: 0.2 + Math.random() * 0.35,
        pulseSpeed: 0.015 + Math.random() * 0.025,
        pulseAngle: Math.random() * Math.PI * 2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Draw subtle connecting architectural lines between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 170) {
            const alpha = (1 - dist / 170) * 0.12;
            ctx.strokeStyle = `rgba(142, 226, 99, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }

        // Connect node to mouse if within reach
        if (mouse.active) {
          const mdx = nodes[i].x - mouse.x;
          const mdy = nodes[i].y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            const alpha = (1 - mdist / 140) * 0.2;
            ctx.strokeStyle = `rgba(7, 33, 24, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes (faint crosshairs, squares, and dots)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move nodes
        node.x += node.vx;
        node.y += node.vy;
        node.pulseAngle += node.pulseSpeed;

        // Gentle mouse interaction repulsion
        if (mouse.active) {
          const mdx = node.x - mouse.x;
          const mdy = node.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 100 && mdist > 0) {
            const force = (100 - mdist) / 100;
            node.x += (mdx / mdist) * force * 1.2;
            node.y += (mdy / mdist) * force * 1.2;
          }
        }

        // Screen boundary wrapping
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;

        const dynamicOpacity = node.opacity * (0.65 + 0.35 * Math.sin(node.pulseAngle));

        if (node.type === 'cross') {
          // Architectural crosshair '+'
          const s = 4.5;
          ctx.strokeStyle = `rgba(7, 33, 24, ${dynamicOpacity * 0.8})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(node.x - s, node.y);
          ctx.lineTo(node.x + s, node.y);
          ctx.moveTo(node.x, node.y - s);
          ctx.lineTo(node.x, node.y + s);
          ctx.stroke();
        } else if (node.type === 'square') {
          // Sharp modern micro-square
          ctx.fillStyle = `rgba(142, 226, 99, ${dynamicOpacity * 1.1})`;
          ctx.fillRect(node.x - 1.5, node.y - 1.5, 3, 3);
        } else {
          // Subtle circular node
          ctx.fillStyle = `rgba(7, 33, 24, ${dynamicOpacity * 0.6})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      
      {/* 1. Large Ambient Floating Gradient Auroras (Smooth GPU keyframe motion) */}
      <motion.div
        animate={{
          x: [0, 90, -50, 0],
          y: [0, -70, 50, 0],
          scale: [1, 1.2, 0.95, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -left-40 w-[620px] h-[620px] rounded-none bg-gradient-to-br from-[#8EE263]/22 via-[#8EE263]/8 to-transparent blur-3xl will-change-transform"
      />

      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 90, -60, 0],
          scale: [0.95, 1.3, 1, 0.95],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 27,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -right-40 w-[680px] h-[680px] rounded-none bg-gradient-to-bl from-emerald-600/12 via-[#072118]/8 to-transparent blur-3xl will-change-transform"
      />

      <motion.div
        animate={{
          x: [0, 80, -90, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.18, 0.88, 1],
          opacity: [0.28, 0.48, 0.28],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 left-1/3 w-[560px] h-[560px] rounded-none bg-gradient-to-tr from-[#8EE263]/18 via-emerald-500/8 to-transparent blur-3xl will-change-transform"
      />

      {/* 2. Interactive Architectural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-80"
      />


      {/* 4. Subtle Drifting Horizontal Laser Beam Scan Line */}
      <motion.div
        animate={{
          top: ['-5%', '105%'],
          opacity: [0, 0.35, 0.35, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8EE263]/40 to-transparent pointer-events-none will-change-transform"
      />

      {/* 5. Subtle Floating Coordinate Watermark Tickers */}
      <motion.div
        animate={{
          y: [0, -22, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="hidden xl:block absolute top-52 right-12 font-mono text-[10px] tracking-widest text-[#072118]/30 uppercase select-none"
      >
        <span>9°04&apos;N 7°29&apos;E · FCT CORRIDOR · BPP/IRR/2026</span>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 26, 0],
          opacity: [0.18, 0.38, 0.18],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="hidden xl:block absolute bottom-72 left-10 font-mono text-[10px] tracking-widest text-[#072118]/25 uppercase select-none"
      >
        <span>RC 1233350 · GATPLUS DYNAMIC · SOVEREIGN COMPLIANCE</span>
      </motion.div>

    </div>
  );
};
