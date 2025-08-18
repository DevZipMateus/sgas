
import { useState } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface RegionSelectionModalProps {
  children: React.ReactNode;
  triggerClassName?: string;
}

const RegionSelectionModal = ({ children, triggerClassName }: RegionSelectionModalProps) => {
  const { toast } = useToast();
  const [selectedRegion, setSelectedRegion] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

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

  const handleSendWhatsApp = () => {
    if (!selectedRegion) {
      toast({
        title: "Erro",
        description: "Por favor, selecione uma região.",
        variant: "destructive",
      });
      return;
    }

    const sellerInfo = regionSellers[selectedRegion as keyof typeof regionSellers];
    
    // Formatação da mensagem para WhatsApp
    const whatsappMessage = `*Solicitação de Orçamento - S-Gás*

*Região:* ${sellerInfo.region}

*Mensagem:*
${message || 'Gostaria de solicitar um orçamento para serviços de gás GLP.'}

_Mensagem enviada através do site www.sgasgranel.com.br_`;

    // Criar URL do WhatsApp para o vendedor da região selecionada
    const whatsappUrl = `https://wa.me/${sellerInfo.phone}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário e fechar modal
    setSelectedRegion('');
    setMessage('');
    setOpen(false);

    toast({
      title: "Sucesso!",
      description: `Redirecionando para o WhatsApp do ${sellerInfo.name}...`,
    });
  };

  const handleAlternativeContact = () => {
    setOpen(false);
    // Scroll suave para a seção de contato
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Adicionar destaque temporário ao formulário
      setTimeout(() => {
        const form = contactSection.querySelector('form');
        if (form) {
          form.classList.add('ring-2', 'ring-jgas-yellow', 'ring-opacity-50');
          setTimeout(() => {
            form.classList.remove('ring-2', 'ring-jgas-yellow', 'ring-opacity-50');
          }, 3000);
        }
      }, 500);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className={triggerClassName}>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-jgas-black-light border-jgas-yellow/30 text-white max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-bold text-jgas-yellow mb-2">
            Solicitar Orçamento
          </DialogTitle>
          <p className="text-gray-300 text-sm">
            Selecione sua região para falar diretamente com nosso vendedor
          </p>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <MapPin className="h-4 w-4 inline mr-1" />
              Sua Região *
            </label>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="bg-jgas-black border-gray-600 text-white">
                <SelectValue placeholder="Selecione sua região" />
              </SelectTrigger>
              <SelectContent className="bg-jgas-black-light border-gray-600 text-white z-50">
                <SelectItem value="bauru">Bauru e Região - Marcelo {regionSellers.bauru.displayPhone}</SelectItem>
                <SelectItem value="avare">Avaré e Região - Marcelo {regionSellers.avare.displayPhone}</SelectItem>
                <SelectItem value="marilia">Marília e Região - Lucas {regionSellers.marilia.displayPhone}</SelectItem>
                <SelectItem value="presidente-prudente">Presidente Prudente - Alessandro {regionSellers['presidente-prudente'].displayPhone}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Mensagem (opcional)
            </label>
            <Textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-jgas-black border-gray-600 text-white min-h-[80px]" 
              placeholder="Descreva brevemente sua necessidade..." 
            />
          </div>

          <div className="space-y-3">
            <Button 
              onClick={handleSendWhatsApp}
              className="w-full bg-jgas-yellow text-jgas-black hover:bg-jgas-yellow-light font-semibold"
              disabled={!selectedRegion}
            >
              <Phone className="h-4 w-4 mr-2" />
              Enviar via WhatsApp
            </Button>

            <Button 
              onClick={handleAlternativeContact}
              variant="outline"
              className="w-full border-jgas-yellow text-jgas-yellow hover:bg-jgas-yellow hover:text-jgas-black"
            >
              Preencher Formulário Completo
            </Button>
          </div>

          <p className="text-xs text-gray-400 text-center">
            * Você será redirecionado para o WhatsApp do vendedor da sua região
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegionSelectionModal;
