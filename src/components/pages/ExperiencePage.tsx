import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Users, 
  ArrowUpRight, 
  CheckCircle2, 
  Trophy, 
  ChevronDown, 
  GraduationCap, 
  Award, 
  Camera, 
  Layers,
  Sparkles,
  Code2,
} from 'lucide-react';
import { IMAGES } from '../../data/portfolioData';
import { AppRoute } from '../../types';
import { ScrollReveal } from '../ScrollReveal';
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

  const [expandedWorkId, setExpandedWorkId] = useState<string>('work-1');
  const [expandedOrgId, setExpandedOrgId] = useState<string>('org-1');

  const workingExperiences = lang === 'id' ? [
    {
      id: 'work-1',
      role: 'People and Culture Lead',
      company: 'PT. Fan Sukses Bersama',
      period: 'Apr 2026 – Present',
      location: 'Jakarta, Indonesia',
      type: 'Full-time · Korporat',
      scope: '110+ Karyawan Tetap Lintas Divisi',
      desc: 'Berperan sebagai People & Culture Lead yang mengelola operasional HR secara end-to-end untuk 110+ karyawan, menjaga kepatuhan regulasi ketenagakerjaan (BPJS & PPh 21), serta membangun alat bantu kerja otomatis internal.',
      responsibilities: [
        'Memimpin akuisisi talenta menyeluruh, skrining kompetensi, dan proses onboarding otomatis.',
        'Mengelola kepatuhan jaminan sosial ketenagakerjaan (BPJS Ketenagakerjaan & Kesehatan) dengan nol pelanggaran.',
        'Menurunkan target OKR divisi ke dalam matriks evaluasi KPI individu lintas departemen.',
        'Menangani mediasi hubungan industrial, kesejahteraan karyawan, dan keterlibatan tim.'
      ],
      achievements: [
        'Membangun rangkaian aplikasi internal (Matchify, Slipr, Zeno) yang menekan 65% beban administrasi berulang.',
        'Memangkas siklus kalkulasi payroll dan distribusi slip gaji bulanan dari 3 hari menjadi di bawah 1 jam (-75%).',
        'Mempercepat time-to-hire rekrutmen sebesar 60% (dari 43 menjadi 17,2 hari).'
      ],
      skills: ['People Operations', 'Otomasi HR', 'Evaluasi KPI & OKR', 'Kepatuhan BPJS', 'Retensi Talenta'],
      image: IMAGES.eventMeetingDinner,
      imageLabel: 'Dokumentasi: Rapat Pimpinan Eksekutif & Tim Strategis',
    },
    {
      id: 'work-2',
      role: 'Project Analyst',
      company: 'PT. Rakamin Kolektif Madani',
      period: 'Dec 2025 – Mar 2026',
      location: 'Jakarta, Indonesia (Hybrid)',
      type: 'Kontrak / Proyek Strategis',
      scope: 'Manajemen Perubahan & Perencanaan Tenaga Kerja',
      desc: 'Menganalisis arsitektur manajemen perubahan dan perencanaan kebutuhan tenaga kerja korporasi melalui dashboard eksekutif Power BI dan audit struktur lintas divisi.',
      responsibilities: [
        'Mengaudit struktur organisasi lintas fungsi guna menghilangkan duplikasi alur kerja dan ambiguitas peran.',
        'Menyusun model perencanaan tenaga kerja dan proyeksi kebutuhan headcount bagi jajaran direksi.',
        'Menyusun serta menstandarkan Corporate Leadership Handbook lintas divisi bisnis dan teknis.'
      ],
      achievements: [
        'Menghasilkan 100% kejelasan peran dan tata kelola RACI di seluruh tim kepemimpinan lintas fungsi.',
        'Membangun dashboard Power BI eksekutif untuk memantau utilisasi kapasitas tenaga kerja secara real-time.'
      ],
      skills: ['Workforce Planning', 'Change Management', 'Dashboard C-Suite', 'Arsitektur Organisasi', 'Panduan Kepemimpinan'],
    },
    {
      id: 'work-3',
      role: 'Human Capital Management Officer',
      company: 'PT. Indekstat Konsultan Indonesia',
      period: 'Sep 2024 – Dec 2024',
      location: 'Jakarta, Indonesia',
      type: 'Praktik Profesional (MSIB Nasional)',
      scope: '35 Konsultan Riset & Teknis',
      desc: 'Memelopori analisa kuantitatif kebutuhan tenaga kerja (WNA) serta standarisasi rubrik kompetensi 5 tingkat bagi konsultan riset dan tim teknis.',
      responsibilities: [
        'Melakukan Workforce Needs Analysis (WNA) kuantitatif berdasarkan studi waktu beban kerja empiris.',
        'Merumuskan rubrik kompetensi 5 tingkat serta pembaruan uraian jabatan dan rentang kompensasi.',
        'Mengoptimalkan pelacakan data kandidat rekrutmen serta scorecard evaluasi.'
      ],
      achievements: [
        'Meningkatkan kejelasan peran fungsional konsultan hingga +85% terverifikasi pascaprogram.',
        'Menstandarkan kurikulum onboarding yang dapat direplikasi bagi spesialis riset teknis.'
      ],
      skills: ['Workforce Needs Analysis', 'Matriks Kompetensi', 'Job Grading', 'Diagnostik Kinerja'],
    },
    {
      id: 'work-4',
      role: 'Operations Lead & Event Coordinator',
      company: 'Sakala Wedding & Lamaran.yok',
      period: 'Sep 2025 – Present',
      location: 'Jabodetabek',
      type: 'Project Lead / Operasional',
      scope: '50+ Produksi Acara Mewah · Hingga 2.000+ Tamu',
      desc: 'Mengorkestrasi logistik operasional berstandar tinggi dan pengendalian alur massa (crowd control) pada puluhan perhelatan berskala besar.',
      responsibilities: [
        'Mengelola logistik massa langsung di lokasi, protokol tamu VIP, dan tata ruang untuk hingga 2.000 tamu.',
        'Memimpin negosiasi kontrak multi-vendor, sinkronisasi run-sheet teknis, dan audit kepatuhan vendor.',
        'Menjadi penghubung utama klien serta memimpin mitigasi krisis cepat di bawah tekanan.'
      ],
      achievements: [
        'Menuntaskan 50+ produksi acara mewah dengan tingkat keberhasilan operasional 100% dan nol keterlambatan.',
        'Menyusun arsitektur master run-sheet standar yang diadopsi di seluruh proyek agensi.'
      ],
      skills: ['Operasional Skala Besar', 'Logistik Massa', 'Manajemen Vendor', 'Mitigasi Krisis'],
      image: IMAGES.eventAquafestSolo,
      imageLabel: 'Dokumentasi: Master of Ceremony & Operations Lead Lapangan',
    },
  ] : [
    {
      id: 'work-1',
      role: 'People and Culture Lead',
      company: 'PT. Fan Sukses Bersama',
      period: 'Apr 2026 – Present',
      location: 'Jakarta, Indonesia',
      type: 'Full-time · Corporate',
      scope: '110+ Full-Time Employees Across Divisions',
      desc: 'Serving as People & Culture Lead managing end-to-end HR operations for 110+ employees—ensuring labor compliance (BPJS & TER PPh 21) and building practical in-house HR automation tools.',
      responsibilities: [
        'Directing full-lifecycle talent acquisition, screening rubrics, and automated onboarding.',
        'Administering statutory social security compliance (BPJS Ketenagakerjaan & Kesehatan) with zero infractions.',
        'Structuring division-level OKRs and individual contributor KPI evaluation matrices.',
        'Handling conflict resolution, employee welfare initiatives, and cultural engagement programs.'
      ],
      achievements: [
        'Engineered custom internal automation suites (Matchify, Slipr, Zeno) eliminating 65% of repetitive administrative friction.',
        'Reduced monthly payroll calculation and encrypted payslip distribution from 3 days to under 1 hour (-75%).',
        'Slashed recruitment time-to-hire by 60% (from 43 down to 17.2 days) across operational and technical roles.'
      ],
      skills: ['People Operations', 'HR Automation', 'KPI & OKR Evaluation', 'BPJS Compliance', 'Talent Retention'],
      image: IMAGES.eventMeetingDinner,
      imageLabel: 'Field Evidence: Executive Board & Strategic Operations Review',
    },
    {
      id: 'work-2',
      role: 'Project Analyst',
      company: 'PT. Rakamin Kolektif Madani',
      period: 'Dec 2025 – Mar 2026',
      location: 'Jakarta, Indonesia (Hybrid)',
      type: 'Contract / Project-Based',
      scope: 'Change Management & Strategic Workforce Planning',
      desc: 'Analyzed change management architecture and corporate workforce capacity models using executive Power BI dashboards and cross-functional organizational audits.',
      responsibilities: [
        'Auditing cross-functional organizational structures to identify workflow redundancies and role ambiguity.',
        'Synthesizing workforce planning and headcount projection models for C-suite decision makers.',
        'Authoring and standardizing the Corporate Leadership Handbook across business and technical units.'
      ],
      achievements: [
        'Delivered 100% role clarity and RACI delegation alignment across cross-functional leadership teams.',
        'Built executive Power BI dashboards providing real-time visibility into workforce utilization and capacity.'
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
      desc: 'Pioneered quantitative Workforce Needs Analysis (WNA) and standardized 5-tier competency rubrics for technical research consultants.',
      responsibilities: [
        'Conducting quantitative Workforce Needs Analysis (WNA) based on empirical workspace time-studies.',
        'Formulating 5-tier competency grading rubrics, job descriptions, and compensation bands.',
        'Optimizing recruitment candidate pipeline data tracking and evaluation scorecards.'
      ],
      achievements: [
        'Achieved a verified +85% post-program increase in consultant functional role clarity.',
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
      desc: 'Orchestrated high-precision operational logistics, VIP hospitality flows, multi-vendor coordination, and crowd control across 50+ large-scale productions.',
      responsibilities: [
        'Managing live on-site crowd logistics, VIP security protocols, and spatial movement for up to 2,000 guests.',
        'Leading multi-vendor contract negotiations, technical run-sheet synchronization, and vendor compliance.',
        'Serving as primary executive stakeholder liaison and directing real-time crisis mitigation under pressure.'
      ],
      achievements: [
        'Executed 50+ luxury productions with a 100% operational success rate and zero live delays.',
        'Established repeatable master run-sheet architectures adopted across agency productions.'
      ],
      skills: ['High-Stakes Operations', 'Crowd Logistics', 'Vendor Management', 'Crisis Mitigation'],
      image: IMAGES.eventAquafestSolo,
      imageLabel: 'Field Evidence: Master of Ceremony & On-Site Operations Lead',
    },
  ];

  const organizationalExperiences = lang === 'id' ? [
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
      imageLabel: 'Dokumentasi: Executive Committee & Kepanitiaan Formal',
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
      desc: 'Memimpin departemen SDM mahasiswa dalam merancang program rekrutmen, retensi, penilaian kinerja, dan iklim internal organisasi.',
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
        'Menyelesaikan pelatihan intensif kepemimpinan adaptif dan manajemen konflik di Universitas Indonesia.'
      ],
    },
    {
      id: 'org-5',
      role: 'Ketua OSIS (The Best Student Council President)',
      organization: 'Organisasi Siswa Intra Sekolah (OSIS)',
      period: '2020 – 2021',
      level: 'Sekolah / Daerah',
      desc: 'Memimpin dewan perwakilan siswa dan kabinet OSIS dalam menggerakkan aspirasi pelajar, transformasi program digital di masa pandemi, dan kolaborasi eksternal.',
      highlights: [
        'Dianugerahi predikat The Best Student Council President 2021.',
        'Mentransformasi program kerja OSIS ke platform digital dan meningkatkan partisipasi kegiatan hingga +140%.'
      ],
    },
  ] : [
    {
      id: 'org-1',
      role: 'Head of Event — IPB OSIS Fest 2024',
      organization: 'Directorate of Promotion & Admissions, IPB University',
      period: '2024',
      level: 'National Scale (27 Provinces)',
      desc: 'Directed the organizing committee of a national youth leadership summit welcoming student council presidents from 27 Indonesian provinces.',
      highlights: [
        'Led and coordinated 70+ cross-division committee members covering event choreography, VIP protocol, and live risk mitigation.',
        'Managed budget allocation, strategic sponsorships, and alignment with IPB University rectorate leadership.',
        'Guided the ESG Digital PR campaign to win 1st Place National at Public Relations Excellence Awards (PREA) 2024.'
      ],
      image: IMAGES.eventSbIpbCommittee,
      imageLabel: 'Field Evidence: Executive Committee & Institutional Conference',
    },
    {
      id: 'org-2',
      role: 'Duta IPB University (University Ambassador)',
      organization: 'Institut Pertanian Bogor (IPB University)',
      period: '2022 – 2024',
      level: 'Official Rectorate Representation',
      desc: 'Selected as official university ambassador leading public communications, institutional diplomacy, and VIP hospitality across national forums.',
      highlights: [
        'Represented IPB University across national education roadshows, higher-education expos, and partnership audiences.',
        'Served as keynote Master of Ceremony (MC) and lead moderator across dozens of university symposia.'
      ],
      image: IMAGES.eventDutaIpbStage,
      imageLabel: 'Field Evidence: Duta IPB University Main Stage Keynote',
    },
    {
      id: 'org-3',
      role: 'Head of Human Resources / HR of Student',
      organization: 'BEM Faculty of Animal Science, IPB University',
      period: '2023 – 2024',
      level: 'Faculty Governance',
      desc: 'Led the student Human Resources department designing cultural-fit recruitment, officer retention, performance reviews, and pulse surveys.',
      highlights: [
        'Designed cultural-fit selection rubrics and structured onboarding for incoming board members.',
        'Deployed regular organizational climate pulse surveys sustaining 92% officer retention.'
      ],
      image: IMAGES.eventFapetIpbStage,
      imageLabel: 'Field Evidence: Faculty of Animal Science Student Delegation',
    },
    {
      id: 'org-4',
      role: 'National Delegate — Indonesia Student Leadership Camp (ISLC) IX',
      organization: 'Universitas Indonesia (UI)',
      period: '2021',
      level: 'National (Top 100 Student Presidents)',
      desc: 'Selected from thousands of student council presidents nationwide for executive leadership incubation, public policy debates, and youth advocacy.',
      highlights: [
        'Co-authored national youth advocacy proposals alongside Indonesia’s top 100 student council presidents.',
        'Completed intensive adaptive leadership and conflict mediation training at Universitas Indonesia.'
      ],
    },
    {
      id: 'org-5',
      role: 'Student Council President (The Best Student Council President)',
      organization: 'Student Council Governance (OSIS)',
      period: '2020 – 2021',
      level: 'Institutional Governance',
      desc: 'Led student governance through pandemic-era digital program transformation, stakeholder alignment, and external council partnerships.',
      highlights: [
        'Awarded The Best Student Council President 2021 for student governance transformation.',
        'Digitalized council workflows, boosting extracurricular participation by 140%.'
      ],
    },
  ];

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
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-28 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-20">
        
        {/* PAGE HEADER */}
        <section className="border-b border-[#E7E0D6] pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
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
              <span>{t('All Experience', 'Semua Pengalaman')}</span>
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
              <span>{t('Working Experience', 'Pengalaman Kerja')}</span>
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
              <span>{t('Organizational Experience', 'Organisasi')}</span>
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
              <span>{t('Project Experience', 'Pengalaman Proyek')}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${activeSubMenu === 'project' ? 'bg-white/20 text-white' : 'bg-[#E7E0D6] text-[#1E2022]'}`}>
                {projectExperiences.length}
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* SUB-MENU 1: CORPORATE & WORKING EXPERIENCE */}
        {(activeSubMenu === 'all' || activeSubMenu === 'working') && (
          <section className="space-y-8">
            <ScrollReveal variant="editorial" delay={0} className="flex items-center justify-between border-b border-[#E7E0D6] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6E7C69] text-white flex items-center justify-center">
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
                {workingExperiences.length} {t('Roles Documented', 'Peran Terdokumentasi')}
              </span>
            </ScrollReveal>

            <div className="space-y-6">
              {workingExperiences.map((work, idx) => {
                const isExpanded = expandedWorkId === work.id;
                return (
                  <ScrollReveal key={work.id} variant="card" delay={idx * 0.08}>
                    <div className="p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl shadow-xs hover:border-[#6E7C69] transition-all">
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
                                    {t('Authentic Photographic Evidence', 'Dokumentasi Visual Terverifikasi')}
                                  </span>
                                  <strong className="block font-sans text-base text-[#1E2022]">
                                    {work.imageLabel}
                                  </strong>
                                  <p className="text-xs text-[#605E59] leading-relaxed">
                                    {t(
                                      'Field evidence documenting direct leadership involvement in strategic reviews and live operational coordination.',
                                      'Bukti visual keterlibatan langsung di lapangan pada evaluasi kepemimpinan dan manajemen operasional strategis.'
                                    )}
                                  </p>
                                  <button
                                    onClick={() => onNavigate('archive')}
                                    className="text-xs font-mono text-[#6E7C69] hover:underline cursor-pointer font-bold inline-flex items-center gap-1"
                                  >
                                    <span>{t('View in Visual Archive ("Event" Album)', 'Lihat di Visual Archive (Sub-Album "Event")')}</span>
                                    <ArrowUpRight className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
                              <div className="space-y-3">
                                <span className="font-mono text-[11px] uppercase tracking-wider text-[#605E59] block font-bold">
                                  {t('Key Responsibilities:', 'Tanggung Jawab Utama:')}
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

                              <div className="space-y-3">
                                <span className="font-mono text-[11px] uppercase tracking-wider text-[#AF8C72] block font-bold">
                                  {t('Verified Achievements:', 'Pencapaian Terukur:')}
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

        {/* SUB-MENU 2: ORGANIZATIONAL & LEADERSHIP EXPERIENCE */}
        {(activeSubMenu === 'all' || activeSubMenu === 'organizational') && (
          <section className="space-y-8 pt-4">
            <ScrollReveal variant="editorial" delay={0} className="flex items-center justify-between border-b border-[#E7E0D6] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#AF8C72] text-white flex items-center justify-center">
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
                {organizationalExperiences.length} {t('Roles Documented', 'Peran Terdokumentasi')}
              </span>
            </ScrollReveal>

            <div className="space-y-6">
              {organizationalExperiences.map((org, idx) => {
                const isExpanded = expandedOrgId === org.id;
                return (
                  <ScrollReveal key={org.id} variant="card" delay={idx * 0.07}>
                    <div className="p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl shadow-xs hover:border-[#AF8C72] transition-all">
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
                                    {t('Field Documentation', 'Dokumentasi Lapangan')}
                                  </span>
                                  <strong className="block font-sans text-base text-[#1E2022]">
                                    {org.imageLabel}
                                  </strong>
                                  <button
                                    onClick={() => onNavigate('archive')}
                                    className="text-xs font-mono text-[#AF8C72] hover:underline cursor-pointer font-bold inline-flex items-center gap-1"
                                  >
                                    <span>{t('Open in Visual Archive', 'Buka di Visual Archive')}</span>
                                    <ArrowUpRight className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            )}

                            <div className="space-y-2">
                              <span className="font-mono text-[11px] uppercase tracking-wider text-[#AF8C72] block font-bold">
                                {t('Key Deliverables & Impact:', 'Hasil & Dampak Utama:')}
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

        {/* SUB-MENU 3: PROJECT EXPERIENCE */}
        {(activeSubMenu === 'all' || activeSubMenu === 'project') && (
          <section className="space-y-8 pt-4">
            <ScrollReveal variant="editorial" delay={0} className="flex items-center justify-between border-b border-[#E7E0D6] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1E2022] text-white flex items-center justify-center">
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
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[#E7E0D6] pt-16">
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
        <ScrollReveal as="section" variant="media" delay={0.08} className="p-8 sm:p-10 bg-[#6E7C69] text-white rounded-[2rem] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0 border border-white/30">
              <Camera className="w-7 h-7 text-[#F3EFEA]" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white">
                {t('Explore Visual Archive (23 Curated Photos)', 'Jelajahi Visual Archive (23 Foto Dokumentasi)')}
              </h3>
              <p className="text-xs sm:text-sm text-[#F3EFEA]/90 font-light mt-1 max-w-xl">
                {t(
                  'Featuring the "myself" personal milestone album (10 photos) and "Event" live governance & stage album (13 photos).',
                  'Album "myself" (10 foto personal/milestone) dan Sub-Album "Event" (13 foto panggung akbar, MC, dan protokol kegiatan).'
                )}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('archive')}
            className="px-6 py-3.5 bg-[#1E2022] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer shrink-0 shadow-md flex items-center gap-2"
          >
            <span>{t('Open Visual Archive', 'Buka Visual Archive')}</span>
            <ArrowUpRight className="w-4 h-4 text-[#AF8C72]" />
          </button>
        </ScrollReveal>
      </div>
    </div>
  );
};
