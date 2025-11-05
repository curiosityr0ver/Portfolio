import type { Certification, Achievement } from '../types/resume';

interface CertificationsProps {
  certifications: Certification[];
  achievements: Achievement[];
}

export default function Certifications({ certifications, achievements }: CertificationsProps) {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <div className="certification-header">
                <h3 className="certification-name">{cert.name}</h3>
                <span className="certification-issuer">{cert.issuer}</span>
              </div>
              <div className="certification-links">
                <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View Certificate
                </a>
                <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="cert-link">
                  Verify
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="achievements-list">
          <h3 className="achievements-title">Achievements</h3>
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <span className="achievement-platform">{achievement.platform}:</span>
              <span className="achievement-description">{achievement.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

