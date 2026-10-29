import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Maximize2,
  X,
  Play
} from 'lucide-react';
import { IMAGES } from '../assets';

export interface ProjectSourceSlide {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  sourceTag: string;
  facebookUrl: string;
  image: string;
  description: string;
  isVideo?: boolean;
}

export const PROJECT_SOURCE_SLIDES: ProjectSourceSlide[] = [
  {
    id: 'empowerment-owo',
    title: 'Hon. Gbenga Eleduma Empowers Thousands in Owo',
    subtitle: 'Distribution of Laptops, Artisan Work Gear & Business Grants',
    category: 'Community Empowerment',
    sourceTag: 'Verified Press Dispatch',
    facebookUrl: 'https://www.facebook.com/share/p/19vKN3PEAT/',
    image: IMAGES.fbEmpowermentOwo,
    description: 'Comprehensive grassroots empowerment initiative organized by Hon. Gbenga Eleduma, distributing modern laptops, professional artisan trade equipment, and direct financial startup grants to youths and local enterprises across Owo.',
    isVideo: false
  },
  {
    id: 'unity-cup-video',
    title: 'Gbenga Eleduma Foundation Unity Cup Grand Finale',
    subtitle: '5th Edition Championship & Cash Prize Presentation',
    category: 'Youth & Sports Development',
    sourceTag: 'Official Video Broadcast',
    facebookUrl: 'https://www.facebook.com/share/v/1DNi2mj7kY/',
    image: IMAGES.fbUnityCupVideo,
    description: 'Live video coverage of the thrilling 5th edition grand finale of the Gbenga Eleduma Foundation Unity Cup tournament, featuring the official championship trophy presentation and NGN 500,000 cash grant awarded to the winners.',
    isVideo: true
  },
  {
    id: 'humanitarian-award',
    title: 'Great Achievers Awards: Recognizing the Spirit of Humanity',
    subtitle: 'Chief Eleduma Gbenga Abiodun Honored for Social Upliftment',
    category: 'Philanthropic Recognition',
    sourceTag: 'Humanitarian of the Year',
    facebookUrl: 'https://www.facebook.com/share/p/18NDDqmRsu/',
    image: IMAGES.fbHumanitarianAward,
    description: 'Prestigious public recognition nominating Chief Eleduma Gbenga Abiodun for "The Humanitarian of the Year" at the Great Achievers Summit & Awards for Excellence, celebrating his relentless dedication to uplifting vulnerable communities.',
    isVideo: false
  },
  {
    id: 'peoplesmind-patron',
    title: "Olowo's Debate & Essay: Meet OLGASU National Patron",
    subtitle: 'CEO Gatplus Dynamic Resources Limited, Hon. Eleduma Gbenga',
    category: 'Academic & Civic Patronage',
    sourceTag: 'Peoplesmind Feature',
    facebookUrl: 'https://www.facebook.com/share/p/19rkWJxWoj/',
    image: IMAGES.fbPeoplesmindPatron,
    description: 'Special editorial profiling Hon. Eleduma Gbenga as OLGASU National Patron and corporate leader, championing educational competitions, student development, and transformative civic investments throughout Ondo State.',
    isVideo: false
  }
];

// Clean vector Facebook monogram
const FacebookMonogram: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const ProjectSourceSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROJECT_SOURCE_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROJECT_SOURCE_SLIDES.length) % PROJECT_SOURCE_SLIDES.length);
  }, []);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, nextSlide, prevSlide]);

  // Auto-sliding interval: pauses on hover or when lightbox is open
  useEffect(() => {
    if (isHovered || isLightboxOpen) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered, isLightboxOpen, nextSlide]);

  const currentSlide = PROJECT_SOURCE_SLIDES[currentIndex];

  return (
    <>
      <div 
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] min-h-[420px] sm:min-h-[460px] lg:min-h-[520px] bg-[#0A1913] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group select-none flex flex-col justify-between"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="region"
        aria-label="Verified Project Source Carousel"
      >
        {/* Background Image Carousel with Smooth Transitions */}
        <div 
          className="absolute inset-0 z-0 overflow-hidden bg-[#0A1913] cursor-pointer"
          onClick={() => setIsLightboxOpen(true)}
          title="Click to expand full image"
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide.id}
              custom={direction}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] group-hover:scale-103 transition-transform duration-700 ease-out"
              />
            </motion.div>
          </AnimatePresence>

          {/* Elegant Scrim Gradient: Warm Dark Forest with Smooth Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1913] via-[#0A1913]/65 via-45% to-black/25 pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1913]/70 via-transparent to-black/40 pointer-events-none z-10" />
        </div>

        {/* Top Header: Modern Glassmorphic Badges & Expand Control */}
        <div className="relative z-20 p-4 sm:p-6 flex items-center justify-between gap-3 pointer-events-none">
          {/* Glassmorphic Category Pill */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1913]/80 backdrop-blur-md text-white text-xs font-medium border border-white/15 shadow-sm">
              <span className="text-[#84E262] font-semibold">{currentSlide.category}</span>
              <span className="text-white/30">·</span>
              <span className="text-neutral-300">{currentSlide.sourceTag}</span>
            </div>
          </div>

          {/* Right Action: Expand Fullscreen & Slide Counter */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(true);
              }}
              aria-label="View photo in high resolution"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/15 transition-all cursor-pointer shadow-sm hover:scale-105"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#84E262]" />
              <span className="hidden xs:inline">Expand Photo</span>
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A1913]/85 backdrop-blur-md text-white/90 text-xs font-medium border border-white/10 shadow-sm">
              <span className="text-[#84E262] font-semibold">{currentIndex + 1}</span>
              <span className="text-white/40">/</span>
              <span>{PROJECT_SOURCE_SLIDES.length}</span>
            </div>
          </div>
        </div>

        {/* Center Video Play Affordance (Slide 2) */}
        {currentSlide.isVideo && (
          <div className="relative z-20 flex-1 flex items-center justify-center pointer-events-none">
            <a
              href={currentSlide.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Watch video on Facebook"
              className="pointer-events-auto group/play inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0A1913]/90 hover:bg-[#84E262] text-white hover:text-[#0A1913] backdrop-blur-md border border-white/20 hover:border-[#84E262] transition-all duration-300 shadow-2xl hover:scale-105"
            >
              <div className="w-8 h-8 rounded-full bg-[#84E262] group-hover/play:bg-[#0A1913] text-[#0A1913] group-hover/play:text-[#84E262] flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span className="text-xs font-semibold tracking-wide">Watch Video on Facebook</span>
            </a>
          </div>
        )}

        {/* Manual Left/Right Navigation Arrows */}
        <div className="absolute inset-x-3 sm:inset-x-5 top-1/2 -translate-y-1/2 z-30 flex items-center justify-between pointer-events-none">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Previous story"
            className="pointer-events-auto w-10 h-10 rounded-full bg-[#0A1913]/80 hover:bg-[#84E262] text-white hover:text-[#0A1913] backdrop-blur-md flex items-center justify-center transition-all cursor-pointer opacity-85 group-hover:opacity-100 hover:scale-105 border border-white/15 shadow-xl"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Next story"
            className="pointer-events-auto w-10 h-10 rounded-full bg-[#0A1913]/80 hover:bg-[#84E262] text-white hover:text-[#0A1913] backdrop-blur-md flex items-center justify-center transition-all cursor-pointer opacity-85 group-hover:opacity-100 hover:scale-105 border border-white/15 shadow-xl"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.2]" />
          </button>
        </div>

        {/* Bottom Content Area: Editorial Presentation & Action Button */}
        <div className="relative z-20 p-5 sm:p-6 sm:pb-7 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2 cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            >
              <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-sm text-balance">
                {currentSlide.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-200/90 leading-relaxed max-w-2xl line-clamp-2">
                {currentSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Bar: Modern Facebook Link Button + Clean Progress Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-white/10">
            {/* Facebook Action Button */}
            <a
              href={currentSlide.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#84E262] hover:bg-[#97ea78] text-[#0A1913] font-semibold text-xs tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer group/cta self-start sm:self-auto"
            >
              <FacebookMonogram className="w-3.5 h-3.5 fill-current text-[#0A1913]" />
              <span>View Source on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.2] group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
            </a>

            {/* Modern Slide Indicators */}
            <div className="flex items-center gap-1.5 self-end sm:self-auto">
              {PROJECT_SOURCE_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border-0 ${
                    idx === currentIndex
                      ? 'w-7 bg-[#84E262]'
                      : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Interactive Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full max-h-[92vh] bg-[#0A1913] rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A1913]/90">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
                    <FacebookMonogram className="w-3.5 h-3.5 text-[#1877F2]" />
                    <span>{currentSlide.category}</span>
                    <span className="text-white/30">·</span>
                    <span className="text-[#84E262]">{currentSlide.sourceTag}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={currentSlide.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#84E262] text-[#0A1913] font-semibold text-xs hover:bg-[#97ea78] transition-all"
                  >
                    <span>Open on Facebook</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    aria-label="Close image preview"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Image Viewport */}
              <div className="relative flex-1 min-h-[300px] max-h-[62vh] overflow-hidden bg-black flex items-center justify-center group/view">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="max-w-full max-h-[62vh] w-auto h-auto object-contain mx-auto"
                />

                {/* Modal Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  aria-label="Previous slide"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#84E262] text-white hover:text-[#0A1913] backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  aria-label="Next slide"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#84E262] text-white hover:text-[#0A1913] backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Footer Caption */}
              <div className="p-6 bg-[#0A1913] border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {currentSlide.title}
                  </h4>
                  <div className="text-xs text-neutral-400 font-medium shrink-0">
                    Slide {currentIndex + 1} of {PROJECT_SOURCE_SLIDES.length}
                  </div>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {currentSlide.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
