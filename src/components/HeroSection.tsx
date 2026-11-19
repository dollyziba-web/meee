import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Play, Compass, Sparkles, ChevronDown } from 'lucide-react';
import { ChromeOrbitSculpture } from './ChromeOrbitSculpture';
import { ASSET_INVENTORY } from '../data/assetsInventory';

interface HeroSectionProps {
  onNavigate: (route: string) => void;
  onOpenVideo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenVideo }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
      // 5. SMOOTH RESET: Gradually return to neutral position when cursor leaves
      setMousePos({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('blur', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('blur', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full pt-[88px] sm:pt-[96px] pb-10 px-6 sm:px-10 lg:px-14 flex flex-col justify-between overflow-hidden bg-[#07070B] select-none">
      
      {/* =========================================================================
          CINEMATIC ATMOSPHERIC DETAILS (Grid, Ultraviolet Haze, Vignette)
          ========================================================================= */}
      {/* Fine technical background grid fading into obsidian darkness */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #F6F4FA 1px, transparent 1px), linear-gradient(to bottom, #F6F4FA 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 40%, transparent 100%)'
        }}
      />

      {/* Atmospheric Ultraviolet Ambient Light Blooms */}
      <div className="absolute top-[28%] right-[16%] w-[680px] h-[680px] bg-[#8755FF]/14 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[15%] right-[32%] w-[420px] h-[420px] bg-[#C8A9FF]/8 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-[18%] left-[8%] w-[450px] h-[450px] bg-[#8755FF]/6 blur-[140px] rounded-full pointer-events-none" />

      {/* =========================================================================
          MAIN HERO WORKSPACE (Two-Column Desktop Master Composition)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1700px] mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* ---------------------------------------------------------------------
            LEFT HALF: HEADLINE, EYEBROW, DESCRIPTION & THREE ACTION BUTTONS
            --------------------------------------------------------------------- */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-7 sm:space-y-8 max-w-2xl lg:max-w-none pt-4 lg:pt-0">
          
          {/* Eyebrow Label: ✦ NEXT-GEN AI PRODUCTION & BRAND ARCHITECTURE */}
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#101018]/90 border border-[#8755FF]/35 shadow-[0_0_20px_rgba(135,85,255,0.2)] backdrop-blur-md self-start transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C8A9FF]" />
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.26em] text-[#F6F4FA]">
              NEXT-GEN AI PRODUCTION & BRAND ARCHITECTURE
            </span>
          </div>

          {/* EXACT MAIN HEADLINE:
              WE TURN
              IMAGINATION
              INTO VISUAL REALITY.
          */}
          <h1
            className={`font-display font-extrabold text-[42px] sm:text-[62px] md:text-[72px] xl:text-[84px] tracking-[-0.03em] leading-[1.04] text-[#F6F4FA] transition-all duration-1000 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="block text-[#F6F4FA]">
              <span className="letter-bounce">WE</span> <span className="letter-bounce">TURN</span>
            </span>
            <span className="block text-shimmer-fast drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]">
              IMAGINATION
            </span>
            <span className="block text-[#F6F4FA]">
              <span className="letter-bounce">INTO</span> <span className="letter-bounce">VISUAL</span> <span className="letter-bounce">REALITY.</span>
            </span>
          </h1>

          {/* EXACT SUPPORTING PARAGRAPH */}
          <p
            className={`font-body text-[#C6C3D0] text-base sm:text-lg xl:text-xl leading-relaxed max-w-xl transition-all duration-1000 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            An independent creative studio crafting extraordinary AI commercials, striking visual identities and immersive digital experiences for ambitious brands.
          </p>

          {/* HERO CALL-TO-ACTION BUTTONS (Three deliberate actions) */}
          <div
            className={`flex flex-wrap items-center gap-4 sm:gap-5 pt-1 transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Primary CTA: EXPLORE OUR WORK ↗ */}
            <button
              onClick={() => onNavigate('/spotlight')}
              data-cursor="pointer"
              className="group relative px-7 sm:px-8 py-4 rounded-full bg-gradient-to-r from-[#8755FF] via-[#743BF6] to-[#8755FF] text-white font-display font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(135,85,255,0.45)] hover:shadow-[0_0_50px_rgba(135,85,255,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />
            </button>

            {/* Secondary CTA: LET'S CREATE SOMETHING */}
            <button
              onClick={() => onNavigate('/contact')}
              data-cursor="pointer"
              className="group px-7 py-4 rounded-full bg-[#101018]/90 hover:bg-[#171522] border border-white/15 hover:border-[#8755FF]/70 text-[#F6F4FA] hover:text-white font-display font-medium text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(135,85,255,0.25)] flex items-center gap-2.5 active:scale-95"
            >
              <Compass className="w-4 h-4 text-[#C8A9FF] group-hover:rotate-45 transition-transform duration-300" />
              <span>LET'S CREATE SOMETHING</span>
            </button>

            {/* Showreel CTA: WATCH SHOWREEL ▶ */}
            {onOpenVideo && (
              <button
                onClick={onOpenVideo}
                data-cursor="play"
                className="group flex items-center gap-2.5 px-4 py-3 rounded-full text-[#C8A9FF] hover:text-[#F6F4FA] font-display text-xs tracking-[0.2em] uppercase transition-colors"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8755FF]/20 border border-[#8755FF]/40 text-[#C8A9FF] group-hover:bg-[#8755FF] group-hover:text-white group-hover:scale-110 shadow-[0_0_15px_rgba(135,85,255,0.3)] transition-all">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>WATCH SHOWREEL ▶</span>
              </button>
            )}

          </div>

        </div>

        {/* ---------------------------------------------------------------------
            RIGHT HALF: THE CHROME ORBIT 3D SCULPTURE & EXACTLY TWO FLOATING PORTFOLIO WINDOWS
            (Well-balanced container, non-clipped with ample margins from viewport right edge)
            --------------------------------------------------------------------- */}
        <div className="lg:col-span-6 relative w-full max-w-[640px] mx-auto lg:ml-auto lg:mr-0 h-[450px] sm:h-[540px] lg:h-[620px] xl:h-[660px] flex items-center justify-center pr-2 sm:pr-6 lg:pr-8">
          
          {/* THE 3D CHROME ORBIT SCULPTURE (Three.js WebGL canvas, fully framed) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center overflow-visible">
            <ChromeOrbitSculpture mousePosition={mousePos} />
          </div>

          {/* ===================================================================
              EXACTLY TWO INTEGRATED FLOATING PORTFOLIO VISUAL WINDOWS
              1. Upper Right: CINEMATIC PRODUCTION (AI Commercial)
              2. Lower Right: BRAND ARCHITECTURE (Graphic Design)
              =================================================================== */}

          {/* WINDOW 01 — AI COMMERCIAL PRODUCTION (Upper Right) */}
          <div
            onClick={() => onNavigate('/spotlight')}
            data-cursor="pointer"
            className="absolute top-2 sm:top-6 right-2 sm:right-6 md:right-8 z-10 w-44 sm:w-52 md:w-56 rounded-2xl overflow-hidden glass-panel border border-white/15 hover:border-[#8B5CF6]/80 transition-all duration-700 ease-out shadow-[0_25px_60px_rgba(0,0,0,0.85)] cursor-pointer group pointer-events-auto animate-float-slow"
            style={{
              transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 10}px, 0)`,
            }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={ASSET_INVENTORY['hero_automotive'].url}
                alt="AI Commercial Production Showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08070D] via-transparent to-transparent opacity-85" />
              
              {/* Window Header Badge */}
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                <span className="text-[9px] font-mono tracking-widest uppercase text-[#C4A7FF] bg-black/75 px-2 py-0.5 rounded backdrop-blur-md border border-white/10">
                  01 // AI COMMERCIAL
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-2 left-2.5 text-[10px] font-display font-medium tracking-wider text-[#F5F3FA] flex items-center gap-1">
                <span>CINEMATIC PRODUCTION</span>
                <ArrowUpRight className="w-3 h-3 text-[#C4A7FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* WINDOW 02 — GRAPHIC DESIGN & BRAND IDENTITY (Lower Right) */}
          <div
            onClick={() => onNavigate('/services')}
            data-cursor="pointer"
            className="absolute bottom-4 sm:bottom-8 right-3 sm:right-8 md:right-10 z-10 w-40 sm:w-48 md:w-52 rounded-2xl overflow-hidden glass-panel border border-white/15 hover:border-[#C4A7FF]/80 transition-all duration-700 ease-out shadow-[0_25px_55px_rgba(0,0,0,0.9)] cursor-pointer group pointer-events-auto animate-float-reverse"
            style={{
              transform: `translate3d(${mousePos.x * -14}px, ${mousePos.y * -12}px, 0)`,
            }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={ASSET_INVENTORY['service_graphic_design'].url}
                alt="Graphic Design & Brand Architecture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08070D] via-transparent to-transparent opacity-85" />
              
              <div className="absolute top-2.5 left-2.5">
                <span className="text-[9px] font-mono tracking-widest uppercase text-[#F5F3FA] bg-black/75 px-2 py-0.5 rounded backdrop-blur-md border border-white/10">
                  02 // BRAND ARCHITECTURE
                </span>
              </div>

              <div className="absolute bottom-2 left-2.5 text-[10px] font-display font-medium tracking-wider text-[#F5F3FA] flex items-center gap-1">
                <span>VISUAL IDENTITIES</span>
                <ArrowUpRight className="w-3 h-3 text-[#C4A7FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* CONTINUOUS KINETIC MARQUEE RIBBON (Eliminates visual stagnancy) */}
      <div className="relative z-10 w-full overflow-hidden py-3.5 my-4 border-y border-white/[0.08] bg-[#101018]/60 backdrop-blur-md">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-mono text-[11px] sm:text-xs tracking-[0.28em] text-[#B9B7C6] uppercase">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-[#8B5CF6] font-semibold">✦ AI COMMERCIAL PRODUCTION</span>
              <span className="text-white/20">✦</span>
              <span className="text-[#C4A7FF] font-semibold">BESPOKE BRAND ARCHITECTURE</span>
              <span className="text-white/20">✦</span>
              <span className="text-[#F5F3FA] font-semibold">SPATIAL WEBSITE DESIGN</span>
              <span className="text-white/20">✦</span>
              <span className="text-[#8B5CF6] font-semibold">8K SYNTHETIC CINEMA</span>
              <span className="text-white/20">✦</span>
              <span className="text-[#C4A7FF] font-semibold">NEURAL VIDEO GENERATION</span>
              <span className="text-white/20">✦</span>
              <span className="text-[#F5F3FA] font-semibold">AWARD-WINNING EXPERIENCES</span>
              <span className="text-white/20">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          LOWER HERO AREA: REFINED SCROLL INDICATOR
          With generous right padding to avoid any overlap with WhatsApp button
          ========================================================================= */}
      <div className="relative z-10 w-full flex items-center justify-between pt-6 pr-24 sm:pr-32 border-t border-white/[0.05] text-[#C6C3D0] text-xs font-mono">
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-[#8755FF]">ZINAT STUDIO</span>
          <span className="text-white/20">//</span>
          <span className="text-[11px] tracking-wider uppercase">ARCHITECTURAL DIGITAL CRAFT</span>
        </div>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/about');
          }}
          className="group mx-auto sm:mr-0 flex items-center gap-2 hover:text-[#F6F4FA] transition-colors"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#7A7789] group-hover:text-[#C8A9FF] transition-colors">
            DISCOVER STUDIO
          </span>
          <div className="w-5 h-5 rounded-full border border-white/15 group-hover:border-[#8755FF] flex items-center justify-center transition-colors">
            <ChevronDown className="w-3 h-3 text-[#C8A9FF] group-hover:translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>

    </section>
  );
};
