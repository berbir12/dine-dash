import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "0%",
      period: "first month",
      description: "Try our service completely free for 30 days",
      features: [
        "No setup fees",
        "Unlimited orders",
        "Custom QR codes",
        "Full analytics",
        "Email support",
        "Menu customization",
        "Real-time reporting"
      ],
      limitations: [],
      popular: true
    },
    {
      name: "Standard",
      price: "0.5%",
      period: "per transaction",
      description: "After your free trial, pay only when you earn",
      features: [
        "Unlimited orders",
        "Custom QR codes",
        "Advanced analytics",
        "Priority support",
        "Menu customization",
        "Multi-location support",
        "Real-time reporting",
        "24/7 support"
      ],
      limitations: [],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Start Free, Pay Only When You Earn
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Try our service completely free for 30 days, then pay only 0.5% per successful transaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/60 backdrop-blur-sm ${
                plan.popular ? 'ring-2 ring-accent scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-accent text-accent-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <CardDescription className="text-base mt-2">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-center">
                      <XIcon className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground line-through">{limitation}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  size="lg" 
                  className="w-full"
                  onClick={() => {
                    // Scroll to registration section
                    const element = document.getElementById('register');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {plan.name === "Starter" ? "Start Free Trial" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            30-day free trial • No setup costs • Only 0.5% per transaction after trial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="text-sm text-muted-foreground">Questions about our pricing?</span>
            <Button 
              variant="outline" 
              onClick={() => {
                // Scroll to contact section
                const element = document.getElementById('register');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
