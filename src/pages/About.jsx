import React from 'react';
import Card from '../components/ui/Card';
import { Shield, Target, Navigation } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-cloud-white min-h-screen">
      <section className="bg-midnight-navy py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-left">
              <h1 className="font-heading font-extrabold text-4xl lg:text-5xl lg:leading-tight text-white mb-6">About Us</h1>
              <p className="text-cloud-white opacity-80 text-lg lg:text-xl leading-relaxed max-w-xl">
                Learn about our mission to bridge the gap between Indian talent and global opportunity through structured remote programmes.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/20 to-transparent rounded-2xl"></div>
              <img src="/images/about_page.png" alt="Abstract talent bridge" className="relative z-10 rounded-2xl border border-white/10 shadow-2xl w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-midnight-navy mb-8">Our Purpose</h2>
              <div className="space-y-6 text-slate-text leading-relaxed">
                <p>
                  Touchmark Concourse Centre, an initiative of Touchmark Descience Pvt Ltd, was founded with a singular focus: to democratize access to global professional experiences for merit-driven Indian youth.
                </p>
                <p>
                  We believe that geographic location should not dictate a student's career trajectory. By partnering with international companies and building structured delivery models, we create legitimate pathways for students to work on real-world global projects.
                </p>
                <p>
                  Our merit-first philosophy ensures that opportunities are earned by those who demonstrate drive, capability, and professionalism.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <Card hoverEffect={true} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-electric-blue/10 flex items-center justify-center">
                  <Target size={24} className="text-electric-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-midnight-navy text-xl mb-2">Merit-First Philosophy</h3>
                  <p className="text-slate-text opacity-80 text-sm leading-relaxed">We do not charge students for placement. Selection is based purely on technical capability and drive.</p>
                </div>
              </Card>
              <Card hoverEffect={true} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-verified-emerald/10 flex items-center justify-center">
                  <Shield size={24} className="text-verified-emerald" />
                </div>
                <div>
                  <h3 className="font-bold text-midnight-navy text-xl mb-2">Structured Delivery</h3>
                  <p className="text-slate-text opacity-80 text-sm leading-relaxed">Every programme has defined learning outcomes, weekly tracking, and verified certification.</p>
                </div>
              </Card>
              <Card hoverEffect={true} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-prestige-gold/10 flex items-center justify-center">
                  <Navigation size={24} className="text-prestige-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-midnight-navy text-xl mb-2">Global Network</h3>
                  <p className="text-slate-text opacity-80 text-sm leading-relaxed">Connecting talent to companies in Singapore, Dubai, Mauritius, Japan, and beyond.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
