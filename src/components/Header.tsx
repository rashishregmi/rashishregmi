import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Linkedin, Globe, Menu, X as CloseIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onBookCall?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookCall }) => {
  const [timeString, setTimeString] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kathmandu',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setTimeString(formatter.format(now));
      } catch {
        setTimeString(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', sectionId: 'hero' },
    { name: 'About', href: '/about', sectionId: 'about' },
    { name: 'Projects', href: '/projects', sectionId: 'projects' },
    { name: 'Services', href: '/services', sectionId: 'services' },
    { name: 'Contact', href: '/contact', sectionId: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, item: typeof navLinks[0]) => {
    // If we're on the home page and clicking a section link, smooth scroll
    if (location.pathname === '/') {
      const el = document.getElementById(item.sectionId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    } else if (item.href === '/') {
      e.preventDefault();
      navigate('/');
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full pt-4 pb-2 sticky top-0 z-40 backdrop-blur-md bg-[#f7f8f9]/85 transition-all">
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-600 font-medium py-2.5">
          {/* Left: Live Time & City */}
          <div className="flex items-center gap-2 tracking-tight text-neutral-500">
            <span className="font-mono tabular-nums text-neutral-800 font-semibold">
              {timeString || '03:41:05 AM'}
            </span>
            <span className="hidden sm:inline text-neutral-400">|</span>
            <span className="text-neutral-500">{PERSONAL_INFO.location}</span>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 text-neutral-700">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="transition-colors hover:text-neutral-950 hover:underline underline-offset-4 decoration-neutral-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Area: Socials & Availability Badge */}
          <div className="flex items-center gap-3">
            {/* Social Icons */}
            <div className="hidden lg:flex items-center gap-2 border-r border-neutral-200 pr-3 mr-1 text-neutral-600">
              {/* X icon */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Rashish Regmi on X (formerly Twitter)"
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-neutral-200/70 hover:text-black transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Rashish Regmi on LinkedIn"
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-neutral-200/70 hover:text-black transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 stroke-[2.2]" />
              </a>


              {/* Behance 'Bē' */}
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                aria-label="Rashish Regmi on Behance"
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-neutral-200/70 hover:text-black transition-colors text-xs font-bold font-mono"
              >
                Bē
              </a>
            </div>

            {/* Availability status badge */}
            {/* <button
              onClick={onBookCall}
              aria-label="Status: Open for 2 new projects, click to book a call"
              className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] sm:text-xs font-medium hover:bg-emerald-100 transition-colors shadow-2xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </button> */}

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-neutral-700 hover:bg-neutral-200/60 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white/95 rounded-2xl border border-neutral-200/80 shadow-lg mt-2 p-4"
            >
              <div className="flex flex-col gap-3 text-sm font-medium">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className="py-1.5 px-2 rounded-lg text-neutral-800 hover:bg-neutral-100 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-500">Connect:</span>
                  <div className="flex items-center gap-2">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-1.5 text-neutral-600 hover:text-black">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-1.5 text-neutral-600 hover:text-black">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="p-1.5 text-neutral-600 hover:text-black">
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
