import React from 'react';
import { Calendar, Users, Wifi, MapPin, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const PricingSection = () => {
  const batches = [
    {
      type: 'Online Live Classes',
      icon: Wifi,
      startDate: '15th March 2024',
      duration: '6 Months',
      originalFee: '₹25,000',
      currentFee: '₹18,000',
      seatsLeft: 15,
      features: [
        'Live Interactive Classes',
        'Recorded Video Access',
        'Study Materials (PDF)',
        'Mock Tests & Analysis',
        'Doubt Clearing Sessions',
        'Interview Preparation'
      ],
      highlight: false,
      badge: 'EARLY BIRD'
    },
    {
      type: 'Offline Classroom',
      icon: MapPin,
      startDate: '1st April 2024',
      duration: '6 Months',
      originalFee: '₹35,000',
      currentFee: '₹28,000',
      seatsLeft: 8,
      features: [
        'Face-to-Face Classes',
        'Printed Study Materials',
        'Weekly Mock Tests',
        'Personal Attention',
        'Library Access',
        'Interview Training'
      ],
      highlight: true,
      badge: 'MOST POPULAR'
    },
    {
      type: 'Hybrid (Online + Offline)',
      icon: Users,
      startDate: '20th March 2024',
      duration: '6 Months',
      originalFee: '₹40,000',
      currentFee: '₹32,000',
      seatsLeft: 5,
      features: [
        'Best of Both Worlds',
        'Flexible Learning',
        'Premium Study Kit',
        'Unlimited Mock Tests',
        'One-on-One Mentoring',
        'Guaranteed Interview Calls'
      ],
      highlight: false,
      badge: 'LIMITED SEATS'
    }
  ];

  const installmentOptions = [
    { plan: 'Full Payment', discount: '10%', description: 'Pay complete fee and get 10% discount' },
    { plan: '3 Installments', discount: '5%', description: 'Pay in 3 equal installments with 5% discount' },
    { plan: '6 Installments', discount: '0%', description: 'Pay monthly with no additional charges' }
  ];

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Batch Schedule & Pricing</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the learning format that suits your schedule and preferences. All batches include comprehensive study materials and expert guidance.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {batches.map((batch, index) => (
            <div key={index} className={`relative feature-card ${batch.highlight ? 'border-2 border-primary shadow-xl transform scale-105' : ''}`}>
              {/* Badge */}
              <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                batch.highlight ? 'bg-primary text-primary-foreground' : 
                batch.badge === 'LIMITED SEATS' ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground'
              }`}>
                {batch.badge}
              </div>

              {/* Header */}
              <div className="text-center mb-6 pt-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  batch.highlight ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  <batch.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{batch.type}</h3>
                <div className="text-muted-foreground text-sm mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>Starts: {batch.startDate}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Duration: {batch.duration}</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl text-muted-foreground line-through">{batch.originalFee}</span>
                  <span className="text-3xl font-bold text-primary">{batch.currentFee}</span>
                </div>
                <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${
                  batch.seatsLeft <= 5 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                }`}>
                  <AlertCircle className="h-4 w-4" />
                  <span>{batch.seatsLeft} seats left</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {batch.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                batch.highlight 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl' 
                  : 'bg-muted hover:bg-muted-foreground hover:text-muted text-muted-foreground'
              }`}>
                ENROLL NOW
              </button>
            </div>
          ))}
        </div>

        {/* Payment Options */}
        <div className="bg-card rounded-xl p-8 border border-border mb-12">
          <h3 className="heading-tertiary text-center mb-8">Flexible Payment Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {installmentOptions.map((option, index) => (
              <div key={index} className="text-center p-6 bg-muted/30 rounded-lg">
                <h4 className="text-lg font-semibold text-foreground mb-2">{option.plan}</h4>
                <div className="text-2xl font-bold text-primary mb-2">{option.discount}</div>
                <p className="text-muted-foreground text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-tertiary mb-4">What's Included in All Batches</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Expert Faculty Guidance',
                  'Comprehensive Study Material',
                  'Regular Mock Tests',
                  'Performance Analysis',
                  'Interview Preparation',
                  'Doubt Clearing Support',
                  'Current Affairs Updates',
                  'Mobile App Access'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="bg-white rounded-lg p-6 inline-block">
                <h4 className="text-lg font-semibold text-foreground mb-2">Need Help Choosing?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Speak with our academic counselors for personalized guidance
                </p>
                <button className="btn-accent mb-2">
                  BOOK FREE CONSULTATION
                </button>
                <div className="text-xs text-muted-foreground">
                  Available 9 AM - 9 PM | All Days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;