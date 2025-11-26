import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  technologies: string[];
  date: string;
  status: 'Completed' | 'In Progress' | 'Ongoing';
}

interface FeaturedProjectsProps {
  projects?: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects = [
  {
    "title": "LexCeylone – AI-Powered Legal Assistant Platform",
    "description": "A web-based legal guidance system providing AI-driven support for accessing Sri Lankan legal information.",
    "longDescription": "Developed a user-friendly legal assistant platform that makes Sri Lankan legal information accessible and easy to understand. Features categorized legal topics, intelligent search, and AI-powered guidance for the general public. Focused on intuitive design and usability.",
    "image": "/Images/image.png",
    "tags": ["HTML", "CSS", "JavaScript", "AI", "MySQL", "PHP"],
    "category": "Web Application",
    "demoUrl": "https://demo.lexceylone.com",
    "githubUrl": "https://github.com/yourusername/lexceylone",
    "features": [
      "Categorized legal topics",
      "AI-driven intelligent search",
      "User-friendly interface",
      "Accessible legal guidance for general public"
    ],
    "technologies": ["HTML", "CSS", "JavaScript", "AI integration", "MySQL with Firebase", "PHP"],
    "date": "2025",
    "status": "Completed"
  },
  {
    "title": "FitZone Fitness Center – Gym Service Management",
    "description": "A comprehensive gym management web application supporting memberships, schedules, and trainer profiles.",
    "longDescription": "Built a complete gym service management system with secure authentication for admin and staff. Allows users to register online, check schedules, access trainer profiles, submit inquiries, and search services efficiently. Focused on seamless management and user experience.",
    "image": "/Images/fitzone.png",
    "tags": ["HTML", "CSS", "JavaScript", "AI integration", "MySQL", "PHP"],
    "category": "Web Application",
    "demoUrl": "https://demo.fitzone.com",
    "githubUrl": "https://github.com/yourusername/fitzone",
    "features": [
      "Membership and schedule management",
      "Trainer profile access",
      "Online registration and inquiries",
      "Search functionality",
      "Admin and staff authentication"
    ],
    "technologies": ["HTML", "CSS", "JavaScript", "AI integration", "MySQL", "PHP"],
    "date": "2025",
    "status": "Completed"
  },
{
  "title": "PromptGallery – AI-Powered Prompt & Image Generator",
  "description": "A full-stack web application where users can generate AI images, explore prompts, and copy prompts for creative use.",
  "longDescription": "Developed a full-stack platform allowing users to generate AI images and explore a gallery of prompts. Users can copy prompts for personal use or generate new prompts with AI assistance. Integrated AI support for both image and prompt generation, providing a seamless creative experience. Built with Next.js, MySQL, and Prisma, with a focus on performance, usability, and modern UI design.",
  "image": "/Images/4.png",
  "tags": ["Next.js", "MySQL", "Prisma", "AI", "Full-Stack"],
  "category": "Full-Stack",
  "demoUrl": "https://demo.promptgallery.com",
  "githubUrl": "https://github.com/yourusername/promptgallery",
  "features": [
    "AI-powered image generation",
    "AI-assisted prompt generation",
    "Prompt gallery with copy functionality",
    "User-friendly interface with Next.js",
    "Full-stack integration using MySQL and Prisma"
  ],
  "technologies": ["Next.js", "MySQL", "Prisma", "OpenAI API", "Tailwind CSS"],
  "date": "2025",
  "status": "Completed"
},
 
   {
    "title": "LuxeVista Resort – Hotel Booking Android App",
    "description": "A native Android app for hotel booking, service management, and personalized guest experiences.",
    "longDescription": "Developed a native Android app for LuxeVista Resort, allowing guests to browse rooms, book services, manage reservations, and explore nearby attractions. Features secure authentication and personalized profiles to enhance guest experience and convenience.",
    "image": "/Images/2.png",
    "tags": ["Android", "Java", "Mobile App", "Hotel Booking"],
    "category": "Mobile",
    "demoUrl": "https://play.google.com/store/apps/details?id=com.luxevista",
    "githubUrl": "https://github.com/yourusername/luxevista",
    "features": [
      "Room browsing and booking",
      "Service and reservation management",
      "Nearby attraction information",
      "Personalized user profiles",
      "Secure authentication"
    ],
    "technologies": ["Java", "Android Studio", "SQLite"],
    "date": "2025",
    "status": "Completed"
  },
  {
    "title": "The Gadget Hub – Multi-Distributor Quotation & Ordering System",
    "description": "A service-oriented system automating quotation requests and orders from multiple distributors.",
    "longDescription": "Created a multi-distributor ordering and quotation system using the .NET framework. Customer orders automatically trigger quotation requests to three different distributors, streamlining ordering workflows and improving efficiency. Built with a focus on reliability and automation.",
    "image": "/Images/3.png",
    "tags": [".NET", "C#", "SOC", "Web Application"],
    "category": "Web Application",
    "demoUrl": "https://demo.gadgethub.com",
    "githubUrl": "https://github.com/yourusername/gadgethub",
    "features": [
      "Automated quotation requests",
      "Multi-distributor order handling",
      "Secure and reliable workflow",
      "Efficient order processing"
    ],
    "technologies": [".NET", "C#", "SQL Server", "Service-Oriented Architecture"],
    "date": "2025",
    "status": "Completed"
  }
  ]
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Ongoing": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Tech Icons */}
        <div className="absolute top-20 left-10 text-6xl opacity-5 animate-float">⚡</div>
        <div className="absolute top-40 right-20 text-5xl opacity-5 animate-float delay-1000">🚀</div>
        <div className="absolute bottom-32 left-20 text-4xl opacity-5 animate-float delay-500">💻</div>
        <div className="absolute bottom-20 right-32 text-6xl opacity-5 animate-float delay-1500">🎯</div>
        
        {/* Geometric Shapes */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-200 rounded-full opacity-10"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-200 rounded-full opacity-10"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-200 opacity-10 rotate-45"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-gray-100"
            >
           
{/* Project Image */}
<div className="relative h-56 overflow-hidden rounded-t-2xl">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover"
  />
  {/* Status Badge */}
  <div className="absolute top-4 right-4">
    <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${getStatusColor(project.status)}`}>
      {project.status}
    </span>
  </div>
  {/* Category Badge */}
  <div className="absolute top-4 left-4">
    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium">
      {project.category}
    </span>
  </div>
</div>


              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg font-medium text-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    View Details
                  </button>
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
                      title="View on GitHub"
                    >
                      <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start rounded-t-2xl">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(selectedProject.status)}`}>
                      {selectedProject.status}
                    </span>
                    <span className="text-gray-500 text-sm">{selectedProject.date}</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl bg-gray-100 hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Image Placeholder */}
<div className="w-full h-64 rounded-xl mb-6 relative overflow-hidden">
  <Image
    src={selectedProject.image}   // ← Pulls the modal image dynamically
    alt={selectedProject.title}
    fill
    className="object-cover"
  />
</div>


                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    About This Project
                  </h4>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-200">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-200">
                        <span className="text-green-600 mr-3 mt-1 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl text-center transform hover:scale-105"
                    >
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4 rounded-lg font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl text-center transform hover:scale-105"
                    >
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-blue-200 rounded-full opacity-10 blur-xl"></div>
          </div>
          <p className="text-gray-600 mb-6 relative z-10">
            Want to see more of my work?
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a
              href="https://github.com/viraj2001-j"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Visit My GitHub
            </a>
            <a
              href="#get-in-touch"
              className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;