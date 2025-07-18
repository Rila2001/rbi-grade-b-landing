import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      rank: 'AIR 3',
      year: '2023',
      image: '/api/placeholder/100/100',
      quote: 'The structured approach and expert guidance at Banking Academy made all the difference. The mock tests were exactly like the real exam!',
      location: 'Delhi',
      score: '287/300'
    },
    {
      name: 'Rajesh Kumar',
      rank: 'AIR 7',
      year: '2023', 
      image: '/api/placeholder/100/100',
      quote: 'Excellent faculty and comprehensive study materials. The interview preparation sessions boosted my confidence tremendously.',
      location: 'Mumbai',
      score: '275/300'
    },
    {
      name: 'Sneha Patel',
      rank: 'AIR 12',
      year: '2022',
      image: '/api/placeholder/100/100',
      quote: 'The doubt-clearing sessions and personalized attention helped me overcome my weak areas. Highly recommended!',
      location: 'Ahmedabad',
      score: '268/300'
    },
    {
      name: 'Arjun Singh',
      rank: 'AIR 18',
      year: '2022',
      image: '/api/placeholder/100/100',
      quote: 'Banking Academy\'s online platform made it convenient to study while working. The quality of education is outstanding.',
      location: 'Bangalore',
      score: '262/300'
    },
    {
      name: 'Kavya Reddy',
      rank: 'AIR 25',
      year: '2023',
      image: '/api/placeholder/100/100',
      quote: 'The economics and finance modules were exceptionally well-structured. The faculty\'s expertise is unmatched.',
      location: 'Hyderabad',
      score: '258/300'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Success Stories</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from our successful students who achieved their dreams of becoming RBI Grade B officers 
            with our expert guidance and comprehensive preparation.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div key={`${currentIndex}-${index}`} className="feature-card bg-card relative overflow-hidden group">
                {/* Achievement Badge */}
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                  {testimonial.rank}
                </div>

                {/* Quote Icon */}
                <div className="absolute top-4 left-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="pt-12">
                  {/* Profile */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{testimonial.year}</div>
                      <div className="text-xs text-muted-foreground">Year</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">{testimonial.score}</div>
                      <div className="text-xs text-muted-foreground">Score</div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground text-sm">RBI Officers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground text-sm">Top 100 Ranks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;