import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS, ProjectRecord } from '../data/corporateData';
import { ChevronRight, Building, CheckCircle2, ShieldCheck, ArrowUpRight, Award, Truck, Plane, Users, PackageCheck } from 'lucide-react';

interface ImpactSectionProps {
  onSelectProject: (project: ProjectRecord) => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'humanitarian' | 'aviation' | 'consulting' | 'procurement'>('all');

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="impact" className="py-20 sm:py-28 bg-transparent border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Split */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14"
        >
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#072118] uppercase tracking-wider mb-3">
              <span className="text-[#84E262] text-base">✱</span>
              <span>Verified Public Sector Deliveries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#072118] tracking-tight leading-tight">
              Experienced best modern federal execution
            </h2>
          </div>

          {/* Filter Bar (Zero curves, border-0) */}
          <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-bold transition-all cursor-pointer rounded-none border-0 ${
                activeTab === 'all'
                  ? 'bg-[#0A1913] text-white shadow-xs'
                  : 'bg-white text-neutral-600 hover:text-black shadow-xs'
              }`}
            >
              All Engagements ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveTab('humanitarian')}
              className={`px-4 py-2 text-xs font-bold transition-all cursor-pointer rounded-none border-0 ${
                activeTab === 'humanitarian'
                  ? 'bg-[#0A1913] text-white shadow-xs'
                  : 'bg-white text-neutral-600 hover:text-black shadow-xs'
              }`}
            >
              Humanitarian (NCFRMI)
            </button>
            <button
              onClick={() => setActiveTab('aviation')}
              className={`px-4 py-2 text-xs font-bold transition-all cursor-pointer rounded-none border-0 ${
                activeTab === 'aviation'
                  ? 'bg-[#0A1913] text-white shadow-xs'
                  : 'bg-white text-neutral-600 hover:text-black shadow-xs'
              }`}
            >
              Aviation Support
            </button>
            <button
              onClick={() => setActiveTab('consulting')}
              className={`px-4 py-2 text-xs font-bold transition-all cursor-pointer rounded-none border-0 ${
                activeTab === 'consulting'
                  ? 'bg-[#0A1913] text-white shadow-xs'
                  : 'bg-white text-neutral-600 hover:text-black shadow-xs'
              }`}
            >
              Leadership & Strategy
            </button>
            <button
              onClick={() => setActiveTab('procurement')}
              className={`px-4 py-2 text-xs font-bold transition-all cursor-pointer rounded-none border-0 ${
                activeTab === 'procurement'
                  ? 'bg-[#0A1913] text-white shadow-xs'
                  : 'bg-white text-neutral-600 hover:text-black shadow-xs'
              }`}
            >
              Specialized Procurement
            </button>
          </div>
        </motion.div>

        {/* Bento Container Grid with Directional Slide-in Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1 (Dark Carbon Bento): Slide in from Left */}
          <motion.div
            initial={{ opacity: 0, x: -45, y: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            onClick={() => onSelectProject(PROJECTS[0])}
            className="bg-[#0A1913] text-white p-8 sm:p-10 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group rounded-none border-0 relative overflow-hidden"
          >
            {/* Top Accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#84E262] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Top Row: Subtitle Tag & Status */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="text-xs font-bold text-[#84E262] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-none border-0">
                  {PROJECTS[0].client}
                </span>
                <span className="text-[11px] font-mono text-neutral-400">
                  {PROJECTS[0].year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-white group-hover:text-[#84E262] transition-colors leading-snug">
                {PROJECTS[0].title}
              </h3>

              {/* Refined Description */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
                {PROJECTS[0].summary}
              </p>
            </div>

            {/* Bottom Row: Verified Impact Pill & Action */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 bg-[#84E262] text-[#0A1913] px-3.5 py-1.5 text-xs font-black uppercase tracking-wide rounded-none border-0 shadow-xs">
                <PackageCheck className="w-4 h-4 stroke-[2.5]" />
                <span>{PROJECTS[0].metrics}</span>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#84E262] transition-colors">
                <span>Inspect Deliverables</span>
                <ChevronRight className="w-4 h-4 text-[#84E262] group-hover:translate-x-1.5 transition-transform" />
              </span>
            </div>
          </motion.div>

          {/* Card 2 (Off-White Bento): Slide in from Right */}
          <motion.div
            initial={{ opacity: 0, x: 45, y: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            onClick={() => onSelectProject(PROJECTS[1])}
            className="bg-white text-[#0A1913] p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-2xl transition-all duration-300 cursor-pointer group rounded-none border-0 relative overflow-hidden"
          >
            {/* Top Accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0A1913] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="text-xs font-bold text-[#0A1913] uppercase tracking-wider bg-[#FAFBF8] px-3 py-1 rounded-none border-0">
                  {PROJECTS[1].client}
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  {PROJECTS[1].year}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-[#0A1913] group-hover:text-emerald-800 transition-colors leading-snug">
                {PROJECTS[1].title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
                {PROJECTS[1].summary}
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 bg-[#FAFBF8] text-[#0A1913] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide rounded-none border-0">
                <Plane className="w-4 h-4 text-emerald-700 stroke-[2.5]" />
                <span>{PROJECTS[1].metrics}</span>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1913] group-hover:text-emerald-800 transition-colors">
                <span>Inspect Deliverables</span>
                <ChevronRight className="w-4 h-4 text-[#0A1913] group-hover:translate-x-1.5 transition-transform" />
              </span>
            </div>
          </motion.div>

          {/* Card 3 (Off-White Bento): Slide in from Left */}
          <motion.div
            initial={{ opacity: 0, x: -45, y: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            onClick={() => onSelectProject(PROJECTS[2])}
            className="bg-white text-[#0A1913] p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-2xl transition-all duration-300 cursor-pointer group rounded-none border-0 relative overflow-hidden"
          >
            {/* Top Accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#84E262] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="text-xs font-bold text-[#0A1913] uppercase tracking-wider bg-[#FAFBF8] px-3 py-1 rounded-none border-0">
                  {PROJECTS[2].client}
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  {PROJECTS[2].year}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-[#0A1913] group-hover:text-emerald-800 transition-colors leading-snug">
                {PROJECTS[2].title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
                {PROJECTS[2].summary}
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 bg-[#84E262]/20 text-[#0A1913] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide rounded-none border-0">
                <Users className="w-4 h-4 text-emerald-800 stroke-[2.5]" />
                <span>{PROJECTS[2].metrics}</span>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1913] group-hover:text-emerald-800 transition-colors">
                <span>Inspect Deliverables</span>
                <ChevronRight className="w-4 h-4 text-[#0A1913] group-hover:translate-x-1.5 transition-transform" />
              </span>
            </div>
          </motion.div>

          {/* Card 4 (Dark Carbon Bento): Slide in from Right */}
          <motion.div
            initial={{ opacity: 0, x: 45, y: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            onClick={() => onSelectProject(PROJECTS[3])}
            className="bg-[#0A1913] text-white p-8 sm:p-10 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group rounded-none border-0 relative overflow-hidden"
          >
            {/* Top Accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#84E262] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="text-xs font-bold text-[#84E262] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-none border-0">
                  {PROJECTS[3].client}
                </span>
                <span className="text-[11px] font-mono text-neutral-400">
                  {PROJECTS[3].year}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-white group-hover:text-[#84E262] transition-colors leading-snug">
                {PROJECTS[3].title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
                {PROJECTS[3].summary}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 bg-[#84E262] text-[#0A1913] px-3.5 py-1.5 text-xs font-black uppercase tracking-wide rounded-none border-0 shadow-xs">
                <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                <span>{PROJECTS[3].metrics}</span>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#84E262] transition-colors">
                <span>Inspect Deliverables</span>
                <ChevronRight className="w-4 h-4 text-[#84E262] group-hover:translate-x-1.5 transition-transform" />
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
