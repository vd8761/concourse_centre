import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BridgeSection from '../components/home/BridgeSection';
import WhoWeAreSection from '../components/home/WhoWeAreSection';
import ProgrammesSection from '../components/home/ProgrammesSection';
import CgipSection from '../components/home/CgipSection';
import WhyTouchmarkSection from '../components/home/WhyTouchmarkSection';
import ForInstitutionsSection from '../components/home/ForInstitutionsSection';
import ForCompaniesSection from '../components/home/ForCompaniesSection';
import GlobalNetworkSection from '../components/home/GlobalNetworkSection';
import EnquirySection from '../components/home/EnquirySection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <BridgeSection />
      <WhoWeAreSection />
      <ProgrammesSection />
      <CgipSection />
      <WhyTouchmarkSection />
      <ForInstitutionsSection />
      <ForCompaniesSection />
      <GlobalNetworkSection />
      <EnquirySection />
    </main>
  );
};

export default Home;
