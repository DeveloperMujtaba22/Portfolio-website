import React, { useState } from 'react';
import './Skill.css';

const SKILLS = [
  { name: 'React.js',     pct: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js',      pct: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js',      pct: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js',   pct: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB',      pct: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'TypeScript',   pct: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', pct: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'HTML5',        pct: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'MySQL',        pct: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Redis',        pct: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Git',          pct: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'SCSS',         pct: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  { name: 'Python',       pct: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  delay: Math.random() * 4,
  dur: Math.random() * 3 + 2,
}));

const Skill = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
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

        <h2 className="skillset-heading">Skills</h2>
        <p className="skillset-subheading">
         Hover over a skill for currency proficiency
        </p>

        <div className="skillset-grid">
          {SKILLS.map((skill, i) => (
            <span
              key={i}
              className={`skillset-pill${hovered === i ? ' skillset-pill--hovered' : ''}`}
              style={{ animationDelay: `${i * 0.05}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === i ? (
                <span className="skillset-pill__pct">{skill.pct}%</span>
              ) : (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skillset-pill__icon"
                  onError={e => { e.target.style.display = 'none'; }}
                />
              )}
              {skill.name}
            </span>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skill;