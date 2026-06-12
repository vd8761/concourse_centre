import React, { useEffect } from 'react';
import { ArrowRight, Globe2, Briefcase, GraduationCap, CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CGIP = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <main style={{ backgroundColor: 'var(--light-bg)' }}>
      
      {/* Premium Hero Section */}
      <section style={{ paddingTop: '160px', paddingBottom: '140px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, var(--deep-navy) 0%, #1e3a8a 100%)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)', zIndex: 1 }}></div>
        <div className="mesh-bg" style={{ opacity: 0.2 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge animate-on-scroll" style={{ display: 'inline-flex', marginBottom: '24px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Globe2 size={16} /> <span style={{ marginLeft: '6px' }}>Flagship Programme</span>
            </span>
            <h1 className="animate-on-scroll" style={{ fontSize: '4.5rem', marginBottom: '24px', letterSpacing: '-0.03em', color: 'white', lineHeight: '1.1' }}>
              Concourse Global <br/> <span className="text-gradient-blue" style={{ background: 'linear-gradient(90deg, #60a5fa, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', paddingBottom: '10px' }}>Internship Programme</span>
            </h1>
            <p className="subtitle animate-on-scroll" style={{ fontSize: '1.25rem', marginBottom: '40px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7' }}>
              A highly selective, merit-based pathway connecting ambitious Indian students with verified remote internships at global companies. Build your international resume without leaving your campus.
            </p>
            
            {/* Country Tags */}
            <div className="animate-on-scroll" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '48px' }}>
              <span style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: '30px', padding: '8px 20px', color: 'white', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '500' }}>
                <img src="https://flagcdn.com/w20/sg.png" width="20" alt="Singapore flag" style={{ borderRadius: '2px' }} /> Singapore
              </span>
              <span style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: '30px', padding: '8px 20px', color: 'white', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '500' }}>
                <img src="https://flagcdn.com/w20/ae.png" width="20" alt="UAE flag" style={{ borderRadius: '2px' }} /> Dubai, UAE
              </span>
              <span style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: '30px', padding: '8px 20px', color: 'white', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '500' }}>
                <img src="https://flagcdn.com/w20/mu.png" width="20" alt="Mauritius flag" style={{ borderRadius: '2px' }} /> Mauritius
              </span>
              <span style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: '30px', padding: '8px 20px', color: 'white', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '500' }}>
                <img src="https://flagcdn.com/w20/jp.png" width="20" alt="Japan flag" style={{ borderRadius: '2px' }} /> Japan
              </span>
              <span style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: '30px', padding: '8px 20px', color: 'white', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '500' }}>
                <Globe2 size={18} /> & More
              </span>
            </div>
            
            <div className="animate-on-scroll" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/apply" className="btn btn-white" style={{ fontWeight: '700', padding: '16px 36px', borderRadius: '50px', fontSize: '1.05rem' }}>
                Apply Now <ArrowRight size={18} className="btn-icon" />
              </Link>
              <Link to="/institutions" className="btn btn-glass" style={{ padding: '16px 36px', borderRadius: '50px', fontWeight: '600', fontSize: '1.05rem' }}>
                Institution Partnership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats/Highlights */}
      <section style={{ position: 'relative', zIndex: 10, marginTop: '-60px' }}>
        <div className="container">
          <div className="grid-4 animate-on-scroll" style={{ gap: '24px' }}>
            <div className="bento-card" style={{ textAlign: 'center', padding: '40px 24px', background: 'var(--white)', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', border: 'none' }}>
              <h3 style={{ fontSize: '3.5rem', marginBottom: '8px', fontWeight: '800', background: 'linear-gradient(135deg, var(--royal-blue), var(--emerald-green))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>100%</h3>
              <p style={{ color: 'var(--text-color)', fontWeight: '600', fontSize: '1.1rem' }}>Merit Based</p>
            </div>
            <div className="bento-card" style={{ textAlign: 'center', padding: '40px 24px', background: 'var(--white)', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', border: 'none' }}>
              <h3 style={{ fontSize: '3.5rem', marginBottom: '8px', fontWeight: '800', background: 'linear-gradient(135deg, var(--royal-blue), var(--emerald-green))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Zero</h3>
              <p style={{ color: 'var(--text-color)', fontWeight: '600', fontSize: '1.1rem' }}>Placement Fees</p>
            </div>
            <div className="bento-card" style={{ textAlign: 'center', padding: '40px 24px', background: 'var(--white)', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', border: 'none' }}>
              <h3 style={{ fontSize: '3.5rem', marginBottom: '8px', fontWeight: '800', background: 'linear-gradient(135deg, var(--royal-blue), var(--emerald-green))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>4+</h3>
              <p style={{ color: 'var(--text-color)', fontWeight: '600', fontSize: '1.1rem' }}>Partner Countries</p>
            </div>
            <div className="bento-card" style={{ textAlign: 'center', padding: '40px 24px', background: 'var(--white)', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', border: 'none' }}>
              <h3 style={{ fontSize: '3.5rem', marginBottom: '8px', fontWeight: '800', background: 'linear-gradient(135deg, var(--royal-blue), var(--emerald-green))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Real</h3>
              <p style={{ color: 'var(--text-color)', fontWeight: '600', fontSize: '1.1rem' }}>Work Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Process */}
      <section style={{ padding: '100px 0', background: 'var(--light-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px' }} className="animate-on-scroll">
            <h2 style={{ fontSize: '3rem', marginBottom: '20px', letterSpacing: '-0.02em', color: 'var(--deep-navy)', fontWeight: '800' }}>How It Works</h2>
            <p className="subtitle" style={{ fontSize: '1.15rem', color: 'var(--text-light)', lineHeight: '1.7' }}>
              Our rigorous selection and placement framework ensures high-quality outcomes for both students and global companies.
            </p>
          </div>

          <div className="grid-3 animate-on-scroll" style={{ gap: '40px', position: 'relative' }}>
            
            {/* Step 1 */}
            <div className="bento-card" style={{ padding: '40px 32px', background: 'var(--white)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px -10px rgba(0,0,0,0.05)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(37,99,235,0.15)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.boxShadow = '0 4px 20px -10px rgba(0,0,0,0.05)'; }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.08)', color: 'var(--royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.25rem', marginBottom: '24px' }}>01</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--deep-navy)', fontWeight: '700', letterSpacing: '-0.01em' }}>Assessment & Selection</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '24px', fontSize: '1.05rem' }}>Students undergo a rigorous, multi-stage assessment evaluating their technical skills, communication, and cognitive abilities to ensure they meet global standards.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--emerald-green)" style={{ marginTop: '2px', flexShrink: 0 }} /> <span style={{ fontSize: '1rem', color: 'var(--text-color)' }}>Skill-based technical tests</span></li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--emerald-green)" style={{ marginTop: '2px', flexShrink: 0 }} /> <span style={{ fontSize: '1rem', color: 'var(--text-color)' }}>Communication evaluation</span></li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bento-card" style={{ padding: '40px 32px', background: 'var(--white)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px -10px rgba(0,0,0,0.05)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(37,99,235,0.15)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.boxShadow = '0 4px 20px -10px rgba(0,0,0,0.05)'; }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.08)', color: 'var(--royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.25rem', marginBottom: '24px' }}>02</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--deep-navy)', fontWeight: '700', letterSpacing: '-0.01em' }}>The Matching Process</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '24px', fontSize: '1.05rem' }}>Selected candidates are placed in our verified talent pool and dynamically matched with international projects that perfectly align with their specific skillsets.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--emerald-green)" style={{ marginTop: '2px', flexShrink: 0 }} /> <span style={{ fontSize: '1rem', color: 'var(--text-color)' }}>Automated profile matching</span></li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--emerald-green)" style={{ marginTop: '2px', flexShrink: 0 }} /> <span style={{ fontSize: '1rem', color: 'var(--text-color)' }}>Company-specific interviews</span></li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bento-card" style={{ padding: '40px 32px', background: 'var(--white)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px -10px rgba(0,0,0,0.05)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(37,99,235,0.15)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.boxShadow = '0 4px 20px -10px rgba(0,0,0,0.05)'; }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.08)', color: 'var(--royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.25rem', marginBottom: '24px' }}>03</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--deep-navy)', fontWeight: '700', letterSpacing: '-0.01em' }}>Remote Integration</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '24px', fontSize: '1.05rem' }}>Interns are formally onboarded onto global projects, working entirely remotely while receiving continuous mentorship and performance tracking from our team.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--emerald-green)" style={{ marginTop: '2px', flexShrink: 0 }} /> <span style={{ fontSize: '1rem', color: 'var(--text-color)' }}>Seamless remote onboarding</span></li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--emerald-green)" style={{ marginTop: '2px', flexShrink: 0 }} /> <span style={{ fontSize: '1rem', color: 'var(--text-color)' }}>Weekly progress tracking</span></li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="bento-card" style={{ padding: '40px 32px', background: 'var(--white)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px -10px rgba(0,0,0,0.05)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(37,99,235,0.15)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.boxShadow = '0 4px 20px -10px rgba(0,0,0,0.05)'; }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.08)', color: 'var(--royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.25rem', marginBottom: '24px' }}>04</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--deep-navy)', fontWeight: '700', letterSpacing: '-0.01em' }}>Project Execution</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '24px', fontSize: '1.05rem' }}>Students work closely with their host company supervisors to deliver on project milestones, applying their technical skills to real-world problems.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--emerald-green)" style={{ marginTop: '2px', flexShrink: 0 }} /> <span style={{ fontSize: '1rem', color: 'var(--text-color)' }}>Live project exposure</span></li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--emerald-green)" style={{ marginTop: '2px', flexShrink: 0 }} /> <span style={{ fontSize: '1rem', color: 'var(--text-color)' }}>Real-time supervisor feedback</span></li>
              </ul>
            </div>

            {/* Step 5 */}
            <div className="bento-card" style={{ padding: '40px 32px', background: 'var(--white)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px -10px rgba(0,0,0,0.05)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(37,99,235,0.15)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.boxShadow = '0 4px 20px -10px rgba(0,0,0,0.05)'; }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.08)', color: 'var(--royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.25rem', marginBottom: '24px' }}>05</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--deep-navy)', fontWeight: '700', letterSpacing: '-0.01em' }}>Mid-Point Check-In</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '24px', fontSize: '1.05rem' }}>A formal evaluation halfway through the programme to ensure alignment between the intern's output and the company's expectations.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--emerald-green)" style={{ marginTop: '2px', flexShrink: 0 }} /> <span style={{ fontSize: '1rem', color: 'var(--text-color)' }}>Performance review</span></li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--emerald-green)" style={{ marginTop: '2px', flexShrink: 0 }} /> <span style={{ fontSize: '1rem', color: 'var(--text-color)' }}>Course correction if needed</span></li>
              </ul>
            </div>

            {/* Step 6 */}
            <div className="bento-card" style={{ padding: '40px 32px', background: 'var(--white)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px -10px rgba(0,0,0,0.05)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(37,99,235,0.15)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'; e.currentTarget.style.boxShadow = '0 4px 20px -10px rgba(0,0,0,0.05)'; }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.08)', color: 'var(--royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.25rem', marginBottom: '24px' }}>06</div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--deep-navy)', fontWeight: '700', letterSpacing: '-0.01em' }}>Completion Letter Issued</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '24px', fontSize: '1.05rem' }}>Upon successful completion, students receive a verified experience letter directly from the international host company.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--emerald-green)" style={{ marginTop: '2px', flexShrink: 0 }} /> <span style={{ fontSize: '1rem', color: 'var(--text-color)' }}>Internationally recognised certificate</span></li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><CheckCircle2 size={20} color="var(--emerald-green)" style={{ marginTop: '2px', flexShrink: 0 }} /> <span style={{ fontSize: '1rem', color: 'var(--text-color)' }}>Verified digital credential</span></li>
              </ul>
            </div>
          </div>
          
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginTop: '80px' }}>
             <Link to="/apply" className="btn btn-primary glow-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '18px 40px', fontSize: '1.15rem', borderRadius: '50px', fontWeight: '600' }}>
                Apply / Enquire Now <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container animate-on-scroll">
          <div className="bento-card" style={{ background: 'linear-gradient(135deg, var(--deep-navy) 0%, #1e3a8a 100%)', color: 'white', padding: '80px 40px', textAlign: 'center', borderRadius: '24px', boxShadow: '0 30px 60px -15px rgba(10, 37, 64, 0.5)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)', pointerEvents: 'none' }}></div>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '24px', color: 'white', fontWeight: '800', letterSpacing: '-0.02em', position: 'relative', zIndex: 2 }}>Ready to bridge the gap?</h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.6', position: 'relative', zIndex: 2 }}>
              Whether you are an ambitious student looking for global exposure, or an institution aiming to elevate your placement ecosystem, CGIP is your gateway.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', position: 'relative', zIndex: 2, flexWrap: 'wrap' }}>
              <Link to="/apply" className="btn btn-primary glow-primary" style={{ padding: '16px 36px', fontSize: '1.1rem', borderRadius: '50px' }}>Apply as Student</Link>
              <Link to="/institutions" className="btn btn-outline" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '16px 36px', borderRadius: '50px', fontWeight: '600', fontSize: '1.1rem' }}>Register Institution</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default CGIP;
