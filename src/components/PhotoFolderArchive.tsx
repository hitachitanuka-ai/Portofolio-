import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, MapPin, Calendar, Sparkles, FolderOpen, Camera, Layers, UserCheck } from 'lucide-react';
import { SURYA_PHOTOS_ARCHIVE, EVENT_PHOTOS_ARCHIVE } from '../data/portfolioData';
import { getLocalizedPhotoArchive } from '../data/portfolioLocalized';
import { useLanguage } from '../context/LanguageContext';
import { ReticleFrame } from './ReticleFrame';

interface PhotoFolderArchiveProps {
  onSelectPhoto?: (img: string, title: string) => void;
}

type AlbumCategory = 'myself' | 'event' | 'all';

export const PhotoFolderArchive: React.FC<PhotoFolderArchiveProps> = () => {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeAlbum, setActiveAlbum] = useState<AlbumCategory>('myself');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { myself: localizedMyself, event: localizedEvent } = getLocalizedPhotoArchive(lang);

  // Determine current active photo list
  const currentPhotoList =
    activeAlbum === 'myself'
      ? localizedMyself
      : activeAlbum === 'event'
        ? localizedEvent
        : [...localizedMyself, ...localizedEvent];

  const selectedPhoto = selectedIndex !== null ? currentPhotoList[selectedIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % currentPhotoList.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + currentPhotoList.length) % currentPhotoList.length);
    }
  };

  return (
    <section id="creativestyle" className="relative w-full py-28 px-6 bg-transparent overflow-hidden text-center flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-[11px] font-semibold tracking-wider uppercase text-neutral-700 bg-neutral-100 rounded-full border border-neutral-200/80 shadow-xs">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>*CREATIVESTYLE · VISUAL ARCHIVE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-3">
            CreativeStyle Archive
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mb-8">
            {lang === 'id' ? (
              <>
                Dokumentasi kurasi personal dan dinamika kepemimpinan lapangan Bangkit Surya Wijaya. Terbagi dalam Album <strong>"myself"</strong> dan Sub-Album <strong>"Event"</strong>.
              </>
            ) : (
              <>
                Curated personal milestones and field leadership photography by Bangkit Surya Wijaya, organized into the <strong>"myself"</strong> album and <strong>"Event"</strong> sub-album.
              </>
            )}
          </p>

          {/* Quick Album Switcher Pills */}
          <div className="inline-flex items-center p-1.5 bg-neutral-200/70 backdrop-blur-sm rounded-full mb-10 border border-neutral-300/80 shadow-xs">
            <button
              onClick={() => {
                setActiveAlbum('myself');
                setSelectedIndex(null);
              }}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeAlbum === 'myself'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>{t('"myself" Album', 'Album "myself"')}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                activeAlbum === 'myself' ? 'bg-white/20 text-white' : 'bg-neutral-300/60 text-neutral-700'
              }`}>
                {SURYA_PHOTOS_ARCHIVE.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveAlbum('event');
                setSelectedIndex(null);
              }}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeAlbum === 'event'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span>{t('Event Sub-Album', 'Sub-Album "Event"')}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                activeAlbum === 'event' ? 'bg-white/20 text-white' : 'bg-neutral-300/60 text-neutral-700'
              }`}>
                {EVENT_PHOTOS_ARCHIVE.length}
              </span>
            </button>

            {isOpen && (
              <button
                onClick={() => {
                  setActiveAlbum('all');
                  setSelectedIndex(null);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeAlbum === 'all'
                    ? 'bg-neutral-950 text-white shadow-sm'
                    : 'text-neutral-700 hover:text-black'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>{t('All', 'Semua')} ({SURYA_PHOTOS_ARCHIVE.length + EVENT_PHOTOS_ARCHIVE.length})</span>
              </button>
            )}
          </div>
        </motion.div>

        {/* Animate between Closed Folder State and Open Vertical Cascade */}
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* CLOSED FOLDER VIEW */
            <motion.div
              key={`closed-folder-${activeAlbum}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center cursor-pointer group select-none"
              onClick={() => setIsOpen(true)}
            >
              {/* Folder Assembly Container */}
              <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center">
                {/* Back Folder Tab/Backing */}
                <div className="absolute top-8 w-60 h-44 bg-neutral-200/80 rounded-2xl -z-10 shadow-sm border border-neutral-300/60" />

                {/* Peeking Photos from inside the folder */}
                {activeAlbum === 'event' ? (
                  <>
                    {/* Event Left Photo: SB-IPB Navy Committee */}
                    <motion.div
                      animate={{ rotate: -14, x: -55, y: -20 }}
                      whileHover={{ rotate: -18, x: -65, y: -30 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="absolute w-32 h-44 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-neutral-800"
                    >
                      <img
                        src={EVENT_PHOTOS_ARCHIVE[2].image}
                        alt={EVENT_PHOTOS_ARCHIVE[2].title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Event Right Photo: Duta IPB 10 Tahun Stage */}
                    <motion.div
                      animate={{ rotate: 14, x: 55, y: -15 }}
                      whileHover={{ rotate: 18, x: 65, y: -25 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="absolute w-32 h-44 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-neutral-800"
                    >
                      <img
                        src={EVENT_PHOTOS_ARCHIVE[1].image}
                        alt={EVENT_PHOTOS_ARCHIVE[1].title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Event Center Main Photo: Aquafest Solo MC in tailored suit */}
                    <motion.div
                      animate={{ rotate: 0, x: 0, y: -35 }}
                      whileHover={{ y: -45, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="absolute w-36 h-48 rounded-xl overflow-hidden shadow-xl border-2 border-white bg-neutral-900 z-10"
                    >
                      <ReticleFrame size={10} color="border-white/80" />
                      <img
                        src={EVENT_PHOTOS_ARCHIVE[0].image}
                        alt={EVENT_PHOTOS_ARCHIVE[0].title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* Myself Left Photo: Graduation Walk */}
                    <motion.div
                      animate={{ rotate: -14, x: -55, y: -20 }}
                      whileHover={{ rotate: -18, x: -65, y: -30 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="absolute w-32 h-44 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-neutral-800"
                    >
                      <img
                        src={SURYA_PHOTOS_ARCHIVE[1].image}
                        alt={SURYA_PHOTOS_ARCHIVE[1].title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Myself Right Photo: Singapore Merlion */}
                    <motion.div
                      animate={{ rotate: 14, x: 55, y: -15 }}
                      whileHover={{ rotate: 18, x: 65, y: -25 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="absolute w-32 h-44 rounded-xl overflow-hidden shadow-lg border-2 border-white bg-neutral-800"
                    >
                      <img
                        src={SURYA_PHOTOS_ARCHIVE[2].image}
                        alt={SURYA_PHOTOS_ARCHIVE[2].title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Myself Center Main Photo: Executive Balcony in Blazer */}
                    <motion.div
                      animate={{ rotate: 0, x: 0, y: -35 }}
                      whileHover={{ y: -45, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="absolute w-36 h-48 rounded-xl overflow-hidden shadow-xl border-2 border-white bg-neutral-900 z-10"
                    >
                      <ReticleFrame size={10} color="border-white/80" />
                      <img
                        src={SURYA_PHOTOS_ARCHIVE[0].image}
                        alt={SURYA_PHOTOS_ARCHIVE[0].title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </>
                )}

                {/* Front Frosted Glass Folder Tab with arrow button */}
                <div className="absolute bottom-4 w-68 sm:w-76 h-36 rounded-2xl bg-white/75 backdrop-blur-xl border border-white/95 shadow-2xl z-20 p-5 flex flex-col justify-between transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-widest text-neutral-800 uppercase font-bold">
                      *CREATIVESTYLE.
                    </span>
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 font-mono font-semibold">
                      {activeAlbum === 'event'
                        ? t(`${EVENT_PHOTOS_ARCHIVE.length} EVENT PHOTOS`, `${EVENT_PHOTOS_ARCHIVE.length} FOTO ACARA`)
                        : t(`${SURYA_PHOTOS_ARCHIVE.length} PORTRAITS`, `${SURYA_PHOTOS_ARCHIVE.length} POTRET`)}
                    </span>
                  </div>

                  <div className="flex items-end justify-between pt-2">
                    <span className="text-xs text-neutral-600 font-medium text-left">
                      {t('Open', 'Buka')} {activeAlbum === 'event' ? t('Sub-Album', 'Sub-Album') : t('Album', 'Album')} <br />
                      <strong className="text-neutral-950 font-bold text-sm">
                        "{activeAlbum === 'event' ? 'Event' : 'myself'}"
                      </strong>
                    </span>

                    {/* Circular Action Button with Arrow */}
                    <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg group-hover:bg-black group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Badge */}
              <div className="mt-4 flex flex-col items-center">
                <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-neutral-900 uppercase">
                  {activeAlbum === 'event' ? 'EVENT ARCHIVE' : 'MYSELF'}
                </h3>
                <span className="mt-2 text-xs font-mono font-medium text-neutral-600 bg-neutral-100 px-4 py-1 rounded-full border border-neutral-200/80">
                  {activeAlbum === 'event'
                    ? t(
                        `CREATIVESTYLE · ${EVENT_PHOTOS_ARCHIVE.length} EVENT & PROTOCOL DOCS · 2024–2025`,
                        `CREATIVESTYLE · ${EVENT_PHOTOS_ARCHIVE.length} DOKUMENTASI EVENT & PROTOKOL · 2024–2025`
                      )
                    : t(
                        `CREATIVESTYLE · ${SURYA_PHOTOS_ARCHIVE.length} CURATED PERSONAL PORTRAITS · 2019–2026`,
                        `CREATIVESTYLE · ${SURYA_PHOTOS_ARCHIVE.length} POTRET PERSONAL TERKURASI · 2019–2026`
                      )}
                </span>
              </div>
            </motion.div>
          ) : (
            /* OPEN VERTICAL CASCADE VIEW */
            <motion.div
              key="opened-cascade"
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl p-6 sm:p-10 rounded-3xl bg-neutral-950 text-white shadow-3xl border border-neutral-800"
            >
              {/* Top Bar inside Open Cascade */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80 mb-8">
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 font-semibold">
                      *CREATIVESTYLE.
                    </span>
                    <span className="text-neutral-600">·</span>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
                      {currentPhotoList.length} {t('PHOTOS AVAILABLE', 'DOKUMENTASI TERSEDIA')}
                    </span>
                  </div>
                  <span className="font-display font-bold text-lg sm:text-xl text-white">
                    {activeAlbum === 'myself'
                      ? t('Album "myself" — Bangkit Surya Wijaya', 'Album "myself" — Bangkit Surya Wijaya')
                      : activeAlbum === 'event'
                        ? t('Sub-Album "Event" — Stage, Protocol & Operations', 'Sub-Album "Event" — Panggung, Protokol & Operasional')
                        : t(
                            `Complete CreativeStyle Collection (${SURYA_PHOTOS_ARCHIVE.length + EVENT_PHOTOS_ARCHIVE.length} Photos)`,
                            `Koleksi Lengkap CreativeStyle (${SURYA_PHOTOS_ARCHIVE.length + EVENT_PHOTOS_ARCHIVE.length} Foto)`
                          )}
                  </span>
                </div>

                {/* Sub-Album Filter Buttons inside Open Cascade */}
                <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-start">
                  <div className="flex items-center gap-1.5 p-1 bg-neutral-900 rounded-full border border-neutral-800">
                    <button
                      onClick={() => setActiveAlbum('myself')}
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                        activeAlbum === 'myself'
                          ? 'bg-amber-400 text-neutral-950 shadow-xs'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      myself ({SURYA_PHOTOS_ARCHIVE.length})
                    </button>
                    <button
                      onClick={() => setActiveAlbum('event')}
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                        activeAlbum === 'event'
                          ? 'bg-amber-400 text-neutral-950 shadow-xs'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Event ({EVENT_PHOTOS_ARCHIVE.length})
                    </button>
                    <button
                      onClick={() => setActiveAlbum('all')}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                        activeAlbum === 'all'
                          ? 'bg-amber-400 text-neutral-950 shadow-xs'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {t('All', 'Semua')}
                    </button>
                  </div>

                  {/* Close / Fold Back Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold uppercase tracking-wider text-white rounded-full transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 shrink-0"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>{t('Close', 'Tutup')}</span>
                  </button>
                </div>
              </div>

              {/* Main Vertical Layout: Left Typography | Center 3D Cascade | Right Typography */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column Editorial Typography */}
                <div className="lg:col-span-3 text-left space-y-6 hidden lg:block sticky top-8">
                  <div>
                    <div className="w-8 h-[2px] bg-amber-400 mb-4" />
                    <div className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 leading-loose">
                      {activeAlbum === 'event' ? (
                        <>
                          KEYNOTE MC <br />
                          DIPLOMATIC PROTOCOL <br />
                          DUTA IPB STAGE <br />
                          CROWD OPERATIONS
                        </>
                      ) : (
                        <>
                          LEADERSHIP <br />
                          MILESTONES <br />
                          OPERATIONS <br />
                          GLOBAL HORIZON
                        </>
                      )}
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="font-display font-black text-6xl text-white tracking-tight">
                      {currentPhotoList.length}
                    </div>
                    <div className="font-display font-bold text-xl tracking-wider uppercase text-white/90 leading-tight">
                      {activeAlbum === 'event' ? 'EVENT' : 'CURATED'} <br />
                      DOKUMENTASI
                    </div>
                    <div className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 mt-3 leading-relaxed">
                      {activeAlbum === 'event'
                        ? 'SUB-ALBUM "EVENT" · STAGE, PROTOCOL & PRODUCTION'
                        : 'ALBUM "MYSELF" · PROFESSIONAL & PERSONAL JOURNEY'}
                    </div>
                  </div>
                </div>

                {/* Center Column: 3D Perspective Fanned Photo Stack */}
                <div className="lg:col-span-6 flex flex-col items-center gap-6 py-2">
                  {currentPhotoList.map((item, idx) => {
                    const tilts = [
                      'rotate-[-2deg] hover:rotate-0',
                      'rotate-[2deg] hover:rotate-0',
                      'rotate-0 scale-102 z-20 shadow-2xl',
                      'rotate-[-2deg] hover:rotate-0',
                      'rotate-[2.5deg] hover:rotate-0',
                      'rotate-[-1.5deg] hover:rotate-0',
                      'rotate-[1.5deg] hover:rotate-0',
                      'rotate-[-2deg] hover:rotate-0',
                      'rotate-[2deg] hover:rotate-0',
                      'rotate-0 hover:rotate-0',
                    ];
                    const tiltClass = tilts[idx % tilts.length];

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: Math.min(idx * 0.04, 0.4), duration: 0.5 }}
                        onClick={() => setSelectedIndex(idx)}
                        className={`relative w-full max-w-sm aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-700/80 shadow-xl cursor-pointer group transition-all duration-300 hover:scale-[1.04] ${tiltClass}`}
                      >
                        <ReticleFrame size={14} color="border-white/80 group-hover:border-white" />
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Top Badge: Category */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase text-neutral-200 bg-black/60 backdrop-blur-md rounded-full border border-white/20">
                            #{String(idx + 1).padStart(2, '0')} · {item.category}
                          </span>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-amber-400 mb-1">
                            <MapPin className="w-3 h-3" />
                            <span>{item.location} · {item.year}</span>
                          </div>
                          <h4 className="font-display font-bold text-base text-white leading-snug">
                            {item.title}
                          </h4>
                          <span className="text-xs text-neutral-300 mt-1 line-clamp-1">
                            {item.subtitle}
                          </span>
                          <span className="text-[10px] text-neutral-400 mt-2 font-mono flex items-center gap-1">
                            <Camera className="w-3 h-3" /> {t('Click to inspect details', 'Klik untuk inspeksi detail')}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Right Column Editorial Typography */}
                <div className="lg:col-span-3 text-right space-y-8 hidden lg:block sticky top-8">
                  <div>
                    <div className="font-mono text-[10px] tracking-widest uppercase text-neutral-400">
                      BANGKIT SURYA WIJAYA
                    </div>
                    <div className="w-8 h-[2px] bg-amber-400 ml-auto mt-2" />
                  </div>

                  <div className="py-6">
                    <p className="font-serif italic text-sm text-neutral-300 leading-relaxed text-right">
                      {activeAlbum === 'event'
                        ? t(
                            '"Stage leadership and protocol demand exact timing, composure in crisis, and coordinated orchestration for thousands of attendees."',
                            '"Kepemimpinan panggung dan keprotokolan menuntut ketepatan waktu, ketenangan dalam krisis, serta koordinasi ribuan orang dengan disiplin tinggi."'
                          )
                        : t(
                            '"Every milestone shapes how we lead talent, build resilient culture, and steward organizations."',
                            '"Setiap momentum membentuk perspektif kepemimpinan, cara mengelola talenta, serta membangun kultur organisasi yang tangguh."'
                          )}
                    </p>
                    <span className="font-mono text-[10px] tracking-wider uppercase text-neutral-500 mt-2 block">
                      — Surya Wijaya
                    </span>
                  </div>

                  <div className="pt-6">
                    <div className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 leading-relaxed">
                      {activeAlbum === 'event' ? (
                        <>
                          SUB-ALBUM "EVENT" <br />
                          {EVENT_PHOTOS_ARCHIVE.length} {t('PHOTOS', 'DOKUMENTASI')} <br />
                          {t('OPS & PROTOCOL', 'OPERASI & PROTOKOL')}
                        </>
                      ) : (
                        <>
                          EST. 2026 <br />
                          BOGOR & JAKARTA <br />
                          PEOPLE & CULTURE
                        </>
                      )}
                    </div>
                    <div className="w-8 h-[2px] bg-neutral-600 ml-auto mt-2" />
                  </div>
                </div>
              </div>

              {/* Bottom Close Button */}
              <div className="pt-8 mt-10 border-t border-neutral-800 flex justify-center gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-md active:scale-95"
                >
                  {t('Close & Fold Back to Folder', 'Tutup & Lipat Kembali ke Folder')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* High-Res Photo Modal with Next/Prev Navigation */}
        <AnimatePresence>
          {selectedPhoto && selectedIndex !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
              onClick={() => setSelectedIndex(null)}
            >
              <div
                className="relative w-full max-w-4xl max-h-[92vh] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-700 flex flex-col text-white"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        {activeAlbum === 'event' ? 'Sub-Album "Event"' : activeAlbum === 'myself' ? 'Album "myself"' : 'CreativeStyle'} · #{String(selectedIndex + 1).padStart(2, '0')}/{currentPhotoList.length}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">
                        {selectedPhoto.category}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-white mt-1">
                      {selectedPhoto.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Prev / Next Controls */}
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                      title={t('Previous Photo', 'Foto Sebelumnya')}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                      title={t('Next Photo', 'Foto Selanjutnya')}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSelectedIndex(null)}
                      className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer ml-1"
                      title={t('Close', 'Tutup')}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Modal Body: Image Frame */}
                <div className="p-4 sm:p-6 flex flex-col items-center overflow-y-auto">
                  <div className="relative w-full max-h-[60vh] sm:max-h-[65vh] aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden bg-black border border-neutral-800 shadow-md flex items-center justify-center">
                    <ReticleFrame size={16} color="border-white/80" />
                    <img
                      src={selectedPhoto.image}
                      alt={selectedPhoto.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Metadata and Context Bar */}
                  <div className="w-full pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
                    <div>
                      <p className="text-sm text-neutral-200 font-medium">
                        {selectedPhoto.subtitle}
                      </p>
                      <div className="flex items-center gap-4 mt-1.5 text-xs text-neutral-400 font-mono">
                        <span className="inline-flex items-center gap-1 text-amber-400">
                          <MapPin className="w-3.5 h-3.5" />
                          {selectedPhoto.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-neutral-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {t('Year', 'Tahun')} {selectedPhoto.year}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <span className="text-[11px] font-mono text-neutral-500">
                        {selectedIndex + 1} {t('of', 'dari')} {currentPhotoList.length} {t('photos', 'foto')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
