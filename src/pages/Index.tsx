
import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    scrollToSection("contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />
      <HeroSection onContactClick={handleContactClick} />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
