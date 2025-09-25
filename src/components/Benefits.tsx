import { TrendingUpIcon, ClockIcon, UsersIcon, DollarSignIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUpIcon,
      title: "Increase Revenue",
      description: "Average 25% increase in order value through upselling and cross-selling",
      metric: "25%",
      color: "text-accent"
    },
    {
      icon: ClockIcon,
      title: "Faster Service",
      description: "Reduce order-to-kitchen time by up to 60% with direct digital ordering",
      metric: "60%",
      color: "text-primary"
    },
    {
      icon: UsersIcon,
      title: "Better Experience",
      description: "Customers love the convenience - 95% satisfaction rate",
      metric: "95%",
      color: "text-accent"
    },
    {
      icon: DollarSignIcon,
      title: "Lower Costs",
      description: "Reduce staff workload and printing costs significantly",
      metric: "40%",
      color: "text-primary"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transform Your Restaurant Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of restaurants already benefiting from our QR ordering system
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                <benefit.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <div className={`text-5xl font-bold mb-2 ${benefit.color}`}>
                {benefit.metric}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to see these results in your restaurant?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your free trial today - no setup fees, no commitments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
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
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  // Scroll to how it works section
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;