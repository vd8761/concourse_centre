import React, { useEffect } from 'react';
import { ArrowRight, Briefcase, Zap, CheckCircle2, Users, Rocket, Target, UserCheck, Calendar, Globe2, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Companies = () => {
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
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
            <div>
              <span className="badge animate-on-scroll" style={{ display: 'inline-flex', marginBottom: '24px' }}>
                <Briefcase size={16} /> <span>For Global Companies</span>
              </span>
              <h1 className="animate-on-scroll" style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-0.03em' }}>
                Accelerate with <br/> <span className="text-gradient-blue" style={{ paddingBottom: '10px' }}>Global Talent.</span>
              </h1>
              <p className="subtitle animate-on-scroll" style={{ fontSize: '1.25rem', marginBottom: '40px' }}>
                Access pre-screened, highly motivated remote interns from top Indian institutions to accelerate your non-core workstreams at zero recruitment cost.
              </p>
              <div className="animate-on-scroll" style={{ display: 'flex', gap: '16px' }}>
                <Link to="/contact" className="btn btn-primary glow-primary">Register as Partner <ArrowRight size={18} className="btn-icon" /></Link>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="bento-card" style={{ padding: '40px', background: 'var(--white)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)', borderRadius: '50%', opacity: 0.2, filter: 'blur(20px)' }}></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--deep-navy)' }}>The Zero-Friction Model</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--royal-blue)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}><strong>Pre-Screened Quality:</strong> We test for technical skills and English communication before you ever see a resume.</span></li>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--royal-blue)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}><strong>Zero Financial Cost:</strong> No stipends, no placement fees. Students participate for course credit and experience.</span></li>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--royal-blue)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ color: 'var(--text-light)', lineHeight: '1.5' }}><strong>Full Admin Support:</strong> We handle onboarding, tracking, and certification. You just provide the work.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ padding: '80px 0', background: 'var(--light-bg)' }}>
        <div className="container">
          <div className="grid-3 animate-on-scroll" style={{ gap: '24px' }}>
            <div className="bento-card hover-lift" style={{ padding: '32px 24px', background: 'var(--white)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <UserCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Pre-Screened Talent</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>Every intern is assessed and matched specifically to your role requirements by Touchmark before you see them. You receive shortlisted profiles - not open applications.</p>
            </div>
            
            <div className="bento-card hover-lift" style={{ padding: '32px 24px', background: 'var(--white)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Zero Cost to You</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>No stipend, no recruitment fee, no administrative burden. You provide the project environment. Touchmark manages the rest - from selection to completion.</p>
            </div>
            
            <div className="bento-card hover-lift" style={{ padding: '32px 24px', background: 'var(--white)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Rocket size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Project Acceleration</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>Get non-core workstreams, prototypes, research tasks, and technical documentation delivered through motivated, assessed international interns.</p>
            </div>

            <div className="bento-card hover-lift" style={{ padding: '32px 24px', background: 'var(--white)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <RefreshCw size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Managed Bridge</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>Touchmark's representative handles all student communication, progress monitoring, and escalation - your project manager stays focused on delivery.</p>
            </div>

            <div className="bento-card hover-lift" style={{ padding: '32px 24px', background: 'var(--white)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Calendar size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Time-Boxed Commitment</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>Clear 6-8 week durations with defined start and end dates mean predictable, time-boxed engagement. No open-ended commitments or ambiguous timelines.</p>
            </div>

            <div className="bento-card hover-lift" style={{ padding: '32px 24px', background: 'var(--white)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Globe2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>India's Engineering Talent</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>Access one of the world's largest and most technically capable engineering talent pools - selected for quality and role fit, not just availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Value Prop Section */}
      <section className="section text-white text-left py-24" style={{
        backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url(/images/corporate_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px', lineHeight: '1.1', color: 'white' }}>Zero Cost. Real Output.</h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '700px' }}>
              We handle everything - sourcing, assessment, matching, and programme management. You provide the project and supervisor. We handle the rest.
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <CheckCircle2 color="#3b82f6" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'rgba(255,255,255,0.9)' }}><strong>Pre-Screened Talent:</strong> Interns are assessed and matched specifically to your role requirements.</span>
              </li>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <CheckCircle2 color="#3b82f6" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'rgba(255,255,255,0.9)' }}><strong>Zero Cost to You:</strong> No stipend, no recruitment fee, no administrative burden.</span>
              </li>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <CheckCircle2 color="#3b82f6" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'rgba(255,255,255,0.9)' }}><strong>Project Acceleration:</strong> Get non-core workstreams delivered through motivated international interns.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Companies;
