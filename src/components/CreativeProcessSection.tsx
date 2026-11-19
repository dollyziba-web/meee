import React, { useState } from 'react';
import { Sparkles, Brain, Lightbulb, PenTool, Zap } from 'lucide-react';
import { ASSET_INVENTORY } from '../data/assetsInventory';

export const CreativeProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const principles = [
    {
      num: '01',
      title: 'IMAGINATION',
      icon: Lightbulb,
      statement: 'Every extraordinary result begins with an idea.',
      description: 'We deconstruct conventional advertising limits. Through deep creative discovery, we uncover the visceral emotional core of your brand and formulate bold, unprecedented conceptual narratives.',
      assetKey: 'process_imagination',
      accentColor: '#8B5CF6'
    },
    {
      num: '02',
      title: 'INNOVATION',
      icon: Brain,
      statement: 'We explore new technologies and creative possibilities to bring ambitious concepts to life.',
      description: 'Harnessing state-of-the-art neural diffusion, custom LoRA aesthetic architectures, and cutting-edge rendering algorithms to visualize what was previously impossible or prohibitively expensive.',
      assetKey: 'process_innovation',
      accentColor: '#C4A7FF'
    },
    {
      num: '03',
      title: 'CRAFT',
      icon: PenTool,
      statement: 'We combine visual storytelling, thoughtful design and attention to detail.',
      description: 'Every frame is meticulously sculpted. High-fidelity color grading, custom sound design, cinematic typography, and dynamic pacing turn raw generative imagery into high-end commercial art.',
      assetKey: 'process_craft',
      accentColor: '#8B5CF6'
    },
    {
      num: '04',
      title: 'IMPACT',
      icon: Zap,
      statement: 'We create experiences designed to make brands memorable.',
      description: 'The ultimate objective is emotional resonance. Our productions seize instant audience attention, drive brand authority, and position our partners at the absolute frontier of modern culture.',
      assetKey: 'process_impact',
      accentColor: '#C4A7FF'
    }
  ];

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#08070D] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#8B5CF6]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#211039]/60 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1550px] mx-auto">
        
        {/* SECTION HEADER */}
        <div className="reveal-on-scroll mb-20 sm:mb-24">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#8B5CF6] mb-3">
            <span className="w-6 h-[1px] bg-[#8B5CF6]" />
            STUDIO METHODOLOGY
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F5F3FA]">
            <span className="letter-bounce">IDEAS</span> <span className="letter-bounce">HAVE</span> <span className="letter-bounce">NO</span> <span className="letter-bounce">LIMITS.</span>
            <br />
            <span className="text-shimmer">
              NEITHER DO WE.
            </span>
          </h2>
        </div>

        {/* UNCONVENTIONAL EDITORIAL PROCESS TIMELINE & FLOWING ARCHITECTURE */}
        <div className="reveal-on-scroll delay-200 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Principle Selector with Massive Numbers */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {principles.map((step, idx) => {
              const isSelected = activeStep === idx;
              const IconComp = step.icon;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  data-cursor="pointer"
                  className={`group relative p-6 sm:p-8 rounded-2xl transition-all duration-500 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#171026] border-[#8B5CF6]/60 shadow-[0_10px_35px_rgba(139,92,246,0.25)]'
                      : 'bg-transparent border-white/[0.06] hover:bg-white/[0.02] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    
                    <div className="flex items-start gap-5">
                      {/* Giant Modern Graphic Number */}
                      <span className={`font-display font-black text-3xl sm:text-5xl transition-colors duration-300 ${
                        isSelected ? 'text-[#8B5CF6]' : 'text-white/20 group-hover:text-white/40'
                      }`}>
                        {step.num}
                      </span>

                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F3FA] tracking-wider uppercase">
                            {step.title}
                          </h3>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-[#C4A7FF] shadow-[0_0_8px_#8B5CF6]" />
                          )}
                        </div>

                        <p className="font-display font-medium text-sm sm:text-base text-[#F5F3FA]/90 mt-1">
                          {step.statement}
                        </p>

                        {/* Expanded details when active */}
                        {isSelected && (
                          <p className="font-body text-xs sm:text-sm text-[#B9B7C6] mt-3 leading-relaxed transition-all duration-500">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className={`p-2.5 rounded-xl border transition-colors ${
                      isSelected
                        ? 'bg-[#8B5CF6]/20 border-[#8B5CF6]/50 text-[#C4A7FF]'
                        : 'bg-white/[0.04] border-white/10 text-white/40 group-hover:text-white'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Stage Inspection Deck */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            <div className="relative h-full min-h-[380px] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-6 flex flex-col justify-between sweep-overlay animate-glow-pulse group">
              
              {/* Background Unique Process Image */}
              <div className="absolute inset-0">
                <img
                  src={ASSET_INVENTORY[principles[activeStep].assetKey].url}
                  alt={ASSET_INVENTORY[principles[activeStep].assetKey].alt}
                  className="w-full h-full object-cover transition-all duration-700 filter brightness-60 contrast-125 image-zoom-kinetic"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08070D] via-[#08070D]/60 to-[#08070D]/40" />
              </div>

              {/* Top Meta Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#C4A7FF] uppercase">
                  ACTIVE PHASE // {principles[activeStep].title}
                </span>
                <span className="text-xs font-mono text-white/60">
                  STEP 0{activeStep + 1} / 04
                </span>
              </div>

              {/* Bottom Insight Card */}
              <div className="relative z-10 p-5 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8B5CF6] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>STUDIO PROTOCOL</span>
                </div>
                <div className="font-display font-bold text-lg text-[#F5F3FA]">
                  {principles[activeStep].statement}
                </div>
                <div className="text-xs text-[#B9B7C6] mt-2 font-mono">
                  Guaranteed precision through every iteration cycle.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
