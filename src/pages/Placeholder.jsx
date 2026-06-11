import React from 'react';

const Placeholder = ({ title }) => {
  return (
    <div className="container section-padding" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 className="text-primary mb-4">{title}</h1>
      <p>This page is currently under development.</p>
    </div>
  );
};

export default Placeholder;
