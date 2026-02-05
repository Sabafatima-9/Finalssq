import React from 'react';
import { Award, Users, Wrench, Clock, Shield, ThumbsUp, Phone, Mail, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Service Square
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your trusted partner for professional appliance repair services in Hyderabad. 
                We bring expertise, reliability, and exceptional service to every home.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="mb-6">
                  Founded with a simple mission - to provide reliable and affordable appliance repair services 
                  to the residents of Hyderabad, Service Square has grown from a small team of passionate 
                  technicians to one of the most trusted names in home appliance repairs.
                </p>
                <p className="mb-6">
                  With over 15 years of experience in the industry, we understand how important your home 
                  appliances are to your daily life. That's why we're committed to delivering fast, efficient, 
                  and long-lasting repair solutions that you can count on.
                </p>
                <p>
                  Our team of certified technicians is equipped with the latest tools and knowledge to 
                  handle all types of appliance repairs, from simple fixes to complex issues. We believe in 
                  transparency, quality workmanship, and customer satisfaction above all else.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trust & Reliability</h3>
                <p className="text-gray-600">We build lasting relationships through honest service and dependable repairs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Award className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
                <p className="text-gray-600">Every repair is performed with precision and attention to detail.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Clock className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Timely Service</h3>
                <p className="text-gray-600">We respect your time and provide prompt, efficient service.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Users className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-gray-600">Your satisfaction is our top priority in everything we do.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <Wrench className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p className="text-gray-600">Certified technicians with extensive training and experience.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <ThumbsUp className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
                <p className="text-gray-600">Transparent pricing with no hidden charges or surprises.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">Certified professionals with years of experience</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-gray-600">Friendly staff ready to assist you 24/7</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Wrench className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Service Engineers</h3>
                <p className="text-gray-600">Skilled engineers for complex repairs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">10,000+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100">Service Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-100">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+91 78425 95942</p>
                <p className="text-gray-600">+91 78425 95943</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">Servicesquare09@gmail.com</p>
                <p className="text-gray-600">customerservicesquare09@gmail.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Hyderabad, Telangana</p>
                <p className="text-gray-600">India 500001</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Experience Our Service?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Service Square for their appliance repair needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917842595942"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold"
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

export default About;
