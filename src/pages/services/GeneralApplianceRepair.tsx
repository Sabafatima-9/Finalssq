import React from 'react';
import { Phone, Clock, Shield, CheckCircle, Wrench, Settings, Zap } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';

const GeneralApplianceRepair: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-gray-600 p-4 rounded-full">
                  <Settings className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                General Appliance Repair Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive repair services for all home appliances. 
                One-stop solution for all your appliance repair needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917842595942"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
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
              Our General Appliance Repair Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Wrench className="w-8 h-8 text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Diagnosis & Repair</h3>
                <p className="text-gray-600">Expert diagnosis and repair for all types of home appliances.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Settings className="w-8 h-8 text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Installation</h3>
                <p className="text-gray-600">Professional installation and setup of new appliances.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Zap className="w-8 h-8 text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Electrical Issues</h3>
                <p className="text-gray-600">Repair electrical problems, wiring, and power supply issues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Clock className="w-8 h-8 text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
                <p className="text-gray-600">Regular maintenance and servicing to prevent breakdowns.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Shield className="w-8 h-8 text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Parts Replacement</h3>
                <p className="text-gray-600">Genuine spare parts replacement for all major brands.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <CheckCircle className="w-8 h-8 text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Emergency Service</h3>
                <p className="text-gray-600">24/7 emergency repair services for urgent appliance issues.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Appliances We Service */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Appliances We Service
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                'Air Conditioners',
                'Refrigerators',
                'Washing Machines',
                'Microwave Ovens',
                'Dishwashers',
                'Deep Freezers',
                'Water Purifiers',
                'Kitchen Chimneys',
                'Mixers & Grinders',
                'Electric Ovens',
                'Water Heaters',
                'Air Coolers'
              ].map((appliance) => (
                <div key={appliance} className="bg-white p-4 rounded-lg shadow text-center">
                  <h3 className="text-sm font-semibold text-gray-700">{appliance}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Service Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Book Service</h3>
                <p className="text-gray-600">Call us to schedule your appliance repair service</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Diagnosis</h3>
                <p className="text-gray-600">Our technician visits and diagnoses the problem</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Repair & Fix</h3>
                <p className="text-gray-600">Professional repair with genuine parts</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Check</h3>
                <p className="text-gray-600">Thorough testing to ensure proper functioning</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Service Square for General Appliance Repair?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <Clock className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">One-Stop Solution</h3>
                <p className="text-gray-600">All appliance repair services under one roof.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">Skilled professionals for all appliance types.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
                <p className="text-gray-600">Competitive pricing with no hidden charges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Any Appliance Problem? We Have the Solution!
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Get reliable and affordable repair services for all your home appliances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917842595942"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-600 rounded-full hover:bg-gray-100 transition-colors font-semibold"
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

export default GeneralApplianceRepair;
