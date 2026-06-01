import { useState } from "react";
import Footer from "../Footer/Footer";

const ORANGE = "#e8623a";
const ORANGE_DARK = "#e85c1f";
const ORANGE_GLOW = "rgba(255,107,43,0.35)";
const ORANGE_SOFT = "rgba(255,107,43,0.12)";
const BG = "#F2EFE9";
const CARD_BG = "#ffffff";
const ICON_BG = "#EDEAE4";
const DARK = "#1a1a1a";
const MUTED = "#999";
const BORDER = "#e0ddd7";

const s = {
  wrapper: {
    maxWidth: 1400,
    margin: "0 auto",
    padding: "140px 60px 80px",
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: 80,
    alignItems: "start",
    fontFamily: "'DM Sans', sans-serif",
    background: BG,
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
    color: ORANGE,
    textTransform: "uppercase",
    background: "rgba(255,107,43,0.1)",
    border: "1px solid rgba(255,107,43,0.2)",
    borderRadius: 50,
    padding: "6px 14px",
    marginBottom: 24,
    width: "fit-content",
  },
  badgeDot: {
    width: 8,
    height: 8,
    background: ORANGE,
    borderRadius: "50%",
  },
  headline: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 140,
    lineHeight: 0.9,
    letterSpacing: 6,
    margin: "0 0 6px",
    color: DARK,
  },
  orange: { color: ORANGE, display: "block" },
  dot: {
    display: "inline-block",
    width: 22,
    height: 22,
    background: DARK,
    marginLeft: 6,
    verticalAlign: "bottom",
    marginBottom: 10,
  },
  tagline: {
    marginTop: 20,
    fontSize: 15,
    color: "#666",
    maxWidth: 380,
    lineHeight: 1.6,
    marginBottom: 40,
  },
  contactItems: { display: "flex", flexDirection: "column", gap: 12 },
  contactLabel: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: MUTED,
    marginBottom: 2,
  },
  contactValue: { fontSize: 14, fontWeight: 500, color: DARK },
  socials: { display: "flex", alignItems: "center", gap: 12, marginTop: 32 },
  socialsLabel: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "2px",
    color: MUTED,
    textTransform: "uppercase",
  },
  formCard: {
    background: CARD_BG,
    borderRadius: 24,
    padding: 40,
    border: `1px solid ${BORDER}`,
    boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 36,
  },
  formRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  field: { display: "flex", flexDirection: "column", gap: 6 },
  label: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: MUTED,
  },
  input: {
    background: ICON_BG,
    border: "1.5px solid transparent",
    borderRadius: 12,
    padding: "14px 16px",
    fontSize: 14,
    fontFamily: "'DM Sans', sans-serif",
    color: DARK,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s, background 0.2s",
  },
  textarea: { height: 120, lineHeight: 1.6, resize: "none" },
  responseBadge: {
    position: "absolute",
    bottom: -20,
    right: 24,
    background: DARK,
    color: "#fff",
    borderRadius: 12,
    padding: "10px 18px",
  },
  rtLabel: {
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: MUTED,
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 2,
  },
  rtValue: { fontSize: 15, fontWeight: 700, letterSpacing: "0.5px", color: "#fff" },
};

const CONTACT_ICON = { Email: "ti-mail", Phone: "ti-phone", Location: "ti-map-pin" };

const CARD_ACCENT = {
  Email:    { bg: "#fff5f0", icon: ORANGE,    border: "rgba(232,98,58,0.25)"  },
  Phone:    { bg: "#f0f7ff", icon: "#3b82f6", border: "rgba(59,130,246,0.25)" },
  Location: { bg: "#f0fdf4", icon: "#22c55e", border: "rgba(34,197,94,0.25)"  },
};

const SOCIAL_CONFIG = [
  { key: "gh",  icon: "ti-brand-github",    label: "GitHub"    },
  { key: "li",  icon: "ti-brand-linkedin",  label: "LinkedIn"  },
  { key: "ig",  icon: "ti-brand-instagram", label: "Instagram" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [hoveredCard, setHoveredCard]     = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredBtn, setHoveredBtn]       = useState(false);
  const [focusedField, setFocusedField]   = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => console.log("Form submitted:", form);

  const contacts = [
    { label: "Email",    value: "mujtabarasheed20@gmail.com" },
    { label: "Phone",    value: "+92 3265911975"             },
    { label: "Location", value: "Karachi, Pakistan"          },
  ];

  const inputStyle = (name) => ({
    ...s.input,
    ...(focusedField === name
      ? { borderColor: ORANGE, boxShadow: `0 0 0 3px ${ORANGE_SOFT}`, background: "#ffffff" }
      : {}),
  });

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.31.0/dist/tabler-icons.min.css" />

      <style>{`
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.5; transform:scale(1.3); }
        }
        .bdot { animation: pulse 1.5s infinite; }
        .gdot { animation: pulse 1.5s infinite; }
      `}</style>

      <div style={s.wrapper}>

        {/* LEFT */}
        <div style={s.left}>

          <div style={s.badge}>
            <span className="bdot" style={s.badgeDot} />
            Available for projects
          </div>

          <h1 style={s.headline}>
            LET'S
            <span style={s.orange}>CONNECT<span style={s.dot} /></span>
          </h1>

          <p style={s.tagline}>
            Have a revolutionary idea or just want to chat about tech? I'm just a message away.
          </p>

          <div style={s.contactItems}>
            {contacts.map(({ label, value }) => {
              const hov    = hoveredCard === label;
              const accent = CARD_ACCENT[label];
              return (
                <div
                  key={label}
                  onMouseEnter={() => setHoveredCard(label)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: hov ? accent.bg : CARD_BG,
                    borderRadius: 16,
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    border: `1px solid ${hov ? accent.border : BORDER}`,
                    transform: hov ? "translateX(6px)" : "translateX(0)",
                    boxShadow: hov ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
                    transition: "transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s, border-color 0.25s, background 0.25s",
                    cursor: "default",
                  }}
                >
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: hov ? accent.bg : "#EDEAE4",
                    border: `1px solid ${hov ? accent.border : "transparent"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.25s, border-color 0.25s",
                  }}>
                    <i
                      className={`ti ${CONTACT_ICON[label]}`}
                      style={{ fontSize: 20, color: hov ? accent.icon : "#888", transition: "color 0.25s" }}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div style={s.contactLabel}>{label}</div>
                    <div style={s.contactValue}>{value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={s.socials}>
            <span style={s.socialsLabel}>Socials //</span>
            {SOCIAL_CONFIG.map(({ key, icon, label }) => {
              const hov = hoveredSocial === key;
              return (
                <div
                  key={key}
                  aria-label={label}
                  onMouseEnter={() => setHoveredSocial(key)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: hov ? ORANGE : DARK,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                    transform: hov ? "translateY(-3px) scale(1.12)" : "translateY(0) scale(1)",
                    boxShadow: hov ? `0 6px 16px ${ORANGE_GLOW}` : "none",
                    transition: "background 0.2s, transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s",
                  }}
                >
                  <i className={`ti ${icon}`} style={{ fontSize: 18, color: "#fff" }} aria-hidden="true" />
                </div>
              );
            })}
          </div>

        </div>

        {/* RIGHT */}
        <div style={s.formCard}>

          <div style={s.formRow}>
            {[
              { name:"name",  label:"Full Name",     placeholder:"Mujtaba Rasheed"   },
              { name:"email", label:"Email Address", placeholder:"hello@example.com" },
            ].map(({ name, label, placeholder }) => (
              <div key={name} style={s.field}>
                <label style={s.label}>{label}</label>
                <input
                  style={inputStyle(name)}
                  name={name}
                  placeholder={placeholder}
                  value={form[name]}
                  onChange={handleChange}
                  onFocus={() => setFocusedField(name)}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            ))}
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
            onClick={handleSubmit}
            onMouseEnter={() => setHoveredBtn(true)}
            onMouseLeave={() => setHoveredBtn(false)}
            style={{
              width: "100%",
              background: hoveredBtn ? ORANGE_DARK : ORANGE,
              color: "#fff",
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
              transform: hoveredBtn ? "translateY(-2px)" : "translateY(0)",
              boxShadow: hoveredBtn ? `0 8px 24px ${ORANGE_GLOW}` : "none",
              transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <i className="ti ti-send" style={{ fontSize: 17 }} aria-hidden="true" />
            SEND DISPATCH
          </button>

          <div style={s.responseBadge}>
            <div style={s.rtLabel}>
              <span className="gdot" style={{ width:7, height:7, background:"#22c55e", borderRadius:"50%", display:"inline-block" }} />
              Response Time
            </div>
            <div style={s.rtValue}>&lt; 24 Hours</div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}