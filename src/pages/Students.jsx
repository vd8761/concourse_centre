import React, { useEffect } from 'react';
import { ArrowRight, GraduationCap, CheckCircle2, TrendingUp, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Students = () => {
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
    <div style={{ paddingTop: '96px' }}>
      
      {/* Hero Section */}
      <section style={{ padding: '80px 0 40px', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-bg" style={{ opacity: 0.5 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
            <div>
              <span className="badge animate-on-scroll" style={{ display: 'inline-flex', marginBottom: '24px' }}>
                <GraduationCap size={16} /> <span>For Students</span>
              </span>
              <h1 className="animate-on-scroll" style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-0.03em' }}>
                Launch your <br/> <span className="text-gradient-blue" style={{ paddingBottom: '10px' }}>Global Career.</span>
              </h1>
              <p className="subtitle animate-on-scroll" style={{ fontSize: '1.25rem', marginBottom: '40px' }}>
                Skip the traditional placement queues. Compete on pure merit and earn verified remote internships with international companies before you graduate.
              </p>
              <div className="animate-on-scroll" style={{ display: 'flex', gap: '16px' }}>
                <Link to="/apply" className="btn btn-primary glow-primary">Apply for CGIP <ArrowRight size={18} className="btn-icon" /></Link>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="bento-card" style={{ padding: '40px', background: 'var(--white)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', background: 'linear-gradient(135deg, var(--royal-blue) 0%, #60A5FA 100%)', borderRadius: '50%', opacity: 0.2, filter: 'blur(20px)' }}></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--deep-navy)' }}>The Student Advantage</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--royal-blue)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}><strong>Zero Fees:</strong> We never charge students for placement. If you have the merit, you get the opportunity.</span></li>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--royal-blue)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}><strong>Global Exposure:</strong> Work with teams in the US, UK, Australia, and Singapore from your dorm room.</span></li>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--royal-blue)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}><strong>Verified Experience:</strong> Every internship comes with a verifiable certificate and direct industry feedback.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '80px 0', background: 'var(--light-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 64px' }} className="animate-on-scroll">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Your Journey to Placement</h2>
            <p className="subtitle">The Concourse Global Internship Programme is competitive but completely transparent.</p>
          </div>

          <div className="grid-4 animate-on-scroll" style={{ gap: '24px' }}>
            <div className="bento-card" style={{ padding: '32px 24px' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--royal-blue)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>01</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Application</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>Submit your profile, portfolio, and academic records through our portal.</p>
            </div>
            
            <div className="bento-card" style={{ padding: '32px 24px' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--royal-blue)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>02</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Assessment</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>Complete our proprietary skill and communication evaluations.</p>
            </div>
            
            <div className="bento-card" style={{ padding: '32px 24px' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--royal-blue)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>03</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Matching</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>If selected, your profile is routed to international companies for interviews.</p>
            </div>
            
            <div className="bento-card" style={{ padding: '32px 24px', border: '1px solid var(--royal-blue)' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--royal-blue)', color: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>04</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Placement</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>Begin your remote internship, track your hours, and gain real experience.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Students;
