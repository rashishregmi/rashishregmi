import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Phone, Download, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

export const AboutPage: React.FC = () => {
  const experiences = [
    {
      period: '2022 — Present',
      role: 'Staff Product Designer & Design Systems Lead',
      company: 'Independent Studio / Calib Design',
      desc: 'Partnering with Series A–C tech startups and enterprise teams to design scalable design systems, multi-platform UX, and brand experiences that drive conversions.',
    },
    {
      period: '2019 — 2022',
      role: 'Senior Product Designer',
      company: 'Kinetic Labs',
      desc: 'Spearheaded the design of core SaaS analytics tools, conducted qualitative customer discovery sprints, and improved customer retention by 34%.',
    },
    {
      period: '2016 — 2019',
      role: 'UI/UX Designer',
      company: 'Aura Interactive',
      desc: 'Designed high-converting landing pages, interactive prototypes in Framer and Figma, and contributed to atomic design systems for global brands.',
    },
  ];

  const toolsets = [
    'Figma & Design Tokens',
    'Framer & Webflow',
    'React & Tailwind CSS',
    'UX Research & Usability Testing',
    'Information Architecture',
    'Prototyping & Motion Design',
    'Creative Direction',
    'Conversion Rate Optimization',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12"
    >
      {/* Back button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white rounded-3xl p-7 sm:p-10 border border-neutral-200/80 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
          <img
            src={PERSONAL_INFO.avatar}
            alt="Rashish Regmi"
            className="w-24 h-24 rounded-2xl object-cover border border-neutral-200 shadow-xs"
          />
          <div>
            <span className="text-xs text-neutral-400 font-medium">About Calib</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight mt-0.5 mb-2">
              Rashish Regmi
            </h1>
            <p className="text-sm font-medium text-neutral-600 mb-4">
              Human-Centered Product Designer based in {PERSONAL_INFO.location}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600">
              <span className="flex items-center gap-1.5 bg-neutral-100 px-3 py-1.5 rounded-full">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-100 px-3 py-1.5 rounded-full">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                {PERSONAL_INFO.phone}
              </span>
            </div>
          </div>
        </div>

        <div className="prose prose-neutral text-sm text-neutral-600 leading-relaxed space-y-4 pt-6 border-t border-neutral-100">
          <p>
            {PERSONAL_INFO.aboutBio}
          </p>
          <p>
            With over 12 years of hands-on experience at the intersection of business strategy and human behavior, I bridge the gap between abstract engineering requirements and delightful, conversion-centered interfaces.
          </p>
          <p>
            Whether partnering with seed-stage founders building an MVP from zero or helping established tech companies untangle complex product debt, my approach is grounded in clarity, speed, and measurable business outcomes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-8 border-t border-neutral-100">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-neutral-950 font-sans">
                {stat.value}
              </span>
              <span className="text-xs text-neutral-500 font-normal mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="bg-white rounded-3xl p-7 sm:p-10 border border-neutral-200/80 shadow-xs mb-8">
        <h2 className="text-xl font-bold text-neutral-950 tracking-tight mb-6">
          Career Journey & Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="pb-6 border-b border-neutral-100 last:border-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-base font-semibold text-neutral-900">
                  {exp.role} <span className="text-neutral-400 font-normal">at {exp.company}</span>
                </h3>
                <span className="text-xs font-mono text-neutral-400 font-medium">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Design Stack & Skills */}
      <div className="bg-white rounded-3xl p-7 sm:p-10 border border-neutral-200/80 shadow-xs mb-8">
        <h2 className="text-xl font-bold text-neutral-950 tracking-tight mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          Core Toolkit & Methodologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {toolsets.map((tool, idx) => (
            <div
              key={idx}
              className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200/70 text-xs font-medium text-neutral-800 flex items-center gap-2"
            >
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="flex justify-center">
        <Link
          to="/contact"
          className="px-8 py-3.5 rounded-full bg-neutral-950 text-white text-sm font-semibold hover:bg-neutral-800 transition-all shadow-xs"
        >
          Let's Work Together
        </Link>
      </div>
    </motion.div>
  );
};
