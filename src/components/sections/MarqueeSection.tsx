import React, { useEffect, useRef, useState } from 'react';
import { techStack, OFFICIAL_TECH_LOGOS } from '../../data/portfolioData';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  // Flatten all skills with category
  const allSkills = techStack.flatMap((cat) =>
    cat.skills.map((skill) => ({
      category: cat.category,
      skill,
      logoUrl: OFFICIAL_TECH_LOGOS[skill] || OFFICIAL_TECH_LOGOS['Python'],
    }))
  );

  // Split into Row 1 & Row 2
  const row1Items = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const row2Items = allSkills.slice(Math.ceil(allSkills.length / 2));

  // Triple for smooth infinite scrolling
  const row1Triple = [...row1Items, ...row1Items, ...row1Items, ...row1Items];
  const row2Triple = [...row2Items, ...row2Items, ...row2Items, ...row2Items];

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(currentOffset);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full bg-[#08090C] pt-20 sm:pt-28 md:pt-36 pb-16 overflow-hidden select-none border-t border-cyan-500/20"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center relative z-10">
        <span className="text-xs uppercase tracking-widest font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-4 py-1.5 rounded-full inline-block mb-3">
          Globally Recognized Tech Stack &amp; Platforms
        </span>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-wide font-kanit">
          Backend • AI Systems • Databases • Infrastructure
        </h3>
      </div>

      <div className="flex flex-col gap-5 relative z-10">
        {/* Row 1: Moves Right on Scroll */}
        <div
          className="flex gap-4 flex-nowrap will-change-transform items-center"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {row1Triple.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 flex items-center gap-4 bg-[#0F1118] border border-white/10 hover:border-cyan-400/80 rounded-2xl p-3.5 pr-8 shadow-[0_10px_30px_rgba(0,0,0,0.8)] group transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,242,254,0.2)]"
            >
              {/* Official Tech Logo Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/5 border border-white/10 p-3 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/40 transition-colors">
                <img
                  src={item.logoUrl}
                  alt={`${item.skill} Official Logo`}
                  loading="lazy"
                  className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title & Category */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 font-bold">
                  {item.category}
                </span>
                <span className="text-lg sm:text-xl font-bold text-white font-kanit tracking-wide mt-0.5">
                  {item.skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Moves Left on Scroll */}
        <div
          className="flex gap-4 flex-nowrap will-change-transform items-center"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {row2Triple.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 flex items-center gap-4 bg-[#0F1118] border border-white/10 hover:border-purple-400/80 rounded-2xl p-3.5 pr-8 shadow-[0_10px_30px_rgba(0,0,0,0.8)] group transition-all duration-300 hover:shadow-[0_0_25px_rgba(127,0,255,0.2)]"
            >
              {/* Official Tech Logo Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/5 border border-white/10 p-3 flex items-center justify-center shrink-0 group-hover:bg-purple-500/10 group-hover:border-purple-400/40 transition-colors">
                <img
                  src={item.logoUrl}
                  alt={`${item.skill} Official Logo`}
                  loading="lazy"
                  className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title & Category */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] uppercase font-mono tracking-widest text-purple-400 font-bold">
                  {item.category}
                </span>
                <span className="text-lg sm:text-xl font-bold text-white font-kanit tracking-wide mt-0.5">
                  {item.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
