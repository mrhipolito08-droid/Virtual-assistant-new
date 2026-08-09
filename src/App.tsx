import React, { useState, useEffect } from 'react';
import { PortfolioData, ProfileInfo } from './types';
import { getStoredPortfolioData, savePortfolioData, resetPortfolioData } from './utils/portfolioStorage';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Tools } from './components/Tools';
import { WorkSamples } from './components/WorkSamples';
import { Calculator } from './components/Calculator';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EditPortfolioModal } from './components/EditPortfolioModal';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => getStoredPortfolioData());
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('admin-support');
  const [estimatedHours, setEstimatedHours] = useState<number>(20);

  const handleSaveProfile = (updatedProfile: ProfileInfo) => {
    const updated = {
      ...data,
      profile: updatedProfile,
    };
    setData(updated);
    savePortfolioData(updated);
  };

  const handleResetProfile = () => {
    const reset = resetPortfolioData();
    setData(reset);
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWithEstimate = (hours: number, serviceIds: string[], monthlyTotal: number) => {
    setEstimatedHours(hours);
    if (serviceIds.length > 0) {
      setSelectedServiceId(serviceIds[0]);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Sticky Header Navigation */}
      <Navbar
        profile={data.profile}
        onOpenEditModal={() => setIsEditModalOpen(true)}
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          profile={data.profile}
          onOpenBookingModal={() => setIsBookingModalOpen(true)}
        />

        {/* About Section */}
        <About
          profile={data.profile}
        />

        {/* Services Section */}
        <Services
          services={data.services}
          onSelectService={handleServiceSelect}
        />

        {/* Skills Section */}
        <Skills
          skills={data.skills}
        />

        {/* Tools Section */}
        <Tools
          tools={data.tools}
        />

        {/* Work Samples Case Studies Section */}
        <WorkSamples
          samples={data.workSamples}
        />

        {/* Rate & Retainer Calculator Section */}
        <Calculator
          services={data.services}
          hourlyRate={data.profile.hourlyRate}
          onBookWithEstimate={handleBookWithEstimate}
        />

        {/* Testimonials Section */}
        <Testimonials
          testimonials={data.testimonials}
        />

        {/* Contact Form Section */}
        <Contact
          profile={data.profile}
          services={data.services}
          preselectedServiceId={selectedServiceId}
          initialHoursEstimate={estimatedHours}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={data.profile}
        onOpenEditModal={() => setIsEditModalOpen(true)}
      />

      {/* Edit Portfolio Data Modal */}
      <EditPortfolioModal
        isOpen={isEditModalOpen}
        profile={data.profile}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
        onClose={() => setIsEditModalOpen(false)}
      />

      {/* Discovery Call Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        profile={data.profile}
        onClose={() => setIsBookingModalOpen(false)}
      />

    </div>
  );
}
