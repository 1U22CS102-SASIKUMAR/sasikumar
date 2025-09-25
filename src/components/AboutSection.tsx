import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <Card className="p-8 md:p-12 bg-white/70 backdrop-blur-md border-purple-100 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-200">
                <img 
                  src="/lovable-uploads/08b713d2-4d04-4d7a-a825-20e156c4574a.png" 
                  alt="Sasi Kumar" 
                  className="w-full h-full object-cover object-top"
                />
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
                {["JavaScript", "HTML/CSS", "Bootstrap", "Python", "Django", "MySQL", "Git"].map((skill) => (
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
  );
};

export default AboutSection;
