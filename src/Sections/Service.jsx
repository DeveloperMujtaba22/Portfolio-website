import React, { useState } from 'react';
import './Service.css';

const GAP = 6;
const SIZES = [10, 8, 6];

const services = [
  { id: 1, title: 'UI/UX Design',    image: '/assets/ui-ux.png',   link: '#' },
  { id: 2, title: 'Web Development', image: '/assets/web-dev.png', link: '#' },
  { id: 3, title: 'Backend Dev',     image: '/assets/backend.png', link: '#' },
];

const Service = () => {
  const [active, setActive] = useState(0);       // ← only once
  const [pillLeft, setPillLeft] = useState(0);

  const handleDot = (to) => {
    if (to === active) return;
    let left = 0;
    for (let i = 0; i < to; i++) {
      const dist = Math.abs(i - to);
      left += (SIZES[Math.min(dist, 2)] ?? 6) + GAP;
    }
    setPillLeft(left);
    setActive(to);
  };

  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="service-wrapper">
      <section id="service" className="service-section">
        <div className="service-blob service-blob--tl" />
        <div className="service-blob service-blob--tr" />
        <div className="service-blob service-blob--br" />

        <div className="service-header">
          <h2 className="service-title">
            My <span className="service-highlight">Services</span>
          </h2>
          <p className="service-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
            posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        <div className="service-cards">
  {services.map((s, i) => (
    <div
      className="service-card"
      key={s.id}
      onClick={() => handleCardClick(s.link)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick(s.link);
        }
      }}
    >
      <span className="service-card-title">{s.title}</span>
      <div className="service-card-img-wrap">
        <img src={s.image} alt={s.title} className="service-card-img" />
        <a
          href={s.link}
          className="service-card-arrow"
          aria-label="View service"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick(s.link);
          }}
        >
          {/* decorative arrow, replace with icon as needed */}
          &gt;
        </a>
      </div>
    </div>
  ))}
</div>
        <div className="service-dots">
          <div className="service-dots-track">
            <div className="service-dot-pill" style={{ left: pillLeft }} />
            {services.map((_, i) => {
              const dist = Math.abs(i - active);
              const size = SIZES[Math.min(dist, 2)] ?? 6;
              return (
                <button
                  key={i}
                  className={`service-dot ${i === active ? 'service-dot--active' : ''}`}
                  style={{ width: size, height: size }}
                  onClick={() => handleDot(i)}
                  aria-label={`Go to service ${i + 1}`}
                />
              );
            })}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Service;