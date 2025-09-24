import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCodeIcon, CreditCardIcon, ChartBarIcon, ShieldCheckIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: QrCodeIcon,
      title: "QR Code Ordering",
      description: "Customers scan and order directly from their phones. No app downloads required.",
      features: ["Digital menu integration", "Real-time updates", "Multilingual support"]
    },
    {
      icon: CreditCardIcon,
      title: "Integrated Payments",
      description: "Secure payment processing built right into the ordering flow.",
      features: ["All payment methods", "Split bill options", "Instant processing"]
    },
    {
      icon: ChartBarIcon,
      title: "Analytics Dashboard",
      description: "Track orders, revenue, and customer insights in real-time.",
      features: ["Sales reports", "Popular items", "Peak hours analysis"]
    },
    {
      icon: ShieldCheckIcon,
      title: "Enterprise Security",
      description: "Bank-grade security with PCI compliance and data encryption.",
      features: ["PCI DSS compliant", "Data encryption", "24/7 monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Restaurant Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to modernize your restaurant operations in one powerful platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/60 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;