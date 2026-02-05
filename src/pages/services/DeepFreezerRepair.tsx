import React from 'react';
import { Phone, Clock, Shield, CheckCircle, Wrench, Snowflake, Thermometer } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

const DeepFreezerRepair: React.FC = () => {
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
                Deep Freezer Repair Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert deep freezer repair and maintenance services. Keep your frozen goods 
                safe with our reliable cold storage solutions.
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
              Our Deep Freezer Repair Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Wrench className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cooling Issues</h3>
                <p className="text-gray-600">Fix deep freezer not cooling, warm freezer, and temperature problems.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Snowflake className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Frost Buildup</h3>
                <p className="text-gray-600">Resolve excessive frost formation and defrosting issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Thermometer className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Thermostat Repair</h3>
                <p className="text-gray-600">Repair and replace faulty thermostats and temperature controls.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Clock className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compressor Issues</h3>
                <p className="text-gray-600">Compressor repair and replacement for all deep freezer models.</p>
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

        {/* Types of Deep Freezers */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Types of Deep Freezers We Service
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Chest Freezers</h3>
                <p className="text-gray-600">Top-loading chest freezers for home and commercial use</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Upright Freezers</h3>
                <p className="text-gray-600">Front-loading upright freezers with multiple shelves</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-semibold mb-2">Commercial Freezers</h3>
                <p className="text-gray-600">Large-capacity freezers for business and industrial use</p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Common Deep Freezer Problems We Fix
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Not Freezing Properly</h3>
                <p className="text-gray-600">Inadequate cooling, inconsistent temperatures, and partial freezing issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Excessive Noise</h3>
                <p className="text-gray-600">Loud humming, buzzing, or rattling noises from the compressor or fans.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Frost Buildup</h3>
                <p className="text-gray-600">Too much ice formation affecting cooling efficiency and storage space.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Door Issues</h3>
                <p className="text-gray-600">Door not closing properly, broken seals, and air leakage problems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Service Square for Deep Freezer Repair?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <Clock className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
                <p className="text-gray-600">Quick response to prevent food spoilage and loss.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">Specialized in deep freezer and cold storage repair.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
                <p className="text-gray-600">Competitive rates with transparent pricing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cyan-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Deep Freezer Not Working? Save Your Food!
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Don't let your frozen goods spoil! Get professional deep freezer repair service today.
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

export default DeepFreezerRepair;
