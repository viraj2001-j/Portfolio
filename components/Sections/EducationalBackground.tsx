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
  description: string;
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
      location: "Kurunegala",
      period: "2023",
      description: "Focused on software engineering, data structures, algorithms, and web development.",
      gpa: "....",
      achievements: [
        
      ],
      courses: [
        
      ]
    },
    {
      degree: "GCE Advanced Level",
      institution: "",
      location: "",
      period: "2021",
      description: ["Combined Maths: S", <br />,
        "Physics: S", <br />,
        "Chemistry: W"
      ],
      gpa: "",
      achievements: [
        
      ]
    },
        {
      degree: "GCE ordinary Level",
      institution: "",
      location: "",
      period: "2017",
      description: ["A: 1", <br></br>,
        "B: 5", <br />,
        "C: 3"
      ],
      gpa: "",
      achievements: [
        
      ]
    }
  ]
}) => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-[#e8f3ff] to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-200 rounded-full opacity-25 animate-pulse delay-1000"></div>
        
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
            Educational Background
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
         
          </h3>
          
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {education.map((edu, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:-translate-y-1 overflow-hidden w-full"
    >
      <div className="p-4 flex flex-col gap-3"> {/* reduced padding */}

        {/* TITLE */}
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-1"> {/* smaller text */}
            {edu.degree}
          </h4>

          <p className="text-blue-600 font-semibold text-sm">
            {edu.institution}
          </p>

          <p className="text-gray-600 text-xs">
            📍 {edu.location}
          </p>

          <p className="text-gray-600 text-xs">
            📅 {edu.period}
          </p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {edu.description}
        </p>

        {/* GPA BOX */}
        {edu.gpa && (
          <div className="bg-blue-50 rounded-lg px-4 py-2 text-center border border-blue-200">
            <p className="text-xs text-gray-600">GPA</p>
            <p className="text-xl font-bold text-blue-600">{edu.gpa}</p>
          </div>
        )}

      </div>
    </div>
  ))}
</div>


        </div>

        {/* Online Courses & Certifications */}
        {/* {onlineCourses && onlineCourses.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="text-3xl mr-3">💻</span>
              Online Courses & Certifications
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {onlineCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {course.year}
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">
                    {course.title}
                  </h4>
                  <p className="text-blue-600 font-semibold text-sm mb-3">
                    {course.platform}
                  </p>
                  
                  {course.credential && (
                    <div className="bg-gray-50 rounded-lg p-2 mt-3">
                      <p className="text-xs text-gray-600">Credential ID:</p>
                      <p className="text-xs font-mono text-gray-800 font-semibold">
                        {course.credential}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )} */}

        {/* Awards & Honors */}
        {/* {awards && awards.length > 0 && (
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <span className="text-3xl mr-3">🏅</span>
              Awards & Honors
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    ★
                  </div>
                  <p className="text-gray-800 font-medium text-sm">
                    {award}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )} */}

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Want to know more about my qualifications and experience?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EducationalBackground;