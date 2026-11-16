import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-neutral-50/70 border-t border-b border-neutral-100 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <div className="inline-block px-3.5 py-1 mb-4 text-[11px] font-semibold tracking-wider uppercase text-neutral-600 bg-white rounded-full border border-neutral-200/60 shadow-xs">
            Leadership Endorsements
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-4">
            Kata Pimpinan Sebelumnya
          </h2>
          <p className="text-sm text-neutral-500">
            Feedback, evaluasi kepemimpinan, dan rekomendasi langsung dari pimpinan institusi serta korporasi terdahulu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                {/* Header Stars + Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-200 group-hover:text-neutral-300 transition-colors" />
                </div>

                {/* Quote Content */}
                <p className="text-neutral-700 text-sm leading-relaxed mb-8 font-normal">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info without Photo (Executive Monogram & Verified Role) */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-neutral-100">
                <div className="w-11 h-11 rounded-2xl bg-neutral-900 text-white flex items-center justify-center font-display font-bold text-sm tracking-wider shadow-sm border border-neutral-700/50 shrink-0">
                  {t.initials || t.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="overflow-hidden">
                  <div className="font-display font-bold text-sm text-neutral-900 truncate">
                    {t.name}
                  </div>
                  <div className="text-[11px] font-semibold text-neutral-700 truncate">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-neutral-500 truncate flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3 text-neutral-400 shrink-0" />
                    <span className="truncate">{t.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
