import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Clock, Calendar, Share2, Check, ExternalLink } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleViewProps {
  post: BlogPost;
  onBack: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ post, onBack }) => {
  const [copied, setCopied] = React.useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // IntersectionObserver: auto-on when video is visible on screen, pause when offscreen (do not auto replay offscreen)
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl || !post.videoUrl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            // Video entered screen view -> auto start video/audio
            videoEl.play().catch(() => {
              // Browser may restrict unmuted autoplay without prior interaction
            });
          } else {
            // Video is offscreen -> pause, prevent background replay
            videoEl.pause();
          }
        });
      },
      {
        threshold: [0, 0.3, 0.6],
      }
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, [post.videoUrl]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="min-h-screen bg-white pt-28 pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Top Navigation Row: Back Button & Category */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold uppercase tracking-wider text-neutral-800 rounded-full transition-all cursor-pointer active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full border border-neutral-200/60">
              {post.category}
            </span>
            <button
              onClick={handleShare}
              title="Share article link"
              className="p-2 text-neutral-500 hover:text-black rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Article Headline */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-900 leading-[1.2] mb-6">
          {post.title}
        </h1>

        {/* Lead Quote / Summary */}
        <p className="text-lg text-neutral-600 leading-relaxed mb-6 font-normal">
          {post.summary}
        </p>

        {/* Metadata Strip */}
        <div className="flex items-center gap-4 text-xs text-neutral-400 font-mono pb-8 mb-10 border-b border-neutral-100">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>·</span>
          <span>By Surya</span>
        </div>

        {/* Video Player & Live Demo Banner if available for this article */}
        {post.videoUrl && (
          <div className="mb-12 rounded-3xl bg-neutral-950 text-white p-6 sm:p-8 border border-neutral-800 shadow-2xl flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800/80">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-semibold block mb-1">
                  Product Walkthrough & Demonstration
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  {post.title.includes('Zeno')
                    ? 'Zeno — Integrated Digital Assessment Video Walkthrough'
                    : post.title.includes('Slipr')
                    ? 'Slipr — Smart Digital Payroll Video Walkthrough'
                    : 'Matchify — Recruitment Intelligence Video Walkthrough'}
                </h3>
              </div>

              {post.demoUrl && (
                <a
                  href={post.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-sky-400 hover:bg-sky-300 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-md shrink-0 cursor-pointer active:scale-95"
                >
                  <span>Buka Demo Aplikasi</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              )}
            </div>

            {/* Video Element (Auto-on when visible in viewport, paused when scrolled away) */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-neutral-800 shadow-xl flex items-center justify-center">
              <video
                ref={videoRef}
                src={post.videoUrl}
                poster={post.image}
                preload="metadata"
                controls
                playsInline
                className="w-full h-full object-contain"
              >
                <source src={post.videoUrl} type="video/mp4" />
                Browser Anda tidak mendukung tag video.
              </video>
            </div>
          </div>
        )}

        {/* Hero Photo for Article (if no videoUrl or as secondary visual) */}
        {!post.videoUrl && (
          <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg border border-neutral-200/80 bg-neutral-100">
            <img
              src={post.image}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Lead Paragraph */}
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg text-neutral-800 leading-relaxed mb-10 font-normal">
            {post.content.lead}
          </p>

          {/* Subsections with Editorial Headers */}
          {post.content.sections.map((section, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="font-display font-bold text-2xl text-neutral-900 mb-4 tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-neutral-700 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Live Demo Callout Card if demoUrl exists */}
        {post.demoUrl && (
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-semibold block">
                Interactive Deployment
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                Siap menguji langsung sistem {post.title.includes('Slipr') ? 'Slipr' : 'Matchify'}?
              </h3>
              <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
                {post.title.includes('Slipr')
                  ? 'Jalankan simulasi otomatisasi slip gaji, perhitungan BPJS & PPh 21, dan tanda tangan digital langsung di browser Anda.'
                  : 'Jalankan simulasi live recruitment pipeline, scheduling timetable, dan analitik performa kandidat langsung di browser Anda.'}
              </p>
            </div>

            <a
              href={post.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-400 hover:bg-sky-300 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-md shrink-0 active:scale-95 cursor-pointer"
            >
              <span>Buka Demo Aplikasi</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        )}

        {/* Bottom Back Button & Author Box */}
        <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white hover:bg-neutral-800 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer self-start active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </button>

          <div className="text-xs text-neutral-500 font-mono">
            Written by Bangkit Surya Wijaya · Human Capital Enthusiast
          </div>
        </div>
      </div>
    </article>
  );
};
