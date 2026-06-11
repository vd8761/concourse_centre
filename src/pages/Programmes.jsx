import React from 'react';
import ProgrammesSection from '../components/home/ProgrammesSection';

const Programmes = () => {
  return (
    <div className="bg-cloud-white min-h-screen">
      <section className="bg-midnight-navy py-20 lg:py-32 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,128,237,0.1)_0,transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="font-heading font-extrabold text-4xl lg:text-5xl lg:leading-tight mb-6">Our Programmes</h1>
          <p className="text-cloud-white opacity-80 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Explore our structured initiatives designed to bridge the gap between Indian talent and global opportunity.
          </p>
        </div>
      </section>

      {/* Reuse the component from the homepage without the duplicate header */}
      <ProgrammesSection hideHeader={true} />
    </div>
  );
};

export default Programmes;
