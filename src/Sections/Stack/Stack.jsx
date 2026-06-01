import React, { useState } from 'react';
import './Stack.css';

// ─── Data ───────────────────────────────────────────────

const STACKS = [
  {
    category: 'Full Stack',
    items: [
      { name: 'React.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'SQL Server',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'ASP.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'REST APIs',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Angular',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'HTML5',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Figma',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'SCSS',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Laravel',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'GraphQL',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
      { name: 'MongoDB',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Redis',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'Docker',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
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

// ─── Helper ─────────────────────────────────────────────
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
            <div className={`stack-track${ri % 2 === 1 ? ' stack-track--reverse' : ''}`}>
              <div className="stack-items">
                {createMarqueeItems(row.items).map((item, ii) => (
                  <span key={ii} className="skill-pill">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="skill-pill__icon"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    {item.name}
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

      {/* ── Dots ── */}
      <div className="vax-dots">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`vax-dot ${activeProject === i ? 'vax-dot--active' : ''}`}
            onClick={() => setActiveProject(i)}
            aria-label={`Project ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default Stack;