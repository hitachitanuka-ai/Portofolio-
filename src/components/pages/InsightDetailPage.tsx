import React from 'react';
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { AppRoute, BlogPost } from '../../types';
import { ScrollReveal } from '../ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedBlogPosts } from '../../data/portfolioLocalized';

interface InsightDetailPageProps {
  postSlug: string;
  onNavigate: (route: AppRoute, slug?: string) => void;
}

export const InsightDetailPage: React.FC<InsightDetailPageProps> = ({ postSlug, onNavigate }) => {
  const { lang, t } = useLanguage();
  const posts = getLocalizedBlogPosts(lang);
  const post: BlogPost | undefined = 
    posts.find((p) => p.slug === postSlug || p.id === postSlug) || posts[0];

  if (!post) return null;

  return (
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-28 sm:pt-32 pb-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-14">
        {/* Top Back Navigation Bar */}
        <ScrollReveal immediateOnMount variant="subtle" delay={0}>
          <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-6">
            <button
              onClick={() => onNavigate('insights')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E2022] hover:text-[#6E7C69] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#AF8C72]" />
              <span>{t('Back to Insights Journal', 'Kembali ke Jurnal Wawasan')}</span>
            </button>

            <span className="font-mono text-xs text-[#9E7B62] font-semibold">
              {t('Essay', 'Esai')} · {post.category}
            </span>
          </div>
        </ScrollReveal>

        {/* Article Header */}
        <ScrollReveal immediateOnMount variant="editorial" delay={0.08}>
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#605E59]">
              <span className="px-3 py-1 bg-white border border-[#E7E0D6] text-[#6E7C69] uppercase font-bold rounded-full shadow-2xs">
                {post.category}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#AF8C72]" />
                {post.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#AF8C72]" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E2022] tracking-tight leading-[1.15]">
              {post.title}
            </h1>

            <div className="pt-3 flex items-center gap-3 text-xs font-mono text-[#605E59] border-t border-[#E7E0D6]">
              <span className="font-bold text-[#1E2022]">Bangkit Surya Wijaya</span>
              <span>—</span>
              <span>People & Culture Lead · Business Analyst</span>
            </div>
          </header>
        </ScrollReveal>

        {/* Hero Cover Image */}
        <ScrollReveal immediateOnMount variant="media" duration={1.0} delay={0.16}>
          <div className="relative aspect-[16/9] bg-[#1E2022] rounded-3xl overflow-hidden border border-[#E7E0D6] shadow-md">
            <img
              src={post.image}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Article Body Lead Paragraph */}
        <ScrollReveal variant="editorial" delay={0.06}>
          <div className="p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl shadow-xs">
            <p className="font-sans text-base sm:text-lg text-[#1E2022] leading-relaxed font-normal">
              {post.content.lead}
            </p>
          </div>
        </ScrollReveal>

        {/* Deep Sections */}
        <div className="space-y-10 text-[#4A4843] text-sm sm:text-base leading-relaxed font-light">
          {post.content.sections.map((sec, idx) => (
            <ScrollReveal key={idx} as="section" variant="editorial" delay={0.06} className="space-y-4 pt-6 border-t border-[#E7E0D6]">
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-[#1E2022] tracking-tight">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </ScrollReveal>
          ))}
        </div>

        {/* Author Bio Box in Sage Green Card */}
        <ScrollReveal variant="card" delay={0.08}>
          <div className="p-8 sm:p-10 bg-[#6E7C69] text-white rounded-3xl space-y-4 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#EAE2D8] font-bold">
                {t('Author Perspective', 'Perspektif Penulis')}
              </span>
            </div>
            <h3 className="font-sans font-bold text-2xl text-white">
              Bangkit Surya Wijaya
            </h3>
            <p className="text-xs sm:text-sm text-[#F3EFEA]/90 font-light leading-relaxed">
              {t(
                'People Operations & HR Systems Specialist at PT Fan Sukses Bersama, managing 110+ employees and building in-house HR tech suites (Pervia, Matchify, Slipr, Zeno).',
                'People Operations & HR Systems Specialist di PT Fan Sukses Bersama yang mengelola 110+ karyawan sekaligus merancang rangkaian teknologi HR internal (Pervia, Matchify, Slipr, Zeno).'
              )}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-[#1E2022] text-white hover:bg-black rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>{t('Connect on Advisory', 'Diskusi & Kolaborasi')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#AF8C72]" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </article>
    </div>
  );
};
