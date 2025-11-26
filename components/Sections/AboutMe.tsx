import React from 'react';
import Image from 'next/image';

interface Skill {
  name: string;
  level: number;
}

interface AboutMeProps {
  name?: string;
  title?: string;
  description?: string;
  image?: string;
  skills?: Skill[];
  experience?: string;
  projects?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({
  name = "Viraj Madhusanka",
  title = "Full Stack Developer",
  description = "I'm a motivated full-stack development student who loves building clean, modern, and user-friendly web experiences. My journey in tech is still growing, and I'm continuously learning through projects, challenges, and real-world practice.I enjoy exploring new concepts, understanding how things work, and improving a little more every day.",
  image = "/Images/p2.jpg",
  skills = [
    { name: "HTML", level: 90 },
    { name: "Java Script", level: 40 },
    { name: "Next.js", level: 45 },
    { name: "TypeScript", level: 30 },
    { name: "React", level: 40 },
    { name: "Node.js", level: 42 },
    { name: "UI/UX Design", level: 75 }
  ],
  experience = "5+ Projects",
  projects = "HDCSE"
}) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#e8f3ff] to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-200 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-indigo-200 rounded-full opacity-30 animate-ping"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-gray-300 rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {name}
            </h3>
            <p className="text-xl text-blue-600 font-semibold mb-6">
              {title}
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              {description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-3xl font-bold text-blue-600 mb-1">
                  {experience}
                </p>
                <p className="text-gray-600 text-sm">Delivered for academic purposes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-3xl font-bold text-blue-600 mb-1">
                  {projects}
                </p>
                <p className="text-gray-600 text-sm">Higher Diploma in Computing and Software Engineering</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Technical Skills
              </h4>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#get-in-touch"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;