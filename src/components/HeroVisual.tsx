import { motion } from 'motion/react';
import { Code2, Sparkles, Terminal, FileCode, Layers, Cpu, Orbit } from 'lucide-react';

interface HeroVisualProps {
  theme: 'dark' | 'light';
}

export default function HeroVisual({ theme }: HeroVisualProps) {
  // Let's create an elegant, responsive code editor + tech stack representation
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center py-4 px-2 select-none">
      {/* Decorative Floating Glowing Background Circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-500/10 to-fuchsia-500/10 blur-3xl dark:from-indigo-500/15 dark:to-fuchsia-500/15 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 blur-3xl dark:from-cyan-500/15 dark:to-emerald-500/15 animate-pulse duration-[6000ms]" />

      {/* Floating Wrapper */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-full"
      >
        {/* Main Code Editor Window Mockup - Glassmorphism */}
        <div className="relative w-full rounded-2xl border border-neutral-200/60 dark:border-white/10 bg-white/70 dark:bg-neutral-900/65 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-neutral-100/50 dark:bg-neutral-950/40 border-b border-neutral-200/40 dark:border-white/5">
            {/* Window controls */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 block" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80 block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 block" />
            </div>
            {/* Tab Label */}
            <div className="flex items-center gap-2 py-0.5 px-3 rounded-md bg-neutral-200/30 dark:bg-neutral-800/40 border border-neutral-300/10 text-[10px] font-mono font-medium text-neutral-600 dark:text-neutral-400">
              <FileCode className="w-3.5 h-3.5 text-cyan-500" />
              <span>developer.py</span>
            </div>
            {/* Visual indicators */}
            <div className="flex items-center gap-1 text-[9px] font-mono text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE</span>
            </div>
          </div>

          <div className="flex min-h-[280px] sm:min-h-[320px]">
            {/* Sidebar Representation */}
            <div className="hidden sm:flex flex-col gap-3.5 w-12 py-4 items-center bg-neutral-50/30 dark:bg-neutral-950/20 border-r border-neutral-200/40 dark:border-white/5 text-neutral-400 dark:text-white/30">
              <Terminal className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
              <Code2 className="w-4 h-4" />
              <Layers className="w-4 h-4" />
              <Cpu className="w-4 h-4" />
              <Orbit className="w-4 h-4" />
            </div>

            {/* Code Content Editor Area */}
            <div className="flex-1 p-5 font-mono text-[11px] sm:text-xs text-left leading-relaxed overflow-x-auto text-neutral-700 dark:text-neutral-300">
              {/* Python Developer Class Template */}
              <div className="space-y-1">
                <div>
                  <span className="text-purple-600 dark:text-fuchsia-400">class</span>{' '}
                  <span className="text-blue-600 dark:text-cyan-300">SoftwareEngineer</span>:
                </div>
                <div className="pl-4">
                  <span className="text-purple-600 dark:text-fuchsia-400">def</span>{' '}
                  <span className="text-blue-500 dark:text-blue-400">__init__</span>(self):
                </div>
                <div className="pl-8">
                  self.name = <span className="text-emerald-600 dark:text-emerald-400">"Marimuthu A"</span>
                </div>
                <div className="pl-8">
                  self.role = <span className="text-emerald-600 dark:text-emerald-400">"Full-Stack Developer"</span>
                </div>
                <div className="pl-8">
                  self.interests = [<span className="text-emerald-600 dark:text-emerald-400">"AI"</span>, <span className="text-emerald-600 dark:text-emerald-400">"Modern Web"</span>]
                </div>

                <div className="pt-2 pl-4">
                  <span className="text-purple-600 dark:text-fuchsia-400">def</span>{' '}
                  <span className="text-blue-500 dark:text-blue-400">solve_problems</span>(self):
                </div>
                <div className="pl-8 text-neutral-400 dark:text-neutral-500">
                  # High-quality UI/UX experiences
                </div>
                <div className="pl-8">
                  <span className="text-purple-600 dark:text-fuchsia-400">return</span> self.build_solutions()
                </div>

                {/* Executed Code Sandbox Output */}
                <div className="mt-5 pt-3 border-t border-neutral-200/40 dark:border-white/5">
                  <div className="text-[10px] text-neutral-400 mb-1 flex items-center gap-1.5">
                    <span className="text-indigo-500">&gt;</span> Terminal Output
                  </div>
                  <div className="text-indigo-600 dark:text-cyan-400 font-semibold pl-3 text-[10px] sm:text-[11px] leading-snug">
                    🚀 System compiling successful!
                    <br />
                    ⚡ Ready to collaborate on internships.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Orbiting / Floating Technology Badges of Marimuthu */}
        <motion.div
          style={{ x: -15, y: -25 }}
          animate={{ y: [-25, -30, -25], x: [-15, -12, -15] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 -left-3 sm:-left-6 py-1.5 px-3.5 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-indigo-500/20 backdrop-blur-md shadow-lg flex items-center gap-1.5"
        >
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 font-display">React & TS</span>
        </motion.div>

        <motion.div
          style={{ x: 20, y: 15 }}
          animate={{ y: [15, 10, 15], x: [20, 23, 20] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-4 -right-4 py-1.5 px-3.5 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-fuchsia-500/20 backdrop-blur-md shadow-lg flex items-center gap-1.5"
        >
          <div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse" />
          <span className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 font-display">Python & OOP</span>
        </motion.div>

        <motion.div
          style={{ x: -10, y: 10 }}
          animate={{ y: [10, 15, 10], x: [-10, -8, -10] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 -left-4 py-1.5 px-3.5 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-emerald-500/20 backdrop-blur-md shadow-lg flex items-center gap-1.5"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 font-display">AI Prompting</span>
        </motion.div>

        <motion.div
          style={{ x: 10, y: -15 }}
          animate={{ y: [-15, -10, -15], x: [10, 7, 10] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -right-4 py-1.5 px-3.5 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-amber-500/20 backdrop-blur-md shadow-lg flex items-center gap-1.5"
        >
          <Sparkles className="w-3 h-3 text-amber-500 animate-bounce" />
          <span className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 font-display">Web3Forms</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
