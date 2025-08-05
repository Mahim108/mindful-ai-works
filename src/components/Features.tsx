import { Card } from "@/components/ui/card";
import { MessageSquare, Image, Code, Zap, Shield, Globe } from "lucide-react";
import textGenerationImage from "@/assets/text-generation.jpg";
import imageCreationImage from "@/assets/image-creation.jpg";
import codingAssistanceImage from "@/assets/coding-assistance.jpg";

const Features = () => {
  const mainFeatures = [
    {
      icon: MessageSquare,
      title: "Text Generation",
      description: "Generate human-like text for any use case with our advanced language models.",
      image: textGenerationImage,
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Image,
      title: "Image Creation",
      description: "Create stunning images from text descriptions using our state-of-the-art image models.",
      image: imageCreationImage,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Code,
      title: "Coding Assistant",
      description: "Get intelligent code suggestions, debugging help, and programming guidance.",
      image: codingAssistanceImage,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with global CDN and edge computing infrastructure."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption and advanced security measures."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Available worldwide with 99.9% uptime and automatic scaling capabilities."
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Powerful AI Capabilities
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access cutting-edge AI models through simple APIs and intuitive interfaces
          </p>
        </div>

        {/* Main features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-elevated">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-card/90 to-card/70" />
                </div>

                <div className="relative z-10 p-6">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4 shadow-glow-primary`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-card/70">
                <div className="w-12 h-12 rounded-lg bg-accent p-3 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;