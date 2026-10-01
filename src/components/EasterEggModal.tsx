import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, X, ImageOff, Lock } from 'lucide-react';
import { birthdayData } from '../data/birthday';

export const EasterEggModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [inputBuffer, setInputBuffer] = useState<string[]>([]);
  const easterEgg = birthdayData.easterEgg;

  // Konami Code sequence: ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, b, a
  const konamiSequence = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      const newBuffer = [...inputBuffer, key].slice(-10);
      setInputBuffer(newBuffer);

      // Check if sequence matches
      const isMatch = konamiSequence.every((val, index) => {
        const bufferKey = newBuffer[index];
        if (!bufferKey) return false;
        return val.toLowerCase() === bufferKey.toLowerCase();
      });

      if (isMatch) {
        setIsOpen(true);
        setImageError(false);
        setInputBuffer([]);
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputBuffer]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl sm:max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-9 rounded-2xl border border-amber-500/40 bg-zinc-950 shadow-2xl space-y-6 font-mono text-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 transition-colors z-10 cursor-pointer"
              aria-label="Chiudi finestra segreta"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Icon & Title */}
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
                <Lock className="w-3.5 h-3.5" />
                <span className="tracking-wider uppercase">{easterEgg.unlockedTitle}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                {easterEgg.unlockedSubtitle}
              </h3>
            </div>

            {/* Secret Image Display */}
            {easterEgg.image && (
              <div className="space-y-3 pt-1">
                <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 max-w-md sm:max-w-lg mx-auto shadow-2xl group">
                  {!imageError ? (
                    <img
                      src={easterEgg.image}
                      alt="Foto segreta easter egg"
                      loading="lazy"
                      onError={() => setImageError(true)}
                      className="w-full max-h-[380px] sm:max-h-[440px] object-cover sm:object-contain bg-black mx-auto transition-transform duration-500 group-hover:scale-102"
                    />
                  ) : (
                    <div className="w-full h-56 flex flex-col items-center justify-center p-6 text-zinc-500 space-y-2 bg-zinc-900/80">
                      <ImageOff className="w-8 h-8 text-zinc-600" />
                      <span className="text-xs font-mono text-zinc-400">Foto Easter Egg non trovata</span>
                      <span className="text-[11px] text-zinc-600 font-sans">
                        Inserisci l'immagine in <code className="text-amber-400">public/photos/easter-egg.jpg</code>
                      </span>
                    </div>
                  )}

                  {/* Stamp overlay */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded bg-red-600/90 text-white text-[10px] font-bold tracking-widest uppercase shadow-md rotate-2 pointer-events-none">
                    TOP SECRET
                  </div>
                </div>

                {/* Secret Caption */}
                {easterEgg.imageCaption && (
                  <p className="text-xs sm:text-sm font-serif italic text-amber-300/90 max-w-md sm:max-w-lg mx-auto leading-relaxed">
                    {easterEgg.imageCaption}
                  </p>
                )}
              </div>
            )}

            {/* Friendship Perk Badge */}
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm text-amber-300 font-semibold flex items-center justify-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{easterEgg.friendshipLevel}</span>
            </div>

            <p className="text-[11px] text-zinc-500 font-sans leading-relaxed">
              Hai inserito la sequenza segreta (↑ ↑ ↓ ↓ ← → ← → B A). Questo reperto storico rimane tra di noi.
            </p>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Chiudi prima che qualcuno veda
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
