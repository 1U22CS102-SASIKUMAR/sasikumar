
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Sasi Kumar"
      };

      await emailjs.send(
        'service_frrdela',
        'template_1iwozkc',
        templateParams,
        '6LcjKBSOth6b9ASvd'
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 bg-white/70 backdrop-blur-md border-purple-100 shadow-xl text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-4">Thank you for reaching out. I'll get back to you soon.</p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
        >
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-white/70 backdrop-blur-md border-purple-100 shadow-xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Send me a message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-purple-200 focus:border-purple-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Your Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-purple-200 focus:border-purple-400"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border-purple-200 focus:border-purple-400"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or question..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="border-purple-200 focus:border-purple-400 resize-none"
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Send size={18} />
              <span>Send Message</span>
            </div>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
