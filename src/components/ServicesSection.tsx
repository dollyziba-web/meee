import React from 'react';
import { Palette, Globe, ArrowRight, Film, Monitor, Zap, Camera } from 'lucide-react';
import { ASSET_INVENTORY } from '../data/assetsInventory';

interface ServicesSectionProps {
  onNavigate: (route: string) => void;
  onSelectProject?: (projectId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate, onSelectProject }) => {
  const assetServiceAi = ASSET_INVENTORY['service_ai_commercial'];
  const assetServiceDesign = ASSET_INVENTORY['service_graphic_design'];
  const assetServiceWeb = ASSET_INVENTORY['service_website_design'];

  return (
    <section id="services" className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#08070D] overflow-hidden">
      
      {/* Dynamic ambient background glow orbs */}
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-[#8B5CF6]/12 blur-[160px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#211039]/70 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-[1550px] mx-auto">
        
        {/* HEADER SECTION TITLE WITH KINETIC TYPOGRAPHY */}
        <div className="reveal-on-scroll text-center max-w-4xl mx-auto mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#211039]/70 border border-[#8B5CF6]/50 text-[#C4A7FF] text-xs font-mono tracking-[0.28em] uppercase mb-5 shadow-[0_0_20px_rgba(139,92,246,0.3)] animate-soft-float">
            <Zap className="w-3.5 h-3.5 text-[#C4A7FF] animate-bounce" />
            <span>THE ZINAT PRODUCTION ECOSYSTEM // 2026</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F5F3FA] mb-6 leading-tight">
            <span>ENGINEERED FOR </span>
            <span className="text-shimmer">UNRIVALED IMPACT.</span>
          </h2>

          <p className="font-body text-[#B9B7C6] text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
            We deploy generative intelligence, surgical art direction, and spatial development to turn ambitious brand visions into industry-defining benchmarks.
          </p>
        </div>

        {/* =========================================================================
            SERVICE 01 — AI COMMERCIAL VIDEO PRODUCTION
            Visual Direction: SOURCED SUITABLE CINEMATIC CAMERA SYSTEM IMAGE
            ========================================================================= */}
        <div className="reveal-on-scroll mb-24 sm:mb-32 relative group">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#211039]/60 via-[#171026] to-[#08070D] border border-white/10 hover:border-[#8B5CF6]/60 transition-all duration-700 p-6 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.85)] animate-glow-pulse sweep-overlay">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Text / Scope Column */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-[#C4A7FF] font-mono text-sm font-bold shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    01
                  </span>
                  <span className="text-xs font-mono tracking-[0.32em] uppercase text-[#C4A7FF] font-semibold">
                    NEURAL COMMERCIAL SYNTHESIS
                  </span>
                </div>

                <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#F5F3FA] tracking-tight leading-[1.1]">
                  <span className="letter-bounce">HYPER-KINETIC</span>{' '}
                  <span className="text-shimmer">CINEMA.</span>
                  <br />
                  <span className="text-xl sm:text-2xl text-[#C4A7FF] font-semibold tracking-normal mt-1 block">
                    MEASURABLE BRAND CONVERSION.
                  </span>
                </h3>

                <p className="font-body text-[#B9B7C6] text-base sm:text-lg leading-relaxed">
                  We engineer cutting-edge AI commercial films that dissolve the frontier between human emotion and computational photorealism. From high-velocity footwear and automotive spectacles to luxury fashion campaigns, our neural production pipeline delivers Hollywood-grade cinematics in days—not months.
                </p>

                {/* Showcase Inspiration Tags */}
                <div className="pt-1">
                  <div className="text-xs font-mono text-[#F5F3FA]/70 uppercase tracking-wider mb-2.5">
                    Production Capabilities:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      '8K Generative CGI',
                      'Zero-G Fluid Dynamics',
                      'Virtual Camera Staging',
                      'Sneaker & Footwear Specs',
                      'High-Fashion Generative Spots',
                      'Spatial Audio Scoring',
                    ].map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-[#08070D]/90 border border-white/10 text-[#B9B7C6] hover:border-[#8B5CF6] hover:text-[#F5F3FA] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      if (onSelectProject) onSelectProject('zinat-sneaker-commercial');
                      onNavigate('/spotlight');
                    }}
                    data-cursor="pointer"
                    className="group/btn inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#8B5CF6] hover:bg-[#743BF6] text-white font-display text-xs sm:text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.45)] hover:shadow-[0_0_40px_rgba(139,92,246,0.8)]"
                  >
                    <Film className="w-4 h-4 text-white" />
                    <span>WATCH IN SPOTLIGHT THEATER</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* SUITABLE CINEMATIC CAMERA SYSTEM IMAGE (Replaced Video) */}
              <div className="lg:col-span-7 order-1 lg:order-2 relative">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] group sweep-overlay">
                  <img
                    src={assetServiceAi.url}
                    alt={assetServiceAi.alt}
                    className="w-full h-full object-cover image-zoom-kinetic"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08070D]/90 via-transparent to-black/30 pointer-events-none" />

                  {/* Floating Camera Spec Overlay */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#C4A7FF] flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5 text-[#C4A7FF]" />
                    <span>8K VIRTUAL PRODUCTION CAMERA</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15">
                    <span>ANAMORPHIC NEURAL OPTICS</span>
                    <span className="text-[#C4A7FF]">RAYTRACED VOLUMETRICS</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* =========================================================================
            SERVICE 02 — GRAPHIC DESIGN & BRAND ARCHITECTURE
            Visual Direction: SOURCED NEW EDITORIAL LUXURY IDENTITY IMAGE + REWRITTEN COPY
            ========================================================================= */}
        <div className="reveal-on-scroll mb-24 sm:mb-32 relative group">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-bl from-[#211039]/60 via-[#171026] to-[#08070D] border border-white/10 hover:border-[#C4A7FF]/60 transition-all duration-700 p-6 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.85)] animate-glow-pulse sweep-overlay">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Visual Column on Left (New Sourced High-End Visual) */}
              <div className="lg:col-span-7 relative">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-[0_25px_50px_rgba(0,0,0,0.9)] group sweep-overlay">
                  <img
                    src={assetServiceDesign.url}
                    alt={assetServiceDesign.alt}
                    className="w-full h-full object-cover image-zoom-kinetic"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#08070D]/90 via-transparent to-[#C4A7FF]/15 pointer-events-none" />

                  {/* Graphic Design Badges */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#F5F3FA] flex items-center gap-2">
                    <Palette className="w-3.5 h-3.5 text-[#C4A7FF]" />
                    <span>BESPOKE BRAND ARCHITECTURE</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15">
                    <span>CUSTOM TYPEFACES & PACKAGING</span>
                    <span className="text-[#C4A7FF]">LUXURY ARTIFACTS</span>
                  </div>
                </div>
              </div>

              {/* Text / Scope Column on Right */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#C4A7FF]/20 border border-[#C4A7FF]/40 flex items-center justify-center text-[#F5F3FA] font-mono text-sm font-bold shadow-[0_0_15px_rgba(196,167,255,0.3)]">
                    02
                  </span>
                  <span className="text-xs font-mono tracking-[0.32em] uppercase text-[#C4A7FF] font-semibold">
                    VISUAL ARCHITECTURE & IDENTITY
                  </span>
                </div>

                <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#F5F3FA] tracking-tight leading-[1.1]">
                  <span className="letter-bounce">ARCHITECTURAL</span>{' '}
                  <span className="text-shimmer">MAGNETISM.</span>
                  <br />
                  <span className="text-xl sm:text-2xl text-[#C4A7FF] font-semibold tracking-normal mt-1 block">
                    BRAND IDENTITIES BEYOND ORDINARY.
                  </span>
                </h3>

                <p className="font-body text-[#B9B7C6] text-base sm:text-lg leading-relaxed">
                  True distinction cannot be templated. We forge commanding brand design ecosystems, bespoke typography, luxury packaging architecture, and marketing campaigns designed to captivate top-tier markets and command premium perception.
                </p>

                {/* Showcase Inspiration Tags */}
                <div className="pt-1">
                  <div className="text-xs font-mono text-[#F5F3FA]/70 uppercase tracking-wider mb-2.5">
                    Design Deliverables:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Holistic Brand Identities',
                      'Bespoke Typographic Systems',
                      'Luxury Packaging Craft',
                      'High-Impact Billboard Campaigns',
                      'Editorial Brand Guidelines',
                      'Motion Art Direction',
                    ].map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-[#08070D]/90 border border-white/10 text-[#B9B7C6] hover:border-[#C4A7FF] hover:text-[#F5F3FA] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('/contact')}
                    data-cursor="pointer"
                    className="group/btn inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#171026] hover:bg-white text-[#F5F3FA] hover:text-[#08070D] border border-white/20 hover:border-white font-display text-xs sm:text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <span>COMMISSION BRAND IDENTITY</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* =========================================================================
            SERVICE 03 — WEBSITE DESIGN FOR BRANDS
            Visual Direction: SOURCED NEW SPATIAL UI INTERFACE IMAGE + REWRITTEN COPY
            ========================================================================= */}
        <div className="reveal-on-scroll relative group">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-[#211039]/60 via-[#171026] to-[#08070D] border border-white/10 hover:border-[#8B5CF6]/60 transition-all duration-700 p-6 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.85)] animate-glow-pulse sweep-overlay">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Text Column on Left */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-[#C4A7FF] font-mono text-sm font-bold shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    03
                  </span>
                  <span className="text-xs font-mono tracking-[0.32em] uppercase text-[#8B5CF6] font-semibold">
                    SPATIAL & INTERACTIVE WEB PLATFORMS
                  </span>
                </div>

                <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#F5F3FA] tracking-tight leading-[1.1]">
                  <span className="letter-bounce">SPATIAL</span>{' '}
                  <span className="text-shimmer">WORLDS.</span>
                  <br />
                  <span className="text-xl sm:text-2xl text-[#C4A7FF] font-semibold tracking-normal mt-1 block">
                    AWARD-GRADE DIGITAL DESTINATIONS.
                  </span>
                </h3>

                <p className="font-body text-[#B9B7C6] text-base sm:text-lg leading-relaxed">
                  We design and develop bespoke, high-performance web destinations that unite sculptural aesthetics, WebGL 3D motion, and friction-free user journeys. Every platform is tailored to leave an indelible impression and convert discerning visitors into dedicated brand advocates.
                </p>

                {/* Showcase Inspiration Tags */}
                <div className="pt-1">
                  <div className="text-xs font-mono text-[#F5F3FA]/70 uppercase tracking-wider mb-2.5">
                    Engineering Architecture:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Custom WebGL Experiences',
                      'Luxury Brand Flagships',
                      'High-Conversion Architecture',
                      'Kinetic Micro-Interactions',
                      'Sub-Second Performance',
                      'Responsive Precision Grid',
                    ].map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-[#08070D]/90 border border-white/10 text-[#B9B7C6] hover:border-[#8B5CF6] hover:text-[#F5F3FA] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('/contact')}
                    data-cursor="pointer"
                    className="group/btn inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#C4A7FF] text-[#08070D] font-display text-xs sm:text-sm tracking-[0.2em] uppercase font-extrabold transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.8)]"
                  >
                    <Monitor className="w-4 h-4 text-[#08070D]" />
                    <span>BUILD YOUR DIGITAL PLATFORM</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Sourced New Spatial UI Image Column on Right */}
              <div className="lg:col-span-7 order-1 lg:order-2 relative">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 shadow-[0_25px_50px_rgba(0,0,0,0.9)] group sweep-overlay">
                  <img
                    src={assetServiceWeb.url}
                    alt={assetServiceWeb.alt}
                    className="w-full h-full object-cover image-zoom-kinetic"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#08070D]/90 via-transparent to-[#8B5CF6]/15 pointer-events-none" />

                  {/* Glass Interface Mockup HUD Details */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#F5F3FA]">
                    <Globe className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>THREE.JS / WEBGL MOTION ENGINE</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15">
                    <span>IMMERSIVE DIGITAL CRAFT</span>
                    <span className="text-[#C4A7FF]">RESPONSIVE ARCHITECTURE</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
