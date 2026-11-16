import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, FileText } from 'lucide-react';
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
  onNavigate,
  onOpenResume,
  onScrollToNext,
}) => {
  const { t } = useLanguage();
  return (
    <section className="relative w-full min-h-[94vh] lg:min-h-screen bg-[#14171A] text-[#F3EFEA] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-10 select-none">
      {/* Background Ambient Glows & Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central Radial Spotlight behind Bangkit */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[450px] sm:h-[600px] rounded-full bg-gradient-to-b from-[#B49A70]/20 via-[#6E7C69]/15 to-transparent blur-3xl opacity-80" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Top edge vignette */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      {/* =========================================================================
          1. TOP METADATA HEADER BAR (Gambar 2 Top Kicker)
          ========================================================================= */}
      <ScrollReveal
        immediateOnMount
        variant="subtle"
        delay={0.04}
        className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#A7A69F]"
      >
        <div className="space-y-0.5">
          <span className="text-[#B49A70] font-bold block">
            {t('PEOPLE OPERATIONS & HR SYSTEMS SPECIALIST', 'SPESIALIS PEOPLE OPERATIONS & SISTEM HR')}
          </span>
          <span className="text-[#A7A69F]/80 text-[11px] block">
            {t('MANAGING 110+ WORKFORCE | IN-HOUSE HR TECH (PMS, ATS, PAYROLL, ANALYTICS)', 'MENGELOLA 110+ KARYAWAN | HR TECH INTERNAL (PMS, ATS, PAYROLL, ANALITIK)')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#F3EFEA] font-semibold text-[11px] sm:text-xs">
            {t('AVAILABLE FOR STRATEGIC IMPACT', 'SIAP UNTUK DAMPAK STRATEGIS')}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#B49A70] fill-[#B49A70] animate-pulse" />
        </div>
      </ScrollReveal>

      {/* =========================================================================
          2. MAIN STAGE: GIGANTIC "PORTFOLIO" + BANGKIT CUTOUT + LEFT & RIGHT INFO
          ========================================================================= */}
      <div className="relative z-10 flex-1 flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto">
        {/* 2A. GIGANTIC BACKGROUND TYPOGRAPHY: "PORTFOLIO" (Gambar 2 Concept) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <ScrollReveal immediateOnMount variant="media" duration={1.15} scale={0.96} y={10} blur={8}>
            <h1
              className="font-sans font-black tracking-tighter uppercase text-center leading-none select-none text-[#B49A70] opacity-85 scale-y-110 sm:scale-y-125"
              style={{
                fontSize: 'clamp(5.5rem, 18vw, 17rem)',
                letterSpacing: '-0.04em',
                textShadow: '0 10px 40px rgba(0,0,0,0.8), 0 0 80px rgba(180, 154, 112, 0.25)',
                filter: 'drop-shadow(0 4px 20px rgba(180, 154, 112, 0.18))',
              }}
            >
              PORTFOLIO
            </h1>
          </ScrollReveal>
        </div>

        {/* 2B. CENTER CUTOUT SUBJECT: BANGKIT SURYA (Gambar 3 - Background Removed) */}
        <div className="absolute inset-x-0 bottom-0 top-12 sm:top-6 flex items-end justify-center pointer-events-none z-10">
          <ScrollReveal
            immediateOnMount
            variant="media"
            duration={1.08}
            delay={0.12}
            y={18}
            scale={0.98}
            blur={6}
            className="relative w-[320px] sm:w-[460px] md:w-[520px] lg:w-[580px] xl:w-[620px] h-[520px] sm:h-[620px] lg:h-[720px] flex items-end justify-center"
          >
            {/* Soft Ambient Rim Light behind cutout */}
            <div className="absolute inset-0 bg-radial from-[#AF8C72]/25 via-transparent to-transparent blur-2xl rounded-full scale-90 -translate-y-10" />

            <img
              src={IMAGES.suryaHeroCutout}
              alt="Bangkit Surya Wijaya — Human Capital Specialist & Digital Strategist"
              className="w-full h-full object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
              loading="eager"
            />

            {/* Bottom Seamless Fade into Page Background */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#14171A] via-[#14171A]/70 to-transparent" />
          </ScrollReveal>
        </div>

        {/* 2C. FOREGROUND GRID: LEFT BIO & RIGHT STATS */}
        <div className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4 pt-8">
          {/* LEFT COLUMN: Hello, I'm + BANGKIT SURYA + Short Narrative + CTAs */}
          <div className="lg:col-span-5 text-left space-y-4 max-w-md sm:max-w-lg">
            {/* Script "Hello, I'm" */}
            <ScrollReveal immediateOnMount variant="editorial" delay={0.1} duration={0.85}>
              <div className="font-serif italic text-3xl sm:text-4xl text-[#E8DFD4] font-normal tracking-wide flex items-center gap-2">
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
            <ScrollReveal immediateOnMount variant="subtle" delay={0.26} duration={0.8} className="pt-1">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B49A70] block">
                {t('PEOPLE OPERATIONS & HR SYSTEMS SPECIALIST', 'SPESIALIS PEOPLE OPERATIONS & SISTEM HR')}
              </span>
              <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#A7A69F] block">
                {t(
                  'MANAGING 110+ WORKFORCE & BUILDING IN-HOUSE HR TECH (PMS, ATS, PAYROLL, ANALYTICS)',
                  'MENGELOLA 110+ KARYAWAN & MEMBANGUN HR TECH INTERNAL (PMS, ATS, PAYROLL, ANALITIK)'
                )}
              </span>
            </ScrollReveal>

            {/* Narrative Summary */}
            <ScrollReveal immediateOnMount variant="editorial" delay={0.33} duration={0.85}>
              <p className="text-xs sm:text-sm text-[#D1CCC5] font-light leading-relaxed max-w-sm pt-1">
                {t(
                  'People Operations & HR Systems Specialist managing 110+ personnel end-to-end while engineering in-house HR tech (PMS, ATS, Payroll, Analytics) for measurable ROI.',
                  'Spesialis People Operations & Sistem HR yang mengelola 110+ karyawan secara menyeluruh sekaligus merancang HR tech internal (PMS, ATS, Payroll, Analitik) demi efisiensi terukur.'
                )}
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal immediateOnMount variant="subtle" delay={0.4} duration={0.8} className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onScrollToNext}
                className="px-6 py-3 bg-[#B49A70] hover:bg-[#A3885E] text-[#14171A] font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-lg active:scale-95 flex items-center gap-2"
              >
                <span>{t('Explore My Work', 'Lihat Karya Saya')}</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#14171A]" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 border border-white/20 hover:border-white text-white hover:bg-white/10 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer backdrop-blur-sm flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-[#B49A70]" />
                <span>{t('Download CV', 'Unduh CV')}</span>
              </button>
            </ScrollReveal>
          </div>

          {/* EMPTY CENTER COLUMN for Cutout Subject Visibility on Desktop */}
          <div className="hidden lg:block lg:col-span-3 pointer-events-none" />

          {/* RIGHT COLUMN: Badge & Stacked Statistics (Gambar 2 Concept) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end space-y-6">
            {/* Circular / Pill Accent Quote Badge */}
            <ScrollReveal immediateOnMount variant="card" delay={0.2} duration={0.85}>
              <div className="max-w-xs p-4 rounded-2xl bg-white/[0.04] border border-[#B49A70]/25 backdrop-blur-md text-left lg:text-right space-y-1 shadow-xl">
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

            {/* Stacked Numerical Stats (Gambar 2 Right Column) */}
            <div className="space-y-4 w-full sm:w-auto">
              {/* Stat 1 */}
              <ScrollReveal immediateOnMount variant="subtle" delay={0.26} duration={0.78}>
                <div className="flex items-baseline lg:justify-end gap-3 border-b border-white/10 pb-3">
                  <span className="font-sans font-black text-3xl sm:text-4xl text-[#B49A70] leading-none">
                    2<span className="text-[#6E7C69]">+</span>
                  </span>
                  <div className="text-left font-mono">
                    <span className="text-[11px] text-white font-bold block uppercase tracking-wider">
                      {t('Years Experience', 'Tahun Pengalaman')}
                    </span>
                    <span className="text-[9px] text-[#A7A69F] block">
                      {t('Corporate HR & Leadership Track', 'HR Korporat & Kepemimpinan')}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Stat 2 */}
              <ScrollReveal immediateOnMount variant="subtle" delay={0.33} duration={0.78}>
                <div className="flex items-baseline lg:justify-end gap-3 border-b border-white/10 pb-3">
                  <span className="font-sans font-black text-3xl sm:text-4xl text-[#B49A70] leading-none">
                    110<span className="text-[#6E7C69]">+</span>
                  </span>
                  <div className="text-left font-mono">
                    <span className="text-[11px] text-white font-bold block uppercase tracking-wider">
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
                <div className="flex items-baseline lg:justify-end gap-3 border-b border-white/10 pb-3">
                  <span className="font-sans font-black text-3xl sm:text-4xl text-[#B49A70] leading-none">
                    04
                  </span>
                  <div className="text-left font-mono">
                    <span className="text-[11px] text-white font-bold block uppercase tracking-wider">
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
                <div className="flex items-baseline lg:justify-end gap-3">
                  <span className="font-sans font-black text-3xl sm:text-4xl text-[#6E7C69] leading-none">
                    100<span className="text-[#B49A70]">%</span>
                  </span>
                  <div className="text-left font-mono">
                    <span className="text-[11px] text-white font-bold block uppercase tracking-wider">
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
        className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full flex items-center justify-between pt-4 border-t border-white/10"
      >
        <div className="flex items-center gap-2 text-[11px] font-mono text-[#A7A69F]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
