import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">
        {char}
      </motion.span>
    </span>
  );
};

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  startIndex: number;
  totalChars: number;
}

const Word: React.FC<WordProps> = ({ word, progress, startIndex, totalChars }) => {
  return (
    <span className="inline-block whitespace-nowrap mr-[0.28em]">
      {word.split('').map((char, index) => {
        const charIndex = startIndex + index;
        const start = charIndex / totalChars;
        const end = Math.min(1, (charIndex + 1) / totalChars);
        return (
          <Character
            key={index}
            char={char}
            progress={progress}
            range={[start, end]}
          />
        );
      })}
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;

  let currentTotal = 0;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-3xl mx-auto select-none ${className}`}
      style={{
        fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
      }}
    >
      {words.map((word, i) => {
        const startIndex = currentTotal;
        currentTotal += word.length + 1;
        return (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            startIndex={startIndex}
            totalChars={totalChars}
          />
        );
      })}
    </p>
  );
};
