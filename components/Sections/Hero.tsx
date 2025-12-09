import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroProps {
  name?: string;
  titles?: string[];
  tagline?: string;
  description?: string;
  profileImage?: string;
  resumeUrl?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
    whatsapp?: string; 
  };
  stats?: {
    label: string;
    value: string;
  }[];
}

const Hero: React.FC<HeroProps> = ({
  name = "Viraj",
  titles = ["Full Stack Developer", "Software Engineer", "Student of ICBT", "Maths Teacher"],
  tagline = "Building Digital Excellence",
  description = "I create beautiful, functional, and user-centered digital experiences. Passionate about turning ideas into reality through clean code and innovative solutions.",
  profileImage = "/Images/OIP.webp",
  resumeUrl = "/Images/resume.pdf",
  socialLinks = {
    github: "https://github.com/viraj2001-j",
    linkedin: "https://linkedin.com/in/yourusername",
    whatsapp: "https://wa.me/+94 782630902",
    email: "mviraj975@gmail.com"
  },
  stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Code Commits", value: "2000+" }
  ]
}) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="text-center md:text-left">
            {/* Greeting */}
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                {name}
              </span>
            </h1>

            {/* Animated Title */}
            <div className="h-16 mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                <span className="text-blue-600">
                  {titles[currentTitleIndex]}
                </span>
                <span className={`inline-block w-1 h-8 bg-blue-600 ml-1 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-xl text-gray-600 font-medium mb-4">
              {tagline}
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2"
              >
                <span>View My Work</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <a
                href={resumeUrl}
                download
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                  title="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              )}
              
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                  title="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
                            
              {socialLinks.whatsapp && (
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                  title="WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M16.001 3.2c-7.047 0-12.8 5.754-12.8 12.8 0 2.256.589 4.453 1.712 6.389L3.2 28.8l6.548-1.683A12.73 12.73 0 0016 28.8c7.047 0 12.8-5.754 12.8-12.8s-5.753-12.8-12.799-12.8zm0 23.467c-2.02 0-3.985-.542-5.708-1.568l-.408-.242-3.884 1.002 1.036-3.787-.265-.389a10.57 10.57 0 01-1.64-5.681c0-5.854 4.764-10.667 10.667-10.667S26.667 10.147 26.667 16c0 5.854-4.764 10.667-10.666 10.667zm5.573-7.893c-.304-.152-1.796-.887-2.074-.987-.278-.102-.48-.152-.682.152-.203.304-.783.986-.961 1.188-.177.203-.354.228-.658.076-.304-.152-1.285-.474-2.448-1.51-.904-.806-1.515-1.803-1.692-2.107-.177-.304-.019-.469.133-.62.137-.137.304-.354.456-.531.152-.177.203-.304.304-.507.101-.203.05-.38-.025-.531-.076-.152-.682-1.647-.935-2.254-.246-.59-.497-.51-.682-.52l-.582-.01c-.203 0-.531.076-.808.38-.278.304-1.06 1.036-1.06 2.53 0 1.493 1.086 2.936 1.238 3.14.152.203 2.137 3.26 5.178 4.566.724.313 1.288.5 1.727.64.724.23 1.38.198 1.9.12.579-.086 1.796-.734 2.052-1.443.253-.709.253-1.316.177-1.443-.075-.127-.278-.203-.582-.354z"/>
                  </svg>
                </a>
              )}


              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                  title="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-2xl"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-white rounded-full overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    {/* <div className="text-9xl opacity-30">👤</div> */}
                      <Image src="/Images/p1.jpg" width={900} height={900} alt="icon" />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-xl border-4 border-blue-100">
                <p className="text-sm font-semibold text-gray-700">
                  Available for work
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;