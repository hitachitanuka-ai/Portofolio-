import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { ReticleFrame } from './ReticleFrame';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'All' | 'People & Culture' | 'HR Automation' | 'Org Strategy' | 'Event Operations';

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="w-full py-28 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-block px-3.5 py-1 mb-4 text-[11px] font-semibold tracking-wider uppercase text-neutral-600 bg-neutral-100 rounded-full border border-neutral-200/60">
            Case Studies
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-4">
            A look through my work
          </h2>
          <p className="text-base text-neutral-600 max-w-xl leading-relaxed">
            Each case study combines quantitative workforce analytics, empathetic leadership, and automated systems to solve complex organizational challenges.
          </p>
        </motion.div>

        {/* Featured Organizations Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mb-16 pb-8 border-b border-neutral-100"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-6">
            Organizations & Impact:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all">
            <span className="font-display tracking-tight text-xl font-bold text-neutral-900">
              IPB University
            </span>
            <span className="font-sans text-xl font-semibold tracking-tighter text-neutral-800">
              Rakamin
            </span>
            <span className="font-mono text-lg font-bold text-neutral-800">
              Indekstat
            </span>
            <span className="font-display tracking-wide text-lg font-semibold text-neutral-800">
              Fan Sukses
            </span>
            <span className="font-sans text-lg font-medium text-neutral-700">
              PREA 2024
            </span>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 mb-12 flex-wrap"
        >
          {(['All', 'People & Culture', 'HR Automation', 'Org Strategy', 'Event Operations'] as FilterCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeFilter === category
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(project)}
              className="group relative flex flex-col cursor-pointer"
            >
              {/* Image Container with Reticle Corner Brackets */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-xs transition-all duration-500 group-hover:shadow-xl">
                {/* Camera Reticle Brackets (subtle on default, prominent on hover) */}
                <ReticleFrame
                  size={18}
                  color="border-white/80 transition-all duration-300 group-hover:border-white group-hover:scale-95"
                />

                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Video Demo Badge if project has videoUrl */}
                {project.videoUrl && (
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950/85 backdrop-blur-md text-white text-[11px] font-medium border border-white/20 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    <span>Tonton Video Demo & Live App</span>
                  </div>
                )}

                {/* Subtle vignette hover gradient */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300" />

                {/* Glassmorphic Circle with Plus / Play Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    {project.videoUrl ? (
                      <span className="flex items-center justify-center ml-0.5">
                        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </span>
                    ) : (
                      <Plus className="w-7 h-7 stroke-[1.8]" />
                    )}
                  </div>
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="flex items-center justify-between mt-4 px-1">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-semibold text-xl text-neutral-900 group-hover:text-black transition-colors">
                      {project.title}
                    </h3>
                    {project.videoUrl && (
                      <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-200">
                        Interactive
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">
                    {project.date}
                  </span>
                </div>

                <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/60">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
