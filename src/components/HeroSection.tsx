import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ApertureLogo } from './ApertureLogo';
import { ReticleFrame } from './ReticleFrame';
import { IMAGES } from '../data/portfolioData';
import { RotateCcw } from 'lucide-react';

interface HeroSectionProps {
  onExplorePortfolio: () => void;
}

interface PolaroidCard {
  id: number;
  image: string;
  title: string;
  initialX: number;
  initialY: number;
  rotation: number;
  scatterX: number;
  scatterY: number;
  scatterRotate: number;
}

const POLAROIDS: PolaroidCard[] = [
  {
    id: 1,
    image: IMAGES.matchifyBanner,
    title: 'Matchify Platform',
    initialX: -240,
    initialY: -110,
    rotation: -10,
    scatterX: -600,
    scatterY: -350,
    scatterRotate: -25,
  },
  {
    id: 2,
    image: IMAGES.sliprBanner,
    title: 'Slipr Payroll Suite',
    initialX: 0,
    initialY: -170,
    rotation: 2,
    scatterX: 0,
    scatterY: -550,
    scatterRotate: 8,
  },
  {
    id: 3,
    image: IMAGES.zenoBanner,
    title: 'Zeno Assessment',
    initialX: 240,
    initialY: -110,
    rotation: 12,
    scatterX: 620,
    scatterY: -340,
    scatterRotate: 28,
  },
  {
    id: 4,
    image: IMAGES.peopleCulture,
    title: 'People & Culture',
    initialX: -160,
    initialY: 130,
    rotation: 8,
    scatterX: -480,
    scatterY: 480,
    scatterRotate: 20,
  },
  {
    id: 5,
    image: IMAGES.heroSurya,
    title: 'Surya Wijaya',
    initialX: 170,
    initialY: 135,
    rotation: -9,
    scatterX: 520,
    scatterY: 490,
    scatterRotate: -22,
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplorePortfolio }) => {
  // isScattered starts as false, showing the 5 photo album cards clustered in the center around Aperture logo
  const [isScattered, setIsScattered] = useState<boolean>(false);

  useEffect(() => {
    // Automatically trigger the dynamic outward scatter after 1.3s on initial page opening
    const timer = setTimeout(() => {
      setIsScattered(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  const handleReplay = () => {
    setIsScattered(false);
    setTimeout(() => {
      setIsScattered(true);
    }, 1600);
  };

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-transparent select-none">
      {/* Replay / Toggle Intro Animation Controller */}
      <div className="absolute top-22 right-6 z-30">
        <button
          onClick={handleReplay}
          title="Putar ulang animasi pembuka album foto menyebar"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-all cursor-pointer shadow-xs active:scale-95"
        >
          <RotateCcw className="w-3 h-3" />
          <span>{isScattered ? 'Replay Intro' : 'Memutar Pembuka...'}</span>
        </button>
      </div>

      {/* Opening Animation Layer: Center Aperture + 5 Polaroids */}
      <div className="relative w-full max-w-5xl h-[520px] flex items-center justify-center">
        {/* Center Aperture Logo before scatter */}
        <motion.div
          animate={{
            scale: isScattered ? 0 : 1,
            opacity: isScattered ? 0 : 1,
            rotate: isScattered ? 180 : 0,
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-20 flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="w-16 h-16 rounded-full bg-white shadow-xl border border-neutral-200/60 flex items-center justify-center p-3">
            <ApertureLogo size={36} className="text-black" />
          </div>
        </motion.div>

        {/* 5 Polaroid Cards that scatter outwards */}
        {POLAROIDS.map((card) => {
          return (
            <motion.div
              key={card.id}
              initial={{
                x: card.initialX,
                y: card.initialY,
                rotate: card.rotation,
                scale: 1,
                opacity: 1,
              }}
              animate={{
                x: isScattered ? card.scatterX : card.initialX,
                y: isScattered ? card.scatterY : card.initialY,
                rotate: isScattered ? card.scatterRotate : card.rotation,
                scale: isScattered ? 0.7 : 1,
                opacity: isScattered ? 0 : 1,
                pointerEvents: isScattered ? 'none' : 'auto',
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute z-10 w-44 md:w-52 p-3 pb-6 bg-white rounded-lg shadow-2xl border border-neutral-100 flex flex-col cursor-pointer transition-shadow hover:shadow-3xl"
              onClick={() => setIsScattered(true)}
            >
              <div className="w-full aspect-square overflow-hidden rounded bg-neutral-100 mb-2">
                <img
                  src={card.image}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center font-display text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                {card.title}
              </div>
            </motion.div>
          );
        })}

        {/* Main Hero Reveal: Portrait + MASSIVE "SURYA" Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: isScattered ? 1 : 0,
            scale: isScattered ? 1 : 0.95,
          }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center"
        >
          {/* Portrait Container with Camera Reticles */}
          <div className="relative w-full max-w-4xl h-[480px] md:h-[540px] rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-200">
            {/* Reticle Viewfinder Brackets */}
            <ReticleFrame size={20} color="border-white/80" />

            {/* High-res Portrait Image */}
            <img
              src={IMAGES.heroSurya}
              alt="Bangkit Surya Wijaya — Human Capital Enthusiast"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />

            {/* Cyan / Azure Ambient Sky Overlay Blend */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-neutral-950/70 pointer-events-none" />

            {/* MASSIVE Typography "SURYA" spanning across the frame */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
              <h1 className="font-display font-black text-[18vw] md:text-[14rem] lg:text-[16rem] leading-none tracking-tight text-white/90 drop-shadow-md select-none mix-blend-overlay">
                SURYA
              </h1>
            </div>

            {/* Photographer/Leader Metadata Sub-badges in Frame */}
            <div className="absolute bottom-6 left-8 z-20 text-white">
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/70 block">
                Human Capital Enthusiast
              </span>
              <span className="font-display font-bold text-lg text-white">
                Bangkit Surya Wijaya
              </span>
            </div>

            <div className="absolute bottom-6 right-8 z-20">
              <button
                onClick={onExplorePortfolio}
                className="px-4 py-2 bg-white/90 hover:bg-white text-black text-xs font-semibold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                Explore Case Studies ↓
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Soft Fade out into White Page */}
      <div className="w-full h-12 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
};
