import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you contact us for service requests, 
                  fill out forms, or communicate with us through our website.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Name and contact details</li>
                  <li>Phone numbers and email addresses</li>
                  <li>Service addresses and locations</li>
                  <li>Appliance details and service requirements</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>To process service requests and schedule appointments</li>
                  <li>To communicate with you about your service needs</li>
                  <li>To provide customer support and technical assistance</li>
                  <li>To improve our services and customer experience</li>
                  <li>To comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>
                
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Service technicians who need access to your contact information for service delivery</li>
                  <li>Payment processors for transaction processing</li>
                  <li>Legal authorities when required by law</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to access, update, or delete your personal information. 
                  Contact us if you wish to exercise these rights.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700"><strong>Service Square</strong></p>
                  <p className="text-gray-700">Phone: +91 78425 95942</p>
                  <p className="text-gray-700">Email: Servicesquare09@gmail.com</p>
                  <p className="text-gray-700">Address: Hyderabad, Telangana, India 500001</p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Updates</h2>
                <p className="text-gray-600 mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page.
                </p>

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

export default PrivacyPolicy;
