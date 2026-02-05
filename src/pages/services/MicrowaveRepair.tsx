import React from 'react';
import { Phone, Clock, Shield, CheckCircle, Wrench, Zap, Utensils } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

const MicrowaveRepair: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-orange-600 p-4 rounded-full">
                  <Zap className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Microwave Repair Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert microwave oven repair services. Get your kitchen appliance 
                working perfectly again with our professional technicians.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917842595942"
                  className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
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
              Our Microwave Repair Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Wrench className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Not Heating</h3>
                <p className="text-gray-600">Fix microwave not heating, magnetron, and high voltage issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Zap className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Turntable Issues</h3>
                <p className="text-gray-600">Repair turntable not rotating, motor, and coupler problems.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Utensils className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Control Panel</h3>
                <p className="text-gray-600">Fix display issues, keypad problems, and control board repairs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Clock className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Door Issues</h3>
                <p className="text-gray-600">Repair door latch, switches, and safety interlock problems.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Shield className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Strange Noises</h3>
                <p className="text-gray-600">Fix unusual sounds, grinding, and buzzing noises.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Installation</h3>
                <p className="text-gray-600">Professional microwave installation and setup services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Microwaves */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Types of Microwaves We Service
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Countertop</h3>
                <p className="text-gray-600">Standard countertop microwave ovens</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Built-in</h3>
                <p className="text-gray-600">Built-in microwave ovens and wall-mounted units</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Convection</h3>
                <p className="text-gray-600">Convection microwave ovens with advanced features</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brands We Service */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Brands We Service
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
              {['LG', 'Samsung', 'Panasonic', 'Whirlpool', 'IFB', 'Bajaj'].map((brand) => (
                <div key={brand} className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="font-semibold text-gray-700">{brand}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Service Square for Microwave Repair?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
                <p className="text-gray-600">Quick diagnosis and repair for all microwave issues.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-gray-600">Safe handling of high-voltage components and radiation safety.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Genuine Parts</h3>
                <p className="text-gray-600">Authentic replacement parts for reliable repairs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-orange-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Microwave Not Working? Call Us Now!
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Get your microwave repaired by certified technicians in Hyderabad. 
              Fast, safe, and reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917842595942"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-orange-600 rounded-full hover:bg-gray-100 transition-colors font-semibold"
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

export default MicrowaveRepair;
