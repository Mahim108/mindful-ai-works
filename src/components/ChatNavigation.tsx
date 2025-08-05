import { Button } from "@/components/ui/button";
import { ChevronDown, HelpCircle } from "lucide-react";

const ChatNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Left side - ChatGPT dropdown */}
        <div className="flex items-center">
          <Button variant="ghost" className="flex items-center gap-2 font-semibold text-lg">
            ChatGPT
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Right side - Auth buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button 
            variant="default" 
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-4"
          >
            Log in
          </Button>
          <Button variant="outline" className="rounded-full px-4">
            Sign up for free
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default ChatNavigation;