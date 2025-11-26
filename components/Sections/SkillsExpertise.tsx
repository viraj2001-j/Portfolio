import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Tool {
  name: string;
  icon: string;
}

interface Expertise {
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

interface SkillsExpertiseProps {
  skills?: Skill[];
  tools?: Tool[];
  expertise?: Expertise[];
  certifications?: string[];
}

const SkillsExpertise: React.FC<SkillsExpertiseProps> = ({
skills = [
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "Next.js", level: 45, category: "Frontend" },
  { name: "React.js", level: 50, category: "Frontend" },
  { name: "TypeScript", level: 30, category: "Frontend" },
  { name: "JavaScript", level: 40, category: "Frontend" },
  { name: "Tailwind CSS", level: 60, category: "Frontend" },
  
  { name: "Node.js", level: 40, category: "Backend" },
  { name: "Express.js", level: 35, category: "Backend" },
  { name: "MySQL", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 35, category: "Backend" },
  { name: "Java", level: 50, category: "Backend" },
  { name: "C#", level: 40, category: "Backend" },
  
  { name: "Git & GitHub", level: 70, category: "DevOps" },
  { name: "Visual Studio Code", level: 90, category: "DevOps" },
  { name: "Android Studio", level: 65, category: "DevOps" },
  { name: "Visual Studio", level: 60, category: "DevOps" },
  
  { name: "Problem Solving", level: 75, category: "Soft Skills" },
  { name: "Communication", level: 75, category: "Soft Skills" },
  { name: "Project Management", level: 75, category: "Soft Skills" },
  { name: "Leadership", level: 75, category: "Soft Skills" }
],

  tools = [
    { name: "VS Code", icon: "💻" },
    { name: "GitHub", icon: "🔗" },
    { name: "Android Studio", icon: "🤖" },
    { name: "Visual Studio", icon: "🖥️" },
    { name: "Postman", icon: "📮" }
  ],
  expertise = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern technologies and best practices.",
      icon: "🚀",
      skills: ["HTML", "Next.js", "Database Design", "API"]
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with focus on user experience.",
      icon: "🎨",
      skills: ["Responsive Design",  "Design Systems", "Accessibility"]
    },
    {
      title: "Cloud Architecture",
      description: "Designing and deploying scalable cloud infrastructure and microservices.",
      icon: "☁️",
      skills: ["Neon", "Serverless"]
    },
    {
      title: "Performance Optimization",
      description: "Optimizing applications for speed, efficiency, and scalability.",
      icon: "⚡",
      skills: ["Code Splitting", "SEO"]
    }
  ],
 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(skills.map(s => s.category)))];
  
  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 75) return "bg-blue-500";
    if (level >= 60) return "bg-yellow-500";
    return "bg-gray-400";
  };

  const getSkillLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Tech Elements */}
        <div className="absolute top-16 left-8 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-32 right-12 w-12 h-12 bg-cyan-200 rounded-lg opacity-30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-24 left-20 w-20 h-20 bg-sky-200 rounded-full opacity-25 animate-ping delay-700"></div>
        <div className="absolute bottom-16 right-16 w-14 h-14 bg-blue-100 opacity-30 animate-pulse delay-300"></div>
        
        {/* Circuit Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.08)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        
        {/* Gradient Blobs */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        
        {/* Binary Code Animation */}
        <div className="absolute top-10 left-0 right-0 text-xs font-mono text-blue-400/10 whitespace-nowrap overflow-hidden">
          <div className="animate-marquee">01010101 00101110 01010011 00101110 01000101 00101110 01000100 01010101 00101110 01010011 00101110 01000101 00101110 01000100</div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-xs font-mono text-cyan-400/10 whitespace-nowrap overflow-hidden">
          <div className="animate-marquee-reverse">01000100 00101110 01000101 00101110 01010011 00101110 01010101 01000100 00101110 01000101 00101110 01010011 00101110 01010101</div>
        </div>

        {/* Floating Bubbles */}
        <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-blue-100 rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-cyan-100 rounded-full opacity-50 animate-float delay-500"></div>
        <div className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-sky-100 rounded-full opacity-30 animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and areas of expertise
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Technical Skills
            </h3>
            
            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-white text-gray-700 border border-blue-200 hover:border-blue-400 hover:text-blue-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 group"
              >
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-xs text-gray-500 font-medium">
                      {skill.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {skill.level}%
                    </div>
                    <span className={`text-xs font-medium ${
                      skill.level >= 90 ? "text-green-600" :
                      skill.level >= 75 ? "text-blue-600" :
                      skill.level >= 60 ? "text-yellow-600" : "text-gray-600"
                    }`}>
                      {getSkillLabel(skill.level)}
                    </span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="relative w-full bg-blue-50 rounded-full h-3 overflow-hidden border border-blue-200">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="h-full w-full bg-white opacity-30 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border-2 border-blue-100 rounded-xl px-6 py-4 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex items-center space-x-3 group transform hover:scale-105"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </span>
                <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <a
            href="#get-in-touch"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsExpertise;