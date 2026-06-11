import React from 'react';

const Card = ({ children, className = '', hoverEffect = false, ...props }) => {
  const baseStyles = "bg-white rounded-xl border border-soft-border p-8";
  const hoverStyles = hoverEffect ? "transition-all duration-300 hover:border-electric-blue hover:shadow-md hover:-translate-y-1" : "shadow-sm";
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
