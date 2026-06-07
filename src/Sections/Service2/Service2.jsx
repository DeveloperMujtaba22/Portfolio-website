import React, { useState, useEffect, useRef } from 'react';
import './Service2.css';

const services = [
  { id: 1, title: 'UI/UX Design',    image: '/assets/ui-ux.png',   link: '#' },
  { id: 2, title: 'Web Development', image: '/assets/web-dev.png', link: '#' },
  { id: 3, title: 'Backend Dev',     image: '/assets/backend.png', link: '#' },
];

const Service = () => {
  const [active, setActive] = useState(0);
  const headerRef = useRef(null);
  const cardsRef  = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (cardsRef.current)  observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="service-wrapper">
      <section id="service" className="service-section">
        <div className="service-blob service-blob--tl" />
        <div className="service-blob service-blob--tr" />
        <div className="service-blob service-blob--br" />

        <div className="service-header aos-fade-up" ref={headerRef}>
          <h2 className="service-title">
            My <span className="service-highlight">Services</span>
          </h2>
          <p className="service-desc">
            Passionate about building beautiful interfaces, fast web applications, and secure backend systems using modern technologies to create seamless digital experiences.
          </p>
        </div>

        <div className="service-cards aos-fade-up" ref={cardsRef}>
          {services.map((s, i) => (
            <div
              className="service-card"
              key={s.id}
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              <span className="service-card-title">{s.title}</span>
              <div className="service-card-img-wrap">
                <a href={s.link} aria-label={s.title}>
                  <img src={s.image} alt={s.title} className="service-card-img" />
                </a>
              </div>
              <a href={s.link} className="service-card-arrow" aria-label="View service" />
            </div>
          ))}
        </div>

        <div className="service-dots">
          {services.map((_, i) => (
            <button
              key={i}
              className={`service-dot ${i === active ? 'service-dot--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;