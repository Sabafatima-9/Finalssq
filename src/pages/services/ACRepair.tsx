import React from 'react';
import { Phone, Clock, Shield, CheckCircle, Wrench, Thermometer, Wind } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

const ACRepair: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-full">
                  <Wind className="w-12 h-12 text-white" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AC Repair & Service in Hyderabad
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Professional air conditioner repair and maintenance services in Hyderabad,
                Gachibowli, Kukatpally, Madhapur, and nearby areas.
                Same-day service with warranty on repairs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917842595942"
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +91 78425 95942
                </a>
                <a
                  href="tel:+91784259547"
                  className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 78425 95947
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES OFFERED */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our AC Repair Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <Wrench className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">AC Installation</h3>
                <p className="text-gray-600">Leak-proof installation for all AC brands.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <Thermometer className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gas Refilling</h3>
                <p className="text-gray-600">Genuine refrigerant with leak detection.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <Wind className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Jet Cleaning</h3>
                <p className="text-gray-600">Deep cleaning for ice-cold air and hygiene.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <Clock className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Emergency Repair</h3>
                <p className="text-gray-600">Same-day AC repair across Hyderabad.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Annual Maintenance</h3>
                <p className="text-gray-600">AMC plans for long-lasting performance.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compressor Repair</h3>
                <p className="text-gray-600">Expert compressor repair & replacement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION (IMPORTANT FOR ADS) */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">AC Service Pricing</h2>
            <p className="text-gray-600 mb-8">Transparent pricing with no hidden charges</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border p-6 rounded-lg bg-white">
                <h3 className="font-semibold text-lg">Inspection</h3>
                <p className="text-blue-600 font-bold mt-2">₹299</p>
              </div>
              <div className="border p-6 rounded-lg bg-white">
                <h3 className="font-semibold text-lg">AC Service</h3>
                <p className="text-blue-600 font-bold mt-2">₹499</p>
              </div>
      
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Service Square?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
              <div>
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Fast response across Hyderabad.</p>
              </div>
              <div>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Warranty Assured</h3>
                <p className="text-gray-600">Service warranty on all repairs.</p>
              </div>
              <div>
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">Certified & experienced professionals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Book AC Repair Service Now
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Call now and get same-day AC repair in Hyderabad.
            </p>

            <a
              href="tel:+917842595942"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 78425 95942
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ACRepair;
