
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageGallery from '@/components/ImageGallery';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ImageGallery />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
