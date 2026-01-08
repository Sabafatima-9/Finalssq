import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

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
            <a
              href="tel:+917842595947"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2 font-medium shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4" />
              <span>Call for Service</span>
            </a>
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
              href="https://wa.me/917842595947?text=Could%20you%20kindly%20provide%20more%20details%20about%20the%20services%20you%20offer%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-center font-medium"
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
