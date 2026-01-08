import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img 
                  src="/images/logoooo.png" 
                  alt="Service Square Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Service Square</h3>
                <p className="text-sm text-gray-400">Repair Services</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for professional appliance repair services across Hyderabad. Available 24/7 for all your repair needs.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('service-areas')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Service Areas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Key Service Areas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                'Hyderabad',
                'Secunderabad',
                'Cyberabad',
                'Financial District',
                'Rachakonda',
                'And Many More Areas'
              ].map((area, index) => (
                <li key={index} className="hover:text-white transition-colors">
                  <a href="tel:+917842595947" className="block py-1">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="https://wa.me/917842595947?text=Could%20you%20kindly%20provide%20more%20details%20about%20the%20services%20you%20offer%3F" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm block">
                    WhatsApp: +91 7842595947
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+917842595947" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Call: +91 7842595947
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@hyderabadrefrigeration.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                 Servicesquare09@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Secunderabad & Hyderabad
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Working Hours: 8:00 AM - 9:00 PM (7 days a week)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#2E5AAC] p-4 rounded-lg mb-8 text-center">
          <p className="text-white text-sm font-medium">
            A nominal fee will be charged for the initial service visit.
            <br />
            Additional charges, if any, will be discussed before proceeding.
          </p>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-center text-gray-400 text-sm">
              © 2025 ServiceSquare. All rights reserved. Designed by Saba Fatima.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/terms-and-conditions" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <p className="text-gray-400 mt-2 text-center">
            Owner: Shaik Azeez | Contact: 
            <a href="tel:7842595947" className="text-white hover:underline">7842595947  (MD Noorullah) ||  </a>
            <a href="tel:7842595945" className="text-white hover:underline">  7842595945  (Shaik Azeez)</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
