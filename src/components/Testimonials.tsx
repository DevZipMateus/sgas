import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      company: "Restaurante Bella Vista", 
      location: "Bauru - SP",
      rating: 5,
      text: "Excelente atendimento! A S-Gás sempre nos atende com rapidez e profissionalismo. Nosso restaurante nunca fica sem gás graças ao serviço de qualidade deles."
    },
    {
      id: 2,
      name: "João Santos",
      company: "Padaria do João",
      location: "Marília - SP", 
      rating: 5,
      text: "Trabalho com a S-Gás há mais de 3 anos e posso afirmar que é uma empresa séria e confiável. Preços justos e entrega sempre no prazo."
    },
    {
      id: 3,
      name: "Ana Costa",
      company: "Hotel Fazenda",
      location: "Avaré - SP",
      rating: 5,
      text: "A qualidade do gás é excelente e o atendimento é personalizado. Recomendo a S-Gás para qualquer empresa que precisa de confiabilidade no fornecimento de GLP."
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      company: "Indústria Alimentícia",
      location: "Presidente Prudente - SP",
      rating: 5,
      text: "Parceria de longa data! A S-Gás sempre supera nossas expectativas com soluções personalizadas para nossa indústria. Equipe muito competente."
    },
    {
      id: 5,
      name: "Fernanda Lima",
      company: "Lanchonete Central",
      location: "Bauru - SP",
      rating: 5,
      text: "Atendimento rápido e eficiente. Quando preciso de gás urgente, sei que posso contar com a S-Gás. Preço justo e qualidade garantida!"
    },
    {
      id: 6,
      name: "Roberto Almeida",
      company: "Churrascaria Tradição",
      location: "Marília - SP",
      rating: 5,
      text: "Nossa churrascaria funciona 100% com gás da S-Gás. Nunca tivemos problemas e o suporte técnico é excepcional. Empresa de confiança!"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-jgas-yellow fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-jgas-black mb-4 lg:mb-6">
            Depoimentos de Clientes
          </h2>
          <p className="text-lg sm:text-xl text-jgas-gray max-w-3xl mx-auto px-4">
            Veja o que nossos clientes falam sobre nossos serviços e qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-jgas-yellow/20 hover:border-jgas-yellow/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-jgas-yellow mr-3" />
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-jgas-gray mb-6 text-sm sm:text-base leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-jgas-black text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-jgas-yellow text-xs sm:text-sm font-medium">
                    {testimonial.company}
                  </p>
                  <p className="text-jgas-gray text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-6 sm:p-8 max-w-2xl mx-auto border border-jgas-yellow/20">
            <h3 className="text-xl sm:text-2xl font-bold text-jgas-black mb-4">
              Seja Nosso Próximo Cliente Satisfeito!
            </h3>
            <p className="text-jgas-gray mb-6">
              Junte-se a centenas de empresas que já confiam na S-Gás para suas necessidades de GLP.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-jgas-gray">
              <span>⭐ Mais de 500 clientes atendidos</span>
              <span>🚚 Entrega rápida e confiável</span>
              <span>💡 Soluções personalizadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
