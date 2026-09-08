import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';
import { Project } from '../types';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Branding', 'FinTech / Personal Finance', 'Technology', 'Food & Beverage'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

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
        <span className="text-xs text-neutral-400 font-medium">Selected Works</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight mt-1 mb-3">
          Case Studies & Projects
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed mb-6">
          Explore how strategy-led product design, rigorous user research, and scalable design systems deliver measurable business transformations.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-100">
          <span className="text-xs text-neutral-400 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-neutral-950 text-white shadow-2xs'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.3 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-white rounded-3xl p-5 border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-all flex flex-col"
          >
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-100 mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                {project.category}
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold text-neutral-950 group-hover:text-black mb-1 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </h3>
                <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed mb-3">
                  {project.description}
                </p>
              </div>

              {project.metrics && (
                <div className="pt-3 border-t border-neutral-100 text-[11px] font-semibold text-emerald-700">
                  {project.metrics}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to action card */}
      <div className="bg-neutral-950 text-white rounded-3xl p-8 text-center sm:text-left sm:flex items-center justify-between gap-6 shadow-md">
        <div>
          <h3 className="text-xl font-bold tracking-tight mb-1">
            Have a project in mind?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
            Let's discuss how we can turn your digital product vision into a high-converting experience.
          </p>
        </div>
        <Link
          to="/contact"
          className="mt-4 sm:mt-0 inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-neutral-950 text-xs sm:text-sm font-semibold hover:bg-neutral-100 transition-all shadow-xs"
        >
          Start a Conversation
        </Link>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.div>
  );
};
