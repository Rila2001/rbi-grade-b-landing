import React from 'react';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

const AboutSSCCGLSection = () => {
  const departments = [
    "Central Excise & Customs",
    "Income Tax Department", 
    "Audit & Accounts Service",
    "Railway Accounts Service",
    "Indian Defence Accounts Service",
    "Statistics & Programme Implementation",
    "Central Secretariat Service",
    "Intelligence Bureau"
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">About SSC CGL</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The Staff Selection Commission Combined Graduate Level (SSC CGL) examination is one of the most 
            prestigious competitive exams in India for recruiting candidates to various Group B and Group C 
            posts in government departments and ministries.
          </p>
        </div>

        {/* Key Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-card border">
            <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Government Departments</h3>
            <p className="text-muted-foreground">
              Get placed in prestigious central government departments across India
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card border">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Who Should Apply?</h3>
            <p className="text-muted-foreground">
              Graduates aged 18-32 seeking stable government careers with excellent benefits
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-card border">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Career Benefits</h3>
            <p className="text-muted-foreground">
              Job security, attractive salary, allowances, and excellent growth opportunities
            </p>
          </div>
        </div>

        {/* Departments Covered */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-center mb-8">Departments Covered</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-card rounded-lg border">
                <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{dept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSSCCGLSection;