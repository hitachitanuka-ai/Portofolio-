import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  CheckCircle2,
  Wrench,
  Briefcase,
  Sparkles,
  Users,
  BarChart3,
  Layers,
  Cpu,
  Activity,
  ChevronRight,
  Compass,
} from 'lucide-react';
import { EXPERTISE_AREAS, PROJECTS } from '../../data/portfolioData';
import { AppRoute } from '../../types';
import { ScrollReveal } from '../ScrollReveal';

interface ExpertisePageProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
}

const DISCIPLINE_META: Record<
  string,
  {
    icon: React.FC<{ className?: string; strokeWidth?: number }>;
    shortImpact: string;
    accentColor: string;
  }
> = {
  'people-culture': {
    icon: Users,
    shortImpact: '110+ Staff • 100% Compliance',
    accentColor: '#6E7C69',
  },
  'business-analysis': {
    icon: Compass,
    shortImpact: 'WNA • RACI • C-Suite Dashboards',
    accentColor: '#8F6D54',
  },
  'project-management': {
    icon: Layers,
    shortImpact: '50+ Events • 27 Provinces',
    accentColor: '#6E7C69',
  },
  'digital-product': {
    icon: Cpu,
    shortImpact: 'Pervia • Matchify • Slipr • Zeno',
    accentColor: '#8F6D54',
  },
  'data-performance': {
    icon: BarChart3,
    shortImpact: '+85% Role Clarity • 5,200+ Funnel',
    accentColor: '#6E7C69',
  },
};

export const ExpertisePage: React.FC<ExpertisePageProps> = ({ onNavigate }) => {
  const [selectedId, setSelectedId] = useState<string>(EXPERTISE_AREAS[0].id);

  const activeArea =
    EXPERTISE_AREAS.find((area) => area.id === selectedId) || EXPERTISE_AREAS[0];
  const activeMeta = DISCIPLINE_META[activeArea.id] || {
    icon: Activity,
    shortImpact: 'Verified Execution',
    accentColor: '#6E7C69',
  };
  const ActiveIcon = activeMeta.icon;
  const relatedProjects = PROJECTS.filter((p) =>
    activeArea.relatedProjectIds.includes(p.id)
  );

  return (
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-28 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Compact Editorial Header */}
        <section className="border-b border-[#E7E0D6] pb-7 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <ScrollReveal immediateOnMount variant="editorial" delay={0} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E7C69]/12 text-[#6E7C69] text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" strokeWidth={1.7} />
              <span>05 Core Disciplines</span>
            </div>
            <h1 className="font-sans font-black text-3xl sm:text-5xl text-[#1E2022] tracking-tight leading-[1.08]">
              Capability{' '}
              <span className="font-serif italic font-normal text-[#6E7C69]">
                Architecture
              </span>{' '}
              &amp; Expertise
            </h1>
            <p className="text-xs sm:text-sm text-[#5E626B] mt-2.5 font-light leading-relaxed max-w-xl">
              Lima pilar kompetensi multidisiplin yang dibangun melalui praktik kepemimpinan HR korporat, analisis bisnis kuantitatif, dan rekayasa perangkat lunak internal.
            </p>
          </ScrollReveal>

          {/* Crisp Summary Strip */}
          <ScrollReveal immediateOnMount variant="subtle" delay={0.14} className="flex flex-wrap items-center gap-2.5 self-start lg:self-end">
            <div className="px-3.5 py-2 rounded-2xl bg-white border border-[#E7E0D6] text-xs font-mono shadow-2xs">
              <strong className="text-[#1E2022] font-bold">05</strong>{' '}
              <span className="text-[#605E59]">Disciplines</span>
            </div>
            <div className="px-3.5 py-2 rounded-2xl bg-white border border-[#E7E0D6] text-xs font-mono shadow-2xs">
              <strong className="text-[#6E7C69] font-bold">18+</strong>{' '}
              <span className="text-[#605E59]">Tools &amp; Frameworks</span>
            </div>
            <div className="px-3.5 py-2 rounded-2xl bg-white border border-[#E7E0D6] text-xs font-mono shadow-2xs">
              <strong className="text-[#8F6D54] font-bold">100%</strong>{' '}
              <span className="text-[#605E59]">Field Verified</span>
            </div>
          </ScrollReveal>
        </section>

        {/* Interactive Split Capability Explorer (Easy to See in One Viewport) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Rail: Compact 5-Discipline Selector */}
          <ScrollReveal immediateOnMount variant="card" delay={0.12} className="lg:col-span-5 flex flex-col justify-between gap-2.5">
            {EXPERTISE_AREAS.map((area) => {
              const isSelected = area.id === activeArea.id;
              const meta = DISCIPLINE_META[area.id] || {
                icon: Activity,
                shortImpact: 'Applied Expertise',
                accentColor: '#6E7C69',
              };
              const Icon = meta.icon;

              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setSelectedId(area.id)}
                  className={`w-full text-left rounded-2xl p-4 border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3.5 group ${
                    isSelected
                      ? 'bg-[#1E2022] text-white border-[#1E2022] shadow-md translate-x-0.5'
                      : 'bg-white text-[#1E2022] border-[#E7E0D6] hover:border-[#6E7C69] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#6E7C69] text-white'
                          : 'bg-[#F3EFEA] text-[#6E7C69] group-hover:bg-[#6E7C69]/15'
                      }`}
                    >
                      <Icon className="w-4 h-4" strokeWidth={1.75} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-[10px] font-bold ${
                            isSelected ? 'text-[#DEC2A3]' : 'text-[#8F6D54]'
                          }`}
                        >
                          {area.num}
                        </span>
                        <h2
                          className={`font-sans font-bold text-sm sm:text-base truncate ${
                            isSelected ? 'text-white' : 'text-[#1E2022]'
                          }`}
                        >
                          {area.title}
                        </h2>
                      </div>
                      <span
                        className={`font-mono text-[11px] block truncate mt-0.5 ${
                          isSelected ? 'text-white/75' : 'text-[#605E59]'
                        }`}
                      >
                        {meta.shortImpact}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected
                        ? 'text-[#DEC2A3] translate-x-0.5'
                        : 'text-[#9C978E] group-hover:text-[#1E2022]'
                    }`}
                    strokeWidth={1.8}
                  />
                </button>
              );
            })}
          </ScrollReveal>

          {/* Right Pane: Crisp Focused Detail Inspector */}
          <ScrollReveal immediateOnMount variant="media" duration={0.95} delay={0.18} className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="h-full bg-white rounded-[2rem] border border-[#E7E0D6] p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6"
              >
                {/* Top Header */}
                <div className="space-y-3 pb-5 border-b border-[#E7E0D6]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.15em] text-[#6E7C69] font-bold">
                      <ActiveIcon className="w-3.5 h-3.5" strokeWidth={1.7} />
                      <span>Discipline {activeArea.num}</span>
                    </div>
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#E7E0D6] text-[#8F6D54] font-semibold">
                      {activeMeta.shortImpact}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-sans font-black text-2xl sm:text-3xl text-[#1E2022] tracking-tight leading-tight">
                      {activeArea.title}
                    </h2>
                    <p className="font-serif italic text-lg text-[#8F6D54] mt-0.5">
                      {activeArea.headline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A4843] font-light leading-relaxed">
                    {activeArea.description}
                  </p>
                </div>

                {/* Compact 2-Column Body: Competencies + Tools & Application */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Core Competencies */}
                  <div className="md:col-span-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#1E2022] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6E7C69]" strokeWidth={1.8} />
                      <span>Core Competencies</span>
                    </div>
                    <ul className="space-y-2">
                      {activeArea.competencies.map((comp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-[#23272F] bg-[#FAF8F5] rounded-xl px-3 py-2 border border-[#EFEAE2]"
                        >
                          <span className="font-mono text-[10px] font-bold text-[#6E7C69] mt-0.5 shrink-0">
                            0{idx + 1}
                          </span>
                          <span className="leading-snug font-medium">{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools & Field Proof */}
                  <div className="md:col-span-6 flex flex-col justify-between gap-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#1E2022] font-bold">
                        <Wrench className="w-3.5 h-3.5 text-[#8F6D54]" strokeWidth={1.8} />
                        <span>Tools &amp; Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {activeArea.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E7E0D6] text-[11px] font-mono text-[#1E2022] rounded-lg"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#EDF1EC] border border-[#D4DFD1] space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#4C5B48] font-bold">
                        <Briefcase className="w-3 h-3" strokeWidth={1.8} />
                        <span>Real-World Application</span>
                      </div>
                      <p className="text-xs text-[#23272F] leading-relaxed font-normal">
                        {activeArea.practicalApplication}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Applied Systems Strip */}
                {relatedProjects.length > 0 && (
                  <div className="pt-4 border-t border-[#E7E0D6] space-y-2.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#605E59] font-bold block">
                      Demonstrated Across Systems
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {relatedProjects.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => onNavigate('project-detail', p.id)}
                          className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#FAF8F5] hover:bg-[#1E2022] text-[#1E2022] hover:text-white border border-[#E7E0D6] rounded-xl text-xs font-semibold transition-all cursor-pointer group"
                        >
                          <span className="truncate max-w-[200px]">{p.title.split('—')[0].trim()}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#8F6D54] group-hover:text-[#DEC2A3]" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>
        </section>

        {/* Compact At-a-Glance Quick Reference Matrix */}
        <section className="pt-2 space-y-4">
          <ScrollReveal variant="subtle" delay={0}>
            <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#8F6D54] font-bold">
                At-a-Glance Capability Matrix
              </span>
              <span className="font-mono text-[11px] text-[#605E59]">
                Click any card to inspect
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {EXPERTISE_AREAS.map((area, areaIdx) => {
              const isSelected = area.id === activeArea.id;
              const meta = DISCIPLINE_META[area.id] || {
                icon: Activity,
                shortImpact: 'Verified',
                accentColor: '#6E7C69',
              };
              const Icon = meta.icon;

              return (
                <ScrollReveal key={area.id} variant="card" delay={areaIdx * 0.06} className="h-full">
                  <button
                    type="button"
                    onClick={() => setSelectedId(area.id)}
                    className={`w-full h-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#6E7C69] text-white border-[#6E7C69] shadow-sm'
                        : 'bg-white text-[#1E2022] border-[#E7E0D6] hover:border-[#6E7C69]'
                    }`}
                  >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-[#EFE4D6]' : 'text-[#6E7C69]'
                      }`}
                    >
                      {area.num}
                    </span>
                    <Icon
                      className={`w-4 h-4 ${
                        isSelected ? 'text-white' : 'text-[#8F6D54]'
                      }`}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <strong
                      className={`font-sans font-bold text-sm block leading-snug ${
                        isSelected ? 'text-white' : 'text-[#1E2022]'
                      }`}
                    >
                      {area.title}
                    </strong>
                    <span
                      className={`font-mono text-[10px] block mt-1 ${
                        isSelected ? 'text-white/85' : 'text-[#605E59]'
                      }`}
                    >
                      {area.tools.slice(0, 2).join(' · ')}
                    </span>
                  </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
