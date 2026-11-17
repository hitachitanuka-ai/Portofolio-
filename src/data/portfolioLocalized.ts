import { Language } from '../context/LanguageContext';
import {
  PROJECTS,
  EXPERTISE_AREAS,
  TESTIMONIALS,
  PERSONAL_VALUES,
  BLOG_POSTS,
  SURYA_PHOTOS_ARCHIVE,
  EVENT_PHOTOS_ARCHIVE,
} from './portfolioData';
import { Project, BlogPost, Testimonial } from '../types';

const PROJECT_ID_OVERRIDES: Record<string, Partial<Project> & { caseStudyOverrides?: Partial<Project['caseStudy']> }> = {
  'pervia-platform': {
    title: 'Pervia — Sistem Manajemen Kinerja Enterprise (PMS)',
    category: 'HR Automation',
    shortSummary:
      'Suite manajemen kinerja perusahaan dengan verifikasi deliverable KPI real-time, kalibrasi matriks talenta 9-Box, umpan balik 360°, dan analitik eksekutif.',
    description:
      'Performance is Progress. Platform manajemen kinerja perusahaan terpadu yang memadukan continuous KPI tracking, 360° multi-rater feedback, kalibrasi matriks talenta 9-Box Grid, tinjauan kompensasi, dan analitik eksekutif dalam satu workspace.',
    features: [
      'Termasuk Video Demo Interaktif (Tur Produk Lengkap)',
      'Dashboard Eksekutif dengan Target Alignment (98.4%) & Metrik Pulse',
      'Pelacakan KPI Berkelanjutan & Verifikasi Deliverable SLA MTTR (66 / 92 Terverifikasi)',
      'Matriks Talenta 9-Box Grid & Kalibrasi Suksesi (Normalisasi Bell-Curve)',
      'Umpan Balik 360° Multi-Penilai, Evaluasi Supervisor & Penilaian Mandiri',
      'Workspace Berbasis Peran (Super Admin, HR Admin, HR Manager, Manager, Supervisor, Karyawan)',
    ],
    quote: {
      text: 'Kinerja bukan sekadar evaluasi statis akhir tahun; kinerja adalah kejelasan berkelanjutan. Pervia mengubah penilaian abstrak menjadi matriks kalibrasi objektif dengan visibilitas eksekutif seketika.',
      author: 'Bangkit Surya Wijaya, Kreator & Arsitek Sistem Kinerja',
    },
    caseStudyOverrides: {
      overview:
        'Pervia adalah Sistem Manajemen Kinerja Enterprise (PMS) yang dirancang untuk menyelaraskan OKR strategis, memverifikasi deliverable kerja, dan memetakan potensi tim lintas 7 departemen fungsional dengan antarmuka hangat dan profesional.',
      challenge:
        'Siklus penilaian kinerja tradisional kerap terjebak bias penilaian terbaru (recency bias), penilaian subjektif, bell-curve yang tidak terkalibrasi, serta pelacakan spreadsheet yang terpisah-pisah.',
      objectives: [
        'Memusatkan pelacakan KPI lintas departemen dengan jejak audit bukti kerja.',
        'Menerapkan matriks talenta 9-Box Grid objektif dengan indikator risiko suksesi.',
        'Memfasilitasi umpan balik 360 derajat dari rekan kerja dan atasan langsung.',
        'Menjaga normalisasi distribusi skor agar adil dan bebas inflasi rating.',
      ],
      results: {
        metrics: [
          { label: 'Target Alignment', value: '98.4%', detail: 'Melampaui target lintas 7 departemen' },
          { label: 'Deliverable Terverifikasi', value: '66 / 92', detail: 'Teraudit pada sistem' },
          { label: 'Indeks Perusahaan', value: '91.4%', detail: 'Skor agregat organisasi' },
          { label: 'Kecepatan Siklus', value: '18 Hari', detail: 'Dipangkas dari siklus 60+ hari' },
        ],
        impactNarrative:
          'Pervia menyederhanakan kalibrasi kinerja perusahaan dari dua bulan menjadi 18 hari sekaligus membangun rekam audit deliverable yang transparan.',
      },
    },
  },
  'matchify-platform': {
    title: 'Matchify — Sistem Rekrutmen Cerdas & RMS',
    shortSummary:
      'Sistem manajemen rekrutmen menyeluruh dengan jadwal wawancara otomatis, timer wawancara aktif, dan analitik funnel kandidat.',
    description:
      'Platform intelijen rekrutmen terintegrasi untuk merapikan alur seleksi, jadwal wawancara otomatis, pencocokan profil kandidat, serta analitik funnel real-time (diuji pada kapasitas 5.200+ data rekor pelamar lintas kohort, 3.861 slot terjadwal, dan 603 benchmark penempatan).',
    features: [
      'Termasuk Video Demo Interaktif (Tur Produk Lengkap)',
      'Jadwal Wawancara Otomatis & Timer Live Cerdas (45:00)',
      'Analitik Funnel Rekrutmen & Efektivitas Sumber (LinkedIn, JobStreet, Referral)',
      'Pencocokan Kandidat & Rubrik Penilaian Terstandar',
      'Checklist Onboarding Otomatis dengan Pelacakan Progres Real-Time',
    ],
    quote: {
      text: 'Rekrutmen lebih dari sekadar mencari kandidat. Matchify mengubah kecepatan perekrutan kami dengan menyatukan skrining, jadwal wawancara, dan pelacakan kandidat dalam satu dashboard cerdas.',
      author: 'Bangkit Surya Wijaya, Kreator & People Lead',
    },
    caseStudyOverrides: {
      overview:
        'Matchify dirancang untuk menghilangkan hambatan administratif dalam rekrutmen bervolume tinggi—menyatukan penerimaan pelamar, penjadwalan pewawancara, timer wawancara 45 menit, dan analitik kanal rekrutmen.',
      challenge:
        'Tim HR di perusahaan berkembang sering menghabiskan hingga 70% waktunya hanya untuk mengirim email jadwal bolak-balik, mengoordinasikan kalender pewawancara, dan merekap spreadsheet.',
      results: {
        metrics: [
          { label: 'Data Terkalibrasi', value: '5,200+', detail: 'Kapasitas uji & multi-kohort sistem' },
          { label: 'Time-to-Hire', value: '-60%', detail: 'Turun dari 43 ke 17,2 hari' },
          { label: 'Slot Terjadwal', value: '3,861', detail: 'Benchmark kalender otomatis' },
          { label: 'Benchmark Hired', value: '603', detail: 'Kapasitas data live & simulasi' },
        ],
        impactNarrative:
          'Matchify memangkas beban administrasi siklus rekrutmen hingga 60%, meminimalkan kandidat gugur di tengah proses, dan memberi pimpinan visibilitas penuh atas kecepatan rekrutmen.',
      },
    },
  },
  'slipr-platform': {
    title: 'Slipr — Sistem Payroll Digital & Slip Gaji Terenkripsi',
    shortSummary:
      'Mesin kalkulasi payroll otomatis dengan kepatuhan BPJS & TER PPh 21, tanda tangan digital sah, dan distribusi email terenkripsi.',
    description:
      'Kemudahan kelola slip gaji digital yang aman & transparan. Mengotomatiskan perhitungan gaji, iuran BPJS & tarif pajak TER PPh 21 terbaru, tanda tangan digital terverifikasi, dan distribusi PDF terenkripsi massal.',
    features: [
      'Termasuk Video Demo Interaktif (Tur Produk Lengkap)',
      'Otomatisasi Gaji Pokok, Tunjangan, BPJS & TER PPh 21',
      'Tanda Tangan Digital Sah (Seamless Document Signing)',
      'Distribusi Slip Gaji Otomatis & Terenkripsi via Email',
      'Dashboard Analitik Payroll & Tampilan Mobile "Slip Gaji Saya"',
    ],
    quote: {
      text: 'Slipr merevolusi cara kami mendistribusikan slip gaji dan menghitung pajak—dari proses manual berhari-hari menjadi alur 45 menit yang aman, terenkripsi, dan bertanda tangan digital sah.',
      author: 'Bangkit Surya Wijaya, Kreator & People Lead',
    },
    caseStudyOverrides: {
      overview:
        'Slipr adalah sistem payroll digital dan distribusi slip gaji terenkripsi yang dibuat untuk mencegah human error, memastikan kepatuhan pajak DJP, dan menjaga kerahasiaan kompensasi karyawan.',
      challenge:
        'Distribusi slip gaji manual via spreadsheet atau amplop fisik memakan waktu berhari-hari, rawan kebocoran privasi gaji, serta rentan kesalahan hitung BPJS dan TER PPh 21.',
      results: {
        metrics: [
          { label: 'Kecepatan Proses', value: '-75%', detail: 'Dari 3 hari menjadi <1 jam' },
          { label: 'Akurasi Pajak', value: '100%', detail: 'Nol selisih pemotongan pajak' },
          { label: 'Kebocoran Privasi', value: '0', detail: 'Distribusi terenkripsi per karyawan' },
          { label: 'Karyawan Aktif', value: '110+', detail: 'Kapasitas sistem teruji 500+' },
        ],
        impactNarrative:
          'Slipr menghapus lembur administrasi payroll bulanan, menghadirkan transparansi penuh bagi karyawan, dan meningkatkan kepercayaan organisasi.',
      },
    },
  },
  'zeno-platform': {
    title: 'Zeno — Platform Asesmen Psikometri Digital (MBTI & DISC)',
    shortSummary:
      'Mesin psikotes online terkalibrasi yang memetakan 16 tipe MBTI dan 4 kuadran DISC secara instan dengan grafik radar.',
    description:
      'Know Yourself. Grow Beyond. Platform psikotes digital terintegrasi untuk pemetaan MBTI & DISC, penyederhanaan alur asesmen kandidat, pemangkasan waktu evaluasi psikometri hingga 85%, dan pengambilan keputusan berbasis data.',
    features: [
      'Termasuk Video Demo Interaktif (Tur Produk Lengkap)',
      'Mesin Tes Online MBTI & DISC Terkalibrasi',
      'Profil Kepribadian & Kognitif Berbasis Radar Chart',
      'Skoring Otomatis & Laporan Psikologis Real-Time',
      'Pengalaman Tes Responsif & Ringan di Ponsel Kandidat',
    ],
    quote: {
      text: 'Setiap individu memiliki potensi unik. Zeno mengubah psikotes pra-kerja dari tes kertas manual menjadi sistem penemuan potensi 15 menit yang objektif.',
      author: 'Bangkit Surya Wijaya, Kreator & People Lead',
    },
    caseStudyOverrides: {
      results: {
        metrics: [
          { label: 'Waktu Evaluasi', value: '-85%', detail: 'Turun dari 3 hari ke 15 menit' },
          { label: 'Skor Terkalibrasi', value: '1,200+', detail: 'Validasi sistem & multi-kohort' },
          { label: 'Akurasi Skoring', value: '100%', detail: 'Bebas kesalahan hitung manual' },
          { label: 'Tingkat Selesai', value: '94%', detail: 'Alur tes ramah mobile' },
        ],
        impactNarrative:
          'Zeno memampukan rekruter mengambil keputusan objektif berbasis data sejak tahap wawancara awal dan menekan risiko salah rekrut di masa percobaan.',
      },
    },
  },
  'fan-sukses-hr': {
    title: 'Ekosistem HR Menyeluruh & Otomasi Internal',
    shortSummary:
      'Mengelola operasional Human Capital secara end-to-end untuk 110+ karyawan sekaligus membangun alat bantu otomasi internal.',
    description:
      'Berperan sebagai People & Culture Lead yang mengelola operasional HR secara end-to-end untuk 110+ karyawan penuh waktu, membangun alat bantu internal (Matchify, Slipr, Zeno), serta menyusun kerangka kerja target KPI/OKR lintas divisi.',
  },
  'rakamin-change-mgmt': {
    title: 'Arsitektur Change Management & Tenaga Kerja',
    shortSummary:
      'Menerjemahkan kompleksitas organisasi menjadi dashboard eksekutif C-suite dan menyusun Corporate Leadership Handbook.',
    description:
      'Merancang model manajemen perubahan dan perencanaan tenaga kerja, mengaudit struktur lintas fungsi, menyusun Corporate Leadership Handbook, serta membangun dashboard Power BI untuk pimpinan puncak.',
  },
  'indekstat-workforce-analysis': {
    title: 'Analisa Kuantitatif Kebutuhan Tenaga Kerja (WNA)',
    shortSummary:
      'Diagnostik beban kerja kuantitatif yang meningkatkan kejelasan peran konsultan teknis sebesar +85%.',
    description:
      'Memelopori Workforce Needs Analysis (WNA) kuantitatif terhadap 35 konsultan teknis melalui studi beban kerja empiris serta merumuskan matriks kompetensi 5 tingkat.',
  },
  'ipb-osis-fest-pr': {
    title: 'Kampanye Digital PR Nasional & IPB OSIS Fest',
    shortSummary:
      'Memimpin konferensi pelajar nasional bagi 270+ ketua OSIS dari 27 provinsi dan meraih Juara 1 Nasional PREA 2024.',
    description:
      'Memimpin eksekusi kampanye Digital PR bertema ESG bersama Duta IPB University yang melibatkan 270+ ketua OSIS lintas 27 provinsi serta meraih Juara 1 Nasional PR Excellence Awards (PREA) 2024.',
  },
  'sakala-operations': {
    title: 'Operasional Acara Skala Besar & Manajemen Massa',
    shortSummary:
      'Mengorkestrasi logistik operasional 50+ produksi acara mewah dengan kapasitas hingga 2.000+ tamu undangan.',
    description:
      'Mengelola logistik lapangan, protokol VIP, negosiasi multi-vendor, serta mitigasi krisis real-time pada 50+ produksi acara besar dengan tingkat keberhasilan 100%.',
  },
};

const EXPERTISE_ID_OVERRIDES: Record<string, { title: string; headline: string; description: string; practicalApplication: string; competencies: string[] }> = {
  'people-culture': {
    title: 'People & Culture',
    headline: 'Pertumbuhan Organisasi & Operasional SDM Berbasis Empati',
    description:
      'Mengelola siklus Human Capital secara menyeluruh dari rekrutmen dan onboarding otomatis hingga retensi, KPI/OKR, serta kepatuhan hukum ketenagakerjaan (BPJS & TER PPh 21).',
    practicalApplication:
      'Mendampingi dan mengelola operasional 110+ karyawan secara end-to-end di PT. Fan Sukses Bersama dengan kepatuhan regulasi yang terjaga dan kohesi tim yang kuat.',
    competencies: [
      'Rekrutmen & Akuisisi Talenta End-to-End',
      'Operasional HR & Tata Kelola Kebijakan',
      'Manajemen Kinerja (KPI / OKR)',
      'Pengembangan Kompetensi & Pelatihan',
      'Kesejahteraan Karyawan & Kepatuhan BPJS',
    ],
  },
  'business-analysis': {
    title: 'Business Analysis',
    headline: 'Menghubungkan Target Korporasi dengan Eksekusi Nyata',
    description:
      'Mengubah alur kerja organisasi yang ambigu menjadi proses terstandar—meliputi audit job grading, matriks akuntabilitas RACI, dan distribusi beban kerja.',
    practicalApplication:
      'Mengaudit struktur lintas divisi di PT. Rakamin Kolektif Madani dan merumuskan kejelasan peran bagi 35 konsultan teknis di PT. Indekstat.',
    competencies: [
      'Diagnostik Tenaga Kerja Kuantitatif (WNA)',
      'Pemetaan Proses Bisnis & Analisis Kesenjangan',
      'Arsitektur Perencanaan Tenaga Kerja',
      'Matriks RACI & Penjenjangan Jabatan',
      'Penyusunan Leadership Handbook Eksekutif',
    ],
  },
  'project-management': {
    title: 'Project Management',
    headline: 'Eksekusi Presisi di Lingkungan Bertekanan Tinggi',
    description:
      'Mengorkestrasi pengiriman inisiatif lintas fungsi, konferensi nasional multi-provinsi, dan logistik lapangan untuk ribuan peserta.',
    practicalApplication:
      'Memimpin IPB OSIS Fest dari 27 provinsi bersama 70+ panitia serta mengawal 50+ produksi acara hingga 2.000+ tamu dengan tingkat keberhasilan 100%.',
    competencies: [
      'Tata Kelola Timeline & Milestone',
      'Negosiasi Kontrak Multi-Vendor & Anggaran',
      'Komunikasi Stakeholder & Pimpinan C-Suite',
      'Mitigasi Krisis Lapangan Secara Real-Time',
      'Monitoring, Evaluasi & Retrospektif',
    ],
  },
  'digital-product': {
    title: 'Digital Product Development',
    headline: 'Merancang SaaS Internal & Sistem Otomasi HR Mandiri',
    description:
      'Membangun aplikasi HR dan bisnis kustom dari tahap riset kebutuhan dan wireframe hingga sistem cloud aktif tanpa ketergantungan lisensi mahal.',
    practicalApplication:
      'Merancang dan membangun Pervia PMS, Matchify RMS, Slipr Payroll, dan Zeno Psychometrics Engine yang langsung digunakan dalam operasional nyata.',
    competencies: [
      'Product Discovery & Perumusan Kebutuhan (PRD)',
      'Wireframing & Arsitektur UX',
      'Otomasi HRIS & Payroll Kustom',
      'Sistem Manajemen Rekrutmen (ATS)',
      'Algoritma Asesmen Psikometri Digital',
    ],
  },
  'data-performance': {
    title: 'Data & Performance Management',
    headline: 'Metrik Objektif untuk Pengambilan Keputusan Tepat',
    description:
      'Mengubah data mentah organisasi menjadi wawasan eksekutif melalui dashboard KPI terkalibrasi, psikometri perilaku, dan analitik beban kerja.',
    practicalApplication:
      'Membangun analitik rekrutmen berkapasitas 5.200+ data pelamar serta model diagnostik yang meningkatkan kejelasan peran konsultan hingga +85%.',
    competencies: [
      'Workforce Analytics & Diagnostik Tenaga Kerja',
      'Scorecard Kinerja & Grafik Radar',
      'ROI Kanal Sumber Rekrutmen',
      'Desain Dashboard Eksekutif Power BI',
      'Kalibrasi Psikometri Tervalidasi',
    ],
  },
};

const TESTIMONIALS_ID: Testimonial[] = [
  {
    id: '1',
    name: 'Muhammad Nendi',
    role: 'President Director',
    company: 'PT. Fan Sukses Bersama',
    initials: 'MN',
    rating: 5,
    content:
      'Surya memimpin dan mentransformasi divisi Human Capital kami untuk 110+ personel dengan integritas dan eksekusi yang luar biasa. Inovasi sistem otomasi Matchify yang ia bangun serta struktur KPI yang rapi membawa kedisiplinan operasional dan loyalitas tim yang terukur.',
  },
  {
    id: '2',
    name: 'Titis Praktiknyo',
    role: 'Executive Leadership (Operations & Strategy)',
    company: 'PT Indekstat Konsultan Indonesia',
    initials: 'TP',
    rating: 5,
    content:
      'Surya memiliki kapasitas istimewa dalam mengawinkan strategi operasional berskala besar dengan analisa kuantitatif kebutuhan tenaga kerja. Analisa diagnosis dan kedisiplinan eksekusinya memberikan dampak langsung terhadap kejelasan peran dan produktivitas tim konsultan.',
  },
  {
    id: '3',
    name: 'Haikal Saputra',
    role: 'National Committee',
    company: 'Directorate of Promotion Duta IPB University',
    initials: 'HS',
    rating: 5,
    content:
      'Kemampuan Surya dalam memimpin koordinasi operasional di tingkat nasional pada 27 provinsi dan membawa delegasi meraih Juara 1 PREA 2024 membuktikan kepemimpinan publik, manajerial talenta, dan resiliensi kerjanya yang sangat tangguh.',
  },
];

const PERSONAL_VALUES_ID = [
  {
    num: '01',
    title: 'Berpikir Strategis',
    principle: 'Diagnosis mendahului solusi.',
    description:
      'Melihat jauh melampaui gejala sesaat untuk memahami akar masalah, keterkaitan struktur divisi, dan keberlanjutan organisasi jangka panjang.',
  },
  {
    num: '02',
    title: 'Pendekatan Berbasis Manusia',
    principle: 'Sistem melayani manusia, bukan sebaliknya.',
    description:
      'Menyeimbangkan disiplin bisnis yang tegas dengan empati, komunikasi transparan, psychological safety, dan ruang tumbuh karyawan.',
  },
  {
    num: '03',
    title: 'Pembelajar Berkelanjutan',
    principle: 'Rasa ingin tahu menjaga relevansi.',
    description:
      'Terus menguji metode baru, mulai dari arsitektur SaaS internal hingga pemodelan beban kerja kuantitatif, agar selalu adaptif menghadapi perubahan.',
  },
  {
    num: '04',
    title: 'Keunggulan Eksekusi',
    principle: 'Ide murah harganya; eksekusi adalah segalanya.',
    description:
      'Tindak lanjut yang disiplin, kontrol detail yang teliti, serta ketenangan operasional bahkan ketika memimpin situasi berisiko tinggi.',
  },
];

export function getLocalizedProjects(lang: Language): Project[] {
  if (lang === 'en') return PROJECTS;
  return PROJECTS.map((proj) => {
    const ov = PROJECT_ID_OVERRIDES[proj.id];
    if (!ov) return proj;
    return {
      ...proj,
      title: ov.title ?? proj.title,
      shortSummary: ov.shortSummary ?? proj.shortSummary,
      description: ov.description ?? proj.description,
      features: ov.features ?? proj.features,
      quote: ov.quote ?? proj.quote,
      caseStudy:
        proj.caseStudy && ov.caseStudyOverrides
          ? {
              ...proj.caseStudy,
              ...ov.caseStudyOverrides,
              results: ov.caseStudyOverrides.results ?? proj.caseStudy.results,
            }
          : proj.caseStudy,
    };
  });
}

export function getLocalizedExpertise(lang: Language) {
  if (lang === 'en') return EXPERTISE_AREAS;
  return EXPERTISE_AREAS.map((area) => {
    const ov = EXPERTISE_ID_OVERRIDES[area.id];
    if (!ov) return area;
    return {
      ...area,
      ...ov,
    };
  });
}

export function getLocalizedTestimonials(lang: Language): Testimonial[] {
  return lang === 'id' ? TESTIMONIALS_ID : TESTIMONIALS;
}

export function getLocalizedPersonalValues(lang: Language) {
  return lang === 'id' ? PERSONAL_VALUES_ID : PERSONAL_VALUES;
}

export function getLocalizedBlogPosts(lang: Language): BlogPost[] {
  if (lang === 'en') return BLOG_POSTS;
  return BLOG_POSTS.map((post) => {
    if (post.id === 'zeno-assessment-platform') {
      return {
        ...post,
        summary:
          'Dampak asesmen yang lebih tepat bagi rekrutmen: Bagaimana Zeno mentransformasi tes psikologi konvensional menjadi platform digital interaktif dengan skoring otomatis MBTI, DISC, dan grafik radar.',
      };
    }
    if (post.id === 'slipr-payroll-automation') {
      return {
        ...post,
        summary:
          'Kemudahan kelola slip gaji digital yang aman & transparan: Merancang Slipr dari wireframe hingga produksi dengan integrasi BPJS, TER PPh 21, dan tanda tangan digital.',
      };
    }
    if (post.id === 'custom-hr-automation') {
      return {
        ...post,
        summary:
          'Bagaimana membangun Matchify, jadwal wawancara otomatis, psikotes digital (MBTI & DISC), dan slip gaji otomatis mampu memangkas beban administrasi >60% bagi 110+ karyawan.',
      };
    }
    return post;
  });
}

export function getLocalizedPhotoArchive(lang: Language) {
  if (lang === 'en') {
    return { myself: SURYA_PHOTOS_ARCHIVE, event: EVENT_PHOTOS_ARCHIVE };
  }
  return {
    myself: SURYA_PHOTOS_ARCHIVE.map((p) => {
      if (p.id === 'myself-2') {
        return { ...p, title: 'Sarjana Peternakan (S.Pt.)', subtitle: 'Tonggak Akademik & Kelulusan IPB (2020–2024)' };
      }
      if (p.id === 'myself-6') {
        return { ...p, subtitle: 'Prestasi Akademik & Riset Kuantitatif (IPK 3.65)' };
      }
      if (p.id === 'myself-11') {
        return {
          ...p,
          title: 'Ketua OSIS SMAN 1 Dramaga (Masa Jabatan 2019/2020)',
          subtitle: 'OSKA Nata Nirwashita Sahwahita — Kepemimpinan Eksekutif Pelajar',
        };
      }
      if (p.id === 'myself-12') {
        return {
          ...p,
          title: 'Ketua Umum Forum Komunikasi OSIS Kab. Bogor (2020–2021)',
          subtitle: 'Musyawarah Besar & Amanah Kepemimpinan Pelajar Tingkat Kabupaten Bogor',
        };
      }
      if (p.id === 'myself-13') {
        return {
          ...p,
          title: 'Koordinator Daerah Forum OSIS Jawa Barat Wilayah 1 (2020–2021)',
          subtitle: 'Koordinasi Strategis Jejaring OSIS Jawa Barat Wilayah 1',
        };
      }
      if (p.id === 'myself-14') {
        return {
          ...p,
          title: 'Duta IPB University — Fakultas Peternakan',
          subtitle: 'Representasi Resmi Universitas & Fakultas Peternakan IPB University',
        };
      }
      if (p.id === 'myself-15') {
        return {
          ...p,
          title: 'Forum OSIS Nusantara — Divisi Pengembangan SDM (2021–2022)',
          subtitle: 'Sertifikat Resmi Pengurus Nasional (049/FON/SKt/XI/2021) · Komisi X DPR RI',
        };
      }
      return p;
    }),
    event: EVENT_PHOTOS_ARCHIVE.map((p) => {
      if (p.id === 'event-14') {
        return {
          ...p,
          title: 'Head of Event — IPB OSIS Fest 2024',
          subtitle: 'Kepala Divisi Acara & Pengarah Konferensi Nasional Lintas 27 Provinsi',
        };
      }
      return p;
    }),
  };
}
