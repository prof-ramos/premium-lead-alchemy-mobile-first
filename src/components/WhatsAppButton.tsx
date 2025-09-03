import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  variant?: "fixed" | "inline";
  size?: "sm" | "default" | "lg";
  className?: string;
}

const WhatsAppButton = ({ 
  phoneNumber = "5511999999999", // Default number - replace with real one
  message = "Olá! Tenho interesse no curso Tráfego Imobiliário de Alta Performance. Pode me ajudar?",
  variant = "fixed",
  size = "default",
  className = ""
}: WhatsAppButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Track WhatsApp click event
    // Example: gtag('event', 'whatsapp_click', { event_category: 'engagement' });
    
    window.open(whatsappUrl, '_blank');
  };

  if (variant === "fixed") {
    return (
      <div 
        className="fixed bottom-6 right-6 z-50 animate-bounce"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </Button>
        
        {isHovered && (
          <div className="absolute bottom-16 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
            <div className="text-sm font-semibold">💬 Tire suas dúvidas!</div>
            <div className="text-xs text-gray-600">Fale conosco no WhatsApp</div>
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white transform rotate-45"></div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="outline"
      size={size}
      className={`bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600 transition-all duration-300 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      Falar no WhatsApp
    </Button>
  );
};

export default WhatsAppButton;