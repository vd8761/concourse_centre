import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-electric-blue text-white hover:bg-midnight-navy focus:ring-electric-blue shadow-md hover:shadow-lg",
    secondary: "bg-white text-midnight-navy border border-soft-border hover:border-electric-blue focus:ring-midnight-navy shadow-sm hover:shadow-md",
    outline: "bg-transparent text-electric-blue border-2 border-electric-blue hover:bg-electric-blue hover:text-white focus:ring-electric-blue",
    ghost: "bg-transparent text-slate-text hover:bg-cloud-white hover:text-midnight-navy focus:ring-soft-border",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
