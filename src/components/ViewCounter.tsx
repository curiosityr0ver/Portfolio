import { useEffect, useState } from 'react';

export default function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Using counterapi.dev which is free and doesn't require auth
    const namespace = 'portfolio-ishumehta';
    const key = 'visits';
    
    // Check session storage to avoid incrementing on every refresh in the same session
    const hasVisited = sessionStorage.getItem('visit_counted');
    const isProduction = import.meta.env.PROD;
    
    // Only increment if:
    // 1. It's a production build (not localhost/dev)
    // 2. User hasn't visited in this session
    const shouldIncrement = isProduction && !hasVisited;
    
    const url = shouldIncrement
      ? `https://api.counterapi.dev/v1/${namespace}/${key}/up`
      : `https://api.counterapi.dev/v1/${namespace}/${key}`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        if (typeof data.count === 'number') {
          setCount(data.count);
          sessionStorage.setItem('visit_counted', 'true');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('View counter error:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error || loading || count === null) return null;

  return (
    <div className="view-counter" title="Total Page Views">
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="view-counter-icon"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span className="view-counter-number">{count.toLocaleString()}</span>
    </div>
  );
}

