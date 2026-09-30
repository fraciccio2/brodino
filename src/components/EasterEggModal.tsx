import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, X, Terminal } from 'lucide-react';
import { birthdayData } from '../data/birthday';

export const EasterEggModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputBuffer, setInputBuffer] = useState<string[]>([]);

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl border border-amber-500/50 bg-zinc-950 shadow-2xl text-center space-y-5 font-mono"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 transition-colors"
              aria-label="Chiudi finestra segreta"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Terminal className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                {birthdayData.easterEgg.unlockedTitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                {birthdayData.easterEgg.unlockedSubtitle}
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-amber-300 font-semibold flex items-center justify-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{birthdayData.easterEgg.friendshipLevel}</span>
            </div>

            <p className="text-xs text-zinc-500 font-sans">
              Hai trovato il codice segreto (↑ ↑ ↓ ↓ ← → ← → B A). Sei ufficialmente un veterano dell'amicizia.
            </p>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Continua l'avventura
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
