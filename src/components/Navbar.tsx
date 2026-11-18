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
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute, slug?: string) => void;
  onOpenResume: () => void;
}

const NAV_ITEMS: { labelEn: string; labelId: string; route: AppRoute }[] = [
  { labelEn: 'Home', labelId: 'Beranda', route: 'home' },
  { labelEn: 'About', labelId: 'Tentang', route: 'about' },
  { labelEn: 'Expertise', labelId: 'Keahlian', route: 'expertise' },
  { labelEn: 'Projects', labelId: 'Proyek', route: 'projects' },
  { labelEn: 'Experience', labelId: 'Pengalaman', route: 'experience' },
  { labelEn: 'Insights', labelId: 'Wawasan', route: 'insights' },
  { labelEn: 'Contact', labelId: 'Kontak', route: 'contact' },
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
  const { lang, setLang, t } = useLanguage();

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
          className={`mx-auto transition-all duration-500 flex items-center justify-between gap-2 sm:gap-4 ${
            isScrolled
              ? 'max-w-6xl rounded-2xl sm:rounded-full bg-[#FAF8F5]/92 backdrop-blur-xl border border-[#E4E0D8] shadow-[0_16px_40px_-14px_rgba(30,32,34,0.16)] px-3.5 sm:px-6 py-2.5'
              : isDarkTop
              ? 'max-w-7xl px-3.5 sm:px-8 py-3.5 sm:py-5 bg-gradient-to-b from-[#14171A]/75 via-[#14171A]/35 to-transparent border-b border-white/10'
              : 'max-w-7xl px-3.5 sm:px-8 py-3 sm:py-4 bg-[#F5F3EE]/90 backdrop-blur-md border-b border-[#E4E0D8]'
          }`}
        >
          {/* -------------------------------------------------------------------
              LEFT: CLEAN EXECUTIVE EDITORIAL WORDMARK
              ------------------------------------------------------------------- */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="inline-flex items-baseline gap-1.5 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B49A70] rounded-lg text-left whitespace-nowrap shrink-0 py-1"
          >
            <span
              className={`font-sans text-[15px] sm:text-base font-bold tracking-tight transition-colors ${
                isDarkTop
                  ? 'text-white group-hover:text-[#D5C3A5]'
                  : 'text-[#1E2022] group-hover:text-[#6E7C69]'
              }`}
            >
              Bangkit Surya
            </span>
            <span
              className={`hidden xl:inline font-serif italic text-[15px] sm:text-base font-normal transition-colors ${
                isDarkTop
                  ? 'text-[#D5C3A5] group-hover:text-white'
                  : 'text-[#9E7B62] group-hover:text-[#6E7C69]'
              }`}
            >
              Wijaya
            </span>
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
                      <span>{lang === 'id' ? item.labelId : item.labelEn}</span>
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
                              {t('Experience Dossier', 'Rekam Pengalaman')}
                            </span>
                            <span className="text-[10px] font-mono text-[#6E7C69] font-semibold">
                              {t('3 Tracks', '3 Jalur')}
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
                                    {t('Working Experience', 'Pengalaman Kerja')}
                                  </span>
                                  <span className="font-mono text-[10px] text-[#B49A70] font-semibold">
                                    {t('4 Roles', '4 Peran')}
                                  </span>
                                </div>
                                <span className="text-[11px] text-[#605E59] block truncate">
                                  {t('HR Lead, Project Analyst & Ops', 'HR Lead, Project Analyst & Ops')}
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
                                    {t('Organizational Leadership', 'Kepemimpinan Organisasi')}
                                  </span>
                                  <span className="font-mono text-[10px] text-[#B49A70] font-semibold">
                                    {t('7 Roles', '7 Amanah')}
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
                                    {t('Project & Systems', 'Proyek & Sistem')}
                                  </span>
                                  <span className="font-mono text-[10px] text-[#6E7C69] font-semibold">
                                    {t('7 Projects', '7 Proyek')}
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
                                <span>{t('CreativeStyle Archive', 'Arsip Foto & Dokumentasi')}</span>
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
                  <span>{lang === 'id' ? item.labelId : item.labelEn}</span>
                </button>
              );
            })}
          </nav>

          {/* -------------------------------------------------------------------
              RIGHT: LANGUAGE TOGGLE + VISUAL ARCHIVE SHORTCUT + EXECUTIVE RESUME CTA
              ------------------------------------------------------------------- */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* Compact EN / ID Language Switcher */}
            <div
              role="group"
              aria-label="Language Switcher"
              className={`inline-flex items-center p-0.5 rounded-full border text-[10px] font-mono font-bold transition-colors ${
                isDarkTop
                  ? 'bg-white/[0.07] border-white/20 text-[#D1CCC5]'
                  : 'bg-[#EDE8DF]/80 border-[#E0D9CE] text-[#605E59]'
              }`}
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded-full transition-all cursor-pointer ${
                  lang === 'en'
                    ? isDarkTop
                      ? 'bg-white text-[#14171A] shadow-xs'
                      : 'bg-[#1E2022] text-white shadow-xs'
                    : 'hover:text-[#B49A70]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2 py-1 rounded-full transition-all cursor-pointer ${
                  lang === 'id'
                    ? isDarkTop
                      ? 'bg-white text-[#14171A] shadow-xs'
                      : 'bg-[#1E2022] text-white shadow-xs'
                    : 'hover:text-[#B49A70]'
                }`}
              >
                ID
              </button>
            </div>

            {/* Visual Archive Icon Shortcut */}
            <button
              onClick={() => handleLinkClick('archive')}
              title={t('CreativeStyle Visual Archive', 'Arsip Visual & Dokumentasi')}
              aria-label={t('Open CreativeStyle Visual Archive', 'Buka Arsip Visual')}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer active:scale-95 ${
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
              className={`group inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer active:scale-95 border ${
                isDarkTop
                  ? 'bg-white text-[#14171A] hover:bg-[#B49A70] hover:text-white border-white shadow-lg'
                  : 'bg-[#1E2022] text-[#F5F3EE] hover:bg-[#6E7C69] border-[#1E2022] hover:border-[#6E7C69] shadow-sm'
              }`}
            >
              <span className="relative w-7 h-7 rounded-full overflow-hidden border border-[#B49A70]/60 shrink-0 bg-[#E7E0D6]">
                <img
                  src={IMAGES.suryaOriginal}
                  alt="Bangkit Surya Wijaya"
                  className="w-full h-full object-cover object-[center_18%] scale-125"
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
          <div className="flex items-center gap-1 sm:gap-1.5 lg:hidden shrink-0">
            <div
              role="group"
              aria-label="Mobile Language Switcher"
              className={`inline-flex items-center p-0.5 rounded-full border text-[10px] font-mono font-bold ${
                isDarkTop
                  ? 'bg-white/10 border-white/20 text-[#D1CCC5]'
                  : 'bg-white border-[#E4E0D8] text-[#605E59]'
              }`}
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-1.5 sm:px-2 py-1 rounded-full cursor-pointer ${
                  lang === 'en' ? 'bg-[#B49A70] text-[#14171A]' : ''
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-1.5 sm:px-2 py-1 rounded-full cursor-pointer ${
                  lang === 'id' ? 'bg-[#B49A70] text-[#14171A]' : ''
                }`}
              >
                ID
              </button>
            </div>
            <button
              onClick={onOpenResume}
              className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full border transition-colors cursor-pointer min-h-[34px] sm:min-h-[38px] ${
                isDarkTop
                  ? 'text-[#14171A] bg-white border-white'
                  : 'text-white bg-[#1E2022] border-[#1E2022]'
              }`}
            >
              <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B49A70]" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-colors cursor-pointer ${
                isDarkTop
                  ? 'text-white bg-white/10 border-white/20 hover:bg-white/20'
                  : 'text-[#1E2022] bg-white border-[#E4E0D8] hover:border-[#1E2022]'
              }`}
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
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
                            {lang === 'id' ? item.labelId : item.labelEn}
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
                            {t('Working Experience — 4 Corporate Roles', 'Pengalaman Kerja — 4 Peran Korporat')}
                          </button>
                          <button
                            onClick={() => handleLinkClick('experience', 'organizational')}
                            className="text-xs font-medium text-[#605E59] hover:text-[#1E2022] block py-1 cursor-pointer text-left"
                          >
                            {t('Organizational Leadership — 7 Mandates', 'Kepemimpinan Organisasi — 7 Amanah')}
                          </button>
                          <button
                            onClick={() => handleLinkClick('experience', 'project')}
                            className="text-xs font-medium text-[#605E59] hover:text-[#1E2022] block py-1 cursor-pointer text-left"
                          >
                            {t('Project & Systems — 7 Initiatives', 'Proyek & Sistem — 7 Inisiatif')}
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
                        {lang === 'id' ? item.labelId : item.labelEn}
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
                      {t('CreativeStyle Visual Archive', 'Arsip Visual & Dokumentasi')}
                    </span>
                    <span className="text-[11px] font-mono text-[#9E7B62]">
                      {t('Albums · Events · Leadership', 'Album · Acara · Kepemimpinan')}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#B49A70]" />
              </button>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E7E0D6] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#605E59]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t('Available for People Ops & HR Systems Impact', 'Siap Berkontribusi di People Ops & Sistem HR')}</span>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3.5 bg-[#1E2022] text-white text-xs font-semibold tracking-wider uppercase rounded-full flex items-center justify-center gap-2 shadow-sm hover:bg-[#6E7C69] transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#B49A70]" />
                <span>{t('Download Executive Resume', 'Unduh CV Eksekutif')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
