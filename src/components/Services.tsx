
import { Fuel, Settings, ShoppingCart, Wrench, Phone, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Vendas e Locações de Tanques GLP",
      description: "Oferecemos tanques de diversos tamanhos para locação ou venda, garantindo o abastecimento contínuo e seguro para seu estabelecimento.",
      features: [
        "Tanques de 100kg a 2000kg+",
        "Locação com manutenção inclusa",
        "Vendas com suporte técnico",
        "Instalação profissional"
      ],
      color: "from-jgas-yellow to-jgas-yellow-dark"
    },
    {
      icon: Settings,
      title: "Manutenção em Redes de Gás GLP",
      description: "Serviços especializados de manutenção preventiva e corretiva em redes de distribuição de gás GLP, seguindo rigorosamente as normas de segurança.",
      features: [
        "Manutenção preventiva",
        "Reparos emergenciais",
        "Testes de estanqueidade",
        "Certificação técnica"
      ],
      color: "from-gray-600 to-jgas-black"
    },
    {
      icon: Wrench,
      title: "Desenvolvimento de Projetos de Redes de Gás",
      description: "Elaboramos projetos completos de redes de gás GLP, desde o dimensionamento até a execução, garantindo eficiência e segurança.",
      features: [
        "Projeto personalizado",
        "Dimensionamento técnico",
        "Documentação completa",
        "Aprovação nos órgãos competentes"
      ],
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Fuel,
      title: "Vendas de Gás com Abastecimento a Granel",
      description: "Fornecimento de gás GLP a granel com abastecimento direto nos tanques do cliente, garantindo continuidade operacional.",
      features: [
        "Abastecimento programado",
        "Gás de alta qualidade",
        "Entrega pontual",
        "Controle de estoque"
      ],
      color: "from-green-600 to-green-800"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden h-full">
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-jgas-black mb-2">{service.title}</CardTitle>
                <CardDescription className="text-jgas-gray text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-jgas-yellow flex-shrink-0" />
                      <span className="text-xs text-jgas-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-jgas-yellow text-jgas-black hover:bg-jgas-yellow-light font-semibold text-sm">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-jgas-black text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Suporte Técnico Especializado</h3>
          <p className="text-lg mb-6 text-gray-300">
            Nossa equipe oferece suporte técnico completo para garantir o funcionamento perfeito de suas instalações de gás GLP. Entre em contato conosco!
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
