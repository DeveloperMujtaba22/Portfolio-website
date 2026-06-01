import { useState } from "react";
import Footer from "../Footer/Footer";

const s = {
  wrapper: {
    maxWidth: 1300,
    margin: "0 auto",
    padding: "140px 40px 80px",
    display: "grid",
    gridTemplateColumns: "1fr 1.3fr",
    gap: 90,
    alignItems: "start",
    fontFamily: "'DM Sans', sans-serif",
    background: "#F2EFE9",
    minHeight: "100vh",
    boxSizing: "border-box",
  },
  left: { display: "flex", flexDirection: "column" },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "1.5px",
    color: "#e8623a",
    textTransform: "uppercase",
    background: "rgba(255,107,43,0.1)",
    border: "1px solid rgba(255,107,43,0.2)",
    borderRadius: 50,
    padding: "6px 10px",
    marginBottom: 24,
    width: "fit-content",
  },
  badgeDot: {
    width: 8,
    height: 8,
    background: "#e8623a",
    borderRadius: "50%",
  },
  headline: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontWeight: 900,
    fontSize: 110,
    lineHeight: 0.92,
    letterSpacing: 7,
    margin: "0 0 6px",
    color: "#1a1a1a",
  },
  orange: { color: "#e8623a", display: "block" },
  dot: {
    display: "inline-block",
    width: 18,
    height: 18,
    background: "#1a1a1a",
    marginLeft: 4,
    verticalAlign: "bottom",
    marginBottom: 8,
  },
  tagline: {
    marginTop: 20,
    fontSize: 15,
    color: "#666",
    maxWidth: 340,
    lineHeight: 1.6,
    marginBottom: 40,
  },
  contactItems: { display: "flex", flexDirection: "column", gap: 12 },
  contactCard: {
    background: "#ffffff",
    borderRadius: 16,
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    gap: 16,
    border: "1px solid #ddd",
    cursor: "default",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  contactIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    background: "#EDEAE4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    flexShrink: 0,
  },
  contactLabel: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#999",
    marginBottom: 2,
  },
  contactValue: { fontSize: 14, fontWeight: 500, color: "#1a1a1a" },
  socials: { display: "flex", alignItems: "center", gap: 12, marginTop: 32 },
  socialsLabel: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "2px",
    color: "#999",
    textTransform: "uppercase",
  },
  socialBtn: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "#1a1a1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#ffffff",
    fontSize: 13,
    fontWeight: 600,
  },
  formCard: {
    background: "#ffffff",
    borderRadius: 24,
    padding: 40,
    border: "1px solid #ddd",
    boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap:  36,
  },
  formRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  field: { display: "flex", flexDirection: "column", gap: 6 },
  label: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#999",
  },
  input: {
    background: "#EDEAE4",
    border: "1.5px solid transparent",
    borderRadius: 12,
    padding: "14px 16px",
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    color: "#1a1a1a",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: { height: 120, lineHeight: 1.6, resize: "none" },
  sendBtn: {
    width: "100%",
    background: "#e8623a",
    color: "#ffffff",
    border: "none",
    borderRadius: 14,
    padding: 18,
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 8,
  },
  responseBadge: {
    position: "absolute",
    bottom: -16,
    right: 24,
    background: "#1a1a1a",
    color: "#ffffff",
    borderRadius: 12,
    padding: "10px 18px",
  },
  rtLabel: {
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#999",
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 2,
  },
  greenDot: {
    width: 7,
    height: 7,
    background: "#22c55e",
    borderRadius: "50%",
    display: "inline-block",
  },
  rtValue: { fontSize: 15, fontWeight: 700, letterSpacing: "0.5px" },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => console.log("Form submitted:", form);

  const contacts = [
    { icon: "✉️", label: "Email",    value: "mujtabarasheed20@gmail.com" },
    { icon: "📞", label: "Phone",    value: "+92 3265911975" },
    { icon: "📍", label: "Location", value: "Karachi, Pakistan" },
  ];

  const socials = [
    { key: "gh",  label: "G" },
    { key: "li",  label: "in" },
    { key: "ig",  label: "ig" },
  ];

  const inputStyle = (name) => ({
    ...s.input,
    ...(focusedField === name
      ? { borderColor: "#e8623a", boxShadow: "0 0 0 3px rgba(255,107,43,0.12)", background: "#ffffff" }
      : {}),
  });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.3); }
        }
        .badge-dot { animation: pulse 1.5s infinite; }
        .green-dot { animation: pulse 1.5s infinite; }
      `}</style>

      <div style={s.wrapper}>
        {/* LEFT */}
        <div style={s.left}>
          <div style={s.badge}>
            <span className="badge-dot" style={s.badgeDot} />
            Available for projects
          </div>

          <h1 style={s.headline}>
            LET'S
            <span style={s.orange}>
              CONNECT<span style={s.dot} />
            </span>
          </h1>

          <p style={s.tagline}>
            Have a revolutionary idea or just want to chat about tech? I'm just a message away.
          </p>

          <div style={s.contactItems}>
            {contacts.map(({ icon, label, value }, i) => (
              <div
                key={label}
                style={{
                  ...s.contactCard,
                  ...(hoveredCard === i
                    ? { transform: "translateX(4px)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }
                    : {}),
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={s.contactIcon}>{icon}</div>
                <div>
                  <div style={s.contactLabel}>{label}</div>
                  <div style={s.contactValue}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={s.socials}>
            <span style={s.socialsLabel}>Socials //</span>
            {socials.map(({ key, label }) => (
              <div
                key={key}
                style={{
                  ...s.socialBtn,
                  ...(hoveredSocial === key
                    ? { background: "#e8623a", transform: "translateY(-2px)" }
                    : {}),
                }}
                onMouseEnter={() => setHoveredSocial(key)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={s.formCard}>
          <div style={s.formRow}>
            <div style={s.field}>
              <label style={s.label}>Full Name</label>
              <input
                style={inputStyle("name")}
                name="name"
                placeholder="Mujtaba Rasheed"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div style={s.field}>
              <label style={s.label}>Email Address</label>
              <input
                style={inputStyle("email")}
                name="email"
                placeholder="hello@example.com"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>

          <div style={s.field}>
            <label style={s.label}>Subject</label>
            <input
              style={inputStyle("subject")}
              name="subject"
              placeholder="How can I help you?"
              value={form.subject}
              onChange={handleChange}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          <div style={s.field}>
            <label style={s.label}>Your Message</label>
            <textarea
              style={{ ...inputStyle("message"), ...s.textarea }}
              name="message"
              placeholder="Describe your vision..."
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          <button
            style={{
              ...s.sendBtn,
              ...(hoveredBtn
                ? { background: "#e85c1f", transform: "translateY(-1px)", boxShadow: "0 8px 24px rgba(255,107,43,0.35)" }
                : {}),
            }}
            onMouseEnter={() => setHoveredBtn(true)}
            onMouseLeave={() => setHoveredBtn(false)}
            onClick={handleSubmit}
          >
            SEND DISPATCH ➤
          </button>

          <div style={s.responseBadge}>
            <div style={s.rtLabel}>
              <span className="green-dot" style={s.greenDot} />
              Response Time
            </div>
            <div style={s.rtValue}>&lt; 24 Hours</div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}