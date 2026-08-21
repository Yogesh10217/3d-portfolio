import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { Cpu, ArrowRight, Layers, ShieldCheck, Zap, Database, Server, RefreshCw } from 'lucide-react';

interface ArchitectureNode {
  id: string;
  step: string;
  name: string;
  category: string;
  description: string;
  tech: string;
  specs: string[];
}

export const ArchitectureBlueprint: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('factory');

  const nodes: ArchitectureNode[] = [
    {
      id: 'client',
      step: 'STEP 01',
      name: 'Client API Request',
      category: 'Ingress & Protocol',
      description: 'Incoming REST or SSE streaming request carrying model ID, system prompt, temperature, and client token.',
      tech: 'FastAPI / Pydantic V2',
      specs: ['Asynchronous non-blocking I/O', 'Strict Pydantic payload validation', 'JWT authorization & rate limit checks'],
    },
    {
      id: 'router',
      step: 'STEP 02',
      name: 'Request Router',
      category: 'Load Balancing & Routing',
      description: 'Determines target model provider, checks capacity constraints, and assigns request priority queues.',
      tech: 'Python Asyncio Router',
      specs: ['Model alias mapping', 'Automatic fallback to secondary provider', 'Distributed tracing middleware'],
    },
    {
      id: 'factory',
      step: 'STEP 03',
      name: 'Provider Factory',
      category: 'Design Pattern Core',
      description: 'Instantiates the specific Provider Adapter (OpenAI, Ollama, or Gemini) adhering to the unified BaseLLMProvider interface.',
      tech: 'Factory & Registry Pattern',
      specs: ['Zero-change extensibility for new LLMs', 'Unified Server-Sent Events (SSE) adapter', 'Dependency injection container'],
    },
    {
      id: 'registry',
      step: 'STEP 04',
      name: 'Model Registry',
      category: 'Persistence & Config',
      description: 'Stores active model metadata, rate limits, API keys, and health check metrics in relational storage.',
      tech: 'SQLAlchemy & PostgreSQL',
      specs: ['ACID-compliant configuration state', 'Dynamic model activation/deactivation', 'Health monitor probes'],
    },
    {
      id: 'provider',
      step: 'STEP 05',
      name: 'LLM Stream Provider',
      category: 'Egress & Real-Time Stream',
      description: 'Executes inference request and pipes real-time text chunks back to the client stream without blocking the main event loop.',
      tech: 'Docker & Async Generator',
      specs: ['Real-time streaming via SSE', 'Structured audit logging', 'Containerized docker execution'],
    },
  ];

  const currentNode = nodes.find((n) => n.id === selectedNode) || nodes[2];

  return (
    <section
      id="architecture"
      className="relative w-full bg-[#0B0C10] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 border-t border-cyan-500/20 overflow-hidden select-none"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00F2FE 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <FadeIn delay={0} y={30} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive System Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-kanit">
            Multi-Provider LLM Architecture
          </h2>
          <p className="text-sm sm:text-base text-[#D7E2EA]/70 max-w-2xl mx-auto mt-3 font-light">
            Designed by Yogesh E using the Provider Factory Pattern to unify OpenAI, Ollama, and Gemini into a resilient, streaming API platform.
          </p>
        </FadeIn>

        {/* Node Pipeline Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {nodes.map((node, i) => {
            const isSelected = node.id === selectedNode;
            return (
              <motion.button
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                whileHover={{ y: -4 }}
                className={`relative text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#141824] to-[#0F121C] border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.25)]'
                    : 'bg-[#111319] border-white/10 hover:border-cyan-500/40 hover:bg-[#151822]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {node.step}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white font-kanit">
                    {node.name}
                  </h3>
                  <span className="text-[11px] font-mono text-purple-300 block mt-1">
                    {node.category}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/60">
                  <span>{node.tech}</span>
                  {i < nodes.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-cyan-400" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Node Spec Inspector */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNode}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#11131B] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-xs font-mono font-bold">
                    {currentNode.step} ACTIVE NODE
                  </span>
                  <span className="text-xs font-mono text-purple-300 uppercase tracking-widest">
                    {currentNode.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white font-kanit">
                  {currentNode.name}
                </h3>

                <p className="text-sm sm:text-base text-[#D7E2EA]/80 leading-relaxed font-light">
                  {currentNode.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs uppercase tracking-widest text-white/40 font-mono block mb-2">
                    Key Technical Guarantees
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {currentNode.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-[#181B26] border border-white/10 rounded-xl p-3 text-xs font-mono text-cyan-200 flex items-center gap-2"
                      >
                        <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Node Visualization Diagram Card */}
              <div className="lg:col-span-5 bg-[#0A0C12] border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-full space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                    <Layers className="w-4 h-4" /> Node Telemetry
                  </span>
                  <span className="text-xs font-mono text-emerald-400">HEALTH: OK</span>
                </div>

                <div className="space-y-2 font-mono text-xs text-[#D7E2EA]/70">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Component:</span>
                    <span className="text-white font-bold">{currentNode.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Primary Tech:</span>
                    <span className="text-purple-300">{currentNode.tech}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Design Pattern:</span>
                    <span className="text-cyan-300">Factory + Registry</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Latency Overhead:</span>
                    <span className="text-emerald-400">&lt; 2.5ms</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Allows adding new LLM providers without altering route logic.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
