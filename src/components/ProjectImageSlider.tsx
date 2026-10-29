import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Maximize2, 
  X, 
  CheckCircle2,
  ZoomIn
} from 'lucide-react';
import { IMAGES } from '../assets';

export interface ProjectSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tag: string;
  location: string;
  coordinates?: string;
  timestamp?: string;
  description: string;
}

export const PROJECT_SLIDES: ProjectSlide[] = [
  {
    id: 'tasha-energy',
    image: IMAGES.tashaEnergySupply,
    title: 'Tasha Energy Supply & Logistics - Ibadan',
    subtitle: 'Verified Solar & Electrical Equipment Mobilization',
    tag: 'Verified Delivery',
    location: 'New Eleyele Rd, Ibadan, Oyo State',
    coordinates: 'Lat 7.429572° Long 3.837382°',
    timestamp: 'Friday, 25/09/2026 11:01 AM GMT+01:00',
    description: 'Procurement delivery and warehousing of specialized Tasha Energy solar accessories, brackets, and electrical distribution hardware for rural and urban infrastructure deployment.',
  },
  {
    id: 'galvanized-infrastructure',
    image: IMAGES.galvanizedInfrastructure,
    title: 'Galvanized Infrastructure Deployment',
    subtitle: 'Industrial Tubular Steel Poles & Distribution Line Hardware',
    tag: 'Public Works',
    location: 'Ibadan Logistics Depot, Oyo State',
    coordinates: 'Lat 7.429572° Long 3.837382°',
    timestamp: 'Friday, 25/09/2026 11:02 AM GMT+01:00',
    description: 'Bulk delivery of heavy-gauge hot-dip galvanized steel street lighting and power distribution poles ready for corridor civil erection and electrification works.',
  },
  {
    id: 'foundation-casting',
    image: IMAGES.foundationCastingLaloko,
    title: 'Foundation Casting - Laloko, Ogun State',
    subtitle: 'Reinforced Concrete Foundation & Structural Anchor Alignment',
    tag: 'Field Operations',
    location: 'Owode, Laloko, Ogun State',
    coordinates: 'Lat 6.97541° Long 3.457745°',
    timestamp: 'Friday, 04/09/2026 05:39 PM GMT+01:00',
    description: 'Precision on-site shuttering and high-grade concrete casting with heavy anchor bolts for public infrastructure stability and mast installation.',
  },
];

export const ProjectImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROJECT_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROJECT_SLIDES.length) % PROJECT_SLIDES.length);
  }, []);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Auto-sliding interval (pauses when hovered or when lightbox is open)
  useEffect(() => {
    if (isHovered || isLightboxOpen) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3800);

    return () => clearInterval(timer);
  }, [isHovered, isLightboxOpen, nextSlide]);

  // Keyboard navigation when Lightbox is active
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isLightboxOpen, nextSlide, prevSlide]);

  const currentSlide = PROJECT_SLIDES[currentIndex];

  return (
    <>
      {/* Main Slider Bento Container */}
      <div 
        className="relative w-full h-full min-h-[230px] sm:min-h-[250px] bg-[#0A1913] rounded-3xl overflow-hidden shadow-md border border-black/10 group select-none flex flex-col justify-between cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openLightbox}
        role="button"
        tabIndex={0}
        aria-label={`View enlarged photo: ${currentSlide.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLightbox();
          }
        }}
      >
        {/* Background Animated Images */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A1913]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide.id}
              custom={direction}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.04] transition-transform duration-700 group-hover:scale-103"
              />
            </motion.div>
          </AnimatePresence>

          {/* Ambient Vignette & Bottom Readability Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1913] via-[#0A1913]/55 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent pointer-events-none z-10" />
        </div>

        {/* Top Header Controls: Badge, Click to Enlarge Prompt & Slide Index */}
        <div className="relative z-20 p-3 sm:p-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1913]/90 backdrop-blur-md text-[#84E262] text-[10px] font-bold uppercase tracking-wider border border-white/10 shadow-sm">
            <span>{currentSlide.tag}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Click to Enlarge Pill */}
            <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 text-white text-[10px] font-semibold tracking-wide border border-white/15 shadow-sm">
              <ZoomIn className="w-3 h-3 text-[#84E262]" />
              <span>Click to Enlarge</span>
            </div>

            <div className="px-2.5 py-1 rounded-full bg-[#0A1913]/85 backdrop-blur-md text-white/90 text-[10px] font-semibold border border-white/10 shadow-sm">
              {currentIndex + 1} / {PROJECT_SLIDES.length}
            </div>
          </div>
        </div>

        {/* Floating Center Zoom Overlay Icon (appears subtly on hover) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-11 h-11 rounded-full bg-[#0A1913]/85 backdrop-blur-md text-[#84E262] flex items-center justify-center border border-white/20 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
            <Maximize2 className="w-4 h-4 stroke-[2.2]" />
          </div>
        </div>

        {/* Middle Nav Arrows (Subtle & high contrast) */}
        <div className="absolute inset-x-2.5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-between pointer-events-none">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous Project Slide"
            className="pointer-events-auto w-8 h-8 rounded-full bg-[#0A1913]/80 hover:bg-[#84E262] text-white hover:text-[#0A1913] backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer opacity-80 group-hover:opacity-100 hover:scale-105 border border-white/10 shadow-md"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next Project Slide"
            className="pointer-events-auto w-8 h-8 rounded-full bg-[#0A1913]/80 hover:bg-[#84E262] text-white hover:text-[#0A1913] backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer opacity-80 group-hover:opacity-100 hover:scale-105 border border-white/10 shadow-md"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>

        {/* Bottom Content Bar: Title, Location & Pagination Dots */}
        <div className="relative z-20 p-3 sm:p-4 pt-6 space-y-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="space-y-1"
            >
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug drop-shadow-sm flex items-center gap-2">
                <span>{currentSlide.title}</span>
              </h4>
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-300 font-medium">
                <MapPin className="w-3 h-3 text-[#84E262] shrink-0" />
                <span className="truncate">{currentSlide.location}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots with Active Progress */}
          <div className="flex items-center justify-between pt-1 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              {PROJECT_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border-0 ${
                    idx === currentIndex
                      ? 'w-6 bg-[#84E262]'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <span className="text-[10px] text-neutral-300 font-medium flex items-center gap-1">
              <span>Expand</span>
              <Maximize2 className="w-2.5 h-2.5 text-[#84E262]" />
            </span>
          </div>
        </div>
      </div>

      {/* Full-Screen High-Resolution Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-[#0A1913] rounded-3xl border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Top Header Bar */}
              <div className="p-4 sm:px-6 bg-[#07130F] border-b border-white/10 flex items-center justify-between z-10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-full bg-[#84E262] text-[#0A1913] text-xs font-bold uppercase tracking-wider">
                    {currentSlide.tag}
                  </div>
                  <div className="text-white font-bold text-sm sm:text-base tracking-tight truncate max-w-xs sm:max-w-md">
                    {currentSlide.title}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-400 font-medium hidden sm:inline">
                    Photo {currentIndex + 1} of {PROJECT_SLIDES.length}
                  </span>

                  <button
                    onClick={closeLightbox}
                    aria-label="Close enlarged view"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-[#84E262] flex items-center justify-center transition-colors cursor-pointer border-0"
                  >
                    <X className="w-5 h-5 stroke-[2.2]" />
                  </button>
                </div>
              </div>

              {/* Lightbox Center Image Viewport */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[340px] sm:min-h-[460px] p-2 sm:p-4">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.img
                    key={currentSlide.id}
                    custom={direction}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[60vh] sm:max-h-[66vh] max-w-full w-auto h-auto object-contain shadow-2xl select-none"
                  />
                </AnimatePresence>

                {/* Lightbox Prev / Next Arrows */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous Image"
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#0A1913]/90 hover:bg-[#84E262] text-white hover:text-[#0A1913] transition-all flex items-center justify-center cursor-pointer border border-white/10 shadow-lg z-20"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[3]" />
                </button>

                <button
                  onClick={nextSlide}
                  aria-label="Next Image"
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#0A1913]/90 hover:bg-[#84E262] text-white hover:text-[#0A1913] transition-all flex items-center justify-center cursor-pointer border border-white/10 shadow-lg z-20"
                >
                  <ChevronRight className="w-6 h-6 stroke-[3]" />
                </button>
              </div>

              {/* Lightbox Bottom Verified Information Panel */}
              <div className="p-4 sm:p-6 bg-[#07130F] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10 shrink-0">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-white font-extrabold text-sm sm:text-base">
                      {currentSlide.title}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      — {currentSlide.subtitle}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {currentSlide.description}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-neutral-400 font-mono pt-1 flex-wrap">
                    <span className="flex items-center gap-1.5 text-[#84E262]">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      {currentSlide.location}
                    </span>
                    {currentSlide.coordinates && (
                      <span className="text-neutral-400">
                        GPS: {currentSlide.coordinates}
                      </span>
                    )}
                    {currentSlide.timestamp && (
                      <span className="text-neutral-500 hidden md:inline">
                        Recorded: {currentSlide.timestamp}
                      </span>
                    )}
                  </div>
                </div>

                {/* Lightbox Thumbnails / Direct Switcher */}
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  {PROJECT_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(idx)}
                      className={`relative w-12 sm:w-16 h-10 sm:h-12 overflow-hidden border-2 transition-all cursor-pointer ${
                        idx === currentIndex 
                          ? 'border-[#84E262] scale-105' 
                          : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
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
    </>
  );
};
