import React from 'react';
import { Phone, Clock, Shield, CheckCircle, Wrench, Droplets, RotateCw } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

const WashingMachineRepair: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-purple-600 p-4 rounded-full">
                  <RotateCw className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Washing Machine Repair Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional washing machine repair and maintenance services. 
                Get your laundry routine back on track quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917842595942"
                  className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
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
              Our Washing Machine Repair Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Wrench className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Not Spinning</h3>
                <p className="text-gray-600">Fix washing machine not spinning, drum issues, and motor problems.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Droplets className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Water Issues</h3>
                <p className="text-gray-600">Repair water filling, draining problems, and valve issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <RotateCw className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Door Lock Issues</h3>
                <p className="text-gray-600">Fix door lock problems and safety switch repairs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Clock className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Timer Control</h3>
                <p className="text-gray-600">Repair timer malfunctions and control board issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Shield className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Noise & Vibration</h3>
                <p className="text-gray-600">Fix excessive noise, vibration, and balancing issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Installation</h3>
                <p className="text-gray-600">Professional installation and setup of washing machines.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Washing Machines */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Types of Washing Machines We Service
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Top Load</h3>
                <p className="text-gray-600">Semi-automatic and fully automatic top load washing machines</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Front Load</h3>
                <p className="text-gray-600">Front load washing machines with advanced features</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Washer Dryer</h3>
                <p className="text-gray-600">Combo washer dryer units and standalone dryers</p>
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
              {['LG', 'Samsung', 'Whirlpool', 'IFB', 'Bosch', 'Panasonic'].map((brand) => (
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
              Why Choose Service Square for Washing Machine Repair?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Service</h3>
                <p className="text-gray-600">Same-day diagnosis and repair for most washing machine issues.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
                <p className="text-gray-600">Transparent pricing with no hidden charges.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">Trained professionals for all washing machine brands.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Washing Machine Not Working? We Can Help!
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get your washing machine repaired by experts in Hyderabad. 
              Call us for fast and reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917842595942"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-colors font-semibold"
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

export default WashingMachineRepair;
