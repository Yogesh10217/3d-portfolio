import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { LiveProjectButton } from '../common/LiveProjectButton';
import { projects, OFFICIAL_TECH_LOGOS } from '../../data/portfolioData';
import { ProjectItem } from '../../types/portfolio';
import { Github, Layers, Sparkles, Cpu, ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onSelectProject: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-20 sm:top-24 md:top-28 w-full flex items-center justify-center mb-12 sm:mb-16 md:mb-20"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl bg-[#090A0E] border-2 border-cyan-500/40 rounded-[36px] sm:rounded-[44px] md:rounded-[52px] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] origin-top transition-shadow duration-300 relative overflow-hidden"
      >
        {/* Top Glow Accent */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-cyan-500/20">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            {/* Huge Number */}
            <span
              className="font-black text-cyan-400 leading-none tracking-tight select-none font-kanit"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
            >
              {`0${index + 1}`}
            </span>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 px-3 py-0.5 rounded-full font-bold">
                  {project.status}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                  • {project.type}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-wide font-kanit mt-1">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 flex-wrap">
            {(project.demo || project.liveUrl) && (
              <a
                href={project.demo || project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 hover:bg-cyan-500/30 text-xs font-mono uppercase font-bold tracking-wider transition-colors shadow-[0_0_15px_rgba(0,242,254,0.2)]"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 text-[#D7E2EA] hover:bg-white/10 hover:text-white transition-colors"
                title="View GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}

            <LiveProjectButton
              onClick={() => onSelectProject(project)}
              label="Architecture & Specs"
            />
          </div>
        </div>

        {/* Description & Tech Stack */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-[#D7E2EA]/90 max-w-3xl leading-relaxed font-light">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 shrink-0 items-center">
            {project.tech.map((t) => {
              const logo = OFFICIAL_TECH_LOGOS[t];
              return (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200"
                >
                  {logo && (
                    <img src={logo} alt={t} className="w-3.5 h-3.5 object-contain shrink-0" />
                  )}
                  <span>{t}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Interactive Architecture Flow Panel */}
        <div className="p-5 sm:p-6 rounded-3xl bg-[#0F1118] border border-cyan-500/30 mb-6">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <Cpu className="w-4 h-4" /> System Pipeline Architecture
            </span>
            <span className="text-[11px] font-mono text-purple-300 uppercase">
              Async Execution Flow
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {project.architecture.map((arch, i) => (
              <div
                key={arch.step}
                className="relative bg-[#151722] border border-white/10 rounded-2xl p-3.5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {arch.step}
                  </span>
                  <h4 className="text-sm font-bold text-white font-kanit mt-1">
                    {arch.label}
                  </h4>
                  <p className="text-xs text-[#D7E2EA]/60 font-mono mt-1 leading-snug">
                    {arch.desc}
                  </p>
                </div>
                {i < project.architecture.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400 z-10 bg-[#090A0E] rounded-full p-0.5 border border-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Highlights & Metrics Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-[#12141F] border border-white/10 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-white/50 uppercase block">Architecture Guarantee</span>
              <span className="text-xs font-bold text-white font-kanit">Production Clean Code Architecture</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#12141F] border border-white/10 flex items-center gap-3">
            <Zap className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-white/50 uppercase block">Key Metrics</span>
              <span className="text-xs font-bold text-cyan-300 font-kanit">
                {project.metrics.join(' • ')}
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#12141F] border border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-purple-300 uppercase">Interactive Inspector</span>
            <button
              onClick={() => onSelectProject(project)}
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
            >
              View Full Specs &rarr;
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#08090C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-8 md:px-12 pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-32 border-t border-cyan-500/20"
    >
      {/* Section Heading */}
      <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>Flagship Systems &amp; Platforms</span>
        </div>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Sticky Stacking Project Cards */}
      <div className="relative max-w-6xl mx-auto w-full flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={projects.length}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
};
