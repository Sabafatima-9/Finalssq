import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ name: '', phone: '', service: '' });
    setShowModal(false);
  };

  return (
    <section id="home" className="relative pt-20 pb-4 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/backg.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-700/20"></div>
      </div>
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
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a
              href="https://wa.me/917842595947?text=Could%20you%20kindly%20provide%20more%20details%20about%20the%20services%20you%20offer%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
            >
              WhatsApp Us
            </a>
            <button
              className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              onClick={() => setShowModal(true)}
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

                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
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
                      value={formData.phone}
                      onChange={handleInputChange}
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
                      value={formData.service}
                      onChange={handleInputChange}
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
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Request Free Quote
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Statistics section removed as requested */}
        </div>
      </div>
    </section>
  );
}
