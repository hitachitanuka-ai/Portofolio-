import React from 'react';
import { ArrowUp, ArrowUpRight, Mail, Linkedin, Instagram, MapPin } from 'lucide-react';
import { AppRoute } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (route: AppRoute, slug?: string) => void;
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1E2022] text-[#F3EFEA] pt-10 sm:pt-12 pb-8 sm:pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-7 sm:gap-8 pb-8 sm:pb-10 border-b border-white/10">
          {/* Brand & Positioning Column */}
          <ScrollReveal variant="editorial" delay={0} className="md:col-span-5 space-y-4 sm:space-y-5">
            <div>
              <span className="font-sans font-black text-xl sm:text-3xl tracking-[0.14em] sm:tracking-[0.2em] text-white block uppercase">
                THE MODERN STRATEGIST
              </span>
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#AF8C72] mt-1.5 block font-bold leading-relaxed">
                {t(
                  'Bangkit Surya Wijaya · People Ops & HR Systems Specialist',
                  'Bangkit Surya Wijaya · Spesialis People Ops & Sistem HR'
                )}
              </span>
            </div>

            <p className="text-sm text-[#F3EFEA]/80 max-w-sm leading-relaxed font-light">
              {t(
                '"Managing 110+ Workforce & Building In-House HR Tech (PMS, ATS, Payroll, Analytics)."',
                '"Mengelola 110+ Karyawan & Membangun HR Tech Internal (PMS, ATS, Payroll, Analitik)."'
              )}
              <br />
              {t(
                'Intersecting People & Culture, Business Analysis, and Digital Product Innovation for measurable impact.',
                'Menyatukan People & Culture, Analisis Bisnis, dan Inovasi Produk Digital untuk dampak organisasi terukur.'
              )}
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#F3EFEA]/70">
              <MapPin className="w-3.5 h-3.5 text-[#6E7C69]" />
              <span>
                {t(
                  'Jakarta & Bogor, Indonesia · Available Globally',
                  'Jakarta & Bogor, Indonesia · Terbuka untuk Kolaborasi Global'
                )}
              </span>
            </div>
          </ScrollReveal>

          {/* Quick Navigation Column */}
          <ScrollReveal variant="editorial" delay={0.1} className="md:col-span-3 space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#AF8C72] block font-bold">
              {t('Navigation Index', 'Indeks Navigasi')}
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider">
              {[
                { en: 'HOME', id: 'BERANDA', route: 'home' as AppRoute },
                { en: 'ABOUT', id: 'TENTANG', route: 'about' as AppRoute },
                { en: 'EXPERTISE', id: 'KEAHLIAN', route: 'expertise' as AppRoute },
                { en: 'PROJECTS', id: 'PROYEK', route: 'projects' as AppRoute },
                { en: 'EXPERIENCE', id: 'PENGALAMAN', route: 'experience' as AppRoute },
                { en: 'INSIGHTS', id: 'WAWASAN', route: 'insights' as AppRoute },
                { en: 'VISUAL ARCHIVE', id: 'ARSIP VISUAL', route: 'archive' as AppRoute },
                { en: 'CONTACT', id: 'KONTAK', route: 'contact' as AppRoute },
              ].map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => {
                      onNavigate(link.route);
                      scrollToTop();
                    }}
                    className="text-[#F3EFEA]/70 hover:text-white transition-colors cursor-pointer text-left uppercase font-medium"
                  >
                    {lang === 'id' ? link.id : link.en}
                  </button>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Connect & Direct Channels Column */}
          <ScrollReveal variant="editorial" delay={0.18} className="md:col-span-4 space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#AF8C72] block font-bold">
              {t('Direct Contact', 'Kontak Langsung')}
            </span>
            <p className="text-xs text-[#F3EFEA]/80 leading-relaxed font-light">
              {t(
                'Open for People Operations & HR Systems leadership roles, strategic consulting, and internal HR-Tech engagements.',
                'Terbuka untuk peran People Operations & Sistem HR, konsultasi strategis organisasi, serta proyek transformasi HR-Tech.'
              )}
            </p>

            <div className="space-y-2.5 pt-1 text-xs">
              <a
                href="mailto:bangkitsurya321@gmail.com"
                className="flex items-center gap-2.5 text-white hover:text-[#AF8C72] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#6E7C69]" />
                <span className="font-mono">bangkitsurya321@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/bangkit-surya-133311211/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white hover:text-[#AF8C72] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#6E7C69]" />
                <span>LinkedIn / Bangkit Surya Wijaya</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-neutral-400" />
              </a>

              <a
                href="https://www.instagram.com/bangsur.w/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white hover:text-[#AF8C72] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#6E7C69]" />
                <span>Instagram / @bangsur.w</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-neutral-400" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <ScrollReveal
          variant="subtle"
          delay={0.22}
          rootMargin="0px 0px 0px 0px"
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F3EFEA]/60"
        >
          <div>
            <span>
              © {new Date().getFullYear()} Bangkit Surya Wijaya.{' '}
              {t('All rights reserved.', 'Hak cipta dilindungi.')}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-white hover:text-[#AF8C72] transition-colors cursor-pointer group"
            >
              <span>{t('Back to Top', 'Kembali ke Atas')}</span>
              <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#AF8C72] transition-colors">
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform text-[#AF8C72]" />
              </div>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
