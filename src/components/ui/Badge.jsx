import React from 'react';

const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest";
  
  const variants = {
    default: "bg-cloud-white text-slate-text border border-soft-border",
    primary: "bg-electric-blue/10 text-electric-blue border border-electric-blue/20",
    success: "bg-verified-emerald/10 text-verified-emerald border border-verified-emerald/20",
    warning: "bg-prestige-gold/10 text-prestige-gold border border-prestige-gold/20",
    premium: "bg-prestige-gold/10 text-prestige-gold border border-prestige-gold/30 shadow-sm",
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
