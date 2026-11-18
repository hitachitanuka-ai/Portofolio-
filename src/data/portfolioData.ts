import { Project, BlogPost, Testimonial, FAQItem, ServiceItem } from '../types';

// High-fidelity image and media assets (100% web-safe /assets/ paths for production deployment)
export const IMAGES = {
  // Surya Portraits
  heroSurya: '/assets/images/hero_surya_portrait_1793953405457.jpg',
  heroManProfile: '/assets/images/hero_surya_portrait_1793953405457.jpg',
  suryaOriginal: '/assets/aistudio/WhatsApp_Image_2026-10-29_at_16.02.57_c741c274.jpeg',
  suryaHeroCutout: '/assets/aistudio/bangkit_hero_cutout.png',

  // Surya Personal Photos (Album "myself")
  suryaBalconyExecutive: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.12_3e7ddf4c.jpeg',
  suryaGraduationWalk: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.18.37_be20ea62.jpeg',
  suryaSingaporeMerlion: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.18.42__1__6fff6d80.jpeg',
  suryaLoungeExecutive: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.18.42_4c8916b0.jpeg',
  suryaEventDirector: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.18.34_e2db7e98.jpeg',
  suryaGraduationMonument: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.18.38_c7a982e7.jpeg',
  suryaModernCasual: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.18.46_ec384064.jpeg',
  suryaCeremonyCoordinator: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.18.35_6d7bed69.jpeg',
  suryaPineContemplation: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.18.27_52aaf0b8.jpeg',
  suryaCulturalAttire: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.17_4a4e5d12.jpeg',
  osisChairman2019: '/assets/aistudio/KETUA_DAN_WAKIL_KETUA_OSIS_SMAN_1_DRAMAGA._MASA_JABATAN_2019-2020Ketua_-__Bangkit_Surya_WijayaWa_953dbec9.jpg',
  fkokbChairman2020: '/assets/aistudio/___Forum_Komunikasi_OSIS_Kabupaten_Bogor______Sabtu_-_Minggu__25_-_26_Januari_2020_Bumi_Perkemah_a7fbe21b.jpg',
  fojbKorda2020: '/assets/aistudio/Assalamualaikum_Warahmatullahi_Wabarakatuh_Salam_Pemimpin_Muda_Jawa_Barat_Hai_seluruh_pelajar_Ja_ebafdec1.jpg',
  ipbOsisFestHead2024: '/assets/aistudio/_TEAM_REVEAL_Event__Meet_the_incredible_team_behind_IPB_OSIS_Fest_2024_Get_ready_for_an_unforge_30da11d5.jpg',
  dutaIpbPortrait: '/assets/aistudio/All_eyes_on_Bangkit_Suya_Meet__bangsur.w_our_Duta_IPB_representing_the_excellence_Faculty_of_Ani_d0fe2505.jpg',
  fonCertificate2021: '/assets/aistudio/fon_certificate_2021_2022.jpg',

  // Event & Operational Photos (Sub-Album "Event" - 13 Photos)
  eventFapetIpbStage: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.29__1__69367cb5.jpeg',
  eventMeetingDinner: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.20__1__61679001.jpeg',
  eventAquafestMcDuo: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.28_81c7dcbc.jpeg',
  eventTradisiMelayu: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.37_8f5fc7e0.jpeg',
  eventBatikStaircase: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.29_e1af20f0.jpeg',
  eventMosqueProtocol: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.20_e1e0a389.jpeg',
  eventAquafestSolo: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.39_87d97b6e.jpeg',
  eventDutaIpbStage: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.37__1__471a068d.jpeg',
  eventRamadhanHost: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.36_732b72db.jpeg',
  eventSbIpbCommittee: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.38__1__bd3cd728.jpeg',
  eventTeamFistSteps: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.38_372508c4.jpeg',
  eventVillaRetreat: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.31_91a9456d.jpeg',
  eventVestOutdoor: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_22.19.27_7b7e503c.jpeg',

  // Custom Built Web Apps (Software Products)
  perviaBanner: '/assets/aistudio/pervia_banner.jpg',
  perviaVideo: '/assets/aistudio/PerVia_15s_v4_premium_8cb1ca0e.mp4',
  perviaTalentMatrix: '/assets/aistudio/pervia_talent_matrix.jpg',
  matchifyBanner: '/assets/aistudio/Gemini_Generated_Image_9lz4sq9lz4sq9lz4_9b5d8ac9.jpg',
  matchifyVideo: '/assets/aistudio/gemini_generated_video_fc4adc6f_6688bbe4.mp4',
  sliprBanner: '/assets/aistudio/image_2348a06e.png',
  sliprVideo: '/assets/aistudio/slipr_30s_vo_4k_512595ab.mp4',
  zenoBanner: '/assets/aistudio/image__1__210d840c.png',
  zenoVideo: '/assets/aistudio/ZENO_Promo_30s_Dubbed_1d3e9559.mp4',

  // Photo Folder Archive Covers
  folderCover: '/assets/aistudio/e6891e41bb30d9e020bea71ff7a74ea7_8c7d23a6.jpg',
  fannedCascade: '/assets/aistudio/938baf5c9dc895836ca0212c813c938c_72c8ba7a.jpg',

  // Human Capital, Leadership, Analytics & Operations Assets
  hrChangeMgmt: '/assets/images/hr_change_mgmt_1794116220057.jpg',
  talentRecruit: '/assets/images/talent_recruit_1794116239747.jpg',
  peopleCulture: '/assets/images/people_culture_1794116261599.jpg',
  kpiAnalytics: '/assets/images/kpi_analytics_1794116282497.jpg',
  hrConsulting: '/assets/images/hr_consulting_1794116305359.jpg',

  // Semantic fallbacks for component consistency
  wildBloom: '/assets/images/talent_recruit_1794116239747.jpg',
  softMetals: '/assets/images/hr_change_mgmt_1794116220057.jpg',
  handsReaching: '/assets/images/people_culture_1794116261599.jpg',
  macroEyes: '/assets/images/kpi_analytics_1794116282497.jpg',
  polaroidHooded: '/assets/images/people_culture_1794116261599.jpg',
  polaroidBlonde: '/assets/images/talent_recruit_1794116239747.jpg',
  polaroidHeadphones: '/assets/images/kpi_analytics_1794116282497.jpg',
  faqStudio: '/assets/images/hr_consulting_1794116305359.jpg',
  ctaCosmetic: '/assets/images/hr_consulting_1794116305359.jpg',
};

// Album "myself" inside CreativeStyle
export const SURYA_PHOTOS_ARCHIVE = [
  {
    id: 'myself-1',
    image: IMAGES.suryaBalconyExecutive,
    title: 'Executive Presence & Campus Ambassador',
    subtitle: 'Institutional Leadership & Public Relations Representation',
    year: '2024',
    category: 'Leadership & Formal',
    location: 'IPB University',
  },
  {
    id: 'myself-2',
    image: IMAGES.suryaGraduationWalk,
    title: 'Bachelor of Animal Science (S.Pt.)',
    subtitle: 'Academic Milestone & Faculty Walk (2020–2024)',
    year: '2024',
    category: 'Milestone & Honors',
    location: 'Faculty of Animal Science, IPB',
  },
  {
    id: 'myself-3',
    image: IMAGES.suryaSingaporeMerlion,
    title: 'Global Horizon & City Exploration',
    subtitle: 'International Perspective & Metropolitan Lifestyle',
    year: '2026',
    category: 'Travel & Global',
    location: 'Marina Bay, Singapore',
  },
  {
    id: 'myself-4',
    image: IMAGES.suryaLoungeExecutive,
    title: 'Modern Strategist & Creative Leadership',
    subtitle: 'People & Culture Innovation Mindset',
    year: '2026',
    category: 'Executive Style',
    location: 'Executive Lounge, Jakarta',
  },
  {
    id: 'myself-5',
    image: IMAGES.suryaEventDirector,
    title: 'High-Profile Event Director',
    subtitle: 'Stage Direction & High-Stakes Comms Coordination',
    year: '2025',
    category: 'Operations & Event',
    location: 'Grand Ballroom, Jakarta',
  },
  {
    id: 'myself-6',
    image: IMAGES.suryaGraduationMonument,
    title: 'Department of Animal Production Milestone',
    subtitle: 'Academic Honors & Quantitative Research Thesis (GPA 3.65)',
    year: '2024',
    category: 'Academics & Honors',
    location: 'IPB University',
  },
  {
    id: 'myself-7',
    image: IMAGES.suryaModernCasual,
    title: 'Contemporary Smart Casual',
    subtitle: 'Tech-Forward Workplace Collaboration',
    year: '2026',
    category: 'Smart Casual',
    location: 'Creative Hub, Jakarta',
  },
  {
    id: 'myself-8',
    image: IMAGES.suryaCeremonyCoordinator,
    title: 'Ceremonial Protocol & Logistics Lead',
    subtitle: 'End-to-End Precision Crowd Logistics Management',
    year: '2025',
    category: 'Operations & Logistics',
    location: 'Luxury Hall, Jakarta',
  },
  {
    id: 'myself-9',
    image: IMAGES.suryaPineContemplation,
    title: 'Strategic Focus & Night Contemplation',
    subtitle: 'Visionary Human Capital Thinker',
    year: '2026',
    category: 'Atmospheric Portrait',
    location: 'Pine Park, Bogor',
  },
  {
    id: 'myself-10',
    image: IMAGES.suryaCulturalAttire,
    title: 'Cultural Heritage & Warm Composure',
    subtitle: 'Interpersonal Warmth & Dignified Composure',
    year: '2026',
    category: 'Cultural & Identity',
    location: 'Grand Convention Hall',
  },
];

// Sub-Album "Event" inside CreativeStyle (13 Curated Photos)
export const EVENT_PHOTOS_ARCHIVE = [
  {
    id: 'event-1',
    image: IMAGES.eventAquafestSolo,
    title: 'Aquafest 2024 — Official Keynote Host',
    subtitle: 'Master of Ceremony Hosting the Grand Stage Forum in Formal Tailored Attire',
    year: '2024',
    category: 'Keynote Host & MC',
    location: 'Grand Stage IPB Dramaga',
  },
  {
    id: 'event-2',
    image: IMAGES.eventDutaIpbStage,
    title: '10 Years of Duta IPB — A Decade of Service',
    subtitle: 'Decade Commemoration of the Duta IPB University Ambassador Guild',
    year: '2024',
    category: 'Duta IPB University',
    location: 'IPB International Convention Center',
  },
  {
    id: 'event-3',
    image: IMAGES.eventSbIpbCommittee,
    title: 'IPB School of Business (SB-IPB) — Executive Committee',
    subtitle: 'Formal Executive Committee Delegation at the SB-IPB Hall',
    year: '2024',
    category: 'Executive Committee',
    location: 'IPB School of Business, Bogor',
  },
  {
    id: 'event-4',
    image: IMAGES.eventRamadhanHost,
    title: 'Semarak Ramadhan 1445 H — Keynote Moderator',
    subtitle: 'Lead Moderator & National Dialogue Facilitator',
    year: '2024',
    category: 'Public Moderator',
    location: 'IPB Islamic Studies Center',
  },
  {
    id: 'event-5',
    image: IMAGES.eventMosqueProtocol,
    title: 'VIP State & Ceremonial Protocol',
    subtitle: 'Honorary Protocol Liaison Team at Grand Mosque State Gathering',
    year: '2025',
    category: 'VIP Protocol',
    location: 'Masjid Raya Bogor',
  },
  {
    id: 'event-6',
    image: IMAGES.eventAquafestMcDuo,
    title: 'Aquafest 2024 — Grand Stage MC Duo',
    subtitle: 'Co-Hosting the Main Auditorium Stage Program at Aquafest 2024',
    year: '2024',
    category: 'Stage Host Duo',
    location: 'Auditorium IPB Dramaga',
  },
  {
    id: 'event-7',
    image: IMAGES.eventFapetIpbStage,
    title: 'Faculty of Animal Science IPB — Academic Committee',
    subtitle: 'Student Committee & Faculty Delegation on Main Campus Stage',
    year: '2024',
    category: 'Campus Committee',
    location: 'Faculty of Animal Science, IPB',
  },
  {
    id: 'event-8',
    image: IMAGES.eventMeetingDinner,
    title: 'Executive Leadership & Strategic Committee Meeting',
    subtitle: 'Leadership Review & Strategic Work Program Evaluation Session',
    year: '2025',
    category: 'Boardroom Leadership',
    location: 'Executive Boardroom, Jakarta',
  },
  {
    id: 'event-9',
    image: IMAGES.eventBatikStaircase,
    title: 'Designer Batik Showcase & Grand Staircase Protocol',
    subtitle: 'Coordinating Nusantara Heritage Showcase Logistics at Grand Ballroom',
    year: '2025',
    category: 'Fashion & Protocol',
    location: 'Grand Ballroom, Jakarta',
  },
  {
    id: 'event-10',
    image: IMAGES.eventTradisiMelayu,
    title: 'Nusantara Cultural Ceremonial Council',
    subtitle: 'Traditional Ceremonial Protocol & Cultural Stage Management',
    year: '2024',
    category: 'Cultural Protocol',
    location: 'Gedung Kesenian, Jakarta',
  },
  {
    id: 'event-11',
    image: IMAGES.eventTeamFistSteps,
    title: 'Operational Crew & Field Logistics Solidarity',
    subtitle: 'On-Site Execution Team & High-Volume Crowd Flow Control',
    year: '2025',
    category: 'Operations Crew',
    location: 'Convention Hall Entrance',
  },
  {
    id: 'event-12',
    image: IMAGES.eventVillaRetreat,
    title: 'Leadership Retreat & Strategic Brainstorming',
    subtitle: 'Executive Alignment Retreat & Organizational Vision Consolidation',
    year: '2024',
    category: 'Leadership Retreat',
    location: 'Highland Retreat, Bogor',
  },
  {
    id: 'event-13',
    image: IMAGES.eventVestOutdoor,
    title: 'Outdoor Mega Event Organizing & Crowd Marshall',
    subtitle: 'Field Control & Crowd Safety Coordination for Campus Festival',
    year: '2024',
    category: 'Event Operations',
    location: 'Campus Grounds, IPB',
  },
  {
    id: 'event-14',
    image: IMAGES.ipbOsisFestHead2024,
    title: 'Head of Event — IPB OSIS Fest 2024',
    subtitle: 'Event Division Reveal & National Summit Direction Across 27 Provinces',
    year: '2024',
    category: 'National Summit',
    location: 'IPB University, Bogor',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'pervia-platform',
    title: 'Pervia — Enterprise Performance Management System (PMS)',
    category: 'HR Automation',
    categoryFilter: 'Digital Products',
    date: '2026',
    year: '2026',
    image: IMAGES.perviaBanner,
    videoUrl: IMAGES.perviaVideo,
    projectUrl: 'https://pervia.netlify.app/login',
    client: 'Pervia Enterprise / Strategic People Ops',
    location: 'Jakarta, Indonesia',
    shortSummary: 'Enterprise performance suite featuring real-time KPI deliverable verification, 9-box talent matrix calibration, 360-degree feedback, and multi-tier executive analytics.',
    description: 'Performance is Progress. Unified enterprise performance management platform integrating continuous KPI tracking, 360° multi-rater feedback, 9-Box Grid talent calibration, compensation reviews, and executive performance analytics within one cohesive workspace.',
    features: [
      'Interactive Video Demo Included (Full Product Tour)',
      'Executive Dashboard with Target Alignment (98.4%) & Pulse Metrics',
      'Continuous KPI Tracking & SLA MTTR Deliverable Verification (66 / 92 Audited)',
      '9-Box Grid Talent Matrix & Succession Calibration (Bell-Curve Normalizer)',
      'Multi-Rater 360° Feedback, Supervisor Review, & Self Assessment',
      'Role-Based Workspace Personas (Super Admin, HR Admin, HR Manager, Department Manager, Supervisor, Employee, Reviewer)',
    ],
    exif: {
      camera: 'Role: Product Lead & Performance Architect',
      lens: 'Stack: React, TypeScript, PostgreSQL, Recharts, Enterprise PMS',
      focalLength: '7 Departments · 66 / 92 Verified Deliverables',
      aperture: '98.4% Target Alignment',
      shutter: 'Interactive Video Demo & Live Platform Available',
      iso: 'Performance Intelligence',
    },
    additionalImages: [
      IMAGES.perviaTalentMatrix,
      IMAGES.matchifyBanner,
    ],
    quote: {
      text: 'Performance is not just a static year-end evaluation; it is continuous clarity. Pervia transforms abstract appraisals into objective calibration matrices with instant executive visibility.',
      author: 'Bangkit Surya Wijaya, Creator & Performance Systems Architect',
    },
    caseStudy: {
      overview: 'Pervia is a comprehensive Enterprise Performance Management System (PMS) built to align strategic OKRs, measure verified deliverables, and unlock the full collective potential of teams across 7 functional departments. Engineered with a cinematic, warm-luxury user interface, it bridges the gap between daily employee outputs and board-level organizational targets.',
      challenge: 'Traditional performance appraisal cycles in enterprises suffer from recency bias, subjective scoring friction, uncalibrated bell curves, and disjointed spreadsheet trackers. Managers struggle to verify real deliverable evidence, while executives lack real-time visibility into workforce talent matrices and flight risks.',
      objectives: [
        'Centralize multi-department KPI tracking with verifiable proof-of-work audits.',
        'Implement an objective 9-Box Grid talent matrix with succession risk scoring.',
        'Facilitate holistic 360-degree multi-rater feedback and supervisor evaluations.',
        'Enforce disciplined bell-curve normalization to prevent rating inflation.'
      ],
      strategicApproach: [
        'Engineered role-specific workspace personas (Super Admin, HR Admin, HR Manager, Supervisor, Reviewer, Employee) with strict RBAC data fences.',
        'Designed an interactive 9-Box Grid matrix plotting performance score against leadership potential with automated flight-risk flags.',
        'Constructed automated deliverable audit checklists directly linked to SLA MTTR targets and production defect density.',
        'Developed an executive dashboard with dynamic Recharts visualizations showing department skylines and bonus pool allocations.'
      ],
      execution: {
        steps: [
          'Interface architecture & component design with warm oat cream, soft amber, and sage green palette.',
          'Database schema and evaluation cycles state-machine engineering.',
          'Deliverable proof auditing pipeline with automated score weighting calculations.',
          'Interactive 9-box calibration simulator allowing HR calibration committees to normalize rankings in real time.'
        ],
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'PostgreSQL Schema', 'Role-Based Auth'],
        workflows: 'Goal setting & weight allocation → Continuous deliverable proof submission → Mid-cycle pulse checks → 360-degree feedback collection → Calibration committee 9-box review → Executive sign-off & salary incentive generation.'
      },
      results: {
        metrics: [
          { label: 'Target Alignment', value: '98.4%', detail: 'Exceeds target across 7 departments' },
          { label: 'Verified Deliverables', value: '66 / 92', detail: 'Audit trail validated' },
          { label: 'Company Index', value: '91.4%', detail: 'Enterprise score rating' },
          { label: 'Cycle Velocity', value: '18 Days', detail: 'Cut from 60+ days cycle' }
        ],
        impactNarrative: 'Pervia revolutionized enterprise performance calibration, cutting review turnaround from two months to 18 days while establishing 100% auditable deliverable trails and transparent succession planning.'
      },
      keyLearnings: [
        'Objective evidence verification eliminates supervisor appraisal anxiety and dispute escalation.',
        'Visual talent calibration matrices foster healthier promotion discussions and proactive retention of high-potential stars.',
        'A warm, refined UI significantly drives daily employee engagement compared to sterile enterprise legacy software.'
      ],
      relatedProjectIds: ['matchify-platform', 'slipr-platform', 'zeno-platform']
    }
  },
  {
    id: 'matchify-platform',
    title: 'Matchify — Recruitment Intelligence & RMS',
    category: 'HR Automation',
    categoryFilter: 'Digital Products',
    date: '2026',
    year: '2026',
    image: IMAGES.matchifyBanner,
    videoUrl: IMAGES.matchifyVideo,
    projectUrl: 'https://script.google.com/macros/s/AKfycbygYq3clewdZdfxfOnQox89ep8N9q4jFUIjnJpWUQs2FF4gyKR23msY_3XBzozlnAU/exec',
    client: 'Matchify / PT. Fan Sukses Bersama',
    location: 'Jakarta, Indonesia',
    shortSummary: 'End-to-end recruitment management system with automated interview timetables, live interview timers, and funnel analytics.',
    description: 'An integrated recruitment intelligence platform engineered to streamline hiring pipelines, automated interview timetables, candidate spotlight matching, real-time funnel analytics (benchmark capacity tested up to 5,200+ candidate records across multi-cohort datasets), sourcing channel efficiency telemetry, and automated onboarding checklists.',
    features: [
      'Interactive Video Demo Included (Full Product Tour)',
      'Automated Interview Timetable & Smart Live Timer (45:00)',
      'Recruitment Funnel & Sourcing Efficiency (LinkedIn, JobStreet, Referral)',
      'Candidate Spotlight & Predictive Role Matching',
      'Automated Onboarding Task Checklist with Real-Time Progress Tracking',
    ],
    exif: {
      camera: 'Role: Product Architect & HR Lead',
      lens: 'Stack: React, TypeScript, Apps Script, Workspace APIs',
      focalLength: '5,200+ Candidate Records Benchmarked',
      aperture: '-60% Time-to-Hire (17.2 Days)',
      shutter: 'Interactive Video Demo Available',
      iso: 'Recruitment Intelligence',
    },
    additionalImages: [
      IMAGES.heroSurya,
      IMAGES.macroEyes,
    ],
    quote: {
      text: 'Recruitment is more than finding candidates. Matchify transformed our hiring velocity by unifying screening, timetables, and candidate tracking into one intelligent dashboard.',
      author: 'Bangkit Surya Wijaya, Creator & People Lead',
    },
    caseStudy: {
      overview: 'Matchify was conceived and built to eliminate the massive friction in high-volume recruitment. Operating as an end-to-end Recruitment Management System (RMS), it unifies candidate intake, automated interviewer schedule matching, live 45-minute countdown timers, and multi-channel sourcing analytics into a single responsive cloud dashboard.',
      challenge: 'Fast-scaling companies often suffer from disorganized candidate queues, overlapping interviewer calendars, delayed evaluation feedback, and severe candidate ghosting. Without a unified system, HR teams spend up to 70% of their time manually sending scheduling emails and copying spreadsheet data.',
      objectives: [
        'Eliminate manual scheduling ping-pong between candidates and hiring managers.',
        'Enforce disciplined, objective interview durations with an embedded smart timer.',
        'Provide instant visibility into candidate pipeline velocity across all sourcing channels.',
        'Automate onboarding handoff checklists to secure Day-1 readiness for new hires.'
      ],
      strategicApproach: [
        'Conducted workflow time-motion studies across hiring coordinators to isolate repetitive friction points.',
        'Designed two-way calendar availability mapping linking hiring leads with candidate time slots.',
        'Engineered an objective rubric evaluation matrix embedded directly into the candidate profile view.',
        'Established quantitative sourcing attribution tracking ROI per acquisition channel.'
      ],
      execution: {
        steps: [
          'Wireframing & candidate journey mapping for both mobile applicants and desktop recruiters.',
          'Developing reactive frontend dashboards with real-time funnel visualizer.',
          'Integrating Google Workspace APIs for automated confirmation emails and encrypted access links.',
          'Stress-testing pipeline data handling across 5,000+ candidate records.'
        ],
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Google Apps Script', 'Workspace APIs', 'Cloud Triggers'],
        workflows: 'Applicant submits resume → Automated scoring & profile tagging → Instant slot generation → Live interview with 45-minute timer → Standardized evaluation score entry → Automated offer & onboarding checklist trigger.'
      },
      results: {
        metrics: [
          { label: 'Records Benchmarked', value: '5,200+', detail: 'Multi-cohort & stress-tested pipeline' },
          { label: 'Time-to-Hire', value: '-60%', detail: 'Cut from 43 to 17.2 days' },
          { label: 'Slots Scheduled', value: '3,861', detail: 'Automated calendar benchmark' },
          { label: 'Benchmark Hires', value: '603', detail: 'Live & simulated dataset capacity' }
        ],
        impactNarrative: 'Matchify reduced hiring cycle administrative overhead by 60%, eliminating candidate drop-offs and providing executive leadership with real-time visibility into hiring speed and channel efficacy.'
      },
      keyLearnings: [
        'Candidate experience in the first 48 hours strongly correlates with ultimate offer acceptance rates.',
        'Automating administrative coordination allows recruiters to double the time spent assessing cultural fit and role competency.',
        'In-house cloud automation can achieve 90% of enterprise ATS capabilities at a fraction of commercial SaaS costs.'
      ],
      relatedProjectIds: ['slipr-platform', 'zeno-platform']
    }
  },
  {
    id: 'slipr-platform',
    title: 'Slipr — Smart Digital Payroll & Payslip HRIS',
    category: 'HR Automation',
    categoryFilter: 'Digital Products',
    date: '2026',
    year: '2026',
    image: IMAGES.sliprBanner,
    videoUrl: IMAGES.sliprVideo,
    projectUrl: 'https://script.google.com/macros/s/AKfycbyoq-0LSWK4t6xvg5-OgVx4Eki8GQXEO4x_NA6gEjgpImQEGA0vvGFt4hz0MGOWnvfO3Q/exec',
    client: 'Slipr / PT. Fan Sukses Bersama',
    location: 'Jakarta, Indonesia',
    shortSummary: 'Automated payroll computation engine with integrated BPJS/PPh 21 tax compliance, digital signatures, and encrypted distribution.',
    description: 'Secure and transparent digital payroll management for scaling organizations. Automates salary computation, statutory BPJS & TER PPh 21 tax compliance, legally verified digital document signing, and batch encrypted PDF distribution.',
    features: [
      'Interactive Video Demo Included (Full Product Tour)',
      'Automated Base Salary, Allowances, BPJS & TER PPh 21 Computation',
      'Seamless Digital Document Signing & Verification',
      'Automated Encrypted Bulk Payslip Email Dispatch',
      'Payroll Analytics Console & Mobile-Friendly Employee Payslip View',
    ],
    exif: {
      camera: 'Role: Product Designer & HR Architect',
      lens: 'Stack: React, Google Workspace, Cryptography, UI/UX',
      focalLength: '110+ Active Staff (500+ System Capacity)',
      aperture: '-75% Payroll Processing Time',
      shutter: 'Wireframe → Prototype → Final Design',
      iso: 'Enterprise-grade Security',
    },
    additionalImages: [
      IMAGES.matchifyBanner,
      IMAGES.heroSurya,
    ],
    quote: {
      text: 'Slipr transformed how we compute statutory taxes and distribute monthly payslips—turning a three-day manual bottleneck into a transparent, encrypted 45-minute workflow.',
      author: 'Bangkit Surya Wijaya, Creator & People Lead',
    },
    caseStudy: {
      overview: 'Slipr is a bespoke digital payroll and encrypted payslip management system designed to eliminate human error, guarantee legal tax compliance, and protect salary confidentiality for fast-growing companies.',
      challenge: 'Distributing payslips manually via spreadsheets or printed envelopes creates confidentiality hazards, consumes days of HR time each month, and is susceptible to miscalculating complex BPJS withholdings and dynamic Indonesian PPh 21 TER tax rates.',
      objectives: [
        'Automate pro-rated salary calculations, overtime allowances, and attendance deduction formulas.',
        'Embed statutory BPJS Kesehatan (1% employee, 4% employer) and BPJS Ketenagakerjaan (JHT, JKK, JKM, JP) rates.',
        'Provide legally recognized digital signature verification on every issued document.',
        'Distribute password-protected encrypted PDFs directly to employee personal emails in batch.'
      ],
      strategicApproach: [
        'Mapped entire user journey from HR administrator batch imports to employee mobile readability.',
        'Standardized Indonesian tax calculation algorithms ensuring 100% compliance with Directorate General of Taxes (DJP) rules.',
        'Implemented end-to-end document encryption ensuring strictly zero cross-visibility between staff members.'
      ],
      execution: {
        steps: [
          'Design sprints: wireframing the HR management console and mobile-friendly payslip card view.',
          'Backend spreadsheet calculation engine with automated formula auditing.',
          'PDF compilation pipeline converting structured rows into branded, signed corporate documents.',
          'Automated batch email dispatch with individualized password protection.'
        ],
        techStack: ['Google Workspace APIs', 'Apps Script', 'HTML/CSS Layouts', 'AES Encryption', 'React Preview'],
        workflows: 'Attendance & overtime sync → Automated tax & deduction computation → Digital signature stamping → 1-click encrypted PDF generation & email broadcast → Employee receives mobile-friendly secure payslip.'
      },
      results: {
        metrics: [
          { label: 'Processing Speed', value: '-75%', detail: 'Cut from 3 days to under 1 hour' },
          { label: 'Tax Accuracy', value: '100%', detail: 'Zero withholding discrepancies' },
          { label: 'Privacy Breaches', value: '0', detail: 'End-to-end encrypted distribution' },
          { label: 'Headcount Covered', value: '110+', detail: 'Active personnel supported' }
        ],
        impactNarrative: 'Slipr eliminated administrative payroll overtime, brought complete transparency to employee compensation breakdowns, and elevated organizational trust.'
      },
      keyLearnings: [
        'Compensation clarity is a fundamental pillar of psychological safety and talent retention in the workplace.',
        'Security and encryption should be seamless: users embrace security when it requires zero extra friction on their end.'
      ],
      relatedProjectIds: ['matchify-platform', 'fan-sukses-hr']
    }
  },
  {
    id: 'zeno-platform',
    title: 'Zeno — Integrated Digital Assessment Platform (MBTI & DISC)',
    category: 'HR Automation',
    categoryFilter: 'Data & Analytics',
    date: '2026',
    year: '2026',
    image: IMAGES.zenoBanner,
    videoUrl: IMAGES.zenoVideo,
    projectUrl: 'https://script.google.com/macros/s/AKfycbzhFD87PJRrOvkU8GMA01CgfTRieF-Qisi9tvJTADvqKXvl4AO4WaHA94z4z7NVRCkd/exec',
    client: 'Zeno Assessment / PT. Fan Sukses Bersama',
    location: 'Jakarta, Indonesia',
    shortSummary: 'Validated online psychological testing engine mapping 16 MBTI types and 4 DISC quadrants with real-time scoring.',
    description: 'Know Yourself. Grow Beyond. Integrated digital psychometric assessment engine validating MBTI & DISC profiles, streamlining candidate screening workflows, cutting psychological evaluation turnaround by 85%, and enabling comparative culture-fit hiring.',
    features: [
      'Interactive Video Demo Included (Full Product Tour)',
      'Validated MBTI & DISC Online Testing Engine',
      'Radar Chart Candidate Personality & Cognitive Profiling',
      'Automated Scoring & Real-Time Psychological Report Generation',
      'Seamless Mobile Assessment Experience for Candidates',
    ],
    exif: {
      camera: 'Role: Psychometric Architect & HR Lead',
      lens: 'Stack: Web Assessment Engine, Apps Script, Radar Charts',
      focalLength: '1,200+ Assessments Benchmarked',
      aperture: '-85% Evaluation Turnaround (15 Mins)',
      shutter: 'Interactive Video Demo Available',
      iso: 'Validated Psychometrics',
    },
    additionalImages: [
      IMAGES.matchifyBanner,
      IMAGES.sliprBanner,
    ],
    quote: {
      text: 'Every individual has a unique potential. Zeno transformed our pre-employment psychometrics from manual paper tests into a calibrated 15-minute digital discovery engine.',
      author: 'Bangkit Surya Wijaya, Creator & Human Capital Enthusiast',
    },
    caseStudy: {
      overview: 'Zeno is a cloud-based psychometric assessment engine engineered to provide rapid, objective behavioral and personality evaluations during pre-employment screening and leadership development.',
      challenge: 'Conventional psychometric testing in Indonesia historically required candidates to complete physical paper booklets, followed by manual scoring by HR staff taking 2-3 business days per cohort. This bottleneck caused top talent to accept competitor offers before evaluation was complete.',
      objectives: [
        'Calibrate a 26-question situational behavioral matrix compliant with recognized DISC & MBTI psychometric frameworks.',
        'Provide instant digital test taking on any smartphone without app downloads.',
        'Automate mathematical scoring into standardized radar charts and behavioral archetype summaries.',
        'Enable hiring managers to compare candidate archetypes against existing departmental dynamics for culture fit.'
      ],
      strategicApproach: [
        'Audited test psychometric reliability and construct validity against recognized industrial psychology benchmarks.',
        'Built clear, neutral situational items minimizing social desirability bias.',
        'Generated visual radar charts representing Dominance, Influence, Steadiness, and Conscientiousness balance.'
      ],
      execution: {
        steps: [
          'Matrix calibration and scoring algorithm development.',
          'Mobile-first responsive web testing interface with countdown pacing.',
          'Dynamic SVG radar chart rendering engine.',
          'Automated PDF scorecard generation and cloud database sync.'
        ],
        techStack: ['Dynamic Web Engine', 'Apps Script', 'SVG Charting', 'Google Workspace APIs'],
        workflows: 'Candidate receives digital token link → 10-minute responsive test completion → Scoring algorithm computes 4 DISC scales & 16 MBTI dimensions → Instant executive psychogram generated for recruiter.'
      },
      results: {
        metrics: [
          { label: 'Evaluation Turnaround', value: '-85%', detail: 'Down from 3 days to 15 mins' },
          { label: 'Assessments Scored', value: '1,200+', detail: 'Multi-cohort & system validation' },
          { label: 'Scoring Accuracy', value: '100%', detail: 'Eliminated manual calculation bias' },
          { label: 'Completion Rate', value: '94%', detail: 'Mobile-friendly testing flow' }
        ],
        impactNarrative: 'Zeno empowered recruiters to make objective, data-backed hiring decisions during the initial interview cycle, radically reducing probationary mismatch turnover.'
      },
      keyLearnings: [
        'Candidate engagement increases dramatically when testing interfaces feel modern, respectful of time, and clear.',
        'Psychometrics must serve as an objective conversation starter rather than an absolute exclusionary filter.'
      ],
      relatedProjectIds: ['matchify-platform', 'indekstat-workforce-analysis']
    }
  },
  {
    id: 'fan-sukses-hr',
    title: 'Full-Spectrum HR & Automation Ecosystem',
    category: 'People & Culture',
    categoryFilter: 'HR & People',
    date: 'Apr 2026 – Present',
    year: '2026',
    image: IMAGES.heroSurya,
    client: 'PT. Fan Sukses Bersama',
    location: 'Jakarta, Indonesia',
    shortSummary: 'Managing end-to-end Human Capital operations for 110+ personnel while building practical internal automation tools.',
    description: 'Managing end-to-end Human Capital operations for 110+ employees. Built custom internal workflow tools including automated interview scheduling, psychometric assessment (MBTI & DISC), and automated payslip generation alongside KPI target frameworks.',
    features: [
      'End-to-end HR operations supporting 110+ personnel',
      'Custom in-house digital DISC & MBTI assessment engine',
      'Automated payslip generator syncing with attendance records',
      'Structured division & individual KPI target frameworks',
    ],
    exif: {
      camera: 'Role: People & Culture Lead',
      lens: 'Stack: Payroll Auto, DISC/MBTI, Notion, Sheets',
      focalLength: '110+ Employees Supported',
      aperture: '-65% Admin Processing Time',
      shutter: 'End-to-End Operations',
      iso: 'HR Generalist Ops',
    },
    additionalImages: [
      IMAGES.matchifyBanner,
      IMAGES.peopleCulture,
    ],
    quote: {
      text: 'Surya built our entire HR infrastructure from the ground up, reducing administrative bottlenecks while nurturing a cohesive, high-retention corporate culture.',
      author: 'CEO, PT. Fan Sukses Bersama',
    },
    caseStudy: {
      overview: 'As People & Culture Lead at PT Fan Sukses Bersama, Bangkit Surya Wijaya helped establish and streamline core People & Culture operating workflows for 110+ full-time employees across diverse business divisions.',
      challenge: 'The enterprise experienced rapid commercial growth without formalized human resources infrastructure, resulting in fragmented communication, manual spreadsheets, and undefined performance benchmarks.',
      objectives: [
        'Establish 100% legal compliance in labor contracts, social security (BPJS Ketenagakerjaan & Kesehatan), and workplace safety.',
        'Build in-house digital tool suites to eliminate recurring manual administrative tasks.',
        'Design division-level OKRs cascadeable down to individual contributor KPIs.'
      ],
      strategicApproach: [
        'Conducted employee pulse interviews to map cultural health and operational friction points.',
        'Deployed Matchify for hiring, Slipr for payroll, and Zeno for psychometric talent benchmarking.',
        'Formulated empathetic grievance resolution pathways maintaining high trust and morale.'
      ],
      execution: {
        steps: [
          'Full labor compliance and employment agreement standardization.',
          'Internal deployment of custom automated HR tool suite.',
          'Quarterly KPI performance review cycle structuring.',
          'Weekly cross-divisional culture and knowledge-sharing routines.'
        ],
        techStack: ['Internal HRIS', 'Notion Workspace', 'Google Sheets Analytics', 'DISC/MBTI Tools'],
        workflows: 'Recruitment → Onboarding → Attendance & Payroll Automation → KPI Evaluation & Career Growth Roadmap.'
      },
      results: {
        metrics: [
          { label: 'Workforce Scaled', value: '110+', detail: 'Managed end-to-end' },
          { label: 'Admin Friction', value: '-65%', detail: 'Via custom automation suite' },
          { label: 'Legal Compliance', value: '100%', detail: 'BPJS and regulatory adherence' },
          { label: 'Employee Retention', value: 'High', detail: 'Structured growth pathways' }
        ],
        impactNarrative: 'Transformed an ad-hoc workforce environment into a disciplined, high-velocity corporate machine backed by scalable proprietary software.'
      },
      keyLearnings: [
        'Empathetic leadership and structured operational discipline are mutually reinforcing, not opposing forces.',
        'Lean HR operations thrive on thoughtful prioritization and practical workflow tools that free up time for people.'
      ],
      relatedProjectIds: ['slipr-platform', 'matchify-platform']
    }
  },
  {
    id: 'rakamin-change-mgmt',
    title: 'Change Management & Workforce Architecture',
    category: 'Org Strategy',
    categoryFilter: 'Business & Strategy',
    date: 'Dec 2025 – Mar 2026',
    year: '2026',
    image: IMAGES.hrChangeMgmt,
    client: 'PT. Rakamin Kolektif Madani',
    location: 'Jakarta (Hybrid), Indonesia',
    shortSummary: 'Synthesizing organizational complexity into executive C-suite dashboards and authoring the Corporate Leadership Handbook.',
    description: 'Engineered high-impact change management architecture and workforce planning models, synthesizing complex organizational metrics into executive C-suite strategic dashboards. Architected the corporate Leadership Handbook by auditing cross-functional structures.',
    features: [
      'Executive C-suite Power BI workforce dashboards',
      'Corporate Leadership Handbook authoring',
      'Quantitative workforce needs analysis across divisions',
    ],
    exif: {
      camera: 'Role: Project Analyst',
      lens: 'Stack: Power BI, Org Design, C-Suite Dashboards',
      focalLength: 'Cross-functional Org Scope',
      aperture: '100% Role Clarity Alignment',
      shutter: 'Quarterly Transformation Cycle',
      iso: 'Strategic Workforce Planning',
    },
    additionalImages: [
      IMAGES.kpiAnalytics,
      IMAGES.peopleCulture,
    ],
    quote: {
      text: 'Surya has an exceptional ability to translate complex workforce diagnostics into actionable roadmaps that C-suite executives can immediately execute.',
      author: 'Managing Director, Rakamin Kolektif Madani',
    },
    caseStudy: {
      overview: 'A strategic organizational advisory project focused on designing change management frameworks, workforce capacity models, and leadership playbooks for executive management.',
      challenge: 'Cross-functional division leaders lacked a unified playbook for structural handoffs, causing duplicate work streams, ambiguous decision rights, and delayed corporate initiatives.',
      objectives: [
        'Audit departmental workflow interdependencies across technical, commercial, and operational teams.',
        'Author the authoritative Corporate Leadership Handbook outlining governance, delegation, and escalation matrices.',
        'Synthesize quantitative headcount and budget metrics into executive Power BI dashboards.'
      ],
      strategicApproach: [
        'Engaged division leads in structured capability audits and workload distribution mapping.',
        'Applied Kotter and McKinsey 7S change management frameworks to ensure smooth adoption.',
        'Designed executive dashboard views prioritizing headcount efficiency, utilization rates, and strategic milestone delivery.'
      ],
      execution: {
        steps: [
          'Cross-departmental interview cycles and process blueprinting.',
          'Authoring and standardizing the Corporate Leadership Handbook.',
          'Building interactive Power BI models connected to organizational telemetry.',
          'Facilitating C-suite alignment workshops.'
        ],
        techStack: ['Power BI', 'Organizational Design Frameworks', 'RACI Matrix', 'Executive Briefings'],
        workflows: 'Diagnostic discovery → Structural gap identification → Handbook codification → Dashboard deployment → Leadership training.'
      },
      results: {
        metrics: [
          { label: 'Role Clarity', value: '100%', detail: 'Aligned across all divisions' },
          { label: 'Governance Manual', value: 'Complete', detail: 'Adopted enterprise-wide' },
          { label: 'Reporting Speed', value: '+40%', detail: 'Automated executive dashboards' }
        ],
        impactNarrative: 'Equipped C-suite executives with real-time workforce visibility and provided managers with an unambiguous handbook for day-to-day delegation and accountability.'
      },
      keyLearnings: [
        'Executive dashboards are only as useful as the clarity of the underlying organizational definitions.',
        'Change management succeeds when middle management actively co-authors the operational guidelines.'
      ],
      relatedProjectIds: ['indekstat-workforce-analysis', 'fan-sukses-hr']
    }
  },
  {
    id: 'indekstat-workforce-analysis',
    title: 'Quantitative Workforce Needs Analysis',
    category: 'Org Strategy',
    categoryFilter: 'Data & Analytics',
    date: 'Sep 2024 – Dec 2024',
    year: '2024',
    image: IMAGES.kpiAnalytics,
    client: 'PT. Indekstat Konsultan Indonesia',
    location: 'Jakarta, Indonesia',
    shortSummary: 'Diagnostic workforce needs analysis driving an 85% verified post-program increase in consultant role clarity.',
    description: 'Pioneered quantitative Workforce Needs Analysis across 35 technical consultants using advanced workspace analytics. Formulated target competency frameworks and structured talent development curricula, driving a verified 85% post-program increase in functional role clarity.',
    features: [
      'Diagnostic workspace analytics across 35 technical roles',
      'Standardized competency matrix and evaluation criteria',
      'Optimized recruitment pipeline data tracking systems',
    ],
    exif: {
      camera: 'Role: HC Management Officer',
      lens: 'Stack: Workspace Analytics, Competency Matrix',
      focalLength: '35 Technical Consultants',
      aperture: '+85% Role Clarity Verified',
      shutter: 'MSIB National Program',
      iso: 'Quantitative Diagnostic',
    },
    additionalImages: [
      IMAGES.peopleCulture,
      IMAGES.talentRecruit,
    ],
    quote: {
      text: 'The competency curriculum Surya structured transformed our consultant onboarding and established repeatable performance standards.',
      author: 'Head of Consulting, Indekstat',
    },
    caseStudy: {
      overview: 'Pioneered quantitative Workforce Needs Analysis (WNA) and designed standardized competency evaluation frameworks for 35 specialized research and data consultants.',
      challenge: 'Technical consultants frequently experienced role ambiguity and mismatched workload peaks, causing burnout and unpredictable project delivery timelines.',
      objectives: [
        'Conduct rigorous quantitative work-hour distributions and deliverable mapping for 35 consultants.',
        'Establish standardized competency matrices with measurable behavioral rubrics.',
        'Design a reusable talent onboarding and development curriculum.'
      ],
      strategicApproach: [
        'Gathered empirical work log data and conducted structured 1-on-1 competency audits.',
        'Segmented consultant roles into clear competency tiers with objective milestone requirements.',
        'Built dynamic workload tracking templates integrated into workspace analytics.'
      ],
      execution: {
        steps: [
          'Empirical time-study and task redundancy diagnostic mapping.',
          'Designing the 5-tier technical competency grading matrix.',
          'Restructuring job descriptions and key performance indicators.',
          'Post-implementation pulse survey and role clarity benchmarking.'
        ],
        techStack: ['Workspace Analytics', 'Competency Matrices', 'Spreadsheet Analytics', 'Diagnostic Surveys'],
        workflows: 'Diagnostic survey → Time-study audit → Competency tier calibration → Job description restructuring → Performance validation.'
      },
      results: {
        metrics: [
          { label: 'Role Clarity', value: '+85%', detail: 'Verified post-program survey' },
          { label: 'Consultants Audited', value: '35', detail: '100% technical scope' },
          { label: 'Workload Balance', value: 'Optimized', detail: 'Minimized project bottlenecks' }
        ],
        impactNarrative: 'Delivered an 85% increase in operational role clarity, enabling project directors to allocate consultant hours with mathematical precision.'
      },
      keyLearnings: [
        'Technical professionals thrive when evaluation criteria are explicitly quantified rather than subjectively assumed.',
        'Workforce planning must balance project surge capacity with sustainable baseline utilization.'
      ],
      relatedProjectIds: ['rakamin-change-mgmt', 'zeno-platform']
    }
  },
  {
    id: 'ipb-osis-fest-pr',
    title: 'Nationwide Digital PR Campaign & OSIS Fest',
    category: 'Event Operations',
    categoryFilter: 'Business & Strategy',
    date: 'Oct 2023 – Oct 2024',
    year: '2024',
    image: IMAGES.ipbOsisFestHead2024,
    client: 'Duta IPB University',
    location: 'Bogor & 27 Provinces',
    shortSummary: 'Led a nationwide student summit engaging 270+ student leaders across 27 provinces, winning 1st Place National at PREA 2024.',
    description: 'Led end-to-end execution of a nationwide digital PR campaign engaging over 270 student leaders across 27 provinces. Coordinated cross-functional teams and achieved 1st Place in Digital PR (ESG Theme) at the PR Excellence Awards (PREA) 2024.',
    features: [
      '1st Place Winner PREA 2024 Digital PR',
      'Engaged 270+ student council leaders across 27 provinces',
      'Multi-platform ESG digital communication strategy',
    ],
    exif: {
      camera: 'Role: Head of Event & Duta IPB',
      lens: 'Impact: 270+ Leaders across 27 Provinces',
      focalLength: '2,000+ Participants Coordinated',
      aperture: '1st Place Winner PREA 2024',
      shutter: '12-Month Campaign Execution',
      iso: 'ESG Digital PR',
    },
    additionalImages: [
      IMAGES.heroSurya,
      IMAGES.talentRecruit,
    ],
    quote: {
      text: 'Surya orchestrated IPB OSIS Fest with creative rigor, winning national recognition while establishing an unprecedented student leadership network.',
      author: 'Directorate of Student Affairs, IPB University',
    },
    caseStudy: {
      overview: 'As Head of Event for Duta IPB University, Surya directed the national IPB OSIS Fest summit and spearheaded an ESG-themed digital public relations campaign spanning 27 provinces.',
      challenge: 'Mobilizing high-performing high school student leaders across remote Indonesian archipelagos required flawless digital outreach, sponsorship acquisition, and complex multi-day protocol management.',
      objectives: [
        'Engage top student council presidents across 27 provinces into an active leadership network.',
        'Develop an innovative digital PR campaign centered on ESG and sustainable agriculture.',
        'Flawlessly execute a 3-day multi-venue summit in Bogor for delegates and university chancellery.'
      ],
      strategicApproach: [
        'Created a viral national digital challenge and targeted communication funnel across schools.',
        'Coordinated 70+ student committee members across protocol, logistics, media, and security.',
        'Built an ESG-aligned campaign narrative evaluated by corporate communications judges.'
      ],
      execution: {
        steps: [
          'National digital campaign kickoff and multi-province screening.',
          'VIP stakeholder protocol and keynote speaker synchronization.',
          'Event execution across convention halls, field tours, and awards ceremony.',
          'Comprehensive post-event media report and award submission.'
        ],
        techStack: ['Digital PR Analytics', 'Event Run-Sheets', 'Multi-Venue Logistics', 'Broadcast Comms'],
        workflows: 'Digital recruitment → Regional delegate selection → On-site VIP protocol & summit execution → National PR dissemination.'
      },
      results: {
        metrics: [
          { label: 'National Award', value: '1st Place', detail: 'PREA 2024 Winner (ESG Theme)' },
          { label: 'Provinces Engaged', value: '27', detail: 'Nationwide coverage' },
          { label: 'Student Leaders', value: '270+', detail: 'Elected high school presidents' },
          { label: 'Committee Led', value: '70+', detail: 'Cross-functional student team' }
        ],
        impactNarrative: 'Won 1st Place National at the Public Relations Excellence Awards 2024 and cemented IPB University as the premier national destination for youth leadership.'
      },
      keyLearnings: [
        'Large-scale event success hinges on rigorous protocol redundancies and calm stage presence.',
        'Strategic PR is most powerful when anchored by authentic, participatory youth leadership.'
      ],
      relatedProjectIds: ['sakala-operations', 'fan-sukses-hr']
    }
  },
  {
    id: 'sakala-operations',
    title: 'Large-Scale Crowd Operations & Logistics',
    category: 'Event Operations',
    categoryFilter: 'Business & Strategy',
    date: 'Sep 2025 – Present',
    year: '2025',
    image: IMAGES.talentRecruit,
    client: 'Sakala Wedding & Lamaran.yok',
    location: 'Jakarta Metropolitan Area',
    shortSummary: 'Orchestrating end-to-end logistics for 50+ luxury productions and crowd management for up to 2,000+ attendees.',
    description: 'Orchestrated end-to-end operations for over 50 large-scale luxury projects, managing crowd logistics for up to 2,000+ high-profile guests, leading multi-vendor negotiations, and serving as primary executive stakeholder liaison.',
    features: [
      '50+ large-scale projects executed with 100% operational success',
      'Crowd logistics & VIP guest flow up to 2,000+ attendees',
      'Multi-vendor contracts, time-table execution, and live crisis management',
    ],
    exif: {
      camera: 'Role: Operations Lead / Crew',
      lens: 'Scale: 50+ Major Productions',
      focalLength: '2,000+ Attendees per Event',
      aperture: '100% Operational Success Rate',
      shutter: 'Real-time Crisis Resolution',
      iso: 'Executive Stakeholder Liaison',
    },
    additionalImages: [
      IMAGES.hrChangeMgmt,
      IMAGES.hrConsulting,
    ],
    quote: {
      text: 'Surya combines commanding public presence with calm, meticulous operational control under high pressure.',
      author: 'Principal Event Director, Sakala Wedding',
    },
    caseStudy: {
      overview: 'Directing on-the-ground operational logistics, vendor orchestration, and VIP guest flows for premium events hosting up to 2,000 attendees per production.',
      challenge: 'Luxury large-scale productions operate in zero-margin-for-error environments where minute-by-minute schedules, hundreds of vendor personnel, and unexpected live emergencies require instant decisive leadership.',
      objectives: [
        'Deliver 100% seamless operational run-sheet execution for 50+ high-profile events.',
        'Manage crowd logistics, VIP security protocols, and spatial flow for over 2,000 guests.',
        'Synchronize multi-vendor contracts (audio-visual, floral, security, hospitality) without timeline deviations.'
      ],
      strategicApproach: [
        'Enforce strict minute-by-minute master cue run-sheets with secondary fallback contingencies.',
        'Establish direct radio communication channels and clear operational stream leads.',
        'Maintain impeccable executive composure and diplomatic dispute resolution.'
      ],
      execution: {
        steps: [
          'Pre-production vendor briefing and site inspection.',
          'Spatial crowd flow and VIP ingress/egress mapping.',
          'Live stage direction and crisis mitigation.',
          'Post-production breakdown and client handover.'
        ],
        techStack: ['Event Run-Sheet Architecture', 'Radio Protocols', 'Vendor Contracts', 'Floor Plan Design'],
        workflows: 'Site inspection → Run-sheet synchronization → Live floor coordination → Crisis contingency execution → Operational debrief.'
      },
      results: {
        metrics: [
          { label: 'Events Executed', value: '50+', detail: 'Luxury & corporate productions' },
          { label: 'Guest Capacity', value: '2,000+', detail: 'Per single event flow' },
          { label: 'Success Rate', value: '100%', detail: 'Zero operational failures' },
          { label: 'Vendor Partners', value: '30+', detail: 'Synchronized simultaneously' }
        ],
        impactNarrative: 'Maintained a flawless track record across 50+ complex productions, becoming a trusted operations partner for high-profile clients and luxury production directors.'
      },
      keyLearnings: [
        'Operational elegance is born from obsessive pre-event preparation and calm in-the-moment presence.',
        'High-stakes event logistics share the exact same DNA as high-performance corporate operations: clear roles, disciplined handoffs, and instant communication.'
      ],
      relatedProjectIds: ['ipb-osis-fest-pr', 'fan-sukses-hr']
    }
  },
];

export const EXPERTISE_AREAS = [
  {
    num: '01',
    id: 'people-culture',
    title: 'People & Culture',
    headline: 'Human-Centered Organizational Growth & Operations',
    description: 'Directing full-spectrum Human Capital from recruitment and automated onboarding to retention, KPI/OKR alignment, and regulatory labor compliance (BPJS & PPh 21).',
    competencies: [
      'End-to-End Talent Acquisition',
      'HR Operations & Policy Governance',
      'Performance Management (KPI / OKR)',
      'Learning & Competency Development',
      'Employee Welfare & BPJS Compliance'
    ],
    tools: ['Matchify RMS', 'Slipr Payroll', 'Zeno Psychometrics', 'Google Workspace', 'Notion'],
    practicalApplication: 'Supporting 110+ employees end-to-end as People & Culture Lead at PT Fan Sukses Bersama with clean regulatory compliance and strong team cohesion.',
    relatedProjectIds: ['matchify-platform', 'slipr-platform', 'fan-sukses-hr'],
  },
  {
    num: '02',
    id: 'business-analysis',
    title: 'Business Analysis',
    headline: 'Bridging Corporate Objectives with Practical Execution',
    description: 'Transforming ambiguous organizational workflows into clear, standardized processes. Auditing job grading, RACI accountability matrices, and workload distributions.',
    competencies: [
      'Quantitative Workforce Diagnostics (WNA)',
      'Business Process Mapping & Gap Analysis',
      'Strategic Workforce Architecture',
      'RACI Matrix & Job Grading',
      'Executive Leadership Handbooks'
    ],
    tools: ['Power BI', 'Spreadsheet Analytics', 'Process Flowcharting', 'Competency Matrices'],
    practicalApplication: 'Audited cross-functional structures for PT Rakamin Kolektif Madani and established role clarity frameworks for 35 technical consultants at PT Indekstat.',
    relatedProjectIds: ['rakamin-change-mgmt', 'indekstat-workforce-analysis'],
  },
  {
    num: '03',
    id: 'project-management',
    title: 'Project Management',
    headline: 'Precision Execution Under High-Stakes Constraints',
    description: 'Orchestrating end-to-end delivery of complex cross-functional initiatives, large-scale multi-province summits, and operational logistics for thousands of attendees.',
    competencies: [
      'Timeline & Milestone Governance',
      'Multi-Vendor Contract & Budget Negotiation',
      'Stakeholder & C-Suite Communication',
      'Real-Time Crisis Mitigation',
      'Monitoring, Evaluation & Retrospectives'
    ],
    tools: ['Notion PM', 'Gantt & Kanban Suites', 'Risk Matrices', 'Budget Trackers'],
    practicalApplication: 'Led nationwide IPB OSIS Fest across 27 provinces with 70+ committees and managed crowd logistics for 50+ luxury productions up to 2,000+ guests with 100% operational success.',
    relatedProjectIds: ['ipb-osis-fest-pr', 'sakala-operations'],
  },
  {
    num: '04',
    id: 'digital-product',
    title: 'Digital Product Development',
    headline: 'Engineering Custom Internal SaaS & Automation Tools',
    description: 'Designing bespoke HR and business applications from discovery and wireframes to functional cloud tools that eliminate recurring operational friction without expensive licenses.',
    competencies: [
      'Product Discovery & Requirements Scoping (PRD)',
      'Wireframing & UX Architecture',
      'HRIS & Custom Payroll Automation',
      'Recruitment Management Engines',
      'Psychometric Testing Algorithms'
    ],
    tools: ['React', 'TypeScript', 'Google Apps Script', 'Tailwind CSS', 'Figma'],
    practicalApplication: 'Architected Matchify (RMS with live interview timer), Slipr (automated digital payroll & encrypted payslips), and Zeno (MBTI & DISC testing engine).',
    relatedProjectIds: ['matchify-platform', 'slipr-platform', 'zeno-platform'],
  },
  {
    num: '05',
    id: 'data-performance',
    title: 'Data & Performance Management',
    headline: 'Objective Metrics for Confident Decision-Making',
    description: 'Transforming raw organizational data into actionable executive insights. Crafting calibrated KPI dashboards, behavioral psychometrics, and workforce analytics.',
    competencies: [
      'Workforce Analytics & Labor Diagnostics',
      'Performance Scorecards & Radar Charts',
      'Recruitment Sourcing Channel ROI',
      'Executive C-Suite Dashboard Design',
      'Validated Psychometric Calibration'
    ],
    tools: ['Power BI', 'Google Sheets Analytics', 'DISC/MBTI Matrix', 'Radar Charts'],
    practicalApplication: 'Engineered recruitment analytics benchmarked across 5,200+ pipeline records and built diagnostic models yielding an 85% verified surge in consultant role clarity.',
    relatedProjectIds: ['zeno-platform', 'indekstat-workforce-analysis', 'matchify-platform'],
  },
];

export const PERSONAL_VALUES = [
  {
    num: '01',
    title: 'Strategic Thinking',
    principle: 'Diagnosis precedes prescription.',
    description: 'Looking beyond immediate symptoms to understand root causes, structural interdependencies, and long-term organizational viability before designing solutions.',
  },
  {
    num: '02',
    title: 'Human-Centered Approach',
    principle: 'Systems serve people, not the reverse.',
    description: 'Balancing rigorous business discipline with empathy, clear communication, psychological safety, and meaningful employee growth.',
  },
  {
    num: '03',
    title: 'Continuous Learning',
    principle: 'Curiosity fuels relevance.',
    description: 'Constantly testing new methodologies, from digital SaaS architecture to quantitative workforce planning, staying adaptable in evolving business landscapes.',
  },
  {
    num: '04',
    title: 'Execution Excellence',
    principle: 'Ideas are cheap; execution is everything.',
    description: 'Disciplined follow-through, meticulous detail control, and calm operational precision even when managing high-stakes environments.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'zeno-assessment-platform',
    title: 'Zeno: Architecting Validated Digital MBTI & DISC Psychometric Assessment Engines',
    slug: 'zeno-assessment-platform',
    category: 'HR Systems',
    isMustRead: true,
    date: 'Jul 2026',
    readTime: '6 min read',
    image: IMAGES.zenoBanner,
    videoUrl: IMAGES.zenoVideo,
    demoUrl: 'https://script.google.com/macros/s/AKfycbzhFD87PJRrOvkU8GMA01CgfTRieF-Qisi9tvJTADvqKXvl4AO4WaHA94z4z7NVRCkd/exec',
    summary: 'Impact of better assessment on recruitment: How Zeno transforms conventional paper psychometrics into an interactive digital engine with automated MBTI, DISC, and cognitive radar profiling.',
    content: {
      lead: 'Every individual holds distinct potential, yet pre-employment personality and behavioral assessments frequently stall inside lengthy paper booklets, multi-day manual grading, and subjective bias. Zeno was built to transform psychometrics into a fast, standardized, data-driven digital experience.',
      sections: [
        {
          heading: 'Validating Digital MBTI & DISC Scoring Algorithms',
          paragraphs: [
            'Adopting validated industrial psychometric matrices, Zeno structures 26 calibrated situational prompts that candidates complete in roughly 10 minutes via a responsive mobile and desktop interface.',
            'Automated scoring algorithms instantaneously map 16 MBTI dimensions and all four DISC quadrants (Dominance, Influence, Steadiness, Conscientiousness), generating objective competency radar charts.',
          ],
        },
        {
          heading: 'Cutting Psychometric Evaluation Turnaround by 85%',
          paragraphs: [
            'Prior to Zeno, HR practitioners spent 2 to 3 business days grading physical sheets and compiling psychological profiles. With Zeno, comprehensive assessment dossiers become available to recruiters the moment a candidate submits.',
            'This speed enables confident shortlist decisions within minutes, preventing high-potential talent from accepting competing offers during administrative delays.',
          ],
        },
        {
          heading: 'Data-Backed Culture Fit & Team Complementarity',
          paragraphs: [
            'Beyond individual scoring, Zeno compares candidate behavioral profiles against existing team archetypes, helping hiring managers select talent who complement cross-functional division dynamics.',
            'Integrated alongside Matchify RMS, the recruitment funnel operates as one unified cloud workflow from application intake to behavioral assessment.',
          ],
        },
      ],
    },
  },
  {
    id: 'slipr-payroll-automation',
    title: 'Slipr: Engineering Automated Digital Payroll & Encrypted Payslip Distribution',
    slug: 'slipr-payroll-automation',
    category: 'HR Systems',
    isMustRead: true,
    date: 'Jun 2026',
    readTime: '6 min read',
    image: IMAGES.sliprBanner,
    videoUrl: IMAGES.sliprVideo,
    demoUrl: 'https://script.google.com/macros/s/AKfycbyoq-0LSWK4t6xvg5-OgVx4Eki8GQXEO4x_NA6gEjgpImQEGA0vvGFt4hz0MGOWnvfO3Q/exec',
    summary: 'Secure and transparent digital payslip management: Designing Slipr from wireframe to production with automated BPJS deductions, TER PPh 21 tax compliance, and digital signatures.',
    content: {
      lead: 'Manual payslip distribution consumes days of monthly HR bandwidth while exposing organizations to salary confidentiality leaks and statutory tax miscalculations. Slipr was engineered to deliver concise, encrypted, and legally compliant digital payroll.',
      sections: [
        {
          heading: 'From Wireframe to Production: Human-Centered Payroll UX',
          paragraphs: [
            'Slipr was designed with empathy for two distinct user groups: HR administrators who need rapid bulk spreadsheet ingestion, and employees who deserve crystal-clear mobile readability across base salary, allowances, and tax withholdings.',
            'By iterating from structured wireframes and interactive prototypes to production delivery with verified digital signing, Slipr gives staff immediate clarity on payout breakdowns.',
          ],
        },
        {
          heading: 'Automated BPJS & TER PPh 21 Regulatory Compliance',
          paragraphs: [
            'Slipr’s calculation engine automatically enforces BPJS Kesehatan contributions (1% employee, 4% employer), BPJS Ketenagakerjaan (JHT, JKK, JKM, JP), and the latest Indonesian Effective Average Tax Rate (TER PPh 21) brackets.',
            'Synchronized attendance and overtime inputs generate hundreds of individualized, password-protected payslips in minutes.',
          ],
        },
        {
          heading: 'Encrypted Distribution & Digital Document Signing',
          paragraphs: [
            'Each issued payslip carries verified digital signature stamping and dispatches automatically to each employee’s personal inbox under encrypted PDF protection—guaranteeing zero cross-visibility.',
            'As a result, monthly payroll processing dropped by 75% (from 3 days to under 1 hour), eliminating compensation inquiries and elevating workforce trust.',
          ],
        },
      ],
    },
  },
  {
    id: 'custom-hr-automation',
    title: 'From Manual Chaos to Automated HR: Engineering In-House People Systems',
    slug: 'custom-hr-automation',
    category: 'HR Systems',
    isMustRead: true,
    date: 'May 2026',
    readTime: '6 min read',
    image: IMAGES.matchifyBanner,
    videoUrl: IMAGES.matchifyVideo,
    demoUrl: 'https://script.google.com/macros/s/AKfycbygYq3clewdZdfxfOnQox89ep8N9q4jFUIjnJpWUQs2FF4gyKR23msY_3XBzozlnAU/exec',
    summary: 'How building Matchify, automated interview timetables, digital psychometric assessment engines (MBTI & DISC), and automated payslips slashed administrative cycle times by over 60% for a 110+ employee workforce.',
    content: {
      lead: 'In fast-growing organizations, HR teams often get slowed down by manual spreadsheets, repetitive interview coordination, and disjointed payroll processes. When supporting 110+ employees as People & Culture Lead at PT. Fan Sukses Bersama, the priority was clear: ease repetitive administrative friction through practical, scalable workflow tools.',
      sections: [
        {
          heading: 'Building the Digital Psychometric Engine',
          paragraphs: [
            'Traditional psychometric screening (DISC & MBTI) was either outsourced to expensive third-party portals or calculated manually through physical questionnaires. By engineering an integrated digital testing pipeline, candidates receive automated invitations, complete calibrated assessments, and have their behavioral profiles mapped directly into our hiring matrix.',
            'This removed subjective screening bias and cut the pre-interview evaluation cycle from 3 business days down to under 15 minutes, allowing our hiring team to focus purely on culture add and competency alignment.',
          ],
        },
        {
          heading: 'The Automated Interview Timetable System',
          paragraphs: [
            'Scheduling interviews across multiple team leads with overlapping calendars is a classic productivity bottleneck. I engineered a two-way timetable system that synchronizes candidate availability with departmental interviewers, eliminating back-and-forth emails and boosting candidate experience from day one.',
            'Coupled with automated payslip generation and integrated BPJS tracking, our administrative overhead dropped by more than 60%, allowing HR to invest energy where it matters most: people growth and culture retention.',
          ],
        },
      ],
    },
  },
  {
    id: 'workforce-needs-analysis',
    title: 'Quantitative Workforce Planning: Auditing Structures to Eliminate Role Ambiguity',
    slug: 'quantitative-workforce-planning',
    category: 'Analytics',
    isMustRead: false,
    date: 'Feb 2026',
    readTime: '7 min read',
    image: IMAGES.softMetals,
    summary: 'A practitioner’s guide to conducting quantitative workforce diagnostics, designing competency frameworks, and translating organizational data into executive C-suite dashboards.',
    content: {
      lead: 'Role ambiguity is the silent killer of organizational productivity. When team members do not have razor-sharp clarity on their deliverables, KPIs, and cross-functional handoffs, even top-tier talent stagnates. At Rakamin and Indekstat, I applied quantitative workforce models to bridge this exact gap.',
      sections: [
        {
          heading: 'Auditing Cross-Functional Organizational Structures',
          paragraphs: [
            'Workforce planning starts with empirical discovery rather than assumptions. By analyzing actual work hour distribution, task redundancies, and inter-departmental dependencies across technical personnel, we established clear workload thresholds.',
            'The resulting Corporate Leadership Handbook gave team leads standardized playbooks for delegation, milestone reviews, and performance evaluations, resulting in a verified 85% increase in functional role clarity.',
          ],
        },
      ],
    },
  },
  {
    id: 'psychology-retention',
    title: 'The Architecture of High-Retention Culture: Beyond Surface Perks',
    slug: 'architecture-of-high-retention-culture',
    category: 'People Ops',
    isMustRead: false,
    date: 'Nov 2025',
    readTime: '5 min read',
    image: IMAGES.handsReaching,
    summary: 'Why free snacks and ping-pong tables fail. How structured KPI feedback, empathetic grievance resolution, and transparent career pathways create lasting team harmony.',
    content: {
      lead: 'High retention is not an accident—it is the direct byproduct of psychological safety, fair compensation frameworks, and clear growth trajectories.',
      sections: [
        {
          heading: 'Bridging Corporate Objectives with Personal Milestones',
          paragraphs: [
            'When employees understand exactly how their daily tasks contribute to company revenue and strategy, engagement naturally skyrockets. Structuring division-level OKRs down to individual contributor KPIs provides the scaffolding teams need to thrive autonomously.',
          ],
        },
      ],
    },
  },
  {
    id: 'large-scale-operations',
    title: 'Mastering Stakeholder Logistics for 2,000+ Person Environments',
    slug: 'mastering-stakeholder-logistics',
    category: 'Leadership',
    isMustRead: false,
    date: 'Aug 2025',
    readTime: '5 min read',
    image: IMAGES.wildBloom,
    summary: 'Crucial lessons from coordinating 50+ high-profile events, nationwide student summits, and multi-vendor negotiations under extreme pressure.',
    content: {
      lead: 'Whether managing nationwide delegates at IPB OSIS Fest across 27 provinces or directing a 2,000-guest luxury production, large-scale operations demand radical anticipation and decisive communication.',
      sections: [
        {
          heading: 'The Rule of Redundant Protocol',
          paragraphs: [
            'In live production and high-stakes operations, if something can fail, it will fail unless backed by secondary contingency protocols. Meticulous vendor synchronization and clear stream leadership make the difference between chaos and seamless elegance.',
          ],
        },
      ],
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Muhammad Nendi',
    role: 'President Director',
    company: 'PT. Fan Sukses Bersama',
    initials: 'MN',
    rating: 5,
    content: 'Surya led and transformed our Human Capital division across 110+ personnel with integrity and decisive execution. The Matchify automation suite he built and the structured KPI architecture introduced measurable operational discipline and team loyalty.',
  },
  {
    id: '2',
    name: 'Titis Praktiknyo',
    role: 'Executive Leadership (Operations & Strategy)',
    company: 'PT Indekstat Konsultan Indonesia',
    initials: 'TP',
    rating: 5,
    content: 'Surya possesses a rare ability to unite large-scale operational strategy with quantitative workforce diagnostics. His analytical rigor and disciplined follow-through directly improved role clarity and productivity across our consulting teams.',
  },
  {
    id: '3',
    name: 'Haikal Saputra',
    role: 'National Committee',
    company: 'Directorate of Promotion Duta IPB University',
    initials: 'HS',
    rating: 5,
    content: 'Surya’s leadership coordinating national operations across 27 provinces and guiding our delegation to 1st Place at PREA 2024 proves his public communication mastery, talent orchestration, and calm resilience under pressure.',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What core human capital functions do you specialize in?',
    answer: 'I specialize in full-spectrum Human Capital & People Experience: end-to-end talent acquisition, organizational development, KPI/OKR performance architecture, employee welfare & BPJS compliance, and in-house digital HR process automation.',
  },
  {
    id: 'faq-2',
    question: 'How do your custom HR automation systems (like Matchify) work?',
    answer: 'I engineer custom, scalable recruitment & HR automation platforms. For example, Matchify integrates automated interview scheduling timetables, live interview timers, candidate spotlight matching, and multi-channel sourcing analytics that slash hiring cycle times by over 60%.',
  },
  {
    id: 'faq-3',
    question: 'Are you open to full-time roles, strategic consulting, or project advisory?',
    answer: 'Yes. I am available for full-time People & Culture Lead / HR Specialist roles, as well as high-impact organizational consulting, workforce needs analysis, and change management projects across Indonesia and remote setups.',
  },
  {
    id: 'faq-4',
    question: 'How do you approach workforce planning for technical teams?',
    answer: 'My methodology is strictly data-driven: I conduct quantitative Workforce Needs Analysis (WNA), identify functional role overlaps, define competency matrices, and build executive C-suite dashboards that align headcount with business revenue objectives.',
  },
  {
    id: 'faq-5',
    question: 'Do you also provide public speaking, event moderation, or MC services?',
    answer: 'Yes. As Duta IPB and with experience moderating national student leadership summits and coordinating live audiences of over 2,000+ participants, I regularly serve as keynote moderator, MC, and strategic speaker on HR innovation and youth leadership.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'people-lead',
    title: 'People & Culture Leadership',
    tagline: 'End-to-end full-spectrum HR operations and high-retention workplace culture',
    description: 'Comprehensive human capital management for high-growth enterprises and startups. Covering talent acquisition, attendance & scheduling, employee welfare, BPJS compliance, and conflict resolution.',
    features: ['End-to-end HR operations support for 100+ headcount', 'KPI / OKR performance architecture', 'Employee engagement & retention programs'],
    turnaround: 'Full-time / Ongoing',
    idealFor: 'Growing tech startups, commercial companies, enterprise divisions',
  },
  {
    id: 'hr-automation',
    title: 'Custom HR Systems & Automation',
    tagline: 'Eliminate repetitive manual bottlenecks with bespoke internal tools',
    description: 'Engineering specialized, cost-effective HR automation workflows: Matchify recruitment intelligence, automated interview timetable scheduling, digital psychometric assessment (MBTI & DISC), and automated payslip generators.',
    features: ['Automated interview scheduling system', 'Custom DISC / MBTI assessment engines', 'Automated payslip & attendance calculation'],
    turnaround: '7–14 days per module',
    idealFor: 'Teams bogged down by manual HR admin and spreadsheet chaos',
  },
  {
    id: 'workforce-strategy',
    title: 'Workforce Planning & Org Design',
    tagline: 'Quantitative diagnostics and change architecture for executive clarity',
    description: 'Auditing cross-functional structures, conducting quantitative Workforce Needs Analysis (WNA), authoring corporate leadership handbooks, and synthesizing workforce data into executive C-suite dashboards.',
    features: ['Quantitative workforce diagnostics', 'Role competency matrix design', 'Power BI executive dashboards'],
    turnaround: '2–4 weeks engagement',
    idealFor: 'Companies undergoing restructuring, rapid hiring, or role ambiguities',
  },
  {
    id: 'event-operations',
    title: 'Strategic Operations & Moderation',
    tagline: 'High-stakes crowd logistics, multi-vendor coordination, and public speaking',
    description: 'Flawless execution of large-scale corporate summits, award galas, and high-profile events with up to 2,000+ attendees. Meticulous vendor negotiation and seasoned public speaking/moderation.',
    features: ['Crowd logistics for 2,000+ attendees', 'Multi-vendor negotiation & liaison', 'Professional moderation & MC services'],
    turnaround: 'Per event / project basis',
    idealFor: 'Conferences, nationwide summits, luxury events, student forums',
  },
];
