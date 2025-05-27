
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Substitua pelo número do WhatsApp do proprietário
    const phoneNumber = "5561999999999"; // Formato: código do país + DDD + número
    const message = "Olá! Gostaria de saber mais informações sobre as aulas de BJJ.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppFloat;
