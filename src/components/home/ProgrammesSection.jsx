import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { Briefcase, Rocket, BookOpen, Factory, Award, Building2, ArrowRight } from 'lucide-react';

const ProgrammesSection = ({ hideHeader = false }) => {
  const programmes = [
    {
      title: 'Concourse Global Internship Programme',
      description: 'Our flagship remote international internship placement programme.',
      icon: <Briefcase size={32} className="text-white" />,
      status: 'Active',
      statusColor: 'bg-verified-emerald text-white',
      isFlagship: true,
      iconBg: 'bg-electric-blue'
    },
    {
      title: 'Concourse Venture Sprint Programme',
      description: 'Collaborate with global startups on high-impact sprints.',
      icon: <Rocket size={24} className="text-electric-blue" />,
      status: 'Coming Soon',
      statusColor: 'bg-slate-text/10 text-slate-text',
      iconBg: 'bg-electric-blue/10'
    },
    {
      title: 'Concourse Research Fellowship',
      description: 'Assist in international academic and industry research.',
      icon: <BookOpen size={24} className="text-electric-blue" />,
      status: 'Upcoming',
      statusColor: 'bg-slate-text/10 text-slate-text',
      iconBg: 'bg-electric-blue/10'
    },
    {
      title: 'Concourse Industry Immersion',
      description: 'Deep-dive into specific global industry sectors.',
      icon: <Factory size={24} className="text-electric-blue" />,
      status: 'Upcoming',
      statusColor: 'bg-slate-text/10 text-slate-text',
      iconBg: 'bg-electric-blue/10'
    },
    {
      title: 'Concourse Global Skills Certification',
      description: 'Certify your competencies for the international market.',
      icon: <Award size={24} className="text-electric-blue" />,
      status: 'Upcoming',
      statusColor: 'bg-slate-text/10 text-slate-text',
      iconBg: 'bg-electric-blue/10'
    },
    {
      title: 'Institution Partnership Programme',
      description: 'Structured MOUs with academic institutions.',
      icon: <Building2 size={24} className="text-prestige-gold" />,
      status: 'Open for Partnership',
      statusColor: 'bg-prestige-gold/20 text-prestige-gold font-bold',
      iconBg: 'bg-prestige-gold/10'
    }
  ];

  const flagship = programmes.find(p => p.isFlagship);
  const others = programmes.filter(p => !p.isFlagship);

  return (
    <section className="py-20 lg:py-32 bg-cloud-white">
      <div className="container mx-auto px-6">
        {!hideHeader && (
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-prestige-gold/10 rounded-full mb-6">
              <span className="text-prestige-gold font-bold tracking-wider uppercase text-sm">Explore Opportunities</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-midnight-navy mb-6">Initiatives Under Touchmark Concourse Centre</h2>
            <p className="max-w-2xl mx-auto text-slate-text opacity-80 text-lg">Discover our structured pathways designed to connect merit with opportunity on a global scale.</p>
          </div>
        )}
        
        <div className="flex flex-col gap-8">
          {/* Featured Flagship Programme */}
          {flagship && (
            <Card hoverEffect={true} className="w-full text-left p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-500 group-hover:scale-150"></div>
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl ${flagship.iconBg} flex items-center justify-center shadow-lg shadow-electric-blue/20`}>
                      {flagship.icon}
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-prestige-gold text-midnight-navy font-bold text-xs uppercase tracking-wider">Flagship</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${flagship.statusColor}`}>{flagship.status}</span>
                    </div>
                  </div>
                  <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-midnight-navy mb-4">{flagship.title}</h3>
                  <p className="text-slate-text opacity-80 text-lg mb-8 max-w-3xl leading-relaxed">{flagship.description}</p>
                  
                  <Link to="/programmes/cgip" className="inline-flex items-center text-electric-blue font-bold text-lg hover:text-midnight-navy transition-colors">
                    Explore Programme <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            </Card>
          )}

          {/* Standard Grid for other programmes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {others.map((prog, index) => (
              <Card key={index} hoverEffect={true} className="h-full flex flex-col p-8 group">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${prog.iconBg} group-hover:scale-110 transition-transform`}>
                    {prog.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${prog.statusColor}`}>{prog.status}</span>
                </div>
                <h3 className="font-bold text-midnight-navy text-xl mb-3">{prog.title}</h3>
                <p className="text-slate-text opacity-80 mb-8 flex-grow leading-relaxed">{prog.description}</p>
                
                <div className="mt-auto pt-6 border-t border-soft-border">
                  <Link to="/programmes" className="inline-flex items-center text-sm font-bold text-electric-blue hover:text-midnight-navy transition-colors">
                    Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammesSection;
