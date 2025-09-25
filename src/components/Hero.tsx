import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant-qr.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Revolutionize Your Restaurant with 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> QR Ordering</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Customers order, get served, then pay - just like traditional dining. 
            Increase efficiency, reduce wait times, and delight your customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto text-lg px-8 py-6"
              onClick={() => {
                // Scroll to registration section
                const element = document.getElementById('register');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline-hero" 
              size="lg" 
              className="w-full sm:w-auto text-lg px-8 py-6"
              onClick={() => {
                // Scroll to how it works section
                const element = document.getElementById('how-it-works');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">30 Days</div>
              <div className="text-white/80">Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50%</div>
              <div className="text-white/80">Faster Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;