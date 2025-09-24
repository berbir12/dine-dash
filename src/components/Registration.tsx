import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHatIcon, MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Registration = () => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    contactName: "",
    email: "",
    phone: "",
    location: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.restaurantName || !formData.contactName || !formData.email) {
      toast({
        title: "Please fill in required fields",
        description: "Restaurant name, contact name, and email are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Registration Successful!",
      description: "We'll contact you within 24 hours to get you started.",
    });
    
    // Reset form
    setFormData({
      restaurantName: "",
      contactName: "",
      email: "",
      phone: "",
      location: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="register" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of restaurants already using our QR ordering system
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Restaurant Registration</CardTitle>
              <CardDescription className="text-lg">
                Start your free trial today - no setup fees required
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <ChefHatIcon className="w-4 h-4" />
                      Restaurant Name *
                    </label>
                    <Input
                      name="restaurantName"
                      value={formData.restaurantName}
                      onChange={handleChange}
                      placeholder="Your Restaurant Name"
                      className="bg-background/60"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Contact Name *
                    </label>
                    <Input
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="bg-background/60"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MailIcon className="w-4 h-4" />
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-background/60"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <PhoneIcon className="w-4 h-4" />
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="bg-background/60"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4" />
                    Restaurant Location
                  </label>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                    className="bg-background/60"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full text-lg py-6"
                >
                  Start Free Trial
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Registration;