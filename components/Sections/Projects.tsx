import { useState } from 'react';
import GlowCard from '../UI/GlowCard';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Neural Network Visualizer',
      description: 'Interactive AI model training and visualization platform',
      longDescription: 'A comprehensive platform that allows users to build, train, and visualize neural networks in real-time with interactive 3D representations of model architecture and performance metrics.',
      image: '🧠',
      technologies: ['React', 'Three.js', 'TensorFlow.js', 'WebGL'],
      category: 'ai',
      liveUrl: '#',
      githubUrl: '#',
      features: ['Real-time training visualization', '3D model architecture', 'Performance analytics', 'Export models']
    },
    {
      id: 2,
      title: 'Quantum Dashboard',
      description: 'Real-time data analytics with quantum-inspired algorithms',
      longDescription: 'Enterprise dashboard leveraging quantum computing principles for ultra-fast data processing and predictive analytics with holographic UI elements.',
      image: '📊',
      technologies: ['Next.js', 'D3.js', 'Python', 'FastAPI'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      features: ['Quantum data processing', 'Holographic UI', 'Real-time analytics', 'Predictive modeling']
    },
    {
      id: 3,
      title: 'Blockchain Sentinel',
      description: 'AI-powered blockchain security monitoring system',
      longDescription: 'Advanced security platform that uses machine learning to detect anomalies and potential threats across multiple blockchain networks in real-time.',
      image: '🔐',
      technologies: ['Node.js', 'Python', 'Ethereum', 'ML'],
      category: 'blockchain',
      liveUrl: '#',
      githubUrl: '#',
      features: ['Real-time monitoring', 'Anomaly detection', 'Multi-chain support', 'Automated alerts']
    },
    {
      id: 4,
      title: 'AR Development Suite',
      description: 'Mixed reality development environment',
      longDescription: 'Complete suite for building augmented and virtual reality experiences with AI-assisted development tools and real-time collaboration features.',
      image: '👓',
      technologies: ['Unity', 'ARKit', 'WebXR', 'Three.js'],
      category: 'ar-vr',
      liveUrl: '#',
      githubUrl: '#',
      features: ['AI-assisted development', 'Real-time collaboration', 'Cross-platform AR', 'WebXR support']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'web', name: 'Web' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'ar-vr', name: 'AR/VR' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              FUTURE PROJECTS
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Exploring the boundaries of technology with innovative solutions that shape tomorrow's digital landscape
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent'
                  : 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

{/* Projects Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredProjects.map((project) => (
    <div
      key={project.id}
      className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
      onClick={() => setSelectedProject(project)}
    >
      <div className="space-y-6">
        {/* Project Icon */}
        <div className="text-6xl text-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {project.image}
        </div>

        {/* Project Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Hover Action */}
          <div className="flex justify-between items-center pt-4 border-t border-cyan-500/20">
            <span className="text-cyan-400 text-sm group-hover:translate-x-2 transition-transform">
              VIEW DETAILS →
            </span>
            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.liveUrl && (
                <button className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center hover:bg-green-500/30 transition-colors">
                  ↗
                </button>
              )}
              {project.githubUrl && (
                <button className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-500/30 transition-colors">
                  ⭐
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900/90 border border-cyan-500/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-cyan-400 text-lg">
                      {selectedProject.description}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="text-8xl text-center">
                      {selectedProject.image}
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {selectedProject.liveUrl && (
                        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white transform hover:scale-105 transition-all">
                          Live Demo
                        </button>
                      )}
                      {selectedProject.githubUrl && (
                        <button className="px-6 py-3 border border-cyan-500/50 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all">
                          Source Code
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Description</h4>
                      <p className="text-gray-400 leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-400">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;