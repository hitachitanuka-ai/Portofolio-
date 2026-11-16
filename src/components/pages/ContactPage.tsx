import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, MapPin, Send, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

interface ContactPageProps {
  onOpenResume: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) errs.message = 'Please enter your message or project brief.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full bg-[#F3EFEA] text-[#1E2022] pt-28 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-20">
        {/* Header */}
        <ScrollReveal immediateOnMount variant="editorial" delay={0} className="border-b border-[#E7E0D6] pb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E7C69]/10 text-[#6E7C69] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#1E2022] tracking-tight leading-tight">
            Good Ideas Deserve Thoughtful Execution.
          </h1>
          <p className="text-sm sm:text-base text-[#605E59] mt-3 font-light leading-relaxed">
            Have a project, a leadership opportunity, or an interesting organizational challenge? Let's start an executive conversation.
          </p>
        </ScrollReveal>

        {/* Main Grid: Contact Channels (Left) | Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Coordinates & Resume */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal immediateOnMount variant="subtle" delay={0.08}>
              <span className="font-mono text-xs uppercase tracking-widest text-[#AF8C72] block font-bold">
                Direct Coordinates
              </span>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal immediateOnMount variant="card" delay={0.12}>
              <div className="p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-2 shadow-xs hover:border-[#6E7C69] transition-all">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#AF8C72] block font-bold">
                  Official Inquiries & Leadership
                </span>
                <a
                  href="mailto:bangkitsurya321@gmail.com"
                  className="font-mono text-base text-[#1E2022] hover:text-[#6E7C69] transition-colors font-medium flex items-center justify-between"
                >
                  <span>bangkitsurya321@gmail.com</span>
                  <Mail className="w-4 h-4 text-[#6E7C69]" />
                </a>
                <span className="text-xs text-[#605E59] block font-light">
                  Average response turnaround within 24 business hours.
                </span>
              </div>
            </ScrollReveal>

            {/* LinkedIn */}
            <ScrollReveal variant="card" delay={0.18}>
              <div className="p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-2 shadow-xs hover:border-[#6E7C69] transition-all">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#AF8C72] block font-bold">
                  Professional Network
                </span>
                <a
                  href="https://www.linkedin.com/in/bangkit-surya-133311211/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-bold text-xl text-[#1E2022] hover:text-[#6E7C69] transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn / Bangkit Surya</span>
                  <Linkedin className="w-4 h-4 text-[#6E7C69]" />
                </a>
                <span className="text-xs text-[#605E59] block font-light">
                  Career milestones, leadership recommendations & network.
                </span>
              </div>
            </ScrollReveal>

            {/* Instagram */}
            <ScrollReveal variant="card" delay={0.24}>
              <div className="p-6 bg-white border border-[#E7E0D6] rounded-3xl space-y-2 shadow-xs hover:border-[#6E7C69] transition-all">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#AF8C72] block font-bold">
                  Personal & Public Diplomacy
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
                  Visual documentation, speaking engagements & youth initiatives.
                </span>
              </div>
            </ScrollReveal>

            {/* Location & Availability Card (Sage green container) */}
            <ScrollReveal variant="card" delay={0.3}>
              <div className="p-6 bg-[#6E7C69] text-white rounded-3xl space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F3EFEA]">
                  <MapPin className="w-4 h-4 text-[#EAE2D8]" />
                  <span>Base of Operations</span>
                </div>
                <strong className="block font-sans font-bold text-lg text-white">
                  Jakarta & Bogor, Indonesia
                </strong>
                <p className="text-xs text-[#F3EFEA]/90 font-light leading-relaxed">
                  Available for full-time executive appointments, on-site diagnostics across Southeast Asia, and remote strategic advisory worldwide.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenResume}
                    className="w-full py-3 bg-[#1E2022] hover:bg-black text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#AF8C72]" />
                    <span>Download Executive Resume</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <ScrollReveal immediateOnMount variant="media" duration={0.95} delay={0.14} className="lg:col-span-7 bg-white border border-[#E7E0D6] rounded-3xl p-8 sm:p-12 shadow-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6E7C69] block font-bold mb-2">
              Direct Message
            </span>
            <h2 className="font-sans font-black text-3xl text-[#1E2022] tracking-tight mb-6">
              Send an Inquiry
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
                  Message Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#605E59] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been logged, and I will review the brief within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 bg-[#1E2022] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-black transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#1E2022] font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Raditya Pratama"
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
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. raditya@organization.com"
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
                    Inquiry Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Strategic Advisory Engagement / People Leadership Role"
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
                    Project Brief or Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your organization's challenges, timeline expectations, or proposed collaboration scope..."
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#1E2022] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5 text-[#AF8C72]" />
                  <span>{isSubmitting ? 'Dispatching Message...' : 'Submit Executive Inquiry'}</span>
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
