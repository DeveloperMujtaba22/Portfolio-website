import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">

      {/* Top bar */}
      <div className="footer-top">
        <h2 className="footer-heading">
          Let's Connect <span className="footer-highlight">There</span>
        </h2>
        <div className="footer-top-actions">
          <button className="footer-feedback-btn">
             Feedback
          </button>
         <a href="#contact" className="footer-hire-btn">
  Hire Me <span className="arrow">↗</span>
</a>
        </div>
      </div>

      <div className="footer-divider" />

      {/* Main content */}
      <div className="footer-main">

        {/* Left — Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
         <span className="footer-logo-name">
  <span className="footer-logo-badge">MR</span>
  <span className="footer-logo-text">Mujtaba Rasheed </span>
</span>
          </div>
          <p className="footer-tagline">
            Turning ideas into scalable digital experiences. Let's
            build something impactful together.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Middle — Navigation */}
        <div className="footer-nav">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            {['Home','About','Services','Resume','Projects','Contact'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="footer-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Contact + Newsletter */}
        <div className="footer-right">
          <div className="footer-contact">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <span>+92 304 2053906</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉</span>
              <span>mujtaba@gmail.com</span>
            </div>
            <div className="footer-contact-item footer-contact-item--muted">
              <span className="footer-contact-icon">👤</span>
              <span>Coming Soon</span>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-col-title">Get Latest Updates</h4>
            <div className="footer-newsletter-form">
              <input
                type="email"
                className="footer-newsletter-input"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
              />
              <button className="footer-newsletter-btn" onClick={handleSubscribe}>
                ➤
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-divider" />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">
          Copyright © 2026 <strong>Mujtaba.</strong> All Rights Reserved.
        </p>
        <div className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">Privacy Policy</a>
          <a href="#" className="footer-bottom-link">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;