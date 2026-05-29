import Footer from '../Footer/Footer'
import './About.css';
        

const About = () => {
  return (
    <>
      

      <div className="about-page">
        <div className="about-hero">

          {/* Left: Photo */}
          <div className="about-photo-wrap">
            <div className="about-photo-frame">
              <img src="/assets/mujtaba4.png" alt="Mujtaba Rasheed" />
            </div>
            <div className="about-photo-badge">
             Independent <br /> Digital Designer <br /> & Developer
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <h1>I Design Experiences <br /> That Matter</h1>
            <p>
              I'm a multi-disciplinary developer based in Karachi. With over
              one year of experience, I bridge the gap between aesthetics and
              functionality.
            </p>
            <p>
              Whether it's a high-converting landing page or a complex web application,
              my goal is to create products that are not just beautiful, but intuitive and
              user-centric.
            </p>

            <div className="about-divider" />

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-num">1+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">20+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">15+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>

            <a href="/assets/mujtaba-cv.pdf" className="about-cv-btn" download>
              Download CV →
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default About