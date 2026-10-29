import React from 'react';
import { CORPORATE_DATA } from '../data/corporateData';
import { ArrowUp, ChevronRight, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onContact: () => void;
  onOpenCEOPage: () => void;
  onOpenMediaPage?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContact, onOpenCEOPage, onOpenMediaPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#072118] text-white border-0 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-t-0 border-b border-white/10">
          
          {/* Brand & Corporate Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-none bg-[#8EE263] text-[#072118] flex items-center justify-center font-black text-base border-0">
                G
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Gatplus<span className="text-[#8EE263] text-xs font-bold uppercase ml-1">Dynamic</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm">
              <strong className="text-white">Gatplus Dynamic Resources Limited</strong> delivers strategic public procurement, turnkey aviation facility support, humanitarian care distribution, and institutional capacity development under CEO <strong className="text-white">Gbenga Abiodun Eleduma</strong>.
            </p>

            <div className="pt-2 text-xs text-neutral-400">
              Central Operations Hub · Wuse II, Abuja, Nigeria
            </div>
          </div>

          {/* Quick Links & Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-[#8EE263] uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <button 
                  onClick={onOpenCEOPage} 
                  className="hover:text-[#8EE263] transition-colors text-left font-bold text-white cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>CEO Profile (Gbenga A. Eleduma)</span>
                  <span className="w-1.5 h-1.5 bg-[#8EE263]" />
                </button>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  Operating Capabilities
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Executive Governance
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors">
                  Federal Track Record
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenMediaPage} 
                  className="hover:text-[#8EE263] transition-colors text-left text-neutral-300 hover:text-white cursor-pointer"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Headquarters Location & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold text-[#8EE263] uppercase tracking-wider">
              Abuja Operations Directorate
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {CORPORATE_DATA.address}
            </p>
            <div className="text-xs text-neutral-300 space-y-1 pt-1 font-mono">
              <div><strong>Hotline:</strong> {CORPORATE_DATA.phone}</div>
              <div><strong>Tenders:</strong> {CORPORATE_DATA.email}</div>
            </div>
            <div className="pt-2">
              <button
                onClick={onContact}
                className="text-xs text-[#8EE263] hover:underline font-bold cursor-pointer inline-flex items-center gap-1"
              >
                <span>Initiate Procurement Brief</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} {CORPORATE_DATA.name}. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <span>Federal MDAs Contractor</span>
            <span>·</span>
            <span>Abuja, Nigeria</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-neutral-300 hover:text-white transition-colors cursor-pointer font-semibold"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#8EE263]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
