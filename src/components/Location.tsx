
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-jgas-black mb-6">
            Nossa Localização
          </h2>
          <p className="text-xl text-jgas-gray max-w-3xl mx-auto">
            Estamos estrategicamente localizados para melhor atender nossos clientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-jgas-yellow/20 hover:border-jgas-yellow/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-jgas-black">
                  <MapPin className="h-6 w-6 text-jgas-yellow" />
                  <span>Endereço</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-jgas-gray">
                  Avenida Comandante João Ribeiro de Barros, KM 444,5<br />
                  Parque das Industrias
                </p>
              </CardContent>
            </Card>

            <Card className="border-jgas-yellow/20 hover:border-jgas-yellow/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-jgas-black">
                  <Phone className="h-6 w-6 text-jgas-yellow" />
                  <span>Telefone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-jgas-gray">(14) 99162-2380</p>
                <p className="text-sm text-jgas-gray">WhatsApp disponível</p>
              </CardContent>
            </Card>

            <Card className="border-jgas-yellow/20 hover:border-jgas-yellow/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-jgas-black">
                  <Mail className="h-6 w-6 text-jgas-yellow" />
                  <span>E-mail</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-jgas-gray">fernando@squadromr.com.br</p>
              </CardContent>
            </Card>

            <Card className="border-jgas-yellow/20 hover:border-jgas-yellow/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-jgas-black">
                  <Clock className="h-6 w-6 text-jgas-yellow" />
                  <span>Horário de Funcionamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-jgas-gray">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <div className="w-24 h-24 bg-jgas-yellow rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-12 h-12 text-jgas-black" />
            </div>
            <h3 className="text-2xl font-bold text-jgas-black mb-4">
              Visite Nossa Sede
            </h3>
            <p className="text-jgas-gray mb-6">
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
