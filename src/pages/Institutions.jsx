import React, { useEffect } from 'react';
import { ArrowRight, Building2, ClipboardList, RefreshCw, Handshake, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Institutions = () => {
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
      <SEO 
        title="For Institutions | Partner with Us"
        description="Give your students a global advantage. Partner with Touchmark Concourse Centre to offer elite international internship opportunities."
      />
      
      {/* Hero Section */}
      <section style={{ paddingTop: '136px', paddingBottom: '40px', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-bg" style={{ opacity: 0.5 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
            <div>
              <span className="badge animate-on-scroll" style={{ display: 'inline-flex', marginBottom: '24px' }}>
                <Building2 size={16} /> <span>For Institutions</span>
              </span>
              <h1 className="animate-on-scroll" style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-0.03em' }}>
                Elevate your <br/> <span className="text-gradient-blue" style={{ paddingBottom: '10px' }}>Placement Cell.</span>
              </h1>
              <p className="subtitle animate-on-scroll" style={{ fontSize: '1.25rem', marginBottom: '40px' }}>
                Partner with Touchmark Concourse Centre to provide your students with direct access to international, remote internships through our streamlined MOU framework.
              </p>
              <div className="animate-on-scroll" style={{ display: 'flex', gap: '16px' }}>
                <Link to="/contact" className="btn btn-primary glow-primary">Request MOU Details <ArrowRight size={18} className="btn-icon" /></Link>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="bento-card" style={{ padding: '40px', background: 'var(--white)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', background: 'linear-gradient(135deg, var(--emerald-green) 0%, #34D399 100%)', borderRadius: '50%', opacity: 0.2, filter: 'blur(20px)' }}></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--deep-navy)' }}>The Partnership Model</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--emerald-green)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}><strong>One-Page MOU:</strong> Clean, straightforward partnership agreement with no financial overhead for the college.</span></li>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--emerald-green)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}><strong>Dashboard Access:</strong> Track student applications, selection status, and internship completion metrics in real-time.</span></li>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--emerald-green)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}><strong>Enhanced Credibility:</strong> Boost your institution's placement statistics and international exposure metrics.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Dark Value Prop Section */}
      <section className="section text-white text-left py-24" style={{
        backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.92)), url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '800px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div className="grid-2 align-center mobile-gap-32" style={{ gap: '64px' }}>
            
            {/* Left Column: 5 Features */}
            <div className="features-list" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ marginBottom: '8px' }}>
                <span className="badge" style={{ display: 'inline-block', marginBottom: '16px', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--emerald-green)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>Why Partner With Us</span>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.02em', color: 'white' }}>
                  The Touchmark Advantage
                </h2>
              </div>
              
              <div className="feature-item" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--emerald-green)" size={28} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)' }}>
                  <strong style={{ color: 'white', fontSize: '1.15rem', fontWeight: '700' }}>International Internship Access:</strong> Give students access to verified remote opportunities across 4+ countries.
                </span>
              </div>

              <div className="feature-item" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--emerald-green)" size={28} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)' }}>
                  <strong style={{ color: 'white', fontSize: '1.15rem', fontWeight: '700' }}>Merit-Based, Credible Placement:</strong> Every placement is merit-selected and internationally verified.
                </span>
              </div>

              <div className="feature-item" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--emerald-green)" size={28} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)' }}>
                  <strong style={{ color: 'white', fontSize: '1.15rem', fontWeight: '700' }}>Formal MOU Framework:</strong> Clean, one-page MOU establishes collaboration with no complex overhead.
                </span>
              </div>

              <div className="feature-item" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--emerald-green)" size={28} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)' }}>
                  <strong style={{ color: 'white', fontSize: '1.15rem', fontWeight: '700' }}>Multiple Programme Access:</strong> Partner institutions gain access to all current and upcoming Touchmark Concourse Centre initiatives.
                </span>
              </div>

              <div className="feature-item" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <CheckCircle2 color="var(--emerald-green)" size={28} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)' }}>
                  <strong style={{ color: 'white', fontSize: '1.15rem', fontWeight: '700' }}>Dedicated Institutional Liaison:</strong> A Touchmark representative works directly with your placement officer.
                </span>
              </div>
            </div>

            {/* Right Column: CTA Content */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '24px', lineHeight: '1.2', letterSpacing: '-0.02em', color: 'white' }}>
                Ready to Bring International Opportunities to Your Campus?
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6', marginBottom: '24px' }}>
                Join the growing network of Indian institutions partnering with Touchmark Concourse Centre to give students structured access to international internships and global experience.
              </p>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6', marginBottom: '48px' }}>
                Our institution partnership MOU is simple, non-binding, and takes less than a week to complete. Your students can be in the next cohort.
              </p>
              
              <Link to="/contact" className="btn" style={{ background: 'white', color: 'var(--deep-navy)', fontWeight: '700', padding: '16px 36px', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem', marginBottom: '32px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}>
                Request Institution Partnership <ArrowRight size={18} className="btn-icon" />
              </Link>
              
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ flexShrink: 0, fontSize: '1.5rem', marginTop: '-4px' }}>🌍</span>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', margin: 0 }}>
                  We currently partner with institutions across Tamil Nadu, Karnataka, Maharashtra, and expanding nationally. All disciplines of engineering and technology are welcome.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Institutions;
