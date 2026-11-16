import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Cpu, 
  TrendingUp, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  BarChart3,
  Building2,
  Workflow
} from 'lucide-react';
import { IMAGES, TESTIMONIALS } from '../data/portfolioData';
import { ReticleFrame } from './ReticleFrame';

interface BenefitsBentoProps {
  onViewPortfolio: () => void;
}

export const BenefitsBento: React.FC<BenefitsBentoProps> = ({ onViewPortfolio }) => {
  // Live ticking clock for the 7-day turnaround sprint card
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setSeconds(now.getSeconds() + now.getMilliseconds() / 1000);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const secondAngle = (seconds / 60) * 360;

  return (
    <section className="w-full py-28 px-6 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-4 text-[11px] font-semibold tracking-wider uppercase text-neutral-700 bg-neutral-100 rounded-full border border-neutral-200/80 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Core Value Proposition</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-4">
              Why work with me?
            </h2>
            <p className="text-base text-neutral-600 max-w-xl leading-relaxed">
              Human Capital strategis bukan sekadar administrasi personalia. Saya menggabungkan analisis diagnostik kuantitatif, rekayasa otomasi sistem internal, dan kepemimpinan empatik untuk melipatgandakan performa organisasi.
            </p>
          </div>

          <button
            onClick={onViewPortfolio}
            className="self-start md:self-end px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black border border-neutral-300 rounded-full hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all cursor-pointer shrink-0 active:scale-95 shadow-xs"
          >
            Lihat Portofolio Lengkap →
          </button>
        </motion.div>

        {/* Asymmetrical Bento-Box Grid */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {/* Tile 1: 110+ Workforce Scaled & Regulated */}
          <div className="md:col-span-1 lg:col-span-1 p-7 rounded-3xl bg-white/90 backdrop-blur-sm border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group">
            <ReticleFrame size={14} color="border-neutral-300 group-hover:border-neutral-900 transition-colors" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                  People Operations
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  100% Compliant
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-neutral-900 leading-tight mb-1">
                110+ Workforce Scaled
              </h3>
              <p className="text-xs text-neutral-500">
                End-to-end full spectrum management
              </p>
            </div>

            {/* Interactive Department Workforce Nodes */}
            <div className="my-6 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-neutral-600 font-medium flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-neutral-700" />
                  Divisi Operasional & Bisnis
                </span>
                <span className="font-mono font-bold text-neutral-900">75 Staff</span>
              </div>
              <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-neutral-900 h-full rounded-full w-[70%]" />
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1">
                <span className="text-neutral-600 font-medium flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-neutral-700" />
                  Konsultan & Tim Teknis
                </span>
                <span className="font-mono font-bold text-neutral-900">35 Personel</span>
              </div>
              <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-sky-500 h-full rounded-full w-[35%]" />
              </div>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed relative z-10">
              People &amp; Culture Lead yang mendampingi operasional karyawan, absensi digital, kesejahteraan, dan kepatuhan BPJS secara end-to-end.
            </p>
          </div>

          {/* Tile 2: Custom HR Automation Suite (Dark Tech Card) */}
          <div className="md:col-span-2 lg:col-span-1 p-7 rounded-3xl bg-neutral-950 text-white flex flex-col justify-between overflow-hidden relative group shadow-xl">
            <ReticleFrame size={14} color="border-neutral-700 group-hover:border-sky-400 transition-colors" />

            <div className="relative z-10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 block mb-2 flex items-center gap-1.5 font-semibold">
                <Zap className="w-3.5 h-3.5 text-sky-400" />
                In-House Innovation
              </span>
              <h3 className="font-display font-bold text-2xl text-white mb-1">
                Custom HR Automation
              </h3>
              <p className="text-xs text-neutral-400">
                Sistem rekrutmen, payroll, dan asesmen digital mandiri
              </p>
            </div>

            <div className="my-5 rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-900 border border-neutral-800 relative group-hover:border-neutral-700 transition-colors">
              <img
                src={IMAGES.sliprBanner}
                alt="Custom automation dashboard"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/90">
                <span className="bg-neutral-900/90 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                  Matchify & Slipr Engines
                </span>
                <span className="text-emerald-400 font-bold">● Active Cloud</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed relative z-10">
              Membangun sistem otomasi tanpa biaya langganan SaaS mahal: jadwal interview instan, asesmen psikometri MBTI/DISC, dan slip gaji terenkripsi.
            </p>
          </div>

          {/* Tile 3: 85% Role Clarity Surge (Quantitative Diagnostics Card) */}
          <div className="md:col-span-3 lg:col-span-2 p-7 rounded-3xl bg-white/90 backdrop-blur-sm border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <ReticleFrame size={14} color="border-neutral-300 group-hover:border-neutral-900 transition-colors" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-neutral-700" />
                  Workforce Diagnostics
                </span>
                <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                  RACI Matriks Standard
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mb-2">
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900">
                  85% Role Clarity Surge
                </h3>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  +35 Technical Personnel
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mb-5 leading-relaxed">
                Memelopori quantitative Workforce Needs Analysis berbasis workspace analytics. Menghilangkan tumpang tindih tanggung jawab dan menyusun job description terukur.
              </p>
            </div>

            <div className="w-full h-40 sm:h-44 rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-900 relative">
              <img
                src={IMAGES.kpiAnalytics}
                alt="Precision workforce diagnostics"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-neutral-950/40 pointer-events-none" />
              <div className="absolute bottom-3 left-4 z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-white/95 font-medium">
                  Verified Audit — PT Indekstat Konsultan Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Tile 4: 50+ High-Profile Event Operations */}
          <div className="md:col-span-1 lg:col-span-2 p-7 rounded-3xl bg-white/90 backdrop-blur-sm border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <ReticleFrame size={14} color="border-neutral-300 group-hover:border-neutral-900 transition-colors" />

            <div className="w-full h-40 sm:h-44 rounded-2xl overflow-hidden mb-4 bg-neutral-900 border border-neutral-200/80 relative">
              <img
                src={IMAGES.eventMosqueProtocol}
                alt="VIP State Protocol & Large-Scale Operations"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-mono border border-white/15">
                <Building2 className="w-3 h-3 text-amber-400" />
                <span>VIP State Protocol & 50+ Productions</span>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1 font-semibold">
                Executive Logistics & Crisis Mitigation
              </span>
              <h3 className="font-display font-bold text-2xl text-neutral-900 mb-1">
                50+ High-Profile Operations
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Mengorkestrasi alur massa dan koordinasi puluhan vendor profesional untuk hingga 2.000+ tamu per event dengan kepuasan operasional 100%.
              </p>
            </div>
          </div>

          {/* Tile 5: Measurable Business Velocity & Efficiency */}
          <div className="md:col-span-1 lg:col-span-1 p-7 rounded-3xl bg-white/90 backdrop-blur-sm border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            <ReticleFrame size={14} color="border-neutral-300 group-hover:border-neutral-900 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                  Business Velocity
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Measurable ROI
                </span>
              </div>

              <div className="font-display font-black text-4xl text-neutral-900 mb-1 tabular-nums">
                -60%
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                Time-to-Hire (17.2 Hari)
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                Memangkas siklus perekrutan dan menekan 95% waktu input manual administrasi penggajian bulanan.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <div className="flex items-center -space-x-2">
                {TESTIMONIALS.map((t) => (
                  <div
                    key={t.id}
                    title={`${t.name} (${t.role})`}
                    className="w-8 h-8 rounded-full border-2 border-white bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold font-display shadow-xs"
                  >
                    {t.initials || t.name.slice(0, 2).toUpperCase()}
                  </div>
                ))}
              </div>
              <span className="text-[11px] font-semibold text-neutral-600 font-mono">
                Pimpinan Terverifikasi
              </span>
            </div>
          </div>

          {/* Tile 6: Rapid 7-Day Sprint Diagnostic & Turnaround */}
          <div className="md:col-span-1 lg:col-span-1 p-7 rounded-3xl bg-white/90 backdrop-blur-sm border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            <ReticleFrame size={14} color="border-neutral-300 group-hover:border-neutral-900 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-3 text-neutral-700">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-800" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    7-Day Sprint
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Minimalist Sprint Progress Meter with Live Second Hand */}
              <div className="flex justify-center my-3">
                <div className="relative w-28 h-28 rounded-full border-2 border-neutral-200 bg-neutral-50/80 shadow-inner flex items-center justify-center">
                  {/* Hour ticks */}
                  <span className="absolute top-1.5 w-1 h-2 bg-neutral-400 rounded-full" />
                  <span className="absolute right-1.5 w-2 h-1 bg-neutral-400 rounded-full" />
                  <span className="absolute bottom-1.5 w-1 h-2 bg-neutral-400 rounded-full" />
                  <span className="absolute left-1.5 w-2 h-1 bg-neutral-400 rounded-full" />

                  {/* Hour Hand */}
                  <div
                    className="absolute w-1 h-7 bg-neutral-800 rounded-full origin-bottom"
                    style={{ transform: 'rotate(70deg) translateY(-50%)' }}
                  />

                  {/* Minute Hand */}
                  <div
                    className="absolute w-0.5 h-10 bg-neutral-600 rounded-full origin-bottom"
                    style={{ transform: 'rotate(210deg) translateY(-50%)' }}
                  />

                  {/* Live Red Second Hand */}
                  <div
                    className="absolute w-0.5 h-11 bg-red-500 rounded-full origin-bottom transition-transform duration-100"
                    style={{ transform: `rotate(${secondAngle}deg) translateY(-50%)` }}
                  />

                  {/* Center Hub */}
                  <div className="w-2 h-2 rounded-full bg-red-600 z-10" />
                </div>
              </div>

              <div className="space-y-1 mb-2 text-center">
                <span className="font-display font-bold text-sm text-neutral-900 block">
                  Rapid Diagnostic & Deployment
                </span>
                <span className="text-[11px] text-neutral-500 font-mono block">
                  Audit SDM → Otomasi Sistem → Handover
                </span>
              </div>
            </div>

            <p className="text-[11px] text-neutral-500 text-center leading-relaxed pt-2 border-t border-neutral-100">
              Penyelesaian cepat dan terukur tanpa mengorbankan kepatuhan hukum, standar analitik, atau moralitas tim.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
