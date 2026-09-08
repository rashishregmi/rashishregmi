import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown, Send } from 'lucide-react';

interface ContactFormData {
  fullName: string;
  email: string;
  budget: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const budgetOptions = [
    { value: '', label: 'Budget' },
    { value: 'under-2k', label: '< $2,000' },
    { value: '2k-5k', label: '$2,000 - $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-plus', label: '$10,000+' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please write a brief description of your project.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      budget: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" aria-label="Contact Section" className="mb-8">
      <div className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-neutral-200/80 shadow-xs">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
            Let's bring your idea to life
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 font-normal mt-1 max-w-xl leading-relaxed">
            I'm always open to new opportunities, collaborations, and creative conversations. Feel free to reach out to discuss your project.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 px-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-center"
            >
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3.5 stroke-[1.5]" />
              <h4 className="text-lg font-bold text-neutral-900 mb-1">
                Thank you, {formData.fullName}!
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mb-6">
                Your message has been sent to Rashish Regmi. I'll review your project details and respond within 24 hours at <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-3.5"
              noValidate
            >
              {errorMsg && (
                <div className="p-3 text-xs bg-red-50 text-red-700 rounded-xl border border-red-200">
                  {errorMsg}
                </div>
              )}

              {/* Full Name & Email Address Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full Name*"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-neutral-200/90 text-neutral-900 text-xs sm:text-sm placeholder:text-neutral-400 focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address*"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-neutral-200/90 text-neutral-900 text-xs sm:text-sm placeholder:text-neutral-400 focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all"
                  />
                </div>
              </div>

              {/* Budget Select */}
              <div className="relative">
                <label htmlFor="budget" className="sr-only">
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full appearance-none px-4 py-3.5 rounded-xl bg-white border border-neutral-200/90 text-xs sm:text-sm text-neutral-900 focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all cursor-pointer"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Project Details Textarea */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-neutral-200/90 text-neutral-900 text-xs sm:text-sm placeholder:text-neutral-400 focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-[#111315] hover:bg-neutral-800 active:scale-[0.99] text-white text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-2xs disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
