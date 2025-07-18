import React from 'react';
import { Calculator, Brain, PenTool, Globe, TrendingUp, Users } from 'lucide-react';

const SubjectsCovered = () => {
  const subjects = [
    {
      icon: Calculator,
      title: 'Quantitative Aptitude',
      description: 'Number system, algebra, geometry, data interpretation, and mathematical calculations.',
      topics: ['Data Interpretation', 'Number Series', 'Simplification', 'Quadratic Equations'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'Reasoning',
      description: 'Logical reasoning, analytical thinking, and problem-solving techniques.',
      topics: ['Verbal Reasoning', 'Non-Verbal Reasoning', 'Analytical Reasoning', 'Puzzles'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: PenTool,
      title: 'English',
      description: 'Grammar, comprehension, vocabulary, and written communication skills.',
      topics: ['Reading Comprehension', 'Grammar', 'Vocabulary', 'Error Detection'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'General Awareness',
      description: 'Current affairs, banking awareness, and general knowledge.',
      topics: ['Current Affairs', 'Banking Awareness', 'Static GK', 'Financial Awareness'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Finance & Management',
      description: 'Financial markets, management principles, and business concepts.',
      topics: ['Financial Management', 'Corporate Finance', 'Risk Management', 'Business Ethics'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Economics & Social Issues',
      description: 'Economic theories, social development, and policy analysis.',
      topics: ['Microeconomics', 'Macroeconomics', 'Social Issues', 'Government Policies'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="subjects" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Subjects Covered</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive coverage of all subjects with detailed topic-wise preparation and practice sessions.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <div key={index} className="feature-card group overflow-hidden">
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${subject.color} -m-6 mb-6 p-6 text-white`}>
                <div className="flex items-center space-x-3 mb-3">
                  <subject.icon className="h-8 w-8" />
                  <h3 className="text-xl font-semibold">{subject.title}</h3>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  {subject.description}
                </p>
              </div>

              {/* Topics List */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Key Topics:</h4>
                <ul className="space-y-2">
                  {subject.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect */}
              <div className="mt-6 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-primary font-medium text-sm hover:underline">
                  View Detailed Syllabus →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Study Plan CTA */}
        <div className="mt-16 bg-card rounded-xl p-8 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-tertiary mb-4">Get Your Personalized Study Plan</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our expert faculty will create a customized study schedule based on your strengths, 
                weaknesses, and target exam date to maximize your preparation efficiency.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>Subject-wise time allocation</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>Weekly progress tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>Regular performance analysis</span>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <button className="btn-accent text-lg mb-4">
                GET STUDY PLAN
              </button>
              <p className="text-sm text-muted-foreground">
                Free consultation with our academic counselors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsCovered;