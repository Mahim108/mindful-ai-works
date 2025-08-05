import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Play } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ApiSection = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const codeExample = `import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await openai.chat.completions.create({
  messages: [
    {
      role: "system", 
      content: "You are a helpful assistant."
    },
    {
      role: "user", 
      content: "Write a haiku about recursion."
    }
  ],
  model: "gpt-4",
});

console.log(completion.choices[0]);`;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(type);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="api" className="py-24 bg-gradient-to-br from-background to-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Simple, Powerful APIs
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get started in minutes with our intuitive REST APIs. From text generation to image creation, 
              our endpoints are designed for developers who want to ship fast.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {[
                "RESTful APIs with comprehensive documentation",
                "SDKs for Python, Node.js, and more",
                "Real-time streaming responses",
                "Enterprise-grade rate limiting",
                "Comprehensive error handling"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-glow-primary" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Get API Key
              </Button>
              <Button variant="glass" size="lg">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Right side - Code example */}
          <div className="relative">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
              {/* Code header */}
              <div className="flex items-center justify-between p-4 border-b border-border/50 bg-accent/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-sm text-muted-foreground">main.js</div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(codeExample, "main")}
                  className="h-8"
                >
                  {copiedCode === "main" ? (
                    <span className="text-primary">Copied!</span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>

              {/* Code content */}
              <div className="p-4 bg-background/50">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-foreground">
                    {codeExample}
                  </code>
                </pre>
              </div>

              {/* Run button */}
              <div className="p-4 border-t border-border/50 bg-accent/20">
                <Button variant="ai" size="sm" className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Try it live
                </Button>
              </div>
            </Card>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full shadow-glow-primary animate-float" />
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary-glow rounded-full shadow-glow-ai animate-float delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;