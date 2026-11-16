import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Users, 
  Calendar, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2, 
  Trophy, 
  ChevronDown, 
  GraduationCap, 
  Award, 
  Camera, 
  Layers,
  Sparkles,
  ExternalLink,
  Code2,
  Compass
} from 'lucide-react';
import { IMAGES, PROJECTS } from '../../data/portfolioData';
import { AppRoute } from '../../types';
import { ScrollReveal } from '../ScrollReveal';

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

  const [expandedWorkId, setExpandedWorkId] = useState<string>('work-1');
  const [expandedOrgId, setExpandedOrgId] = useState<string>('org-1');
  const [expandedProjId, setExpandedProjId] = useState<string>('proj-1');

  // Corporate & Working Experience Data
  const workingExperiences = [
    {
      id: 'work-1',
      role: 'People and Culture Lead',
      company: 'PT. Fan Sukses Bersama',
      period: 'Apr 2026 – Present',
      location: 'Jakarta, Indonesia',
      type: 'Full-time · Corporate',
      scope: '110+ Full-Time Employees Lintas Divisi',
      desc: 'Bertindak sebagai Sole HR Lead yang memegang kendali penuh operasional People & Culture untuk 110+ karyawan, memastikan kepatuhan regulasi ketenagakerjaan, kesejahteraan karyawan, dan integrasi sistem kerja otomatis.',
      responsibilities: [
        'Directing full-lifecycle talent acquisition, screening, and automated onboarding.',
        'Administering employee social security compliance (BPJS Ketenagakerjaan & Kesehatan) with zero legal infractions.',
        'Structuring division-level OKRs and individual contributor KPI evaluation matrices.',
        'Handling conflict resolution, employee welfare grievances, and cultural engagement initiatives.'
      ],
      achievements: [
        'Architected custom internal automation suites (Matchify, Slipr, Zeno) eliminating 65% of recurring administrative friction.',
        'Reduced monthly payroll calculation and payslip distribution cycle time from 3 days to under 1 hour (-75%).',
        'Slashed recruitment time-to-hire by 60% (from 43 down to 17.2 days) across technical and operational roles.'
      ],
      skills: ['People Operations', 'HR Automation', 'KPI & OKR Evaluation', 'BPJS Compliance', 'Talent Retention'],
      image: IMAGES.eventMeetingDinner,
      imageLabel: 'Dokumentasi: Rapat Pimpinan Eksekutif & Tim Strategis',
    },
    {
      id: 'work-2',
      role: 'Project Analyst',
      company: 'PT. Rakamin Kolektif Madani',
      period: 'Dec 2025 – Mar 2026',
      location: 'Jakarta, Indonesia (Hybrid)',
      type: 'Contract / Project-Based',
      scope: 'Change Management & Strategic Workforce Planning',
      desc: 'Menganalisis arsitektur manajemen perubahan dan perencanaan kebutuhan tenaga kerja korporasi dengan dashboard analitik eksekutif.',
      responsibilities: [
        'Auditing cross-functional organizational structures to identify workflow redundancies and role ambiguity.',
        'Synthesizing workforce planning and headcount projection models for C-suite executive leadership.',
        'Authoring and standardizing the Corporate Leadership Handbook across technical and business divisions.'
      ],
      achievements: [
        'Delivered 100% role clarity alignment across cross-functional leadership teams.',
        'Engineered executive Power BI dashboards providing real-time visibility into workforce utilization and capacity.'
      ],
      skills: ['Workforce Planning', 'Change Management', 'C-Suite Dashboards', 'Org Architecture', 'Leadership Frameworks'],
    },
    {
      id: 'work-3',
      role: 'Human Capital Management Officer',
      company: 'PT. Indekstat Konsultan Indonesia',
      period: 'Sep 2024 – Dec 2024',
      location: 'Jakarta, Indonesia',
      type: 'Professional Practice (MSIB National Program)',
      scope: '35 Research & Technical Consultants',
      desc: 'Memelopori analisa kuantitatif kebutuhan tenaga kerja serta standarisasi kompetensi jabatan bagi konsultan dan tim teknis riset.',
      responsibilities: [
        'Conducting quantitative Workforce Needs Analysis (WNA) based on empirical workspace time-studies.',
        'Formulating 5-tier competency grading rubrics and restructured job descriptions.',
        'Optimizing recruitment candidate pipeline data tracking and evaluation scorecards.'
      ],
      achievements: [
        'Achieved a verified 85% post-program increase in consultant functional role clarity.',
        'Standardized repeatable onboarding curricula for technical research specialists.'
      ],
      skills: ['Workforce Needs Analysis', 'Competency Framework', 'Job Grading', 'Performance Diagnostics'],
    },
    {
      id: 'work-4',
      role: 'Operations Lead & Event Coordinator',
      company: 'Sakala Wedding & Lamaran.yok',
      period: 'Sep 2025 – Present',
      location: 'Jakarta Metropolitan Area',
      type: 'Project Lead / Operations',
      scope: '50+ Major Luxury Productions · Up to 2,000+ Guests',
      desc: 'Mengorkestrasi manajemen logistik berstandar tinggi dan alur massa (crowd control) pada puluhan perhelatan skala besar.',
      responsibilities: [
        'Managing live on-site crowd logistics, VIP security protocols, and spatial movement for up to 2,000 guests.',
        'Leading multi-vendor contract negotiations, synchronization of technical run-sheets, and vendor compliance.',
        'Serving as primary executive stakeholder liaison and directing real-time crisis mitigation under pressure.'
      ],
      achievements: [
        'Executed 50+ luxury productions with a 100% operational success rate and zero live delays.',
        'Established repeatable master run-sheet architectures adopted across all agency productions.'
      ],
      skills: ['High-Stakes Operations', 'Crowd Logistics', 'Vendor Management', 'Crisis Mitigation'],
      image: IMAGES.eventAquafestSolo,
      imageLabel: 'Dokumentasi: Master of Ceremony & Operations Lead Lapangan',
    },
  ];

  // Organizational & Leadership Experience Data
  const organizationalExperiences = [
    {
      id: 'org-1',
      role: 'Head of Event — IPB OSIS Fest 2024',
      organization: 'Direktorat Promosi & Penerimaan Mahasiswa Baru IPB University',
      period: '2024',
      level: 'Tingkat Nasional (27 Provinsi)',
      desc: 'Memimpin kepanitiaan akbar dalam penyelenggaraan konferensi kepemimpinan pelajar nasional yang menghadirkan delegasi OSIS unggulan dari 27 provinsi di Indonesia.',
      highlights: [
        'Memimpin dan mengkoordinasikan lebih dari 70 panitia lintas divisi dalam merancang alur acara, protokol tamu kehormatan, dan mitigasi krisis.',
        'Mengelola alokasi anggaran, kemitraan strategis, dan koordinasi dengan pimpinan rektorat IPB University.',
        'Membawa kampanye meraih Juara 1 Nasional Digital PR (ESG Theme) di ajang Public Relations Excellence Awards (PREA) 2024.'
      ],
      image: IMAGES.eventSbIpbCommittee,
      imageLabel: 'Dokumentasi: Executive Committee SB-IPB & Kepanitiaan Formal',
    },
    {
      id: 'org-2',
      role: 'Duta IPB University (University Ambassador)',
      organization: 'Institut Pertanian Bogor (IPB University)',
      period: '2022 – 2024',
      level: 'Representasi Resmi Rektorat & Kampus',
      desc: 'Terpilih sebagai duta resmi universitas untuk memimpin komunikasi publik, representasi institusi pada forum nasional, dan penerimaan delegasi kehormatan.',
      highlights: [
        'Mewakili IPB University dalam roadshow edukasi nasional, expo perguruan tinggi, dan audiensi diplomasi kemitraan.',
        'Bertindak sebagai Master of Ceremony (MC) dan moderator utama pada puluhan simposium rektorat dan seminar nasional.'
      ],
      image: IMAGES.eventDutaIpbStage,
      imageLabel: 'Dokumentasi: Satu Dekade Duta IPB University di Panggung Megah',
    },
    {
      id: 'org-3',
      role: 'Head of Human Resources / HR of Student',
      organization: 'BEM Fakultas Peternakan IPB University',
      period: '2023 – 2024',
      level: 'Fakultas / Kampus',
      desc: 'Memimpin departemen SDM mahasiswa dalam merancang program rekrutmen, retensi, penilaian kinerja, dan kehangatan internal organisasi.',
      highlights: [
        'Merancang sistem rekrutmen dan orientasi kerja staf organisasi berbasis asesmen kesesuaian nilai (cultural fit).',
        'Mengembangkan survei iklim organisasi (pulse survey) untuk mengidentifikasi kepuasan anggota dan efektivitas kepengurusan.'
      ],
      image: IMAGES.eventFapetIpbStage,
      imageLabel: 'Dokumentasi: Delegasi Mahasiswa Fakultas Peternakan IPB',
    },
    {
      id: 'org-4',
      role: 'Delegasi Nasional — Indonesia Student Leadership Camp (ISLC) IX',
      organization: 'Universitas Indonesia (UI)',
      period: '2021',
      level: 'Nasional (Top 100 Ketua OSIS)',
      desc: 'Terpilih dari ribuan ketua OSIS se-Indonesia untuk mengikuti inkubasi kepemimpinan eksekutif, debat kebijakan publik, dan inisiatif kepemudaan nasional.',
      highlights: [
        'Merumuskan gagasan advokasi kepemudaan nasional bersama 100 ketua OSIS terbaik se-Indonesia.',
        'Menyelesaikan pelatihan intensif kepemimpinan adaptif dan manajemen konflik di lingkungan kampus Universitas Indonesia.'
      ],
    },
    {
      id: 'org-5',
      role: 'Ketua OSIS (The Best Student Council President)',
      organization: 'Organisasi Siswa Intra Sekolah (OSIS)',
      period: '2020 – 2021',
      level: 'Sekolah / Daerah',
      desc: 'Memimpin dewan perwakilan siswa dan kabinet OSIS dalam menggerakkan aspirasi pelajar, reformasi kegiatan digital di masa pandemi, dan kolaborasi eksternal.',
      highlights: [
        'Dianugerahi predikat The Best Student Council President 2021.',
        'Mentransformasi program kerja OSIS ke platform digital dan meningkatkan partisipasi ekstrakurikuler sebesar 140%.'
      ],
    },
  ];

  // Project Experience Data (Bespoke systems, internal tooling & event campaigns)
  const projectExperiences = [
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
      desc: 'Bespoke ATS & candidate evaluation portal with automated scoring rubrics and structured interviewer feedback loops.',
      impact: '60% Faster Time-to-Hire (from 43 to 17.2 days) & 350+ candidates evaluated seamlessly.',
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
      desc: 'Internal corporate compensation generator featuring Indonesian TER PPh 21 calculation, BPJS auto-deductions, and encrypted PDF payslips.',
      impact: 'Reduced monthly payroll runtime by 75% (from 3 working days to 45 minutes) for 110+ personnel.',
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
      desc: 'Psychological assessment platform combining calibrated DISC behavioural profiling and 16-personality typology with real-time radar charts.',
      impact: '100% automated psychometric reporting delivered instantly to hiring managers with zero manual scoring errors.',
      skills: ['Psychometric Modeling', 'Radar Chart Analytics', 'DISC Profiling', 'Interactive UI'],
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
      organization: 'Direktorat Promosi & PMB IPB University',
      period: '2024',
      badge: 'National Campaign & Honors',
      desc: 'National youth leadership conference bringing student council presidents from 27 provinces with ESG tree-planting initiatives.',
      impact: 'Juara 1 Nasional Digital PR (ESG Theme) di ajang Public Relations Excellence Awards (PREA) 2024.',
      skills: ['National Scale Operations', 'Cross-Functional Leadership', 'Sponsorship Management', 'PR Strategy'],
      linkProject: 'ipb-osis-fest',
    },
    {
      id: 'proj-6',
      title: 'Quantitative Workforce Needs Analysis',
      role: 'Workforce Diagnostics Officer',
      organization: 'PT. Indekstat Konsultan Indonesia',
      period: '2024',
      badge: 'Corporate Analytics',
      desc: 'Empirical workspace time-study analysis and job grading matrices for 35 technical research consultants.',
      impact: '85% increase in operational role clarity and calibrated compensation bands.',
      skills: ['Workforce Modeling', 'Job Evaluation Grading', 'Data Synthesis', 'Organizational Design'],
      linkProject: 'indekstat-workforce-analysis',
    },
  ];

  return (
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-28 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-20">
        
        {/* =========================================================================
            PAGE HEADER & EDITORIAL INTRO
            ========================================================================= */}
        <section className="border-b border-[#E7E0D6] pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <ScrollReveal immediateOnMount variant="editorial" delay={0} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E7C69]/10 text-[#6E7C69] text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Track Record & Career Milestones</span>
            </div>
            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#1E2022] tracking-tight leading-tight">
              Professional Experience
            </h1>
            <p className="text-sm sm:text-base text-[#605E59] mt-3 font-light leading-relaxed">
              Koleksi terstruktur dari kepemimpinan korporasi (Working Experience), kepengurusan organisasi nasional (Organizational Experience), serta arsitektur solusi sistem digital (Project Experience).
            </p>
          </ScrollReveal>

          <ScrollReveal immediateOnMount variant="subtle" delay={0.12} className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 bg-[#1E2022] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-md active:scale-95 flex items-center gap-2"
            >
              <span>Download CV</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#AF8C72]" />
            </button>
          </ScrollReveal>
        </section>

        {/* =========================================================================
            SUB-MENU SELECTOR TABS (The 3 Requested Sub-Menus)
            ========================================================================= */}
        <ScrollReveal immediateOnMount variant="subtle" delay={0.14} className="max-w-fit">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-full border border-[#E7E0D6] shadow-xs max-w-fit">
          <button
            onClick={() => setActiveSubMenu('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeSubMenu === 'all'
                ? 'bg-[#1E2022] text-white shadow-sm'
                : 'text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Experience</span>
          </button>

          <button
            onClick={() => setActiveSubMenu('working')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeSubMenu === 'working'
                ? 'bg-[#6E7C69] text-white shadow-sm'
                : 'text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA]'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Working Experience</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${activeSubMenu === 'working' ? 'bg-white/20 text-white' : 'bg-[#E7E0D6] text-[#1E2022]'}`}>
              {workingExperiences.length}
            </span>
          </button>

          <button
            onClick={() => setActiveSubMenu('organizational')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeSubMenu === 'organizational'
                ? 'bg-[#AF8C72] text-white shadow-sm'
                : 'text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA]'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Organizational Experience</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${activeSubMenu === 'organizational' ? 'bg-white/20 text-white' : 'bg-[#E7E0D6] text-[#1E2022]'}`}>
              {organizationalExperiences.length}
            </span>
          </button>

          <button
            onClick={() => setActiveSubMenu('project')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
              activeSubMenu === 'project'
                ? 'bg-[#1E2022] text-white shadow-sm'
                : 'text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Project Experience</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${activeSubMenu === 'project' ? 'bg-white/20 text-white' : 'bg-[#E7E0D6] text-[#1E2022]'}`}>
              {projectExperiences.length}
            </span>
          </button>
        </div>
        </ScrollReveal>

        {/* =========================================================================
            SUB-MENU 1: CORPORATE & WORKING EXPERIENCE
            ========================================================================= */}
        {(activeSubMenu === 'all' || activeSubMenu === 'working') && (
          <section className="space-y-8">
            <ScrollReveal variant="editorial" delay={0} className="flex items-center justify-between border-b border-[#E7E0D6] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6E7C69] text-white flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1E2022] tracking-tight">
                    Corporate & Working Experience
                  </h2>
                  <span className="text-xs font-mono text-[#AF8C72] uppercase tracking-wider font-semibold">
                    People & Culture Leadership · Analytics · Operations
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-[#9E7B62] hidden sm:block">
                {workingExperiences.length} Roles Documented
              </span>
            </ScrollReveal>

            <div className="space-y-6">
              {workingExperiences.map((work, idx) => {
                const isExpanded = expandedWorkId === work.id;
                return (
                  <ScrollReveal key={work.id} variant="card" delay={idx * 0.08}>
                  <div
                    className="p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl shadow-xs hover:border-[#6E7C69] transition-all"
                  >
                    <div 
                      onClick={() => setExpandedWorkId(isExpanded ? '' : work.id)}
                      className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 cursor-pointer select-none"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#605E59] mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#6E7C69]/10 text-[#6E7C69] font-bold uppercase text-[10px]">
                            {work.type}
                          </span>
                          <span>·</span>
                          <span>{work.location}</span>
                          <span>·</span>
                          <span className="text-[#1E2022] font-semibold">{work.scope}</span>
                        </div>
                        <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#1E2022] tracking-tight">
                          {work.role}
                        </h3>
                        <span className="font-mono text-sm text-[#AF8C72] font-semibold block mt-1">
                          {work.company}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 font-mono text-xs text-[#1E2022] self-start md:self-auto">
                        <span className="bg-[#F3EFEA] px-3.5 py-1.5 border border-[#E7E0D6] rounded-full font-medium">
                          {work.period}
                        </span>
                        <div className={`w-7 h-7 rounded-full border border-[#E7E0D6] flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-[#1E2022] text-white' : 'text-[#1E2022]'}`}>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-[#4A4843] font-light leading-relaxed mt-4">
                      {work.desc}
                    </p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-6 mt-6 border-t border-[#E7E0D6] space-y-6"
                        >
                          {/* Attached Image if available */}
                          {work.image && (
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 bg-[#F3EFEA] rounded-2xl border border-[#E7E0D6]">
                              <div className="md:col-span-4 aspect-[16/10] overflow-hidden rounded-xl border border-[#E7E0D6]">
                                <img
                                  src={work.image}
                                  alt={work.imageLabel}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="md:col-span-8 space-y-2">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#AF8C72] block font-semibold">
                                  Authentic Photographic Evidence
                                </span>
                                <strong className="block font-sans text-base text-[#1E2022]">
                                  {work.imageLabel}
                                </strong>
                                <p className="text-xs text-[#605E59] leading-relaxed">
                                  Bukti visual keterlibatan langsung di lapangan pada evaluasi kepemimpinan dan manajemen operasional strategis.
                                </p>
                                <button
                                  onClick={() => onNavigate('archive')}
                                  className="text-xs font-mono text-[#6E7C69] hover:underline cursor-pointer font-bold inline-flex items-center gap-1"
                                >
                                  <span>Lihat di Visual Archive (Sub-Album "Event")</span>
                                  <ArrowUpRight className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          )}

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
                            {/* Responsibilities */}
                            <div className="space-y-3">
                              <span className="font-mono text-[11px] uppercase tracking-wider text-[#605E59] block font-bold">
                                Key Responsibilities:
                              </span>
                              <ul className="space-y-2 text-[#4A4843]">
                                {work.responsibilities.map((r, rIdx) => (
                                  <li key={rIdx} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#6E7C69] mt-1.5 shrink-0" />
                                    <span className="leading-relaxed">{r}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Achievements */}
                            <div className="space-y-3">
                              <span className="font-mono text-[11px] uppercase tracking-wider text-[#AF8C72] block font-bold">
                                Verified Achievements:
                              </span>
                              <ul className="space-y-2 text-[#1E2022]">
                                {work.achievements.map((a, aIdx) => (
                                  <li key={aIdx} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6E7C69] shrink-0 mt-0.5" />
                                    <span className="leading-relaxed font-medium">{a}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Skills Chips */}
                          <div className="pt-2 flex flex-wrap gap-2">
                            {work.skills.map((s, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-3 py-1 bg-[#F3EFEA] border border-[#E7E0D6] text-[11px] font-mono text-[#1E2022] rounded-full"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>
        )}

        {/* =========================================================================
            SUB-MENU 2: ORGANIZATIONAL & LEADERSHIP EXPERIENCE
            ========================================================================= */}
        {(activeSubMenu === 'all' || activeSubMenu === 'organizational') && (
          <section className="space-y-8 pt-4">
            <ScrollReveal variant="editorial" delay={0} className="flex items-center justify-between border-b border-[#E7E0D6] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#AF8C72] text-white flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1E2022] tracking-tight">
                    Organizational Leadership & Institutional Governance
                  </h2>
                  <span className="text-xs font-mono text-[#6E7C69] uppercase tracking-wider font-semibold">
                    Duta IPB University · Event Director · BEM HR · OSIS Council
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-[#9E7B62] hidden sm:block">
                {organizationalExperiences.length} Roles Documented
              </span>
            </ScrollReveal>

            <div className="space-y-6">
              {organizationalExperiences.map((org, idx) => {
                const isExpanded = expandedOrgId === org.id;
                return (
                  <ScrollReveal key={org.id} variant="card" delay={idx * 0.07}>
                  <div
                    className="p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl shadow-xs hover:border-[#AF8C72] transition-all"
                  >
                    <div
                      onClick={() => setExpandedOrgId(isExpanded ? '' : org.id)}
                      className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 cursor-pointer select-none"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#605E59] mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#AF8C72]/15 text-[#AF8C72] font-bold uppercase text-[10px]">
                            {org.level}
                          </span>
                          <span>·</span>
                          <span className="text-[#1E2022] font-semibold">{org.period}</span>
                        </div>
                        <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#1E2022] tracking-tight">
                          {org.role}
                        </h3>
                        <span className="font-mono text-sm text-[#6E7C69] font-semibold block mt-1">
                          {org.organization}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 font-mono text-xs text-[#1E2022] self-start md:self-auto">
                        <div className={`w-7 h-7 rounded-full border border-[#E7E0D6] flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-[#1E2022] text-white' : 'text-[#1E2022]'}`}>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-[#4A4843] font-light leading-relaxed mt-4">
                      {org.desc}
                    </p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-6 mt-6 border-t border-[#E7E0D6] space-y-6"
                        >
                          {org.image && (
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 bg-[#F3EFEA] rounded-2xl border border-[#E7E0D6]">
                              <div className="md:col-span-4 aspect-[16/10] overflow-hidden rounded-xl border border-[#E7E0D6]">
                                <img
                                  src={org.image}
                                  alt={org.imageLabel}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="md:col-span-8 space-y-2">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-[#AF8C72] block font-semibold">
                                  Dokumentasi Lapangan
                                </span>
                                <strong className="block font-sans text-base text-[#1E2022]">
                                  {org.imageLabel}
                                </strong>
                                <button
                                  onClick={() => onNavigate('archive')}
                                  className="text-xs font-mono text-[#AF8C72] hover:underline cursor-pointer font-bold inline-flex items-center gap-1"
                                >
                                  <span>Buka di Visual Archive</span>
                                  <ArrowUpRight className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          )}

                          <div className="space-y-2">
                            <span className="font-mono text-[11px] uppercase tracking-wider text-[#AF8C72] block font-bold">
                              Key Deliverables & Impact:
                            </span>
                            <ul className="space-y-2 text-xs text-[#1E2022]">
                              {org.highlights.map((h, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-2.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#AF8C72] shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>
        )}

        {/* =========================================================================
            SUB-MENU 3: PROJECT EXPERIENCE (Proprietary Platforms & High-Stakes Delivery)
            ========================================================================= */}
        {(activeSubMenu === 'all' || activeSubMenu === 'project') && (
          <section className="space-y-8 pt-4">
            <ScrollReveal variant="editorial" delay={0} className="flex items-center justify-between border-b border-[#E7E0D6] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1E2022] text-white flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-[#AF8C72]" />
                </div>
                <div>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#1E2022] tracking-tight">
                    Project Experience & System Deliveries
                  </h2>
                  <span className="text-xs font-mono text-[#6E7C69] uppercase tracking-wider font-semibold">
                    Proprietary Software Engines · Live Event Productions · Workforce Analytics
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-[#9E7B62] hidden sm:block">
                {projectExperiences.length} Systems Engineered
              </span>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectExperiences.map((proj, idx) => {
                return (
                  <ScrollReveal key={proj.id} variant="card" delay={(idx % 2) * 0.09} className="h-full">
                  <div
                    className="h-full p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl shadow-xs hover:border-[#1E2022] transition-all flex flex-col justify-between group"
                  >
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
                          Measured Business Impact:
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
                        <span>Open Complete Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#AF8C72] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>
        )}

        {/* =========================================================================
            EDUCATION, CERTIFICATIONS & HONORS SECTION
            ========================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[#E7E0D6] pt-16">
          {/* Education */}
          <ScrollReveal variant="card" delay={0} className="h-full">
          <div className="h-full p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl space-y-4 shadow-xs">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#AF8C72] font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>01 / Education</span>
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
              <p><strong>Degree:</strong> Bachelor of Animal Science (S.Pt.)</p>
              <p><strong>Cumulative GPA:</strong> 3.65 / 4.00 (Honors)</p>
              <p><strong>Faculty:</strong> Faculty of Animal Science</p>
              <p className="text-[11px] text-[#9E7B62] pt-2 leading-relaxed font-mono">
                Scholarly thesis focusing on production optimization, statistical data analysis, and quantitative modeling.
              </p>
            </div>
          </div>
          </ScrollReveal>

          {/* Honors & National Awards */}
          <ScrollReveal variant="card" delay={0.09} className="h-full">
          <div className="h-full p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl space-y-4 shadow-xs">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6E7C69] font-bold">
              <Trophy className="w-4 h-4" />
              <span>02 / National Honors</span>
            </div>

            <div>
              <h3 className="font-sans font-bold text-2xl text-[#1E2022]">
                1st Place PREA 2024
              </h3>
              <span className="font-mono text-xs text-[#605E59] block mt-1">
                Public Relations Excellence Awards
              </span>
            </div>

            <div className="pt-2 border-t border-[#E7E0D6] text-xs text-[#4A4843] space-y-1.5 font-light">
              <p><strong>Category:</strong> Digital PR Campaign (ESG Theme)</p>
              <p><strong>Scale:</strong> 270+ Student Leaders in 27 Provinces</p>
              <p><strong>Title:</strong> Duta IPB University Ambassador</p>
              <p className="text-[11px] text-[#9E7B62] pt-2 leading-relaxed font-mono">
                Recognized nationally for data-driven campaign architecture and nationwide student engagement.
              </p>
            </div>
          </div>
          </ScrollReveal>

          {/* Certifications & Professional Development */}
          <ScrollReveal variant="card" delay={0.18} className="h-full">
          <div className="h-full p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl space-y-4 shadow-xs">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#AF8C72] font-bold">
              <Award className="w-4 h-4" />
              <span>03 / Development</span>
            </div>

            <div>
              <h3 className="font-sans font-bold text-2xl text-[#1E2022]">
                Certifications
              </h3>
              <span className="font-mono text-xs text-[#605E59] block mt-1">
                Human Capital & Analytics
              </span>
            </div>

            <div className="pt-2 border-t border-[#E7E0D6] text-xs text-[#4A4843] space-y-2 font-light">
              <p>• Certified MSIB Human Capital Management (Indekstat)</p>
              <p>• Calibrated DISC & MBTI Psychometric Evaluator</p>
              <p>• BPJS Ketenagakerjaan & Kesehatan Compliance Master</p>
              <p>• Indonesian PPh 21 TER Corporate Payroll Specialist</p>
            </div>
          </div>
          </ScrollReveal>
        </section>

        {/* Visual Archive Shortcut Banner */}
        <ScrollReveal as="section" variant="media" delay={0.08} className="p-8 sm:p-10 bg-[#6E7C69] text-white rounded-[2rem] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0 border border-white/30">
              <Camera className="w-7 h-7 text-[#F3EFEA]" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white">
                Jelajahi Visual Archive (23 Foto Dokumentasi)
              </h3>
              <p className="text-xs sm:text-sm text-[#F3EFEA]/90 font-light mt-1 max-w-xl">
                Album "myself" (10 foto personal/milestone) dan Sub-Album "Event" (13 foto panggung akbar, MC, dan protokol kenegaraan).
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('archive')}
            className="px-6 py-3.5 bg-[#1E2022] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer shrink-0 shadow-md flex items-center gap-2"
          >
            <span>Buka Visual Archive</span>
            <ArrowUpRight className="w-4 h-4 text-[#AF8C72]" />
          </button>
        </ScrollReveal>
      </div>
    </div>
  );
};
