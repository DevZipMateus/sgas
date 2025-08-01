
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-jgas-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para atender você com as melhores soluções em gás GLP
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Informações de contato */}
          <div className="space-y-6">
            <Card className="bg-jgas-black-light border-jgas-yellow/30 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-jgas-yellow" />
                  <span>Telefone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">(11) 99999-9999</p>
                <p className="text-sm text-gray-300">WhatsApp disponível</p>
              </CardContent>
            </Card>

            <Card className="bg-jgas-black-light border-jgas-yellow/30 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-jgas-yellow" />
                  <span>E-mail</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">contato@jgas.com.br</p>
                <p className="text-sm text-gray-300">Respondemos em até 24h</p>
              </CardContent>
            </Card>

            <Card className="bg-jgas-black-light border-jgas-yellow/30 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-jgas-yellow" />
                  <span>Localização</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">São Paulo - SP</p>
                <p className="text-sm text-gray-300">Atendemos toda a Grande SP</p>
              </CardContent>
            </Card>

            <Card className="bg-jgas-black-light border-jgas-yellow/30 text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-jgas-yellow" />
                  <span>Horário</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">24 horas por dia</p>
                <p className="text-sm text-gray-300">Emergências e suporte</p>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de contato */}
          <div className="lg:col-span-2">
            <Card className="bg-jgas-black-light border-jgas-yellow/30">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Solicite seu Orçamento</CardTitle>
                <p className="text-gray-300">Preencha o formulário e entraremos em contato em breve</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nome *</label>
                    <Input className="bg-jgas-black border-gray-600 text-white" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Telefone *</label>
                    <Input className="bg-jgas-black border-gray-600 text-white" placeholder="(11) 99999-9999" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">E-mail *</label>
                  <Input className="bg-jgas-black border-gray-600 text-white" placeholder="seu@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Serviço de Interesse</label>
                  <select className="w-full p-3 bg-jgas-black border border-gray-600 rounded-md text-white">
                    <option>Selecione um serviço</option>
                    <option>Locação de Tanques GLP</option>
                    <option>Manutenção em Rede de Gás</option>
                    <option>Vendas de Gás GLP</option>
                    <option>Todos os serviços</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem *</label>
                  <Textarea className="bg-jgas-black border-gray-600 text-white min-h-[120px]" placeholder="Descreva sua necessidade ou dúvida..." />
                </div>

                <Button className="w-full bg-jgas-yellow text-jgas-black hover:bg-jgas-yellow-light font-semibold text-lg py-6">
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  * Campos obrigatórios. Seus dados estão seguros conosco.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
