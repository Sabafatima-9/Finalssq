// Replace with your actual image URLs or import statements
const services = [
  {
    image: '/images/acrepair.png',
    title: 'Air Conditioner Repair',
    description: 'AC repair, installation, and maintenance. Gas refilling and servicing available.',
    cta: 'Call Now'
  },
  {
    image: '/images/washingmachinerepair.png',
    title: 'Washing Machine Repair',
    description: 'Complete washing machine repair for all types - front load, top load, and semi-automatic.',
    cta: 'Call Now'
  },
  {
    image: '/images/commercialfridge.png',
    title: 'Commercial Fridge Repair',
    description: 'Professional service for restaurants, hotels, and commercial establishments.',
    cta: 'Call Now'
  },
  {
    image: '/images/fridgerepair.png',
    title: 'Refrigerator Repair',
    description: 'Expert repair for all brands of home refrigerators. Fast diagnosis and genuine parts.',
    cta: 'Call Now'
  },
  {
    image: '/images/deepfreezer.png',
    title: 'Deep Freezer Repair',
    description: 'Specialized repair services for deep freezers and cold storage units.',
    cta: 'Call Now'
  },
  {
    image: '/images/microwave.png',
    title: 'Microwave / Oven Repair',
    description: 'Microwave oven and electric oven repair services for all brands.',
    cta: 'Call Now'
  },
  {
    image: '/images/dishwasher.png',
    title: 'Dish Washer Repair',
    description: 'Dishwasher repair and maintenance for all major brands and models.',
    cta: 'Call Now'
  },
  {
    image: '/images/generalappliance.png',
    title: 'General Appliance Repair',
    description: 'Complete repair solutions for all types of home appliances.',
    cta: 'Call Now'
  }
];

const features = [
  {
    title: '15+ Years Experience',
    description: 'Industry-leading expertise in appliance repair'
  },
  {
    title: 'Certified Technicians',
    description: 'Highly trained and skilled professionals'
  },
  {
    title: 'Genuine Spare Parts',
    description: 'Only authentic parts from authorized dealers'
  },
  {
    title: '24/7 Emergency Service',
    description: 'Round-the-clock support when you need it'
  },
  {
    title: 'Service Warranty',
    description: 'All repairs backed by our warranty guarantee'
  },
  {
    title: 'Customer Satisfaction',
    description: '5000+ happy customers across Hyderabad'
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                  <span>{service.cta}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose ServiceSquare?</h3>
            <p className="text-lg text-gray-600">Trusted by thousands of satisfied customers across Hyderabad</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">What Our Customers Say</h3>
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "Very impressed with their prompt response and quality work. Fixed my washing machine perfectly. Highly recommend!"
            </blockquote>
            <cite className="text-gray-900 font-semibold">- Raj Sharma, Secunderabad</cite>
          </div>
        </div>
      </div>
    </section>
  );
}
