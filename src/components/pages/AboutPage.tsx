import React from 'react';
import { ArrowUpRight, FileText, Sparkles, GraduationCap } from 'lucide-react';
import { IMAGES, PERSONAL_VALUES } from '../../data/portfolioData';
import { AppRoute } from '../../types';
import { ScrollReveal } from '../ScrollReveal';

interface AboutPageProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
  onOpenResume: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-28 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20 sm:space-y-24">
        {/* =========================================================================
            SECTION A — PERSONAL INTRODUCTION
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-b border-[#E7E0D6] pb-20">
          {/* Left Column: Portrait with Nexora-style soft card frame */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal immediateOnMount variant="media" duration={1.0} delay={0.04}>
              <div className="relative aspect-[4/5] bg-white p-4 rounded-3xl border border-[#E7E0D6] shadow-md">
                <img
                  src={IMAGES.suryaBalconyExecutive}
                  alt="Bangkit Surya Wijaya — Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top rounded-2xl filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 right-6 bg-[#1E2022]/95 backdrop-blur-md text-white px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest border border-white/20 shadow-md">
                  B. Surya Wijaya · S.Pt.
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="card" delay={0.14}>
              <div className="p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-3 shadow-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6E7C69]/10 text-[#6E7C69] text-[11px] font-mono uppercase tracking-wider font-bold">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Academic Credential</span>
                </div>
                <strong className="font-sans font-bold text-xl text-[#1E2022] block">
                  Institut Pertanian Bogor (IPB University)
                </strong>
                <p className="text-xs text-[#605E59] font-mono leading-relaxed">
                  Bachelor of Animal Science (S.Pt.) · GPA 3.65 / 4.00
                  <br />
                  Official Duta IPB University · PREA 2024 National Winner
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal immediateOnMount variant="editorial" delay={0.08}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#AF8C72]/15 text-[#AF8C72] text-[11px] font-mono uppercase tracking-wider font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Editorial Biography</span>
              </div>
              <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#1E2022] tracking-tight leading-tight">
                Bangkit Surya Wijaya
              </h1>
              <span className="font-mono text-sm uppercase tracking-widest text-[#6E7C69] font-bold block mt-2">
                The Modern Strategist · Human Capital Enthusiast
              </span>
            </ScrollReveal>

            <ScrollReveal immediateOnMount variant="editorial" delay={0.16} className="space-y-5 text-[#4A4843] text-sm sm:text-base leading-relaxed font-light">
              <p className="text-lg text-[#1E2022] font-normal leading-relaxed">
                I operate at the intersection of organizational psychology, business diagnostics, and internal software engineering — helping organizations scale without losing their human foundation.
              </p>

              <p>
                My professional trajectory is defined by hands-on execution. As Sole HR Lead managing over 110 employees at PT Fan Sukses Bersama, I do not just draft policies; I build the software systems that make those policies effortless to maintain. When manual hiring, payslips, and psychometrics choked operational momentum, I architected Matchify, Slipr, and Zeno to eliminate the bottlenecks.
              </p>

              <p>
                Earlier in my career at PT Indekstat and PT Rakamin Kolektif Madani, I focused on quantitative workforce planning: translating organizational ambiguities into calibrated RACI matrices, C-suite workforce dashboards, and corporate leadership handbooks.
              </p>

              <p>
                Outside the boardroom, my background in high-stakes event operations — from directing the national IPB OSIS Fest across 27 provinces to coordinating luxury productions for up to 2,000 guests — has honed an instinct for real-time crisis mitigation, flawless timeline execution, and diplomatic presence.
              </p>
            </ScrollReveal>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E7E0D6] text-center">
              <ScrollReveal variant="card" delay={0}>
                <div className="p-4 bg-white border border-[#E7E0D6] rounded-2xl shadow-xs">
                  <span className="font-sans font-black text-3xl text-[#1E2022] block">110+</span>
                  <span className="font-mono text-[10px] text-[#AF8C72] uppercase tracking-wider font-semibold">Staff Managed</span>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="card" delay={0.07}>
                <div className="p-4 bg-white border border-[#E7E0D6] rounded-2xl shadow-xs">
                  <span className="font-sans font-black text-3xl text-[#6E7C69] block">-75%</span>
                  <span className="font-mono text-[10px] text-[#AF8C72] uppercase tracking-wider font-semibold">Payroll Time</span>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="card" delay={0.14}>
                <div className="p-4 bg-white border border-[#E7E0D6] rounded-2xl shadow-xs">
                  <span className="font-sans font-black text-3xl text-[#1E2022] block">50+</span>
                  <span className="font-mono text-[10px] text-[#AF8C72] uppercase tracking-wider font-semibold">Major Events</span>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="card" delay={0.21}>
                <div className="p-4 bg-white border border-[#E7E0D6] rounded-2xl shadow-xs">
                  <span className="font-sans font-black text-3xl text-[#AF8C72] block">1st</span>
                  <span className="font-mono text-[10px] text-[#AF8C72] uppercase tracking-wider font-semibold">PREA 2024</span>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="subtle" delay={0.16} className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 bg-[#1E2022] text-white hover:bg-black text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-full flex items-center gap-2 shadow-md active:scale-95"
              >
                <FileText className="w-4 h-4 text-[#AF8C72]" />
                <span>Download Executive CV</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-white text-[#1E2022] border border-[#E7E0D6] hover:bg-[#1E2022] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-full shadow-xs active:scale-95"
              >
                Start a Conversation
              </button>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION B — PROFESSIONAL PHILOSOPHY
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-[#E7E0D6] pb-20 items-start">
          <ScrollReveal variant="editorial" delay={0} className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#AF8C72] block font-bold">
              Approach & Mindset
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#1E2022] tracking-tight leading-tight">
              Professional Philosophy
            </h2>
          </ScrollReveal>

          <div className="lg:col-span-8 space-y-6 text-[#4A4843] text-base leading-relaxed font-light">
            <ScrollReveal variant="editorial" delay={0.08}>
              <blockquote className="font-serif text-2xl text-[#1E2022] italic pl-6 border-l-4 border-[#6E7C69] leading-snug">
                "Great systems do not replace human discernment; they create the quiet bandwidth required for discernment to flourish."
              </blockquote>
            </ScrollReveal>

            <ScrollReveal variant="editorial" delay={0.14}>
              <p>
                I believe modern organizational strategy fails when it treats human capital as either an abstract spreadsheet headcount or an emotional cheerleading exercise. Sustainable organizational health requires three interlocking pillars:
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs font-normal">
              <ScrollReveal variant="card" delay={0.08} className="h-full">
                <div className="h-full p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-2 shadow-xs">
                  <span className="font-mono text-[#6E7C69] text-xs font-bold block">01 / Rigorous Diagnosis</span>
                  <p className="text-[#605E59] leading-relaxed">
                    Understand true task redundancies and structural bottlenecks through data before recommending organizational shifts.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="card" delay={0.16} className="h-full">
                <div className="h-full p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-2 shadow-xs">
                  <span className="font-mono text-[#AF8C72] text-xs font-bold block">02 / Seamless Automation</span>
                  <p className="text-[#605E59] leading-relaxed">
                    Replace repetitive administrative friction with bespoke software tools so team energy is invested in cultural retention and innovation.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="card" delay={0.24} className="h-full">
                <div className="h-full p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-2 shadow-xs">
                  <span className="font-mono text-[#1E2022] text-xs font-bold block">03 / Empathetic Clarity</span>
                  <p className="text-[#605E59] leading-relaxed">
                    Enforce accountability through radical transparency, unambiguous job expectations, and deep respect for individual dignity.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION C — CAREER PERSPECTIVE
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-[#E7E0D6] pb-20 items-start">
          <ScrollReveal variant="editorial" delay={0} className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6E7C69] block font-bold">
              Evolution of Thought
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#1E2022] tracking-tight leading-tight">
              Career Perspective
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="editorial" delay={0.12} className="lg:col-span-8 space-y-6 text-[#4A4843] text-sm sm:text-base leading-relaxed font-light">
            <p>
              My path has deliberately avoided narrow specialization. Starting from student governance and university representation as Duta IPB University, I learned early that communication is fundamentally about building consensus across diverse stakeholder groups.
            </p>
            <p>
              Transitioning into corporate human capital, I realized that many standard HR departments were paralyzed by administrative paperwork. Rather than accepting off-the-shelf software with steep subscription fees, I taught myself modern cloud and web engineering to build custom solutions tailored precisely to company workflows.
            </p>
            <p>
              Today, I operate with equal comfort in boardrooms aligning OKRs with C-suite executives, in code editors architecting recruitment intelligence algorithms, and behind the scenes orchestrating 2,000-person high-stakes event productions.
            </p>
          </ScrollReveal>
        </section>

        {/* =========================================================================
            SECTION D — PERSONAL VALUES: 4 Core Values
            ========================================================================= */}
        <section className="space-y-8">
          <ScrollReveal variant="editorial" delay={0}>
            <span className="font-mono text-xs uppercase tracking-widest text-[#AF8C72] block font-bold mb-2">
              Ethos & Principles
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#1E2022] tracking-tight">
              Personal Values
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERSONAL_VALUES.map((val, valIdx) => (
              <ScrollReveal key={val.num} variant="card" delay={valIdx * 0.08} className="h-full">
                <div className="h-full p-8 bg-white border border-[#E7E0D6] rounded-3xl space-y-4 shadow-xs hover:border-[#6E7C69] transition-all">
                  <span className="font-mono text-xs text-[#6E7C69] font-bold block">
                    {val.num} / PRINCIPLE
                  </span>
                  <h3 className="font-sans font-bold text-xl text-[#1E2022]">
                    {val.title}
                  </h3>
                  <p className="font-mono text-xs text-[#AF8C72] italic font-semibold">
                    "{val.principle}"
                  </p>
                  <p className="text-xs text-[#605E59] leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION E — RESUME DOWNLOAD CTA BANNER (Sage Container)
            ========================================================================= */}
        <ScrollReveal variant="media" duration={0.95} delay={0.08}>
          <section className="p-8 sm:p-12 bg-[#6E7C69] text-white rounded-[2rem] shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#EAE2D8] font-bold">
                Curriculum Vitae & Credentials
              </span>
              <h3 className="font-sans font-extrabold text-3xl sm:text-4xl text-white">
                Looking for a comprehensive resume?
              </h3>
              <p className="text-xs sm:text-sm text-[#F3EFEA]/90 max-w-xl font-light">
                Review verified career milestones, technical stack competencies, academic honors, and organizational leadership in a printable executive document.
              </p>
            </div>

            <button
              onClick={onOpenResume}
              className="px-8 py-4 bg-[#1E2022] text-white hover:bg-black text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer shrink-0 shadow-md flex items-center gap-2"
            >
              <span>Open Executive CV</span>
              <ArrowUpRight className="w-4 h-4 text-[#AF8C72]" />
            </button>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
};
