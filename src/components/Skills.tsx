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

// Icon mapping - maps icon names to their components
const iconMap: Record<string, ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  // FontAwesome icons
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
  // Simple Icons
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

// Icon component for skills
const SkillIcon = ({ skill }: { skill: Skill }) => {
  const IconComponent = iconMap[skill.icon];
  
  if (IconComponent) {
    return <IconComponent className="skill-icon" style={{ color: 'white' }} />;
  }
  
  // Fallback icon
  return <FaCode className="skill-icon" style={{ color: 'white' }} />;
};

export default function Skills({ skills }: SkillsProps) {
  // Combine all skills into a single array
  const allSkills: Skill[] = [
    ...skills.languages,
    ...skills.backendFrameworks,
    ...skills.databases,
    ...skills.devops,
    ...skills.other,
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-pills-grid">
          {allSkills.map((skill, idx) => {
            const pillContent = (
              <>
                <SkillIcon skill={skill} />
                <span>{skill.name}</span>
              </>
            );

            return (
              <a
                key={idx}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-pill-link skill-pill"
                style={{ '--skill-color': skill.color } as React.CSSProperties}
              >
                {pillContent}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

