import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Play,
  ExternalLink,
  Filter,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Layers,
  Film,
  CheckCircle2,
  Users,
  Award,
  Lock,
  FileCheck2,
  Target,
  Activity,
  Compass,
  MapPin,
} from 'lucide-react';
import { IMAGES } from '../../data/portfolioData';
import { getLocalizedProjects } from '../../data/portfolioLocalized';
import { AppRoute, Project } from '../../types';
import { ScrollReveal } from '../ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectsPageProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
}

type FilterCategory =
  | 'All Projects'
  | 'HR & People'
  | 'Business & Strategy'
  | 'Digital Products'
  | 'Data & Analytics';

const FILTERS: FilterCategory[] = [
  'All Projects',
  'HR & People',
  'Business & Strategy',
  'Digital Products',
  'Data & Analytics',
];

const WNA_CHART_BARS = [
  { label: 'Q1', value: '32%', height: '30%', active: false },
  { label: 'Q2', value: '44%', height: '42%', active: false },
  { label: 'Q3', value: '51%', height: '48%', active: false },
  { label: 'Audit', value: '63%', height: '58%', active: false },
  { label: 'Calib', value: '74%', height: '70%', active: false },
  { label: 'Post', value: '+85%', height: '94%', active: true },
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const projects = getLocalizedProjects(lang);

  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All Projects');
  const [onlyVideoDemos, setOnlyVideoDemos] = useState(false);

  const categoryFiltered = projects.filter((p) => {
    if (activeFilter === 'All Projects') return true;
    if (activeFilter === 'HR & People') {
      return p.categoryFilter === 'HR & People' || p.category === 'People & Culture';
    }
    if (activeFilter === 'Business & Strategy') {
      return (
        p.categoryFilter === 'Business & Strategy' ||
        p.category === 'Org Strategy' ||
        p.category === 'Event Operations'
      );
    }
    if (activeFilter === 'Digital Products') {
      return p.categoryFilter === 'Digital Products' || p.category === 'HR Automation';
    }
    if (activeFilter === 'Data & Analytics') {
      return (
        p.categoryFilter === 'Data & Analytics' ||
        p.id === 'zeno-platform' ||
        p.id === 'indekstat-workforce-analysis'
      );
    }
    return true;
  });

  const filteredProjects = onlyVideoDemos
    ? categoryFiltered.filter((p) => Boolean(p.videoUrl))
    : categoryFiltered;

  const isDefaultAllMosaic = activeFilter === 'All Projects' && !onlyVideoDemos;

  const getFilteredColSpan = (total: number, idx: number): string => {
    if (total === 1) return 'lg:col-span-12';
    if (total === 2) return idx === 0 ? 'lg:col-span-7' : 'lg:col-span-5';
    if (total === 3) {
      if (idx === 0) return 'lg:col-span-5';
      if (idx === 1) return 'lg:col-span-4';
      return 'lg:col-span-3';
    }
    if (total === 4) {
      return idx === 0 || idx === 3 ? 'lg:col-span-7' : 'lg:col-span-5';
    }
    return idx % 3 === 0 ? 'lg:col-span-6' : 'lg:col-span-3';
  };

  const renderBentoTile = (
    proj: Project,
    spanClass: string,
    minHeightClass = 'min-h-[380px]',
    revealDelay = 0,
    useScrollReveal = true
  ) => {
    const primaryMetrics = proj.caseStudy?.results?.metrics || [];

    const wrapTile = (className: string, content: React.ReactNode) =>
      useScrollReveal ? (
        <ScrollReveal
          key={proj.id}
          as="article"
          variant="card"
          delay={revealDelay}
          onClick={() => onNavigate('project-detail', proj.id)}
          className={className}
        >
          {content}
        </ScrollReveal>
      ) : (
        <motion.article
          key={proj.id}
          layout
          initial={{ opacity: 0, y: 18, scale: 0.982 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.72, delay: revealDelay, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => onNavigate('project-detail', proj.id)}
          className={className}
        >
          {content}
        </motion.article>
      );

    switch (proj.id) {
      // 1. PERVIA — Hero Sage Flagship Tile (concentric rings + framed browser preview)
      case 'pervia-platform':
        return wrapTile(
          `${spanClass} ${minHeightClass} relative rounded-[2rem] bg-gradient-to-br from-[#6E7C69] via-[#62715E] to-[#4E5C4A] text-white p-6 sm:p-8 overflow-hidden cursor-pointer group flex flex-col justify-between shadow-sm hover:shadow-xl transition-all border border-[#5D6B58]`,
          <>
            {/* Concentric Architectural Rings */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[360px] h-[360px] rounded-full border border-white/15" />
              <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-white/10" />
              <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full border border-white/5" />
            </div>

            {/* Header Row */}
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="space-y-2.5 max-w-sm">
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.16em] text-[#EFE4D6]">
                  <Activity className="w-3.5 h-3.5 text-[#EFE4D6]" strokeWidth={1.6} />
                  <span>{proj.category}</span>
                  <span className="opacity-40">/</span>
                  <span>{proj.year}</span>
                </div>
                <h2 className="font-sans font-extrabold text-2xl sm:text-[2rem] leading-[1.1] tracking-tight text-white">
                  Pervia{' '}
                  <span className="font-serif italic font-normal text-[#F2E6D8]">
                    Enterprise
                  </span>{' '}
                  Performance Suite
                </h2>
                <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed line-clamp-2">
                  {proj.shortSummary}
                </p>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate('project-detail', proj.id);
                }}
                className="shrink-0 inline-flex items-center gap-2 pl-4 pr-2 py-2 rounded-full bg-white text-[#1E2022] hover:bg-[#FAF8F5] text-xs font-bold shadow-md transition-transform group-hover:scale-105 cursor-pointer"
              >
                <span>Case Study</span>
                <span className="w-6 h-6 rounded-full bg-[#6E7C69] text-white flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
              </button>
            </div>

            {/* Framed Device Preview Rising From Bottom */}
            <div className="relative z-10 mt-6 -mb-8 mx-auto w-full max-w-[460px] bg-[#FAF8F5] text-[#1E2022] rounded-t-[1.75rem] border-[6px] border-[#1E2022]/90 border-b-0 p-4 pb-8 shadow-2xl group-hover:-translate-y-1.5 transition-transform duration-500">
              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#E7E0D6]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6E7C69]" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#1E2022]">
                    Pervia PMS • 9-Box Matrix
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {proj.videoUrl && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#8F6D54]">
                      <Play className="w-2.5 h-2.5 fill-[#8F6D54]" />
                      Demo
                    </span>
                  )}
                  <span className="font-mono text-[10px] font-bold text-[#6E7C69]">98.4% Aligned</span>
                </div>
              </div>

              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#1E2022]">
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                  <span className="font-mono text-[10px] font-semibold">
                    66/92 Verified Deliverables
                  </span>
                  {proj.projectUrl && (
                    <a
                      href={proj.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#EFE4D6] hover:text-white underline"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </>
        );

      // 2. MATCHIFY — Clean Alabaster Editorial Fade Tile
      case 'matchify-platform':
        return wrapTile(
          `${spanClass} ${minHeightClass} relative rounded-[2rem] bg-gradient-to-b from-[#FAF8F5] to-white border border-[#E7E0D6] hover:border-[#6E7C69] overflow-hidden cursor-pointer group flex flex-col justify-between shadow-xs hover:shadow-xl transition-all`,
          <>
            {/* Top Visual Artifact With Soft White Fade */}
            <div className="relative h-56 sm:h-60 overflow-hidden bg-[#EFE8DF]">
              <img
                src={proj.image}
                alt={proj.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-white/30 to-white" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[#1E2022] border border-[#E7E0D6]">
                  {proj.category}
                </span>
                {proj.videoUrl && (
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2.5 py-1 rounded-lg bg-[#1E2022]/85 text-white backdrop-blur-md">
                    <Play className="w-2.5 h-2.5 fill-white" />
                    <span>Video</span>
                  </span>
                )}
              </div>
            </div>

            {/* Editorial Copy Block */}
            <div className="px-6 sm:px-7 pb-6 sm:pb-7 -mt-6 relative z-10 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8F6D54] font-bold">
                  <Target className="w-3.5 h-3.5 text-[#8F6D54]" strokeWidth={1.6} />
                  <span>{t('Recruitment Intelligence • 5,200+ Pipeline Capacity', 'Intelijen Rekrutmen • Kapasitas 5.200+')}</span>
                </div>
                <h2 className="font-sans font-extrabold text-2xl sm:text-[1.75rem] text-[#1E2022] group-hover:text-[#6E7C69] transition-colors leading-[1.12] tracking-tight">
                  Streamlining Hiring Into{' '}
                  <span className="font-serif italic font-normal text-[#6E7C69]">
                    Smart Velocity
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-[#5E626B] font-light leading-relaxed line-clamp-3">
                  {proj.shortSummary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E0D6] flex items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#605E59] block">
                    Time-to-Hire
                  </span>
                  <strong className="font-sans font-extrabold text-sm text-[#6E7C69]">
                    -60% (17.2 Days)
                  </strong>
                </div>

                <div className="flex items-center gap-2">
                  {proj.projectUrl && (
                    <a
                      href={proj.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full bg-[#FAF8F5] hover:bg-[#1E2022] hover:text-white text-[#1E2022] border border-[#E7E0D6] transition-colors"
                      title="Open Live Platform"
                    >
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.6} />
                    </a>
                  )}
                  <span className="w-8 h-8 rounded-full bg-[#1E2022] group-hover:bg-[#6E7C69] text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.8} />
                  </span>
                </div>
              </div>
            </div>
          </>
        );

      // 3. SLIPR — Full & Aesthetic Layered Payroll Security Showcase
      case 'slipr-platform':
        return wrapTile(
          `${spanClass} relative rounded-[2rem] bg-gradient-to-br from-[#F4EDE4] via-[#EFE7DC] to-[#E9DFD2] border border-[#DFD4C6] hover:border-[#AF8C72] p-5 sm:p-6 overflow-hidden cursor-pointer group flex flex-col justify-between shadow-xs hover:shadow-lg transition-all`,
          <>
            {/* Top Subtle Header Strip */}
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#DFD4C6]/80">
              <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8F6D54] font-bold">
                <Lock className="w-3 h-3 text-[#6E7C69]" strokeWidth={1.7} />
                <span>Encrypted HRIS</span>
              </div>
              {proj.videoUrl && (
                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#1E2022]">
                  <Play className="w-2.5 h-2.5 fill-[#1E2022]" />
                  <span>Demo</span>
                </span>
              )}
            </div>

            {/* Centerpiece Full Visual Card & Clean Compliance Ledger */}
            <div className="my-3.5 space-y-2.5 flex-1 flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-2.5 border border-[#E2D8CB] shadow-sm">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#1E2022]">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-white">
                    <span className="font-mono text-[9px] font-semibold tracking-wider uppercase text-[#EFE4D6]">
                      AES-256 Protected
                    </span>
                    <span className="font-mono text-[9px] font-bold text-white">
                      110+ Staff
                    </span>
                  </div>
                </div>
              </div>

              {/* Clean Full-Width Compliance Ledger Rows (No Truncation) */}
              <div className="bg-white/80 backdrop-blur-xs rounded-2xl px-3.5 py-2.5 border border-[#E2D8CB] space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-[#1E2022]">
                    <FileCheck2 className="w-3 h-3 text-[#6E7C69]" strokeWidth={1.7} />
                    TER PPh 21 &amp; BPJS
                  </span>
                  <span className="text-[#6E7C69] font-bold">Auto Sync</span>
                </div>
                <div className="h-px bg-[#EDE6DC]" />
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-[#1E2022]">
                    <ShieldCheck className="w-3 h-3 text-[#8F6D54]" strokeWidth={1.7} />
                    Digital Signature
                  </span>
                  <span className="text-[#8F6D54] font-bold">-75% Cycle</span>
                </div>
              </div>
            </div>

            {/* Bottom Typography & Action */}
            <div className="space-y-2 pt-1">
              <h2 className="font-sans font-extrabold text-xl text-[#1E2022] group-hover:text-[#6E7C69] transition-colors leading-[1.15] tracking-tight">
                Slipr —{' '}
                <span className="font-serif italic font-normal text-[#8F6D54]">
                  Encrypted
                </span>{' '}
                Payroll HRIS
              </h2>
              <div className="pt-2 flex items-center justify-between border-t border-[#DFD4C6]">
                <span className="text-[11px] font-mono font-semibold text-[#605E59]">
                  100% Tax Accuracy
                </span>
                <div className="flex items-center gap-2">
                  {proj.projectUrl && (
                    <a
                      href={proj.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[11px] font-mono font-bold text-[#8F6D54] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <span className="w-7 h-7 rounded-full bg-[#1E2022] group-hover:bg-[#6E7C69] text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.8} />
                  </span>
                </div>
              </div>
            </div>
          </>
        );

      // 4. FAN SUKSES HR — Album "myself" Portrait + Floating Glass Metric Notification Overlay
      case 'fan-sukses-hr':
        return wrapTile(
          `${spanClass} ${minHeightClass} relative rounded-[2rem] bg-[#1E2022] overflow-hidden cursor-pointer group flex flex-col justify-between shadow-sm hover:shadow-xl transition-all border border-[#2D3033]`,
          <>
            {/* Photo sourced directly from Album "myself" */}
            <img
              src={IMAGES.suryaModernCasual}
              alt={proj.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-[50%_18%] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141618] via-[#141618]/45 to-black/25" />

            {/* Top Minimal Header */}
            <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider border border-white/15">
                <Users className="w-3 h-3 text-[#EFE4D6]" strokeWidth={1.6} />
                <span>{proj.category}</span>
              </span>
              <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center border border-white/25 group-hover:bg-[#6E7C69] transition-colors">
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.8} />
              </span>
            </div>

            {/* Floating Notification Toast Overlay + Crisp White Editorial Heading */}
            <div className="relative z-10 p-5 sm:p-6 space-y-3.5">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-white/60 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
                <div className="w-9 h-9 rounded-xl bg-[#6E7C69] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" strokeWidth={1.7} />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-[#605E59] block truncate">
                    PT. Fan Sukses Bersama
                  </span>
                  <strong className="font-sans font-extrabold text-sm text-[#1E2022] block leading-tight">
                    110+ Staff • -65% Admin
                  </strong>
                </div>
              </div>

              <div>
                <h2 className="font-sans font-extrabold text-xl text-white leading-[1.15] tracking-tight">
                  Full-Spectrum{' '}
                  <span className="font-serif italic font-normal text-[#EFE4D6]">
                    People &amp; Culture
                  </span>
                </h2>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-white/80 mt-1">
                  <CheckCircle2 className="w-3 h-3 text-[#9BB094]" strokeWidth={1.8} />
                  <span>{t('End-to-End HR • 100% BPJS Compliance', 'HR End-to-End • 100% Kepatuhan BPJS')}</span>
                </span>
              </div>
            </div>
          </>
        );

      // 5. INDEKSTAT — Quantitative Bar Chart & Growth Callout Tile
      case 'indekstat-workforce-analysis':
        return wrapTile(
          `${spanClass} ${minHeightClass} relative rounded-[2rem] bg-white border border-[#E7E0D6] hover:border-[#6E7C69] p-5 sm:p-6 overflow-hidden cursor-pointer group flex flex-col justify-between shadow-xs hover:shadow-xl transition-all`,
          <>
            {/* Top Header & Spotlight Metric Callout Pill */}
            <div className="space-y-3.5">
              <div className="flex items-start justify-between gap-2">
                <div className="inline-flex items-center gap-2.5 bg-[#FAF8F5] border border-[#E7E0D6] rounded-2xl px-3.5 py-2.5 shadow-2xs">
                  <span className="w-7 h-7 rounded-full bg-[#1E2022] text-white flex items-center justify-center shrink-0">
                    <TrendingUp className="w-3.5 h-3.5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <strong className="font-sans font-black text-base text-[#1E2022] block leading-none">
                      +85%
                    </strong>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#605E59]">
                      Role Clarity
                    </span>
                  </div>
                </div>

                {/* Clustered Monogram Badges */}
                <div className="flex -space-x-2 pt-1">
                  <div className="w-7 h-7 rounded-full bg-[#6E7C69] text-white flex items-center justify-center text-[9px] font-mono font-bold border-2 border-white">
                    WNA
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#AF8C72] text-white flex items-center justify-center text-[9px] font-mono font-bold border-2 border-white">
                    35
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#1E2022] text-white flex items-center justify-center text-[9px] font-mono font-bold border-2 border-white">
                    KPI
                  </div>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8F6D54] font-bold block">
                  PT. Indekstat • Data &amp; Analytics
                </span>
                <h2 className="font-sans font-extrabold text-xl text-[#1E2022] group-hover:text-[#6E7C69] transition-colors leading-[1.15] tracking-tight mt-1">
                  Quantitative{' '}
                  <span className="font-serif italic font-normal text-[#6E7C69]">
                    Workforce
                  </span>{' '}
                  Diagnostics
                </h2>
              </div>
            </div>

            {/* Stylized Vertical Bar Comparison Chart with Thin Baseline */}
            <div className="pt-4">
              <div className="relative h-36 flex items-end justify-between gap-2 px-1 pb-1 border-b border-[#E7E0D6]">
                <div className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-dashed border-[#E7E0D6]" />
                {WNA_CHART_BARS.map((bar) => (
                  <div
                    key={bar.label}
                    className="relative z-10 flex-1 h-full flex flex-col items-center justify-end gap-1.5"
                  >
                    <span
                      className={`font-mono text-[9px] font-bold ${
                        bar.active ? 'text-[#6E7C69]' : 'text-[#8E8A82]'
                      }`}
                    >
                      {bar.value}
                    </span>
                    <div
                      style={{ height: bar.height }}
                      className={`w-full rounded-t-xl transition-all duration-500 ${
                        bar.active
                          ? 'bg-gradient-to-t from-[#586653] to-[#6E7C69] shadow-md group-hover:brightness-105'
                          : 'bg-[#F3EFEA] border border-[#E7E0D6] group-hover:bg-[#EAE3D9]'
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between gap-2 px-1 pt-1.5">
                {WNA_CHART_BARS.map((bar) => (
                  <span
                    key={bar.label}
                    className={`flex-1 text-center font-mono text-[9px] ${
                      bar.active ? 'text-[#1E2022] font-bold' : 'text-[#605E59]'
                    }`}
                  >
                    {bar.label}
                  </span>
                ))}
              </div>
            </div>
          </>
        );

      // 6. ZENO — Soft Champagne Verification Showcase Tile (Clean Preview, No Line!)
      case 'zeno-platform':
        return wrapTile(
          `${spanClass} ${minHeightClass} relative rounded-[2rem] bg-[#F7F1E8] border border-[#E5DACB] hover:border-[#AF8C72] pt-6 px-5 sm:px-6 pb-0 overflow-hidden cursor-pointer group flex flex-col justify-between text-center shadow-xs hover:shadow-xl transition-all`,
          <>
            <div className="space-y-2 max-w-xs mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#8F6D54]" strokeWidth={1.6} />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8F6D54] font-bold">
                  Psychometrics
                </span>
                {proj.videoUrl && (
                  <span className="inline-flex items-center gap-1 text-[9px] font-mono font-bold text-[#6E7C69]">
                    <Play className="w-2.5 h-2.5 fill-[#6E7C69]" />
                    Video
                  </span>
                )}
              </div>
              <h2 className="font-sans font-extrabold text-xl sm:text-2xl text-[#1E2022] group-hover:text-[#6E7C69] transition-colors leading-[1.15] tracking-tight">
                Zeno{' '}
                <span className="font-serif italic font-normal text-[#8F6D54]">
                  Psychometric
                </span>{' '}
                Engine
              </h2>
              <p className="text-xs text-[#5E626B] font-light leading-relaxed line-clamp-2">
                {t('-85% evaluation turnaround across 1,200+ calibrated test takers.', '-85% waktu evaluasi pada 1.200+ rekor asesmen terkalibrasi.')}
              </p>
            </div>

            {/* Inner Framed Verification Card Rising Cleanly (Line Removed) */}
            <div className="mt-5 mx-auto w-full max-w-[260px] bg-white rounded-t-3xl border border-[#E7E0D6] border-b-0 p-3.5 pb-5 shadow-lg group-hover:-translate-y-1.5 transition-transform duration-500">
              <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                <span className="font-bold text-[#1E2022]">MBTI &amp; DISC</span>
                <span className="text-[#6E7C69] font-bold">15 Mins Avg</span>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#1E2022]">
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="pt-2.5 flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#605E59]">100% Accuracy</span>
                {proj.projectUrl ? (
                  <a
                    href={proj.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[#8F6D54] font-bold hover:underline inline-flex items-center gap-0.5"
                  >
                    <span>Live</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                ) : (
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#1E2022]" />
                )}
              </div>
            </div>
          </>
        );

      // 7. RAKAMIN — Obsidian Midnight Executive Showcase + Floating Bottom Dock
      case 'rakamin-change-mgmt':
        return wrapTile(
          `${spanClass} ${minHeightClass} relative rounded-[2rem] bg-[#1E2022] text-white p-5 sm:p-6 overflow-hidden cursor-pointer group flex flex-col justify-between shadow-sm hover:shadow-xl transition-all border border-[#2F3337]`,
          <>
            {/* Top Executive Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.15em] text-[#AF8C72]">
                <span className="inline-flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-[#AF8C72]" strokeWidth={1.6} />
                  Org Strategy • 2026
                </span>
                <span className="text-white/65">Rakamin</span>
              </div>
              <h2 className="font-sans font-extrabold text-xl text-white leading-[1.15] tracking-tight group-hover:text-[#EFE4D6] transition-colors">
                Change Management &amp;{' '}
                <span className="font-serif italic font-normal text-[#DEC2A3]">
                  C-Suite Playbook
                </span>
              </h2>
            </div>

            {/* Inner Light Preview Card */}
            <div className="my-4 bg-[#FAF8F5] text-[#1E2022] rounded-2xl p-3 border border-white/10 shadow-xl">
              <div className="aspect-[16/9] max-h-44 w-full rounded-xl overflow-hidden bg-[#1E2022] mb-2.5">
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="font-bold text-[#1E2022]">Power BI Dashboards</span>
                <span className="text-[#6E7C69] font-bold">+40% Speed</span>
              </div>
            </div>

            {/* Floating Bottom Action Dock */}
            <div className="bg-[#2B2E33]/95 backdrop-blur-md border border-white/15 rounded-2xl px-3.5 py-2.5 flex items-center justify-between gap-2 shadow-lg group-hover:border-[#AF8C72]/60 transition-colors">
              <div className="min-w-0">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#AF8C72] block">
                  100% Role Clarity
                </span>
                <strong className="font-sans text-xs font-semibold text-white truncate block">
                  Leadership Handbook
                </strong>
              </div>
              <span className="shrink-0 px-3 py-1.5 rounded-full bg-[#AF8C72] text-[#14171A] font-bold text-[10px] uppercase tracking-wider inline-flex items-center gap-1 group-hover:bg-white transition-colors">
                <span>Open</span>
                <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
              </span>
            </div>
          </>
        );

      // 8. IPB OSIS FEST — Wide Warm Champagne Split Editorial Card
      case 'ipb-osis-fest-pr': {
        const isWideTile = spanClass.includes('col-span-7') || spanClass.includes('col-span-12');
        return wrapTile(
          `${spanClass} relative rounded-[2rem] bg-gradient-to-br from-[#EFE7DC] via-[#F7F3ED] to-white border border-[#DFD5C8] hover:border-[#AF8C72] p-6 sm:p-8 overflow-hidden cursor-pointer group grid grid-cols-1 ${
            isWideTile ? 'md:grid-cols-12' : ''
          } gap-6 items-center shadow-xs hover:shadow-xl transition-all`,
          <>
            {/* Left Copy & Metrics */}
            <div className={`${isWideTile ? 'md:col-span-7' : ''} space-y-4`}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E2022] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                  <Award className="w-3 h-3 text-[#AF8C72]" strokeWidth={1.8} />
                  <span>1st Place National • PREA 2024</span>
                </span>
                <span className="font-mono text-[11px] text-[#8F6D54] font-semibold">
                  Duta IPB University
                </span>
              </div>

              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1E2022] group-hover:text-[#6E7C69] transition-colors leading-[1.12] tracking-tight">
                Nationwide Digital PR &amp;{' '}
                <span className="font-serif italic font-normal text-[#8F6D54]">
                  OSIS Fest
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-[#4A4843] font-light leading-relaxed">
                {proj.shortSummary}
              </p>

              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                {primaryMetrics.slice(1, 4).map((m) => (
                  <div key={m.label} className="bg-white/90 rounded-2xl p-2.5 sm:p-3 border border-[#E7E0D6]">
                    <strong className="font-sans font-extrabold text-base sm:text-lg text-[#1E2022] block leading-none">
                      {m.value}
                    </strong>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#605E59] block mt-1 truncate">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Framed Visual Showcase */}
            <div className={`${isWideTile ? 'md:col-span-5' : ''} h-full flex flex-col justify-between gap-4`}>
              <div className="relative aspect-[4/3] max-h-56 w-full rounded-2xl overflow-hidden bg-[#1E2022] border border-[#E7E0D6] shadow-md">
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-white">
                  <MapPin className="w-3 h-3 text-[#EFE4D6]" strokeWidth={1.7} />
                  <span>27 Provinces Connected</span>
                </span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="font-mono text-[11px] font-semibold text-[#8F6D54]">
                  ESG Digital Communication
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E2022] group-hover:text-[#6E7C69]">
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#AF8C72]" strokeWidth={1.8} />
                </span>
              </div>
            </div>
          </>
        );
      }

      // 9. SAKALA OPERATIONS — Soft Herbal Sage Mist Split Tile
      case 'sakala-operations':
      default:
        return wrapTile(
          `${spanClass} relative rounded-[2rem] bg-[#E8EEE6] border border-[#D4DFD1] hover:border-[#6E7C69] p-6 sm:p-7 overflow-hidden cursor-pointer group flex flex-col justify-between shadow-xs hover:shadow-xl transition-all`,
          <>
            <div className="space-y-4">
              <div className="relative aspect-[16/9] max-h-52 w-full rounded-2xl overflow-hidden bg-[#1E2022] border border-white/60 shadow-sm">
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[#1E2022] font-mono text-[10px] font-bold uppercase tracking-wider">
                  {proj.category}
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="font-mono text-[10px] font-semibold">{proj.client}</span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#EFE4D6]">
                    <CheckCircle2 className="w-3 h-3" strokeWidth={1.8} />
                    100% Success Rate
                  </span>
                </div>
              </div>

              <div>
                <h2 className="font-sans font-extrabold text-xl sm:text-2xl text-[#1E2022] group-hover:text-[#6E7C69] transition-colors leading-[1.15] tracking-tight">
                  Large-Scale{' '}
                  <span className="font-serif italic font-normal text-[#6E7C69]">
                    Crowd
                  </span>{' '}
                  Operations
                </h2>
                <p className="text-xs text-[#4A4843] font-light leading-relaxed mt-1.5 line-clamp-2">
                  {proj.shortSummary}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#D4DFD1] flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <strong className="font-sans font-extrabold text-base text-[#1E2022] block leading-none">
                    50+
                  </strong>
                  <span className="font-mono text-[9px] uppercase text-[#605E59]">Productions</span>
                </div>
                <div className="w-px h-6 bg-[#CBD6C8]" />
                <div>
                  <strong className="font-sans font-extrabold text-base text-[#6E7C69] block leading-none">
                    2,000+
                  </strong>
                  <span className="font-mono text-[9px] uppercase text-[#605E59]">Guest Flow</span>
                </div>
              </div>

              <span className="w-9 h-9 rounded-full bg-[#1E2022] group-hover:bg-[#6E7C69] text-white flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.8} />
              </span>
            </div>
          </>
        );
    }
  };

  const projectById = Object.fromEntries(projects.map((p) => [p.id, p]));

  return (
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-28 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 sm:space-y-12">
        {/* Page Header */}
        <section className="border-b border-[#E7E0D6] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <ScrollReveal immediateOnMount variant="editorial" delay={0} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E7C69]/12 text-[#6E7C69] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" strokeWidth={1.7} />
              <span>{t('Bento Showcase & Case Studies', 'Etalase Bento & Studi Kasus')}</span>
            </div>
            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#1E2022] tracking-tight leading-[1.05]">
              {t('Selected Works', 'Karya & Sistem')}{' '}
              <span className="font-serif italic font-normal text-[#6E7C69]">
                {t('& Systems', 'Terpilih')}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-[#5E626B] mt-3 font-light leading-relaxed">
              {t(
                'In-house HR tech platforms, organizational diagnostics, workforce modeling frameworks, and national leadership campaigns — curated in an editorial Bento mosaic.',
                'Platform teknologi HR internal, diagnostik organisasi, pemodelan kebutuhan tenaga kerja, serta kampanye kepemimpinan nasional — tersusun dalam mozaik Bento editorial.'
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal
            immediateOnMount
            variant="subtle"
            delay={0.12}
            className="flex flex-wrap items-center gap-3 self-start md:self-end"
          >
            <button
              type="button"
              onClick={() => setOnlyVideoDemos((prev) => !prev)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold border transition-all cursor-pointer ${
                onlyVideoDemos
                  ? 'bg-[#6E7C69] text-white border-[#6E7C69] shadow-xs'
                  : 'bg-white text-[#1E2022] border-[#E7E0D6] hover:border-[#6E7C69]'
              }`}
            >
              <Film className="w-3.5 h-3.5" strokeWidth={1.7} />
              <span>
                {onlyVideoDemos
                  ? t('Video Demos Only (On)', 'Khusus Demo Video (Aktif)')
                  : t('Video Demos (4)', 'Demo Video (4)')}
              </span>
            </button>

            <div className="font-mono text-xs text-[#8F6D54] font-semibold bg-white px-4 py-2 rounded-full border border-[#E7E0D6] shadow-2xs">
              {filteredProjects.length} / {projects.length} {t('Systems', 'Sistem')}
            </div>
          </ScrollReveal>
        </section>

        {/* Category Filters */}
        <ScrollReveal immediateOnMount variant="subtle" delay={0.16} className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#605E59] mr-2">
            <Filter className="w-3.5 h-3.5 text-[#6E7C69]" strokeWidth={1.7} />
            <span className="font-semibold uppercase tracking-wider">Filter:</span>
          </div>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-full transition-all cursor-pointer ${
                activeFilter === f
                  ? 'bg-[#1E2022] text-white shadow-xs'
                  : 'bg-white text-[#605E59] hover:text-[#1E2022] hover:bg-[#FAF8F5] border border-[#E7E0D6]'
              }`}
            >
              {f}
            </button>
          ))}
        </ScrollReveal>

        {/* BENTO MOSAIC GRID */}
        {isDefaultAllMosaic ? (
          <div className="space-y-6">
            {/* ROW 1 — 12-Col Bento Mosaic */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {renderBentoTile(
                projectById['pervia-platform'],
                'lg:col-span-5',
                'min-h-[450px] lg:min-h-[500px]',
                0
              )}
              {renderBentoTile(
                projectById['matchify-platform'],
                'lg:col-span-4',
                'min-h-[450px] lg:min-h-[500px]',
                0.09
              )}

              <div className="lg:col-span-3 flex flex-col gap-5 justify-between">
                {renderBentoTile(projectById['slipr-platform'], 'flex-1', 'min-h-[380px]', 0.18)}

                <ScrollReveal variant="subtle" delay={0.24}>
                  <button
                    type="button"
                    onClick={() => setOnlyVideoDemos(true)}
                    className="w-full rounded-[1.5rem] bg-white hover:bg-[#FAF8F5] border border-[#E7E0D6] hover:border-[#6E7C69] px-5 py-3.5 flex items-center justify-between gap-3 shadow-xs hover:shadow-md transition-all cursor-pointer group text-left"
                  >
                      <div>
                      <span className="font-sans font-bold text-sm text-[#1E2022] block leading-tight">
                        {t('Watch Interactive', 'Tonton Demo Interaktif')}
                      </span>
                      <span className="text-xs text-[#605E59] font-light">
                        {t('4 Live System Tours', '4 Tur Sistem Aktif')}
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#1E2022] group-hover:bg-[#6E7C69] text-white flex items-center justify-center transition-colors shrink-0">
                      <Layers className="w-4 h-4" strokeWidth={1.7} />
                    </div>
                  </button>
                </ScrollReveal>
              </div>
            </div>

            {/* ROW 2 — 4-Column Diverse Bento Archetypes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
              {renderBentoTile(projectById['fan-sukses-hr'], 'lg:col-span-3', 'min-h-[385px]', 0)}
              {renderBentoTile(
                projectById['indekstat-workforce-analysis'],
                'lg:col-span-3',
                'min-h-[385px]',
                0.08
              )}
              {renderBentoTile(projectById['zeno-platform'], 'lg:col-span-3', 'min-h-[385px]', 0.16)}
              {renderBentoTile(projectById['rakamin-change-mgmt'], 'lg:col-span-3', 'min-h-[385px]', 0.24)}
            </div>

            {/* ROW 3 — Asymmetric Finale */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {renderBentoTile(projectById['ipb-osis-fest-pr'], 'lg:col-span-7', 'min-h-[290px]', 0)}
              {renderBentoTile(projectById['sakala-operations'], 'lg:col-span-5', 'min-h-[290px]', 0.12)}
            </div>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
              {filteredProjects.map((proj, idx) =>
                renderBentoTile(
                  proj,
                  getFilteredColSpan(filteredProjects.length, idx),
                  'min-h-[360px]',
                  idx * 0.06,
                  false
                )
              )}
            </div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};
