import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

const ForInstitutionsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white border-t border-soft-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-electric-blue" size={24} />
              <span className="text-sm font-bold text-electric-blue uppercase tracking-widest">Academic Partnerships</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-midnight-navy mb-6">Elevate Your Institution's Global Footprint</h2>
            <p className="text-slate-text text-lg leading-relaxed mb-8">
              Partner with Touchmark Concourse Centre to provide your students with structured access to international remote internships. Enhance your placement metrics, boost your global academic standing, and offer a unique value proposition to your students.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-verified-emerald mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-midnight-navy text-lg">Formal MOU Framework</h4>
                  <p className="text-slate-text opacity-80">Structured agreements for batch-wise processing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-verified-emerald mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-midnight-navy text-lg">Dedicated Support Cell</h4>
                  <p className="text-slate-text opacity-80">End-to-end management from assessment to completion.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-verified-emerald mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-midnight-navy text-lg">Verified Outcome Tracking</h4>
                  <p className="text-slate-text opacity-80">Transparent reporting on student performance and letters.</p>
                </div>
              </div>
            </div>

            <Link to="/institutions">
              <Button variant="primary" size="lg" className="shadow-lg shadow-electric-blue/20 border-0">Request Institution Partnership</Button>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-electric-blue transform rotate-3 rounded-2xl opacity-10"></div>
            <img src="/images/office_collaboration.png" alt="Academic Partnership" className="rounded-2xl relative z-10 shadow-xl border border-soft-border" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ForInstitutionsSection;
