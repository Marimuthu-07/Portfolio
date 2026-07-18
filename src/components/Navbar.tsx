import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
  activeSection: string;
  onScrollTo: (id: string) => void;
}

export default function Navbar({
  theme,
  onThemeToggle,
  activeSection,
  onScrollTo,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Monitor scrolling to reduce height, add background opacity and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on clicking outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on pressing the Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Journey', id: 'education' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <>
      <header
        ref={navRef}
        id="main-navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/80 dark:bg-[#0D0D0D]/85 border-b border-neutral-200/50 dark:border-white/10 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/20'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO: "Marimuthu A" with elegant typography and subtle hover animation */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="group font-display flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1 transition-transform duration-300"
            aria-label="Marimuthu A Portfolio Home"
          >
            <span className="relative font-black tracking-wider text-sm sm:text-base text-neutral-900 dark:text-white uppercase">
              Marimuthu
              <span className="text-indigo-600 dark:text-cyan-400 group-hover:translate-x-1 inline-block transition-transform duration-300">
                A
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 dark:bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:block" aria-label="Main Desktop Navigation">
            <ul className="flex items-center gap-1.5 lg:gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.id);
                      }}
                      className={`relative px-3.5 py-2 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.18em] rounded-full transition-all duration-300 hover:-translate-y-[1px] block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                        isActive
                          ? 'text-indigo-600 dark:text-cyan-400'
                          : 'text-neutral-500 dark:text-white/50 hover:text-neutral-950 dark:hover:text-white'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="desktopActiveBar"
                          className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-indigo-600 dark:bg-cyan-400 rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CONTROL WIDGETS (Theme Toggle & Mobile Burger Button) */}
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />

            {/* Mobile hamburger button with full keyboard support and ARIA markers */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 md:hidden rounded-xl border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-[#1A1A1A]/70 text-neutral-800 dark:text-[#E5E5E5] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 hover:border-neutral-400 dark:hover:border-white/20 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-overlay"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[65px] z-40 bg-white/95 dark:bg-[#0D0D0D]/95 border-b border-neutral-200/60 dark:border-white/10 backdrop-blur-xl md:hidden py-6 px-6 overflow-hidden shadow-xl"
          >
            <nav aria-label="Main Mobile Navigation">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.id);
                        }}
                        className={`text-xs font-bold uppercase tracking-widest py-3 px-4 rounded-xl flex items-center justify-between transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                          isActive
                            ? 'bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-cyan-400'
                            : 'text-neutral-500 dark:text-white/50 hover:bg-neutral-100 dark:hover:bg-white/5 hover:text-neutral-900 dark:hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-cyan-400" />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
