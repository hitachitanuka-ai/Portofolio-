import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Search,
  Home,
  Globe,
  GraduationCap,
  MapPin,
  Camera,
  Heart,
  FileText,
  ArrowUpRight,
  CheckCircle2,
  Award,
  Users,
  Landmark,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  X,
} from 'lucide-react';
import { IMAGES } from '../data/portfolioData';
import { AppRoute } from '../types';
import { useLanguage } from '../context/LanguageContext';

export interface OrganizationalMandate {
  id: string;
  year: string;
  period: string;
  role: string;
  shortTitle: string;
  organization: string;
  location: string;
  scope: string;
  category: 'national' | 'campus' | 'regional';
  badge: string;
  summary: string;
  highlights: string[];
  image: string;
  imageLabel: string;
  quote: string;
}

const MANDATES_EN: OrganizationalMandate[] = [
  {
    id: 'org-1',
    year: '2024',
    period: '2024',
    role: 'Head of Event — IPB OSIS Fest 2024',
    shortTitle: 'IPB OSIS Fest 2024',
    organization: 'Directorate of Promotion & Admissions, IPB University',
    location: 'IPB University, Bogor · 27 Provinces',
    scope: 'National Leadership Summit',
    category: 'national',
    badge: 'National Scale (27 Provinces)',
    summary:
      'Directed the organizing committee for a national student leadership summit welcoming student council presidents from 27 Indonesian provinces.',
    highlights: [
      'Led and coordinated 70+ cross-division committee members overseeing event flow, VIP protocol, and live risk mitigation.',
      'Managed budget allocation, strategic partnerships, and direct alignment with IPB University rectorate leadership.',
      'Guided the ESG Digital PR campaign to win 1st Place National at the Public Relations Excellence Awards (PREA) 2024.',
    ],
    image: IMAGES.ipbOsisFestHead2024,
    imageLabel: 'Event Division Team Reveal — Head of Event, IPB OSIS Fest 2024',
    quote:
      'True leadership is the discipline of aligning diverse talents around one shared vision of measurable impact.',
  },
  {
    id: 'org-2',
    year: '2022 – 2024',
    period: '2022 – 2024',
    role: 'Duta IPB University (University Ambassador)',
    shortTitle: 'Duta IPB University',
    organization: 'Institut Pertanian Bogor (IPB University)',
    location: 'Bogor & National Roadshows',
    scope: 'Official Rectorate Ambassador',
    category: 'campus',
    badge: 'Official Campus Ambassador',
    summary:
      'Selected as official university ambassador leading institutional communications, national educational forums, and VIP hospitality.',
    highlights: [
      'Represented IPB University across national education roadshows, higher-education expos, and partnership audiences.',
      'Served as Master of Ceremony (MC) and lead moderator across dozens of rectorate symposia and national seminars.',
      'Built institutional diplomacy bridges linking campus leadership with ministries and corporate partners.',
    ],
    image: IMAGES.dutaIpbPortrait,
    imageLabel: 'Official Duta IPB University Portrait — Faculty of Animal Science (2022–2024)',
    quote:
      'Institutional representation demands character, diplomatic poise, and communication that inspires confidence.',
  },
  {
    id: 'org-3',
    year: '2023 – 2024',
    period: '2023 – 2024',
    role: 'Head of Human Resources / HR of Student',
    shortTitle: 'BEM Fapet IPB · HR Lead',
    organization: 'BEM Faculty of Animal Science, IPB University',
    location: 'IPB Dramaga, Bogor',
    scope: 'Executive Student Board',
    category: 'campus',
    badge: 'Talent & Culture Lead',
    summary:
      'Led the student HR department in structuring recruitment assessments, member retention, performance tracking, and internal climate.',
    highlights: [
      'Designed cultural-fit recruitment and structured onboarding workflows for incoming organization officers.',
      'Launched periodic organizational pulse surveys to track member engagement and board effectiveness.',
      'Sustained 92% officer retention and satisfaction throughout the tenure cycle.',
    ],
    image: IMAGES.eventFapetIpbStage,
    imageLabel: 'Faculty of Animal Science Student Delegation & Leadership Stage',
    quote:
      'Organizations grow not through titles on a chart, but through how clearly each member feels valued and guided.',
  },
  {
    id: 'org-4',
    year: '2021 – 2022',
    period: '2021 – 2022',
    role: 'Divisi Pengembangan Sumber Daya Manusia — Forum OSIS Nusantara',
    shortTitle: 'Forum OSIS Nusantara',
    organization: 'Forum OSIS Nusantara (Forum OSIS Nasional · Komisi X DPR RI)',
    location: 'Jakarta · Skala Nasional',
    scope: 'National Executive Board',
    category: 'national',
    badge: 'National Executive Mandate',
    summary:
      'Served on the national executive board of Forum OSIS Nusantara (Forum OSIS Nasional) for the 2021–2022 term in the Human Resources Development Division, certified with Komisi X DPR RI.',
    highlights: [
      'Directed national student leader human resource development, cadre regeneration, and cross-province onboarding programs (2021–2022).',
      'Designed structured competency development and mentoring frameworks uniting regional OSIS forums across Indonesia.',
      'Officially recognized via Certificate No. 049/FON/SKt/XI/2021 endorsed by the Chairman of Komisi X DPR RI on 1 November 2021.',
    ],
    image: IMAGES.fonCertificate2021,
    imageLabel: 'Official Certificate (049/FON/SKt/XI/2021) — Human Resources Development Division, Forum OSIS Nusantara 2021/2022',
    quote:
      'Developing young leaders across the archipelago requires structured mentorship, shared standards, and steadfast national stewardship.',
  },
  {
    id: 'org-fojb',
    year: '2020 – 2021',
    period: '2020 – 2021',
    role: 'Regional Coordinator Region 1 — Forum OSIS Jawa Barat',
    shortTitle: 'Forum OSIS Jawa Barat · Wil. 1',
    organization: 'Forum OSIS Jawa Barat (FOJB Wilayah 1)',
    location: 'West Java (Region 1)',
    scope: 'Provincial Regional Governance',
    category: 'regional',
    badge: 'Regional Coordinator',
    summary:
      'Served as Regional Coordinator for Region 1 of Forum OSIS Jawa Barat (2020–2021), synchronizing student leadership development and cross-city forums.',
    highlights: [
      'Coordinated inter-district student council leadership alignment across Region 1 West Java.',
      'Facilitated regional leadership summits, youth civic engagement, and communication channels with provincial board.',
      'Anchored collaborative regional initiatives bridging district OSIS forums into West Java student leadership programs.',
    ],
    image: IMAGES.fojbKorda2020,
    imageLabel: 'Regional Coordinator Region 1 — Forum OSIS Jawa Barat (Term 2020–2021)',
    quote:
      'Regional coordination turns isolated school initiatives into a unified voice for West Java youth.',
  },
  {
    id: 'org-fkokb',
    year: '2020 – 2021',
    period: '2020 – 2021',
    role: 'President — Forum Komunikasi OSIS Kabupaten Bogor',
    shortTitle: 'FKOKB Kabupaten Bogor',
    organization: 'Forum Komunikasi OSIS Kabupaten Bogor (FKOKB)',
    location: 'Kabupaten Bogor, West Java',
    scope: 'District Coalition Governance',
    category: 'regional',
    badge: 'District Chairman',
    summary:
      'Elected President (Ketua Umum) of Forum Komunikasi OSIS Kabupaten Bogor for the 2020–2021 term, uniting high school student councils across Bogor Regency.',
    highlights: [
      'Led the district-wide coalition uniting high school OSIS executives across 40 sub-districts in Bogor Regency.',
      'Directed Musyawarah Besar transitions, district leadership regeneration, and cross-school social & educational programs.',
      'Represented Bogor Regency student councils in provincial dialogues and civic youth partnerships.',
    ],
    image: IMAGES.fkokbChairman2020,
    imageLabel: 'Mandate Handover — President of Forum Komunikasi OSIS Kabupaten Bogor (2020–2021)',
    quote:
      'Stewarding a district-wide coalition begins with trust, transparent mandate governance, and shared purpose.',
  },
  {
    id: 'org-5',
    year: '2019 – 2020',
    period: '2019 – 2020',
    role: 'Student Council President — SMAN 1 Dramaga',
    shortTitle: 'Ketua OSIS SMAN 1 Dramaga',
    organization: 'OSIS SMAN 1 Dramaga (OSKA · Nata Nirwashita Sahwahita)',
    location: 'Dramaga, Kab. Bogor',
    scope: 'Executive Student Governance',
    category: 'regional',
    badge: 'Best Student President Award',
    summary:
      'Led the OSKA Nata Nirwashita Sahwahita executive student council at SMAN 1 Dramaga for the 2019/2020 term, driving digital program transformation.',
    highlights: [
      'Pioneered hybrid and digital student initiatives, boosting extracurricular participation by 140%.',
      'Maintained constructive alignment across school faculty, alumni networks, and external student councils.',
      'Awarded The Best Student Council President for student communication digitalization.',
    ],
    image: IMAGES.osisChairman2019,
    imageLabel: 'Student Council President & Vice President, SMAN 1 Dramaga (Term 2019/2020)',
    quote:
      'Leadership foundations begin with integrity, quiet service, and consistency in daily execution.',
  },
];

const MANDATES_ID: OrganizationalMandate[] = [
  {
    id: 'org-1',
    year: '2024',
    period: '2024',
    role: 'Head of Event — IPB OSIS Fest 2024',
    shortTitle: 'IPB OSIS Fest 2024',
    organization: 'Direktorat Promosi & Penerimaan Mahasiswa Baru IPB University',
    location: 'IPB University, Bogor · 27 Provinsi',
    scope: 'Konferensi Kepemimpinan Nasional',
    category: 'national',
    badge: 'Tingkat Nasional (27 Provinsi)',
    summary:
      'Memimpin kepanitiaan akbar konferensi kepemimpinan pelajar nasional dengan delegasi ketua OSIS dari 27 provinsi di Indonesia.',
    highlights: [
      'Memimpin dan mengkoordinasikan lebih dari 70 panitia lintas divisi dalam merancang alur acara, protokol tamu kehormatan, dan mitigasi krisis.',
      'Mengelola alokasi anggaran, kemitraan strategis, dan koordinasi langsung dengan pimpinan rektorat IPB University.',
      'Membawa kampanye meraih Juara 1 Nasional Digital PR (ESG Theme) di ajang Public Relations Excellence Awards (PREA) 2024.',
    ],
    image: IMAGES.ipbOsisFestHead2024,
    imageLabel: 'Team Reveal Divisi Acara — Head of Event IPB OSIS Fest 2024',
    quote:
      'Kepemimpinan sejati adalah kemampuan mengorkestrasi keberagaman talenta menuju satu visi dampak yang nyata.',
  },
  {
    id: 'org-2',
    year: '2022 – 2024',
    period: '2022 – 2024',
    role: 'Duta IPB University (University Ambassador)',
    shortTitle: 'Duta IPB University',
    organization: 'Institut Pertanian Bogor (IPB University)',
    location: 'Bogor & Roadshow Nasional',
    scope: 'Representasi Resmi Rektorat',
    category: 'campus',
    badge: 'Duta Resmi Kampus',
    summary:
      'Terpilih sebagai duta resmi universitas untuk memimpin komunikasi publik, representasi institusi pada forum nasional, dan penerimaan tamu VIP.',
    highlights: [
      'Mewakili IPB University dalam roadshow edukasi nasional, expo perguruan tinggi, dan audiensi kemitraan institusional.',
      'Bertindak sebagai Master of Ceremony (MC) dan moderator utama pada puluhan simposium rektorat dan seminar nasional.',
      'Membangun jejaring diplomasi kampus dengan berbagai kementerian, mitra industri, dan pemangku kepentingan publik.',
    ],
    image: IMAGES.dutaIpbPortrait,
    imageLabel: 'Profil Resmi Duta IPB University — Fakultas Peternakan (2022–2024)',
    quote:
      'Representasi institusi menuntut keteladanan, etika diplomasi, dan kemampuan bertutur yang menginspirasi.',
  },
  {
    id: 'org-3',
    year: '2023 – 2024',
    period: '2023 – 2024',
    role: 'Head of Human Resources / HR of Student',
    shortTitle: 'BEM Fapet IPB · Kepala SDM',
    organization: 'BEM Fakultas Peternakan IPB University',
    location: 'IPB Dramaga, Bogor',
    scope: 'Pengurus Harian Fakultas',
    category: 'campus',
    badge: 'Kepala Departemen SDM',
    summary:
      'Memimpin departemen SDM mahasiswa dalam merancang program rekrutmen, retensi, penilaian kinerja, dan iklim internal organisasi.',
    highlights: [
      'Merancang sistem rekrutmen dan orientasi kerja staf organisasi berbasis asesmen kesesuaian nilai (cultural fit).',
      'Mengembangkan survei iklim organisasi (pulse survey) untuk mengidentifikasi kepuasan anggota dan efektivitas kepengurusan.',
      'Meningkatkan angka retensi dan kepuasan pengurus hingga 92% sepanjang periode kerja.',
    ],
    image: IMAGES.eventFapetIpbStage,
    imageLabel: 'Delegasi Mahasiswa Fakultas Peternakan IPB University',
    quote:
      'Organisasi bertumbuh bukan dari struktur kertasnya, melainkan dari rasa dihargai yang dirasakan setiap anggotanya.',
  },
  {
    id: 'org-4',
    year: '2021 – 2022',
    period: '2021 – 2022',
    role: 'Divisi Pengembangan Sumber Daya Manusia — Forum OSIS Nusantara',
    shortTitle: 'Forum OSIS Nusantara',
    organization: 'Forum OSIS Nusantara (Forum OSIS Nasional · Komisi X DPR RI)',
    location: 'Jakarta · Skala Nasional',
    scope: 'Pengurus Nasional (2021–2022)',
    category: 'national',
    badge: 'Pengurus Nasional · Divisi PSDM',
    summary:
      'Mengemban amanah sebagai pengurus pusat Forum OSIS Nusantara (Forum OSIS Nasional) masa bakti 2021–2022 pada Divisi Pengembangan Sumber Daya Manusia yang disahkan bersama Ketua Komisi X DPR RI.',
    highlights: [
      'Mengelola program pengembangan sumber daya manusia, kaderisasi, dan penguatan kapasitas pengurus pelajar lintas provinsi se-Indonesia.',
      'Menyusun kerangka pembinaan kepemimpinan serta pendampingan pengurus daerah untuk menjaga kesinambungan organisasi nasional.',
      'Memperoleh sertifikat pengabdian resmi bernomor 049/FON/SKt/XI/2021 yang ditandatangani Ketua Komisi X DPR RI pada 1 November 2021.',
    ],
    image: IMAGES.fonCertificate2021,
    imageLabel: 'Sertifikat Resmi (049/FON/SKt/XI/2021) — Divisi Pengembangan SDM, Forum OSIS Nusantara 2021/2022',
    quote:
      'Mengembangkan kapasitas pemimpin muda Nusantara menuntut sistem pembinaan yang terukur, kolaboratif, dan berkelanjutan.',
  },
  {
    id: 'org-fojb',
    year: '2020 – 2021',
    period: '2020 – 2021',
    role: 'Koordinator Daerah Wilayah 1 — Forum OSIS Jawa Barat',
    shortTitle: 'Forum OSIS Jawa Barat · Wil. 1',
    organization: 'Forum OSIS Jawa Barat (FOJB Wilayah 1)',
    location: 'Jawa Barat (Wilayah 1)',
    scope: 'Kepemimpinan Tingkat Provinsi',
    category: 'regional',
    badge: 'Koordinator Daerah Wilayah 1',
    summary:
      'Mengemban amanah sebagai Koordinator Daerah Forum OSIS Jawa Barat Wilayah 1 periode 2020–2021 dalam mengoordinasikan komunikasi, kaderisasi, dan program strategis pelajar lintas daerah.',
    highlights: [
      'Mengoordinasikan sinergi forum OSIS kota/kabupaten di Wilayah 1 Jawa Barat secara terstruktur.',
      'Memfasilitasi pertemuan konsolidasi pemimpin muda, kaderisasi kepemimpinan, dan pelibatan aspirasi pelajar tingkat provinsi.',
      'Menjadi jembatan koordinasi antara pengurus daerah dengan kepengurusan pusat Forum OSIS Jawa Barat.',
    ],
    image: IMAGES.fojbKorda2020,
    imageLabel: 'Koordinator Daerah Forum OSIS Jawa Barat Wilayah 1 (Periode 2020–2021)',
    quote:
      'Koordinasi wilayah menyatukan gerakan pelajar antar-daerah menjadi kekuatan kolaboratif tingkat provinsi.',
  },
  {
    id: 'org-fkokb',
    year: '2020 – 2021',
    period: '2020 – 2021',
    role: 'Ketua Umum — Forum Komunikasi OSIS Kabupaten Bogor',
    shortTitle: 'FKOKB Kabupaten Bogor',
    organization: 'Forum Komunikasi OSIS Kabupaten Bogor (FKOKB)',
    location: 'Kabupaten Bogor, Jawa Barat',
    scope: 'Koalisi OSIS Se-Kabupaten Bogor',
    category: 'regional',
    badge: 'Ketua Umum FKOKB',
    summary:
      'Terpilih sebagai Ketua Umum Forum Komunikasi OSIS Kabupaten Bogor periode 2020–2021 untuk menghimpun, memberdayakan, dan mengorkestrasi gerakan OSIS SMA/sederajat se-Kabupaten Bogor.',
    highlights: [
      'Memimpin forum komunikasi pelajar yang menaungi jajaran pengurus OSIS SMA/SMK/MA se-Kabupaten Bogor.',
      'Mengawal estafet kepemimpinan melalui Musyawarah Besar serta mengoordinasikan program kaderisasi dan sosial pelajar.',
      'Mewakili suara pelajar Kabupaten Bogor pada forum dialog kepemudaan daerah hingga tingkat Jawa Barat.',
    ],
    image: IMAGES.fkokbChairman2020,
    imageLabel: 'Serah Terima Mandat Ketua Umum Forum Komunikasi OSIS Kabupaten Bogor (2020–2021)',
    quote:
      'Memimpin koalisi lintas sekolah menuntut integritas, kejelasan mandat, dan kepedulian pada regenerasi.',
  },
  {
    id: 'org-5',
    year: '2019 – 2020',
    period: '2019 – 2020',
    role: 'Ketua OSIS SMAN 1 Dramaga (Masa Jabatan 2019/2020)',
    shortTitle: 'Ketua OSIS SMAN 1 Dramaga',
    organization: 'OSIS SMAN 1 Dramaga (OSKA · Nata Nirwashita Sahwahita)',
    location: 'Dramaga, Kab. Bogor',
    scope: 'Kepemimpinan Eksekutif Siswa',
    category: 'regional',
    badge: 'Ketua OSIS Terbaik',
    summary:
      'Memimpin kepengurusan OSIS SMAN 1 Dramaga masa jabatan 2019/2020 (Kabinet Nata Nirwashita Sahwahita), menginisiasi transformasi program kerja digital, dan mengadvokasi aspirasi siswa.',
    highlights: [
      'Mentransformasi program kerja OSIS ke platform digital dan meningkatkan partisipasi kegiatan hingga +140%.',
      'Membina kolaborasi harmonis dengan dewan guru, alumni, dan organisasi kesiswaan eksternal.',
      'Meraih predikat Ketua OSIS Terbaik atas terobosan digitalisasi komunikasi kesiswaan.',
    ],
    image: IMAGES.osisChairman2019,
    imageLabel: 'Ketua & Wakil Ketua OSIS SMAN 1 Dramaga Masa Jabatan 2019/2020 (Nata Nirwashita Sahwahita)',
    quote:
      'Fondasi kepemimpinan dimulai dari integritas, ketulusan melayani, dan konsistensi dalam tindakan kecil.',
  },
];

type CategoryFilter = 'all' | 'national' | 'campus' | 'regional';

interface OrganizationalExplorerProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
  compactHeader?: boolean;
}

export const OrganizationalExplorer: React.FC<OrganizationalExplorerProps> = ({
  onNavigate,
}) => {
  const { lang, t } = useLanguage();
  const mandates = lang === 'id' ? MANDATES_ID : MANDATES_EN;

  const [selectedId, setSelectedId] = useState<string>('org-1');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['org-1', 'org-2']);
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);
  const [showDeliverablesDrawer, setShowDeliverablesDrawer] = useState<boolean>(false);

  const filteredMandates = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return mandates.filter((m) => {
      if (categoryFilter !== 'all' && m.category !== categoryFilter) return false;
      if (showSavedOnly && !bookmarkedIds.includes(m.id)) return false;
      if (!q) return true;
      return (
        m.role.toLowerCase().includes(q) ||
        m.shortTitle.toLowerCase().includes(q) ||
        m.organization.toLowerCase().includes(q) ||
        m.year.toLowerCase().includes(q) ||
        m.location.toLowerCase().includes(q)
      );
    });
  }, [mandates, categoryFilter, searchQuery, showSavedOnly, bookmarkedIds]);

  const activeMandate =
    mandates.find((m) => m.id === selectedId) ||
    filteredMandates[0] ||
    mandates[0];

  const isSaved = bookmarkedIds.includes(activeMandate.id);

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetAllFilters = () => {
    setCategoryFilter('all');
    setSearchQuery('');
    setShowSavedOnly(false);
  };

  const getMandateIcon = (id: string) => {
    switch (id) {
      case 'org-1':
        return Award;
      case 'org-2':
        return Globe;
      case 'org-3':
        return Users;
      case 'org-4':
        return GraduationCap;
      case 'org-fojb':
        return MapPin;
      case 'org-fkokb':
        return Landmark;
      default:
        return ShieldCheck;
    }
  };

  const railItems: {
    id: CategoryFilter;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
  }[] = [
    { id: 'all', icon: Home, label: t('All Mandates', 'Semua Amanah') },
    { id: 'national', icon: Globe, label: t('National Scale', 'Skala Nasional') },
    { id: 'campus', icon: GraduationCap, label: t('IPB University', 'Kampus IPB') },
    { id: 'regional', icon: Landmark, label: t('Province & District OSIS', 'Provinsi, Kab. & OSIS') },
  ];

  return (
    <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-[#FBF8F3] via-[#F4EFE7] to-[#EDF2EC] border border-[#DFD5C8] shadow-[0_24px_60px_-20px_rgba(30,32,34,0.12)] overflow-hidden p-3.5 sm:p-5 lg:p-6 text-[#1E2022]">
      {/* Subtle Ambient Warm Cream / Sage Glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#AF8C72]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#6E7C69]/15 blur-3xl" />

      {/* =========================================================================
          TOP EXPLORER UTILITY BAR (Cream, Sage & Light Brown Glass Chrome)
          ========================================================================= */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-3 border-b border-[#DFD5C8]/80">
        {/* Left Identity Lockup */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-[#AF8C72]/60 shadow-xs shrink-0 bg-[#EFE7DC]">
            <img
              src={IMAGES.suryaOriginal}
              alt="Bangkit Surya Wijaya"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="min-w-0">
            <span className="font-sans font-bold text-sm sm:text-base text-[#1E2022] block truncate">
              {t('Organizational Explorer', 'Jelajah Organisasi')}
            </span>
          </div>
        </div>

        {/* Center Live Search Input */}
        <div className="relative flex-1 max-w-md w-full">
          <Search className="w-3.5 h-3.5 text-[#9E7B62] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t(
              'Search organization, role, or period...',
              'Cari organisasi, jabatan, atau periode...'
            )}
            aria-label={t('Search organizational mandates', 'Cari amanah organisasi')}
            className="w-full pl-9 pr-8 py-2 rounded-full bg-white/85 border border-[#DFD5C8] text-xs text-[#1E2022] placeholder:text-[#8F8476] focus:outline-none focus:border-[#6E7C69] focus:bg-white transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              aria-label={t('Clear search', 'Hapus pencarian')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#9E7B62] hover:text-[#1E2022] cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Right Functional Actions */}
        <div className="flex items-center justify-end gap-2 shrink-0">
          <button
            onClick={() => setShowSavedOnly((prev) => !prev)}
            title={t('Filter saved highlights', 'Tampilkan amanah tersimpan')}
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors cursor-pointer relative ${
              showSavedOnly
                ? 'bg-[#AF8C72] text-white border-[#AF8C72] shadow-xs'
                : 'bg-white/85 text-[#605E59] border-[#DFD5C8] hover:border-[#AF8C72] hover:text-[#1E2022]'
            }`}
          >
            <Heart className={`w-4 h-4 ${showSavedOnly ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={() => setShowDeliverablesDrawer((prev) => !prev)}
            title={t('Toggle field deliverables inside featured card', 'Tampilkan ringkasan dampak di kartu utama')}
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors cursor-pointer ${
              showDeliverablesDrawer
                ? 'bg-[#6E7C69] text-white border-[#6E7C69] shadow-xs'
                : 'bg-white/85 text-[#605E59] border-[#DFD5C8] hover:border-[#6E7C69] hover:text-[#1E2022]'
            }`}
          >
            <FileText className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('archive')}
            title={t('Open Visual Archive', 'Buka Visual Archive')}
            className="h-9 px-3 rounded-full bg-white/85 hover:bg-[#1E2022] text-[#1E2022] hover:text-white border border-[#DFD5C8] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap shrink-0"
          >
            <Camera className="w-3.5 h-3.5 text-[#AF8C72]" />
            <span className="hidden md:inline">{t('Archive', 'Galeri')}</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          BODY SHELL: LEFT ICON RAIL + 2-COLUMN SPLIT (FEATURED HERO + DIRECTORY)
          ========================================================================= */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-4 lg:gap-5 items-stretch">
        {/* LEFT VERTICAL NAVIGATION RAIL (Horizontal Bar on Mobile, Vertical Rail on Desktop) */}
        <div
          role="tablist"
          aria-label={t('Filter mandates by scale', 'Filter amanah berdasarkan skala')}
          className="flex lg:flex-col items-center justify-between lg:justify-start gap-2 p-2 rounded-2xl lg:rounded-3xl bg-[#EFE9DF]/85 border border-[#DFD5C8] shrink-0 overflow-x-auto"
        >
          {railItems.map((item) => {
            const IconComp = item.icon;
            const isActive = categoryFilter === item.id && !showSavedOnly;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                title={item.label}
                onClick={() => {
                  setCategoryFilter(item.id);
                  setShowSavedOnly(false);
                }}
                className={`flex items-center gap-2 lg:justify-center px-3 py-2 lg:p-0 lg:w-10 lg:h-10 rounded-full transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#AF8C72] text-white shadow-sm'
                    : 'text-[#605E59] hover:bg-white/90 hover:text-[#1E2022]'
                }`}
              >
                <IconComp className="w-4 h-4 shrink-0" />
                <span className="text-[11px] font-semibold whitespace-nowrap lg:hidden">
                  {item.label}
                </span>
              </button>
            );
          })}

          <div className="hidden lg:block w-6 h-px bg-[#DFD5C8] my-1" />

          <button
            onClick={() => onNavigate('archive')}
            title={t('Open Photographic Archive', 'Buka Visual Archive')}
            className="hidden lg:flex w-10 h-10 rounded-full items-center justify-center text-[#6E7C69] hover:bg-[#6E7C69] hover:text-white transition-colors cursor-pointer"
          >
            <Camera className="w-4 h-4" />
          </button>
        </div>

        {/* CENTER + RIGHT SPLIT WORKSPACE */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch min-w-0">
          {/* =====================================================================
              LEFT FEATURED HERO PHOTO CARD (Inspired by Agra Showcase Card)
              ===================================================================== */}
          <div className="lg:col-span-6 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMandate.id}
                initial={{ opacity: 0.75, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.75 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative w-full min-h-[400px] sm:min-h-[460px] lg:min-h-[520px] rounded-[1.5rem] sm:rounded-[1.75rem] overflow-hidden border border-[#DFD5C8] bg-[#1E2022] shadow-md flex flex-col justify-between p-5 sm:p-6 text-white"
              >
                {/* Full-Bleed Background Image */}
                <img
                  src={activeMandate.image}
                  alt={activeMandate.role}
                  referrerPolicy="no-referrer"
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                    activeMandate.id === 'org-4' ? 'object-center' : 'object-top'
                  }`}
                />

                {/* Warm Charcoal / Olive Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#16191D]/90 via-[#16191D]/35 to-[#16191D]/92 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#16191D]/65 via-transparent to-transparent pointer-events-none" />

                {/* Top Content Stack: Headline, Scope, Summary, Metric Readout */}
                <div className="relative z-10 space-y-3 max-w-md">
                  <div className="space-y-1">
                    <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-[2rem] text-white tracking-tight leading-[1.12] text-balance">
                      {activeMandate.shortTitle}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#EFE4D6] font-medium">
                      <span>{activeMandate.period}</span>
                      <span aria-hidden="true">·</span>
                      <span>{activeMandate.scope}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#F3EFEA]/90 font-light leading-relaxed">
                    {activeMandate.summary}
                  </p>

                  {/* Weather-style Highlight Metric Callout */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-9 h-9 rounded-full bg-[#AF8C72]/25 border border-[#AF8C72]/50 backdrop-blur-md flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-[#EFE4D6]" />
                    </div>
                    <div>
                      <span className="font-sans font-bold text-sm text-white block leading-tight">
                        {activeMandate.badge}
                      </span>
                      <span className="font-mono text-[11px] text-[#D7DFD5] block">
                        {activeMandate.role}
                      </span>
                    </div>
                  </div>

                  {/* Optional Frosted Deliverables Overlay when toggled */}
                  {showDeliverablesDrawer && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 p-3.5 rounded-2xl bg-[#1E2022]/80 backdrop-blur-md border border-white/15 space-y-2"
                    >
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#AF8C72] font-bold block">
                        {t('Key Deliverables & Impact', 'Hasil & Dampak Utama')}
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#F3EFEA]">
                        {activeMandate.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#8EA188] shrink-0 mt-0.5" />
                            <span className="leading-snug">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>

                {/* Bottom Frosted Location / Action Card (Mirrors Taj Mahal Bottom Bar) */}
                <div className="relative z-10 mt-6 rounded-2xl bg-[#1E2022]/75 backdrop-blur-md border border-white/15 p-3 sm:p-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-[#6E7C69]/35 border border-white/15 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#EFE4D6]" />
                    </div>
                    <div className="min-w-0">
                      <strong className="font-sans font-bold text-xs sm:text-sm text-white block truncate">
                        {activeMandate.organization}
                      </strong>
                      <span className="text-[11px] text-[#E8DFD4]/85 block truncate">
                        {activeMandate.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={(e) => toggleBookmark(activeMandate.id, e)}
                      aria-label={t('Bookmark mandate', 'Simpan amanah')}
                      className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors cursor-pointer ${
                        isSaved
                          ? 'bg-[#AF8C72] text-white border-[#AF8C72]'
                          : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>

                    <button
                      onClick={() => setShowDeliverablesDrawer((prev) => !prev)}
                      aria-label={t('Inspect deliverables', 'Lihat detail dampak')}
                      className="w-9 h-9 rounded-full bg-[#6E7C69] hover:bg-[#5B6956] text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =====================================================================
              RIGHT DIRECTORY LIST (Inspired by "Must-See Destinations")
              ===================================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-between min-w-0">
            <div>
              {/* Section Header + "View all" Control */}
              <div className="flex items-center justify-between gap-3 mb-3.5 px-1">
                <h3 className="font-sans font-bold text-base sm:text-lg text-[#1E2022] tracking-tight">
                  {t('Leadership Mandates', 'Daftar Amanah Organisasi')}
                </h3>
                <button
                  onClick={resetAllFilters}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 hover:bg-[#1E2022] text-[#1E2022] hover:text-white border border-[#DFD5C8] text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>
                    {t(`View all (${mandates.length})`, `Lihat semua (${mandates.length})`)}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Scrollable / Compact Interactive Rows */}
              {filteredMandates.length === 0 ? (
                <div className="p-8 rounded-2xl bg-white/80 border border-[#DFD5C8] text-center space-y-2">
                  <p className="text-sm font-semibold text-[#1E2022]">
                    {t('No matching organizational mandates found.', 'Tidak ada amanah organisasi yang cocok.')}
                  </p>
                  <button
                    onClick={resetAllFilters}
                    className="px-4 py-1.5 rounded-full bg-[#6E7C69] text-white text-xs font-semibold cursor-pointer"
                  >
                    {t('Reset Filters', 'Atur Ulang Filter')}
                  </button>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {filteredMandates.map((item) => {
                    const isActive = item.id === activeMandate.id;
                    const RowIcon = getMandateIcon(item.id);
                    return (
                      <div
                        key={item.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedId(item.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setSelectedId(item.id);
                          }
                        }}
                        className={`group p-2.5 sm:p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isActive
                            ? 'bg-white border-[#6E7C69] shadow-sm ring-1 ring-[#6E7C69]/20'
                            : 'bg-white/65 hover:bg-white border-[#E7E0D6] hover:border-[#AF8C72]'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          {/* Square Rounded Photo Thumbnail */}
                          <div
                            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border bg-[#1E2022] ${
                              isActive ? 'border-[#6E7C69]' : 'border-[#DFD5C8]'
                            }`}
                          >
                            <img
                              src={item.image}
                              alt={item.shortTitle}
                              referrerPolicy="no-referrer"
                              className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                                item.id === 'org-4' ? 'object-center' : 'object-top'
                              }`}
                            />
                          </div>

                          {/* Title, Subtitle & Location Metadata */}
                          <div className="min-w-0 flex-1">
                            <h4
                              className={`font-sans font-bold text-sm sm:text-[15px] leading-snug truncate transition-colors ${
                                isActive ? 'text-[#4F5D4A]' : 'text-[#1E2022]'
                              }`}
                            >
                              {item.shortTitle}
                            </h4>
                            <p className="text-xs text-[#605E59] truncate mt-0.5">
                              {item.organization}
                            </p>
                            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#9E7B62] mt-1 truncate">
                              <MapPin className="w-3 h-3 text-[#AF8C72] shrink-0" />
                              <span className="truncate">
                                {item.period} · {item.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Trailing Icon Button */}
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors border ${
                            isActive
                              ? 'bg-[#6E7C69] text-white border-[#6E7C69]'
                              : 'bg-[#F3EFEA] text-[#605E59] border-[#E7E0D6] group-hover:bg-[#AF8C72] group-hover:text-white group-hover:border-[#AF8C72]'
                          }`}
                        >
                          <RowIcon className="w-4 h-4" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          INTEGRATED ACTIVE MANDATE DELIVERABLES & REFLECTION STRIP
          ========================================================================= */}
      <div className="relative z-10 mt-4 pt-4 border-t border-[#DFD5C8] grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-7 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#AF8C72] font-bold">
              {t('Verified Deliverables & Field Impact', 'Hasil Kerja & Dampak Lapangan')}
            </span>
            <span className="text-[11px] font-mono text-[#6E7C69] font-semibold">
              {activeMandate.role}
            </span>
          </div>
          <ul className="space-y-1.5 text-xs text-[#1E2022]">
            {activeMandate.highlights.map((hl, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6E7C69] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[#4A4843]">{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between gap-3 p-4 rounded-2xl bg-white/80 border border-[#DFD5C8]">
          <p className="text-xs italic text-[#4A4843] font-light leading-relaxed">
            "{activeMandate.quote}"
          </p>
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#E7E0D6]">
            <span className="text-[11px] font-mono text-[#9E7B62] truncate">
              {activeMandate.imageLabel}
            </span>
            <button
              onClick={() => onNavigate('archive')}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#6E7C69] hover:text-[#1E2022] transition-colors cursor-pointer shrink-0"
            >
              <span>{t('Open Visual Archive', 'Buka Galeri')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#AF8C72]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
