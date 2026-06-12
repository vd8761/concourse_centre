import React, { useEffect } from 'react';
import { Globe, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Network = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ paddingTop: '96px', background: 'var(--white)', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section style={{ padding: '80px 0 40px', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }} className="animate-on-scroll">
            <span className="badge" style={{ display: 'inline-flex', marginBottom: '24px' }}>
              <Globe size={16} /> <span>Global Reach</span>
            </span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-0.03em' }}>
              Connecting Indian talent to <br/> <span className="text-gradient-blue">4+ Global Hubs.</span>
            </h1>
            <p className="subtitle" style={{ fontSize: '1.25rem' }}>
              Our partner network spans across some of the most innovative startup ecosystems and corporate headquarters in the world.
            </p>
          </div>

          <div className="grid-2 animate-on-scroll" style={{ gap: '32px' }}>
            
            {/* US */}
            <div className="bento-card" style={{ padding: '40px', borderTop: '4px solid var(--royal-blue)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--light-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🇺🇸</div>
                <h3 style={{ fontSize: '1.5rem' }}>United States</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><MapPin size={18} color="var(--royal-blue)" /> <span>Silicon Valley, CA</span></li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><MapPin size={18} color="var(--royal-blue)" /> <span>New York City, NY</span></li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><MapPin size={18} color="var(--royal-blue)" /> <span>Austin, TX</span></li>
              </ul>
            </div>

            {/* UK */}
            <div className="bento-card" style={{ padding: '40px', borderTop: '4px solid var(--royal-blue)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--light-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🇬🇧</div>
                <h3 style={{ fontSize: '1.5rem' }}>United Kingdom</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><MapPin size={18} color="var(--royal-blue)" /> <span>London</span></li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><MapPin size={18} color="var(--royal-blue)" /> <span>Cambridge</span></li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><MapPin size={18} color="var(--royal-blue)" /> <span>Manchester</span></li>
              </ul>
            </div>

            {/* Australia */}
            <div className="bento-card" style={{ padding: '40px', borderTop: '4px solid var(--royal-blue)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--light-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🇦🇺</div>
                <h3 style={{ fontSize: '1.5rem' }}>Australia</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><MapPin size={18} color="var(--royal-blue)" /> <span>Sydney</span></li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><MapPin size={18} color="var(--royal-blue)" /> <span>Melbourne</span></li>
              </ul>
            </div>

            {/* Singapore */}
            <div className="bento-card" style={{ padding: '40px', borderTop: '4px solid var(--royal-blue)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--light-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>🇸🇬</div>
                <h3 style={{ fontSize: '1.5rem' }}>Singapore</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><MapPin size={18} color="var(--royal-blue)" /> <span>Central Business District</span></li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><MapPin size={18} color="var(--royal-blue)" /> <span>One-North</span></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Network;
