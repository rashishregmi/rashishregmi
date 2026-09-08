import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Layers, Zap, Target, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, PRICING_PLANS } from '../data/portfolioData';
import { BookingModal } from '../components/BookingModal';

export const ServicesPage: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Product Design Inquiry');

  const processSteps = [
    {
      num: '01',
      title: 'Discovery & Product Strategy',
      desc: 'Deep-dive interviews, competitive landscape mapping, product architecture audits, and user persona definition to ensure alignment on business objectives.',
    },
    {
      num: '02',
      title: 'UX Architecture & Wireframes',
      desc: 'Rapid low-fidelity prototyping, user flows, edge-case analysis, and information hierarchy validation to iterate quickly without friction.',
    },
    {
      num: '03',
      title: 'UI Design & Interactive Prototyping',
      desc: 'High-fidelity visual design, pixel-perfect design system tokenization, responsive layouts, micro-interactions, and accessible UI components.',
    },
    {
      num: '04',
      title: 'Implementation & Handoff',
      desc: 'Framer or clean code handoff, developer documentation, design system QA, and post-launch conversion optimization audits.',
    },
  ];

  const handleOpenBooking = (plan: string) => {
    setSelectedPlan(plan);
    setIsBookingOpen(true);
  };

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

      {/* Header Container */}
      <div className="bg-white rounded-3xl p-7 sm:p-10 border border-neutral-200/80 shadow-xs mb-8">
        <span className="text-xs text-neutral-400 font-medium">Capabilities & Pricing</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight mt-1 mb-3">
          Services I Provide
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed">
          Helping venture-backed startups and established brands build intuitive, conversion-focused digital products that scale.
        </p>
      </div>

      {/* Detailed Services Breakdown */}
      <div className="space-y-6 mb-12">
        {SERVICES.map((service, idx) => (
          <div
            key={service.number}
            className="bg-white rounded-3xl p-7 sm:p-9 border border-neutral-200/80 shadow-xs flex flex-col md:flex-row md:items-start justify-between gap-6"
          >
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono font-bold text-neutral-400 bg-neutral-100 px-2.5 py-1 rounded-full">
                  {service.number}
                </span>
                <span className="text-xs text-neutral-500 font-medium">
                  {service.categories}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-3">
                {service.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <button
                onClick={() => handleOpenBooking(service.title)}
                className="text-xs font-semibold text-neutral-900 hover:underline inline-flex items-center gap-1"
              >
                Inquire about this service →
              </button>
            </div>

            {/* Features list */}
            <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200/60 md:w-72 shrink-0">
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                Core Deliverables:
              </h3>
              <ul className="space-y-2">
                {service.features?.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 4-Step Process Section */}
      <div className="bg-white rounded-3xl p-7 sm:p-10 border border-neutral-200/80 shadow-xs mb-12">
        <h2 className="text-xl font-bold text-neutral-950 tracking-tight mb-2">
          How We Work Together
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 mb-8">
          A structured, four-phase design process engineered for speed, transparency, and high quality.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {processSteps.map((step) => (
            <div key={step.num} className="p-5 rounded-2xl bg-[#fafafa] border border-neutral-200/60">
              <span className="text-xl font-bold font-mono text-neutral-300 block mb-2">
                {step.num}
              </span>
              <h3 className="text-sm font-semibold text-neutral-900 mb-1.5">
                {step.title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing summary */}
      <div className="bg-white rounded-3xl p-7 sm:p-10 border border-neutral-200/80 shadow-xs mb-8">
        <h2 className="text-xl font-bold text-neutral-950 tracking-tight mb-2">
          Pricing Options
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 mb-8">
          Transparent, flat-rate pricing with zero hidden fees or surprise billings.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRICING_PLANS.map((plan) => {
            const isDark = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`p-6 rounded-2xl flex flex-col justify-between ${
                  isDark
                    ? 'bg-[#111315] text-white'
                    : 'bg-[#fafafa] border border-neutral-200/80 text-neutral-900'
                }`}
              >
                <div>
                  <h3 className="text-base font-bold">{plan.name}</h3>
                  <p className={`text-xs mt-0.5 mb-4 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {plan.subtitle}
                  </p>
                  <div className="text-2xl sm:text-3xl font-bold mb-6">
                    {plan.price} <span className="text-xs font-normal opacity-70">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleOpenBooking(`${plan.name} Package`)}
                  className={`w-full py-2.5 rounded-full text-xs font-semibold transition-all ${
                    isDark
                      ? 'bg-white text-neutral-950 hover:bg-neutral-100'
                      : 'bg-[#111315] text-white hover:bg-neutral-800'
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedPlan={selectedPlan}
      />
    </motion.div>
  );
};
