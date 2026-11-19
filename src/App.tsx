import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HomeDualFeatureSection } from './components/HomeDualFeatureSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SpotlightSection } from './components/SpotlightSection';
import { CreativeProcessSection } from './components/CreativeProcessSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CustomCursor } from './components/CustomCursor';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { PORTFOLIO_PROJECTS, PortfolioProject } from './data/portfolioData';
import { verifyNoDuplicateAssets } from './data/assetsInventory';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Activate premium scroll reveal motion system - re-evaluates whenever route changes
  useScrollReveal(currentRoute);

  // Sync route from browser pathname on load & on popstate
  useEffect(() => {
    // Run verification of asset uniqueness
    const verification = verifyNoDuplicateAssets();
    if (!verification.valid) {
      console.warn('Asset duplication detected:', verification.duplicates);
    } else {
      console.log('Asset inventory verification: 100% unique images across all sections.');
    }

    const syncRouteFromPath = () => {
      const path = window.location.pathname;
      if (['/about', '/services', '/spotlight', '/contact'].includes(path)) {
        setCurrentRoute(path);
      } else {
        setCurrentRoute('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    syncRouteFromPath();
    window.addEventListener('popstate', syncRouteFromPath);
    return () => window.removeEventListener('popstate', syncRouteFromPath);
  }, []);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.history.pushState({}, '', route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVideo = (project: PortfolioProject) => {
    setSelectedProject(project);
  };

  const handleOpenFeaturedReel = () => {
    const featured = PORTFOLIO_PROJECTS.find((p) => p.featured) || PORTFOLIO_PROJECTS[0];
    setSelectedProject(featured);
  };

  return (
    <div className="relative min-h-screen bg-[#08070D] text-[#F5F3FA] selection:bg-[#8B5CF6]/30 selection:text-white overflow-x-hidden">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Floating WhatsApp Contact Button (bottom-right) */}
      <FloatingWhatsApp />

      {/* SINGLE CONSISTENT SHARED NAVIGATION COMPONENT (HOME | ABOUT US | SERVICES | SPOTLIGHT | CONTACT) */}
      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* DEDICATED ROUTED VIEWS (ZERO DUPLICATION ACROSS PAGES) */}
      <main className="min-h-screen transition-opacity duration-500 ease-out">
        {/* =========================================================================
            ROUTE 1: HOMEPAGE (/)
            - Hero Section (3D Chrome Orbit artwork properly positioned, not cut off)
            - Dual Creative Pillars (Two sourced related images showcasing AI Cinema & Digital Architecture)
            - Creative Process / Methodology
            - (Services section "The ZINAT Production Ecosystem" completely removed from homepage)
            - (Studio Identity / About section completely removed from homepage)
            - (Spotlight completely removed from homepage)
            ========================================================================= */}
        {currentRoute === '/' && (
          <div className="animate-fade-in">
            <HeroSection
              onNavigate={handleNavigate}
              onOpenVideo={handleOpenFeaturedReel}
            />

            <HomeDualFeatureSection onNavigate={handleNavigate} />

            <CreativeProcessSection />
          </div>
        )}

        {/* =========================================================================
            ROUTE 2: DEDICATED ABOUT US PAGE (/about)
            - Focus entirely on ZINAT STUDIO (Who we are, what we do, creative approach)
            - Zero duplicate service lists, zero enquiry forms, zero unrelated sections
            ========================================================================= */}
        {currentRoute === '/about' && (
          <div className="animate-fade-in pt-12 sm:pt-16">
            <AboutSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* =========================================================================
            ROUTE 3: DEDICATED SERVICES PAGE (/services)
            - Comprehensive presentation of the 3 primary services:
              1. AI Commercial Production
              2. Graphic Design
              3. Website Design for Brands
            ========================================================================= */}
        {currentRoute === '/services' && (
          <div className="animate-fade-in pt-12 sm:pt-16">
            <ServicesSection
              onNavigate={handleNavigate}
              onSelectProject={(projId) => {
                const p = PORTFOLIO_PROJECTS.find((x) => x.id === projId);
                if (p) setSelectedProject(p);
              }}
            />
          </div>
        )}

        {/* =========================================================================
            ROUTE 4: DEDICATED SPOTLIGHT PAGE (/spotlight)
            - Clean cinematic video gallery with category filters
            - Removed "ZINAT STUDIO SIGNATURE COMMERCIALS" heading and duplicated cards
            - Removed Official Studio section / contact / enquiry form
            ========================================================================= */}
        {currentRoute === '/spotlight' && (
          <div className="animate-fade-in pt-12 sm:pt-16">
            <SpotlightSection
              onOpenVideo={handleOpenVideo}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {/* =========================================================================
            ROUTE 5: DEDICATED CONTACT PAGE (/contact)
            - Official studio channels (dollyziba@gmail.com, 09129129572, WhatsApp)
            - The ONLY place with the complete, working project enquiry form
            ========================================================================= */}
        {currentRoute === '/contact' && (
          <div className="animate-fade-in pt-12 sm:pt-16">
            <ContactSection />
          </div>
        )}
      </main>

      {/* SINGLE SHARED FOOTER */}
      <FooterSection onNavigate={handleNavigate} />

      {/* CINEMATIC VIDEO MODAL PLAYER */}
      <VideoPlayerModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default App;
