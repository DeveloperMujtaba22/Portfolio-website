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
        <h2>Frontend Web Developer</h2>
      </div>

      {/* Center image with orange circle */}
    <div class="hero-image-wrap">
  <div class="hero-orange-circle"></div>
  <img src="/assets/mujtaba.png

" alt="Hero" class="hero-photo desktop-photo" />
  <img src="/assets/mujtaba2.png" alt="Hero" class="hero-photo mobile-photo" />
</div>

      {/* Left quote card */}
      <div className='hero-quote-card'>
        <span className='quote-icon'>“
</span>
        <p>I build responsive, modern, and user-friendly web applications using HTML, CSS, JavaScript, and React.js.</p>
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