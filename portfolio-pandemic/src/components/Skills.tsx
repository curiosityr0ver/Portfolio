import type { TechnicalSkills } from '../types/resume';

interface SkillsProps {
  skills: TechnicalSkills;
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-category-title">Languages</h3>
            <div className="skill-tags">
              {skills.languages.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Backend Frameworks</h3>
            <div className="skill-tags">
              {skills.backendFrameworks.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Databases</h3>
            <div className="skill-tags">
              {skills.databases.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">DevOps & Tools</h3>
            <div className="skill-tags">
              {skills.devops.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Other Skills</h3>
            <div className="skill-tags">
              {skills.other.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

