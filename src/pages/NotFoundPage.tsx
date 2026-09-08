import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
    >
      <div className="bg-white rounded-3xl p-10 sm:p-16 border border-neutral-200/80 shadow-xs max-w-lg mx-auto">
        <span className="text-6xl sm:text-7xl font-mono font-bold text-neutral-900 tracking-tighter block mb-4">
          404
        </span>
        <h1 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight mb-2">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-8">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#111315] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold tracking-tight transition-all shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 text-xs sm:text-sm font-medium transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
