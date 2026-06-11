import React from 'react';
import { Users, FileSearch, Building2, Briefcase, Award, ArrowRight } from 'lucide-react';

const BridgeSection = () => {
  const steps = [
    { title: 'Indian Students', desc: 'Elite talent pool from across the country.', icon: <Users size={24} /> },
    { title: 'Touchmark Assessment', desc: 'Rigorous merit-based evaluation.', icon: <FileSearch size={24} /> },
    { title: 'Global Companies', desc: 'Matched with international partners.', icon: <Building2 size={24} /> },
    { title: 'Real Projects', desc: 'Active business initiatives, not dummy tasks.', icon: <Briefcase size={24} /> },
    { title: 'Verified Outcomes', desc: 'International completion letters issued.', icon: <Award size={24} /> }
  ];

  return (
    <section className="py-20 lg:py-32 bg-cloud-white border-b border-soft-border relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-midnight-navy mb-4">Not a Placement Agency. A Global Opportunity Bridge.</h2>
          <p className="max-w-3xl mx-auto text-slate-text opacity-80 text-lg leading-relaxed">We build the infrastructure that makes international experience accessible to any merit-worthy student.</p>
        </div>

        <div className="relative py-12">
          {/* Connecting Line Background */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-soft-border transform -translate-y-1/2 hidden lg:block"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 relative z-10">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center max-w-[200px] group">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-soft-border shadow-sm flex items-center justify-center text-electric-blue mb-4 group-hover:border-electric-blue group-hover:shadow-md transition-all duration-300 relative z-10">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-midnight-navy mb-2 text-lg">{step.title}</h3>
                  <p className="text-sm text-slate-text opacity-80">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="text-soft-border lg:hidden my-4">
                    <ArrowRight size={24} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgeSection;
