import { useState, MouseEvent, KeyboardEvent, ReactNode } from 'react';
import { motion } from 'motion/react';

interface RippleButtonProps {
  onClick?: () => void;
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
  className?: string;
  ariaLabel: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: ReactNode;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function RippleButton({
  onClick,
  href,
  download,
  target,
  rel,
  className = '',
  ariaLabel,
  variant = 'primary',
  children,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [count, setCount] = useState(0);

  const createRipple = (clientX: number, clientY: number, currentTarget: HTMLElement) => {
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;

    const newRipple = {
      id: count,
      x: x - size / 2,
      y: y - size / 2,
    };

    setRipples((prev) => [...prev, newRipple]);
    setCount((prev) => prev + 1);

    // Remove the ripple after animation is complete
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    createRipple(e.clientX, e.clientY, e.currentTarget);
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const rect = e.currentTarget.getBoundingClientRect();
      createRipple(rect.left + rect.width / 2, rect.top + rect.height / 2, e.currentTarget);
      if (onClick) {
        onClick();
      } else if (href) {
        if (target === '_blank') {
          window.open(href, '_blank', rel);
        } else {
          window.location.href = href;
        }
      }
    }
  };

  const baseStyles = 'relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none cursor-pointer';
  
  const variantStyles = {
    primary: 'bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 focus-visible:ring-neutral-950 dark:focus-visible:ring-white shadow-lg shadow-black/10 dark:shadow-white/5',
    secondary: 'bg-neutral-200 hover:bg-neutral-300 dark:bg-white/10 dark:hover:bg-white/15 text-neutral-800 dark:text-[#E5E5E5] focus-visible:ring-neutral-400 dark:focus-visible:ring-white/50 border border-neutral-300/40 dark:border-white/5',
    outline: 'bg-transparent border border-neutral-300 dark:border-white/15 text-neutral-800 dark:text-[#E5E5E5] hover:bg-neutral-100 dark:hover:bg-white/5 hover:border-neutral-400 dark:hover:border-white/25 focus-visible:ring-neutral-400 dark:focus-visible:ring-white/40',
    ghost: 'bg-transparent text-neutral-500 hover:text-neutral-900 dark:text-white/60 dark:hover:text-white focus-visible:ring-neutral-400 dark:focus-visible:ring-white/40',
  };

  const content = (
    <>
      {/* Absolute Ripple Container */}
      <span className="absolute inset-0 pointer-events-none block overflow-hidden rounded-inherit">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-current opacity-20 animate-ripple pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: Math.max(100, 150),
              height: Math.max(100, 150),
            }}
          />
        ))}
      </span>
      {children}
    </>
  );

  const motionProps = {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 500, damping: 25 },
  };

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        aria-label={ariaLabel}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  );
}
