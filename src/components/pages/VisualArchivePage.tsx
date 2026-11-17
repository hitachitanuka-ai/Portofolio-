import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Camera, MapPin, Calendar, X, ChevronLeft, ChevronRight, UserCheck, FolderOpen, Layers, ArrowLeft, ArrowUpRight, Sparkles } from 'lucide-react';
import { AppRoute } from '../../types';
import { ScrollReveal } from '../ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedPhotoArchive } from '../../data/portfolioLocalized';

interface VisualArchivePageProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
}

type ArchiveTab = 'all' | 'myself' | 'event';

export const VisualArchivePage: React.FC<VisualArchivePageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ArchiveTab>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { myself: myselfPhotos, event: eventPhotos } = getLocalizedPhotoArchive(lang);

  const photoList = 
    activeTab === 'myself'
      ? myselfPhotos
      : activeTab === 'event'
        ? eventPhotos
        : [...eventPhotos, ...myselfPhotos];

  const selectedPhoto = selectedIndex !== null ? photoList[selectedIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photoList.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photoList.length) % photoList.length);
    }
  };

  return (
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6 sm:space-y-8">
        {/* Page Header */}
        <section className="border-b border-[#E7E0D6] pb-5 sm:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <ScrollReveal immediateOnMount variant="editorial" delay={0} className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <button
                onClick={() => onNavigate('experience')}
                className="text-xs font-mono text-[#605E59] hover:text-[#1E2022] flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#AF8C72]" />
                <span>Experience</span>
              </button>
              <span className="text-[#AF8C72]">/</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#6E7C69] font-bold">
                Visual Documentation Archive
              </span>
            </div>

            <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-[#1E2022] tracking-tight leading-tight">
              {t('Curated Photographic Evidence', 'Dokumentasi Visual Terpilih')}
            </h1>
            <p className="text-sm sm:text-base text-[#605E59] mt-3 font-light leading-relaxed">
              {t(
                `Personal milestones and field leadership documentation curated across the "Event" sub-album (${eventPhotos.length} photos) and "myself" album (${myselfPhotos.length} photos).`,
                `Dokumentasi personal dan dinamika kepemimpinan lapangan Bangkit Surya Wijaya. Terbagi dalam Sub-Album "Event" (${eventPhotos.length} foto) dan Album "myself" (${myselfPhotos.length} foto).`
              )}
            </p>
          </ScrollReveal>

          {/* Quick Album Switcher Pills */}
          <ScrollReveal immediateOnMount variant="subtle" delay={0.12} className="w-full sm:w-auto self-start md:self-end">
          <div className="grid grid-cols-1 sm:inline-flex items-center gap-1.5 p-1.5 bg-white border border-[#E7E0D6] rounded-2xl sm:rounded-full shadow-xs w-full sm:w-auto">
            <button
              onClick={() => {
                setActiveTab('all');
                setSelectedIndex(null);
              }}
              className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-xl sm:rounded-full transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-2 ${
                activeTab === 'all'
                  ? 'bg-[#1E2022] text-white shadow-xs'
                  : 'text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>{t('All', 'Semua')} ({myselfPhotos.length + eventPhotos.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('event');
                setSelectedIndex(null);
              }}
              className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-xl sm:rounded-full transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-2 ${
                activeTab === 'event'
                  ? 'bg-[#6E7C69] text-white shadow-xs'
                  : 'text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA]'
              }`}
            >
              <FolderOpen className="w-3.5 h-3.5 shrink-0" />
              <span>{t('Sub-Album "Event"', 'Sub-Album "Event"')} ({eventPhotos.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('myself');
                setSelectedIndex(null);
              }}
              className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-xl sm:rounded-full transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-2 ${
                activeTab === 'myself'
                  ? 'bg-[#AF8C72] text-white shadow-xs'
                  : 'text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA]'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 shrink-0" />
              <span>{t('Album "myself"', 'Album "myself"')} ({myselfPhotos.length})</span>
            </button>
          </div>
          </ScrollReveal>
        </section>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {photoList.map((item, idx) => (
            <ScrollReveal
              key={`${activeTab}-${item.id}`}
              variant="card"
              delay={(idx % 3) * 0.08}
              onClick={() => setSelectedIndex(idx)}
              className="bg-white border border-[#E7E0D6] rounded-3xl overflow-hidden shadow-xs hover:border-[#6E7C69] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between h-full"
            >
              <div className="relative aspect-[4/3] bg-[#1E2022] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end p-3.5 sm:p-4 text-white">
                  <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-wider flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/20">
                    <Camera className="w-3 h-3 text-[#AF8C72]" />
                    <span>{t('Tap for Full Resolution', 'Ketuk untuk Resolusi Penuh')}</span>
                  </span>
                </div>

                <div className="absolute top-3 left-3 bg-[#1E2022]/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-white border border-white/10 uppercase font-semibold">
                  {item.category}
                </div>

                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#1E2022] font-bold shadow-xs">
                  {item.year}
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-2">
                <h3 className="font-sans font-bold text-lg sm:text-xl text-[#1E2022] group-hover:text-[#6E7C69] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#605E59] font-light leading-relaxed line-clamp-2">
                  {item.subtitle}
                </p>

                <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-[#9E7B62]">
                  <MapPin className="w-3.5 h-3.5 text-[#AF8C72]" />
                  <span>{item.location}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* High-Resolution Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && selectedIndex !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedIndex(null)}
            >
              <div
                className="relative w-full max-w-4xl max-h-[92vh] bg-[#1E2022] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 flex flex-col text-white"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-black/40">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#AF8C72]/30 text-[#AF8C72] text-[10px] font-mono uppercase font-bold">
                      {selectedPhoto.category}
                    </span>
                    <span className="font-mono text-xs text-[#A7A69F]">
                      {selectedIndex + 1} of {photoList.length}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Image Display */}
                <div className="relative flex-1 bg-black/90 flex items-center justify-center p-2 sm:p-4 min-h-[260px] sm:min-h-[480px]">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[58vh] sm:max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
                  />

                  {/* Nav Arrows */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/65 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/65 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Modal Caption */}
                <div className="p-4 sm:p-6 bg-[#1E2022] border-t border-white/10 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-sans font-bold text-base sm:text-xl text-white leading-snug">
                      {selectedPhoto.title}
                    </h4>
                    <span className="font-mono text-xs text-[#AF8C72] shrink-0">
                      {selectedPhoto.year}
                    </span>
                  </div>
                  <p className="text-xs text-[#A7A69F] font-light leading-relaxed">
                    {selectedPhoto.subtitle}
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-[#AF8C72]">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{selectedPhoto.location}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
