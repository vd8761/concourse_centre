import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Briefcase, FileCheck, CheckCircle2, MapPin } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <>
    <section className="bg-midnight-navy text-white relative overflow-hidden pt-32 pb-24">
      {/* Background Map Grid */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(var(--color-electric-blue) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Cinematic Typography */}
          <div className="text-left">
            <h1 className="font-heading font-extrabold text-5xl lg:text-7xl lg:leading-tight text-white mb-6">
              India’s <span className="text-electric-blue">Global</span><br />Talent Bridge
            </h1>
            <h2 className="text-2xl text-electric-blue mb-6 font-semibold">
              Connecting Indian Talent to Global Opportunity
            </h2>
            <p className="text-cloud-white opacity-80 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
              Touchmark Concourse Centre runs merit-based international programmes that place Indian students and professionals inside global companies through real projects, structured delivery, and verified outcomes.
            </p>
            <div className="flex gap-4">
              <Link to="/programmes">
                <Button variant="primary" size="lg" className="shadow-lg shadow-electric-blue/20">Explore Programmes</Button>
              </Link>
              <Link to="/institutions">
                <Button variant="secondary" size="lg" className="bg-white/5 border-white/20 text-white hover:bg-white/10">Partner With Us</Button>
              </Link>
            </div>
          </div>

          {/* Right Side: Futuristic Global Opportunity Dashboard */}
          <div className="relative h-[600px] w-full hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Central Glowing Connection Node (India) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_30px_10px_rgba(47,128,237,0.5)] z-20">
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-bold tracking-widest uppercase">India Origin</div>
              </div>

              {/* Glowing Lines SVG */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none drop-shadow-[0_0_8px_rgba(47,128,237,0.5)]">
                <path d="M 50% 50% L 20% 20%" stroke="var(--color-electric-blue)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                <path d="M 50% 50% L 80% 30%" stroke="var(--color-electric-blue)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                <path d="M 50% 50% L 70% 80%" stroke="var(--color-verified-emerald)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              </svg>

              {/* Floating Profile Card */}
              <div className="absolute top-10 left-0 bg-midnight-navy/80 backdrop-blur-md p-4 rounded-xl z-30 w-64 animate-[float-slow_8s_ease-in-out_infinite] border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-slate-text/20 flex items-center justify-center border border-white/10">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Student Profile</div>
                    <div className="text-xs text-verified-emerald flex items-center"><CheckCircle2 size={12} className="mr-1"/> Merit Verified</div>
                  </div>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full mt-2"><div className="bg-verified-emerald w-[85%] h-full rounded-full"></div></div>
              </div>

              {/* Internship Role Card */}
              <div className="absolute top-20 right-0 bg-midnight-navy/80 backdrop-blur-md p-5 rounded-xl z-30 w-72 animate-[float-medium_6s_ease-in-out_infinite] border border-white/10 shadow-2xl">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-xs font-bold text-electric-blue uppercase tracking-wider">Active Placement</div>
                  <div className="px-2 py-0.5 bg-verified-emerald/20 text-verified-emerald text-[10px] font-bold rounded">100% REMOTE</div>
                </div>
                <div className="font-bold text-white mb-1">Data Engineering Intern</div>
                <div className="text-sm text-white opacity-70 flex items-center"><Briefcase size={14} className="mr-2"/> TechCorp Singapore</div>
              </div>

              {/* Verified Completion Letter Preview */}
              <div className="absolute bottom-10 right-10 bg-midnight-navy/60 backdrop-blur-sm p-4 rounded-xl z-20 w-64 transform rotate-3 animate-[float-fast_4s_ease-in-out_infinite] border border-white/20 shadow-2xl">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <FileCheck size={18} className="text-prestige-gold" />
                  <div className="text-sm font-bold text-white">Completion Letter</div>
                </div>
                <div className="space-y-2 opacity-60">
                  <div className="h-2 w-full bg-white/20 rounded"></div>
                  <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                  <div className="h-2 w-5/6 bg-white/20 rounded"></div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full border-2 border-prestige-gold flex items-center justify-center opacity-80">
                     <span className="text-[8px] text-prestige-gold font-bold uppercase text-center leading-tight">Verified<br/>Seal</span>
                  </div>
                </div>
              </div>

              {/* Country Node: Dubai */}
              <div className="absolute bottom-20 left-10 flex flex-col items-center animate-pulse">
                <MapPin size={24} className="text-electric-blue mb-1" />
                <div className="text-xs font-bold text-white bg-slate-text/50 px-2 py-1 rounded shadow-lg border border-electric-blue/30 backdrop-blur-sm">Dubai, UAE</div>
              </div>

              {/* Country Node: Japan */}
              <div className="absolute top-40 right-20 flex flex-col items-center animate-pulse" style={{animationDelay: '1s'}}>
                <MapPin size={24} className="text-prestige-gold mb-1" />
                <div className="text-xs font-bold text-white bg-slate-text/50 px-2 py-1 rounded shadow-lg border border-prestige-gold/30 backdrop-blur-sm">Tokyo, Japan</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Trust Strip */}
    <div className="bg-[#1a2035] py-8 border-y border-white/10 shadow-xl relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex flex-col flex-1 min-w-[200px] py-4 md:py-0">
            <span className="text-4xl font-mono font-bold text-white mb-2">25+</span>
            <span className="text-sm text-electric-blue font-bold tracking-widest uppercase">Global Partner Companies</span>
          </div>
          <div className="flex flex-col flex-1 min-w-[200px] py-4 md:py-0">
            <span className="text-4xl font-mono font-bold text-white mb-2">4+</span>
            <span className="text-sm text-electric-blue font-bold tracking-widest uppercase">Countries</span>
          </div>
          <div className="flex flex-col flex-1 min-w-[200px] py-4 md:py-0">
            <span className="text-4xl font-mono font-bold text-white mb-2">100%</span>
            <span className="text-sm text-electric-blue font-bold tracking-widest uppercase">Remote Delivery</span>
          </div>
          <div className="flex flex-col flex-1 min-w-[200px] py-4 md:py-0">
            <span className="text-4xl font-mono font-bold text-verified-emerald mb-2">Merit</span>
            <span className="text-sm text-verified-emerald font-bold tracking-widest uppercase">Based Selection</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
