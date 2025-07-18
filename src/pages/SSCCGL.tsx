import React from 'react';
import Header from '../components/Header';
import SSCCGLHeroSection from '../components/SSCCGLHeroSection';
import AboutSSCCGLSection from '../components/AboutSSCCGLSection';
import TiersBreakdownSection from '../components/TiersBreakdownSection';
import SSCCGLCourseFeatures from '../components/SSCCGLCourseFeatures';
import WhyChooseUsSSC from '../components/WhyChooseUsSSC';
import SSCCGLEligibility from '../components/SSCCGLEligibility';
import UpcomingBatchSection from '../components/UpcomingBatchSection';
import RegistrationFormSection from '../components/RegistrationFormSection';
import FloatingCTA from '../components/FloatingCTA';
import Footer from '../components/Footer';

const SSCCGL = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <SSCCGLHeroSection />
        <AboutSSCCGLSection />
        <TiersBreakdownSection />
        <SSCCGLCourseFeatures />
        <WhyChooseUsSSC />
        <SSCCGLEligibility />
        <UpcomingBatchSection />
        <RegistrationFormSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default SSCCGL;