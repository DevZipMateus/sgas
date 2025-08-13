
import React from 'react';

const ImageGallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/galeria/midia_1.jpg",
      alt: "S-Gás - Equipamentos e Serviços"
    },
    {
      src: "/lovable-uploads/galeria/midia_3.jpg", 
      alt: "S-Gás - Instalações Profissionais"
    },
    {
      src: "/lovable-uploads/galeria/midia_4.jpg",
      alt: "S-Gás - Infraestrutura e Equipamentos"
    },
    {
      src: "/lovable-uploads/galeria/midia_5.jpg",
      alt: "S-Gás - Serviços Especializados"
    }
  ];

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

        {galleryImages.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg border border-jgas-yellow/20 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 md:h-52 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-jgas-gray text-lg">Galeria em breve...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
