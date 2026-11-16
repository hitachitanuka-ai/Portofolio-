import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ArrowDown,
  Play, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Sparkles, 
  X,
  Volume2,
  VolumeX,
  Image as ImageIcon
} from 'lucide-react';
import { AppRoute, Project } from '../../types';
import { ScrollReveal } from '../ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedProjects } from '../../data/portfolioLocalized';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigate: (route: AppRoute, slug?: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId, onNavigate }) => {
  const { lang, t } = useLanguage();
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const projects = getLocalizedProjects(lang);
  const project: Project | undefined = projects.find((p) => p.id === projectId) || projects[0];

  useEffect(() => {
    setIsPlayingVideo(true);
    const video = videoRef.current;
    if (video && project?.videoUrl) {
      video.muted = false;
      video.play().then(() => {
        setIsMuted(false);
      }).catch(() => {
        // Fallback if browser requires click gesture before unmuting
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    }
  }, [projectId, project?.videoUrl]);

  if (!project) return null;

  const toggleSound = () => {
    const video = videoRef.current;
    if (video) {
      const nextMuted = !video.muted;
      video.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const scrollToDetails = () => {
    const details = document.getElementById('case-study-details');
    if (details) {
      details.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cs = project.caseStudy;
  const relatedProjects = projects.filter((p) => p.id !== project.id && (cs?.relatedProjectIds.includes(p.id) || true)).slice(0, 2);

  return (
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-28 sm:pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-16">
        {/* Top Back Navigation Bar */}
        <ScrollReveal immediateOnMount variant="subtle" delay={0} className="flex items-center justify-between border-b border-[#E7E0D6] pb-6">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E2022] hover:text-[#6E7C69] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#AF8C72]" />
            <span>{t('Back to Projects Archive', 'Kembali ke Arsip Proyek')}</span>
          </button>

          <span className="font-mono text-xs text-[#9E7B62] font-semibold">
            {t('Case Study', 'Studi Kasus')} · {project.category}
          </span>
        </ScrollReveal>

        {/* =========================================================================
            A. INITIAL VIEW: IMMEDIATE VIDEO PREMIERE WITH SOUND (Point 5)
            ========================================================================= */}
        <section className="space-y-6">
          {/* Header Title & Summary */}
          <ScrollReveal immediateOnMount variant="editorial" delay={0.07} className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#605E59]">
              <span className="px-3 py-1 bg-white border border-[#E7E0D6] text-[#6E7C69] uppercase font-bold rounded-full shadow-2xs">
                {project.category}
              </span>
              <span>·</span>
              <span>Year {project.year || project.date}</span>
              <span>·</span>
              <span className="font-semibold text-[#1E2022]">{project.client}</span>
              {project.videoUrl && (
                <span className="inline-flex items-center gap-1 text-[11px] font-mono bg-[#6E7C69]/15 text-[#6E7C69] px-2.5 py-0.5 rounded-full font-bold ml-1">
                  ● Video Walkthrough Playing
                </span>
              )}
            </div>

            <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-[#1E2022] tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[#4A4843] max-w-3xl leading-relaxed font-light">
              {project.shortSummary || project.description}
            </p>
          </ScrollReveal>

          {/* Premiere Video Container: Immediately plays with sound */}
          <ScrollReveal immediateOnMount variant="media" duration={1.0} delay={0.14} blur={4} className="relative aspect-[16/10] bg-[#14171A] rounded-3xl overflow-hidden border border-[#E7E0D6] shadow-2xl">
            {project.videoUrl && isPlayingVideo ? (
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  poster={project.image}
                  className="w-full h-full object-contain"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Browser Anda belum mendukung pemutaran video HTML5.
                </video>

                {/* Floating Sound Controller Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <button
                    onClick={toggleSound}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 backdrop-blur-md shadow-lg transition-all cursor-pointer ${
                      isMuted
                        ? 'bg-amber-500/90 hover:bg-amber-500 text-black font-bold animate-pulse'
                        : 'bg-black/75 hover:bg-black text-white border border-white/20'
                    }`}
                    title={isMuted ? 'Klik untuk aktifkan suara' : 'Klik untuk matikan suara'}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5" />
                        <span>{t('Click to Enable Sound', 'Klik untuk Aktifkan Suara')}</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{t('Sound On', 'Suara Aktif')}</span>
                      </>
                    )}
                  </button>

                  {/* Toggle Screenshot Button */}
                  <button
                    onClick={() => setIsPlayingVideo(false)}
                    className="px-3 py-1.5 rounded-full bg-black/60 hover:bg-black text-white text-xs font-mono flex items-center gap-1 border border-white/20 backdrop-blur-md transition-colors cursor-pointer"
                    title={t('Show Cover Screenshot', 'Tampilkan Gambar Cover')}
                  >
                    <ImageIcon className="w-3 h-3 text-[#AF8C72]" />
                    <span>{t('Cover Image', 'Gambar Cover')}</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {project.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => {
                        setIsPlayingVideo(true);
                        setTimeout(() => {
                          if (videoRef.current) {
                            videoRef.current.muted = false;
                            videoRef.current.play().catch(() => {});
                          }
                        }, 100);
                      }}
                      className="px-6 py-3.5 bg-white text-[#1E2022] hover:bg-[#F3EFEA] text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-2.5 shadow-2xl transition-all cursor-pointer hover:scale-105 active:scale-95"
                    >
                      <Play className="w-4 h-4 fill-current text-[#AF8C72]" />
                      <span>{t('Play Walkthrough Video with Sound', 'Putar Video dengan Suara')}</span>
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Launch Live Demo Top-Right Badge */}
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-[#1E2022]/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono text-white border border-white/20 hover:bg-black transition-colors flex items-center gap-1.5 shadow-md z-20"
              >
                <span>{t('Launch Live System Demo', 'Buka Demo Sistem Live')}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#AF8C72]" />
              </a>
            )}
          </ScrollReveal>

          {/* Quick Nav Prompt to Proceed to Detailed Explanation */}
          <ScrollReveal immediateOnMount variant="subtle" delay={0.2} className="flex items-center justify-between pt-2">
            <span className="text-xs font-mono text-[#9E7B62]">
              {t(
                'Video tour above · Scroll down for full system architecture and outcomes.',
                'Tur video aktif di atas · Gulir ke bawah untuk penjelasan arsitektur dan dampak lengkap.'
              )}
            </span>

            <button
              onClick={scrollToDetails}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#1E2022] hover:text-white text-xs font-semibold uppercase tracking-wider text-[#1E2022] border border-[#E7E0D6] shadow-2xs transition-all cursor-pointer group"
            >
              <span>{t('Read Detailed Case Study', 'Lanjut ke Penjelasan Detail Aplikasi')}</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#AF8C72] group-hover:translate-y-0.5 transition-transform" />
            </button>
          </ScrollReveal>
        </section>

        {/* =========================================================================
            B. PROJECT OVERVIEW & C. THE CHALLENGE (Anchor ID: case-study-details)
            ========================================================================= */}
        <section id="case-study-details" className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#E7E0D6] pt-16">
          <ScrollReveal variant="card" delay={0} className="h-full">
          <div className="h-full p-8 bg-white border border-[#E7E0D6] rounded-3xl space-y-4 shadow-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6E7C69] block font-bold">
              B / Project Overview
            </span>
            <h2 className="font-sans font-bold text-2xl text-[#1E2022]">
              Context & Rationale
            </h2>
            <p className="text-xs sm:text-sm text-[#4A4843] leading-relaxed font-light">
              {cs?.overview || project.description}
            </p>
          </div>
          </ScrollReveal>

          <ScrollReveal variant="card" delay={0.1} className="h-full">
          <div className="h-full p-8 bg-white border border-[#E7E0D6] rounded-3xl space-y-4 shadow-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-[#AF8C72] block font-bold">
              C / The Operational Challenge
            </span>
            <h2 className="font-sans font-bold text-2xl text-[#1E2022]">
              Friction & Bottlenecks
            </h2>
            <p className="text-xs sm:text-sm text-[#4A4843] leading-relaxed font-light">
              {cs?.challenge || 'Organizations frequently struggle with manual spreadsheet errors, fragmented cross-functional communication, and slow turnaround times that hinder organizational velocity.'}
            </p>
          </div>
          </ScrollReveal>
        </section>

        {/* =========================================================================
            D. OBJECTIVES & E. STRATEGIC APPROACH
            ========================================================================= */}
        <section className="border-t border-[#E7E0D6] pt-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Objectives */}
            <ScrollReveal variant="card" delay={0} className="h-full">
            <div className="h-full p-8 bg-white border border-[#E7E0D6] rounded-3xl space-y-4 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-widest text-[#6E7C69] block font-bold">
                D / Target Objectives
              </span>
              <h2 className="font-sans font-bold text-2xl text-[#1E2022]">
                Target Outcomes
              </h2>
              <ul className="space-y-3 pt-2">
                {(cs?.objectives || project.features || [
                  'Eliminate manual data re-entry across HR and management spreadsheets.',
                  'Provide real-time visibility into operational bottlenecks.',
                  'Ensure complete legal compliance with labor and tax standards.'
                ]).map((obj, oIdx) => (
                  <li key={oIdx} className="flex items-start gap-3 text-xs text-[#1E2022]">
                    <CheckCircle2 className="w-4 h-4 text-[#6E7C69] shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>

            {/* Strategic Approach */}
            <ScrollReveal variant="card" delay={0.1} className="h-full">
            <div className="h-full p-8 bg-white border border-[#E7E0D6] rounded-3xl space-y-4 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-widest text-[#AF8C72] block font-bold">
                E / Strategic Approach
              </span>
              <h2 className="font-sans font-bold text-2xl text-[#1E2022]">
                Planning & Analysis
              </h2>
              <div className="space-y-3 pt-2 text-xs text-[#4A4843] font-light leading-relaxed">
                {(cs?.strategicApproach || [
                  'Conducted structured time-motion interviews across active stakeholders.',
                  'Standardized mathematical formulas and validation rules before prototyping.',
                  'Deployed agile test cycles ensuring high user adoption and minimal friction.'
                ]).map((strat, sIdx) => (
                  <div key={sIdx} className="p-3 bg-[#F3EFEA] border border-[#E7E0D6] rounded-2xl text-[#1E2022]">
                    {strat}
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            F. EXECUTION & ARCHITECTURE
            ========================================================================= */}
        <section className="border-t border-[#E7E0D6] pt-16 space-y-8">
          <ScrollReveal variant="editorial" delay={0}>
            <span className="font-mono text-xs uppercase tracking-widest text-[#6E7C69] block font-bold mb-2">
              F / Execution & Architecture
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-[#1E2022]">
              Implementation & Workflows
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="card" delay={0.08} className="p-8 bg-white border border-[#E7E0D6] rounded-3xl space-y-6 shadow-xs">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#9E7B62] uppercase tracking-wider block font-bold">
                Core Workflow Pipeline:
              </span>
              <p className="text-xs sm:text-sm font-mono text-[#1E2022] leading-relaxed bg-[#F3EFEA] p-4 rounded-2xl border border-[#E7E0D6]">
                {cs?.execution.workflows || 'Discovery → Diagnostic Blueprint → System Development → Automated Data Validation → Handover & Training.'}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-2 pt-2">
              <span className="font-mono text-xs text-[#9E7B62] uppercase tracking-wider block font-bold">
                Technologies & Frameworks Deployed:
              </span>
              <div className="flex flex-wrap gap-2">
                {(cs?.execution.techStack || [project.exif.lens, 'Cloud Automation', 'Workspace APIs']).map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1 bg-[#F3EFEA] border border-[#E7E0D6] text-xs font-mono text-[#1E2022] rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* =========================================================================
            G. PRODUCT SHOWCASE: Visual Artifacts & Live Demo
            ========================================================================= */}
        <section className="border-t border-[#E7E0D6] pt-16 space-y-8">
          <ScrollReveal variant="editorial" delay={0} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#AF8C72] block font-bold mb-2">
                G / Product Showcase
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-3xl text-[#1E2022]">
                Interactive Artifacts & Demos
              </h2>
            </div>

            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#1E2022] text-white hover:bg-black text-xs font-semibold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 cursor-pointer self-start sm:self-auto shadow-md"
              >
                <span>Launch Live System Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#AF8C72]" />
              </a>
            )}
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal variant="media" delay={0} className="aspect-[16/10] bg-white p-3 border border-[#E7E0D6] rounded-3xl overflow-hidden shadow-xs">
              <img
                src={project.image}
                alt="System visual interface"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl"
              />
            </ScrollReveal>

            {project.additionalImages?.[0] && (
              <ScrollReveal variant="media" delay={0.12} className="aspect-[16/10] bg-white p-3 border border-[#E7E0D6] rounded-3xl overflow-hidden shadow-xs">
                <img
                  src={project.additionalImages[0]}
                  alt="Contextual deployment"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* =========================================================================
            H. RESULTS & IMPACT: Quantitative Outcomes
            ========================================================================= */}
        <section className="border-t border-[#E7E0D6] pt-16 space-y-8">
          <ScrollReveal variant="editorial" delay={0}>
            <span className="font-mono text-xs uppercase tracking-widest text-[#6E7C69] block font-bold mb-2">
              H / Results & Impact
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-[#1E2022]">
              Verifiable Business Outcomes
            </h2>
          </ScrollReveal>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {(cs?.results.metrics || [
              { label: 'Efficiency Gain', value: project.exif.aperture, detail: 'Measurable ROI' },
              { label: 'Scale Covered', value: project.exif.focalLength, detail: 'Personnel/Applicants' },
              { label: 'Cycle Time', value: '-60%', detail: 'Administrative reduction' },
              { label: 'Accuracy', value: '100%', detail: 'Verified output' }
            ]).map((m, idx) => (
              <ScrollReveal key={idx} variant="card" delay={idx * 0.08} className="h-full">
              <div className="h-full p-6 bg-white border border-[#E7E0D6] rounded-3xl text-center space-y-1 shadow-xs">
                <span className="font-sans font-black text-3xl sm:text-4xl text-[#6E7C69] block">
                  {m.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#1E2022] block font-bold">
                  {m.label}
                </span>
                <span className="font-mono text-[10px] text-[#9E7B62] block">
                  {m.detail}
                </span>
              </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="subtle" delay={0.14}>
          <p className="text-xs sm:text-sm text-[#4A4843] leading-relaxed font-light p-6 bg-white border border-[#E7E0D6] rounded-3xl shadow-xs">
            {cs?.results.impactNarrative || project.description}
          </p>
          </ScrollReveal>
        </section>

        {/* =========================================================================
            I. KEY LEARNINGS
            ========================================================================= */}
        <section className="border-t border-[#E7E0D6] pt-16 space-y-6">
          <ScrollReveal variant="editorial" delay={0}>
            <span className="font-mono text-xs uppercase tracking-widest text-[#AF8C72] block font-bold mb-2">
              I / Professional Takeaways
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-[#1E2022]">
              Key Learnings & Strategic Insights
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {(cs?.keyLearnings || [
              'Clear operational standards reduce employee cognitive fatigue and raise retention.',
              'In-house automation creates immense enterprise value without recurring SaaS costs.'
            ]).map((learn, idx) => (
              <ScrollReveal key={idx} variant="subtle" delay={idx * 0.07}>
              <div className="p-4 bg-white border border-[#E7E0D6] rounded-2xl flex items-start gap-3 shadow-2xs">
                <span className="font-mono text-xs text-[#6E7C69] font-bold mt-0.5">0{idx + 1}.</span>
                <span className="text-xs sm:text-sm text-[#1E2022] leading-relaxed">{learn}</span>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* =========================================================================
            J. RELATED PROJECTS
            ========================================================================= */}
        <section className="border-t border-[#E7E0D6] pt-16 space-y-8">
          <ScrollReveal variant="editorial" delay={0} className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#6E7C69] block font-bold mb-1">
                J / Related Work
              </span>
              <h2 className="font-sans font-black text-2xl sm:text-3xl text-[#1E2022]">
                Explore Other Case Studies
              </h2>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="text-xs font-bold uppercase tracking-wider text-[#1E2022] hover:text-[#6E7C69] transition-colors border-b-2 border-[#1E2022] pb-0.5 cursor-pointer"
            >
              All Projects ↗
            </button>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedProjects.map((rel, idx) => (
              <ScrollReveal key={rel.id} variant="card" delay={idx * 0.1} className="h-full">
              <div
                onClick={() => {
                  onNavigate('project-detail', rel.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="h-full p-6 bg-white border border-[#E7E0D6] hover:border-[#6E7C69] transition-all rounded-3xl cursor-pointer group flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#AF8C72] font-bold block mb-1">
                    {rel.category} · {rel.date}
                  </span>
                  <h3 className="font-sans font-bold text-2xl text-[#1E2022] group-hover:text-[#6E7C69] transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-[#4A4843] mt-2 line-clamp-2 font-light">
                    {rel.shortSummary || rel.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E7E0D6] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1E2022]">
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#AF8C72] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
