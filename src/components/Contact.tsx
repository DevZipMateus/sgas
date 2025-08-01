
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Formatação da mensagem para WhatsApp
    const whatsappMessage = `*Solicitação de Orçamento - J.Gas*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email}
*Serviço:* ${formData.service || 'Não especificado'}

*Mensagem:*
${formData.message}

_Mensagem enviada através do site_`;

    // Número do WhatsApp (substitua pelo número real da empresa)
    const whatsappNumber = '5511999999999'; // Formato: código do país + DDD + número
    
    // Criar URL do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });

    toast({
      title: "Sucesso!",
      description: "Redirecionando para o WhatsApp...",
    });
  };

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
                <p className="text-gray-300">Preencha o formulário e entraremos em contato via WhatsApp</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nome *</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-jgas-black border-gray-600 text-white" 
                        placeholder="Seu nome completo" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Telefone *</label>
                      <Input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-jgas-black border-gray-600 text-white" 
                        placeholder="(11) 99999-9999" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">E-mail *</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-jgas-black border-gray-600 text-white" 
                      placeholder="seu@email.com" 
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Serviço de Interesse</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-jgas-black border border-gray-600 rounded-md text-white"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="Locação de Tanques GLP">Locação de Tanques GLP</option>
                      <option value="Manutenção em Rede de Gás">Manutenção em Rede de Gás</option>
                      <option value="Vendas de Gás GLP">Vendas de Gás GLP</option>
                      <option value="Todos os serviços">Todos os serviços</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-jgas-black border-gray-600 text-white min-h-[120px]" 
                      placeholder="Descreva sua necessidade ou dúvida..." 
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-jgas-yellow text-jgas-black hover:bg-jgas-yellow-light font-semibold text-lg py-6"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar via WhatsApp
                  </Button>
                </form>

                <p className="text-sm text-gray-400 text-center">
                  * Campos obrigatórios. Você será redirecionado para o WhatsApp para enviar a mensagem.
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
