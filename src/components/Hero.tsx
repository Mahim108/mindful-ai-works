import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import aiHeroImage from "@/assets/ai-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-background">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={aiHeroImage} 
          alt="AI Neural Network" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-primary rounded-full shadow-glow-primary" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <div className="w-6 h-6 bg-primary-glow rounded-full shadow-glow-ai" />
      </div>
      <div className="absolute bottom-40 left-1/4 animate-float delay-2000">
        <div className="w-3 h-3 bg-primary rounded-full shadow-glow-primary" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Advanced AI Platform</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent">
            Artificial Intelligence
          </span>
          <br />
          <span className="text-foreground">for Everyone</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Access cutting-edge AI models for text generation, image creation, and coding assistance through our simple and powerful API platform.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="group">
            Get Started
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="glass" size="xl">
            View Documentation
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100M+</div>
            <div className="text-muted-foreground">API Requests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;