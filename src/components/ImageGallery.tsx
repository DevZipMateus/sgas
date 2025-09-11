
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: "/lovable-uploads/galeria/midia_1.jpg",
      alt: "S-Gás - Equipamentos e Serviços",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/midia_3.jpg", 
      alt: "S-Gás - Instalações Profissionais",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/midia_4.jpg",
      alt: "S-Gás - Infraestrutura e Equipamentos",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/midia_5.jpg",
      alt: "S-Gás - Serviços Especializados",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/3fc54fa9-8a4b-49e2-baa5-c75dad8857ec.jpeg",
      alt: "S-Gás - Equipamentos Profissionais",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/Caminha Sgas.jpg",
      alt: "S-Gás - Caminhão de Abastecimento",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/PRIMEGAS.jpeg",
      alt: "S-Gás - Primegas",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/Rede 2.jpeg",
      alt: "S-Gás - Rede de Distribuição",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/Rede.jpeg",
      alt: "S-Gás - Sistema de Rede",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/Tanaques 33.jpeg",
      alt: "S-Gás - Tanques de Armazenamento",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/Tanque de Gás S.gás Externo.png",
      alt: "S-Gás - Tanque Externo",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/Tanques com Logo.png",
      alt: "S-Gás - Tanques com Logo",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/Taqnues.jpg",
      alt: "S-Gás - Tanques de GLP",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/Teste de Estanqueidade.jpg",
      alt: "S-Gás - Teste de Estanqueidade",
      type: "image"
    },
    {
      src: "/lovable-uploads/galeria/a0234841-be2b-4a5b-9dd1-b7d378320e5e.jpeg",
      alt: "S-Gás - Instalação Profissional",
      type: "image"
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-jgas-black mb-4">
            Nossa Galeria
          </h2>
          <p className="text-base md:text-lg text-jgas-gray max-w-2xl mx-auto px-4">
            Conheça nossos equipamentos, instalações e a qualidade dos serviços da S-Gás
          </p>
        </div>

        {galleryImages.length > 0 ? (
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: false,
                })
              ]}
              className="w-full"
            >
              <CarouselContent>
                 {galleryImages.map((image, index) => (
                   <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                     <div className="p-2">
                       <Dialog>
                         <DialogTrigger asChild>
                           <Card className="cursor-pointer overflow-hidden border border-jgas-yellow/20 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                             <CardContent className="p-0">
                               <div className="w-full h-64">
                                 <img
                                   src={image.src}
                                   alt={image.alt}
                                   className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                                   loading="lazy"
                                 />
                               </div>
                             </CardContent>
                           </Card>
                         </DialogTrigger>
                         <DialogContent className="max-w-4xl w-full p-0 border-0">
                           <div className="relative">
                             <img
                               src={image.src}
                               alt={image.alt}
                               className="w-full h-auto max-h-[80vh] object-contain"
                             />
                           </div>
                         </DialogContent>
                       </Dialog>
                     </div>
                   </CarouselItem>
                 ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-jgas-gray text-lg">Galeria em breve...</p>
          </div>
        )}
        
        {/* Seção do Vídeo */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-jgas-black mb-2">
              Processo de Abastecimento
            </h3>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <video
              src="/lovable-uploads/galeria/ABASTECIMENTO.mp4"
              className="w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
