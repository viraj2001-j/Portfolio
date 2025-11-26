import React, { useState, useEffect } from 'react';



interface HeaderProps {
  logo?: string;
  siteName?: string;
  menuItems?: {
    label: string;
    href: string;
  }[];
}

export const Header: React.FC<HeaderProps> = ({
  siteName = "VIRAJ.DEV",
  menuItems = [
    { label: "About Me", href: "#about" },
    { label: "Core Skills", href: "#core-skills" },
    { label: "Featured Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Expertise", href: "#skills" },
    { label: "Get in Touch", href: "#get-in-touch" }
  ]
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-cyan-500/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
              {siteName}
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {menuItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-6 py-3 transition-all duration-500 group ${
                    isActive 
                      ? 'text-cyan-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 animate-pulse" />
                      <div className="absolute inset-0 bg-cyan-500/10 rounded-lg blur-sm" />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center text-xl">
              {isMenuOpen ? '✕' : '☰'}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 space-y-2 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-cyan-500/20 animate-fadeIn">
            {menuItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};
export default Header;