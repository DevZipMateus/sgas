
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const whatsappNumber = '5514991622380'; // (14) 99162-2380
  const message = 'Olá! Gostaria de saber mais sobre os serviços da S-Gás.';

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-pulse"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
    </button>
  );
};

export default WhatsAppFloat;
