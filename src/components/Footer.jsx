import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer style={{ paddingTop: '64px', paddingBottom: '32px', background: 'var(--deep-navy)', color: 'rgba(255,255,255,0.7)' }}>
      <div className="container grid-3" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '48px' }}>
        <div>
          <div className="logo" style={{ marginBottom: '24px' }}>
            <Link to="/" style={{ display: 'inline-block', textDecoration: 'none' }}>
              <Logo variant="light" />
            </Link>
          </div>
          <p style={{ lineHeight: '1.8', fontSize: '0.95rem', paddingRight: '24px', color: 'rgba(255,255,255,0.7)' }}>
            India's Global Talent Bridge. Connecting Indian talent to global opportunity through merit-based programmes, real work, and structured verification.
          </p>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '24px', color: 'var(--white)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700' }}>Programmes</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li><Link to="/cgip" className="footer-link">Global Internship (CGIP)</Link></li>
            <li><Link to="/programmes" className="footer-link">Venture Sprint</Link></li>
            <li><Link to="/programmes" className="footer-link">Research Fellowship</Link></li>
            <li><Link to="/programmes" className="footer-link">Industry Immersion</Link></li>
            <li><Link to="/programmes" className="footer-link">Skills Certification</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '24px', color: 'var(--white)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700' }}>Who We Serve</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li><Link to="/students" className="footer-link">Students</Link></li>
            <li><Link to="/institutions" className="footer-link">Institutions</Link></li>
            <li><Link to="/companies" className="footer-link">Companies</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '24px', color: 'var(--white)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700' }}>Countries</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li><span className="footer-link" style={{ cursor: 'default', display: 'flex', alignItems: 'center', gap: '8px' }}><img src="https://flagcdn.com/w20/sg.png" width="16" alt="SG" style={{ borderRadius: '2px' }} /> Singapore</span></li>
            <li><span className="footer-link" style={{ cursor: 'default', display: 'flex', alignItems: 'center', gap: '8px' }}><img src="https://flagcdn.com/w20/ae.png" width="16" alt="AE" style={{ borderRadius: '2px' }} /> Dubai, UAE</span></li>
            <li><span className="footer-link" style={{ cursor: 'default', display: 'flex', alignItems: 'center', gap: '8px' }}><img src="https://flagcdn.com/w20/mu.png" width="16" alt="MU" style={{ borderRadius: '2px' }} /> Mauritius</span></li>
            <li><span className="footer-link" style={{ cursor: 'default', display: 'flex', alignItems: 'center', gap: '8px' }}><img src="https://flagcdn.com/w20/jp.png" width="16" alt="JP" style={{ borderRadius: '2px' }} /> Japan</span></li>
            <li><Link to="/network" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Globe size={16} style={{ color: '#38bdf8' }} /> & More</Link></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Touchmark Descience Pvt Ltd. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
           <Link to="/terms" className="footer-link">Terms & Conditions</Link>
           <Link to="/privacy" className="footer-link">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
