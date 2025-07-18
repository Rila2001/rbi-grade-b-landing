import React from 'react';
import { Star, Trophy, Users, CheckCircle } from 'lucide-react';

const WhyChooseUsSSC = () => {
  const testimonials = [
    {
      name: "Rahul Kumar",
      rank: "AIR 45",
      post: "Income Tax Inspector",
      image: "/api/placeholder/80/80",
      quote: "Shankar Academy's structured approach and mock tests were instrumental in my success. The faculty's guidance was exceptional."
    },
    {
      name: "Priya Sharma", 
      rank: "AIR 78",
      post: "Central Excise Officer",
      image: "/api/placeholder/80/80",
      quote: "The comprehensive study material and regular doubt clearing sessions helped me crack SSC CGL in my first attempt."
    },
    {
      name: "Amit Singh",
      rank: "AIR 92", 
      post: "Assistant Audit Officer",
      image: "/api/placeholder/80/80",
      quote: "Best coaching institute for SSC preparation. The online classes were very interactive and the faculty was always available."
    }
  ];

  const achievements = [
    "15+ Years of Excellence in SSC Coaching",
    "5000+ Successful Selections", 
    "95% Success Rate in SSC CGL",
    "Expert Faculty from Top Institutions",
    "Pan-India Recognition & Trust",
    "Updated Teaching Methodology"
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Why Choose Shankar Academy?</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of successful candidates who achieved their government job dreams with us
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-accent/10 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Trophy className="h-12 w-12 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">5000+</h3>
            <p className="text-muted-foreground">Successful Selections</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Star className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">95%</h3>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
          
          <div className="text-center">
            <div className="bg-secondary/10 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-12 w-12 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
        </div>

        {/* Achievements List */}
        <div className="bg-card rounded-lg p-8 mb-16">
          <h3 className="text-xl font-semibold text-center mb-8">Our Proven Track Record</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Student Testimonials */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium inline-block">
                      {testimonial.rank}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{testimonial.post}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-accent mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSSC;