import React, { useEffect, useRef, useState } from 'react';
import { MARQUEE_IMAGES_ROW1, MARQUEE_IMAGES_ROW2 } from '../../data/marqueeImages';
import { techStack } from '../../data/portfolioData';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  // Flatten all skills into structured badges
  const allSkills = techStack.flatMap((cat) =>
    cat.skills.map((skill) => ({ category: cat.category, skill, icon: cat.icon }))
  );

  // Triple for smooth infinite scrolling
  const row1Images = [...MARQUEE_IMAGES_ROW1, ...MARQUEE_IMAGES_ROW1, ...MARQUEE_IMAGES_ROW1];
  const row2Images = [...MARQUEE_IMAGES_ROW2, ...MARQUEE_IMAGES_ROW2, ...MARQUEE_IMAGES_ROW2];
  const skillBadges = [...allSkills, ...allSkills, ...allSkills];

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
      className="relative w-full bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden select-none"
    >
      {/* Interactive Tech Stack Header */}
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light border border-white/10 px-4 py-1.5 rounded-full inline-block mb-3">
          Technical Arsenal &amp; Capabilities
        </span>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#D7E2EA] tracking-wide font-kanit">
          Backend • AI Infrastructure • System Architecture
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1: Moves Right on Scroll - Mix of 3D renders & Tech Stack Badges */}
        <div
          className="flex gap-4 flex-nowrap will-change-transform items-center"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {row1Images.map((src, idx) => {
            const skill = skillBadges[idx % skillBadges.length];
            return (
              <div
                key={`row1-${idx}`}
                className="flex-shrink-0 flex items-center gap-4 bg-[#141518] border border-white/10 rounded-2xl p-3 pr-6 shadow-xl group hover:border-purple-500/50 transition-colors"
              >
                <div className="w-[140px] h-[90px] sm:w-[180px] sm:h-[110px] rounded-xl overflow-hidden bg-black/40">
                  <img
                    src={src}
                    alt={`Tech visualization ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-purple-400 font-semibold">
                    {skill.category}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white font-kanit">
                    {skill.skill}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Moves Left on Scroll */}
        <div
          className="flex gap-4 flex-nowrap will-change-transform items-center"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {row2Images.map((src, idx) => {
            const skill = skillBadges[(idx + 7) % skillBadges.length];
            return (
              <div
                key={`row2-${idx}`}
                className="flex-shrink-0 flex items-center gap-4 bg-[#141518] border border-white/10 rounded-2xl p-3 pr-6 shadow-xl group hover:border-pink-500/50 transition-colors"
              >
                <div className="w-[140px] h-[90px] sm:w-[180px] sm:h-[110px] rounded-xl overflow-hidden bg-black/40">
                  <img
                    src={src}
                    alt={`Tech visualization ${idx + 12}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-pink-400 font-semibold">
                    {skill.category}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white font-kanit">
                    {skill.skill}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
