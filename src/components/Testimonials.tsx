import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, QuoteIcon } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Owner, Bella Vista Restaurant",
      content: "dine-dash transformed our operations completely. Orders are 60% faster and our customers love the convenience. Revenue increased by 30% in just 3 months!",
      rating: 5,
      location: "New York, NY"
    },
    {
      name: "Ahmed Hassan",
      role: "Manager, Spice Garden",
      content: "The QR system eliminated all the paper menus and reduced our staff workload significantly. Setup was incredibly easy and the support team is fantastic.",
      rating: 5,
      location: "Chicago, IL"
    },
    {
      name: "Maria Rodriguez",
      role: "Owner, Casa Maria",
      content: "Our customers can now order and pay without waiting for a server. The analytics dashboard helps us understand our best-selling items. Highly recommended!",
      rating: 5,
      location: "Los Angeles, CA"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied restaurant owners who have transformed their business with dine-dash
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <QuoteIcon className="w-8 h-8 text-accent mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.9/5</span>
            <span className="text-muted-foreground">from 500+ restaurants</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
