import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ApiSection from "@/components/ApiSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      <Hero />
      <Features />
      <ApiSection />
      <Footer />
    </div>
  );
};

export default Index;
