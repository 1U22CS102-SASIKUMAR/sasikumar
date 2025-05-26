
import { useState, useEffect } from "react";
import { Mail, User, Home as HomeIcon } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onSectionClick }: NavigationProps) => {
  return (
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
                onClick={() => onSectionClick(item.id)}
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
  );
};

export default Navigation;
