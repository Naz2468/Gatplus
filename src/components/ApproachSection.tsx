import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Truck, Plane, Users } from 'lucide-react';

interface ApproachSectionProps {
  onOpenSupplyChain: () => void;
  onOpenAviation: () => void;
  onOpenManpower: () => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({
  onOpenSupplyChain,
  onOpenAviation,
  onOpenManpower
}) => {
  return (
    <section id="approach" className="py-20 bg-transparent border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Split with Directional Slide Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 24, x: -6 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#072118] uppercase tracking-wider mb-3">
              <span className="text-[#8EE263] text-base">✱</span>
              <span>Our Operating Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#072118] tracking-tight leading-tight">
              Essential features for modern public sector success
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24, x: 6 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5 text-sm sm:text-base text-neutral-600 font-light leading-relaxed"
          >
            Explore integrated procurement frameworks, turnkey aviation facility support, and civil service capacity building that improve processes, eliminate waste, and achieve compliant execution.
          </motion.div>
        </div>

        {/* 3 Signature Bento Cards with Left/Center/Right Slide-in Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Slide from Left */}
          <motion.div 
            initial={{ opacity: 0, y: 30, x: -10 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white rounded-none p-8 sm:p-9 border-0 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient subtle top edge accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8EE263] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Icon Badge */}
              <div className="w-14 h-14 rounded-none bg-[#FAFBF8] border-0 flex items-center justify-center text-[#072118] mb-8 group-hover:bg-[#8EE263] group-hover:text-[#072118] group-hover:scale-105 transition-all duration-300">
                <Truck className="w-7 h-7 stroke-[1.75]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#072118] tracking-tight mb-3">
                Government Procurement & Relief Logistics
              </h3>

              <p className="text-sm text-neutral-600 font-light leading-relaxed mb-8">
                Large-scale foodstuff and nutritional supply logistics serving the National Commission for Refugees, Migrants and IDPs (NCFRMI) across northern distribution corridors.
              </p>
            </div>

            <div>
              <button
                onClick={onOpenSupplyChain}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-[#FAFBF8] hover:bg-neutral-100 text-[#072118] text-xs font-bold transition-all border-0 cursor-pointer group/btn"
              >
                <span>Explore More</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[3] group-hover/btn:translate-x-1 transition-transform text-[#8EE263]" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Center Pop & Slide Up */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-[#8EE263] text-[#072118] rounded-none p-8 sm:p-9 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group border-0"
          >
            {/* Ambient dynamic glow */}
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 2,
              }}
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none -skew-x-12"
            />

            <div className="relative z-10">
              {/* Icon Badge */}
              <div className="w-14 h-14 rounded-none bg-[#072118] text-[#8EE263] flex items-center justify-center mb-8 shadow-sm group-hover:scale-105 transition-transform border-0">
                <Plane className="w-7 h-7 stroke-[1.75]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-3">
                Aviation & Public Infrastructure
              </h3>

              <p className="text-sm text-[#072118]/85 leading-relaxed font-medium mb-8">
                Supporting the Federal Ministry of Aviation with terminal baggage handling maintenance, airside safety assets, and solar perimeter airfield electrification.
              </p>
            </div>

            <div className="relative z-10">
              <button
                onClick={onOpenAviation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-[#072118] hover:bg-black text-white text-xs font-bold transition-all cursor-pointer group/btn shadow-xs border-0"
              >
                <span>Explore More</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[3] group-hover/btn:translate-x-1 transition-transform text-[#8EE263]" />
              </button>
            </div>
          </motion.div>

          {/* Card 3: Slide from Right */}
          <motion.div 
            initial={{ opacity: 0, y: 30, x: 10 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-[#072118] text-white rounded-none p-8 sm:p-9 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group border-0 relative overflow-hidden"
          >
            {/* Ambient subtle top edge accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8EE263] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Icon Badge */}
              <div className="w-14 h-14 rounded-none bg-white/10 border-0 text-[#8EE263] flex items-center justify-center mb-8 group-hover:bg-[#8EE263] group-hover:text-[#072118] group-hover:scale-105 transition-all duration-300">
                <Users className="w-7 h-7 stroke-[1.75]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                Strategic Manpower & Corporate Advisory
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-8">
                Executive civil service capacity development, Public Procurement Act (2007) masterclasses, and corporate governance reform for senior directors.
              </p>
            </div>

            <div>
              <button
                onClick={onOpenManpower}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border-0 cursor-pointer group/btn"
              >
                <span>Explore More</span>
                <ChevronRight className="w-3.5 h-3.5 stroke-[3] group-hover/btn:translate-x-1 transition-transform text-[#8EE263]" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
