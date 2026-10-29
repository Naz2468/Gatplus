import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, CheckCircle2, Menu, X } from 'lucide-react';
import { HeroLivingLandscape } from './HeroLivingLandscape';
import { CorporateHeroMotion } from './CorporateHeroMotion';
import { IMAGES } from '../assets';

interface HeroSectionProps {
  onContact: () => void;
  onExplorePortfolio: () => void;
  onOpenCEOPage: () => void;
  onOpenMediaPage: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContact,
  onOpenCEOPage,
  onOpenMediaPage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative pt-4 pb-12 sm:pt-6 sm:pb-20 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card Frame (Sharp 0-radius edges, border-0) */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-white rounded-none border-0 shadow-xl sm:shadow-2xl overflow-hidden flex flex-col justify-between min-h-[600px] sm:min-h-[680px] lg:min-h-[740px]"
        >
          {/* Executive Corporate Motion Background (Fluid auroras, diagonal light sheen, organic corporate curves - zero grid) */}
          <CorporateHeroMotion />
          
          {/* Internal Navigation Header */}
          <div className="relative z-30 px-6 sm:px-10 py-5 sm:py-6 flex items-center justify-between border-0 bg-white/90 backdrop-blur-md">
            
            {/* Brand Wordmark with Matching Lime Accent */}
            <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
              <div className="w-9 h-9 rounded-none bg-[#072118] flex items-center justify-center text-[#8EE263] font-black text-base tracking-wide shadow-xs transition-transform group-hover:scale-105 border-0">
                G
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-black tracking-tight text-[#072118]">
                  GATPLUS<span className="text-[#8EE263] text-2xl font-black">.</span>
                </span>
                <span className="text-[11px] font-bold text-neutral-400 ml-1.5 uppercase tracking-wider hidden sm:inline">
                  Dynamic
                </span>
              </div>
            </a>

            {/* Center Navigation Links (Including Dedicated CEO Profile Page) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-600">
              <a href="#approach" className="hover:text-[#072118] transition-colors py-1">
                Capabilities
              </a>
              <button 
                onClick={onOpenCEOPage} 
                className="hover:text-[#072118] transition-colors py-1 cursor-pointer font-bold text-[#072118] inline-flex items-center border-0 bg-transparent"
              >
                <span>CEO Profile</span>
              </button>
              <a href="#about" className="hover:text-[#072118] transition-colors py-1">
                About Us
              </a>
              <a href="#impact" className="hover:text-[#072118] transition-colors py-1">
                Track Record
              </a>
              <button 
                onClick={onOpenMediaPage} 
                className="hover:text-[#072118] transition-colors py-1 cursor-pointer font-bold text-[#072118] inline-flex items-center border-0 bg-transparent"
              >
                <span>Gallery</span>
              </button>
            </nav>

            {/* Right Action Button (Direct Contact Secretariat) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                onClick={onContact}
                className="px-6 py-2.5 rounded-none bg-[#072118] hover:bg-[#142d23] text-white text-xs font-bold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap inline-flex items-center gap-2 group border-0"
              >
                <span>Contact Secretariat</span>
                <div className="w-4 h-4 rounded-none bg-[#8EE263] text-[#072118] flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform border-0">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-none text-neutral-700 hover:text-[#072118] hover:bg-neutral-100 transition-colors cursor-pointer border-0"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md px-6 py-4 space-y-3 z-30 border-0">
              <nav className="flex flex-col space-y-2.5 text-sm font-semibold text-neutral-700">
                <a 
                  href="#approach" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="py-1 hover:text-[#072118]"
                >
                  Capabilities
                </a>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCEOPage();
                  }} 
                  className="text-left py-1 text-[#072118] font-bold flex items-center justify-between"
                >
                  <span>CEO Profile (Gbenga A. Eleduma)</span>
                </button>
                <a 
                  href="#about" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="py-1 hover:text-[#072118]"
                >
                  About Us & Governance
                </a>
                <a 
                  href="#impact" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="py-1 hover:text-[#072118]"
                >
                  Public Sector Track Record
                </a>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMediaPage();
                  }} 
                  className="text-left py-1 text-[#072118] font-bold flex items-center justify-between"
                >
                  <span>Gallery</span>
                </button>
              </nav>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContact();
                  }}
                  className="w-full py-2.5 rounded-none bg-[#072118] text-white text-xs font-bold flex items-center justify-center gap-2 border-0"
                >
                  <span>Contact Secretariat</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#8EE263] stroke-[3]" />
                </button>
              </div>
            </div>
          )}

          {/* Top Edge Ambient Shimmer Line */}
          <motion.div
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatDelay: 2,
            }}
            className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#8EE263] to-transparent z-40"
          />

          {/* Centered Hero Content Area */}
          <div className="relative z-20 pt-8 sm:pt-12 pb-6 px-4 sm:px-8 max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* Social Proof Pill Badge with Authentic CEO Avatar */}
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              onClick={onOpenCEOPage}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-none bg-neutral-100/90 hover:bg-neutral-200/90 transition-all border-0 shadow-xs mb-6 sm:mb-8 backdrop-blur-md cursor-pointer group"
            >
              <div className="flex -space-x-1.5 overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-none ring-2 ring-white object-cover object-top"
                  src={IMAGES.ceoPortrait}
                  alt="Gbenga Abiodun Eleduma"
                />
                <div className="inline-block h-6 w-6 rounded-none ring-2 ring-white bg-[#072118] text-[#8EE263] text-[9px] font-black flex items-center justify-center">
                  NG
                </div>
              </div>

              <span className="text-xs font-medium text-neutral-700 group-hover:text-[#072118] transition-colors">
                Chief Eleduma Gbenga Abiodun · Managing Director & CEO
              </span>
              <ChevronRight className="w-3 h-3 text-neutral-400 group-hover:text-[#072118] group-hover:translate-x-0.5 transition-transform" />
            </motion.div>

            {/* Dominant Centered Headline with Bold Okine Sans */}
            <motion.h1 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#072118] tracking-tight leading-[1.12] mb-5 [text-wrap:balance]"
            >
              Transform How You <br />
              <span>Deliver <span className="text-[#072118] underline decoration-[#8EE263] decoration-4 sm:decoration-[6px] underline-offset-8">Sovereign Projects</span></span>
            </motion.h1>

            {/* Balanced Centered Subheadline in Light Okine Sans */}
            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl leading-relaxed mb-8 [text-wrap:balance]"
            >
              Streamline government procurement, turnkey aviation facility support, humanitarian relief supply chains, and public infrastructure — all in one trusted partner.
            </motion.p>

            {/* Centered Action Button with Hover Lift */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.28, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <motion.button
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={onContact}
                className="px-8 py-4 rounded-none bg-[#072118] hover:bg-[#142d23] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer inline-flex items-center gap-2.5 group border-0"
              >
                <span>Initiate Procurement Brief</span>
                <div className="w-5 h-5 rounded-none bg-[#8EE263] text-[#072118] flex items-center justify-center group-hover:translate-x-0.5 transition-transform border-0">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </motion.button>
            </motion.div>

            {/* Trust Markers */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500 font-medium"
            >
              <span className="inline-flex items-center gap-1.5 text-neutral-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8EE263]" />
                10+ Years Corporate Standing
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5 text-neutral-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8EE263]" />
                Federal MDAs Contractor
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5 text-neutral-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8EE263]" />
                Wuse II, Abuja HQ
              </span>
            </motion.div>

          </div>

          {/* Panoramic Living Landscape Base: Photographic Image with Animated Looping Highway Cars */}
          <div className="relative w-full mt-auto h-72 sm:h-80 lg:h-96 overflow-hidden">
            <HeroLivingLandscape />
          </div>

        </motion.div>

      </div>
    </section>
  );
};
