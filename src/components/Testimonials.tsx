import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, QuoteIcon } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alemayehu Tadesse",
      role: "Owner, Addis Ababa Restaurant",
      content: "dine-dash has revolutionized our service in Addis! Our customers love scanning the QR code to see our injera and wat menu. Orders are much faster and we've seen 40% increase in revenue since implementing it.",
      rating: 5,
      location: "Addis Ababa, Ethiopia"
    },
    {
      name: "Hirut Bekele",
      role: "Manager, Lucy's Kitchen",
      content: "The QR system eliminated all paper menus and made our service much more efficient. Our staff can focus on cooking instead of taking orders. Setup was very easy and the support team speaks Amharic!",
      rating: 5,
      location: "Addis Ababa, Ethiopia"
    },
    {
      name: "Yonas Assefa",
      role: "Owner, Harar Coffee House",
      content: "Our customers in Addis love the modern touch! The QR code menu shows our traditional coffee ceremony and local dishes beautifully. We've reduced order errors by 80% and our customers are very happy.",
      rating: 5,
      location: "Addis Ababa, Ethiopia"
    },
    {
      name: "Meron Tesfaye",
      role: "Manager, Lalibela Traditional Restaurant",
      content: "This system is perfect for our busy restaurant in Addis. Tourists and locals both find it easy to use. We can update our menu instantly and our staff is much more organized now.",
      rating: 5,
      location: "Addis Ababa, Ethiopia"
    },
    {
      name: "Tewodros Gebre",
      role: "Owner, Gondar Palace Restaurant",
      content: "dine-dash helped us modernize our family restaurant while keeping our traditional Ethiopian hospitality. Our customers appreciate the contactless ordering, especially after COVID. Highly recommended!",
      rating: 5,
      location: "Addis Ababa, Ethiopia"
    },
    {
      name: "Sara Mohammed",
      role: "Manager, Axum Heritage Restaurant",
      content: "The system works perfectly with our traditional Ethiopian dishes. Customers can see detailed descriptions of our doro wat, kitfo, and other specialties. Our order accuracy improved dramatically!",
      rating: 5,
      location: "Addis Ababa, Ethiopia"
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
            Join hundreds of satisfied Ethiopian restaurant owners who have modernized their business with dine-dash
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
            <span className="text-muted-foreground">from 200+ Ethiopian restaurants</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
