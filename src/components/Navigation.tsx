import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg shadow-glow-primary" />
              <span className="text-xl font-bold">OpenAI</span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#api" className="text-foreground hover:text-primary transition-colors">
              API
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-foreground hover:text-primary transition-colors">
              Documentation
            </a>
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="ai">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/50 backdrop-blur-sm rounded-lg mt-2 border border-border/50">
              <a href="#features" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#api" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                API
              </a>
              <a href="#pricing" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#docs" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <div className="border-t border-border/50 pt-4">
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full">Sign In</Button>
                  <Button variant="ai" className="w-full">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;