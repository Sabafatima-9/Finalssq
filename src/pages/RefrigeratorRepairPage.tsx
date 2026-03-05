import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { Link } from 'react-router-dom';

const RefrigeratorRepairPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Refrigerator Repair Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert refrigerator repair services to keep your food fresh and appliances running smoothly. We service all major brands with genuine parts and expert technicians.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Refrigerator Problems We Fix</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Refrigerator not cooling properly</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Excessive frost buildup</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Water leakage inside fridge</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Loud noises or vibrations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ice maker not working</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Door seal problems</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Refrigerator Services Include</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Compressor repair and replacement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Gas refilling and leak detection</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Thermostat replacement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Door gasket replacement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Defrost system repair</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ice maker and water dispenser repair</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-600 rounded-lg p-8 text-center text-white mb-16">
            <h2 className="text-3xl font-bold mb-4">Brands We Service</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-semibold">LG</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-semibold">Samsung</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-semibold">Whirlpool</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-semibold">Godrej</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-semibold">Videocon</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-semibold">Panasonic</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-semibold">Bosch</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-semibold">And More...</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Refrigerator Fixed Today</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+917842595942"
                className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
              >
                Call Now: +91 7842595942
              </a>
              <a 
                href="https://wa.me/917842595942?text=Hello!%20I%20need%20refrigerator%20repair%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 transition-colors font-medium text-center"
              >
                WhatsApp Us
              </a>
              <Link 
                to="/contact"
                className="bg-gray-600 text-white py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors font-medium text-center"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default RefrigeratorRepairPage;
