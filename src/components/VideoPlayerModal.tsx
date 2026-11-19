import React, { useRef, useState, useEffect, useCallback } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Minimize, Film } from 'lucide-react';
import { PortfolioProject } from '../data/portfolioData';

interface VideoPlayerModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ project, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<number | null>(null);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, handleKeyDown]);

  // Reset and stop when project changes or unmounts
  useEffect(() => {
    if (project && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.volume = volume;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, [project]);

  if (!project) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setCurrentTime(curr);
    setDuration(dur);
    setProgress((curr / dur) * 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekPercentage = parseFloat(e.target.value);
    const targetTime = (seekPercentage / 100) * duration;
    videoRef.current.currentTime = targetTime;
    setProgress(seekPercentage);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = window.setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Cinematic Player: ${project.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-2xl transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-2xl bg-[#08070D] border border-white/10 shadow-[0_0_80px_rgba(139,92,246,0.25)] overflow-hidden"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#171026]/90 border-b border-white/[0.08] backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#C4A7FF] text-[11px] font-mono tracking-wider uppercase">
              <Film className="w-3 h-3" />
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#B9B7C6] hidden sm:inline">
              Client: <strong className="text-[#F5F3FA]">{project.client}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#8B5CF6] bg-[#211039] px-2.5 py-1 rounded border border-white/[0.08]">
              {project.year}
            </span>
            <button
              onClick={onClose}
              aria-label="Close cinematic player"
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-[#F5F3FA] hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Surface */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[460px]">
          <video
            ref={videoRef}
            src={`${project.videoSrc}#t=0.001`}
            preload="auto"
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
            className="w-full h-full max-h-[68vh] object-contain cursor-pointer"
          />

          {/* Large Center Play / Pause Indicator on overlay */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              aria-label="Play video"
              className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#8B5CF6]/85 hover:bg-[#8B5CF6] text-white flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.7)] backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
          )}

          {/* Interactive Player Controls (Fade on mouse stop) */}
          <div
            className={`absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-300 z-10 ${
              showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Timeline Progress Slider */}
            <div className="relative mb-3 flex items-center">
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleSeek}
                aria-label="Seek video position"
                className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#8B5CF6] focus:outline-none"
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-sm text-[#F5F3FA]">
              <div className="flex items-center gap-3 sm:gap-5">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="p-1.5 hover:text-[#C4A7FF] transition-colors focus:outline-none"
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                </button>

                <div className="flex items-center gap-2 group">
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                    className="p-1.5 hover:text-[#C4A7FF] transition-colors focus:outline-none"
                  >
                    {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    aria-label="Volume slider"
                    className="w-16 sm:w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#8B5CF6]"
                  />
                </div>

                <div className="text-xs font-mono text-[#B9B7C6]">
                  <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleFullscreen}
                  aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                  className="p-1.5 hover:text-[#C4A7FF] transition-colors focus:outline-none"
                >
                  {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Details Footer */}
        <div className="px-5 py-4 bg-[#171026] border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-display font-semibold text-lg text-[#F5F3FA]">
              {project.title}
            </h3>
            <p className="text-xs text-[#B9B7C6] mt-0.5 line-clamp-1 max-w-2xl">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#211039] border border-white/[0.06] text-[#B9B7C6]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
