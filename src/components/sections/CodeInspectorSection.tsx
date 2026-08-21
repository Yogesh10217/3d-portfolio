import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { Code2, Check, Copy, FileCode, Terminal } from 'lucide-react';
import { codeSnippets } from '../../data/portfolioData';

export const CodeInspectorSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const currentSnippet = codeSnippets[activeTab];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="code"
      className="relative w-full bg-[#08090C] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 border-t border-white/10 select-none"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <FadeIn delay={0} y={30} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Clean Code &amp; Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-kanit">
            Production Backend Code Inspector
          </h2>
          <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-xl mx-auto mt-2 font-light">
            Real code snippets demonstrating Factory Patterns, FastAPI dependency injection, and containerized Docker services.
          </p>
        </FadeIn>

        {/* Code Container Window */}
        <div className="w-full bg-[#0E1017] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl">
          {/* File Tabs & Header */}
          <div className="bg-[#141620] px-4 pt-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              {codeSnippets.map((snippet, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={snippet.filename}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-t-xl text-xs font-mono transition-colors cursor-pointer border-t-2 ${
                      isActive
                        ? 'bg-[#0E1017] text-cyan-300 border-cyan-400 font-bold'
                        : 'bg-transparent text-white/50 border-transparent hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 text-purple-400" />
                    <span>{snippet.filename}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyan-300 transition-colors mb-2 sm:mb-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Description banner */}
          <div className="px-6 py-3 bg-[#11131C] border-b border-white/5 flex items-center justify-between text-xs font-mono text-purple-200">
            <span className="truncate">💡 {currentSnippet.description}</span>
            <span className="uppercase text-[10px] text-white/40 tracking-wider font-bold">
              {currentSnippet.language}
            </span>
          </div>

          {/* Code Viewer Body */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSnippet.filename}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-6 overflow-x-auto bg-[#0A0C10] font-mono text-xs sm:text-sm text-cyan-100 leading-relaxed min-h-[300px]"
            >
              <pre className="whitespace-pre">
                <code>{currentSnippet.code}</code>
              </pre>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
