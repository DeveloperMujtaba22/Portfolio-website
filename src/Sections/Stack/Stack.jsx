  import React, { useState } from 'react';
  import './Stack.css';

  const SKILLS = [
    { name: 'ASP.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'React.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'SQL Server',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'MongoDB',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'TypeScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Angular',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'HTML5',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Figma',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Laravel',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'GraphQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'MySQL',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Redis',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Docker',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'SCSS',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'Python',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  ];

  const STARS = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    delay: Math.random() * 4,
    dur: Math.random() * 3 + 2,
  }));

  const projects = [
    {
      id: 1,
      title: "Soul Champ",
      description: "A full-stack web application to simplify and digitize the vaccination process. Users can register, book appointments, track doses, and download certificates. Admins manage centers, users, schedules, and vaccine inventory.",
      link: "#",
    },
    {
      id: 2,
      title: "Hospital Management Portal",
      description: "A comprehensive hospital management solution with patient records, appointment scheduling, billing, and staff management modules.",
      link: "#",
    },
    {
      id: 3,
      title: "Health Analytics Dashboard",
      description: "Real-time analytics dashboard for tracking public health metrics, vaccine distribution stats, and regional outbreak monitoring.",
      link: "#",
    },
  ];

  const Stack = () => {
    const [activeProject, setActiveProject] = useState(0);

    return (
      <>
        {/* ── Skillset Section ── */}
        <section className="skillset-section">
          <div className="skillset-stars" aria-hidden="true">
            {STARS.map(s => (
              <span key={s.id} className="skillset-star" style={{
                left: `${s.x}%`, top: `${s.y}%`,
                width: s.size, height: s.size,
                animationDelay: `${s.delay}s`, animationDuration: `${s.dur}s`,
              }} />
            ))}
          </div>

          <h2 className="skillset-heading">
            Full Stack <span className="skillset-accent">Development</span>
          </h2>

          <div className="skillset-grid">
            {SKILLS.map((skill, i) => (
              <span key={i} className="skillset-pill" style={{ animationDelay: `${i * 0.05}s` }}>
                <img src={skill.icon} alt={skill.name} className="skillset-pill__icon"
                  onError={e => { e.target.style.display = 'none'; }} />
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* ── Projects Section ── */}
        <section className="projects-section2">
        <div className="projects-content" key={activeProject}>

  <div className="projects-title-row">
    <h2 className="projects-title">{projects[activeProject].title}</h2>
    <a href={projects[activeProject].link} className="projects-arrow" aria-label="View project">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"/>
        <polyline points="7 7 17 7 17 17"/>
      </svg>
    </a>
  </div>

  <p className="projects-desc">{projects[activeProject].description}</p>

</div>
          <div className="projects-dots">
            {projects.map((_, i) => (
              <button key={i}
                className={`projects-dot${activeProject === i ? ' projects-dot--active' : ''}`}
                onClick={() => setActiveProject(i)}
                aria-label={`Project ${i + 1}`}
              />
            ))}
          </div>
        </section>
      </>
    );
  };

  export default Stack;