import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageOff } from 'lucide-react';
import { MemoryItem } from '../types';

interface MemoryCardProps {
  memory: MemoryItem;
  index: number;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({ memory, index }) => {
  const [imageError, setImageError] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <article className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-14 my-20 sm:my-28`}>
      {/* Central timeline marker on desktop */}
      <div 
        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full border border-zinc-700 bg-[#050507] text-amber-400/90 font-mono text-[11px] font-bold z-20 shadow-xl"
        aria-hidden="true"
      >
        {memory.year.toString().slice(-2)}
      </div>

      {/* Large Featured Photograph */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 group"
      >
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 shadow-2xl transition-all duration-700 hover:border-zinc-700">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-zinc-950">
            {!imageError ? (
              <img
                src={memory.image}
                alt={memory.alt || memory.title}
                loading="lazy"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103 filter contrast-[1.03] brightness-[0.98]"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-zinc-500 space-y-2 p-6 text-center bg-zinc-900/60">
                <ImageOff className="w-8 h-8 text-zinc-600" />
                <span className="text-xs font-mono text-zinc-400">Foto ricordo — {memory.year}</span>
                <span className="text-[11px] text-zinc-600">Inserisci l'immagine in /public/photos</span>
              </div>
            )}
            
            {/* Soft film vignetting */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Story narrative & caption */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full lg:w-1/2 space-y-4 ${isEven ? 'lg:pl-6 text-left' : 'lg:pr-6 text-left'}`}
      >
        <div className="space-y-1">
          <span className="text-amber-400 font-mono text-sm tracking-wider block font-semibold">
            {memory.year}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            {memory.title}
          </h2>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
          {memory.text}
        </p>

        {memory.joke && (
          <div className="pt-2">
            <blockquote className="p-3.5 rounded-xl border-l-2 border-amber-500/50 bg-zinc-900/30 text-xs sm:text-sm text-zinc-400 italic font-serif leading-relaxed">
              «{memory.joke}»
            </blockquote>
          </div>
        )}
      </motion.div>
    </article>
  );
};
