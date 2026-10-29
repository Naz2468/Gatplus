/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HeroSection } from './components/HeroSection';
import { ApproachSection } from './components/ApproachSection';
import { AboutSection } from './components/AboutSection';
import { ImpactSection } from './components/ImpactSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CEOPage } from './components/CEOPage';
import { MediaPage } from './components/MediaPage';
import { ExecutiveModal } from './components/ExecutiveModal';
import { ProjectDrawer, CapabilityDrawer } from './components/Drawers';
import { BackgroundMotion } from './components/BackgroundMotion';
import { ProjectRecord } from './data/corporateData';

export default function App() {
  // Navigation / Page state
  const [currentPage, setCurrentPage] = useState<'home' | 'ceo' | 'media'>('home');

  // Modal states
  const [isExecutiveModalOpen, setIsExecutiveModalOpen] = useState(false);
  
  // Drawer states
  const [selectedProject, setSelectedProject] = useState<ProjectRecord | null>(null);
  const [capabilityDrawerType, setCapabilityDrawerType] = useState<'supply' | 'aviation' | 'manpower' | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToCEO = () => {
    setCurrentPage('ceo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToMedia = () => {
    setCurrentPage('media');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactFromOtherPage = () => {
    setCurrentPage('home');
    setTimeout(() => {
      scrollToSection('contact');
    }, 150);
  };

  return (
    <div className="relative min-h-screen bg-[#FAFBF8] text-[#072118] flex flex-col font-sans selection:bg-[#8EE263] selection:text-[#072118]">
      
      {/* Dynamic Background Motion Layer */}
      <BackgroundMotion />

      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.div
            key="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col min-h-screen relative z-10"
          >
            {/* Main Content Sections */}
            <main className="flex-1">
              
              {/* Hero Section with Sharp Architectural Layout */}
              <div id="hero">
                <HeroSection
                  onContact={() => scrollToSection('contact')}
                  onExplorePortfolio={() => scrollToSection('impact')}
                  onOpenCEOPage={handleNavigateToCEO}
                  onOpenMediaPage={handleNavigateToMedia}
                />
              </div>

              {/* Operating Approach Section (Trio of White, Lime, Dark Green Bento Cards) */}
              <ApproachSection
                onOpenSupplyChain={() => setCapabilityDrawerType('supply')}
                onOpenAviation={() => setCapabilityDrawerType('aviation')}
                onOpenManpower={() => setCapabilityDrawerType('manpower')}
              />

              {/* About Section ("Who We Are" with Boardroom Image & CEO Profile Lockup) */}
              <AboutSection
                onOpenExecutiveModal={() => setIsExecutiveModalOpen(true)}
                onOpenCEOPage={handleNavigateToCEO}
              />

              {/* Public Sector Track Record (4 Audited Bento Cards) */}
              <ImpactSection
                onSelectProject={(project) => setSelectedProject(project)}
              />

              {/* Procurement Secretariat Brief & Inquiries */}
              <ContactSection />

            </main>

            {/* Footer */}
            <Footer
              onContact={() => scrollToSection('contact')}
              onOpenCEOPage={handleNavigateToCEO}
              onOpenMediaPage={handleNavigateToMedia}
            />
          </motion.div>
        ) : currentPage === 'ceo' ? (
          <CEOPage
            key="ceo-page"
            onBackToHome={handleNavigateHome}
            onContact={handleContactFromOtherPage}
            onOpenMediaPage={handleNavigateToMedia}
          />
        ) : (
          <MediaPage
            key="media-page"
            onBackToHome={handleNavigateHome}
            onOpenCEOPage={handleNavigateToCEO}
            onContact={handleContactFromOtherPage}
          />
        )}
      </AnimatePresence>

      {/* Executive Governance Modal */}
      <ExecutiveModal
        isOpen={isExecutiveModalOpen}
        onClose={() => setIsExecutiveModalOpen(false)}
      />

      {/* Interactive Project Inspection Drawer */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestTenderQuote={() => {
          setSelectedProject(null);
          scrollToSection('contact');
        }}
      />

      {/* Interactive Capability Drawer */}
      <CapabilityDrawer
        type={capabilityDrawerType}
        onClose={() => setCapabilityDrawerType(null)}
        onContact={() => {
          setCapabilityDrawerType(null);
          scrollToSection('contact');
        }}
      />

    </div>
  );
}
