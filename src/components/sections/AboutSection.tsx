import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { AnimatedText } from '../common/AnimatedText';
import { ContactButton } from '../common/ContactButton';
import { personalInfo, achievements } from '../../data/portfolioData';
import { Award, FileCode2, Lightbulb, GraduationCap, Cpu, ShieldAlert, CheckCircle2 } from 'lucide-react';

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

  const csCore = [
    "Data Structures & Algorithms",
    "System Design & Scalability",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems & Multithreading",
    "Computer Networks & Protocols",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#08090C] text-[#D7E2EA] flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-24 overflow-hidden select-none"
    >
      {/* Circuit background glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Engineering Background</span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 150px)' }}
          >
            About Me
          </h2>
        </FadeIn>

        <div className="h-10 sm:h-12 w-full" />

        {/* Animated Paragraph */}
        <div className="w-full px-4">
          <AnimatedText text={personalInfo.summary} />
        </div>

        <div className="h-12 sm:h-16 w-full" />

        {/* Certifications & Achievements Glassmorphic Cards */}
        <FadeIn delay={0.15} y={30} className="w-full px-4 mb-12">
          <span className="text-xs uppercase tracking-widest text-white/40 font-mono block text-center mb-6">
            Key Certifications &amp; Intellectual Property
          </span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-[#111319] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col items-start justify-between shadow-xl group hover:border-cyan-500/40"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-4 group-hover:bg-cyan-500/10 transition-colors">
                  {getAchievementIcon(item.icon)}
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white font-kanit tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-cyan-300/80 uppercase tracking-wider font-mono mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Core CS Fundamentals Grid */}
        <FadeIn delay={0.2} y={30} className="w-full px-4 mb-16">
          <div className="bg-[#10121A] border border-cyan-500/20 rounded-3xl p-6 sm:p-8">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold block mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Core Computer Science Foundation
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {csCore.map((cs) => (
                <div
                  key={cs}
                  className="bg-[#161824] border border-white/5 rounded-xl p-3.5 text-xs sm:text-sm font-mono text-white flex items-center gap-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span>{cs}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Contact CTA */}
        <FadeIn delay={0.25} y={30}>
          <ContactButton onClick={onContactClick} label="Connect With Yogesh" />
        </FadeIn>
      </div>
    </section>
  );
};
