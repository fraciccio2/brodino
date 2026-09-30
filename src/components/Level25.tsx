import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { birthdayData } from '../data/birthday';

export const Level25: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">
      {/* Subtle monumental watermark */}
      <div 
        className="absolute select-none pointer-events-none text-[36vw] md:text-[26vw] font-black text-white/[0.02] leading-none tracking-tighter -z-10 translate-y-6"
        aria-hidden="true"
      >
        25
      </div>

      <div className="max-w-2xl mx-auto space-y-10 relative z-10">
        {/* Lead statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-zinc-100">
            {birthdayData.level25Intro.leadText}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-zinc-400 font-light tracking-wide">
            {birthdayData.level25Intro.subText}
          </p>
        </motion.div>

        {/* Cinematic pause & turn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="pt-6 space-y-4"
        >
          <p className="text-base sm:text-lg text-zinc-500 font-serif italic">
            {birthdayData.level25Intro.revealText}
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-200 leading-snug">
            {birthdayData.level25Intro.highlightText}
          </p>
        </motion.div>

        {/* Minimal scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1 }}
          className="pt-16 flex flex-col items-center space-y-2 text-zinc-500 text-xs font-mono"
        >
          <span>Scorri verso i ricordi</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-zinc-500" />
        </motion.div>
      </div>
    </section>
  );
};
