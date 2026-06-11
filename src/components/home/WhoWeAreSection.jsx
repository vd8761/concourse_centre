import React from 'react';
import { Globe, ShieldCheck, Target, Layers, Award } from 'lucide-react';

const WhoWeAreSection = () => {
  const credibility = [
    { title: 'Global Company Network', icon: <Globe size={20} /> },
    { title: 'Institution Partnerships', icon: <ShieldCheck size={20} /> },
    { title: 'Merit-First Selection', icon: <Target size={20} /> },
    { title: 'Structured Programme Delivery', icon: <Layers size={20} /> },
    { title: 'Verified Outcomes', icon: <Award size={20} /> }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-midnight-navy mb-6">About Touchmark Concourse Centre</h2>
            <p className="mb-4 text-slate-text text-lg leading-relaxed">
              Touchmark Concourse Centre is the global outreach and talent development arm of Touchmark Descience Pvt Ltd. We recognized a massive gap between the incredible potential of Indian students and the accessibility of true international exposure.
            </p>
            <p className="mb-8 text-slate-text text-lg leading-relaxed">
              We do not act as a traditional placement agency. Instead, we architect structured programmes that allow students to prove their merit on real global projects, earning verified international experience before they even graduate.
            </p>
          </div>

          <div>
            {/* Premium Quote Card */}
            <div className="bg-midnight-navy p-8 rounded-2xl mb-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-10 text-electric-blue">
                <Globe size={120} />
              </div>
              <p className="text-xl md:text-2xl font-heading font-medium text-white italic leading-relaxed relative z-10">
                “We do not just place students. We create the infrastructure that makes international experience accessible to any merit-worthy student in India.”
              </p>
            </div>

            {/* 5 Credibility Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credibility.map((item, index) => (
                <div key={index} className={`flex items-center gap-3 p-4 rounded-xl border border-soft-border bg-cloud-white hover:border-electric-blue hover:shadow-md transition-all duration-300 ${index === 4 ? 'sm:col-span-2' : ''}`}>
                  <div className="text-electric-blue bg-white p-2 rounded-lg border border-soft-border shadow-sm flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-bold text-midnight-navy text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
