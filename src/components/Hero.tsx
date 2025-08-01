
import { CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-jgas-black via-jgas-black-light to-jgas-black min-h-screen flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Soluções Completas em 
            <span className="text-jgas-yellow block">Gás GLP</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Especialistas em locação de tanques, manutenção de redes e vendas de gás GLP com parceria PrimeGás
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-jgas-yellow flex-shrink-0" />
              <span className="text-lg">Locação de Tanques GLP</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-jgas-yellow flex-shrink-0" />
              <span className="text-lg">Manutenção em Rede de Gás</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-jgas-yellow flex-shrink-0" />
              <span className="text-lg">Vendas com Parceria PrimeGás</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-jgas-yellow text-jgas-black hover:bg-jgas-yellow-light font-semibold text-lg px-8">
              Solicitar Orçamento
            </Button>
            <Button size="lg" variant="outline" className="border-jgas-yellow text-jgas-yellow hover:bg-jgas-yellow hover:text-jgas-black font-semibold text-lg px-8">
              <Phone className="h-5 w-5 mr-2" />
              (11) 99999-9999
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-jgas-yellow/20 to-transparent p-8 rounded-2xl backdrop-blur-sm border border-jgas-yellow/30">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Por que escolher a S-Gás?</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-jgas-yellow rounded-full"></div>
                  <span>Mais de 10 anos de experiência</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-jgas-yellow rounded-full"></div>
                  <span>Equipe técnica especializada</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-jgas-yellow rounded-full"></div>
                  <span>Atendimento 24/7</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-jgas-yellow rounded-full"></div>
                  <span>Parceria oficial PrimeGás</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
