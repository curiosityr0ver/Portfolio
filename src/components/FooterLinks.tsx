import { useState } from 'react';
import type { PersonalInfo } from '../types/resume';

interface FooterLinksProps {
  personalInfo: PersonalInfo;
  resumeUrl?: string;
}

export default function FooterLinks({ personalInfo, resumeUrl }: FooterLinksProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const links = [
    { label: 'resume', url: resumeUrl },
    { label: 'linkedin', url: personalInfo.links.linkedin },
    { label: 'leetcode', url: personalInfo.links.leetcode },
    { label: 'github', url: personalInfo.links.github },
  ].filter(link => link.url); // Only show links that have URLs

  return (
    <div className="footer-links">
      {links.map((link) => (
        <button
          key={link.label}
          className="footer-link-btn"
          onClick={() => copyToClipboard(link.url!, link.label)}
          title={`Copy ${link.label} link`}
          aria-label={`Copy ${link.label} link to clipboard`}
        >
          <span className="footer-link-label">{link.label}</span>
          {copied === link.label && (
            <span className="footer-link-copied">Copied</span>
          )}
        </button>
      ))}
    </div>
  );
}
