import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { experience } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 z-0 select-none"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-black text-xs font-mono uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career &amp; Engineering Track Record</span>
          </div>
          <h2
            className="font-black uppercase leading-none tracking-tight text-[#0C0C0C]"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 150px)' }}
          >
            Experience
          </h2>
        </FadeIn>

        {/* Experience & Education List */}
        <div className="w-full flex flex-col border-t border-[#0C0C0C]/15">
          {experience.map((item, index) => (
            <FadeIn
              key={`${item.company}-${index}`}
              delay={index * 0.1}
              y={30}
              className="w-full border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12 group transition-colors duration-300 hover:bg-black/[0.02]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 sm:gap-8 md:gap-14">
                {/* Huge Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 select-none tracking-tighter font-kanit"
                  style={{ fontSize: 'clamp(2.8rem, 9vw, 120px)' }}
                >
                  {`0${index + 1}`}
                </div>

                {/* Company, Role, & Description */}
                <div className="flex flex-col gap-2.5 sm:gap-3.5 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3
                      className="font-bold uppercase text-[#0C0C0C] tracking-wide font-kanit"
                      style={{ fontSize: 'clamp(1.2rem, 2.4vw, 2.2rem)' }}
                    >
                      {item.role} <span className="font-semibold text-purple-700">@ {item.company}</span>
                    </h3>
                    <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-black/70 bg-black/5 border border-black/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-700" />
                      <span>{item.year}</span>
                    </span>
                  </div>

                  <p
                    className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl text-opacity-75"
                    style={{
                      fontSize: 'clamp(0.9rem, 1.6vw, 1.25rem)',
                      color: 'rgba(12, 12, 12, 0.75)',
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Tech stack badges */}
                  {item.tech && item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono uppercase font-semibold tracking-wider px-3 py-1 rounded-md bg-[#0C0C0C] text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
