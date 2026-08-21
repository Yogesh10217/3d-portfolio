import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { AnimatedText } from '../common/AnimatedText';
import { ContactButton } from '../common/ContactButton';
import { personalInfo, achievements } from '../../data/portfolioData';
import { Award, FileCode2, Lightbulb, GraduationCap } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const getAchievementIcon = (iconType: string) => {
    switch (iconType) {
      case 'CAD':
        return <FileCode2 className="w-6 h-6 text-purple-400" />;
      case 'CSA':
        return <Award className="w-6 h-6 text-emerald-400" />;
      case 'PAT':
        return <Lightbulb className="w-6 h-6 text-amber-400" />;
      case 'GPA':
        return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      default:
        return <Award className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 overflow-hidden select-none"
    >
      {/* 1. Decorative Corner 3D Elements */}
      {/* Top-Left: Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10 opacity-70">
        <FadeIn delay={0.1} duration={0.9} x={-80} y={0}>
          <motion.img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Moon 3D icon"
            animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-10 opacity-70">
        <FadeIn delay={0.25} duration={0.9} x={-80} y={0}>
          <motion.img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D object"
            animate={{ y: [0, 14, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-10 opacity-70">
        <FadeIn delay={0.15} duration={0.9} x={80} y={0}>
          <motion.img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Lego 3D icon"
            animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none z-10 opacity-70">
        <FadeIn delay={0.3} duration={0.9} x={80} y={0}>
          <motion.img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D group decoration"
            animate={{ y: [0, 12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* 2. Main Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="h-10 sm:h-12 w-full" />

        {/* Animated Paragraph */}
        <div className="w-full px-4">
          <AnimatedText text={personalInfo.summary} />
        </div>

        <div className="h-12 sm:h-16 w-full" />

        {/* Achievements Cards Grid */}
        <FadeIn delay={0.15} y={30} className="w-full px-4 mb-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-[#141518] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col items-start justify-between shadow-xl group hover:border-purple-500/40"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-4 group-hover:bg-purple-500/10 transition-colors">
                  {getAchievementIcon(item.icon)}
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white font-kanit tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/60 uppercase tracking-wider mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.2} y={30}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
