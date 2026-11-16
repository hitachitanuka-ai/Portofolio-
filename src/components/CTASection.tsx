import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ReticleFrame } from './ReticleFrame';
import { IMAGES } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface CTASectionProps {
  onOpenContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  // Active top card in the stacked deck (0, 1, or 2)
  const [activeCard, setActiveCard] = useState<number>(1);
  const [isFanned, setIsFanned] = useState<boolean>(false);

  const deckCards = [
    {
      id: 0,
      image: IMAGES.talentRecruit,
      alt: 'Talent Acquisition & Interview Operations',
      baseRotate: -12,
      baseX: -140,
      fanX: -260,
      fanRotate: -18,
    },
    {
      id: 1,
      image: IMAGES.heroSurya,
      alt: 'Bangkit Surya Wijaya — Human Capital Lead',
      baseRotate: 0,
      baseX: 0,
      fanX: 0,
      fanRotate: 0,
    },
    {
      id: 2,
      image: IMAGES.hrConsulting,
      alt: 'Executive Advisory & Human Capital Consulting',
      baseRotate: 12,
      baseX: 140,
      fanX: 260,
      fanRotate: 18,
    },
  ];

  return (
    <section className="w-full py-28 px-6 bg-transparent overflow-hidden text-center flex flex-col items-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Massive Closing Headline */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-neutral-900 mb-6 max-w-3xl leading-[1.1]">
            Great organizations are built through great conversations
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-600 max-w-xl mb-8 leading-relaxed font-normal">
            Whether you are looking to scale your people operations, engineer custom HR automation, or optimize organizational performance, let's connect.
          </p>

          {/* Primary CTA Button */}
          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-black rounded-full hover:bg-neutral-800 transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer mb-16"
          >
            Get in touch
          </button>
        </motion.div>

        {/* Dynamic Stacked Photo Deck (as seen in video at 00:23 - 00:30) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md h-96 sm:h-[430px] flex items-center justify-center cursor-pointer mb-12 select-none"
          onMouseEnter={() => setIsFanned(true)}
          onMouseLeave={() => setIsFanned(false)}
        >
          {deckCards.map((card) => {
            const isCenter = card.id === activeCard;
            const zIndex = isCenter ? 30 : 20 - Math.abs(card.id - activeCard) * 5;

            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveCard(card.id)}
                animate={{
                  x: isFanned ? card.fanX : card.baseX,
                  rotate: isFanned ? card.fanRotate : card.baseRotate,
                  scale: isCenter ? 1.05 : 0.95,
                  zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 24,
                }}
                className="absolute w-56 sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border-2 border-white/80 transition-shadow hover:shadow-3xl"
              >
                <ReticleFrame size={16} color="border-white/80" />
                <img
                  src={card.image}
                  alt={card.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-medium text-neutral-800"
        >
          <a
            href="https://www.linkedin.com/in/bangkit-surya-133311211/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-black hover:underline transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.instagram.com/bangsur.w/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-black hover:underline transition-colors"
          >
            <span>Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://wa.me/62895321294231"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-black hover:underline transition-colors"
          >
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="mailto:bangkitsurya321@gmail.com"
            className="flex items-center gap-1.5 hover:text-black hover:underline transition-colors"
          >
            <span>Email</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
