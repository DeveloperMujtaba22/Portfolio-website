import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    company: 'internee.pk',
    period: 'JUNE 2024 - AUG 2024',
    role: 'Frontend Developer',
    desc: 'Built responsive web interfaces using React.js and modern frontend technologies, collaborating with backend teams to deliver real-world projects.',
  },
  {
    id: 2,
    company: 'Aptech Garden Center',
    period: 'MAY 2025 - MAY 2026',
    role: 'IT Faculty',
    desc: 'Teaching web development and programming fundamentals while mentoring students in practical, project-based learning.',
  },
  {
    id: 3,
    company: 'Hul Hub PvtLtd',
    period: 'MAY 2026 - PRESENT',
    role: 'Associate Software Engineer (Frontend)',
    desc: 'Passionate about building responsive and user-friendly web applications using Angular, React, TypeScript, JavaScript, HTML, CSS, and SCSS.',
  },
];

const Experience = () => {
  const itemRefs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(prev => [...new Set([...prev, i])]);
          }
        },
        { threshold: 0.2 }
      );
      if (el) obs.observe(el);
      return obs;
    });
    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return (
    <section id="experience" className="exp-section">
      <div className="exp-blob exp-blob--tl" />
      <div className="exp-blob exp-blob--br" />

      <div className="exp-heading">
        <h2 className="exp-title">MY WORK</h2>
        <h2 className="exp-title exp-title--outline">EXPERIENCE.</h2>
      </div>

      <div className="exp-timeline">
        <div className="exp-line" />

        {experiences.map((exp, i) => (
          <div
            className={`exp-row ${visible.includes(i) ? 'exp-row--visible' : ''}`}
            key={exp.id}
            ref={el => (itemRefs.current[i] = el)}
          >
            <div className="exp-left">
              <p className="exp-company">
                {exp.company.split('').map((char, ci) => (
                  <span
                    key={ci}
                    className="exp-company-char"
                    style={{ animationDelay: `${ci * 0.04}s` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </p>
              <p className="exp-period">{exp.period}</p>
            </div>

            <div className="exp-dot-wrap">
              <div className="exp-dot" />
              <div className="exp-dot-ring" />
            </div>

            <div className="exp-right">
              <h3 className="exp-role">{exp.role}</h3>
              <p className="exp-desc">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;