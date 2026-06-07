import React, { useState } from 'react';
import './Contact1.css';

const ticker = [
  'React js', 'WEB DEVELOPMENT', 'Next js',
  'JavaScript', 'Tailwind CSS', 'MongoDB',
  'NODE.JS', 'TYPESCRIPT', 'HTML5',
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