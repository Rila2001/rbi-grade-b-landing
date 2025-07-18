import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { UserPlus, Phone, Mail, GraduationCap } from 'lucide-react';

const RegistrationFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    tier: '',
    batchPreference: '',
    experience: '',
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form Benefits */}
          <div>
            <h2 className="heading-secondary mb-6">
              Register for <span className="text-primary">Free Demo Class</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience our teaching methodology and get a taste of what makes 
              Shankar Academy the best choice for SSC CGL preparation.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                'Attend live demo session with expert faculty',
                'Get free study materials and exam analysis',
                'Receive personalized guidance and career counseling',
                'Access to our exclusive Telegram community',
                'Free mock test with detailed performance report'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>Call us: +91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>Email: info@shankarbankingacademy.com</span>
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="bg-card rounded-lg border shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <UserPlus className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Quick Registration</h3>
                <p className="text-sm text-muted-foreground">Get started in less than 2 minutes</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone">Mobile Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>

              {/* City */}
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                />
              </div>

              {/* Tier Selection */}
              <div>
                <Label htmlFor="tier">Which Tier are you preparing for? *</Label>
                <Select onValueChange={(value) => handleInputChange('tier', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tier1">Tier I (Prelims)</SelectItem>
                    <SelectItem value="tier2">Tier II (Mains)</SelectItem>
                    <SelectItem value="complete">Complete Tier I-IV</SelectItem>
                    <SelectItem value="revision">Revision & Mock Tests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Batch Preference */}
              <div>
                <Label htmlFor="batchPreference">Preferred Batch Type</Label>
                <Select onValueChange={(value) => handleInputChange('batchPreference', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select batch type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online Classes</SelectItem>
                    <SelectItem value="offline">Offline Classes</SelectItem>
                    <SelectItem value="hybrid">Online + Offline</SelectItem>
                    <SelectItem value="weekend">Weekend Batch</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Experience */}
              <div>
                <Label htmlFor="experience">Previous SSC Attempt Experience (Optional)</Label>
                <Textarea
                  id="experience"
                  placeholder="Tell us about your previous attempts or preparation experience..."
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  rows={3}
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeToTerms', !!checked)}
                />
                <Label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed">
                  I agree to receive updates via WhatsApp/SMS and accept the{' '}
                  <span className="text-primary underline cursor-pointer">Terms & Conditions</span>
                </Label>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full btn-primary text-lg py-6 h-auto"
                disabled={!formData.agreeToTerms}
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Register for Free Demo
              </Button>
            </form>

            {/* Additional Info */}
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                🔒 Your information is secure and will not be shared with third parties
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationFormSection;