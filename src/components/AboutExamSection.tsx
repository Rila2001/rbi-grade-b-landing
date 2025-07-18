import React from 'react';
import { ArrowRight, FileText, Users, MessageCircle } from 'lucide-react';

const AboutExamSection = () => {
  const phases = [
    {
      phase: 'Phase I',
      title: 'Preliminary Exam',
      description: 'Objective test covering basic subjects',
      icon: FileText,
      color: 'bg-primary'
    },
    {
      phase: 'Phase II', 
      title: 'Main Exam',
      description: 'Subjective + Objective papers',
      icon: Users,
      color: 'bg-secondary'
    },
    {
      phase: 'Phase III',
      title: 'Interview',
      description: 'Personal interview and final selection',
      icon: MessageCircle,
      color: 'bg-accent'
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">About the RBI Grade B Exam</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The RBI Grade B recruitment is conducted by the Reserve Bank of India every year to select 
              eligible candidates for Grade B officer positions. The selection process is rigorous and 
              consists of three phases designed to test candidates' knowledge, analytical skills, and personality.
            </p>
          </div>
        </div>

        {/* Selection Process Visual */}
        <div className="max-w-6xl mx-auto">
          <h3 className="heading-tertiary text-center mb-12">Selection Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="feature-card text-center h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${phase.color} rounded-full mb-6`}>
                    <phase.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-accent mb-2">{phase.phase}</div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">{phase.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                </div>
                
                {/* Arrow for desktop */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-muted rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Exam Pattern</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Phase I:</strong> 200 marks, 2 hours duration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Phase II:</strong> 300 marks, multiple papers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Interview:</strong> 50 marks, personality assessment</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Key Dates 2024</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Application:</strong> June - July 2024</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Phase I:</strong> August 2024</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Results:</strong> December 2024</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExamSection;