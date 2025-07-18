import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, MapPin, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UpcomingBatchSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const batches = [
    {
      title: 'Foundation Batch',
      mode: 'Online + Offline',
      startDate: '15th March 2024',
      duration: '6 Months',
      timing: '6:00 AM - 8:00 AM',
      seats: 50,
      seatsLeft: 12,
      price: '₹15,999',
      originalPrice: '₹19,999',
      features: ['Complete Tier I-IV Coverage', 'Daily Live Classes', 'Mock Tests', 'Study Materials']
    },
    {
      title: 'Fast Track Batch',
      mode: 'Online',
      startDate: '1st April 2024', 
      duration: '3 Months',
      timing: '7:00 PM - 9:00 PM',
      seats: 100,
      seatsLeft: 28,
      price: '₹12,999',
      originalPrice: '₹16,999',
      features: ['Intensive Preparation', 'Weekend Extra Classes', 'Personal Mentorship', 'Doubt Clearing']
    },
    {
      title: 'Weekend Batch',
      mode: 'Offline',
      startDate: '22nd March 2024',
      duration: '8 Months', 
      timing: 'Sat-Sun 9:00 AM - 5:00 PM',
      seats: 30,
      seatsLeft: 8,
      price: '₹18,999',
      originalPrice: '₹22,999',
      features: ['Working Professional Friendly', 'Classroom Learning', 'Group Study', 'Career Guidance']
    }
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Upcoming Batches</h2>
          <p className="text-lg text-muted-foreground">
            Secure your seat in our next batch and start your SSC CGL preparation journey
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-primary text-primary-foreground rounded-lg p-6 mb-12 text-center">
          <h3 className="text-xl font-semibold mb-4">🔥 Foundation Batch Starting Soon!</h3>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="bg-primary-foreground/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-primary-foreground/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-primary-foreground/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-primary-foreground/20 rounded-lg p-3">
              <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>

        {/* Batch Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {batches.map((batch, index) => (
            <div key={index} className="bg-card rounded-lg border shadow-sm overflow-hidden">
              {/* Header */}
              <div className="bg-primary/5 p-4 border-b">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{batch.title}</h3>
                  {batch.seatsLeft <= 10 && (
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      Filling Fast
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  {batch.mode.includes('Online') ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                  <span>{batch.mode}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                {/* Schedule Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Starts: {batch.startDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{batch.timing}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{batch.seatsLeft} seats left out of {batch.seats}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${((batch.seats - batch.seatsLeft) / batch.seats) * 100}%` }}
                  />
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-medium text-sm mb-2">What's Included:</h4>
                  <ul className="space-y-1">
                    {batch.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center">
                        <div className="h-1 w-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-xl font-bold text-primary">{batch.price}</span>
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        {batch.originalPrice}
                      </span>
                    </div>
                    <div className="text-xs text-accent font-medium">
                      Duration: {batch.duration}
                    </div>
                  </div>
                  <Button className="w-full btn-primary">
                    Reserve Your Seat
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find a suitable batch? We offer flexible timings and custom schedules.
          </p>
          <Button variant="outline" size="lg">
            Request Custom Batch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatchSection;