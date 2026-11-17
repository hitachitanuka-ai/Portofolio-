import React from 'react';
import { ArrowUpRight, FileText, Sparkles, GraduationCap } from 'lucide-react';
import { IMAGES } from '../../data/portfolioData';
import { getLocalizedPersonalValues } from '../../data/portfolioLocalized';
import { AppRoute } from '../../types';
import { ScrollReveal } from '../ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

interface AboutPageProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
  onOpenResume: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenResume }) => {
  const { lang, t } = useLanguage();
  const values = getLocalizedPersonalValues(lang);

  return (
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 sm:space-y-12">
        {/* =========================================================================
            SECTION A — PERSONAL INTRODUCTION
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start border-b border-[#E7E0D6] pb-8 sm:pb-12">
          {/* Left Column: Portrait + Academic Credential */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal immediateOnMount variant="media" duration={1.0} delay={0.04}>
              <div className="relative aspect-[4/5] bg-white p-3 sm:p-4 rounded-3xl border border-[#E7E0D6] shadow-md">
                <img
                  src={IMAGES.suryaBalconyExecutive}
                  alt="Bangkit Surya Wijaya — Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top rounded-2xl filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 bg-[#1E2022]/95 backdrop-blur-md text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[10.5px] sm:text-xs uppercase tracking-widest border border-white/20 shadow-md">
                  B. Surya Wijaya · S.Pt.
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="card" delay={0.14}>
              <div className="p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-3 shadow-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6E7C69]/10 text-[#6E7C69] text-[11px] font-mono uppercase tracking-wider font-bold">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{t('Academic & Quantitative Credential', 'Kredensial Akademik & Kuantitatif')}</span>
                </div>
                <strong className="font-sans font-bold text-xl text-[#1E2022] block">
                  Institut Pertanian Bogor (IPB University)
                </strong>
                <p className="text-xs text-[#605E59] font-mono leading-relaxed">
                  {t(
                    'Bachelor of Animal Science (S.Pt.) · GPA 3.65 / 4.00',
                    'Sarjana Peternakan (S.Pt.) · IPK 3,65 / 4,00'
                  )}
                  <br />
                  {t(
                    'Quantitative Modeling & Statistical Optimization · Duta IPB University · PREA 2024 Winner',
                    'Pemodelan Kuantitatif & Optimasi Statistik · Duta IPB University · Juara 1 PREA 2024'
                  )}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <ScrollReveal immediateOnMount variant="editorial" delay={0.08}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#AF8C72]/15 text-[#AF8C72] text-[11px] font-mono uppercase tracking-wider font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('Editorial Biography', 'Biografi Profesional')}</span>
              </div>
              <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#1E2022] tracking-tight leading-tight">
                Bangkit Surya Wijaya
              </h1>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#6E7C69] font-bold block mt-2 leading-relaxed">
                {t(
                  'People Operations & HR Systems Specialist | Managing 110+ Workforce & Building In-House HR Tech (PMS, ATS, Payroll, Analytics)',
                  'Spesialis People Operations & Sistem HR | Mengelola 110+ Karyawan & Membangun HR Tech Internal (PMS, ATS, Payroll, Analitik)'
                )}
              </span>
            </ScrollReveal>

            <ScrollReveal immediateOnMount variant="editorial" delay={0.16} className="space-y-5 text-[#4A4843] text-sm sm:text-base leading-relaxed font-light">
              <p className="text-lg text-[#1E2022] font-normal leading-relaxed">
                {t(
                  'Managing 110+ workforce operations and building in-house HR tech (PMS, ATS, Payroll, Analytics) — helping growing organizations scale without losing their human foundation.',
                  'Mengelola operasional 110+ karyawan sekaligus membangun HR Tech internal (PMS, ATS, Payroll, Analitik) — membantu perusahaan bertumbuh tanpa kehilangan fondasi manusianya.'
                )}
              </p>

              <p>
                {t(
                  'My professional trajectory is built on practical, hands-on execution. As People & Culture Lead supporting over 110 employees at PT Fan Sukses Bersama, I do not just draft policies; I also build practical software tools that keep workflows accurate and approachable. When manual hiring, payslips, and psychometrics slowed operational momentum, I created Matchify, Slipr, and Zeno to ease those bottlenecks.',
                  'Perjalanan karier saya dibangun di atas eksekusi langsung di lapangan. Sebagai People & Culture Lead yang mendampingi lebih dari 110 karyawan di PT Fan Sukses Bersama, saya tidak berhenti pada penulisan kebijakan—saya turut membangun perangkat lunak yang menjaga alur kerja tetap akurat dan mudah dijalankan. Saat proses rekrutmen, penggajian, dan psikotes manual menghambat laju tim, saya merancang Matchify, Slipr, dan Zeno.'
                )}
              </p>

              <p>
                {t(
                  'Trained at IPB University in quantitative modeling and statistical optimization (Bachelor of Animal Science S.Pt., GPA 3.65), I translate scientific analytical rigor directly into People Analytics: structuring empirical Workforce Needs Analysis (WNA) at PT Indekstat, building C-suite Power BI workforce dashboards and RACI frameworks at PT Rakamin Kolektif Madani, and designing algorithmic scoring rubrics.',
                  'Terlatih di IPB University dalam pemodelan kuantitatif dan optimasi statistik (S.Pt., IPK 3,65), saya menerapkan ketajaman metode ilmiah tersebut langsung ke dalam People Analytics: merumuskan Workforce Needs Analysis (WNA) empiris di PT Indekstat, menyusun dashboard tenaga kerja Power BI dan matriks RACI di PT Rakamin Kolektif Madani, hingga merancang algoritma skoring rekrutmen.'
                )}
              </p>

              <p>
                {t(
                  'Outside the boardroom, directing high-stakes event operations—from leading the national IPB OSIS Fest across 27 provinces to orchestrating 50+ luxury productions for up to 2,000 guests—sharpened my instinct for real-time crisis mitigation, disciplined run-sheets, and executive diplomacy.',
                  'Di luar ruang rapat, memimpin operasional acara berskala besar—mulai dari konferensi nasional IPB OSIS Fest lintas 27 provinsi hingga mengorkestrasi 50+ produksi acara hingga 2.000 tamu—mengasah naluri mitigasi krisis cepat, kedisiplinan timeline, dan diplomasi pemangku kepentingan.'
                )}
              </p>
            </ScrollReveal>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E7E0D6] text-center">
              <ScrollReveal variant="card" delay={0}>
                <div className="p-4 bg-white border border-[#E7E0D6] rounded-2xl shadow-xs">
                  <span className="font-sans font-black text-3xl text-[#1E2022] block">110+</span>
                  <span className="font-mono text-[10px] text-[#AF8C72] uppercase tracking-wider font-semibold">
                    {t('Staff Managed', 'Karyawan Dikelola')}
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="card" delay={0.07}>
                <div className="p-4 bg-white border border-[#E7E0D6] rounded-2xl shadow-xs">
                  <span className="font-sans font-black text-3xl text-[#6E7C69] block">-75%</span>
                  <span className="font-mono text-[10px] text-[#AF8C72] uppercase tracking-wider font-semibold">
                    {t('Payroll Time', 'Waktu Payroll')}
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="card" delay={0.14}>
                <div className="p-4 bg-white border border-[#E7E0D6] rounded-2xl shadow-xs">
                  <span className="font-sans font-black text-3xl text-[#1E2022] block">50+</span>
                  <span className="font-mono text-[10px] text-[#AF8C72] uppercase tracking-wider font-semibold">
                    {t('Major Events', 'Acara Skala Besar')}
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="card" delay={0.21}>
                <div className="p-4 bg-white border border-[#E7E0D6] rounded-2xl shadow-xs">
                  <span className="font-sans font-black text-3xl text-[#AF8C72] block">3.65</span>
                  <span className="font-mono text-[10px] text-[#AF8C72] uppercase tracking-wider font-semibold">
                    {t('IPB GPA (S.Pt.)', 'IPK IPB (S.Pt.)')}
                  </span>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="subtle" delay={0.16} className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#1E2022] text-white hover:bg-black text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-full flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                <FileText className="w-4 h-4 text-[#AF8C72]" />
                <span>{t('Download Executive CV', 'Unduh CV Eksekutif')}</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#1E2022] border border-[#E7E0D6] hover:bg-[#1E2022] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer rounded-full shadow-xs active:scale-95 text-center"
              >
                {t('Start a Conversation', 'Mulai Diskusi')}
              </button>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            SECTION B — PROFESSIONAL PHILOSOPHY
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border-b border-[#E7E0D6] pb-8 sm:pb-12 items-start">
          <ScrollReveal variant="editorial" delay={0} className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#AF8C72] block font-bold">
              {t('Approach & Mindset', 'Pendekatan & Pola Pikir')}
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#1E2022] tracking-tight leading-tight">
              {t('Professional Philosophy', 'Filosofi Profesional')}
            </h2>
          </ScrollReveal>

          <div className="lg:col-span-8 space-y-6 text-[#4A4843] text-sm sm:text-base leading-relaxed font-light">
            <ScrollReveal variant="editorial" delay={0.08}>
              <blockquote className="font-serif text-xl sm:text-2xl text-[#1E2022] italic pl-4 sm:pl-6 border-l-4 border-[#6E7C69] leading-snug">
                {t(
                  '"Great systems do not replace human discernment; they create the quiet bandwidth required for discernment to flourish."',
                  '"Sistem yang baik tidak menggantikan kebijaksanaan manusia; sistem menciptakan ruang tenang agar keputusan strategis dapat bertumbuh jernih."'
                )}
              </blockquote>
            </ScrollReveal>

            <ScrollReveal variant="editorial" delay={0.14}>
              <p>
                {t(
                  'I believe modern organizational strategy fails when it treats human capital as either an abstract spreadsheet headcount or an emotional cheerleading exercise. Sustainable organizational health requires three interlocking pillars:',
                  'Strategi organisasi modern gagal ketika memperlakukan manusia hanya sebagai angka statistik kaku atau sekadar jargon motivasi tanpa struktur. Kesehatan organisasi yang berkelanjutan menuntut tiga pilar yang saling mengunci:'
                )}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs font-normal">
              <ScrollReveal variant="card" delay={0.08} className="h-full">
                <div className="h-full p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-2 shadow-xs">
                  <span className="font-mono text-[#6E7C69] text-xs font-bold block">
                    {t('01 / Rigorous Diagnosis', '01 / Diagnosis Terukur')}
                  </span>
                  <p className="text-[#605E59] leading-relaxed">
                    {t(
                      'Understand true task redundancies and structural bottlenecks through quantitative time-studies before recommending organizational shifts.',
                      'Memahami redundansi beban kerja dan hambatan struktur melalui data empiris sebelum merekomendasikan perubahan organisasi.'
                    )}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="card" delay={0.16} className="h-full">
                <div className="h-full p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-2 shadow-xs">
                  <span className="font-mono text-[#AF8C72] text-xs font-bold block">
                    {t('02 / Seamless Automation', '02 / Otomasi Tepat Guna')}
                  </span>
                  <p className="text-[#605E59] leading-relaxed">
                    {t(
                      'Replace repetitive administrative friction with bespoke software tools so team energy is invested in retention and high-value coaching.',
                      'Mengganti pekerjaan administratif berulang dengan perangkat lunak kustom agar energi tim tercurah untuk retensi dan pengembangan talenta.'
                    )}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="card" delay={0.24} className="h-full">
                <div className="h-full p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-2 shadow-xs">
                  <span className="font-mono text-[#1E2022] text-xs font-bold block">
                    {t('03 / Empathetic Clarity', '03 / Kejelasan Berempati')}
                  </span>
                  <p className="text-[#605E59] leading-relaxed">
                    {t(
                      'Enforce accountability through radical transparency, unambiguous job expectations, and deep respect for individual dignity.',
                      'Menegakkan akuntabilitas lewat transparansi ekspektasi, deskripsi jabatan yang tegas, dan penghormatan terhadap martabat individu.'
                    )}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION C — CAREER PERSPECTIVE
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border-b border-[#E7E0D6] pb-8 sm:pb-12 items-start">
          <ScrollReveal variant="editorial" delay={0} className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6E7C69] block font-bold">
              {t('Evolution of Thought', 'Evolusi Cara Pandang')}
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#1E2022] tracking-tight leading-tight">
              {t('Career Perspective', 'Perspektif Karier')}
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="editorial" delay={0.12} className="lg:col-span-8 space-y-6 text-[#4A4843] text-sm sm:text-base leading-relaxed font-light">
            <p>
              {t(
                'My path has deliberately bridged quantitative science, people governance, and software execution. Starting from academic modeling at IPB University and institutional representation as Duta IPB, I learned early that both sound data and clear human consensus are required to move complex organizations forward.',
                'Langkah karier saya sengaja memadukan metode sains kuantitatif, tata kelola manusia, dan eksekusi perangkat lunak. Berawal dari pemodelan statistik di IPB University dan diplomasi sebagai Duta IPB, saya belajar bahwa data yang akurat dan komunikasi empatik sama-sama krusial untuk menggerakkan organisasi.'
              )}
            </p>
            <p>
              {t(
                'Transitioning into corporate human capital, I saw standard HR teams paralyzed by manual spreadsheets and disconnected trackers. Rather than waiting on costly third-party SaaS vendors, I applied product engineering to build tailored HR platforms matched precisely to Indonesian labor regulations and real operational workflows.',
                'Memasuki dunia Human Capital korporasi, saya melihat banyak tim HR tersandera proses manual yang lambat. Alih-alih menunggu pengadaan vendor SaaS eksternal yang mahal, saya membangun aplikasi HR internal yang sesuai dengan regulasi ketenagakerjaan Indonesia (TER PPh 21, BPJS) dan ritme kerja tim.'
              )}
            </p>
            <p>
              {t(
                'Today, I operate comfortably aligning KPIs with C-suite leaders, architecting ATS and payroll software, and directing live operational teams under tight deadlines.',
                'Kini, saya bergerak dengan luwes menyelaraskan target KPI bersama jajaran direksi, merancang sistem ATS dan payroll terenkripsi, serta memimpin operasi lapangan di bawah tekanan tinggi.'
              )}
            </p>
          </ScrollReveal>
        </section>

        {/* =========================================================================
            SECTION D — PERSONAL VALUES
            ========================================================================= */}
        <section className="space-y-6">
          <ScrollReveal variant="editorial" delay={0}>
            <span className="font-mono text-xs uppercase tracking-widest text-[#AF8C72] block font-bold mb-2">
              {t('Ethos & Principles', 'Etos & Prinsip Kerja')}
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#1E2022] tracking-tight">
              {t('Personal Values', 'Nilai-Nilai Personal')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, valIdx) => (
              <ScrollReveal key={val.num} variant="card" delay={valIdx * 0.08} className="h-full">
                <div className="h-full p-6 sm:p-8 bg-white border border-[#E7E0D6] rounded-3xl space-y-3.5 sm:space-y-4 shadow-xs hover:border-[#6E7C69] transition-all">
                  <span className="font-mono text-xs text-[#6E7C69] font-bold block">
                    {val.num} / {t('PRINCIPLE', 'PRINSIP')}
                  </span>
                  <h3 className="font-sans font-bold text-xl text-[#1E2022]">
                    {val.title}
                  </h3>
                  <p className="font-mono text-xs text-[#AF8C72] italic font-semibold">
                    "{val.principle}"
                  </p>
                  <p className="text-xs text-[#605E59] leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION E — RESUME DOWNLOAD CTA BANNER
            ========================================================================= */}
        <ScrollReveal variant="media" duration={0.95} delay={0.08}>
          <section className="p-6 sm:p-9 bg-[#6E7C69] text-white rounded-[2rem] shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#EAE2D8] font-bold">
                {t('Curriculum Vitae & Credentials', 'Daftar Riwayat Hidup & Kredensial')}
              </span>
              <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-white">
                {t('Looking for a comprehensive resume?', 'Butuh ringkasan CV profesional lengkap?')}
              </h3>
              <p className="text-xs sm:text-sm text-[#F3EFEA]/90 max-w-xl font-light">
                {t(
                  'Review verified career milestones, technical stack competencies, academic honors, and organizational leadership in a printable executive document.',
                  'Tinjau rekam jejak karier terverifikasi, kompetensi teknis sistem HR, prestasi akademik, dan kepemimpinan organisasi dalam format CV siap cetak.'
                )}
              </p>
            </div>

            <button
              onClick={onOpenResume}
              className="w-full md:w-auto px-8 py-4 bg-[#1E2022] text-white hover:bg-black text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer shrink-0 shadow-md flex items-center justify-center gap-2"
            >
              <span>{t('Open Executive CV', 'Buka CV Eksekutif')}</span>
              <ArrowUpRight className="w-4 h-4 text-[#AF8C72]" />
            </button>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
};
