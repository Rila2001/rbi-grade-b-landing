import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutExamSection from '../components/AboutExamSection';
import CourseHighlights from '../components/CourseHighlights';
import SubjectsCovered from '../components/SubjectsCovered';
import EligibilitySection from '../components/EligibilitySection';
import SelectionProcess from '../components/SelectionProcess';
import Testimonials from '../components/Testimonials';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <HeroSection />
        <AboutExamSection />
        <CourseHighlights />
        <SubjectsCovered />
        <EligibilitySection />
        <SelectionProcess />
        <Testimonials />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
