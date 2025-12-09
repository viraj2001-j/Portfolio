import React from 'react';

interface Course {
  name: string;
  grade?: string;
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string | React.ReactNode[];
  gpa?: string;
  achievements?: string[];
  courses?: Course[];
}

interface OnlineCourse {
  title: string;
  platform: string;
  year: string;
  credential?: string;
}

interface EducationalBackgroundProps {
  education?: Education[];
  onlineCourses?: OnlineCourse[];
  awards?: string[];
}

const EducationalBackground: React.FC<EducationalBackgroundProps> = ({
  education = [
    {
      degree: "Higher Diploma in Computing and Software Engineering",
      institution: "ICBT Campus",
      location: "Kurunegala, Sri Lanka",
      period: "2023",
      description: "Focused on software engineering, data structures, algorithms, and web development.",
      gpa: "....",
      achievements: [],
      courses: []
    },
    {
      degree: "GCE Advanced Level",
      institution: "Government School",
      location: "Sri Lanka",
      period: "2021",
      description: (
        <ul className="list-disc pl-4 space-y-1">
          <li>Combined Mathematics: <span className="font-semibold">S</span></li>
          <li>Physics: <span className="font-semibold">S</span></li>
          <li>Chemistry: <span className="font-semibold">W</span></li>
        </ul>
      ),
      gpa: "",
      achievements: []
    },
    {
      degree: "GCE Ordinary Level",
      institution: "Government School",
      location: "Sri Lanka",
      period: "2017",
      description: (
        <div>
          <p className="mb-2 font-medium text-gray-700">Results:</p>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <span className="block text-2xl font-bold text-blue-600">1</span>
              <span className="text-xs text-gray-600">A Grades</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-blue-600">5</span>
              <span className="text-xs text-gray-600">B Grades</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-blue-600">3</span>
              <span className="text-xs text-gray-600">C Grades</span>
            </div>
          </div>
        </div>
      ),
      gpa: "",
      achievements: []
    }
  ]
}) => {
  // SVG Icons for consistent design
  const LocationIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const InstitutionIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  const DegreeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  );

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-[#e8f3ff] to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-200 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Educational Background
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 overflow-hidden"
              >
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500"></div>
                
                {/* Degree Icon */}
                <div className="absolute -top-6 -right-6 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <DegreeIcon />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Degree Title */}
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-3 mt-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                        <DegreeIcon />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 leading-tight mb-1">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center text-blue-600 font-medium text-sm">
                        <InstitutionIcon />
                        <span className="ml-1">{edu.institution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {edu.location && (
                      <div className="flex items-center text-gray-600 text-xs bg-gray-50 px-3 py-1.5 rounded-full">
                        <LocationIcon />
                        <span className="ml-1.5">{edu.location}</span>
                      </div>
                    )}
                    {edu.period && (
                      <div className="flex items-center text-gray-600 text-xs bg-gray-50 px-3 py-1.5 rounded-full">
                        <CalendarIcon />
                        <span className="ml-1.5">{edu.period}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-5">
                    <div className="text-gray-700 text-sm leading-relaxed">
                      {edu.description}
                    </div>
                  </div>

                  {/* GPA/Score Section */}
                  {edu.gpa && (
                    <div className="mt-auto">
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                        <p className="text-xs text-gray-500 font-medium mb-1">Cumulative GPA</p>
                        <div className="flex items-baseline">
                          <span className="text-2xl font-bold text-blue-700">{edu.gpa}</span>
                          <span className="text-sm text-gray-500 ml-2">/ 4.0</span>
                        </div>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Add a timeline view for mobile or as an alternative layout */}
        <div className="lg:hidden mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-cyan-300"></div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start mb-8 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>
                
                {/* Content */}
                <div className="ml-12 bg-white p-5 rounded-xl shadow-md border border-gray-100 flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                    <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-blue-600 text-sm font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.location}</p>
                  <div className="mt-3 text-gray-700 text-sm">
                    {edu.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            My educational journey reflects a commitment to continuous learning and professional development in software engineering.
          </p>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-3 rounded-full border border-blue-100">
            <span className="text-blue-600 font-semibold">📚</span>
            <span className="text-gray-700 font-medium">Pursuing continuous education</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalBackground;