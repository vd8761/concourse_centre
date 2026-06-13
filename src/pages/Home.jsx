import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  ArrowRight, Globe2, Building2, Trophy, 
  ClipboardList, FileBadge, Rocket, Microscope, 
  Factory, GraduationCap, Handshake, CheckCircle2
} from 'lucide-react';

const heroImages = [
  { name: 'Singapore', src: '/images/singapore_hero.png' },
  { name: 'Dubai', src: '/images/dubai_hero.png' },
  { name: 'Mauritius', src: '/images/mauritius_hero.png' },
  { name: 'Japan', src: '/images/japan_hero.png' }
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        setPrevImageIndex(prev);
        return (prev + 1) % heroImages.length;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px 0px 0px" });

    // Use a timeout to ensure React has fully committed the DOM
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--white)' }}>
      <SEO 
        title="Touchmark Concourse Centre | India's Global Talent Bridge"
        description="Connecting Indian talent to global opportunity through merit-based international programmes. Build real skills and real careers."
      />
      {/* Hero Section */}
      <section className="bg-mesh-light" style={{ paddingTop: '136px', paddingBottom: '120px' }}>
        <div className="container grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          <div>
            <h1 className="text-gradient-blue animate-on-scroll delay-100" style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', marginBottom: '16px', paddingBottom: '8px', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              India's Global<br />Talent Bridge
            </h1>
            <h2 className="animate-on-scroll delay-200" style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--deep-navy)', marginBottom: '32px', maxWidth: '500px', lineHeight: '1.5' }}>
              Connecting Indian Talent to Global Opportunity
            </h2>
            <p className="mb-8 animate-on-scroll delay-200" style={{ fontSize: '1.125rem', color: 'var(--slate-text)' }}>
              Touchmark Concourse Centre runs merit-based international programmes that place Indian students and professionals inside global companies - building real skills, real experience, and real careers.
            </p>
            <div className="animate-on-scroll delay-300 hero-buttons" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Link to="/programmes" className="btn btn-primary" style={{ padding: '16px 32px' }}>
                Explore Our Programmes <ArrowRight size={18} className="btn-icon" />
              </Link>
              <Link to="/institutions" className="btn btn-white" style={{ padding: '16px 32px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                Partner With Us
              </Link>
            </div>
          </div>
          
          <div className="animate-on-scroll delay-200 hero-carousel" style={{ height: '540px', width: '100%', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            {heroImages.map((img, idx) => (
              <img 
                key={img.name}
                src={img.src} 
                alt={`${img.name} Skyline`} 
                className={`carousel-image ${idx === currentImageIndex ? 'active' : ''}`}
              />
            ))}
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '9px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', color: 'white', padding: '8px 16px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.05em', overflow: 'hidden' }}>
              <span className="carousel-caption-dot" aria-hidden="true" />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span key={currentImageIndex} className="carousel-caption-text" style={{ display: 'inline-block' }}>
                  {heroImages[currentImageIndex].name}
                </span>
                {prevImageIndex !== null && (
                  <span key={`prev-${prevImageIndex}`} className="carousel-caption-text-out" style={{ position: 'absolute', top: 0, left: 0, whiteSpace: 'nowrap' }}>
                    {heroImages[prevImageIndex].name}
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics Overlap Section */}
      <section className="overlap-container mb-24 animate-on-scroll delay-300">
        <div className="container">
          <div className="glass-card bento-content-pad" style={{ borderRadius: '16px' }}>
            <div className="grid-4" style={{ gap: '24px' }}>
              <div className="text-center">
                <h3 className="text-gradient-blue" style={{ fontSize: '3.5rem', marginBottom: '4px', letterSpacing: '-0.02em' }}>25<span style={{ color: 'var(--royal-blue)' }}>+</span></h3>
                <p style={{ fontWeight: '700', color: 'var(--slate-text)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Global Partner Companies</p>
              </div>
              <div className="text-center">
                <h3 className="text-gradient-blue" style={{ fontSize: '3.5rem', marginBottom: '4px', letterSpacing: '-0.02em' }}>4<span style={{ color: 'var(--royal-blue)' }}>+</span></h3>
                <p style={{ fontWeight: '700', color: 'var(--slate-text)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Countries</p>
              </div>
              <div className="text-center">
                <h3 className="text-gradient-blue" style={{ fontSize: '3.5rem', marginBottom: '4px', letterSpacing: '-0.02em' }}>100<span style={{ color: 'var(--royal-blue)' }}>%</span></h3>
                <p style={{ fontWeight: '700', color: 'var(--slate-text)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Remote Delivery</p>
              </div>
              <div className="text-center">
                <h3 className="text-gradient-blue" style={{ fontSize: '3.5rem', marginBottom: '4px', letterSpacing: '-0.02em' }}>Merit.</h3>
                <p style={{ fontWeight: '700', color: 'var(--slate-text)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Only Basis of Selection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 animate-on-scroll">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <div className="badge badge-outline mb-6">Who We Are</div>
            <h2 className="mb-6 text-gradient-blue" style={{ fontSize: '2.5rem' }}>A Centre Built to Bridge India's Talent with the World</h2>
            <p className="mb-6" style={{ fontSize: '1.05rem', color: 'var(--slate-text)' }}>
              Touchmark Concourse Centre is the global outreach and talent development arm of Touchmark Descience Pvt Ltd. We design and operate structured international programmes that connect India's best students with global companies - through merit-based selection, real project work, and outcome-driven delivery.
            </p>
            <p className="mb-6" style={{ fontSize: '1.05rem', color: 'var(--slate-text)' }}>
              We work across two sides simultaneously: sourcing quality internship and learning opportunities from companies in Singapore, Dubai, Japan, Mauritius and beyond - and partnering with Indian institutions to identify, assess, and place the right students into those opportunities.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--deep-navy)', fontWeight: '500' }}>
              Every programme we run is built on one principle: real outcomes over paper credentials. Students leave with international experience, verified letters, and a career story worth telling.
            </p>
          </div>
          <div style={{ height: '480px' }}>
            <img src="/images/collaborative_students.png" alt="Indian professional presenting to international team" className="img-cover" style={{ boxShadow: 'var(--shadow-lg)' }} />
          </div>
        </div>
      </section>

      {/* Massive Pull Quote */}
      <section className="py-32 animate-on-scroll" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, var(--deep-navy) 0%, #0a1128 100%)' }}>
         {/* Background Glow */}
         <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0 }}></div>
         
         <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
               {/* Massive decorative quote mark */}
               <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', fontSize: '240px', lineHeight: '1', fontFamily: 'Georgia, serif', color: 'rgba(255,255,255,0.03)', zIndex: -1, pointerEvents: 'none' }}>
                  "
               </div>
               
               <blockquote style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', fontWeight: '500', lineHeight: '1.4', margin: '0' }}>
                  <span className="text-gradient-light">"We don't just place students. We create the infrastructure that makes international experience accessible to any merit-worthy student in India - regardless of institution tier or geography."</span>
               </blockquote>
               
               <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
                  <div style={{ height: '1px', width: '60px', background: 'rgba(255,255,255,0.2)' }}></div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '700' }}>The Touchmark Philosophy</div>
                  <div style={{ height: '1px', width: '60px', background: 'rgba(255,255,255,0.2)' }}></div>
               </div>
            </div>
         </div>
      </section>

      {/* Core Infrastructure - Bento Box Layout */}
      <section className="py-24 bg-mesh-light animate-on-scroll">
         <div className="container">
            <div className="text-center mb-16">
               <div className="badge badge-outline mb-4">Core Infrastructure</div>
               <h2 className="text-gradient-blue" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>The Foundation of Global Delivery</h2>
               <p style={{ fontSize: '1.125rem', color: 'var(--slate-text)', maxWidth: '700px', margin: '0 auto' }}>
                 We built the required operational framework from the ground up so that neither the student nor the company has to worry about logistics.
               </p>
            </div>
            
            <div className="bento-grid">
               {/* Large Card 2x2 */}
               <div className="bento-card bento-large">
                  <Globe2 size={320} className="bento-icon-bg" style={{ color: 'var(--royal-blue)' }} />
                  <div style={{ position: 'relative', zIndex: 2 }}>
                     <div className="badge mb-4" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 16px' }}>Global Reach</div>
                     <h3 style={{ fontSize: '2.5rem', marginBottom: '16px', lineHeight: '1.1', color: 'var(--white)' }}>Global Company Network</h3>
                     <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '400px' }}>
                       Active partnerships with 25+ companies across Singapore, Dubai, Mauritius, Japan and growing. We source the best opportunities directly from the source.
                     </p>
                  </div>
               </div>
               
               {/* Wide Card 2x1 */}
               <div className="bento-card bento-wide">
                  <Trophy size={160} className="bento-icon-bg" style={{ color: 'var(--white)' }} />
                  <div style={{ position: 'relative', zIndex: 2 }}>
                     <h3 style={{ fontSize: '1.75rem', marginBottom: '12px', color: 'var(--white)' }}>Merit-First Selection</h3>
                     <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', maxWidth: '300px' }}>
                       Every student is assessed purely on ability and role fit. No contacts required.
                     </p>
                  </div>
               </div>
               
               {/* Square 1x1 */}
               <div className="bento-card bento-square">
                  <Building2 size={48} color="var(--royal-blue)" style={{ marginBottom: '24px' }} />
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--deep-navy)' }}>Institution Partnerships</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--slate-text)' }}>Formal collaborations with colleges across India.</p>
               </div>
               
               {/* Square 1x1 */}
               <div className="bento-card bento-square">
                  <FileBadge size={48} color="var(--royal-blue)" style={{ marginBottom: '24px' }} />
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--deep-navy)' }}>Verified Outcomes</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--slate-text)' }}>Official international completion letters on successful delivery.</p>
               </div>
               
               {/* Full Width 4x1 */}
               <div className="bento-card bento-full" style={{ background: 'linear-gradient(90deg, var(--deep-navy) 0%, #1e293b 100%)', color: 'var(--white)', border: 'none', padding: '0', gap: '0', alignItems: 'stretch' }}>
                  <div className="bento-content-pad" style={{ flex: '1', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                     <div className="badge mb-4" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 16px' }}>Operations</div>
                     <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--white)' }}>Structured Programme Delivery</h3>
                     <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '500px' }}>
                       Dedicated Touchmark representatives manage every cohort from onboarding, to weekly progress checks, to completion sign-off.
                     </p>
                  </div>
                  <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', alignItems: 'stretch', position: 'relative', overflow: 'hidden' }}>
                     {/* Abstract decorative graphic */}
                     <div style={{ position: 'absolute', right: '-10%', top: '-50%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37,99,235,0.5) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }}></div>
                     
                     <div className="bento-content-pad" style={{ background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(20px)', borderLeft: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--royal-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(37, 99, 235, 0.3)' }}>
                            <ClipboardList size={24} color="var(--white)" />
                          </div>
                          <div style={{ fontWeight: '700', fontSize: '1.25rem', color: 'var(--white)', lineHeight: '1.2' }}>End-to-End <br/> Cohort Management</div>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                            <CheckCircle2 size={18} color="var(--emerald-green)" /> Onboarding Verification
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                            <CheckCircle2 size={18} color="var(--emerald-green)" /> Mid-Point Health Checks
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                            <CheckCircle2 size={18} color="var(--emerald-green)" /> Final Delivery Sign-off
                          </div>
                        </div>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </section>

      {/* Our Programmes */}
      <section className="py-24 animate-on-scroll">
        <div className="container">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="badge badge-outline mb-4">Our Programmes</div>
            <h2 className="text-gradient-blue" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Initiatives Under Touchmark Concourse Centre</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--slate-text)', maxWidth: '800px', margin: '0 auto' }}>
              We run multiple structured programmes across talent development, innovation, and global exposure - each designed to create real, measurable outcomes for students, institutions, and companies.
            </p>
          </div>
          
          {/* Hero Bento Section - 50/50 Split for balanced heights on all screens */}
          <div className="grid-2 mb-8">
            {/* Left Column: CGIP - 50% width on desktop */}
            <div className="card-flagship animate-on-scroll delay-100" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 58, 138, 0.95) 100%), url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', justifyContent: 'center', gap: '32px' }}>
              <div>
                <div className="badge mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 16px' }}>Flagship</div>
                <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--white)' }}>Concourse Global Internship Programme</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem', marginBottom: '24px', maxWidth: '600px' }}>
                  Our flagship initiative. Merit-selected Indian engineering students placed in remote international internships with companies across the globe. 6-8 weeks. Real projects. Verified letter.
                </p>
                
                {/* Visual filler to remove empty space */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <span style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: '30px', padding: '6px 16px', color: 'white', background: 'rgba(255,255,255,0.05)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src="https://flagcdn.com/w20/sg.png" width="16" alt="Singapore flag" style={{ borderRadius: '2px' }} /> Singapore
                  </span>
                  <span style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: '30px', padding: '6px 16px', color: 'white', background: 'rgba(255,255,255,0.05)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src="https://flagcdn.com/w20/ae.png" width="16" alt="Dubai flag" style={{ borderRadius: '2px' }} /> Dubai, UAE
                  </span>
                  <span style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: '30px', padding: '6px 16px', color: 'white', background: 'rgba(255,255,255,0.05)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src="https://flagcdn.com/w20/mu.png" width="16" alt="Mauritius flag" style={{ borderRadius: '2px' }} /> Mauritius
                  </span>
                  <span style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: '30px', padding: '6px 16px', color: 'white', background: 'rgba(255,255,255,0.05)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src="https://flagcdn.com/w20/jp.png" width="16" alt="Japan flag" style={{ borderRadius: '2px' }} /> Japan
                  </span>
                </div>
              </div>
              <div className="flagship-action" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px' }}>
                 <Link to="/cgip" className="btn btn-primary" style={{ backgroundColor: 'var(--white)', color: 'var(--deep-navy)' }}>View Programme Details <ArrowRight size={18} className="btn-icon" /></Link>
                 <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--emerald-green)', fontWeight: '700', marginBottom: '4px' }}>● Active</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>Accepting Applications</div>
                 </div>
              </div>
            </div>
            
            {/* Right Column: 2 Featured Programmes - 50% width on desktop */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Institution Partnership */}
              <div className="card-editorial glass-card animate-on-scroll delay-200" style={{ borderColor: 'var(--royal-blue)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="icon-box"><Handshake size={24} /></div>
                <div className="badge badge-outline mb-4" style={{ alignSelf: 'flex-start' }}>Open for MOUs</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Concourse Institution Partnership Programme</h3>
                <p style={{ color: 'var(--slate-text)', fontSize: '0.95rem', flexGrow: 1, marginBottom: '24px' }}>
                  A formal MOU-based partnership framework for colleges and universities to integrate Touchmark Concourse Centre programmes into their placement and industry connect ecosystem.
                </p>
                <Link to="/institutions" style={{ fontWeight: '600', color: 'var(--royal-blue)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Partner with us <ArrowRight size={16} /></Link>
              </div>

              {/* Venture Sprint */}
              <div className="card-editorial glass-card animate-on-scroll delay-300" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                   <div className="icon-box" style={{ marginBottom: 0 }}><Rocket size={24}/></div>
                   <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--slate-text)', textTransform: 'uppercase', background: 'var(--sky-blue)', padding: '4px 8px', borderRadius: '4px' }}>Coming Soon - 2025</span>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--royal-blue)', textTransform: 'uppercase', marginBottom: '8px' }}>Innovation</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Concourse Venture Sprint Programme</h3>
                <p style={{ color: 'var(--slate-text)', fontSize: '0.95rem', flexGrow: 1 }}>
                  A venture studio-style sprint programme where select student teams work on real startup and innovation challenges from global companies. Designed around rapid prototype delivery and entrepreneurial thinking.
                </p>
              </div>
            </div>
          </div>

          {/* Remaining 3 Programmes in a perfect 3-column row */}
          <div className="grid-3 mb-12">
            {[
              { icon: <Microscope size={24}/>, type: 'Research', status: 'Upcoming', title: 'Concourse Research Fellowship', desc: 'A structured research collaboration programme connecting final-year and postgraduate students with international companies and research teams for applied research, technical documentation, and knowledge asset creation.' },
              { icon: <Factory size={24}/>, type: 'Industry', status: 'Upcoming', title: 'Concourse Industry Immersion Programme', desc: 'Short-format industry exposure programme where students spend focused time with global company teams - attending live business meetings, observing real operations, and building professional network exposure before graduation.' },
              { icon: <GraduationCap size={24}/>, type: 'Skilling', status: 'Upcoming', title: 'Concourse Global Skills Certification', desc: 'A skills validation and certification programme co-designed with international companies. Students are assessed and certified on in-demand global skills - creating industry-endorsed credentials that complement academic qualifications.' }
            ].map((prog, i) => (
              <div key={i} className="card-editorial glass-card animate-on-scroll" style={{ transitionDelay: `${(i % 3 + 1) * 100}ms`, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                   <div className="icon-box" style={{ marginBottom: 0 }}>{prog.icon}</div>
                   <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--slate-text)', textTransform: 'uppercase', background: 'var(--sky-blue)', padding: '4px 8px', borderRadius: '4px' }}>{prog.status}</span>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--royal-blue)', textTransform: 'uppercase', marginBottom: '8px' }}>{prog.type}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{prog.title}</h3>
                <p style={{ color: 'var(--slate-text)', fontSize: '0.95rem', flexGrow: 1 }}>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Programme Details */}
      <section className="py-24 animate-on-scroll bg-mesh-light" style={{ borderTop: '1px solid var(--soft-grey)' }}>
        <div className="container grid-2">
           <div className="animate-on-scroll delay-100">
              <div className="badge badge-outline mb-4">Flagship Programme</div>
              <h2 className="text-gradient-blue" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Concourse Global Internship Programme</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--slate-text)', marginBottom: '32px' }}>
                Your first international work experience - before you graduate. Merit-selected. Internationally placed. 100% remote.
              </p>
              
              <div className="glass-card" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                 <div style={{ background: 'var(--deep-navy)', color: 'var(--white)', padding: '20px 24px', fontWeight: '800', fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ClipboardList size={24} /> Programme Details
                 </div>
                 <div style={{ padding: '0 24px' }}>
                    {[
                      { icon: <Globe2 size={18}/>, label: 'Mode', value: '100% Remote' },
                      { icon: <ClipboardList size={18}/>, label: 'Duration', value: '6 - 8 Weeks' },
                      { icon: <Building2 size={18}/>, label: 'Working Hours', value: 'Host Company Timezone' },
                      { icon: <GraduationCap size={18}/>, label: 'Eligibility', value: '3rd / Final Year Engg & Tech' },
                      { icon: <Trophy size={18}/>, label: 'Selection', value: 'Merit-Based Assessment' },
                      { icon: <Rocket size={18}/>, label: 'Stipend', value: 'Experiential (Not Paid)' },
                      { icon: <FileBadge size={18}/>, label: 'Completion', value: 'International Letter' },
                      { icon: <Handshake size={18}/>, label: 'Support', value: 'Dedicated Representative' }
                    ].map((row, i) => (
                       <div key={i} style={{ display: 'flex', alignItems: 'center', py: '12px', borderBottom: i !== 7 ? '1px solid var(--soft-grey)' : 'none', padding: '16px 0' }}>
                          <div style={{ width: '45%', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '600', color: 'var(--slate-text)', fontSize: '0.95rem' }}>
                            <div style={{ color: 'var(--royal-blue)' }}>{row.icon}</div>
                            {row.label}
                          </div>
                          <div style={{ width: '55%', fontWeight: '700', color: 'var(--deep-navy)', fontSize: '0.95rem' }}>{row.value}</div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
           
           <div className="animate-on-scroll delay-200" style={{ marginTop: '48px' }}>
              <h3 className="text-gradient-blue" style={{ fontSize: '1.5rem', marginBottom: '32px' }}>The Process</h3>
              <div>
                 {[
                   { step: '1', title: 'Opportunity Released', desc: 'Touchmark publishes openings from partner companies with full role details, country, and timezone.' },
                   { step: '2', title: 'You Apply', desc: "Submit your profile through Touchmark's portal. Institutions can refer students directly." },
                   { step: '3', title: 'Merit Assessment', desc: 'Touchmark conducts role-specific assessments. Selection is purely on merit and role fit.' },
                   { step: '4', title: 'Get Selected', desc: 'Selected students receive an official international internship offer with onboarding details.' },
                   { step: '5', title: 'Internship Begins', desc: 'Work remotely with your global company for 6-8 weeks on a real project with a company supervisor.' },
                   { step: '6', title: 'Completion Letter Issued', desc: 'Official international internship completion letter issued - verified, credible, career-defining.' }
                 ].map((item, i) => (
                    <div key={i} className="timeline-step">
                       <div className="timeline-number">{item.step}</div>
                       <div style={{ paddingTop: '8px' }}>
                          <h4 style={{ fontSize: '1.125rem', marginBottom: '4px', color: 'var(--deep-navy)' }}>{item.title}</h4>
                          <p style={{ color: 'var(--slate-text)', fontSize: '0.95rem' }}>{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
              <div className="mt-8">
                 <Link to="/apply" className="btn btn-primary glow-primary">Apply / Enquire Now <ArrowRight size={18} className="btn-icon" /></Link>
              </div>
           </div>
        </div>
      </section>

      {/* Our Difference */}
      <section className="py-24 bg-mesh-light animate-on-scroll">
        <div className="container">
           <div className="text-center mb-16 animate-on-scroll delay-100">
              <div className="badge badge-outline mb-4">Our Difference</div>
              <h2 className="text-gradient-blue" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Why Touchmark Concourse Centre</h2>
                  <p style={{ fontSize: '1.125rem', color: 'var(--slate-text)', maxWidth: '700px', margin: '0 auto' }}>
                We are not a placement agency. We are a programme operator - which means we design, deliver, and quality-control every internship we run.
              </p>
           </div>
           
           <div className="grid-3" style={{ gap: '32px' }}>
              {[
                { step: '01', title: 'Merit is Non-Negotiable', desc: "Every student who joins a Touchmark programme is assessed and selected purely on ability and role fit. We don't place based on relationships, convenience, or volume targets. This protects the quality of every cohort - and the credibility of the letter a student receives at the end." },
                { step: '02', title: 'Real Companies, Real Work', desc: 'Our partner companies provide actual project briefs, designated supervisors, and genuine working environments. Students are not given fabricated tasks. They work on live company projects - the same work their full-time colleagues are doing.' },
                { step: '03', title: 'Touchmark Manages the Bridge', desc: 'A dedicated Touchmark representative manages communication between the student and the host company throughout the programme - from onboarding verification to midpoint health checks to completion sign-off. Students are never left without support.' },
                { step: '04', title: 'Structured Programme Design', desc: 'Every initiative is built as a programme - not improvised. Clear timelines, defined deliverables, structured governance, and quality checkpoints ensure that each cohort runs consistently regardless of which company or country is involved.' },
                { step: '05', title: 'Growing Global Network', desc: 'We currently work with 25+ companies across Singapore, Dubai, Mauritius and Japan - and we are actively expanding. Students and institutions joining now gain access to a network that will only grow larger and more diverse over time.' },
                { step: '06', title: 'Built for India\'s Scale', desc: 'We partner with institutions across India to ensure that international opportunity is not limited to students in metro cities or elite institutions. Any merit-worthy student from any partnered institution has equal access to our programmes.' }
              ].map((item, i) => (
                 <div key={i} className="bento-card hover-lift animate-on-scroll" style={{ padding: '40px', background: 'var(--white)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transitionDelay: `${(i % 3) * 100}ms` }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--royal-blue)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '24px' }}>
                      {item.step}
                    </div>
                    <h4 style={{ fontSize: '1.35rem', marginBottom: '16px', color: 'var(--text-main)', fontWeight: '600', letterSpacing: '-0.01em' }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-light)', lineHeight: '1.7', fontSize: '1rem' }}>{item.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* For Institutions (Full Bleed Background) */}
      <section className="py-32 bg-overlay-navy" style={{ backgroundImage: 'url(/images/institutions_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
         <div className="container">
            <div style={{ maxWidth: '600px' }}>
               <div className="badge mb-4" style={{ background: 'var(--white)', color: 'var(--deep-navy)' }}>For Institutions</div>
               <h3 style={{ fontSize: '3rem', marginBottom: '24px', lineHeight: '1.1' }}>Partner With Us to Give Your Students a Global Edge</h3>
               <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', fontSize: '1.125rem' }}>
                 We work directly with colleges and universities through a formal MOU framework - integrating Touchmark Concourse Centre programmes into your institution's placement and industry connect ecosystem.
               </p>
               <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                 <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--emerald-green)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span><strong>International Internship Access:</strong> Give students access to verified remote opportunities across 4+ countries.</span></li>
                 <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--emerald-green)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span><strong>Merit-Based, Credible Placement:</strong> Every placement is merit-selected and internationally verified.</span></li>
                 <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--emerald-green)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span><strong>Formal MOU Framework:</strong> Clean, one-page MOU establishes collaboration with no complex overhead.</span></li>
               </ul>
               <Link to="/institutions" className="btn btn-white">Request Institution Partnership <ArrowRight size={18} className="btn-icon" /></Link>
            </div>
         </div>
      </section>

      {/* For Companies (Full Bleed Background) */}
      <section className="py-32 bg-overlay-navy" style={{ backgroundImage: 'url(/images/corporate_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
         <div className="container">
            <div style={{ maxWidth: '600px', marginLeft: 'auto' }}>
               <div className="badge badge-solid mb-4">For Companies</div>
               <h3 style={{ fontSize: '3rem', marginBottom: '24px', lineHeight: '1.1' }}>Host International Interns.<br/>Zero Cost. Real Output.</h3>
               <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', fontSize: '1.125rem' }}>
                 We handle everything - sourcing, assessment, matching, and programme management. You provide the project and supervisor. We handle the rest.
               </p>
               <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                 <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--royal-blue)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span><strong>Pre-Screened Talent:</strong> Interns are assessed and matched specifically to your role requirements.</span></li>
                 <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--royal-blue)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span><strong>Zero Cost to You:</strong> No stipend, no recruitment fee, no administrative burden.</span></li>
                 <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><CheckCircle2 size={24} color="var(--royal-blue)" style={{ flexShrink: 0, marginTop: '2px' }} /> <span><strong>Project Acceleration:</strong> Get non-core workstreams delivered through motivated international interns.</span></li>
               </ul>
               <Link to="/companies" className="btn btn-primary">Register Your Company as a Partner <ArrowRight size={18} className="btn-icon" /></Link>
            </div>
         </div>
      </section>

      {/* Get In Touch - Premium Dark CTA */}
      <section className="py-32 text-center" style={{ background: 'linear-gradient(135deg, var(--deep-navy) 0%, #1e3a8a 100%)', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
         <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '24px', color: 'var(--white)' }}>Ready to bridge the gap?</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--soft-grey)', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
              Whether you are a student looking for an opportunity, an institution looking to partner, or a company seeking global talent.
            </p>
            <Link to="/apply" className="btn btn-primary glow-primary" style={{ padding: '16px 36px', fontSize: '1.05rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              Start the Conversation <ArrowRight size={20} className="btn-icon" />
            </Link>
            <p style={{ marginTop: '24px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)' }}>Your information is kept strictly confidential.</p>
         </div>
      </section>
    </main>
  );
};

export default Home;
