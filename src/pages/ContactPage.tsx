import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { FAQSection } from '../components/FAQSection';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
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

      {/* Header Info Card */}
      <div className="bg-white rounded-3xl p-7 sm:p-10 border border-neutral-200/80 shadow-xs mb-8">
        <span className="text-xs text-neutral-400 font-medium">Get in Touch</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight mt-1 mb-3">
          Contact & Collaboration
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed mb-6">
          Currently reviewing select new projects for the upcoming quarter. Send an inquiry or drop a line directly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-neutral-100">
          <div className="flex items-center gap-2.5 text-xs text-neutral-600">
            <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
            <div>
              <span className="block text-neutral-400 text-[10px]">Email</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="font-medium hover:underline text-neutral-900">
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-neutral-600">
            <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
            <div>
              <span className="block text-neutral-400 text-[10px]">Phone</span>
              <span className="font-medium text-neutral-900">{PERSONAL_INFO.phone}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-neutral-600">
            <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
            <div>
              <span className="block text-neutral-400 text-[10px]">Location</span>
              <span className="font-medium text-neutral-900">Los Angeles, CA</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-neutral-600">
            <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
            <div>
              <span className="block text-neutral-400 text-[10px]">Response Time</span>
              <span className="font-medium text-emerald-600 font-semibold">&lt; 24 hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Form */}
      <ContactSection />

      {/* FAQ */}
      <FAQSection />
    </motion.div>
  );
};
