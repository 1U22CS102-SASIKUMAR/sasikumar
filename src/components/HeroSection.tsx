
import { Code, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Sasi Kumar
          </h1>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Code className="text-purple-500" size={24} />
            <h2 className="text-xl md:text-2xl text-gray-700 font-medium">
              Computer Science Graduate | Aspiring Web Developer
            </h2>
            <Code className="text-blue-500" size={24} />
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building responsive, user-friendly websites with a passion for tech.
          </p>
          <Button
            onClick={onContactClick}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 text-purple-200 animate-bounce">
            <Code size={32} />
          </div>
          <div className="absolute top-1/3 right-1/4 text-blue-200 animate-pulse">
            <Github size={28} />
          </div>
          <div className="absolute bottom-1/3 left-1/3 text-pink-200 animate-bounce delay-1000">
            <Code size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
