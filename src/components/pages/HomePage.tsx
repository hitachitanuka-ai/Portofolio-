import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronLeft,
  ChevronRight, 
  Sparkles, 
  Users, 
  Cpu, 
  TrendingUp, 
  Layers, 
  Heart,
  BarChart3,
  ExternalLink,
  ShieldCheck,
  Terminal,
  Quote
} from 'lucide-react';
import { IMAGES } from '../../data/portfolioData';
import { getLocalizedExpertise, getLocalizedTestimonials } from '../../data/portfolioLocalized';
import { AppRoute } from '../../types';
import { PosterHeroSection } from '../PosterHeroSection';
import { InteractiveCaseStudiesShowcase } from '../InteractiveCaseStudiesShowcase';
import { ProfessionalJourneyDashboard } from '../ProfessionalJourneyDashboard';
import { ScrollReveal } from '../ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

interface HomePageProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
  onOpenResume: () => void;
}

const FEATURED_APPS = [
  {
    id: 'pervia-platform',
    title: 'Pervia PMS',
    badge: 'Enterprise Performance',
    tagline: 'Continuous KPI & 9-Box Grid',
    taglineId: 'KPI Berkelanjutan & Matriks 9-Box',
    image: IMAGES.perviaBanner,
    liveUrl: 'https://pervia.netlify.app/login',
    category: 'Performance Suite',
    status: 'Live Platform',
  },
  {
    id: 'matchify-platform',
    title: 'Matchify RMS',
    badge: 'Recruitment Intelligence',
    tagline: 'Automated Interview & ATS',
    taglineId: 'Jadwal Wawancara Otomatis & ATS',
    image: IMAGES.matchifyBanner,
    liveUrl: 'https://script.google.com/macros/s/AKfycbygYq3clewdZdfxfOnQox89ep8N9q4jFUIjnJpWUQs2FF4gyKR23msY_3XBzozlnAU/exec',
    category: 'Talent Acquisition',
    status: 'Active System',
  },
  {
    id: 'slipr-platform',
    title: 'Slipr Payroll',
    badge: 'HR FinTech Automation',
    tagline: 'TER PPh 21 & Encrypted Payslips',
    taglineId: 'TER PPh 21 & Slip Gaji Terenkripsi',
    image: IMAGES.sliprBanner,
    liveUrl: 'https://script.google.com/macros/s/AKfycbyoq-0LSWK4t6xvg5-OgVx4Eki8GQXEO4x_NA6gEjgpImQEGA0vvGFt4hz0MGOWnvfO3Q/exec',
    category: 'Payroll & HRIS',
    status: 'Active System',
  },
  {
    id: 'zeno-platform',
    title: 'Zeno Assessment',
    badge: 'Psychometrics Engine',
    tagline: 'MBTI & DISC Profiler',
    taglineId: 'Pemetaan Profil MBTI & DISC',
    image: IMAGES.zenoBanner,
    liveUrl: 'https://script.google.com/macros/s/AKfycbzhFD87PJRrOvkU8GMA01CgfTRieF-Qisi9tvJTADvqKXvl4AO4WaHA94z4z7NVRCkd/exec',
    category: 'Talent Diagnostics',
    status: 'Active System',
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenResume }) => {
  const { lang, t } = useLanguage();
  const [activeAppIdx, setActiveAppIdx] = useState(0);
  const [isHoveringAppCard, setIsHoveringAppCard] = useState(false);

  useEffect(() => {
    if (isHoveringAppCard) return;
    const timer = setInterval(() => {
      setActiveAppIdx((prev) => (prev + 1) % FEATURED_APPS.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [isHoveringAppCard]);

  const activeApp = FEATURED_APPS[activeAppIdx];
  const expertiseList = getLocalizedExpertise(lang);
  const testimonials = getLocalizedTestimonials(lang);

  return (
    <div className="w-full bg-[#F5F3EE] text-[#23272F] overflow-hidden">
      {/* =========================================================================
          SECTION 0 — MASTER EDITORIAL POSTER HERO
          ========================================================================= */}
      <PosterHeroSection
        onNavigate={onNavigate}
        onOpenResume={onOpenResume}
        onScrollToNext={() => {
          const target = document.getElementById('strategic-systems');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* =========================================================================
          SECTION A — FEATURED COMPOSITION
          ========================================================================= */}
      <section id="strategic-systems" className="w-full bg-[#F5F3EE] pt-12 sm:pt-20 pb-20 border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6 sm:mb-8 px-2 sm:px-4">
            <ScrollReveal variant="editorial" delay={0}>
              <span className="font-serif italic text-3xl sm:text-5xl lg:text-6xl text-[#23272F] font-normal tracking-tight block">
                {t('Define Your', 'Rancang')}
              </span>
              <span className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#6E7C69] uppercase leading-none block -mt-1 sm:-mt-2">
                {t('STRATEGY', 'STRATEGI')}
              </span>
            </ScrollReveal>

            <ScrollReveal variant="editorial" delay={0.12} className="text-left sm:text-right">
              <div className="flex items-center sm:justify-end gap-2">
                <span className="font-sans font-medium text-2xl sm:text-4xl lg:text-5xl text-[#23272F] tracking-tight">
                  {t('Lead Your', 'Wujudkan')}
                </span>
                <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-[#B49A70] fill-[#B49A70]" />
              </div>
              <span className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#B49A70] uppercase leading-none block -mt-1 sm:-mt-2">
                {t('IMPACT', 'DAMPAK')}
              </span>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="media" duration={0.95} delay={0.08}>
            <div className="relative w-full rounded-[2.5rem] bg-[#6E7C69] overflow-hidden shadow-xl p-6 sm:p-12 min-h-[580px] lg:min-h-[620px] flex flex-col justify-between">
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-1/4 -right-10 w-96 h-96 rounded-full bg-[#83917E] blur-2xl" />
                <div className="absolute -bottom-10 left-1/3 w-80 h-80 rounded-full bg-[#5E6C5A] blur-3xl" />
              </div>

              <div className="relative lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-8 flex justify-center items-end pointer-events-none z-10 order-2 lg:order-none my-6 lg:my-0">
                <ScrollReveal
                  variant="media"
                  duration={1.05}
                  delay={0.16}
                  className="relative w-64 sm:w-80 lg:w-[370px] h-[340px] sm:h-[420px] lg:h-[540px]"
                >
                  <img
                    src={IMAGES.suryaLoungeExecutive}
                    alt="Bangkit Surya Wijaya"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-3xl lg:rounded-none drop-shadow-2xl"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#6E7C69] via-[#6E7C69]/60 to-transparent hidden lg:block" />
                </ScrollReveal>
              </div>

              <div className="relative z-20 flex flex-col lg:flex-row items-start justify-between gap-6">
                <div className="max-w-md text-white space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-mono tracking-wider uppercase text-white border border-white/25">
                    <Sparkles className="w-3 h-3 text-[#EFE4D6]" />
                    <span>{t('People Ops & HR Systems Specialist', 'Spesialis People Ops & Sistem HR')}</span>
                  </div>

                  <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
                    {t('Where Human Empathy Meets Digital Precision', 'Di Mana Empati Manusia Bertemu Presisi Digital')}
                  </h1>

                  <p className="text-xs sm:text-sm text-[#F3EFEA]/90 font-light leading-relaxed max-w-sm">
                    {t(
                      'Managing 110+ workforce operations and building in-house HR tech suites (PMS, ATS, Payroll, Psychometrics Analytics) for scaling companies.',
                      'Mengelola operasional 110+ karyawan sekaligus membangun rangkaian teknologi HR internal (PMS, ATS, Payroll, Analitik Psikometri) bagi perusahaan bertumbuh.'
                    )}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('projects')}
                      className="px-6 py-3.5 bg-[#1E2022] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer flex items-center gap-3 shadow-lg active:scale-95 group"
                    >
                      <span>{t('Explore My Work', 'Lihat Karya Saya')}</span>
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-6 text-white w-full lg:w-auto">
                  <div className="flex items-center gap-6 text-center">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-[#F3EFEA] uppercase">
                        People & Culture
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-[#F3EFEA] uppercase">
                        {t('Workforce Analytics', 'Analitik SDM')}
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-[#F3EFEA] uppercase">
                        In-House HR Tech
                      </span>
                    </div>
                  </div>

                  <div
                    onMouseEnter={() => setIsHoveringAppCard(true)}
                    onMouseLeave={() => setIsHoveringAppCard(false)}
                    className="w-full sm:w-64 bg-white text-[#23272F] p-4 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-md relative overflow-hidden transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#B49A70] font-bold">
                          {t('Featured Apps', 'Aplikasi Pilihan')}
                        </span>
                        <span className="font-mono text-[9px] text-[#6E7C69] font-bold px-1.5 py-0.2 bg-[#6E7C69]/10 rounded-full">
                          0{activeAppIdx + 1}/0{FEATURED_APPS.length}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveAppIdx((prev) => (prev - 1 + FEATURED_APPS.length) % FEATURED_APPS.length);
                          }}
                          className="w-5 h-5 rounded-full bg-[#F5F3EE] hover:bg-[#23272F] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-[#23272F]"
                          title={t('Previous Application', 'Aplikasi Sebelumnya')}
                          aria-label="Previous app"
                        >
                          <ChevronLeft className="w-3 h-3" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveAppIdx((prev) => (prev + 1) % FEATURED_APPS.length);
                          }}
                          className="w-5 h-5 rounded-full bg-[#F5F3EE] hover:bg-[#23272F] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-[#23272F]"
                          title={t('Next Application', 'Aplikasi Berikutnya')}
                          aria-label="Next app"
                        >
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeApp.id}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="space-y-2.5"
                      >
                        <div
                          onClick={() => onNavigate('project-detail', activeApp.id)}
                          className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#23272F] relative cursor-pointer group/thumb"
                        >
                          <img
                            src={activeApp.image}
                            alt={activeApp.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover/thumb:scale-106 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2 bg-[#23272F]/85 backdrop-blur-md text-white text-[9px] font-mono px-2 py-0.5 rounded-full font-semibold border border-white/10">
                            {activeApp.category}
                          </div>
                          <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <span>{activeApp.status}</span>
                          </div>
                        </div>

                        <div>
                          <strong
                            onClick={() => onNavigate('project-detail', activeApp.id)}
                            className="block font-sans text-sm font-bold text-[#23272F] hover:text-[#6E7C69] transition-colors cursor-pointer leading-tight"
                          >
                            {activeApp.title}
                          </strong>
                          <span className="text-[11px] text-[#5E626B] block font-light leading-snug">
                            {lang === 'id' ? activeApp.taglineId : activeApp.tagline}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 pt-1">
                          <button
                            onClick={() => onNavigate('project-detail', activeApp.id)}
                            className="flex-1 py-1.5 bg-[#23272F] hover:bg-[#6E7C69] text-white rounded-full text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-xs active:scale-95"
                          >
                            <span>{t('Case Study', 'Studi Kasus')}</span>
                            <ArrowUpRight className="w-3 h-3 text-[#B49A70]" />
                          </button>

                          {activeApp.liveUrl && (
                            <a
                              href={activeApp.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-1.5 bg-[#F5F3EE] hover:bg-[#23272F] hover:text-white text-[#23272F] rounded-full border border-[#E7E0D6] transition-colors cursor-pointer flex items-center justify-center"
                              title={t('Launch Live App in New Tab', 'Buka Aplikasi di Tab Baru')}
                            >
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center justify-center gap-1.5 pt-2">
                      {FEATURED_APPS.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveAppIdx(dotIdx);
                          }}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            activeAppIdx === dotIdx ? 'w-4 bg-[#6E7C69]' : 'w-1.5 bg-[#E7E0D6] hover:bg-[#B49A70]'
                          }`}
                          aria-label={`Jump to app ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-20 pt-8 flex items-center justify-between">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#EAE2D8]/95 backdrop-blur-md border border-white/40 shadow-sm text-xs text-[#23272F]">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-[#23272F] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">
                      MN
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#B49A70] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">
                      TP
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#6E7C69] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">
                      HS
                    </div>
                  </div>
                  <span className="font-semibold text-[11px]">
                    {t('Trusted by 110+ Workforce & C-Suite', 'Dipercaya oleh 110+ Karyawan & Direksi')}
                  </span>
                  <Heart className="w-3.5 h-3.5 text-[#B49A70] fill-[#B49A70]" />
                </div>

                <div className="hidden sm:flex items-center gap-3">
                  <button
                    onClick={onOpenResume}
                    className="px-4 py-2 bg-white/20 hover:bg-white text-white hover:text-[#1E2022] backdrop-blur-md rounded-full text-xs font-semibold tracking-wide transition-all border border-white/30"
                  >
                    {t('Download CV ↗', 'Unduh CV ↗')}
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION B — INTRODUCTION
          ========================================================================= */}
      <section className="w-full bg-[#FAF8F5] py-24 border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal variant="subtle" delay={0}>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B49A70] block font-bold">
                  {t('About The Specialist', 'Profil Singkat')}
                </span>
              </ScrollReveal>
              <ScrollReveal variant="editorial" delay={0.08}>
                <h2 className="font-sans font-black text-4xl sm:text-5xl text-[#23272F] tracking-tight leading-tight">
                  {t('More Than a ', 'Lebih Dari Sekadar ')}
                  <br className="hidden sm:inline" />
                  <span className="text-[#6E7C69]">
                    {t('Professional Title', 'Gelar Jabatan')}
                  </span>.
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="editorial" delay={0.16}>
                <p className="text-sm text-[#5E626B] font-light leading-relaxed max-w-md">
                  {t(
                    'A quantitative foundation from IPB University (S.Pt., GPA 3.65) bridging People Operations, Workforce Diagnostics, and custom HR tech engineering.',
                    'Fondasi analitik kuantitatif dari IPB University (S.Pt., IPK 3,65) yang memadukan People Operations, Diagnostik Tenaga Kerja, dan pengembangan sistem HR internal.'
                  )}
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#4A4843] text-sm sm:text-base leading-relaxed font-light">
              <ScrollReveal variant="editorial" delay={0.08}>
                <p className="text-lg text-[#23272F] font-medium leading-relaxed">
                  {t(
                    'In modern business, organizations do not falter due to lack of ambition; they struggle when people strategy, business analysis, and digital tools operate in isolated silos.',
                    'Dalam bisnis modern, organisasi jarang terhambat karena kurang ambisi; hambatan muncul ketika strategi SDM, analisa bisnis, dan perangkat digital berjalan sendiri-sendiri.'
                  )}
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <ScrollReveal variant="card" delay={0.14} className="h-full">
                  <div className="h-full p-6 bg-white rounded-3xl border border-[#E7E0D6] space-y-2 shadow-xs">
                    <span className="font-sans font-bold text-base text-[#23272F] block">
                      {t('The Human Foundation', 'Fondasi Manusia')}
                    </span>
                    <p className="text-xs text-[#5E626B] leading-relaxed">
                      {t(
                        'Managing over 110 personnel end-to-end taught me that sustainable performance starts with role clarity, fair compensation, and authentic psychological safety.',
                        'Mengelola lebih dari 110 karyawan secara menyeluruh membuktikan bahwa kinerja berkelanjutan lahir dari kejelasan peran, kompensasi adil, dan rasa aman psikologis.'
                      )}
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal variant="card" delay={0.24} className="h-full">
                  <div className="h-full p-6 bg-white rounded-3xl border border-[#E7E0D6] space-y-2 shadow-xs">
                    <span className="font-sans font-bold text-base text-[#23272F] block">
                      {t('The Digital Multiplier', 'Pengganda Digital')}
                    </span>
                    <p className="text-xs text-[#5E626B] leading-relaxed">
                      {t(
                        'Instead of relying on manual spreadsheets or costly external subscriptions, I build custom engines (Pervia, Matchify, Slipr, Zeno) that eliminate repetitive bottlenecks.',
                        'Alih-alih bergantung pada spreadsheet manual atau biaya lisensi SaaS tinggi, saya membangun sistem internal (Pervia, Matchify, Slipr, Zeno) yang memangkas hambatan administratif.'
                      )}
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal variant="subtle" delay={0.28} className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#23272F] hover:text-[#6E7C69] transition-colors border-b-2 border-[#23272F] pb-1 cursor-pointer"
                >
                  <span>{t('Read Full Professional Story', 'Baca Kisah & Profil Lengkap')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C — SELECTED EXPERTISE
          ========================================================================= */}
      <section className="w-full bg-[#EDF1EC] py-16 sm:py-20 border-b border-[#DCE4DA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <ScrollReveal variant="editorial" delay={0}>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8F6D54] block font-bold mb-1.5">
                {t('05 Core Capabilities', '05 Kapabilitas Inti')}
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#23272F] tracking-tight">
                {t('Selected', 'Keahlian')}{' '}
                <span className="font-serif italic font-normal text-[#6E7C69]">
                  {t('Expertise', 'Utama')}
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="subtle" delay={0.12} className="self-start md:self-end">
              <button
                onClick={() => onNavigate('expertise')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#DCE4DA] hover:border-[#6E7C69] text-xs font-bold uppercase tracking-wider text-[#23272F] hover:text-[#6E7C69] transition-all cursor-pointer shadow-2xs"
              >
                <span>{t('Explore All 5 Disciplines', 'Eksplorasi 5 Pilar Keahlian')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8F6D54]" />
              </button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertiseList.map((area, areaIdx) => {
              const IconMap: Record<string, React.FC<{ className?: string; strokeWidth?: number }>> = {
                'people-culture': Users,
                'business-analysis': TrendingUp,
                'project-management': Layers,
                'digital-product': Cpu,
                'data-performance': BarChart3,
              };
              const DisciplineIcon = IconMap[area.id] || Layers;

              return (
                <ScrollReveal
                  key={area.id}
                  variant="card"
                  delay={(areaIdx % 3) * 0.08}
                  className="h-full"
                >
                  <div
                    onClick={() => onNavigate('expertise')}
                    className="h-full p-6 bg-white rounded-3xl border border-[#E7E0D6] hover:border-[#6E7C69] transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xs hover:shadow-md"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-[#EFEAE2]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-[#EDF1EC] text-[#6E7C69] group-hover:bg-[#6E7C69] group-hover:text-white flex items-center justify-center transition-colors">
                            <DisciplineIcon className="w-4 h-4" strokeWidth={1.7} />
                          </div>
                          <span className="font-mono text-sm font-bold text-[#6E7C69]">
                            {area.num}
                          </span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#9C978E] group-hover:text-[#6E7C69] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>

                      <div>
                        <h3 className="font-sans font-bold text-xl text-[#23272F] group-hover:text-[#6E7C69] transition-colors">
                          {area.title}
                        </h3>
                        <span className="font-serif italic text-sm text-[#8F6D54] block mt-0.5">
                          {area.headline}
                        </span>
                      </div>

                      <p className="text-xs text-[#5E626B] leading-relaxed font-light line-clamp-2">
                        {area.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#EFEAE2] space-y-1.5">
                      {area.competencies.slice(0, 3).map((comp, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-[#23272F]">
                          <span className="w-1 h-1 rounded-full bg-[#6E7C69] shrink-0" />
                          <span className="truncate font-medium">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}

            <ScrollReveal variant="card" delay={0.16} className="h-full">
              <div className="h-full p-6 bg-[#6E7C69] text-white rounded-3xl flex flex-col justify-between shadow-md border border-[#5D6B58]">
                <div className="space-y-3">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#EFE4D6] block font-bold">
                    {t('The Convergence', 'Titik Temu')}
                  </span>
                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-white leading-tight">
                    {t('Where Strategy Meets', 'Saat Strategi Bertemu')}{' '}
                    <span className="font-serif italic font-normal text-[#EFE4D6]">
                      {t('Software.', 'Perangkat Lunak.')}
                    </span>
                  </h3>
                  <p className="text-xs text-white/85 leading-relaxed font-light">
                    {t(
                      'True operational transformation happens when human domain expertise is augmented by custom digital automation tools.',
                      'Transformasi operasional sejati terjadi ketika keahlian domain manusia diperkuat oleh sistem otomasi digital yang dibangun tepat sasaran.'
                    )}
                  </p>
                </div>

                <div className="pt-5">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full py-3 bg-[#1E2022] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#B49A70] hover:text-[#14171A] transition-colors cursor-pointer"
                  >
                    {t('Start a Discussion', 'Mulai Diskusi')}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION D — FEATURED CASE STUDIES SHOWCASE
          ========================================================================= */}
      <InteractiveCaseStudiesShowcase onNavigate={onNavigate} />

      {/* =========================================================================
          SECTION E — WHY WORK WITH ME? (Unified Clean EN / ID)
          ========================================================================= */}
      <section className="w-full bg-[#F6F3EE] text-[#23272F] py-24 border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <ScrollReveal variant="editorial" delay={0} className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B49A70] block font-bold mb-2">
                {t('Value Proposition & Competitive Edge', 'Proposisi Nilai & Keunggulan Eksekusi')}
              </span>
              <h2 className="font-sans font-black text-4xl sm:text-5xl text-[#23272F] tracking-tight">
                {t('Why Work With Me?', 'Mengapa Bekerja Bersama Saya?')}
              </h2>
              <p className="text-sm text-[#5E626B] font-light leading-relaxed mt-2">
                {t(
                  'Not just an advisor who leaves slide decks behind, but a hands-on People Operations & HR Systems leader who designs the strategy, models the workforce data, and builds the internal software.',
                  'Bukan sekadar konsultan yang memberikan rekomendasi di atas kertas, melainkan praktisi pelaksana yang merancang strategi SDM, memodelkan data tenaga kerja, dan membangun langsung perangkat lunak pendukungnya.'
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="subtle" delay={0.14} className="self-start md:self-end">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6E7C69]/10 text-[#6E7C69] border border-[#6E7C69]/20 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#B49A70]" />
                <span>{t('Proven ROI & Execution Speed', 'ROI Terukur & Kecepatan Eksekusi')}</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <ScrollReveal variant="card" delay={0} className="h-full">
              <div className="h-full p-8 bg-white rounded-3xl border border-[#E7E0D6] space-y-4 hover:border-[#6E7C69] transition-all shadow-xs flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#6E7C69]/10 text-[#6E7C69] flex items-center justify-center group-hover:bg-[#6E7C69] group-hover:text-white transition-colors">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] text-[#B49A70] uppercase tracking-wider font-bold block">
                    {t('Pillar 01 / Alignment', 'Pilar 01 / Penyelarasan')}
                  </span>
                  <h3 className="font-sans font-bold text-xl text-[#23272F]">
                    {t('Multidisciplinary T-Shaped Depth', 'Kedalaman Multidisiplin T-Shaped')}
                  </h3>
                  <p className="text-xs text-[#5E626B] leading-relaxed font-light">
                    {t(
                      'Bridging communication gaps between C-Suite leaders, People & Culture practitioners, and technical teams—translating business goals into seamless floor execution without distortion.',
                      'Menjembatani jurang komunikasi antara pimpinan puncak, praktisi People & Culture, dan tim teknis—tanpa distorsi saat menerjemahkan visi bisnis ke implementasi lapangan.'
                    )}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E7E0D6] text-[11px] font-mono text-[#23272F] font-semibold">
                  {t('Zero Hand-off Friction', 'Nol Gesekan Antar-Divisi')}
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar 2 */}
            <ScrollReveal variant="card" delay={0.09} className="h-full">
              <div className="h-full p-8 bg-white rounded-3xl border border-[#E7E0D6] space-y-4 hover:border-[#B49A70] transition-all shadow-xs flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#B49A70]/15 text-[#B49A70] flex items-center justify-center group-hover:bg-[#B49A70] group-hover:text-white transition-colors">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] text-[#6E7C69] uppercase tracking-wider font-bold block">
                    {t('Pillar 02 / Impact', 'Pilar 02 / Dampak Nyata')}
                  </span>
                  <h3 className="font-sans font-bold text-xl text-[#23272F]">
                    {t('Provable Bottom-Line ROI', 'ROI Kuantitatif yang Terbukti')}
                  </h3>
                  <p className="text-xs text-[#5E626B] leading-relaxed font-light">
                    {t(
                      'Every system is validated by measurable efficiency: 75% faster payroll cycle, hiring time cut from 43 to 17.2 days, and 100% compliant BPJS & TER PPh 21 governance with zero infractions.',
                      'Tiap sistem divalidasi dengan efisiensi terukur: reduksi waktu payroll hingga 75%, pemangkasan siklus rekrutmen dari 43 ke 17,2 hari, dan kepatuhan regulasi BPJS & PPh 21 tanpa pelanggaran.'
                    )}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E7E0D6] text-[11px] font-mono text-[#B49A70] font-bold">
                  {t('-75% Cycle Time Reduction', '-75% Waktu Siklus Proses')}
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar 3 */}
            <ScrollReveal variant="card" delay={0.18} className="h-full">
              <div className="h-full p-8 bg-white rounded-3xl border border-[#E7E0D6] space-y-4 hover:border-[#23272F] transition-all shadow-xs flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#23272F]/10 text-[#23272F] flex items-center justify-center group-hover:bg-[#23272F] group-hover:text-white transition-colors">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] text-[#B49A70] uppercase tracking-wider font-bold block">
                    {t('Pillar 03 / Independence', 'Pilar 03 / Kemandirian Sistem')}
                  </span>
                  <h3 className="font-sans font-bold text-xl text-[#23272F]">
                    {t('Bespoke In-House Engineering', 'Rekayasa HR Tech Internal')}
                  </h3>
                  <p className="text-xs text-[#5E626B] leading-relaxed font-light">
                    {t(
                      'Building tailored internal HR automation suites (Pervia PMS, Matchify ATS, Slipr Payroll, Zeno Psychometrics) in-house—saving recurring third-party SaaS licensing costs.',
                      'Membangun solusi otomatis internal (Pervia PMS, Matchify ATS, Slipr Payroll, Zeno Psikometri) secara kustom sehingga menghemat jutaan rupiah biaya langganan SaaS eksternal.'
                    )}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E7E0D6] text-[11px] font-mono text-[#23272F] font-semibold">
                  {t('Zero Recurring SaaS Fees', 'Tanpa Biaya Langganan Berulang')}
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar 4 */}
            <ScrollReveal variant="card" delay={0.27} className="h-full">
              <div className="h-full p-8 bg-white rounded-3xl border border-[#E7E0D6] space-y-4 hover:border-[#6E7C69] transition-all shadow-xs flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#6E7C69]/10 text-[#6E7C69] flex items-center justify-center group-hover:bg-[#6E7C69] group-hover:text-white transition-colors">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] text-[#B49A70] uppercase tracking-wider font-bold block">
                    {t('Pillar 04 / Resilience', 'Pilar 04 / Ketangguhan Lapangan')}
                  </span>
                  <h3 className="font-sans font-bold text-xl text-[#23272F]">
                    {t('High-Stakes Live Resiliency', 'Resiliensi Eksekusi Skala Besar')}
                  </h3>
                  <p className="text-xs text-[#5E626B] leading-relaxed font-light">
                    {t(
                      'Battle-tested leading 50+ high-profile productions for up to 2,000 attendees and a national conference across 27 provinces—staying composed during live crisis mitigation.',
                      'Teruji memimpin 50+ produksi berskala besar hingga 2.000 tamu dan konferensi nasional lintas 27 provinsi—tetap tenang memitigasi krisis dan berdiplomasi di bawah tekanan.'
                    )}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E7E0D6] text-[11px] font-mono text-[#6E7C69] font-bold">
                  {t('100% On-Time Execution', '100% Eksekusi Tepat Waktu')}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION F — PROFESSIONAL & ORGANIZATIONAL JOURNEY DASHBOARD
          ========================================================================= */}
      <ProfessionalJourneyDashboard
        onNavigate={onNavigate}
        onOpenResume={onOpenResume}
      />

      {/* =========================================================================
          SECTION G — EXECUTIVE ENDORSEMENTS
          ========================================================================= */}
      <section className="w-full bg-[#FAF8F5] py-24 border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <ScrollReveal variant="editorial" delay={0} className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B49A70] block font-bold mb-2">
                {t('Verified Executive Endorsements', 'Testimoni Pimpinan Terverifikasi')}
              </span>
              <h2 className="font-sans font-black text-4xl sm:text-5xl text-[#23272F] tracking-tight">
                {t('Leadership Endorsements', 'Feedback Dari Pimpinan Sebelumnya')}
              </h2>
              <p className="text-sm text-[#5E626B] font-light leading-relaxed mt-2">
                {t(
                  'Authentic leadership evaluations directly from executive directors and institutional heads I have partnered with.',
                  'Pengakuan profesional dan evaluasi kepemimpinan autentik langsung dari jajaran direktur dan pimpinan institusi tempat bertumbuh.'
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="subtle" delay={0.12} className="self-start md:self-end">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E7E0D6] text-xs font-mono text-[#23272F] shadow-2xs">
                <Quote className="w-3.5 h-3.5 text-[#B49A70]" />
                <span>{t('3 Institutional Leaders', '3 Pimpinan Institusi')}</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, tIdx) => (
              <ScrollReveal key={item.id} variant="card" delay={tIdx * 0.09} className="h-full">
                <div className="h-full p-8 bg-white rounded-3xl border border-[#E7E0D6] shadow-xs hover:border-[#6E7C69] hover:shadow-lg transition-all flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-[#E7E0D6]">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-[#6E7C69] text-white flex items-center justify-center font-bold text-sm tracking-wider font-mono shadow-xs">
                          {item.initials}
                        </div>
                        <div>
                          <strong className="block font-sans font-bold text-base text-[#23272F]">
                            {item.name}
                          </strong>
                          <span className="font-mono text-[11px] text-[#B49A70] block font-semibold leading-tight">
                            {item.role}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4A4843] font-light leading-relaxed italic">
                      "{item.content}"
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#E7E0D6] flex items-center justify-between text-xs font-mono text-[#B49A70]">
                    <span className="font-semibold text-[#6E7C69]">{item.company}</span>
                    <span className="text-[10px] uppercase tracking-wider bg-[#F5F3EE] px-2.5 py-1 rounded-full border border-[#E7E0D6]">
                      {t('Executive Review', 'Ulasan Pimpinan')}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION H — CLOSING PHILOSOPHY
          ========================================================================= */}
      <section className="w-full bg-[#F5F3EE] text-[#23272F] py-28 border-t border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <ScrollReveal variant="subtle" delay={0}>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B49A70] block font-bold">
                {t('Closing Philosophy', 'Filosofi Kerja')}
              </span>
            </ScrollReveal>

            <ScrollReveal variant="editorial" delay={0.1}>
              <h2 className="font-sans font-black text-4xl sm:text-6xl text-[#23272F] tracking-tight leading-tight">
                {t('"Thoughtful Strategy.', '"Strategi Matang.')} <br />
                <span className="text-[#6E7C69]">
                  {t('Meaningful Execution', 'Eksekusi Bermakna')}
                </span>."
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="editorial" delay={0.18}>
              <p className="text-base text-[#5E626B] font-light max-w-xl mx-auto leading-relaxed">
                {t(
                  'Whether architecting people systems for scaling enterprises, structuring workforce diagnostics, or building internal digital applications — excellence lies in disciplined follow-through.',
                  'Baik dalam merancang sistem SDM bagi perusahaan bertumbuh, menyusun diagnostik tenaga kerja, maupun membangun aplikasi HR internal — keunggulan selalu lahir dari konsistensi eksekusi.'
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="subtle" delay={0.26}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-[#23272F] text-white hover:bg-[#B49A70] hover:text-[#14171A] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-full shadow-md active:scale-95"
                >
                  {t('Start a Conversation', 'Mulai Diskusi')}
                </button>

                <button
                  onClick={() => onNavigate('projects')}
                  className="px-8 py-4 bg-white text-[#23272F] border border-[#E7E0D6] hover:bg-[#F5F3EE] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-full active:scale-95 shadow-2xs"
                >
                  {t('Explore Full Portfolio', 'Eksplorasi Portofolio Lengkap')}
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
