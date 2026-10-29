import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Building } from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../data/corporateData';
import { IMAGES } from '../assets';
import { ProjectSourceSlider } from './ProjectSourceSlider';

interface AboutSectionProps {
  onOpenExecutiveModal: () => void;
  onOpenCEOPage: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenExecutiveModal,
  onOpenCEOPage
}) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-transparent border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Project Source Carousel */}
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Interactive Project Source Preview Slider (Verified Executions & Facebook Documentation) */}
            <ProjectSourceSlider />
          </motion.div>

          {/* Right Column: Narrative + CEO Lockup + Competencies - Smooth Slide from Right */}
          <motion.div 
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="lg:col-span-6 space-y-7"
          >
            
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#072118] uppercase tracking-wider mb-3">
                <span className="text-[#8EE263] text-base">✱</span>
                <span>Who We Are & Governance</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#072118] tracking-tight leading-tight">
                Comprehensive solution for business excellence
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed text-justify">
              Headquartered in Wuse II, Abuja, <strong>Gatplus Dynamic Resources Limited</strong> is an established federal corporate contractor delivering strategic public sector procurement, humanitarian care supply chains, and general construction across Nigeria. Led by Managing Director <strong>Chief Eleduma Gbenga Abiodun</strong>, the firm bridges sovereign compliance with operational ingenuity.
            </p>

            {/* Action Buttons + CEO Profile Link */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenCEOPage}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#072118] hover:bg-[#153428] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow cursor-pointer group border-0"
              >
                <span>View CEO Profile Page</span>
                <div className="w-5 h-5 rounded-full bg-[#8EE263] text-[#072118] flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform border-0">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </button>

              <button
                onClick={onOpenExecutiveModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#072118] font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer border border-black/10 shadow-xs"
              >
                <span>Board Dossier</span>
              </button>
            </div>

            {/* CEO Profile Card Lockup */}
            <motion.div 
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              onClick={onOpenCEOPage}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm hover:shadow-md border border-black/5 hover:border-[#8EE263]/50 cursor-pointer transition-all group relative overflow-hidden"
            >

              <img
                src={IMAGES.ceoPortrait}
                alt="Chief Eleduma Gbenga Abiodun"
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-xl object-cover object-top border-2 border-[#8EE263] shadow-xs shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="text-sm sm:text-base font-bold text-[#072118] group-hover:text-emerald-800 transition-colors truncate">
                    {EXECUTIVE_PROFILE.name}
                  </div>
                  <span className="px-2 py-0.5 text-[9px] font-black rounded-full bg-[#8EE263] text-[#072118] shrink-0">
                    CEO
                  </span>
                </div>
                <div className="text-xs text-neutral-600 font-medium mt-0.5 line-clamp-1">
                  Accomplished Businessman · Philanthropist · Chieftain (Isuada Land & Upenmen Kingdom)
                </div>
                <div className="text-[11px] text-emerald-800 font-semibold mt-1 inline-flex items-center gap-1">
                  <span>Explore Dedicated Profile & 15 Honors</span>
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Institutional Presence & Competencies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/5">
              
              {/* Corporate Headquarters Card */}
              <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow transition-shadow border border-black/5">
                <div className="w-9 h-9 rounded-xl bg-[#FAFBF8] flex items-center justify-center text-[#072118] mb-3 border border-black/5">
                  <Building className="w-4 h-4 text-emerald-800" />
                </div>
                <div className="text-base font-bold text-[#072118]">
                  Central Operations Hub
                </div>
                <div className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  Suite 304, McLewis Plaza, Wuse II, Abuja, Federal Capital Territory
                </div>
              </div>

              {/* Operating Competencies Card */}
              <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow transition-shadow border border-black/5">
                <div className="text-xs font-bold text-[#072118] mb-3">
                  Operating Competencies
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-neutral-600">
                  <span className="p-2 bg-[#FAFBF8] rounded-lg text-center border border-black/5 uppercase">
                    Procurement
                  </span>
                  <span className="p-2 bg-[#FAFBF8] rounded-lg text-center border border-black/5 uppercase">
                    Consulting
                  </span>
                  <span className="p-2 bg-[#FAFBF8] rounded-lg text-center border border-black/5 uppercase">
                    Aviation
                  </span>
                  <span className="p-2 bg-[#FAFBF8] rounded-lg text-center border border-black/5 uppercase">
                    Logistics
                  </span>
                  <span className="p-2 bg-[#FAFBF8] rounded-lg text-center border border-black/5 uppercase">
                    Civil Auxiliaries
                  </span>
                  <span className="p-2 bg-[#FAFBF8] rounded-lg text-center border border-black/5 uppercase">
                    Governance
                  </span>
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
