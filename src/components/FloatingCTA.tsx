import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactOptions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/919876543210?text=Hi, I want to know more about SSC CGL coaching', '_blank'),
      bgColor: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Phone,
      label: 'Call Now',
      action: () => window.open('tel:+919876543210'),
      bgColor: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      {showContactOptions && (
        <div className="mb-4 space-y-3 animate-fade-in">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div
                key={index}
                className={`${option.bgColor} text-white p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 flex items-center space-x-2 min-w-[120px]`}
                onClick={option.action}
              >
                <IconComponent className="h-5 w-5" />
                <span className="text-sm font-medium">{option.label}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Main CTA Button */}
      <div className="relative">
        <Button
          className={`${
            showContactOptions 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-primary hover:bg-primary/90'
          } text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 h-auto`}
          onClick={() => setShowContactOptions(!showContactOptions)}
        >
          {showContactOptions ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>

        {/* Pulse Animation */}
        {!showContactOptions && (
          <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-75" />
        )}

        {/* Tooltip */}
        {!showContactOptions && (
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Need Help? Contact Us
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
          </div>
        )}
      </div>

      {/* Demo Class Banner */}
      {!showContactOptions && (
        <div className="absolute bottom-full right-0 mb-2 bg-accent text-accent-foreground px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap animate-pulse">
          📞 Book Free Demo Class!
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;