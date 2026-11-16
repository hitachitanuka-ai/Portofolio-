import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { ReticleFrame } from './ReticleFrame';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  const featuredPost = BLOG_POSTS.find((p) => p.isMustRead) || BLOG_POSTS[1];
  const otherPosts = BLOG_POSTS.filter((p) => p.id !== featuredPost.id);

  return (
    <section id="blog" className="w-full py-28 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-block px-3.5 py-1 mb-4 text-[11px] font-semibold tracking-wider uppercase text-neutral-600 bg-neutral-100 rounded-full border border-neutral-200/60">
              Behind the Strategy
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-4">
              Behind the Strategy
            </h2>
            <p className="text-base text-neutral-600 max-w-xl leading-relaxed">
              Thoughts, frameworks, and actionable playbooks on human capital, HR automation, and organizational development.
            </p>
          </div>

          <button
            onClick={() => onSelectPost(featuredPost)}
            className="self-start md:self-end px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black border border-neutral-300 rounded-full hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all cursor-pointer shrink-0 active:scale-95"
          >
            View all posts
          </button>
        </motion.div>

        {/* Featured Big Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => onSelectPost(featuredPost)}
          className="group mb-12 p-6 md:p-8 rounded-3xl bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200/80 transition-all duration-300 cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Left: Image with Reticle Frame */}
          <div className="md:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 shadow-md">
            <ReticleFrame size={16} color="border-white/80 group-hover:border-white transition-colors" />
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white">
                <Plus className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Right: Copy & Tags */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-black text-white px-2.5 py-0.5 rounded-full">
                Must Read
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 bg-neutral-200/80 px-2.5 py-0.5 rounded-full">
                {featuredPost.category}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-neutral-900 mb-4 group-hover:text-black transition-colors leading-tight">
              {featuredPost.title}
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              {featuredPost.summary}
            </p>

            <div className="text-xs text-neutral-400 font-mono">
              By Surya · {featuredPost.readTime}
            </div>
          </div>
        </motion.div>

        {/* 3 Secondary Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherPosts.slice(0, 3).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectPost(post)}
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/80 mb-4 shadow-xs group-hover:shadow-md transition-all">
                <ReticleFrame size={14} color="border-white/80 group-hover:border-white transition-colors" />
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white">
                    <Plus className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 mb-2">
                <h4 className="font-display font-semibold text-lg text-neutral-900 group-hover:text-black transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full shrink-0 border border-neutral-200/60">
                  {post.category}
                </span>
              </div>

              <span className="text-xs text-neutral-400 font-mono">
                {post.readTime}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
