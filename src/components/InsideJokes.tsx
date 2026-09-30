import React from 'react';
import { motion } from 'framer-motion';
import { birthdayData } from '../data/birthday';

export const InsideJokes: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-100"
        >
          {birthdayData.insideJokesTitle.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-zinc-400 text-base sm:text-lg font-serif italic"
        >
          {birthdayData.insideJokesTitle.subtitle}
        </motion.p>
      </div>

      {/* Clean notes grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {birthdayData.insideJokes.map((joke, index) => (
          <motion.div
            key={joke.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-7 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 backdrop-blur-sm space-y-4 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                {joke.badge || "UNLOCKED"}
              </span>
              {joke.counter && (
                <span className="text-xs font-mono text-zinc-500">
                  {joke.counter}
                </span>
              )}
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-zinc-100">
              {joke.title}
            </h3>

            {joke.quote && (
              <div className="pl-3.5 border-l-2 border-amber-500/50 text-zinc-300 italic text-sm sm:text-base font-serif">
                {joke.quote}
              </div>
            )}

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              {joke.context}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
