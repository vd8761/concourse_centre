import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { countries } from '../utils/countries';

const CountrySelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef(null);

  const selectedCountry = countries.find(c => c.code === value) || countries[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [wrapperRef]);

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    country.code.includes(searchTerm)
  );

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '90px', flexShrink: 0 }}>
      <div 
        className="form-input" 
        style={{ 
          height: '52px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          cursor: 'pointer',
          padding: '0 8px'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={`https://flagcdn.com/w20/${selectedCountry.iso}.png`} width="20" alt={selectedCountry.name} />
        <span style={{ fontWeight: '500', fontSize: '0.95rem' }}>{selectedCountry.code}</span>
        <ChevronDown size={14} color="var(--text-light)" style={{ marginLeft: '-2px' }} />
      </div>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          marginTop: '8px',
          width: '280px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          border: '1px solid rgba(0,0,0,0.05)',
          zIndex: 50,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ padding: '12px', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Search size={16} color="var(--text-light)" />
            <input 
              type="text" 
              placeholder="Search country..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.95rem' }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <div 
                  key={country.name}
                  style={{
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    background: value === country.code ? 'rgba(37, 99, 235, 0.05)' : 'transparent',
                    transition: 'background 0.2s ease'
                  }}
                  onClick={() => {
                    onChange(country.code);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = value === country.code ? 'rgba(37, 99, 235, 0.05)' : 'transparent'}
                >
                  <img src={`https://flagcdn.com/w20/${country.iso}.png`} width="20" alt={country.name} />
                  <span style={{ fontWeight: '500', color: 'var(--deep-navy)' }}>{country.name}</span>
                  <span style={{ marginLeft: 'auto', color: 'var(--text-light)', fontSize: '0.9rem' }}>{country.code}</span>
                </div>
              ))
            ) : (
              <div style={{ padding: '16px', textAlign: 'center', color: 'var(--text-light)' }}>
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
