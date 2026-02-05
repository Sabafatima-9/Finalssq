import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import NotFound from './components/NotFound';

// Import service pages
import ACRepair from './pages/services/ACRepair';
import RefrigeratorRepair from './pages/services/RefrigeratorRepair';
import WashingMachineRepair from './pages/services/WashingMachineRepair';
import MicrowaveRepair from './pages/services/MicrowaveRepair';
import CommercialFridgeRepair from './pages/services/CommercialFridgeRepair';
import DeepFreezerRepair from './pages/services/DeepFreezerRepair';
import DishWasherRepair from './pages/services/DishWasherRepair';
import GeneralApplianceRepair from './pages/services/GeneralApplianceRepair';

// Import information pages
import AboutPage from './pages/About';
import FAQ from './pages/FAQ';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsAndConditionsPage from './pages/TermsAndConditions';


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
      <Suspense fallback={<div>Loading...</div>}>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Service Detail Pages */}
            <Route path="/services/ac-repair" element={<ACRepair />} />
            <Route path="/services/refrigerator-repair" element={<RefrigeratorRepair />} />
            <Route path="/services/washing-machine-repair" element={<WashingMachineRepair />} />
            <Route path="/services/microwave-repair" element={<MicrowaveRepair />} />
            <Route path="/services/commercial-fridge-repair" element={<CommercialFridgeRepair />} />
            <Route path="/services/deep-freezer-repair" element={<DeepFreezerRepair />} />
            <Route path="/services/dishwasher-repair" element={<DishWasherRepair />} />
            <Route path="/services/general-appliance-repair" element={<GeneralApplianceRepair />} />
            
            {/* Information Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            
            {/* 404 Page */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
