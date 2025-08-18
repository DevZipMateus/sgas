
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    region: '',
    service: '',
    message: ''
  });

  // Mapeamento das regiões com seus respectivos vendedores e números
  const regionSellers = {
    'bauru': {
      name: 'Marcelo',
      phone: '5514996598323',
      displayPhone: '(14) 99659-8323',
      region: 'Bauru e Região'
    },
    'avare': {
      name: 'Marcelo',
      phone: '5514996598323',
      displayPhone: '(14) 99659-8323',
      region: 'Avaré e Região'
    },
    'marilia': {
      name: 'Lucas',
      phone: '5514998480109',
      displayPhone: '(14) 99848-0109',
      region: 'Marília e Região'
    },
    'presidente-prudente': {
      name: 'Alessandro',
      phone: '5518997931003',
      displayPhone: '(18) 99793-1003',
      region: 'Presidente Prudente'
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.email || !formData.region || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Obter informações do vendedor baseado na região selecionada
    const sellerInfo = regionSellers[formData.region as keyof typeof regionSellers];
    
    if (!sellerInfo) {
      toast({
        title: "Erro",
        description: "Por favor, selecione uma região válida.",
        variant: "destructive",
      });
      return;
    }

    // Formatação da mensagem para WhatsApp
    const whatsappMessage = `*Solicitação de Orçamento - S-Gás*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email}
*Região:* ${sellerInfo.region}
*Serviço:* ${formData.service || 'Não especificado'}

*Mensagem:*
${formData.message}

_Mensagem enviada através do site www.sgasgranel.com.br_`;

    // Criar URL do WhatsApp para o vendedor da região selecionada
    const whatsappUrl = `https://wa.me/${sellerInfo.phone}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    setFormData({
      name: '',
      phone: '',
      email: '',
      region: '',
      service: '',
      message: ''
    });

    toast({
      title: "Sucesso!",
      description: `Redirecionando para o WhatsApp do ${sellerInfo.name}...`,
    });
  };

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-jgas-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para atender você com as melhores soluções em gás GLP
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Informações de contato */}
          <div className="space-y-4 lg:space-y-6">
            <Card className="bg-jgas-black-light border-jgas-yellow/30 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-3 text-lg">
                  <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-jgas-yellow" />
                  <span>Telefone</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-base lg:text-lg">(14) 99162-2380</p>
                <p className="text-sm text-gray-300">WhatsApp disponível</p>
              </CardContent>
            </Card>

            <Card className="bg-jgas-black-light border-jgas-yellow/30 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-3 text-lg">
                  <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-jgas-yellow" />
                  <span>E-mail</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-base lg:text-lg">fernando@squadromr.com.br</p>
                <p className="text-sm text-gray-300">Respondemos em até 24h</p>
              </CardContent>
            </Card>

            <Card className="bg-jgas-black-light border-jgas-yellow/30 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-3 text-lg">
                  <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-jgas-yellow" />
                  <span>Localização</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-base lg:text-lg">Av. Comandante João Ribeiro de Barros</p>
                <p className="text-sm text-gray-300">KM 444,5 - Parque das Industrias</p>
              </CardContent>
            </Card>

            <Card className="bg-jgas-black-light border-jgas-yellow/30 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-3 text-lg">
                  <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-jgas-yellow" />
                  <span>Horário</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-base lg:text-lg">Seg - Sex: 8h às 18h</p>
                <p className="text-sm text-gray-300">Sáb: 8h às 12h</p>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de contato */}
          <div className="lg:col-span-2">
            <Card className="bg-jgas-black-light border-jgas-yellow/30">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl lg:text-2xl text-white">Solicite seu Orçamento</CardTitle>
                <p className="text-gray-300 text-sm lg:text-base">Preencha o formulário e entraremos em contato via WhatsApp</p>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
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
                        placeholder="(14) 99999-9999" 
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">Região *</label>
                    <Select value={formData.region} onValueChange={handleSelectChange('region')}>
                      <SelectTrigger className="bg-jgas-black border-gray-600 text-white">
                        <SelectValue placeholder="Selecione sua região" />
                      </SelectTrigger>
                      <SelectContent className="bg-jgas-black-light border-gray-600 text-white z-50">
                        <SelectItem value="bauru">Bauru e Região - Marcelo (14) 99659-8323</SelectItem>
                        <SelectItem value="avare">Avaré e Região - Marcelo (14) 99659-8323</SelectItem>
                        <SelectItem value="marilia">Marília e Região - Lucas (14) 99848-0109</SelectItem>
                        <SelectItem value="presidente-prudente">Presidente Prudente - Alessandro (18) 99793-1003</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Serviço de Interesse</label>
                    <Select value={formData.service} onValueChange={handleSelectChange('service')}>
                      <SelectTrigger className="bg-jgas-black border-gray-600 text-white">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent className="bg-jgas-black-light border-gray-600 text-white z-50">
                        <SelectItem value="Vendas e Locações de Tanques GLP">Vendas e Locações de Tanques GLP</SelectItem>
                        <SelectItem value="Manutenção em Redes de Gás GLP">Manutenção em Redes de Gás GLP</SelectItem>
                        <SelectItem value="Desenvolvimento de Projetos de Redes de Gás">Desenvolvimento de Projetos de Redes de Gás</SelectItem>
                        <SelectItem value="Vendas de Gás com Abastecimento a Granel">Vendas de Gás com Abastecimento a Granel</SelectItem>
                        <SelectItem value="Suporte Técnico">Suporte Técnico</SelectItem>
                      </SelectContent>
                    </Select>
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
                    className="w-full bg-jgas-yellow text-jgas-black hover:bg-jgas-yellow-light font-semibold text-base lg:text-lg py-4 lg:py-6"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar via WhatsApp
                  </Button>
                </form>

                <p className="text-sm text-gray-400 text-center">
                  * Campos obrigatórios. Você será redirecionado para o WhatsApp do vendedor da sua região.
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
