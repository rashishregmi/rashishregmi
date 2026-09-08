import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Mail, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedPlan = 'Free Strategy Call',
}) => {
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 10:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const timeSlots = [
    'Tomorrow, 10:00 AM PST',
    'Tomorrow, 2:30 PM PST',
    'Thursday, 11:00 AM PST',
    'Thursday, 4:00 PM PST',
    'Friday, 1:00 PM PST',
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setBooked(true);
  };

  const handleReset = () => {
    setBooked(false);
    setName('');
    setEmail('');
    setNote('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-2xl z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>

            {booked ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-4 stroke-[1.5]" />
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Call Scheduled!
                </h3>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto mb-6">
                  You're booked for <strong>{selectedDate}</strong> with Rashish Regmi regarding the <strong>{selectedPlan}</strong>. A calendar invite has been dispatched to <strong>{email}</strong>.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-neutral-950 text-white text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-all"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6 pr-6">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60 inline-flex items-center gap-1 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Rashish Regmi's Calendar
                  </span>
                  <h3 id="booking-modal-title" className="text-xl font-bold text-neutral-950 tracking-tight">
                    Schedule a Free 30-Min Strategy Call
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                    Selected scope: <span className="font-semibold text-neutral-800">{selectedPlan}</span>
                  </p>
                </div>

                <form onSubmit={handleBooking} className="space-y-4">
                  {/* Slot selector */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-500" />
                      Select Available Time Slot
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedDate(slot)}
                          className={`text-left text-xs p-2.5 rounded-xl border transition-all ${
                            selectedDate === slot
                              ? 'border-neutral-950 bg-neutral-950 text-white font-medium shadow-xs'
                              : 'border-neutral-200 bg-neutral-50 hover:bg-white text-neutral-700'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label htmlFor="booking-name" className="block text-xs font-semibold text-neutral-700 mb-1">
                        Your Name*
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="booking-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Alex Miller"
                          className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-hidden focus:border-neutral-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="booking-email" className="block text-xs font-semibold text-neutral-700 mb-1">
                        Work Email*
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          id="booking-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex@company.com"
                          className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-hidden focus:border-neutral-900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Note */}
                  <div>
                    <label htmlFor="booking-note" className="block text-xs font-semibold text-neutral-700 mb-1">
                      Brief project topic (Optional)
                    </label>
                    <input
                      id="booking-note"
                      type="text"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="e.g. Redesigning SaaS dashboard & onboarding flow"
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:outline-hidden focus:border-neutral-900"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-full bg-[#111315] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.99]"
                  >
                    Confirm & Reserve Call
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
