import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, MapPin, Send, CheckCircle2, FileText, Sparkles, AlertCircle } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';

interface ContactPageProps {
  onOpenResume: () => void;
}

const DEFAULT_FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/bangkitsurya321@gmail.com';

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenResume }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = t('Please provide your full name.', 'Mohon isi nama lengkap Anda.');
    if (!formData.email.trim()) {
      errs.email = t('Please provide your email address.', 'Mohon isi alamat email Anda.');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = t('Please enter a valid email address.', 'Format email tidak valid.');
    }
    if (!formData.subject.trim()) errs.subject = t('Please specify a subject.', 'Mohon isi subjek pesan.');
    if (!formData.message.trim()) errs.message = t('Please enter your message or project brief.', 'Mohon tulis ringkasan pesan atau kebutuhan Anda.');
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (formData.honeypot) return;
    if (!validate()) return;

    setIsSubmitting(true);

    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();
    const endpoint = formspreeEndpoint || DEFAULT_FORMSUBMIT_ENDPOINT;

    try {
      const payload = formspreeEndpoint
        ? {
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
            _subject: `[Portfolio Inquiry] ${formData.subject.trim()}`,
          }
        : {
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
            _subject: `[Portfolio Inquiry] ${formData.subject.trim()} — ${formData.name.trim()}`,
            _replyto: formData.email.trim(),
            _template: 'table',
            _captcha: 'false',
          };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json().catch(() => null);
      if (data && (data.success === 'false' || data.success === false)) {
        const msg = String(data.message || '');
        if (/activat/i.test(msg)) {
          throw new Error('NEEDS_ACTIVATION');
        }
        throw new Error(msg || 'Delivery failed');
      }

      setIsSubmitted(true);
    } catch (err) {
      const isActivation = err instanceof Error && err.message === 'NEEDS_ACTIVATION';
      setSubmitError(
        isActivation
          ? t(
              'First-time FormSubmit activation email has been sent to bangkitsurya321@gmail.com. Please click the activation link in your inbox (check Spam too), then resubmit.',
              'Email aktivasi pertama kali dari FormSubmit telah dikirim ke bangkitsurya321@gmail.com. Silakan klik tautan aktivasi di kotak masuk (cek juga folder Spam), lalu kirim ulang.'
            )
          : t(
              'Unable to send automatically due to network or email service restriction. You can send directly via your email client below.',
              'Pengiriman otomatis gagal karena koneksi atau pembatasan layanan. Anda dapat langsung mengirim via aplikasi email melalui tombol di bawah.'
            )
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoFallbackHref = `mailto:bangkitsurya321@gmail.com?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  )}`;

  return (
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-28 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-20">
        {/* Header */}
        <ScrollReveal immediateOnMount variant="editorial" delay={0} className="border-b border-[#E7E0D6] pb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E7C69]/10 text-[#6E7C69] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Initiate Collaboration', 'Mulai Kolaborasi')}</span>
          </div>
          <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#1E2022] tracking-tight leading-tight">
            {t('Good Ideas Deserve Thoughtful Execution.', 'Ide yang Baik Layak Mendapat Eksekusi Presisi.')}
          </h1>
          <p className="text-sm sm:text-base text-[#605E59] mt-3 font-light leading-relaxed">
            {t(
              'Have a People Operations role, HR systems project, or workforce diagnostic challenge? Let us start a focused conversation.',
              'Memiliki kebutuhan peran People Operations, proyek sistem HR, atau tantangan diagnostik tenaga kerja? Mari mulai diskusi yang terarah.'
            )}
          </p>
        </ScrollReveal>

        {/* Main Grid: Contact Channels (Left) | Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Coordinates & Resume */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal immediateOnMount variant="subtle" delay={0.08}>
              <span className="font-mono text-xs uppercase tracking-widest text-[#AF8C72] block font-bold">
                {t('Direct Coordinates', 'Kontak Langsung')}
              </span>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal immediateOnMount variant="card" delay={0.12}>
              <div className="p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-2 shadow-xs hover:border-[#6E7C69] transition-all">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#AF8C72] block font-bold">
                  {t('Official Inquiries & Collaboration', 'Pertanyaan Resmi & Kolaborasi')}
                </span>
                <a
                  href="mailto:bangkitsurya321@gmail.com"
                  className="font-mono text-base text-[#1E2022] hover:text-[#6E7C69] transition-colors font-medium flex items-center justify-between"
                >
                  <span>bangkitsurya321@gmail.com</span>
                  <Mail className="w-4 h-4 text-[#6E7C69]" />
                </a>
                <span className="text-xs text-[#605E59] block font-light">
                  {t('Average response turnaround within 24 business hours.', 'Rata-rata waktu respons dalam 1×24 jam kerja.')}
                </span>
              </div>
            </ScrollReveal>

            {/* LinkedIn */}
            <ScrollReveal variant="card" delay={0.18}>
              <div className="p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-2 shadow-xs hover:border-[#6E7C69] transition-all">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#AF8C72] block font-bold">
                  {t('Professional Network', 'Jejaring Profesional')}
                </span>
                <a
                  href="https://www.linkedin.com/in/bangkit-surya-133311211/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-bold text-xl text-[#1E2022] hover:text-[#6E7C69] transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn / Bangkit Surya Wijaya</span>
                  <Linkedin className="w-4 h-4 text-[#6E7C69]" />
                </a>
                <span className="text-xs text-[#605E59] block font-light">
                  {t('Career milestones, leadership recommendations & network.', 'Rekam jejak karier, rekomendasi pimpinan & jejaring profesional.')}
                </span>
              </div>
            </ScrollReveal>

            {/* Instagram */}
            <ScrollReveal variant="card" delay={0.24}>
              <div className="p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-2 shadow-xs hover:border-[#6E7C69] transition-all">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#AF8C72] block font-bold">
                  {t('Personal & Public Diplomacy', 'Personal & Diplomasi Publik')}
                </span>
                <a
                  href="https://www.instagram.com/bangsur.w/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-bold text-xl text-[#1E2022] hover:text-[#6E7C69] transition-colors flex items-center justify-between"
                >
                  <span>Instagram / @bangsur.w</span>
                  <Instagram className="w-4 h-4 text-[#AF8C72]" />
                </a>
                <span className="text-xs text-[#605E59] block font-light">
                  {t('Visual documentation, speaking engagements & youth initiatives.', 'Dokumentasi visual, forum wicara publik & inisiatif kepemudaan.')}
                </span>
              </div>
            </ScrollReveal>

            {/* Location & Availability Card (Sage green container) */}
            <ScrollReveal variant="card" delay={0.3}>
              <div className="p-6 bg-[#6E7C69] text-white rounded-3xl space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F3EFEA]">
                  <MapPin className="w-4 h-4 text-[#EAE2D8]" />
                  <span>{t('Base of Operations', 'Lokasi Berbasis')}</span>
                </div>
                <strong className="block font-sans font-bold text-lg text-white">
                  Jakarta &amp; Bogor, Indonesia
                </strong>
                <p className="text-xs text-[#F3EFEA]/90 font-light leading-relaxed">
                  {t(
                    'Available for full-time People Operations & HR Systems roles, on-site diagnostics across Indonesia, and remote advisory.',
                    'Tersedia untuk posisi penuh waktu People Operations & Sistem HR, diagnostik operasional di Indonesia, maupun konsultasi jarak jauh.'
                  )}
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenResume}
                    className="w-full py-3 bg-[#1E2022] hover:bg-black text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#AF8C72]" />
                    <span>{t('Download Executive Resume', 'Unduh CV Eksekutif')}</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <ScrollReveal immediateOnMount variant="media" duration={0.95} delay={0.14} className="lg:col-span-7 bg-white border border-[#E7E0D6] rounded-3xl p-8 sm:p-12 shadow-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6E7C69] block font-bold mb-2">
              {t('Direct Email Dispatch', 'Pengiriman Email Langsung')}
            </span>
            <h2 className="font-sans font-black text-3xl text-[#1E2022] tracking-tight mb-6">
              {t('Send an Inquiry', 'Kirim Pertanyaan')}
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-[#F3EFEA] rounded-2xl border border-[#E7E0D6] text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#6E7C69] text-white flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-bold text-2xl text-[#1E2022]">
                  {t('Message Delivered to Email', 'Pesan Terkirim ke Email')}
                </h3>
                <p className="text-xs sm:text-sm text-[#605E59] max-w-md mx-auto leading-relaxed">
                  {t(
                    `Thank you, ${formData.name}. Your inquiry has been forwarded directly to bangkitsurya321@gmail.com. Expect a reply within 24 business hours.`,
                    `Terima kasih, ${formData.name}. Pesan Anda telah diteruskan langsung ke email bangkitsurya321@gmail.com dan akan dibalas dalam 1×24 jam kerja.`
                  )}
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setSubmitError(null);
                    setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
                  }}
                  className="px-6 py-2.5 bg-[#1E2022] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-black transition-colors cursor-pointer"
                >
                  {t('Send Another Message', 'Kirim Pesan Lain')}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Spam honeypot field */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#1E2022] font-semibold">
                      {t('Your Name *', 'Nama Anda *')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('e.g. Raditya Pratama', 'cth. Raditya Pratama')}
                      className={`w-full px-4 py-3 bg-[#F3EFEA] border rounded-2xl text-xs text-[#1E2022] placeholder:text-[#A7A69F] focus:outline-hidden focus:border-[#6E7C69] transition-colors ${
                        errors.name ? 'border-red-400' : 'border-[#E7E0D6]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-500 font-mono block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#1E2022] font-semibold">
                      {t('Your Email *', 'Email Anda *')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('e.g. raditya@organization.com', 'cth. raditya@perusahaan.com')}
                      className={`w-full px-4 py-3 bg-[#F3EFEA] border rounded-2xl text-xs text-[#1E2022] placeholder:text-[#A7A69F] focus:outline-hidden focus:border-[#6E7C69] transition-colors ${
                        errors.email ? 'border-red-400' : 'border-[#E7E0D6]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 font-mono block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#1E2022] font-semibold">
                    {t('Inquiry Subject *', 'Subjek Pesan *')}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t(
                      'e.g. People Operations Role / HR Systems Project',
                      'cth. Posisi People Operations / Proyek Sistem HR'
                    )}
                    className={`w-full px-4 py-3 bg-[#F3EFEA] border rounded-2xl text-xs text-[#1E2022] placeholder:text-[#A7A69F] focus:outline-hidden focus:border-[#6E7C69] transition-colors ${
                      errors.subject ? 'border-red-400' : 'border-[#E7E0D6]'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-500 font-mono block">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#1E2022] font-semibold">
                    {t('Project Brief or Message *', 'Ringkasan Kebutuhan atau Pesan *')}
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t(
                      "Describe your organization's needs, timeline expectations, or proposed collaboration scope...",
                      'Jelaskan kebutuhan organisasi Anda, perkiraan waktu, atau ruang lingkup kerja sama yang diharapkan...'
                    )}
                    className={`w-full px-4 py-3 bg-[#F3EFEA] border rounded-2xl text-xs text-[#1E2022] placeholder:text-[#A7A69F] focus:outline-hidden focus:border-[#6E7C69] transition-colors resize-none ${
                      errors.message ? 'border-red-400' : 'border-[#E7E0D6]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 font-mono block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {submitError && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{submitError}</p>
                    </div>
                    <a
                      href={mailtoFallbackHref}
                      className="inline-flex items-center gap-1.5 font-mono font-bold text-[11px] uppercase tracking-wider text-[#1E2022] underline hover:text-[#6E7C69]"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{t('Open in Email App Instead', 'Buka di Aplikasi Email')}</span>
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#1E2022] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5 text-[#AF8C72]" />
                  <span>
                    {isSubmitting
                      ? t('Sending to Email...', 'Mengirim ke Email...')
                      : t('Send Message', 'Kirim Pesan')}
                  </span>
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
