import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '25+', label: 'Global Partner Companies' },
    { value: '4+', label: 'Countries' },
    { value: '100%', label: 'Remote Delivery' },
    { value: 'Merit', label: 'Based Selection' },
  ];

  return (
    <section className="py-16 bg-electric-blue text-white relative">
      <div className="absolute inset-0 bg-midnight-navy/10 mix-blend-multiply"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-2 text-white drop-shadow-md">{stat.value}</h2>
              <p className="text-sm md:text-base font-bold text-cloud-white uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
