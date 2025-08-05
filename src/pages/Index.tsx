import ChatNavigation from "@/components/ChatNavigation";
import ChatInterface from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ChatNavigation />
      <div className="pt-16">
        <ChatInterface />
      </div>
    </div>
  );
};

export default Index;
