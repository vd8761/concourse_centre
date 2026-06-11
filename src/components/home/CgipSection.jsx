import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Globe, Target, Award, Users, FileCheck } from 'lucide-react';
import Button from '../ui/Button';

const CgipSection = () => {
  const timeline = [
    { step: 1, title: 'Opportunity Released', desc: 'Global partners publish remote roles.' },
    { step: 2, title: 'Student Applies', desc: 'Eligible students submit applications.' },
    { step: 3, title: 'Merit Assessment', desc: 'Rigorous skill and aptitude evaluation.' },
    { step: 4, title: 'Selection', desc: 'Top candidates are matched with companies.' },
    { step: 5, title: 'Internship Begins', desc: 'Live project work via remote delivery.' },
    { step: 6, title: 'Completion Letter Issued', desc: 'Verified international experience certified.' }
  ];

  const details = [
    { label: 'Mode', value: '100% Remote', icon: <Globe size={18} /> },
    { label: 'Duration', value: '6-8 Weeks', icon: <Calendar size={18} /> },
    { label: 'Eligibility', value: '3rd/Final Year Engineering & Tech', icon: <Users size={18} /> },
    { label: 'Selection', value: 'Merit-Based Assessment', icon: <Target size={18} /> },
    { label: 'Stipend', value: 'Experiential, Not Paid', icon: <Award size={18} /> },
    { label: 'Completion', value: 'International Internship Letter', icon: <FileCheck size={18} /> }
  ];

  return (
    <section className="py-20 lg:py-32 bg-midnight-navy text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-electric-blue opacity-5 transform skew-x-12 translate-x-32 hidden lg:block"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-prestige-gold text-prestige-gold rounded-full text-xs font-bold uppercase tracking-widest mb-4">Concourse Global Internship Programme</div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-heading">Your First International Work Experience<br/>Before You Graduate</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Vertical Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold mb-8 text-electric-blue">The Global Journey</h3>
            <div className="relative border-l-2 border-electric-blue/30 ml-4 pl-8 space-y-10">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-midnight-navy border-2 border-electric-blue flex items-center justify-center font-bold text-sm text-electric-blue shadow-[0_0_10px_rgba(47,128,237,0.5)]">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-cloud-white opacity-70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Programme Detail Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl h-full flex flex-col shadow-2xl">
              <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">Programme Overview</h3>
              <div className="space-y-6 flex-grow mb-8">
                {details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-electric-blue mt-1">{detail.icon}</div>
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-widest font-bold mb-1">{detail.label}</div>
                      <div className="text-white font-medium">{detail.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/apply" className="w-full">
                <Button variant="primary" className="w-full shadow-[0_0_20px_rgba(47,128,237,0.4)] border-0">Apply for CGIP Now</Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CgipSection;
