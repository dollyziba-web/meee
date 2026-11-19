import React, { useState, useMemo } from 'react';
import { Play, Sparkles, Filter, Film } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES, VideoCategory, PortfolioProject } from '../data/portfolioData';

interface SpotlightSectionProps {
  onOpenVideo: (project: PortfolioProject) => void;
  onNavigate: (route: string) => void;
}

export const SpotlightSection: React.FC<SpotlightSectionProps> = ({ onOpenVideo }) => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>('ALL WORK');

  // Filter projects by selected category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'ALL WORK') {
      return PORTFOLIO_PROJECTS;
    }
    return PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="spotlight" className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#08070D] overflow-hidden min-h-screen">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#8B5CF6]/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#211039]/60 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto">
        
        {/* HEADER SECTION */}
        <div className="reveal-on-scroll text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#211039]/70 border border-[#8B5CF6]/50 text-[#C4A7FF] text-xs font-mono tracking-[0.28em] uppercase mb-4 shadow-[0_0_20px_rgba(139,92,246,0.3)] animate-soft-float">
            <Sparkles className="w-3.5 h-3.5 text-[#C4A7FF] animate-spin" style={{ animationDuration: '6s' }} />
            <span>CINEMATIC REPERTOIRE // SPOTLIGHT</span>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#F5F3FA] mb-4">
            <span className="letter-bounce">SPOT</span><span className="text-shimmer">LIGHT</span>
          </h1>

          <h2 className="font-display font-semibold text-lg sm:text-2xl text-[#C4A7FF] tracking-[0.2em] uppercase mb-6">
            A COLLECTION OF VISUAL STORIES & AI COMMERCIALS.
          </h2>

          <p className="font-body text-[#B9B7C6] text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Step into our world of synthetic motion and visual storytelling. Discover broadcast-grade AI commercials, high-velocity footwear spots, and luxury brand experiences.
          </p>

          {/* Special Commercial Premieres Banner */}
          <div className="mt-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#8B5CF6]/20 via-[#211039] to-[#8B5CF6]/20 border border-[#8B5CF6]/40 shadow-[0_0_25px_rgba(139,92,246,0.25)] animate-pulse">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono font-semibold text-[#F5F3FA] uppercase tracking-wider">
              NEW PREMIERES: 8 SIGNATURE ZINAT STUDIO COMMERCIALS & ANIMATIONS
            </span>
          </div>
        </div>

        {/* =========================================================================
            CATEGORY FILTERS (Working interactive filtering system)
            ========================================================================= */}
        <div className="reveal-on-scroll mb-12">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B9B7C6]">
              <Filter className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>DISCIPLINE SHOWCASE ({filteredProjects.length} PRODUCTIONS)</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  data-cursor="pointer"
                  className={`px-4 sm:px-5 py-2 rounded-full font-display text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'bg-[#8B5CF6] text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.5)] scale-105'
                      : 'bg-[#171026] text-[#B9B7C6] hover:text-[#F5F3FA] border border-white/10 hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            CINEMATIC VIDEO GALLERY GRID
            (Generous proportions, unique thumbnails, clean play interactions)
            ========================================================================= */}
        <div className="reveal-on-scroll delay-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const isWide = idx === 0 || idx % 5 === 0;
            return (
              <div
                key={project.id}
                onClick={() => onOpenVideo(project)}
                data-cursor="play"
                className={`group relative rounded-2xl overflow-hidden glass-panel border hover:border-[#8B5CF6]/70 transition-all duration-500 cursor-pointer shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:-translate-y-2 sweep-overlay ${
                  project.featured
                    ? 'border-[#8B5CF6]/60 shadow-[0_0_40px_rgba(139,92,246,0.35)]'
                    : 'border-white/10'
                } ${isWide ? 'lg:col-span-2' : 'col-span-1'}`}
              >
                {/* Media Container with Exact First Frame of Video & Smooth Hover Preview */}
                <div className={`relative ${isWide ? 'aspect-[16/9]' : 'aspect-[16/10]'} overflow-hidden bg-black`}>
                  <video
                    src={`${project.videoSrc}#t=0.001`}
                    preload="metadata"
                    muted
                    playsInline
                    loop
                    onMouseEnter={(e) => {
                      e.currentTarget.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                    className="w-full h-full object-cover image-zoom-kinetic"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08070D] via-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity pointer-events-none" />

                  {/* Play Indicator in center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-[#8B5CF6]/80 group-hover:bg-[#8B5CF6] text-white shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-300 group-hover:scale-110 opacity-90 group-hover:opacity-100">
                      <Play className="w-5 sm:w-6 h-5 sm:h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Top Category and Duration Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider uppercase text-[#C4A7FF]">
                        {project.category}
                      </span>
                      {project.id === 'zinat-talking-fruit' && (
                        <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#C4A7FF] text-[#08070D] text-[10px] font-mono font-black tracking-wider uppercase shadow-[0_0_15px_rgba(139,92,246,0.9)] animate-pulse">
                          🔥 AI TALKING FRUIT
                        </span>
                      )}
                      {project.id === 'zinat-baby-podcast' && (
                        <span className="px-2.5 py-1 rounded-full bg-[#8B5CF6] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(139,92,246,0.8)] animate-pulse">
                          🔥 AI BABY PODCAST
                        </span>
                      )}
                      {project.id === 'zinat-ai-miniature' && (
                        <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#C4A7FF] text-[#08070D] text-[10px] font-mono font-black tracking-wider uppercase shadow-[0_0_15px_rgba(139,92,246,0.9)] animate-pulse">
                          🔥 AI MINIATURE WORLD
                        </span>
                      )}
                      {project.id === 'zinat-stickman-animation' && (
                        <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#C4A7FF] text-[#08070D] text-[10px] font-mono font-black tracking-wider uppercase shadow-[0_0_15px_rgba(139,92,246,0.9)] animate-pulse">
                          🔥 2D STICKMAN ACTION
                        </span>
                      )}
                      {project.id === 'zinat-sneaker-commercial' && (
                        <span className="px-2.5 py-1 rounded-full bg-[#8B5CF6] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(139,92,246,0.8)] animate-pulse">
                          🔥 SNEAKER SPEC
                        </span>
                      )}
                      {project.id === 'zinat-lamborghini-commercial' && (
                        <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#C4A7FF] text-[#08070D] text-[10px] font-mono font-black tracking-wider uppercase shadow-[0_0_15px_rgba(139,92,246,0.9)] animate-pulse">
                          🔥 LAMBORGHINI SPEC
                        </span>
                      )}
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#F5F3FA]">
                      {project.duration}
                    </span>
                  </div>

                  {/* Bottom Info Details */}
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <div className="text-[10px] font-mono text-[#7A7589] uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Film className="w-3 h-3 text-[#8B5CF6]" />
                      <span>{project.client} // {project.year}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F3FA] group-hover:text-[#C4A7FF] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#B9B7C6] mt-1 line-clamp-1 max-w-xl">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
