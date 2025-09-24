import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">QR</span>
          </div>
          <span className="text-xl font-bold text-foreground">OrderPay</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
            Benefits
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;