import React, { useState } from 'react';
import Button from '../ui/Button';

const EnquirySection = () => {
  const [audience, setAudience] = useState('student');

  return (
    <section className="py-20 lg:py-32 bg-cloud-white border-t border-soft-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-midnight-navy mb-6">Begin Your Global Journey</h2>
            <p className="text-slate-text text-lg mb-10 max-w-md">
              Whether you are a student seeking international exposure, an institution aiming to elevate placements, or a company looking for elite talent, we are ready to partner with you.
            </p>

            <div className="flex flex-col gap-3">
              <button 
                onClick={() => setAudience('student')}
                className={`text-left px-6 py-4 rounded-xl border transition-all duration-300 font-bold ${audience === 'student' ? 'border-electric-blue bg-white text-electric-blue shadow-md' : 'border-transparent text-slate-text opacity-70 hover:opacity-100 hover:bg-white hover:border-soft-border'}`}
              >
                I am a Student / Professional
              </button>
              <button 
                onClick={() => setAudience('institution')}
                className={`text-left px-6 py-4 rounded-xl border transition-all duration-300 font-bold ${audience === 'institution' ? 'border-electric-blue bg-white text-electric-blue shadow-md' : 'border-transparent text-slate-text opacity-70 hover:opacity-100 hover:bg-white hover:border-soft-border'}`}
              >
                I represent an Educational Institution
              </button>
              <button 
                onClick={() => setAudience('company')}
                className={`text-left px-6 py-4 rounded-xl border transition-all duration-300 font-bold ${audience === 'company' ? 'border-electric-blue bg-white text-electric-blue shadow-md' : 'border-transparent text-slate-text opacity-70 hover:opacity-100 hover:bg-white hover:border-soft-border'}`}
              >
                I represent a Global Company
              </button>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-2xl border border-soft-border shadow-xl">
            <h3 className="text-2xl font-bold text-midnight-navy mb-8 border-b border-soft-border pb-4">
              {audience === 'student' && 'Student Application'}
              {audience === 'institution' && 'Institution Partnership Form'}
              {audience === 'company' && 'Company Registration'}
            </h3>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold text-slate-text uppercase tracking-widest mb-1">First Name</label>
                  <input type="text" className="w-full bg-transparent border-0 border-b-2 border-soft-border focus:ring-0 focus:border-electric-blue py-2 transition-colors outline-none text-midnight-navy placeholder:text-slate-text/30" placeholder="John" required/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-text uppercase tracking-widest mb-1">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-0 border-b-2 border-soft-border focus:ring-0 focus:border-electric-blue py-2 transition-colors outline-none text-midnight-navy placeholder:text-slate-text/30" placeholder="Doe" required/>
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-text uppercase tracking-widest mb-1">Email Address</label>
                <input type="email" className="w-full bg-transparent border-0 border-b-2 border-soft-border focus:ring-0 focus:border-electric-blue py-2 transition-colors outline-none text-midnight-navy placeholder:text-slate-text/30" placeholder="john.doe@example.com" required/>
              </div>

              {audience === 'student' && (
                <div>
                  <label className="block text-xs font-bold text-slate-text uppercase tracking-widest mb-1">University / College</label>
                  <input type="text" className="w-full bg-transparent border-0 border-b-2 border-soft-border focus:ring-0 focus:border-electric-blue py-2 transition-colors outline-none text-midnight-navy placeholder:text-slate-text/30" placeholder="Enter your institution name" required/>
                </div>
              )}

              {audience !== 'student' && (
                <div>
                  <label className="block text-xs font-bold text-slate-text uppercase tracking-widest mb-1">Organization Name</label>
                  <input type="text" className="w-full bg-transparent border-0 border-b-2 border-soft-border focus:ring-0 focus:border-electric-blue py-2 transition-colors outline-none text-midnight-navy placeholder:text-slate-text/30" placeholder="Enter organization name" required/>
                </div>
              )}

              <Button variant="primary" size="lg" className="w-full mt-4 shadow-lg shadow-electric-blue/20" type="submit">Submit Enquiry</Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
