import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  ExternalLink,
  Check,
  BookOpen,
  Sparkles,
  AlertCircle,
  HelpCircle,
  ArrowUpRight,
  ChevronRight,
  Code,
  Music,
  FolderKanban,
  Target,
  Zap
} from 'lucide-react';

interface ProjectsSectionProps {
  theme: 'dark' | 'light';
}

type TabType = 'overview' | 'features' | 'challenges' | 'future';

export default function ProjectsSection({ theme }: ProjectsSectionProps) {
  // We have 2 projects: 'learnvault' and 'hormonix'
  const [activeTabs, setActiveTabs] = useState<Record<string, TabType>>({
    learnvault: 'overview',
    hormonix: 'overview',
  });

  const handleTabChange = (projectId: string, tab: TabType) => {
    setActiveTabs(prev => ({
      ...prev,
      [projectId]: tab,
    }));
  };

  const projectsData = [
    {
      id: 'hormonix',
      title: 'Hormonix',
      subtitle: 'Desktop Audio Player',
      shortDescription: 'A high-performance offline desktop music player designed to organize local files, manage custom playlists, and display realtime sound waveforms.',
      status: 'in-progress',
      statusText: 'In Progress',
      githubUrl: 'https://github.com/Marimuthu-07/HORMONIX',
      liveUrl: 'https://hormonix.vercel.app',
      tags: ['Electron', 'Node.js', 'HTML5', 'CSS3', 'JavaScript', 'Git', 'Vercel'],
      accentClass: 'indigo',
      details: {
        overview: {
          problem: 'Many streaming-era music listeners prefer storing and archiving high-fidelity local audio files, but modern media players are either bloated with store links or lack a clean modern aesthetics.',
          solution: 'Hormonix bridges this gap as a lightweight cross-platform desktop wrapper that runs natively on user systems to process local music directories securely.',
          audience: 'Audiophiles, local music collectors, and developers seeking a lightweight desktop audio solution.'
        },
        features: [
          { title: 'Offline Music Playback', desc: 'Secure local storage streaming that functions without active internet.' },
          { title: 'Playlist Management', desc: 'Create, modify, and search custom playlist tracks seamlessly.' },
          { title: 'Audio Visualizer', desc: 'Real-time frequency visualizer bars powered by Web Audio API analyzer nodes.' },
          { title: 'Desktop Native Wrapper', desc: 'Engineered as an Electron app leveraging Node.js direct filesystem access.' },
          { title: 'Responsive Design', desc: 'Fluid media grid layouts that scale to various viewport sizes and monitors.' },
          { title: 'Modern UI UI/UX', desc: 'Glassmorphism dark theme styled with responsive playback timelines.' }
        ],
        challenges: {
          problem: 'Integrating low-latency audio file processing within Electron while preserving a lightweight renderer thread.',
          solution: 'Utilized HTML5 Audio context with buffer caching and optimized rendering of the SVG/Canvas frequency visualizer bars via requestAnimationFrame to avoid CPU bottlenecks.',
          skills: 'Acquired core competencies in Electron IPC protocols, DOM rendering performance, and native browser Web Audio modules.'
        },
        future: [
          'Online synchronization across secondary devices',
          'Automated local/online LRC lyrics synchronizer support',
          'Custom 10-band audio equalizer with presets',
          'Dynamic visual theme engines and light/dark configurations',
          'Cross-device playback history & status syncing'
        ]
      }
    },
    {
      id: 'learnvault',
      title: 'LearnVault',
      subtitle: 'Academic Resource Manager',
      shortDescription: 'A web-based learning management platform constructed to systematically structure, index, and access personal academic resources and subjects.',
      status: 'completed',
      statusText: 'Completed',
      githubUrl: 'https://github.com/Marimuthu-07/LearnVault_app',
      liveUrl: 'https://learnvault-app.onrender.com',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub', 'Render', 'Responsive Design'],
      accentClass: 'cyan',
      details: {
        overview: {
          problem: 'Students are constantly bombarded with scattered educational links, PDFs, lecture videos, and learning schedules across multiple platforms, leading to cognitive fatigue.',
          solution: 'LearnVault acts as a single, curated repository where resources are classified, indexed, and tracked sequentially with clean visual progress.',
          audience: 'Computer Science students, autonomous learners, and academic preparing for structured examinations.'
        },
        features: [
          { title: 'Resource Management', desc: 'Log, edit, and organize online lecture hyperlinks and study records.' },
          { title: 'Organized Categories', desc: 'Filter courses and curriculum sections through modular structural tags.' },
          { title: 'Responsive Design', desc: 'Adaptive cards and tables optimized for mobile screens, tablets, and wide displays.' },
          { title: 'User-Friendly Interface', desc: 'Clean, minimalist typography designed to enhance focus and minimize distractions.' },
          { title: 'Live Deployment', desc: 'Configured with automated pipeline delivery from GitHub to Render cloud hosting.' }
        ],
        challenges: {
          problem: 'Designing a relational-looking local state and intuitive filtering mechanism with pure client-side structures that do not feel sluggish.',
          solution: 'Designed robust data indices and customized ES6 filter mappings, pairing them with interactive CSS transitions to render immediate list reflows.',
          skills: 'Mastered production deployment pipelines, asset caching structures, and standard responsive typography layouts.'
        },
        future: [
          'Secure user auth systems and private vault logins',
          'Personal student accounts and customizable profile workspaces',
          'Progress milestones tracking and revision calendar countdowns',
          'Academic course syllabus managers and file uploading integration',
          'AI-powered resource recommendations and summary generators'
        ]
      }
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-neutral-200/40 dark:border-neutral-900/30 relative overflow-hidden">
      {/* Visual Accent Ambient Gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-fuchsia-500/5 dark:bg-fuchsia-500/2 rounded-full blur-3xl pointer-events-none" />

      {/* Title & Subtitle block */}
      <div className="text-center mb-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 font-display">
          Crafted Engineering Works
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 mt-1 mb-2">
          Projects
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto mb-4 font-medium leading-relaxed">
          A collection of real-world applications I've designed, built, and continuously improved.
        </p>
        <div className="w-12 h-[2.5px] bg-indigo-600 dark:bg-cyan-400 mx-auto rounded-full" />
      </div>

      {/* PROJECTS SHOWCASE GRID (Alternating Layouts) */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-20">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;
          const currentTab = activeTabs[project.id];
          const isHormonix = project.id === 'hormonix';

          return (
            <article
              key={project.id}
              className={`flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 relative group`}
            >
              {/* VISUAL PREVIEW COLUMN */}
              <div className={`w-full lg:w-5/12 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="relative overflow-hidden h-[260px] sm:h-[320px] bg-neutral-950 flex items-center justify-center border border-neutral-200/60 dark:border-white/10 rounded-2xl shadow-xl hover:shadow-2xl hover:border-indigo-500/10 dark:hover:border-cyan-400/10 transition-all duration-300"
                >
                  {/* Decorative glowing backdrops */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${isHormonix ? 'from-fuchsia-600/10 to-indigo-600/10' : 'from-indigo-600/10 to-cyan-500/10'} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  {/* HIGH FIDELITY INLINE SVG EMBEDDING */}
                  {project.id === 'learnvault' ? (
                    <svg viewBox="0 0 600 340" width="100%" height="100%" className="w-full h-full transition-transform duration-500 group-hover:scale-102" aria-hidden="true">
                      {/* Background */}
                      <rect x="0" y="0" width="600" height="340" rx="8" fill="#05070c" />
                      <rect x="0" y="0" width="600" height="340" rx="8" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

                      {/* Sidebar */}
                      <rect x="0" y="0" width="130" height="340" rx="8" fill="#080a11" />
                      <path d="M130,0 L130,340" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                      {/* Logo Section */}
                      <g transform="translate(12, 16)">
                        <polygon points="12,6 20,2 28,6 20,10" fill="#6366f1" />
                        <path d="M28,6 L28,12" stroke="#6366f1" strokeWidth="1" />
                        <path d="M14,8 L14,12 C14,14 26,14 26,12 L26,8" fill="#6366f1" opacity="0.8" />
                        <text x="36" y="8" fontFamily="var(--font-sans)" fontWeight="bold" fontSize="10" fill="#ffffff">LearnVault</text>
                        <text x="36" y="15" fontFamily="var(--font-mono)" fontSize="5.5" fill="rgba(255,255,255,0.4)" letterSpacing="0.2">STUDENT CORE v1.2</text>
                      </g>

                      {/* Profile Box */}
                      <rect x="10" y="44" width="110" height="36" rx="5" fill="#0e111b" stroke="rgba(255,255,255,0.03)" />
                      <circle cx="24" cy="62" r="10" fill="#4f46e5" />
                      <text x="24" y="65" fontFamily="var(--font-sans)" fontWeight="bold" fontSize="8" fill="#ffffff" textAnchor="middle">MA</text>
                      <text x="40" y="59" fontFamily="var(--font-sans)" fontWeight="600" fontSize="8.5" fill="#ffffff">Mari</text>
                      <text x="40" y="68" fontFamily="var(--font-mono)" fontSize="5.5" fill="rgba(255,255,255,0.35)">marimuthu.a...</text>

                      {/* Active Meter */}
                      <rect x="10" y="86" width="110" height="15" rx="3" fill="#0e111b" />
                      <text x="16" y="96" fontFamily="var(--font-mono)" fontSize="5" fontWeight="600" fill="rgba(255,255,255,0.4)" letterSpacing="0.2">ACTIVE METER</text>
                      <rect x="94" y="89" width="22" height="9" rx="2" fill="rgba(249,115,22,0.12)" />
                      <text x="105" y="96" fontFamily="var(--font-mono)" fontSize="5.5" fontWeight="bold" fill="#f97316" textAnchor="middle">🔥 1d</text>

                      {/* Core Views */}
                      <text x="12" y="118" fontFamily="var(--font-mono)" fontSize="5" fontWeight="bold" fill="rgba(255,255,255,0.3)" letterSpacing="0.5">VAULT CORE VIEWS</text>
                      <rect x="8" y="126" width="114" height="20" rx="3.5" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.15)" strokeWidth="0.5" />
                      <rect x="8" y="130" width="2" height="12" rx="1" fill="#6366f1" />
                      <text x="18" y="139" fontFamily="var(--font-sans)" fontWeight="600" fontSize="7.5" fill="#a5b4fc">🎛️ Dashboard</text>
                      <text x="18" y="161" fontFamily="var(--font-sans)" fontSize="7.5" fill="rgba(255,255,255,0.5)">📖 Topics Vault</text>
                      <text x="18" y="181" fontFamily="var(--font-sans)" fontSize="7.5" fill="rgba(255,255,255,0.5)">📅 Revision Calendar</text>

                      {/* Main workspace */}
                      <text x="145" y="18" fontFamily="var(--font-mono)" fontSize="5" fontWeight="bold" fill="rgba(255,255,255,0.4)" letterSpacing="0.8">CORE PORTAL WORKSPACE</text>
                      <text x="145" y="30" fontFamily="var(--font-display)" fontWeight="800" fontSize="9.5" fill="#ffffff" letterSpacing="0.2">ACADEMIC DASHBOARD ANALYTICS</text>
                      <rect x="520" y="15" width="68" height="16" rx="3.5" fill="#0d111d" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                      <text x="554" y="25" fontFamily="var(--font-sans)" fontSize="6.5" fontWeight="500" fill="#ffffff" textAnchor="middle">+ Log New Topic</text>

                      {/* Welcome card */}
                      <rect x="145" y="44" width="443" height="66" rx="6" fill="#0a0d1d" stroke="rgba(99,102,241,0.05)" />
                      <rect x="157" y="54" width="60" height="12" rx="6" fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.2)" strokeWidth="0.5" />
                      <text x="187" y="62" fontFamily="var(--font-sans)" fontWeight="bold" fontSize="5" fill="#c084fc" textAnchor="middle">🎓 Vault Verified</text>
                      <text x="157" y="80" fontFamily="var(--font-display)" fontWeight="800" fontSize="11" fill="#ffffff">Good evening, <tspan fill="#a78bfa">Mari!</tspan></text>
                      <text x="157" y="91" fontFamily="var(--font-sans)" fontSize="6.2" fill="rgba(255,255,255,0.45)">Welcome back to your Study Vault. You currently have 0 topics logged, with 0 slated in</text>
                      <text x="157" y="98" fontFamily="var(--font-sans)" fontSize="6.2" fill="rgba(255,255,255,0.45)">active revision. Connect new topics or review calendars below!</text>

                      <rect x="465" y="52" width="55" height="50" rx="5" fill="#070914" stroke="rgba(255,255,255,0.02)" />
                      <text x="492.5" y="62" fontFamily="var(--font-mono)" fontSize="5" fill="rgba(255,255,255,0.35)" textAnchor="middle" fontWeight="bold">Streak Balance</text>
                      <text x="492.5" y="84" fontFamily="var(--font-mono)" fontSize="14" fill="#ea580c" textAnchor="middle" fontWeight="900">1d</text>

                      <rect x="525" y="52" width="55" height="50" rx="5" fill="#070914" stroke="rgba(255,255,255,0.02)" />
                      <text x="552.5" y="62" fontFamily="var(--font-mono)" fontSize="5" fill="rgba(255,255,255,0.35)" textAnchor="middle" fontWeight="bold">Completion</text>
                      <text x="552.5" y="84" fontFamily="var(--font-mono)" fontSize="14" fill="#10b981" textAnchor="middle" fontWeight="900">0%</text>

                      {/* Stat grid */}
                      <rect x="145" y="118" width="104" height="60" rx="5" fill="#080a14" stroke="rgba(255,255,255,0.02)" />
                      <text x="153" y="128" fontFamily="var(--font-mono)" fontSize="4.8" fontWeight="bold" fill="rgba(255,255,255,0.35)" letterSpacing="0.2">VAULT CAPACITY</text>
                      <text x="153" y="146" fontFamily="var(--font-mono)" fontSize="13" fontWeight="bold" fill="#ffffff">0 <tspan fontSize="7.5" fill="rgba(255,255,255,0.4)" fontWeight="normal" fontFamily="var(--font-sans)">topics</tspan></text>
                      <text x="153" y="162" fontFamily="var(--font-sans)" fontSize="6" fill="#10b981" fontWeight="500">✔ 0 Completed (0%)</text>

                      <rect x="257" y="118" width="104" height="60" rx="5" fill="#080a14" stroke="rgba(255,255,255,0.02)" />
                      <text x="265" y="128" fontFamily="var(--font-mono)" fontSize="4.8" fontWeight="bold" fill="rgba(255,255,255,0.35)" letterSpacing="0.2">LEARNING STREAK</text>
                      <text x="265" y="146" fontFamily="var(--font-mono)" fontSize="13" fontWeight="bold" fill="#f97316">1 <tspan fontSize="7.5" fill="rgba(255,255,255,0.4)" fontWeight="normal" fontFamily="var(--font-sans)">days</tspan></text>

                      <rect x="369" y="118" width="104" height="60" rx="5" fill="#080a14" stroke="rgba(255,255,255,0.02)" />
                      <text x="377" y="128" fontFamily="var(--font-mono)" fontSize="4.8" fontWeight="bold" fill="rgba(255,255,255,0.35)" letterSpacing="0.2">DIFFICULTY SPECTRUM</text>
                      <text x="377" y="143" fontFamily="var(--font-sans)" fontSize="8" fontWeight="bold" fill="rgba(255,255,255,0.65)">Empty spectrum</text>

                      <rect x="481" y="118" width="104" height="60" rx="5" fill="#080a14" stroke="rgba(255,255,255,0.02)" />
                      <text x="489" y="128" fontFamily="var(--font-mono)" fontSize="4.8" fontWeight="bold" fill="rgba(255,255,255,0.35)" letterSpacing="0.2">STUDY VELOCITY</text>

                      {/* Milestones */}
                      <rect x="145" y="186" width="443" height="15" rx="3.5" fill="#090a14" stroke="rgba(255,255,255,0.02)" />
                      <text x="153" y="196.5" fontSize="7.5">🧠</text>
                      <text x="165" y="196" fontFamily="var(--font-sans)" fontSize="5.8" fill="rgba(255,255,255,0.45)">
                        <tspan fontWeight="bold" fill="rgba(255,255,255,0.65)">Status Overview: </tspan>
                        <tspan fill="#10b981">● 0 Completed</tspan>   <tspan fill="#a855f7">● 0 Revising</tspan>   <tspan fill="#eab308">● 0 Pending</tspan>
                      </text>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 600 340" width="100%" height="100%" className="w-full h-full transition-transform duration-500 group-hover:scale-102" aria-hidden="true">
                      {/* Background */}
                      <rect x="0" y="0" width="600" height="340" rx="8" fill="#040209" />
                      <rect x="0" y="0" width="600" height="340" rx="8" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

                      {/* Sidebar */}
                      <rect x="0" y="0" width="130" height="340" rx="8" fill="#090613" />
                      <path d="M130,0 L130,340" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                      {/* Logo Section */}
                      <g transform="translate(12, 16)">
                        <rect x="0" y="3" width="4" height="10" rx="2" fill="#a855f7" />
                        <rect x="6" y="0" width="4" height="16" rx="2" fill="#d946ef" />
                        <rect x="12" y="5" width="4" height="7" rx="2" fill="#8b5cf6" />
                        <text x="22" y="11" fontFamily="var(--font-sans)" fontWeight="900" fontSize="10" fill="#ffffff" letterSpacing="0.5">HORMONIX</text>
                      </g>

                      {/* Navigation */}
                      <g transform="translate(0, 48)" fontFamily="var(--font-sans)" fontSize="7.5" fill="rgba(255,255,255,0.5)">
                        <text x="18" y="12">🏠 Home</text>
                        <rect x="8" y="24" width="114" height="20" rx="3.5" fill="rgba(168,85,247,0.08)" stroke="rgba(168,85,247,0.15)" strokeWidth="0.5" />
                        <rect x="8" y="28" width="2" height="12" rx="1" fill="#a855f7" />
                        <text x="18" y="37" fontWeight="600" fill="#d8b4fe">🎵 Library</text>
                        <text x="18" y="61">💽 Albums</text>
                        <text x="18" y="81">👥 Artists</text>
                        <text x="18" y="101">📋 Playlists</text>
                      </g>

                      {/* Top bar search */}
                      <rect x="145" y="13" width="150" height="17" rx="3" fill="#0d0a1a" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                      <text x="153" y="24" fontFamily="var(--font-sans)" fontSize="6" fill="rgba(255,255,255,0.3)">🔍 Search track, artist, album...</text>

                      {/* Folders */}
                      <rect x="495" y="13" width="45" height="17" rx="3.5" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                      <text x="517.5" y="24" fontFamily="var(--font-sans)" fontSize="5.5" fontWeight="bold" fill="rgba(255,255,255,0.6)" textAnchor="middle">📤 Import</text>

                      <rect x="545" y="13" width="45" height="17" rx="3.5" fill="#a855f7" />
                      <text x="567.5" y="24" fontFamily="var(--font-sans)" fontSize="5.5" fontWeight="bold" fill="#ffffff" textAnchor="middle">📁 Folders</text>

                      {/* Library control center */}
                      <text x="145" y="50" fontFamily="var(--font-mono)" fontSize="5.5" fontWeight="bold" fill="rgba(255,255,255,0.4)" letterSpacing="0.5">LIBRARY CONTROL CENTER</text>
                      <rect x="255" y="42" width="36" height="11" rx="2" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.3)" strokeWidth="0.5" />
                      <text x="273" y="49" fontFamily="var(--font-sans)" fontWeight="bold" fontSize="4.8" fill="#d8b4fe" textAnchor="middle">All Tracks</text>
                      <text x="300" y="49" fontFamily="var(--font-sans)" fontSize="4.8" fill="rgba(255,255,255,0.4)">📁 Folder Browser</text>

                      {/* Rows helper */}
                      <g transform="translate(145, 68)" fontFamily="var(--font-mono)" fontSize="5.2" fontWeight="bold" fill="rgba(255,255,255,0.3)">
                        <text x="0" y="0">#</text>
                        <text x="16" y="0">Cover</text>
                        <text x="42" y="0">Title</text>
                        <text x="170" y="0">Artist</text>
                        <text x="290" y="0">Album</text>
                      </g>
                      <line x1="145" y1="73" x2="590" y2="73" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

                      <g transform="translate(145, 84)" fontFamily="var(--font-sans)" fontSize="6" fill="rgba(255,255,255,0.45)">
                        <g transform="translate(0, 0)">
                          <text x="0" y="8" fill="rgba(255,255,255,0.2)">1</text>
                          <rect x="16" y="1" width="16" height="9" rx="1.5" fill="#f43f5e" />
                          <text x="42" y="8" fontWeight="bold" fill="#ffffff">Aadi Maasa Kaathadikka</text>
                          <text x="170" y="8">Srikanth Deva/ Udit Narayan</text>
                          <text x="290" y="8">Thottupaar (Original Motion Picture)</text>
                        </g>
                        <g transform="translate(0, 15)">
                          <text x="0" y="8" fill="rgba(255,255,255,0.2)">2</text>
                          <rect x="16" y="1" width="16" height="9" rx="1.5" fill="#3b82f6" />
                          <text x="42" y="8" fontWeight="bold" fill="#ffffff">Aai Mailapuru</text>
                          <text x="170" y="8">Srikanth Deva/Manikka Vinayagam</text>
                        </g>
                        <g transform="translate(0, 30)">
                          <text x="0" y="8" fill="rgba(255,255,255,0.2)">3</text>
                          <rect x="16" y="1" width="16" height="9" rx="1.5" fill="#ea580c" />
                          <text x="42" y="8" fontWeight="bold" fill="#ffffff">Aathangara Orathil</text>
                          <text x="170" y="8">Harris Jayaraj/ Gana Bala</text>
                        </g>
                      </g>

                      {/* Playback wave representation / Controls */}
                      <circle cx="330" cy="313" r="8.5" fill="#a855f7" />
                      <polygon points="328.5,310 333.5,313 328.5,316" fill="#ffffff" />
                      <rect x="250" y="328" width="160" height="1.5" rx="1" fill="rgba(255,255,255,0.06)" />
                    </svg>
                  )}
                </motion.div>
              </div>

              {/* INFORMATION AND CASE STUDY COLUMN */}
              <div className="w-full lg:w-7/12 flex flex-col justify-between">
                <div>
                  {/* Status, Category & Action buttons header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-mono">
                      {project.subtitle}
                    </span>

                    {/* STATUS BADGE */}
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${
                      project.status === 'completed'
                        ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200/40 dark:border-emerald-500/20'
                        : 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-200/40 dark:border-amber-500/20'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'completed' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      <span>{project.statusText}</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-neutral-900 dark:text-neutral-50 mb-3 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mb-5 font-medium">
                    {project.shortDescription}
                  </p>

                  {/* Technologies stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-neutral-100 dark:bg-white/5 border border-neutral-200/50 dark:border-white/5 text-neutral-500 dark:text-neutral-400 rounded-lg hover:border-indigo-500/10 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* INTERACTIVE CASE STUDY TABS */}
                  <div className="border border-neutral-200/60 dark:border-white/10 rounded-2xl bg-white/50 dark:bg-[#121212]/40 backdrop-blur-md overflow-hidden mb-6 shadow-sm">
                    {/* Tab Selection Row */}
                    <div className="flex border-b border-neutral-200/60 dark:border-white/10 bg-neutral-50/50 dark:bg-white/[0.02]">
                      {(['overview', 'features', 'challenges', 'future'] as TabType[]).map((tab) => {
                        const isActive = currentTab === tab;
                        const labelMap: Record<TabType, string> = {
                          overview: 'Overview',
                          features: 'Features',
                          challenges: 'Challenges',
                          future: 'Future Roadmap',
                        };

                        return (
                          <button
                            key={tab}
                            onClick={() => handleTabChange(project.id, tab)}
                            className={`flex-1 py-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-center transition-all duration-200 focus:outline-none focus-visible:bg-neutral-100 dark:focus-visible:bg-white/5 relative cursor-pointer ${
                              isActive
                                ? 'text-indigo-600 dark:text-cyan-400 bg-white dark:bg-[#121212]'
                                : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-50/30 dark:hover:bg-white/[0.01]'
                            }`}
                            aria-selected={isActive}
                            role="tab"
                          >
                            <span>{labelMap[tab]}</span>
                            {isActive && (
                              <motion.div
                                layoutId={`active-indicator-${project.id}`}
                                className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-indigo-600 dark:bg-cyan-400"
                                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Tab Panels Contents */}
                    <div className="p-5">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentTab}
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.18 }}
                          className="min-h-[145px] flex flex-col justify-center"
                        >
                          {currentTab === 'overview' && (
                            <div className="flex flex-col gap-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                              <p>
                                <span className="font-extrabold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider text-[10px] block mb-0.5">
                                  Problem Statement
                                </span>
                                {project.details.overview.problem}
                              </p>
                              <p>
                                <span className="font-extrabold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider text-[10px] block mb-0.5">
                                  Our Solution
                                </span>
                                {project.details.overview.solution}
                              </p>
                              <p className="text-[10px] font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider mt-1 flex items-center gap-1.5">
                                <Target className="w-3.5 h-3.5" />
                                <span>Target Audience: {project.details.overview.audience}</span>
                              </p>
                            </div>
                          )}

                          {currentTab === 'features' && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              {project.details.features.map((feat) => (
                                <div
                                  key={feat.title}
                                  className="p-3 bg-neutral-100/40 dark:bg-white/[0.02] border border-neutral-200/30 dark:border-white/5 rounded-xl flex items-start gap-2.5"
                                >
                                  <span className="w-4 h-4 rounded-full bg-indigo-100/50 dark:bg-cyan-950/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-indigo-600 dark:text-cyan-400">
                                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                                  </span>
                                  <div>
                                    <h4 className="text-[11px] font-black text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">
                                      {feat.title}
                                    </h4>
                                    <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-normal mt-0.5 font-medium">
                                      {feat.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {currentTab === 'challenges' && (
                            <div className="flex flex-col gap-3.5 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                              <div>
                                <h4 className="font-extrabold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider text-[10px] block mb-0.5">
                                  Engineering Bottleneck
                                </h4>
                                <p>{project.details.challenges.problem}</p>
                              </div>
                              <div>
                                <h4 className="font-extrabold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider text-[10px] block mb-0.5">
                                  System Resolution
                                </h4>
                                <p>{project.details.challenges.solution}</p>
                              </div>
                              <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mt-1 flex items-center gap-1.5">
                                <Zap className="w-3.5 h-3.5 text-emerald-500" />
                                <span>Core Competencies Gained: {project.details.challenges.skills}</span>
                              </p>
                            </div>
                          )}

                          {currentTab === 'future' && (
                            <div>
                              <h4 className="font-extrabold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider text-[10px] block mb-2">
                                Upcoming Roadmap (Future Enhancements)
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {project.details.future.map((item) => (
                                  <div
                                    key={item}
                                    className="flex items-center gap-2.5 text-[11px] text-neutral-500 dark:text-neutral-400 font-medium"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-cyan-400 flex-shrink-0" />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* PRIMARY OUTLET BUTTONS */}
                <div className="flex items-center gap-3 pt-3 border-t border-neutral-200/40 dark:border-white/5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-white/25 hover:bg-neutral-50 dark:hover:bg-white/[0.08] text-xs uppercase tracking-widest font-black transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer text-center"
                    aria-label={`View ${project.title} GitHub repository`}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-white/90 text-xs uppercase tracking-widest font-black transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer text-center shadow-lg shadow-indigo-600/[0.08] dark:shadow-none"
                      aria-label={`Launch ${project.title} live deployment`}
                    >
                      <span>Live App Preview</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
