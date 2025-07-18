import React from 'react';
import { Calendar, GraduationCap, MapPin, CheckCircle } from 'lucide-react';

const EligibilitySection = () => {
  const eligibilityData = [
    {
      icon: Calendar,
      title: 'Age Limit',
      content: '21 to 30 years',
      details: 'Age relaxation applicable for reserved categories as per government norms',
      color: 'bg-blue-500'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      content: 'Graduation with 60% (General)',
      details: '50% for SC/ST/PwBD candidates from recognized university',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Nationality',
      content: 'Indian Citizen',
      details: 'Must be a citizen of India or subject of Nepal/Bhutan',
      color: 'bg-purple-500'
    }
  ];

  const additionalRequirements = [
    'Must have knowledge of computer operations',
    'Should be proficient in English language',
    'Physical and mental fitness required',
    'No criminal background or pending cases',
    'Medical fitness certificate may be required'
  ];

  return (
    <section id="eligibility" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Eligibility Criteria</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ensure you meet all the eligibility requirements before applying for RBI Grade B Officer position.
          </p>
        </div>

        {/* Main Eligibility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {eligibilityData.map((item, index) => (
            <div key={index} className="feature-card text-center group">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${item.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <div className="text-lg font-medium text-primary mb-3">{item.content}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.details}</p>
            </div>
          ))}
        </div>

        {/* Detailed Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Additional Requirements */}
          <div className="bg-muted/50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
              Additional Requirements
            </h3>
            <ul className="space-y-4">
              {additionalRequirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-muted-foreground">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Process */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Application Process</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Online Application</h4>
                  <p className="text-muted-foreground text-sm">Fill the online application form on RBI official website</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Document Upload</h4>
                  <p className="text-muted-foreground text-sm">Upload required documents and photograph</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Fee Payment</h4>
                  <p className="text-muted-foreground text-sm">Pay application fee online (₹850 for General/OBC, ₹100 for SC/ST/PwBD)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Submit Application</h4>
                  <p className="text-muted-foreground text-sm">Review and submit your application before deadline</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-foreground mb-2">💡 Pro Tip</h4>
              <p className="text-muted-foreground text-sm">
                Start your preparation early! Our courses are designed to help you meet all eligibility requirements 
                and excel in the examination process.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Check Your Eligibility</h3>
            <p className="text-muted-foreground mb-6">
              Not sure if you meet all requirements? Our counselors will guide you through the eligibility criteria.
            </p>
            <button className="btn-primary">
              SPEAK TO COUNSELOR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;