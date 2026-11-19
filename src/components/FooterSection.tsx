import React from 'react';
import { ArrowUp, Sparkles, MessageSquare, Mail, Phone } from 'lucide-react';

interface FooterSectionProps {
  onNavigate: (route: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', route: '/' },
    { label: 'ABOUT US', route: '/about' },
    { label: 'SERVICES', route: '/services' },
    { label: 'SPOTLIGHT', route: '/spotlight' },
    { label: 'CONTACT', route: '/contact' },
  ];

  return (
    <footer className="relative bg-[#08070D] border-t border-white/[0.08] pt-20 pb-12 px-4 sm:px-8 overflow-hidden">
      
      {/* Subtle animated light glow in footer background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#8B5CF6]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1550px] mx-auto">
        
        {/* TOP ROW: BRAND & MOTTO */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06] items-start">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#211039] border border-[#8B5CF6]/50 text-[#8B5CF6]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 6H19L9 18H19"
                    stroke="#F5F3FA"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="18" cy="18" r="1.75" fill="#8B5CF6" />
                </svg>
              </div>
              <span className="font-display font-black text-2xl tracking-[0.2em] text-[#F5F3FA]">
                ZINAT STUDIO
              </span>
            </div>

            <p className="font-display font-medium text-lg sm:text-xl text-[#F5F3FA]/90">
              “Creating extraordinary digital experiences.”
            </p>

            <p className="font-body text-xs sm:text-sm text-[#B9B7C6] max-w-sm leading-relaxed">
              Operating at the intersection of cinematic artificial intelligence, avant-garde graphic design, and futuristic digital architecture.
            </p>
          </div>

          {/* SITEMAP DIRECTORY */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#8B5CF6] mb-2">
              SITEMAP DIRECTORY
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.route)}
                    className="font-display text-xs sm:text-sm text-[#B9B7C6] hover:text-[#C4A7FF] tracking-wider transition-colors uppercase"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICIAL STUDIO DETAILS */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#8B5CF6] mb-2">
              STUDIO CONTACT
            </div>
            
            <div className="space-y-2 text-xs sm:text-sm font-mono text-[#B9B7C6]">
              <div>
                <a
                  href="mailto:dollyziba@gmail.com"
                  className="hover:text-[#F5F3FA] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#8B5CF6]" />
                  <span>dollyziba@gmail.com</span>
                </a>
              </div>

              <div>
                <a
                  href="tel:09129129572"
                  className="hover:text-[#F5F3FA] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#8B5CF6]" />
                  <span>09129129572</span>
                </a>
              </div>

              <div>
                <a
                  href="https://wa.me/2349129129572"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp: 09129129572</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[10px] font-mono tracking-widest text-[#8B5CF6] bg-[#171026] px-3 py-1 rounded-full border border-white/[0.08]">
                GLOBAL COMMISSIONS OPEN
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT & SCROLL TO TOP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#B9B7C6]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>© 2026 ZINAT STUDIO. ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="pointer"
            className="group flex items-center gap-2 text-xs font-mono text-[#B9B7C6] hover:text-[#F5F3FA] transition-colors"
          >
            <span>BACK TO TOP</span>
            <span className="w-8 h-8 rounded-full bg-[#171026] border border-white/10 group-hover:border-[#8B5CF6] flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-[#8B5CF6] group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

      </div>

    </footer>
  );
};
