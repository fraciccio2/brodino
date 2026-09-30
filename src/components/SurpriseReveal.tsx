import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { birthdayData } from '../data/birthday';

interface SurpriseRevealProps {
  onScrollToVideo: () => void;
}

export const SurpriseReveal: React.FC<SurpriseRevealProps> = ({ onScrollToVideo }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 py-32 text-center bg-[#050507]">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Surprise progression */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl font-black text-zinc-100 tracking-tight"
          >
            {birthdayData.surprise.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl text-zinc-400 font-light"
          >
            {birthdayData.surprise.subheading}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl font-serif italic text-amber-300/90 pt-2"
          >
            {birthdayData.surprise.revealer}
          </motion.p>
        </div>

        {/* Transition trigger to video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="pt-4"
        >
          <button
            onClick={onScrollToVideo}
            className="group inline-flex items-center space-x-3 px-7 py-4 rounded-full bg-amber-400 text-black font-bold text-xs sm:text-sm tracking-wider uppercase shadow-2xl shadow-amber-400/20 hover:bg-amber-300 hover:scale-103 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-black transition-transform group-hover:scale-110" />
            <span>{birthdayData.surprise.specialPerson}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
