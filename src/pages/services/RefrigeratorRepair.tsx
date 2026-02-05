import React from 'react';
import { Phone, Clock, Shield, CheckCircle, Wrench, Snowflake, Droplets } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

const RefrigeratorRepair: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-cyan-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-cyan-600 p-4 rounded-full">
                  <Snowflake className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Refrigerator Repair Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert refrigerator repair and maintenance services. Keep your food fresh 
                with our fast and reliable repair solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917842595942"
                  className="inline-flex items-center justify-center px-8 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors"
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
              Our Refrigerator Repair Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Wrench className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cooling Issues</h3>
                <p className="text-gray-600">Fix refrigerator not cooling, warm freezer, and temperature problems.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Droplets className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Water Leakage</h3>
                <p className="text-gray-600">Repair water leakage from refrigerator and fix drainage issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Snowflake className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ice Maker Repair</h3>
                <p className="text-gray-600">Fix ice maker not working, ice dispenser issues, and frozen problems.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Clock className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compressor Issues</h3>
                <p className="text-gray-600">Compressor repair and replacement for all refrigerator models.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Shield className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gas Refilling</h3>
                <p className="text-gray-600">Refrigerant gas refilling and leak detection services.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <CheckCircle className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Door Seal Repair</h3>
                <p className="text-gray-600">Fix door gaskets and seals to maintain proper cooling.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brands We Service */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Brands We Service
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
              {['LG', 'Samsung', 'Whirlpool', 'Godrej', 'Videocon', 'Panasonic'].map((brand) => (
                <div key={brand} className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="font-semibold text-gray-700">{brand}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Service Square for Refrigerator Repair?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <Clock className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Same Day Service</h3>
                <p className="text-gray-600">Fast response and same-day repair for urgent refrigerator issues.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Genuine Parts</h3>
                <p className="text-gray-600">Only authentic spare parts for lasting repairs and warranty.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Diagnosis</h3>
                <p className="text-gray-600">Accurate problem identification and effective solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cyan-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Refrigerator Not Cooling? Call Us Now!
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Don't let your food spoil! Get professional refrigerator repair 
              services in Hyderabad today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917842595942"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-cyan-600 rounded-full hover:bg-gray-100 transition-colors font-semibold"
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

export default RefrigeratorRepair;
