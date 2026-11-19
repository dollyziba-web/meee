import React from 'react';
import { ArrowRight, Film, Sparkles, Layers } from 'lucide-react';
import { ASSET_INVENTORY } from '../data/assetsInventory';

interface HomeDualFeatureSectionProps {
  onNavigate: (route: string) => void;
}

export const HomeDualFeatureSection: React.FC<HomeDualFeatureSectionProps> = ({ onNavigate }) => {
  const assetCinema = ASSET_INVENTORY['home_pillar_cinema'];
  const assetArchitecture = ASSET_INVENTORY['home_pillar_architecture'];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#08070D] overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#8B5CF6]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#211039]/60 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-[1550px] mx-auto">
        
        {/* SECTION HEADER */}
        <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#211039]/70 border border-[#8B5CF6]/40 text-[#C4A7FF] text-xs font-mono tracking-[0.28em] uppercase mb-4 shadow-[0_0_20px_rgba(139,92,246,0.25)] animate-soft-float">
            <Sparkles className="w-3.5 h-3.5 text-[#C4A7FF]" />
            <span>DUAL CREATIVE PILLARS // ZINAT STUDIO</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-[#F5F3FA] mb-6 leading-tight">
            <span>THE SYNTHESIS OF </span>
            <span className="text-shimmer">ART & INTELLIGENCE.</span>
          </h2>

          <p className="font-body text-[#B9B7C6] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We bridge hyper-kinetic generative filmmaking with architectural visual design to deliver iconic brand experiences for industry leaders.
          </p>
        </div>

        {/* TWO MUTUALLY HARMONIOUS RELATED FEATURES */}
        <div className="reveal-on-scroll delay-200 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* PILLAR 01: SYNTHETIC CINEMA & NEURAL MOTION */}
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#211039]/60 via-[#171026] to-[#08070D] border border-white/10 hover:border-[#8B5CF6]/60 transition-all duration-700 p-6 sm:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] animate-glow-pulse sweep-overlay">
            
            <div>
              {/* Media Container with Sourced Related Image 01 */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.9)] mb-8 sweep-overlay">
                <img
                  src={assetCinema.url}
                  alt={assetCinema.alt}
                  className="w-full h-full object-cover image-zoom-kinetic"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08070D]/90 via-transparent to-black/25 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#C4A7FF] flex items-center gap-2">
                  <Film className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>NEURAL CINEMA SPEC</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15">
                  <span>8K AI COMMERCIALS</span>
                  <span className="text-[#C4A7FF]">ZERO-G DYNAMICS</span>
                </div>
              </div>

              {/* Scope & Narrative */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-[#C4A7FF] font-mono text-xs font-bold">
                    01
                  </span>
                  <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C4A7FF] font-semibold">
                    SYNTHETIC CINEMA & NEURAL MOTION
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F5F3FA] tracking-tight leading-snug">
                  <span className="letter-bounce">NEURAL</span>{' '}
                  <span className="text-shimmer">MOTION.</span>
                  <br />
                  <span className="text-lg sm:text-xl text-[#C4A7FF] font-semibold">
                    COMMERCIALS BEYOND PHYSICAL CONSTRAINTS.
                  </span>
                </h3>

                <p className="font-body text-[#B9B7C6] text-sm sm:text-base leading-relaxed">
                  We pioneer AI commercial filmmaking for forward-thinking brands. By combining neural diffusion, computational fluid physics, and virtual lighting, we craft photorealistic broadcast campaigns that break the boundaries of conventional production.
                </p>

                {/* Capability Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['8K AI Commercials', 'Sneaker Motion Specs', 'Virtual Production', 'Zero-G Physics'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-[#08070D]/90 border border-white/10 text-[#B9B7C6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-8">
              <button
                onClick={() => onNavigate('/spotlight')}
                data-cursor="pointer"
                className="group/btn inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#8B5CF6] hover:bg-[#743BF6] text-white font-display text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.8)]"
              >
                <span>EXPLORE COMMERCIAL REPERTOIRE</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* PILLAR 02: BRAND ARCHITECTURE & SPATIAL PLATFORMS */}
          <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-bl from-[#211039]/60 via-[#171026] to-[#08070D] border border-white/10 hover:border-[#C4A7FF]/60 transition-all duration-700 p-6 sm:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] animate-glow-pulse sweep-overlay">
            
            <div>
              {/* Media Container with Sourced Related Image 02 */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.9)] mb-8 sweep-overlay">
                <img
                  src={assetArchitecture.url}
                  alt={assetArchitecture.alt}
                  className="w-full h-full object-cover image-zoom-kinetic"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08070D]/90 via-transparent to-black/25 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#F5F3FA] flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#C4A7FF]" />
                  <span>BRAND ARCHITECTURE SPEC</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15">
                  <span>BESPOKE TYPOGRAPHY</span>
                  <span className="text-[#C4A7FF]">SPATIAL WEBGL</span>
                </div>
              </div>

              {/* Scope & Narrative */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#C4A7FF]/20 border border-[#C4A7FF]/40 flex items-center justify-center text-[#F5F3FA] font-mono text-xs font-bold">
                    02
                  </span>
                  <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C4A7FF] font-semibold">
                    BRAND ARCHITECTURE & SPATIAL PLATFORMS
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F5F3FA] tracking-tight leading-snug">
                  <span className="letter-bounce">VISUAL</span>{' '}
                  <span className="text-shimmer">MAGNETISM.</span>
                  <br />
                  <span className="text-lg sm:text-xl text-[#C4A7FF] font-semibold">
                    BESPOKE IDENTITIES & DIGITAL FLAGSHIPS.
                  </span>
                </h3>

                <p className="font-body text-[#B9B7C6] text-sm sm:text-base leading-relaxed">
                  True distinction demands uncompromising craftsmanship. We forge bespoke typography, luxury packaging systems, and spatial WebGL platforms designed to establish commanding brand presence and turn passive viewers into devoted clients.
                </p>

                {/* Capability Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Custom Typefaces', 'Luxury Packaging', 'WebGL Destinations', 'Conversion Architecture'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-[#08070D]/90 border border-white/10 text-[#B9B7C6]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-8">
              <button
                onClick={() => onNavigate('/services')}
                data-cursor="pointer"
                className="group/btn inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#171026] hover:bg-white text-[#F5F3FA] hover:text-[#08070D] border border-white/20 hover:border-white font-display text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <span>VIEW STUDIO DISCIPLINES</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
