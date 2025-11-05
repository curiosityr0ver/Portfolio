import { useState, useRef } from 'react';
import type { PersonalInfo } from '../types/resume';

interface ContactProps {
  personalInfo: PersonalInfo;
}

export default function Contact({ personalInfo }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xyzbrkap', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const data = await response.json().catch(() => null);
        if (data?.errors) {
          console.error('Formspree validation errors:', data.errors);
        }
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>I'm always open to discussing new opportunities, interesting projects, or just having a chat!</p>
            <div className="contact-methods">
              <a href={`mailto:${personalInfo.email}`} className="contact-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                {personalInfo.email}
              </a>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name (optional)</label>
              <input
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email (optional)</label>
              <input
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
              />
            </div>
            <button type="submit" className="submit-button" disabled={status === 'sending' || status === 'success'}>
              {status === 'sending' ? (
                <>
                  <svg className="spinner-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
                    <path d="M12 2 A10 10 0 0 1 22 12" strokeLinecap="round"/>
                  </svg>
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Sent
                </>
              ) : (
                'Send Message'
              )}
            </button>
            {status === 'error' && (
              <p className="error-message">Something went wrong. Please try again or email me directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

