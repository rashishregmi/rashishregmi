import React, { useState } from 'react';
import { Mail, Phone, Download, Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [cvDownloaded, setCvDownloaded] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard?.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    setCvDownloaded(true);
    
    // Generate simple readable text resume download
    const cvContent = `Rashish Regmi
Human-Centered Product Designer
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: Los Angeles

SUMMARY:
A strategy-driven product designer creating scalable digital experiences that improve retention, conversions, and business growth.

KEY METRICS:
- $60M+ Client Funding Raised
- 35+ Startups Supported
- 12+ Years of experience
- 95% Client Satisfaction Rate

CORE COMPETENCIES:
- Design Systems & Atomic Components
- End-to-End Product Architecture (UI/UX)
- Creative Direction & Visual Strategy
- Framer & React Rapid Prototyping
`;
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rashish_regmi.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => setCvDownloaded(false), 2500);
  };

  return (
    <section id="about" aria-label="About Rashish Regmi" className="mb-8">
      <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-neutral-200/80 shadow-xs">
        {/* Section Tag */}
        <p className="text-xs sm:text-sm text-neutral-400 font-medium mb-3 tracking-tight">
          About my self.
        </p>

        {/* Bio Text */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 leading-snug tracking-tight max-w-4xl mb-7">
          {PERSONAL_INFO.aboutBio}
        </h3>

        {/* Contact Links & Download CV */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-neutral-600 font-medium pb-9 border-b border-neutral-100">
          {/* Email */}
          <button
            onClick={handleCopyEmail}
            className="group inline-flex items-center gap-1.5 hover:text-neutral-950 transition-colors cursor-pointer"
            title="Click to copy email address"
            aria-label={`Copy email: ${PERSONAL_INFO.email}`}
          >
            <Mail className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            <span>{PERSONAL_INFO.email}</span>
            {copiedEmail ? (
              <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-0.5 ml-1">
                <Check className="w-3 h-3" /> Copied!
              </span>
            ) : (
              <Copy className="w-3 h-3 text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5" />
            )}
          </button>

          <span className="text-neutral-300 select-none">•</span>

          {/* Phone */}
          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="group inline-flex items-center gap-1.5 hover:text-neutral-950 transition-colors"
            aria-label={`Call phone: ${PERSONAL_INFO.phone}`}
          >
            <Phone className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>

          <span className="text-neutral-300 select-none">•</span>

          {/* Download CV */}
          <button
            onClick={handleDownloadCV}
            className="group inline-flex items-center gap-1.5 text-neutral-800 hover:text-black underline underline-offset-4 decoration-neutral-300 transition-colors cursor-pointer"
            aria-label="Download Rashish Regmi Curriculum Vitae"
          >
            <Download className="w-4 h-4 text-neutral-500 group-hover:text-black transition-colors" />
            <span>{cvDownloaded ? 'Downloaded CV' : 'Download CV'}</span>
          </button>
        </div>

        {/* Stats 4-Column Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="flex flex-col"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 font-sans">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-neutral-500 font-normal mt-1 leading-normal">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
