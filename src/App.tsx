import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IntroTerminal } from './components/IntroTerminal';
import { Level25 } from './components/Level25';
import { Timeline } from './components/Timeline';
import { InsideJokes } from './components/InsideJokes';
import { Achievements } from './components/Achievements';
import { PersonalMessage } from './components/PersonalMessage';
import { BookReveal } from './components/BookReveal';
import { FakeConclusion } from './components/FakeConclusion';
import { SurpriseReveal } from './components/SurpriseReveal';
import { VideoSection } from './components/VideoSection';
import { FinalScreen } from './components/FinalScreen';
import { EasterEggModal } from './components/EasterEggModal';
import { AudioToggle } from './components/AudioToggle';

export const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // Secret console message for developer curiosity
    console.log(
      "%c✨ LEVEL 25 — BUON COMPLEANNO! ✨\n%cQuesta esperienza è stata costruita con cura e affetto artigianale per un amico unico.\nCheat Code attivo: ↑ ↑ ↓ ↓ ← → ← → B A",
      "color: #f59e0b; font-size: 16px; font-weight: 800;",
      "color: #a1a1aa; font-size: 12px; font-family: monospace;"
    );
  }, []);

  const handleScrollToVideo = () => {
    const videoElement = document.getElementById('video-experience');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoEnded = () => {
    const finalElement = document.getElementById('final-screen');
    if (finalElement) {
      finalElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-zinc-100 font-sans selection:bg-amber-400/30 selection:text-amber-200">
      <AnimatePresence mode="wait">
        {!introFinished ? (
          <motion.div
            key="terminal-intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          >
            <IntroTerminal onComplete={() => setIntroFinished(true)} />
          </motion.div>
        ) : (
          <motion.main
            key="main-experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative"
          >
            {/* Top ambient noise texture */}
            <div className="fixed inset-0 bg-noise opacity-40 pointer-events-none -z-20" />

            {/* Scene 2: 25 anni */}
            <Level25 />

            {/* Scene 3: Timeline & Ricordi */}
            <Timeline />

            {/* Scene 4: Inside jokes */}
            <InsideJokes />

            {/* Scene 5: Achievements */}
            <Achievements />

            {/* Scene 6: Il momento serio */}
            <PersonalMessage />

            {/* Scene 7: Il libro */}
            <BookReveal />

            {/* Scene 8: La falsa conclusione */}
            <FakeConclusion />

            {/* Scene 9: La sorpresa */}
            <SurpriseReveal onScrollToVideo={handleScrollToVideo} />

            {/* Scene 10: Il video (Climax) */}
            <VideoSection onVideoEnded={handleVideoEnded} />

            {/* Scene 11: Finale */}
            <FinalScreen />

            {/* Audio Toggle button (subtle, muted by default) */}
            <AudioToggle />

            {/* Hidden Konami code Easter Egg */}
            <EasterEggModal />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
