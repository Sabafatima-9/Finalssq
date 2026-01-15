import { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img 
                src="/images/logoooo.png" 
                alt="Service Square Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                Service Square
              </h1>
              <p className="text-xs text-gray-600"> Service and Repair Works</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('service-areas')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Service Areas
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </button>
            <div className="relative group">
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2 font-medium shadow-lg hover:shadow-xl">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a
                  href="tel:+917842595942"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <span className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-blue-500" />
                    +91 7842595942 (General)
                  </span>
                </a>
                <a
                  href="tel:+917842595943"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-100"
                >
                  <span className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-blue-500" />
                    +91 7842595943 (Repair)
                  </span>
                </a>
              </div>
            </div>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('service-areas')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">
              Service Areas
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </button>
            <a
              href="https://wa.me/917842595942?text=Hello!%20I%20need%20help%20with%20appliance%20repair%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors text-center font-medium flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <div className="space-y-2 w-full">
              <a
                href="tel:+917842595942"
                className="block w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-center font-medium flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>General: +91 7842595942</span>
              </a>
              <a
                href="tel:+917842595943"
                className="block w-full bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors text-center font-medium flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Repair: +91 7842595943</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
