import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
  onSeeAllProjects?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onSeeAllProjects,
}) => {
  return (
    <section id="projects" aria-label="Case Studies and Projects" className="mb-8">
      <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-neutral-200/80 shadow-xs">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
            Case Studies & Projects
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal mt-1">
            A selection of projects showcasing strategy, design thinking, and measurable impact.
          </p>
        </div>

        {/* 2x2 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.45 }}
              className="group cursor-pointer flex flex-col"
              onClick={() => onSelectProject?.(project)}
            >
              {/* Project Image Container */}
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/70 mb-3.5">
                <img
                  src={project.image}
                  alt={`${project.title} mockup`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/95 text-neutral-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Project Meta */}
              <div>
                <p className="text-xs text-neutral-500 font-normal mb-0.5 tracking-tight">
                  {project.category}
                </p>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm sm:text-base font-semibold text-neutral-900 group-hover:text-black transition-colors">
                    {project.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={onSeeAllProjects}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300/80 text-xs sm:text-sm font-medium transition-all shadow-2xs hover:shadow-xs active:scale-98 cursor-pointer"
            aria-label="See all portfolio case studies and projects"
          >
            <span>See All Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};
