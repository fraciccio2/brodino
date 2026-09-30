import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, ArrowRight } from 'lucide-react';
import { birthdayData } from '../data/birthday';

interface IntroTerminalProps {
  onComplete: () => void;
}

export const IntroTerminal: React.FC<IntroTerminalProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [memoriesProgress, setMemoriesProgress] = useState<number>(0);
  const [friendshipProgress, setFriendshipProgress] = useState<number>(0);
  const [typedCommand, setTypedCommand] = useState<string>('');
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const fullCommand = birthdayData.introTerminal.command;

  // Step 0: Real-time typing
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setStep(1), 350);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [fullCommand]);

  // Step 1: Progress memories
  useEffect(() => {
    if (step === 1) {
      let current = 0;
      const interval = setInterval(() => {
        current += 10;
        setMemoriesProgress(Math.min(current, 100));
        if (current >= 100) {
          clearInterval(interval);
          setTimeout(() => setStep(2), 300);
        }
      }, 45);
      return () => clearInterval(interval);
    }
  }, [step]);

  // Step 2: Progress friendship
  useEffect(() => {
    if (step === 2) {
      let current = 0;
      const interval = setInterval(() => {
        current += 10;
        setFriendshipProgress(Math.min(current, 100));
        if (current >= 100) {
          clearInterval(interval);
          setTimeout(() => setStep(3), 300);
        }
      }, 45);
      return () => clearInterval(interval);
    }
  }, [step]);

  // Step 3: Checking age
  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        setStep(4);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Step 4: Warning shown
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        setStep(5);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleProceed = () => {
    if (hasAnswered) return;
    setHasAnswered(true);
    setStep(6);
    setTimeout(() => {
      setStep(7);
      setTimeout(() => {
        onComplete();
      }, 1200);
    }, 500);
  };

  // Keyboard shortcut support (Y or Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (step === 5) {
        if (e.key === 'y' || e.key === 'Y' || e.key === 'Enter') {
          handleProceed();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, hasAnswered]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#050507] p-4 sm:p-6 md:p-8 selection:bg-amber-500 selection:text-black">
      {/* Background vignette & ambient warmth */}
      <div className="film-vignette absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Skip button for non-blocking navigation */}
      <button
        onClick={onComplete}
        className="absolute top-6 right-6 text-[11px] font-mono text-zinc-500 hover:text-zinc-300 transition-colors px-3 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/60 backdrop-blur-sm"
        aria-label="Salta introduzione"
      >
        Salta intro →
      </button>

      {/* Bespoke Terminal Window */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl rounded-2xl border border-zinc-800/80 bg-zinc-950/90 shadow-2xl backdrop-blur-md overflow-hidden font-mono text-sm leading-relaxed"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 px-5 py-3.5 bg-zinc-900/40">
          <div className="flex items-center space-x-2 text-xs text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-amber-400/80" />
            <span className="text-zinc-300 font-medium">terminal — birthday.sh</span>
          </div>
          <div className="text-[10px] text-zinc-600 font-mono tracking-wider">LEVEL 25 • SYSTEM</div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 sm:p-8 space-y-4 min-h-[320px] text-zinc-300">
          {/* Command Prompt */}
          <div className="flex items-center space-x-2.5 text-zinc-100">
            <span className="text-amber-400 font-bold">$</span>
            <span className="tracking-wide">{typedCommand}</span>
            {step === 0 && <span className="w-2 h-4 bg-amber-400 inline-block animate-terminal-cursor" />}
          </div>

          {/* Memories Loading */}
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-1.5"
            >
              <div className="text-xs text-zinc-400">{birthdayData.introTerminal.loadingMemoriesText}</div>
              <div className="flex items-center space-x-3 text-xs">
                <div className="w-44 sm:w-56 h-1.5 bg-zinc-850 rounded-full overflow-hidden bg-zinc-800">
                  <div
                    className="h-full bg-amber-400 transition-all duration-150 ease-out rounded-full"
                    style={{ width: `${memoriesProgress}%` }}
                  />
                </div>
                <span className="text-amber-400 font-mono">{memoriesProgress}%</span>
              </div>
            </motion.div>
          )}

          {/* Friendship Loading */}
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-1.5 pt-1"
            >
              <div className="text-xs text-zinc-400">{birthdayData.introTerminal.loadingFriendshipText}</div>
              <div className="flex items-center space-x-3 text-xs">
                <div className="w-44 sm:w-56 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 transition-all duration-150 ease-out rounded-full"
                    style={{ width: `${friendshipProgress}%` }}
                  />
                </div>
                <span className="text-amber-400 font-mono">{friendshipProgress}%</span>
              </div>
            </motion.div>
          )}

          {/* Checking Age */}
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-zinc-400 pt-1 flex items-center space-x-2"
            >
              <span>{birthdayData.introTerminal.checkingAgeText}</span>
              {step === 3 && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />}
            </motion.div>
          )}

          {/* Warning Message */}
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/[0.06] text-amber-200/90 space-y-1"
            >
              <div className="flex items-center space-x-2 font-bold text-amber-400 text-xs tracking-wider uppercase">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                <span>ATTENZIONE</span>
              </div>
              <div className="text-xs sm:text-sm pl-6 text-zinc-200">
                {birthdayData.introTerminal.warningText}
              </div>
            </motion.div>
          )}

          {/* Proceed Prompt */}
          {step >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-3 space-y-3"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-zinc-300 text-xs sm:text-sm">{birthdayData.introTerminal.promptText}</span>

                {!hasAnswered ? (
                  <button
                    onClick={handleProceed}
                    className="px-4 py-1.5 bg-amber-400 text-black font-semibold rounded-lg text-xs hover:bg-amber-300 active:scale-95 transition-all flex items-center space-x-1.5 shadow-lg shadow-amber-400/20 cursor-pointer"
                  >
                    <span>&gt; Y (Procedi)</span>
                  </button>
                ) : (
                  <span className="text-amber-400 font-bold text-sm">&gt; Y</span>
                )}
              </div>
            </motion.div>
          )}

          {/* Welcome Screen */}
          <AnimatePresence>
            {step >= 6 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-4 border-t border-zinc-800/80 space-y-2"
              >
                <div className="text-base sm:text-lg font-bold tracking-widest text-amber-300 uppercase">
                  {birthdayData.introTerminal.welcomeText}
                </div>
                <div className="text-xs text-zinc-500 flex items-center space-x-2">
                  <span>Inizializzazione della storia...</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
