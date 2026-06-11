import React from 'react';
import Button from '../components/ui/Button';

const Contact = () => {
  return (
    <div className="bg-cloud-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Left Side (Dark) */}
        <div className="bg-midnight-navy text-white relative overflow-hidden py-20 px-8 lg:px-20 flex flex-col justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,128,237,0.1)_0,transparent_50%)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-electric-blue/10 to-transparent"></div>
          
          <div className="relative z-10 max-w-xl mx-auto lg:mx-0">
            <h1 className="font-heading font-extrabold text-5xl lg:text-7xl text-white mb-6">Get in Touch.</h1>
            <p className="text-cloud-white opacity-80 text-xl leading-relaxed mb-16">
              Whether you're looking to <span className="text-prestige-gold font-bold">join our programmes</span> or explore <span className="text-white font-bold">institutional partnerships</span>, our team is ready to assist you.
            </p>
            
            <div className="border-t border-white/10 pt-12">
              <h3 className="font-bold text-electric-blue uppercase tracking-wider text-sm mb-4">Corporate Headquarters</h3>
              <p className="text-cloud-white opacity-80 leading-relaxed mb-6">
                Tech Park, Phase 1<br/>
                Bangalore, India
              </p>
              <div className="flex items-center gap-3 text-cloud-white opacity-80">
                <span className="font-bold text-electric-blue">Email:</span>
                <a href="mailto:hello@touchmark.com" className="hover:text-white transition-colors">hello@touchmark.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Light Form) */}
        <div className="bg-white py-20 px-8 lg:px-20 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-midnight-navy mb-10">Send an Enquiry</h2>
            
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="font-bold text-slate-text text-sm uppercase tracking-wider">Full Name</label>
                  <input type="text" id="fullName" className="w-full bg-transparent border-b-2 border-soft-border py-2 text-midnight-navy focus:outline-none focus:border-electric-blue transition-colors placeholder:text-slate-text/30" placeholder="John Doe" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-bold text-slate-text text-sm uppercase tracking-wider">Email Address</label>
                  <input type="email" id="email" className="w-full bg-transparent border-b-2 border-soft-border py-2 text-midnight-navy focus:outline-none focus:border-electric-blue transition-colors placeholder:text-slate-text/30" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-bold text-slate-text text-sm uppercase tracking-wider">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-transparent border-b-2 border-soft-border py-2 text-midnight-navy focus:outline-none focus:border-electric-blue transition-colors placeholder:text-slate-text/30" placeholder="+91 9876543210" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="audience" className="font-bold text-slate-text text-sm uppercase tracking-wider">I am a...</label>
                  <select id="audience" className="w-full bg-transparent border-b-2 border-soft-border py-2 text-midnight-navy focus:outline-none focus:border-electric-blue transition-colors" required>
                    <option value="">Select your profile</option>
                    <option value="student">Student</option>
                    <option value="institution">Institution Representative</option>
                    <option value="company">Company Representative</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="programme" className="font-bold text-slate-text text-sm uppercase tracking-wider">Programme of Interest</label>
                <select id="programme" className="w-full bg-transparent border-b-2 border-soft-border py-2 text-midnight-navy focus:outline-none focus:border-electric-blue transition-colors">
                  <option value="cgip">Concourse Global Internship Programme (CGIP)</option>
                  <option value="venture_sprint">Venture Sprint Programme</option>
                  <option value="partnership">Institution Partnership</option>
                  <option value="other">Other Enquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="message" className="font-bold text-slate-text text-sm uppercase tracking-wider">Message</label>
                <textarea id="message" rows="4" className="w-full bg-transparent border-b-2 border-soft-border py-2 text-midnight-navy focus:outline-none focus:border-electric-blue transition-colors resize-none placeholder:text-slate-text/30" placeholder="How can we help you?" required></textarea>
              </div>

              <div className="mt-4">
                <Button variant="primary" size="lg" className="w-full py-4 text-lg" type="submit">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
