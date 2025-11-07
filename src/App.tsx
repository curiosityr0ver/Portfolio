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
import GitHubActivity from './components/GitHubActivity';
import LeetCodeActivity from './components/LeetCodeActivity';
import FooterLinks from './components/FooterLinks';
import resumeDataJson from './data/resume_data.json';
import './App.css';

// Helper function to prepend base URL to asset paths
function processAssetPaths(data: ResumeData): ResumeData {
  const baseUrl = import.meta.env.BASE_URL;
  
  // Helper to fix asset paths
  const fixAssetPath = (path: string | undefined): string | undefined => {
    if (!path) return path;
    // If path starts with /, replace it with baseUrl
    if (path.startsWith('/')) {
      return `${baseUrl}${path.slice(1)}`;
    }
    return path;
  };
  
  // Process education icons
  const processedEducation = data.education.map(edu => ({
    ...edu,
    icon: fixAssetPath(edu.icon)
  }));

  // Process experience icons
  const processedExperience = data.experience.map(exp => ({
    ...exp,
    icon: fixAssetPath(exp.icon)
  }));

  return {
    ...data,
    education: processedEducation,
    experience: processedExperience
  };
}

function App() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const processedData = processAssetPaths(resumeDataJson as ResumeData);
      setResumeData(processedData);
      setLoading(false);
    } catch (err) {
      console.error('Error loading resume data:', err);
      setLoading(false);
    }
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
      <GitHubActivity username={resumeData.personalInfo.links.github.split('/').pop() || 'curiosityr0ver'} />
      {(() => {
        // Parse LeetCode stats from achievements
        const leetCodeAchievement = resumeData.achievements.find(a => a.platform === 'LeetCode');
        if (leetCodeAchievement) {
          const desc = leetCodeAchievement.description;
          const totalMatch = desc.match(/(\d+)\s+problems solved/);
          const easyMatch = desc.match(/(\d+)\s+Easy/);
          const mediumMatch = desc.match(/(\d+)\s+Medium/);
          const hardMatch = desc.match(/(\d+)\s+Hard/);
          const ratingMatch = desc.match(/Rating:\s*([\d,]+)/);
          
          return (
            <LeetCodeActivity
              leetcodeUrl={resumeData.personalInfo.links.leetcode}
              stats={{
                totalSolved: totalMatch ? parseInt(totalMatch[1]) : undefined,
                easy: easyMatch ? parseInt(easyMatch[1]) : undefined,
                medium: mediumMatch ? parseInt(mediumMatch[1]) : undefined,
                hard: hardMatch ? parseInt(hardMatch[1]) : undefined,
                rating: ratingMatch ? parseInt(ratingMatch[1].replace(/,/g, '')) : undefined,
              }}
            />
          );
        }
        return (
          <LeetCodeActivity
            leetcodeUrl={resumeData.personalInfo.links.leetcode}
          />
        );
      })()}
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
          <FooterLinks personalInfo={resumeData.personalInfo} resumeUrl={resumeData.resume_url} />
        </div>
      </footer>
    </div>
  );
}

export default App;
