import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Briefcase, Zap, ShieldCheck, CheckSquare } from 'lucide-react';

const ForCompanies = () => {
  const benefits = [
    { title: 'Zero-Cost Talent', desc: 'Host interns without recruitment fees or mandatory stipends.', icon: <Zap size={28} className="text-electric-blue" /> },
    { title: 'Pre-Vetted Candidates', desc: 'We assess technical skills, communication, and drive.', icon: <CheckSquare size={28} className="text-electric-blue" /> },
    { title: 'Touchmark Managed', desc: 'We handle onboarding, weekly tracking, and compliance.', icon: <ShieldCheck size={28} className="text-electric-blue" /> },
    { title: 'Scalable Operations', desc: 'Easily scale your remote team for specific projects.', icon: <Briefcase size={28} className="text-electric-blue" /> }
  ];

  return (
    <div className="bg-midnight-navy min-h-screen text-white">
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-left">
              <div className="inline-block px-4 py-2 bg-electric-blue/20 rounded-full mb-6 border border-electric-blue/30">
                <span className="text-electric-blue font-bold tracking-wider uppercase text-sm">For Global Companies</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl lg:leading-tight text-white mb-6">Access India's Elite Talent.</h1>
              <p className="text-cloud-white opacity-80 text-lg leading-relaxed max-w-xl">
                Access high-calibre, pre-screened technical and management talent from India to drive your business initiatives securely and efficiently.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/30 to-transparent rounded-2xl"></div>
              <img src="/images/companies_page.png" alt="Premium corporate office" className="relative z-10 rounded-2xl border border-white/10 shadow-2xl w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white text-midnight-navy relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-midnight-navy mb-4">Host International Interns</h2>
            <p className="text-slate-text opacity-80 text-lg">A frictionless model designed for modern companies scaling their operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} hoverEffect={true} className="flex flex-col border-soft-border bg-cloud-white">
                <div className="w-14 h-14 rounded-xl bg-electric-blue/10 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-midnight-navy text-lg mb-3">{benefit.title}</h3>
                <p className="text-slate-text opacity-80 leading-relaxed text-sm">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-midnight-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,128,237,0.15)_0,transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-6">Ready to Host?</h2>
          <p className="mb-10 text-cloud-white opacity-80 text-lg max-w-2xl mx-auto leading-relaxed">
            Register your company requirements. Touchmark Concourse Centre will match you with the right talent pool from our institutional partners across India.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg" className="shadow-lg shadow-electric-blue/20">Register Company</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ForCompanies;
