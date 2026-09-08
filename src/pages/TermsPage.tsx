import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
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
        <div className="flex items-center gap-2 text-neutral-700 mb-2">
          <FileText className="w-5 h-5" />
          <span className="text-xs font-semibold uppercase tracking-wider">Legal Document</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-neutral-400 mb-8 font-mono">
          Last updated: January 2026
        </p>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-neutral-900 mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these Terms of Service. If you disagree with any portion of these terms, please discontinue use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-neutral-900 mb-2">2. Intellectual Property Rights</h2>
            <p>
              All case studies, images, visual assets, trademarks, and design systems presented on this portfolio website are the intellectual property of Rashish Regmi or our respective clients and partners.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-neutral-900 mb-2">3. Design Engagements & Estimates</h2>
            <p>
              Prices, timelines, and deliverables listed under the Starter and Growth tiers represent baseline project scopes. Final engagement agreements and statements of work (SOW) govern all formal client engagements.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-neutral-900 mb-2">4. Limitation of Liability</h2>
            <p>
              In no event shall Rashish Regmi be liable for indirect, punitive, or consequential damages resulting from the use of materials or information published on this website.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
