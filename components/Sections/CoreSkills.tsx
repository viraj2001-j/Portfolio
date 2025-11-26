import React, { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  description: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

interface CoreSkillsProps {
  skillCategories?: SkillCategory[];
  showYearsOfExperience?: boolean;
}

const CoreSkills: React.FC<CoreSkillsProps> = ({
  showYearsOfExperience = true,
  skillCategories = [
    {
      category: "Frontend Development",
      icon: "🎨",
      skills: [
        {
          "name": "HTML5",
          "icon": "🌐",
          "description": "Creating structured and semantic web content using modern HTML elements and accessibility best practices",
        },
        {
          name: "Next.js",
          icon: "▲",
          description: "Server-side rendering, static site generation, and full-stack React applications"
        },
        {
          name: "React.js",
          icon: "⚛️",
          description: "Building dynamic, scalable web applications with modern React patterns and hooks",
        },
        {
          name: "TypeScript",
          icon: "📘",
          description: "Type-safe JavaScript development with advanced TypeScript features"
        },
        {
          "name": "JavaScript",
          "icon": "🟨",
          "description": "Writing dynamic and interactive web applications using modern JavaScript features, ES6+ syntax, and best practices"
        },
        {
          name: "Tailwind CSS",
          icon: "🎨",
          description: "Rapid UI development with utility-first CSS framework"
        }
      ]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          icon: "🟢",
          description: "Building scalable server-side applications and RESTful APIs"
        },
        {
          name: "Express.js",
          icon: "🚀",
          description: "Creating robust web servers and middleware solutions"
        },
        {
          "name": "MySQL",
          "icon": "🛢️",
          "description": "Designing, managing, and querying relational databases to store and retrieve data efficiently using structured SQL commands"
        },
        {
          name: "PostgreSQL",
          icon: "🐘",
          description: "Relational database design, optimization, and complex queries"
        },
        {
          "name": "Java",
          "icon": "☕",
          "description": "Writing robust, object-oriented applications for desktop, web, and mobile platforms using modern Java features and best practices"
        },
        {
          "name": "C#",
          "icon": "💠",
          "description": "Developing versatile applications on the .NET platform with clean, maintainable, and efficient C# code"
        }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        {
          name: "Git & GitHub",
          icon: "🔀",
          description: "Version control, collaboration, and CI/CD workflows"         
        },
        {
          "name": "Visual Studio Code",
          "icon": "📝",
          "description": "Writing, debugging, and managing code efficiently with a lightweight, extensible code editor supporting multiple languages and workflows"
        },
        {
          "name": "Android Studio",
          "icon": "🤖",
          "description": "Developing native Android applications with intuitive UI, efficient performance, and modern Android development practices"
        },
        {
          "name": "Visual Studio",
          "icon": "🖥️",
          "description": "Building, debugging, and managing software projects efficiently using a powerful IDE for multiple programming languages"
        },
        {
          "name": "Postman",
          "icon": "📬",
          "description": "Testing, documenting, and managing APIs efficiently to ensure smooth communication between front-end and back-end systems"
        }
      ]
    },
    {
      category: "Soft Skills",
      icon: "💡",
      skills: [
        {
          name: "Problem Solving",
          icon: "🧩",
          description: "Analytical thinking and creative solutions to complex challenges"
        },
        {
          name: "Communication",
          icon: "💬",
          description: "Clear technical documentation and effective team collaboration"
        },
        {
          name: "Project Management",
          icon: "📊",
          description: "Agile methodologies, sprint planning, and deadline management"
        },
        {
          name: "Leadership",
          icon: "👥",
          description: "Mentoring junior developers and leading technical initiatives"
        }
      ]
    }
  ]
}) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return "from-green-500 to-emerald-600";
    if (proficiency >= 80) return "from-blue-500 to-blue-600";
    if (proficiency >= 70) return "from-yellow-500 to-orange-500";
    return "from-gray-400 to-gray-500";
  };

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return "Expert";
    if (proficiency >= 80) return "Advanced";
    if (proficiency >= 70) return "Proficient";
    return "Intermediate";
  };

  const getProficiencyTextColor = (proficiency: number) => {
    if (proficiency >= 90) return "text-green-600";
    if (proficiency >= 80) return "text-blue-600";
    if (proficiency >= 70) return "text-yellow-600";
    return "text-gray-600";
  };

  return (
    <section id="core-skills" className="py-20 bg-gradient-to-b from-[#f1e8ff] to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-purple-200 rounded-lg opacity-20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-20 h-20 bg-blue-200 opacity-30 animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute top-10 right-1/4 w-14 h-14 bg-indigo-200 opacity-30 rounded-full animate-pulse delay-700"></div>
        
        {/* Dotted pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        {/* Gradient blobs */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Core Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === index
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <span>{category.category}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories[selectedCategory].skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              {/* Skill Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-4xl">{skill.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {skill.name}
                    </h3>
                    <p className={`text-sm font-semibold `}>
                      
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    
                  </div>
                 
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    
                  >
                    <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in learning more about my expertise?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CoreSkills;