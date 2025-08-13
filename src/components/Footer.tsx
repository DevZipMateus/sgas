
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-jgas-black-light text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <img src="/lovable-uploads/1a43baab-17c9-4c1c-a5bd-fa987002802f.png" alt="S-Gás" className="h-16 mb-4" />
            <p className="text-gray-300 mb-4 max-w-md">
              É mais do que Gás, é GLP com Segurança e Profissionalismo, do botijão a tubulação. Referência no setor de Gás GLP.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>S-Gás Comércio de Equipamentos de Gás LTDA</p>
              <p>Soluções completas em GLP</p>
            </div>
            
            {/* Redes Sociais */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.facebook.com/share/1Qgxm7DFh3/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-jgas-yellow text-jgas-black rounded-full flex items-center justify-center hover:bg-jgas-yellow-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/sgas_comercio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-jgas-yellow text-jgas-black rounded-full flex items-center justify-center hover:bg-jgas-yellow-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-jgas-yellow">Nossos Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Vendas e Locações de Tanques GLP</li>
              <li>Manutenção em Redes de Gás GLP</li>
              <li>Projetos de Redes de Gás</li>
              <li>Abastecimento a Granel</li>
              <li>Suporte Técnico</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-jgas-yellow">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-jgas-yellow flex-shrink-0" />
                <span className="text-gray-300">(14) 99162-2380</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-jgas-yellow flex-shrink-0" />
                <span className="text-gray-300">fernando@squadromr.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-jgas-yellow flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>Av. Comandante João Ribeiro de Barros</p>
                  <p>KM 444,5 - Parque das Industrias</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-jgas-yellow flex-shrink-0" />
                <span className="text-gray-300">Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 S-Gás Comércio de Equipamentos de Gás LTDA - Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">www.sgasgranel.com.br</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
