import React, { useEffect, useRef, useState } from 'react';
import './WhyHire.css';
import mujtaba2 from '../../public/assets/mujtaba2.png';



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
         I create responsive, modern, and user-friendly websites with clean code and attractive UI. I am passionate about web development, always learning new technologies, and dedicated to delivering quality work.

        </p>

      

        {/* CTA */}
        <a href="#contact" className="wh-btn">
          LET'S COLLABORATE
        </a>

      </div>
    </section>
  );
};

export default WhyHire;