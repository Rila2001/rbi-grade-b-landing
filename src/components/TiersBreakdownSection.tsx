import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Clock, BookOpen, PenTool, Keyboard } from 'lucide-react';

const TiersBreakdownSection = () => {
  const tiers = [
    {
      id: 'tier1',
      title: 'Tier I - Preliminary Examination',
      icon: BookOpen,
      duration: '60 minutes',
      questions: '100 questions',
      subjects: [
        'General Intelligence & Reasoning (25 questions)',
        'General Awareness (25 questions)', 
        'Quantitative Aptitude (25 questions)',
        'English Comprehension (25 questions)'
      ],
      description: 'Computer-based objective type examination qualifying in nature'
    },
    {
      id: 'tier2', 
      title: 'Tier II - Main Examination',
      icon: PenTool,
      duration: 'Multiple papers',
      questions: 'Paper-wise varying',
      subjects: [
        'Paper I: Quantitative Abilities (100 questions, 120 min)',
        'Paper II: English Language & Comprehension (200 questions, 120 min)',
        'Paper III: Statistics (100 questions, 120 min)',
        'Paper IV: General Studies (Finance & Economics) (100 questions, 120 min)'
      ],
      description: 'Computer-based objective type examination for final selection'
    },
    {
      id: 'tier3',
      title: 'Tier III - Descriptive Paper', 
      icon: PenTool,
      duration: '60 minutes',
      questions: 'Descriptive type',
      subjects: [
        'Essay Writing (250 words)',
        'Letter/Application Writing',
        'Precis Writing'
      ],
      description: 'Pen and paper mode to test writing skills in English/Hindi'
    },
    {
      id: 'tier4',
      title: 'Tier IV - Skill Test',
      icon: Keyboard, 
      duration: 'As per post requirement',
      questions: 'Practical test',
      subjects: [
        'Data Entry Speed Test (DEST)',
        'Computer Proficiency Test (CPT)',
        'Document Verification'
      ],
      description: 'Final verification and skill assessment for specific posts'
    }
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">SSC CGL Examination Structure</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive 4-tier examination process designed to select the best candidates
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {tiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <AccordionItem 
                key={tier.id} 
                value={tier.id}
                className="bg-card border rounded-lg px-6"
              >
                <AccordionTrigger className="py-6 hover:no-underline">
                  <div className="flex items-center space-x-4 text-left">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{tier.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {tier.duration}
                        </span>
                        <span>{tier.questions}</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="pb-6">
                  <div className="ml-16 space-y-4">
                    <p className="text-muted-foreground">{tier.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Subjects/Papers:</h4>
                      <ul className="space-y-2">
                        {tier.subjects.map((subject, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm">{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default TiersBreakdownSection;