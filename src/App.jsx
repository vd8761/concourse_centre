import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CGIP from './pages/CGIP';
import ForStudents from './pages/ForStudents';
import ForInstitutions from './pages/ForInstitutions';
import ForCompanies from './pages/ForCompanies';
import Programmes from './pages/Programmes';
import About from './pages/About';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/programmes/cgip" element={<CGIP />} />
          <Route path="/students" element={<ForStudents />} />
          <Route path="/institutions" element={<ForInstitutions />} />
          <Route path="/companies" element={<ForCompanies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
