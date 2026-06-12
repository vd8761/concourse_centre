import React, { useEffect } from 'react';
import { Shield } from 'lucide-react';

const Terms = () => {
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
              <Shield size={16} /> <span>Legal</span>
            </span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', letterSpacing: '-0.03em', fontWeight: '800', color: 'white' }}>
              Terms & Conditions
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
              Welcome to Touchmark Concourse Centre ("we," "our," or "us"). By accessing or using our platform, services, and website, you agree to comply with and be bound by the following Terms and Conditions. Please review them carefully.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>1. Acceptance of Terms</h3>
            <p style={{ marginBottom: '16px' }}>
              By accessing our website and utilizing our internship placement services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our services.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>2. Description of Service</h3>
            <p style={{ marginBottom: '16px' }}>
              Touchmark Concourse Centre acts as an intermediary, facilitating remote, international internships by matching pre-screened student candidates from partner educational institutions in India with global host companies. We provide placement coordination, administrative support, and MOU frameworks.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>3. User Responsibilities (Students & Institutions)</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><strong>Accuracy of Information:</strong> You must ensure that all information submitted during the application process, including academic records and resumes, is accurate and truthful.</li>
              <li><strong>Professional Conduct:</strong> Selected interns are expected to maintain the highest level of professional conduct, adhere to the host company's remote work guidelines, and meet all designated deadlines.</li>
              <li><strong>Institution Cooperation:</strong> Partner institutions agree to assist in verifying student credentials and coordinating internship schedules in alignment with the signed MOU.</li>
            </ul>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>4. Intellectual Property Rights</h3>
            <p style={{ marginBottom: '16px' }}>
              The content, organization, graphics, design, compilation, and other matters related to our website are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the website is strictly prohibited.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>5. Intern Compensation and Fees</h3>
            <p style={{ marginBottom: '16px' }}>
              Touchmark Concourse Centre operates a zero-cost model for host companies and partner institutions. However, stipends, compensation, or financial arrangements between the host company and the intern (if applicable) will be outlined in a separate, direct agreement. Touchmark does not guarantee financial compensation for all internships unless explicitly stated.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>6. Limitation of Liability</h3>
            <p style={{ marginBottom: '16px' }}>
              Touchmark Concourse Centre shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use our services, or resulting from unauthorized access to or alteration of your transmissions or data.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>7. Modification of Terms</h3>
            <p style={{ marginBottom: '16px' }}>
              We reserve the right to change, modify, or update these Terms and Conditions at any time without prior notice. Your continued use of the website and services following the posting of changes will mean that you accept and agree to the changes.
            </p>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '16px', marginTop: '48px' }}>8. Governing Law</h3>
            <p style={{ marginBottom: '16px' }}>
              These Terms and Conditions shall be treated as though they were executed and performed in India, and shall be governed by and construed in accordance with the laws of the Republic of India.
            </p>

            <div style={{ marginTop: '64px', padding: '32px', background: 'var(--bg-light)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--deep-navy)', marginBottom: '12px' }}>Contact Us</h4>
              <p style={{ margin: 0 }}>
                If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:legal@touchmarkdescience.com" style={{ color: 'var(--royal-blue)', fontWeight: '600' }}>legal@touchmarkdescience.com</a>.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Terms;
