import React, { useEffect } from 'react';
import { Lock } from 'lucide-react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--white)' }}>
      {/* Hero Section */}
      <section style={{ paddingTop: '136px', paddingBottom: '40px', position: 'relative', overflow: 'hidden', background: 'var(--deep-navy)', color: 'white' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <span className="badge" style={{ display: 'inline-flex', marginBottom: '24px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Lock size={16} /> <span>Privacy</span>
            </span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-0.03em', fontWeight: '800', color: 'white' }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)' }}>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-color)', lineHeight: '1.8' }}>
            
            <p style={{ fontSize: '1.1rem', marginBottom: '32px' }}>
              At Touchmark Concourse Centre, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, apply for our internship programs, or utilize our institutional partnership services.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>1. Information We Collect</h3>
            <p style={{ marginBottom: '16px' }}>
              We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the site (such as applying for an internship), or otherwise when you contact us.
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><strong>Personal Data:</strong> Names, email addresses, phone numbers, academic transcripts, resumes/CVs, and institutional affiliations.</li>
              <li><strong>Usage Data:</strong> Information automatically collected when you access the site, such as your IP address, browser type, operating system, and browsing behavior.</li>
            </ul>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>2. How We Use Your Information</h3>
            <p style={{ marginBottom: '16px' }}>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>Process your internship applications and match you with global host companies.</li>
              <li>Communicate with you regarding placement status, interviews, and onboarding.</li>
              <li>Establish and manage institutional MOUs and partnerships.</li>
              <li>Improve our website, services, and overall user experience.</li>
              <li>Ensure compliance with legal obligations and organizational policies.</li>
            </ul>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>3. Disclosure of Your Information</h3>
            <p style={{ marginBottom: '16px' }}>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><strong>Host Companies:</strong> We share necessary student profile data (e.g., resumes, portfolios) with prospective global companies strictly for the purpose of internship placement and evaluation.</li>
              <li><strong>Educational Institutions:</strong> We may share application status and placement metrics with your respective university placement cells as part of our institutional tracking framework.</li>
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
            </ul>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>4. Security of Your Information</h3>
            <p style={{ marginBottom: '16px' }}>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>5. Policy for Minors</h3>
            <p style={{ marginBottom: '16px' }}>
              We do not knowingly solicit information from or market to children under the age of 18. Our services are directed toward university students and educational institutions. If you become aware of any data we have collected from children under age 18, please contact us immediately.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>6. Updates to This Policy</h3>
            <p style={{ marginBottom: '16px' }}>
              We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page.
            </p>

            <div style={{ marginTop: '64px', padding: '32px', background: 'var(--bg-light)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '12px' }}>Contact Us</h4>
              <p style={{ margin: 0 }}>
                If you have any questions or comments about this Privacy Policy, please contact our Data Protection Officer at <a href="mailto:privacy@touchmarkdescience.com" style={{ color: 'var(--royal-blue)', fontWeight: '600' }}>privacy@touchmarkdescience.com</a>.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Privacy;
