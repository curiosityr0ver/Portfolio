
interface LeetCodeActivityProps {
  leetcodeUrl: string;
  stats?: {
    totalSolved?: number;
    easy?: number;
    medium?: number;
    hard?: number;
    rating?: number;
  };
}

export default function LeetCodeActivity({ leetcodeUrl, stats }: LeetCodeActivityProps) {
  // Extract username from LeetCode URL
  const username = leetcodeUrl.split('/').pop() || '';

  // If we have stats, use them; otherwise we'll try to fetch or use a service
  const totalSolved = stats?.totalSolved || 527;
  const easy = stats?.easy || 169;
  const medium = stats?.medium || 305;
  const hard = stats?.hard || 53;
  const rating = stats?.rating || 1453;

  // Calculate percentages for progress bars
  const easyPercent = (easy / totalSolved) * 100;
  const mediumPercent = (medium / totalSolved) * 100;
  const hardPercent = (hard / totalSolved) * 100;

  return (
    <section id="leetcode-activity" className="section">
      <div className="container">
        <h2 className="section-title">LeetCode Activity</h2>
        <div className="leetcode-activity-container">
          <div className="leetcode-stats-card">
            <div className="leetcode-header">
              <div className="leetcode-title">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="leetcode-icon">
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s.357.195.824.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l3.01-3.024c.516-.514 1.3-.514 1.815 0 .515.515.515 1.3 0 1.814l-3.097 3.112c.49.157.94.398 1.327.783l4.332 4.363c.467.467.702 1.15.702 1.864s-.235 1.357-.702 1.824l-4.319 4.38c-.467.467-1.111.662-1.822.662s-1.357-.195-1.823-.662zm-7.569-4.26l4.319 4.38c.466.467 1.111.662 1.824.662s1.357-.195 1.823-.662l2.697-2.606c.514-.515 1.35-.515 1.865 0 .514.514.514 1.35 0 1.865l-2.697 2.607c-.933.934-2.206 1.392-3.723 1.392s-2.79-.458-3.723-1.392l-4.332-4.363c-.933-.933-1.392-2.206-1.392-3.723s.459-2.79 1.392-3.723l4.319-4.38c.933-.933 2.206-1.392 3.722-1.392s2.79.459 3.723 1.392l2.697 2.606c.514.515 1.35.515 1.865 0 .514-.514.514-1.35 0-1.865l-2.697-2.607c-.466-.467-1.111-.662-1.823-.662s-1.357.195-1.824.662l-4.332 4.363c-.467.467-.702 1.15-.702 1.864s.235 1.357.702 1.823z"/>
                </svg>
                <h3>LeetCode Statistics</h3>
              </div>
              <a 
                href={leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="leetcode-profile-link"
              >
                View Profile →
              </a>
            </div>

            <div className="leetcode-stats-grid">
              <div className="leetcode-stat-item total">
                <div className="stat-value">{totalSolved}</div>
                <div className="stat-label">Total Solved</div>
              </div>

              <div className="leetcode-stat-item rating">
                <div className="stat-value">{rating}</div>
                <div className="stat-label">Contest Rating</div>
              </div>
            </div>

            <div className="leetcode-difficulty-breakdown">
              <div className="difficulty-item easy">
                <div className="difficulty-header">
                  <span className="difficulty-label">Easy</span>
                  <span className="difficulty-count">{easy}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill easy-fill" 
                    style={{ width: `${easyPercent}%` }}
                  ></div>
                </div>
              </div>

              <div className="difficulty-item medium">
                <div className="difficulty-header">
                  <span className="difficulty-label">Medium</span>
                  <span className="difficulty-count">{medium}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill medium-fill" 
                    style={{ width: `${mediumPercent}%` }}
                  ></div>
                </div>
              </div>

              <div className="difficulty-item hard">
                <div className="difficulty-header">
                  <span className="difficulty-label">Hard</span>
                  <span className="difficulty-count">{hard}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill hard-fill" 
                    style={{ width: `${hardPercent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

