
import { Fuel, Settings, ShoppingCart, CheckCircle, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Comércio de Gás GLP",
      description: "Fornecemos gás de alta qualidade, atendendo às necessidades de clientes com segurança e confiabilidade.",
      features: [
        "Gás de alta qualidade",
        "Atendimento seguro",
        "Confiabilidade garantida",
        "Clientes residenciais e comerciais"
      ],
      color: "from-jgas-yellow to-jgas-yellow-dark"
    },
    {
      icon: Settings,
      title: "Instalações de Redes de Gás GLP",
      description: "Projetamos e executamos redes de distribuição de gás GLP de acordo com as normas técnicas, garantindo segurança e eficiência.",
      features: [
        "Projeto personalizado",
        "Execução conforme normas técnicas",
        "Segurança garantida",
        "Eficiência comprovada"
      ],
      color: "from-gray-600 to-jgas-black"
    },
    {
      icon: Fuel,
      title: "Instalações e Vendas de Tanques a Granel",
      description: "Instalamos tanques de 100 a 2000 kg (ou mais), oferecendo soluções personalizadas para armazenamento seguro e abastecimento contínuo.",
      features: [
        "Tanques de 100kg a 2000kg+",
        "Soluções personalizadas",
        "Armazenamento seguro",
        "Abastecimento contínuo"
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
            Soluções completas em Gás GLP para clientes residenciais, comerciais e industriais
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
          <h3 className="text-2xl font-bold mb-4">Entre em Contato</h3>
          <p className="text-lg mb-6 text-gray-300">
            Descubra como a Sgás Comércio de Equipamentos Ltda pode fornecer soluções completas em Gás GLP para o seu negócio ou residência. Solicite um orçamento e fale com nossos especialistas hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-jgas-yellow text-jgas-black hover:bg-jgas-yellow-light font-semibold">
              Solicitar Orçamento
            </Button>
            <Button size="lg" variant="outline" className="border-jgas-yellow text-jgas-yellow hover:bg-jgas-yellow hover:text-jgas-black">
              <Phone className="h-5 w-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
