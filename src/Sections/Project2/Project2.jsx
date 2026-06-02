import React, { useEffect, useRef, useState } from 'react';
import './Project2.css';

const projects = [
  { id: 1, title: 'COVID Vaccination System', image: '/assets/web-dev.png', link: '#' },
  { id: 2, title: 'UI/UX Dashboard',          image: '/assets/ui-ux.png',   link: '#' },
  { id: 3, title: 'Backend API System',        image: '/assets/backend.png', link: '#' },
];

const Project = () => {
  const cardRefs = useRef([]);
  const dotRefs = useRef([]);
  const [visible, setVisible] = useState([]);
  const [active, setActive] = useState(0);

useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(prev => [...new Set([...prev, i])]);
          }
          // ✅ else hataya — scroll up pe reset nahi hoga
        },
        { threshold: 0.2 }
      );
      if (el) obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

 const handleDotClick = (i) => {
  setActive(i);

  const dot = dotRefs.current[i];
  if (dot) {
    dot.style.animation = 'none';
    dot.offsetHeight;            // ← reflow
    dot.style.animation = '';
  }
};

  return (
    <section id="project" className="proj-section">

      <div className="proj-header">
        <div className="proj-header-left">
          <p className="proj-eyebrow">PORTFOLIO</p>
          <h2 className="proj-title">
            Lets have a look at<br />
            my <span className="proj-highlight">Portfolio</span>
          </h2>
        </div>
        <a href="#" className="proj-see-all">See All</a>
      </div>

      <div className="proj-grid">
        {projects.map((p, i) => (
          <div
            className={`proj-card ${visible.includes(i) ? 'proj-card--visible' : ''}`}
            key={p.id}
            ref={el => (cardRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.15}s` }}
            onClick={() => handleDotClick(i)}
          >
            <div className="proj-card-img-wrap">
              <img src={p.image} alt={p.title} className="proj-card-img" />
              <div className="proj-card-overlay">
                <a href={p.link} className="proj-card-link" aria-label="View project">
                  ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="proj-dots">
        {projects.map((_, i) => (
          <button
            key={i}
            ref={el => (dotRefs.current[i] = el)}
            className={`proj-dot ${i === active ? 'proj-dot--active' : ''}`}
            onClick={() => handleDotClick(i)}
            aria-label={`Project ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Project;