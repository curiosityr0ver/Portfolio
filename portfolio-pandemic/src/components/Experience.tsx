import type { Experience as ExperienceType } from '../types/resume';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-position">{exp.position}</h3>
                  <a href={exp.website} target="_blank" rel="noopener noreferrer" className="experience-company">
                    {exp.company}
                  </a>
                </div>
                <div className="experience-meta">
                  <span className="experience-location">{exp.location}</span>
                  <span className="experience-date">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

