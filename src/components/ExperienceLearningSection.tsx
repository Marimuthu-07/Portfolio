import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  GraduationCap,
  Code2,
  Terminal,
  Cpu,
  BookOpen,
  Info,
  Layers,
  Sparkles,
  Link2,
  ChevronRight,
  CheckCircle2,
  Target,
  Rocket,
  Music,
  Laptop
} from 'lucide-react';
import { CERTIFICATIONS } from '../data';

interface ExperienceLearningSectionProps {
  theme: 'dark' | 'light';
}

interface TimelineEvent {
  year: string;
  title: string;
  emoji: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  accentColor: string;
  isFuture?: boolean;
  goals?: string[];
}

export default function ExperienceLearningSection({ theme }: ExperienceLearningSectionProps) {
  // Grab real verified credentials from data
  const googleAiCert = CERTIFICATIONS.find(c => c.id === 'google-ai-essentials') || {
    id: 'google-ai-essentials',
    name: 'Google AI Essentials',
    organization: 'Google & Coursera',
    issueDate: 'May 2026',
    verificationUrl: 'https://coursera.org/verify/specialization/EGORX38IYEHU',
    skillsLearned: ['Generative AI', 'Prompt Engineering', 'AI Productivity', 'Ethical AI']
  };

  const pythonCert = CERTIFICATIONS.find(c => c.id === 'python-internshala') || {
    id: 'python-internshala',
    name: 'Programming with Python',
    organization: 'Internshala Trainings (Six-week intensive)',
    issueDate: 'July 2025',
    verificationUrl: 'https://trainings.internshala.com/verify_certificate',
    skillsLearned: ['Python OOP', 'Data Structures', 'Database Integration', 'GUI Development']
  };

  const certificationsList = [
    {
      ...googleAiCert,
      description: 'Acquired foundational skills in using generative AI tools to boost productivity, write effective prompts, and understand ethical considerations.',
      badge: 'Google Verified',
      color: 'from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-cyan-400 border-blue-200/40 dark:border-blue-400/20'
    },
    {
      ...pythonCert,
      description: 'An intensive six-week specialization covering object-oriented programming, logical system workflows, GUI development, and core algorithmic procedures.',
      badge: 'Specialist Grade',
      color: 'from-amber-500/10 to-yellow-500/10 text-amber-600 dark:text-amber-400 border-amber-200/40 dark:border-amber-400/20'
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2025',
      title: 'Started Programming Journey',
      emoji: '🚀',
      description: 'Began learning programming fundamentals, problem-solving, and software development concepts while starting my Computer Science Engineering degree.',
      icon: <Rocket className="w-4 h-4" />,
      iconBg: 'bg-indigo-500/10 dark:bg-indigo-400/15 text-indigo-600 dark:text-cyan-400 border-indigo-200/40 dark:border-cyan-400/20',
      accentColor: 'from-indigo-500 to-fuchsia-500',
    },
    {
      year: '2025',
      title: 'Completed Python Training',
      emoji: '🐍',
      description: 'Completed Python programming training covering fundamentals, object-oriented programming, databases, GUI basics, and practical applications.',
      icon: <Terminal className="w-4 h-4" />,
      iconBg: 'bg-amber-500/10 dark:bg-amber-400/15 text-amber-600 dark:text-amber-400 border-amber-200/40 dark:border-amber-400/20',
      accentColor: 'from-amber-500 to-yellow-500',
    },
    {
      year: '2026',
      title: 'Built LearnVault',
      emoji: '📚',
      description: 'Designed and deployed a responsive learning platform to organize educational resources using modern web technologies.',
      icon: <BookOpen className="w-4 h-4" />,
      iconBg: 'bg-cyan-500/10 dark:bg-cyan-400/15 text-cyan-600 dark:text-cyan-400 border-cyan-200/40 dark:border-cyan-400/20',
      accentColor: 'from-cyan-500 to-blue-500',
    },
    {
      year: '2026',
      title: 'Built Hormonix',
      emoji: '🎵',
      description: 'Started developing a desktop music player using Electron, JavaScript, and modern UI principles while continuously improving its features.',
      icon: <Music className="w-4 h-4" />,
      iconBg: 'bg-fuchsia-500/10 dark:bg-fuchsia-400/15 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-200/40 dark:border-fuchsia-400/20',
      accentColor: 'from-fuchsia-500 to-indigo-500',
    },
    {
      year: '2026',
      title: 'Completed Google AI Essentials',
      emoji: '🤖',
      description: 'Strengthened AI knowledge by learning AI fundamentals, prompt engineering, and responsible AI practices.',
      icon: <Cpu className="w-4 h-4" />,
      iconBg: 'bg-blue-500/10 dark:bg-blue-400/15 text-blue-600 dark:text-cyan-400 border-blue-200/40 dark:border-blue-400/20',
      accentColor: 'from-blue-500 to-indigo-500',
    },
    {
      year: 'Present',
      title: 'Currently Learning',
      emoji: '💻',
      description: 'Learning Java, Data Structures & Algorithms, React, Node.js, and preparing for software engineering internships and GATE 2028.',
      icon: <Laptop className="w-4 h-4" />,
      iconBg: 'bg-emerald-500/10 dark:bg-emerald-400/15 text-emerald-600 dark:text-emerald-400 border-emerald-200/40 dark:border-emerald-400/20',
      accentColor: 'from-emerald-500 to-teal-500',
    },
    {
      year: 'Future',
      title: 'Future Goals',
      emoji: '🎯',
      description: 'Aspirations and continuous targets to guide my path as a software engineering professional.',
      icon: <Target className="w-4 h-4" />,
      iconBg: 'bg-rose-500/10 dark:bg-rose-400/15 text-rose-600 dark:text-rose-400 border-rose-200/40 dark:border-rose-400/20',
      accentColor: 'from-rose-500 to-fuchsia-500',
      isFuture: true,
      goals: [
        'Secure a Software Engineering Internship',
        'Contribute to Open Source',
        'Build impactful software products',
        'Crack GATE 2028',
        'Pursue higher studies',
        'Become a Software Engineer',
      ],
    },
  ];

  return (
    <div className="relative">
      {/* 
        This wrapper holds both sections to ensure they exist on the DOM 
        and map perfectly to active section scroll tracking in our header.
      */}
      
      {/* 1. MY JOURNEY TIMELINE (Anchored with id="education") */}
      <section id="education" className="py-24 border-t border-neutral-200/40 dark:border-neutral-900/30 relative overflow-hidden scroll-mt-20">
        {/* Decorative ambient blur shapes */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-500/5 dark:bg-cyan-500/2 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-500/5 dark:bg-fuchsia-500/2 rounded-full blur-3xl pointer-events-none" />
        
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 font-display block mb-1">
            Path of Growth &amp; Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 mb-3">
            My Journey
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto mb-5 font-medium leading-relaxed">
            A timeline of my growth, learning, and milestones in software development.
          </p>
          <div className="w-12 h-[2.5px] bg-indigo-600 dark:bg-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Premium Vertical Timeline Structure */}
        <div className="relative max-w-4xl mx-auto px-4 md:px-0 mt-8">
          {/* Animated central/left connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2.5px] bg-gradient-to-b from-indigo-500 via-fuchsia-500 to-cyan-500 dark:from-cyan-400 dark:via-fuchsia-500 dark:to-indigo-500 rounded-full origin-top transform -translate-x-1/2"
          />

          {/* Timeline Events list */}
          <div className="space-y-12 md:space-y-16 relative">
            {timelineEvents.map((event, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div key={idx} className="relative group min-h-[120px]">
                  {/* Glowing Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: idx * 0.08 }}
                      whileHover={{ scale: 1.15 }}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${event.iconBg} flex items-center justify-center border-2 border-white dark:border-[#0D0D0D] shadow-md shadow-black/5 dark:shadow-black/20 text-neutral-800 dark:text-white cursor-pointer hover:shadow-indigo-500/10 dark:hover:shadow-cyan-400/20 transition-all duration-300`}
                    >
                      {event.icon}
                    </motion.div>
                  </div>

                  {/* alternating flex container */}
                  <div className={`flex flex-col md:flex-row items-start ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                    {/* Event Card Panel */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -25 : 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                      className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
                    >
                      {/* Glassmorphic Card Container */}
                      <article
                        className={`p-6 sm:p-7 rounded-2xl bg-white/75 dark:bg-[#121212]/60 backdrop-blur-xl border shadow-lg shadow-black/[0.01] dark:shadow-black/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group ${
                          event.isFuture
                            ? 'border-2 border-dashed border-indigo-400/40 dark:border-cyan-400/40 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 dark:from-indigo-950/10 dark:via-transparent dark:to-cyan-950/10'
                            : 'border-neutral-200/60 dark:border-white/10 hover:border-indigo-500/30 dark:hover:border-cyan-400/30'
                        }`}
                      >
                        {/* Interactive gradient ambient backdrop glow */}
                        <div className={`absolute -right-12 -bottom-12 w-44 h-44 rounded-full bg-gradient-to-br ${event.accentColor} opacity-[0.03] dark:opacity-[0.05] blur-2xl group-hover:opacity-[0.06] dark:group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none`} />

                        {/* Top Metadata Row */}
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <span className="inline-flex items-center gap-1 text-[10px] font-black px-3 py-1 bg-neutral-100 dark:bg-white/5 border border-neutral-200/40 dark:border-white/5 text-neutral-600 dark:text-neutral-300 rounded-full uppercase tracking-wider">
                            {event.year}
                          </span>

                          {event.isFuture ? (
                            <span className="text-[8px] font-extrabold uppercase tracking-widest text-fuchsia-600 dark:text-fuchsia-400 bg-fuchsia-500/10 px-2 py-0.5 rounded-md border border-fuchsia-500/20">
                              Aspirations
                            </span>
                          ) : (
                            <span className="text-[8px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-cyan-400 bg-indigo-500/10 dark:bg-cyan-500/5 px-2 py-0.5 rounded-md border border-indigo-500/20 dark:border-cyan-400/20">
                              Completed
                            </span>
                          )}
                        </div>

                        {/* Event Title with Emoji */}
                        <h3 className="text-base sm:text-lg font-display font-black text-neutral-900 dark:text-neutral-50 mb-2 flex items-center gap-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                          <span className="text-xl leading-none flex-shrink-0">{event.emoji}</span>
                          <span>{event.title}</span>
                        </h3>

                        {/* Description Text */}
                        <p className="text-xs sm:text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                          {event.description}
                        </p>

                        {/* Future Goals Bullet List (Custom Rendering) */}
                        {event.isFuture && event.goals && (
                          <div className="mt-4 pt-3 border-t border-neutral-200/30 dark:border-white/5">
                            <ul className="space-y-2.5">
                              {event.goals.map((goal, gIdx) => (
                                <li key={gIdx} className="flex items-start gap-2.5 text-xs text-neutral-600 dark:text-neutral-300 font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-cyan-400 mt-1.5 flex-shrink-0 animate-pulse" />
                                  <span>{goal}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </article>
                    </motion.div>

                    {/* Spacer block to balance grid rows on wide monitors */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. CERTIFICATIONS & LEARNING (Anchored with id="certifications") */}
      <section id="certifications" className="py-24 border-t border-neutral-200/40 dark:border-neutral-900/30 relative overflow-hidden scroll-mt-20">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-fuchsia-500/5 dark:bg-fuchsia-500/2 rounded-full blur-3xl pointer-events-none" />
        
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 font-display">
            Verified Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 mt-1 mb-2">
            Certifications &amp; Learning
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto mb-4 font-medium leading-relaxed">
            Authorized and industry-accredited credentials validate my background.
          </p>
          <div className="w-12 h-[2.5px] bg-indigo-600 dark:bg-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
          {certificationsList.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 bg-white/70 dark:bg-[#121212]/60 backdrop-blur-xl border border-neutral-200/60 dark:border-white/10 rounded-2xl shadow-xl shadow-black/[0.02] dark:shadow-black/20 flex flex-col justify-between hover:border-indigo-500/20 dark:hover:border-cyan-400/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200/40 dark:border-white/10 flex items-center justify-center text-neutral-800 dark:text-white group-hover:scale-105 transition-transform duration-300">
                      <Award className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
                    </span>
                    <div>
                      <h3 className="font-display font-black text-sm text-neutral-900 dark:text-neutral-50 uppercase tracking-wider group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                        {cert.name}
                      </h3>
                      <p className="text-[10px] text-neutral-400 dark:text-neutral-500 font-semibold uppercase tracking-wider mt-0.5">
                        {cert.organization}
                      </p>
                    </div>
                  </div>

                  <span className={`text-[8px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-full border ${cert.color}`}>
                    {cert.badge}
                  </span>
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium mb-6">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 bg-neutral-100/50 dark:bg-white/5 border border-neutral-200/30 dark:border-white/5 text-neutral-500 dark:text-neutral-400 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-200/50 dark:border-white/5">
                <span className="inline-flex items-center gap-1.5 text-[10px] text-neutral-400 dark:text-neutral-500 font-bold uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.issueDate}</span>
                </span>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-indigo-600 dark:text-cyan-400 font-black uppercase tracking-wider hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
                    aria-label={`Verify ${cert.name} credentials online`}
                  >
                    <span>Verify Credentials</span>
                    <ArrowUpRight className="w-3 h-3 stroke-[3.5]" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
