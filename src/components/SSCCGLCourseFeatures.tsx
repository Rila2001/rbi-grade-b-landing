import React from 'react';
import { 
  Target, 
  Video, 
  Users, 
  MessageCircle, 
  Heart, 
  Briefcase,
  Clock,
  BookOpen
} from 'lucide-react';

const SSCCGLCourseFeatures = () => {
  const features = [
    {
      icon: Target,
      title: 'Daily Mocks & Practice Sets',
      description: 'Comprehensive test series with detailed analysis and performance tracking to boost your confidence'
    },
    {
      icon: Video,
      title: 'Online + Offline Classes',
      description: 'Flexible learning with recorded lectures, live sessions, and classroom training options'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Experienced teachers from Chennai & Delhi with proven track records in SSC coaching'
    },
    {
      icon: MessageCircle,
      title: 'LMS + Telegram Support',
      description: 'Advanced learning management system with instant doubt clearing via Telegram groups'
    },
    {
      icon: Heart,
      title: 'Mentorship & Motivation',
      description: 'Personal guidance and motivational support to keep you focused throughout your journey'
    },
    {
      icon: Briefcase,
      title: 'Placement Support',
      description: 'Career guidance and placement assistance even after successful completion of the exam'
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Multiple batch timings to accommodate working professionals and students'
    },
    {
      icon: BookOpen,
      title: 'Updated Study Materials',
      description: 'Latest syllabus-based study materials with current affairs and trending topics'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Course Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover why thousands of students choose our comprehensive SSC CGL preparation program
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="feature-card group text-center"
              >
                <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Additional Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>Free PDF materials and e-books</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>Weekly current affairs updates</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>Interview preparation sessions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SSCCGLCourseFeatures;