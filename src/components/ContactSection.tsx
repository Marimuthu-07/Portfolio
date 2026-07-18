import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  FileText,
  Briefcase,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Clipboard,
  Check,
  Download,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { ContactMessage } from '../types';

interface ContactSectionProps {
  theme: 'dark' | 'light';
}

const LeetCodeIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414 0-1.954l-2.396-2.392c-2.211-2.207-5.815-2.239-8.063-.074l-.039.038-1.309-1.284c.338-.567.76-1.077 1.271-1.517.512-.44 1.104-.797 1.77-1.076l6.634-6.537c.797-.786 2.083-.772 2.868.031l2.585 2.65c.785.803.77 2.106-.033 2.91l-1.531 1.554a1.375 1.375 0 1 0 1.946 1.944l1.531-1.554c2.227-2.279 2.242-5.977.034-8.283l-2.585-2.65c-1.127-1.155-2.73-1.637-4.223-1.396Z" />
  </svg>
);

export default function ContactSection({ theme }: ContactSectionProps) {
  const [formValues, setFormValues] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitMode, setSubmitMode] = useState<'real' | 'simulated' | null>(null);

  const maxMessageLength = 1000;

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const fieldName = id.replace('form-', '');

    if (fieldName === 'message' && value.length > maxMessageLength) {
      return; // prevent exceeding max length
    }

    setFormValues((prev) => ({ ...prev, [fieldName]: value }));

    // Clear specific field error
    if (errors[fieldName]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[fieldName];
        return next;
      });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formValues.name.trim()) {
      newErrors.name = 'Full name is required.';
    }
    if (!formValues.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!validateEmail(formValues.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formValues.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }
    if (!formValues.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formValues.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Grab key from meta environment or fallback placeholder
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'd5ec0793-af6d-423a-9498-79cee2341fd0';

    if (accessKey && accessKey !== 'your_access_key') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            name: formValues.name,
            email: formValues.email,
            subject: formValues.subject,
            message: formValues.message,
            from_name: 'Developer Portfolio',
          }),
        });

        const data = await response.json();
        if (data.success) {
          setSubmitMode('real');
          setIsSuccess(true);
        } else {
          setErrors({ submit: data.message || 'Error submitting message. Please check access configuration.' });
        }
      } catch (err) {
        setErrors({ submit: 'Failed to connect to the messaging gateway. Please try again later.' });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Simulation backup state as required
      setTimeout(() => {
        setSubmitMode('simulated');
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1000);
    }
  };

  const handleResetForm = () => {
    setFormValues({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSuccess(false);
    setSubmitMode(null);
  };

  return (
    <section id="contact" className="py-24 border-t border-neutral-200/40 dark:border-neutral-900/30 relative overflow-hidden scroll-mt-20">
      {/* Dynamic Glow Shapes */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/5 dark:bg-cyan-500/2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-fuchsia-500/5 dark:bg-fuchsia-500/2 rounded-full blur-3xl pointer-events-none" />

      {/* Title Header */}
      <div className="text-center mb-16 px-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 font-display block mb-1">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 dark:text-neutral-50 mb-3">
          Contact Me
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto mb-5 font-medium leading-relaxed">
          Let's connect and build something amazing together.
        </p>
        <div className="w-12 h-[2.5px] bg-indigo-600 dark:bg-cyan-400 mx-auto rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Short introduction block */}
        <p className="text-center text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-12 font-medium">
          "I'm always open to internship opportunities, collaborations, open-source contributions, and discussions about software development, AI, and technology. Feel free to reach out!"
        </p>

        {/* Two Column Layout: Left (Contact Info & Availability) & Right (Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Contact Information Cards & Availability (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* CURRENT AVAILABILITY CARD */}
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 dark:from-emerald-950/10 dark:to-cyan-950/10 border border-emerald-500/20 dark:border-emerald-500/30 shadow-md relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Briefcase className="w-4 h-4" />
                  </span>
                  <h3 className="font-display font-black uppercase tracking-wider text-xs sm:text-sm text-neutral-800 dark:text-neutral-100">
                    Current Availability
                  </h3>
                </div>
                {/* Subtle animated indicator */}
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    Open to Offers
                  </span>
                </div>
              </div>

              <p className="text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-3">
                🟢 Available for:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Internships</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Software Engineering</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Learning Collaborations</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Open Source</span>
                </li>
              </ul>
            </motion.article>

            {/* CONTACT INFORMATION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Email */}
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-white/70 dark:bg-[#121212]/60 backdrop-blur-xl border border-neutral-200/60 dark:border-white/10 shadow-sm relative overflow-hidden group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-cyan-400 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors p-1"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Clipboard className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-wider text-neutral-400">Email Address</h4>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors mt-1 block truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
              </motion.article>

              {/* Card 2: Location */}
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-white/70 dark:bg-[#121212]/60 backdrop-blur-xl border border-neutral-200/60 dark:border-white/10 shadow-sm relative overflow-hidden group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </span>
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-wider text-neutral-400">Location</h4>
                <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 mt-1 block">
                  Tamil Nadu, India
                </p>
              </motion.article>

              {/* Card 3: LinkedIn */}
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-white/70 dark:bg-[#121212]/60 backdrop-blur-xl border border-neutral-200/60 dark:border-white/10 shadow-sm relative overflow-hidden group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    aria-label="Visit LinkedIn Profile"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-wider text-neutral-400">LinkedIn</h4>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors mt-1 block truncate"
                >
                  marimuthu-a-
                </a>
              </motion.article>

              {/* Card 4: GitHub */}
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-white/70 dark:bg-[#121212]/60 backdrop-blur-xl border border-neutral-200/60 dark:border-white/10 shadow-sm relative overflow-hidden group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-white/5 text-neutral-800 dark:text-white flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    aria-label="Visit GitHub Profile"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-wider text-neutral-400">GitHub</h4>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors mt-1 block truncate"
                >
                  Marimuthu-07
                </a>
              </motion.article>

              {/* Card 5: LeetCode */}
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-white/70 dark:bg-[#121212]/60 backdrop-blur-xl border border-neutral-200/60 dark:border-white/10 shadow-sm relative overflow-hidden group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-yellow-50 dark:bg-yellow-950/20 text-yellow-600 dark:text-yellow-500 flex items-center justify-center">
                    <LeetCodeIcon className="w-4 h-4" />
                  </span>
                  <a
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    aria-label="Visit LeetCode Profile"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-wider text-neutral-400">LeetCode</h4>
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors mt-1 block truncate"
                >
                  u/01B6kAMEoF
                </a>
              </motion.article>

              {/* Card 6: Resume */}
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-white/70 dark:bg-[#121212]/60 backdrop-blur-xl border border-neutral-200/60 dark:border-white/10 shadow-sm relative overflow-hidden group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </span>
                  <a
                    href={PERSONAL_INFO.resumeDownloadUrl}
                    className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    aria-label="Download Resume File"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-wider text-neutral-400">Curriculum Vitae</h4>
                <a
                  href={PERSONAL_INFO.resumeDownloadUrl}
                  className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors mt-1 block"
                >
                  Download Resume
                </a>
              </motion.article>

            </div>

            {/* QUICK ACTION BUTTONS */}
            <div className="pt-2">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-3">Quick Connect</h4>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={PERSONAL_INFO.resumeDownloadUrl}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  aria-label="Download Marimuthu's Resume"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </a>
                
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  aria-label="View Github Portfolio"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  aria-label="Compose direct email to Marimuthu"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>
              </div>
            </div>

            {/* MODERN SOCIAL ICONS */}
            <div className="pt-2 border-t border-neutral-200/50 dark:border-white/5">
              <div className="flex gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all transform hover:scale-110"
                  aria-label="GitHub Profile Link"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all transform hover:scale-110"
                  aria-label="LinkedIn Profile Link"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-yellow-600 dark:hover:text-yellow-500 transition-all transform hover:scale-110"
                  aria-label="LeetCode Profile Link"
                >
                  <LeetCodeIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-neutral-400 hover:text-red-500 dark:hover:text-red-400 transition-all transform hover:scale-110"
                  aria-label="Direct Email Link"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Panel: Interactive Contact Form with Validation & Counters (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-8 bg-white/70 dark:bg-[#121212]/60 backdrop-blur-xl border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.03)_0%,_transparent_50%)] pointer-events-none" />

              {/* Success View Overlay */}
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-center items-center text-center py-10 px-4 min-h-[350px]"
                  >
                    {submitMode === 'real' ? (
                      <div className="max-w-md flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/5">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-display font-black text-neutral-900 dark:text-neutral-50 mb-2">
                          Message Dispatched!
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed font-medium">
                          Thank you for reaching out! Your message has been successfully delivered directly to Marimuthu's inbox. He will get back to you as soon as possible.
                        </p>
                      </div>
                    ) : (
                      <div className="max-w-md flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 flex items-center justify-center mb-5">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-display font-black text-neutral-900 dark:text-neutral-50 mb-2">
                          Thank you!
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 leading-relaxed font-medium">
                          This demo form is ready to be connected to a backend service.
                        </p>
                        
                        <div className="w-full text-left bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-white/10 p-4 rounded-xl text-xs space-y-2.5 text-neutral-700 dark:text-neutral-300 mb-6">
                          <div className="flex gap-2">
                            <span className="font-bold text-neutral-900 dark:text-white">1.</span>
                            <span>Get a free Access Key instantly at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-indigo-600 dark:hover:text-cyan-400 inline-flex items-center gap-0.5">web3forms.com <ExternalLink className="w-2.5 h-2.5" /></a></span>
                          </div>
                          <div className="flex gap-2">
                            <span className="font-bold text-neutral-900 dark:text-white">2.</span>
                            <span>Go to Settings / environment variables and declare:</span>
                          </div>
                          <div className="bg-neutral-100 dark:bg-black/40 p-2 font-mono text-[10px] text-neutral-900 dark:text-neutral-200 break-all select-all border border-neutral-200/50 dark:border-white/5 rounded">
                            VITE_WEB3FORMS_KEY=your_key_here
                          </div>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={handleResetForm}
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-6 border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-800 dark:text-white text-xs uppercase tracking-widest font-bold cursor-pointer transition-all duration-300 focus:ring-2 focus:ring-indigo-500"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    
                    {/* Full Name Field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-name" className="text-xs font-bold text-neutral-500 dark:text-neutral-400">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        placeholder="John Doe"
                        value={formValues.name}
                        onChange={handleChange}
                        className={`w-full bg-neutral-50 dark:bg-[#18181B]/50 border ${
                          errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-white/10 focus:border-indigo-600 dark:focus:border-cyan-400 focus:ring-indigo-500/10'
                        } rounded-xl py-3 px-4 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:ring-4 focus:outline-none transition-all duration-300`}
                        aria-required="true"
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "form-name-error" : undefined}
                      />
                      {errors.name && (
                        <span id="form-name-error" className="text-[11px] text-red-500 font-semibold flex items-center gap-1 pl-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </span>
                      )}
                    </div>

                    {/* Email Address Field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-email" className="text-xs font-bold text-neutral-500 dark:text-neutral-400">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        placeholder="john@example.com"
                        value={formValues.email}
                        onChange={handleChange}
                        className={`w-full bg-neutral-50 dark:bg-[#18181B]/50 border ${
                          errors.email ? 'border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-white/10 focus:border-indigo-600 dark:focus:border-cyan-400 focus:ring-indigo-500/10'
                        } rounded-xl py-3 px-4 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:ring-4 focus:outline-none transition-all duration-300`}
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "form-email-error" : undefined}
                      />
                      {errors.email && (
                        <span id="form-email-error" className="text-[11px] text-red-500 font-semibold flex items-center gap-1 pl-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </span>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-subject" className="text-xs font-bold text-neutral-500 dark:text-neutral-400">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-subject"
                        placeholder="Internship Opportunity / Project Collaboration"
                        value={formValues.subject}
                        onChange={handleChange}
                        className={`w-full bg-neutral-50 dark:bg-[#18181B]/50 border ${
                          errors.subject ? 'border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-white/10 focus:border-indigo-600 dark:focus:border-cyan-400 focus:ring-indigo-500/10'
                        } rounded-xl py-3 px-4 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:ring-4 focus:outline-none transition-all duration-300`}
                        aria-required="true"
                        aria-invalid={errors.subject ? "true" : "false"}
                        aria-describedby={errors.subject ? "form-subject-error" : undefined}
                      />
                      {errors.subject && (
                        <span id="form-subject-error" className="text-[11px] text-red-500 font-semibold flex items-center gap-1 pl-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.subject}</span>
                        </span>
                      )}
                    </div>

                    {/* Message Field with Character Counter */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center">
                        <label htmlFor="form-message" className="text-xs font-bold text-neutral-500 dark:text-neutral-400">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <span className={`text-[10px] font-mono font-bold ${formValues.message.length >= maxMessageLength - 50 ? 'text-orange-500 animate-pulse' : 'text-neutral-400'}`}>
                          {formValues.message.length}/{maxMessageLength}
                        </span>
                      </div>
                      <textarea
                        id="form-message"
                        rows={5}
                        placeholder="Write your message here... How can I help you?"
                        value={formValues.message}
                        onChange={handleChange}
                        className={`w-full bg-neutral-50 dark:bg-[#18181B]/50 border ${
                          errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-neutral-200 dark:border-white/10 focus:border-indigo-600 dark:focus:border-cyan-400 focus:ring-indigo-500/10'
                        } rounded-xl py-3 px-4 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 resize-none focus:ring-4 focus:outline-none transition-all duration-300`}
                        aria-required="true"
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "form-message-error" : undefined}
                      />
                      {errors.message && (
                        <span id="form-message-error" className="text-[11px] text-red-500 font-semibold flex items-center gap-1 pl-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </span>
                      )}
                    </div>

                    {/* Submission error alert */}
                    {errors.submit && (
                      <div className="flex items-start gap-2.5 p-3.5 bg-red-500/10 border border-red-500/25 text-red-600 dark:text-red-400 text-xs rounded-xl leading-relaxed">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{errors.submit}</span>
                      </div>
                    )}

                    {/* Send Button */}
                    <motion.button
                      whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 disabled:bg-neutral-400 text-xs font-bold uppercase tracking-widest cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    >
                      {isSubmitting ? (
                        <>
                          <span>Sending Message...</span>
                          <div className="w-4 h-4 border-2 border-white dark:border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        </>
                      )}
                    </motion.button>

                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
