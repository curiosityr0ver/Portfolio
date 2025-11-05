import type { Education as EducationType } from '../types/resume';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <a href={edu.website} target="_blank" rel="noopener noreferrer" className="education-institution">
                    {edu.institution}
                  </a>
                </div>
                <div className="education-meta">
                  <span className="education-location">{edu.location}</span>
                  <span className="education-date">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
              </div>
              <div className="education-details">
                <span className="education-cgpa">CGPA: {edu.cgpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

