import React from 'react';
import Image from "next/image";

interface GetInTouchProps {
  heading?: string;
  subheading?: string;
  email?: string;
  phone?: string;
  location?: string;
  availability?: string;
  responseTime?: string;
}

const GetInTouch: React.FC<GetInTouchProps> = ({
  heading = "Let's Create Something Amazing Together",
  subheading = "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  email = "mviraj975@gmail.com",
  phone = "+94 782630902",
  location = "Aththanapitiya, Kohilegadara",
  availability = "Available for freelance work",
  responseTime = "24 hours"
}) => {
  return (
    <section id="get-in-touch" className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Square Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Square Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Animated Square Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.03)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse"></div>
        
        {/* Large Square Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.02)_2px,transparent_2px),linear-gradient(90deg,rgba(14,165,233,0.02)_2px,transparent_2px)] bg-[size:120px_120px]"></div>

        {/* Floating Square Elements */}
        <div className="absolute top-16 left-10 w-8 h-8 bg-blue-200 opacity-30 animate-float rotate-45"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-200 opacity-40 animate-float delay-1000 rotate-45"></div>
        <div className="absolute bottom-32 left-20 w-10 h-10 bg-sky-200 opacity-25 animate-float delay-500 rotate-45"></div>
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-blue-100 opacity-30 animate-float delay-1500 rotate-45"></div>
        
        {/* Corner Square Accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-2 border-blue-200 border-opacity-30 rotate-45"></div>
        <div className="absolute top-8 right-8 w-12 h-12 border-2 border-cyan-200 border-opacity-30 rotate-45"></div>
        <div className="absolute bottom-8 left-8 w-14 h-14 border-2 border-sky-200 border-opacity-30 rotate-45"></div>
        <div className="absolute bottom-8 right-8 w-10 h-10 border-2 border-blue-200 border-opacity-30 rotate-45"></div>

        {/* Center Square Pattern */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
          <div className="absolute inset-0 border-2 border-blue-200 border-opacity-20 rotate-45"></div>
          <div className="absolute inset-4 border-2 border-cyan-200 border-opacity-20 rotate-45"></div>
          <div className="absolute inset-8 border-2 border-sky-200 border-opacity-20 rotate-45"></div>
        </div>

        {/* Gradient Square Overlays */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 opacity-20 blur-3xl rotate-45"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-sky-100 to-blue-100 opacity-20 blur-3xl rotate-45"></div>

        {/* Animated Square Dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-300 opacity-40 animate-ping rotate-45"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-300 opacity-50 animate-ping delay-700 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-sky-300 opacity-40 animate-ping delay-300 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header with Square Accent */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4">
            <div className="absolute -inset-4 bg-blue-100 opacity-50 rotate-45 rounded-lg"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative">
              {heading}
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods with Square Design */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email me at",
                  value: email,
                  subtext: `I'll respond within ${responseTime}`,
                  color: "blue"
                },
                {
                  icon: (
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Call me at",
                  value: phone,
                  subtext: "Mon-Fri, 9AM-6PM",
                  color: "green"
                },
                {
                  icon: (
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Located in",
                  value: location,
                  subtext: "Open to remote work",
                  color: "purple"
                },
                {
                  icon: (
                    <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Availability",
                  value: availability,
                  subtext: "Let's start your project",
                  color: "yellow"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`bg-white rounded-lg p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-${item.color}-100 relative overflow-hidden`}>
                    <div className={`absolute top-0 right-0 w-3 h-3 bg-${item.color}-500 opacity-20`}></div>
                    <div className={`absolute bottom-0 left-0 w-3 h-3 bg-${item.color}-500 opacity-20`}></div>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 text-sm mb-1 font-medium">{item.label}</p>
                    <a 
                      href={item.label.includes("Email") ? `mailto:${item.value}` : item.label.includes("Call") ? `tel:${item.value}` : "#"}
                      className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors block"
                    >
                      {item.value}
                    </a>
                    <p className={`text-${item.color}-500 text-xs mt-1`}>{item.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Square Style CTA Buttons */}
            <div className="pt-8 space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full group relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 w-2 h-2 bg-white opacity-30 rotate-45"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-white opacity-30 rotate-45"></div>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Send Email</span>
              </a>
              
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center space-x-3 bg-white text-blue-600 border-2 border-blue-200 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 w-full group relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 opacity-20 rotate-45"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-500 opacity-20 rotate-45"></div>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>

            {/* Square Style Social Links */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm mb-4 font-medium">Connect with me</p>
              <div className="flex space-x-4">
                {[
                  { 
                    href: "https://github.com/yourusername", 
                    icon: (
                      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    ),
                    color: "hover:bg-gray-100"
                  },
                  { 
                    href: "https://linkedin.com/in/yourusername", 
                    icon: (
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                    color: "hover:bg-blue-100"
                  },
                  { 
                    href: "https://wa.me/+94782630902", 
                    icon: (
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M16.001 3.2c-7.047 0-12.8 5.754-12.8 12.8 0 2.256.589 4.453 1.712 6.389L3.2 28.8l6.548-1.683A12.73 12.73 0 0016 28.8c7.047 0 12.8-5.754 12.8-12.8s-5.753-12.8-12.799-12.8zm0 23.467c-2.02 0-3.985-.542-5.708-1.568l-.408-.242-3.884 1.002 1.036-3.787-.265-.389a10.57 10.57 0 01-1.64-5.681c0-5.854 4.764-10.667 10.667-10.667S26.667 10.147 26.667 16c0 5.854-4.764 10.667-10.666 10.667zm5.573-7.893c-.304-.152-1.796-.887-2.074-.987-.278-.102-.48-.152-.682.152-.203.304-.783.986-.961 1.188-.177.203-.354.228-.658.076-.304-.152-1.285-.474-2.448-1.51-.904-.806-1.515-1.803-1.692-2.107-.177-.304-.019-.469.133-.62.137-.137.304-.354.456-.531.152-.177.203-.304.304-.507.101-.203.05-.38-.025-.531-.076-.152-.682-1.647-.935-2.254-.246-.59-.497-.51-.682-.52l-.582-.01c-.203 0-.531.076-.808.38-.278.304-1.06 1.036-1.06 2.53 0 1.493 1.086 2.936 1.238 3.14.152.203 2.137 3.26 5.178 4.566.724.313 1.288.5 1.727.64.724.23 1.38.198 1.9.12.579-.086 1.796-.734 2.052-1.443.253-.709.253-1.316.177-1.443-.075-.127-.278-.203-.582-.354z"/>
                      </svg>
                    ),
                    color: "hover:bg-green-100"
                  },
                  { 
                    href: "mailto:mviraj975@gmail.com", 
                    icon: (
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    color: "hover:bg-red-100"
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 ${social.color} relative overflow-hidden`}
                  >
                    <div className="absolute top-1 right-1 w-1 h-1 bg-gray-400 opacity-40 rotate-45"></div>
                    <div className="absolute bottom-1 left-1 w-1 h-1 bg-gray-400 opacity-40 rotate-45"></div>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Square Style Device Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Square Frame Device */}
              <div className="relative w-80 h-[500px] transform hover:scale-105 transition-all duration-500">
                {/* Device Border with Square Design */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-2xl p-3">
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
                    {/* Square Pattern Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    
                    {/* Status Bar */}
                    <div className="bg-gray-50 px-4 py-2 flex justify-between items-center text-xs text-gray-600 border-b border-gray-200">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-3 bg-gray-800 rounded"></div>
                        <div className="w-1 h-3 bg-gray-800 rounded"></div>
                        <div className="w-1 h-3 bg-gray-400 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 h-full relative z-10">
                      <div className="space-y-4">
                        {/* Profile Section with Square Design */}
                        <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                          <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 opacity-20 rotate-45"></div>
                          <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-500 opacity-20 rotate-45"></div>
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
                              <Image src="/Images/p2.jpg" width={60} height={60} alt="icon" className="rounded-lg" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm">Viraj</h4>
                              <p className="text-xs text-gray-500">Full Stack Developer</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow shadow-green-500"></span>
                            <span>Available for work</span>
                          </div>
                        </div>

                        {/* Contact Info Cards with Square Design */}
                        <div className="space-y-3">
                          {[
                            { icon: "email", color: "blue", label: "Email", value: email },
                            { icon: "phone", color: "green", label: "Phone", value: phone },
                            { icon: "location", color: "purple", label: "Location", value: location }
                          ].map((item, index) => (
                            <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex items-center space-x-3 transform hover:scale-102 transition-all duration-300 relative overflow-hidden">
                              <div className="absolute top-1 right-1 w-1 h-1 bg-gray-400 opacity-30 rotate-45"></div>
                              <div className="absolute bottom-1 left-1 w-1 h-1 bg-gray-400 opacity-30 rotate-45"></div>
                              <div className={`w-10 h-10 bg-${item.color}-50 rounded-lg flex items-center justify-center`}>
                                <svg className={`w-5 h-5 text-${item.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  {item.icon === 'email' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                                  {item.icon === 'phone' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
                                  {item.icon === 'location' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />}
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs text-gray-500">{item.label}</p>
                                <p className="text-xs font-semibold text-gray-900 truncate">{item.value}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Quick Action with Square Design */}
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-4 text-white text-center shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                          <div className="absolute top-2 right-2 w-2 h-2 bg-white opacity-30 rotate-45"></div>
                          <div className="absolute bottom-2 left-2 w-2 h-2 bg-white opacity-30 rotate-45"></div>
                          <p className="text-xs mb-2 opacity-90">Response Time</p>
                          <p className="text-xl font-bold">{responseTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Square Style Device Button */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-400 rounded-full"></div>
              </div>

              {/* Floating Square Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-3 shadow-xl animate-bounce border border-blue-100 rotate-45">
                <div className="text-2xl text-blue-600 -rotate-45">💬</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-3 shadow-xl animate-pulse border border-cyan-100 rotate-45">
                <div className="text-2xl text-cyan-600 -rotate-45">📧</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default GetInTouch;