import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id='hero' className='hero-section'>

      {/* Big background heading */}
      <div className='hero-big-text'>
        <h1>
          Hi, I am <span className='highlight'>Mujtaba Rasheed</span>
        </h1>
        <h2>Full Stack Developer</h2>
      </div>

      {/* Center image with orange circle */}
      <div className='hero-image-wrap'>
        <div className='hero-orange-circle' />
        <img
          src='/assets/mujtaba.png'
          alt='Mujtaba Raza'
          className='hero-photo'
        />
      </div>

      {/* Left quote card */}
      <div className='hero-quote-card'>
        <span className='quote-icon'>“
</span>
        <p>A rare talent who understands both the user experience and the complex logic behind it.</p>
      </div>

      {/* Right experience card */}
      <div className='hero-exp-card'>
        <div className='stars'>★ ★ ★ ★ ★</div>
        <div className='exp-number'>1 Year</div>
        <div className='exp-label'>Experience</div>
      </div>

      {/* Hello badge */}
     {/* Hello badge */}
<div className='hero-hello-badge'>
  Hello! 👋
  <span className='badge-sparkle'>✦</span>
</div>

      {/* Bottom buttons */}
     <div className='hero-buttons'>
  <div className='btn-pill-wrap'>
    <a href='#project' className='btn-portfolio'>Portfolio ↗</a>
    <a href='#contact' className='btn-hire'>Hire Me</a>
  </div>
</div>

      {/* Feedback button */}
      {/* Feedback button */}
<div className='hero-feedback'>
  <a href='#feedback' className='btn-feedback'>
    <span className='feedback-star'>★</span> Leave Feedback
  </a>
</div>

    </section>
  )
}

export default Hero