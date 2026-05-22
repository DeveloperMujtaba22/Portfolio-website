import React, { useState } from 'react'
import './Service.css'

const services = [
  {
    id: 1,
    title: 'UI/ UX Design',
    image: '/assets/ui-ux.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Web Design',
    image: '/assets/web-design.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Landing Page',
    image: '/assets/web-dev.png',
    link: '#',
  },
]

const Service = () => {
  const [active, setActive] = useState(0)

  return (
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
          <div className="service-card" key={s.id}>
            <span className="service-card-title">{s.title}</span>
            <div className="service-card-img-wrap">
              <img src={s.image} alt={s.title} className="service-card-img" />
            </div>
            <a href={s.link} className="service-card-arrow">&#8599;</a>
          </div>
        ))}
      </div>

      <div className="service-dots">
        {services.map((_, i) => (
          <button
            key={i}
            className={'service-dot' + (i === active ? ' service-dot--active' : '')}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

    </section>
  )
}

export default Service