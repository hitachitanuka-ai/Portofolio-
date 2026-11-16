import React from 'react';
import { ApertureLogo } from './ApertureLogo';

interface HeaderProps {
  onOpenContact: () => void;
  onScrollToTop: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, onScrollToTop }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-black/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Left: Brand */}
        <button
          onClick={onScrollToTop}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="font-display font-bold text-lg tracking-tight text-black group-hover:opacity-70 transition-opacity">
            Bangkit Surya Wijaya
          </div>
          <div className="text-xs text-neutral-500 font-normal tracking-wide">
            Human Capital Enthusiast
          </div>
        </button>

        {/* Center: Aperture Logo */}
        <button
          onClick={onScrollToTop}
          aria-label="Scroll to top"
          className="p-2 text-black hover:rotate-45 transition-transform duration-500 cursor-pointer focus:outline-none"
        >
          <ApertureLogo size={26} className="text-black" />
        </button>

        {/* Right: Primary Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="px-5 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-black rounded-full hover:bg-neutral-800 transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};
