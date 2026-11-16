import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Eye, 
  ExternalLink, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  VolumeX, 
  Play,
  ArrowUpRight
} from 'lucide-react';
import { IMAGES } from '../data/portfolioData';
import { AppRoute } from '../types';
import { ScrollReveal } from './ScrollReveal';

export interface FeaturedAppItem {
  id: string;
  systemNumber: string;
  kicker: string;
  title: string;
  tagline: string;
  summary: string;
  bullets: string[];
  image: string;
  videoUrl: string;
  liveUrl?: string;
  badge: string;
  metric: string;
}

export const SHOWCASE_APPS: FeaturedAppItem[] = [
  {
    id: 'pervia-platform',
    systemNumber: 'SYSTEM 01',
    kicker: 'ENTERPRISE PERFORMANCE MANAGEMENT',
    title: 'Pervia PMS',
    tagline: 'Continuous KPI & 9-Box Grid Talent Matrix',
    summary: 'Aplikasi evaluasi kinerja karyawan terintegrasi berbasis cloud yang menggabungkan continuous KPI deliverable tracking, penilaian 360-derajat, dan visualisasi 9-Box Talent Matrix otomatis. Membantu C-Suite dan HR mengidentifikasi talenta berpotensi tinggi serta merumuskan rencana suksesi secara objektif tanpa bias.',
    bullets: [
      'Continuous KPI Deliverable Tracking & SLA MTTR Verification (98.4% alignment)',
      'Dynamic 9-Box Grid Talent Matrix & Succession Risk Calibration',
      'Multi-Rater 360° Feedback, Supervisor Review, & Bell-Curve Normalizer',
      'Role-Based Workspace Personas (Super Admin, HR, Manager, Employee)'
    ],
    image: IMAGES.perviaBanner,
    videoUrl: IMAGES.perviaVideo,
    liveUrl: 'https://pervia.netlify.app/login',
    badge: 'Enterprise Performance',
    metric: '98.4% Target Alignment',
  },
  {
    id: 'matchify-platform',
    systemNumber: 'SYSTEM 02',
    kicker: 'RECRUITMENT INTELLIGENCE & ATS',
    title: 'Matchify RMS',
    tagline: 'Automated Interview Scheduling & ATS Pipeline',
    summary: 'Sistem pelacak pelamar kerja (ATS) cerdas yang mengotomatisasi seluruh alur rekrutmen—mulai dari parsing resume pelamar, tes kompetensi terintegrasi, hingga penjadwalan wawancara terotomasi dengan live countdown timer. Memangkas waktu tunggu perekrutan hingga 60% dengan pipeline transparan.',
    bullets: [
      'Automated Applicant Pipeline & Resume Parsing (5,200+ kandidat terlacak)',
      'Auto-Generated WhatsApp & Email Interview Calendar Scheduling',
      'Integrated 45-Minute Live Interview Timer & Standardized Scoring Matrix',
      'Sourcing Channel ROI Analytics (LinkedIn, JobStreet, Referral)'
    ],
    image: IMAGES.matchifyBanner,
    videoUrl: IMAGES.matchifyVideo,
    liveUrl: 'https://script.google.com/macros/s/AKfycbygYq3clewdZdfxfOnQox89ep8N9q4jFUIjnJpWUQs2FF4gyKR23msY_3XBzozlnAU/exec',
    badge: 'Talent Acquisition',
    metric: '-60% Time-to-Hire (17.2 Days)',
  },
  {
    id: 'slipr-platform',
    systemNumber: 'SYSTEM 03',
    kicker: 'HR FINTECH & COMPLIANCE AUTOMATION',
    title: 'Slipr Payroll',
    tagline: 'TER PPh 21 Tax Engine & Encrypted Payslips',
    summary: 'Platform penggajian berbasis cloud yang dirancang khusus untuk mematuhi regulasi pajak TER PPh 21 terbaru di Indonesia dan iuran BPJS Ketenagakerjaan/Kesehatan. Menghasilkan slip gaji ber-password terenkripsi dan mendistribusikannya ke ratusan karyawan dalam sekali klik dengan tanda tangan digital sah.',
    bullets: [
      '100% Tax Compliant: Kalkulasi Otomatis TER PPh 21 & Iuran BPJS',
      'Single-Click Bulk Encrypted Payslip PDF Generation & Distribution',
      'Seamless Digital Document Signing (Tanda Tangan Digital Sah)',
      'Menekan Siklus Pemrosesan Payroll hingga 75% (dari 3 hari ke <1 jam)'
    ],
    image: IMAGES.sliprBanner,
    videoUrl: IMAGES.sliprVideo,
    liveUrl: 'https://script.google.com/macros/s/AKfycbyoq-0LSWK4t6xvg5-OgVx4Eki8GQXEO4x_NA6gEjgpImQEGA0vvGFt4hz0MGOWnvfO3Q/exec',
    badge: 'Payroll & HRIS',
    metric: '-75% Payroll Processing Time',
  },
  {
    id: 'zeno-platform',
    systemNumber: 'SYSTEM 04',
    kicker: 'TALENT DIAGNOSTICS & PSYCHOMETRICS AI',
    title: 'Zeno Assessment',
    tagline: 'Standardized MBTI & DISC Cognitive Profiler',
    summary: 'Platform asesmen psikotes digital terstandarisasi untuk pemetaan profil MBTI dan 4 kuadran DISC. Memberikan laporan diagnostik kepemimpinan, gaya komunikasi, serta analisis kesesuaian tim (team fit analysis) secara instan kepada pimpinan perusahaan.',
    bullets: [
      'Validated MBTI & DISC Online Testing Engine & Question Banks',
      'Radar Chart Cognitive & Behavioral Personality Profiling',
      'Automated Psychological Dossier Generation dalam 15 Menit',
      'Pemangkasan Waktu Evaluasi Psikometri hingga 85% untuk Rekrutmen'
    ],
    image: IMAGES.zenoBanner,
    videoUrl: IMAGES.zenoVideo,
    liveUrl: 'https://script.google.com/macros/s/AKfycbzhFD87PJRrOvkU8GMA01CgfTRieF-Qisi9tvJTADvqKXvl4AO4WaHA94z4z7NVRCkd/exec',
    badge: 'Psychometrics AI',
    metric: '-85% Evaluation Turnaround',
  },
];

interface InteractiveCaseStudiesShowcaseProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
}

export const InteractiveCaseStudiesShowcase: React.FC<InteractiveCaseStudiesShowcaseProps> = ({
  onNavigate,
}) => {
  const [activeAppId, setActiveAppId] = useState<string>('pervia-platform');

  const activeIndex = SHOWCASE_APPS.findIndex((app) => app.id === activeAppId);
  const activeApp = SHOWCASE_APPS[activeIndex] || SHOWCASE_APPS[0];

  const handlePrev = () => {
    const nextIdx = (activeIndex - 1 + SHOWCASE_APPS.length) % SHOWCASE_APPS.length;
    setActiveAppId(SHOWCASE_APPS[nextIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % SHOWCASE_APPS.length;
    setActiveAppId(SHOWCASE_APPS[nextIdx].id);
  };

  return (
    <section className="w-full bg-[#EFE8E0] py-20 sm:py-28 border-b border-[#E3D9CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Warm Oat & Sage Elegance */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <ScrollReveal variant="editorial" delay={0}>
          <span className="text-xs font-mono uppercase tracking-widest text-[#B49A70] block font-bold mb-2">
            Verifiable Systems & Custom Software
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-5xl text-[#23272F] tracking-tight">
            Featured Case Studies
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="subtle" delay={0.12} className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E7E0D6] text-xs font-mono text-[#6E7C69] font-bold shadow-2xs">
            <VolumeX className="w-3.5 h-3.5 text-[#B49A70]" />
            <span>Background Video Auto-Preview (No Sound)</span>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#23272F] hover:text-[#6E7C69] transition-colors border-b-2 border-[#23272F] pb-0.5 cursor-pointer ml-1"
          >
            <span>All Projects Archive ↗</span>
          </button>
        </ScrollReveal>
      </div>

      {/* =========================================================================
          IMMERSIVE SHOWCASE CONTAINER (Harmonized Warm Luxury Palette)
          ========================================================================= */}
      <ScrollReveal variant="media" duration={0.95} delay={0.08}>
      <div className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[640px] lg:min-h-[680px] bg-[#16191D] text-[#F3EFEA] border border-[#B49A70]/35 shadow-[0_30px_70px_-20px_rgba(20,23,26,0.35)] ring-1 ring-white/10 flex flex-col justify-between p-6 sm:p-10 lg:p-12">
        {/* Ambient Corner Atmosphere: Warm Mocha + Muted Sage Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-[#AF8C72]/25 via-transparent to-transparent pointer-events-none blur-3xl z-0" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-gradient-to-tr from-[#6E7C69]/20 via-transparent to-transparent pointer-events-none blur-3xl z-0" />

        {/* Background Video Player (Opacity 65% per request, loop with NO SOUND) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <video
            key={activeApp.id}
            src={activeApp.videoUrl}
            poster={activeApp.image}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-65 transition-opacity duration-700"
          />

          {/* Asymmetrical Gradient: Left side has smooth contrast for text, right side is bright and clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#14171A]/95 via-[#14171A]/75 sm:via-[#14171A]/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14171A]/90 via-transparent to-[#14171A]/40" />
        </div>

        {/* Top Bar inside Container: Active Pill & Carousel Navigation Arrows */}
        <div className="relative z-20 flex items-center justify-between pb-6 border-b border-white/15">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B49A70] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#E8DFD4] font-semibold">
              Interactive System Showcase · {activeApp.systemNumber}
            </span>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#B49A70] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20 active:scale-95 shadow-sm"
              title="Previous Application"
              aria-label="Previous system"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#B49A70] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20 active:scale-95 shadow-sm"
              title="Next Application"
              aria-label="Next system"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Center Content: Left Summary (No Card Box) & Right Carousel Cards */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto py-6 sm:py-8">
          {/* =========================================================================
              LEFT COLUMN: Direct Clean Explanation (Card Section Background Removed per Point 1)
              ========================================================================= */}
          <div className="lg:col-span-6 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeApp.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-5"
              >
                {/* Category Kicker */}
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B49A70] font-bold">
                  <span>— {activeApp.kicker}</span>
                </div>

                {/* Big Title (Stylized with Instrument Serif elegance) */}
                <h3 className="font-serif italic font-normal text-3xl sm:text-5xl lg:text-5xl text-[#FFFDF9] tracking-tight leading-tight">
                  {activeApp.title}
                </h3>

                {/* Summary Description (Point 3) */}
                <p className="text-xs sm:text-sm text-[#E4DFD7] font-light leading-relaxed max-w-xl">
                  {activeApp.summary}
                </p>

                {/* Bullet Points with Checkmarks in Sage Accent */}
                <ul className="space-y-2.5 pt-1">
                  {activeApp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#F3EFEA]">
                      <CheckCircle2 className="w-4 h-4 text-[#8DA687] shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-light">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons (Point 4) */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  {/* Button 1: Detail Aplikasi */}
                  <button
                    onClick={() => onNavigate('project-detail', activeApp.id)}
                    className="px-6 py-3.5 bg-[#FDFBF7] hover:bg-white text-[#23272F] font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2.5 group"
                  >
                    <Eye className="w-4 h-4 text-[#B49A70] group-hover:scale-110 transition-transform" />
                    <span>Detail Aplikasi</span>
                  </button>

                  {/* Button 2: Uji Coba Demo Aplikasi (Live URL) */}
                  {activeApp.liveUrl && (
                    <a
                      href={activeApp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-[#B49A70] hover:bg-[#A3885E] text-[#14171A] font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2.5"
                    >
                      <span>Uji Coba Demo Aplikasi</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Interactive Cards List (Posters 100% Opacity per Point 2)
              ========================================================================= */}
          <ScrollReveal variant="card" delay={0.18} className="lg:col-span-6 flex items-center justify-start lg:justify-end">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 w-full max-w-xl">
              {SHOWCASE_APPS.map((app) => {
                const isActive = app.id === activeAppId;

                return (
                  <div
                    key={app.id}
                    onClick={() => setActiveAppId(app.id)}
                    className={`group/card relative rounded-2xl overflow-hidden p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[175px] sm:min-h-[195px] shadow-lg ${
                      isActive
                        ? 'border-2 border-[#B49A70] ring-4 ring-[#B49A70]/30 shadow-[0_0_35px_rgba(180,154,112,0.45)] scale-[1.03]'
                        : 'border border-white/25 hover:border-[#B49A70] hover:scale-[1.02]'
                    }`}
                  >
                    {/* Poster Image with 100% Opacity (Posternya terlihat dengan jelas) */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover opacity-100 transition-transform duration-500 group-hover/card:scale-106"
                      />
                      {/* Subtle Bottom-Weighted Gradient for Legible Typography */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 pointer-events-none" />
                    </div>

                    {/* Card Content Top: System Tag & Active Indicator */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-2 py-0.5 rounded-md backdrop-blur-md ${
                        isActive ? 'bg-[#14171A]/85 text-[#B49A70] border border-[#B49A70]/40' : 'bg-black/65 text-[#F3EFEA] border border-white/10'
                      }`}>
                        — {app.systemNumber}
                      </span>

                      {isActive && (
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider bg-[#B49A70] text-[#14171A] px-2.5 py-0.5 rounded-full font-bold shadow-md">
                          <Play className="w-2.5 h-2.5 fill-current" />
                          Playing
                        </span>
                      )}
                    </div>

                    {/* Card Content Bottom: Title, Tagline, & Click Hint */}
                    <div className="relative z-10 space-y-1 pt-6">
                      <h4 className="font-sans font-bold text-base sm:text-lg text-white group-hover/card:text-[#B49A70] transition-colors leading-snug drop-shadow-md">
                        {app.title}
                      </h4>
                      <p className="text-[11px] text-[#E8DFD4] line-clamp-1 font-normal drop-shadow-sm">
                        {app.tagline}
                      </p>

                      <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-[#D1CCC5] border-t border-white/20">
                        <span className="text-white font-semibold drop-shadow-xs">{app.badge}</span>
                        <span className={`font-semibold flex items-center gap-0.5 ${
                          isActive ? 'text-[#B49A70]' : 'text-white/80 group-hover/card:text-white'
                        }`}>
                          <span>{isActive ? 'Previewing' : 'Pilih Sistem'}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Status Footer inside Container */}
        <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/15 text-xs text-[#A7A69F] font-mono">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#AF8C72]" />
            <span className="text-[#D1CCC5]">Klik kartu di kanan untuk memutar video preview background (no sound) masing-masing aplikasi.</span>
          </div>

          <button
            onClick={() => onNavigate('project-detail', activeApp.id)}
            className="inline-flex items-center gap-1.5 text-[#AF8C72] hover:text-white transition-colors font-semibold cursor-pointer group"
          >
            <span>Buka Detail Lengkap & Video Bersuara</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
      </ScrollReveal>
    </div>
  </section>
);
};
