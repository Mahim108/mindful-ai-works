import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Paperclip, Search, Mic, ArrowUp } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm a demo ChatGPT interface. In a real implementation, this would connect to OpenAI's API to provide actual AI responses. Your message was: \"" + userMessage.content + "\"",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex-shrink-0 border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-semibold">ChatGPT</h1>
          <div className="text-sm text-muted-foreground">
            Temporary Chat
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-8">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
              ChatGPT
            </h1>
            <div className="text-center text-muted-foreground mb-8 max-w-md">
              <p>Ask anything</p>
            </div>
          </div>
        ) : (
          <div className="p-4 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-3xl rounded-2xl p-4 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground ml-12"
                      : "bg-muted mr-12"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-3xl rounded-2xl p-4 bg-muted mr-12">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex-shrink-0 p-4 border-t border-border bg-background">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative flex items-end space-x-2 bg-muted rounded-3xl p-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="flex-shrink-0 rounded-full"
            >
              <Paperclip className="h-5 w-5" />
            </Button>
            
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything"
              className="flex-1 min-h-[20px] max-h-32 resize-none border-0 bg-transparent focus:ring-0 focus:ring-offset-0 text-base"
              rows={1}
            />
            
            <div className="flex space-x-1">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="flex-shrink-0 rounded-full"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="flex-shrink-0 rounded-full"
              >
                <Mic className="h-5 w-5" />
              </Button>
              <Button
                type="submit"
                disabled={!input.trim() || isLoading}
                size="icon"
                className="flex-shrink-0 rounded-full bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
        
        <div className="text-center text-xs text-muted-foreground mt-4">
          By messaging ChatGPT, you agree to our{" "}
          <a href="#" className="underline hover:no-underline">
            Terms
          </a>{" "}
          and have read our{" "}
          <a href="#" className="underline hover:no-underline">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;