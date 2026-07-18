import { motion } from 'motion/react';
import {
  GraduationCap,
  MapPin,
  Code2,
  Cpu,
  Target,
  BookOpen,
  Sparkles,
  Award,
  Zap,
  Users,
  Brain,
  Code
} from 'lucide-react';

interface AboutSectionProps {
  theme: 'dark' | 'light';
}

export default function AboutSection({ theme }: AboutSectionProps) {
  // Information cards data
  const infoCards = [
    {
      icon: <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />,
      title: 'Education',
      value: 'B.Tech CSE (First Year Completed)',
      detail: 'JNN Institute of Engineering • CGPA 8.6'
    },
    {
      icon: <MapPin className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />,
      title: 'Location',
      value: 'Tamil Nadu, India',
      detail: 'Available for Remote & Hybrid roles'
    },
    {
      icon: <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      title: 'Focus',
      value: 'Software Engineering',
      detail: 'Clean architecture & robust codebases'
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />,
      title: 'Interests',
      value: 'Artificial Intelligence',
      detail: 'Machine Learning & intelligent scripts'
    },
    {
      icon: <Target className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      title: 'Goal',
      value: 'Software Engineer',
      detail: 'Creating user-friendly products'
    },
    {
      icon: <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: 'Current Status',
      value: 'Learning Java & DSA',
      detail: 'Mastering problem solving and Full-Stack'
    }
  ];

  // Currently learning topics
  const learningTopics = [
    'Java',
    'Data Structures & Algorithms',
    'JavaScript',
    'React',
    'Node.js',
    'Artificial Intelligence',
    'Git & GitHub Best Practices'
  ];

  // Personal highlights with simple checkmark icons and clean hover lift
  const highlights = [
    { label: 'Real-world Projects', icon: <Code className="w-4 h-4 text-emerald-500" /> },
    { label: 'Fast Learner', icon: <Zap className="w-4 h-4 text-amber-500 animate-pulse" /> },
    { label: 'AI Enthusiast', icon: <Cpu className="w-4 h-4 text-cyan-500" /> },
    { label: 'Problem Solver', icon: <Brain className="w-4 h-4 text-purple-500" /> },
    { label: 'Continuous Learner', icon: <BookOpen className="w-4 h-4 text-blue-500" /> },
    { label: 'Team Player', icon: <Users className="w-4 h-4 text-fuchsia-500" /> }
  ];

  return (
    <section id="about" className="py-24 border-t border-neutral-200/40 dark:border-neutral-900/30 relative">
      {/* Decorative Blur Shapes */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-indigo-500/5 dark:bg-indigo-500/2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500/5 dark:bg-fuchsia-500/2 rounded-full blur-3xl pointer-events-none" />

      {/* Header Container */}
      <div className="text-center mb-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 font-display">
          Get to know the person behind the code
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 mt-1 mb-2">
          About Me
        </h2>
        <div className="w-12 h-[2.5px] bg-indigo-600 dark:bg-cyan-400 mx-auto rounded-full" />
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column - Biography, Career Objective & Learning (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Biography Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/65 dark:bg-[#121212]/60 backdrop-blur-xl border border-neutral-200/60 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-black/20"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
              <h3 className="text-lg font-display font-bold text-neutral-900 dark:text-neutral-50">
                My Story &amp; Journey
              </h3>
            </div>
            
            <div className="space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              <p>
                My name is <span className="font-bold text-neutral-950 dark:text-white">Marimuthu A</span>. I am a highly motivated 
                B.Tech Computer Science and Engineering student at <span className="font-semibold text-neutral-900 dark:text-white">JNN Institute of Engineering</span>. 
                I recently completed my first year with an academic standard of <span className="font-bold text-indigo-600 dark:text-cyan-400">8.6 / 10 CGPA</span>.
              </p>
              <p>
                My passion for software engineering drives me to study modern programming ecosystems continuously. 
                I enjoy building real-world projects that blend elegant, clean user-interface design with highly structured, 
                maintainable backend solutions. My technical focus encompasses modern Full-Stack development paradigms, 
                robust application design, and applying Artificial Intelligence to solve everyday engineering problems.
              </p>
              <p>
                I thrive on solving algorithmic puzzles, studying computational theory, and collaborating on 
                open-source platforms. By actively learning day-to-day, I aim to maintain absolute craftsmanship in every line 
                of code I write, always preparing myself for challenging industrial internships.
              </p>
            </div>
          </motion.div>

          {/* Highlighted Career Objective Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-50/40 to-fuchsia-50/40 dark:from-indigo-950/10 dark:to-fuchsia-950/10 backdrop-blur-xl border border-indigo-100 dark:border-indigo-500/15 shadow-lg relative overflow-hidden"
          >
            {/* Soft decorative visual indicator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
              <h3 className="text-sm font-display font-black uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                Career Objective
              </h3>
            </div>
            <p className="text-sm leading-relaxed font-medium text-neutral-700 dark:text-neutral-300">
              "My goal is to become a skilled Software Engineer by building impactful software, continuously improving my problem-solving skills, contributing to open-source projects, and gaining industry experience through internships while preparing for <span className="text-indigo-600 dark:text-cyan-400 font-bold">GATE 2028</span>."
            </p>
          </motion.div>

          {/* Currently Learning Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/65 dark:bg-[#121212]/60 backdrop-blur-xl border border-neutral-200/60 dark:border-white/10 shadow-xl"
          >
            <h3 className="text-sm font-display font-black uppercase tracking-wider text-neutral-800 dark:text-neutral-200 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Currently Deep-Diving Into
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {learningTopics.map((topic, i) => (
                <span
                  key={topic}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-neutral-100/80 dark:bg-white/5 border border-neutral-200/50 dark:border-white/5 text-neutral-700 dark:text-neutral-300 hover:border-indigo-500/40 dark:hover:border-cyan-400/40 transition-colors duration-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Column - Information Cards & Personal Highlights (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Information Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-white/50 dark:bg-[#121212]/40 backdrop-blur-md border border-neutral-200/50 dark:border-white/5 hover:border-indigo-500/20 dark:hover:border-cyan-500/20 transition-all duration-300 shadow-lg shadow-black/[0.02]"
              >
                <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200/40 dark:border-white/10 flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500 mb-1">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-[13px] font-bold text-neutral-800 dark:text-neutral-200 leading-snug mb-0.5">
                  {card.value}
                </p>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-normal font-medium">
                  {card.detail}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Personal Highlights Card list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/65 dark:bg-[#121212]/60 backdrop-blur-xl border border-neutral-200/60 dark:border-white/10 shadow-xl"
          >
            <h3 className="text-sm font-display font-black uppercase tracking-wider text-neutral-800 dark:text-neutral-200 mb-5">
              Personal Highlights
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-50/50 dark:bg-[#181818]/40 border border-neutral-200/40 dark:border-white/5 hover:bg-neutral-100/50 dark:hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="w-7 h-7 rounded-lg bg-neutral-100 dark:bg-white/5 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
