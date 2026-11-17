import React from 'react';
import { ArrowDown, Sparkles, FileText } from 'lucide-react';
import { IMAGES } from '../data/portfolioData';
import { AppRoute } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

interface PosterHeroSectionProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
  onOpenResume: () => void;
  onScrollToNext: () => void;
}

export const PosterHeroSection: React.FC<PosterHeroSectionProps> = ({
  onOpenResume,
  onScrollToNext,
}) => {
  const { t } = useLanguage();
  return (
    <section className="relative w-full min-h-[auto] lg:min-h-screen bg-[#14171A] text-[#F3EFEA] overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8 select-none">
      {/* Background Ambient Glows & Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central Radial Spotlight behind Bangkit */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[800px] h-[360px] sm:h-[600px] rounded-full bg-gradient-to-b from-[#B49A70]/20 via-[#6E7C69]/15 to-transparent blur-3xl opacity-80" />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Top edge vignette */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      {/* =========================================================================
          1. TOP METADATA HEADER BAR
          ========================================================================= */}
      <ScrollReveal
        immediateOnMount
        variant="subtle"
        delay={0.04}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono uppercase tracking-widest text-[#A7A69F]"
      >
        <div className="space-y-0.5">
          <span className="text-[#B49A70] font-bold block text-[11px] sm:text-xs">
            {t('PEOPLE OPERATIONS & HR SYSTEMS SPECIALIST', 'SPESIALIS PEOPLE OPERATIONS & SISTEM HR')}
          </span>
          <span className="text-[#A7A69F]/85 text-[10px] sm:text-[11px] block leading-snug">
            {t(
              'MANAGING 110+ WORKFORCE | IN-HOUSE HR TECH (PMS, ATS, PAYROLL, ANALYTICS)',
              'MENGELOLA 110+ KARYAWAN | HR TECH INTERNAL (PMS, ATS, PAYROLL, ANALITIK)'
            )}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
          <span className="text-[#F3EFEA] font-semibold text-[10.5px] sm:text-xs">
            {t('AVAILABLE FOR STRATEGIC IMPACT', 'SIAP UNTUK DAMPAK STRATEGIS')}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#B49A70] fill-[#B49A70] animate-pulse shrink-0" />
        </div>
      </ScrollReveal>

      {/* =========================================================================
          2. MAIN STAGE: GIGANTIC "PORTFOLIO" + BANGKIT CUTOUT + LEFT & RIGHT INFO
          ========================================================================= */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto pt-4 lg:pt-0">
        {/* 2A. DESKTOP BACKGROUND TYPOGRAPHY & PORTRAIT (Unobstructed center on lg+) */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none overflow-hidden">
          <ScrollReveal immediateOnMount variant="media" duration={1.15} scale={0.96} y={10} blur={8}>
            <h1
              className="font-sans font-black tracking-tighter uppercase text-center leading-none select-none text-[#B49A70] opacity-85 scale-y-125"
              style={{
                fontSize: 'clamp(7rem, 18vw, 17rem)',
                letterSpacing: '-0.04em',
                textShadow: '0 10px 40px rgba(0,0,0,0.8), 0 0 80px rgba(180, 154, 112, 0.25)',
                filter: 'drop-shadow(0 4px 20px rgba(180, 154, 112, 0.18))',
              }}
            >
              PORTFOLIO
            </h1>
          </ScrollReveal>
        </div>

        <div className="hidden lg:flex absolute inset-x-0 bottom-0 top-6 items-end justify-center pointer-events-none z-10">
          <ScrollReveal
            immediateOnMount
            variant="media"
            duration={1.08}
            delay={0.12}
            y={18}
            scale={0.98}
            blur={6}
            className="relative w-[560px] xl:w-[620px] h-[680px] xl:h-[720px] flex items-end justify-center"
          >
            <div className="absolute inset-0 bg-radial from-[#AF8C72]/25 via-transparent to-transparent blur-2xl rounded-full scale-90 -translate-y-10" />
            <img
              src={IMAGES.suryaHeroCutout}
              alt="Bangkit Surya Wijaya — People Operations & HR Systems Specialist"
              className="w-full h-full object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#14171A] via-[#14171A]/70 to-transparent" />
          </ScrollReveal>
        </div>

        {/* 2B. MOBILE / TABLET DEDICATED UNOBSTRUCTED PORTRAIT STAGE (< lg) */}
        <div className="relative lg:hidden w-full h-[300px] sm:h-[380px] flex items-end justify-center overflow-hidden mt-2 mb-4 pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              aria-hidden="true"
              className="font-sans font-black tracking-tighter uppercase text-center leading-none select-none text-[#B49A70]/75 scale-y-115"
              style={{
                fontSize: 'clamp(3.6rem, 19vw, 8.5rem)',
                letterSpacing: '-0.04em',
                textShadow: '0 8px 30px rgba(0,0,0,0.75)',
              }}
            >
              PORTFOLIO
            </span>
          </div>

          <ScrollReveal
            immediateOnMount
            variant="media"
            duration={0.95}
            delay={0.08}
            y={14}
            className="relative z-10 w-[260px] sm:w-[340px] h-[290px] sm:h-[370px] flex items-end justify-center"
          >
            <div className="absolute inset-0 bg-radial from-[#AF8C72]/25 via-transparent to-transparent blur-2xl rounded-full scale-90" />
            <img
              src={IMAGES.suryaHeroCutout}
              alt="Bangkit Surya Wijaya — People Operations & HR Systems Specialist"
              className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)]"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#14171A] via-[#14171A]/75 to-transparent" />
          </ScrollReveal>
        </div>

        {/* 2C. FOREGROUND GRID: LEFT BIO & RIGHT STATS */}
        <div className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-end pb-3 pt-2 lg:pt-6">
          {/* LEFT COLUMN: Hello, I'm + BANGKIT SURYA WIJAYA + Short Narrative + CTAs */}
          <div className="lg:col-span-5 text-left space-y-3.5 sm:space-y-4 w-full max-w-xl lg:max-w-lg">
            {/* Script "Hello, I'm" */}
            <ScrollReveal immediateOnMount variant="editorial" delay={0.1} duration={0.85}>
              <div className="font-serif italic text-2xl sm:text-4xl text-[#E8DFD4] font-normal tracking-wide flex items-center gap-2">
                <span>{t("Hello, I'm", 'Halo, Saya')}</span>
                <span className="w-8 h-[1px] bg-[#B49A70]/80 inline-block" />
              </div>
            </ScrollReveal>

            {/* Big Condensed Name */}
            <ScrollReveal immediateOnMount variant="editorial" delay={0.18} duration={0.9} className="space-y-0.5">
              <h2 className="font-sans font-black text-4xl sm:text-5xl xl:text-6xl text-white tracking-tight uppercase leading-[0.92] drop-shadow-lg">
                BANGKIT
              </h2>
              <h2 className="font-sans font-black text-4xl sm:text-5xl xl:text-6xl text-white tracking-tight uppercase leading-[0.92] drop-shadow-lg">
                SURYA WIJAYA
              </h2>
            </ScrollReveal>

            {/* Role Subtitle in Champagne Tone */}
            <ScrollReveal immediateOnMount variant="subtle" delay={0.26} duration={0.8} className="pt-0.5 space-y-0.5">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B49A70] block">
                {t('PEOPLE OPERATIONS & HR SYSTEMS SPECIALIST', 'SPESIALIS PEOPLE OPERATIONS & SISTEM HR')}
              </span>
              <span className="font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-[#A7A69F] block leading-relaxed">
                {t(
                  'MANAGING 110+ WORKFORCE & BUILDING IN-HOUSE HR TECH (PMS, ATS, PAYROLL, ANALYTICS)',
                  'MENGELOLA 110+ KARYAWAN & MEMBANGUN HR TECH INTERNAL (PMS, ATS, PAYROLL, ANALITIK)'
                )}
              </span>
            </ScrollReveal>

            {/* Narrative Summary */}
            <ScrollReveal immediateOnMount variant="editorial" delay={0.33} duration={0.85}>
              <p className="text-xs sm:text-sm text-[#D1CCC5] font-light leading-relaxed max-w-md pt-1">
                {t(
                  'People Operations & HR Systems Specialist managing 110+ personnel end-to-end while engineering in-house HR tech (PMS, ATS, Payroll, Analytics) for measurable ROI.',
                  'Spesialis People Operations & Sistem HR yang mengelola 110+ karyawan secara menyeluruh sekaligus merancang HR tech internal (PMS, ATS, Payroll, Analitik) demi efisiensi terukur.'
                )}
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal immediateOnMount variant="subtle" delay={0.4} duration={0.8} className="pt-2 flex flex-col xs:flex-row sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <button
                onClick={onScrollToNext}
                className="px-6 py-3.5 bg-[#B49A70] hover:bg-[#A3885E] text-[#14171A] font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{t('Explore My Work', 'Lihat Karya Saya')}</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#14171A]" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 border border-white/25 hover:border-white text-white hover:bg-white/10 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-[#B49A70]" />
                <span>{t('Download CV', 'Unduh CV')}</span>
              </button>
            </ScrollReveal>
          </div>

          {/* EMPTY CENTER COLUMN for Cutout Subject Visibility on Desktop */}
          <div className="hidden lg:block lg:col-span-3 pointer-events-none" />

          {/* RIGHT COLUMN: Badge & Balanced Statistics (2x2 Grid on Mobile, Stack on Desktop) */}
          <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end space-y-4 sm:space-y-6 w-full">
            {/* Core Philosophy Badge */}
            <ScrollReveal immediateOnMount variant="card" delay={0.2} duration={0.85} className="w-full lg:max-w-xs">
              <div className="p-4 rounded-2xl bg-white/[0.05] border border-[#B49A70]/25 backdrop-blur-md text-left lg:text-right space-y-1 shadow-xl">
                <div className="flex items-center lg:justify-end gap-1.5 text-[#B49A70]">
                  <Sparkles className="w-3.5 h-3.5 fill-[#B49A70]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
                    {t('Core Philosophy', 'Filosofi Inti')}
                  </span>
                </div>
                <p className="text-xs text-[#E8DFD4] font-light leading-relaxed">
                  {t(
                    '"Turning HR strategy into scalable human & digital systems."',
                    '"Mengubah strategi HR menjadi sistem manusiawi & digital yang terukur."'
                  )}
                </p>
              </div>
            </ScrollReveal>

            {/* Stacked Numerical Stats on Desktop / Clean 2x2 Cards on Mobile */}
            <div className="grid grid-cols-2 lg:flex lg:flex-col gap-3 lg:gap-4 w-full lg:w-auto">
              {/* Stat 1 */}
              <ScrollReveal immediateOnMount variant="subtle" delay={0.26} duration={0.78}>
                <div className="h-full p-3.5 lg:p-0 lg:pb-3 rounded-2xl lg:rounded-none bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 lg:border-b lg:border-white/10 flex flex-col lg:flex-row lg:items-baseline lg:justify-end gap-1.5 lg:gap-3">
                  <span className="font-sans font-black text-2xl sm:text-4xl text-[#B49A70] leading-none">
                    2<span className="text-[#6E7C69]">+</span>
                  </span>
                  <div className="text-left font-mono">
                    <span className="text-[10.5px] sm:text-[11px] text-white font-bold block uppercase tracking-wider">
                      {t('Years Experience', 'Tahun Pengalaman')}
                    </span>
                    <span className="text-[9px] text-[#A7A69F] block">
                      {t('Corporate HR & Leadership', 'HR Korporat & Kepemimpinan')}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Stat 2 */}
              <ScrollReveal immediateOnMount variant="subtle" delay={0.33} duration={0.78}>
                <div className="h-full p-3.5 lg:p-0 lg:pb-3 rounded-2xl lg:rounded-none bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 lg:border-b lg:border-white/10 flex flex-col lg:flex-row lg:items-baseline lg:justify-end gap-1.5 lg:gap-3">
                  <span className="font-sans font-black text-2xl sm:text-4xl text-[#B49A70] leading-none">
                    110<span className="text-[#6E7C69]">+</span>
                  </span>
                  <div className="text-left font-mono">
                    <span className="text-[10.5px] sm:text-[11px] text-white font-bold block uppercase tracking-wider">
                      {t('Personnel Managed', 'Karyawan Dikelola')}
                    </span>
                    <span className="text-[9px] text-[#A7A69F] block">
                      {t('End-to-End HR Operations', 'Operasional HR End-to-End')}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Stat 3 */}
              <ScrollReveal immediateOnMount variant="subtle" delay={0.4} duration={0.78}>
                <div className="h-full p-3.5 lg:p-0 lg:pb-3 rounded-2xl lg:rounded-none bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 lg:border-b lg:border-white/10 flex flex-col lg:flex-row lg:items-baseline lg:justify-end gap-1.5 lg:gap-3">
                  <span className="font-sans font-black text-2xl sm:text-4xl text-[#B49A70] leading-none">
                    04
                  </span>
                  <div className="text-left font-mono">
                    <span className="text-[10.5px] sm:text-[11px] text-white font-bold block uppercase tracking-wider">
                      {t('In-House HR Systems', 'Sistem HR Internal')}
                    </span>
                    <span className="text-[9px] text-[#A7A69F] block">
                      Pervia, Matchify, Slipr, Zeno
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Stat 4 */}
              <ScrollReveal immediateOnMount variant="subtle" delay={0.47} duration={0.78}>
                <div className="h-full p-3.5 lg:p-0 rounded-2xl lg:rounded-none bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-0 flex flex-col lg:flex-row lg:items-baseline lg:justify-end gap-1.5 lg:gap-3">
                  <span className="font-sans font-black text-2xl sm:text-4xl text-[#6E7C69] leading-none">
                    100<span className="text-[#B49A70]">%</span>
                  </span>
                  <div className="text-left font-mono">
                    <span className="text-[10.5px] sm:text-[11px] text-white font-bold block uppercase tracking-wider">
                      {t('Compliance & Delivery', 'Kepatuhan & Eksekusi')}
                    </span>
                    <span className="text-[9px] text-[#A7A69F] block">
                      {t('BPJS · TER PPh 21 · Live Ops', 'BPJS · TER PPh 21 · Ops Lapangan')}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. BOTTOM TRANSITION BAR & SCROLL DOWN PROMPT
          ========================================================================= */}
      <ScrollReveal
        immediateOnMount
        variant="subtle"
        delay={0.48}
        duration={0.8}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-white/10 mt-4"
      >
        <div className="flex items-center gap-2 text-[10.5px] sm:text-[11px] font-mono text-[#A7A69F]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>
            {t(
              'Strategic Mind · Human Perspective · Digital Approach',
              'Pikiran Strategis · Perspektif Manusiawi · Pendekatan Digital'
            )}
          </span>
        </div>

        <button
          onClick={onScrollToNext}
          className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#E8DFD4] hover:text-[#B49A70] transition-colors cursor-pointer group"
        >
          <span>{t('Scroll To Explore Systems', 'Gulir untuk Jelajahi Sistem')}</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#B49A70] group-hover:translate-y-1 transition-transform" />
        </button>
      </ScrollReveal>
    </section>
  );
};
