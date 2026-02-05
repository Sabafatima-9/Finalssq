import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Clock, Shield, Wrench } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs: FAQItem[] = [
    {
      question: "What areas do you service in Hyderabad?",
      answer: "We service all major areas in Hyderabad including Secunderabad, Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Kukatpally, Hitech City, and surrounding areas. Call us to confirm service availability in your specific location.",
      category: "General"
    },
    {
      question: "How quickly can you provide service?",
      answer: "We offer same-day service for most appliance repairs. Emergency services are available 24/7. Standard service appointments are typically scheduled within 24-48 hours based on availability.",
      category: "Service"
    },
    {
      question: "Do you provide warranty on your repairs?",
      answer: "Yes, all our repairs come with a service warranty. Basic repairs have a 30-day warranty, major repairs have a 90-day warranty, and replaced parts come with manufacturer warranty.",
      category: "Warranty"
    },
    {
      question: "What brands of appliances do you service?",
      answer: "We service all major brands including LG, Samsung, Whirlpool, Godrej, Panasonic, Sony, IFB, Bosch, Daikin, Hitachi, Blue Star, Voltas, and many more. Contact us to confirm if we service your specific brand.",
      category: "General"
    },
    {
      question: "How much does the inspection fee cost?",
      answer: "Our inspection fee is ₹299, which includes a professional technician visit, problem diagnosis, and a detailed cost estimate. This fee is waived if you proceed with the repair.",
      category: "Pricing"
    },
    {
      question: "Do you use genuine spare parts?",
      answer: "Yes, we only use genuine and authentic spare parts from authorized dealers. This ensures quality, longevity, and maintains your appliance warranty.",
      category: "Quality"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, UPI, Google Pay, PhonePe, Paytm, and bank transfers. Payment is due upon completion of service.",
      category: "Payment"
    },
    {
      question: "Do you provide home service or do I need to bring the appliance?",
      answer: "We provide home service for all appliances. Our technicians come to your location with necessary tools and equipment. Only in rare cases where specialized workshop facilities are needed do we take appliances to our service center.",
      category: "Service"
    },
    {
      question: "What should I do before the technician arrives?",
      answer: "Please clear the area around the appliance, ensure power supply is available, and have the appliance's model number and purchase details ready if possible. Also, describe the issue in detail when booking.",
      category: "Service"
    },
    {
      question: "Do you offer annual maintenance contracts?",
      answer: "Yes, we offer annual maintenance contracts starting at ₹1,999 per appliance per year. This includes 4 quarterly visits, priority service, and discounts on repairs.",
      category: "Service"
    },
    {
      question: "What if the same problem occurs again after repair?",
      answer: "If the same issue occurs within the warranty period, we'll fix it free of charge. Just call us with your service details and we'll schedule a follow-up visit.",
      category: "Warranty"
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can cancel or reschedule your appointment up to 2 hours before the scheduled time without any charges. Late cancellations may incur a nominal fee.",
      category: "Service"
    }
  ];

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-purple-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Find answers to common questions about our appliance repair services. 
                Can't find what you're looking for? Feel free to contact us.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center mb-12">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {openItems.includes(index) && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                          {faq.category}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Help */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Still Need Help?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak with our customer service team</p>
                <a href="tel:+917842595942" className="text-purple-600 font-semibold">
                  +91 78425 95942
                </a>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                <p className="text-gray-600 mb-4">We respond within minutes during business hours</p>
                <span className="text-purple-600 font-semibold">24/7 Available</span>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
                <p className="text-gray-600 mb-4">Get professional guidance for your appliance issues</p>
                <span className="text-purple-600 font-semibold">Free Consultation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Didn't Find Your Answer?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Our friendly customer service team is ready to help you with any questions about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917842595942"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default FAQ;
