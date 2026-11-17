import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Users, 
  ArrowUpRight, 
  Trophy, 
  GraduationCap, 
  Award, 
  Camera, 
  Layers,
  Sparkles,
  Code2,
} from 'lucide-react';
import { SURYA_PHOTOS_ARCHIVE, EVENT_PHOTOS_ARCHIVE } from '../../data/portfolioData';
import { AppRoute } from '../../types';
import { ScrollReveal } from '../ScrollReveal';
import { OrganizationalExplorer } from '../OrganizationalExplorer';
import { WorkingExperienceShowcase } from '../WorkingExperienceShowcase';
import { useLanguage } from '../../context/LanguageContext';

interface ExperiencePageProps {
  initialSubMenu?: string;
  onNavigate: (route: AppRoute, slug?: string) => void;
  onOpenResume: () => void;
}

type SubMenuType = 'all' | 'working' | 'organizational' | 'project';

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ 
  initialSubMenu, 
  onNavigate, 
  onOpenResume 
}) => {
  const { lang, t } = useLanguage();
  const [activeSubMenu, setActiveSubMenu] = useState<SubMenuType>(
    initialSubMenu === 'working' || initialSubMenu === 'organizational' || initialSubMenu === 'project'
      ? initialSubMenu
      : 'all'
  );

  useEffect(() => {
    if (initialSubMenu === 'working' || initialSubMenu === 'organizational' || initialSubMenu === 'project') {
      setActiveSubMenu(initialSubMenu);
    }
  }, [initialSubMenu]);

  const projectExperiences = lang === 'id' ? [
    {
      id: 'proj-0',
      title: 'Pervia Enterprise PMS Platform',
      role: 'Product Lead & Performance Architect',
      organization: 'Pervia Enterprise / Strategic People Ops',
      period: '2026',
      badge: 'Performance Intelligence',
      desc: 'Suite manajemen kinerja enterprise dengan pelacakan KPI berkelanjutan, kalibrasi matriks talenta 9-Box, umpan balik 360°, dan struktur insentif.',
      impact: '98,4% Target Alignment lintas 7 departemen, penyelesaian siklus 18 hari & 100% jejak audit deliverable.',
      skills: ['React', 'TypeScript', 'Recharts', 'Kalibrasi Talenta 9-Box', 'Manajemen Kinerja'],
      linkProject: 'pervia-platform',
    },
    {
      id: 'proj-1',
      title: 'Matchify RMS Platform',
      role: 'Product Lead & Solutions Architect',
      organization: 'PT. Fan Sukses Bersama',
      period: '2026',
      badge: 'Recruitment Intelligence',
      desc: 'Sistem ATS dan portal evaluasi kandidat kustom dengan rubrik penilaian otomatis, timer wawancara 45 menit, dan umpan balik pewawancara terstruktur.',
      impact: 'Time-to-Hire 60% lebih cepat (43 ke 17,2 hari) serta kapasitas sistem teruji pada 5.200+ rekor kandidat.',
      skills: ['Full-Stack TypeScript', 'Tailwind CSS', 'Algorithmic Screening', 'Arsitektur ATS'],
      linkProject: 'matchify-platform',
    },
    {
      id: 'proj-2',
      title: 'Slipr Automated Payroll & Payslip Engine',
      role: 'Product Owner & Financial Systems Designer',
      organization: 'PT. Fan Sukses Bersama',
      period: '2026',
      badge: 'Otomasi HR FinTech',
      desc: 'Mesin penggajian korporat internal dengan kalkulasi tarif TER PPh 21, pemotongan otomatis BPJS, dan slip gaji PDF terenkripsi.',
      impact: 'Memangkas waktu pemrosesan payroll bulanan sebesar 75% (dari 3 hari kerja menjadi <1 jam) bagi 110+ karyawan.',
      skills: ['Mesin TER PPh 21', 'Rumus BPJS', 'Generasi PDF Terenkripsi', 'Keamanan Data Gaji'],
      linkProject: 'slipr-platform',
    },
    {
      id: 'proj-3',
      title: 'Zeno Assessment & Psychometrics Intelligence',
      role: 'Lead Systems Architect & Assessment Specialist',
      organization: 'PT. Fan Sukses Bersama',
      period: '2026',
      badge: 'Diagnostik Psikometri',
      desc: 'Platform asesmen psikologis terkalibrasi yang memadukan profil perilaku DISC dan 16 tipe MBTI dengan grafik radar instan.',
      impact: '100% skoring psikometri otomatis dalam 15 menit (teruji 1.200+ rekor asesmen) tanpa kesalahan hitung manual.',
      skills: ['Pemodelan Psikometri', 'Analitik Radar Chart', 'Profil DISC & MBTI', 'Interactive UI'],
      linkProject: 'zeno-platform',
    },
    {
      id: 'proj-4',
      title: 'Operasional Acara Skala Besar & Crowd Control',
      role: 'Operations Director & Stage Protocol Coordinator',
      organization: 'Sakala Wedding & Lamaran.yok',
      period: '2025 – Present',
      badge: 'Produksi & Logistik Lapangan',
      desc: 'Mengorkestrasi koordinasi multi-vendor, ketepatan timeline, protokol VIP, dan manajemen alur massa untuk 50+ produksi acara.',
      impact: '100% tingkat keberhasilan tepat waktu di 50+ acara dengan kapasitas hingga 2.000 tamu.',
      skills: ['Arsitektur Master Run-Sheet', 'Dinamika Alur Massa', 'Intervensi Krisis', 'Protokol VIP'],
      linkProject: 'sakala-operations',
    },
    {
      id: 'proj-5',
      title: 'Kampanye Nasional IPB OSIS Fest 2024',
      role: 'Event Director & Campaign Architect',
      organization: 'Direktorat Promosi & PMB IPB University',
      period: '2024',
      badge: 'Kampanye & Prestasi Nasional',
      desc: 'Konferensi kepemimpinan pelajar nasional yang menghadirkan ketua OSIS dari 27 provinsi dengan inisiatif ESG penanaman pohon.',
      impact: 'Juara 1 Nasional Digital PR (Tema ESG) di ajang Public Relations Excellence Awards (PREA) 2024.',
      skills: ['Operasional Skala Nasional', 'Kepemimpinan Lintas Divisi', 'Manajemen Sponsor', 'Strategi PR'],
      linkProject: 'ipb-osis-fest-pr',
    },
    {
      id: 'proj-6',
      title: 'Quantitative Workforce Needs Analysis',
      role: 'Workforce Diagnostics Officer',
      organization: 'PT. Indekstat Konsultan Indonesia',
      period: '2024',
      badge: 'Analitik Korporat',
      desc: 'Analisa beban kerja empiris dan matriks penjenjangan jabatan bagi 35 konsultan riset teknis.',
      impact: 'Peningkatan +85% kejelasan peran operasional serta rentang kompensasi yang terkalibrasi.',
      skills: ['Pemodelan Tenaga Kerja', 'Evaluasi Jabatan', 'Sintesis Data', 'Desain Organisasi'],
      linkProject: 'indekstat-workforce-analysis',
    },
  ] : [
    {
      id: 'proj-0',
      title: 'Pervia Enterprise PMS Platform',
      role: 'Product Lead & Performance Architect',
      organization: 'Pervia Enterprise / Strategic People Ops',
      period: '2026',
      badge: 'Performance Intelligence',
      desc: 'Enterprise Performance Management Suite with continuous KPI tracking, 9-box talent matrix calibration, multi-rater 360° feedback, and salary incentives.',
      impact: '98.4% Target Alignment across 7 departments, 18-day cycle turnaround & 100% verified deliverable audit trails.',
      skills: ['React', 'TypeScript', 'Recharts', '9-Box Talent Calibration', 'Performance Management'],
      linkProject: 'pervia-platform',
    },
    {
      id: 'proj-1',
      title: 'Matchify RMS Platform',
      role: 'Product Lead & Solutions Architect',
      organization: 'PT. Fan Sukses Bersama',
      period: '2026',
      badge: 'Recruitment Intelligence',
      desc: 'Bespoke ATS & candidate evaluation portal with automated scoring rubrics, 45-minute live interview timers, and structured feedback loops.',
      impact: '60% Faster Time-to-Hire (43 to 17.2 days) & benchmarked on 5,200+ candidate records.',
      skills: ['Full-Stack TypeScript', 'Tailwind CSS', 'Algorithmic Screening', 'ATS Architecture'],
      linkProject: 'matchify-platform',
    },
    {
      id: 'proj-2',
      title: 'Slipr Automated Payroll & Payslip Engine',
      role: 'Product Owner & Financial Systems Designer',
      organization: 'PT. Fan Sukses Bersama',
      period: '2026',
      badge: 'HR FinTech Automation',
      desc: 'Internal corporate compensation engine featuring Indonesian TER PPh 21 calculation, BPJS auto-deductions, and encrypted PDF payslips.',
      impact: 'Reduced monthly payroll runtime by 75% (from 3 working days to <1 hour) for 110+ active personnel.',
      skills: ['TER PPh 21 Engine', 'BPJS Formulae', 'Automated PDF Generation', 'Financial Data Security'],
      linkProject: 'slipr-platform',
    },
    {
      id: 'proj-3',
      title: 'Zeno Assessment & Psychometrics Intelligence',
      role: 'Lead Systems Architect & Assessment Specialist',
      organization: 'PT. Fan Sukses Bersama',
      period: '2026',
      badge: 'Psychometric Diagnostics',
      desc: 'Calibrated psychological assessment platform combining DISC behavioral profiling and 16-personality MBTI typology with real-time radar charts.',
      impact: '100% automated scoring in 15 minutes across 1,200+ calibrated records with zero manual calculation errors.',
      skills: ['Psychometric Modeling', 'Radar Chart Analytics', 'DISC & MBTI Profiling', 'Interactive UI'],
      linkProject: 'zeno-platform',
    },
    {
      id: 'proj-4',
      title: 'High-Stakes Live Operations & Crowd Control',
      role: 'Operations Director & Stage Protocol Coordinator',
      organization: 'Sakala Wedding & Lamaran.yok',
      period: '2025 – Present',
      badge: 'Live Production & Logistics',
      desc: 'Orchestrating multi-vendor coordination, high-precision timing, VIP diplomacy, and spatial crowd movements for 50+ luxury productions.',
      impact: '100% on-time execution rate across 50+ ceremonies with crowds up to 2,000 attendees.',
      skills: ['Master Run-Sheet Architecture', 'Crowd Flow Dynamics', 'Crisis Intervention', 'VIP Protocol'],
      linkProject: 'sakala-operations',
    },
    {
      id: 'proj-5',
      title: 'IPB OSIS Fest 2024 National Summit Campaign',
      role: 'Event Director & Campaign Architect',
      organization: 'Directorate of Promotion & Admissions, IPB University',
      period: '2024',
      badge: 'National Campaign & Honors',
      desc: 'National youth leadership conference bringing student council presidents from 27 provinces together with ESG sustainability initiatives.',
      impact: '1st Place National Winner — Digital PR (ESG Theme) at Public Relations Excellence Awards (PREA) 2024.',
      skills: ['National Scale Operations', 'Cross-Functional Leadership', 'Sponsorship Management', 'PR Strategy'],
      linkProject: 'ipb-osis-fest-pr',
    },
    {
      id: 'proj-6',
      title: 'Quantitative Workforce Needs Analysis',
      role: 'Workforce Diagnostics Officer',
      organization: 'PT. Indekstat Konsultan Indonesia',
      period: '2024',
      badge: 'Corporate Analytics',
      desc: 'Empirical workspace time-study analysis and job grading matrices for 35 technical research consultants.',
      impact: '+85% increase in operational role clarity and calibrated compensation bands.',
      skills: ['Workforce Modeling', 'Job Evaluation Grading', 'Data Synthesis', 'Organizational Design'],
      linkProject: 'indekstat-workforce-analysis',
    },
  ];

  return (
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">
        
        {/* PAGE HEADER */}
        <section className="border-b border-[#E7E0D6] pb-6 sm:pb-7 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <ScrollReveal immediateOnMount variant="editorial" delay={0} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E7C69]/10 text-[#6E7C69] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('Track Record & Career Milestones', 'Rekam Jejak & Tonggak Karier')}</span>
            </div>
            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#1E2022] tracking-tight leading-tight">
              {t('Professional Experience', 'Pengalaman Profesional')}
            </h1>
            <p className="text-sm sm:text-base text-[#605E59] mt-3 font-light leading-relaxed">
              {t(
                'A structured record of corporate People Operations leadership (Working Experience), national university diplomacy (Organizational Experience), and custom HR tech engineering (Project Experience).',
                'Koleksi terstruktur dari kepemimpinan HR korporasi (Working Experience), kepengurusan organisasi nasional (Organizational Experience), serta arsitektur solusi sistem digital (Project Experience).'
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal immediateOnMount variant="subtle" delay={0.12} className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 bg-[#1E2022] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-md active:scale-95 flex items-center gap-2"
            >
              <span>{t('Download CV', 'Unduh CV')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#AF8C72]" />
            </button>
          </ScrollReveal>
        </section>

        {/* SUB-MENU SELECTOR TABS */}
        <ScrollReveal immediateOnMount variant="subtle" delay={0.14} className="w-full sm:max-w-fit">
          <div className="grid grid-cols-2 sm:inline-flex items-center gap-1.5 sm:gap-2 p-1.5 bg-white/85 backdrop-blur-md rounded-2xl sm:rounded-full border border-[#E7E0D6] shadow-xs w-full sm:w-auto">
            <button
              onClick={() => setActiveSubMenu('all')}
              className={`px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 ${
                activeSubMenu === 'all'
                  ? 'bg-[#1E2022] text-white shadow-sm'
                  : 'text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{t('All Experience', 'Semua')}</span>
            </button>

            <button
              onClick={() => setActiveSubMenu('working')}
              className={`px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 ${
                activeSubMenu === 'working'
                  ? 'bg-[#6E7C69] text-white shadow-sm'
                  : 'text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{t('Working', 'Kerja')}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full shrink-0 ${activeSubMenu === 'working' ? 'bg-white/20 text-white' : 'bg-[#E7E0D6] text-[#1E2022]'}`}>
                7
              </span>
            </button>

            <button
              onClick={() => setActiveSubMenu('organizational')}
              className={`px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 ${
                activeSubMenu === 'organizational'
                  ? 'bg-[#AF8C72] text-white shadow-sm'
                  : 'text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA]'
              }`}
            >
              <Users className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{t('Organizational', 'Organisasi')}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full shrink-0 ${activeSubMenu === 'organizational' ? 'bg-white/20 text-white' : 'bg-[#E7E0D6] text-[#1E2022]'}`}>
                7
              </span>
            </button>

            <button
              onClick={() => setActiveSubMenu('project')}
              className={`px-3 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 ${
                activeSubMenu === 'project'
                  ? 'bg-[#1E2022] text-white shadow-sm'
                  : 'text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{t('Projects', 'Proyek')}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full shrink-0 ${activeSubMenu === 'project' ? 'bg-white/20 text-white' : 'bg-[#E7E0D6] text-[#1E2022]'}`}>
                {projectExperiences.length}
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* SUB-MENU 1: CORPORATE & WORKING EXPERIENCE */}
        {(activeSubMenu === 'all' || activeSubMenu === 'working') && (
          <section className="space-y-5 sm:space-y-6">
            <ScrollReveal variant="editorial" delay={0} className="flex items-center justify-between border-b border-[#E7E0D6] pb-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6E7C69] text-white flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1E2022] tracking-tight">
                    {t('Corporate & Working Experience', 'Pengalaman Kerja Korporat')}
                  </h2>
                  <span className="text-xs font-mono text-[#AF8C72] uppercase tracking-wider font-semibold">
                    {t('People & Culture Leadership · Analytics · Operations', 'Kepemimpinan People & Culture · Analitik · Operasional')}
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-[#9E7B62] hidden sm:block">
                7 {t('Roles Documented', 'Peran Terdokumentasi')}
              </span>
            </ScrollReveal>

            <ScrollReveal variant="media" duration={0.85} delay={0.05}>
              <WorkingExperienceShowcase onNavigate={onNavigate} onOpenResume={onOpenResume} />
            </ScrollReveal>
          </section>
        )}

        {/* SUB-MENU 2: ORGANIZATIONAL & LEADERSHIP EXPERIENCE */}
        {(activeSubMenu === 'all' || activeSubMenu === 'organizational') && (
          <section className="space-y-5 sm:space-y-6">
            <ScrollReveal variant="editorial" delay={0} className="flex items-center justify-between border-b border-[#E7E0D6] pb-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#AF8C72] text-white flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1E2022] tracking-tight">
                    {t('Organizational Leadership & Governance', 'Kepemimpinan Organisasi & Kelembagaan')}
                  </h2>
                  <span className="text-xs font-mono text-[#6E7C69] uppercase tracking-wider font-semibold">
                    Duta IPB University · Event Director · BEM HR · OSIS Council
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-[#9E7B62] hidden sm:block">
                7 {t('Roles Documented', 'Peran Terdokumentasi')}
              </span>
            </ScrollReveal>

            <ScrollReveal variant="media" duration={0.85} delay={0.05}>
              <OrganizationalExplorer onNavigate={onNavigate} />
            </ScrollReveal>
          </section>
        )}

        {/* SUB-MENU 3: PROJECT EXPERIENCE */}
        {(activeSubMenu === 'all' || activeSubMenu === 'project') && (
          <section className="space-y-5 sm:space-y-6">
            <ScrollReveal variant="editorial" delay={0} className="flex items-center justify-between border-b border-[#E7E0D6] pb-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1E2022] text-white flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5 text-[#AF8C72]" />
                </div>
                <div>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1E2022] tracking-tight">
                    {t('Project Experience & System Deliveries', 'Pengalaman Proyek & Pengiriman Sistem')}
                  </h2>
                  <span className="text-xs font-mono text-[#6E7C69] uppercase tracking-wider font-semibold">
                    {t('In-House HR Tech Engines · Live Event Productions · Workforce Analytics', 'Sistem HR Tech Internal · Produksi Acara · Analitik Tenaga Kerja')}
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-[#9E7B62] hidden sm:block">
                {projectExperiences.length} {t('Systems Engineered', 'Sistem Terbangun')}
              </span>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectExperiences.map((proj, idx) => (
                <ScrollReveal key={proj.id} variant="card" delay={(idx % 2) * 0.09} className="h-full">
                  <div className="h-full p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl shadow-xs hover:border-[#1E2022] transition-all flex flex-col justify-between group">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#6E7C69]/10 text-[#6E7C69] font-mono text-[10px] font-bold uppercase tracking-wider">
                          {proj.badge}
                        </span>
                        <span className="font-mono text-xs text-[#9E7B62]">
                          {proj.period}
                        </span>
                      </div>

                      <h3 className="font-sans font-bold text-2xl text-[#1E2022] group-hover:text-[#6E7C69] transition-colors">
                        {proj.title}
                      </h3>

                      <div className="text-xs font-mono text-[#AF8C72] font-semibold">
                        {proj.role} · {proj.organization}
                      </div>

                      <p className="text-xs sm:text-sm text-[#4A4843] font-light leading-relaxed">
                        {proj.desc}
                      </p>

                      <div className="p-3 bg-[#F3EFEA] rounded-2xl border border-[#E7E0D6] text-xs text-[#1E2022] space-y-1">
                        <strong className="block text-[10px] font-mono uppercase text-[#AF8C72]">
                          {t('Measured Business Impact:', 'Dampak Bisnis Terukur:')}
                        </strong>
                        <p className="font-medium">
                          {proj.impact}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {proj.skills.map((sk, skIdx) => (
                          <span
                            key={skIdx}
                            className="px-2.5 py-0.5 bg-neutral-100 text-[#605E59] rounded-full text-[10px] font-mono"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-4 border-t border-[#E7E0D6]/60 flex items-center justify-between">
                      <button
                        onClick={() => onNavigate('project-detail', proj.linkProject)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E2022] hover:text-[#6E7C69] transition-colors cursor-pointer group/link"
                      >
                        <span>{t('Open Complete Case Study', 'Buka Studi Kasus Lengkap')}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#AF8C72] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* EDUCATION, CERTIFICATIONS & HONORS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 border-t border-[#E7E0D6] pt-8 sm:pt-10">
          <ScrollReveal variant="card" delay={0} className="h-full">
            <div className="h-full p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl space-y-4 shadow-xs">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#AF8C72] font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>{t('01 / Education', '01 / Pendidikan')}</span>
              </div>

              <div>
                <h3 className="font-sans font-bold text-2xl text-[#1E2022]">
                  IPB University
                </h3>
                <span className="font-mono text-xs text-[#605E59] block mt-1">
                  Institut Pertanian Bogor · 2020 – 2024
                </span>
              </div>

              <div className="pt-2 border-t border-[#E7E0D6] text-xs text-[#4A4843] space-y-1.5 font-light">
                <p><strong>{t('Degree:', 'Gelar:')}</strong> {t('Bachelor of Animal Science (S.Pt.)', 'Sarjana Peternakan (S.Pt.)')}</p>
                <p><strong>{t('Cumulative GPA:', 'IPK Kumulatif:')}</strong> 3.65 / 4.00</p>
                <p><strong>{t('Faculty:', 'Fakultas:')}</strong> {t('Faculty of Animal Science', 'Fakultas Peternakan')}</p>
                <p className="text-[11px] text-[#9E7B62] pt-2 leading-relaxed font-mono">
                  {t(
                    'Quantitative modeling & statistical optimization thesis — directly applied into Workforce Needs Analysis (WNA) and People Analytics systems.',
                    'Skripsi berfokus pada pemodelan kuantitatif dan optimasi statistik — diterapkan langsung pada Workforce Needs Analysis (WNA) dan sistem HR.'
                  )}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="card" delay={0.09} className="h-full">
            <div className="h-full p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl space-y-4 shadow-xs">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6E7C69] font-bold">
                <Trophy className="w-4 h-4" />
                <span>{t('02 / National Honors', '02 / Prestasi Nasional')}</span>
              </div>

              <div>
                <h3 className="font-sans font-bold text-2xl text-[#1E2022]">
                  {t('1st Place PREA 2024', 'Juara 1 Nasional PREA 2024')}
                </h3>
                <span className="font-mono text-xs text-[#605E59] block mt-1">
                  Public Relations Excellence Awards
                </span>
              </div>

              <div className="pt-2 border-t border-[#E7E0D6] text-xs text-[#4A4843] space-y-1.5 font-light">
                <p><strong>{t('Category:', 'Kategori:')}</strong> Digital PR Campaign (ESG Theme)</p>
                <p><strong>{t('Scale:', 'Skala:')}</strong> {t('270+ Student Leaders in 27 Provinces', '270+ Ketua OSIS dari 27 Provinsi')}</p>
                <p><strong>{t('Title:', 'Peran:')}</strong> Duta IPB University Ambassador</p>
                <p className="text-[11px] text-[#9E7B62] pt-2 leading-relaxed font-mono">
                  {t(
                    'Recognized nationally for data-driven campaign architecture and nationwide student engagement.',
                    'Diakui secara nasional atas arsitektur kampanye berbasis data dan pelibatan delegasi pelajar se-Indonesia.'
                  )}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="card" delay={0.18} className="h-full">
            <div className="h-full p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl space-y-4 shadow-xs">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#AF8C72] font-bold">
                <Award className="w-4 h-4" />
                <span>{t('03 / Development', '03 / Sertifikasi & Praktik')}</span>
              </div>

              <div>
                <h3 className="font-sans font-bold text-2xl text-[#1E2022]">
                  {t('Core Credentials', 'Sertifikasi & Spesialisasi')}
                </h3>
                <span className="font-mono text-xs text-[#605E59] block mt-1">
                  Human Capital &amp; Analytics
                </span>
              </div>

              <div className="pt-2 border-t border-[#E7E0D6] text-xs text-[#4A4843] space-y-2 font-light">
                <p>• Certified MSIB Human Capital Management (Indekstat)</p>
                <p>• {t('Calibrated DISC & MBTI Psychometric Evaluator', 'Evaluator Psikometri Terkalibrasi (DISC & MBTI)')}</p>
                <p>• {t('BPJS Ketenagakerjaan & Kesehatan Compliance Execution', 'Eksekusi Kepatuhan BPJS Ketenagakerjaan & Kesehatan')}</p>
                <p>• {t('Indonesian TER PPh 21 Corporate Payroll Engine', 'Otomasi Payroll Pajak TER PPh 21 Indonesia')}</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Visual Archive Shortcut Banner */}
        <ScrollReveal as="section" variant="media" delay={0.08} className="p-6 sm:p-8 bg-[#6E7C69] text-white rounded-[2rem] shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0 border border-white/30">
              <Camera className="w-6 h-6 sm:w-7 sm:h-7 text-[#F3EFEA]" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-xl sm:text-3xl text-white leading-snug">
                {t(
                  `Explore Visual Archive (${SURYA_PHOTOS_ARCHIVE.length + EVENT_PHOTOS_ARCHIVE.length} Curated Photos)`,
                  `Jelajahi Visual Archive (${SURYA_PHOTOS_ARCHIVE.length + EVENT_PHOTOS_ARCHIVE.length} Foto Dokumentasi)`
                )}
              </h3>
              <p className="text-xs sm:text-sm text-[#F3EFEA]/90 font-light mt-1 max-w-xl">
                {t(
                  `Featuring the "myself" personal milestone album (${SURYA_PHOTOS_ARCHIVE.length} photos) and "Event" live governance & stage album (${EVENT_PHOTOS_ARCHIVE.length} photos).`,
                  `Album "myself" (${SURYA_PHOTOS_ARCHIVE.length} foto personal/milestone) dan Sub-Album "Event" (${EVENT_PHOTOS_ARCHIVE.length} foto panggung akbar, MC, dan protokol kegiatan).`
                )}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('archive')}
            className="w-full md:w-auto px-6 py-3.5 bg-[#1E2022] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer shrink-0 shadow-md flex items-center justify-center gap-2"
          >
            <span>{t('Open Visual Archive', 'Buka Visual Archive')}</span>
            <ArrowUpRight className="w-4 h-4 text-[#AF8C72]" />
          </button>
        </ScrollReveal>
      </div>
    </div>
  );
};
