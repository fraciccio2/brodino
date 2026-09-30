import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw, 
  AlertCircle
} from 'lucide-react';
import { birthdayData } from '../data/birthday';

interface VideoSectionProps {
  onVideoEnded?: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onVideoEnded }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const controlsTimeout = useRef<number | null>(null);

  const videoData = birthdayData.video;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch(() => {
        setHasError(true);
      });
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
    setHasError(false);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const time = parseFloat(e.target.value);
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleFullscreen = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen().catch(() => {});
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (onVideoEnded) {
      onVideoEnded();
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    if (isPlaying) {
      controlsTimeout.current = window.setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  useEffect(() => {
    return () => {
      if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    };
  }, []);

  return (
    <section id="video-experience" className="relative py-28 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto my-12">
      <div className="space-y-12">
        {/* Header note before video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto space-y-3"
        >
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-100">
            {videoData.note}
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-serif italic">
            {videoData.title} da parte di <span className="text-amber-300 font-medium">{birthdayData.book.author}</span>
          </p>
        </motion.div>

        {/* Video Player Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.9)] aspect-[9/16] w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] max-h-[82vh] mx-auto flex items-center justify-center group"
        >
          {/* Native HTML5 Video Element */}
          <video
            ref={videoRef}
            src={videoData.src}
            poster={videoData.poster}
            playsInline
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onError={() => setHasError(true)}
            onEnded={handleEnded}
            onClick={togglePlay}
            className={`w-full h-full object-cover cursor-pointer ${hasError ? 'hidden' : 'block'}`}
          />

          {/* Graceful Fallback if video file not yet present */}
          {hasError && (
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-zinc-900 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="max-w-md space-y-2">
                <h3 className="text-base sm:text-lg font-medium text-zinc-200">
                  {videoData.fallbackMessage}
                </h3>
                <p className="text-xs text-zinc-500 font-mono">
                  Posiziona il video in <span className="text-amber-300">public/video/birthday-message.mp4</span>
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHasError(false);
                  if (videoRef.current) {
                    videoRef.current.load();
                  }
                }}
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono transition-colors flex items-center space-x-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Riprova caricamento</span>
              </button>
            </div>
          )}

          {/* Big Play Button Overlay on Poster */}
          {!isPlaying && !hasError && (
            <div 
              onClick={togglePlay}
              className="absolute inset-0 bg-black/35 backdrop-blur-[1px] flex items-center justify-center cursor-pointer transition-opacity"
            >
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-2xl shadow-amber-400/30 pl-1 transition-all"
                aria-label="Riproduci videomessaggio"
              >
                <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-black" />
              </motion.button>
            </div>
          )}

          {/* Custom Player Controls Overlay */}
          {!hasError && hasStarted && (
            <div
              onClick={(e) => e.stopPropagation()}
              className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3.5 sm:p-5 transition-opacity duration-300 ${
                showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Progress Slider */}
              <div className="mb-2 sm:mb-3 flex items-center space-x-2">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  aria-label="Avanzamento video"
                />
              </div>

              {/* Controls bar */}
              <div className="flex items-center justify-between text-zinc-300">
                <div className="flex items-center space-x-2.5 sm:space-x-3.5">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="p-1.5 hover:text-white transition-colors"
                    aria-label={isPlaying ? 'Pausa' : 'Riproduci'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                  </button>

                  {/* Volume/Mute */}
                  <button
                    onClick={(e) => toggleMute(e)}
                    className="p-1.5 hover:text-white transition-colors"
                    aria-label={isMuted ? 'Attiva audio' : 'Disattiva audio'}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>

                  {/* Time display */}
                  <div className="text-xs font-mono text-zinc-400">
                    <span>{formatTime(currentTime)}</span>
                    <span className="mx-1">/</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Fullscreen */}
                  <button
                    onClick={(e) => handleFullscreen(e)}
                    className="p-1.5 hover:text-white transition-colors"
                    aria-label="Schermo intero"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
