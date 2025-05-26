
import { Mail, Phone, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
