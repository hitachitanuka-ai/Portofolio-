import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Maximize2,
  X,
} from 'lucide-react';
import { AppRoute } from '../../types';
import { ScrollReveal } from '../ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedPhotoArchive } from '../../data/portfolioLocalized';

interface VisualArchivePageProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
}

type AlbumDivision = 'acara' | 'potret';

interface LightboxState {
  division: AlbumDivision;
  index: number;
}

// Calibrated per-photo Tailwind object-position focal classes centered on Bangkit Surya Wijaya ("objek pribadi")
const PHOTO_FOCUS_CLASSES: Record<string, string> = {
  // Potret Diri
  'myself-1': 'object-[50%_42%]',
  'myself-2': 'object-[52%_62%]',
  'myself-3': 'object-[46%_64%]',
  'myself-4': 'object-[50%_38%]',
  'myself-5': 'object-[50%_54%]',
  'myself-6': 'object-[52%_64%]',
  'myself-7': 'object-[48%_42%]',
  'myself-8': 'object-[48%_46%]',
  'myself-9': 'object-[46%_58%]',
  'myself-10': 'object-[52%_46%]',

  // Acara
  'event-1': 'object-[52%_50%]',
  'event-2': 'object-[36%_76%]',
  'event-3': 'object-[47%_54%]',
  'event-4': 'object-[50%_38%]',
  'event-5': 'object-[78%_58%]',
  'event-6': 'object-[42%_48%]',
  'event-7': 'object-[49%_65%]',
  'event-8': 'object-[74%_52%]',
  'event-9': 'object-[56%_65%]',
  'event-10': 'object-[82%_54%]',
  'event-11': 'object-[38%_60%]',
  'event-12': 'object-[46%_58%]',
  'event-13': 'object-[38%_60%]',
  'event-14': 'object-[28%_44%]',
};

export const VisualArchivePage: React.FC<VisualArchivePageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const { myself: potretPhotos, event: acaraPhotos } = getLocalizedPhotoArchive(lang);

  const [acaraPage, setAcaraPage] = useState(0);
  const [potretStageIndex, setPotretStageIndex] = useState(0);
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  // 5-frame hero fanned showcase selecting clear solo/subject-centered frames
  const heroFanItems = useMemo(() => {
    const picks: Array<{ division: AlbumDivision; index: number; image: string; alt: string; id: string }> = [
      acaraPhotos[0] && {
        division: 'acara',
        index: 0,
        image: acaraPhotos[0].image,
        alt: acaraPhotos[0].title,
        id: acaraPhotos[0].id,
      },
      potretPhotos[0] && {
        division: 'potret',
        index: 0,
        image: potretPhotos[0].image,
        alt: potretPhotos[0].title,
        id: potretPhotos[0].id,
      },
      potretPhotos[3] && {
        division: 'potret',
        index: 3,
        image: potretPhotos[3].image,
        alt: potretPhotos[3].title,
        id: potretPhotos[3].id,
      },
      acaraPhotos[2] && {
        division: 'acara',
        index: 2,
        image: acaraPhotos[2].image,
        alt: acaraPhotos[2].title,
        id: acaraPhotos[2].id,
      },
      potretPhotos[1] && {
        division: 'potret',
        index: 1,
        image: potretPhotos[1].image,
        alt: potretPhotos[1].title,
        id: potretPhotos[1].id,
      },
    ].filter(Boolean) as Array<{
      division: AlbumDivision;
      index: number;
      image: string;
      alt: string;
      id: string;
    }>;
    return picks;
  }, [acaraPhotos, potretPhotos]);

  // 4-card staggered cluster batching for Acara
  const acaraClusterSize = 4;
  const totalAcaraPages = Math.max(1, Math.ceil(acaraPhotos.length / acaraClusterSize));
  const acaraClusterItems = useMemo(() => {
    const start = (acaraPage * acaraClusterSize) % acaraPhotos.length;
    return Array.from({ length: Math.min(4, acaraPhotos.length) }, (_, offset) => {
      const idx = (start + offset) % acaraPhotos.length;
      return { photo: acaraPhotos[idx], actualIndex: idx };
    });
  }, [acaraPage, acaraPhotos]);

  // Left vertical 4-thumbnail rail for Potret Diri stage
  const potretRailItems = useMemo(() => {
    if (potretPhotos.length === 0) return [];
    const windowStart = Math.max(
      0,
      Math.min(potretStageIndex - 1, Math.max(0, potretPhotos.length - 4))
    );
    return potretPhotos.slice(windowStart, windowStart + 4).map((photo, offset) => ({
      photo,
      actualIndex: windowStart + offset,
    }));
  }, [potretPhotos, potretStageIndex]);

  const activeStagePhoto = potretPhotos[potretStageIndex] ?? potretPhotos[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Active Lightbox collection
  const lightboxCollection = lightbox
    ? lightbox.division === 'acara'
      ? acaraPhotos
      : potretPhotos
    : [];
  const activeLightboxPhoto =
    lightbox && lightboxCollection.length > 0 ? lightboxCollection[lightbox.index] : null;

  const handleLightboxNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightbox || lightboxCollection.length === 0) return;
    setLightbox({
      ...lightbox,
      index: (lightbox.index + 1) % lightboxCollection.length,
    });
  };

  const handleLightboxPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!lightbox || lightboxCollection.length === 0) return;
    setLightbox({
      ...lightbox,
      index: (lightbox.index - 1 + lightboxCollection.length) % lightboxCollection.length,
    });
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') handleLightboxNext();
      if (e.key === 'ArrowLeft') handleLightboxPrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightbox, lightboxCollection.length]);

  const getFrameImageClass = (id: string, hoverZoom = true) => {
    const focusClass = PHOTO_FOCUS_CLASSES[id] ?? 'object-center';
    return `w-full h-full object-cover ${focusClass} ${
      hoverZoom ? 'transition-transform duration-700 group-hover:scale-105' : ''
    }`;
  };

  const fanTilts = [
    '-rotate-6 translate-y-3 sm:translate-y-4 z-10',
    '-rotate-3 translate-y-1 z-20',
    'rotate-0 -translate-y-1 sm:-translate-y-2 z-30 scale-[1.03]',
    'rotate-3 translate-y-1 z-20',
    'rotate-6 translate-y-3 sm:translate-y-4 z-10',
  ];

  const clusterStepOffsets = [
    'sm:translate-y-6 z-10',
    'sm:-translate-y-2 z-20',
    'sm:translate-y-4 z-30',
    'sm:translate-y-10 z-40',
  ];

  return (
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-24">
        {/* =====================================================================
            BAND 1: CENTERED EDITORIAL HERO + FANNED 5-FRAME COLLAGE + 2 DIVISIONS
            ===================================================================== */}
        <section className="space-y-8 sm:space-y-10">
          {/* Minimal Return Breadcrumb */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => onNavigate('experience')}
              className="text-xs font-mono text-[#605E59] hover:text-[#1E2022] inline-flex items-center gap-1.5 cursor-pointer transition-colors whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#AF8C72]" />
              <span>{t('Experience', 'Pengalaman')}</span>
            </button>

            <span className="font-mono text-xs text-[#9E7B62] tabular-nums">
              {acaraPhotos.length + potretPhotos.length} {t('Frames', 'Dokumentasi')}
            </span>
          </div>

          {/* Centered Title — Clean Typography Only */}
          <ScrollReveal immediateOnMount variant="editorial" delay={0} className="text-center max-w-3xl mx-auto">
            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#1E2022] tracking-tight leading-[1.06] text-balance">
              {t('Curated Visual', 'Dokumentasi Visual')}{' '}
              <span className="text-[#6E7C69]">{t('Archive', 'Terpilih')}</span>
            </h1>
          </ScrollReveal>

          {/* Reference-Inspired 5-Card Fanned Photo Strip (Upright 3:4 Portrait Proportion) */}
          <ScrollReveal immediateOnMount variant="media" duration={0.8} delay={0.08}>
            <div className="flex items-center justify-center pt-2 pb-4 sm:py-4">
              <div className="flex items-center justify-center -space-x-4 sm:-space-x-5 lg:-space-x-6 px-2 max-w-4xl w-full">
                {heroFanItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    whileHover={{ y: -12, scale: 1.06, rotate: 0, zIndex: 45 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    onClick={() => setLightbox({ division: item.division, index: item.index })}
                    aria-label={item.alt}
                    className={`relative w-28 aspect-[3/4] sm:w-40 lg:w-48 rounded-2xl overflow-hidden bg-white border-[3px] border-white shadow-xl cursor-pointer shrink-0 group transition-shadow hover:shadow-2xl ${
                      fanTilts[idx % fanTilts.length]
                    } ${idx === 0 || idx === 4 ? 'hidden sm:block' : ''}`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      referrerPolicy="no-referrer"
                      className={getFrameImageClass(item.id, false)}
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Clean Dual-Division Buttons: Strictly Acara & Potret Diri */}
          <ScrollReveal immediateOnMount variant="subtle" delay={0.14} className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('section-acara')}
              className="px-6 py-2.5 rounded-full bg-[#1E2022] hover:bg-[#6E7C69] text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm inline-flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>{t('Events', 'Acara')}</span>
              <span className="font-mono text-[11px] opacity-80 tabular-nums">{acaraPhotos.length}</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('section-potret')}
              className="px-6 py-2.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1E2022] border border-[#DFD5C8] hover:border-[#AF8C72] text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs inline-flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>{t('Self-Portraits', 'Potret Diri')}</span>
              <span className="font-mono text-[11px] text-[#9E7B62] tabular-nums">{potretPhotos.length}</span>
            </button>
          </ScrollReveal>
        </section>

        {/* =====================================================================
            BAND 2: ACARA — STAGGERED OVERLAPPING CLUSTER + PURE 3:4 PHOTO GRID
            ===================================================================== */}
        <section id="section-acara" className="scroll-mt-24 pt-6 border-t border-[#DFD5C8] space-y-10 sm:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Minimal Header */}
            <ScrollReveal variant="editorial" className="lg:col-span-4 space-y-5">
              <div className="space-y-1.5">
                <span className="font-mono text-xs text-[#9E7B62] tabular-nums block">01</span>
                <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E2022] tracking-tight leading-[1.08]">
                  {t('Events', 'Acara')}{' '}
                  <span className="text-[#6E7C69] font-bold tabular-nums">{acaraPhotos.length}</span>
                </h2>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => setAcaraPage((prev) => (prev - 1 + totalAcaraPages) % totalAcaraPages)}
                  aria-label={t('Previous set', 'Koleksi sebelumnya')}
                  className="w-10 h-10 rounded-full bg-white border border-[#DFD5C8] hover:border-[#6E7C69] text-[#1E2022] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setAcaraPage((prev) => (prev + 1) % totalAcaraPages)}
                  aria-label={t('Next set', 'Koleksi berikutnya')}
                  className="w-10 h-10 rounded-full bg-white border border-[#DFD5C8] hover:border-[#6E7C69] text-[#1E2022] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <span className="font-mono text-xs text-[#9E7B62] tabular-nums pl-1">
                  {String(acaraPage + 1).padStart(2, '0')} / {String(totalAcaraPages).padStart(2, '0')}
                </span>
              </div>
            </ScrollReveal>

            {/* Right Stepped 4-Card Overlapping Cluster (Upright 3:4 Frames) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`acara-cluster-${acaraPage}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 sm:flex sm:items-center sm:justify-end gap-3 sm:-space-x-5 lg:-space-x-6 pb-4 sm:pb-10"
                >
                  {acaraClusterItems.map(({ photo, actualIndex }, idx) => (
                    <motion.button
                      key={photo.id}
                      type="button"
                      whileHover={{ y: -8, scale: 1.04, zIndex: 50 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                      onClick={() => setLightbox({ division: 'acara', index: actualIndex })}
                      aria-label={photo.title}
                      className={`relative w-full aspect-[3/4] sm:w-44 lg:w-48 rounded-2xl overflow-hidden bg-white border-[3px] border-white shadow-xl cursor-pointer group ${
                        clusterStepOffsets[idx % clusterStepOffsets.length]
                      }`}
                    >
                      <img
                        src={photo.image}
                        alt={photo.title}
                        referrerPolicy="no-referrer"
                        className={getFrameImageClass(photo.id)}
                      />
                    </motion.button>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Complete Clean Acara Grid — Upright 3:4 Portrait Proportion, Subject-Centered */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {acaraPhotos.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                variant="card"
                delay={(idx % 4) * 0.04}
                onClick={() => setLightbox({ division: 'acara', index: idx })}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-[#E7E0D6] hover:border-[#6E7C69] shadow-2xs hover:shadow-lg transition-all cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className={getFrameImageClass(item.id)}
                />
                <div className="hidden sm:flex absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-black/55 backdrop-blur-md text-white items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* =====================================================================
            BAND 3: POTRET DIRI — INTERACTIVE PORTRAIT STAGE + PURE 3:4 PHOTO GRID
            ===================================================================== */}
        <section id="section-potret" className="scroll-mt-24 pt-6 border-t border-[#DFD5C8] space-y-10 sm:space-y-12">
          {/* Clean Section Heading */}
          <ScrollReveal variant="editorial" className="flex items-end justify-between gap-4">
            <div className="space-y-1.5">
              <span className="font-mono text-xs text-[#9E7B62] tabular-nums block">02</span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E2022] tracking-tight leading-[1.08]">
                {lang === 'en' ? (
                  <>
                    Self-<span className="text-[#AF8C72] font-bold">Portraits</span>
                  </>
                ) : (
                  <>
                    Potret <span className="text-[#AF8C72] font-bold">Diri</span>
                  </>
                )}
                <span className="text-[#6E7C69] font-bold tabular-nums ml-2.5">{potretPhotos.length}</span>
              </h2>
            </div>

            <span className="font-mono text-xs text-[#9E7B62] tabular-nums">
              {String(potretStageIndex + 1).padStart(2, '0')} / {String(potretPhotos.length).padStart(2, '0')}
            </span>
          </ScrollReveal>

          {/* Reference Section-3 Interactive Showcase Stage: Ambient Gallery Matte + Centered Upright Portrait Frame */}
          {activeStagePhoto && (
            <ScrollReveal variant="media" duration={0.85}>
              <div className="relative rounded-[1.75rem] overflow-hidden bg-[#181A1C] border border-[#DFD5C8] shadow-md min-h-[420px] sm:min-h-[520px] w-full flex items-center justify-center p-4 sm:p-8 group">
                {/* Ambient Soft Gallery Backdrop (Blurred Matching Frame) */}
                <img
                  src={activeStagePhoto.image}
                  alt=""
                  aria-hidden="true"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-25 blur-2xl scale-110 pointer-events-none select-none"
                />

                {/* Left Vertical Thumbnail Stack */}
                <div className="hidden sm:flex flex-col gap-2.5 absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-2xl bg-black/45 backdrop-blur-md border border-white/15">
                  {potretRailItems.map(({ photo, actualIndex }) => {
                    const isActive = actualIndex === potretStageIndex;
                    return (
                      <button
                        key={photo.id}
                        type="button"
                        onClick={() => setPotretStageIndex(actualIndex)}
                        aria-label={photo.title}
                        className={`w-12 h-14 lg:w-14 lg:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                          isActive
                            ? 'border-white scale-105 shadow-md opacity-100'
                            : 'border-white/30 opacity-65 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={photo.image}
                          alt={photo.title}
                          referrerPolicy="no-referrer"
                          className={getFrameImageClass(photo.id, false)}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Centered Upright Subject-Focused Showcase Frame */}
                <AnimatePresence mode="wait">
                  <motion.button
                    key={activeStagePhoto.id}
                    type="button"
                    initial={{ opacity: 0.45, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.45 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setLightbox({ division: 'potret', index: potretStageIndex })}
                    aria-label={activeStagePhoto.title}
                    className="relative z-10 overflow-hidden rounded-2xl border-[3px] border-white/95 shadow-2xl cursor-pointer bg-[#FAF8F5] h-[360px] sm:h-[460px] aspect-[3/4]"
                  >
                    <img
                      src={activeStagePhoto.image}
                      alt={activeStagePhoto.title}
                      referrerPolicy="no-referrer"
                      className={getFrameImageClass(activeStagePhoto.id, false)}
                    />
                  </motion.button>
                </AnimatePresence>

                {/* Bottom-Right Circular Navigation + Expand Control */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setPotretStageIndex((prev) => (prev - 1 + potretPhotos.length) % potretPhotos.length)
                    }
                    aria-label={t('Previous portrait', 'Potret sebelumnya')}
                    className="w-10 h-10 rounded-full bg-white/95 hover:bg-white text-[#1E2022] flex items-center justify-center shadow-md transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setPotretStageIndex((prev) => (prev + 1) % potretPhotos.length)}
                    aria-label={t('Next portrait', 'Potret berikutnya')}
                    className="w-10 h-10 rounded-full bg-white/95 hover:bg-white text-[#1E2022] flex items-center justify-center shadow-md transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightbox({ division: 'potret', index: potretStageIndex })}
                    aria-label={t('Inspect frame', 'Lihat penuh')}
                    className="w-10 h-10 rounded-full bg-[#1E2022]/90 hover:bg-[#6E7C69] text-white flex items-center justify-center shadow-md border border-white/20 transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Complete Clean Potret Diri Grid — Upright 3:4 Portrait Proportion, Subject-Centered */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {potretPhotos.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                variant="card"
                delay={(idx % 4) * 0.04}
                onClick={() => setLightbox({ division: 'potret', index: idx })}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-[#E7E0D6] hover:border-[#AF8C72] shadow-2xs hover:shadow-lg transition-all cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className={getFrameImageClass(item.id)}
                />
                <div className="hidden sm:flex absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-black/55 backdrop-blur-md text-white items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* =====================================================================
            MINIMALIST PURE-PHOTO LIGHTBOX
            ===================================================================== */}
        <AnimatePresence>
          {lightbox && activeLightboxPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1E2022]/75 backdrop-blur-md"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-md sm:max-w-lg max-h-[84vh] bg-[#FAF8F5] text-[#1E2022] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#DFD5C8] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Compact Header Bar */}
                <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-[#E7E0D6] bg-white shrink-0">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-[#6E7C69] font-bold uppercase tracking-wider">
                      {lightbox.division === 'acara'
                        ? t('Events', 'Acara')
                        : t('Self-Portraits', 'Potret Diri')}
                    </span>
                    <span className="text-[#DFD5C8]" aria-hidden="true">·</span>
                    <span className="text-[#9E7B62] tabular-nums font-medium">
                      {String(lightbox.index + 1).padStart(2, '0')} / {String(lightboxCollection.length).padStart(2, '0')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setLightbox(null)}
                    aria-label={t('Close preview', 'Tutup pratinjau')}
                    className="w-8 h-8 rounded-full bg-[#F3EFEA] hover:bg-[#1E2022] text-[#1E2022] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Tight, Well-Proportioned Image Stage */}
                <div className="relative flex-1 min-h-0 bg-[#F3EFEA] flex items-center justify-center p-3 sm:p-4">
                  <img
                    src={activeLightboxPhoto.image}
                    alt={activeLightboxPhoto.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[52vh] sm:max-h-[56vh] w-auto max-w-full object-contain rounded-xl shadow-sm"
                  />

                  <button
                    type="button"
                    onClick={handleLightboxPrev}
                    aria-label={t('Previous photo', 'Foto sebelumnya')}
                    className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-[#1E2022] border border-[#DFD5C8] shadow-md flex items-center justify-center transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleLightboxNext}
                    aria-label={t('Next photo', 'Foto berikutnya')}
                    className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-[#1E2022] border border-[#DFD5C8] shadow-md flex items-center justify-center transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Compact Thumbnail Rail */}
                <div className="bg-white border-t border-[#E7E0D6] px-3 sm:px-4 py-2.5 shrink-0">
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
                    {lightboxCollection.map((thumb, tIdx) => {
                      const isCurrent = tIdx === lightbox.index;
                      return (
                        <button
                          key={thumb.id}
                          type="button"
                          onClick={() => setLightbox({ ...lightbox, index: tIdx })}
                          aria-label={thumb.title}
                          className={`relative w-9 h-11 sm:w-10 sm:h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                            isCurrent
                              ? 'border-[#6E7C69] scale-105 opacity-100 shadow-xs'
                              : 'border-transparent opacity-50 hover:opacity-85'
                          }`}
                        >
                          <img
                            src={thumb.image}
                            alt={thumb.title}
                            referrerPolicy="no-referrer"
                            className={getFrameImageClass(thumb.id, false)}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
