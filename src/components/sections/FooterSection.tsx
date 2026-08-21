import React from 'react';
import { ArrowUp, Sparkles, MapPin, Mail, Phone, Github, Linkedin, Terminal } from 'lucide-react';
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
    <footer id="contact" className="relative w-full bg-[#060709] text-[#D7E2EA] pt-16 pb-16 px-6 md:px-12 border-t border-cyan-500/20 select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <FadeIn delay={0} y={30} className="w-full flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-6">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Open for Full-Time &amp; Founding Backend Engineering Roles</span>
          </div>

          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Let&apos;s Build Systems
          </h2>

          <p className="text-sm sm:text-base font-mono text-[#D7E2EA]/70 max-w-xl mb-8 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{personalInfo.location} • {personalInfo.email} • {personalInfo.phone}</span>
          </p>

          <div className="mb-12">
            <ContactButton onClick={onContactClick} label="Connect With Yogesh" />
          </div>
        </FadeIn>

        <div className="w-full pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D7E2EA]/60 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
