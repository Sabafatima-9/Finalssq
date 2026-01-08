import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/privacy-policy" element={
            <>
              <Header />
              <PrivacyPolicy />
              <Footer />
            </>
          } />
          <Route path="/terms-and-conditions" element={
            <>
              <Header />
              <TermsAndConditions />
              <Footer />
            </>
          } />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
