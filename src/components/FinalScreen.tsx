import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { birthdayData } from '../data/birthday';
import { ImageOff } from 'lucide-react';

export const FinalScreen: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);
  const final = birthdayData.finalMessage;

  useEffect(() => {
    // Gentle golden confetti drift like cinema end
    const timer = setTimeout(() => {
      confetti({
        particleCount: 45,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#f59e0b', '#fbbf24', '#e4e4e7', '#ffffff']
      });
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer id="final-screen" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 text-center bg-[#050507] overflow-hidden">
      {/* Soft ambient warmth */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/[0.04] rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true" 
      />

      <div className="max-w-xl mx-auto space-y-12">
        {/* Giant 25 Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1"
        >
          <div className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em]">
            HAPPY
          </div>
          <div className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-600 tracking-tighter">
            {final.bigNumber}
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-3"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-100 tracking-tight">
            {final.title}
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-400 font-serif italic">
            {final.subtitle}
          </p>
        </motion.div>

        {/* Most Meaningful Photo */}
        {final.finalPhoto && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full max-w-sm mx-auto pt-2"
          >
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl aspect-[4/3] bg-zinc-950">
              {!photoError ? (
                <img
                  src={final.finalPhoto}
                  alt="Noi due"
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-zinc-600 space-y-2">
                  <ImageOff className="w-7 h-7 text-zinc-700" />
                  <span className="text-xs font-mono">Foto finale condivisa</span>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Sincere Signoff */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-4 text-zinc-400 font-serif italic text-lg sm:text-xl"
        >
          <span>{final.authorSign}</span>
        </motion.div>
      </div>
    </footer>
  );
};
