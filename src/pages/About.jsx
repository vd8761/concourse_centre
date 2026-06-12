import React, { useEffect } from 'react';
import { Target, Compass, Users, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
    <main style={{ backgroundColor: 'var(--white)' }}>
      
      {/* Hero Section */}
      <section style={{ paddingTop: '136px', paddingBottom: '40px', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-bg" style={{ opacity: 0.5 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge animate-on-scroll" style={{ display: 'inline-flex', marginBottom: '24px' }}>
              <Compass size={16} /> <span>Our Story</span>
            </span>
            <h1 className="animate-on-scroll" style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-0.03em' }}>
              Bridging the gap between <br/> <span className="text-gradient-blue" style={{ paddingBottom: '10px' }}>Talent and Opportunity.</span>
            </h1>
            <p className="subtitle animate-on-scroll" style={{ fontSize: '1.25rem', marginBottom: '40px' }}>
              Touchmark Concourse Centre was founded on a simple premise: India has an abundance of world-class student talent, but geographical borders shouldn't limit their potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '60px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="grid-2 animate-on-scroll" style={{ gap: '32px' }}>
            <div className="bento-card" style={{ padding: '48px', borderTop: '4px solid var(--royal-blue)' }}>
              <Target size={32} color="var(--royal-blue)" style={{ marginBottom: '24px' }} />
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Our Mission</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                To democratize access to global career opportunities for Indian students by building verified, merit-based pathways to international remote internships and early-career projects.
              </p>
            </div>
            
            <div className="bento-card" style={{ padding: '48px', borderTop: '4px solid var(--emerald-green)' }}>
              <Compass size={32} color="var(--emerald-green)" style={{ marginBottom: '24px' }} />
              <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Our Vision</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                To become the defacto bridge connecting global enterprise demands with the vast, untapped potential of the Indian higher-education ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section style={{ padding: '80px 0', background: 'var(--light-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 64px' }} className="animate-on-scroll">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>The Touchmark Difference</h2>
            <p className="subtitle">We aren't a typical placement agency. We are an ecosystem builder.</p>
          </div>

          <div className="bento-grid animate-on-scroll">
            {/* Wide Card */}
            <div className="bento-card bento-wide" style={{ background: 'linear-gradient(135deg, var(--deep-navy) 0%, #1e3a8a 100%)', border: 'none', boxShadow: '0 20px 40px -12px rgba(10, 37, 64, 0.4)', padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <Award size={320} color="rgba(255,255,255,0.04)" strokeWidth={1} style={{ position: 'absolute', right: '-40px', bottom: '-40px', transform: 'rotate(-15deg)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '24px', color: 'white', letterSpacing: '-0.02em', lineHeight: '1.2' }}>100% Meritocratic</h3>
                <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.25rem', lineHeight: '1.6', margin: 0, fontWeight: '400' }}>
                  We fundamentally believe that talent is equally distributed, but opportunity is not. We never charge students for placements. If you have the skill, you earn the spot. Period.
                </p>
              </div>
            </div>

            <div className="bento-card bento-square">
              <Users size={32} color="var(--royal-blue)" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Institution Aligned</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.5' }}>We work with colleges, not against them, integrating into their existing placement cells.</p>
            </div>

            <div className="bento-card bento-square">
              <Target size={32} color="var(--royal-blue)" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Zero-Friction B2B</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.5' }}>For global companies, we handle all the administrative, tracking, and certification overhead.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
