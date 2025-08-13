
import { Award, Shield, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "10+", text: "Anos de Experiência" },
    { icon: Users, number: "500+", text: "Clientes Atendidos" },
    { icon: Shield, number: "100%", text: "Segurança Garantida" },
    { icon: Clock, number: "24/7", text: "Suporte Disponível" }
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-jgas-black mb-4 lg:mb-6">
              Bem-vindo à Sgás Comércio de Equipamentos de Gás Ltda
            </h2>
            <p className="text-base sm:text-lg text-jgas-gray mb-4 lg:mb-6 leading-relaxed">
              A Sgás Comércio de Equipamentos de Gás Ltda é referência no setor de Gás GLP, oferecendo 
              soluções completas para clientes residenciais, comerciais e industriais. Com anos de experiência, 
              nossa empresa se destaca pela qualidade, segurança e eficiência em todos os serviços prestados.
            </p>

            <div className="mb-6 lg:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-jgas-black mb-4 lg:mb-6">Por que escolher a Sgás?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-jgas-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-jgas-black mb-1 text-sm sm:text-base">Segurança em Primeiro Lugar</h4>
                    <p className="text-jgas-gray text-sm sm:text-base">Todos os nossos serviços seguem rigorosamente as normas de segurança e regulamentações do setor.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-jgas-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-jgas-black mb-1 text-sm sm:text-base">Experiência Comprovada</h4>
                    <p className="text-jgas-gray text-sm sm:text-base">Nossa equipe altamente qualificada garante instalações precisas e eficientes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-jgas-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-jgas-black mb-1 text-sm sm:text-base">Atendimento Personalizado</h4>
                    <p className="text-jgas-gray text-sm sm:text-base">Cada projeto é planejado para atender às necessidades específicas de cada cliente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-jgas-yellow to-jgas-yellow-dark p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-jgas-black mb-6 lg:mb-8 text-center">Nossos Números</h3>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white/20 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                    <div className="flex justify-center mb-3">
                      <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-jgas-black" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-jgas-black mb-2">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-jgas-black/80 font-medium">{stat.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
