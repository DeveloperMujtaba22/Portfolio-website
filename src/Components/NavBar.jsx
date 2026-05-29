import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
   const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home',    path: '/' },
    { label: 'About',   path: '/about' },   // ← separate page
    { label: 'Service', path: '/#service' },
    { label: 'Resume',  path: '/#resume' },
    { label: 'Project', path: '/#project' },
    { label: 'Blogs',   path: '/#blogs' },
    { label: 'Contact', path: '/#contact' },
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
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: padding 0.3s ease;
        }

        .navbar-wrapper.scrolled {
          padding: 10px 24px;
        }

        .navbar-container {
          display: flex;
          align-items: center;
            background: #2d2d2d;     /* ← exact value here */
  background: #333;
  background: rgba(30, 30, 30, 0.95);
          border-radius: 50px;
          padding: 3px 8px 6px 9px;
          gap: 80px;
          max-width: 1090px;
          width: 90%;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05);
          font-family: 'Outfit', sans-serif;
        }

        .nav-link {
          position: relative;
          padding: 10px 27px;
          border-radius: 70px;
          font-size: 16px;
          font-weight: 100;
          color: rgba(255,255,255,0.8);
          cursor: pointer;
          transition: color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
          white-space: nowrap;
          border: none;
          background: none;
          text-decoration: none;
          letter-spacing: 0.03em;
        }

        .nav-link:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.06);
        }

        .nav-link.active {
          background: linear-gradient(135deg, #f4845f, #e8623a);
          color: #ffffff;
          font-weight: 500;
          box-shadow: 0 4px 16px rgba(244, 132, 95, 0.35);
        }

        .brand-center {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 14px 6px 6px;
          margin: 0 4px;
        //   border-left: 1px solid rgba(255,255,255,0.08);
        //   border-right: 1px solid rgba(255,255,255,0.08);
        }

        .brand-avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #f4845f, #e8623a);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 500;
          color: white;
          letter-spacing: 0.02em;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(244, 132, 95, 0.4);
        }

        .brand-name {
          font-size: 17px;
          font-weight: 800;
        //   color: #ffffff;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: 'Outfit', sans-serif;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 10px;
          
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: -60px;
        }

        @media (max-width: 768px) {
          .navbar-wrapper {
            padding: 12px 12px;
          }

          .navbar-container {
            overflow-x: auto;
            scrollbar-width: none;
          }

          .navbar-container::-webkit-scrollbar {
            display: none;
          }

          .nav-link {
            padding: 8px 12px;
            font-size: 13px;
          }

          .brand-name {
            font-size: 13px;
          }
        }
      `}</style>

           <div className={`navbar-wrapper${scrolled ? ' scrolled' : ''}`}>
        <nav className="navbar-container">
          <div className="nav-left">
            {navLinks.slice(0, 3).map(link => (
              <Link
                key={link.label}
                to={link.path}
                className={`nav-link${location.pathname === link.path ? ' active' : ''}`}
              >
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
              <Link
                key={link.label}
                to={link.path}
                className={`nav-link${location.pathname === link.path ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar