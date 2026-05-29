import { useState } from "react";

const techStack = [
  "ASP.NET Core", "React.js", "Node.js", "Express.js", "SQL Server", "MongoDB",
  "RESTful APIs", "Authentication & Authorization", "Database Design"
];

const projects = [
  {
    id: 1,
    title: "Covid Vaccine Management System",
    description:
      "The COVID Vaccine Management System is a full-stack web application designed to simplify and digitize the vaccination process. The system enables users to register for vaccination, book appointments, track vaccine doses, and download vaccination certificates. Administrators can manage vaccination centers, monitor registered users, oversee appointment schedules, and maintain vaccine inventory through a dedicated admin dashboard.",
    link: "#",
  },
  {
    id: 2,
    title: "Hospital Management Portal",
    description:
      "A comprehensive hospital management solution with patient records, appointment scheduling, billing, and staff management modules.",
    link: "#",
  },
  {
    id: 3,
    title: "Health Analytics Dashboard",
    description:
      "Real-time analytics dashboard for tracking public health metrics, vaccine distribution stats, and regional outbreak monitoring.",
    link: "#",
  },
];



export default function VaxManager() {
  const [activeProject, setActiveProject] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);

  const handleDotClick = (i) => {
    setDotIndex(i);
    setActiveProject(i);
  };

  return (
    <>
      <style>{styles}</style>
      <section className="vax-section">

        {/* Skills Bar — pill + tech on same row */}
        <div className="vax-skills-bar">
          <div className="vax-badge-pill">Full Stack Development</div>
          <div className="vax-tech-list">
            {techStack.map((t) => (
              <span key={t} className="vax-tech-item">{t}</span>
            ))}
          </div>
        </div>

        {/* Project Card */}
        <div className="vax-project-wrap">

          {/* Dots */}
          <div className="vax-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`vax-dot ${dotIndex === i ? "vax-dot--active" : ""}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Project ${i + 1}`}
              />
            ))}
          </div>

          {/* Project Content */}
          <div className="vax-project-content" key={activeProject}>
            <div className="vax-project-title-row">
              <h2 className="vax-project-title">{projects[activeProject].title}</h2>
              <a
                href={projects[activeProject].link}
                className="vax-arrow-btn"
                aria-label="View project"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </a>
            </div>
            <p className="vax-project-desc">{projects[activeProject].description}</p>
          </div>

        </div>
      </section>
    </>
  );
}