import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Maximize2, 
  MapPin, 
  Calendar, 
  Trophy, 
  Tag, 
  Sparkles,
  ExternalLink,
  Layers,
  Camera
} from 'lucide-react';
import { MEDIA_GALLERY, MediaItem } from '../data/mediaData';

interface MediaPageProps {
  onBackToHome: () => void;
  onOpenCEOPage: () => void;
  onContact: () => void;
}

export const MediaPage: React.FC<MediaPageProps> = ({
  onBackToHome,
  onOpenCEOPage,
  onContact
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeMediaIndex, setActiveMediaIndex] = useState<number | null>(null);

  const categories = [
    { label: 'All Photos', count: MEDIA_GALLERY.length, value: 'All' },
    { label: 'Baba Agba Unity Cup & Sports', count: MEDIA_GALLERY.filter(m => m.category === 'Community Sports & Youth').length, value: 'Community Sports & Youth' },
    { label: 'Engineering & Field Works', count: MEDIA_GALLERY.filter(m => m.category === 'Field Execution & Engineering').length, value: 'Field Execution & Engineering' }
  ].filter(cat => cat.count > 0);

  const filteredMedia = selectedCategory === 'All'
    ? MEDIA_GALLERY
    : MEDIA_GALLERY.filter(item => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeMediaIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveMediaIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveMediaIndex((prev) => (prev !== null ? (prev + 1) % filteredMedia.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setActiveMediaIndex((prev) => 
          prev !== null ? (prev - 1 + filteredMedia.length) % filteredMedia.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeMediaIndex, filteredMedia.length]);

  const activeItem: MediaItem | null = activeMediaIndex !== null ? filteredMedia[activeMediaIndex] : null;

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

          {/* Page Badge & Action Links */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCEOPage}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 bg-neutral-50 hover:bg-neutral-100 text-[#0A1913] text-xs font-bold transition-colors cursor-pointer border-0"
            >
              <span>CEO Profile</span>
              <span className="w-1.5 h-1.5 bg-[#84E262]" />
            </button>

            <button
              onClick={onContact}
              className="px-5 py-2.5 bg-[#0A1913] hover:bg-[#142d23] text-white text-xs font-bold transition-all shadow-sm cursor-pointer border-0 inline-flex items-center gap-2 group"
            >
              <span>Contact Secretariat</span>
              <div className="w-4 h-4 bg-[#84E262] text-[#0A1913] flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform border-0">
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="bg-[#0A1913] text-white pt-16 pb-16 border-b border-white/10 relative overflow-hidden">
        {/* Subtle Decorative Architectural Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #84E262 1px, transparent 0)', backgroundSize: '36px 36px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#84E262] uppercase tracking-wider mb-3">
              <Camera className="w-4 h-4" />
              <span>Official Gallery & Photographic Archive</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400 font-normal">Gatplus Dynamic Resources Limited</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Field Deployments, Youth Empowerment & Community Impact
            </h1>

            <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
              Explore the verified visual record documenting grassroots athletic championships, youth talent sponsorships, civil engineering foundations, and institutional procurement deliveries orchestrated under the visionary leadership of CEO <strong className="text-white">Hon. Gbenga Abiodun Eleduma (Baba Agba 1)</strong>.
            </p>

            {/* Unboxed Minimalist Metadata Divider */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-neutral-400 font-medium">
              <span>9 Grassroots Tournament Highlights</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Baba Agba Unity Cup Finals</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Federal Procurement Executions</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>High-Resolution Photo Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        
        {/* Interactive Filter Segmented Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-black/10">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 text-xs font-bold transition-all cursor-pointer border-0 flex items-center gap-2 ${
                    isActive 
                      ? 'bg-[#0A1913] text-[#84E262] shadow-sm' 
                      : 'bg-white text-neutral-600 hover:text-[#0A1913] hover:bg-neutral-100'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 ${isActive ? 'bg-white/10 text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-neutral-500 font-medium">
            Showing <strong className="text-[#0A1913]">{filteredMedia.length}</strong> photo records
          </div>
        </div>

        {/* Modern Responsive Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {filteredMedia.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="group bg-white border border-black/5 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
              onClick={() => setActiveMediaIndex(idx)}
            >
              {/* Media Image Container with Sharp Frame */}
              <div className="relative aspect-[4/3] bg-[#0A1913] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Top Badge: Category */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 bg-[#0A1913]/90 backdrop-blur-xs text-[#84E262] text-[10px] font-bold uppercase tracking-wider">
                    {item.category === 'Community Sports & Youth' ? 'Youth Sports' : item.category === 'Field Execution & Engineering' ? 'Engineering' : 'Institutional'}
                  </span>
                </div>

                {/* Hover Inspect Action Button */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-8 h-8 bg-white/90 backdrop-blur-xs text-[#0A1913] flex items-center justify-center shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-white/90">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#84E262]" />
                    <span className="truncate max-w-[180px]">{item.location}</span>
                  </span>
                  <span className="font-mono text-[10px] text-neutral-300">
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    {item.event}
                  </div>
                  <h3 className="text-base font-bold text-[#0A1913] leading-snug group-hover:text-emerald-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Highlights Strip */}
                <div className="mt-4 pt-3 border-t border-black/5 flex flex-wrap gap-1.5">
                  {item.highlights.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] text-neutral-500 bg-neutral-100 px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 bg-[#0A1913] text-white p-8 sm:p-12 border-0 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="text-xs font-bold text-[#84E262] uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
              <Trophy className="w-4 h-4" />
              <span>Community Leadership & Corporate Partnership</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Empowering Grassroots Talent Across Nigerian Communities
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Through the continuous sponsorship of athletic tournaments, educational development initiatives, and technical infrastructure support, Gatplus Dynamic remains committed to societal advancement and youth development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenCEOPage}
              className="px-6 py-3 bg-white hover:bg-neutral-100 text-[#0A1913] text-xs font-bold transition-all cursor-pointer border-0"
            >
              View CEO Profile & Honors
            </button>
            <button
              onClick={onContact}
              className="px-6 py-3 bg-[#84E262] hover:bg-[#72cd52] text-[#0A1913] text-xs font-black transition-all cursor-pointer border-0 inline-flex items-center justify-center gap-2"
            >
              <span>Contact Secretariat</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeItem && activeMediaIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between backdrop-blur-md"
            onClick={() => setActiveMediaIndex(null)}
          >
            {/* Top Lightbox Bar */}
            <div 
              className="px-6 py-4 flex items-center justify-between text-white border-b border-white/10 bg-black/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-[#84E262] text-[#0A1913] text-[10px] font-black uppercase">
                  Photo {activeMediaIndex + 1} of {filteredMedia.length}
                </span>
                <span className="text-xs text-neutral-400 hidden sm:inline">
                  {activeItem.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-400 mr-2 hidden md:inline">
                  Use Arrow keys to navigate · Esc to close
                </span>
                <button
                  onClick={() => setActiveMediaIndex(null)}
                  className="p-2 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border-0"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Central Lightbox Image Viewport */}
            <div 
              className="flex-1 relative flex items-center justify-center p-4 sm:p-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMediaIndex((prev) => 
                    prev !== null ? (prev - 1 + filteredMedia.length) % filteredMedia.length : null
                  );
                }}
                className="absolute left-4 z-20 p-3 bg-black/60 hover:bg-black/90 text-white transition-all cursor-pointer border-0 hover:text-[#84E262]"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              {/* Main Display Image */}
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="max-w-5xl max-h-[72vh] flex items-center justify-center shadow-2xl"
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[72vh] max-w-full object-contain"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMediaIndex((prev) => 
                    prev !== null ? (prev + 1) % filteredMedia.length : null
                  );
                }}
                className="absolute right-4 z-20 p-3 bg-black/60 hover:bg-black/90 text-white transition-all cursor-pointer border-0 hover:text-[#84E262]"
                aria-label="Next Image"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>

            {/* Bottom Caption & Details Bar */}
            <div 
              className="px-6 py-5 bg-black/85 text-white border-t border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 max-w-3xl">
                  <div className="flex items-center gap-3 text-xs text-[#84E262] font-semibold">
                    <span>{activeItem.event}</span>
                    <span aria-hidden="true" className="text-neutral-600">·</span>
                    <span className="text-neutral-400">{activeItem.location}</span>
                    <span aria-hidden="true" className="text-neutral-600">·</span>
                    <span className="text-neutral-400">{activeItem.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white leading-tight">
                    {activeItem.title}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed pt-1">
                    {activeItem.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  {activeItem.highlights.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] text-neutral-300 bg-white/10 px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};
