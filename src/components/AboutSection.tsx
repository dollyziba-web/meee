import React from 'react';
import { ArrowUpRight, Cpu, Layers, Sparkles, Compass } from 'lucide-react';
import { ASSET_INVENTORY } from '../data/assetsInventory';

interface AboutSectionProps {
  onNavigate: (route: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const asset = ASSET_INVENTORY['about_heroic'];

  return (
    <section id="about" className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#08070D] overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Ambient background glow accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#211039]/60 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* SECTION TICKER & TITLE */}
        <div className="reveal-on-scroll border-b border-white/[0.08] pb-8 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#8B5CF6] mb-3">
            <span className="w-6 h-[1px] bg-[#8B5CF6]" />
            STUDIO IDENTITY
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F5F3FA]">
            <span className="letter-bounce">WE</span> <span className="letter-bounce">ARE</span>{' '}
            <span className="text-shimmer">ZINAT STUDIO.</span>
          </h1>
        </div>

        {/* REFINED EDITORIAL COMPOSITION */}
        <div className="reveal-on-scroll delay-200 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Subtle Relevant Studio Artwork (Left Span) */}
          <div className="lg:col-span-6 relative group">
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] sweep-overlay animate-glow-pulse">
              <img
                src={asset.url}
                alt={asset.alt}
                className="w-full h-full object-cover grayscale-[15%] contrast-110 group-hover:grayscale-0 image-zoom-kinetic"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#08070D]/90 via-transparent to-[#8B5CF6]/15 pointer-events-none" />
              
              {/* Studio Stamp Badge */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C4A7FF]" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#F5F3FA] uppercase">
                  ART DIRECTION & CRAFTSMANSHIP
                </span>
              </div>

              {/* Bottom Architectural Spec Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#08070D]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono text-[#B9B7C6]">
                <span>GLOBAL CREATIVE LAB</span>
                <span className="text-[#8B5CF6]">EST. 2026</span>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#8B5CF6]/15 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Core Studio Manifesto (Right Span) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-7">
            
            {/* Suggested Brand Statement */}
            <div className="space-y-5">
              <p className="font-display font-medium text-lg sm:text-xl lg:text-2xl text-[#F5F3FA] leading-snug tracking-tight border-l-2 border-[#8B5CF6] pl-6 py-1">
                ZINAT STUDIO is an independent creative studio combining artificial intelligence, visual storytelling, and modern digital design to help brands stand out.
              </p>

              <p className="font-body text-[#B9B7C6] text-base sm:text-lg leading-relaxed">
                We specialize in AI-powered commercial production, graphic design, and website design, transforming creative ideas into striking visual experiences that connect brands with their audiences.
              </p>

              <p className="font-body text-[#B9B7C6] text-base sm:text-lg leading-relaxed">
                From cinematic advertising to distinctive visual identities and immersive websites, we bring creativity and technology together to build memorable brand experiences.
              </p>
            </div>

            {/* Studio Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#171026] border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-colors">
                <div className="flex items-center gap-2 text-sm font-display font-semibold text-[#F5F3FA] mb-1">
                  <Cpu className="w-4 h-4 text-[#8B5CF6]" />
                  <span>AI & Cinema</span>
                </div>
                <p className="text-xs text-[#B9B7C6] leading-relaxed">
                  Synthesizing neural video workflows with traditional cinematic direction.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#171026] border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-colors">
                <div className="flex items-center gap-2 text-sm font-display font-semibold text-[#F5F3FA] mb-1">
                  <Layers className="w-4 h-4 text-[#C4A7FF]" />
                  <span>Design Craft</span>
                </div>
                <p className="text-xs text-[#B9B7C6] leading-relaxed">
                  Meticulous brand identity architecture and modern digital platforms.
                </p>
              </div>
            </div>

            {/* Navigation CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/services')}
                data-cursor="pointer"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#8B5CF6] hover:bg-[#743BF6] text-white font-display text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('/contact')}
                data-cursor="pointer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#101018] hover:bg-[#171026] border border-white/15 hover:border-[#8B5CF6]/60 text-[#F5F3FA] font-display text-xs sm:text-sm tracking-[0.18em] uppercase transition-colors"
              >
                <Compass className="w-4 h-4 text-[#C4A7FF]" />
                <span>CONNECT WITH STUDIO</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
