import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Users, 
  Cpu, 
  Calendar, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2, 
  Trophy, 
  Sparkles,
  ExternalLink,
  Camera,
  X,
  ChevronRight
} from 'lucide-react';
import { IMAGES } from '../data/portfolioData';
import { ReticleFrame } from './ReticleFrame';

type ExperienceTab = 'working' | 'organizational' | 'project';

interface WorkItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  scope: string;
  description: string;
  achievements: string[];
  skills: string[];
  image?: string;
  imageLabel?: string;
}

interface OrgItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  level: string;
  location: string;
  description: string;
  achievements: string[];
  badges: string[];
  image?: string;
  imageLabel?: string;
}

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  role: string;
  metric: string;
  description: string;
  highlights: string[];
  stack: string[];
  demoUrl?: string;
}

const WORKING_EXPERIENCES: WorkItem[] = [
  {
    id: 'work-1',
    role: 'People and Culture Lead',
    company: 'PT. Fan Sukses Bersama',
    period: 'Apr 2026 – Sekarang',
    type: 'Full-time · Corporate',
    location: 'Jakarta, Indonesia',
    scope: '110+ Tenaga Kerja Lintas Divisi',
    description: 'Berperan sebagai People & Culture Lead yang mengelola operasional HR secara end-to-end untuk 110+ karyawan, menjaga kepatuhan regulasi ketenagakerjaan, kesejahteraan karyawan, dan integrasi alat bantu kerja otomatis.',
    achievements: [
      'Memimpin operasional HR penuh: end-to-end recruitment, attendance, evaluasi kinerja, dan kepatuhan BPJS Ketenagakerjaan & Kesehatan.',
      'Membangun suite otomasi HR in-house: otomasi penjadwalan interview, platform psikotes digital (MBTI & DISC), dan slip gaji digital (Slipr).',
      'Merancang serta mengevaluasi matriks KPI divisi dan individual selaras dengan sasaran strategis bisnis perusahaan.',
    ],
    skills: ['People Operations', 'HR Automation', 'KPI & OKR Evaluation', 'BPJS Compliance', 'Talent Retention'],
  },
  {
    id: 'work-2',
    role: 'Project Analyst',
    company: 'PT. Rakamin Kolektif Madani',
    period: 'Des 2025 – Mar 2026',
    type: 'Contract / Project-Based',
    location: 'Jakarta, Indonesia',
    scope: 'Change Management & Workforce Planning',
    description: 'Menganalisis arsitektur manajemen perubahan dan perencanaan kebutuhan tenaga kerja korporasi dengan dashboard analitik eksekutif.',
    achievements: [
      'Menyusun model Workforce Planning terintegrasi dengan visualisasi C-suite dashboards untuk pemetaan kapasitas SDM.',
      'Menyusun Corporate Leadership Handbook melalui audit struktur organisasi lintas fungsi guna menihilkan tumpang tindih peran (role ambiguity).',
    ],
    skills: ['Workforce Planning', 'Change Management', 'C-Suite Dashboards', 'Org Architecture', 'Leadership Frameworks'],
  },
  {
    id: 'work-3',
    role: 'Human Capital Management Officer',
    company: 'PT. Indekstat Konsultan Indonesia',
    period: 'Sep 2024 – Des 2024',
    type: 'Professional Practice',
    location: 'Jakarta, Indonesia',
    scope: '35 Konsultan & Tim Teknis',
    description: 'Memelopori analisa kuantitatif kebutuhan tenaga kerja serta standarisasi kompetensi jabatan bagi konsultan dan tim teknis riset.',
    achievements: [
      'Melakukan quantitative Workforce Needs Analysis berbasis workspace analytics untuk 35 personel konsultan.',
      'Merancang matriks kompetensi jabatan dan deskripsi pekerjaan terukur yang meningkatkan kejelasan peran (role clarity) hingga 85%.',
    ],
    skills: ['Workforce Needs Analysis', 'Competency Framework', 'Job Grading', 'Performance Diagnostics'],
  },
  {
    id: 'work-4',
    role: 'Operations Lead & Event Coordinator',
    company: 'Sakala Wedding & Lamaran.yok',
    period: 'Sep 2025 – Sekarang',
    type: 'Project Lead / Operations',
    location: 'Jabodetabek',
    scope: '50+ Luxury Events & 2.000+ Tamu',
    description: 'Mengorkestrasi manajemen logistik berstandar tinggi dan alur massa (crowd control) pada puluhan perhelatan skala besar.',
    achievements: [
      'Mengelola eksekusi logistik langsung untuk 50+ event mewah dengan audiens hingga 2.000+ tamu dengan tingkat kepuasan operasional 100%.',
      'Memimpin negosiasi dan sinkronisasi puluhan vendor profesional (multimedia, dekorasi, katering) dalam timeline dinamis tanpa deviasi.',
    ],
    skills: ['High-Stakes Operations', 'Crowd Logistics', 'Vendor Management', 'Crisis Mitigation'],
  },
];

const ORGANIZATIONAL_EXPERIENCES: OrgItem[] = [
  {
    id: 'org-1',
    role: 'Head of Event — IPB OSIS Fest 2024',
    organization: 'Direktorat Promosi & Penerimaan Mahasiswa Baru IPB University',
    period: '2024',
    level: 'Tingkat Nasional (27 Provinsi)',
    location: 'Bogor & Nasional',
    description: 'Memimpin kepanitiaan akbar dalam penyelenggaraan konferensi kepemimpinan pelajar nasional yang menghadirkan delegasi OSIS unggulan dari 27 provinsi di Indonesia.',
    achievements: [
      'Memimpin dan mengkoordinasikan lebih dari 70 panitia lintas divisi dalam merancang alur acara, protokol tamu kehormatan, dan mitigasi krisis.',
      'Mengelola alokasi anggaran, kemitraan strategis, dan koordinasi dengan pimpinan rektorat IPB University.',
    ],
    badges: ['27 Provinsi', 'National Summit', '70+ Panitia', 'Leadership Excellence'],
    image: IMAGES.ipbOsisFestHead2024,
    imageLabel: 'Dokumentasi: Team Reveal Divisi Acara — Head of Event IPB OSIS Fest 2024',
  },
  {
    id: 'org-2',
    role: 'Duta IPB University (University Ambassador)',
    organization: 'Institut Pertanian Bogor (IPB University)',
    period: '2022 – 2024',
    level: 'Representasi Resmi Kampus',
    location: 'Nasional',
    description: 'Terpilih sebagai duta resmi universitas untuk memimpin komunikasi publik, representasi institusi pada forum nasional, dan penerimaan delegasi kehormatan.',
    achievements: [
      'Mewakili IPB University dalam roadshow edukasi nasional, expo perguruan tinggi, dan audiensi diplomasi kemitraan.',
      'Bertindak sebagai Master of Ceremony (MC) dan moderator utama pada puluhan simposium rektorat dan seminar nasional.',
    ],
    badges: ['University Ambassador', 'Public Relations', 'Diplomatic Protocol', 'Keynote MC'],
    image: IMAGES.dutaIpbPortrait,
    imageLabel: 'Dokumentasi: Profil Resmi Duta IPB University — Fakultas Peternakan (2022–2024)',
  },
  {
    id: 'org-3',
    role: 'Head of Human Resources / HR of Student',
    organization: 'BEM Fakultas Peternakan IPB University',
    period: '2023 – 2024',
    level: 'Fakultas / Kampus',
    location: 'IPB Dramaga, Bogor',
    description: 'Memimpin departemen SDM mahasiswa dalam merancang program rekrutmen, retensi, penilaian kinerja, dan kehangatan internal organisasi.',
    achievements: [
      'Merancang sistem rekrutmen dan orientasi kerja staf organisasi berbasis asesmen kesesuaian nilai (cultural fit).',
      'Mengembangkan survei iklim organisasi (pulse survey) untuk mengidentifikasi kepuasan anggota dan efektivitas kepengurusan.',
    ],
    badges: ['Talent Development', 'Staff Onboarding', 'Pulse Survey', 'Culture Building'],
    image: IMAGES.eventFapetIpbStage,
    imageLabel: 'Dokumentasi: Panitia & Mahasiswa Fakultas Peternakan IPB',
  },
  {
    id: 'org-4',
    role: 'Divisi Pengembangan Sumber Daya Manusia — Forum OSIS Nusantara',
    organization: 'Forum OSIS Nusantara (Forum OSIS Nasional · Komisi X DPR RI)',
    period: '2021 – 2022',
    level: 'Nasional (Pengurus Pusat)',
    location: 'Jakarta, Indonesia',
    description: 'Mengemban amanah sebagai pengurus pusat Forum OSIS Nusantara (Forum OSIS Nasional) masa bakti 2021–2022 pada Divisi Pengembangan Sumber Daya Manusia yang disahkan bersama Ketua Komisi X DPR RI.',
    achievements: [
      'Mengelola program pengembangan sumber daya manusia, kaderisasi, dan penguatan kapasitas pengurus pelajar lintas provinsi se-Indonesia.',
      'Memperoleh sertifikat resmi No. 049/FON/SKt/XI/2021 yang ditandatangani Ketua Komisi X DPR RI pada 1 November 2021.',
    ],
    badges: ['Pengurus Nasional', 'Divisi Pengembangan SDM', 'Komisi X DPR RI'],
    image: IMAGES.fonCertificate2021,
    imageLabel: 'Sertifikat Resmi (049/FON/SKt/XI/2021) — Divisi Pengembangan SDM Forum OSIS Nusantara 2021/2022',
  },
  {
    id: 'org-fojb',
    role: 'Koordinator Daerah Wilayah 1 — Forum OSIS Jawa Barat',
    organization: 'Forum OSIS Jawa Barat (FOJB Wilayah 1)',
    period: '2020 – 2021',
    level: 'Provinsi (Wilayah 1 Jawa Barat)',
    location: 'Jawa Barat',
    description: 'Mengemban amanah sebagai Koordinator Daerah Forum OSIS Jawa Barat Wilayah 1 periode 2020–2021 dalam mengoordinasikan komunikasi strategis dan kaderisasi pelajar lintas kota/kabupaten.',
    achievements: [
      'Mengoordinasikan sinergi forum OSIS daerah di Wilayah 1 Jawa Barat.',
      'Menghubungkan inisiatif pelajar daerah dengan agenda kepemudaan Forum OSIS Jawa Barat.',
    ],
    badges: ['Korda Wilayah 1', 'Forum OSIS Jawa Barat', 'Provincial Network'],
    image: IMAGES.fojbKorda2020,
    imageLabel: 'Dokumentasi: Koordinator Daerah Forum OSIS Jawa Barat Wilayah 1 (2020–2021)',
  },
  {
    id: 'org-fkokb',
    role: 'Ketua Umum — Forum Komunikasi OSIS Kabupaten Bogor',
    organization: 'Forum Komunikasi OSIS Kabupaten Bogor (FKOKB)',
    period: '2020 – 2021',
    level: 'Kabupaten',
    location: 'Kabupaten Bogor, Jawa Barat',
    description: 'Terpilih sebagai Ketua Umum Forum Komunikasi OSIS Kabupaten Bogor periode 2020–2021 untuk menghimpun dan mengorkestrasi gerakan OSIS SMA/sederajat se-Kabupaten Bogor.',
    achievements: [
      'Memimpin konsolidasi koalisi pelajar lintas sekolah se-Kabupaten Bogor sejak Musyawarah Besar 2020.',
      'Mengawal program kaderisasi, dialog kepemudaan daerah, dan kolaborasi sosial pelajar.',
    ],
    badges: ['Ketua Umum FKOKB', 'Kabupaten Bogor', 'Coalition Governance'],
    image: IMAGES.fkokbChairman2020,
    imageLabel: 'Dokumentasi: Ketua Umum Forum Komunikasi OSIS Kabupaten Bogor (2020–2021)',
  },
  {
    id: 'org-5',
    role: 'Ketua OSIS SMAN 1 Dramaga (Masa Jabatan 2019/2020)',
    organization: 'OSIS SMAN 1 Dramaga (OSKA · Nata Nirwashita Sahwahita)',
    period: '2019 – 2020',
    level: 'Sekolah / Daerah',
    location: 'Dramaga, Kab. Bogor',
    description: 'Memimpin dewan perwakilan siswa dan kabinet OSKA Nata Nirwashita Sahwahita di SMAN 1 Dramaga dalam menggerakkan aspirasi pelajar, reformasi kegiatan digital, dan kolaborasi eksternal.',
    achievements: [
      'Dianugerahi predikat The Best Student Council President atas transformasi tata kelola siswa.',
      'Mentransformasi program kerja OSIS ke platform digital dan meningkatkan partisipasi ekstrakurikuler sebesar 140%.',
    ],
    badges: ['SMAN 1 Dramaga', 'Best President Award', 'Digital Transformation'],
    image: IMAGES.osisChairman2019,
    imageLabel: 'Dokumentasi: Ketua & Wakil Ketua OSIS SMAN 1 Dramaga (Masa Jabatan 2019/2020)',
  },
];

const PROJECT_EXPERIENCES: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Matchify — Recruitment Intelligence & Timetable Automation',
    category: 'Sistem Rekrutmen & Interview',
    period: '2026',
    role: 'Product Architect & HR Lead',
    metric: '5.200 Pelamar · -60% Waktu Rekrutmen',
    description: 'Sistem rekrutmen otomatis berbasis cloud yang mengintegrasikan pembuatan jadwal interview instan, live interview timer (45 menit), pencocokan kandidat cerdas, dan analitik corong pelamar.',
    highlights: [
      'Memproses 5.200 pelamar, menjadwalkan 3.861 interview, dan merekrut 603 personel dengan data real-time.',
      'Memangkas siklus perekrutan (time-to-hire) dari 43 hari menjadi hanya 17,2 hari (-60%).',
      'Dilengkapi automated onboarding checklist dengan pelacakan progres real-time.',
    ],
    stack: ['Google Apps Script', 'React', 'TypeScript', 'Tailwind CSS', 'Workspace APIs'],
    demoUrl: 'https://script.google.com/macros/s/AKfycbygYq3clewdZdfxfOnQox89ep8N9q4jFUIjnJpWUQs2FF4gyKR23msY_3XBzozlnAU/exec',
  },
  {
    id: 'proj-2',
    title: 'Slipr — Automated Corporate Payroll & Digital Payslips',
    category: 'Otomasi Penggajian & Finansial HR',
    period: '2026',
    role: 'System Engineer & HR Ops',
    metric: '100% Akurasi · Pengiriman PDF Instan',
    description: 'Suite penggajian otomatis yang menghitung gaji prorata, potongan BPJS Ketenagakerjaan (JHT, JKK, JKM, JP) & BPJS Kesehatan, serta penerbitan slip gaji PDF terenkripsi.',
    highlights: [
      'Menghilangkan 95% waktu input manual administrasi gaji setiap akhir bulan.',
      'Pengiriman otomatis dokumen slip gaji terenkripsi langsung ke email masing-masing karyawan dalam hitungan detik.',
    ],
    stack: ['Google Apps Script', 'Spreadsheet Engines', 'PDF Generator', 'Automated Email'],
    demoUrl: 'https://script.google.com/macros/s/AKfycbyoq-0LSWK4t6xvg5-OgVx4Eki8GQXEO4x_NA6gEjgpImQEGA0vvGFt4hz0MGOWnvfO3Q/exec',
  },
  {
    id: 'proj-3',
    title: 'Zeno — Digital Psychometric Assessment Engine (MBTI & DISC)',
    category: 'Platform Asesmen Psikometri',
    period: '2026',
    role: 'Psychometric Architect & Evaluator',
    metric: 'Skoring Real-Time · Role Fit Scorecard',
    description: 'Engine evaluasi kepribadian dan gaya kerja berbasis tes psikometri standar industri dengan kalkulasi skor otomatis dan laporan profil kepemimpinan.',
    highlights: [
      'Menyajikan visualisasi profil kepribadian MBTI & DISC tanpa memerlukan skoring manual.',
      'Menghasilkan rekomendasi penempatan tim dan gaya komunikasi optimal untuk manajer divisi.',
    ],
    stack: ['Apps Script', 'Psychometric Scoring Matrix', 'Dynamic Charting', 'Google Workspace'],
    demoUrl: 'https://script.google.com/macros/s/AKfycbzhFD87PJRrOvkU8GMA01CgfTRieF-Qisi9tvJTADvqKXvl4AO4WaHA94z4z7NVRCkd/exec',
  },
  {
    id: 'proj-4',
    title: 'Kampanye Digital PR & ESG — Juara 1 Nasional PREA 2024',
    category: 'Strategi Komunikasi & Public Relations',
    period: '2024',
    role: 'Project Lead & Campaign Strategist',
    metric: 'Juara 1 Nasional · ESG Governance',
    description: 'Perancangan kampanye komunikasi korporat dan hubungan masyarakat digital bertema Environmental, Social, and Governance (ESG) yang kompetitif.',
    highlights: [
      'Meraih 1st Place Digital PR (ESG Theme) di ajang Public Relations Excellence Awards (PREA) 2024.',
      'Menyusun strategi narasi data-driven yang diakui oleh panelis pakar komunikasi dan PR korporat nasional.',
    ],
    stack: ['Digital Campaign', 'Stakeholder Analysis', 'ESG Frameworks', 'PR Analytics'],
  },
  {
    id: 'proj-5',
    title: 'Workforce Needs Analysis & Role Clarity Architecture',
    category: 'Diagnostik Organisasi & Struktur SDM',
    period: '2024',
    role: 'Human Capital Analyst',
    metric: '85% Lonjakan Kejelasan Peran',
    description: 'Penyusunan analisa beban kerja kuantitatif, pemetaan kompetensi, dan matriks pertanggungjawaban peran bagi konsultan PT. Indekstat Konsultan Indonesia.',
    highlights: [
      'Menganalisis distribusi jam kerja dan peran 35 staf teknis untuk menihilkan kebingungan alur koordinasi.',
      'Merancang standarisasi job description baru yang menghasilkan 85% lonjakan kejelasan tugas dan evaluasi objektif.',
    ],
    stack: ['Workforce Analytics', 'RACI Matrix', 'Competency Mapping', 'Survey Diagnostics'],
  },
];

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ExperienceTab>('working');
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null);

  const scrollToCreativeStyle = () => {
    const el = document.getElementById('creativestyle');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="w-full py-28 px-6 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-block px-3.5 py-1 mb-4 text-[11px] font-semibold tracking-wider uppercase text-neutral-600 bg-neutral-100 rounded-full border border-neutral-200/60 shadow-xs">
            Track Record & Milestones
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl leading-relaxed">
            Perjalanan kepemimpinan, kontribusi profesional, dan inovasi sistem human capital yang dibangun di berbagai organisasi, institusi, dan proyek strategis.
          </p>
        </motion.div>

        {/* 3 Sub-Menu Tabs Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap"
        >
          {/* Sub-menu 1: Working Experience */}
          <button
            onClick={() => setActiveTab('working')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'working'
                ? 'bg-neutral-950 text-white shadow-md shadow-neutral-950/20 scale-105'
                : 'bg-white/80 hover:bg-white text-neutral-600 hover:text-black border border-neutral-200/80 shadow-xs'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Working Experience</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
              activeTab === 'working' ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'
            }`}>
              {WORKING_EXPERIENCES.length}
            </span>
          </button>

          {/* Sub-menu 2: Organizational Experience */}
          <button
            onClick={() => setActiveTab('organizational')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'organizational'
                ? 'bg-neutral-950 text-white shadow-md shadow-neutral-950/20 scale-105'
                : 'bg-white/80 hover:bg-white text-neutral-600 hover:text-black border border-neutral-200/80 shadow-xs'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Organizational Experience</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
              activeTab === 'organizational' ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'
            }`}>
              {ORGANIZATIONAL_EXPERIENCES.length}
            </span>
          </button>

          {/* Sub-menu 3: Project Experience */}
          <button
            onClick={() => setActiveTab('project')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeTab === 'project'
                ? 'bg-neutral-950 text-white shadow-md shadow-neutral-950/20 scale-105'
                : 'bg-white/80 hover:bg-white text-neutral-600 hover:text-black border border-neutral-200/80 shadow-xs'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Project Experience</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
              activeTab === 'project' ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'
            }`}>
              {PROJECT_EXPERIENCES.length}
            </span>
          </button>
        </motion.div>

        {/* Content Tabs Area */}
        <AnimatePresence mode="wait">
          {/* TAB 1: WORKING EXPERIENCE */}
          {activeTab === 'working' && (
            <motion.div
              key="working-tab"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {WORKING_EXPERIENCES.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="p-7 rounded-3xl bg-white/90 backdrop-blur-sm border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
                  >
                    <ReticleFrame size={14} color="border-neutral-300 group-hover:border-neutral-900 transition-colors" />

                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 font-semibold border border-neutral-200/60">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="font-display font-bold text-xl text-neutral-900 group-hover:text-black transition-colors mb-1">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-700 mb-4">
                        <span>{item.company}</span>
                        <span className="text-neutral-300">·</span>
                        <span className="flex items-center gap-1 text-neutral-500 font-normal">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                        <span className="text-neutral-300">·</span>
                        <span className="text-sky-700 bg-sky-50 px-2 py-0.5 rounded font-mono text-[10px]">
                          {item.scope}
                        </span>
                      </div>

                      {/* Optional Attached Live Photo Documentation */}
                      {item.image && (
                        <div 
                          onClick={() => setPreviewImage({ src: item.image!, title: item.role, subtitle: item.imageLabel })}
                          className="mb-5 rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-950 aspect-[16/9] relative cursor-pointer group/photo shadow-xs hover:shadow-md transition-all"
                        >
                          <ReticleFrame size={10} color="border-white/60 group-hover/photo:border-white" />
                          <img
                            src={item.image}
                            alt={item.imageLabel || item.role}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                            <div className="flex items-center justify-between w-full">
                              <span className="text-[11px] text-white/95 font-medium line-clamp-1 flex items-center gap-1.5">
                                <Camera className="w-3 h-3 text-amber-400" />
                                {item.imageLabel}
                              </span>
                              <span className="text-[10px] font-mono text-amber-400 bg-black/60 px-2 py-0.5 rounded border border-white/10 shrink-0">
                                Klik untuk Perbesar
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Key Achievements Bullet Points */}
                      <div className="space-y-2 mb-6">
                        <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block font-semibold">
                          Key Impact & Deliverables:
                        </span>
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skill Tags Footer */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-neutral-100">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-medium bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded-full border border-neutral-200/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 2: ORGANIZATIONAL EXPERIENCE */}
          {activeTab === 'organizational' && (
            <motion.div
              key="organizational-tab"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ORGANIZATIONAL_EXPERIENCES.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="p-6 rounded-3xl bg-white/90 backdrop-blur-sm border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
                  >
                    <ReticleFrame size={12} color="border-neutral-300 group-hover:border-neutral-900 transition-colors" />

                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 font-bold border border-amber-200/60 flex items-center gap-1">
                          <Trophy className="w-3 h-3 text-amber-600" />
                          {item.level}
                        </span>
                        <span className="text-xs text-neutral-500 font-mono">
                          {item.period}
                        </span>
                      </div>

                      {/* Role & Organization */}
                      <h3 className="font-display font-bold text-lg text-neutral-900 group-hover:text-black transition-colors mb-1">
                        {item.role}
                      </h3>
                      <div className="text-xs font-semibold text-neutral-700 mb-3">
                        {item.organization}
                      </div>

                      {/* Optional Attached Photo Documentation */}
                      {item.image && (
                        <div 
                          onClick={() => setPreviewImage({ src: item.image!, title: item.role, subtitle: item.imageLabel })}
                          className="mb-4 rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-950 aspect-[16/10] relative cursor-pointer group/photo shadow-xs hover:shadow-md transition-all"
                        >
                          <ReticleFrame size={10} color="border-white/60 group-hover/photo:border-white" />
                          <img
                            src={item.image}
                            alt={item.imageLabel || item.role}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-2.5">
                            <div className="flex items-center justify-between w-full">
                              <span className="text-[10px] text-white/95 font-medium line-clamp-1 flex items-center gap-1">
                                <Camera className="w-3 h-3 text-amber-400" />
                                {item.imageLabel}
                              </span>
                              <span className="text-[9px] font-mono text-amber-400 bg-black/60 px-1.5 py-0.5 rounded border border-white/10 shrink-0">
                                Perbesar
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Points */}
                      <div className="space-y-2 mb-5">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recognition Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-neutral-100">
                      {item.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="text-[10px] font-medium bg-neutral-100 text-neutral-700 px-2.5 py-0.5 rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: PROJECT EXPERIENCE */}
          {activeTab === 'project' && (
            <motion.div
              key="project-tab"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECT_EXPERIENCES.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="p-7 rounded-3xl bg-white/90 backdrop-blur-sm border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
                  >
                    <ReticleFrame size={14} color="border-neutral-300 group-hover:border-sky-500 transition-colors" />

                    <div>
                      {/* Top Tags */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-900 text-white font-semibold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          {item.category}
                        </span>
                        <span className="text-xs text-neutral-400 font-mono">
                          {item.period}
                        </span>
                      </div>

                      {/* Title & Metric */}
                      <h3 className="font-display font-bold text-xl text-neutral-900 group-hover:text-black transition-colors mb-2">
                        {item.title}
                      </h3>

                      <div className="inline-block px-3 py-1 rounded-xl bg-sky-50 border border-sky-100 text-sky-900 text-xs font-bold font-mono mb-4">
                        {item.metric}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Stack Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-4 pb-4 border-t border-neutral-100">
                        {item.stack.map((st, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded"
                          >
                            {st}
                          </span>
                        ))}
                      </div>

                      {/* Demo Link if Available */}
                      {item.demoUrl && (
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
                        >
                          <span>Buka Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured Event Highlights Showcase Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                  LIVE IN ACTION · EVENT DOKUMENTASI
                </span>
                <span className="text-neutral-600">·</span>
                <span className="text-[10px] font-mono text-neutral-400">13 FOTO TERSEDIA</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Dokumentasi Kepemimpinan & Panggung Akbar
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                Sorotan dokumentasi panggung MC, keprotokolan kenegaraan, serta perhelatan akbar di IPB University dan gedung pertemuan eksekutif.
              </p>
            </div>

            <button
              onClick={scrollToCreativeStyle}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 shrink-0"
            >
              <span>Buka Sub-Album "Event" (13 Foto)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Featured Live Event Photo Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                img: IMAGES.eventAquafestSolo,
                title: 'Aquafest 2024 Solo MC',
                role: 'Keynote Stage Host',
              },
              {
                img: IMAGES.eventDutaIpbStage,
                title: '10 Tahun Duta IPB Stage',
                role: 'Duta IPB University',
              },
              {
                img: IMAGES.eventMosqueProtocol,
                title: 'VIP Mosque Protocol',
                role: 'State & Religious Protocol',
              },
              {
                img: IMAGES.eventBatikStaircase,
                title: 'Designer Batik Showcase',
                role: 'Grand Protocol & Fashion',
              },
            ].map((p, pIdx) => (
              <div
                key={pIdx}
                onClick={() => setPreviewImage({ src: p.img, title: p.title, subtitle: p.role })}
                className="group/thumb relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer hover:border-amber-400/60 transition-all shadow-md"
              >
                <ReticleFrame size={8} color="border-white/50 group-hover/thumb:border-amber-400" />
                <img
                  src={p.img}
                  alt={p.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover/thumb:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-2.5">
                  <span className="text-[11px] font-bold text-white leading-tight">
                    {p.title}
                  </span>
                  <span className="text-[10px] text-amber-300 font-mono">
                    {p.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Modal for Experience Photo Quick Preview */}
        <AnimatePresence>
          {previewImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
              onClick={() => setPreviewImage(null)}
            >
              <div
                className="relative w-full max-w-3xl bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border border-neutral-700 flex flex-col text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                      Dokumentasi Lapangan
                    </span>
                    <h4 className="font-display font-bold text-base sm:text-lg text-white">
                      {previewImage.title}
                    </h4>
                  </div>
                  <button
                    onClick={() => setPreviewImage(null)}
                    className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 sm:p-6 flex flex-col items-center">
                  <div className="relative w-full max-h-[65vh] aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-neutral-800 flex items-center justify-center">
                    <ReticleFrame size={14} color="border-white/80" />
                    <img
                      src={previewImage.src}
                      alt={previewImage.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {previewImage.subtitle && (
                    <div className="w-full pt-4 text-left">
                      <p className="text-xs sm:text-sm text-neutral-300 font-mono">
                        {previewImage.subtitle}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
