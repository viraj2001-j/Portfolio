'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
// import AnimatedBackground from '../components/UI/AnimatedBackground';
import Hero from '../components/Sections/Hero';
import AboutMe from '../components/Sections/AboutMe';
import CoreSkills from '../components/Sections/CoreSkills';
import FeaturedProjects from '../components/Sections/FeaturedProjects';
import EducationalBackground from '../components/Sections/EducationalBackground';
import SkillsExpertise from '../components/Sections/SkillsExpertise';
import GetInTouch from '../components/Sections/GetInTouch';


const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'core-skills', 'projects', 'education', 'expertise', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Head>
        <title>Alex Quantum | Senior AI Engineer & Full Stack Developer</title>
        <meta name="description" content="Senior AI Engineer and Full Stack Developer specializing in cutting-edge technologies, machine learning, and futuristic web development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        {/* <AnimatedBackground /> */}
        <Header 
          // activeSection={activeSection} 
          // onSectionChange={scrollToSection}
        />
        
        <main>
          <Hero />
          <AboutMe />
          <CoreSkills />
          <FeaturedProjects />
          <EducationalBackground />
          <SkillsExpertise />
          <GetInTouch />
          
        </main>

        <Footer />
        
      </div>
    </>
  );
};

export default Home;