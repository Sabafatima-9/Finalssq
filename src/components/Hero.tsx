import { useState } from 'react';
import { MessageCircle,  } from 'lucide-react';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    
    try {
      await fetch('https://formsubmit.co/205187cd4a80c620be27b2846011cccd', {
        method: 'POST',
        body: new FormData(form),
      });
      form.reset();
      setShowModal(false);
      alert('Thank you for your inquiry! We will contact you shortly.');
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('There was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative">
      <div className="relative z-0">
        <div className="absolute inset-0">
          <img 
            src="/images/backg.jpg" 
            alt="" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-700/20"></div>
        </div>
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/90 text-black px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm shadow-md">
            <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
            <span className="text-black">Available 24/7 for Emergency Service</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
            24/7 Electronic Appliance
            <span className="block text-gray-800 mt-2">Repair Services in Hyderabad</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-12 max-w-2xl mx-auto">
            Trusted experts for home & commercial appliances. Fast, reliable, and professional service at your doorstep.
          </p>
          {/* CTA Button */}
          <div className={`relative mb-8 text-center transition-all duration-300 ${showModal ? 'z-0' : 'z-10'}`}>
            <button
              onClick={() => setShowModal(true)}
              className="w-full max-w-md bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg whitespace-normal mx-auto block"
            >
              Book Service Now & Get up to ₹500 Instant Discount on Repair & Service
            </button>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full max-w-2xl mx-auto">
            <a
              href="https://wa.me/917842595942?text=Hello!%20I%20need%20help%20with%20appliance%20repair%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get a Quote
            </button>
          </div>

          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Quote</h3>
                <p className="text-gray-600 mb-6">Request a free estimate for your repair</p>

                <form 
                  id="get-quote-form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="_subject" value="New ServiceSquare Form Submission" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="refrigerator">Refrigerator Repair</option>
                      <option value="commercial">Commercial Fridge Repair</option>
                      <option value="freezer">Deep Freezer Repair</option>
                      <option value="washing">Washing Machine Repair</option>
                      <option value="ac">AC Repair</option>
                      <option value="microwave">Microwave / Oven Repair</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Request Free Quote'}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Statistics section removed as requested */}
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
