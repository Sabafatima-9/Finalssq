// Replace with your actual image URLs or import statements
const services = [
  {
    image: '/images/acrepair.png',
    title: 'Air Conditioner Repair',
    description: 'AC repair, installation, and maintenance. Gas refilling and servicing available.',
  },
  {
    image: '/images/washingmachinerepair.png',
    title: 'Washing Machine Repair',
    description: 'Complete washing machine repair for all types - front load, top load, and semi-automatic.',
  },
  {
    image: '/images/commercialfridge.png',
    title: 'Commercial Fridge Repair',
    description: 'Professional service for restaurants, hotels, and commercial establishments.',
  },
  {
    image: '/images/fridgerepair.png',
    title: 'Refrigerator Repair',
    description: 'Expert repair for all brands of home refrigerators. Fast diagnosis and genuine parts.',
  },
  {
    image: '/images/deepfreezer.png',
    title: 'Deep Freezer Repair',
    description: 'Specialized repair services for deep freezers and cold storage units.',
  },
  {
    image: '/images/microwave.png',
    title: 'Microwave / Oven Repair',
    description: 'Expert repair for microwave ovens, OTGs, and kitchen appliances.',
  },
    {
    image: '/images/acrepair.png',
    title: 'Dish Washer Repair',
    description: 'Professional dishwasher repair services for all brands, including water drainage, heating, and spray arm issues..',
  },
  {
    image: '/images/generalappliancesrepair.png',
    title: 'General Appliance Repair',
    description: 'Comprehensive repair services for all types of electrical appliances, with expert troubleshooting and maintenance.',
  }
];

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Expert Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional repair services for all major appliances with certified technicians and genuine spare parts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1"
            >
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm flex-1">
                  {service.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="mt-auto text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-2 group"
                >
                  <span>Book Service</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
