import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, IMAGES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('people-lead');

  const currentService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section className="w-full py-24 px-6 bg-neutral-50/70 border-t border-b border-neutral-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="inline-block px-3.5 py-1 mb-6 text-[11px] font-semibold tracking-wider uppercase text-neutral-600 bg-white rounded-full border border-neutral-200/60 shadow-xs"
        >
          Capabilities
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Intro & Inclusions */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-6">
              How can I help?
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed mb-8">
              From managing end-to-end people operations for 100+ employees to engineering automated HR systems and authoring organizational handbooks, I align workforce strategy with measurable growth.
            </p>

            <div className="pt-6 border-t border-neutral-200">
              <span className="text-xs font-semibold tracking-wider uppercase text-neutral-400 block mb-4">
                All engagements include:
              </span>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>Full-Spectrum People Operations & Compliance</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>Custom In-House HR Automation (DISC/MBTI, Scheduling)</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-700">
                  <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>Data-Backed Workforce Planning & C-Suite Dashboards</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Interactive Service Selector Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            {SERVICES.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-black shadow-lg scale-[1.01]'
                      : 'bg-white/60 hover:bg-white border-neutral-200/70 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-semibold text-xl text-neutral-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-500 mb-3">
                        {service.tagline}
                      </p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                        isSelected ? 'bg-black text-white' : 'text-neutral-400'
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-1 duration-200">
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2">
                        {service.features.map((feat, i) => (
                          <span
                            key={i}
                            className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-neutral-500">
                          Turnaround: <strong className="text-neutral-800">{service.turnaround}</strong>
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectService(service.title);
                          }}
                          className="px-4 py-1.5 bg-black text-white text-xs font-medium rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
                        >
                          Book this service →
                        </button>
                      </div>
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
