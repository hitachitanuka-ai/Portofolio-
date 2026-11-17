import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, MapPin, Award, Copy, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick?: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [copiedHeadline, setCopiedHeadline] = useState(false);
  if (!isOpen) return null;

  const positioningHeadline = t(
    'People Operations & HR Systems Specialist | Managing 110+ Workforce & Building In-House HR Tech (PMS, ATS, Payroll, Analytics)',
    'Spesialis People Operations & Sistem HR | Mengelola 110+ Karyawan & Membangun HR Tech Internal (PMS, ATS, Payroll, Analitik)'
  );

  const handleCopyHeadline = async () => {
    try {
      await navigator.clipboard.writeText(positioningHeadline);
      setCopiedHeadline(true);
      setTimeout(() => setCopiedHeadline(false), 2000);
    } catch {
      // Ignore clipboard failures
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#FFFFFF] text-[#1E2022] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E7E0D6] overflow-hidden my-4 sm:my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between gap-2 px-4 sm:px-8 py-3.5 sm:py-4 border-b border-[#E7E0D6] bg-[#F3EFEA] print:hidden">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#1E2022] font-semibold truncate">
                Executive CV · Bangkit Surya Wijaya
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1E2022] border border-[#E7E0D6] bg-white hover:bg-[#F3EFEA] rounded-full transition-colors cursor-pointer shadow-2xs"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-[#6E7C69]" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-[#1E2022] hover:text-[#6E7C69] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-5 sm:p-10 md:p-12 space-y-8 sm:space-y-10 max-h-[85vh] overflow-y-auto">
            {/* Top Identity */}
            <div className="border-b border-[#E4E0D8] pb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl text-[#171B26] font-normal tracking-tight">
                  Bangkit Surya Wijaya
                </h1>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                  <p className="font-mono text-xs uppercase tracking-wider text-[#B49A70] font-semibold leading-snug">
                    {positioningHeadline}
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyHeadline}
                    className="print:hidden inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F5F3EE] hover:bg-[#EAE3D7] border border-[#E4E0D8] text-[10px] font-mono text-[#605E59] transition-colors cursor-pointer"
                    title={t('Copy CV/LinkedIn Headline', 'Salin Headline CV/LinkedIn')}
                  >
                    {copiedHeadline ? (
                      <>
                        <Check className="w-3 h-3 text-[#6E7C69]" />
                        <span>{t('Copied', 'Disalin')}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>{t('Copy Headline', 'Salin Headline')}</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-[#6B6A65] mt-2 max-w-xl leading-relaxed">
                  {t(
                    'People Operations & HR Systems practitioner combining IPB University quantitative modeling (S.Pt., GPA 3.65) with hands-on HR governance. Experienced in managing end-to-end HR operations for 110+ personnel and building in-house PMS, ATS, Payroll, and Psychometric systems.',
                    'Praktisi People Operations & Sistem HR yang memadukan pemodelan kuantitatif IPB University (S.Pt., IPK 3,65) dengan tata kelola HR lapangan. Berpengalaman mengelola operasional HR secara end-to-end bagi 110+ karyawan sekaligus membangun sistem PMS, ATS, Payroll, dan Psikometri internal.'
                  )}
                </p>
              </div>

              <div className="text-left sm:text-right font-mono text-xs text-[#6B6A65] space-y-1 shrink-0">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B49A70]" />
                  <span>Jakarta & Bogor, Indonesia</span>
                </div>
                <div>bangkitsurya321@gmail.com</div>
                <div>linkedin.com/in/bangkit-surya-133311211</div>
              </div>
            </div>

            {/* Core Competencies Grid */}
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#B49A70] block font-bold mb-4">
                01 / Core Competencies
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs">
                <div className="p-3.5 bg-[#F5F3EE] rounded-xs border border-[#E4E0D8]">
                  <strong className="block font-semibold text-[#171B26] mb-1">People & Culture</strong>
                  <span className="text-[#6B6A65] text-[11px]">End-to-End HR Ops (110+), BPJS, PPh 21 TER, KPI/OKR, Talent Acquisition</span>
                </div>
                <div className="p-3.5 bg-[#F5F3EE] rounded-xs border border-[#E4E0D8]">
                  <strong className="block font-semibold text-[#171B26] mb-1">Business Analysis</strong>
                  <span className="text-[#6B6A65] text-[11px]">Workforce Needs Analysis, RACI Matrices, Process Optimization</span>
                </div>
                <div className="p-3.5 bg-[#F5F3EE] rounded-xs border border-[#E4E0D8]">
                  <strong className="block font-semibold text-[#171B26] mb-1">In-House HR Tech</strong>
                  <span className="text-[#6B6A65] text-[11px]">Pervia PMS, Matchify RMS, Slipr Payroll, Zeno Assessment</span>
                </div>
                <div className="p-3.5 bg-[#F5F3EE] rounded-xs border border-[#E4E0D8]">
                  <strong className="block font-semibold text-[#171B26] mb-1">High-Stakes Ops</strong>
                  <span className="text-[#6B6A65] text-[11px]">50+ Luxury Events, 2,000+ Guests, National PREA 2024 Winner</span>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#B49A70] block font-bold mb-6">
                02 / Professional Experience
              </span>

              <div className="space-y-6">
                {/* FSB */}
                <div className="border-l-2 border-[#171B26] pl-5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-serif text-lg font-bold text-[#171B26]">
                      People & Culture Lead — PT. Fan Sukses Bersama
                    </h3>
                    <span className="font-mono text-xs text-[#A7A69F]">Apr 2026 – Present · Jakarta</span>
                  </div>
                  <p className="text-xs text-[#6B6A65] leading-relaxed">
                    Dedicated HR Generalist &amp; People Operations Lead supporting end-to-end Human Capital operations for 110+ full-time personnel across operational and business units.
                  </p>
                  <ul className="text-xs text-[#171B26] space-y-1.5 list-disc pl-4">
                    <li>Engineered in-house automation suites: Matchify (RMS with smart interview timers), Slipr (automated payroll and encrypted PDF payslips), and Zeno (psychometrics).</li>
                    <li>Slashed administrative payroll cycle time by 75% and time-to-hire by 60% while maintaining 100% BPJS & statutory labor compliance.</li>
                    <li>Structured division-level OKRs and individual contributor KPI evaluation matrices.</li>
                  </ul>
                </div>

                {/* Rakamin */}
                <div className="border-l-2 border-[#E4E0D8] pl-5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-serif text-lg font-bold text-[#171B26]">
                      Project Analyst — PT. Rakamin Kolektif Madani
                    </h3>
                    <span className="font-mono text-xs text-[#A7A69F]">Dec 2025 – Mar 2026 · Jakarta (Hybrid)</span>
                  </div>
                  <ul className="text-xs text-[#171B26] space-y-1.5 list-disc pl-4">
                    <li>Engineered change management architecture and workforce planning models for C-suite executives.</li>
                    <li>Authored the Corporate Leadership Handbook through cross-functional structure audits to eliminate role ambiguity.</li>
                    <li>Synthesized workforce capacity and utilization metrics into executive Power BI dashboards.</li>
                  </ul>
                </div>

                {/* Sakala */}
                <div className="border-l-2 border-[#E4E0D8] pl-5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-serif text-lg font-bold text-[#171B26]">
                      Operations Lead & Event Coordinator — Sakala Wedding & Lamaran.yok
                    </h3>
                    <span className="font-mono text-xs text-[#A7A69F]">Sep 2025 – Present · Jabodetabek</span>
                  </div>
                  <ul className="text-xs text-[#171B26] space-y-1.5 list-disc pl-4">
                    <li>Orchestrated operations for 50+ luxury productions, managing crowd logistics for up to 2,000+ guests with 100% operational success.</li>
                    <li>Led multi-vendor negotiations, live master run-sheet synchronization, and real-time crisis resolution.</li>
                  </ul>
                </div>

                {/* Chinghe & Adhijaya */}
                <div className="border-l-2 border-[#E4E0D8] pl-5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-serif text-lg font-bold text-[#171B26]">
                      Marketing & Growth Performance Specialist — PT. Chinghe Tech & PT. Adhijaya Mitra Sekawan
                    </h3>
                    <span className="font-mono text-xs text-[#A7A69F]">2024 – 2025 · Jakarta</span>
                  </div>
                  <ul className="text-xs text-[#171B26] space-y-1.5 list-disc pl-4">
                    <li>Leveraged conversion funnel tracking and revenue forecasting to generate IDR 400M+ in revenue, achieve a 150% surge in user engagement, and optimize ROAS metrics.</li>
                  </ul>
                </div>

                {/* Indekstat */}
                <div className="border-l-2 border-[#E4E0D8] pl-5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-serif text-lg font-bold text-[#171B26]">
                      Human Capital Management Officer — PT. Indekstat Konsultan Indonesia
                    </h3>
                    <span className="font-mono text-xs text-[#A7A69F]">Sep 2024 – Dec 2024 · Jakarta</span>
                  </div>
                  <ul className="text-xs text-[#171B26] space-y-1.5 list-disc pl-4">
                    <li>Pioneered quantitative Workforce Needs Analysis (WNA) across 35 technical consultants using workspace analytics.</li>
                    <li>Formulated standardized competency matrices driving a verified 85% post-program increase in functional role clarity.</li>
                  </ul>
                </div>

                {/* Kelanaa & Ekotifa */}
                <div className="border-l-2 border-[#E4E0D8] pl-5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-serif text-lg font-bold text-[#171B26]">
                      Program Project Leader & Academic Tutor — Kelanaa Islamic Village (YLP) & Ekotifa YPBH
                    </h3>
                    <span className="font-mono text-xs text-[#A7A69F]">2024 – 2025 · National Programs</span>
                  </div>
                  <ul className="text-xs text-[#171B26] space-y-1.5 list-disc pl-4">
                    <li>Led Youth Leadership Program (YLP Vol. 1 & Vol. 2, 2025) cohorts end-to-end and tutored youth scholars in Ekotifa YRC (2025) & RTC (2024).</li>
                  </ul>
                </div>

                {/* Amartawangsa */}
                <div className="border-l-2 border-[#E4E0D8] pl-5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-serif text-lg font-bold text-[#171B26]">
                      Project Manager — PT. Amartawangsa Media Sinergi
                    </h3>
                    <span className="font-mono text-xs text-[#A7A69F]">2021 – 2022 · Indonesia</span>
                  </div>
                  <ul className="text-xs text-[#171B26] space-y-1.5 list-disc pl-4">
                    <li>Formulated a project management framework and KPI tracker, improving onboarding efficiency and evaluating pilot program impact across 1,000+ participants.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education & Honors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[#E4E0D8]">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#B49A70] block font-bold mb-3">
                  03 / Education
                </span>
                <div className="space-y-1 text-xs">
                  <strong className="block text-sm font-serif text-[#171B26]">Institut Pertanian Bogor (IPB University)</strong>
                  <span className="text-[#6B6A65] block">
                    {t(
                      'Bachelor of Animal Science (S.Pt.) · GPA 3.65 / 4.00',
                      'Sarjana Peternakan (S.Pt.) · IPK 3,65 / 4,00'
                    )}
                  </span>
                  <span className="font-mono text-[#A7A69F] text-[11px] block">
                    {t(
                      '2020 – 2024 · Quantitative Modeling & Statistical Optimization',
                      '2020 – 2024 · Pemodelan Kuantitatif & Optimasi Statistik'
                    )}
                  </span>
                </div>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#B49A70] block font-bold mb-3">
                  04 / Selected Honors
                </span>
                <ul className="space-y-2 text-xs text-[#171B26]">
                  <li className="flex items-start gap-2">
                    <Award className="w-3.5 h-3.5 text-[#B49A70] shrink-0 mt-0.5" />
                    <span><strong>1st Place Winner National</strong> — PR Excellence Awards (PREA) 2024 (ESG Theme)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-3.5 h-3.5 text-[#B49A70] shrink-0 mt-0.5" />
                    <span><strong>Duta IPB University</strong> — Official Campus Ambassador & Diplomatic Keynote MC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-3.5 h-3.5 text-[#B49A70] shrink-0 mt-0.5" />
                    <span><strong>The Best Student Council President 2021</strong> — Leadership & Digital Reform Award</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
