import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cpu,
  Brain,
  Sparkles,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';

interface SkillsSectionProps {
  theme: 'dark' | 'light';
}

interface SkillItem {
  name: string;
  icon: string;
  isLearning?: boolean;
  colorClass: string; // Tailwind bg/text color for fine hover detail
}

interface SkillCategoryData {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  skills: SkillItem[];
}

export default function SkillsSection({ theme }: SkillsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Categories and items according to the explicit prompt list
  const skillCategories: SkillCategoryData[] = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code2 className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />,
      description: 'Languages used to develop core application logic, server systems, and problem-solving modules.',
      skills: [
        { name: 'Python', icon: '🐍', colorClass: 'hover:bg-emerald-50 dark:hover:bg-emerald-950/20 hover:text-emerald-700 dark:hover:text-emerald-400' },
        { name: 'Java', icon: '☕', colorClass: 'hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:text-amber-700 dark:hover:text-amber-400' },
        { name: 'JavaScript', icon: '⚡', colorClass: 'hover:bg-yellow-50 dark:hover:bg-yellow-950/20 hover:text-yellow-700 dark:hover:text-yellow-400' },
        { name: 'C', icon: '📄', colorClass: 'hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:text-blue-700 dark:hover:text-blue-400' },
        { name: 'C++', icon: '➕', colorClass: 'hover:bg-sky-50 dark:hover:bg-sky-950/20 hover:text-sky-700 dark:hover:text-sky-400' },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Layout className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />,
      description: 'Designing high-fidelity, responsive, and performance-optimized user interfaces.',
      skills: [
        { name: 'HTML5', icon: '🌐', colorClass: 'hover:bg-orange-50 dark:hover:bg-orange-950/20 hover:text-orange-700 dark:hover:text-orange-400' },
        { name: 'CSS3', icon: '🎨', colorClass: 'hover:bg-sky-50 dark:hover:bg-sky-950/20 hover:text-sky-700 dark:hover:text-sky-400' },
        { name: 'Responsive Design', icon: '📱', colorClass: 'hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:text-indigo-700 dark:hover:text-indigo-400' },
        { name: 'React', icon: '⚛', isLearning: true, colorClass: 'hover:bg-cyan-50 dark:hover:bg-cyan-950/20 hover:text-cyan-700 dark:hover:text-cyan-400' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      description: 'Architecting RESTful services, middleware stacks, and runtime servers.',
      skills: [
        { name: 'Node.js', icon: '🟢', isLearning: true, colorClass: 'hover:bg-green-50 dark:hover:bg-green-950/20 hover:text-green-700 dark:hover:text-green-400' },
        { name: 'Express.js', icon: '🚂', isLearning: true, colorClass: 'hover:bg-neutral-100 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-neutral-100' },
        { name: 'REST APIs', icon: '🔌', isLearning: true, colorClass: 'hover:bg-violet-50 dark:hover:bg-violet-950/20 hover:text-violet-700 dark:hover:text-violet-400' },
      ],
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <Database className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      description: 'Structuring relational data schemas and building database integrations.',
      skills: [
        { name: 'MySQL', icon: '🐘', colorClass: 'hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:text-blue-700 dark:hover:text-blue-400' },
        { name: 'SQLite', icon: '🗃', colorClass: 'hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:text-indigo-700 dark:hover:text-indigo-400' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      description: 'Command line tools, bundlers, hosting systems, and editors supporting deployment workflows.',
      skills: [
        { name: 'Git', icon: '🌿', colorClass: 'hover:bg-orange-50 dark:hover:bg-orange-950/20 hover:text-orange-700 dark:hover:text-orange-400' },
        { name: 'GitHub', icon: '🐙', colorClass: 'hover:bg-neutral-100 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-neutral-100' },
        { name: 'VS Code', icon: '💻', colorClass: 'hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:text-blue-700 dark:hover:text-blue-400' },
        { name: 'Electron', icon: '⚛', isLearning: true, colorClass: 'hover:bg-cyan-50 dark:hover:bg-cyan-950/20 hover:text-cyan-700 dark:hover:text-cyan-400' },
        { name: 'Render', icon: '☁', colorClass: 'hover:bg-emerald-50 dark:hover:bg-emerald-950/20 hover:text-emerald-700 dark:hover:text-emerald-400' },
        { name: 'Vercel', icon: '▲', colorClass: 'hover:bg-neutral-100 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-neutral-100' },
      ],
    },
  ];

  // Currently Learning highlight badges (as requested)
  const currentlyLearning = [
    { name: 'Java', desc: 'Core OOP & APIs' },
    { name: 'Data Structures & Algorithms', desc: 'Problem Solving Mastery' },
    { name: 'React', desc: 'SPA & State Architectures' },
    { name: 'Node.js', desc: 'Backend Runtimes' },
    { name: 'Artificial Intelligence', desc: 'Generative AI & LLMs' },
    { name: 'Software Engineering', desc: 'Clean Architectures & Design' },
    { name: 'GATE 2028 Preparation', desc: 'CS Curriculum Fundamentals' },
  ];

  const filterButtons = [
    { label: 'All', id: 'all' },
    { label: 'Languages', id: 'languages' },
    { label: 'Frontend', id: 'frontend' },
    { label: 'Backend', id: 'backend' },
    { label: 'Database', id: 'database' },
    { label: 'Tools', id: 'tools' },
  ];

  // Filter Categories
  const filteredCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeFilter);

  return (
    <section id="skills" className="py-24 border-t border-neutral-200/40 dark:border-neutral-900/30 relative overflow-hidden">
      {/* Visual Accent Ambient Gradients */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/5 dark:bg-cyan-500/2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-fuchsia-500/5 dark:bg-fuchsia-500/2 rounded-full blur-3xl pointer-events-none" />

      {/* Title & Subtitle block */}
      <div className="text-center mb-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 font-display">
          My technical stack
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 mt-1 mb-2">
          Skills
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-4 font-medium leading-relaxed">
          Technologies, programming languages, and tools I use to build modern software.
        </p>
        <div className="w-12 h-[2.5px] bg-indigo-600 dark:bg-cyan-400 mx-auto rounded-full" />
      </div>

      {/* FILTER TABS WITH KEYBOARD ACCESSIBILITY */}
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-10 max-w-2xl mx-auto px-4">
        {filterButtons.map((btn) => {
          const isActive = activeFilter === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer ${
                isActive
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 shadow-md scale-105'
                  : 'bg-neutral-100 dark:bg-white/5 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-white/10 hover:text-neutral-800 dark:hover:text-neutral-200'
              }`}
              aria-pressed={isActive}
              aria-label={`Show ${btn.label} skills`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* SKILLS CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-12">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-6 bg-white/65 dark:bg-[#121212]/60 backdrop-blur-xl border border-neutral-200/60 dark:border-white/10 rounded-2xl shadow-xl shadow-black/[0.03] dark:shadow-black/20 flex flex-col justify-between hover:border-indigo-500/20 dark:hover:border-cyan-500/20 hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                {/* Header Category element */}
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-neutral-200/50 dark:border-white/10">
                  <span className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200/40 dark:border-white/10 flex items-center justify-center text-neutral-800 dark:text-white group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </span>
                  <div>
                    <h3 className="font-display font-black text-sm text-neutral-900 dark:text-neutral-50 uppercase tracking-wider">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 font-medium">
                  {category.description}
                </p>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold bg-neutral-100/70 dark:bg-white/5 border border-neutral-200/40 dark:border-white/5 text-neutral-700 dark:text-neutral-300 transition-all duration-300 select-none ${skill.colorClass} hover:-translate-y-0.5 hover:shadow-md cursor-default`}
                    >
                      <span className="text-sm">{skill.icon}</span>
                      <span>{skill.name}</span>
                      {skill.isLearning && (
                        <span className="text-[8px] font-extrabold uppercase bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-cyan-400 px-1.5 py-0.5 rounded-full border border-indigo-200/40 dark:border-indigo-400/20 scale-95 origin-left">
                          Learning
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CURRENTLY LEARNING BADGES (Highlight card) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-8 bg-gradient-to-br from-indigo-50/40 via-white/50 to-fuchsia-50/40 dark:from-indigo-950/10 dark:via-[#121212]/50 dark:to-fuchsia-950/10 backdrop-blur-xl border border-neutral-200/60 dark:border-white/10 rounded-2xl shadow-xl max-w-5xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/30 flex items-center justify-center text-indigo-600 dark:text-cyan-400">
              <BookOpen className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-display font-black uppercase tracking-wider text-xs sm:text-sm text-neutral-800 dark:text-neutral-100">
                Currently Learning &amp; Goals
              </h3>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-400 font-medium uppercase tracking-wider">
                My immediate academic &amp; development objectives
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-cyan-400 px-3 py-1 rounded-full bg-indigo-100/50 dark:bg-indigo-950/30">
            <span>In-Progress</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {currentlyLearning.map((item, idx) => (
            <div
              key={item.name}
              className="p-3.5 rounded-xl bg-white/70 dark:bg-[#1A1A1A]/40 border border-neutral-200/50 dark:border-white/5 flex flex-col justify-between hover:border-indigo-500/20 dark:hover:border-cyan-400/20 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-black/[0.01]"
            >
              <h4 className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                {item.name}
              </h4>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-400 font-medium leading-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
