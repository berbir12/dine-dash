import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">QR</span>
          </div>
          <span className="text-xl font-bold text-foreground">dine-dash</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#services" 
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Services
          </a>
          <a 
            href="#benefits" 
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('benefits');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Benefits
          </a>
          <a 
            href="#how-it-works" 
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('how-it-works');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            How It Works
          </a>
          <a 
            href="#pricing" 
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('pricing');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Pricing
          </a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => scrollToSection('register')}
          >
            Get Started
          </Button>
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => scrollToSection('register')}
          >
            Start Free Trial
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#services" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
              >
                Services
              </a>
              <a 
                href="#benefits" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('benefits');
                }}
              >
                Benefits
              </a>
              <a 
                href="#how-it-works" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('how-it-works');
                }}
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('pricing');
                }}
              >
                Pricing
              </a>
            </nav>
            
            <div className="pt-4 border-t border-border space-y-3">
              <Button 
                variant="outline" 
                size="sm"
                className="w-full"
                onClick={() => scrollToSection('register')}
              >
                Get Started
              </Button>
              <Button 
                variant="hero" 
                size="sm"
                className="w-full"
                onClick={() => scrollToSection('register')}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;