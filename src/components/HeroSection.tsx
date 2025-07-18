import React from 'react';
import { Download, Users, Trophy, Clock } from 'lucide-react';
import heroBanner from '../assets/hero-banner.jpg';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Students Trained' },
    { icon: Trophy, value: '95%', label: 'Success Rate' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-secondary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="mb-6">
            <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏆 #1 RBI Grade B Coaching Institute
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              RBI GRADE B
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          {/* Subtext */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
              The Reserve Bank of India (RBI) is the central bank of the country and plays a crucial role in the economic development of India.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              <strong className="text-accent">RBI Grade B Officer post</strong> is one of the most prestigious positions in the banking sector, offering excellent career prospects and growth opportunities.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary text-lg px-8 py-4 group">
              JOIN NOW
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            <button className="btn-accent text-lg px-8 py-4 flex items-center">
              <Download className="mr-2 h-5 w-5" />
              DOWNLOAD SYLLABUS
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;