import React from 'react';
import { X, Award, Briefcase, GraduationCap, MapPin, Code, CheckCircle, Mail, Phone, ExternalLink, Download, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { ReticleFrame } from './ReticleFrame';
import { IMAGES } from '../data/portfolioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  if (!isOpen) return null;

  const cvPdfUrl = '/assets/aistudio/BANGKIT_SURYA_WIJAYA_-_CV_Update_83d8b485.pdf';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-neutral-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-white">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full border border-neutral-200/60">
              Curriculum Vitae & Profile
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={cvPdfUrl}
              download="Bangkit_Surya_Wijaya_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-800 hover:text-black bg-neutral-100 hover:bg-neutral-200 rounded-full border border-neutral-200/80 transition-all cursor-pointer shadow-xs active:scale-95"
              title="Download Bangkit Surya Wijaya CV as PDF"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.2]" />
              <span>Download CV</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 md:p-8 flex flex-col gap-8">
          {/* Top Profile Summary */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-md">
              <ReticleFrame size={16} color="border-white/80" />
              <img
                src={IMAGES.heroSurya}
                alt="Bangkit Surya Wijaya"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Bogor / Jakarta, Indonesia</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900 mb-1">
                Bangkit Surya Wijaya
              </h2>
              <span className="text-sm font-semibold text-neutral-600 mb-4 block">
                Human Capital Enthusiast
              </span>

              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                Data-driven Human Capital Lead with proven hands-on experience directing full-spectrum HR operations for 110+ employees as a Sole HR Lead. Pioneer of digital HR transformation through custom internal automation systems (automated payroll, psychometric testing, and interview scheduling).
              </p>

              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                Skilled in translating quantitative workforce analytics into actionable strategies that bridge employee wellbeing with enterprise performance objectives.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={cvPdfUrl}
                  download="Bangkit_Surya_Wijaya_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider rounded-full inline-flex items-center gap-2 transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.2]" />
                  <span>Download CV (PDF)</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer active:scale-95"
                >
                  Connect with Surya →
                </button>

                <a
                  href="https://www.linkedin.com/in/bangkit-surya-133311211/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-full inline-flex items-center gap-1.5 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href="https://wa.me/62895321294231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-full inline-flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href="https://www.instagram.com/bangsur.w/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-full inline-flex items-center gap-1.5 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-600" />
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Education & Academic Honors */}
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
            <div className="flex items-center gap-2 font-display font-semibold text-neutral-900 mb-4 text-base">
              <GraduationCap className="w-4 h-4 text-neutral-700" />
              Education & Honors
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="text-sm font-bold text-neutral-900">
                  Institut Pertanian Bogor (IPB University)
                </h3>
                <p className="text-xs text-neutral-600">
                  Undergraduate in Animal Science, Major in Animal Products Technology
                </p>
              </div>
              <span className="text-xs font-mono text-neutral-500 shrink-0">
                Sep 2021 – Feb 2026
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="text-xs bg-white text-neutral-800 px-3 py-1 rounded-full border border-neutral-200 font-medium">
                Current GPA: 3.65 / 4.00
              </span>
              <span className="text-xs bg-white text-neutral-800 px-3 py-1 rounded-full border border-neutral-200 font-medium">
                Honor: Duta IPB University
              </span>
              <span className="text-xs bg-white text-neutral-800 px-3 py-1 rounded-full border border-neutral-200 font-medium">
                FranklinCovey 7 Habits Certified
              </span>
            </div>
          </div>

          {/* Work Experience Timeline */}
          <div>
            <div className="flex items-center gap-2 font-display font-semibold text-neutral-900 mb-4 text-base">
              <Briefcase className="w-4 h-4 text-neutral-700" />
              Key Work Experience
            </div>
            <div className="space-y-4">
              {/* Job 1 */}
              <div className="p-5 rounded-2xl border border-neutral-200/80 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="font-display font-bold text-sm text-neutral-900">
                    People and Culture Lead · PT. Fan Sukses Bersama
                  </h4>
                  <span className="text-xs font-mono text-neutral-400">Apr 2026 – Present</span>
                </div>
                <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside">
                  <li>Sole HR Lead managing full-spectrum operations for 110+ employees (recruitment, attendance, welfare, BPJS compliance).</li>
                  <li>Engineered custom automation suites: automated interview timetables, digital psychometric testing (MBTI & DISC), and automated payslips.</li>
                  <li>Structured and evaluated division-level and individual KPI frameworks aligned with corporate strategy.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="p-5 rounded-2xl border border-neutral-200/80 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="font-display font-bold text-sm text-neutral-900">
                    Project Analyst · PT. Rakamin Kolektif Madani
                  </h4>
                  <span className="text-xs font-mono text-neutral-400">Dec 2025 – Mar 2026</span>
                </div>
                <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside">
                  <li>Engineered change management architecture and workforce planning models with executive C-suite dashboards.</li>
                  <li>Architected the corporate Leadership Handbook by auditing cross-functional org structures and eliminating role ambiguity.</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="p-5 rounded-2xl border border-neutral-200/80 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="font-display font-bold text-sm text-neutral-900">
                    Human Capital Management Officer · PT. Indekstat Konsultan Indonesia
                  </h4>
                  <span className="text-xs font-mono text-neutral-400">Sep 2024 – Dec 2024</span>
                </div>
                <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside">
                  <li>Pioneered quantitative Workforce Needs Analysis across 35 technical personnel using workspace analytics.</li>
                  <li>Designed target competency frameworks driving a verified 85% increase in role clarity and performance.</li>
                </ul>
              </div>

              {/* Job 4 */}
              <div className="p-5 rounded-2xl border border-neutral-200/80 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="font-display font-bold text-sm text-neutral-900">
                    Operations Lead / Crew · Sakala Wedding & Lamaran.yok
                  </h4>
                  <span className="text-xs font-mono text-neutral-400">Sep 2025 – Present</span>
                </div>
                <p className="text-xs text-neutral-600">
                  Orchestrated end-to-end execution for 50+ luxury projects, managing crowd logistics for up to 2,000+ guests and multi-vendor negotiations with 100% operational success.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills & Honors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <div className="flex items-center gap-2 font-display font-semibold text-neutral-900 mb-3 text-base">
                <Code className="w-4 h-4 text-neutral-700" />
                Technical & Systems Stack
              </div>
              <ul className="space-y-2 text-xs text-neutral-600 font-mono">
                <li>• Custom Payroll & Payslip Automation</li>
                <li>• Digital Assessment Engines (DISC / MBTI)</li>
                <li>• Automated Interview Timetable Scheduling</li>
                <li>• Power BI Executive Workforce Analytics</li>
                <li>• Google Workspace Automation & Notion</li>
                <li>• BPJS Kesehatan & Ketenagakerjaan Ops</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              <div className="flex items-center gap-2 font-display font-semibold text-neutral-900 mb-3 text-base">
                <Award className="w-4 h-4 text-neutral-700" />
                Leadership & Recognition
              </div>
              <ul className="space-y-2 text-xs text-neutral-600">
                <li>• 1st Place Digital PR (ESG Theme) — PREA 2024</li>
                <li>• Head of Event IPB OSIS Fest 2024 (27 provinces)</li>
                <li>• Head of HR of Student — BEM Fak. Peternakan</li>
                <li>• Selected in Indonesia Student Leadership Camp IX (UI)</li>
                <li>• The Best Student Council President 2021</li>
                <li>• Professional Moderator & Keynote MC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
