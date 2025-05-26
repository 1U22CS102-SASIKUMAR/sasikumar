import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Code, User, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              SK
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home", icon: HomeIcon },
                { id: "about", label: "About Me", icon: User },
                { id: "contact", label: "Contact", icon: Mail },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
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
              onClick={() => scrollToSection("contact")}
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

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <Card className="p-8 md:p-12 bg-white/70 backdrop-blur-md border-purple-100 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-48 h-48 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center shadow-2xl">
                  <User size={80} className="text-white" />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hi there! I'm <span className="font-semibold text-purple-600">Sasi Kumar</span>, 
                  a passionate Computer Science graduate from Tirupur with an unwavering enthusiasm 
                  for web development and cutting-edge technology.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Throughout my academic journey, I've immersed myself in various exciting projects 
                  that have sharpened my skills in modern web technologies. From responsive design 
                  to interactive user interfaces, I love bringing creative ideas to life through code.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My goal is to secure a position at a top multinational company where I can 
                  contribute to innovative projects, continue learning, and make a meaningful 
                  impact in the tech industry. I'm always eager to take on new challenges and 
                  collaborate with talented teams!
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {["React", "JavaScript", "HTML/CSS", "Node.js", "MongoDB", "Git"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in touch</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to start a conversation? I'd love to hear from you!
                </p>
              </div>
              
              <div className="grid gap-6">
                {/* Email Card */}
                <Card className="p-6 bg-white/70 backdrop-blur-md border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <a
                        href="mailto:sasi190404@gmail.com"
                        className="text-purple-600 hover:text-purple-800 transition-colors"
                      >
                        sasi190404@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Phone Card */}
                <Card className="p-6 bg-white/70 backdrop-blur-md border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <a
                        href="tel:+919096870220"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        +91 90968 70220
                      </a>
                    </div>
                  </div>
                </Card>

                {/* LinkedIn Card */}
                <Card className="p-6 bg-white/70 backdrop-blur-md border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Linkedin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/sasikumar190404"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800 transition-colors"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-md border-t border-purple-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            © 2024 Sasi Kumar. Crafted with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
