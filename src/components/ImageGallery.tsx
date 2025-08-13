
import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const ImageGallery = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  const galleryImages = [
    {
      src: "/lovable-uploads/galeria/midia_1.jpg",
      alt: "S-Gás - Equipamentos de Gás GLP"
    },
    {
      src: "/lovable-uploads/galeria/midia_3.jpg", 
      alt: "S-Gás - Instalações de Tanques"
    },
    {
      src: "/lovable-uploads/galeria/midia_4.jpg",
      alt: "S-Gás - Redes de Distribuição"
    },
    {
      src: "/lovable-uploads/galeria/midia_5.jpg",
      alt: "S-Gás - Serviços Especializados"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-jgas-black mb-4">
            Nossa Galeria
          </h2>
          <p className="text-lg text-jgas-gray max-w-2xl mx-auto">
            Conheça nossos equipamentos, instalações e a qualidade dos serviços da S-Gás
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="relative overflow-hidden rounded-lg border border-jgas-yellow/20 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-jgas-yellow text-jgas-yellow hover:bg-jgas-yellow hover:text-jgas-black" />
          <CarouselNext className="border-jgas-yellow text-jgas-yellow hover:bg-jgas-yellow hover:text-jgas-black" />
        </Carousel>
      </div>
    </section>
  );
};

export default ImageGallery;
