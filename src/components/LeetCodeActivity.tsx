
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
  const baseUrl = import.meta.env.BASE_URL;
  const leetcodeIconPath = `${baseUrl}assets/leetcode_icon.png`;

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
                <img 
                  src={leetcodeIconPath} 
                  alt="LeetCode" 
                  className="leetcode-icon"
                  width="24"
                  height="24"
                />
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

