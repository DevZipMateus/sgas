import { Menu, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header className="bg-gray-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-500">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-jgas-yellow" />
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-jgas-yellow" />
              <span>contato@sgas.com.br</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-jgas-yellow" />
            <span>São Paulo - SP</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/lovable-uploads/1a43baab-17c9-4c1c-a5bd-fa987002802f.png" alt="S-Gás" className="h-12" />
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-jgas-yellow transition-colors font-medium">
                {item.name}
              </a>
            ))}
          </nav>

          <Button className="hidden md:flex bg-jgas-yellow text-jgas-black hover:bg-jgas-yellow-light font-semibold">
            Solicitar Orçamento
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-600 text-white">
              <nav className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <a key={item.name} href={item.href} className="hover:text-jgas-yellow transition-colors text-lg">
                    {item.name}
                  </a>
                ))}
                <Button className="bg-jgas-yellow text-jgas-black hover:bg-jgas-yellow-light font-semibold mt-4">
                  Solicitar Orçamento
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
