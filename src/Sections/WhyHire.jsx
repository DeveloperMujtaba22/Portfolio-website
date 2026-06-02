import React, { useEffect, useRef, useState } from 'react';
import './WhyHire.css';
import mujtaba2 from '../../public/assets/mujtaba2.png';

const stats = [
  { number: '20+', label: 'PROJECTS COMPLETED' },
  { number: '15+', label: 'HAPPY CLIENTS' },
];

const WhyHire = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState({ 0: 0, 1: 0 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // ✅ sirf true — kabhi false nahi hoga
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);
  // Count-up animation
  useEffect(() => {
    if (!visible) return;
    const targets = [20, 15];
    targets.forEach((target, i) => {
      let start = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [i]: start }));
      }, 40);
    });
  }, [visible]);

  return (
    <section id="whyhire" className="wh-section" ref={sectionRef}>

      {/* Left — Photo */}
      <div className={`wh-img-wrap ${visible ? 'wh-img-wrap--visible' : ''}`}>
        <img src={mujtaba2} alt="Mujtaba" className="wh-img" />
      </div>

      {/* Right — Content */}
      <div className={`wh-content ${visible ? 'wh-content--visible' : ''}`}>

        <h2 className="wh-title">
          <span className="wh-title-why">WHY</span>
          <br />
          <span className="wh-title-hire">HIRE </span>
          <span className="wh-title-me">ME?</span>
        </h2>

        <p className="wh-desc">
          I bridge the gap between complex backend logic and
          pixel-perfect frontend experiences. My goal is to turn your
          vision into a <strong>high-performing reality.</strong>
        </p>

        {/* Stats */}
        <div className="wh-stats">
          {stats.map((s, i) => (
            <div className="wh-stat" key={i}>
              <span className="wh-stat-number">{counts[i]}+</span>
              <span className="wh-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="wh-btn">
          LET'S COLLABORATE
        </a>

      </div>
    </section>
  );
};

export default WhyHire;