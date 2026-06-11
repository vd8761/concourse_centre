import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Target, Globe, Award, TrendingUp } from 'lucide-react';

const ForStudents = () => {
  const benefits = [
    { title: 'Merit-Based Selection', desc: 'No placement fees. Your skills and drive are your currency.', icon: <Target size={28} className="text-electric-blue" /> },
    { title: 'Global Exposure', desc: 'Work with international teams and understand global business standards.', icon: <Globe size={28} className="text-electric-blue" /> },
    { title: 'Verified Credentials', desc: 'Earn a recognized completion letter from your host company.', icon: <Award size={28} className="text-electric-blue" /> },
    { title: 'Career Acceleration', desc: 'Stand out in the job market with documented international experience.', icon: <TrendingUp size={28} className="text-electric-blue" /> }
  ];

  return (
    <div className="bg-cloud-white min-h-screen">
      <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-electric-blue/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-left">
              <div className="inline-block px-4 py-2 bg-electric-blue/10 rounded-full mb-6">
                <span className="text-electric-blue font-bold tracking-wider uppercase text-sm">For Students</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl lg:leading-tight text-midnight-navy mb-6">Launch Your Global Career from Anywhere.</h1>
              <p className="text-slate-text opacity-80 text-lg leading-relaxed max-w-xl">
                Geography should not dictate your opportunity. Gain access to structured, remote international internships based purely on your merit.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/20 to-transparent rounded-2xl"></div>
              <img src="/images/students_page.png" alt="Ambitious students looking forward" className="relative z-10 rounded-2xl border border-soft-border shadow-xl w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-midnight-navy mb-4">Why International Experience Matters</h2>
            <p className="text-slate-text opacity-80 text-lg">Build the skills and the resume that global companies are actively looking for.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} hoverEffect={true} className="flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-electric-blue/10 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-midnight-navy text-xl mb-3">{benefit.title}</h3>
                <p className="text-slate-text opacity-80 leading-relaxed">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-midnight-navy text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,128,237,0.1)_0,transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-6">Explore Our Flagship Programme</h2>
          <p className="mb-10 text-cloud-white opacity-80 text-lg max-w-2xl mx-auto leading-relaxed">
            The Concourse Global Internship Programme (CGIP) is currently accepting applications from eligible students.
          </p>
          <Link to="/programmes/cgip">
            <Button variant="primary" size="lg" className="shadow-lg shadow-electric-blue/20">Learn About CGIP</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ForStudents;
