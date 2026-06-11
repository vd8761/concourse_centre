import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { CheckCircle, MapPin, Award, BookOpen, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const CGIP = () => {
  const processSteps = [
    { title: 'Application', desc: 'Submit your profile and academic credentials.', num: '01' },
    { title: 'Screening', desc: 'Merit-based evaluation by Touchmark Concourse.', num: '02' },
    { title: 'Interview', desc: 'Technical or HR round with the host company.', num: '03' },
    { title: 'Onboarding', desc: 'Project allocation and orientation.', num: '04' },
    { title: 'Execution', desc: 'Remote work with structured progress tracking.', num: '05' },
    { title: 'Certification', desc: 'Verified completion letter from the company.', num: '06' }
  ];

  return (
    <div className="bg-cloud-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-midnight-navy py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-prestige-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-left">
              <div className="inline-block px-4 py-2 bg-prestige-gold/20 rounded-full mb-6 border border-prestige-gold/30">
                <span className="text-prestige-gold font-bold tracking-wider uppercase text-sm">Flagship Programme</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl lg:leading-tight text-white mb-6">Concourse Global Internship Programme</h1>
              <p className="text-cloud-white opacity-80 text-lg lg:text-xl leading-relaxed max-w-xl mb-8">
                Access remote internships with top international companies. Gain real-world experience, build a global network, and kickstart your career with verified credentials.
              </p>
              <div className="flex gap-4">
                <Link to="/apply">
                  <Button variant="primary" size="lg" className="shadow-lg shadow-electric-blue/20">Apply for CGIP</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-prestige-gold/20 to-transparent rounded-2xl"></div>
              <img src="/images/cgip_internship.png" alt="Global Internship Concept" className="relative z-10 rounded-2xl border border-white/10 shadow-2xl w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-midnight-navy mb-4">What You Receive</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hoverEffect={true} className="flex flex-col text-center items-center">
              <div className="w-16 h-16 rounded-xl bg-electric-blue/10 flex items-center justify-center mb-6">
                <BookOpen size={32} className="text-electric-blue" />
              </div>
              <h3 className="font-bold text-midnight-navy text-xl mb-3">Real Industry Work</h3>
              <p className="text-slate-text opacity-80 leading-relaxed">Work on active projects that directly impact the host company. No dummy tasks or simulations.</p>
            </Card>
            <Card hoverEffect={true} className="flex flex-col text-center items-center">
              <div className="w-16 h-16 rounded-xl bg-prestige-gold/10 flex items-center justify-center mb-6">
                <MapPin size={32} className="text-prestige-gold" />
              </div>
              <h3 className="font-bold text-midnight-navy text-xl mb-3">Global Exposure</h3>
              <p className="text-slate-text opacity-80 leading-relaxed">Interact with international teams in countries like Singapore, Dubai, Mauritius, and Japan.</p>
            </Card>
            <Card hoverEffect={true} className="flex flex-col text-center items-center">
              <div className="w-16 h-16 rounded-xl bg-verified-emerald/10 flex items-center justify-center mb-6">
                <Award size={32} className="text-verified-emerald" />
              </div>
              <h3 className="font-bold text-midnight-navy text-xl mb-3">Verified Credentials</h3>
              <p className="text-slate-text opacity-80 leading-relaxed">Receive a legitimate completion letter directly from the global host company upon successful execution.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-electric-blue/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-midnight-navy mb-6">Eligibility Criteria</h2>
              <p className="text-slate-text text-lg mb-8 leading-relaxed">
                CGIP is a strictly merit-based programme. We look for drive, foundational skills, and professionalism.
              </p>
              <ul className="flex flex-col gap-6 mb-8">
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-verified-emerald/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-verified-emerald" size={20} />
                  </div>
                  <span className="text-midnight-navy font-semibold text-lg">Enrolled in a recognized Degree/Diploma</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-verified-emerald/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-verified-emerald" size={20} />
                  </div>
                  <span className="text-midnight-navy font-semibold text-lg">Minimum aggregate of 60% or equivalent</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-verified-emerald/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-verified-emerald" size={20} />
                  </div>
                  <span className="text-midnight-navy font-semibold text-lg">Clear communication skills (English)</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-verified-emerald/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-verified-emerald" size={20} />
                  </div>
                  <span className="text-midnight-navy font-semibold text-lg">Availability for 10-15 hours per week (Remote)</span>
                </li>
              </ul>
            </div>
            <div className="bg-midnight-navy text-white rounded-2xl p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-prestige-gold/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-electric-blue/20 flex items-center justify-center">
                    <User size={32} className="text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-2xl mb-1">Who Should Apply?</h4>
                    <p className="text-cloud-white opacity-80">Engineering, Management, & Design</p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-lg leading-relaxed italic opacity-90">
                    "We prioritize students who show genuine interest in solving problems and learning across cultural borders."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-midnight-navy mb-4">The Selection Process</h2>
            <p className="text-slate-text opacity-80 text-lg">A transparent and structured pathway from application to certification.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-soft-border shadow-sm hover:shadow-lg transition-all relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 text-8xl font-black text-slate-text/5 group-hover:text-electric-blue/5 transition-colors select-none z-0">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-midnight-navy text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-midnight-navy text-xl mb-3">{step.title}</h4>
                  <p className="text-slate-text opacity-80 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-midnight-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,128,237,0.15)_0,transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-6">Ready to Go Global?</h2>
          <p className="mb-10 text-cloud-white opacity-80 text-lg max-w-2xl mx-auto leading-relaxed">
            Take the first step towards your international career. Apply for the Concourse Global Internship Programme today.
          </p>
          <Link to="/apply">
            <Button variant="primary" size="lg" className="shadow-lg shadow-electric-blue/20">Start Application</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CGIP;
