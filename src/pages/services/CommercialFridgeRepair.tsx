import React from 'react';
import { Phone, Clock, Shield, CheckCircle, Wrench, Thermometer, Truck } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

const CommercialFridgeRepair: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 to-red-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-red-600 p-4 rounded-full">
                  <Truck className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Commercial Fridge Repair Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional commercial refrigerator repair for restaurants, hotels, and businesses. 
                Fast service to minimize downtime and protect your inventory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917842595942"
                  className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
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
              Our Commercial Fridge Repair Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Wrench className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Emergency Repairs</h3>
                <p className="text-gray-600">24/7 emergency service for commercial refrigerator breakdowns.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Thermometer className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Temperature Issues</h3>
                <p className="text-gray-600">Fix cooling problems and temperature fluctuations in commercial units.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Truck className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compressor Repair</h3>
                <p className="text-gray-600">Expert compressor repair and replacement for large commercial units.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Clock className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Preventive Maintenance</h3>
                <p className="text-gray-600">Regular maintenance to prevent breakdowns and ensure efficiency.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Shield className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gas Refilling</h3>
                <p className="text-gray-600">Commercial refrigerant gas refilling and leak detection services.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <CheckCircle className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Electrical Issues</h3>
                <p className="text-gray-600">Repair electrical problems, thermostats, and control systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Commercial Units */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Types of Commercial Units We Service
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Reach-in Refrigerators</h3>
                <p className="text-gray-600">Standard reach-in units for restaurants and cafes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Walk-in Coolers</h3>
                <p className="text-gray-600">Large walk-in coolers and cold storage rooms</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Display Refrigerators</h3>
                <p className="text-gray-600">Glass door display units for retail stores</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Industries We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {['Restaurants', 'Hotels', 'Cafes', 'Bakeries', 'Supermarkets', 'Pharmacies', 'Hospitals', 'Catering'].map((industry) => (
                <div key={industry} className="bg-white p-6 rounded-lg shadow text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Service Square for Commercial Fridge Repair?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-600">Round-the-clock service to protect your business and inventory.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Business Priority</h3>
                <p className="text-gray-600">We understand commercial needs and provide fast, reliable service.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Certified Technicians</h3>
                <p className="text-gray-600">Experienced technicians specialized in commercial refrigeration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Commercial Fridge Not Cooling? Call Us Now!
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Protect your business and inventory with our fast commercial refrigerator repair services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917842595942"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-600 rounded-full hover:bg-gray-100 transition-colors font-semibold"
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

export default CommercialFridgeRepair;
