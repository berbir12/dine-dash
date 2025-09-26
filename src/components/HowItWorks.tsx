import { useState } from "react";
import { SmartphoneIcon, MenuIcon, CheckCircleIcon, CreditCardIcon, PlayIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import DemoModal from "./DemoModal";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const { t } = useTranslation();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const steps = [
    {
      icon: SmartphoneIcon,
      step: "01",
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description')
    },
    {
      icon: MenuIcon,
      step: "02", 
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description')
    },
    {
      icon: CheckCircleIcon,
      step: "03",
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description')
    },
    {
      icon: CreditCardIcon,
      step: "04",
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description')
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-accent opacity-30 transform translate-x-8"></div>
                )}
                
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <step.icon className="w-12 h-12 text-accent-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-foreground text-primary rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                
                <p className="text-primary-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                See It In Action
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Watch our interactive demo to see exactly how the QR ordering process works
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 flex items-center gap-2"
                >
                  <PlayIcon className="w-5 h-5" />
                  Watch Interactive Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    // Scroll to registration section
                    const element = document.getElementById('register');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-8 py-4"
                >
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </section>
  );
};

export default HowItWorks;