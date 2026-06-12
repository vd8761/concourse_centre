import React, { useEffect } from 'react';
import { Layers, ArrowRight, Globe2, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programmes = () => {
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
    <div style={{ paddingTop: '96px', background: 'var(--light-bg)', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section style={{ padding: '80px 0 40px', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }} className="animate-on-scroll">
            <span className="badge" style={{ display: 'inline-flex', marginBottom: '24px' }}>
              <Layers size={16} /> <span>Our Initiatives</span>
            </span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-0.03em' }}>
              Designed to <span className="text-gradient-blue">accelerate potential.</span>
            </h1>
            <p className="subtitle" style={{ fontSize: '1.25rem' }}>
              We offer highly specialized programmes tailored to bridge specific gaps between academic theory and global industry demands.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '32px' }}>
            
            {/* CGIP */}
            <div className="animate-on-scroll">
              <div className="bento-card" style={{ padding: '40px', height: '100%', borderTop: '4px solid var(--royal-blue)' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--royal-blue)' }}>
                  <Globe2 size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Global Internship Programme (CGIP)</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '32px', lineHeight: '1.6' }}>
                  Our flagship initiative connecting top-tier Indian students with verified, remote international internships at global companies. Completely merit-based with zero placement fees.
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <Link to="/cgip" className="btn btn-primary btn-sm glow-primary" style={{ width: '100%', justifyContent: 'center' }}>Explore CGIP <ArrowRight size={16} /></Link>
                </div>
              </div>
            </div>

            {/* Venture Sprint */}
            <div className="animate-on-scroll delay-100">
              <div className="bento-card" style={{ padding: '40px', height: '100%', borderTop: '4px solid var(--emerald-green)' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--emerald-green)' }}>
                  <Briefcase size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Venture Sprint Programme</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '32px', lineHeight: '1.6' }}>
                  An intensive, cohort-based remote programme where students work directly alongside startup founders on high-impact MVP development and early-stage market strategy.
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', pointerEvents: 'none', opacity: 0.7 }}>Opening Soon</button>
                </div>
              </div>
            </div>

            {/* Research Fellowship */}
            <div className="animate-on-scroll delay-200">
              <div className="bento-card" style={{ padding: '40px', height: '100%', borderTop: '4px solid #8B5CF6' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#8B5CF6' }}>
                  <GraduationCap size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Global Research Fellowship</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '32px', lineHeight: '1.6' }}>
                  A specialized track for post-graduate students to collaborate with international academic labs and corporate R&D teams on complex, data-driven research initiatives.
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', pointerEvents: 'none', opacity: 0.7 }}>Opening Soon</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Programmes;
