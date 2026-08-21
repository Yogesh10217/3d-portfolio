import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Cpu, CheckCircle2, AlertCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-4xl bg-[#121316] border-2 border-[#D7E2EA]/30 rounded-[36px] p-6 sm:p-10 text-[#D7E2EA] shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/40 text-xs font-semibold uppercase tracking-wider text-purple-300">
                  {project.status}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">
                  {project.type}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-kanit">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-purple-300/80 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium text-sm transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Overview & Long Description */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-2">
              System Overview
            </h3>
            <p className="text-base sm:text-lg text-[#D7E2EA]/90 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* 5-Step System Architecture Flow */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="mb-8 p-6 rounded-3xl bg-black/40 border border-white/10">
              <h3 className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> System Architecture &amp; Data Pipeline
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {project.architecture.map((arch, i) => (
                  <div
                    key={arch.step}
                    className="relative bg-[#1A1B20] border border-white/10 rounded-2xl p-4 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-2xl font-black text-purple-500 font-kanit">
                        {arch.step}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-1 font-kanit">
                        {arch.label}
                      </h4>
                      <p className="text-xs text-[#D7E2EA]/60 mt-1 leading-snug">
                        {arch.desc}
                      </p>
                    </div>
                    {i < project.architecture.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 z-10 bg-[#121316] rounded-full p-0.5 border border-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features & Architecture Decisions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Key Features */}
            <div className="p-6 rounded-3xl bg-[#17181D] border border-white/10">
              <h3 className="text-sm uppercase tracking-widest text-white font-bold mb-4 font-kanit flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Engineering Features
              </h3>
              <ul className="space-y-2.5 text-sm text-[#D7E2EA]/80">
                {project.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Rationale */}
            <div className="p-6 rounded-3xl bg-[#17181D] border border-white/10">
              <h3 className="text-sm uppercase tracking-widest text-white font-bold mb-4 font-kanit flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400" /> Architectural Rationale
              </h3>
              <div className="space-y-4">
                {project.decisions.map((dec) => (
                  <div key={dec.title}>
                    <p className="text-xs font-bold text-amber-300 font-kanit uppercase tracking-wider">
                      {dec.title}
                    </p>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 leading-snug">
                      {dec.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Challenges & Learnings */}
          <div className="p-6 rounded-3xl bg-[#141519] border border-white/10 mb-8 space-y-4">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-red-400 font-bold mb-1 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" /> Technical Challenge Resolved
              </h4>
              <p className="text-sm text-[#D7E2EA]/80">{project.challenges}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-1 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" /> Key Engineering Takeaway
              </h4>
              <p className="text-sm text-[#D7E2EA]/80">{project.learnings}</p>
            </div>
          </div>

          {/* Metrics & Tech Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {project.metrics.map((m) => (
                <span key={m} className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                  ✓ {m}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
