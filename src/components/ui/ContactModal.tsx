import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Sparkles, Mail, MessageSquare, User, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Backend / AI Engineering Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', subject: 'Backend / AI Engineering Inquiry', message: '' });
      }, 2500);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-lg bg-[#141415] border border-[#26282E] rounded-[32px] p-6 sm:p-8 text-[#D7E2EA] shadow-2xl z-10 my-8 overflow-hidden"
          >
            {/* Ambient background glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center border border-green-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white font-kanit">Message Sent!</h3>
                <p className="text-sm text-[#D7E2EA]/70 max-w-xs">
                  Thanks for getting in touch! Yogesh will respond to your message promptly.
                </p>
              </motion.div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Direct Communication</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-kanit">
                    Contact Yogesh E
                  </h2>
                  <p className="text-sm text-[#D7E2EA]/70 mt-1">
                    Building scalable backends &amp; AI infrastructure. Reach out for opportunities or collaborations.
                  </p>
                </div>

                {/* Direct Info Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-purple-200 hover:bg-purple-500/20 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="truncate">{personalInfo.email}</span>
                  </a>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-purple-200 hover:bg-purple-500/20 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{personalInfo.phone}</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-purple-200 hover:bg-purple-500/20 transition-colors"
                  >
                    <Github className="w-4 h-4 text-white shrink-0" />
                    <span>github.com/{personalInfo.githubUsername}</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-purple-200 hover:bg-purple-500/20 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" /> Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1A1B1F] border border-[#2C2E35] focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" /> Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1A1B1F] border border-[#2C2E35] focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" /> Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Discussing backend architecture, AI inference roles, or engineering projects..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#1A1B1F] border border-[#2C2E35] focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 relative inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest cursor-pointer px-8 py-3.5 text-sm select-none transition-all hover:opacity-95 active:scale-95 disabled:opacity-50"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                      outline: '2px solid white',
                      outlineOffset: '-3px',
                    }}
                  >
                    <span className="flex items-center gap-2 font-kanit">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-4 h-4" />
                    </span>
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
