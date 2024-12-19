import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl sm:text-2xl text-secondary max-w-2xl mx-auto mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            A passionate developer crafting beautiful and functional web experiences
          </p>
          <Button className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            View My Work <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;