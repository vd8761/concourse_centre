import React from 'react';
import { MapPin } from 'lucide-react';

const GlobalNetworkSection = () => {
  const nodes = [
    { name: 'Dubai, UAE', top: '40%', left: '60%', color: '#2f80ed' },
    { name: 'Tokyo, Japan', top: '35%', left: '85%', color: '#d4af37' },
    { name: 'Singapore', top: '55%', left: '78%', color: '#2f80ed' },
    { name: 'London, UK', top: '25%', left: '45%', color: '#10b981' }
  ];

  return (
    <section className="py-20 lg:py-32 bg-midnight-navy text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-4">Our Global Network</h2>
        <p className="max-w-2xl mx-auto text-cloud-white opacity-80 text-lg mb-16">
          We have established remote placement ecosystems across key international hubs, connecting Indian talent to leading global markets.
        </p>

        <div className="relative w-full max-w-4xl mx-auto h-[400px] border border-white/10 rounded-2xl bg-midnight-navy overflow-hidden shadow-2xl">
          {/* Abstract Map Grid */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(var(--color-cloud-white) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>

          {nodes.map((node, index) => (
            <div key={index} className="absolute flex flex-col items-center animate-pulse" style={{ top: node.top, left: node.left, animationDelay: `${index * 0.5}s` }}>
              <MapPin size={24} style={{ color: node.color }} className="mb-2" />
              <div className="text-xs font-bold text-white bg-slate-text/50 px-3 py-1 rounded shadow-lg border backdrop-blur-sm" style={{ borderColor: `${node.color}50` }}>
                {node.name}
              </div>
            </div>
          ))}

          {/* Central India Node */}
          <div className="absolute flex flex-col items-center z-20" style={{ top: '45%', left: '70%' }}>
             <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_30px_10px_rgba(255,255,255,0.3)] border-2 border-electric-blue"></div>
             <div className="text-xs font-bold text-midnight-navy bg-white px-2 py-0.5 rounded mt-2 uppercase tracking-widest">India Base</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetworkSection;
