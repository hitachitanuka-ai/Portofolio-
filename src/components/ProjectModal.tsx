import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Briefcase, MapPin, Calendar, Play, CheckCircle2, ExternalLink, Film, Image as ImageIcon } from 'lucide-react';
import { ReticleFrame } from './ReticleFrame';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onBookShoot: () => void;
  onOpenArticle?: (articleId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onBookShoot,
  onOpenArticle,
}) => {
  const [activeTab, setActiveTab] = useState<'video' | 'overview'>('video');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    // If current project has a video, default to video tab, otherwise overview
    if (project?.videoUrl) {
      setActiveTab('video');
    } else {
      setActiveTab('overview');
    }
  }, [project]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-neutral-200">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-white">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full border border-neutral-200/60">
              {project.category}
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              {project.date}
            </span>
            {project.videoUrl && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider bg-violet-100 text-violet-700 px-2.5 py-0.5 rounded-full border border-violet-200">
                <Play className="w-3 h-3 fill-violet-700" />
                Video Demo
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              title="Previous project"
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              title="Next project"
              className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="w-[1px] h-4 bg-neutral-200 mx-1" />
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="overflow-y-auto p-6 md:p-8 flex flex-col gap-8">
          {/* If project has video, show tabs between Video Demo & Screenshot */}
          {project.videoUrl && (
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('video')}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    activeTab === 'video'
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>Interactive Video Walkthrough</span>
                </button>
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Platform Architecture & Screenshot</span>
                </button>
              </div>

              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}

          {/* Media Container: Either Video Player or Banner Image */}
          {project.videoUrl && activeTab === 'video' ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xl flex items-center justify-center">
              <ReticleFrame size={18} color="border-white/80" />
              <video
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
            </div>
          ) : (
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-md">
              <ReticleFrame size={18} color="border-white/80" />
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Title, Credits & Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 mb-3">
                {project.title}
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mb-6 font-normal">
                {project.description}
              </p>

              {/* Key Features Bullet List */}
              {project.features && project.features.length > 0 && (
                <div className="mb-6 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3 font-semibold">
                    Core Capabilities & Features
                  </span>
                  <ul className="space-y-2.5">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.quote && (
                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 mb-6">
                  <p className="text-sm italic text-neutral-700 mb-2">
                    "{project.quote.text}"
                  </p>
                  <span className="text-xs text-neutral-400 font-medium block">
                    — {project.quote.author}
                  </span>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3">
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Uji Coba Demo Aplikasi</span>
                    <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                )}

                {onOpenArticle && (project.id === 'matchify-platform' || project.id === 'fan-sukses-hr' || project.id === 'slipr-platform' || project.id === 'zeno-platform') && (
                  <button
                    onClick={() => {
                      onClose();
                      const articleMap: Record<string, string> = {
                        'zeno-platform': 'zeno-assessment-platform',
                        'slipr-platform': 'slipr-payroll-automation',
                      };
                      onOpenArticle(articleMap[project.id] || 'custom-hr-automation');
                    }}
                    className="inline-flex items-center gap-1.5 px-6 py-3 bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>Baca Studi Kasus Lengkap (Artikel) →</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    onClose();
                    onBookShoot();
                  }}
                  className="px-5 py-3 border border-neutral-300 hover:border-black text-neutral-800 hover:text-black text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer"
                >
                  Hubungi Surya →
                </button>
              </div>
            </div>

            {/* Right Column: Case Study Metrics & Scope */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col gap-4">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block pb-2 border-b border-neutral-200/60 font-semibold">
                Case Study Metrics & Scope
              </span>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between text-neutral-600">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <Briefcase className="w-3.5 h-3.5" /> Organization:
                  </span>
                  <span className="font-medium text-neutral-900">{project.client}</span>
                </div>

                <div className="flex items-center justify-between text-neutral-600">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <MapPin className="w-3.5 h-3.5" /> Location:
                  </span>
                  <span className="font-medium text-neutral-900">{project.location}</span>
                </div>

                <div className="flex items-center justify-between text-neutral-600">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <Calendar className="w-3.5 h-3.5" /> Timeline:
                  </span>
                  <span className="font-medium text-neutral-900">{project.date}</span>
                </div>

                <div className="flex items-center justify-between text-neutral-600 pt-2 border-t border-neutral-200/60">
                  <span className="text-neutral-400">Execution Role:</span>
                  <span className="font-mono text-neutral-900">{project.exif.camera}</span>
                </div>

                <div className="flex items-center justify-between text-neutral-600">
                  <span className="text-neutral-400">Tools & Stack:</span>
                  <span className="font-mono text-neutral-900">{project.exif.lens}</span>
                </div>

                <div className="flex items-center justify-between text-neutral-600">
                  <span className="text-neutral-400">Scale / Volume:</span>
                  <span className="font-mono text-neutral-900">{project.exif.focalLength}</span>
                </div>

                <div className="flex items-center justify-between text-neutral-600">
                  <span className="text-neutral-400">Key Outcome:</span>
                  <span className="font-mono text-neutral-900 font-semibold text-emerald-700">
                    {project.exif.aperture}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Photos / Screens from Shoot or Project */}
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className="pt-6 border-t border-neutral-100">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-4">
                Additional Project Visuals
              </span>
              <div className="grid grid-cols-2 gap-4">
                {project.additionalImages.map((imgUrl, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/80">
                    <ReticleFrame size={12} color="border-white/70" />
                    <img
                      src={imgUrl}
                      alt={`${project.title} Visual ${i + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
