import { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionIds = ['hero', 'experience', 'education', 'projects', 'skills', 'github-activity', 'leetcode-activity', 'certifications', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.nav-links') && !target.closest('.mobile-menu-toggle')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navigation">
        <div className="nav-container">
          <div className="nav-left">
            <div className="nav-logo" onClick={() => scrollToSection('hero')}>
              IM
            </div>
            <ThemeToggle />
          </div>
          <div className="nav-right">
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className={activeSection === 'experience' ? 'active' : ''}
              >
                <span data-text="Experience">Experience</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('education')}
                className={activeSection === 'education' ? 'active' : ''}
              >
                <span data-text="Education">Education</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className={activeSection === 'projects' ? 'active' : ''}
              >
                <span data-text="Projects">Projects</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')}
                className={activeSection === 'skills' ? 'active' : ''}
              >
                <span data-text="Skills">Skills</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('github-activity')}
                className={activeSection === 'github-activity' ? 'active' : ''}
              >
                <span data-text="Activity">Activity</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('leetcode-activity')}
                className={activeSection === 'leetcode-activity' ? 'active' : ''}
              >
                <span data-text="LeetCode">LeetCode</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('certifications')}
                className={activeSection === 'certifications' ? 'active' : ''}
              >
                <span data-text="Certifications">Certifications</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                <span data-text="Contact">Contact</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {isMenuOpen && <div className="menu-backdrop" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
}

