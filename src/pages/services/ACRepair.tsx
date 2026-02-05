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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-full">
                  <Wind className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AC Repair Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional air conditioner repair and maintenance services in Hyderabad. 
                Fast, reliable, and affordable solutions for all AC brands.
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

        {/* Services Offered */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our AC Repair Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Wrench className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">AC Installation</h3>
                <p className="text-gray-600">Professional installation of all AC brands with proper wiring and mounting.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Thermometer className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gas Refilling</h3>
                <p className="text-gray-600">AC gas refilling and leak detection services for optimal cooling.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Clock className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Emergency Repair</h3>
                <p className="text-gray-600">24/7 emergency AC repair services for urgent cooling needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Annual Maintenance</h3>
                <p className="text-gray-600">Regular AC servicing and maintenance for long-lasting performance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Wind className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compressor Repair</h3>
                <p className="text-gray-600">Expert compressor repair and replacement services.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cleaning Services</h3>
                <p className="text-gray-600">Deep cleaning of AC filters, coils, and drainage systems.</p>
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
              {['LG', 'Samsung', 'Daikin', 'Hitachi', 'Blue Star', 'Voltas'].map((brand) => (
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
              Why Choose Service Square for AC Repair?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
                <p className="text-gray-600">Round-the-clock AC repair services for emergencies.</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Warranty Assured</h3>
                <p className="text-gray-600">All repairs come with service warranty for peace of mind.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">Certified technicians with years of experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need AC Repair? We're Here to Help!
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get fast and reliable AC repair services in Hyderabad. 
              Call us now for instant assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917842595942"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-semibold"
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

export default ACRepair;
