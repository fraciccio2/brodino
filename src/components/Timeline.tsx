import React from 'react';
import { motion } from 'framer-motion';
import { MemoryCard } from './MemoryCard';
import { birthdayData } from '../data/birthday';

export const Timeline: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      {/* Narrative Section Header */}
      <div className="text-center max-w-xl mx-auto mb-16 sm:mb-24 space-y-3">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-zinc-500 uppercase tracking-widest block"
        >
          Capitoli di vita
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-100"
        >
          La nostra storia
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-zinc-400 text-sm sm:text-base font-light"
        >
          Pochi filtri, molte risate e un percorso che ci ha portati fino a qui.
        </motion.p>
      </div>

      {/* Vertical subtle timeline line */}
      <div className="relative">
        <div 
          className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-800 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* List of memory chapters */}
        <div className="space-y-4">
          {birthdayData.memories.map((memory, index) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
