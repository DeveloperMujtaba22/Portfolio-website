import React, { useState } from 'react';
import './Contact1.css';

const ticker = [
  'WEB DESIGN', 'WEB DEVELOPMENT', 'WIREFRAME',
  'BACKEND DEVELOPMENT', 'UI/UX DESIGN', 'REACT.JS',
  'NODE.JS', 'FULL STACK', 'DATABASE DESIGN',
];

const Contact = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!email) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setEmail('');
  };
  

  return (
    <section id="contact" className="contact-section">

      {/* CTA */}
      <div className="contact-cta">
        <h2 className="contact-title">
          Have an Awesome Project<br />
          Idea? <span className="contact-highlight">Let's Discuss</span>
        </h2>

        {/* Email input */}
        <div className="contact-form">
          <div className="contact-input-wrap">
            <span className="contact-icon">✉</span>
            <input
              type="email"
              className="contact-input"
              placeholder="Enter Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
          </div>
          <button className="contact-btn" onClick={handleSend}>
            {sent ? '✓ Sent!' : 'Send'}
          </button>
        </div>

        {/* Badges */}
        <div className="contact-badges">
          <span className="contact-badge">
            <span className="badge-icon">★</span> 4.9/5 Average Ratings
          </span>
          <span className="contact-badge">
            <span className="badge-icon">🏆</span> 25+ Winning Awards
          </span>
          <span className="contact-badge">
            <span className="badge-icon">✓</span> Certified Product Designer
          </span>
        </div>
      </div>

      {/* Ticker banner */}
      <div className="contact-ticker-wrap">
        <div className="contact-ticker">
          <div className="contact-ticker-items">
            {[...ticker, ...ticker, ...ticker].map((item, i) => (
              <span className="contact-ticker-item" key={i}>
                {item}
                <span className="contact-ticker-sep">◆ </span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;