import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPlane } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import type { PersonalInfo } from '../types/resume';

interface HeroProps {
  personalInfo: PersonalInfo;
}

const LotusTemple = () => (
  <svg viewBox="0 0 100 100" className="monument-svg delhi-monument" preserveAspectRatio="xMidYMax meet">
    <defs>
      <linearGradient id="delhiGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    {/* Central Petal */}
    <path d="M50 10 C 70 55, 65 90, 50 90 C 35 90, 30 55, 50 10" fill="url(#delhiGradient)" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Side Petals Left */}
    <path d="M50 90 C 35 90, 20 70, 25 40 C 10 60, 5 90, 20 90 L 50 90" fill="url(#delhiGradient)" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M20 90 C 10 90, 0 75, 10 60 C 0 75, 0 90, 10 90" fill="url(#delhiGradient)" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Side Petals Right */}
    <path d="M50 90 C 65 90, 80 70, 75 40 C 90 60, 95 90, 80 90 L 50 90" fill="url(#delhiGradient)" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M80 90 C 90 90, 100 75, 90 60 C 100 75, 100 90, 90 90" fill="url(#delhiGradient)" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const Charminar = () => (
  <svg viewBox="0 0 100 100" className="monument-svg hyderabad-monument" preserveAspectRatio="xMidYMax meet">
    <defs>
      <linearGradient id="hydGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    {/* Main Block */}
    <rect x="25" y="45" width="50" height="45" fill="url(#hydGradient)" stroke="currentColor" strokeWidth="1.5" />
    {/* Central Arch */}
    <path d="M38 90 L38 65 C 38 55, 62 55, 62 65 L62 90" fill="none" stroke="currentColor" strokeWidth="1.5" />
    {/* Minarets Left */}
    <rect x="25" y="15" width="8" height="30" fill="url(#hydGradient)" stroke="currentColor" strokeWidth="1.5" />
    <path d="M25 15 L29 5 L33 15" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
    {/* Minarets Right */}
    <rect x="67" y="15" width="8" height="30" fill="url(#hydGradient)" stroke="currentColor" strokeWidth="1.5" />
    <path d="M67 15 L71 5 L75 15" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
    {/* Inner Minarets (hint) */}
    <rect x="35" y="35" width="6" height="10" fill="url(#hydGradient)" stroke="currentColor" strokeWidth="1" />
    <rect x="59" y="35" width="6" height="10" fill="url(#hydGradient)" stroke="currentColor" strokeWidth="1" />
    {/* Balconies */}
    <path d="M23 25 L35 25 M65 25 L77 25 M23 35 L35 35 M65 35 L77 35" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export default function Hero({ personalInfo }: HeroProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const roles = ["Software Engineer", "Full Stack Developer", "Backend Specialist"];

    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <div className="location-journey-container">
            <div className="location-visual">
              <div className="monument-wrapper delhi-wrapper">
                <LotusTemple />
              </div>
              
              <div className="location-point start">
                <span className="location-label">Delhi</span>
                <div className="point-dot"></div>
              </div>
              
              <div className="journey-path-wrapper">
                <svg className="journey-svg" viewBox="0 0 300 60" preserveAspectRatio="none">
                  <path 
                    className="journey-line-bg" 
                    d="M 10,40 Q 150,-20 290,40" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeDasharray="4 4" 
                  />
                  <path 
                    className="journey-line-fill" 
                    d="M 10,40 Q 150,-20 290,40" 
                    fill="none" 
                    stroke="url(#gradient)" 
                    strokeWidth="2" 
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--primary-color)" stopOpacity="0" />
                      <stop offset="100%" stopColor="var(--primary-color)" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="plane-wrapper">
                  <FaPlane className="journey-plane" />
                </div>
              </div>

              <div className="location-point end">
                <div className="point-dot active">
                  <div className="pulse"></div>
                </div>
                <span className="location-label highlight">Hyderabad</span>
                <FaMapMarkerAlt className="pin-icon-small" />
              </div>

              <div className="monument-wrapper hyderabad-wrapper">
                <Charminar />
              </div>
            </div>
          </div>

          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <div className="hero-title-wrapper">
            <p className="hero-title">
              {displayText}
              <span className="cursor">|</span>
            </p>
          </div>
          <p className="hero-description">
            Building scalable backend systems and full-stack applications with a passion for clean code and efficient solutions.
          </p>
          
          <div className="hero-links">
            <button onClick={scrollToContact} className="link-button primary">
              Get In Touch
            </button>
            <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="link-button secondary">
              View GitHub
            </a>
          </div>

          <div className="social-links">
            <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <FaLinkedin size={24} />
            </a>
            <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <FaGithub size={24} />
            </a>
            <a href={personalInfo.links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="social-icon">
              <SiLeetcode size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToNext}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
