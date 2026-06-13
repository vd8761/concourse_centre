import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Globe2, ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

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

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={useLightStyle ? 'navbar-dark-bg' : ''} style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0,
      zIndex: 50, 
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(150%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(150%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
      boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.05)' : 'none'
    }}>
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
        
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
        
        <nav className={`nav-links-container ${mobileMenuOpen ? 'open' : ''}`} style={{ display: 'flex', gap: '36px', alignItems: 'center', fontWeight: '500', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
          <button
            className="popup-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <NavLink to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
          <NavLink to="/programmes" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Initiatives</NavLink>
          <NavLink to="/cgip" className="nav-link" onClick={() => setMobileMenuOpen(false)}>CGIP</NavLink>
          <NavLink to="/institutions" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Institutions</NavLink>
          
          {/* Actions inside mobile menu (shown only on mobile) */}
          <div className="mobile-actions-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px', width: '100%' }}>
            <style>{`
              @media (min-width: 993px) { .mobile-actions-wrapper { display: none !important; } }
              .mobile-actions-wrapper a { font-size: 1.1rem !important; margin-bottom: 0 !important; width: 100%; text-align: center; }
            `}</style>
            <Link to="/contact" className="btn" style={{ padding: '12px', border: '1px solid var(--soft-grey)', borderRadius: '8px' }} onClick={() => setMobileMenuOpen(false)}>Get in Touch</Link>
            <Link to="/apply" className="btn btn-primary glow-primary" style={{ padding: '12px', borderRadius: '8px' }} onClick={() => setMobileMenuOpen(false)}>Apply</Link>
          </div>
        </nav>
        
        <div className="actions navbar-actions" style={{ display: 'flex', gap: '32px', alignItems: 'center', fontWeight: '500', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
          <Link to="/contact" className="nav-link">Get in Touch</Link>
          <Link to="/apply" className="btn btn-primary btn-sm glow-primary" style={{ padding: '10px 28px', fontSize: '0.95rem', fontWeight: '600' }}>
            Apply
          </Link>
        </div>

        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'menu-open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ color: useLightStyle ? 'var(--white)' : 'var(--deep-navy)' }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;
