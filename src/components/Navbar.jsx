import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Info, Sparkles, Award, GraduationCap } from 'lucide-react';
import Logo from './Logo';

const NAV_ITEMS = [
  { to: '/about', label: 'About', desc: 'Who we are', Icon: Info },
  { to: '/programmes', label: 'Initiatives', desc: 'What we run', Icon: Sparkles },
  { to: '/cgip', label: 'CGIP', desc: 'Flagship programme', Icon: Award },
  { to: '/institutions', label: 'Institutions', desc: 'Partner with us', Icon: GraduationCap },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Check initial scroll position immediately on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkHeroPage = location.pathname === '/cgip';
  const useLightStyle = !scrolled && isDarkHeroPage && !mobileMenuOpen;

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock background scroll while the mobile menu is open.
  // Pinning <body> with position:fixed is the only approach that reliably
  // stops touch scrolling on iOS Safari (plain overflow:hidden does not).
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const scrollY = window.scrollY;
    const { body } = document;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';

    return () => {
      Object.assign(body.style, prev);
      window.scrollTo(0, scrollY);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={useLightStyle ? 'navbar-dark-bg' : ''} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50
    }}>
      {/* Frosted background lives on its own layer so its backdrop-filter
          doesn't create a containing block that would trap the fixed
          bottom-sheet inside the header. */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(150%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(150%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.05)' : 'none'
      }} />
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: scrolled ? '72px' : '96px',
        transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>

        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo variant={useLightStyle ? 'light' : 'dark'} />
          </Link>
        </div>

        {/* Desktop navigation links */}
        <nav className="nav-links-container" style={{ display: 'flex', gap: '36px', alignItems: 'center', fontWeight: '500', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink key={to} to={to} className="nav-link">{label}</NavLink>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="actions navbar-actions" style={{ display: 'flex', gap: '32px', alignItems: 'center', fontWeight: '500', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
          <Link to="/contact" className="nav-link">Get in Touch</Link>
          <Link to="/apply" className="btn btn-primary btn-sm glow-primary" style={{ padding: '10px 28px', fontSize: '0.95rem', fontWeight: '600' }}>
            Apply
          </Link>
        </div>

        {/* Animated hamburger */}
        <button
          className={`hamburger ${mobileMenuOpen ? 'is-open' : ''} ${useLightStyle ? 'is-light' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-box">
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </span>
        </button>
      </div>

      {/* ============ Mobile / Tablet Bottom Sheet ============ */}
      <div
        className={`sheet-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div className={`sheet ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu">
        <button className="sheet-handle" onClick={closeMenu} aria-label="Close menu" />

        <div className="sheet-head">
          <span className="sheet-eyebrow">Menu</span>
          <span className="sheet-title">Where to next?</span>
        </div>

        <nav className="sheet-nav">
          {NAV_ITEMS.map(({ to, label, desc, Icon }, i) => (
            <NavLink
              key={to}
              to={to}
              className="sheet-link"
              style={{ '--i': i }}
              onClick={closeMenu}
            >
              <span className="sheet-link-icon"><Icon size={20} strokeWidth={2} /></span>
              <span className="sheet-link-text">
                <span className="sheet-link-label">{label}</span>
                <span className="sheet-link-desc">{desc}</span>
              </span>
              <ArrowUpRight className="sheet-link-arrow" size={18} />
            </NavLink>
          ))}
        </nav>

        <div className="sheet-cta">
          <Link to="/contact" className="sheet-btn sheet-btn-ghost" onClick={closeMenu}>Get in Touch</Link>
          <Link to="/apply" className="sheet-btn sheet-btn-primary" onClick={closeMenu}>
            Apply <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="sheet-foot">
          <Logo variant="dark" style={{ transform: 'scale(0.8)', transformOrigin: 'center' }} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
