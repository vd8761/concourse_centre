import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import CountrySelect from '../components/CountrySelect';
import { countries } from '../utils/countries';
import HumanVerification from '../components/HumanVerification';

const Contact = () => {
  const [countryCode, setCountryCode] = useState('+91');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    company: '',
    programme: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState(null);

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
      
      <section style={{ padding: '60px 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 64px' }} className="animate-on-scroll">
            <span className="badge" style={{ display: 'inline-flex', marginBottom: '24px' }}>
              <MessageSquare size={16} /> <span>Get in Touch</span>
            </span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-0.03em' }}>
              Let's start a <span className="text-gradient-blue">conversation.</span>
            </h1>
            <p className="subtitle" style={{ fontSize: '1.25rem' }}>
              Have questions about our programmes or partnership opportunities? Our team is ready to help.
            </p>
          </div>

          <div className="grid-4-8" style={{ gap: '48px', alignItems: 'stretch' }}>
            
            {/* Contact Information Cards */}
            <div className="animate-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="bento-card" style={{ padding: '40px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--royal-blue)' }}>
                  <Mail size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Email Us</h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '16px', lineHeight: '1.5' }}>For general inquiries and partnership opportunities.</p>
                  <a href="mailto:hello@touchmarkconcourse.com" style={{ color: 'var(--royal-blue)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    hello@touchmarkconcourse.com <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="bento-card" style={{ padding: '40px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(37, 99, 235, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--royal-blue)' }}>
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Headquarters</h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                    Tamarai Tech Park<br/>
                    12, 16, Jawaharlal Nehru Salai, Guindy Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032
                  </p>
                </div>
              </div>
            </div>
            
            {/* Direct Message Form */}
            <div className="animate-on-scroll delay-100">
              <div className="bento-card" style={{ padding: '48px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {isSubmitted ? (
                  <div style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '400px' }}>
                    <div style={{ width: '80px', height: '80px', background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 style={{ fontSize: '2rem', color: 'var(--deep-navy)', marginBottom: '16px' }}>Enquiry Sent Successfully!</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '400px', lineHeight: '1.6', marginBottom: '32px' }}>
                      Thank you for reaching out to Concourse. We have received your message and our team will get back to you shortly.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="btn btn-primary glow-primary" style={{ border: 'none', cursor: 'pointer', padding: '12px 24px', borderRadius: '8px', fontWeight: '600' }}>
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '32px' }}>Send a Message</h3>
                  <form 
                    noValidate 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const newErrors = {};
                    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
                    if (!formData.email.trim()) newErrors.email = 'Email Address is required';
                    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
                    
                    const country = countries.find(c => c.code === countryCode);
                    const expectedLength = country ? country.length : 10;
                    
                    if (!formData.phone.trim()) {
                      newErrors.phone = 'Phone Number is required';
                    } else if (!new RegExp(`^[0-9]{${expectedLength}}$`).test(formData.phone)) {
                      newErrors.phone = `Phone number must be ${expectedLength} digits`;
                    }

                    if (!formData.role) newErrors.role = 'Please select your role';
                    if (!formData.company.trim()) newErrors.company = 'College / Company Name is required';
                    if (!formData.programme) newErrors.programme = 'Please select a programme of interest';
                    if (!formData.message.trim()) newErrors.message = 'Please provide a message';
                    
                    if (!turnstileToken) newErrors.verification = 'Please complete the human verification step';
                    
                    setErrors(newErrors);
                    
                    if (Object.keys(newErrors).length === 0) {
                      setIsSubmitting(true);
                      setSubmitError(null);
                      
                      fetch('/api/submit', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          formType: 'contact',
                          formData: { ...formData, phone: `${countryCode} ${formData.phone}` },
                          turnstileToken
                        })
                      })
                      .then(res => res.json())
                      .then(data => {
                        setIsSubmitting(false);
                        if (data.error) {
                          setSubmitError(data.error);
                        } else {
                          setIsSubmitted(true);
                          setFormData({ name: '', email: '', phone: '', role: '', company: '', programme: '', message: '' });
                          setTurnstileToken(null);
                        }
                      })
                      .catch(err => {
                        setIsSubmitting(false);
                        setSubmitError('Failed to send enquiry. Please try again later.');
                      });
                    }
                  }} 
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  {submitError && (
                    <div style={{ padding: '16px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)', marginBottom: '8px', fontWeight: '500' }}>
                      {submitError}
                    </div>
                  )}

                  <div className="grid-2" style={{ gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label">Full Name <span style={{ color: '#ef4444' }}>*</span></label>
                      <input type="text" placeholder="Your full name" className={`form-input ${errors.name ? 'input-error' : ''}`} value={formData.name} onChange={e => { setFormData({...formData, name: e.target.value}); if(errors.name) setErrors({...errors, name: null}) }} />
                      {errors.name && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address <span style={{ color: '#ef4444' }}>*</span></label>
                      <input type="email" placeholder="your@email.com" className={`form-input ${errors.email ? 'input-error' : ''}`} value={formData.email} onChange={e => { setFormData({...formData, email: e.target.value}); if(errors.email) setErrors({...errors, email: null}) }} />
                      {errors.email && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.email}</span>}
                    </div>
                  </div>
                  
                  <div className="grid-2" style={{ gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label">Phone Number <span style={{ color: '#ef4444' }}>*</span></label>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'stretch' }}>
                        <CountrySelect 
                          value={countryCode} 
                          onChange={(code) => {
                            setCountryCode(code);
                            if(errors.phone) setErrors({...errors, phone: null});
                            setFormData({...formData, phone: ''});
                          }} 
                        />
                        <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center' }}>
                          <input 
                            type="tel" 
                            placeholder={`${countries.find(c => c.code === countryCode)?.length || 10}-digit number`} 
                            className={`form-input ${errors.phone ? 'input-error' : ''}`} 
                            style={{ width: '100%', height: '52px', paddingRight: '60px' }}
                            maxLength={countries.find(c => c.code === countryCode)?.length || 15}
                            value={formData.phone}
                            onChange={e => {
                              const val = e.target.value.replace(/[^0-9]/g, '');
                              setFormData({...formData, phone: val});
                              if(errors.phone) setErrors({...errors, phone: null});
                            }}
                          />
                          <span style={{ 
                            position: 'absolute', 
                            right: '16px', 
                            fontSize: '0.85rem', 
                            color: 'var(--text-light)',
                            opacity: 0.7,
                            fontWeight: '400',
                            pointerEvents: 'none'
                          }}>
                            {formData.phone.length}/{countries.find(c => c.code === countryCode)?.length || 10}
                          </span>
                        </div>
                      </div>
                      {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">I am a... <span style={{ color: '#ef4444' }}>*</span></label>
                      <select className={`form-input ${errors.role ? 'input-error' : ''}`} value={formData.role} onChange={e => { setFormData({...formData, role: e.target.value}); if(errors.role) setErrors({...errors, role: null}) }}>
                        <option value="">Select your role</option>
                        <option>Student - Looking for International Internship</option>
                        <option>Institution - Placement / Training Officer</option>
                        <option>Company - Looking to Host Interns</option>
                        <option>Company - Looking to Partner on a Programme</option>
                        <option>Other</option>
                      </select>
                      {errors.role && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.role}</span>}
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label">College / Company Name <span style={{ color: '#ef4444' }}>*</span></label>
                      <input type="text" placeholder="Your college or company" className={`form-input ${errors.company ? 'input-error' : ''}`} value={formData.company} onChange={e => { setFormData({...formData, company: e.target.value}); if(errors.company) setErrors({...errors, company: null}) }} />
                      {errors.company && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.company}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Programme of Interest <span style={{ color: '#ef4444' }}>*</span></label>
                      <select className={`form-input ${errors.programme ? 'input-error' : ''}`} value={formData.programme} onChange={e => { setFormData({...formData, programme: e.target.value}); if(errors.programme) setErrors({...errors, programme: null}) }}>
                        <option value="">Select programme</option>
                        <option>Concourse Global Internship Programme (CGIP)</option>
                        <option>Concourse Venture Sprint Programme</option>
                        <option>Concourse Research Fellowship</option>
                        <option>Concourse Institution Partnership</option>
                        <option>General Enquiry</option>
                      </select>
                      {errors.programme && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.programme}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message <span style={{ color: '#ef4444' }}>*</span></label>
                    <textarea placeholder="Tell us a little about yourself, your institution, or what you're looking for. The more context you give, the better we can help." rows="4" className={`form-input ${errors.message ? 'input-error' : ''}`} style={{ resize: 'vertical' }} value={formData.message} onChange={e => { setFormData({...formData, message: e.target.value}); if(errors.message) setErrors({...errors, message: null}) }}></textarea>
                    {errors.message && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.message}</span>}
                  </div>
                  
                  <HumanVerification 
                    onChange={(token) => {
                      setTurnstileToken(token);
                      if (token && errors.verification) setErrors({...errors, verification: null});
                    }} 
                    error={errors.verification} 
                  />
                  
                  <div className="submit-row" style={{ marginTop: '16px' }}>
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary glow-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1, flexShrink: 0 }}>
                      {isSubmitting ? 'Sending...' : 'Submit Enquiry'} <ArrowRight size={18} />
                    </button>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
                      We respond within 2 business days.<br/>
                      Your information is kept strictly confidential.
                    </div>
                  </div>
                </form>
                </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
