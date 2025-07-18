import React from 'react';
import { FileText, Clock, Users, Award, ArrowDown } from 'lucide-react';

const SelectionProcess = () => {
  const phases = [
    {
      phase: 'Phase I',
      title: 'Preliminary Examination',
      icon: FileText,
      duration: '2 Hours',
      marks: '200 Marks',
      description: 'Objective type questions covering basic subjects',
      subjects: [
        'General Awareness (40 questions)',
        'English Language (30 questions)', 
        'Quantitative Aptitude (35 questions)',
        'Reasoning Ability (35 questions)'
      ],
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      phase: 'Phase II',
      title: 'Main Examination',
      icon: Clock,
      duration: 'Multiple Papers',
      marks: '300 Marks',
      description: 'Subjective and objective papers covering specialized topics',
      subjects: [
        'Economic and Social Issues (100 marks)',
        'English (Writing Skills) (100 marks)',
        'Finance and Management (100 marks)'
      ],
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    {
      phase: 'Phase III',
      title: 'Interview',
      icon: Users,
      duration: '30-45 Minutes',
      marks: '50 Marks',
      description: 'Personal interview to assess personality and suitability',
      subjects: [
        'General Knowledge and Current Affairs',
        'Banking and Financial Awareness',
        'Personal Background and Experience',
        'Situational and Behavioral Questions'
      ],
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const selectionTips = [
    {
      icon: Award,
      title: 'Qualifying Marks',
      content: 'Each phase has minimum qualifying marks that must be achieved to proceed to the next stage.'
    },
    {
      icon: Clock,
      title: 'Time Management',
      content: 'Effective time management during exams is crucial for attempting all questions within the given duration.'
    },
    {
      icon: FileText,
      title: 'Preparation Strategy',
      content: 'Phase-wise preparation with focus on weak areas and regular practice tests is essential for success.'
    }
  ];

  return (
    <section id="selection-process" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Selection Process</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The RBI Grade B selection process is comprehensive and designed to evaluate candidates across multiple dimensions 
            including knowledge, analytical skills, and personality traits.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Phase Card */}
              <div className={`${phase.bgColor} rounded-xl p-8 mb-8 border-l-4 border-l-primary`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Phase Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`${phase.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                        <phase.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-primary">{phase.phase}</div>
                        <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="font-medium">{phase.duration}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="font-medium">{phase.marks}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-1">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Subjects */}
                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-foreground mb-3">Coverage:</h4>
                    <ul className="space-y-2">
                      {phase.subjects.map((subject, subIndex) => (
                        <li key={subIndex} className="flex items-start text-sm">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Arrow connector */}
              {index < phases.length - 1 && (
                <div className="flex justify-center mb-8">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <ArrowDown className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Selection Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {selectionTips.map((tip, index) => (
            <div key={index} className="feature-card text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <tip.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{tip.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tip.content}</p>
            </div>
          ))}
        </div>

        {/* Final Selection Info */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center">
          <h3 className="heading-tertiary mb-4">Final Selection</h3>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl mx-auto">
            Final selection is based on the aggregate marks obtained in Phase II (Mains) and Phase III (Interview). 
            Candidates are ranked based on their total scores and selected as per the number of vacancies available.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-primary">Phase II</div>
              <div className="text-sm text-muted-foreground">85.7% Weightage</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">Phase III</div>
              <div className="text-sm text-muted-foreground">14.3% Weightage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionProcess;