import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

const ForCompaniesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-midnight-navy text-white relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(var(--color-electric-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-electric-blue) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-prestige-gold transform -rotate-3 rounded-2xl opacity-20"></div>
            <img src="/images/students_remote.png" alt="Global Company Partnership" className="rounded-2xl relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="text-prestige-gold" size={24} />
              <span className="text-sm font-bold text-prestige-gold uppercase tracking-widest">Global Business Partners</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white mb-6">Access Elite Indian Talent, Risk-Free</h2>
            <p className="text-cloud-white opacity-80 text-lg leading-relaxed mb-8">
              Access high-calibre, pre-screened technical and management talent from India. Host remote interns to drive your business initiatives at zero recruitment cost, fully managed by Touchmark.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-electric-blue mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-white text-lg">Zero-Cost Intern Hosting</h4>
                  <p className="text-cloud-white opacity-60">No placement fees. Purely experiential learning for the student.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-electric-blue mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-white text-lg">Pre-Vetted Merit Candidates</h4>
                  <p className="text-cloud-white opacity-60">Rigorous screening ensures only top-tier talent reaches you.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-electric-blue mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-white text-lg">End-to-End Management</h4>
                  <p className="text-cloud-white opacity-60">We handle NDA signing, tracking, and final certification.</p>
                </div>
              </div>
            </div>

            <Link to="/companies">
              <Button variant="primary" size="lg" className="bg-prestige-gold hover:bg-[#d4af37]/90 text-midnight-navy font-bold border-0 shadow-lg shadow-prestige-gold/20">Register Your Company</Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ForCompaniesSection;
