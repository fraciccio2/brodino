import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioToggleProps {
  ambientSrc?: string;
}

export const AudioToggle: React.FC<AudioToggleProps> = ({ 
  ambientSrc = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3" 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Ensure ambient audio is paused by default
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay policy or error
        setIsPlaying(false);
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <audio ref={audioRef} src={ambientSrc} preload="none" />
      <button
        onClick={toggleAudio}
        className="flex items-center space-x-2 px-3 py-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800/90 text-zinc-400 hover:text-amber-300 border border-zinc-800 backdrop-blur-md shadow-lg transition-all duration-300 text-xs font-mono group"
        title={isPlaying ? "Disattiva musica d'ambiente" : "Attiva musica d'ambiente (rilassante)"}
        aria-label={isPlaying ? "Disattiva musica d'ambiente" : "Attiva musica d'ambiente"}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="hidden sm:inline">Musica ON</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400" />
            <span className="hidden sm:inline text-zinc-500 group-hover:text-zinc-400">Musica OFF</span>
          </>
        )}
      </button>
    </div>
  );
};
