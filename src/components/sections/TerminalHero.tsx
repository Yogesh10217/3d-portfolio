import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Sparkles, Code2, Server, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo, terminalCommands } from '../../data/portfolioData';
import { ContactButton } from '../common/ContactButton';

interface TerminalHeroProps {
  onContactClick: () => void;
  onNavigate: (sectionId: string) => void;
}

interface LogEntry {
  command?: string;
  output?: string | string[];
  isSystem?: boolean;
}

export const TerminalHero: React.FC<TerminalHeroProps> = ({ onContactClick, onNavigate }) => {
  const [inputVal, setInputVal] = useState('');
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      isSystem: true,
      output: [
        "Welcome to YogeshOS v2.4 [Software Engineering System Kernel]",
        "Type 'help' or click any command shortcut below to explore backend systems & AI pipelines.",
      ],
    },
  ]);

  const terminalContainerRef = useRef<HTMLDivElement>(null);

  // Rotate roles dynamically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll terminal log container internally without scrolling the main window
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTo({
        top: terminalContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [logs]);

  const handleRunCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    const commandResult = terminalCommands[trimmed];
    const newEntry: LogEntry = {
      command: cmdStr,
      output: commandResult
        ? commandResult
        : `Command not found: '${trimmed}'. Type 'help' for available commands.`,
    };

    setLogs((prev) => [...prev, newEntry]);
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRunCommand(inputVal);
  };

  const shortcutChips = ['help', 'skills', 'projects', 'experience', 'patent', 'metrics', 'contact'];

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Architecture', id: 'architecture' },
    { label: 'Code', id: 'code' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact', isAction: true },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between bg-[#08090C] text-[#D7E2EA] overflow-x-clip select-none pt-6 pb-12">
      {/* Background Neon Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. Header Navbar */}
      <header className="w-full z-30 px-6 md:px-12 mb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_#00F2FE]" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-bold">
              YOGESH E // SDE KERNEL
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
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
                className="text-xs uppercase tracking-widest font-mono text-[#D7E2EA]/80 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={onContactClick}
            className="px-4 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 font-mono text-xs uppercase tracking-wider hover:bg-cyan-500/20 transition-all cursor-pointer"
          >
            Connect
          </button>
        </div>
      </header>

      {/* 2. Main Hero Split Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: SDE Brand & Dynamic Role */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider">
            <Server className="w-3.5 h-3.5 text-cyan-400" />
            <span>Founding Backend Engineer &amp; AI Infrastructure</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight font-kanit text-white leading-none">
              YOGESH E
            </h1>
            
            <div className="h-10 flex items-center">
              <motion.div
                key={activeRoleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
              >
                &gt; {personalInfo.roles[activeRoleIndex]}
              </motion.div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed max-w-xl">
            Architecting scalable backend systems, AI inference orchestration, and production APIs with Python, FastAPI, SQLAlchemy, PostgreSQL, and Docker.
          </p>

          {/* Quick Metrics Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg pt-2">
            <div className="bg-[#111318] border border-white/10 rounded-xl p-3">
              <span className="text-xs text-white/50 uppercase font-mono block">Academic CGPA</span>
              <span className="text-lg font-black text-cyan-400 font-kanit">8.9 / 10</span>
            </div>
            <div className="bg-[#111318] border border-white/10 rounded-xl p-3">
              <span className="text-xs text-white/50 uppercase font-mono block">ServiceNow</span>
              <span className="text-lg font-black text-purple-400 font-kanit">CAD &amp; CSA</span>
            </div>
            <div className="bg-[#111318] border border-white/10 rounded-xl p-3 col-span-2 sm:col-span-1">
              <span className="text-xs text-white/50 uppercase font-mono block">AI Architecture</span>
              <span className="text-lg font-black text-emerald-400 font-kanit">Patent Filed</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <ContactButton onClick={onContactClick} label="Hire / Contact" />
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer"
            >
              <span>Explore Systems</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Interactive YogeshOS Terminal */}
        <div className="lg:col-span-6 w-full">
          <div className="w-full bg-[#0F1117] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            {/* Terminal Top Window Bar */}
            <div className="bg-[#161822] px-4 py-3 border-b border-cyan-500/20 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-cyan-400/90 font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> YogeshOS v2.4 CLI
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/40 uppercase">bash • async engine</span>
            </div>

            {/* Terminal Window Body */}
            <div ref={terminalContainerRef} className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-cyan-200 h-[340px] overflow-y-auto space-y-3 bg-[#0B0D13]">
              {logs.map((log, idx) => (
                <div key={idx} className="space-y-1">
                  {log.command && (
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="text-cyan-400 font-bold">yogesh@kernel:~$</span>
                      <span>{log.command}</span>
                    </div>
                  )}
                  {log.output && (
                    <div className="text-cyan-300/80 pl-3 border-l-2 border-cyan-500/30 space-y-0.5 whitespace-pre-wrap leading-relaxed">
                      {Array.isArray(log.output) ? (
                        log.output.map((line, lIdx) => <div key={lIdx}>{line}</div>)
                      ) : (
                        <div>{log.output}</div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Shortcut Command Chips */}
            <div className="p-2.5 bg-[#12141D] border-t border-cyan-500/15 flex flex-wrap gap-1.5 items-center">
              <span className="text-[10px] font-mono text-white/40 uppercase mr-1">Quick Run:</span>
              {shortcutChips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => handleRunCommand(chip)}
                  className="px-2.5 py-1 rounded bg-cyan-950/70 hover:bg-cyan-500/20 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 transition-colors cursor-pointer"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={handleFormSubmit} className="p-3 bg-[#090B10] border-t border-cyan-500/20 flex items-center gap-2">
              <span className="text-cyan-400 font-bold font-mono">$</span>
              <input
                type="text"
                placeholder="Type 'help', 'skills', or 'projects'..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="w-full bg-transparent text-sm font-mono text-white focus:outline-none placeholder-white/30"
              />
              <button
                type="submit"
                className="p-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
                title="Execute Command"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 3. Bottom HUD Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#D7E2EA]/60 border-t border-white/5">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> System Online (99.9% Uptime)
          </span>
          <span>•</span>
          <span>{personalInfo.location}</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
            GitHub @{personalInfo.githubUsername}
          </a>
          <span>•</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
            LinkedIn /eyogesh
          </a>
        </div>
      </div>
    </section>
  );
};
