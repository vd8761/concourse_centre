import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-soft-border shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center text-midnight-navy font-heading font-extrabold text-xl leading-tight">
          Touchmark<br/>Concourse Centre
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/about" className="text-sm font-semibold text-slate-text hover:text-electric-blue transition-colors">About</Link>
          
          <div className="relative group py-6">
            <Link to="/programmes" className="flex items-center text-sm font-semibold text-slate-text hover:text-electric-blue transition-colors">
              Programmes <ChevronDown size={16} className="ml-1" />
            </Link>
            {/* Dropdown */}
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-64 bg-white border border-soft-border shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2 z-[60]">
              <Link to="/programmes/cgip" className="block px-4 py-3 text-sm text-slate-text hover:bg-cloud-white hover:text-electric-blue rounded-lg font-bold transition-colors">
                Concourse Global Internship Programme (CGIP)
              </Link>
              <Link to="/programmes" className="block px-4 py-3 text-sm text-slate-text hover:bg-cloud-white hover:text-electric-blue rounded-lg font-bold transition-colors">
                View All Programmes
              </Link>
            </div>
          </div>

          <Link to="/students" className="text-sm font-semibold text-slate-text hover:text-electric-blue transition-colors">For Students</Link>
          <Link to="/institutions" className="text-sm font-semibold text-slate-text hover:text-electric-blue transition-colors">For Institutions</Link>
          <Link to="/companies" className="text-sm font-semibold text-slate-text hover:text-electric-blue transition-colors">For Companies</Link>
          <Link to="/contact" className="text-sm font-semibold text-slate-text hover:text-electric-blue transition-colors">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link to="/apply" className="hidden lg:block">
            <Button variant="primary">Apply / Enquire Now</Button>
          </Link>
          
          <button className="lg:hidden text-midnight-navy p-2 focus:outline-none" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-soft-border shadow-xl py-6 px-6 flex flex-col gap-4">
          <Link to="/about" className="font-bold text-midnight-navy py-2" onClick={toggleMobileMenu}>About</Link>
          <Link to="/programmes" className="font-bold text-midnight-navy py-2" onClick={toggleMobileMenu}>Programmes</Link>
          <Link to="/programmes/cgip" className="font-bold text-electric-blue py-2 pl-4 border-l-2 border-electric-blue" onClick={toggleMobileMenu}>- CGIP Details</Link>
          <Link to="/students" className="font-bold text-midnight-navy py-2" onClick={toggleMobileMenu}>For Students</Link>
          <Link to="/institutions" className="font-bold text-midnight-navy py-2" onClick={toggleMobileMenu}>For Institutions</Link>
          <Link to="/companies" className="font-bold text-midnight-navy py-2" onClick={toggleMobileMenu}>For Companies</Link>
          <Link to="/contact" className="font-bold text-midnight-navy py-2" onClick={toggleMobileMenu}>Contact</Link>
          <Link to="/apply" onClick={toggleMobileMenu} className="mt-4">
            <Button variant="primary" className="w-full">Apply / Enquire Now</Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
