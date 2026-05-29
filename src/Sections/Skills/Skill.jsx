import React from 'react';
import './Skill.css';

const skills = {
  BACKEND:          [{ name: 'Node Js / Express', pct: 70 }],
  FRAMEWORK:        [{ name: 'Laravel', pct: 80 }],
  TOOLS:            [{ name: 'Canva', pct: 60 }, { name: 'Figma', pct: 80 }],
  'VERSION CONTROL':[{ name: 'Github', pct: 80 }],
  DATABASES:        [{ name: 'MongoDB', pct: 80 }, { name: 'My SQL', pct: 80 }],
  FRONTEND:         [{ name: 'Angular', pct: 70 }, { name: 'React / Redux', pct: 90 }],
  'UI LIBRARIES':   [{ name: 'Shadcn', pct: 85 }, { name: 'Tailwind CSS', pct: 80 }],
};

const SkillBar = ({ name, pct }) => (
  <div className="skill-item">
    <div className="skill-item-header">
      <span className="skill-name">{name}</span>
      <span className="skill-pct">{pct}%</span>
    </div>
    <div className="skill-track">
      <div className="skill-fill" style={{ '--pct': `${pct}%` }} />
    </div>
  </div>
);

const SkillGroup = ({ label, items }) => (
  <div className="skill-group">
    <p className="skill-group-label">{label}</p>
    {items.map(s => <SkillBar key={s.name} {...s} />)}
  </div>
);

const Skill = () => (
  <section id="skill" className="skill-section">
    <div className="skill-left">
      <p className="skill-eyebrow">EXPERTISE</p>
    <h2 className="skill-title">
  MY <em>GRIP</em><br />ON TOOLS.
</h2>
      <p className="skill-desc">
        A showcase of my technical proficiency across the full stack and creative design tools.
      </p>
    </div>

    <div className="skill-right">
      <div className="skill-col">
        <SkillGroup label="BACKEND"         items={skills.BACKEND} />
        <SkillGroup label="FRAMEWORK"       items={skills.FRAMEWORK} />
        <SkillGroup label="TOOLS"           items={skills.TOOLS} />
        <SkillGroup label="VERSION CONTROL" items={skills['VERSION CONTROL']} />
      </div>
      <div className="skill-col">
        <SkillGroup label="DATABASES"    items={skills.DATABASES} />
        <SkillGroup label="FRONTEND"     items={skills.FRONTEND} />
        <SkillGroup label="UI LIBRARIES" items={skills['UI LIBRARIES']} />
      </div>
    </div>
  </section>
);

export default Skill;