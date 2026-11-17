import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Compass,
  Layers,
  LineChart,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';
import { AppRoute } from '../types';
import { useLanguage } from '../context/LanguageContext';

export type WorkCategory = 'all' | 'hr-tech' | 'strategy' | 'operations';

export interface WorkRoleEntry {
  id: string;
  orderLabel: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  scope: string;
  category: Exclude<WorkCategory, 'all'>;
  categoryLabel: string;
  highlightBadge: string;
  summary: string;
  metrics: {
    value: string;
    label: string;
    detail: string;
  }[];
  responsibilities: {
    lead: string;
    detail: string;
  }[];
  achievements: string[];
  tools: string[];
  relatedProjectId?: string;
}

const WORK_ROLES_EN: WorkRoleEntry[] = [
  {
    id: 'work-1',
    orderLabel: '01',
    role: 'People and Culture Lead',
    company: 'PT. Fan Sukses Bersama',
    period: 'Apr 2026 – Present',
    location: 'Jakarta, Indonesia',
    type: 'Full-time · Corporate',
    scope: '110+ Full-Time Employees',
    category: 'hr-tech',
    categoryLabel: 'People Ops & HR Tech',
    highlightBadge: 'Current Active Role',
    summary:
      'Sole People & Culture Lead directing end-to-end Human Capital operations for 110+ full-time personnel while engineering proprietary HR software suites to remove manual bottlenecks.',
    metrics: [
      { value: '-75%', label: 'Payroll Cycle', detail: '3 days down to <1 hr' },
      { value: '-60%', label: 'Time-to-Hire', detail: '43 down to 17.2 days' },
      { value: '100%', label: 'Labor Compliance', detail: 'BPJS & TER PPh 21' },
    ],
    responsibilities: [
      {
        lead: 'Full-Spectrum HR Operations',
        detail: 'Managing recruitment, attendance tracking, employee welfare, industrial relations, and grievance resolution across all divisions.',
      },
      {
        lead: 'Regulatory & Payroll Governance',
        detail: 'Ensuring 100% accurate BPJS Healthcare/Employment and Indonesian TER PPh 21 tax compliance.',
      },
      {
        lead: 'KPI & OKR Performance Alignment',
        detail: 'Translating corporate business goals into structured division OKRs and individual appraisal scorecards.',
      },
    ],
    achievements: [
      'Engineered an in-house HR automation suite (Pervia PMS, Matchify RMS, Slipr Payroll, Zeno Psychometrics), cutting repetitive HR admin burden by 65%.',
      'Reduced monthly payroll computation and encrypted PDF payslip dispatch from 3 working days to under 1 hour.',
      'Accelerated hiring turnaround by 60% while sustaining strong cross-divisional retention and engagement.',
    ],
    tools: ['Pervia PMS', 'Matchify RMS', 'Slipr Payroll', 'Zeno Assessment', 'Google Workspace'],
    relatedProjectId: 'fan-sukses-hr',
  },
  {
    id: 'work-2',
    orderLabel: '02',
    role: 'Project Analyst',
    company: 'PT. Rakamin Kolektif Madani',
    period: 'Dec 2025 – Mar 2026',
    location: 'Jakarta, Indonesia (Hybrid)',
    type: 'Contract · Strategic Advisory',
    scope: 'Change Management & Org Architecture',
    category: 'strategy',
    categoryLabel: 'Strategy & Analytics',
    highlightBadge: 'C-Suite Workforce Strategy',
    summary:
      'Partnered with executive leadership to architect change management models, audit cross-functional structures, and turn complex headcount telemetry into actionable C-suite dashboards.',
    metrics: [
      { value: '100%', label: 'Role Clarity', detail: 'RACI aligned across leads' },
      { value: '+40%', label: 'Reporting Speed', detail: 'Automated Power BI views' },
      { value: 'Adopted', label: 'Leadership Guide', detail: 'Company-wide handbook' },
    ],
    responsibilities: [
      {
        lead: 'Cross-Functional Structural Audits',
        detail: 'Audited workflows across technical and commercial units to isolate duplicate handoffs and role ambiguity.',
      },
      {
        lead: 'C-Suite Workforce Telemetry',
        detail: 'Synthesized utilization, headcount capacity, and engagement metrics into executive Power BI dashboards.',
      },
      {
        lead: 'Corporate Leadership Handbook',
        detail: 'Authored the authoritative governance manual defining delegation rules, escalation paths, and RACI ownership.',
      },
    ],
    achievements: [
      'Established 100% role and accountability clarity across cross-functional leadership teams through standardized RACI governance.',
      'Built internal data repositories and automated reporting narratives that accelerated C-suite transformation decisions by 40%.',
    ],
    tools: ['Power BI', 'Looker Studio', 'RACI Governance', 'Workforce Planning', 'Org Design'],
    relatedProjectId: 'rakamin-change-mgmt',
  },
  {
    id: 'work-4',
    orderLabel: '03',
    role: 'Operations Lead & Event Coordinator',
    company: 'Sakala Wedding & Lamaran.yok',
    period: 'Sep 2025 – Present',
    location: 'Jabodetabek, Indonesia',
    type: 'Freelance · Live Operations',
    scope: '50+ Luxury Productions · 2,000+ Guests',
    category: 'operations',
    categoryLabel: 'Live Operations',
    highlightBadge: 'High-Stakes Execution',
    summary:
      'Directing end-to-end live logistics, VIP hospitality protocols, multi-vendor negotiations, and crowd coordination for high-profile productions under zero-margin-for-error timelines.',
    metrics: [
      { value: '100%', label: 'Success Rate', detail: '50+ major productions' },
      { value: '2,000+', label: 'Guest Capacity', detail: 'Controlled per event' },
      { value: '0 Mins', label: 'Live Delays', detail: 'Precision cue sheets' },
    ],
    responsibilities: [
      {
        lead: 'Master Run-Sheet & Crowd Logistics',
        detail: 'Coordinating on-site VIP spatial flows, security ingress/egress, and minute-by-minute live stage cues.',
      },
      {
        lead: 'Multi-Vendor Contract Alignment',
        detail: 'Negotiating and synchronizing dozens of audio-visual, decor, catering, and hospitality vendors seamlessly.',
      },
      {
        lead: 'Primary Client Liaison & Crisis Control',
        detail: 'Leading diplomatic briefing-to-closing stakeholder communication and rapid field contingency mitigation.',
      },
    ],
    achievements: [
      'Maintained a spotless 100% operational delivery record across 50+ complex productions with audiences up to 2,000+ guests.',
      'Standardized master production cue-sheet protocols adopted across ongoing agency events.',
    ],
    tools: ['Master Run-Sheets', 'Crowd Protocol', 'Vendor Negotiation', 'Crisis Mitigation'],
    relatedProjectId: 'sakala-operations',
  },
  {
    id: 'work-5',
    orderLabel: '04',
    role: 'Marketing & Growth Performance Specialist',
    company: 'PT. Chinghe Tech & PT. Adhijaya Mitra Sekawan',
    period: '2024 – 2025',
    location: 'Jakarta, Indonesia',
    type: 'Commercial & Growth Analytics',
    scope: 'Revenue Forecasting · Funnel & ROAS',
    category: 'operations',
    categoryLabel: 'Commercial & Growth',
    highlightBadge: 'IDR 400M+ Revenue Impact',
    summary:
      'Drove measurable commercial revenue and audience expansion by combining granular conversion funnel tracking, financial revenue forecasting, and ROAS budget optimization.',
    metrics: [
      { value: '400M+', label: 'IDR Revenue', detail: 'Generated via funnel growth' },
      { value: '+150%', label: 'Engagement', detail: 'Surge in active audience' },
      { value: 'ROAS', label: 'Optimized', detail: 'Data-backed ad efficiency' },
    ],
    responsibilities: [
      {
        lead: 'Conversion Funnel Architecture',
        detail: 'Tracked end-to-end acquisition stages from impression to conversion to isolate drop-off points and uplift rates.',
      },
      {
        lead: 'Revenue Forecasting & Budgeting',
        detail: 'Built quantitative revenue projections linking campaign spend directly to commercial return targets.',
      },
      {
        lead: 'ROAS Performance Iteration',
        detail: 'Continuously tested messaging cohorts and channel allocation to maximize return on ad spend.',
      },
    ],
    achievements: [
      'Generated IDR 400M+ in verified commercial revenue through disciplined funnel tracking and predictive forecasting.',
      'Achieved a +150% surge in user engagement while steadily improving campaign ROAS efficiency.',
    ],
    tools: ['Conversion Analytics', 'Revenue Forecasting', 'ROAS Optimization', 'Growth Funnels'],
  },
  {
    id: 'work-3',
    orderLabel: '05',
    role: 'Human Capital Management Officer',
    company: 'PT. Indekstat Konsultan Indonesia',
    period: 'Sep 2024 – Dec 2024',
    location: 'Jakarta, Indonesia',
    type: 'MSIB National Program',
    scope: '35 Research & Technical Consultants',
    category: 'hr-tech',
    categoryLabel: 'People Analytics & WNA',
    highlightBadge: '+85% Role Clarity Verified',
    summary:
      'Pioneered quantitative Workforce Needs Analysis (WNA) across 35 technical research consultants, translating empirical workload studies into standardized competency matrices.',
    metrics: [
      { value: '+85%', label: 'Role Clarity', detail: 'Verified post-program survey' },
      { value: '35', label: 'Consultants', detail: 'Mapped via time-studies' },
      { value: '5 Tiers', label: 'Competency', detail: 'Job grading & curricula' },
    ],
    responsibilities: [
      {
        lead: 'Quantitative Workforce Diagnostics',
        detail: 'Conducted empirical workload time-studies using workspace analytics to calibrate optimal headcount capacity.',
      },
      {
        lead: 'Competency & Job Grading Architecture',
        detail: 'Formulated 5-tier competency rubrics, clear job descriptions, and structured development curricula.',
      },
      {
        lead: 'Recruitment Pipeline Optimization',
        detail: 'Streamlined candidate data tracking and benchmark scoring to elevate applicant screening quality.',
      },
    ],
    achievements: [
      'Delivered a verified +85% post-program increase in consultant functional role clarity and delivery consistency.',
      'Authored a repeatable onboarding and capability development curriculum for incoming research specialists.',
    ],
    tools: ['Workforce Needs Analysis', 'Competency Matrices', 'Job Grading', 'Workspace Analytics'],
    relatedProjectId: 'indekstat-workforce-analysis',
  },
  {
    id: 'work-7',
    orderLabel: '06',
    role: 'Program Project Leader & Academic Tutor',
    company: 'Kelanaa Islamic Village (YLP) & Ekotifa YPBH',
    period: '2024 – 2025',
    location: 'Jabodetabek & National Programs',
    type: 'Educational Program Delivery',
    scope: 'YLP Vol. 1–2 · Youth Research Camp · RTC',
    category: 'strategy',
    categoryLabel: 'Program Leadership & Mentorship',
    highlightBadge: '4 Educational Cohorts Led',
    summary:
      'Directed end-to-end Youth Leadership Program cohorts (Vol. 1 & Vol. 2) as Project Leader alongside mentoring high school & research fellows across Ekotifa academic camps.',
    metrics: [
      { value: '04', label: 'Programs Led', detail: 'YLP 1–2, YRC & RTC cohorts' },
      { value: '2 Roles', label: 'Dual Scope', detail: 'Project Leader & Tutor' },
      { value: '2024–25', label: 'Active Span', detail: 'Consistent cohort delivery' },
    ],
    responsibilities: [
      {
        lead: 'Project Leader — Youth Leadership Program (Vol. 1 & 2)',
        detail: 'Owned full-cycle program planning, facilitation logistics, stakeholder scheduling, and cohort delivery for Kelanaa.',
      },
      {
        lead: 'Academic & Research Tutor — Ekotifa YPBH',
        detail: 'Mentored students in Youth Research Camp (YRC 2025) and Road To Campus (RTC 2024) on analytical writing and university readiness.',
      },
    ],
    achievements: [
      'Successfully delivered sequential YLP Vol. 1 & Vol. 2 leadership cohorts at Islamic Village in 2025.',
      'Guided multi-school student cohorts through research framing and higher-education preparation across 2024–2025.',
    ],
    tools: ['Program Design', 'Cohort Facilitation', 'Curriculum Delivery', 'Youth Mentorship'],
  },
  {
    id: 'work-6',
    orderLabel: '07',
    role: 'Project Manager',
    company: 'PT. Amartawangsa Media Sinergi',
    period: '2021 – 2022',
    location: 'Indonesia',
    type: 'Project Management · Early Career',
    scope: '1,000+ Pilot Program Participants',
    category: 'operations',
    categoryLabel: 'Project Delivery',
    highlightBadge: '1,000+ Participants Impacted',
    summary:
      'Built structured project management governance and KPI monitoring trackers from scratch to streamline participant onboarding and evaluate large-scale pilot rollout impact.',
    metrics: [
      { value: '1,000+', label: 'Participants', detail: 'Pilot program evaluated' },
      { value: 'KPI', label: 'Governance', detail: 'Custom milestone tracker' },
      { value: 'Faster', label: 'Onboarding', detail: 'Standardized rollout flow' },
    ],
    responsibilities: [
      {
        lead: 'Project Framework Architecture',
        detail: 'Formulated standardized milestone checklists, timeline dependencies, and division handoff protocols.',
      },
      {
        lead: 'KPI Tracking & Pilot Evaluation',
        detail: 'Constructed quantitative KPI trackers measuring onboarding speed and program outcomes across 1,000+ participants.',
      },
    ],
    achievements: [
      'Improved participant onboarding efficiency through a repeatable project management and tracking cadence.',
      'Delivered comprehensive pilot evaluation insights supporting post-pilot scaling decisions.',
    ],
    tools: ['Project Management', 'KPI Trackers', 'Pilot Evaluation', 'Onboarding Workflows'],
  },
];

const WORK_ROLES_ID: WorkRoleEntry[] = [
  {
    id: 'work-1',
    orderLabel: '01',
    role: 'People and Culture Lead',
    company: 'PT. Fan Sukses Bersama',
    period: 'Apr 2026 – Sekarang',
    location: 'Jakarta, Indonesia',
    type: 'Full-time · Korporat',
    scope: '110+ Karyawan Tetap',
    category: 'hr-tech',
    categoryLabel: 'People Ops & HR Tech',
    highlightBadge: 'Peran Aktif Saat Ini',
    summary:
      'Memimpin fungsi People & Culture secara menyeluruh (end-to-end) untuk 110+ karyawan tetap, sekaligus merancang aplikasi HR internal untuk menihilkan hambatan administrasi manual.',
    metrics: [
      { value: '-75%', label: 'Siklus Payroll', detail: '3 hari menjadi <1 jam' },
      { value: '-60%', label: 'Time-to-Hire', detail: '43 hari ke 17,2 hari' },
      { value: '100%', label: 'Kepatuhan', detail: 'BPJS & TER PPh 21' },
    ],
    responsibilities: [
      {
        lead: 'Operasional HR End-to-End',
        detail: 'Mengelola rekrutmen penuh, absensi dan penjadwalan, kesejahteraan karyawan, serta mediasi hubungan industrial lintas divisi.',
      },
      {
        lead: 'Kepatuhan Regulasi & Penggajian',
        detail: 'Menjaga akurasi kepatuhan BPJS Kesehatan, BPJS Ketenagakerjaan, serta perhitungan pajak TER PPh 21.',
      },
      {
        lead: 'Kerangka KPI & OKR Terkalibrasi',
        detail: 'Menurunkan target strategis perusahaan menjadi OKR divisi dan scorecard evaluasi kinerja individu.',
      },
    ],
    achievements: [
      'Membangun rangkaian sistem HR internal (Pervia PMS, Matchify RMS, Slipr Payroll, Zeno Assessment) yang memangkas 65% beban administrasi berulang.',
      'Mempercepat kalkulasi gaji bulanan dan pengiriman slip gaji PDF terenkripsi dari 3 hari kerja menjadi di bawah 1 jam.',
      'Mempercepat waktu rekrutmen sebesar 60% sembari menjaga retensi dan keharmonisan budaya kerja tim.',
    ],
    tools: ['Pervia PMS', 'Matchify RMS', 'Slipr Payroll', 'Zeno Assessment', 'Google Workspace'],
    relatedProjectId: 'fan-sukses-hr',
  },
  {
    id: 'work-2',
    orderLabel: '02',
    role: 'Project Analyst',
    company: 'PT. Rakamin Kolektif Madani',
    period: 'Des 2025 – Mar 2026',
    location: 'Jakarta, Indonesia (Hybrid)',
    type: 'Kontrak · Konsultasi Strategis',
    scope: 'Change Management & Struktur Organisasi',
    category: 'strategy',
    categoryLabel: 'Strategi & Analitik',
    highlightBadge: 'Strategi Tenaga Kerja C-Suite',
    summary:
      'Merancang arsitektur manajemen perubahan, mengaudit struktur lintas divisi, dan mengubah kompleksitas data kapasitas tim menjadi dashboard strategis untuk jajaran direksi.',
    metrics: [
      { value: '100%', label: 'Kejelasan Peran', detail: 'RACI selaras di tiap pemimpin' },
      { value: '+40%', label: 'Kecepatan Lapor', detail: 'Dashboard Power BI otomatis' },
      { value: 'Diadopsi', label: 'Panduan Kerja', detail: 'Leadership Handbook resmi' },
    ],
    responsibilities: [
      {
        lead: 'Audit Struktur Lintas Fungsi',
        detail: 'Mengidentifikasi duplikasi alur kerja dan tumpang-tindih peran di antara tim bisnis maupun teknis.',
      },
      {
        lead: 'Dashboard Eksekutif Power BI',
        detail: 'Menyajikan analitik kapasitas headcount, utilisasi beban kerja, serta metrik keterlibatan untuk direksi.',
      },
      {
        lead: 'Penyusunan Corporate Leadership Handbook',
        detail: 'Menstandarkan buku panduan kepemimpinan yang memuat aturan delegasi, eskalasi, dan matriks akuntabilitas RACI.',
      },
    ],
    achievements: [
      'Menciptakan 100% kejelasan tanggung jawab dan pembagian wewenang RACI di seluruh tim kepemimpinan lintas fungsi.',
      'Membangun repositori komunikasi internal berbasis data yang mempercepat pengambilan keputusan transformasi sebesar 40%.',
    ],
    tools: ['Power BI', 'Looker Studio', 'Matriks RACI', 'Workforce Planning', 'Org Design'],
    relatedProjectId: 'rakamin-change-mgmt',
  },
  {
    id: 'work-4',
    orderLabel: '03',
    role: 'Operations Lead & Event Coordinator',
    company: 'Sakala Wedding & Lamaran.yok',
    period: 'Sep 2025 – Sekarang',
    location: 'Jabodetabek, Indonesia',
    type: 'Freelance · Operasional Lapangan',
    scope: '50+ Produksi Acara · Hingga 2.000+ Tamu',
    category: 'operations',
    categoryLabel: 'Operasional Lapangan',
    highlightBadge: 'Eksekusi Skala Besar',
    summary:
      'Mengorkestrasi logistik operasional berstandar tinggi, alur massa tamu VIP, negosiasi multi-vendor, dan pengendalian situasi darurat pada perhelatan berskala hingga ribuan tamu.',
    metrics: [
      { value: '100%', label: 'Keberhasilan', detail: '50+ produksi acara mewah' },
      { value: '2.000+', label: 'Skala Tamu', detail: 'Kapasitas audiens terkelola' },
      { value: '0 Menit', label: 'Keterlambatan', detail: 'Eksekusi run-sheet presisi' },
    ],
    responsibilities: [
      {
        lead: 'Logistik Massa & Master Run-Sheet',
        detail: 'Mengatur pergerakan tamu VIP, alur masuk-keluar ruangan, serta koordinasi transisi panggung menit demi menit.',
      },
      {
        lead: 'Sinkronisasi Kontrak Multi-Vendor',
        detail: 'Memimpin briefing dan pengawasan puluhan vendor produksi (multimedia, dekorasi, katering, keamanan).',
      },
      {
        lead: 'Penghubung Utama Klien & Mitigasi Krisis',
        detail: 'Menjaga komunikasi diplomatis sejak rapat awal hingga penutupan acara sekaligus mengeksekusi solusi krisis secara tenang.',
      },
    ],
    achievements: [
      'Menjaga rekam jejak 100% keberhasilan operasional di lebih dari 50 acara berskala besar dengan kapasitas hingga 2.000+ peserta.',
      'Merumuskan template master run-sheet yang diadopsi menjadi standar eksekusi rutin di tim agensi.',
    ],
    tools: ['Master Run-Sheet', 'Crowd Control', 'Negosiasi Vendor', 'Mitigasi Krisis'],
    relatedProjectId: 'sakala-operations',
  },
  {
    id: 'work-5',
    orderLabel: '04',
    role: 'Marketing & Growth Performance Specialist',
    company: 'PT. Chinghe Tech & PT. Adhijaya Mitra Sekawan',
    period: '2024 – 2025',
    location: 'Jakarta, Indonesia',
    type: 'Komersial & Analitik Pertumbuhan',
    scope: 'Proyeksi Pendapatan · Funnel & ROAS',
    category: 'operations',
    categoryLabel: 'Pertumbuhan & Komersial',
    highlightBadge: 'Pendapatan IDR 400 Jt+',
    summary:
      'Mendorong pertumbuhan pendapatan komersial dan keterlibatan pengguna melalui pelacakan conversion funnel yang ketat, proyeksi pendapatan berbasis data, dan optimasi ROAS.',
    metrics: [
      { value: '400Jt+', label: 'Pendapatan IDR', detail: 'Melalui optimasi funnel' },
      { value: '+150%', label: 'Engagement', detail: 'Lonjakan interaksi audiens' },
      { value: 'ROAS', label: 'Teroptimasi', detail: 'Efisiensi belanja kampanye' },
    ],
    responsibilities: [
      {
        lead: 'Pelacakan Conversion Funnel End-to-End',
        detail: 'Memetakan perjalanan audiens dari tahap kesadaran hingga transaksi untuk menekan kebocoran konversi.',
      },
      {
        lead: 'Proyeksi Pendapatan & Perencanaan Anggaran',
        detail: 'Menyusun model proyeksi pendapatan guna memastikan setiap anggaran kampanye selaras dengan target komersial.',
      },
      {
        lead: 'Optimasi Metrik ROAS Lintas Kanal',
        detail: 'Mengevaluasi performa iklan serta mengalokasikan anggaran pada kanal dengan imbal hasil terbaik.',
      },
    ],
    achievements: [
      'Berhasil membukukan pendapatan lebih dari IDR 400 juta lewat disiplin pelacakan conversion funnel dan revenue forecasting.',
      'Mencatatkan lonjakan user engagement sebesar +150% sembari meningkatkan efisiensi ROAS secara berkelanjutan.',
    ],
    tools: ['Conversion Analytics', 'Revenue Forecasting', 'Optimasi ROAS', 'Growth Funnel'],
  },
  {
    id: 'work-3',
    orderLabel: '05',
    role: 'Human Capital Management Officer',
    company: 'PT. Indekstat Konsultan Indonesia',
    period: 'Sep 2024 – Des 2024',
    location: 'Jakarta, Indonesia',
    type: 'Program MSIB Nasional',
    scope: '35 Konsultan Riset & Teknis',
    category: 'hr-tech',
    categoryLabel: 'People Analytics & WNA',
    highlightBadge: '+85% Kejelasan Peran',
    summary:
      'Memelopori analisa kebutuhan tenaga kerja kuantitatif (Workforce Needs Analysis) bagi 35 konsultan teknis, serta menyusun matriks kompetensi 5 tingkat terstandar.',
    metrics: [
      { value: '+85%', label: 'Kejelasan Peran', detail: 'Terverifikasi pascaprogram' },
      { value: '35', label: 'Konsultan', detail: 'Diaudit berbasis beban kerja' },
      { value: '5 Tingkat', label: 'Kompetensi', detail: 'Rubrik & jenjang jabatan' },
    ],
    responsibilities: [
      {
        lead: 'Analisa Kuantitatif Kebutuhan SDM (WNA)',
        detail: 'Melakukan pemetaan jam kerja empiris menggunakan workspace analytics guna mengoptimalkan alokasi tim.',
      },
      {
        lead: 'Matriks Kompetensi & Kurikulum Bakat',
        detail: 'Menyusun rubrik kompetensi 5 tingkat, uraian jabatan terukur, dan panduan pengembangan karier konsultan.',
      },
      {
        lead: 'Optimasi Pelacakan Pipeline Rekrutmen',
        detail: 'Memperbaiki sistem pencatatan kandidat dan scorecard skrining sehingga siklus seleksi lebih cepat dan presisi.',
      },
    ],
    achievements: [
      'Mendorong peningkatan terukur sebesar +85% pada kejelasan peran fungsional serta produktivitas tim konsultan.',
      'Menghasilkan kurikulum onboarding terstandar yang dapat dipakai ulang oleh manajemen untuk rekrutmen berikutnya.',
    ],
    tools: ['Workforce Needs Analysis', 'Matriks Kompetensi', 'Job Grading', 'Workspace Analytics'],
    relatedProjectId: 'indekstat-workforce-analysis',
  },
  {
    id: 'work-7',
    orderLabel: '06',
    role: 'Program Project Leader & Academic Tutor',
    company: 'Kelanaa Islamic Village (YLP) & Ekotifa YPBH',
    period: '2024 – 2025',
    location: 'Jabodetabek & Nasional',
    type: 'Pengelolaan Program Edukasi',
    scope: 'YLP Vol. 1–2 · Youth Research Camp · RTC',
    category: 'strategy',
    categoryLabel: 'Kepemimpinan Program & Mentor',
    highlightBadge: '4 Program Edukasi Terselenggara',
    summary:
      'Memimpin penyelenggaraan Youth Leadership Program (Vol. 1 & Vol. 2) di Kelanaa Islamic Village sekaligus membimbing peserta riset dan kesiapan kuliah di Ekotifa YPBH.',
    metrics: [
      { value: '04', label: 'Kohort Program', detail: 'YLP 1–2, YRC 2025 & RTC 2024' },
      { value: '2 Peran', label: 'Cakupan Ganda', detail: 'Project Leader & Tutor' },
      { value: '2024–25', label: 'Periode Aktif', detail: 'Eksekusi berkelanjutan' },
    ],
    responsibilities: [
      {
        lead: 'Project Leader — Youth Leadership Program (Vol. 1 & 2)',
        detail: 'Bertanggung jawab atas perencanaan silabus, alur fasilitasi, jadwal pemateri, dan eksekusi penuh program Kelanaa 2025.',
      },
      {
        lead: 'Tutor Akademik & Riset — Ekotifa YPBH',
        detail: 'Membimbing pelajar dalam Youth Research Camp (YRC 2025) dan Road To Campus (RTC 2024) terkait metodologi riset.',
      },
    ],
    achievements: [
      'Menuntaskan dua angkatan Youth Leadership Program (Vol. 1 & Vol. 2) di Islamic Village sepanjang tahun 2025.',
      'Mendampingi peserta lintas sekolah dalam penguatan kemampuan riset ilmiah dan persiapan perguruan tinggi.',
    ],
    tools: ['Manajemen Program', 'Fasilitasi Kohort', 'Kurikulum Pelatihan', 'Mentoring Pelajar'],
  },
  {
    id: 'work-6',
    orderLabel: '07',
    role: 'Project Manager',
    company: 'PT. Amartawangsa Media Sinergi',
    period: '2021 – 2022',
    location: 'Indonesia',
    type: 'Manajemen Proyek · Awal Karier',
    scope: '1.000+ Peserta Program Percontohan',
    category: 'operations',
    categoryLabel: 'Manajemen Proyek',
    highlightBadge: '1.000+ Peserta Dievaluasi',
    summary:
      'Merumuskan kerangka kerja manajemen proyek dan pelacak KPI dari nol untuk meningkatkan efisiensi onboarding serta mengevaluasi dampak program percontohan bagi lebih dari 1.000 peserta.',
    metrics: [
      { value: '1.000+', label: 'Peserta', detail: 'Cakupan evaluasi program pilot' },
      { value: 'KPI', label: 'Tata Kelola', detail: 'Pelacak milestone terstruktur' },
      { value: 'Efisien', label: 'Onboarding', detail: 'Alur penyambutan terstandar' },
    ],
    responsibilities: [
      {
        lead: 'Perumusan Kerangka Manajemen Proyek',
        detail: 'Menyusun alur kerja standar, jadwal eksekusi lintas tim, serta matriks pemantauan tenggat deliverable.',
      },
      {
        lead: 'Evaluasi KPI & Program Percontohan',
        detail: 'Membangun KPI tracker untuk mengukur kelancaran onboarding dan dampak pelaksanaan program di 1.000+ peserta.',
      },
    ],
    achievements: [
      'Meningkatkan efisiensi alur onboarding peserta secara konsisten berkat standar pelaporan proyek yang terukur.',
      'Menyajikan evaluasi kuantitatif pilot program yang menjadi pijakan pengembangan program lanjutan perusahaan.',
    ],
    tools: ['Manajemen Proyek', 'Pelacak KPI', 'Evaluasi Program Pilot', 'Alur Onboarding'],
  },
];

interface WorkingExperienceShowcaseProps {
  onNavigate?: (route: AppRoute, slug?: string) => void;
  onOpenResume?: () => void;
  compactHeader?: boolean;
}

export const WorkingExperienceShowcase: React.FC<WorkingExperienceShowcaseProps> = ({
  onNavigate,
  onOpenResume,
  compactHeader = false,
}) => {
  const { lang, t } = useLanguage();
  const roles = lang === 'id' ? WORK_ROLES_ID : WORK_ROLES_EN;

  const [categoryFilter, setCategoryFilter] = useState<WorkCategory>('all');
  const [selectedId, setSelectedId] = useState<string>('work-1');

  const filteredRoles = useMemo(() => {
    if (categoryFilter === 'all') return roles;
    return roles.filter((r) => r.category === categoryFilter);
  }, [roles, categoryFilter]);

  const activeIndex = useMemo(() => {
    const idx = filteredRoles.findIndex((r) => r.id === selectedId);
    return idx >= 0 ? idx : 0;
  }, [filteredRoles, selectedId]);

  const activeRole = filteredRoles[activeIndex] || roles[0];

  const handleStep = (direction: -1 | 1) => {
    if (filteredRoles.length <= 1) return;
    const nextIdx = (activeIndex + direction + filteredRoles.length) % filteredRoles.length;
    setSelectedId(filteredRoles[nextIdx].id);
  };

  const getCategoryCount = (cat: WorkCategory) => {
    if (cat === 'all') return roles.length;
    return roles.filter((r) => r.category === cat).length;
  };

  return (
    <div className="w-full rounded-[1.75rem] sm:rounded-[2rem] bg-[#FAF8F5] border border-[#E7E0D6] shadow-sm overflow-hidden">
      {/* =========================================================================
          TOP CONTROL BAR: CATEGORY FILTERS + CAREER SNAPSHOT STRIP
          ========================================================================= */}
      <div className="px-4 sm:px-7 py-4 sm:py-5 bg-white border-b border-[#E7E0D6] flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        {/* Category Filters (Interactive Filter Buttons) */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {(
            [
              { id: 'all', en: 'All Track Record', idLabel: 'Semua Karier', icon: Layers },
              { id: 'hr-tech', en: 'People & HR Tech', idLabel: 'People & HR Tech', icon: Users },
              { id: 'strategy', en: 'Strategy & Programs', idLabel: 'Strategi & Program', icon: Compass },
              { id: 'operations', en: 'Ops & Growth', idLabel: 'Operasional & Growth', icon: LineChart },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const isSelected = categoryFilter === tab.id;
            const count = getCategoryCount(tab.id);
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setCategoryFilter(tab.id);
                  const firstMatch = tab.id === 'all' ? roles[0] : roles.find((r) => r.category === tab.id);
                  if (firstMatch) setSelectedId(firstMatch.id);
                }}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#1E2022] text-white border-[#1E2022] shadow-2xs'
                    : 'bg-[#F3EFEA] text-[#4A4843] border-[#E7E0D6] hover:border-[#AF8C72] hover:text-[#1E2022]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#DFC3A8]' : 'text-[#6E7C69]'}`} />
                <span>{lang === 'id' ? tab.idLabel : tab.en}</span>
                <span
                  className={`font-mono text-[10px] tabular-nums ${
                    isSelected ? 'text-[#DFC3A8]' : 'text-[#9E7B62]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clean Unboxed Career Footprint Numbers (Zero Pill Clutter, Tabular Nums) */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs border-t xl:border-t-0 pt-3 xl:pt-0 border-[#E7E0D6]">
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans font-black text-base sm:text-lg text-[#6E7C69] tabular-nums">110+</span>
            <span className="font-mono text-[11px] text-[#605E59]">
              {t('Staff Managed', 'Karyawan Dikelola')}
            </span>
          </div>
          <span className="text-[#DFD5C8] hidden sm:inline" aria-hidden="true">|</span>
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans font-black text-base sm:text-lg text-[#AF8C72] tabular-nums">-75%</span>
            <span className="font-mono text-[11px] text-[#605E59]">
              {t('Payroll Speed', 'Waktu Payroll')}
            </span>
          </div>
          <span className="text-[#DFD5C8] hidden sm:inline" aria-hidden="true">|</span>
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans font-black text-base sm:text-lg text-[#1E2022] tabular-nums">400Jt+</span>
            <span className="font-mono text-[11px] text-[#605E59]">
              {t('IDR Growth', 'Pendapatan Growth')}
            </span>
          </div>
          <span className="text-[#DFD5C8] hidden sm:inline" aria-hidden="true">|</span>
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans font-black text-base sm:text-lg text-[#6E7C69] tabular-nums">50+</span>
            <span className="font-mono text-[11px] text-[#605E59]">
              {t('Events Led', 'Event Terkendali')}
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN SPLIT WORKSPACE: LEFT CHRONOLOGICAL SPINE + RIGHT EXECUTIVE DOSSIER
          ========================================================================= */}
      <div className="p-4 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* LEFT COLUMN: SCANNABLE CHRONOLOGICAL TIMELINE SELECTOR */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between px-1 mb-3">
              <div className="flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-[#AF8C72]" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#605E59]">
                  {t('Career Timeline (Select Role)', 'Linimasa Karier (Pilih Peran)')}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#9E7B62] tabular-nums">
                2021 – 2026
              </span>
            </div>

            {/* Interactive Timeline Spine */}
            <div className="relative space-y-2">
              {filteredRoles.map((item) => {
                const isActive = item.id === activeRole.id;
                const leadMetric = item.metrics[0];

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className={`w-full text-left p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                      isActive
                        ? 'bg-white border-[#6E7C69] shadow-sm ring-1 ring-[#6E7C69]/20'
                        : 'bg-white/60 hover:bg-white border-[#E7E0D6] hover:border-[#AF8C72]'
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      {/* Order Number Node */}
                      <div
                        className={`w-8 h-8 rounded-xl font-mono text-xs font-bold tabular-nums flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isActive
                            ? 'bg-[#6E7C69] text-white'
                            : 'bg-[#F3EFEA] text-[#605E59] group-hover:bg-[#AF8C72] group-hover:text-white'
                        }`}
                      >
                        {item.orderLabel}
                      </div>

                      {/* Scannable Role + Company + Period */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 text-[11px] font-mono text-[#9E7B62] tabular-nums">
                          <span className={isActive ? 'text-[#6E7C69] font-semibold' : ''}>
                            {item.period}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="truncate">{item.categoryLabel}</span>
                        </div>
                        <h4
                          className={`font-sans font-bold text-sm sm:text-[15px] leading-snug truncate mt-0.5 ${
                            isActive ? 'text-[#1E2022]' : 'text-[#2D2F31]'
                          }`}
                        >
                          {item.role}
                        </h4>
                        <p className="text-xs text-[#605E59] truncate mt-0.5">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    {/* Right Key Stat Preview */}
                    <div className="text-right shrink-0 pl-2 border-l border-[#E7E0D6]/80 hidden sm:block">
                      <span
                        className={`font-sans font-black text-sm tabular-nums block leading-tight ${
                          isActive ? 'text-[#6E7C69]' : 'text-[#1E2022]'
                        }`}
                      >
                        {leadMetric.value}
                      </span>
                      <span className="font-mono text-[10px] text-[#9E7B62] block leading-tight mt-0.5">
                        {leadMetric.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Helper Row inside Left Column */}
          {!compactHeader && onOpenResume && (
            <div className="mt-4 pt-3.5 border-t border-[#E7E0D6] flex items-center justify-between gap-3 px-1">
              <span className="text-xs text-[#605E59]">
                {t('Need the printable formal version?', 'Butuh versi ringkasan CV siap cetak?')}
              </span>
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#1E2022] hover:text-[#6E7C69] transition-colors cursor-pointer shrink-0"
              >
                <span>{t('Open CV', 'Buka CV')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#AF8C72]" />
              </button>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: READABLE EXECUTIVE DOSSIER STAGE (ZERO PHOTO) */}
        <div className="lg:col-span-7 flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole.id}
              initial={{ opacity: 0.75, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.75, y: -4 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="w-full rounded-[1.5rem] bg-white border border-[#DFD5C8] shadow-sm overflow-hidden flex flex-col justify-between"
            >
              {/* TOP EDITORIAL HEADER (WARM CHARCOAL-SAGE BAND — HIGH CONTRAST, ZERO CLUTTER) */}
              <div className="bg-[#232924] text-white p-5 sm:p-7 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5 min-w-0">
                    {/* Clean Metadata Line separated by dots */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-[#D5DDD2]">
                      <span className="text-[#E3C6AA] font-semibold uppercase tracking-wider">
                        {activeRole.highlightBadge}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{activeRole.type}</span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#AF8C72]" />
                        {activeRole.location}
                      </span>
                    </div>

                    <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight text-balance">
                      {activeRole.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm">
                      <span className="font-semibold text-[#E3C6AA]">{activeRole.company}</span>
                      <span className="text-white/35" aria-hidden="true">·</span>
                      <span className="font-mono text-xs text-[#D5DDD2] tabular-nums">{activeRole.period}</span>
                      <span className="text-white/35" aria-hidden="true">·</span>
                      <span className="text-xs text-[#D5DDD2]/90">{activeRole.scope}</span>
                    </div>
                  </div>

                  {/* Prev / Next Quick Stepper */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleStep(-1)}
                      aria-label={t('Previous role', 'Peran sebelumnya')}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-[11px] text-[#D5DDD2] tabular-nums px-1">
                      {activeIndex + 1}/{filteredRoles.length}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleStep(1)}
                      aria-label={t('Next role', 'Peran berikutnya')}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 3-Column Scannable KPI Bar with Crisp Hairline Dividers */}
                <div className="grid grid-cols-3 divide-x divide-white/15 pt-4 border-t border-white/15">
                  {activeRole.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className={mIdx === 0 ? 'pr-3' : mIdx === 1 ? 'px-3 sm:px-4' : 'pl-3 sm:pl-4'}>
                      <span className="font-sans font-black text-xl sm:text-2xl text-[#E3C6AA] tabular-nums block leading-none">
                        {metric.value}
                      </span>
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white font-semibold block mt-1.5">
                        {metric.label}
                      </span>
                      <span className="text-[11px] text-[#D5DDD2]/85 block leading-snug mt-0.5">
                        {metric.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BODY: CONCISE SUMMARY + 2-COLUMN SCANNABLE MANDATE & OUTCOMES */}
              <div className="p-5 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                  {/* Executive Summary */}
                  <div className="pb-4 border-b border-[#E7E0D6]">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#9E7B62] font-bold block mb-1.5">
                      {t('Role Overview', 'Ringkasan Peran')}
                    </span>
                    <p className="text-sm text-[#3A3935] leading-relaxed">
                      {activeRole.summary}
                    </p>
                  </div>

                  {/* Two-Column Scannable Split */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {/* Left: Responsibilities with bold keyword lead-ins */}
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#AF8C72]" />
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#1E2022] font-bold">
                          {t('Core Mandate', 'Fokus Tanggung Jawab')}
                        </span>
                      </div>
                      <ul className="space-y-2.5 text-xs text-[#4A4843]">
                        {activeRole.responsibilities.map((item, rIdx) => (
                          <li key={rIdx} className="leading-relaxed">
                            <strong className="text-[#1E2022] font-semibold block">
                              {item.lead}
                            </strong>
                            <span>{item.detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Measurable Outcomes */}
                    <div className="space-y-2.5 md:border-l md:border-[#E7E0D6] md:pl-6">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6E7C69]" />
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E7C69] font-bold">
                          {t('Verified Impact', 'Dampak & Hasil Nyata')}
                        </span>
                      </div>
                      <ul className="space-y-2.5 text-xs text-[#1E2022]">
                        {activeRole.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#6E7C69] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Row: Clean Inline Toolset + Case Study Action */}
                <div className="pt-4 mt-2 border-t border-[#E7E0D6] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs text-[#605E59] leading-relaxed">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#9E7B62] font-bold mr-2">
                      {t('Systems & Stack:', 'Sistem & Keahlian:')}
                    </span>
                    <span className="font-medium text-[#1E2022]">
                      {activeRole.tools.join(' · ')}
                    </span>
                  </div>

                  {activeRole.relatedProjectId && onNavigate && (
                    <button
                      type="button"
                      onClick={() => onNavigate('project-detail', activeRole.relatedProjectId)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#6E7C69] hover:bg-[#5B6956] text-white text-xs font-semibold transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
                    >
                      <span>{t('View Case Study', 'Lihat Studi Kasus')}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
