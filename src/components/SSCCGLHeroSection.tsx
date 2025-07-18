import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, PlayCircle } from 'lucide-react';

const SSCCGLHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 43, 92, 0.8), rgba(0, 43, 92, 0.6)), url('/api/placeholder/1920/1080')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
          🏆 India's #1 SSC CGL Coaching
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Join India's #1 
          <span className="text-accent block">SSC CGL Coaching Program</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Tier I to Tier IV – Expert-Led Training with Free Demo Sessions. 
          Achieve your government job dreams with our proven methodology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="btn-accent text-lg px-8 py-4 h-auto">
            <PlayCircle className="mr-2 h-5 w-5" />
            Join Free Demo
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-secondary"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Syllabus PDF
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">5000+</div>
            <div className="text-sm text-gray-300">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">95%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">15+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">50+</div>
            <div className="text-sm text-gray-300">Expert Faculty</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SSCCGLHeroSection;