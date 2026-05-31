import { useState } from "react";
import "./Resume.css";
import Footer from "../Footer/Footer";

const data = {
  name: "Mujtaba",
  role: "Full-Stack Developer",
  email: "mujtaba@email.com",
  linkedin: "linkedin.com/in/mujtaba",
  github: "github.com/mujtaba",
  portfolio: "susheel.knssystems.com",
  skills: {
    fullstack: [
      "React JS", "Mongo DB", "Express JS", "Node.js", "Redux-toolkit",
      "Angular", "SQL Server", "MySQL", "Tailwind CSS", "Shadcn UI",
      "GSAP Animation", "Responsive designs",
    ],
  },
  projects: [
    {
      name: "E-Commerce Ecosystem",
      desc: "Engineered a high-performance storefront featuring a robust Cart System, order processing, and product management. Implemented advanced security via RBAC, JWT-based authentication, and Rate Limiting.",
    },
    {
      name: "Interactive Portfolio System",
      desc: "Designed and developed a personal portfolio with animated page transitions, interactive resume book, and mobile-first responsive design using GSAP animations.",
    },
    {
      name: "Real-time Analytics Dashboard",
      desc: "Built a live analytics dashboard with chart visualizations, Socket.io data updates, and role-based access control using Angular and SQL Server.",
    },
  ],
};

function Bullet({ text }) {
  return <div className="cv-bullet">{text}</div>;
}

function handleDownload() {
  const link = document.createElement("a");
  link.href = "/assets/Mujtaba_Rasheed.pdf";
  link.download = "Mujtaba_Rasheed.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function Slide1() {
  return (
    <div className="rb-spread">
      <div className="rb-pane rb-pane--cream">
        <div className="rb-cover-avatar">MK</div>
        <div className="rb-cover-title">
          Welcome to my<br />
          <span>Digital Ledger.</span>
        </div>
      <div className="rb-cover-sub">
  <span className="sub-gray">An interactive journey through</span>
  <br />
  <span className="sub-black">my code, design &amp; logic.</span>
</div>
        <div className="rb-cover-hint">Flip to explore →</div>
      </div>
      <div className="rb-pane rb-pane--white">
        <iframe
          src="/assets/Mujtaba_Rasheed.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          width="100%"
          height="100%"
          style={{ border: "none", display: "block" }}
          title="Mujtaba CV"
        />
      </div>
    </div>
  );
}

function Slide2({ onBack }) {
  return (
    <div className="rb-spread">
      <div className="rb-pane rb-pane--white-left">
        <div className="cv-name">{data.name}</div>
        <div className="cv-role" style={{ marginBottom: "12px" }}>{data.role}</div>

        <div className="cv-sec">Projects</div>
        {data.projects.map((proj, i) => (
          <div key={i} style={{ marginBottom: "12px" }}>
            <div className="cv-org" style={{ marginBottom: "4px" }}>{proj.name}</div>
            <Bullet text={proj.desc} />
          </div>
        ))}

        <div className="cv-sec">Skills at a Glance</div>
        <div className="cv-tags">
          {data.skills.fullstack.map((s, i) => (
            <span key={i} className="cv-tag">{s}</span>
          ))}
        </div>

        <div className="cv-sec">Contact</div>
        <Bullet text={data.email} />
        <Bullet text={data.linkedin} />
        <Bullet text={`${data.github} · ${data.portfolio}`} />
      </div>

      <div className="rb-pane rb-pane--dark">
        <div className="rb-end-icon">👤</div>
        <div className="rb-end-title">THE <span>END.</span></div>
        <div className="rb-end-sub">
          Thank you for your time.<br />
          I am currently <strong>available for<br />new opportunities</strong> and collaborations.
        </div>
        <div className="rb-end-actions">
          <button className="rb-btn-primary" onClick={handleDownload}>
            ⬇ Get offline copy
          </button>
          <button className="rb-btn-outline" onClick={onBack}>← Back to start</button>
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  const [slide, setSlide] = useState(0);

  return (
    <>
      <div className="rb-wrap">
       <div className="rb-heading">
  <h1>
    <span className="rb-book-icon">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" 
           stroke="#e85d1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    </span>
    <strong>Mujtaba's</strong>&nbsp;<span>Resume Book</span>
  </h1>
  <p>Interactive Digital Portfolio</p>
</div>

        <div className="rb-stage-wrapper">
          <div className="rb-stage">
            {slide === 0 ? <Slide1 /> : <Slide2 onBack={() => setSlide(0)} />}
          </div>
          <button
            className="rb-arrow"
            onClick={() => setSlide(s => s === 0 ? 1 : 0)}
            aria-label={slide === 0 ? "Next" : "Previous"}
          >
            {slide === 0 ? "›" : "‹"}
          </button>
        </div>

        <div className="rb-download-bar">
          <button className="rb-download-btn" onClick={handleDownload}>
            ⬇ Download PDF
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}