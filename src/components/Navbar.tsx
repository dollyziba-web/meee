import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lineDrawn, setLineDrawn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Trigger line drawing animation on mount
    const timer = setTimeout(() => setLineDrawn(true), 150);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // EXACT ORIGINAL NAVIGATION ITEMS IN EXACT ORDER
  const navItems = [
    { label: 'HOME', route: '/' },
    { label: 'ABOUT US', route: '/about' },
    { label: 'SERVICES', route: '/services' },
    { label: 'SPOTLIGHT', route: '/spotlight' },
    { label: 'CONTACT', route: '/contact' },
  ];

  const handleLinkClick = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 h-[84px] sm:h-[92px] flex items-center ${
          isScrolled
            ? 'bg-[#08070D]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="relative flex items-center justify-between">
            
            {/* =================================================================
                LEFT: ZINAT STUDIO LOGO (FAR LEFT)
                ================================================================= */}
            <div className="flex items-center gap-4 shrink-0 z-20">
              <button
                onClick={() => handleLinkClick('/')}
                className="group flex items-center gap-3.5 text-left focus:outline-none"
                aria-label="ZINAT STUDIO Homepage"
              >
                {/* Geometric Z Monogram Symbol */}
                <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#211039] via-[#171026] to-[#08070D] border border-white/10 group-hover:border-[#8B5CF6]/70 shadow-[0_0_20px_rgba(139,92,246,0.2)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.45)] transition-all duration-300">
                  <svg className="w-6 h-6" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M6 7H22L10 21H22"
                      stroke="#F5F3FA"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-[#C4A7FF] transition-colors duration-300"
                    />
                    <path
                      d="M10 7L18 21"
                      stroke="#8B5CF6"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeDasharray="2 3"
                    />
                    <circle cx="21" cy="21" r="2" fill="#8B5CF6" />
                  </svg>
                  <span className="absolute -inset-0.5 rounded-xl bg-[#8B5CF6]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Studio Wordmark */}
                <div className="flex flex-col justify-center">
                  <span className="font-display font-extrabold text-xl sm:text-2xl tracking-[0.22em] text-[#F5F3FA] leading-tight group-hover:text-white transition-colors">
                    ZINAT
                  </span>
                  <span className="font-display font-medium text-[10px] sm:text-[11px] tracking-[0.38em] text-[#C4A7FF] uppercase leading-none mt-0.5">
                    STUDIO
                  </span>
                </div>
              </button>
            </div>

            {/* =================================================================
                MIDDLE-LEFT: CUSTOM CURVED BRAND-SIGNATURE DIVIDER
                Dedicated space immediately after logo, flowing gracefully towards nav
                ================================================================= */}
            <div className="hidden lg:block relative flex-1 mx-8 xl:mx-14 h-10 pointer-events-none">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 500 40"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  <linearGradient id="brandDividerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#B9B7C6" stopOpacity="0.15" />
                    <stop offset="15%" stopColor="#B9B7C6" stopOpacity="0.45" />
                    <stop offset="65%" stopColor="#8B5CF6" stopOpacity="0.65" />
                    <stop offset="98%" stopColor="#C4A7FF" stopOpacity="0.85" />
                  </linearGradient>

                  <filter id="subtleGlow">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Glow underlay */}
                <path
                  d="M 10,20 C 70,20 120,32 190,32 L 380,32 C 430,32 460,18 495,18"
                  stroke="rgba(139, 92, 246, 0.28)"
                  strokeWidth="3"
                  filter="url(#subtleGlow)"
                  fill="none"
                />

                {/* ~1px Fine Architectural Flowing Asymmetrical Curve */}
                <path
                  d="M 10,20 C 70,20 120,32 190,32 L 380,32 C 430,32 460,18 495,18"
                  stroke="url(#brandDividerGrad)"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeDasharray="500"
                  strokeDashoffset={lineDrawn ? '0' : '500'}
                  className="transition-all duration-1000 ease-out"
                  fill="none"
                />

                {/* Tiny Illuminated Endpoint with subtle pulse */}
                <circle cx="495" cy="18" r="2.5" fill="#C4A7FF" className="animate-pulse" />
                <circle cx="495" cy="18" r="5" fill="rgba(139, 92, 246, 0.4)" className="animate-ping" />
              </svg>
            </div>

            {/* =================================================================
                RIGHT: ORIGINAL NAVIGATION (FAR RIGHT)
                HOME | ABOUT US | SERVICES | SPOTLIGHT | CONTACT
                ================================================================= */}
            <div className="hidden lg:flex items-center shrink-0 ml-auto z-20">
              <nav aria-label="Main Navigation" className="flex items-center gap-7 xl:gap-9">
                {navItems.map((item) => {
                  const isActive = currentRoute === item.route;
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleLinkClick(item.route)}
                      className={`group relative py-1.5 font-display text-[12px] xl:text-[13px] tracking-[0.24em] uppercase transition-all duration-300 focus:outline-none ${
                        isActive ? 'text-[#F5F3FA] font-semibold' : 'text-[#B9B7C6] hover:text-[#F5F3FA]'
                      }`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {item.label}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C4A7FF] shadow-[0_0_8px_#8B5CF6]" />
                        )}
                      </span>

                      {/* Subtle animated underline */}
                      <span
                        className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-[#8B5CF6] to-[#C4A7FF] transition-all duration-300 ${
                          isActive
                            ? 'w-full opacity-100 shadow-[0_0_8px_#8B5CF6]'
                            : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-80'
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* MOBILE & TABLET HAMBURGER BUTTON */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-[#171026] border border-white/10 hover:border-[#8B5CF6]/60 text-[#F5F3FA] transition-colors focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#C4A7FF]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN SLIDE-DOWN NAVIGATION DRAWER */}
      <div
        className={`fixed inset-0 z-30 lg:hidden bg-[#08070D]/95 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between pt-28 pb-12 px-6 sm:px-12 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="flex flex-col space-y-4">
          <div className="text-[10px] font-mono tracking-[0.35em] uppercase text-[#8B5CF6] mb-2 flex items-center gap-2">
            <span className="w-5 h-[1px] bg-[#8B5CF6]" />
            STUDIO DIRECTORY
          </div>

          {navItems.map((item, index) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.label}
                onClick={() => handleLinkClick(item.route)}
                className={`group flex items-center justify-between text-left py-3.5 border-b border-white/[0.08] transition-all duration-300 ${
                  isActive ? 'text-[#C4A7FF] pl-2' : 'text-[#F5F3FA] hover:text-[#C4A7FF] hover:pl-2'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#7A7589]">0{index + 1}</span>
                  <span className="font-display font-bold text-2xl tracking-wider">
                    {item.label}
                  </span>
                </div>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Footer Info */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#B9B7C6]">
          <div>
            <div className="text-[#F5F3FA] font-semibold mb-0.5">DIRECT ENQUIRIES</div>
            <a href="mailto:dollyziba@gmail.com" className="hover:text-[#C4A7FF] transition-colors">
              dollyziba@gmail.com
            </a>
          </div>
          <div>
            <div className="text-[#F5F3FA] font-semibold mb-0.5">WHATSAPP / PHONE</div>
            <a
              href="https://wa.me/2349129129572"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C4A7FF] transition-colors"
            >
              09129129572
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
