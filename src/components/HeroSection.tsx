import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-luxury-real-estate.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero pt-16 lg:pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Luxuoso imóvel de alto padrão"
      >
        <div className="absolute inset-0 bg-navy/80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 md:top-20 left-4 md:left-10 animate-float">
        <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-gold/20 blur-xl"></div>
      </div>
      <div className="absolute bottom-20 md:bottom-32 right-4 md:right-16 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gold/30 blur-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto text-center animate-fade-in">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-3 py-2 mb-4 md:px-4 md:mb-6">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-gold font-semibold text-xs md:text-sm">CURSO #1 EM TRÁFEGO IMOBILIÁRIO</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight animate-slide-up px-2">
            Transforme Seu Negócio Imobiliário com{" "}
            <span className="text-gradient-gold">Tráfego Pago de Alta Performance</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Descubra estratégias comprovadas para atrair leads qualificados, 
            fechar vendas de imóveis de luxo e se tornar referência no mercado digital.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 px-4">
            <Button 
              variant="hero" 
              size="lg"
              className="w-full sm:w-auto sm:min-w-64 h-12 md:h-14 text-base md:text-lg"
              aria-label="Inscrever-se no curso de tráfego imobiliário"
            >
              <Play className="w-5 h-5" aria-hidden="true" />
              Inscreva-se Agora e Comece a Vender Mais!
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto sm:min-w-64 h-12 md:h-14 text-base md:text-lg border-white/30 text-white hover:bg-white/10"
              aria-label="Assistir demonstração gratuita do curso"
            >
              Ver Demonstração Gratuita
            </Button>
          </div>
          
          {/* Urgency Text */}
          <p className="text-gold font-semibold text-sm md:text-base lg:text-lg mb-8 md:mb-12 animate-pulse px-4">
            ⚡ Vagas limitadas! Garanta sua vaga no curso que está revolucionando o mercado imobiliário.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gold" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;