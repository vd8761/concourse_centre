import React from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

const HumanVerification = ({ onChange, error }) => {
  return (
    <div className="form-group" style={{ marginBottom: '0' }}>
      <div style={{ 
        border: error ? '1px solid #ef4444' : 'none', 
        borderRadius: '8px',
        padding: error ? '2px' : '0',
        minHeight: '65px'
      }}>
        <Turnstile 
          siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || '3x00000000000000000000FF'} 
          onSuccess={(token) => onChange(token)}
          options={{ theme: 'light' }}
        />
      </div>
      {error && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{error}</span>}
    </div>
  );
};

export default HumanVerification;
