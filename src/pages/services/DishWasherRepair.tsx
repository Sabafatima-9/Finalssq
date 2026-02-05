import React from 'react';
import { Phone, Clock, Shield, CheckCircle, Wrench, Droplets, Home } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

const DishWasherRepair: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-teal-600 p-4 rounded-full">
                  <Home className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dishwasher Repair Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional dishwasher repair and maintenance services. 
                Get your kitchen helper working perfectly again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917842595942"
                  className="inline-flex items-center justify-center px-8 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
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

        {/* Services Offered */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Dishwasher Repair Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Wrench className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Not Cleaning Properly</h3>
                <p className="text-gray-600">Fix dishes coming out dirty, spots, and film on glassware.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Droplets className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Water Issues</h3>
                <p className="text-gray-600">Repair water filling, draining problems, and spray arm issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Home className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Not Starting</h3>
                <p className="text-gray-600">Fix dishwasher not starting, power issues, and control problems.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Clock className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cycle Problems</h3>
                <p className="text-gray-600">Repair cycle not completing, stuck in middle, or timing issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Shield className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Leaking Issues</h3>
                <p className="text-gray-600">Fix water leaks from door, hoses, and internal components.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <CheckCircle className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Strange Noises</h3>
                <p className="text-gray-600">Fix grinding, humming, and unusual noises during operation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Dishwashers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Types of Dishwashers We Service
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Built-in Dishwashers</h3>
                <p className="text-gray-600">Standard built-in dishwashers for home kitchens</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Portable Dishwashers</h3>
                <p className="text-gray-600">Freestanding and portable dishwasher units</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Commercial Dishwashers</h3>
                <p className="text-gray-600">High-capacity dishwashers for restaurants and businesses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Common Dishwasher Problems We Fix
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Poor Cleaning Performance</h3>
                <p className="text-gray-600">Dishes not getting clean, food particles remaining, and cloudy glassware.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Water Drainage Issues</h3>
                <p className="text-gray-600">Water not draining properly, standing water at bottom, and blockages.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Door Latch Problems</h3>
                <p className="text-gray-600">Door not closing, latch not engaging, and leaks during operation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Detergent Issues</h3>
                <p className="text-gray-600">Detergent not dispensing, soap residue, and rinse aid problems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Service Square for Dishwasher Repair?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <Clock className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Same Day Service</h3>
                <p className="text-gray-600">Fast diagnosis and repair for most dishwasher issues.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Diagnosis</h3>
                <p className="text-gray-600">Accurate problem identification and effective solutions.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Genuine Parts</h3>
                <p className="text-gray-600">Only authentic spare parts for lasting repairs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Dishwasher Not Working? We Can Fix It!
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Get your dishwasher repaired by experts and enjoy clean, spot-free dishes again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917842595942"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-teal-600 rounded-full hover:bg-gray-100 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 78425 95942
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default DishWasherRepair;
