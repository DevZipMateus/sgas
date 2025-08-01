
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-jgas-black-light text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <img src="/lovable-uploads/80db88f6-baf9-43eb-a7bd-47384cb29ba3.png" alt="J.Gas" className="h-16 mb-4" />
            <p className="text-gray-300 mb-4 max-w-md">
              Especialistas em soluções completas para gás GLP. Locação de tanques, manutenção de redes e vendas com parceria PrimeGás.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>CNPJ: 00.000.000/0001-00</p>
              <p>Licença INMETRO: 000000</p>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-jgas-yellow">Nossos Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Locação de Tanques GLP</li>
              <li>Manutenção de Rede de Gás</li>
              <li>Vendas de Gás GLP</li>
              <li>Instalação e Regulagem</li>
              <li>Inspeção Técnica</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-jgas-yellow">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-jgas-yellow flex-shrink-0" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-jgas-yellow flex-shrink-0" />
                <span className="text-gray-300">contato@jgas.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-jgas-yellow flex-shrink-0" />
                <span className="text-gray-300">São Paulo - SP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-jgas-yellow flex-shrink-0" />
                <span className="text-gray-300">24h por dia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 J.Gas - Todos os direitos reservados. Desenvolvido com tecnologia de ponta.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
