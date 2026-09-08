import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12"
    >
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      <div className="bg-white rounded-3xl p-7 sm:p-10 border border-neutral-200/80 shadow-xs">
        <div className="flex items-center gap-2 text-emerald-600 mb-2">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-xs font-semibold uppercase tracking-wider">Legal Document</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-neutral-400 mb-8 font-mono">
          Last updated: January 2026
        </p>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-neutral-900 mb-2">1. Overview</h2>
            <p>
              This Privacy Policy describes how Rashish Regmi ("we", "us", or "our") collects, uses, and protects information submitted by visitors through our website and interactive contact forms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-neutral-900 mb-2">2. Information We Collect</h2>
            <p>
              When you submit a message or schedule a strategy call through our website, we may collect your name, email address, company details, and project notes. We only collect information that you voluntarily provide to us.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-neutral-900 mb-2">3. How We Use Information</h2>
            <p>
              Information is used solely to respond to inquiries, schedule consultations, evaluate design fit, and provide design services. We never sell, rent, or trade your personal data with third-party marketers.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-neutral-900 mb-2">4. Data Security</h2>
            <p>
              We implement industry-standard encryption and security measures to protect your submissions from unauthorized access or alteration.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-neutral-900 mb-2">5. Contact</h2>
            <p>
              For privacy-related questions or data deletion requests, please contact <strong>contact@calib.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
