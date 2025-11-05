import { useState, useEffect } from 'react';
import type { ResumeData } from './types/resume';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/assets/resume_data.json?t=${Date.now()}`)
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading resume data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading portfolio...</p>
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div className="error">
        <p>Failed to load resume data. Please check the resume_data.json file.</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Navigation />
      <Hero personalInfo={resumeData.personalInfo} />
      <Experience experiences={resumeData.experience} />
      <Education education={resumeData.education} />
      <Projects projects={resumeData.projects} />
      <Skills skills={resumeData.technicalSkills} />
      <Certifications 
        certifications={resumeData.certifications} 
        achievements={resumeData.achievements} 
      />
      <Contact personalInfo={resumeData.personalInfo} />
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.</p>
          <p>
            <a href={`mailto:${resumeData.personalInfo.email}`}>{resumeData.personalInfo.email}</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
