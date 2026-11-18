import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Users,
  Award,
  BarChart3,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Cpu,
  FileText,
  Trophy,
  HeartHandshake,
  Compass,
  TrendingUp,
  LayoutGrid,
  Calculator,
  Target,
  Scale,
  FileCheck2,
  Wallet,
  ClipboardCheck,
  Handshake,
  ShieldAlert,
  Radio,
  GitBranch,
  Mic,
  Network,
  Heart,
  UserCheck,
  Lock,
  BrainCircuit,
  Cloud,
  PieChart,
  FileSpreadsheet,
  Code2,
  PenTool,
  BookOpen,
  Workflow,
  Kanban,
} from 'lucide-react';
import { AppRoute } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { OrganizationalExplorer } from './OrganizationalExplorer';
import { WorkingExperienceShowcase } from './WorkingExperienceShowcase';
import { useLanguage } from '../context/LanguageContext';

interface ProfessionalJourneyDashboardProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
  onOpenResume: () => void;
}

// =========================================================================
// DATA: Competencies (Hard Skills, Soft Skills, Tools)
// =========================================================================
const HARD_SKILLS = [
  { name: 'Workforce Needs Analysis (WNA)', level: 'Advanced', tag: 'Analytics' },
  { name: '9-Box Talent Matrix & Succession', level: 'Advanced', tag: 'Strategy' },
  { name: 'TER PPh 21 & BPJS Tax Calculations', level: 'Expert', tag: 'Compliance' },
  { name: 'OKR & KPI Cascading Architecture', level: 'Advanced', tag: 'Strategy' },
  { name: 'Competency Rubrics & Job Grading', level: 'Advanced', tag: 'Org Design' },
  { name: 'Strategic Workforce Planning', level: 'Advanced', tag: 'Planning' },
  { name: 'Labor Contracts & Employment Law', level: 'Compliant', tag: 'Legal' },
  { name: 'Compensation & Benefits Structuring', level: 'Advanced', tag: 'FinTech' },
  { name: 'SOP Formulation & Process Auditing', level: 'Expert', tag: 'Operations' },
];

const SOFT_SKILLS = [
  { name: 'C-Suite Diplomacy & Stakeholder Alignment', tag: 'Diplomacy' },
  { name: 'Real-Time Crisis Mitigation Under Pressure', tag: 'Resilience' },
  { name: 'Empathetic People Leadership & Mediation', tag: 'Empathy' },
  { name: 'High-Pressure Crowd & Live Event Logistics', tag: 'Execution' },
  { name: 'Change Management & Structural Handoffs', tag: 'Transformation' },
  { name: 'Public Speaking, Keynote Hosting & MC Protocol', tag: 'Communication' },
  { name: 'Cross-Functional Team Synchronization', tag: 'Coordination' },
  { name: 'High Emotional Intelligence (EQ) & Listening', tag: 'Culture' },
];

const TOOLS_CATEGORIES = [
  {
    category: 'HR Tech & Automation Systems',
    tools: [
      { name: 'Pervia PMS', desc: 'Performance & 9-Box Grid' },
      { name: 'Matchify RMS', desc: 'Recruitment & ATS Intelligence' },
      { name: 'Slipr Payroll', desc: 'TER PPh 21 & Payslip Auto' },
      { name: 'Zeno Assessment', desc: 'MBTI & DISC Psychometrics' },
      { name: 'Google Workspace Admin', desc: 'IAM & Cloud Workflows' }
    ]
  },
  {
    category: 'Data, BI & Quantitative Telemetry',
    tools: [
      { name: 'Microsoft Power BI', desc: 'Executive C-Suite Dashboards' },
      { name: 'Looker Studio', desc: 'Live Funnel Visualizations' },
      { name: 'Excel Advanced', desc: 'XLOOKUP, Power Query, Macros' },
      { name: 'Google Sheets & Apps Script', desc: 'Cloud Automation' }
    ]
  },
  {
    category: 'Product, Design & Productivity',
    tools: [
      { name: 'Figma', desc: 'UI/UX Prototyping & Flowcharts' },
      { name: 'Notion', desc: 'Knowledge Base & SOP Wikis' },
      { name: 'Miro', desc: 'Process Mapping & Architecture' },
      { name: 'Asana / Trello', desc: 'Agile Task Delivery' }
    ]
  }
];

type ToneKey = 'sage' | 'champagne' | 'slate' | 'terracotta' | 'espresso';

const ECOSYSTEM_TONES: Record<
  ToneKey,
  {
    spotlightBorder: string;
    ringBorder: string;
    haloBg: string;
    haloBorder: string;
    iconColor: string;
    tagColor: string;
    accentPillBg: string;
    dotColor: string;
    glowBg: string;
    subTextColor: string;
  }
> = {
  sage: {
    spotlightBorder: 'border-[#5D7256]',
    ringBorder: 'border-[#8FA387]/75',
    haloBg: 'bg-[#E9F1E8]',
    haloBorder: 'border-[#C6D7C3]',
    iconColor: 'text-[#3F5538]',
    tagColor: 'text-[#4B6144]',
    accentPillBg: 'bg-[#5D7256]',
    dotColor: 'bg-[#5D7256]',
    glowBg: 'bg-[#6E7C69]/15',
    subTextColor: 'text-[#4B6144]',
  },
  champagne: {
    spotlightBorder: 'border-[#B49A70]',
    ringBorder: 'border-[#C8B18B]/85',
    haloBg: 'bg-[#F8F0E3]',
    haloBorder: 'border-[#E5D3B6]',
    iconColor: 'text-[#8C683E]',
    tagColor: 'text-[#8F6D45]',
    accentPillBg: 'bg-[#B49A70]',
    dotColor: 'bg-[#B49A70]',
    glowBg: 'bg-[#B49A70]/18',
    subTextColor: 'text-[#8C683E]',
  },
  slate: {
    spotlightBorder: 'border-[#4D6D7E]',
    ringBorder: 'border-[#7D99A8]/75',
    haloBg: 'bg-[#E8F0F4]',
    haloBorder: 'border-[#C2D4DE]',
    iconColor: 'text-[#2D4B5A]',
    tagColor: 'text-[#3B5C6D]',
    accentPillBg: 'bg-[#4D6D7E]',
    dotColor: 'bg-[#4D6D7E]',
    glowBg: 'bg-[#4D6D7E]/15',
    subTextColor: 'text-[#3B5C6D]',
  },
  terracotta: {
    spotlightBorder: 'border-[#A66A5A]',
    ringBorder: 'border-[#C29082]/75',
    haloBg: 'bg-[#F6EBE7]',
    haloBorder: 'border-[#E0C4BB]',
    iconColor: 'text-[#7F4637]',
    tagColor: 'text-[#8C5243]',
    accentPillBg: 'bg-[#A66A5A]',
    dotColor: 'bg-[#A66A5A]',
    glowBg: 'bg-[#A66A5A]/15',
    subTextColor: 'text-[#7F4637]',
  },
  espresso: {
    spotlightBorder: 'border-[#3B4048]',
    ringBorder: 'border-[#8D8981]/70',
    haloBg: 'bg-[#EFECE6]',
    haloBorder: 'border-[#D7D0C4]',
    iconColor: 'text-[#23272F]',
    tagColor: 'text-[#4D4A44]',
    accentPillBg: 'bg-[#23272F]',
    dotColor: 'bg-[#23272F]',
    glowBg: 'bg-[#23272F]/10',
    subTextColor: 'text-[#3D424B]',
  },
};

interface OrbitalEcosystemItem {
  id: string;
  name: string;
  group: 'hard' | 'soft' | 'tools';
  groupLabel: string;
  subLabel: string;
  tag: string;
  levelLabel: string;
  dots: number;
  tone: ToneKey;
  icon: React.FC<{ className?: string; strokeWidth?: number }>;
}

const HARD_SKILL_VISUALS: Array<{ tone: ToneKey; icon: React.FC<{ className?: string; strokeWidth?: number }> }> = [
  { tone: 'sage', icon: TrendingUp },       // WNA
  { tone: 'champagne', icon: LayoutGrid },  // 9-Box Matrix
  { tone: 'espresso', icon: Calculator },   // PPh 21 & BPJS
  { tone: 'terracotta', icon: Target },     // OKR & KPI
  { tone: 'slate', icon: Scale },           // Competency Rubrics
  { tone: 'sage', icon: Compass },          // Workforce Planning
  { tone: 'espresso', icon: FileCheck2 },   // Labor Contracts
  { tone: 'champagne', icon: Wallet },      // Compensation & Benefits
  { tone: 'slate', icon: ClipboardCheck },  // SOP Auditing
];

const SOFT_SKILL_VISUALS: Array<{ tone: ToneKey; icon: React.FC<{ className?: string; strokeWidth?: number }> }> = [
  { tone: 'champagne', icon: Handshake },   // C-Suite Diplomacy
  { tone: 'terracotta', icon: ShieldAlert },// Crisis Mitigation
  { tone: 'sage', icon: Users },            // Empathetic Leadership
  { tone: 'espresso', icon: Radio },        // Crowd & Event Logistics
  { tone: 'slate', icon: GitBranch },       // Change Management
  { tone: 'champagne', icon: Mic },         // Public Speaking & MC
  { tone: 'sage', icon: Network },          // Cross-Functional Sync
  { tone: 'terracotta', icon: Heart },      // Emotional Intelligence
];

const TOOL_VISUALS: Record<string, { tone: ToneKey; icon: React.FC<{ className?: string; strokeWidth?: number }> }> = {
  'Pervia PMS': { tone: 'sage', icon: Award },
  'Matchify RMS': { tone: 'terracotta', icon: UserCheck },
  'Slipr Payroll': { tone: 'espresso', icon: Lock },
  'Zeno Assessment': { tone: 'champagne', icon: BrainCircuit },
  'Google Workspace Admin': { tone: 'slate', icon: Cloud },
  'Microsoft Power BI': { tone: 'champagne', icon: BarChart3 },
  'Looker Studio': { tone: 'slate', icon: PieChart },
  'Excel Advanced': { tone: 'sage', icon: FileSpreadsheet },
  'Google Sheets & Apps Script': { tone: 'espresso', icon: Code2 },
  'Figma': { tone: 'terracotta', icon: PenTool },
  'Notion': { tone: 'espresso', icon: BookOpen },
  'Miro': { tone: 'champagne', icon: Workflow },
  'Asana / Trello': { tone: 'slate', icon: Kanban },
};

const ORBITAL_ECOSYSTEM_ITEMS: OrbitalEcosystemItem[] = [
  ...HARD_SKILLS.map((s, idx) => {
    const visual = HARD_SKILL_VISUALS[idx] || { tone: 'sage' as ToneKey, icon: BarChart3 };
    return {
      id: `hard-${idx}`,
      name: s.name,
      group: 'hard' as const,
      groupLabel: 'Hard Skill & Analytics',
      subLabel: `${s.level} Proficiency`,
      tag: s.tag,
      levelLabel: s.level,
      dots: s.level === 'Expert' ? 3 : 2,
      tone: visual.tone,
      icon: visual.icon,
    };
  }),
  ...SOFT_SKILLS.map((s, idx) => {
    const visual = SOFT_SKILL_VISUALS[idx] || { tone: 'terracotta' as ToneKey, icon: HeartHandshake };
    return {
      id: `soft-${idx}`,
      name: s.name,
      group: 'soft' as const,
      groupLabel: 'Executive Soft Skill',
      subLabel: 'Field-Proven Leadership',
      tag: s.tag,
      levelLabel: 'Executive',
      dots: 3,
      tone: visual.tone,
      icon: visual.icon,
    };
  }),
  ...TOOLS_CATEGORIES.flatMap((cat, cIdx) =>
    cat.tools.map((t, tIdx) => {
      const visual = TOOL_VISUALS[t.name] || { tone: 'slate' as ToneKey, icon: Cpu };
      return {
        id: `tool-${cIdx}-${tIdx}`,
        name: t.name,
        group: 'tools' as const,
        groupLabel: cat.category.split('&')[0].trim(),
        subLabel: t.desc,
        tag: 'Stack',
        levelLabel: 'Production',
        dots: 3,
        tone: visual.tone,
        icon: visual.icon,
      };
    })
  ),
];

export const ProfessionalJourneyDashboard: React.FC<ProfessionalJourneyDashboardProps> = ({
  onNavigate,
  onOpenResume,
}) => {
  const { t } = useLanguage();

  // Competency filter active tab & Orbital spotlight index
  const [skillsTab, setSkillsTab] = useState<'all' | 'hard' | 'soft' | 'tools'>('all');
  const [activeOrbitalIdx, setActiveOrbitalIdx] = useState<number>(0);

  const visibleOrbitalItems =
    skillsTab === 'all'
      ? ORBITAL_ECOSYSTEM_ITEMS
      : ORBITAL_ECOSYSTEM_ITEMS.filter((item) => item.group === skillsTab);

  const safeOrbitalIdx =
    visibleOrbitalItems.length > 0 ? activeOrbitalIdx % visibleOrbitalItems.length : 0;

  const getOrbitalItemAtOffset = (offset: number) => {
    const len = visibleOrbitalItems.length;
    if (len === 0) return null;
    const targetIdx = (((safeOrbitalIdx + offset) % len) + len) % len;
    return { item: visibleOrbitalItems[targetIdx], idx: targetIdx };
  };

  const centerNode = getOrbitalItemAtOffset(0);

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 1 — PROFESSIONAL JOURNEY: ROLES & IMPACT (Natural Top-to-Bottom Flow)
          ========================================================================= */}
      <section className="w-full bg-[#F3EFEA] py-10 sm:py-14 border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
            <ScrollReveal variant="editorial" delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E7C69]/10 text-[#6E7C69] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Briefcase className="w-3.5 h-3.5 text-[#AF8C72]" />
                <span>{t('Career Trajectory', 'Lintasan Karier Profesional')}</span>
              </div>
              <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#1E2022] tracking-tight">
                {t('Professional Journey', 'Perjalanan Profesional')}
              </h2>
              <p className="text-xs sm:text-sm text-[#605E59] font-light leading-relaxed mt-1 max-w-2xl">
                {t(
                  'An integrated overview of HR leadership, quantitative workforce needs diagnostics, and high-stakes operational execution.',
                  'Ringkasan integratif kepemimpinan sumber daya manusia, analisa kebutuhan tenaga kerja berbasis data, dan orkestrasi operasional berskala tinggi.'
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="subtle" delay={0.14} className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 bg-white hover:bg-[#1E2022] hover:text-white text-[#1E2022] border border-[#E7E0D6] rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-2xs active:scale-95 flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-[#6E7C69]" />
                <span>{t('Download Full CV', 'Unduh CV Lengkap')}</span>
              </button>

              <button
                onClick={() => onNavigate('experience', 'working')}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E2022] hover:text-[#6E7C69] transition-colors border-b-2 border-[#1E2022] pb-0.5 cursor-pointer"
              >
                <span>{t('Full Archive ↗', 'Arsip Lengkap ↗')}</span>
              </button>
            </ScrollReveal>
          </div>

          {/* Interactive Executive Career Dossier (Replaces nested 2x2 expandable cards) */}
          <ScrollReveal variant="media" duration={0.85} delay={0.08}>
            <WorkingExperienceShowcase
              onNavigate={onNavigate}
              onOpenResume={onOpenResume}
              compactHeader
            />
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — SKILLS & ECOSYSTEM (Editorial Orbital Carousel Concept)
          Inspired by circular depth-wave showcase with refined champagne rings
          ========================================================================= */}
      <section className="w-full bg-[#FAF8F5] py-10 sm:py-14 border-b border-[#E7E0D6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6 sm:space-y-8">
          {/* Centered Editorial Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <ScrollReveal variant="subtle" delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B49A70]/12 text-[#8F6D54] text-[11px] font-mono font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#B49A70]" strokeWidth={1.7} />
                <span>Competency Matrix &amp; Technical Stack</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="editorial" delay={0.08}>
              <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#1E2022] tracking-tight">
                <span className="text-[#B49A70] font-serif italic font-normal mr-2">—</span>
                Skills &amp;{' '}
                <span className="font-serif italic font-normal text-[#6E7C69]">
                  Ecosystem
                </span>
                <span className="text-[#B49A70] font-serif italic font-normal ml-2">—</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="editorial" delay={0.14}>
              <p className="text-xs sm:text-sm text-[#605E59] font-light leading-relaxed">
                {t(
                  'Interactive exploration of People Analytics, human leadership, and HR automation stack integrated across daily operations.',
                  'Eksplorasi interaktif keahlian analitik SDM, kepemimpinan manusia, dan teknologi otomasi yang terintegrasi dalam operasional nyata.'
                )}
              </p>
            </ScrollReveal>

            {/* Centered Compact Filter Selector */}
            <ScrollReveal variant="subtle" delay={0.2} className="pt-2 flex justify-center w-full">
              <div className="w-full max-w-md sm:max-w-none sm:w-auto grid grid-cols-2 sm:inline-flex items-center justify-center gap-1.5 sm:gap-1 p-1.5 sm:p-1 bg-white rounded-2xl sm:rounded-full border border-[#E7E0D6] shadow-2xs">
                {[
                  { id: 'all', label: `All Ecosystem (${ORBITAL_ECOSYSTEM_ITEMS.length})` },
                  { id: 'hard', label: `Hard Skills (${HARD_SKILLS.length})` },
                  { id: 'soft', label: `Soft Skills (${SOFT_SKILLS.length})` },
                  { id: 'tools', label: 'Tools & Stack (13)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setSkillsTab(tab.id as 'all' | 'hard' | 'soft' | 'tools');
                      setActiveOrbitalIdx(0);
                    }}
                    className={`px-2.5 sm:px-3.5 py-2 sm:py-1.5 rounded-xl sm:rounded-full text-[10.5px] sm:text-[11px] font-mono transition-all cursor-pointer font-semibold text-center ${
                      skillsTab === tab.id
                        ? 'bg-[#1E2022] text-white shadow-xs'
                        : 'text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* =========================================================================
              ORBITAL DEPTH-WAVE CIRCULAR STAGE
              ========================================================================= */}
          <ScrollReveal variant="media" duration={0.95} delay={0.12}>
          <div className="relative pt-4 pb-12 sm:py-12 flex items-center justify-center min-h-[320px] sm:min-h-[370px] select-none">
            {/* Soft radial backdrop glow adapting to spotlight color */}
            {centerNode && (
              <div
                className={`pointer-events-none absolute w-80 h-80 rounded-full blur-3xl transition-colors duration-500 ${
                  ECOSYSTEM_TONES[centerNode.item.tone].glowBg
                }`}
              />
            )}

            {/* Desktop Staggered Depth-Wave Ring Field */}
            <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center gap-3 sm:gap-5 lg:gap-6">
              {/* FAR LEFT (-3) — Whisper Fade */}
              {(() => {
                const slot = getOrbitalItemAtOffset(-3);
                if (!slot) return null;
                const Icon = slot.item.icon;
                const tone = ECOSYSTEM_TONES[slot.item.tone];
                return (
                  <button
                    type="button"
                    onClick={() => setActiveOrbitalIdx(slot.idx)}
                    className={`hidden xl:flex flex-col items-center justify-center w-28 h-28 rounded-full bg-white/75 border ${tone.ringBorder} opacity-45 hover:opacity-85 transition-all p-3 text-center translate-y-6 shrink-0 cursor-pointer`}
                  >
                    <span className={`w-6 h-6 rounded-full ${tone.haloBg} flex items-center justify-center mb-1`}>
                      <Icon className={`w-3 h-3 ${tone.iconColor}`} strokeWidth={1.7} />
                    </span>
                    <span className="font-sans text-[10px] font-semibold text-[#1E2022] line-clamp-2 leading-tight">
                      {slot.item.name}
                    </span>
                  </button>
                );
              })()}

              {/* MID LEFT UPPER (-2) */}
              {(() => {
                const slot = getOrbitalItemAtOffset(-2);
                if (!slot) return null;
                const Icon = slot.item.icon;
                const tone = ECOSYSTEM_TONES[slot.item.tone];
                return (
                  <button
                    type="button"
                    onClick={() => setActiveOrbitalIdx(slot.idx)}
                    className={`hidden lg:flex flex-col items-center justify-center w-32 h-32 rounded-full bg-white border-[1.5px] ${tone.ringBorder} hover:border-[#1E2022] shadow-xs hover:shadow-md transition-all p-3 text-center -translate-y-8 shrink-0 cursor-pointer group`}
                  >
                    <span className={`w-8 h-8 rounded-full ${tone.haloBg} border ${tone.haloBorder} flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-4 h-4 ${tone.iconColor}`} strokeWidth={1.7} />
                    </span>
                    <span className="font-sans text-[11px] font-bold text-[#1E2022] line-clamp-2 leading-tight">
                      {slot.item.name}
                    </span>
                    <span className={`font-mono text-[9px] ${tone.tagColor} font-bold mt-1`}>
                      {slot.item.tag}
                    </span>
                  </button>
                );
              })()}

              {/* NEAR LEFT LOWER (-1) */}
              {(() => {
                const slot = getOrbitalItemAtOffset(-1);
                if (!slot) return null;
                const Icon = slot.item.icon;
                const tone = ECOSYSTEM_TONES[slot.item.tone];
                return (
                  <button
                    type="button"
                    onClick={() => setActiveOrbitalIdx(slot.idx)}
                    className={`hidden sm:flex flex-col items-center justify-center w-26 h-26 md:w-28 md:h-28 rounded-full bg-white border-[1.5px] ${tone.ringBorder} hover:border-[#1E2022] shadow-xs hover:shadow-md transition-all p-2.5 text-center translate-y-9 shrink-0 cursor-pointer group`}
                  >
                    <span className={`w-7 h-7 rounded-full ${tone.haloBg} border ${tone.haloBorder} flex items-center justify-center mb-1 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-3.5 h-3.5 ${tone.iconColor}`} strokeWidth={1.7} />
                    </span>
                    <span className="font-sans text-[10px] font-bold text-[#1E2022] line-clamp-2 leading-tight">
                      {slot.item.name}
                    </span>
                    <span className={`font-mono text-[8px] ${tone.tagColor} font-bold mt-0.5`}>
                      {slot.item.levelLabel}
                    </span>
                  </button>
                );
              })()}

              {/* CENTER SPOTLIGHT RING (0) */}
              {centerNode && (() => {
                const CenterIcon = centerNode.item.icon;
                const tone = ECOSYSTEM_TONES[centerNode.item.tone];

                return (
                  <div className="relative flex items-center justify-center shrink-0 mx-1 sm:mx-2">
                    {/* Left Arrow Floating Control */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveOrbitalIdx(
                          (safeOrbitalIdx - 1 + visibleOrbitalItems.length) %
                            visibleOrbitalItems.length
                        )
                      }
                      aria-label="Previous skill"
                      className="absolute -left-3 sm:-left-5 z-20 w-9 h-9 rounded-full bg-white border border-[#E7E0D6] hover:border-[#1E2022] hover:bg-[#1E2022] hover:text-white text-[#1E2022] shadow-md flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    >
                      <ChevronLeft className="w-4 h-4" strokeWidth={2} />
                    </button>

                    {/* Center Large Spotlight Circle */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={centerNode.item.id}
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className={`w-[252px] h-[252px] sm:w-[296px] sm:h-[296px] rounded-full bg-white border-[3px] ${tone.spotlightBorder} shadow-[0_20px_50px_rgba(30,32,34,0.10)] p-5 sm:p-7 flex flex-col items-center justify-between text-center relative`}
                      >
                        {/* Top Micro Header inside Circle */}
                        <div className="space-y-1 pt-1">
                          <span className={`font-mono text-[9px] uppercase tracking-[0.14em] sm:tracking-[0.16em] ${tone.tagColor} font-bold block`}>
                            {centerNode.item.groupLabel}
                          </span>
                          <h3 className="font-sans font-extrabold text-[15px] sm:text-lg text-[#1E2022] leading-tight line-clamp-2 px-2">
                            {centerNode.item.name}
                          </h3>
                        </div>

                        {/* Center Harmonious Color Halo & Unique Semantic Icon */}
                        <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl ${tone.haloBg} border ${tone.haloBorder} flex items-center justify-center shadow-inner transition-colors`}>
                          <CenterIcon className={`w-7 h-7 sm:w-8 sm:h-8 ${tone.iconColor}`} strokeWidth={1.65} />
                        </div>

                        {/* Bottom Outcome & Domain Subtitle */}
                        <div className="pb-2 space-y-0.5 px-2">
                          <span className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-wider text-[#605E59] block">
                            Applied Focus
                          </span>
                          <strong className={`font-serif italic text-[15px] sm:text-lg ${tone.subTextColor} font-normal block leading-tight line-clamp-1`}>
                            {centerNode.item.subLabel}
                          </strong>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Right Arrow Floating Control */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveOrbitalIdx(
                          (safeOrbitalIdx + 1) % visibleOrbitalItems.length
                        )
                      }
                      aria-label="Next skill"
                      className="absolute -right-3 sm:-right-5 z-20 w-9 h-9 rounded-full bg-white border border-[#E7E0D6] hover:border-[#1E2022] hover:bg-[#1E2022] hover:text-white text-[#1E2022] shadow-md flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    >
                      <ChevronRight className="w-4 h-4" strokeWidth={2} />
                    </button>

                    {/* Floating Bottom-Left Spec Chip */}
                    <div className="absolute -bottom-5 sm:-bottom-3 left-0 sm:left-1 z-20 bg-white border border-[#E7E0D6] rounded-xl px-2.5 sm:px-3 py-1.5 shadow-md flex items-center gap-2 sm:gap-2.5 text-[10px] font-mono">
                      <span className="font-bold text-[#1E2022]">
                        {String(safeOrbitalIdx + 1).padStart(2, '0')}/
                        {String(visibleOrbitalItems.length).padStart(2, '0')}
                      </span>
                      <span className="w-px h-3 bg-[#E7E0D6]" />
                      <span className={`${tone.tagColor} font-bold`}>
                        {centerNode.item.tag}
                      </span>
                      <span className="flex items-center gap-0.5">
                        {[1, 2, 3].map((dot) => (
                          <span
                            key={dot}
                            className={`w-1.5 h-1.5 rounded-full ${
                              dot <= centerNode.item.dots ? tone.dotColor : 'bg-[#E7E0D6]'
                            }`}
                          />
                        ))}
                      </span>
                    </div>

                    {/* Floating Bottom-Center Color-Matched Verified Check Pill */}
                    <div className={`absolute -bottom-5 sm:-bottom-4 right-1 sm:right-auto sm:left-1/2 sm:translate-x-16 z-20 w-8 h-8 rounded-xl ${tone.accentPillBg} text-white shadow-md flex items-center justify-center border-2 border-white transition-colors`}>
                      <CheckCircle2 className="w-4 h-4" strokeWidth={2} />
                    </div>
                  </div>
                );
              })()}

              {/* NEAR RIGHT LOWER (+1) */}
              {(() => {
                const slot = getOrbitalItemAtOffset(1);
                if (!slot) return null;
                const Icon = slot.item.icon;
                const tone = ECOSYSTEM_TONES[slot.item.tone];
                return (
                  <button
                    type="button"
                    onClick={() => setActiveOrbitalIdx(slot.idx)}
                    className={`hidden sm:flex flex-col items-center justify-center w-26 h-26 md:w-28 md:h-28 rounded-full bg-white border-[1.5px] ${tone.ringBorder} hover:border-[#1E2022] shadow-xs hover:shadow-md transition-all p-2.5 text-center translate-y-8 shrink-0 cursor-pointer group`}
                  >
                    <span className={`w-7 h-7 rounded-full ${tone.haloBg} border ${tone.haloBorder} flex items-center justify-center mb-1 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-3.5 h-3.5 ${tone.iconColor}`} strokeWidth={1.7} />
                    </span>
                    <span className="font-sans text-[10px] font-bold text-[#1E2022] line-clamp-2 leading-tight">
                      {slot.item.name}
                    </span>
                    <span className={`font-mono text-[8px] ${tone.tagColor} font-bold mt-0.5`}>
                      {slot.item.levelLabel}
                    </span>
                  </button>
                );
              })()}

              {/* MID RIGHT UPPER (+2) */}
              {(() => {
                const slot = getOrbitalItemAtOffset(2);
                if (!slot) return null;
                const Icon = slot.item.icon;
                const tone = ECOSYSTEM_TONES[slot.item.tone];
                return (
                  <button
                    type="button"
                    onClick={() => setActiveOrbitalIdx(slot.idx)}
                    className={`hidden lg:flex flex-col items-center justify-center w-32 h-32 rounded-full bg-white border-[1.5px] ${tone.ringBorder} hover:border-[#1E2022] shadow-xs hover:shadow-md transition-all p-3 text-center -translate-y-9 shrink-0 cursor-pointer group`}
                  >
                    <span className={`w-8 h-8 rounded-full ${tone.haloBg} border ${tone.haloBorder} flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-4 h-4 ${tone.iconColor}`} strokeWidth={1.7} />
                    </span>
                    <span className="font-sans text-[11px] font-bold text-[#1E2022] line-clamp-2 leading-tight">
                      {slot.item.name}
                    </span>
                    <span className={`font-mono text-[9px] ${tone.tagColor} font-bold mt-1`}>
                      {slot.item.tag}
                    </span>
                  </button>
                );
              })()}

              {/* FAR RIGHT (+3) — Whisper Fade */}
              {(() => {
                const slot = getOrbitalItemAtOffset(3);
                if (!slot) return null;
                const Icon = slot.item.icon;
                const tone = ECOSYSTEM_TONES[slot.item.tone];
                return (
                  <button
                    type="button"
                    onClick={() => setActiveOrbitalIdx(slot.idx)}
                    className={`hidden xl:flex flex-col items-center justify-center w-28 h-28 rounded-full bg-white/75 border ${tone.ringBorder} opacity-45 hover:opacity-85 transition-all p-3 text-center translate-y-7 shrink-0 cursor-pointer`}
                  >
                    <span className={`w-6 h-6 rounded-full ${tone.haloBg} flex items-center justify-center mb-1`}>
                      <Icon className={`w-3 h-3 ${tone.iconColor}`} strokeWidth={1.7} />
                    </span>
                    <span className="font-sans text-[10px] font-semibold text-[#1E2022] line-clamp-2 leading-tight">
                      {slot.item.name}
                    </span>
                  </button>
                );
              })()}
            </div>
          </div>
          </ScrollReveal>

          {/* =========================================================================
              STRUCTURED QUICK ECOSYSTEM INDEX (Clean 3-Column Directory, Zero Pill Soup)
              ========================================================================= */}
          <ScrollReveal variant="subtle" delay={0.14}>
            <div className="bg-white/95 rounded-[1.5rem] sm:rounded-3xl border border-[#E7E0D6] p-4 sm:p-6 space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-3 border-b border-[#E7E0D6]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#8F6D54]">
                    Quick Ecosystem Index
                  </span>
                  <span className="text-[#DFD5C8]" aria-hidden="true">·</span>
                  <span className="font-mono text-[11px] text-[#6E7C69] font-semibold tabular-nums">
                    {visibleOrbitalItems.length} {t('Items', 'Item')}
                  </span>
                </div>
                <span className="font-mono text-[10px] sm:text-[11px] text-[#605E59]">
                  {t('Select any row to focus the spotlight above', 'Pilih baris mana saja untuk menyorot di atas')}
                </span>
              </div>

              {skillsTab === 'all' ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
                  {(
                    [
                      {
                        group: 'hard' as const,
                        num: '01',
                        title: t('Hard Skills & Analytics', 'Hard Skills & Analitik'),
                        accentText: 'text-[#4B6144]',
                        accentBg: 'bg-[#E9F1E8]',
                      },
                      {
                        group: 'soft' as const,
                        num: '02',
                        title: t('Executive Soft Skills', 'Soft Skills Eksekutif'),
                        accentText: 'text-[#8C5243]',
                        accentBg: 'bg-[#F6EBE7]',
                      },
                      {
                        group: 'tools' as const,
                        num: '03',
                        title: t('Tools & Tech Stack', 'Alat & Teknologi'),
                        accentText: 'text-[#8C683E]',
                        accentBg: 'bg-[#F8F0E3]',
                      },
                    ] as const
                  ).map((col) => {
                    const groupItems = visibleOrbitalItems.filter((item) => item.group === col.group);
                    return (
                      <div
                        key={col.group}
                        className="rounded-2xl bg-[#FAF8F5] border border-[#E7E0D6]/85 p-3 sm:p-3.5 flex flex-col"
                      >
                        {/* Group Column Header */}
                        <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#E7E0D6]">
                          <div className="flex items-center gap-2 min-w-0">
                            <span
                              className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-md tabular-nums ${col.accentBg} ${col.accentText}`}
                            >
                              {col.num}
                            </span>
                            <h4 className="font-sans font-bold text-xs sm:text-[13px] text-[#1E2022] truncate">
                              {col.title}
                            </h4>
                          </div>
                          <span className="font-mono text-[10px] text-[#9E7B62] tabular-nums shrink-0">
                            {String(groupItems.length).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Structured Rows (2 neat sub-columns for Tools so all 3 columns share balanced height) */}
                        <div
                          className={
                            col.group === 'tools'
                              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-1.5'
                              : 'space-y-1.5'
                          }
                        >
                          {groupItems.map((item) => {
                            const targetIdx = visibleOrbitalItems.findIndex((v) => v.id === item.id);
                            const isActive = targetIdx === safeOrbitalIdx;
                            const RowIcon = item.icon;
                            const tone = ECOSYSTEM_TONES[item.tone];
                            return (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveOrbitalIdx(targetIdx)}
                                className={`w-full text-left px-2.5 py-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 group ${
                                  isActive
                                    ? `${tone.accentPillBg} text-white border-transparent shadow-xs`
                                    : 'bg-white hover:bg-white border-[#E7E0D6]/80 hover:border-[#AF8C72] text-[#1E2022]'
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                  <span
                                    className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                      isActive ? 'bg-white/20 text-white' : `${tone.haloBg} ${tone.iconColor}`
                                    }`}
                                  >
                                    <RowIcon className="w-3.5 h-3.5" strokeWidth={1.8} />
                                  </span>
                                  <span className="font-sans text-[11.5px] font-semibold leading-tight truncate">
                                    {item.name}
                                  </span>
                                </div>
                                {col.group !== 'tools' && (
                                  <span
                                    className={`font-mono text-[9.5px] shrink-0 ${
                                      isActive ? 'text-white/90' : 'text-[#9E7B62]'
                                    }`}
                                  >
                                    {item.tag}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {visibleOrbitalItems.map((item, idx) => {
                    const isActive = idx === safeOrbitalIdx;
                    const RowIcon = item.icon;
                    const tone = ECOSYSTEM_TONES[item.tone];
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveOrbitalIdx(idx)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                          isActive
                            ? `${tone.accentPillBg} text-white border-transparent shadow-xs`
                            : 'bg-[#FAF8F5] hover:bg-white border-[#E7E0D6] hover:border-[#AF8C72] text-[#1E2022]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <span
                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                              isActive ? 'bg-white/20 text-white' : `${tone.haloBg} ${tone.iconColor}`
                            }`}
                          >
                            <RowIcon className="w-3.5 h-3.5" strokeWidth={1.8} />
                          </span>
                          <div className="min-w-0 flex-1">
                            <span className="font-sans text-xs font-semibold block truncate leading-tight">
                              {item.name}
                            </span>
                            <span
                              className={`font-mono text-[10px] block truncate mt-0.5 ${
                                isActive ? 'text-white/85' : 'text-[#9E7B62]'
                              }`}
                            >
                              {item.subLabel}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`font-mono text-[10px] tabular-nums shrink-0 ${
                            isActive ? 'text-white' : tone.tagColor
                          }`}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — ORGANIZATIONAL JOURNEY: INTERACTIVE CARDS + TIMELINE
          ========================================================================= */}
      <section className="w-full bg-[#E8ECE6] py-10 sm:py-14 border-b border-[#D7DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
            <ScrollReveal variant="editorial" delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AF8C72]/15 text-[#AF8C72] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Trophy className="w-3.5 h-3.5 text-[#AF8C72]" />
                <span>{t('Leadership Footprint', 'Jejak Kepemimpinan')}</span>
              </div>
              <h2 className="font-sans font-black text-4xl sm:text-5xl text-[#1E2022] tracking-tight">
                {t('Organizational Journey', 'Perjalanan Organisasi')}
              </h2>
              <p className="text-xs sm:text-sm text-[#605E59] font-light leading-relaxed mt-1 max-w-2xl">
                {t(
                  'Interactive timeline of youth leadership, university representation, and national multi-province conference direction.',
                  'Rekam jejak kepemimpinan pemuda, diplomasi universitas, dan kepanitiaan nasional terkemuka dalam lini masa interaktif.'
                )}
              </p>
            </ScrollReveal>

            <ScrollReveal variant="subtle" delay={0.14} className="self-start md:self-end">
              <button
                onClick={() => onNavigate('experience', 'organizational')}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E2022] hover:text-[#6E7C69] transition-colors border-b-2 border-[#1E2022] pb-0.5 cursor-pointer"
              >
                <span>{t('Explore All 7 Milestones ↗', 'Lihat Semua 7 Tonggak ↗')}</span>
              </button>
            </ScrollReveal>
          </div>

          {/* =========================================================================
              INTERACTIVE ORGANIZATIONAL EXPLORER (CREAM · SAGE GREEN · LIGHT BROWN)
              ========================================================================= */}
          <ScrollReveal variant="media" duration={0.92} delay={0.12}>
            <OrganizationalExplorer onNavigate={onNavigate} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
