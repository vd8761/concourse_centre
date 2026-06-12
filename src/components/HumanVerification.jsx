import React from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

const HumanVerification = ({ onChange, error }) => {
  return (
    <div className="form-group" style={{ marginBottom: '0' }}>
      <label className="form-label">Human Verification <span style={{ color: '#ef4444' }}>*</span></label>
      <div style={{ 
        border: error ? '1px solid #ef4444' : 'none', 
        borderRadius: '8px',
        padding: error ? '2px' : '0',
        minHeight: '65px'
      }}>
        <Turnstile 
          siteKey="3x00000000000000000000FF" 
          onSuccess={(token) => onChange(true)}
          options={{ theme: 'light' }}
        />
      </div>
      {error && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{error}</span>}
    </div>
  );
};

export default HumanVerification;
