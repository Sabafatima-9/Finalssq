import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  // Form will be submitted natively to FormSubmit

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with us for fast and reliable appliance repair services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Emergency Service Available 24/7</h3>
              <p className="mb-6 opacity-90">
                We're here to help you anytime, day or night. Message us on WhatsApp for immediate assistance.
              </p>
              <a
                href="https://wa.me/917842595947?text=Could%20you%20kindly%20provide%20more%20details%20about%20the%20services%20you%20offer%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                WhatsApp: +91 7842595947
              </a>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h4>
                
                {/* Phone Number */}
                <div className="bg-white/90 hover:bg-white transition-all duration-300 p-4 rounded-xl shadow-md hover:shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2.5 rounded-full flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Call Us</h4>
                      <a 
                        href="tel:+917842595947" 
                        className="text-gray-600 hover:text-blue-600 transition-colors text-base"
                      >
                        +91 7842595947
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="bg-white/90 hover:bg-white transition-all duration-300 p-4 rounded-xl shadow-md hover:shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2.5 rounded-full flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">WhatsApp Us</h4>
                      <a 
                        href="https://wa.me/917842595947?text=Could%20you%20kindly%20provide%20more%20details%20about%20the%20services%20you%20offer%3F" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-green-600 transition-colors text-base"
                      >
                        +91 7842595947
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white/90 hover:bg-white transition-all duration-300 p-4 rounded-xl shadow-md hover:shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2.5 rounded-full flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                      <div className="space-y-2">
                        <a 
                          href="mailto:servicesquare@email.com" 
                          className="block text-gray-600 hover:text-blue-600 transition-colors text-base break-all"
                        >
                          Servicesquare09@gmail.com
                        </a>
                        <a 
                          href="mailto:customerservicesquare09@gmail.com" 
                          className="block text-gray-600 hover:text-blue-600 transition-colors text-base break-all"
                        >
                         customerservicesquare09@gmail.com

                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white/90 hover:bg-white transition-all duration-300 p-4 rounded-xl shadow-md hover:shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2.5 rounded-full flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Working Hours</h4>
                      <p className="text-gray-600 text-base">
                        8:00 AM - 9:00 PM
                        <span className="block text-sm text-gray-500">7 days a week</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div>
            <form 
              action="https://formsubmit.co/customerservicesquare09@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New ServiceSquare Form Submission" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={window.location.href} />
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Service</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
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

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Describe your issue..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
