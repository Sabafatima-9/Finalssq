import { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/services/ac-repair" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  AC Repair
                </Link>
                <Link to="/services/refrigerator-repair" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Refrigerator Repair
                </Link>
                <Link to="/services/washing-machine-repair" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Washing Machine Repair
                </Link>
                <Link to="/services/microwave-repair" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Microwave Repair
                </Link>
                <Link to="/services/commercial-fridge-repair" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Commercial Fridge Repair
                </Link>
                <Link to="/services/deep-freezer-repair" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Deep Freezer Repair
                </Link>
                <Link to="/services/dishwasher-repair" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Dishwasher Repair
                </Link>
                <Link to="/services/general-appliance-repair" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  General Appliance Repair
                </Link>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              FAQ
            </Link>
            <div className="relative group">
              <button className="bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-700 transition-colors flex items-center space-x-2 font-medium shadow-lg hover:shadow-xl">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
                <ChevronDown className="w-4 h-4" />
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
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <div className="space-y-2">
              <div className="text-gray-700 hover:text-blue-600 font-medium">Services</div>
              <div className="pl-4 space-y-1">
                <Link to="/services/ac-repair" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-1 text-sm text-gray-600 hover:text-blue-600">
                  AC Repair
                </Link>
                <Link to="/services/refrigerator-repair" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-1 text-sm text-gray-600 hover:text-blue-600">
                  Refrigerator Repair
                </Link>
                <Link to="/services/washing-machine-repair" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-1 text-sm text-gray-600 hover:text-blue-600">
                  Washing Machine Repair
                </Link>
                <Link to="/services/microwave-repair" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-1 text-sm text-gray-600 hover:text-blue-600">
                  Microwave Repair
                </Link>
                <Link to="/services/commercial-fridge-repair" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-1 text-sm text-gray-600 hover:text-blue-600">
                  Commercial Fridge Repair
                </Link>
                <Link to="/services/deep-freezer-repair" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-1 text-sm text-gray-600 hover:text-blue-600">
                  Deep Freezer Repair
                </Link>
                <Link to="/services/dishwasher-repair" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-1 text-sm text-gray-600 hover:text-blue-600">
                  Dishwasher Repair
                </Link>
                <Link to="/services/general-appliance-repair" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-1 text-sm text-gray-600 hover:text-blue-600">
                  General Appliance Repair
                </Link>
              </div>
            </div>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">
              FAQ
            </Link>
            <a
              href="https://wa.me/917842595942?text=Hello!%20I%20need%20help%20with%20appliance%20repair%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors text-center font-medium flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <div className="space-y-2 pt-2 border-t">
              <a href="tel:+917842595942" className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">
                📞 +91 7842595942 (General)
              </a>
              <a href="tel:+917842595943" className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">
                📞 +91 7842595943 (Repair)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
