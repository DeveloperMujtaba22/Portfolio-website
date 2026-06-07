import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const photoRef   = useRef(null);
  const contentRef = useRef(null);

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

    if (photoRef.current)   observer.observe(photoRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="about-page">
        <div className="about-hero" id="about">

          {/* Left: Photo */}
          <div className="about-photo-wrap aos-fade-left" ref={photoRef}>
            <div className="about-photo-frame">
              <img src="/assets/mujtaba4.png" alt="Mujtaba Rasheed" />
            </div>

            <div className="skill-badge skill-badge--nextjs">
              <img src="/assets/icons/next.png" alt="Next.js" />
            </div>
            <div className="skill-badge skill-badge--react">
              <img src="/assets/icons/reactjs.png" alt="React" />
            </div>
            <div className="skill-badge skill-badge--tailwind">
              <img src="/assets/icons/tailwind.png" alt="Tailwind CSS" />
            </div>
            <div className="skill-badge skill-badge--Js">
              <img src="/assets/icons/javascript.png" alt="JavaScript" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="about-content aos-fade-right" ref={contentRef}>
            <h1>About Me</h1>
            <p>
              Motivated and enthusiastic individual currently pursuing the ACCP 2.0 diploma at APTECH Learning Institute,
              with a strong interest in software development, web design, and database management. Eager to apply my
              foundational knowledge and skills in a professional IT environment and gain hands-on experience.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;