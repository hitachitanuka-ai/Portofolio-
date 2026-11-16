import React, { useState } from 'react';
import { ArrowUpRight, Clock, Filter, Sparkles } from 'lucide-react';
import { AppRoute } from '../../types';
import { ScrollReveal } from '../ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedBlogPosts } from '../../data/portfolioLocalized';

interface InsightsPageProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const posts = getLocalizedBlogPosts(lang);
  const categories = ['All', 'HR Systems', 'People Ops', 'Analytics', 'Leadership'];

  const filteredPosts = posts.filter((post) => {
    if (activeCategory === 'All') return true;
    return post.category === activeCategory;
  });

  return (
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-28 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-16">
        {/* Page Header */}
        <section className="border-b border-[#E7E0D6] pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <ScrollReveal immediateOnMount variant="editorial" delay={0} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E7C69]/10 text-[#6E7C69] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('Editorial Journal & Field Notes', 'Jurnal Editorial & Catatan Lapangan')}</span>
            </div>
            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#1E2022] tracking-tight leading-tight">
              {t('Insights & Strategic Notes', 'Wawasan & Catatan Strategis')}
            </h1>
            <p className="text-sm sm:text-base text-[#605E59] mt-3 font-light leading-relaxed">
              {t(
                'Practitioner perspectives on psychometric algorithms, cloud payroll architecture, quantitative workforce diagnostics, and stakeholder logistics.',
                'Perspektif praktisi mengenai algoritma psikometri, arsitektur payroll cloud, diagnostik tenaga kerja kuantitatif, dan manajemen operasional.'
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal immediateOnMount variant="subtle" delay={0.14} className="self-start md:self-end">
            <div className="font-mono text-xs text-[#AF8C72] font-semibold bg-white px-4 py-2 rounded-full border border-[#E7E0D6] shadow-2xs">
              {filteredPosts.length} {t('Published Articles', 'Artikel Terbit')}
            </div>
          </ScrollReveal>
        </section>

        {/* Category Filters */}
        <ScrollReveal immediateOnMount variant="subtle" delay={0.12}>
          <div className="flex flex-wrap items-center gap-2 border-b border-[#E7E0D6] pb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#605E59] mr-2">
              <Filter className="w-3.5 h-3.5 text-[#6E7C69]" />
              <span className="font-semibold uppercase tracking-wider">Topic:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase rounded-full transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1E2022] text-white shadow-xs'
                    : 'bg-white text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA] border border-[#E7E0D6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post, idx) => (
            <ScrollReveal
              key={post.id}
              as="article"
              variant="card"
              delay={(idx % 3) * 0.09}
              onClick={() => onNavigate('insight-detail', post.slug)}
              className="p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl shadow-xs hover:border-[#6E7C69] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] bg-[#1E2022] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1E2022]/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-white uppercase font-bold border border-white/10">
                    {post.category}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-[#9E7B62]">
                  <span>{post.date}</span>
                  <span>·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#AF8C72]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#1E2022] group-hover:text-[#6E7C69] transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#4A4843] font-light leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#E7E0D6] flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E2022] group-hover:text-[#6E7C69] uppercase tracking-wider transition-colors">
                  <span>{t('Read Article', 'Baca Artikel')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AF8C72] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="font-mono text-xs text-[#9E7B62]">No. 0{idx + 1}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
