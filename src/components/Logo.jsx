import React from 'react';

const Logo = ({ variant = 'dark', className = '', style = {} }) => {
  const isLight = variant === 'light';
  
  // Colors
  const textColor = isLight ? '#ffffff' : '#0F172A'; // White or Deep Navy
  const brandBlue = isLight ? '#60A5FA' : '#2563EB'; // Lighter blue on dark backgrounds
  const accentColor = '#10B981'; // Emerald Green remains the same

  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', ...style }}>
      {/* Abstract T & C Bridge/Globe Icon */}
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <defs>
          <linearGradient id="bridgeGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor={brandBlue} />
            <stop offset="1" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="globeGrad" x1="50" y1="10" x2="50" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor={accentColor} />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
        </defs>
        
        {/* Globe Base */}
        <circle cx="50" cy="50" r="40" fill="url(#globeGrad)" opacity="0.15" />
        
        {/* Bridge Arch (The 'T' / 'C' Connection) */}
        <path d="M25 65 Q50 20 85 45" stroke="url(#bridgeGrad)" strokeWidth="12" strokeLinecap="round" />
        <path d="M35 85 Q65 60 75 25" stroke={accentColor} strokeWidth="12" strokeLinecap="round" />
        
        {/* Center Connection Node */}
        <circle cx="55" cy="50" r="8" fill="#ffffff" />
        <circle cx="55" cy="50" r="4" fill={brandBlue} />
      </svg>

      {/* Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ 
          fontFamily: 'Manrope, sans-serif', 
          fontWeight: '800', 
          fontSize: '22px', 
          lineHeight: '1', 
          color: textColor,
          letterSpacing: '-0.03em'
        }}>
          Touchmark
        </span>
        <span style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontWeight: '600', 
          fontSize: '9px', 
          lineHeight: '1', 
          color: isLight ? 'rgba(255,255,255,0.7)' : '#64748B',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginTop: '4px'
        }}>
          Concourse Centre
        </span>
      </div>
    </div>
  );
};

export default Logo;
