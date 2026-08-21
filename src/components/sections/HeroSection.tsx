import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from '../common/ContactButton';
import { Magnet } from '../common/Magnet';
import { personalInfo } from '../../data/portfolioData';

interface HeroSectionProps {
  onContactClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick, onNavigate }) => {
  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact', isAction: true },
  ];

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full z-30 px-6 md:px-10 pt-6 md:pt-8"
      >
        <nav className="flex items-center justify-between w-full">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                if (link.isAction) {
                  onContactClick();
                } else {
                  onNavigate(link.id);
                }
              }}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0 focus:outline-none"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </motion.header>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden text-center z-0 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13.5vw] sm:text-[14.5vw] md:text-[15.5vw] lg:text-[16.5vw] mt-6 sm:mt-4 md:-mt-5 select-none">
            Hi, i&apos;m yogesh
          </h1>
        </motion.div>
      </div>

      {/* 3. Hero 3D Magnetic Developer Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none sm:pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full flex justify-center items-end"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex justify-center"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Yogesh E - Software Engineer 3D Portrait"
              className="w-full h-auto max-h-[70vh] sm:max-h-[82vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter contrast-105 select-none"
              draggable={false}
              loading="eager"
            />
          </Magnet>
        </motion.div>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full z-20 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end">
        {/* Left tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[290px]"
            style={{
              fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)',
            }}
          >
            {personalInfo.tagline} driven by crafting scalable backend systems &amp; ai infrastructure
          </p>
        </motion.div>

        {/* Right CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton onClick={onContactClick} />
        </motion.div>
      </div>
    </section>
  );
};
