import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { birthdayData } from '../data/birthday';

export const Achievements: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-3xl mx-auto">
      <div className="text-center max-w-lg mx-auto mb-12 space-y-2">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-zinc-500 uppercase tracking-widest block"
        >
          Checklist non ufficiale
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100"
        >
          Traguardi raggiunti
        </motion.h2>
      </div>

      {/* Streamlined progressive milestone list */}
      <div className="space-y-3">
        {birthdayData.achievements.map((item, index) => {
          const isLevel25 = item.title.includes("25");

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`p-4 sm:p-4.5 rounded-xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                isLevel25
                  ? 'bg-amber-400/[0.08] border-amber-400/40 text-amber-200'
                  : 'bg-zinc-950/70 border-zinc-850 border-zinc-800/80 text-zinc-300 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center space-x-3.5 min-w-0">
                <div className={`p-1 rounded-full shrink-0 ${isLevel25 ? 'bg-amber-400 text-black' : 'bg-zinc-800 text-zinc-300'}`}>
                  {isLevel25 ? <Star className="w-3.5 h-3.5 fill-black" /> : <Check className="w-3.5 h-3.5" />}
                </div>
                <div className="truncate">
                  <span className={`text-sm sm:text-base font-medium ${isLevel25 ? 'font-bold text-amber-300' : 'text-zinc-200'}`}>
                    {item.title}
                  </span>
                  <span className="hidden sm:inline text-xs text-zinc-500 font-light ml-3">
                    — {item.description}
                  </span>
                </div>
              </div>

              <span className={`text-[10px] font-mono shrink-0 uppercase tracking-wider px-2 py-0.5 rounded ${
                isLevel25 ? 'bg-amber-400/20 text-amber-300 font-bold' : 'text-zinc-500'
              }`}>
                {isLevel25 ? 'Unblock' : 'Completato'}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
