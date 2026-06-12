import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Globe2, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
  const useLightStyle = !scrolled && isDarkHeroPage;

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
        
        <nav style={{ display: 'flex', gap: '36px', alignItems: 'center', fontWeight: '500', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/programmes" className="nav-link">Initiatives</NavLink>
          <NavLink to="/cgip" className="nav-link">CGIP</NavLink>
          <NavLink to="/institutions" className="nav-link">Institutions</NavLink>
        </nav>
        
        <div className="actions" style={{ display: 'flex', gap: '32px', alignItems: 'center', fontWeight: '500', fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
          <Link to="/contact" className="nav-link">Get in Touch</Link>
          <Link to="/apply" className="btn btn-primary btn-sm glow-primary" style={{ padding: '10px 28px', fontSize: '0.95rem', fontWeight: '600' }}>
            Apply
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
