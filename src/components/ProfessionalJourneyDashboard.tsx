import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Users, 
  Award, 
  BarChart3, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Calendar, 
  MapPin, 
  ArrowUpRight, 
  ChevronLeft,
  ChevronRight, 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Wrench, 
  FileText, 
  GraduationCap, 
  Trophy, 
  HeartHandshake,
  Compass,
  Zap,
  Clock,
  TrendingUp,
  LayoutGrid,
  Calculator,
  Target,
  Scale,
  FileCheck2,
  Wallet,
  ClipboardCheck,
  Handshake,
  ShieldAlert,
  Radio,
  GitBranch,
  Mic,
  Network,
  Heart,
  UserCheck,
  Lock,
  BrainCircuit,
  Cloud,
  PieChart,
  FileSpreadsheet,
  Code2,
  PenTool,
  BookOpen,
  Workflow,
  Kanban,
} from 'lucide-react';
import { IMAGES } from '../data/portfolioData';
import { AppRoute } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface ProfessionalJourneyDashboardProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
  onOpenResume: () => void;
}

// =========================================================================
// DATA: Corporate & Working Roles
// =========================================================================
const WORKING_ROLES = [
  {
    id: 'work-1',
    role: 'People and Culture Lead',
    company: 'PT. Fan Sukses Bersama',
    period: 'Apr 2026 – Present',
    badge: 'Current Executive Role',
    type: 'Full-time · Corporate',
    scope: '110+ Full-Time Personnel · Sole HR Lead',
    summary: 'Directing full-spectrum Human Capital, managing employee welfare, regulatory BPJS compliance, and building in-house digital automation suites.',
    responsibilities: [
      'Directing full-lifecycle recruitment, candidate screening rubrics, and automated onboarding workflows.',
      'Ensuring statutory labor compliance for BPJS Ketenagakerjaan & BPJS Kesehatan with zero legal infractions.',
      'Cascading division-level OKRs into individual contributor KPI scorecards with calibrated appraisal cycles.',
      'Architecting custom internal automation systems (Matchify RMS, Slipr Payroll, Zeno Assessment).'
    ],
    metrics: [
      { label: 'Payroll Cycle', value: '-75%', detail: 'Dari 3 hari ke <1 jam' },
      { label: 'Time-to-Hire', value: '-60%', detail: 'Dari 43 ke 17.2 hari' },
      { label: 'Compliance', value: '100%', detail: 'Zero infractions' }
    ],
    toolsApplied: ['Matchify RMS', 'Slipr Payroll', 'Zeno AI', 'Notion', 'Google Workspace'],
    image: IMAGES.eventMeetingDinner,
  },
  {
    id: 'work-2',
    role: 'Project Analyst',
    company: 'PT. Rakamin Kolektif Madani',
    period: 'Dec 2025 – Mar 2026',
    badge: 'Change Management Advisory',
    type: 'Project / Advisory',
    scope: 'Cross-Functional Org Strategy & C-Suite Telemetry',
    summary: 'Synthesizing organizational complexity into executive C-suite Power BI dashboards and authoring the Corporate Leadership Handbook through structure audits.',
    responsibilities: [
      'Auditing cross-functional organizational workflows to identify structural bottlenecks and role ambiguities.',
      'Synthesizing headcount capacity and workload planning models for board-level decision makers.',
      'Authoring and standardizing the Corporate Leadership Handbook establishing clear governance & delegation RACI matrices.'
    ],
    metrics: [
      { label: 'Role Clarity', value: '100%', detail: 'Aligned across all leads' },
      { label: 'Reporting Velocity', value: '+40%', detail: 'Automated telemetry' },
      { label: 'Handbook', value: 'Adopted', detail: 'Enterprise-wide' }
    ],
    toolsApplied: ['Power BI', 'Org Design RACI', 'Looker Studio', 'C-Suite Handbooks'],
  },
  {
    id: 'work-3',
    role: 'Human Capital Management Officer',
    company: 'PT. Indekstat Konsultan Indonesia',
    period: 'Sep 2024 – Dec 2024',
    badge: 'National MSIB Program',
    type: 'Professional Practice',
    scope: '35 Technical & Research Consultants',
    summary: 'Pioneered quantitative Workforce Needs Analysis (WNA) and designed standardized competency matrices for research consultants.',
    responsibilities: [
      'Conducting quantitative Workforce Needs Analysis (WNA) via structured empirical time-motion interviews.',
      'Formulating 5-tier competency rubrics, restructured job descriptions, and salary benchmarks.',
      'Optimizing candidate pipeline data tracking and standardized onboarding curricula.'
    ],
    metrics: [
      { label: 'Role Clarity', value: '+85%', detail: 'Post-program verified' },
      { label: 'Competencies', value: '5 Tiers', detail: 'Standardized rubrics' },
      { label: 'Consultants', value: '35 Staff', detail: 'Mapped end-to-end' }
    ],
    toolsApplied: ['WNA Time Studies', 'Competency Matrix', 'Excel Advanced', 'Job Grading'],
  },
  {
    id: 'work-4',
    role: 'Operations Lead & Event Coordinator',
    company: 'Sakala Wedding & Lamaran.yok',
    period: 'Sep 2025 – Present',
    badge: 'High-Stakes Live Logistics',
    type: 'Operations Leadership',
    scope: '50+ Major Luxury Productions · Up to 2,000+ Guests',
    summary: 'Orchestrating end-to-end operational logistics, VIP guest flows, multi-vendor contracts, and crisis mitigation under high-pressure real-time conditions.',
    responsibilities: [
      'Managing live on-site crowd logistics, security protocols, and spatial movement for up to 2,000 high-profile attendees.',
      'Leading multi-vendor contract negotiations, synchronization of technical run-sheets, and vendor compliance.',
      'Acting as primary executive stakeholder liaison and directing real-time crisis mitigation calmly under pressure.'
    ],
    metrics: [
      { label: 'Success Rate', value: '100%', detail: '50+ productions' },
      { label: 'Live Delays', value: '0 Mins', detail: 'Flawless run-sheet' },
      { label: 'Crowd Scale', value: '2,000+', detail: 'Guests orchestrated' }
    ],
    toolsApplied: ['Master Run-Sheets', 'Crowd Protocol', 'Vendor Contracts', 'Stage Comms'],
    image: IMAGES.eventAquafestSolo,
  },
];

// =========================================================================
// DATA: Competencies (Hard Skills, Soft Skills, Tools)
// =========================================================================
const HARD_SKILLS = [
  { name: 'Workforce Needs Analysis (WNA)', level: 'Advanced', tag: 'Analytics' },
  { name: '9-Box Talent Matrix & Succession', level: 'Advanced', tag: 'Strategy' },
  { name: 'TER PPh 21 & BPJS Tax Calculations', level: 'Expert', tag: 'Compliance' },
  { name: 'OKR & KPI Cascading Architecture', level: 'Advanced', tag: 'Strategy' },
  { name: 'Competency Rubrics & Job Grading', level: 'Advanced', tag: 'Org Design' },
  { name: 'Strategic Workforce Planning', level: 'Advanced', tag: 'Planning' },
  { name: 'Labor Contracts & Employment Law', level: 'Compliant', tag: 'Legal' },
  { name: 'Compensation & Benefits Structuring', level: 'Advanced', tag: 'FinTech' },
  { name: 'SOP Formulation & Process Auditing', level: 'Expert', tag: 'Operations' },
];

const SOFT_SKILLS = [
  { name: 'C-Suite Diplomacy & Stakeholder Alignment', tag: 'Diplomacy' },
  { name: 'Real-Time Crisis Mitigation Under Pressure', tag: 'Resilience' },
  { name: 'Empathetic People Leadership & Mediation', tag: 'Empathy' },
  { name: 'High-Pressure Crowd & Live Event Logistics', tag: 'Execution' },
  { name: 'Change Management & Structural Handoffs', tag: 'Transformation' },
  { name: 'Public Speaking, Keynote Hosting & MC Protocol', tag: 'Communication' },
  { name: 'Cross-Functional Team Synchronization', tag: 'Coordination' },
  { name: 'High Emotional Intelligence (EQ) & Listening', tag: 'Culture' },
];

const TOOLS_CATEGORIES = [
  {
    category: 'HR Tech & Automation Systems',
    tools: [
      { name: 'Pervia PMS', desc: 'Performance & 9-Box Grid' },
      { name: 'Matchify RMS', desc: 'Recruitment & ATS Intelligence' },
      { name: 'Slipr Payroll', desc: 'TER PPh 21 & Payslip Auto' },
      { name: 'Zeno Assessment', desc: 'MBTI & DISC Psychometrics' },
      { name: 'Google Workspace Admin', desc: 'IAM & Cloud Workflows' }
    ]
  },
  {
    category: 'Data, BI & Quantitative Telemetry',
    tools: [
      { name: 'Microsoft Power BI', desc: 'Executive C-Suite Dashboards' },
      { name: 'Looker Studio', desc: 'Live Funnel Visualizations' },
      { name: 'Excel Advanced', desc: 'XLOOKUP, Power Query, Macros' },
      { name: 'Google Sheets & Apps Script', desc: 'Cloud Automation' }
    ]
  },
  {
    category: 'Product, Design & Productivity',
    tools: [
      { name: 'Figma', desc: 'UI/UX Prototyping & Flowcharts' },
      { name: 'Notion', desc: 'Knowledge Base & SOP Wikis' },
      { name: 'Miro', desc: 'Process Mapping & Architecture' },
      { name: 'Asana / Trello', desc: 'Agile Task Delivery' }
    ]
  }
];

type ToneKey = 'sage' | 'champagne' | 'slate' | 'terracotta' | 'espresso';

const ECOSYSTEM_TONES: Record<
  ToneKey,
  {
    spotlightBorder: string;
    ringBorder: string;
    haloBg: string;
    haloBorder: string;
    iconColor: string;
    tagColor: string;
    accentPillBg: string;
    dotColor: string;
    glowBg: string;
    subTextColor: string;
  }
> = {
  sage: {
    spotlightBorder: 'border-[#5D7256]',
    ringBorder: 'border-[#8FA387]/75',
    haloBg: 'bg-[#E9F1E8]',
    haloBorder: 'border-[#C6D7C3]',
    iconColor: 'text-[#3F5538]',
    tagColor: 'text-[#4B6144]',
    accentPillBg: 'bg-[#5D7256]',
    dotColor: 'bg-[#5D7256]',
    glowBg: 'bg-[#6E7C69]/15',
    subTextColor: 'text-[#4B6144]',
  },
  champagne: {
    spotlightBorder: 'border-[#B49A70]',
    ringBorder: 'border-[#C8B18B]/85',
    haloBg: 'bg-[#F8F0E3]',
    haloBorder: 'border-[#E5D3B6]',
    iconColor: 'text-[#8C683E]',
    tagColor: 'text-[#8F6D45]',
    accentPillBg: 'bg-[#B49A70]',
    dotColor: 'bg-[#B49A70]',
    glowBg: 'bg-[#B49A70]/18',
    subTextColor: 'text-[#8C683E]',
  },
  slate: {
    spotlightBorder: 'border-[#4D6D7E]',
    ringBorder: 'border-[#7D99A8]/75',
    haloBg: 'bg-[#E8F0F4]',
    haloBorder: 'border-[#C2D4DE]',
    iconColor: 'text-[#2D4B5A]',
    tagColor: 'text-[#3B5C6D]',
    accentPillBg: 'bg-[#4D6D7E]',
    dotColor: 'bg-[#4D6D7E]',
    glowBg: 'bg-[#4D6D7E]/15',
    subTextColor: 'text-[#3B5C6D]',
  },
  terracotta: {
    spotlightBorder: 'border-[#A66A5A]',
    ringBorder: 'border-[#C29082]/75',
    haloBg: 'bg-[#F6EBE7]',
    haloBorder: 'border-[#E0C4BB]',
    iconColor: 'text-[#7F4637]',
    tagColor: 'text-[#8C5243]',
    accentPillBg: 'bg-[#A66A5A]',
    dotColor: 'bg-[#A66A5A]',
    glowBg: 'bg-[#A66A5A]/15',
    subTextColor: 'text-[#7F4637]',
  },
  espresso: {
    spotlightBorder: 'border-[#3B4048]',
    ringBorder: 'border-[#8D8981]/70',
    haloBg: 'bg-[#EFECE6]',
    haloBorder: 'border-[#D7D0C4]',
    iconColor: 'text-[#23272F]',
    tagColor: 'text-[#4D4A44]',
    accentPillBg: 'bg-[#23272F]',
    dotColor: 'bg-[#23272F]',
    glowBg: 'bg-[#23272F]/10',
    subTextColor: 'text-[#3D424B]',
  },
};

interface OrbitalEcosystemItem {
  id: string;
  name: string;
  group: 'hard' | 'soft' | 'tools';
  groupLabel: string;
  subLabel: string;
  tag: string;
  levelLabel: string;
  dots: number;
  tone: ToneKey;
  icon: React.FC<{ className?: string; strokeWidth?: number }>;
}

const HARD_SKILL_VISUALS: Array<{ tone: ToneKey; icon: React.FC<{ className?: string; strokeWidth?: number }> }> = [
  { tone: 'sage', icon: TrendingUp },       // WNA
  { tone: 'champagne', icon: LayoutGrid },  // 9-Box Matrix
  { tone: 'espresso', icon: Calculator },   // PPh 21 & BPJS
  { tone: 'terracotta', icon: Target },     // OKR & KPI
  { tone: 'slate', icon: Scale },           // Competency Rubrics
  { tone: 'sage', icon: Compass },          // Workforce Planning
  { tone: 'espresso', icon: FileCheck2 },   // Labor Contracts
  { tone: 'champagne', icon: Wallet },      // Compensation & Benefits
  { tone: 'slate', icon: ClipboardCheck },  // SOP Auditing
];

const SOFT_SKILL_VISUALS: Array<{ tone: ToneKey; icon: React.FC<{ className?: string; strokeWidth?: number }> }> = [
  { tone: 'champagne', icon: Handshake },   // C-Suite Diplomacy
  { tone: 'terracotta', icon: ShieldAlert },// Crisis Mitigation
  { tone: 'sage', icon: Users },            // Empathetic Leadership
  { tone: 'espresso', icon: Radio },        // Crowd & Event Logistics
  { tone: 'slate', icon: GitBranch },       // Change Management
  { tone: 'champagne', icon: Mic },         // Public Speaking & MC
  { tone: 'sage', icon: Network },          // Cross-Functional Sync
  { tone: 'terracotta', icon: Heart },      // Emotional Intelligence
];

const TOOL_VISUALS: Record<string, { tone: ToneKey; icon: React.FC<{ className?: string; strokeWidth?: number }> }> = {
  'Pervia PMS': { tone: 'sage', icon: Award },
  'Matchify RMS': { tone: 'terracotta', icon: UserCheck },
  'Slipr Payroll': { tone: 'espresso', icon: Lock },
  'Zeno Assessment': { tone: 'champagne', icon: BrainCircuit },
  'Google Workspace Admin': { tone: 'slate', icon: Cloud },
  'Microsoft Power BI': { tone: 'champagne', icon: BarChart3 },
  'Looker Studio': { tone: 'slate', icon: PieChart },
  'Excel Advanced': { tone: 'sage', icon: FileSpreadsheet },
  'Google Sheets & Apps Script': { tone: 'espresso', icon: Code2 },
  'Figma': { tone: 'terracotta', icon: PenTool },
  'Notion': { tone: 'espresso', icon: BookOpen },
  'Miro': { tone: 'champagne', icon: Workflow },
  'Asana / Trello': { tone: 'slate', icon: Kanban },
};

const ORBITAL_ECOSYSTEM_ITEMS: OrbitalEcosystemItem[] = [
  ...HARD_SKILLS.map((s, idx) => {
    const visual = HARD_SKILL_VISUALS[idx] || { tone: 'sage' as ToneKey, icon: BarChart3 };
    return {
      id: `hard-${idx}`,
      name: s.name,
      group: 'hard' as const,
      groupLabel: 'Hard Skill & Analytics',
      subLabel: `${s.level} Proficiency`,
      tag: s.tag,
      levelLabel: s.level,
      dots: s.level === 'Expert' ? 3 : 2,
      tone: visual.tone,
      icon: visual.icon,
    };
  }),
  ...SOFT_SKILLS.map((s, idx) => {
    const visual = SOFT_SKILL_VISUALS[idx] || { tone: 'terracotta' as ToneKey, icon: HeartHandshake };
    return {
      id: `soft-${idx}`,
      name: s.name,
      group: 'soft' as const,
      groupLabel: 'Executive Soft Skill',
      subLabel: 'Field-Proven Leadership',
      tag: s.tag,
      levelLabel: 'Executive',
      dots: 3,
      tone: visual.tone,
      icon: visual.icon,
    };
  }),
  ...TOOLS_CATEGORIES.flatMap((cat, cIdx) =>
    cat.tools.map((t, tIdx) => {
      const visual = TOOL_VISUALS[t.name] || { tone: 'slate' as ToneKey, icon: Cpu };
      return {
        id: `tool-${cIdx}-${tIdx}`,
        name: t.name,
        group: 'tools' as const,
        groupLabel: cat.category.split('&')[0].trim(),
        subLabel: t.desc,
        tag: 'Stack',
        levelLabel: 'Production',
        dots: 3,
        tone: visual.tone,
        icon: visual.icon,
      };
    })
  ),
];

// =========================================================================
// DATA: Organizational Milestones & Timeline
// =========================================================================
const ORGANIZATIONAL_TIMELINE = [
  {
    id: 'org-1',
    year: '2024',
    period: '2024',
    role: 'Head of Event — IPB OSIS Fest 2024',
    organization: 'Direktorat Promosi & Penerimaan Mahasiswa Baru IPB University',
    scope: 'Tingkat Nasional (Delegasi dari 27 Provinsi)',
    badge: 'National Leadership Conference',
    summary: 'Memimpin kepanitiaan akbar konferensi kepemimpinan pelajar nasional dengan delegasi ketua OSIS dari 27 provinsi di Indonesia.',
    highlights: [
      'Memimpin dan mengkoordinasikan lebih dari 70 panitia lintas divisi dalam merancang alur acara, protokol tamu kehormatan, dan mitigasi krisis.',
      'Mengelola alokasi anggaran, kemitraan strategis, dan koordinasi langsung dengan pimpinan rektorat IPB University.',
      'Membawa kampanye meraih Juara 1 Nasional Digital PR (ESG Theme) di ajang Public Relations Excellence Awards (PREA) 2024.'
    ],
    image: IMAGES.eventSbIpbCommittee,
    quote: 'Kepemimpinan sejati adalah kemampuan mengorkestrasi keberagaman talenta menuju satu visi dampak yang nyata.'
  },
  {
    id: 'org-2',
    year: '2022 – 2024',
    period: '2022 – 2024',
    role: 'Duta IPB University (University Ambassador)',
    organization: 'Institut Pertanian Bogor (IPB University)',
    scope: 'Representasi Resmi Rektorat & Diplomasi Publik',
    badge: 'Official Campus Ambassador',
    summary: 'Terpilih sebagai duta resmi universitas untuk memimpin komunikasi publik, representasi institusi pada forum nasional, dan penerimaan tamu VIP.',
    highlights: [
      'Mewakili IPB University dalam roadshow edukasi nasional, expo perguruan tinggi, dan audiensi kemitraan institusional.',
      'Bertindak sebagai Master of Ceremony (MC) dan moderator utama pada puluhan simposium rektorat dan seminar nasional.',
      'Membangun jejaring diplomasi kampus dengan berbagai kementerian, mitra industri, dan pemangku kepentingan publik.'
    ],
    image: IMAGES.eventDutaIpbStage,
    quote: 'Representasi institusi menuntut keteladanan, etika diplomasi, dan kemampuan bertutur yang menginspirasi.'
  },
  {
    id: 'org-3',
    year: '2023 – 2024',
    period: '2023 – 2024',
    role: 'Head of Human Resources / HR of Student',
    organization: 'BEM Fakultas Peternakan IPB University',
    scope: 'Kepengurusan BEM Fakultas Peternakan',
    badge: 'Talent & Culture Lead',
    summary: 'Memimpin departemen SDM mahasiswa dalam merancang program rekrutmen, retensi, penilaian kinerja, dan iklim internal organisasi.',
    highlights: [
      'Merancang sistem rekrutmen dan orientasi kerja staf organisasi berbasis asesmen kesesuaian nilai (cultural fit).',
      'Mengembangkan survei iklim organisasi (pulse survey) berkala untuk mengidentifikasi kepuasan anggota dan efektivitas kepengurusan.',
      'Meningkatkan angka retensi dan kepuasan pengurus hingga 92% sepanjang periode kerja.'
    ],
    image: IMAGES.eventFapetIpbStage,
    quote: 'Organisasi bertumbuh bukan dari struktur kertasnya, melainkan dari rasa dihargai yang dirasakan setiap anggotanya.'
  },
  {
    id: 'org-4',
    year: '2021',
    period: '2021',
    role: 'Delegasi Nasional — Indonesia Student Leadership Camp (ISLC) IX',
    organization: 'Universitas Indonesia (UI)',
    scope: 'Tingkat Nasional (Top 100 Ketua OSIS Terbaik se-Indonesia)',
    badge: 'National Executive Incubation',
    summary: 'Terpilih dari ribuan ketua OSIS se-Indonesia untuk mengikuti inkubasi kepemimpinan eksekutif, debat kebijakan publik, dan inisiatif nasional.',
    highlights: [
      'Merumuskan gagasan advokasi kepemudaan nasional bersama 100 ketua OSIS terbaik se-Indonesia.',
      'Terlatih dalam diplomasi kebijakan strategis, public problem-solving, dan public policy analysis.',
      'Terpilih masuk jajaran perumus resolusi kepemudaan nasional Forum OSIS Nusantara.'
    ],
    image: IMAGES.eventAquafestMcDuo,
    quote: 'Pemimpin muda harus berani mengambil tanggung jawab sebelum diminta, dan menuntaskannya melampaui ekspektasi.'
  },
  {
    id: 'org-5',
    year: '2020 – 2021',
    period: '2020 – 2021',
    role: 'Ketua Umum OSIS',
    organization: 'Organisasi Siswa Intra Sekolah (OSIS)',
    scope: 'Kepemimpinan Eksekutif Lembaga Siswa',
    badge: 'Executive Student President',
    summary: 'Memimpin kepengurusan OSIS, menginisiasi transformasi program kerja digital masa pandemi, dan mengadvokasi aspirasi seluruh siswa.',
    highlights: [
      'Memimpin jalannya program kerja siswa berbasis virtual dan hybrid selama masa transisi pandemi.',
      'Membina kolaborasi harmonis dengan dewan guru, alumni, dan organisasi kesiswaan eksternal.',
      'Meraih predikat Ketua OSIS Inspiratif atas terobosan digitalisasi komunikasi kesiswaan.'
    ],
    image: IMAGES.eventTeamFistSteps,
    quote: 'Fondasi kepemimpinan dimulai dari integritas, ketulusan melayani, dan konsistensi dalam tindakan kecil.'
  }
];

export const ProfessionalJourneyDashboard: React.FC<ProfessionalJourneyDashboardProps> = ({
  onNavigate,
  onOpenResume,
}) => {
  // Professional Journey active role selection (collapsed by default for clean aligned 2x2 grid)
  const [selectedWorkId, setSelectedWorkId] = useState<string | null>(null);

  // Competency filter active tab & Orbital spotlight index
  const [skillsTab, setSkillsTab] = useState<'all' | 'hard' | 'soft' | 'tools'>('all');
  const [activeOrbitalIdx, setActiveOrbitalIdx] = useState<number>(0);

  const visibleOrbitalItems =
    skillsTab === 'all'
      ? ORBITAL_ECOSYSTEM_ITEMS
      : ORBITAL_ECOSYSTEM_ITEMS.filter((item) => item.group === skillsTab);

  const safeOrbitalIdx =
    visibleOrbitalItems.length > 0 ? activeOrbitalIdx % visibleOrbitalItems.length : 0;

  const getOrbitalItemAtOffset = (offset: number) => {
    const len = visibleOrbitalItems.length;
    if (len === 0) return null;
    const targetIdx = (((safeOrbitalIdx + offset) % len) + len) % len;
    return { item: visibleOrbitalItems[targetIdx], idx: targetIdx };
  };

  const centerNode = getOrbitalItemAtOffset(0);

  // Organizational Journey active milestone
  const [activeOrgId, setActiveOrgId] = useState<string>('org-1');
  const activeOrg = ORGANIZATIONAL_TIMELINE.find((o) => o.id === activeOrgId) || ORGANIZATIONAL_TIMELINE[0];

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 1 — PROFESSIONAL JOURNEY: ROLES & IMPACT (Natural Top-to-Bottom Flow)
          ========================================================================= */}
      <section className="w-full bg-[#F3EFEA] py-20 border-b border-[#E7E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <ScrollReveal variant="editorial" delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E7C69]/10 text-[#6E7C69] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Briefcase className="w-3.5 h-3.5 text-[#AF8C72]" />
                <span>Executive Career Trajectory</span>
              </div>
              <h2 className="font-sans font-black text-4xl sm:text-5xl text-[#1E2022] tracking-tight">
                Professional Journey
              </h2>
              <p className="text-xs sm:text-sm text-[#605E59] font-light leading-relaxed mt-1 max-w-2xl">
                Dashboard integratif kepemimpinan sumber daya manusia, analisa tenaga kerja berbasis data, dan orkestrasi operasional berskala tinggi.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="subtle" delay={0.14} className="flex items-center gap-3">
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 bg-white hover:bg-[#1E2022] hover:text-white text-[#1E2022] border border-[#E7E0D6] rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-2xs active:scale-95 flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5 text-[#6E7C69]" />
                <span>Unduh CV Lengkap</span>
              </button>

              <button
                onClick={() => onNavigate('experience', 'working')}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E2022] hover:text-[#6E7C69] transition-colors border-b-2 border-[#1E2022] pb-0.5 cursor-pointer ml-1"
              >
                <span>Full Archive ↗</span>
              </button>
            </ScrollReveal>
          </div>

          {/* Top KPI Telemetry Ribbon (Modern Organic Rounded Stats) */}
          <ScrollReveal variant="subtle" delay={0.08}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-white rounded-3xl border border-[#E7E0D6] shadow-xs mb-8">
              <div className="p-4 text-center rounded-2xl bg-[#F3EFEA] border border-[#E7E0D6]/60">
                <span className="font-sans font-black text-2xl sm:text-3xl text-[#6E7C69] block">110+</span>
                <span className="font-mono text-[11px] text-[#9E7B62] uppercase tracking-wider block font-bold mt-0.5">Personnel Under HC</span>
              </div>
              <div className="p-4 text-center rounded-2xl bg-[#F3EFEA] border border-[#E7E0D6]/60">
                <span className="font-sans font-black text-2xl sm:text-3xl text-[#AF8C72] block">3+</span>
                <span className="font-mono text-[11px] text-[#9E7B62] uppercase tracking-wider block font-bold mt-0.5">Years Experience</span>
              </div>
              <div className="p-4 text-center rounded-2xl bg-[#F3EFEA] border border-[#E7E0D6]/60">
                <span className="font-sans font-black text-2xl sm:text-3xl text-[#1E2022] block">04</span>
                <span className="font-mono text-[11px] text-[#9E7B62] uppercase tracking-wider block font-bold mt-0.5">Custom Platforms</span>
              </div>
              <div className="p-4 text-center rounded-2xl bg-[#F3EFEA] border border-[#E7E0D6]/60">
                <span className="font-sans font-black text-2xl sm:text-3xl text-[#6E7C69] block">100%</span>
                <span className="font-mono text-[11px] text-[#9E7B62] uppercase tracking-wider block font-bold mt-0.5">Regulatory Compliance</span>
              </div>
            </div>
          </ScrollReveal>

          {/* 4 Professional Roles Grid (Expanded to full container width) */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${selectedWorkId ? 'items-start' : 'items-stretch'}`}>
            {WORKING_ROLES.map((role, roleIdx) => {
              const isSelected = role.id === selectedWorkId;

              return (
                <ScrollReveal key={role.id} variant="card" delay={(roleIdx % 2) * 0.1} className="h-full">
                <motion.div
                  layout
                  onClick={() => setSelectedWorkId(isSelected ? null : role.id)}
                  className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#AF8C72] shadow-xl ring-2 ring-[#AF8C72]/15'
                      : 'bg-white/85 hover:bg-white border-[#E7E0D6] hover:border-[#AF8C72]/60 shadow-xs h-full'
                  }`}
                >
                  {/* Top Row: Period, Type & Badge */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#E7E0D6]">
                      <div className="flex items-center gap-2 font-mono text-xs text-[#9E7B62]">
                        <Calendar className="w-3.5 h-3.5 text-[#AF8C72]" />
                        <span className="font-bold text-[#1E2022]">{role.period}</span>
                        <span>·</span>
                        <span className="text-[#6E7C69] font-medium">{role.type}</span>
                      </div>

                      <span className={`px-3 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider ${
                        isSelected ? 'bg-[#AF8C72] text-white' : 'bg-[#F3EFEA] text-[#1E2022] border border-[#E7E0D6]'
                      }`}>
                        {role.badge}
                      </span>
                    </div>

                    {/* Role Title & Company */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-sans font-black text-xl sm:text-2xl text-[#1E2022]">
                          {role.role}
                        </h3>
                        <span className="font-mono text-xs font-semibold text-[#6E7C69] block mt-0.5">
                          {role.company}
                        </span>
                        <span className="text-xs text-[#9E7B62] font-mono block mt-0.5">
                          {role.scope}
                        </span>
                      </div>

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform shrink-0 ${
                        isSelected ? 'bg-[#AF8C72] text-white rotate-90' : 'bg-[#F3EFEA] text-[#1E2022]'
                      }`}>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Narrative Summary */}
                    <p className="text-xs sm:text-sm text-[#4A4843] font-light leading-relaxed mt-3">
                      {role.summary}
                    </p>
                  </div>

                  {/* Verified Metrics Chips */}
                  <div className="grid grid-cols-3 gap-2 pt-4 mt-4 border-t border-[#E7E0D6]/80">
                    {role.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded-2xl bg-[#F3EFEA] border border-[#E7E0D6]/60 text-center">
                        <span className="font-sans font-black text-base sm:text-lg text-[#6E7C69] block leading-tight">
                          {m.value}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#1E2022] font-bold block truncate">
                          {m.label}
                        </span>
                        <span className="font-mono text-[8px] text-[#9E7B62] block truncate">
                          {m.detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Expanded Content (Smooth Moderate Animation) */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="pt-5 mt-5 border-t border-[#E7E0D6] space-y-4"
                      >
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#AF8C72] font-bold block mb-2">
                            Core Executive Responsibilities:
                          </span>
                          <ul className="space-y-2">
                            {role.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2 text-xs text-[#1E2022] font-light leading-relaxed">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#6E7C69] shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Applied Tools & Ecosystem */}
                        <div className="pt-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E7B62] font-bold block mb-2">
                            Tools & Systems Deployed:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {role.toolsApplied.map((tool, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-3 py-1 bg-white border border-[#E7E0D6] text-[10px] font-mono text-[#1E2022] rounded-full shadow-2xs font-medium"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — SKILLS & ECOSYSTEM (Editorial Orbital Carousel Concept)
          Inspired by circular depth-wave showcase with refined champagne rings
          ========================================================================= */}
      <section className="w-full bg-[#FAF8F5] py-20 border-b border-[#E7E0D6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          {/* Centered Editorial Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <ScrollReveal variant="subtle" delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B49A70]/12 text-[#8F6D54] text-[11px] font-mono font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#B49A70]" strokeWidth={1.7} />
                <span>Competency Matrix &amp; Technical Stack</span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="editorial" delay={0.08}>
              <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#1E2022] tracking-tight">
                <span className="text-[#B49A70] font-serif italic font-normal mr-2">—</span>
                Skills &amp;{' '}
                <span className="font-serif italic font-normal text-[#6E7C69]">
                  Ecosystem
                </span>
                <span className="text-[#B49A70] font-serif italic font-normal ml-2">—</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="editorial" delay={0.14}>
              <p className="text-xs sm:text-sm text-[#605E59] font-light leading-relaxed">
                Eksplorasi interaktif keahlian analitik SDM, kepemimpinan manusia, dan teknologi otomasi yang terintegrasi dalam operasional nyata.
              </p>
            </ScrollReveal>

            {/* Centered Compact Filter Selector (Echoing Reference Dropdown/Toggle) */}
            <ScrollReveal variant="subtle" delay={0.2} className="pt-2 flex justify-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-1 p-1 bg-white rounded-full border border-[#E7E0D6] shadow-2xs">
                {[
                  { id: 'all', label: `All Ecosystem (${ORBITAL_ECOSYSTEM_ITEMS.length})` },
                  { id: 'hard', label: `Hard Skills (${HARD_SKILLS.length})` },
                  { id: 'soft', label: `Soft Skills (${SOFT_SKILLS.length})` },
                  { id: 'tools', label: 'Tools & Stack (13)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setSkillsTab(tab.id as 'all' | 'hard' | 'soft' | 'tools');
                      setActiveOrbitalIdx(0);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono transition-all cursor-pointer font-semibold ${
                      skillsTab === tab.id
                        ? 'bg-[#1E2022] text-white shadow-xs'
                        : 'text-[#605E59] hover:text-[#1E2022] hover:bg-[#F3EFEA]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* =========================================================================
              ORBITAL DEPTH-WAVE CIRCULAR STAGE
              ========================================================================= */}
          <ScrollReveal variant="media" duration={0.95} delay={0.12}>
          <div className="relative py-8 sm:py-12 flex items-center justify-center min-h-[340px] sm:min-h-[370px] select-none">
            {/* Soft radial backdrop glow adapting to spotlight color */}
            {centerNode && (
              <div
                className={`pointer-events-none absolute w-80 h-80 rounded-full blur-3xl transition-colors duration-500 ${
                  ECOSYSTEM_TONES[centerNode.item.tone].glowBg
                }`}
              />
            )}

            {/* Desktop Staggered Depth-Wave Ring Field */}
            <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center gap-3 sm:gap-5 lg:gap-6">
              {/* FAR LEFT (-3) — Whisper Fade */}
              {(() => {
                const slot = getOrbitalItemAtOffset(-3);
                if (!slot) return null;
                const Icon = slot.item.icon;
                const tone = ECOSYSTEM_TONES[slot.item.tone];
                return (
                  <button
                    type="button"
                    onClick={() => setActiveOrbitalIdx(slot.idx)}
                    className={`hidden xl:flex flex-col items-center justify-center w-28 h-28 rounded-full bg-white/75 border ${tone.ringBorder} opacity-45 hover:opacity-85 transition-all p-3 text-center translate-y-6 shrink-0 cursor-pointer`}
                  >
                    <span className={`w-6 h-6 rounded-full ${tone.haloBg} flex items-center justify-center mb-1`}>
                      <Icon className={`w-3 h-3 ${tone.iconColor}`} strokeWidth={1.7} />
                    </span>
                    <span className="font-sans text-[10px] font-semibold text-[#1E2022] line-clamp-2 leading-tight">
                      {slot.item.name}
                    </span>
                  </button>
                );
              })()}

              {/* MID LEFT UPPER (-2) */}
              {(() => {
                const slot = getOrbitalItemAtOffset(-2);
                if (!slot) return null;
                const Icon = slot.item.icon;
                const tone = ECOSYSTEM_TONES[slot.item.tone];
                return (
                  <button
                    type="button"
                    onClick={() => setActiveOrbitalIdx(slot.idx)}
                    className={`hidden lg:flex flex-col items-center justify-center w-32 h-32 rounded-full bg-white border-[1.5px] ${tone.ringBorder} hover:border-[#1E2022] shadow-xs hover:shadow-md transition-all p-3 text-center -translate-y-8 shrink-0 cursor-pointer group`}
                  >
                    <span className={`w-8 h-8 rounded-full ${tone.haloBg} border ${tone.haloBorder} flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-4 h-4 ${tone.iconColor}`} strokeWidth={1.7} />
                    </span>
                    <span className="font-sans text-[11px] font-bold text-[#1E2022] line-clamp-2 leading-tight">
                      {slot.item.name}
                    </span>
                    <span className={`font-mono text-[9px] ${tone.tagColor} font-bold mt-1`}>
                      {slot.item.tag}
                    </span>
                  </button>
                );
              })()}

              {/* NEAR LEFT LOWER (-1) */}
              {(() => {
                const slot = getOrbitalItemAtOffset(-1);
                if (!slot) return null;
                const Icon = slot.item.icon;
                const tone = ECOSYSTEM_TONES[slot.item.tone];
                return (
                  <button
                    type="button"
                    onClick={() => setActiveOrbitalIdx(slot.idx)}
                    className={`hidden sm:flex flex-col items-center justify-center w-26 h-26 md:w-28 md:h-28 rounded-full bg-white border-[1.5px] ${tone.ringBorder} hover:border-[#1E2022] shadow-xs hover:shadow-md transition-all p-2.5 text-center translate-y-9 shrink-0 cursor-pointer group`}
                  >
                    <span className={`w-7 h-7 rounded-full ${tone.haloBg} border ${tone.haloBorder} flex items-center justify-center mb-1 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-3.5 h-3.5 ${tone.iconColor}`} strokeWidth={1.7} />
                    </span>
                    <span className="font-sans text-[10px] font-bold text-[#1E2022] line-clamp-2 leading-tight">
                      {slot.item.name}
                    </span>
                    <span className={`font-mono text-[8px] ${tone.tagColor} font-bold mt-0.5`}>
                      {slot.item.levelLabel}
                    </span>
                  </button>
                );
              })()}

              {/* CENTER SPOTLIGHT RING (0) */}
              {centerNode && (() => {
                const CenterIcon = centerNode.item.icon;
                const tone = ECOSYSTEM_TONES[centerNode.item.tone];

                return (
                  <div className="relative flex items-center justify-center shrink-0 mx-2">
                    {/* Left Arrow Floating Control */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveOrbitalIdx(
                          (safeOrbitalIdx - 1 + visibleOrbitalItems.length) %
                            visibleOrbitalItems.length
                        )
                      }
                      aria-label="Previous skill"
                      className="absolute -left-4 sm:-left-5 z-20 w-9 h-9 rounded-full bg-white border border-[#E7E0D6] hover:border-[#1E2022] hover:bg-[#1E2022] hover:text-white text-[#1E2022] shadow-md flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    >
                      <ChevronLeft className="w-4 h-4" strokeWidth={2} />
                    </button>

                    {/* Center Large Spotlight Circle */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={centerNode.item.id}
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className={`w-64 h-64 sm:w-[296px] sm:h-[296px] rounded-full bg-white border-[3px] ${tone.spotlightBorder} shadow-[0_20px_50px_rgba(30,32,34,0.10)] p-6 sm:p-7 flex flex-col items-center justify-between text-center relative`}
                      >
                        {/* Top Micro Header inside Circle */}
                        <div className="space-y-1 pt-1">
                          <span className={`font-mono text-[9px] uppercase tracking-[0.16em] ${tone.tagColor} font-bold block`}>
                            {centerNode.item.groupLabel}
                          </span>
                          <h3 className="font-sans font-extrabold text-base sm:text-lg text-[#1E2022] leading-tight line-clamp-2 px-2">
                            {centerNode.item.name}
                          </h3>
                        </div>

                        {/* Center Harmonious Color Halo & Unique Semantic Icon */}
                        <div className={`w-18 h-18 rounded-2xl ${tone.haloBg} border ${tone.haloBorder} flex items-center justify-center shadow-inner transition-colors`}>
                          <CenterIcon className={`w-8 h-8 ${tone.iconColor}`} strokeWidth={1.65} />
                        </div>

                        {/* Bottom Outcome & Domain Subtitle */}
                        <div className="pb-2 space-y-0.5 px-2">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-[#605E59] block">
                            Applied Focus
                          </span>
                          <strong className={`font-serif italic text-base sm:text-lg ${tone.subTextColor} font-normal block leading-tight line-clamp-1`}>
                            {centerNode.item.subLabel}
                          </strong>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Right Arrow Floating Control */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveOrbitalIdx(
                          (safeOrbitalIdx + 1) % visibleOrbitalItems.length
                        )
                      }
                      aria-label="Next skill"
                      className="absolute -right-4 sm:-right-5 z-20 w-9 h-9 rounded-full bg-white border border-[#E7E0D6] hover:border-[#1E2022] hover:bg-[#1E2022] hover:text-white text-[#1E2022] shadow-md flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    >
                      <ChevronRight className="w-4 h-4" strokeWidth={2} />
                    </button>

                    {/* Floating Bottom-Left Spec Chip */}
                    <div className="absolute -bottom-3 -left-2 sm:left-1 z-20 bg-white border border-[#E7E0D6] rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2.5 text-[10px] font-mono">
                      <span className="font-bold text-[#1E2022]">
                        {String(safeOrbitalIdx + 1).padStart(2, '0')}/
                        {String(visibleOrbitalItems.length).padStart(2, '0')}
                      </span>
                      <span className="w-px h-3 bg-[#E7E0D6]" />
                      <span className={`${tone.tagColor} font-bold`}>
                        {centerNode.item.tag}
                      </span>
                      <span className="flex items-center gap-0.5">
                        {[1, 2, 3].map((dot) => (
                          <span
                            key={dot}
                            className={`w-1.5 h-1.5 rounded-full ${
                              dot <= centerNode.item.dots ? tone.dotColor : 'bg-[#E7E0D6]'
                            }`}
                          />
                        ))}
                      </span>
                    </div>

                    {/* Floating Bottom-Center Color-Matched Verified Check Pill */}
                    <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 translate-x-14 sm:translate-x-16 z-20 w-8 h-8 rounded-xl ${tone.accentPillBg} text-white shadow-md flex items-center justify-center border-2 border-white transition-colors`}>
                      <CheckCircle2 className="w-4 h-4" strokeWidth={2} />
                    </div>
                  </div>
                );
              })()}

              {/* NEAR RIGHT LOWER (+1) */}
              {(() => {
                const slot = getOrbitalItemAtOffset(1);
                if (!slot) return null;
                const Icon = slot.item.icon;
                const tone = ECOSYSTEM_TONES[slot.item.tone];
                return (
                  <button
                    type="button"
                    onClick={() => setActiveOrbitalIdx(slot.idx)}
                    className={`hidden sm:flex flex-col items-center justify-center w-26 h-26 md:w-28 md:h-28 rounded-full bg-white border-[1.5px] ${tone.ringBorder} hover:border-[#1E2022] shadow-xs hover:shadow-md transition-all p-2.5 text-center translate-y-8 shrink-0 cursor-pointer group`}
                  >
                    <span className={`w-7 h-7 rounded-full ${tone.haloBg} border ${tone.haloBorder} flex items-center justify-center mb-1 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-3.5 h-3.5 ${tone.iconColor}`} strokeWidth={1.7} />
                    </span>
                    <span className="font-sans text-[10px] font-bold text-[#1E2022] line-clamp-2 leading-tight">
                      {slot.item.name}
                    </span>
                    <span className={`font-mono text-[8px] ${tone.tagColor} font-bold mt-0.5`}>
                      {slot.item.levelLabel}
                    </span>
                  </button>
                );
              })()}

              {/* MID RIGHT UPPER (+2) */}
              {(() => {
                const slot = getOrbitalItemAtOffset(2);
                if (!slot) return null;
                const Icon = slot.item.icon;
                const tone = ECOSYSTEM_TONES[slot.item.tone];
                return (
                  <button
                    type="button"
                    onClick={() => setActiveOrbitalIdx(slot.idx)}
                    className={`hidden lg:flex flex-col items-center justify-center w-32 h-32 rounded-full bg-white border-[1.5px] ${tone.ringBorder} hover:border-[#1E2022] shadow-xs hover:shadow-md transition-all p-3 text-center -translate-y-9 shrink-0 cursor-pointer group`}
                  >
                    <span className={`w-8 h-8 rounded-full ${tone.haloBg} border ${tone.haloBorder} flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-4 h-4 ${tone.iconColor}`} strokeWidth={1.7} />
                    </span>
                    <span className="font-sans text-[11px] font-bold text-[#1E2022] line-clamp-2 leading-tight">
                      {slot.item.name}
                    </span>
                    <span className={`font-mono text-[9px] ${tone.tagColor} font-bold mt-1`}>
                      {slot.item.tag}
                    </span>
                  </button>
                );
              })()}

              {/* FAR RIGHT (+3) — Whisper Fade */}
              {(() => {
                const slot = getOrbitalItemAtOffset(3);
                if (!slot) return null;
                const Icon = slot.item.icon;
                const tone = ECOSYSTEM_TONES[slot.item.tone];
                return (
                  <button
                    type="button"
                    onClick={() => setActiveOrbitalIdx(slot.idx)}
                    className={`hidden xl:flex flex-col items-center justify-center w-28 h-28 rounded-full bg-white/75 border ${tone.ringBorder} opacity-45 hover:opacity-85 transition-all p-3 text-center translate-y-7 shrink-0 cursor-pointer`}
                  >
                    <span className={`w-6 h-6 rounded-full ${tone.haloBg} flex items-center justify-center mb-1`}>
                      <Icon className={`w-3 h-3 ${tone.iconColor}`} strokeWidth={1.7} />
                    </span>
                    <span className="font-sans text-[10px] font-semibold text-[#1E2022] line-clamp-2 leading-tight">
                      {slot.item.name}
                    </span>
                  </button>
                );
              })()}
            </div>
          </div>
          </ScrollReveal>

          {/* =========================================================================
              COMPACT QUICK-JUMP INDEX STRIP (Icon + Color-Coded Easy Scannability)
              ========================================================================= */}
          <ScrollReveal variant="subtle" delay={0.14}>
          <div className="bg-white/90 rounded-3xl border border-[#E7E0D6] p-4 sm:p-5 space-y-3 shadow-2xs">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="uppercase tracking-wider font-bold text-[#8F6D54]">
                Quick Ecosystem Index
              </span>
              <span className="text-[#605E59]">
                Click any item to focus spotlight
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {visibleOrbitalItems.map((item, idx) => {
                const isActive = idx === safeOrbitalIdx;
                const PillIcon = item.icon;
                const tone = ECOSYSTEM_TONES[item.tone];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveOrbitalIdx(idx)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-sans transition-all cursor-pointer border ${
                      isActive
                        ? `${tone.accentPillBg} text-white border-transparent font-bold shadow-xs`
                        : 'bg-[#FAF8F5] text-[#23272F] border-[#E7E0D6] hover:border-[#B49A70] hover:bg-white'
                    }`}
                  >
                    <PillIcon
                      className={`w-3 h-3 shrink-0 ${
                        isActive ? 'text-white' : tone.iconColor
                      }`}
                      strokeWidth={1.8}
                    />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — ORGANIZATIONAL JOURNEY: INTERACTIVE CARDS + TIMELINE
          ========================================================================= */}
      <section className="w-full bg-[#E8ECE6] py-20 border-b border-[#D7DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <ScrollReveal variant="editorial" delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AF8C72]/15 text-[#AF8C72] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Trophy className="w-3.5 h-3.5 text-[#AF8C72]" />
                <span>Leadership Footprint</span>
              </div>
              <h2 className="font-sans font-black text-4xl sm:text-5xl text-[#1E2022] tracking-tight">
                Organizational Journey
              </h2>
              <p className="text-xs sm:text-sm text-[#605E59] font-light leading-relaxed mt-1 max-w-2xl">
                Rekam jejak kepemimpinan pemuda, diplomasi universitas, dan kepanitiaan nasional terkemuka dengan konsep lini masa interaktif.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="subtle" delay={0.14} className="self-start md:self-end">
              <button
                onClick={() => onNavigate('experience', 'organizational')}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1E2022] hover:text-[#6E7C69] transition-colors border-b-2 border-[#1E2022] pb-0.5 cursor-pointer"
              >
                <span>Explore All 5 Milestones ↗</span>
              </button>
            </ScrollReveal>
          </div>

          {/* =========================================================================
              TIMELINE CONTROLLER RIBBON (Clickable Milestone Nodes)
              ========================================================================= */}
          <ScrollReveal variant="subtle" delay={0.1}>
          <div className="relative mb-12 p-3 bg-white rounded-3xl border border-[#E7E0D6] shadow-xs">
            <div className="flex items-center justify-between overflow-x-auto gap-2 p-1">
              {ORGANIZATIONAL_TIMELINE.map((item, idx) => {
                const isActive = item.id === activeOrgId;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveOrgId(item.id)}
                    className={`flex-1 min-w-[130px] p-3 rounded-2xl text-left transition-all duration-300 cursor-pointer relative ${
                      isActive
                        ? 'bg-[#1E2022] text-white shadow-md'
                        : 'hover:bg-[#F3EFEA] text-[#1E2022]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-mono text-[10px] uppercase font-bold tracking-wider ${
                        isActive ? 'text-[#AF8C72]' : 'text-[#6E7C69]'
                      }`}>
                        Milestone 0{idx + 1}
                      </span>
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-[#AF8C72] animate-ping" />
                      )}
                    </div>
                    <span className="font-sans font-bold text-sm block truncate">
                      {item.year}
                    </span>
                    <span className={`text-[10px] block truncate font-mono mt-0.5 ${
                      isActive ? 'text-[#E8DFD4]' : 'text-[#9E7B62]'
                    }`}>
                      {item.organization.split('(')[0].trim()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          </ScrollReveal>

          {/* =========================================================================
              ACTIVE MILESTONE INTERACTIVE SHOWCASE CARD
              ========================================================================= */}
          <ScrollReveal variant="media" duration={0.92} delay={0.14}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeOrg.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-[#D7DFD5] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Organization Narrative & Governance */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#6E7C69]/10 text-[#6E7C69] text-xs font-mono font-bold uppercase tracking-wider border border-[#6E7C69]/20">
                      {activeOrg.badge}
                    </span>
                    <span className="font-mono text-xs text-[#9E7B62] font-semibold">
                      {activeOrg.period} · {activeOrg.scope}
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-[#1E2022] leading-tight">
                    {activeOrg.role}
                  </h3>
                  <span className="font-mono text-sm font-bold text-[#6E7C69] block mt-1">
                    {activeOrg.organization}
                  </span>
                </div>

                <p className="text-sm text-[#4A4843] font-light leading-relaxed">
                  {activeOrg.summary}
                </p>

                {/* Key Highlights & Governance Impact */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#AF8C72] font-bold block">
                    Leadership Highlights & Deliverables:
                  </span>
                  <div className="space-y-2.5">
                    {activeOrg.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#1E2022] font-light leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#6E7C69] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inspirational Leadership Quote */}
                <div className="p-4 rounded-2xl bg-[#F3EFEA] border-l-4 border-[#AF8C72] text-xs italic text-[#4A4843] font-light">
                  "{activeOrg.quote}"
                </div>
              </div>

              {/* Right Column: Real Event Photo Documentation */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-md aspect-4/3 group border border-[#D7DFD5]">
                  <img
                    src={activeOrg.image}
                    alt={activeOrg.role}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 inset-x-4 text-white text-xs font-mono flex items-center justify-between">
                    <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] border border-white/20">
                      Dokumentasi Kepemimpinan
                    </span>
                    <span className="text-[11px] font-bold text-[#E8DFD4]">
                      {activeOrg.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
