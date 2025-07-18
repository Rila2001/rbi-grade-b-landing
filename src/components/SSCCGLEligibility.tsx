import React from 'react';
import { GraduationCap, Calendar, MapPin, FileText } from 'lucide-react';

const SSCCGLEligibility = () => {
  const eligibilityData = [
    {
      icon: GraduationCap,
      title: 'Educational Qualification',
      details: [
        'Bachelor\'s degree from a recognized university',
        'Any stream (Arts, Science, Commerce, Engineering)',
        'Final year students can also apply',
        'Minimum 50% marks preferred'
      ]
    },
    {
      icon: Calendar,
      title: 'Age Limit',
      details: [
        'Minimum Age: 18 years',
        'Maximum Age: 32 years (for General category)',
        'Age relaxation for SC/ST/OBC as per government norms',
        'Age calculated as on 1st August of exam year'
      ]
    },
    {
      icon: MapPin,
      title: 'Nationality',
      details: [
        'Indian citizen',
        'Subject of Nepal/Bhutan',
        'Tibetan refugee (before 1st Jan 1962)',
        'Person of Indian origin from specified countries'
      ]
    },
    {
      icon: FileText,
      title: 'Physical Standards',
      details: [
        'Medical fitness as per government norms',
        'Vision requirements for specific posts',
        'No physical measurement required for most posts',
        'Post-specific requirements will be mentioned'
      ]
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Eligibility Criteria</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Check if you meet the basic requirements to appear for SSC CGL examination
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {eligibilityData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Important Notice */}
        <div className="mt-12 bg-accent/10 border-l-4 border-accent rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <FileText className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-accent-foreground mb-2">Important Note</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Eligibility criteria may vary slightly based on the specific post you're applying for. 
                We recommend checking the latest SSC CGL notification for detailed and post-specific requirements. 
                Our counselors can help you understand which posts you're eligible for based on your background.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg mb-4">Not sure about your eligibility?</p>
          <button className="btn-primary">
            Get Free Eligibility Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default SSCCGLEligibility;