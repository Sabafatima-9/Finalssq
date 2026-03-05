import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AC Repair',
      description: 'Professional air conditioning repair and maintenance services for all brands and models.',
      features: ['Fast diagnosis', 'Genuine parts', 'Warranty on service', 'Emergency support'],
      link: '/services/ac-repair'
    },
    {
      title: 'Refrigerator Repair',
      description: 'Expert refrigerator repair services to keep your food fresh and appliances running smoothly.',
      features: ['Cooling issues fixed', 'Compressor repair', 'Gas refilling', 'Door seal replacement'],
      link: '/services/refrigerator-repair'
    },
    {
      title: 'Washing Machine Repair',
      description: 'Complete washing machine repair solutions for all types and brands of washing machines.',
      features: ['Motor repair', 'Drum issues', 'Leakage fixes', 'Electronic control repair'],
      link: '/services/washing-machine-repair'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive appliance repair services with expert technicians and genuine parts to ensure your appliances run smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Help Right Now?</h2>
            <p className="text-xl mb-6">Our expert technicians are ready to help you 24/7</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+917842595942"
                className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center"
              >
                Call Now: +91 7842595942
              </a>
              <a 
                href="https://wa.me/917842595942?text=Hello!%20I%20need%20help%20with%20appliance%20repair%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 transition-colors font-medium text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default ServicesPage;
