import { useState } from "react";
import { SmartphoneIcon, MenuIcon, CheckCircleIcon, CreditCardIcon, PlayIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import DemoModal from "./DemoModal";

const HowItWorks = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const steps = [
    {
      icon: SmartphoneIcon,
      step: "01",
      title: "Customer Scans QR",
      description: "Diners scan the QR code at their table using any smartphone camera"
    },
    {
      icon: MenuIcon,
      step: "02", 
      title: "Browse & Order",
      description: "Digital menu loads instantly with photos, descriptions, and real-time availability"
    },
    {
      icon: CheckCircleIcon,
      step: "03",
      title: "Order Confirmed & Served",
      description: "Kitchen receives order instantly, prepares food, and serves to customer"
    },
    {
      icon: CreditCardIcon,
      step: "04",
      title: "Pay After Service",
      description: "Customer pays after enjoying their meal with secure payment processing"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Simple, intuitive process that works for every customer
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