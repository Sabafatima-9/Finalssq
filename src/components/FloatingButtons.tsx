import { MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

export default function FloatingButtons() {
  const [isCallMenuOpen, setIsCallMenuOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917842595942?text=Hello!%20I%20need%20help%20with%20appliance%20repair%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Call Button with Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsCallMenuOpen(!isCallMenuOpen)}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse"
          aria-label="Call Options"
          aria-expanded={isCallMenuOpen}
        >
          <Phone className="w-7 h-7" />
        </button>
        
        {isCallMenuOpen && (
          <div className="absolute bottom-full right-0 mb-3 w-56 bg-white rounded-lg shadow-xl overflow-hidden z-50">
            <a
              href="tel:+917842595942"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              onClick={() => setIsCallMenuOpen(false)}
            >
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                +91 7842595942 (General)
              </span>
            </a>
            <a
              href="tel:+917842595943"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-100"
              onClick={() => setIsCallMenuOpen(false)}
            >
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                +91 7842595943 (Repair)
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
