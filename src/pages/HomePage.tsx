import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PricingSection } from '../components/PricingSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { BookingModal } from '../components/BookingModal';
import { ProjectModal } from '../components/ProjectModal';
import { Project } from '../types';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Free Strategy Call');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenBooking = (planName = 'Free Strategy Call') => {
    setSelectedPlan(planName);
    setIsBookingOpen(true);
  };

  const handleSelectService = (_serviceTitle: string) => {
    // Smooth scroll to contact or open booking with service pre-selected
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* 1. Hero */}
      <Hero
        onBookCall={() => handleOpenBooking('Free 30-Min Strategy Call')}
        onViewProjects={() => {
          const el = document.getElementById('projects');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. About My Self */}
      <AboutSection />

      {/* 3. Case Studies & Projects */}
      <ProjectsSection
        onSelectProject={(project) => setSelectedProject(project)}
        onSeeAllProjects={() => navigate('/projects')}
      />

      {/* 4. Services I Provide */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 5. What Clients Are Saying */}
      {/* <TestimonialsSection /> */}

      {/* 6. Simple & Transparent Pricing */}
      {/* <PricingSection
        onBookPlan={(planName) => handleOpenBooking(`${planName} Plan`)}
      /> */}

      {/* 7. Frequently Asked Questions */}
      <FAQSection />

      {/* 8. Let's Bring Your Idea to Life */}
      <ContactSection />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedPlan={selectedPlan}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookCall={() => handleOpenBooking(`Inquiry on ${selectedProject?.title}`)}
      />
    </motion.div>
  );
};
