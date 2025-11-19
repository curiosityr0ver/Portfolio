import { useState } from 'react';
import type { Project } from '../types/resume';

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`project-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="project-image-container">
        <img 
          src={project.thumbnail} 
          alt={project.name} 
          className="project-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/600x400/e2e8f0/1e293b?text=Project+Preview';
          }}
        />
        <div className="project-overlay">
          <div className="project-links">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-btn github"
              aria-label="View Source Code"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Source</span>
            </a>
            {project.deployedLink && (
              <a 
                href={project.deployedLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-btn deploy"
                aria-label="View Deployed Project"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-name">{project.name}</h3>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.slice(0, isExpanded ? undefined : 4).map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
          {!isExpanded && project.technologies.length > 4 && (
            <span className="tech-tag more">+{project.technologies.length - 4}</span>
          )}
        </div>

        <div className={`project-details ${isExpanded ? 'open' : ''}`}>
          <div className="project-highlights">
            <h4>Key Highlights</h4>
            <ul>
              {project.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        <button 
          className="expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Show Less' : 'View Details'}
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={`chevron ${isExpanded ? 'up' : 'down'}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
