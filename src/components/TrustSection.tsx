import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TrustSection: React.FC = () => {
  return (
    <section className="w-full py-14 px-6 bg-transparent text-center flex flex-col items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        {/* Laurel wreath + Leadership Monograms + Stars cluster */}
        <div className="flex items-center gap-4 mb-3">
          {/* Left Laurel Branch SVG */}
          <svg className="w-8 h-8 text-neutral-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.85 1.2 5.42 3.12 7.24l1.42-1.42C4.94 16.32 4 14.27 4 12c0-4.41 3.59-8 8-8 1.48 0 2.87.41 4.07 1.11l1.46-1.46C15.93 2.62 14.04 2 12 2z" />
          </svg>

          {/* Overlapping Leadership Monograms */}
          <div className="flex -space-x-2 overflow-hidden">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                title={`${t.name} — ${t.company}`}
                className="inline-flex h-8 w-8 rounded-full ring-2 ring-white bg-neutral-900 text-white font-display font-bold text-[10px] items-center justify-center shadow-xs"
                style={{ zIndex: 3 - idx }}
              >
                {t.initials || t.name.slice(0, 2).toUpperCase()}
              </div>
            ))}
          </div>

          {/* Right Laurel Branch SVG */}
          <svg className="w-8 h-8 text-neutral-300 scale-x-[-1]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.85 1.2 5.42 3.12 7.24l1.42-1.42C4.94 16.32 4 14.27 4 12c0-4.41 3.59-8 8-8 1.48 0 2.87.41 4.07 1.11l1.46-1.46C15.93 2.62 14.04 2 12 2z" />
          </svg>
        </div>

        {/* 5 Stars */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
          ))}
        </div>

        {/* Headline */}
        <h2 className="font-display font-semibold text-lg md:text-xl text-neutral-900 mb-1">
          Trusted across high-growth companies & 110+ employees
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-neutral-500 max-w-lg">
          Directing full-spectrum people operations, engineering custom HR automations, and scaling team performance.
        </p>
      </motion.div>
    </section>
  );
};
