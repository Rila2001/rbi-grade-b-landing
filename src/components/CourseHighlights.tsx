import React from 'react';
import { GraduationCap, Monitor, FileCheck, MessageSquare, BookOpen, HelpCircle } from 'lucide-react';

const CourseHighlights = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Expert Faculty',
      description: 'Learn from experienced professionals with proven track records in banking and finance education.'
    },
    {
      icon: Monitor,
      title: 'Structured Online & Offline Classes',
      description: 'Flexible learning options with both classroom and digital platforms to suit your schedule.'
    },
    {
      icon: FileCheck,
      title: 'Extensive Test Series',
      description: 'Regular mock tests and practice papers designed to simulate actual RBI Grade B exam conditions.'
    },
    {
      icon: MessageSquare,
      title: 'Interview Training',
      description: 'Comprehensive personality development and interview preparation sessions with mock interviews.'
    },
    {
      icon: BookOpen,
      title: 'Updated Study Materials',
      description: 'Latest curriculum-based study materials and notes updated as per current RBI Grade B syllabus.'
    },
    {
      icon: HelpCircle,
      title: 'Doubt-Clearing Sessions',
      description: '24/7 doubt resolution support through dedicated faculty and peer interaction platforms.'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Why Choose Us for RBI Grade B?</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach to RBI Grade B preparation ensures you have all the tools and support needed to succeed in this prestigious examination.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="feature-card group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300">
                    <highlight.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <h3 className="heading-tertiary mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful candidates who have achieved their banking dreams with our expert guidance and proven methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg">
                ENROLL NOW
              </button>
              <button className="btn-outline text-lg">
                BOOK FREE DEMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;