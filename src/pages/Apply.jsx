import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, GraduationCap, Building2, Send } from 'lucide-react';
import HumanVerification from '../components/HumanVerification';

const Apply = () => {
  const [applicantType, setApplicantType] = useState('student'); // 'student' or 'company'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    institution: '',
    linkedin: '',
    companyName: '',
    role: ''
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
          <div className="grid-2" style={{ gap: '64px', alignItems: 'flex-start' }}>
            
            {/* Left Side: Context & Trust */}
            <div className="animate-on-scroll" style={{ position: 'sticky', top: '120px' }}>
              <h1 style={{ fontSize: '3rem', marginBottom: '24px', letterSpacing: '-0.03em' }}>
                Join the <br/> <span className="text-gradient-blue">Global Network.</span>
              </h1>
              <p className="subtitle" style={{ fontSize: '1.15rem', marginBottom: '40px' }}>
                Whether you're looking to accelerate your career or your company's projects, you're in the right place.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '8px' }}>
                    <CheckCircle2 size={24} color="var(--emerald-green)" style={{ flexShrink: 0 }} />
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>Merit-Based Selection</h4>
                  </div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '40px', margin: 0 }}>No placement fees, no bias. Just pure talent matching.</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '8px' }}>
                    <CheckCircle2 size={24} color="var(--emerald-green)" style={{ flexShrink: 0 }} />
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>Fast-Tracked Process</h4>
                  </div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '40px', margin: 0 }}>Hear back within 48 hours of submitting your application.</p>
                </div>
              </div>
            </div>
            
            {/* Right Side: The Form */}
            <div className="animate-on-scroll delay-100">
              <div className="bento-card" style={{ padding: '48px', background: 'var(--white)', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}>
                
                {/* Toggle */}
                <div className="toggle-container">
                  <button 
                    onClick={() => setApplicantType('student')}
                    className={`toggle-btn ${applicantType === 'student' ? 'active' : ''}`}>
                    <GraduationCap size={18} /> I'm a Student
                  </button>
                  <button 
                    onClick={() => setApplicantType('company')}
                    className={`toggle-btn ${applicantType === 'company' ? 'active' : ''}`}>
                    <Building2 size={18} /> I'm a Company
                  </button>
                </div>
                
                {/* Form Elements */}
                <form 
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    const newErrors = {};
                    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
                    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
                    if (!formData.email.trim()) newErrors.email = 'Email Address is required';
                    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
                    
                    if (applicantType === 'student') {
                      if (!formData.institution.trim()) newErrors.institution = 'Institution / College is required';
                      if (formData.linkedin && !/^https?:\/\//.test(formData.linkedin)) newErrors.linkedin = 'Please enter a valid URL (e.g. https://linkedin.com/in/...)';
                    } else {
                      if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
                      if (!formData.role.trim()) newErrors.role = 'Role / Title is required';
                    }

                    if (!turnstileToken) newErrors.verification = 'Please complete the human verification step';
                    
                    setErrors(newErrors);
                    
                    if (Object.keys(newErrors).length === 0) {
                      setIsSubmitting(true);
                      setSubmitError(null);
                      
                      fetch('/api/submit', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          formType: 'apply',
                          formData: { ...formData, applicantType },
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
                          setTimeout(() => setIsSubmitted(false), 5000);
                          setFormData({ firstName: '', lastName: '', email: '', institution: '', linkedin: '', companyName: '', role: '' });
                          setTurnstileToken(null);
                        }
                      })
                      .catch(err => {
                        setIsSubmitting(false);
                        setSubmitError('Failed to send application. Please try again later.');
                      });
                    }
                  }} 
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  {isSubmitted && (
                    <div style={{ padding: '16px', background: 'rgba(34, 197, 94, 0.1)', color: 'var(--emerald-green)', borderRadius: '8px', border: '1px solid rgba(34, 197, 94, 0.2)', marginBottom: '8px', fontWeight: '500' }}>
                      Thank you! Your application has been submitted successfully. We will get back to you within 48 hours.
                    </div>
                  )}
                  {submitError && (
                    <div style={{ padding: '16px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)', marginBottom: '8px', fontWeight: '500' }}>
                      {submitError}
                    </div>
                  )}

                  <div className="grid-2" style={{ gap: '20px' }}>
                    <div className="form-group">
                      <label className="form-label">First Name <span style={{ color: '#ef4444' }}>*</span></label>
                      <input type="text" placeholder="John" className={`form-input ${errors.firstName ? 'input-error' : ''}`} value={formData.firstName} onChange={e => { setFormData({...formData, firstName: e.target.value}); if(errors.firstName) setErrors({...errors, firstName: null}) }} />
                      {errors.firstName && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.firstName}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name <span style={{ color: '#ef4444' }}>*</span></label>
                      <input type="text" placeholder="Doe" className={`form-input ${errors.lastName ? 'input-error' : ''}`} value={formData.lastName} onChange={e => { setFormData({...formData, lastName: e.target.value}); if(errors.lastName) setErrors({...errors, lastName: null}) }} />
                      {errors.lastName && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.lastName}</span>}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Email Address <span style={{ color: '#ef4444' }}>*</span></label>
                    <input type="email" placeholder="john@example.com" className={`form-input ${errors.email ? 'input-error' : ''}`} value={formData.email} onChange={e => { setFormData({...formData, email: e.target.value}); if(errors.email) setErrors({...errors, email: null}) }} />
                    {errors.email && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.email}</span>}
                  </div>
                  
                  {applicantType === 'student' ? (
                    <>
                      <div className="form-group">
                        <label className="form-label">Institution / College <span style={{ color: '#ef4444' }}>*</span></label>
                        <input type="text" placeholder="Enter your college name" className={`form-input ${errors.institution ? 'input-error' : ''}`} value={formData.institution} onChange={e => { setFormData({...formData, institution: e.target.value}); if(errors.institution) setErrors({...errors, institution: null}) }} />
                        {errors.institution && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.institution}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label">LinkedIn Profile URL</label>
                        <input type="url" placeholder="https://linkedin.com/in/johndoe" className={`form-input ${errors.linkedin ? 'input-error' : ''}`} value={formData.linkedin} onChange={e => { setFormData({...formData, linkedin: e.target.value}); if(errors.linkedin) setErrors({...errors, linkedin: null}) }} />
                        {errors.linkedin && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.linkedin}</span>}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="form-group">
                        <label className="form-label">Company Name <span style={{ color: '#ef4444' }}>*</span></label>
                        <input type="text" placeholder="Enter your company name" className={`form-input ${errors.companyName ? 'input-error' : ''}`} value={formData.companyName} onChange={e => { setFormData({...formData, companyName: e.target.value}); if(errors.companyName) setErrors({...errors, companyName: null}) }} />
                        {errors.companyName && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.companyName}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label">Role / Title <span style={{ color: '#ef4444' }}>*</span></label>
                        <input type="text" placeholder="e.g. HR Manager, CTO" className={`form-input ${errors.role ? 'input-error' : ''}`} value={formData.role} onChange={e => { setFormData({...formData, role: e.target.value}); if(errors.role) setErrors({...errors, role: null}) }} />
                        {errors.role && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}>{errors.role}</span>}
                      </div>
                    </>
                  )}
                  
                  <HumanVerification 
                    onChange={(token) => {
                      setTurnstileToken(token);
                      if (token && errors.verification) setErrors({...errors, verification: null});
                    }} 
                    error={errors.verification} 
                  />

                  <button type="submit" disabled={isSubmitting} className="btn btn-primary glow-primary" style={{ marginTop: '16px', width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '1.05rem', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}>
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'} <ArrowRight size={18} />
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '8px' }}>
                    By submitting, you agree to our Privacy Policy.
                  </p>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Apply;
