import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight-navy text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-extrabold text-2xl leading-tight text-white">Touchmark<br/>Concourse Centre</h3>
            <p className="text-cloud-white opacity-80 text-sm leading-relaxed max-w-xs">
              India’s Global Talent Bridge. Connecting merit-worthy students and professionals with global opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-electric-blue uppercase tracking-wider text-sm mb-2">Programmes</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/programmes/cgip" className="text-cloud-white opacity-80 hover:opacity-100 hover:text-electric-blue transition-colors text-sm">Global Internship Programme</Link></li>
              <li><Link to="/programmes" className="text-cloud-white opacity-80 hover:opacity-100 hover:text-electric-blue transition-colors text-sm">Venture Sprint</Link></li>
              <li><Link to="/programmes" className="text-cloud-white opacity-80 hover:opacity-100 hover:text-electric-blue transition-colors text-sm">Research Fellowship</Link></li>
              <li><Link to="/programmes" className="text-cloud-white opacity-80 hover:opacity-100 hover:text-electric-blue transition-colors text-sm">Industry Immersion</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-electric-blue uppercase tracking-wider text-sm mb-2">Who We Serve</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/students" className="text-cloud-white opacity-80 hover:opacity-100 hover:text-electric-blue transition-colors text-sm">For Students</Link></li>
              <li><Link to="/institutions" className="text-cloud-white opacity-80 hover:opacity-100 hover:text-electric-blue transition-colors text-sm">For Institutions</Link></li>
              <li><Link to="/companies" className="text-cloud-white opacity-80 hover:opacity-100 hover:text-electric-blue transition-colors text-sm">For Companies</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-electric-blue uppercase tracking-wider text-sm mb-2">Legal & Contact</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/contact" className="text-cloud-white opacity-80 hover:opacity-100 hover:text-electric-blue transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-cloud-white opacity-80 hover:opacity-100 hover:text-electric-blue transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="text-cloud-white opacity-80 hover:opacity-100 hover:text-electric-blue transition-colors text-sm">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cloud-white opacity-60 text-xs text-center md:text-left">
            &copy; {currentYear} Touchmark Descience Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Placeholder for social icons */}
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cloud-white opacity-60 hover:opacity-100 hover:bg-electric-blue hover:border-electric-blue transition-all cursor-pointer">
              <span className="text-xs font-bold">in</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cloud-white opacity-60 hover:opacity-100 hover:bg-electric-blue hover:border-electric-blue transition-all cursor-pointer">
              <span className="text-xs font-bold">X</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
