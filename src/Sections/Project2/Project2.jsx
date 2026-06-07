import React, { useEffect, useRef, useState } from 'react';
import './Project2.css';

const projects = [
  {
    id: 1,
    title: 'Podcast Services Marketplace Platform',
    desc: 'Podle – A platform that allows buyers and sellers to purchase podcasting services such as studios, audio equipment include chats, orders, transactions and much more.',
    image: '/assets/soulchamp.png',
    tags: ['#sanity', '#next', '#tailwind'],
    link: '#',
  },
  {
    id: 2,
    title: 'Ecommerce Furniture Store',
    desc: 'Chairlaxed – A complete ecommerce website with advanced features like discounts, payment gateway, content management systems & Email Marketing.',
    image: '/assets/nexaphone.png',
    tags: ['#react', '#ecommerce', '#sanity', '#typescript'],
    link: '#',
  },
  {
    id: 3,
    title: 'Corporate Leadership Developement',
    desc: 'CLD – Corporate Leadership Developement is a website that markets flagship events, corporate trainings and social media posts of the company.',
    image: '/assets/agency.png',
    tags: ['#nextjs', '#sanity', '#tailwind css'],
    link: '#',
  },
];

const Project = () => {
  const cardRefs = useRef([]);
  const dotRefs  = useRef([]);
  const [visible, setVisible] = useState([]);
  const [active,  setActive]  = useState(0);

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
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
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleDotClick = (i) => {
    setActive(i);
    const dot = dotRefs.current[i];
    if (dot) {
      dot.style.animation = 'none';
      dot.offsetHeight;
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
            key={p.id}
            className={`proj-card ${visible.includes(i) ? 'proj-card--visible' : ''}`}
            ref={el => (cardRefs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.15}s` }}
            onClick={() => handleDotClick(i)}
          >
            {/* Image */}
            <div className="proj-card-img-wrap">
              <img src={p.image} alt={p.title} className="proj-card-img" />
              <a
                href={p.link}
                className="proj-card-link-btn"
                aria-label="View project"
                onClick={e => e.stopPropagation()}
              >
                ↗
              </a>
            </div>
            {/* Body */}
            <div className="proj-card-body">
              <h3 className="proj-card-title">{p.title}</h3>
              <p className="proj-card-desc">{p.desc}</p>
              <div className="proj-card-tags">
                {p.tags.map(tag => (
                  <span key={tag} className="proj-card-tag">{tag}</span>
                ))}
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