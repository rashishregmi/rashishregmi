import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

// ScrollToTop on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function AnimatedRoutes({ onBookCall }: { onBookCall: () => void }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full flex-1"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f7f8f9] text-[#111315] font-sans selection:bg-[#111315] selection:text-white">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 z-50 px-4 py-2 bg-neutral-900 text-white text-xs font-semibold rounded-lg shadow-lg"
        >
          Skip to main content
        </a>

        {/* Global Navigation Header */}
        <Header onBookCall={handleOpenBooking} />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 w-full">
          <AnimatedRoutes onBookCall={handleOpenBooking} />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Booking Modal */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBooking}
          selectedPlan="Strategy Consultation"
        />
      </div>
    </BrowserRouter>
  );
}
