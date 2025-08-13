
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-jgas-black-light text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Logo e descrição */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img src="/lovable-uploads/1a43baab-17c9-4c1c-a5bd-fa987002802f.png" alt="S-Gás" className="h-12 sm:h-16 mb-4" />
            <p className="text-gray-300 mb-4 max-w-md text-sm sm:text-base">
              É mais do que Gás, é GLP com Segurança e Profissionalismo, do botijão a tubulação. Referência no setor de Gás GLP.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-gray-400">
              <p>S-Gás Comércio de Equipamentos de Gás LTDA</p>
              <p>Soluções completas em GLP</p>
            </div>
            
            {/* Redes Sociais */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.facebook.com/share/1Qgxm7DFh3/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-jgas-yellow text-jgas-black rounded-full flex items-center justify-center hover:bg-jgas-yellow-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a 
                href="https://www.instagram.com/sgas_comercio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-jgas-yellow text-jgas-black rounded-full flex items-center justify-center hover:bg-jgas-yellow-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-jgas-yellow">Nossos Serviços</h4>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>Vendas e Locações de Tanques GLP</li>
              <li>Manutenção em Redes de Gás GLP</li>
              <li>Projetos de Redes de Gás</li>
              <li>Abastecimento a Granel</li>
              <li>Suporte Técnico</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-jgas-yellow">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-jgas-yellow flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">(14) 99162-2380</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-jgas-yellow flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base break-all">fernando@squadromr.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-jgas-yellow flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm sm:text-base">
                  <p>Av. Comandante João Ribeiro de Barros</p>
                  <p>KM 444,5 - Parque das Industrias</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-jgas-yellow flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; 2024 S-Gás Comércio de Equipamentos de Gás LTDA - Todos os direitos reservados.</p>
          <p className="mt-2 text-xs sm:text-sm">www.sgasgranel.com.br</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
