import React, { useEffect } from 'react';
import { X, Calendar, UserCheck, Award, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBookCall?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onBookCall,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-2xl z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-neutral-700 shadow-xs backdrop-blur-xs transition-colors"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image */}
          <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-neutral-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                {project.title}
              </h3>
            </div>

            {/* Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 pb-4 mb-4 border-b border-neutral-100">
              <span className="flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-neutral-400" />
                Client: <strong className="text-neutral-700">{project.client}</strong>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                Year: <strong className="text-neutral-700">{project.year}</strong>
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Impact Metric Highlight */}
            {project.metrics && (
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 mb-6 flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-emerald-900 tracking-tight">
                    Key Measurable Impact
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 font-medium mt-0.5">
                    {project.metrics}
                  </p>
                </div>
              </div>
            )}

            {/* Deliverables */}
            <div className="mb-8">
              <h4 className="text-xs font-semibold text-neutral-400 tracking-tight mb-2.5">
                Delivered Scope:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200/60"
                  >
                    <CheckCircle2 className="w-3 h-3 text-neutral-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-100">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookCall?.();
                }}
                className="px-6 py-2.5 rounded-full bg-[#111315] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 shadow-xs cursor-pointer"
              >
                Start a Project Like This
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
