import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronUp,
  Heart,
  Terminal,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface FooterProps {
  theme: 'dark' | 'light';
  onScrollTo: (id: string) => void;
}

const LeetCodeIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414 0-1.954l-2.396-2.392c-2.211-2.207-5.815-2.239-8.063-.074l-.039.038-1.309-1.284c.338-.567.76-1.077 1.271-1.517.512-.44 1.104-.797 1.77-1.076l6.634-6.537c.797-.786 2.083-.772 2.868.031l2.585 2.65c.785.803.77 2.106-.033 2.91l-1.531 1.554a1.375 1.375 0 1 0 1.946 1.944l1.531-1.554c2.227-2.279 2.242-5.977.034-8.283l-2.585-2.65c-1.127-1.155-2.73-1.637-4.223-1.396Z" />
  </svg>
);

export default function Footer({ theme, onScrollTo }: FooterProps) {
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBackToTopVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'education' },
    { label: 'Timeline', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-neutral-200/50 dark:border-neutral-900/30 bg-[#FCFCFD] dark:bg-[#0A0A0A] pt-16 pb-10 text-neutral-500 dark:text-neutral-400 overflow-hidden">
      {/* Soft gradient dividers and backdrop blurs */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent dark:via-cyan-400/25" />
      <div className="absolute -bottom-16 right-10 w-80 h-80 bg-indigo-500/5 dark:bg-cyan-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* FOUR COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
          
          {/* COLUMN 1: BRAND INFORMATION (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              {/* Subtle animated logo container */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 dark:from-indigo-950/30 dark:to-cyan-950/30 border border-indigo-500/20 dark:border-cyan-400/20 flex items-center justify-center text-indigo-600 dark:text-cyan-400"
              >
                <Terminal className="w-4 h-4" />
              </motion.div>
              <h3 className="font-display font-black text-lg text-neutral-900 dark:text-neutral-50 tracking-tight">
                MARIMUTHU<span className="text-indigo-600 dark:text-cyan-400">A</span>
              </h3>
            </div>
            
            <p className="text-xs font-black text-indigo-600 dark:text-cyan-400 uppercase tracking-widest">
              Computer Science Engineering Student
            </p>
            
            <p className="text-[13px] leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium">
              Building modern software, AI-powered applications, and user-focused experiences while continuously learning and growing as a developer.
            </p>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION LINKS (2.5 cols on lg) */}
          <nav className="lg:col-span-2.5 space-y-4 text-center md:text-left" aria-label="Footer Quick Links">
            <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900 dark:text-neutral-50">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[13px] font-semibold">
              {quickLinks.map((link, idx) => (
                <li key={`${link.id}-${idx}`}>
                  <button
                    onClick={() => onScrollTo(link.id)}
                    className="text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded px-1 -mx-1 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* COLUMN 3: CONNECT / SOCIALS (2.5 cols on lg) */}
          <div className="lg:col-span-2.5 space-y-4 text-center md:text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900 dark:text-neutral-50">
              Connect
            </h4>
            <ul className="space-y-3 text-[13px] font-semibold">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded px-1.5 py-0.5 -mx-1.5"
                  aria-label="Marimuthu's GitHub Profile (opens in a new tab)"
                >
                  <Github className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded px-1.5 py-0.5 -mx-1.5"
                  aria-label="Marimuthu's LinkedIn Profile (opens in a new tab)"
                >
                  <Linkedin className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-neutral-500 dark:text-neutral-400 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded px-1.5 py-0.5 -mx-1.5"
                  aria-label="Marimuthu's LeetCode Profile (opens in a new tab)"
                >
                  <LeetCodeIcon className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                  <span>LeetCode</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2.5 text-neutral-500 dark:text-neutral-400 hover:text-red-500 dark:hover:text-red-400 transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded px-1.5 py-0.5 -mx-1.5"
                  aria-label="Compose an email to Marimuthu"
                >
                  <Mail className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: RESUME INFORMATION CARD (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4 text-center md:text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900 dark:text-neutral-50">
              Resume
            </h4>
            
            {/* Glassmorphic Minimal Resume Promotion Card */}
            <div className="p-4 rounded-xl bg-white/50 dark:bg-white/[0.02] border border-neutral-200/50 dark:border-white/5 shadow-sm text-left">
              <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 font-medium mb-3.5">
                Download my latest resume to learn more about my education, technical skills, projects, and certifications.
              </p>
              
              <motion.a
                whileHover={{ y: -1.5 }}
                whileTap={{ y: 0 }}
                href="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200"
                download="Marimuthu_ATS_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3.5 rounded-lg bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-black text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Download Marimuthu's ATS resume"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </motion.a>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA / COPYRIGHT LINE */}
        <div className="pt-8 border-t border-neutral-200/50 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-2xs font-semibold text-neutral-400 dark:text-neutral-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Marimuthu A. All Rights Reserved.
          </p>

          <p className="text-2xs font-semibold text-neutral-400 dark:text-neutral-500 flex items-center justify-center gap-1">
            <span>Designed &amp; Developed with</span>
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-block text-red-500"
              aria-hidden="true"
            >
              <Heart className="w-3 h-3 fill-current" />
            </motion.span>
            <span>using modern web technologies.</span>
          </p>
        </div>

      </div>

      {/* FLOATING BACK TO TOP BUTTON */}
      <AnimatePresence>
        {backToTopVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-black shadow-lg flex items-center justify-center cursor-pointer border border-neutral-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Scroll back to top of page"
            title="Scroll back to top"
          >
            <ChevronUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
