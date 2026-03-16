import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import About from '../src/components/About';
import Testimonials from '../src/components/Testimonials';
import ServiceAreas from '../src/components/ServiceAreas';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import FloatingButtons from '../src/components/FloatingButtons';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}
