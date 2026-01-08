import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Abdul Nabi',
    location: 'Banjara Hills',
    rating: 5,
    text: 'Excellent service! My refrigerator was repaired within hours. The technician was professional and the pricing was very reasonable.',
  },
  {
    name: 'Raj Sharma',
    location: 'Secunderabad',
    rating: 5,
    text: 'Very impressed with their prompt response and quality work. Fixed my washing machine perfectly. Highly recommend!',
  },
  {
    name: 'Mohammed Aziz',
    location: 'Jubilee Hills',
    rating: 5,
    text: 'Best appliance repair service in Hyderabad. They use genuine parts and offer warranty. Very trustworthy.',
  },
  {
    name: 'Shoaib Khan',
    location: 'Kondapur',
    rating: 5,
    text: 'Called them for AC repair at midnight and they came immediately. True 24/7 service. Great team!',
  },
  {
    name: 'Venkat Reddy',
    location: 'Manikonda',
    rating: 5,
    text: 'Professional and courteous staff. They explained the problem clearly and fixed it efficiently. Will use again.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by thousands of satisfied customers across Hyderabad
          </p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="text-center">
              <p className="font-bold text-gray-900 text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-600">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-gray-700 hover:text-blue-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-gray-700 hover:text-blue-600"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
