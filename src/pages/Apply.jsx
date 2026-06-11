import React from 'react';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';

const Apply = () => {
  return (
    <div className="bg-cloud-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Left Side (Dark) */}
        <div className="bg-midnight-navy text-white relative overflow-hidden py-20 px-8 lg:px-20 flex flex-col justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,128,237,0.1)_0,transparent_50%)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-electric-blue/10 to-transparent"></div>
          
          <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
            <div className="inline-block px-4 py-2 bg-prestige-gold/20 rounded-full mb-6 border border-prestige-gold/30">
              <span className="text-prestige-gold font-bold tracking-wider uppercase text-sm">CGIP Admissions Open</span>
            </div>
            <h1 className="font-heading font-extrabold text-5xl lg:text-7xl text-white mb-6">Apply for CGIP.</h1>
            <p className="text-cloud-white opacity-80 text-xl leading-relaxed mb-10">
              Take the first step towards a global career. Please ensure you meet the <span className="text-prestige-gold font-bold">eligibility criteria</span> before applying.
            </p>
            
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="font-bold text-electric-blue uppercase tracking-wider text-sm mb-6">Eligibility Checklist</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-cloud-white opacity-90">
                  <Check className="text-verified-emerald flex-shrink-0" size={20} />
                  <span>Final or Pre-final year standing</span>
                </li>
                <li className="flex items-center gap-3 text-cloud-white opacity-90">
                  <Check className="text-verified-emerald flex-shrink-0" size={20} />
                  <span>Minimum 60% aggregate or equivalent CGPA</span>
                </li>
                <li className="flex items-center gap-3 text-cloud-white opacity-90">
                  <Check className="text-verified-emerald flex-shrink-0" size={20} />
                  <span>Clear disciplinary record</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side (Light Form) */}
        <div className="bg-white py-20 px-8 lg:px-20 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-midnight-navy mb-10">Application Form</h2>
            
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="font-bold text-slate-text text-sm uppercase tracking-wider">Full Name</label>
                  <input type="text" id="fullName" className="w-full bg-transparent border-b-2 border-soft-border py-2 text-midnight-navy focus:outline-none focus:border-electric-blue transition-colors placeholder:text-slate-text/30" placeholder="As per official documents" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-bold text-slate-text text-sm uppercase tracking-wider">Email Address</label>
                  <input type="email" id="email" className="w-full bg-transparent border-b-2 border-soft-border py-2 text-midnight-navy focus:outline-none focus:border-electric-blue transition-colors placeholder:text-slate-text/30" placeholder="University email preferred" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-bold text-slate-text text-sm uppercase tracking-wider">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-transparent border-b-2 border-soft-border py-2 text-midnight-navy focus:outline-none focus:border-electric-blue transition-colors placeholder:text-slate-text/30" placeholder="+91" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="college" className="font-bold text-slate-text text-sm uppercase tracking-wider">College / University</label>
                  <input type="text" id="college" className="w-full bg-transparent border-b-2 border-soft-border py-2 text-midnight-navy focus:outline-none focus:border-electric-blue transition-colors placeholder:text-slate-text/30" placeholder="Institution name" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="degree" className="font-bold text-slate-text text-sm uppercase tracking-wider">Degree</label>
                  <input type="text" id="degree" className="w-full bg-transparent border-b-2 border-soft-border py-2 text-midnight-navy focus:outline-none focus:border-electric-blue transition-colors placeholder:text-slate-text/30" placeholder="e.g. B.Tech CS" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cgpa" className="font-bold text-slate-text text-sm uppercase tracking-wider">Current CGPA</label>
                  <input type="text" id="cgpa" className="w-full bg-transparent border-b-2 border-soft-border py-2 text-midnight-navy focus:outline-none focus:border-electric-blue transition-colors placeholder:text-slate-text/30" placeholder="e.g. 8.5" required />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="resume" className="font-bold text-slate-text text-sm uppercase tracking-wider">Resume / Portfolio Link</label>
                <input type="url" id="resume" className="w-full bg-transparent border-b-2 border-soft-border py-2 text-midnight-navy focus:outline-none focus:border-electric-blue transition-colors placeholder:text-slate-text/30" placeholder="Google Drive / Notion URL" required />
              </div>

              <div className="flex items-start gap-4 mt-6 p-6 rounded-xl bg-electric-blue/5 border border-electric-blue/10">
                <input type="checkbox" id="meritConfirm" className="mt-1 w-5 h-5 rounded border-soft-border text-electric-blue focus:ring-electric-blue" required />
                <label htmlFor="meritConfirm" className="text-sm leading-relaxed text-slate-text opacity-90">
                  <span className="font-bold text-midnight-navy block mb-1">Merit Confirmation</span>
                  I understand this programme is entirely merit-based. I confirm all information provided is accurate and verifiable.
                </label>
              </div>

              <div className="mt-4">
                <Button variant="primary" size="lg" className="w-full py-4 text-lg shadow-lg shadow-electric-blue/20" type="submit">Submit Application</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
