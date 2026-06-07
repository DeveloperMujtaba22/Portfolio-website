import React, { useState, useEffect } from 'react'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active link based on scroll position
      const ids = ['hero', 'about', 'service', 'skill', 'project', 'contact']
      let current = 'hero'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  const navLinks = [
    { label: 'Home',    id: 'hero'    },
    { label: 'About',   id: 'about'   },
    { label: 'Service', id: 'service' },
    { label: 'Skills',   id: 'skill'   },
    { label: 'Project', id: 'project' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

        .navbar-wrapper {
          display: flex;
          justify-content: center;
          padding: 25px 14px;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: padding 0.3s ease;
        }
        .navbar-wrapper.scrolled { padding: 10px 24px; }

        .navbar-container {
          display: flex;
          align-items: center;
          background: rgba(15,15,15,0.92);
          border-radius: 50px;
          padding: 3px 8px 6px 9px;
          gap: 20px;
          max-width: 1090px;
          width: 60%;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05);
          font-family: 'Outfit', sans-serif;
        }

        .nav-link {
          position: relative;
          padding: 10px 27px;
          border-radius: 70px;
          font-size: 16px;
          font-weight: 200;
          color: rgba(255,255,255,0.8);
          cursor: pointer;
          transition: color 0.2s, background 0.2s, box-shadow 0.2s;
          white-space: nowrap;
          border: none;
          background: none;
          text-decoration: none;
          letter-spacing: 0.03em;
          font-family: 'Outfit', sans-serif;
        }
        .nav-link:hover { color: #fff; background: rgba(255,255,255,0.06); }
        .nav-link.active {
          background: linear-gradient(135deg, #e8623a, #e8623a);
          color: #fff;
          font-weight: 500;
          box-shadow: 0 4px 16px rgba(244,132,95,0.35);
        }

        .brand-center {
          display: flex; align-items: center; gap: 10px;
          padding: 6px 14px 6px 6px; margin: 0 4px;
        }
        .brand-avatar {
          width: 40px; height: 40px;
          background: linear-gradient(135deg, #e8623a, #e8623a);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 700; color: white;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(244,132,95,0.4);
        }
        .brand-name {
          font-size: 17px; font-weight: 800; color: #fff;
          letter-spacing: 0.08em; text-transform: uppercase;
          font-family: 'Outfit', sans-serif;
        }

        .nav-left  { display: flex; align-items: center; gap: 20px; }
        .nav-right { display: flex; align-items: center; gap: 10px; }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          background: rgba(255,255,255,0.08);
          border-radius: 10px;
          border: none;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .hamburger:hover { background: rgba(255,255,255,0.14); }
        .hamburger span {
          width: 16px; height: 1.5px;
          background: #fff; border-radius: 2px;
          display: block;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ── Mobile Overlay ── */
        .mobile-menu-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 998;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 74px 10px 20px;
          pointer-events: none;
        }
        .mobile-menu-overlay.open { pointer-events: all; }

        .mobile-menu-backdrop {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0);
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          transition: background 0.35s ease, backdrop-filter 0.35s ease;
        }
        .mobile-menu-overlay.open .mobile-menu-backdrop {
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .mobile-menu-panel {
          position: relative; z-index: 1;
          background: #171717;
          border-radius: 22px;
          padding: 12px;
          width: 100%; max-width: 440px;
          transform: translateY(-28px) scale(0.95);
          opacity: 0;
          transition:
            transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
            opacity 0.28s ease;
        }
        .mobile-menu-overlay.open .mobile-menu-panel {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        .mobile-menu-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 15px 20px;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 500;
          font-family: 'Outfit', sans-serif;
          color: #fff;
          background: #232323;
          margin-bottom: 6px;
          border: none;
          cursor: pointer;
          text-align: left;
          transform: translateX(-22px);
          opacity: 0;
          box-sizing: border-box;
          transition:
            background 0.2s,
            transform 0.38s cubic-bezier(0.34,1.56,0.64,1),
            opacity 0.28s ease;
        }
        .mobile-menu-link:last-child { margin-bottom: 0; }

        .mobile-menu-overlay.open .mobile-menu-link {
          transform: translateX(0);
          opacity: 1;
        }

        .mobile-menu-overlay.open .mobile-menu-link:nth-child(1) { transition-delay: 0.04s; }
        .mobile-menu-overlay.open .mobile-menu-link:nth-child(2) { transition-delay: 0.08s; }
        .mobile-menu-overlay.open .mobile-menu-link:nth-child(3) { transition-delay: 0.12s; }
        .mobile-menu-overlay.open .mobile-menu-link:nth-child(4) { transition-delay: 0.16s; }
        .mobile-menu-overlay.open .mobile-menu-link:nth-child(5) { transition-delay: 0.20s; }
        .mobile-menu-overlay.open .mobile-menu-link:nth-child(6) { transition-delay: 0.24s; }

        .mobile-menu-link:hover { background: #2c2c2c; }
        .mobile-menu-link.active { background: #e8623a; }

        .mobile-menu-arr {
          font-size: 16px; font-weight: 700; opacity: 0.6;
          transition: transform 0.2s, opacity 0.2s;
        }
        .mobile-menu-link:hover .mobile-menu-arr { transform: translate(3px,-3px); opacity: 1; }
        .mobile-menu-link.active .mobile-menu-arr { opacity: 1; }

        @media (max-width: 768px) {
          .navbar-wrapper { padding: 12px 12px; }
          .navbar-container {
            width: 97%;
            height: 52px;
            background: rgba(23,23,23,1);
          }
          .nav-left, .nav-right { display: none; }
          .brand-center { margin: 0; flex: 1; padding: 4px 10px 4px 4px; }
          .brand-avatar  { width: 34px; height: 34px; }
          .brand-name    { margin-left: -4px; font-size: 16px; }
          .hamburger     { display: flex; }
        }
      `}</style>

      {/* ── Mobile Menu Overlay ── */}
      <div className={`mobile-menu-overlay${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="mobile-menu-panel">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              className={`mobile-menu-link${activeId === link.id ? ' active' : ''}`}
              style={{ transitionDelay: menuOpen ? `${0.04 + i * 0.04}s` : '0s' }}
              onClick={() => scrollTo(link.id)}
            >
              <span>{link.label}</span>
              <span className="mobile-menu-arr">↗</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── NavBar ── */}
      <div className={`navbar-wrapper${scrolled ? ' scrolled' : ''}`}>
        <nav className="navbar-container">

          <div className="nav-left">
            {navLinks.slice(0, 3).map(link => (
              <button
                key={link.label}
                className={`nav-link${activeId === link.id ? ' active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="brand-center">
            <div className="brand-avatar">MR</div>
            <span className="brand-name">Mujtaba</span>
          </div>

          <div className="nav-right">
            {navLinks.slice(3).map(link => (
              <button
                key={link.label}
                className={`nav-link${activeId === link.id ? ' active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(m => !m)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>

        </nav>
      </div>
    </>
  )
}

export default NavBar