import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { LiveProjectButton } from '../common/LiveProjectButton';
import { projects } from '../../data/portfolioData';
import { ProjectItem } from '../../types/portfolio';
import { Github, Layers, Sparkles } from 'lucide-react';

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
        className="w-full max-w-6xl bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] origin-top transition-shadow duration-300"
      >
        {/* Top Row: Number, Category, Project Name, Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            {/* Huge Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none tracking-tight select-none font-kanit"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {`0${index + 1}`}
            </span>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-purple-300 bg-purple-950/60 border border-purple-500/30 px-3 py-0.5 rounded-full font-medium">
                  {project.status}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                  • {project.type}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase text-[#D7E2EA] tracking-wide font-kanit mt-1">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
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
              label="Architecture & Details"
            />
          </div>
        </div>

        {/* Short Description & Tech Badges */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm sm:text-base text-[#D7E2EA]/80 max-w-3xl leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 shrink-0">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-purple-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Row: Two-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-4 md:gap-6">
          {/* Left Column (40% width on desktop = 4 cols of 10) */}
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4 md:gap-6">
            {/* Left Top Image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#15161A] border border-white/10 group cursor-pointer"
              style={{
                height: 'clamp(130px, 16vw, 230px)',
              }}
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.col1Images[0]}
                alt={`${project.title} Render 1`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Left Bottom Image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#15161A] border border-white/10 group cursor-pointer"
              style={{
                height: 'clamp(160px, 22vw, 340px)',
              }}
              onClick={() => onSelectProject(project)}
            >
              <img
                src={project.col1Images[1]}
                alt={`${project.title} Render 2`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column (60% width on desktop = 6 cols of 10) */}
          <div
            className="md:col-span-6 w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#15161A] border border-white/10 group cursor-pointer min-h-[300px] md:min-h-[auto]"
            onClick={() => onSelectProject(project)}
          >
            <img
              src={project.col2Image}
              alt={`${project.title} Main Architecture Render`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
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
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-32"
    >
      {/* Section Heading */}
      <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-24">
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
