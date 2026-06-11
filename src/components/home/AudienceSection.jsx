import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const AudienceSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-cloud-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-10 lg:p-16 border border-soft-border shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-extrabold text-3xl lg:text-4xl text-midnight-navy mb-6">For Institutions</h3>
              <p className="text-slate-text text-lg mb-8 leading-relaxed">
                Partner with us to provide your students with structured access to international remote internships. Enhance your placement metrics and global academic standing.
              </p>
              <ul className="flex flex-col gap-4 mb-10">
                <li className="flex items-center gap-3 text-midnight-navy font-semibold">
                  <span className="w-2 h-2 rounded-full bg-electric-blue"></span>
                  Formal MOU framework
                </li>
                <li className="flex items-center gap-3 text-midnight-navy font-semibold">
                  <span className="w-2 h-2 rounded-full bg-electric-blue"></span>
                  Dedicated support cell
                </li>
                <li className="flex items-center gap-3 text-midnight-navy font-semibold">
                  <span className="w-2 h-2 rounded-full bg-electric-blue"></span>
                  Verified outcome tracking
                </li>
              </ul>
            </div>
            <Link to="/institutions" className="mt-auto inline-block">
              <Button variant="secondary" size="lg" className="w-full">Request Institution Partnership</Button>
            </Link>
          </div>

          <div className="bg-midnight-navy text-white rounded-3xl p-10 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10">
              <h3 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-6">For Companies</h3>
              <p className="text-cloud-white opacity-80 text-lg mb-8 leading-relaxed">
                Access high-calibre, pre-screened technical and management talent from India. Host remote interns to drive your business initiatives at zero recruitment cost.
              </p>
              <ul className="flex flex-col gap-4 mb-10">
                <li className="flex items-center gap-3 text-white font-semibold">
                  <span className="w-2 h-2 rounded-full bg-prestige-gold"></span>
                  Zero-cost intern hosting
                </li>
                <li className="flex items-center gap-3 text-white font-semibold">
                  <span className="w-2 h-2 rounded-full bg-prestige-gold"></span>
                  Pre-vetted merit candidates
                </li>
                <li className="flex items-center gap-3 text-white font-semibold">
                  <span className="w-2 h-2 rounded-full bg-prestige-gold"></span>
                  End-to-end management by Touchmark
                </li>
              </ul>
            </div>
            <Link to="/companies" className="relative z-10 mt-auto inline-block">
              <Button variant="primary" size="lg" className="w-full shadow-lg shadow-electric-blue/20 border-0">Register Your Company</Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
