import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home',    path: '/' },
    { label: 'About',   path: '/about' },
    { label: 'Service', path: '/service' },
    { label: 'Resume',  path: '/resume' },
    { label: 'Project', path: '/project' },
    { label: 'Blogs',   path: '/blog' },
    { label: 'Contact', path: '/contact' },
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
          background: rgba(15, 15, 15, 0.92);
          border-radius: 50px;
          padding: 3px 8px 6px 9px;
          gap: 20px;
          max-width: 1090px;
          width: 67%;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05);
          font-family: 'Outfit', sans-serif;
        }

        .nav-link {
          position: relative;
          padding: 10px 27px;
          border-radius: 70px;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255,255,255,0.8);
          cursor: pointer;
          transition: color 0.2s, background 0.2s, box-shadow 0.2s;
          white-space: nowrap;
          border: none;
          background: none;
          text-decoration: none;
          letter-spacing: 0.03em;
        }
        .nav-link:hover { color: #fff; background: rgba(255,255,255,0.06); }
        .nav-link.active {
          background: linear-gradient(135deg, #f4845f, #e8623a);
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
          background: linear-gradient(135deg, #f4845f, #e8623a);
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

        .close-btn {
          width: 36px; height: 36px;
          border: none;
          border-radius: 10px;
          background: transparent;
          color: rgba(255,255,255,0.5);
          font-size: 18px;
          cursor: pointer;
          display: none;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: color 0.2s, background 0.2s;
        }
        .close-btn:hover {
          color: #fff;
          background: rgba(255,255,255,0.08);
        }

        .hamburger { display: none; }

        @media (max-width: 768px) {
          .navbar-wrapper { padding: 12px 12px; }
          .navbar-container {
            width: 100%;
            height: 50px;
            background: rgba(23, 23, 23);
          }
          .nav-left, .nav-right { display: none; }
          .brand-center { margin: 0; flex: 1; }
   .brand-avatar { 
           width: 32px; height: 32px;
          }

          .brand-name {
            margin-left: -5px;
          }

          .close-btn { display: flex; }
          

          .hamburger {
            display: flex;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            padding: 8px;
            background: rgba(255,255,255,0.08);
            border-radius: 10px;
            border: none;
          }
          .hamburger span {
            width: 16px; height: 1.5px;
            background: #fff; border-radius: 2px;
            transition: all 0.3s; display: block;
          }
        }
      `}</style>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: '', zIndex: 998,
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
          padding: '70px 10px',
        }}>
          <div style={{
            background: '#171717', borderRadius: 20,
            padding: 16, width: '97%', maxWidth: 400,
          }}>
            {/* Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 20px', borderRadius: 20, textDecoration: 'none',
                    fontSize: 16, fontWeight: 400, fontFamily: "'arial', sans-serif",
                    background: location.pathname === link.path ? '#e8623a' : '#232323',
                    color: '#fff',
                  }}
                >
                  <span>{link.label}</span>
                  <span style={{ fontSize: 18, opacity: 1.7, fontWeight: 700 }}>↗</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <div className={`navbar-wrapper${scrolled ? ' scrolled' : ''}`}>
        <nav className="navbar-container">
          <div className="nav-left">
            {navLinks.slice(0, 3).map(link => (
              <Link key={link.label} to={link.path}
                className={`nav-link${location.pathname === link.path ? ' active' : ''}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="brand-center">
            <div className="brand-avatar">MR</div>
            <span className="brand-name">Mujtaba</span>
          </div>

          <div className="nav-right">
            {navLinks.slice(3).map(link => (
              <Link key={link.label} to={link.path}
                className={`nav-link${location.pathname === link.path ? ' active' : ''}`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* CLOSE BUTTON (mobile only) — shown when menu is open */}
          {menuOpen ? (
            <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
          ) : (
            /* HAMBURGER (mobile only) — shown when menu is closed */
            <button className="hamburger" onClick={() => setMenuOpen(true)}>
              <span />
              <span />
              <span />
            </button>
          )}
        </nav>
      </div>
    </>
  )
}

export default NavBar