import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div className="nav-logo" onClick={() => scrollToSection('hero')}>
            IM
          </div>
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
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button onClick={() => scrollToSection('education')}>Education</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => scrollToSection('certifications')}>Certifications</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>
      {isMenuOpen && <div className="menu-backdrop" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
}

