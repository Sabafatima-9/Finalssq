import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Terms & Conditions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Please read these terms and conditions carefully before using our services.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing or using Service Square's services, you agree to be bound by these 
                  Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Services Description</h2>
                <p className="text-gray-600 mb-4">
                  Service Square provides professional appliance repair and maintenance services for 
                  residential and commercial customers in Hyderabad and surrounding areas.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Service Booking</h2>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Service requests can be made via phone call or online booking</li>
                  <li>Customers must provide accurate information about the appliance and issue</li>
                  <li>Service appointments are subject to technician availability</li>
                  <li>We reserve the right to refuse service for any reason</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Pricing and Payment</h2>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Inspection fee: ₹299 (waived if service is availed)</li>
                  <li>Service charges vary based on the type of repair and parts required</li>
                  <li>All prices are exclusive of GST and other applicable taxes</li>
                  <li>Payment must be made upon completion of service</li>
                  <li>Additional charges may apply for emergency services</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Warranty</h2>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Basic repairs: 30-day service warranty</li>
                  <li>Major repairs: 90-day service warranty</li>
                  <li>Warranty covers only the specific repair performed</li>
                  <li>Warranty does not cover damage due to misuse or improper maintenance</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Customer Responsibilities</h2>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Provide safe access to the appliance for repair</li>
                  <li>Inform us of any known issues with the appliance</li>
                  <li>Ensure the appliance is in a clean and accessible condition</li>
                  <li>Make payment promptly upon service completion</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  Service Square shall not be liable for any indirect, incidental, or consequential 
                  damages arising from the use or inability to use our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Cancellation Policy</h2>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Cancellations must be made at least 2 hours before the scheduled appointment</li>
                  <li>Last-minute cancellations may incur a nominal fee</li>
                  <li>No-show appointments will be charged the full service fee</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Privacy Policy</h2>
                <p className="text-gray-600 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy to understand 
                  how we collect, use, and protect your personal information.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Governing Law</h2>
                <p className="text-gray-600 mb-4">
                  These terms and conditions shall be governed by and construed in accordance with 
                  the laws of India, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify these terms and conditions at any time. 
                  Changes will be effective immediately upon posting on our website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Contact Information</h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700"><strong>Service Square</strong></p>
                  <p className="text-gray-700">Phone: +91 78425 95942</p>
                  <p className="text-gray-700">Email: Servicesquare09@gmail.com</p>
                  <p className="text-gray-700">Address: Hyderabad, Telangana, India 500001</p>
                </div>

                <p className="text-gray-600 mb-4">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default TermsAndConditions;
