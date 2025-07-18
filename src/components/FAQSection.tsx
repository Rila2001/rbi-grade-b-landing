import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is the selection process for RBI Grade B?',
      answer: 'The RBI Grade B selection process consists of three phases: Phase I (Preliminary Exam) - objective test with 200 marks, Phase II (Main Exam) - subjective and objective papers with 300 marks, and Phase III (Interview) - personality assessment with 50 marks. Candidates must qualify each phase to proceed to the next.'
    },
    {
      question: 'Is coaching available online?',
      answer: 'Yes, we offer comprehensive online coaching with live interactive classes, recorded video lectures, digital study materials, online mock tests, and virtual doubt-clearing sessions. Our online platform provides the same quality education as classroom coaching with added flexibility.'
    },
    {
      question: 'Do you provide interview training?',
      answer: 'Absolutely! Our interview training includes personality development sessions, mock interviews with expert panels, current affairs discussions, communication skills enhancement, and confidence building exercises. We also provide feedback and personalized guidance for improvement.'
    },
    {
      question: 'Are study materials included in the course fee?',
      answer: 'Yes, comprehensive study materials are included in all our courses. This includes subject-wise books, current affairs magazines, practice question banks, previous year papers, and regular updates. Online students receive digital materials while classroom students get printed books.'
    },
    {
      question: 'What is the success rate of your students?',
      answer: 'We maintain an excellent success rate of 95% with over 500 students clearing RBI Grade B in the last 5 years. Our structured approach, expert faculty, and comprehensive preparation methodology have helped students achieve top ranks consistently.'
    },
    {
      question: 'Can I switch between online and offline modes?',
      answer: 'Yes, our hybrid course allows you to switch between online and offline modes based on your convenience. You can attend classroom sessions when available and access online lectures when needed. This flexibility ensures uninterrupted learning.'
    },
    {
      question: 'What if I miss a class?',
      answer: 'All our classes are recorded and made available on our learning portal within 24 hours. You can access these recordings anytime and also participate in doubt-clearing sessions to clarify any concepts you might have missed.'
    },
    {
      question: 'Is there any installment facility for fee payment?',
      answer: 'Yes, we offer flexible payment options including full payment (10% discount), 3 installments (5% discount), and 6 monthly installments (no additional charges). We also accept various payment methods including cards, UPI, and bank transfers.'
    },
    {
      question: 'How often are mock tests conducted?',
      answer: 'We conduct weekly mock tests for each phase of the examination. This includes phase-wise tests, subject-wise tests, and full-length mock exams. Each test comes with detailed performance analysis and personalized feedback to help you improve.'
    },
    {
      question: 'What support is available for current affairs preparation?',
      answer: 'We provide daily current affairs updates, monthly current affairs magazines, weekly current affairs quizzes, and special sessions on banking and financial awareness. Our current affairs coverage is comprehensive and exam-focused.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our RBI Grade B coaching program, course structure, and admission process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
            <h3 className="heading-tertiary mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              Our academic counselors are available to answer any specific questions you may have about our courses, 
              admission process, or RBI Grade B preparation strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                TALK TO COUNSELOR
              </button>
              <button className="btn-outline">
                WhatsApp SUPPORT
              </button>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              📞 +91 98765 43210 | 📧 info@bankingacademy.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;