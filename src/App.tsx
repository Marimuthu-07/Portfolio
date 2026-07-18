import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layout,
  Code2,
  Cpu,
  Award,
  GraduationCap,
  Phone,
  Mail,
  ChevronUp,
  Download,
  ArrowRight,
  MapPin,
  Calendar,
  Sparkles,
  Github,
  Linkedin,
} from 'lucide-react';

import { PROJECTS, CERTIFICATIONS, EDUCATIONS, PERSONAL_INFO } from './data';
import ParticleBackground from './components/ParticleBackground';
import ThemeToggle from './components/ThemeToggle';
import ContactSection from './components/ContactSection';
import RippleButton from './components/RippleButton';
import HeroVisual from './components/HeroVisual';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceLearningSection from './components/ExperienceLearningSection';
import Footer from './components/Footer';

// Custom LeetCode SVG Icon matching official branding
const LeetCodeIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414 0-1.954l-2.396-2.392c-2.211-2.207-5.815-2.239-8.063-.074l-.039.038-1.309-1.284c.338-.567.76-1.077 1.271-1.517.512-.44 1.104-.797 1.77-1.076l6.634-6.537c.797-.786 2.083-.772 2.868.031l2.585 2.65c.785.803.77 2.106-.033 2.91l-1.531 1.554a1.375 1.375 0 1 0 1.946 1.944l1.531-1.554c2.227-2.279 2.242-5.977.034-8.283l-2.585-2.65c-1.127-1.155-2.73-1.637-4.223-1.396Z" />
  </svg>
);

// High-fidelity active typewriter loop
function Typewriter() {
  const strings = [
    'Computer Science Engineering Student',
    'Aspiring Software Engineer',
    'AI & Full-Stack Developer',
  ];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentStr = strings[index];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentStr.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else {
      timer = setTimeout(() => {
        setText(currentStr.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 70);
    }

    if (!isDeleting && charIndex === currentStr.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % strings.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <span className="text-indigo-600 dark:text-cyan-400 font-display font-bold">
      {text}
      <span className="animate-pulse font-light ml-0.5">|</span>
    </span>
  );
}

// Stats Counter component that rolls on mount
function Counter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    if (start === target) return;

    const totalTime = 1200; // milliseconds
    const incrementTime = Math.floor(totalTime / target);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-neutral-100/50 dark:bg-neutral-900/10 border border-neutral-200/40 dark:border-neutral-800/40 backdrop-blur-md">
      <span className="font-display text-3xl font-extrabold text-indigo-600 dark:text-cyan-400">
        {count}+
      </span>
      <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 text-right uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  // Rotate status badges inside one curved status pill
  const statusBadges = [
    { text: 'Available for Internships', color: 'bg-emerald-500/10 dark:bg-emerald-500/5 border-emerald-500/20 dark:border-emerald-500/10 text-emerald-800 dark:text-emerald-400', dotColor: 'bg-emerald-500', pingColor: 'bg-emerald-400' },
    { text: 'Active Problem Solver', color: 'bg-amber-500/10 dark:bg-amber-500/5 border-amber-500/20 dark:border-amber-500/10 text-amber-800 dark:text-amber-400', dotColor: 'bg-amber-500', pingColor: 'bg-amber-400' },
    { text: 'GATE CSE Aspirant', color: 'bg-indigo-500/10 dark:bg-indigo-500/5 border-indigo-500/20 dark:border-indigo-500/10 text-indigo-800 dark:text-indigo-400', dotColor: 'bg-indigo-500', pingColor: 'bg-indigo-400' },
  ];
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusBadges.length);
    }, 3500); // changes every 3.5 seconds
    return () => clearInterval(timer);
  }, []);

  // Read initial theme preference from local storage
  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const handleThemeToggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.body.setAttribute('data-theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  // Monitor scrolling to handle transparent header transitioning & back-to-top buttons
  useEffect(() => {
    const handleScroll = () => {
      setBackToTopVisible(window.scrollY > 400);

      // Section Tracking to Highlight Navigation items dynamically
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 bg-[#F5F5F7] dark:bg-[#0D0D0D] text-neutral-800 dark:text-[#E5E5E5]`}>
      {/* Canvas Dynamic Particles Backdrop */}
      <ParticleBackground theme={theme} />

      {/* STICKY GLASSMORPHIC HEADER */}
      <Navbar
        theme={theme}
        onThemeToggle={handleThemeToggle}
        activeSection={activeSection}
        onScrollTo={handleScrollTo}
      />

      <main id="main-content" className="relative z-10 max-w-5xl mx-auto px-6">
        {/* HERO SECTION */}
        <section
          id="home"
          className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 pt-32 pb-16 relative overflow-hidden"
        >
          {/* Subtle decorative glow circles */}
          <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-fuchsia-500/10 dark:bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Pulsating Available Badge & Status Tags Container with Curved Styling */}
            <div id="home-status-badges" className="flex items-center justify-center lg:justify-start mb-6 h-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={statusIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className={`inline-flex items-center gap-2 py-1.5 px-4 rounded-full border shadow-sm transition-colors duration-500 ${statusBadges[statusIndex].color}`}
                >
                  <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${statusBadges[statusIndex].pingColor}`} />
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${statusBadges[statusIndex].dotColor}`} />
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-black font-display uppercase tracking-[0.18em] select-none">
                    {statusBadges[statusIndex].text}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4 leading-[1.15]">
              Hi, I am <br className="hidden sm:inline lg:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 dark:from-cyan-400 dark:via-fuchsia-400 dark:to-indigo-400 font-black">
                {PERSONAL_INFO.fullName}
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl font-display font-medium text-neutral-600 dark:text-neutral-300 mb-6">
              I'm an <Typewriter />
            </h2>

            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed mb-8 font-medium">
              I build modern web applications, desktop software, and AI-powered solutions while continuously improving my software engineering skills. I enjoy solving real-world problems and creating clean, responsive, and user-friendly experiences.
            </p>

            {/* Premium CTA Buttons - exactly four buttons with rich hover transitions & keyboard support */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-md lg:max-w-none">
              <RippleButton
                onClick={() => handleScrollTo('projects')}
                variant="primary"
                ariaLabel="View Projects"
                className="w-full text-center"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-white dark:text-black" />
              </RippleButton>

              <RippleButton
                href="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200"
                download="Marimuthu_ATS_Resume.pdf"
                variant="outline"
                ariaLabel="Download Resume"
                className="w-full text-center"
              >
                <Download className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                <span>Download Resume</span>
              </RippleButton>

              <RippleButton
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                ariaLabel="GitHub Profile"
                className="w-full text-center"
              >
                <Github className="w-4 h-4 text-neutral-700 dark:text-neutral-200" />
                <span>GitHub</span>
              </RippleButton>

              <RippleButton
                onClick={() => handleScrollTo('contact')}
                variant="outline"
                ariaLabel="Contact Me"
                className="w-full text-center"
              >
                <Mail className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                <span>Contact Me</span>
              </RippleButton>
            </div>
          </motion.div>

          {/* Right Column - Illustration / Profile visual placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="flex-1 w-full flex items-center justify-center lg:justify-end"
          >
            <HeroVisual theme={theme} />
          </motion.div>
        </section>

        {/* ABOUT ME SECTION */}
        <AboutSection theme={theme} />

        {/* COMPETENCY MATRIX SECTION */}
        <SkillsSection theme={theme} />

        {/* PROJECTS SECTION */}
        <ProjectsSection theme={theme} />

        {/* EXPERIENCE & LEARNING SECTION */}
        <ExperienceLearningSection theme={theme} />

        {/* CONTACT SECTION */}
        <ContactSection theme={theme} />
      </main>

      {/* FOOTER & FLOATING BACK TO TOP */}
      <Footer theme={theme} onScrollTo={handleScrollTo} />
    </div>
  );
}
