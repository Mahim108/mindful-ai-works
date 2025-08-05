import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "API", href: "#api" },
        { name: "Documentation", href: "#docs" },
        { name: "Pricing", href: "#pricing" },
        { name: "Changelog", href: "#changelog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Examples", href: "#examples" },
        { name: "Community", href: "#community" },
        { name: "Support", href: "#support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Privacy", href: "#privacy" },
        { name: "Terms", href: "#terms" }
      ]
    }
  ];

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg shadow-glow-primary" />
                <span className="text-xl font-bold">OpenAI</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Empowering developers with cutting-edge AI capabilities through simple, 
                powerful APIs that scale with your business.
              </p>
              
              {/* Social links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-foreground font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 OpenAI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#status" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                API Status
              </a>
              <a href="#security" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Security
              </a>
              <a href="#compliance" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;