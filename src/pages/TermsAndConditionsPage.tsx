import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { Link } from 'react-router-dom';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using ServiceSquare's website (servicesquare.in) and our appliance repair services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ServiceSquare provides professional appliance repair services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Air conditioner repair and maintenance</li>
                <li>Refrigerator repair services</li>
                <li>Washing machine repair</li>
                <li>General appliance maintenance</li>
                <li>Emergency repair services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Booking and Payment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Booking</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Service bookings can be made through our website, phone, or WhatsApp. You must provide accurate and complete information when booking services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Payment is due upon completion of services</li>
                    <li>We accept cash, UPI, and other digital payment methods</li>
                    <li>Prices quoted are inclusive of taxes unless otherwise stated</li>
                    <li>Additional charges may apply for parts or emergency services</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide safe access to appliances and work area</li>
                <li>Ensure someone is available during the service visit</li>
                <li>Provide accurate information about appliance issues</li>
                <li>Inform us of any known allergies or safety concerns</li>
                <li>Secure pets and valuable items during service visits</li>
                <li>Pay for services as agreed upon completion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Warranty</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We stand behind our work with the following warranty terms:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>30-day warranty on labor for all repair services</li>
                <li>Manufacturer warranty applies to replacement parts</li>
                <li>Warranty does not cover damage due to misuse or neglect</li>
                <li>Warranty is void if unauthorized repairs are attempted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Free cancellation up to 2 hours before scheduled service</li>
                <li>Cancellations within 2 hours may incur a nominal fee</li>
                <li>No-show appointments will be charged the full service fee</li>
                <li>Emergency service cancellations must be made immediately</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                ServiceSquare shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability for any claim shall not exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold ServiceSquare harmless from any claims, damages, or expenses arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
              <p className="text-gray-700 leading-relaxed">
                ServiceSquare shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to natural disasters, strikes, or government restrictions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on our website, including text, graphics, logos, and software, is the property of ServiceSquare and protected by intellectual property laws. You may not use our content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of any modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising from these terms or our services shall be resolved as follows:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>First, through good faith negotiations between parties</li>
                <li>If unresolved, through mediation in [Your City]</li>
                <li>Finally, through the appropriate courts in [Your City]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700"><strong>Email:</strong> service@servicesquare.in</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91 7842595942</p>
                <p className="text-gray-700"><strong>Address:</strong> [Your Business Address]</p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/"
              className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default TermsAndConditionsPage;
