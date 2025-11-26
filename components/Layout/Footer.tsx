

interface FooterProps {
  siteName?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  location?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    whatsapp?: string;
    email?: string;
    instagram?: string;
  };
  quickLinks?: {
    label: string;
    href: string;
  }[];
  services?: string[];
}

export const Footer: React.FC<FooterProps> = ({
  siteName = "Viraj",
  tagline = "Building Digital Excellence",
  email = "mviraj975@gmail.com",
  phone = "+94 782630902",
  location = "Aththanapitiya, Kohilegadara",
  socialLinks = {
    github: "https://github.com/viraj2001-j",
    linkedin: "https://linkedin.com/in/yourusername",
    whatsapp: "https://wa.me/+94 782630902",
    email: "mviraj975@gmail.com"
  },
  quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#get-in-touch" }
  ],
  services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design"
  ]
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                {siteName.charAt(0)}
              </div>
              <span className="text-xl font-bold text-white">{siteName}</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {tagline}
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  title="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {socialLinks.whatsapp && (
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
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
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                  title="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors flex items-center space-x-2"
                  >
                    <span className="text-blue-500">▸</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${email}`} className="text-gray-400 hover:text-blue-500 transition-colors">
                  {email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${phone}`} className="text-gray-400 hover:text-blue-500 transition-colors">
                  {phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">{location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {siteName}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-blue-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;