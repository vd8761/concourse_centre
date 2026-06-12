import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CGIP from './pages/CGIP';
import Students from './pages/Students';
import Institutions from './pages/Institutions';
import Companies from './pages/Companies';
import About from './pages/About';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import Programmes from './pages/Programmes';
import Network from './pages/Network';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable default browser scroll restoration so it doesn't fight us
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/cgip" element={<CGIP />} />
            <Route path="/students" element={<Students />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/network" element={<Network />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
