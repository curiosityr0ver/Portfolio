import { useState } from 'react';

interface GitHubActivityProps {
  username: string;
}

export default function GitHubActivity({ username }: GitHubActivityProps) {
  const [loading, setLoading] = useState(true);

  // GitHub Activity Graph URL - this service generates the contribution graph
  const graphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-light&hide_border=true&area=true`;

  return (
    <section id="github-activity" className="section">
      <div className="container">
        <h2 className="section-title">GitHub Activity</h2>
        <div className="github-activity-container">
          <div className="github-graph-wrapper">
            {loading && (
              <div className="github-graph-loading">
                <div className="spinner"></div>
                <p>Loading activity graph...</p>
              </div>
            )}
            <img 
              src={graphUrl}
              alt={`GitHub contribution graph for ${username}`}
              className="github-graph"
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
          </div>
          <div className="github-stats">
            <a 
              href={`https://github.com/${username}?tab=overview&from=2024-01-01&to=2024-12-31`}
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-link"
            >
              View Full Profile on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

