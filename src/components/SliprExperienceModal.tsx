import React, { useEffect, useRef, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  ArrowRight, 
  RotateCcw, 
  Laptop, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  BookOpen, 
  Users, 
  TrendingDown, 
  Cpu 
} from 'lucide-react';
import { motion } from 'motion/react';
import { ReticleFrame } from './ReticleFrame';
import { IMAGES } from '../data/portfolioData';

interface SliprExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToArticle: () => void;
}

export const SLIPR_DEMO_URL = 'https://script.google.com/macros/s/AKfycbyoq-0LSWK4t6xvg5-OgVx4Eki8GQXEO4x_NA6gEjgpImQEGA0vvGFt4hz0MGOWnvfO3Q/exec';

export const SliprExperienceModal: React.FC<SliprExperienceModalProps> = ({
  isOpen,
  onClose,
  onProceedToArticle,
}) => {
  const [step, setStep] = useState<'video' | 'menu'>('video');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset to 'video' whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      setStep('video');
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {
            // Autoplay policy handling: if unmuted autoplay is blocked, play muted
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => {});
            }
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[94vh] bg-neutral-950 text-white rounded-3xl overflow-hidden shadow-3xl flex flex-col border border-neutral-800">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-neutral-900/70 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base tracking-wide text-white">
                SLIPR
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800 font-semibold">
                {step === 'video' ? 'Video Demonstration' : 'Interactive Menu'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {step === 'video' && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep('menu')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-neutral-200 hover:text-white transition-all cursor-pointer"
              >
                <span>Lewati ke Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-8 flex flex-col">
          
          {/* STEP 1: VIDEO SHOWCASE FIRST */}
          {step === 'video' ? (
            <div className="flex flex-col items-center gap-5 animate-in fade-in duration-300">
              
              {/* Video Player */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-neutral-800 shadow-2xl flex items-center justify-center group">
                <ReticleFrame size={18} color="border-white/80 group-hover:border-emerald-400 transition-colors" />
                <video
                  ref={videoRef}
                  src={IMAGES.sliprVideo}
                  poster={IMAGES.sliprBanner}
                  preload="auto"
                  controls
                  autoPlay
                  playsInline
                  onEnded={() => setStep('menu')}
                  onError={() => {
                    console.warn('Slipr video failed to load, switching to poster/menu option');
                  }}
                  className="w-full h-full object-contain"
                >
                  <source src={IMAGES.sliprVideo} type="video/mp4" />
                  Browser Anda tidak mendukung tag video.
                </video>
              </div>

              {/* Video Footer Strip & Action to proceed */}
              <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="text-left">
                  <h3 className="font-display font-bold text-lg text-white">
                    Slipr — Smart Digital Payroll Management Video Walkthrough
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Video otomatis memunculkan menu setelah selesai, atau Anda dapat langsung menuju ke menu pilihan sekarang.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setStep('menu')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-400 hover:bg-emerald-300 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer shrink-0"
                >
                  <span>Buka Menu Pilihan Demo & Artikel</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </motion.button>
              </div>

            </div>
          ) : (
            /* STEP 2: REDESIGNED INTERACTIVE MENU */
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              
              {/* Header inside Menu */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                      Pilihan Eksplorasi Aplikasi
                    </span>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                      Slipr — Smart Digital Payroll Management
                    </h2>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setStep('video')}
                    className="group inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-white font-medium px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700/80 hover:border-neutral-500 hover:bg-neutral-800 transition-all cursor-pointer shadow-sm"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-emerald-400 group-hover:-rotate-180 transition-transform duration-500" />
                    <span>Putar Ulang Video</span>
                  </motion.button>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
                  Silakan tentukan bagaimana Anda ingin mengeksplorasi Slipr: coba langsung sistemnya secara live atau pelajari dokumentasi riset UI/UX dan arsitekturnya.
                </p>
              </div>

              {/* Action Cards: Option 1 (Live Demo) & Option 2 (Full Case Study) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                
                {/* Card 1: Direct Live Demo */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-neutral-900/95 to-neutral-950 border border-neutral-800 hover:border-emerald-500/80 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_16px_40px_rgba(16,185,129,0.18)] overflow-hidden"
                >
                  {/* Subtle Top Accent Glow */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header Pill */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Opsi 1 · Coba Langsung
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                        Live Sandbox
                      </span>
                    </div>

                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                        <Laptop className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-white group-hover:text-emerald-300 transition-colors">
                          Uji Coba Demo Aplikasi
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                          Jalankan sistem payroll digital Slipr secara live di browser tanpa perlu instalasi apa pun.
                        </p>
                      </div>
                    </div>

                    {/* Feature Highlights checklist */}
                    <div className="my-5 p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-2 text-xs text-neutral-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Kalkulasi otomatis gaji, BPJS & PPh 21</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Simulasi digital document signature (PIN sah)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Preview slip gaji karyawan (Mobile View)</span>
                      </div>
                    </div>
                  </div>

                  {/* Supercharged Button with shimmer and micro-interaction */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={SLIPR_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden group/btn w-full p-4 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-neutral-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center justify-between cursor-pointer"
                  >
                    {/* Animated Shimmer Stripe */}
                    <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                    <div className="text-left">
                      <span className="block text-xs uppercase tracking-wider font-extrabold text-neutral-950">
                        Buka Demo Aplikasi Slipr
                      </span>
                      <span className="block text-[10px] text-neutral-800 font-medium">
                        Membuka web app di tab baru ↗
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-neutral-950/15 flex items-center justify-center shrink-0 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:bg-neutral-950 text-neutral-950 group-hover/btn:text-emerald-400 transition-all duration-300">
                      <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </motion.a>
                </motion.div>

                {/* Card 2: Read Full Case Study */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-neutral-900/95 to-neutral-950 border border-neutral-800 hover:border-neutral-500/80 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_16px_40px_rgba(255,255,255,0.08)] overflow-hidden"
                >
                  {/* Subtle Top Accent Glow */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header Pill */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono uppercase tracking-widest text-neutral-200 font-semibold">
                        <BookOpen className="w-3.5 h-3.5 text-neutral-300" />
                        Opsi 2 · Dokumentasi Teknis
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                        5 Menit Baca
                      </span>
                    </div>

                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="p-3 rounded-2xl bg-white/10 border border-white/15 text-white shrink-0 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                        <Sparkles className="w-6 h-6 text-neutral-200" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-white group-hover:text-neutral-100 transition-colors">
                          Baca Studi Kasus Lengkap
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                          Pelajari metodologi desain UI/UX, arsitektur teknis, dan audit keamanan sistem penggajian Slipr.
                        </p>
                      </div>
                    </div>

                    {/* Feature Highlights checklist */}
                    <div className="my-5 p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 space-y-2 text-xs text-neutral-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0" />
                        <span>Evolusi Wireframe → Prototype → Final Design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0" />
                        <span>Arsitektur email massal terenkripsi 110+ orang</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0" />
                        <span>Analisis dampak bisnis & pemangkasan waktu 75%</span>
                      </div>
                    </div>
                  </div>

                  {/* Supercharged Button with hover slide */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onProceedToArticle}
                    className="relative overflow-hidden group/btn w-full p-4 bg-white hover:bg-neutral-100 text-neutral-950 font-bold rounded-xl shadow-lg shadow-white/10 hover:shadow-white/20 transition-all duration-300 flex items-center justify-between cursor-pointer"
                  >
                    {/* Animated Shimmer Stripe */}
                    <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none" />

                    <div className="text-left">
                      <span className="block text-xs uppercase tracking-wider font-extrabold text-neutral-950">
                        Lanjut ke Studi Kasus
                      </span>
                      <span className="block text-[10px] text-neutral-600 font-medium">
                        Buka artikel interaktif di portofolio →
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-neutral-950 text-white flex items-center justify-center shrink-0 group-hover/btn:translate-x-1.5 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </motion.button>
                </motion.div>

              </div>

              {/* Metrics & Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-neutral-800 text-xs">
                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">Kapasitas</span>
                  </div>
                  <span className="font-bold text-sm text-white">500+ Karyawan</span>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">Efisiensi</span>
                  </div>
                  <span className="font-bold text-sm text-emerald-400">-75% Cycle Time</span>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <Cpu className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">Perhitungan</span>
                  </div>
                  <span className="font-bold text-sm text-sky-400">100% Terotomasi</span>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">Keamanan</span>
                  </div>
                  <span className="font-bold text-sm text-amber-300">Enkripsi & Sign Sah</span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
