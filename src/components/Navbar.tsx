import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import {
  Menu,
  X,
  ArrowUpRight,
  FileText,
  ChevronDown,
  Briefcase,
  Trophy,
  Cpu,
  Aperture,
} from 'lucide-react';
import { AppRoute } from '../types';
import { IMAGES } from '../data/portfolioData';

interface NavbarProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute, slug?: string) => void;
  onOpenResume: () => void;
}

const NAV_ITEMS: { label: string; route: AppRoute }[] = [
  { label: 'Home', route: 'home' },
  { label: 'About', route: 'about' },
  { label: 'Expertise', route: 'expertise' },
  { label: 'Projects', route: 'projects' },
  { label: 'Experience', route: 'experience' },
  { label: 'Insights', route: 'insights' },
  { label: 'Contact', route: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenResume,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpDropdownOpen, setIsExpDropdownOpen] = useState(false);
  const dropdownTimerRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (route: AppRoute, slug?: string) => {
    onNavigate(route, slug);
    setIsMobileMenuOpen(false);
    setIsExpDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openExpMenu = () => {
    if (dropdownTimerRef.current) {
      window.clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setIsExpDropdownOpen(true);
  };

  const closeExpMenu = () => {
    dropdownTimerRef.current = window.setTimeout(() => {
      setIsExpDropdownOpen(false);
    }, 140);
  };

  const isDarkTop = currentRoute === 'home' && !isScrolled;

  return (
    <>
      {/* =========================================================================
          GLOBAL READING / SCROLL TELEMETRY LINE (Top Hairline Progress)
          ========================================================================= */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] origin-left z-50 bg-gradient-to-r from-[#6E7C69] via-[#B49A70] to-[#AF8C72] pointer-events-none"
      />

      {/* =========================================================================
          FIXED ADAPTIVE ARCHITECTURAL HEADER
          ========================================================================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'pt-2.5 sm:pt-3.5 px-3 sm:px-6' : 'pt-0 px-0'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 flex items-center justify-between gap-4 ${
            isScrolled
              ? 'max-w-6xl rounded-2xl sm:rounded-full bg-[#FAF8F5]/92 backdrop-blur-xl border border-[#E4E0D8] shadow-[0_16px_40px_-14px_rgba(30,32,34,0.16)] px-4 sm:px-6 py-2.5'
              : isDarkTop
              ? 'max-w-7xl px-5 sm:px-8 py-4 sm:py-5 bg-gradient-to-b from-[#14171A]/75 via-[#14171A]/35 to-transparent border-b border-white/10'
              : 'max-w-7xl px-5 sm:px-8 py-3.5 sm:py-4 bg-[#F5F3EE]/90 backdrop-blur-md border-b border-[#E4E0D8]'
          }`}
        >
          {/* -------------------------------------------------------------------
              LEFT: SIGNATURE MONOGRAM SEAL + WORDMARK
              ------------------------------------------------------------------- */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B49A70] rounded-xl text-left shrink-0"
          >
            {/* Geometric Architectural Emblem */}
            <div
              className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-serif italic text-base sm:text-lg font-bold transition-all duration-300 overflow-hidden ${
                isDarkTop
                  ? 'bg-white/10 text-white border border-[#B49A70]/60 group-hover:bg-[#B49A70] group-hover:text-[#14171A]'
                  : 'bg-[#1E2022] text-[#F5F3EE] border border-[#1E2022] group-hover:bg-[#6E7C69] group-hover:border-[#6E7C69]'
              }`}
            >
              <span className="relative z-10 tracking-tighter">BS</span>
              <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[#B49A70]/40 blur-[2px]" />
            </div>

            <div className="flex flex-col">
              <span
                className={`font-sans text-xs sm:text-sm font-black tracking-[0.16em] uppercase transition-colors leading-tight ${
                  isDarkTop
                    ? 'text-white group-hover:text-[#B49A70]'
                    : 'text-[#1E2022] group-hover:text-[#6E7C69]'
                }`}
              >
                THE MODERN STRATEGIST
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] uppercase font-bold text-[#B49A70]">
                  BANGKIT SURYA
                </span>
                <span
                  aria-hidden="true"
                  className={`hidden sm:inline text-[9px] ${
                    isDarkTop ? 'text-white/35' : 'text-[#A7A69F]'
                  }`}
                >
                  /
                </span>
                <span
                  className={`hidden sm:inline font-mono text-[9px] tracking-wider uppercase ${
                    isDarkTop ? 'text-[#D1CCC5]/80' : 'text-[#605E59]'
                  }`}
                >
                  HC &amp; Systems
                </span>
              </div>
            </div>
          </button>

          {/* -------------------------------------------------------------------
              CENTER: INTERACTIVE SEGMENTED NAVIGATION RAIL (Desktop)
              ------------------------------------------------------------------- */}
          <nav
            aria-label="Primary Navigation"
            className={`hidden lg:flex items-center gap-0.5 p-1 rounded-full border transition-colors duration-300 ${
              isDarkTop
                ? 'bg-white/[0.07] border-white/15 backdrop-blur-md'
                : 'bg-[#EDE8DF]/80 border-[#E0D9CE]'
            }`}
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                currentRoute === item.route ||
                (item.route === 'projects' && currentRoute === 'project-detail') ||
                (item.route === 'insights' && currentRoute === 'insight-detail');

              if (item.route === 'experience') {
                return (
                  <div
                    key={item.route}
                    className="relative"
                    onMouseEnter={openExpMenu}
                    onMouseLeave={closeExpMenu}
                  >
                    <button
                      onClick={() => handleLinkClick('experience')}
                      aria-expanded={isExpDropdownOpen}
                      className={`relative z-10 px-3 xl:px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs font-semibold tracking-wide transition-colors cursor-pointer flex items-center gap-1 whitespace-nowrap ${
                        isActive
                          ? isDarkTop
                            ? 'text-white'
                            : 'text-[#1E2022]'
                          : isDarkTop
                          ? 'text-[#D1CCC5] hover:text-white'
                          : 'text-[#5E626B] hover:text-[#1E2022]'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeNavRail"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          className={`absolute inset-0 rounded-full -z-10 ${
                            isDarkTop
                              ? 'bg-white/18 border border-white/25 shadow-xs'
                              : 'bg-white border border-[#E4E0D8] shadow-xs'
                          }`}
                        />
                      )}
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3 h-3 text-[#B49A70] transition-transform duration-200 ${
                          isExpDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Creative Experience Mega-Popover */}
                    <AnimatePresence>
                      {isExpDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 p-2.5 bg-[#FAF8F5]/98 backdrop-blur-xl border border-[#E4E0D8] rounded-3xl shadow-[0_24px_48px_-12px_rgba(30,32,34,0.22)] z-50 text-[#1E2022]"
                        >
                          <div className="px-3 pt-1.5 pb-2 border-b border-[#E7E0D6] flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E7B62] font-bold">
                              Experience Dossier
                            </span>
                            <span className="text-[10px] font-mono text-[#6E7C69] font-semibold">
                              3 Tracks
                            </span>
                          </div>

                          <div className="py-1.5 space-y-1">
                            <button
                              onClick={() => handleLinkClick('experience', 'working')}
                              className="w-full text-left p-2.5 rounded-2xl hover:bg-white border border-transparent hover:border-[#E7E0D6] transition-all flex items-start gap-3 cursor-pointer group"
                            >
                              <div className="w-8 h-8 rounded-xl bg-[#6E7C69]/12 text-[#6E7C69] flex items-center justify-center shrink-0 group-hover:bg-[#6E7C69] group-hover:text-white transition-colors">
                                <Briefcase className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-[#1E2022]">
                                    Working Experience
                                  </span>
                                  <span className="font-mono text-[10px] text-[#B49A70] font-semibold">
                                    4 Roles
                                  </span>
                                </div>
                                <span className="text-[11px] text-[#605E59] block truncate">
                                  HR Lead, Project Analyst &amp; Ops
                                </span>
                              </div>
                            </button>

                            <button
                              onClick={() => handleLinkClick('experience', 'organizational')}
                              className="w-full text-left p-2.5 rounded-2xl hover:bg-white border border-transparent hover:border-[#E7E0D6] transition-all flex items-start gap-3 cursor-pointer group"
                            >
                              <div className="w-8 h-8 rounded-xl bg-[#AF8C72]/15 text-[#9E7B62] flex items-center justify-center shrink-0 group-hover:bg-[#AF8C72] group-hover:text-white transition-colors">
                                <Trophy className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-[#1E2022]">
                                    Organizational Leadership
                                  </span>
                                  <span className="font-mono text-[10px] text-[#B49A70] font-semibold">
                                    5 Roles
                                  </span>
                                </div>
                                <span className="text-[11px] text-[#605E59] block truncate">
                                  Duta IPB University &amp; National
                                </span>
                              </div>
                            </button>

                            <button
                              onClick={() => handleLinkClick('experience', 'project')}
                              className="w-full text-left p-2.5 rounded-2xl hover:bg-white border border-transparent hover:border-[#E7E0D6] transition-all flex items-start gap-3 cursor-pointer group"
                            >
                              <div className="w-8 h-8 rounded-xl bg-[#1E2022]/10 text-[#1E2022] flex items-center justify-center shrink-0 group-hover:bg-[#1E2022] group-hover:text-white transition-colors">
                                <Cpu className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-[#1E2022]">
                                    Project &amp; Systems
                                  </span>
                                  <span className="font-mono text-[10px] text-[#6E7C69] font-semibold">
                                    6 Projects
                                  </span>
                                </div>
                                <span className="text-[11px] text-[#605E59] block truncate">
                                  Pervia, Matchify, Slipr &amp; Zeno
                                </span>
                              </div>
                            </button>
                          </div>

                          <div className="pt-1.5 border-t border-[#E7E0D6]">
                            <button
                              onClick={() => handleLinkClick('archive')}
                              className="w-full px-3 py-2 rounded-2xl bg-[#F3EFEA] hover:bg-[#1E2022] hover:text-white text-[#1E2022] transition-colors flex items-center justify-between text-xs font-semibold cursor-pointer group"
                            >
                              <span className="flex items-center gap-2">
                                <Aperture className="w-3.5 h-3.5 text-[#B49A70]" />
                                <span>CreativeStyle Archive</span>
                              </span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#B49A70] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={item.route}
                  onClick={() => handleLinkClick(item.route)}
                  className={`relative z-10 px-3 xl:px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs font-semibold tracking-wide transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? isDarkTop
                        ? 'text-white'
                        : 'text-[#1E2022]'
                      : isDarkTop
                      ? 'text-[#D1CCC5] hover:text-white'
                      : 'text-[#5E626B] hover:text-[#1E2022]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavRail"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className={`absolute inset-0 rounded-full -z-10 ${
                        isDarkTop
                          ? 'bg-white/18 border border-white/25 shadow-xs'
                          : 'bg-white border border-[#E4E0D8] shadow-xs'
                      }`}
                    />
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* -------------------------------------------------------------------
              RIGHT: VISUAL ARCHIVE SHORTCUT + INTEGRATED EXECUTIVE RESUME CTA
              ------------------------------------------------------------------- */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Visual Archive Icon Shortcut */}
            <button
              onClick={() => handleLinkClick('archive')}
              title="CreativeStyle Visual Archive"
              aria-label="Open CreativeStyle Visual Archive"
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer active:scale-95 ${
                currentRoute === 'archive'
                  ? 'bg-[#6E7C69] text-white border-[#6E7C69] shadow-sm'
                  : isDarkTop
                  ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md'
                  : 'bg-white hover:bg-[#1E2022] text-[#1E2022] hover:text-white border-[#E4E0D8] shadow-2xs'
              }`}
            >
              <Aperture className="w-4 h-4" />
            </button>

            {/* Integrated Executive Profile + Resume CV Action */}
            <button
              onClick={onOpenResume}
              className={`group inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer active:scale-95 border ${
                isDarkTop
                  ? 'bg-white text-[#14171A] hover:bg-[#B49A70] hover:text-white border-white shadow-lg'
                  : 'bg-[#1E2022] text-[#F5F3EE] hover:bg-[#6E7C69] border-[#1E2022] hover:border-[#6E7C69] shadow-sm'
              }`}
            >
              <span className="relative w-7 h-7 rounded-full overflow-hidden border border-[#B49A70]/60 shrink-0">
                <img
                  src={IMAGES.heroSurya}
                  alt="Bangkit Surya Wijaya"
                  className="w-full h-full object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"
                />
              </span>
              <span className="whitespace-nowrap">Resume CV</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B49A70] group-hover:text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* -------------------------------------------------------------------
              MOBILE MENU ACTIONS
              ------------------------------------------------------------------- */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              onClick={onOpenResume}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors cursor-pointer min-h-[40px] ${
                isDarkTop
                  ? 'text-[#14171A] bg-white border-white'
                  : 'text-white bg-[#1E2022] border-[#1E2022]'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#B49A70]" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors cursor-pointer ${
                isDarkTop
                  ? 'text-white bg-white/10 border-white/20 hover:bg-white/20'
                  : 'text-[#1E2022] bg-white border-[#E4E0D8] hover:border-[#1E2022]'
              }`}
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          MOBILE FULL-SCREEN EDITORIAL OVERLAY DRAWER
          ========================================================================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-30 bg-[#F3EFEA] pt-24 px-6 sm:px-8 pb-10 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#9E7B62] font-bold">
                  Editorial Directory
                </span>
                <span className="font-mono text-[11px] text-[#6E7C69] font-semibold">
                  07 Sections
                </span>
              </div>

              <nav className="flex flex-col space-y-2.5">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = currentRoute === item.route;

                  if (item.route === 'experience') {
                    return (
                      <div key={item.route} className="border-b border-[#E7E0D6]/70 pb-3">
                        <button
                          onClick={() => handleLinkClick('experience')}
                          className="w-full flex items-center justify-between text-left py-2 group cursor-pointer"
                        >
                          <span
                            className={`text-2xl font-bold tracking-tight ${
                              isActive ? 'text-[#6E7C69]' : 'text-[#1E2022]'
                            }`}
                          >
                            {item.label}
                          </span>
                          <span className="font-mono text-xs text-[#B49A70] font-bold">
                            0{idx + 1}
                          </span>
                        </button>
                        <div className="pl-3 space-y-1.5 pt-1 border-l-2 border-[#B49A70]/40 ml-1">
                          <button
                            onClick={() => handleLinkClick('experience', 'working')}
                            className="text-xs font-medium text-[#605E59] hover:text-[#1E2022] block py-1 cursor-pointer text-left"
                          >
                            Working Experience — 4 Corporate Roles
                          </button>
                          <button
                            onClick={() => handleLinkClick('experience', 'organizational')}
                            className="text-xs font-medium text-[#605E59] hover:text-[#1E2022] block py-1 cursor-pointer text-left"
                          >
                            Organizational Leadership — 5 Mandates
                          </button>
                          <button
                            onClick={() => handleLinkClick('experience', 'project')}
                            className="text-xs font-medium text-[#605E59] hover:text-[#1E2022] block py-1 cursor-pointer text-left"
                          >
                            Project &amp; Systems — 6 Initiatives
                          </button>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={item.route}
                      onClick={() => handleLinkClick(item.route)}
                      className="flex items-center justify-between text-left py-2 border-b border-[#E7E0D6]/70 group cursor-pointer"
                    >
                      <span
                        className={`text-2xl font-bold tracking-tight ${
                          isActive ? 'text-[#6E7C69]' : 'text-[#1E2022]'
                        }`}
                      >
                        {item.label}
                      </span>
                      <span className="font-mono text-xs text-[#B49A70] font-bold">
                        0{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Archive Quick Card on Mobile */}
              <button
                onClick={() => handleLinkClick('archive')}
                className="w-full p-4 rounded-2xl bg-white border border-[#E7E0D6] flex items-center justify-between cursor-pointer hover:border-[#6E7C69] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#6E7C69]/12 text-[#6E7C69] flex items-center justify-center">
                    <Aperture className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-bold text-[#1E2022] block">
                      CreativeStyle Visual Archive
                    </span>
                    <span className="text-[11px] font-mono text-[#9E7B62]">
                      Albums · Events · Leadership
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#B49A70]" />
              </button>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E7E0D6] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#605E59]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Strategic Advisory &amp; Leadership</span>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3.5 bg-[#1E2022] text-white text-xs font-semibold tracking-wider uppercase rounded-full flex items-center justify-center gap-2 shadow-sm hover:bg-[#6E7C69] transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#B49A70]" />
                <span>Download Executive Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
