
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Location = () => {
  return (
    <section id="localizacao" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-jgas-black mb-4 lg:mb-6">
            Nossa Localização
          </h2>
          <p className="text-lg sm:text-xl text-jgas-gray max-w-3xl mx-auto px-4">
            Estamos estrategicamente localizados para melhor atender nossos clientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <Card className="border-jgas-yellow/20 hover:border-jgas-yellow/40 transition-colors">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center space-x-3 text-jgas-black text-base sm:text-lg">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-jgas-yellow" />
                  <span>Endereço</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-base sm:text-lg text-jgas-gray">
                  Avenida Comandante João Ribeiro de Barros, KM 444,5<br />
                  Parque das Industrias
                </p>
              </CardContent>
            </Card>

            <Card className="border-jgas-yellow/20 hover:border-jgas-yellow/40 transition-colors">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center space-x-3 text-jgas-black text-base sm:text-lg">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-jgas-yellow" />
                  <span>Telefone</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-base sm:text-lg text-jgas-gray">(14) 99162-2380</p>
                <p className="text-sm text-jgas-gray">WhatsApp disponível</p>
              </CardContent>
            </Card>

            <Card className="border-jgas-yellow/20 hover:border-jgas-yellow/40 transition-colors">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center space-x-3 text-jgas-black text-base sm:text-lg">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-jgas-yellow" />
                  <span>E-mail</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-base sm:text-lg text-jgas-gray">fernando@squadromr.com.br</p>
              </CardContent>
            </Card>

            <Card className="border-jgas-yellow/20 hover:border-jgas-yellow/40 transition-colors">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center space-x-3 text-jgas-black text-base sm:text-lg">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-jgas-yellow" />
                  <span>Horário de Funcionamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-1 text-jgas-gray text-sm sm:text-base">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 sm:p-8 text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-jgas-yellow rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-jgas-black" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-jgas-black mb-4">
              Visite Nossa Sede
            </h3>
            <p className="text-jgas-gray mb-4 sm:mb-6 text-sm sm:text-base">
              Estamos localizados em uma região estratégica para melhor atender 
              nossos clientes. Venha nos conhecer!
            </p>
            <div className="space-y-2 text-sm text-jgas-gray">
              <p className="font-semibold">Fácil acesso</p>
              <p>Estacionamento disponível</p>
              <p>Atendimento personalizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
