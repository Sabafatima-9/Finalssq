import { Award, Users, Wrench, Clock, Shield, ThumbsUp } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: '15+ Years Experience',
    description: 'Industry-leading expertise in appliance repair',
  },
  {
    icon: Users,
    title: 'Certified Technicians',
    description: 'Highly trained and skilled professionals',
  },
  {
    icon: Wrench,
    title: 'Genuine Spare Parts',
    description: 'Only authentic parts from authorized dealers',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock support when you need it',
  },
  {
    icon: Shield,
    title: 'Service Warranty',
    description: 'All repairs backed by our warranty guarantee',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    description: '5000+ happy customers across Hyderabad',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="md:flex items-center gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="/images/businesssss.png" 
                  alt="Service Square Team" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold text-black-600 mb-6 font-serif italic">
                  About Service Square
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  ServiceSquare is a trusted name in appliance repair services in Narsingi and surrounding areas. With over 15 years of experience in the industry, we have built a reputation for quality service, honest pricing, and customer satisfaction.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team of certified technicians is equipped to handle all types of appliance repairs with precision and care. We understand how important your appliances are to your daily life, which is why we offer prompt and reliable service to get them back in working order as quickly as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
