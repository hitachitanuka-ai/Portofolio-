import React from 'react';
import { motion } from 'motion/react';
import { ApertureLogo } from './ApertureLogo';

interface FloatingNavProps {
  activeTab: 'home' | 'experience' | 'portfolio' | 'about' | 'contact';
  onNavClick: (tab: 'home' | 'experience' | 'portfolio' | 'about' | 'contact') => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ activeTab, onNavClick }) => {
  return (
    <aside aria-label="Quick Navigation" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav aria-label="Main Menu" className="flex items-center gap-1 sm:gap-2 px-3 py-2 bg-neutral-950/95 backdrop-blur-xl border border-neutral-800 rounded-full shadow-2xl text-white">
        {/* Aperture Logo Button */}
        <motion.button
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={() => onNavClick('home')}
          title="Return to top"
          className="p-1.5 text-white flex items-center justify-center cursor-pointer focus:outline-none"
        >
          <ApertureLogo size={18} className="text-white" />
        </motion.button>

        <div className="w-[1px] h-4 bg-neutral-700/60 mx-1" />

        {/* Links */}
        {(['home', 'experience', 'portfolio', 'about', 'contact'] as const).map((tab) => {
          const isActive = activeTab === tab;
          const label = tab === 'about' ? 'About Me' : tab.charAt(0).toUpperCase() + tab.slice(1);
          const isContact = tab === 'contact';

          return (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => onNavClick(tab)}
              className={`relative px-3.5 py-1.5 text-xs rounded-full transition-all cursor-pointer ${
                isContact
                  ? isActive
                    ? 'bg-white text-black font-bold shadow-md shadow-white/20'
                    : 'bg-white/15 hover:bg-white/25 text-white font-semibold'
                  : isActive
                  ? 'bg-neutral-800 text-white font-bold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              {isActive && !isContact && (
                <motion.span
                  layoutId="activeNavBubble"
                  className="absolute inset-0 rounded-full bg-neutral-800 -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              {label}
            </motion.button>
          );
        })}
      </nav>
    </aside>
  );
};
