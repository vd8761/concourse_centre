import React from 'react';
import { ShieldCheck, Briefcase, Settings, Target, Network, Layers } from 'lucide-react';

const WhyTouchmarkSection = () => {
  const reasons = [
    { title: 'Merit is Non-Negotiable', desc: 'We select based on skills and drive, ensuring quality for our global partners.', icon: <Target size={24} /> },
    { title: 'Real Companies, Real Work', desc: 'No dummy projects. Interns work on active business initiatives.', icon: <Briefcase size={24} /> },
    { title: 'Touchmark Manages the Bridge', desc: 'We handle onboarding, tracking, and compliance, making it seamless.', icon: <Settings size={24} /> },
    { title: 'Structured Programme Design', desc: 'Clear deliverables, timelines, and evaluation criteria for every engagement.', icon: <Layers size={24} /> },
    { title: 'Growing Global Network', desc: 'Continuous expansion into new geographies like Singapore, Dubai, and Japan.', icon: <Network size={24} /> },
    { title: 'Built for India’s Scale', desc: 'Systems designed to handle institutional volume without compromising quality.', icon: <ShieldCheck size={24} /> }
  ];

  return (
    <section className="py-20 lg:py-32 bg-cloud-white border-t border-soft-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-midnight-navy mb-4">Why Touchmark Concourse Centre?</h2>
          <p className="max-w-2xl mx-auto text-slate-text opacity-80 text-lg">Our approach is defined by structure, quality, and an unwavering commitment to unlocking potential on a global stage.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-soft-border hover:border-electric-blue transition-all duration-300 shadow-sm hover:shadow-xl group transform hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-cloud-white border border-soft-border flex items-center justify-center text-electric-blue mb-6 group-hover:bg-electric-blue group-hover:text-white transition-colors duration-300 shadow-sm">
                {reason.icon}
              </div>
              <h3 className="font-bold text-midnight-navy text-xl mb-3">{reason.title}</h3>
              <p className="text-slate-text opacity-80 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTouchmarkSection;
