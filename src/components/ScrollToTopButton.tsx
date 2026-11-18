import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ScrollToTopButtonProps {
  routeKey: string;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ routeKey }) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const evaluateScroll = () => {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const maxScroll = Math.max(1, docHeight - window.innerHeight);
      setScrollRatio(Math.min(1, Math.max(0, y / maxScroll)));

      const heroEl = document.querySelector('main section') as HTMLElement | null;
      if (heroEl && heroEl.offsetHeight > 0 && heroEl.offsetHeight < docHeight * 0.75) {
        const passedHero = heroEl.getBoundingClientRect().bottom <= 96;
        setIsVisible(passedHero && y > 180);
      } else {
        setIsVisible(y > Math.max(360, window.innerHeight * 0.55));
      }
    };

    const rafId = window.requestAnimationFrame(evaluateScroll);
    window.addEventListener('scroll', evaluateScroll, { passive: true });
    window.addEventListener('resize', evaluateScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', evaluateScroll);
      window.removeEventListener('resize', evaluateScroll);
    };
  }, [routeKey]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 19;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - scrollRatio);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.94 }}
          onClick={handleScrollToTop}
          aria-label={t('Scroll to top', 'Kembali ke atas')}
          title={t('Scroll to top', 'Kembali ke atas')}
          className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-30 w-11 h-11 rounded-full bg-[#FAF8F5]/92 backdrop-blur-md text-[#1E2022] hover:bg-[#1E2022] hover:text-white border border-[#DFD5C8] hover:border-[#1E2022] shadow-[0_10px_28px_-8px_rgba(30,32,34,0.2)] flex items-center justify-center cursor-pointer transition-colors group focus-visible:outline-2 focus-visible:outline-[#6E7C69]"
        >
          {/* Subtle Scroll Depth Progress Ring */}
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          >
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.1"
              strokeWidth="1.5"
            />
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="none"
              stroke="#6E7C69"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-[stroke-dashoffset] duration-150 ease-out group-hover:stroke-[#D5C3A5]"
            />
          </svg>

          <ArrowUp className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
