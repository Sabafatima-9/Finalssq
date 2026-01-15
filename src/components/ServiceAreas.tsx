import { useState } from 'react';
import { Phone, MapPin } from 'lucide-react';

const serviceTypes = [
  'Refrigerator Repair',
  'Commercial Fridge Repair',
  'Deep Freezer Repair',
  'Washing Machine Repair',
  'AC Repair',
  'Microwave / Oven Repair',
];

const areas = [
  'Banjara Hills',
  'Jubilee Hills',
  'Masab Tank',
  'Ameerpet',
  'Suncity',
  'Attapur',
  'Lingamaplly',
  'Tellapur',
  'Gopanpally',
  'Shamshabad',
  'Moinabad',
  'Chandanagar',
  'BHEL',
  'Kukatpally',
  'Nizampet',
  'Ramachanrapuram',
  'Nallagandla',
  'Film Nagar',
  'Rajendar Nagar',
  'Kismatpur',
  'Kali Mandir',
  'Katedhan',
  'Borabanda',
  'Yousufguda',
  'Lakdi Ka Pul',
  'Mallepally',
  'Somajiguda',
  'Begumpet',
  'Khairatabad',
  'Balkampet',
  'Gachibowli',
  'Panjagutta',
  'Hitech City',
  'Kondapur',
  'Bachupally',
  'Manikonda',
  'Miyapur',
  'Narsingi',
  'Kokapet',
  'Bandlaguda Jagir',
  'Shaikpet',
  'Tolichowki',
  'Rai Durg',
];

export default function ServiceAreas() {
  const [selectedService, setSelectedService] = useState('');

  const handleAreaCall = () => {
    window.location.href = 'tel:+917842595942';
  };

  return (
    <section id="service-areas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Service Areas in Hyderabad
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide fast and reliable appliance repair services across all major areas in Hyderabad
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <label htmlFor="service-type" className="block text-sm font-semibold text-gray-700 mb-3">
            Select Service Type
          </label>
          <select
            id="service-type"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:border-blue-500 transition-colors shadow-sm cursor-pointer"
          >
            <option value="">Choose a service...</option>
            {serviceTypes.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="flex items-center space-x-2 mb-6">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">
              Tap any area to call us
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {areas.map((area) => (
              <button
                key={area}
                onClick={handleAreaCall}
                className="group bg-gradient-to-br from-gray-50 to-blue-50/50 hover:from-blue-500 hover:to-blue-600 border border-gray-200 hover:border-blue-500 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex flex-col items-center space-y-2">
                  <a 
                    href="tel:+917842595947" 
                    className="w-5 h-5 flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                  </a>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors text-center">
                    {area}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-center text-gray-700">
              <span className="font-semibold">Don't see your area?</span> We cover many more locations across Hyderabad.
              <a href="tel:+917842595947" className="text-blue-600 hover:text-blue-700 font-semibold ml-1">
                Call us to check availability
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
