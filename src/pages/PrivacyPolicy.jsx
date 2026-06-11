import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="section-padding container max-w-4xl mx-auto">
      <h1 className="hero-title mb-8 text-center">Privacy Policy</h1>
      <div className="prose prose-lg">
        <p className="mb-4 text-sm opacity-80">Last Updated: October 2023</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Touchmark Concourse Centre. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">2. The Data We Collect About You</h2>
        <p className="mb-4">
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2"><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title, date of birth and gender.</li>
          <li className="mb-2"><strong>Contact Data</strong> includes email address and telephone numbers.</li>
          <li className="mb-2"><strong>Academic & Professional Data</strong> includes educational institution, degree, year of study, academic records, resumes, and professional experience.</li>
          <li className="mb-2"><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">3. How We Use Your Personal Data</h2>
        <p className="mb-4">
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">To process your application for our programmes (like CGIP).</li>
          <li className="mb-2">To match your profile with prospective global partner companies.</li>
          <li className="mb-2">To communicate with you regarding your application status or programme details.</li>
          <li className="mb-2">To comply with a legal or regulatory obligation.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4">4. Data Security</h2>
        <p className="mb-4">
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
