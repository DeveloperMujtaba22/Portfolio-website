import React, { useState } from 'react';
import './Stack.css';

// ─── Data ───────────────────────────────────────────────

const STACKS = [
  {
    category: 'Full Stack Development',
    items: [
      'ASP.NET Core', 'React.js', 'Node.js', 'Express.js',
      'SQL Server', 'MongoDB', 'RESTful APIs',
      'Authentication & Authorization', 'Database Design',
    ],
  },
  {
    category: 'Frontend',
    items: [
      'React.js', 'Angular', 'TypeScript', 'Tailwind CSS',
      'Shadcn UI', 'HTML5', 'CSS3', 'SCSS', 'Figma',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js', 'Express.js', 'Laravel', 'REST APIs',
      'GraphQL', 'JWT Auth', 'MongoDB', 'MySQL',
    ],
  },
];

const projects = [
  {
    id: 1,
    title: "Covid Vaccine Management System",
    description:
      "The COVID Vaccine Management System is a full-stack web application designed to simplify and digitize the vaccination process. The system enables users to register for vaccination, book appointments, track vaccine doses, and download vaccination certificates. Administrators can manage vaccination centers, monitor registered users, oversee appointment schedules, and maintain vaccine inventory through a dedicated admin dashboard.",
    link: "#",
  },
  {
    id: 2,
    title: "Hospital Management Portal",
    description:
      "A comprehensive hospital management solution with patient records, appointment scheduling, billing, and staff management modules.",
    link: "#",
  },
  {
    id: 3,
    title: "Health Analytics Dashboard",
    description:
      "Real-time analytics dashboard for tracking public health metrics, vaccine distribution stats, and regional outbreak monitoring.",
    link: "#",
  },
];

// ─── Arrow Icon ─────────────────────────────────────────
const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

// ─── Helper to duplicate items for seamless marquee ─────
const createMarqueeItems = (items) => [...items, ...items, ...items];

// ─── Component ──────────────────────────────────────────
const Stack = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <>
      {/* ── Stack Section ────────────────────── */}
      <section id="stack" className="stack-section">
        {STACKS.map((row, ri) => (
          <div className="stack-row" key={ri}>
            {/* Category label */}
            <div className="stack-label">
              <span>{row.category}</span>
            </div>

            {/* Marquee track */}
            <div
              className={`stack-track${ri % 2 === 1 ? ' stack-track--reverse' : ''}`}
            >
              <div className="stack-items">
                {createMarqueeItems(row.items).map((item, ii) => (
                  <span key={ii} className="stack-item">
                    {item}
                    <span className="stack-dot">●</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

 

      {/* ── Project Section ──────────────────── */}
      <div className="vax-project-wrap">
        <div className="vax-project-content" key={activeProject}>
          <div className="vax-project-title-row">
            <h2 className="vax-project-title">{projects[activeProject].title}</h2>
            <a
              href={projects[activeProject].link}
              className="vax-arrow-btn"
              aria-label="View project"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          </div>
          <p className="vax-project-desc">{projects[activeProject].description}</p>
        </div>
      </div>
           {/* ── Dots (moved outside stack-section) ── */}
      <div className="vax-dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`vax-dot ${activeProject === i ? "vax-dot--active" : ""}`}
            onClick={() => setActiveProject(i)}
            aria-label={`Project ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default Stack;