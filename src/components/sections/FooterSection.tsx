import React from 'react';
import { ArrowUp, Sparkles, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { ContactButton } from '../common/ContactButton';
import { FadeIn } from '../common/FadeIn';
import { personalInfo } from '../../data/portfolioData';

interface FooterSectionProps {
  onContactClick: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] pt-12 pb-16 px-6 md:px-10 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <FadeIn delay={0} y={30} className="w-full flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#D7E2EA]/70 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Available for Full-Time &amp; High-Impact Backend / AI Roles</span>
          </div>

          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Let&apos;s Build Together
          </h2>

          <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-xl mb-8 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
            <span>{personalInfo.location} • {personalInfo.email} • {personalInfo.phone}</span>
          </p>

          <div className="mb-12">
            <ContactButton onClick={onContactClick} label="Get in Touch" />
          </div>
        </FadeIn>

        <div className="w-full pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#D7E2EA]/50 uppercase tracking-wider font-kanit">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
