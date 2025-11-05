import type { TechnicalSkills } from '../types/resume';
import type { ComponentType } from 'react';
import { 
  FaJava, FaPython, FaJs, FaNode, FaDocker, FaGitAlt, FaLinux,
  FaDatabase, FaCode, FaCog, FaServer, FaCloud
} from 'react-icons/fa';
import {
  SiTypescript, SiMysql, SiMongodb, SiRedis, SiSpring, SiHibernate, SiReact,
  SiKubernetes, SiApachekafka, SiJenkins
} from 'react-icons/si';

interface SkillsProps {
  skills: TechnicalSkills;
}

// Mapping of skill names to their official URLs
const skillUrls: Record<string, string> = {
  // Languages
  'Java': 'https://www.java.com',
  'Python': 'https://www.python.org',
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'TypeScript': 'https://www.typescriptlang.org',
  'SQL': 'https://www.w3schools.com/sql',
  
  // Backend Frameworks
  'Spring Boot': 'https://spring.io/projects/spring-boot',
  'Hibernate': 'https://hibernate.org',
  'React JS': 'https://react.dev',
  'React': 'https://react.dev',
  'Node JS': 'https://nodejs.org',
  'Node.js': 'https://nodejs.org',
  
  // Databases
  'MySQL': 'https://www.mysql.com',
  'SAP HANA': 'https://www.sap.com/products/technology-platform/hana.html',
  'MongoDB': 'https://www.mongodb.com',
  'DynamoDB': 'https://aws.amazon.com/dynamodb',
  'Redis': 'https://redis.io',
  
  // DevOps
  'AWS': 'https://aws.amazon.com',
  'Docker': 'https://www.docker.com',
  'Kubernetes': 'https://kubernetes.io',
  'Kafka': 'https://kafka.apache.org',
  'Git': 'https://git-scm.com',
  'Azure': 'https://azure.microsoft.com',
  
  // Other
  'Linux CLI': 'https://www.linux.org',
  'Jenkins': 'https://www.jenkins.io',
};

// Mapping of skill names to their icons and colors
const skillIcons: Record<string, { icon: ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string }> = {
  // Languages
  'Java': { icon: FaJava, color: '#ED8B00' },
  'Python': { icon: FaPython, color: '#3776AB' },
  'JavaScript': { icon: FaJs, color: '#F7DF1E' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'SQL': { icon: FaDatabase, color: '#4479A1' },
  
  // Backend Frameworks
  'Spring Boot': { icon: SiSpring, color: '#6DB33F' },
  'Hibernate': { icon: SiHibernate, color: '#BCAE79' },
  'React JS': { icon: SiReact, color: '#61DAFB' },
  'React': { icon: SiReact, color: '#61DAFB' },
  'Node JS': { icon: FaNode, color: '#339933' },
  'Node.js': { icon: FaNode, color: '#339933' },
  
  // Databases
  'MySQL': { icon: SiMysql, color: '#4479A1' },
  'SAP HANA': { icon: FaDatabase, color: '#0070F3' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'DynamoDB': { icon: FaDatabase, color: '#4053D6' },
  'Redis': { icon: SiRedis, color: '#DC382D' },
  
  // DevOps
  'AWS': { icon: FaCloud, color: '#232F3E' },
  'Docker': { icon: FaDocker, color: '#2496ED' },
  'Kubernetes': { icon: SiKubernetes, color: '#326CE5' },
  'Kafka': { icon: SiApachekafka, color: '#231F20' },
  'Git': { icon: FaGitAlt, color: '#F05032' },
  
  // Other
  'Linux CLI': { icon: FaLinux, color: '#FCC624' },
  'Jenkins': { icon: SiJenkins, color: '#D24939' },
};

// Icon component for skills
const SkillIcon = ({ name }: { name: string }) => {
  const skillData = skillIcons[name];
  
  if (skillData) {
    const IconComponent = skillData.icon;
    return <IconComponent className="skill-icon" style={{ color: 'white' }} />;
  }
  
  // Fallback icons based on skill category
  const getFallbackIcon = (skillName: string) => {
    const lowerName = skillName.toLowerCase();
    if (lowerName.includes('database') || lowerName.includes('db') || lowerName.includes('sql') || lowerName.includes('hana')) {
      return FaDatabase;
    }
    if (lowerName.includes('api') || lowerName.includes('rest') || lowerName.includes('code') || lowerName.includes('testing')) {
      return FaCode;
    }
    if (lowerName.includes('server') || lowerName.includes('microservice') || lowerName.includes('distributed')) {
      return FaServer;
    }
    if (lowerName.includes('devops') || lowerName.includes('ci/cd') || lowerName.includes('sdlc') || lowerName.includes('agile') || lowerName.includes('quality')) {
      return FaCog;
    }
    return FaCode; // Default fallback
  };
  
  const FallbackIcon = getFallbackIcon(name);
  return <FallbackIcon className="skill-icon" style={{ color: 'white' }} />;
};

export default function Skills({ skills }: SkillsProps) {
  // Combine all skills into a single array
  const allSkills = [
    ...skills.languages,
    ...skills.backendFrameworks,
    ...skills.databases,
    ...skills.devops,
    ...skills.other,
  ];

  // Only show skills that have official URLs
  const skillsWithLinks = allSkills.filter(skill => skillUrls[skill]);

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-pills-grid">
          {skillsWithLinks.map((skill, idx) => {
            const url = skillUrls[skill];
            const skillData = skillIcons[skill];
            const pillColor = skillData?.color || '#6B7280';
            
            const pillContent = (
              <>
                <SkillIcon name={skill} />
                <span>{skill}</span>
              </>
            );

            return (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-pill-link skill-pill"
                style={{ '--skill-color': pillColor } as React.CSSProperties}
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

