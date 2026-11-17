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
import { useLanguage } from '../context/LanguageContext';

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
    summary:
      'A cloud-based enterprise performance management suite uniting continuous KPI deliverable tracking, 360-degree peer evaluations, and automated 9-Box Talent Matrix calibration—helping HR and executive leaders identify high-potential talent and build objective succession plans.',
    bullets: [
      'Continuous KPI Deliverable Tracking & SLA MTTR Verification (98.4% alignment)',
      'Dynamic 9-Box Grid Talent Matrix & Succession Risk Calibration',
      'Multi-Rater 360° Feedback, Supervisor Review & Bell-Curve Normalizer',
      'Role-Based Workspace Personas (Super Admin, HR, Manager, Employee)',
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
    summary:
      'An end-to-end applicant tracking and recruitment intelligence system automating screening rubrics, structured competency evaluations, and calendar scheduling with a live 45-minute interview countdown—cutting time-to-hire by 60% with full funnel visibility.',
    bullets: [
      'Automated Applicant Pipeline & Screening (5,200+ candidate records benchmarked)',
      'Auto-Generated WhatsApp & Email Interview Calendar Scheduling',
      'Integrated 45-Minute Live Interview Timer & Standardized Scoring Matrix',
      'Sourcing Channel ROI Analytics (LinkedIn, JobStreet, Referral)',
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
    summary:
      'A digital payroll engine engineered specifically for Indonesian TER PPh 21 tax compliance and statutory BPJS contributions. Generates password-encrypted payslip PDFs and distributes them across 110+ active personnel (500+ tested capacity) with verified digital signatures.',
    bullets: [
      '100% Tax Compliant: Automated TER PPh 21 & BPJS Contributions Engine',
      'Single-Click Bulk Encrypted Payslip PDF Generation & Email Distribution',
      'Verified Digital Document Signing Workflow (Seamless Sign-Off)',
      'Cut Monthly Payroll Processing Cycle by 75% (from 3 days to <1 hour)',
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
    kicker: 'TALENT DIAGNOSTICS & PSYCHOMETRICS',
    title: 'Zeno Assessment',
    tagline: 'Standardized MBTI & DISC Cognitive Profiler',
    summary:
      'A digital psychometrics platform mapping 16-type MBTI profiles and 4-quadrant DISC behaviors in real time. Delivers instant cognitive radar charts, communication style diagnostics, and team-fit reports to hiring managers in 15 minutes.',
    bullets: [
      'Calibrated MBTI & DISC Online Testing Engine & Item Banks',
      'Radar Chart Cognitive & Behavioral Personality Profiling',
      'Automated Psychological Dossier Generation Within 15 Minutes',
      '85% Faster Psychometric Evaluation Turnaround Across 1,200+ Records',
    ],
    image: IMAGES.zenoBanner,
    videoUrl: IMAGES.zenoVideo,
    liveUrl: 'https://script.google.com/macros/s/AKfycbzhFD87PJRrOvkU8GMA01CgfTRieF-Qisi9tvJTADvqKXvl4AO4WaHA94z4z7NVRCkd/exec',
    badge: 'Psychometrics Engine',
    metric: '-85% Evaluation Turnaround',
  },
];

const SHOWCASE_APPS_ID: FeaturedAppItem[] = [
  {
    ...SHOWCASE_APPS[0],
    summary:
      'Aplikasi evaluasi kinerja karyawan terintegrasi berbasis cloud yang menggabungkan continuous KPI deliverable tracking, penilaian 360-derajat, dan visualisasi 9-Box Talent Matrix otomatis untuk mendukung keputusan promosi dan suksesi yang objektif.',
    bullets: [
      'Pelacakan KPI Berkelanjutan & Verifikasi Deliverable SLA MTTR (98.4% selaras)',
      'Matriks Talenta 9-Box Grid Dinamis & Kalibrasi Risiko Suksesi',
      'Umpan Balik 360° Multi-Penilai, Tinjauan Supervisor & Normalisasi Bell-Curve',
      'Workspace Berbasis Peran (Super Admin, HR, Manager, Karyawan)',
    ],
  },
  {
    ...SHOWCASE_APPS[1],
    summary:
      'Sistem pelacak pelamar kerja (ATS) terintegrasi yang mengotomatisasi skrining kandidat, rubrik asesmen terstandar, dan penjadwalan wawancara dengan live countdown timer 45 menit—memangkas time-to-hire hingga 60%.',
    bullets: [
      'Pipeline Pelamar & Skrining Otomatis (teruji 5.200+ rekor kandidat lintas kohort)',
      'Penjadwalan Kalender Wawancara Otomatis via WhatsApp & Email',
      'Timer Wawancara Aktif 45 Menit & Matriks Penilaian Terstandar',
      'Analitik ROI Kanal Sumber Rekrutmen (LinkedIn, JobStreet, Referral)',
    ],
  },
  {
    ...SHOWCASE_APPS[2],
    summary:
      'Platform penggajian berbasis cloud yang dirancang untuk mematuhi regulasi pajak TER PPh 21 terbaru di Indonesia dan iuran BPJS. Menghasilkan slip gaji terenkripsi dan mendistribusikannya untuk 110+ karyawan aktif (kapasitas sistem 500+) dengan tanda tangan digital sah.',
    bullets: [
      '100% Patuh Pajak: Kalkulasi Otomatis TER PPh 21 & Iuran BPJS',
      'Generasi & Distribusi Massal PDF Slip Gaji Terenkripsi Sekali Klik',
      'Alur Tanda Tangan Digital Terverifikasi',
      'Menekan Siklus Pemrosesan Payroll hingga 75% (dari 3 hari ke <1 jam)',
    ],
  },
  {
    ...SHOWCASE_APPS[3],
    summary:
      'Platform asesmen psikotes digital terstandarisasi untuk pemetaan profil MBTI dan 4 kuadran DISC. Menghasilkan laporan diagnostik gaya kepemimpinan, komunikasi, dan kesesuaian tim berbasis grafik radar secara instan.',
    bullets: [
      'Mesin Tes Online MBTI & DISC Terkalibrasi beserta Bank Soal',
      'Profil Kepribadian Kognitif & Perilaku Berbasis Grafik Radar',
      'Laporan Psikologis Otomatis Terbit dalam 15 Menit',
      'Pemangkasan Waktu Evaluasi Psikometri hingga 85% (1.200+ rekor uji)',
    ],
  },
];

interface InteractiveCaseStudiesShowcaseProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
}

export const InteractiveCaseStudiesShowcase: React.FC<InteractiveCaseStudiesShowcaseProps> = ({
  onNavigate,
}) => {
  const { lang, t } = useLanguage();
  const [activeAppId, setActiveAppId] = useState<string>('pervia-platform');

  const apps = lang === 'id' ? SHOWCASE_APPS_ID : SHOWCASE_APPS;
  const activeIndex = apps.findIndex((app) => app.id === activeAppId);
  const activeApp = apps[activeIndex] || apps[0];

  const handlePrev = () => {
    const nextIdx = (activeIndex - 1 + apps.length) % apps.length;
    setActiveAppId(apps[nextIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % apps.length;
    setActiveAppId(apps[nextIdx].id);
  };

  return (
    <section className="w-full bg-[#EFE8E0] py-10 sm:py-14 border-b border-[#E3D9CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-7">
          <ScrollReveal variant="editorial" delay={0}>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B49A70] block font-bold mb-2">
              {t('Verifiable Systems & Custom Software', 'Sistem Teruji & Perangkat Lunak Internal')}
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#23272F] tracking-tight">
              {t('Featured Case Studies', 'Studi Kasus Pilihan')}
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="subtle" delay={0.12} className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E7E0D6] text-[11px] sm:text-xs font-mono text-[#6E7C69] font-bold shadow-2xs">
              <VolumeX className="w-3.5 h-3.5 text-[#B49A70] shrink-0" />
              <span>
                {t('Background Video Auto-Preview (Muted)', 'Pratinjau Video Otomatis (Tanpa Suara)')}
              </span>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#23272F] hover:text-[#6E7C69] transition-colors border-b-2 border-[#23272F] pb-0.5 cursor-pointer"
            >
              <span>{t('All Projects Archive ↗', 'Arsip Seluruh Proyek ↗')}</span>
            </button>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="media" duration={0.95} delay={0.08}>
          <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-0 lg:min-h-[580px] bg-[#16191D] text-[#F3EFEA] border border-[#B49A70]/35 shadow-[0_30px_70px_-20px_rgba(20,23,26,0.35)] ring-1 ring-white/10 flex flex-col justify-between p-5 sm:p-8 lg:p-10">
            <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-[#AF8C72]/25 via-transparent to-transparent pointer-events-none blur-3xl z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-gradient-to-tr from-[#6E7C69]/20 via-transparent to-transparent pointer-events-none blur-3xl z-0" />

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
                className="w-full h-full object-cover opacity-50 lg:opacity-65 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#14171A]/95 via-[#14171A]/80 sm:via-[#14171A]/45 to-black/25" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#14171A]/80 via-[#14171A]/50 to-[#14171A]/95 lg:bg-gradient-to-t lg:from-[#14171A]/90 lg:via-transparent lg:to-[#14171A]/40" />
            </div>

            <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-white/15">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B49A70] animate-pulse shrink-0" />
                <span className="font-mono text-[10.5px] sm:text-xs uppercase tracking-widest text-[#E8DFD4] font-semibold truncate">
                  {t('Interactive Showcase', 'Etalase Sistem')} · {activeApp.systemNumber}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#B49A70] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20 active:scale-95 shadow-sm"
                  title={t('Previous Application', 'Aplikasi Sebelumnya')}
                  aria-label="Previous system"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#B49A70] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20 active:scale-95 shadow-sm"
                  title={t('Next Application', 'Aplikasi Berikutnya')}
                  aria-label="Next system"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center my-auto py-5 sm:py-8">
              <div className="lg:col-span-6 text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeApp.id}-${lang}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="space-y-4 sm:space-y-5"
                  >
                    <div className="flex items-center gap-2 text-[10.5px] sm:text-xs font-mono uppercase tracking-widest text-[#B49A70] font-bold">
                      <span>— {activeApp.kicker}</span>
                    </div>

                    <h3 className="font-serif italic font-normal text-3xl sm:text-5xl lg:text-5xl text-[#FFFDF9] tracking-tight leading-tight">
                      {activeApp.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#E4DFD7] font-light leading-relaxed max-w-xl">
                      {activeApp.summary}
                    </p>

                    <ul className="space-y-2 sm:space-y-2.5 pt-1">
                      {activeApp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#F3EFEA]">
                          <CheckCircle2 className="w-4 h-4 text-[#8DA687] shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-light">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
                      <button
                        onClick={() => onNavigate('project-detail', activeApp.id)}
                        className="w-full sm:w-auto px-6 py-3.5 bg-[#FDFBF7] hover:bg-white text-[#23272F] font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-lg hover:shadow-xl lg:hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 group"
                      >
                        <Eye className="w-4 h-4 text-[#B49A70] group-hover:scale-110 transition-transform" />
                        <span>{t('Application Details', 'Detail Aplikasi')}</span>
                      </button>

                      {activeApp.liveUrl && (
                        <a
                          href={activeApp.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-6 py-3.5 bg-[#B49A70] hover:bg-[#A3885E] text-[#14171A] font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-lg hover:shadow-xl lg:hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
                        >
                          <span>{t('Try Live Demo', 'Uji Coba Demo Aplikasi')}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <ScrollReveal variant="card" delay={0.18} className="lg:col-span-6 flex items-center justify-start lg:justify-end">
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4 w-full max-w-xl">
                  {apps.map((app) => {
                    const isActive = app.id === activeAppId;

                    return (
                      <div
                        key={app.id}
                        onClick={() => setActiveAppId(app.id)}
                        className={`group/card relative rounded-2xl overflow-hidden p-3 sm:p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[140px] sm:min-h-[195px] shadow-lg ${
                          isActive
                            ? 'border-2 border-[#B49A70] ring-2 sm:ring-4 ring-[#B49A70]/30 shadow-[0_0_30px_rgba(180,154,112,0.4)] lg:scale-[1.03]'
                            : 'border border-white/25 hover:border-[#B49A70] lg:hover:scale-[1.02]'
                        }`}
                      >
                        <div className="absolute inset-0 z-0 overflow-hidden">
                          <img
                            src={app.image}
                            alt={app.title}
                            className="w-full h-full object-cover opacity-100 transition-transform duration-500 group-hover/card:scale-106"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15 pointer-events-none" />
                        </div>

                        <div className="relative z-10 flex items-center justify-between gap-1">
                          <span className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-wider sm:tracking-widest font-bold px-1.5 sm:px-2 py-0.5 rounded-md backdrop-blur-md ${
                            isActive ? 'bg-[#14171A]/85 text-[#B49A70] border border-[#B49A70]/40' : 'bg-black/65 text-[#F3EFEA] border border-white/10'
                          }`}>
                            {app.systemNumber}
                          </span>

                          {isActive && (
                            <span className="inline-flex items-center gap-1 text-[8.5px] sm:text-[9px] font-mono uppercase tracking-wider bg-[#B49A70] text-[#14171A] px-2 py-0.5 rounded-full font-bold shadow-md">
                              <Play className="w-2.5 h-2.5 fill-current" />
                              <span className="hidden sm:inline">{t('Playing', 'Diputar')}</span>
                            </span>
                          )}
                        </div>

                        <div className="relative z-10 space-y-1 pt-5 sm:pt-6">
                          <h4 className="font-sans font-bold text-sm sm:text-lg text-white group-hover/card:text-[#B49A70] transition-colors leading-snug drop-shadow-md">
                            {app.title}
                          </h4>
                          <p className="text-[10.5px] sm:text-[11px] text-[#E8DFD4] line-clamp-1 font-normal drop-shadow-sm">
                            {app.tagline}
                          </p>

                          <div className="pt-1.5 sm:pt-2 flex items-center justify-between gap-1 text-[9.5px] sm:text-[10px] font-mono text-[#D1CCC5] border-t border-white/20">
                            <span className="text-white font-semibold drop-shadow-xs truncate">{app.badge}</span>
                            <span className={`font-semibold flex items-center gap-0.5 shrink-0 ${
                              isActive ? 'text-[#B49A70]' : 'text-white/80 group-hover/card:text-white'
                            }`}>
                              <span className="hidden sm:inline">{isActive ? t('Previewing', 'Pratinjau') : t('Select System', 'Pilih Sistem')}</span>
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

            <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-white/15 text-[11px] sm:text-xs text-[#A7A69F] font-mono">
              <div className="flex items-start sm:items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#AF8C72] shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-[#D1CCC5] leading-relaxed">
                  {t(
                    'Tap any system card to preview its walkthrough video in the background (muted).',
                    'Ketuk kartu sistem untuk memutar pratinjau video background (tanpa suara) masing-masing aplikasi.'
                  )}
                </span>
              </div>

              <button
                onClick={() => onNavigate('project-detail', activeApp.id)}
                className="inline-flex items-center gap-1.5 text-[#AF8C72] hover:text-white transition-colors font-semibold cursor-pointer group shrink-0"
              >
                <span>{t('Open Full Case Study & Sound Tour', 'Buka Detail Lengkap & Video Bersuara')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
