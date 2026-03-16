import { Phone, MapPin, Clock, Wrench } from 'lucide-react';

const serviceAreas = [
  {
    area: 'Hitech City',
    description: 'Looking for AC service near me in Hyderabad? Our expert technicians provide comprehensive AC repair, installation, and maintenance services in Hitech City. We handle all major AC brands with genuine parts and warranty support. Book your same-day AC service now!'
  },
  {
    area: 'Gachibowli',
    description: 'Professional AC service in Gachibowli with fast response times and expert technicians. Whether you need AC repair, gas refilling, or emergency service, our team is ready to help. Call now for reliable AC service in Gachibowli!'
  },
  {
    area: 'Madhapur',
    description: 'Need AC service in Madhapur? We offer 24/7 emergency AC repair and installation services. Our certified technicians handle all AC brands with transparent pricing and warranty. Get fast AC service near you in Madhapur!'
  },
  {
    area: 'Kondapur',
    description: 'Expert AC service in Kondapur for residential and commercial clients. Our skilled technicians provide AC repair, installation, gas refilling, and annual maintenance. Same-day service available for urgent AC needs in Kondapur!'
  },
  {
    area: 'Jubilee Hills',
    description: 'Premium AC service in Jubilee Hills with certified technicians and genuine parts. We specialize in AC repair, installation, and maintenance for all major brands. Get same-day AC service in Jubilee Hills with warranty!'
  },
  {
    area: 'Banjara Hills',
    description: 'Professional AC repair and maintenance in Banjara Hills with experienced technicians. We provide AC installation, gas refilling, jet cleaning, and emergency repair services. Book reliable AC service in Banjara Hills today!'
  },
  {
    area: 'Begumpet',
    description: 'Fast AC service in Begumpet with transparent pricing and expert technicians. We handle all types of AC repair, installation, and maintenance with warranty support. Get same-day AC service in Begumpet!'
  },
  {
    area: 'Ameerpet',
    description: 'Trusted AC repair in Ameerpet with experienced technicians and genuine parts. We provide comprehensive AC service including installation, repair, gas refilling, and maintenance. Call now for expert AC service in Ameerpet!'
  },
  {
    area: 'Kukatpally',
    description: 'Professional AC service in Kukatpally for homes and offices with certified technicians. We offer AC repair, installation, gas refilling, and annual maintenance with warranty. Get reliable AC service in Kukatpally!'
  },
  {
    area: 'Miyapur',
    description: 'Expert AC technicians in Miyapur for all AC brands with same-day service available. We provide comprehensive AC repair, installation, gas refilling, and maintenance. Book fast AC service in Miyapur now!'
  },
  {
    area: 'Secunderabad',
    description: 'Reliable AC service in Secunderabad with 24/7 support for commercial and residential clients. Our expert technicians handle all AC brands with genuine parts and warranty. Get professional AC service in Secunderabad!'
  },
  {
    area: 'Himayat Nagar',
    description: 'Professional AC repair in Himayat Nagar with certified technicians and genuine parts. We provide AC installation, gas refilling, jet cleaning, and maintenance services. Book expert AC service in Himayat Nagar!'
  },
  {
    area: 'Dilsukhnagar',
    description: 'Fast AC service in Dilsukhnagar with emergency support and expert technicians. We handle all AC brands with genuine parts and warranty. Get same-day AC service in Dilsukhnagar!'
  },
  {
    area: 'Manikonda',
    description: 'Expert AC technicians in Manikonda for all types of AC units with same-day service available. We provide comprehensive AC repair, installation, gas refilling, and maintenance. Book fast AC service in Manikonda!'
  },
  {
    area: 'Attapur',
    description: 'Professional AC repair in Attapur with warranty support and experienced technicians. We provide AC installation, gas refilling, jet cleaning, and maintenance services. Get reliable AC service in Attapur!'
  },
  {
    area: 'Kompally',
    description: 'Reliable AC service in Kompally for residential and commercial clients with emergency repair available. Our expert technicians handle all AC brands with genuine parts. Get fast AC service in Kompally!'
  },
  {
    area: 'Nallagandla',
    description: 'Expert AC technicians in Nallagandla for all AC brands with same-day service available. We provide comprehensive AC repair, installation, gas refilling, and maintenance. Book professional AC service in Nallagandla!'
  },
  {
    area: 'Tolichowki',
    description: 'Professional AC service in Tolichowki with 24/7 support for all types of AC repair. Our expert technicians handle all AC brands with genuine parts and warranty. Get reliable AC service in Tolichowki!'
  },
  {
    area: 'Charminar',
    description: 'Fast AC service in Charminar with certified technicians and emergency repair for all AC brands. We provide AC installation, gas refilling, jet cleaning, and maintenance. Get expert AC service in Charminar!'
  },
  {
    area: 'Abids',
    description: 'Reliable AC service in Abids with experienced technicians and genuine parts. We provide comprehensive AC repair, installation, gas refilling, and maintenance services. Get trusted AC service in Abids!'
  }
];

const additionalServices = [
  'Beat the summer heat with our AC service in Secunderabad, Hyderabad. Quick repairs, regular maintenance, and professional installations — we do it all. Searching for AC service near me or AC repair in Hyderabad? Schedule your service today!',
  'Stay comfortable with our AC service in Himayat Nagar, Hyderabad. Whether its a repair or routine maintenance, we ensure your AC runs smoothly. Find AC service near me or AC repair in Hyderabad — call us now to book a visit!',
  'Get dependable AC service in Dilsukhnagar, Hyderabad. From fixing cooling issues to full installations, were just a call away. Looking for AC service near me or AC repair in Hyderabad? Book your AC service today!',
  'Looking for AC service in Manikonda, Hyderabad? Let us handle your AC repair, maintenance, and installation needs. Fast, reliable, and affordable — for AC service near me or AC repair in Hyderabad, schedule a service now!',
  'Keep your home cool with our AC service in Attapur, Hyderabad. We fix and maintain all types of AC units with care and efficiency. If you need AC service near me or AC repair in Hyderabad, contact us today for a service appointment!',
  'Reliable AC service in Kompally, Hyderabad, is just a call away. We offer expert repairs, smooth installations, and routine maintenance for all AC brands. Searching for AC service near me or AC repair in Hyderabad? Book your service now!',
  'Enjoy cool air year-round with our AC service in Nallagandla, Hyderabad. Our expert team provides fast and effective repair, maintenance, and installation services. For AC service near me or AC repair in Hyderabad, schedule a visit today!',
  'Looking for trusted AC service in Tolichowki, Hyderabad? Our skilled technicians ensure your AC works perfectly, offering quick repairs and smooth installations. Find AC service near me or AC repair in Hyderabad — get in touch today!',
  'Stay cool and comfortable with our AC service in Charminar, Hyderabad. From repairs to regular maintenance, we ensure your AC is always at its best. Searching for AC service near me or AC repair in Hyderabad? Book your service now!',
  'Keep the heat away with our AC service in Abids, Hyderabad. Our experienced team handles repairs, maintenance, and installations efficiently. Looking for AC service near me or AC repair in Hyderabad? Contact us today for a service appointment!'
];

export default function ServiceAreas() {
  const handleAreaCall = () => {
    window.location.href = 'tel:+917842595942';
  };

  return (
    <section id="service-areas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional AC Service Across Hyderabad
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fast, reliable AC repair and installation services in your neighborhood. 
            Same-day service with warranty on all repairs by certified technicians.
          </p>
        </div>

        {/* Main Service Areas */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-blue-100 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              AC Service Areas in Hyderabad
            </h3>
          </div>

          <div className="space-y-8">
            {serviceAreas.map((service, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-6 hover:border-blue-400 transition-colors">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  AC Service in {service.area}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Wrench className="w-4 h-4" />
                    <span>All AC Brands</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Same-Day Service</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Are You Searching for AC Service Near Me in Hyderabad?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-blue-50 text-sm leading-relaxed">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Book Your AC Service Today
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Look no further! We offer quick, reliable AC repair, maintenance, and installation services. 
            Our expert technicians ensure your AC runs smoothly, keeping your home cool and comfortable.
          </p>
          <button
            onClick={handleAreaCall}
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5 mr-2" />
            Book a Quick AC Service
          </button>
        </div>
      </div>
    </section>
  );
}
