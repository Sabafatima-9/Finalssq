import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      <a
        href="https://wa.me/917842595947?text=Could%20you%20kindly%20provide%20more%20details%20about%20the%20services%20you%20offer%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>
      <a
        href="tel:+917842595947"
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group animate-pulse"
        aria-label="Call Now"
      >
        <Phone className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
