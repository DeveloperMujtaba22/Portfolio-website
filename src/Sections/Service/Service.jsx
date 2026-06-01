import React, { useState } from 'react';
import './Service.css';
import Footer from '../Footer/Footer';

const services = [
  {
    id: 1,
    icon: '📱',
    title: 'UI/UX Design',
    tag: 'UI / UX',
    category: 'design',
    desc: 'Focusing on user-centric research and wireframing to create seamless digital journeys.',
    image: '/assets/ui-ux.png',
    active: false,
  },
  {
    id: 2,
    icon: '⊞',
    title: 'Web Design',
    tag: 'UI / UX',
    category: 'design',
    desc: 'Aesthetic visuals meet functional layouts. I design websites that tell your brand story.',
    image: '/assets/web-design.png',
    active: false,
  },
  {
    id: 3,
    icon: '<>',
    title: 'Web Development',
    tag: 'DEVELOPMENT',
    category: 'development',
    desc: 'Building lightning-fast, SEO-friendly frontends using React.js and modern stacks.',
    image: '/assets/web-dev.png',
    active: false,
  },
  {
    id: 4,
    icon: '⚙',
    title: 'Backend Dev',
    tag: 'DEVELOPMENT',
    category: 'development',
    desc: 'Scalable REST APIs and server-side solutions using Node.js, Express and MongoDB.',
    image: '/assets/backend.png',
    active: false,
  },
  {
    id: 5,
    icon: '🔍',
    title: 'SEO Optimization',
    tag: 'SEO',
    category: 'seo',
    desc: 'Boost your search rankings with technical SEO, performance tuning and content strategy.',
    image: '/assets/ui-ux1.png',
    active: false,
  },
];

const filters = ['ALL', 'DEVELOPMENT', 'SEO', 'DESIGN'];

const Service1 = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filtered = activeFilter === 'ALL'
    ? services
    : services.filter(s => s.category === activeFilter.toLowerCase());

  return (
    <div className="s1-page">

      {/* Hero */}
      <div className="s1-hero">
        <div className="s1-blob s1-blob--left" />
        <div className="s1-blob s1-blob--right" />
        <div className="s1-hero-content">
          <h1 className="s1-title">
            Pushing Digital<br />
            <span className="s1-title-orange">Boundaries.</span>
          </h1>
          <p className="s1-desc">
            From pixel-perfect interfaces to robust backend logic, I provide
            end-to-end solutions for the modern web.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="s1-filter-wrap">
        <div className="s1-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`s1-filter-btn ${activeFilter === f ? 's1-filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <span className="s1-filter-count">
          {filtered.length} SERVICES AVAILABLE
        </span>
      </div>

      {/* Cards */}
      <div className="s1-cards">
        {filtered.map((s, i) => (
          <div
            className={`s1-card ${s.active ? 's1-card--active' : ''}`}
            key={s.id}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Top */}
            <div className="s1-card-top">
              <div className={`s1-card-icon ${s.active ? 's1-card-icon--active' : ''}`}>
                {s.icon}
              </div>
              <span className="s1-card-tag">{s.tag}</span>
            </div>

            {/* Title + desc */}
            <h3 className={`s1-card-title ${s.active ? 's1-card-title--active' : ''}`}>
              {s.title}
            </h3>
            <p className="s1-card-desc">{s.desc}</p>

            {/* Image + arrow */}
            <div className="s1-card-img-wrap">
              <img src={s.image} alt={s.title} className="s1-card-img" />
              <a href="#" className="s1-card-arrow">↗</a>
            </div>
          </div>
        ))}
      </div>
         <Footer />
    </div>
  );
};

export default Service1;