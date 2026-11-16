import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  const [hoveredWordIdx, setHoveredWordIdx] = useState<number | null>(null);

  const quoteWords = [
    'Every', 'workforce', 'strategy', 'should', 'make', 'an', 'impact.',
    'I', 'bridge', 'data-driven', 'people', 'analytics,',
    'cultural', 'empathy,', 'and', 'custom', 'automation', 'to',
    'unlock', 'human', 'potential.'
  ];

  return (
    <section id="about" className="relative w-full py-28 px-6 bg-white overflow-hidden">
      {/* Floating Ambient Polaroids in margins (with gentle motion) */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 w-48 xl:w-56 rounded-2xl overflow-hidden shadow-xl border border-neutral-100 rotate-[-4deg]"
      >
        <img
          src={IMAGES.peopleCulture}
          alt="People & Culture Team"
          referrerPolicy="no-referrer"
          className="w-full h-64 object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.2 }}
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-48 xl:w-56 rounded-2xl overflow-hidden shadow-xl border border-neutral-100 rotate-[4deg]"
      >
        <img
          src={IMAGES.hrChangeMgmt}
          alt="Workforce Analytics & Change Management"
          referrerPolicy="no-referrer"
          className="w-full h-64 object-cover"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10"
      >
        {/* Section Pill Badge */}
        <div className="inline-block px-3.5 py-1 mb-8 text-[11px] font-semibold tracking-wider uppercase text-neutral-600 bg-neutral-100 rounded-full border border-neutral-200/60">
          Philosophy
        </div>

        {/* Interactive Depth-of-Field Lens Blur Quote */}
        <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.25] max-w-3xl mb-8 select-none">
          {quoteWords.map((word, idx) => {
            // If any word is hovered, non-hovered words receive subtle blur; hovered word is sharp black
            const isHovered = hoveredWordIdx === idx;
            const isAnyHovered = hoveredWordIdx !== null;
            const isSpecial = ['make', 'impact.', 'people', 'analytics,', 'custom', 'automation', 'unlock', 'potential.'].includes(word);

            return (
              <span
                key={idx}
                onMouseEnter={() => setHoveredWordIdx(idx)}
                onMouseLeave={() => setHoveredWordIdx(null)}
                className={`inline-block mx-1.5 transition-all duration-300 cursor-default ${
                  isHovered
                    ? 'scale-105 text-black font-semibold filter-none'
                    : isAnyHovered
                    ? 'blur-[1.5px] opacity-40 text-neutral-500'
                    : isSpecial
                    ? 'text-neutral-900 font-semibold'
                    : 'text-neutral-700'
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Attribution */}
        <div className="text-xs tracking-wider uppercase text-neutral-400 font-mono">
          © Bangkit Surya Wijaya
        </div>
      </motion.div>
    </section>
  );
};
