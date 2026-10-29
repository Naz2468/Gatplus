import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  HeartHandshake, 
  Award, 
  Building2, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Flag, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Quote,
  GraduationCap,
  Sparkles,
  Heart,
  Maximize2,
  X,
  ChevronLeft
} from 'lucide-react';
import { 
  EXECUTIVE_PROFILE, 
  AWARDS_AND_DISTINCTIONS,
  CEO_AUTOBIOGRAPHY_PARAGRAPHS,
  PHYSICAL_AWARDS_GALLERY,
  PhysicalAwardRecord
} from '../data/corporateData';

interface CEOPageProps {
  onBackToHome: () => void;
  onContact: () => void;
  onOpenMediaPage?: () => void;
}

export const CEOPage: React.FC<CEOPageProps> = ({ onBackToHome, onContact, onOpenMediaPage }) => {
  // State for toggling 10 vs 15 distinctions
  const [showAllAwards, setShowAllAwards] = useState(false);

  // State for toggling 1 vs all 8 physical awards
  const [showAllPhysicalAwards, setShowAllPhysicalAwards] = useState(false);

  // Toggle handler for physical awards with smooth scroll-on-collapse
  const handleTogglePhysicalAwards = () => {
    if (showAllPhysicalAwards) {
      const el = document.getElementById('awards-gallery');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowAllPhysicalAwards(!showAllPhysicalAwards);
  };

  // State for active physical award in Lightbox
  const [activeAwardIndex, setActiveAwardIndex] = useState<number | null>(null);

  // Awards 1-10 are shown initially, awards 11-15 are hidden behind toggle
  const initialAwards = AWARDS_AND_DISTINCTIONS.slice(0, 10);
  const remainingAwards = AWARDS_AND_DISTINCTIONS.slice(10, 15);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeAwardIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveAwardIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveAwardIndex((prev) => (prev !== null ? (prev + 1) % PHYSICAL_AWARDS_GALLERY.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setActiveAwardIndex((prev) => 
          prev !== null ? (prev - 1 + PHYSICAL_AWARDS_GALLERY.length) % PHYSICAL_AWARDS_GALLERY.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeAwardIndex]);

  const activeAward = activeAwardIndex !== null ? PHYSICAL_AWARDS_GALLERY[activeAwardIndex] : null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-h-screen bg-transparent text-[#0A1913] font-sans pb-24 relative z-10"
    >
      {/* Top Header Bar: 100% Static (Does NOT scroll with content) */}
      <header className="relative z-40 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Wordmark & Back Button */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-[#0A1913] text-xs font-bold transition-colors cursor-pointer border-0"
              aria-label="Back to Main Portal"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Main Portal</span>
            </button>

            <div className="h-6 w-px bg-neutral-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0A1913] text-[#84E262] font-black text-sm flex items-center justify-center border-0">
                G
              </div>
              <span className="text-xl font-black tracking-tight text-[#0A1913]">
                GATPLUS<span className="text-[#84E262]">.</span>
              </span>
            </div>
          </div>

          {/* Page Badge & Action */}
          <div className="flex items-center gap-3">
            {onOpenMediaPage && (
              <button
                onClick={onOpenMediaPage}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-[#0A1913] text-xs font-bold transition-colors cursor-pointer border-0"
              >
                <span>Gallery</span>
                <span className="w-1.5 h-1.5 bg-[#84E262]" />
              </button>
            )}

            <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-950 text-xs font-semibold border-0">
              <span className="w-2 h-2 bg-[#84E262]" />
              Executive Profile & Mandate
            </div>

            <button
              onClick={onContact}
              className="px-5 py-2.5 bg-[#0A1913] hover:bg-[#142d23] text-white text-xs font-bold transition-all shadow-sm cursor-pointer border-0 inline-flex items-center gap-2 group"
            >
              <span>Contact Executive Office</span>
              <div className="w-4 h-4 bg-[#84E262] text-[#0A1913] flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform border-0">
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Hero Profile Showcase with Editorial Justified Typography */}
      <section className="pt-10 sm:pt-14 pb-12 sm:pb-16 bg-[#F8F9FA] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="bg-white border-0 shadow-xl p-6 sm:p-10 lg:p-14 relative overflow-hidden">
            
            {/* Top Accent Shimmer Line */}
            <motion.div
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 1.5,
              }}
              className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#84E262] to-transparent z-30"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
              
              {/* Left Column: Authentic Executive Portrait */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="lg:col-span-5 relative"
              >
                {/* Floating ambient glow behind portrait */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -inset-4 bg-gradient-to-tr from-[#84E262]/25 via-emerald-600/15 to-transparent blur-2xl -z-10"
                />

                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 shadow-md border-0 group">
                  <img
                    src={EXECUTIVE_PROFILE.image}
                    alt="Chief Eleduma Gbenga Abiodun"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-102 transition-transform duration-700"
                  />
                  
                  {/* Subtle accent corner tag */}
                  <div className="absolute top-4 left-4 bg-[#0A1913] text-[#84E262] text-[10px] font-black uppercase tracking-wider px-3 py-1.5 border-0">
                    Chief Executive Officer
                  </div>

                  {/* Bottom Identification Banner */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0A1913] via-[#0A1913]/85 to-transparent p-5 text-white">
                    <div className="text-xl sm:text-2xl font-black tracking-tight">
                      Chief Eleduma Gbenga Abiodun
                    </div>
                    <div className="text-xs text-[#84E262] font-semibold mt-0.5">
                      Managing Director & CEO · Gatplus Dynamics Resources Ltd
                    </div>
                  </div>
                </div>

                {/* Regional & Chieftaincy Info Card */}
                <div className="mt-4 p-4 bg-[#F8F9FA] border-0 space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-700">
                    <span className="flex items-center gap-1.5 font-bold text-[#0A1913]">
                      <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                      Owo LGA, Ondo State · Abuja HQ
                    </span>
                    <span className="font-mono text-[11px] text-neutral-500">
                      RC 1233350
                    </span>
                  </div>
                  <div className="text-xs text-neutral-600 leading-relaxed text-justify border-t border-black/5 pt-2">
                    Chief Mayedero of Isuada Land & Chief Asiwaju Bobaselu of Upenmen Kingdom
                  </div>
                </div>

                {/* Academic Foundation Mini Card */}
                <div className="mt-4 p-4 bg-emerald-50/60 border-l-2 border-[#84E262] text-xs text-neutral-700 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-[#0A1913]">
                    <GraduationCap className="w-4 h-4 text-emerald-800 shrink-0" />
                    <span>Academic & Accounting Pedigree</span>
                  </div>
                  <p className="text-neutral-700 leading-relaxed text-justify">
                    Saint Martin Primary & Imade College Owo • Rufus Giwa Poly • B.Sc Accountancy (IMSU) • M.Sc Postgraduate Student (ABSU).
                  </p>
                </div>

              </motion.div>

              {/* Right Column: Full Official Autobiography Copy with Justified Writeups */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Identification Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#0A1913] text-[#84E262] text-xs font-bold tracking-wide border-0">
                    Accomplished Businessman
                  </span>
                  <span className="px-3 py-1 bg-[#84E262] text-[#0A1913] text-xs font-bold tracking-wide border-0">
                    Philanthropist of Great Repute
                  </span>
                  <span className="px-3 py-1 bg-neutral-100 text-[#0A1913] text-xs font-bold tracking-wide border-0">
                    Distinguished Politician & Chieftain
                  </span>
                </div>

                {/* Main Heading */}
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1913] tracking-tight leading-tight">
                    Chief Eleduma Gbenga Abiodun
                  </h1>
                  <p className="text-sm sm:text-base font-bold text-neutral-600 mt-2">
                    Managing Director & Chief Executive Officer · Gatplus Dynamics Resources Limited
                  </p>
                </div>

                {/* Section Separator */}
                <div className="h-px bg-black/10 w-full" />

                {/* Official Autobiography Text (Exact 7 Paragraphs Justified) */}
                <div className="space-y-4 text-sm sm:text-base text-neutral-700">
                  
                  {/* Paragraph 1 */}
                  <p className="font-medium text-neutral-900 leading-relaxed text-justify">
                    {CEO_AUTOBIOGRAPHY_PARAGRAPHS[0]}
                  </p>

                  {/* Paragraph 2 - Education & Academic Foundation */}
                  <div className="p-4 sm:p-5 bg-[#F8F9FA] border-l-2 border-[#0A1913] space-y-1 my-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold mb-1">
                      Academic Trajectory & Intellectual Grounding
                    </div>
                    <p className="text-sm text-neutral-800 leading-relaxed text-justify">
                      {CEO_AUTOBIOGRAPHY_PARAGRAPHS[1]}
                    </p>
                  </div>

                  {/* Paragraph 3 - Gatplus Stewardship & Construction/Empowerment */}
                  <p className="leading-relaxed text-justify">
                    {CEO_AUTOBIOGRAPHY_PARAGRAPHS[2]}
                  </p>

                  {/* Paragraph 4 - Philanthropic Endeavors & Traditional Chieftaincies */}
                  <p className="leading-relaxed text-justify">
                    {CEO_AUTOBIOGRAPHY_PARAGRAPHS[3]}
                  </p>

                  {/* Paragraph 5 - Prestigious Awards & Honors */}
                  <p className="leading-relaxed text-justify">
                    {CEO_AUTOBIOGRAPHY_PARAGRAPHS[4]}
                  </p>

                  {/* Paragraph 6 - Family Life */}
                  <div className="p-4 bg-emerald-50/50 border-0 flex items-start gap-3 my-2">
                    <Heart className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <p className="text-sm text-neutral-800 leading-relaxed text-justify font-medium">
                      {CEO_AUTOBIOGRAPHY_PARAGRAPHS[5]}
                    </p>
                  </div>

                  {/* Paragraph 7 - National Honor & Legacy */}
                  <p className="font-semibold text-[#0A1913] bg-[#F8F9FA] p-4 border-0 leading-relaxed text-justify">
                    {CEO_AUTOBIOGRAPHY_PARAGRAPHS[6]}
                  </p>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* NEW SECTION: Physical Awards & Trophy Archive (Dedicated Storage for All Awards) */}
      <section id="awards-gallery" className="py-12 sm:py-16 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1913] uppercase tracking-wider mb-2">
              <span className="text-[#84E262]">✱</span>
              <span>Physical Trophies & Plaque Archive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1913] tracking-tight">
              Honors, Statuettes & Official Plaques
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 text-justify sm:text-center leading-relaxed">
              Photographic documentation of authenticated crystal awards, royal statuettes, merit plaques, and state honors conferred upon Chief Eleduma Gbenga Abiodun. Click any award to inspect in full-screen detail.
            </p>
            
            {/* Gallery Stats Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAFBF8] border border-black/5 text-xs font-bold text-[#0A1913] shadow-xs">
              <Award className="w-4 h-4 text-emerald-700" />
              <span>
                {showAllPhysicalAwards 
                  ? `Showing All ${PHYSICAL_AWARDS_GALLERY.length} Authenticated Physical Awards In Custody` 
                  : `Showing 1 Featured Conferred Award (${PHYSICAL_AWARDS_GALLERY.length - 1} More Available via Toggle)`}
              </span>
            </div>
          </div>

          {/* Award Display Container: Single Spotlight vs Full Gallery Grid */}
          {!showAllPhysicalAwards ? (
            <div className="max-w-md mx-auto">
              <div className="mb-2 text-center">
                <span className="inline-block px-2.5 py-0.5 bg-[#0A1913] text-[#84E262] text-[10px] font-mono font-bold uppercase tracking-wider">
                  Featured Conferred Honor · 01 of {PHYSICAL_AWARDS_GALLERY.length < 10 ? `0${PHYSICAL_AWARDS_GALLERY.length}` : PHYSICAL_AWARDS_GALLERY.length}
                </span>
              </div>

              <motion.div
                key={PHYSICAL_AWARDS_GALLERY[0].id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveAwardIndex(0)}
                className="bg-[#F8F9FA] hover:bg-white border-0 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
              >
                {/* Photo Viewport */}
                <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden">
                  <img
                    src={PHYSICAL_AWARDS_GALLERY[0].image}
                    alt={PHYSICAL_AWARDS_GALLERY[0].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Top Badge: Type & Year */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                    <span className="px-2 py-0.5 bg-[#0A1913]/90 backdrop-blur-sm text-[#84E262] text-[10px] font-black uppercase tracking-wider">
                      {PHYSICAL_AWARDS_GALLERY[0].badgeLabel}
                    </span>
                    <span className="px-2 py-0.5 bg-[#0A1913]/85 backdrop-blur-sm text-white/90 text-[10px] font-mono font-bold">
                      {PHYSICAL_AWARDS_GALLERY[0].dateOrYear}
                    </span>
                  </div>

                  {/* Hover Enlarge Trigger */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <div className="px-3 py-1.5 bg-[#84E262] text-[#0A1913] text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Enlarge Photo</span>
                    </div>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-[#0A1913] leading-snug group-hover:text-emerald-900 transition-colors">
                      {PHYSICAL_AWARDS_GALLERY[0].title}
                    </h3>
                    <div className="text-xs text-neutral-500 font-semibold mt-1">
                      {PHYSICAL_AWARDS_GALLERY[0].presenter}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed text-justify pt-2 border-t border-black/5 italic">
                    "{PHYSICAL_AWARDS_GALLERY[0].inscription}"
                  </p>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {PHYSICAL_AWARDS_GALLERY.map((award, index) => (
                <motion.div
                  key={award.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setActiveAwardIndex(index)}
                  className="bg-[#F8F9FA] hover:bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
                >
                  {/* Photo Viewport */}
                  <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Top Badge: Type & Year */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                      <span className="px-2 py-0.5 bg-[#0A1913]/90 backdrop-blur-sm text-[#84E262] text-[10px] font-black uppercase tracking-wider">
                        {award.badgeLabel}
                      </span>
                      <span className="px-2 py-0.5 bg-[#0A1913]/85 backdrop-blur-sm text-white/90 text-[10px] font-mono font-bold">
                        {award.dateOrYear}
                      </span>
                    </div>

                    {/* Hover Enlarge Trigger */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                      <div className="px-3 py-1.5 bg-[#84E262] text-[#0A1913] text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                        <Maximize2 className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Enlarge Photo</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Information */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-sm font-bold text-[#0A1913] leading-snug group-hover:text-emerald-900 transition-colors">
                        {award.title}
                      </h3>
                      <div className="text-[11px] text-neutral-500 font-semibold mt-1">
                        {award.presenter}
                      </div>
                    </div>

                    <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed text-justify pt-2 border-t border-black/5 italic">
                      "{award.inscription}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Interactive Toggle Button: See More / Show Less */}
          <div className="mt-8 pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-500 text-center sm:text-left font-medium">
              {showAllPhysicalAwards 
                ? `Displaying all ${PHYSICAL_AWARDS_GALLERY.length} authenticated physical awards and trophies in custody.`
                : `Displaying 1 featured honor. Click 'See More' to view the remaining ${PHYSICAL_AWARDS_GALLERY.length - 1} physical awards.`}
            </div>

            <button
              onClick={handleTogglePhysicalAwards}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#0A1913] hover:bg-[#153428] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer border-0 inline-flex items-center justify-center gap-2.5 shadow-sm group"
              aria-expanded={showAllPhysicalAwards}
            >
              <span>
                {showAllPhysicalAwards ? "Show Less" : `See More (${PHYSICAL_AWARDS_GALLERY.length - 1} More Awards)`}
              </span>
              <div className="w-4 h-4 bg-[#84E262] text-[#0A1913] flex items-center justify-center border-0">
                {showAllPhysicalAwards ? (
                  <ChevronUp className="w-3 h-3 stroke-[3]" />
                ) : (
                  <ChevronDown className="w-3 h-3 stroke-[3]" />
                )}
              </div>
            </button>
          </div>

        </div>
      </section>

      {/* "Executive Mandate & Distinctions" Section (15 Verified Honors) */}
      <section id="distinctions" className="py-12 sm:py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1913] uppercase tracking-wider mb-2">
              <span className="text-[#84E262]">✱</span>
              <span>Distinctions & Royal Citations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1913] tracking-tight">
              Executive Mandate & Distinctions
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 text-justify sm:text-center leading-relaxed">
              Verified traditional titles, diplomatic peace fellowships, royal emirate council citations, and state leadership honors conferred upon Chief Eleduma Gbenga Abiodun.
            </p>
            
            {/* Counter Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white border-0 shadow-xs text-xs font-bold text-[#0A1913]">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              <span>
                Showing {showAllAwards ? 'All 15' : '10 of 15'} Compiled Official Honors
              </span>
            </div>
          </div>

          {/* Awards List Container */}
          <div className="bg-white border-0 shadow-lg p-6 sm:p-10">
            
            {/* Grid of Distinctions (Items 1 to 10 initially) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {initialAwards.map((item) => (
                <div 
                  key={item.id}
                  className="p-4 sm:p-5 bg-[#F8F9FA] hover:bg-neutral-100 transition-colors border-0 flex items-start gap-4 group"
                >
                  {/* Number Badge */}
                  <div className="w-10 h-10 bg-[#0A1913] text-[#84E262] font-mono font-black text-sm flex items-center justify-center shrink-0 border-0">
                    {item.id < 10 ? `0${item.id}` : item.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#84E262] text-[#0A1913]">
                        {item.badgeLabel}
                      </span>
                      {item.year && (
                        <span className="text-[10px] font-mono font-bold text-neutral-500">
                          {item.year}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#0A1913] leading-snug group-hover:text-emerald-900 transition-colors">
                      {item.fullTitle}
                    </h3>
                    
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed text-justify">
                      {item.citation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Expandable Section for Awards 11 to 15 */}
            <AnimatePresence>
              {showAllAwards && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-black/5 mt-4">
                    {remainingAwards.map((item) => (
                      <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 sm:p-5 bg-[#F8F9FA] hover:bg-neutral-100 transition-colors border-0 flex items-start gap-4 group"
                      >
                        {/* Number Badge */}
                        <div className="w-10 h-10 bg-[#0A1913] text-[#84E262] font-mono font-black text-sm flex items-center justify-center shrink-0 border-0">
                          {item.id}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#84E262] text-[#0A1913]">
                              {item.badgeLabel}
                            </span>
                            {item.year && (
                              <span className="text-[10px] font-mono font-bold text-neutral-500">
                                {item.year}
                              </span>
                            )}
                          </div>

                          <h3 className="text-sm sm:text-base font-bold text-[#0A1913] leading-snug group-hover:text-emerald-900 transition-colors">
                            {item.fullTitle}
                          </h3>
                          
                          <p className="text-xs text-neutral-600 mt-1 leading-relaxed text-justify">
                            {item.citation}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Read More / Show Less Toggle Button */}
            <div className="mt-8 pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-neutral-500 font-medium text-center sm:text-left">
                {showAllAwards 
                  ? "Displaying all 15 authenticated citations and titles." 
                  : "Items 11 through 15 are accessible via the toggle below."}
              </div>

              <button
                onClick={() => setShowAllAwards(!showAllAwards)}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#0A1913] hover:bg-[#153428] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer border-0 inline-flex items-center justify-center gap-2.5 shadow-sm group"
                aria-expanded={showAllAwards}
              >
                <span>
                  {showAllAwards ? "Show Less" : "Read More (5 More Honors)"}
                </span>
                <div className="w-4 h-4 bg-[#84E262] text-[#0A1913] flex items-center justify-center border-0">
                  {showAllAwards ? (
                    <ChevronUp className="w-3 h-3 stroke-[3]" />
                  ) : (
                    <ChevronDown className="w-3 h-3 stroke-[3]" />
                  )}
                </div>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Tripartite Leadership Pillars with Justified Writeups */}
      <section className="py-12 sm:py-16 bg-[#FAFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1913] uppercase tracking-wider mb-2">
              <span className="text-[#84E262]">✱</span>
              <span>Tripartite Leadership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A1913] tracking-tight">
              Enterprise, Community & Civic Stewardship
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Construction & Economic Empowerment */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 border-0 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-[#0A1913] text-[#84E262] flex items-center justify-center mb-6 border-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                  Corporate Enterprise
                </div>
                <h3 className="text-xl font-bold text-[#0A1913] mb-3">
                  Construction & Supplies
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed text-justify">
                  Under Chief Eleduma's stewardship, Gatplus Dynamics Resources Limited has flourished in general construction, agricultural materials distribution, healthcare item supplies, and federal institutional support.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 text-xs font-semibold text-neutral-700 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#84E262]" />
                <span>Over a decade of trusted enterprise delivery</span>
              </div>
            </motion.div>

            {/* 2. Unemployed Youth & Women Empowerment */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-[#84E262] text-[#0A1913] p-8 border-0 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-[#0A1913] text-[#84E262] flex items-center justify-center mb-6 border-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div className="text-xs font-black text-[#0A1913]/70 uppercase tracking-wider mb-1">
                  Youth & Gender Inclusion
                </div>
                <h3 className="text-xl font-black text-[#0A1913] mb-3">
                  Empowerment & Training
                </h3>
                <p className="text-xs sm:text-sm text-[#0A1913]/90 font-medium leading-relaxed text-justify">
                  Visionary commitment to training and empowering unemployed youths and women across Ondo State and Nigeria with sustainable vocational toolkits, market skills, and economic independence.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0A1913]/15 text-xs font-bold text-[#0A1913] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0A1913]" />
                <span>Active vocational interventions across communities</span>
              </div>
            </motion.div>

            {/* 3. Philanthropy & Traditional Royalty */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[#0A1913] text-white p-8 border-0 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-white/10 text-[#84E262] flex items-center justify-center mb-6 border-0">
                  <Flag className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-[#84E262] uppercase tracking-wider mb-1">
                  Traditional Titles & Civic Impact
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Community & Traditional Leadership
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed text-justify">
                  Honored as Chief Mayedero of Isuada Land and Chief Asiwaju Bobaselu of Upenmen Kingdom in Owo Local Government, driving grassroots medical outreaches for the sick and aged.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-neutral-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#84E262]" />
                <span>Revered community chieftain & peace patron</span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Philanthropy Highlights & Humanitarian Medical Outreach */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1913] uppercase tracking-wider">
                <span className="text-[#84E262]">✱</span>
                <span>Grassroots Stewardship</span>
              </div>
              <h2 className="text-3xl font-black text-[#0A1913] tracking-tight">
                Philanthropy, Healthcare & Community Impact
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed text-justify">
                Chief Eleduma's philanthropic endeavors are as notable as his professional achievements. He has demonstrated unwavering commitment to improving lives through medical outreach programs for the sick, and support initiatives for the aged and the needy.
              </p>

              <div className="pt-4">
                <div className="p-6 bg-[#F8F9FA] border-0 space-y-3">
                  <Quote className="w-6 h-6 text-[#84E262]" />
                  <p className="text-xs sm:text-sm font-semibold italic text-[#0A1913] leading-relaxed text-justify">
                    "True enterprise success is empty without community transformation. Our duty as leaders is to build pathways where young people can flourish, families are supported, and our communities prosper."
                  </p>
                  <div className="text-xs font-bold text-neutral-500">
                    — Chief Eleduma Gbenga Abiodun
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {EXECUTIVE_PROFILE.philanthropyHighlights.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  className="p-6 sm:p-7 bg-[#F8F9FA] border-0 hover:bg-neutral-100 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 bg-[#84E262]" />
                    <h3 className="text-base sm:text-lg font-bold text-[#0A1913]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed text-justify pl-5">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Corporate Governance & Executive Secretariat CTA */}
      <section className="pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A1913] text-white p-8 sm:p-12 lg:p-16 border-0 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <div className="text-xs font-mono text-[#84E262] uppercase tracking-wider">
                Corporate Secretariat & Office of the CEO
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Connect with Chief Eleduma's Secretariat
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed text-justify sm:text-left">
                For official inquiries, construction and procurement briefings, or executive engagements with Gatplus Dynamics Resources Limited in Abuja and Ondo State.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={onBackToHome}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer border-0 text-center"
              >
                Back to Main Portal
              </button>

              <button
                onClick={onContact}
                className="px-6 py-3.5 bg-[#84E262] hover:bg-[#74d053] text-[#0A1913] text-xs font-black transition-colors cursor-pointer border-0 text-center inline-flex items-center justify-center gap-2 group"
              >
                <span>Initiate Executive Inquiry</span>
                <ChevronRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Screen Physical Award Lightbox Modal */}
      <AnimatePresence>
        {activeAward !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md"
            onClick={() => setActiveAwardIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-[#0A1913] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Header */}
              <div className="p-4 sm:px-6 bg-[#07130F] border-b border-white/10 flex items-center justify-between z-10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="px-2.5 py-1 bg-[#84E262] text-[#0A1913] text-[10px] font-black uppercase tracking-wider">
                    {activeAward.badgeLabel}
                  </div>
                  <div className="text-white font-bold text-sm sm:text-base tracking-tight truncate max-w-xs sm:max-w-md">
                    {activeAward.title}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-neutral-400 font-bold hidden sm:inline">
                    Award {activeAwardIndex! + 1} of {PHYSICAL_AWARDS_GALLERY.length}
                  </span>

                  <button
                    onClick={() => setActiveAwardIndex(null)}
                    aria-label="Close enlarged view"
                    className="p-2 bg-white/10 hover:bg-white/20 text-white hover:text-[#84E262] transition-colors cursor-pointer border-0"
                  >
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Lightbox Image Viewport */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[340px] sm:min-h-[460px] p-2 sm:p-4">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeAward.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    src={activeAward.image}
                    alt={activeAward.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[60vh] sm:max-h-[66vh] max-w-full w-auto h-auto object-contain shadow-2xl select-none"
                  />
                </AnimatePresence>

                {/* Prev / Next Arrows */}
                <button
                  onClick={() => 
                    setActiveAwardIndex((prev) => 
                      prev !== null ? (prev - 1 + PHYSICAL_AWARDS_GALLERY.length) % PHYSICAL_AWARDS_GALLERY.length : null
                    )
                  }
                  aria-label="Previous Award Photo"
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#0A1913]/90 hover:bg-[#84E262] text-white hover:text-[#0A1913] transition-all flex items-center justify-center cursor-pointer border border-white/10 shadow-lg z-20"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[3]" />
                </button>

                <button
                  onClick={() => 
                    setActiveAwardIndex((prev) => 
                      prev !== null ? (prev + 1) % PHYSICAL_AWARDS_GALLERY.length : null
                    )
                  }
                  aria-label="Next Award Photo"
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#0A1913]/90 hover:bg-[#84E262] text-white hover:text-[#0A1913] transition-all flex items-center justify-center cursor-pointer border border-white/10 shadow-lg z-20"
                >
                  <ChevronRight className="w-6 h-6 stroke-[3]" />
                </button>
              </div>

              {/* Lightbox Bottom Citation Inscription */}
              <div className="p-4 sm:p-6 bg-[#07130F] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10 shrink-0">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-white font-extrabold text-sm sm:text-base">
                      {activeAward.title}
                    </span>
                    <span className="text-xs text-[#84E262] font-semibold">
                      · {activeAward.presenter} ({activeAward.dateOrYear})
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed text-justify">
                    "{activeAward.inscription}"
                  </p>
                </div>

                {/* Thumbnails */}
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  {PHYSICAL_AWARDS_GALLERY.map((award, idx) => (
                    <button
                      key={award.id}
                      onClick={() => setActiveAwardIndex(idx)}
                      className={`relative w-12 sm:w-14 h-12 overflow-hidden border-2 transition-all cursor-pointer ${
                        idx === activeAwardIndex 
                          ? 'border-[#84E262] scale-105' 
                          : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={award.image}
                        alt={award.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};
