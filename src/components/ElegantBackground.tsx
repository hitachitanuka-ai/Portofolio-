import React from 'react';
import { motion } from 'motion/react';

export const ElegantBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Subtle Architectural Dot-Matrix & Geometric Grid */}
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.065) 1px, transparent 0),
            linear-gradient(to right, rgba(0, 0, 0, 0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px, 96px 96px, 96px 96px',
          maskImage: 'radial-gradient(ellipse 90% 85% at 50% 35%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 35%, black 40%, transparent 95%)',
        }}
      />

      {/* 2. Floating Ambient Luminescence Orb 1 (Top Azure/Cyan Aura) */}
      <motion.div
        animate={{
          x: [0, 50, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.35, 0.55, 0.4, 0.35],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(14, 165, 233, 0.04) 50%, transparent 70%)',
        }}
      />

      {/* 3. Floating Ambient Luminescence Orb 2 (Right Warm Executive Champagne Aura) */}
      <motion.div
        animate={{
          x: [0, -60, 45, 0],
          y: [0, 55, -45, 0],
          scale: [0.95, 1.1, 1, 0.95],
          opacity: [0.25, 0.45, 0.3, 0.25],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.025) 50%, transparent 70%)',
        }}
      />

      {/* 4. Floating Ambient Luminescence Orb 3 (Bottom Indigo/Slate Corporate Depth) */}
      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.3, 0.5, 0.35, 0.3],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute -bottom-40 left-1/4 w-[650px] h-[650px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(79, 70, 229, 0.02) 50%, transparent 70%)',
        }}
      />

      {/* 5. Minimalist Ambient Accent Rings (Subtle Reticle Coordinate Guides) */}
      <div className="absolute top-44 left-12 w-28 h-28 rounded-full border border-neutral-300/30 opacity-60 pointer-events-none hidden lg:block animate-pulse duration-[6000ms]" />
      <div className="absolute top-[48%] right-16 w-36 h-36 rounded-full border border-dashed border-neutral-300/30 opacity-50 pointer-events-none hidden lg:block animate-[spin_120s_linear_infinite]" />
    </div>
  );
};
