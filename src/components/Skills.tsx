import { useState } from 'react';
import type { TechnicalSkills, Skill } from '../types/resume';
import { 
  FaJava, FaPython, FaJs, FaNode, FaDocker, FaGitAlt, FaLinux,
  FaDatabase, FaCode, FaCog, FaServer, FaCloud
} from 'react-icons/fa';
import {
  SiTypescript, SiMysql, SiMongodb, SiRedis, SiSpring, SiHibernate, SiReact,
  SiKubernetes, SiApachekafka, SiJenkins
} from 'react-icons/si';
import type { ComponentType } from 'react';

interface SkillsProps {
  skills: TechnicalSkills;
}

// Technology descriptions
const techDescriptions: Record<string, string> = {
  'Java': 'Object-oriented programming language for building enterprise applications',
  'Python': 'Versatile language for data science, automation, and backend development',
  'JavaScript': 'Dynamic scripting language powering interactive web experiences',
  'TypeScript': 'Type-safe JavaScript superset for scalable web applications',
  'SQL': 'Structured query language for managing and querying relational databases',
  'Spring Boot': 'Java framework for building production-ready microservices',
  'Hibernate': 'ORM framework simplifying database interactions in Java',
  'React JS': 'Component-based library for building dynamic user interfaces',
  'Node JS': 'JavaScript runtime for building scalable server-side applications',
  'MySQL': 'Popular relational database management system',
  'SAP HANA': 'In-memory database platform for real-time analytics',
  'MongoDB': 'NoSQL document database for flexible data storage',
  'DynamoDB': 'AWS managed NoSQL database for high-performance applications',
  'Redis': 'In-memory data store for caching and real-time applications',
  'AWS': 'Cloud platform providing scalable infrastructure and services',
  'Docker': 'Containerization platform for packaging and deploying applications',
  'Kubernetes': 'Container orchestration system for managing microservices',
  'Kafka': 'Distributed event streaming platform for real-time data pipelines',
  'Git': 'Version control system for tracking code changes',
  'Linux CLI': 'Command-line interface for Unix-like operating systems',
  'Jenkins': 'Automation server for continuous integration and deployment'
};

// Icon mapping
const iconMap: Record<string, ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  FaJava,
  FaPython,
  FaJs,
  FaNode,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaDatabase,
  FaCode,
  FaCog,
  FaServer,
  FaCloud,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSpring,
  SiHibernate,
  SiReact,
  SiKubernetes,
  SiApachekafka,
  SiJenkins,
};

const SkillIcon = ({ skill }: { skill: Skill }) => {
  const IconComponent = iconMap[skill.icon];
  
  if (IconComponent) {
    return <IconComponent className="skill-icon" style={{ color: 'white' }} />;
  }
  
  return <FaCode className="skill-icon" style={{ color: 'white' }} />;
};

export default function Skills({ skills }: SkillsProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  // Combine all skills into a single array
  const allSkills: Skill[] = [
    ...skills.languages,
    ...skills.backendFrameworks,
    ...skills.databases,
    ...skills.devops,
    ...skills.other,
  ];

  // Create organic size distribution (not random, but varied)
  const getSizeClass = (index: number) => {
    const pattern = index % 7;
    if (pattern === 0 || pattern === 3) return 'large';
    if (pattern === 1 || pattern === 5) return 'small';
    return 'medium';
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-organic-container">
          {allSkills.map((skill, idx) => {
            const description = techDescriptions[skill.name] || 'Technology I work with';
            const isHovered = hoveredSkill === skill.name;
            const sizeClass = getSizeClass(idx);
            
            return (
              <div
                key={`${skill.name}-${idx}`}
                className={`skill-pill-wrapper ${sizeClass}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`skill-pill ${sizeClass} ${isHovered ? 'expanded' : ''}`}
                  style={{ '--skill-color': skill.color } as React.CSSProperties}
                >
                  <div className="skill-pill-inner">
                    <div className="skill-pill-header">
                      <SkillIcon skill={skill} />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className={`skill-pill-description ${isHovered ? 'visible' : ''}`}>
                      {description}
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
