import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { ReticleFrame } from './ReticleFrame';
import { FAQ_ITEMS, IMAGES } from '../data/portfolioData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full py-28 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Atmospheric Studio Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="inline-block px-3.5 py-1 mb-4 text-[11px] font-semibold tracking-wider uppercase text-neutral-600 bg-neutral-100 rounded-full border border-neutral-200/60 self-start">
              FAQ
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-4">
              Got questions?
            </h2>

            <p className="text-sm text-neutral-600 leading-relaxed mb-8">
              Here are the most common things clients ask before booking. If you need to know anything else, just reach out directly.
            </p>

            {/* Studio Photo with Reticles */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200/80 shadow-md">
              <ReticleFrame size={16} color="border-white/80" />
              <img
                src={IMAGES.hrConsulting}
                alt="Bangkit Surya Wijaya — Human Capital Advisory"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-5 z-20 text-[11px] text-white/90 font-mono tracking-wider drop-shadow-sm">
                © Bangkit Surya Wijaya
              </div>
            </div>
          </motion.div>

          {/* Right Column: Accordion Questions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col divide-y divide-neutral-200"
          >
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-5">
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none cursor-pointer"
                  >
                    <span className="font-display font-medium text-lg md:text-xl text-neutral-900 group-hover:text-black transition-colors">
                      {item.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-neutral-200 flex items-center justify-center shrink-0 transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-neutral-800" />
                      ) : (
                        <Plus className="w-4 h-4 text-neutral-800" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pr-12 text-sm text-neutral-600 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
