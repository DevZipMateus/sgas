
import { Fuel, Settings, ShoppingCart, CheckCircle, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Fuel,
      title: "Locação de Tanques GLP",
      description: "Fornecemos tanques de GLP para locação com diferentes capacidades, ideais para condomínios, indústrias e comércios.",
      features: [
        "Tanques de 190kg a 5000kg",
        "Instalação inclusa",
        "Manutenção preventiva",
        "Contrato flexível"
      ],
      color: "from-jgas-yellow to-jgas-yellow-dark"
    },
    {
      icon: Settings,
      title: "Manutenção em Rede de Gás GLP",
      description: "Serviços especializados de manutenção preventiva e corretiva em redes de distribuição de gás GLP.",
      features: [
        "Inspeção técnica completa",
        "Teste de estanqueidade",
        "Adequação às normas",
        "Certificado de conformidade"
      ],
      color: "from-gray-600 to-jgas-black"
    },
    {
      icon: ShoppingCart,
      title: "Vendas de Gás GLP - PrimeGás",
      description: "Parceria oficial com a PrimeGás para fornecimento de gás GLP com qualidade garantida e preços competitivos.",
      features: [
        "Parceria oficial PrimeGás",
        "Entrega programada",
        "Preços competitivos",
        "Qualidade garantida"
      ],
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-jgas-black mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-jgas-gray max-w-3xl mx-auto">
            Oferecemos soluções completas em gás GLP com qualidade, segurança e confiabilidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-jgas-black">{service.title}</CardTitle>
                <CardDescription className="text-jgas-gray">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-jgas-yellow flex-shrink-0" />
                      <span className="text-sm text-jgas-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-jgas-yellow text-jgas-black hover:bg-jgas-yellow-light font-semibold">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-jgas-black text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Precisa de um orçamento personalizado?</h3>
          <p className="text-lg mb-6 text-gray-300">
            Entre em contato conosco e receba uma proposta sob medida para sua necessidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-jgas-yellow text-jgas-black hover:bg-jgas-yellow-light font-semibold">
              Solicitar Orçamento
            </Button>
            <Button size="lg" variant="outline" className="border-jgas-yellow text-jgas-yellow hover:bg-jgas-yellow hover:text-jgas-black">
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
