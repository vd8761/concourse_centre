import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Building, BookOpen, BarChart3, Users, Globe } from 'lucide-react';

const ForInstitutions = () => {
  const benefits = [
    { title: 'Enhance Placement Metrics', desc: 'Add international remote placements to your institutional track record.', icon: <BarChart3 size={28} className="text-verified-emerald" /> },
    { title: 'Structured Framework', desc: 'A formal MOU ensures accountability, tracking, and clear deliverables.', icon: <Building size={28} className="text-verified-emerald" /> },
    { title: 'Global Academic Standing', desc: 'Elevate your institution\'s brand by associating with global industry standards.', icon: <Globe size={28} className="text-verified-emerald" /> },
    { title: 'Dedicated Support', desc: 'Touchmark provides a dedicated cell for onboarding and dispute resolution.', icon: <Users size={28} className="text-verified-emerald" /> }
  ];

  return (
    <div className="bg-cloud-white min-h-screen">
      <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-verified-emerald/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-left">
              <div className="inline-block px-4 py-2 bg-verified-emerald/10 rounded-full mb-6">
                <span className="text-verified-emerald font-bold tracking-wider uppercase text-sm">For Institutions</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl lg:leading-tight text-midnight-navy mb-6">Elevate Your Institution's Global Standing.</h1>
              <p className="text-slate-text opacity-80 text-lg leading-relaxed max-w-xl">
                Partner with Touchmark Concourse Centre to provide your students with structured access to global remote internships.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-verified-emerald/20 to-transparent rounded-2xl"></div>
              <img src="/images/institutions_page.png" alt="Premium university boardroom" className="relative z-10 rounded-2xl border border-soft-border shadow-xl w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-midnight-navy mb-6">The Partnership Model</h2>
              <div className="space-y-6 text-slate-text leading-relaxed mb-8">
                <p>We work directly with University Placement Cells and Academic Departments to source the best talent.</p>
                <p>Our formal MOU framework ensures that the institution is kept in the loop regarding student selection, performance tracking, and successful completion of the global internship.</p>
              </div>
              <Link to="/contact">
                <Button variant="secondary" className="border-verified-emerald text-verified-emerald hover:bg-verified-emerald hover:text-white">Request Partnership Info</Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <Card key={idx} hoverEffect={true} className="flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-verified-emerald/10 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-midnight-navy text-lg mb-2">{benefit.title}</h4>
                  <p className="text-slate-text opacity-80 text-sm leading-relaxed">{benefit.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForInstitutions;
