import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-luxury-real-estate.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-navy/80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 rounded-full bg-gold/20 blur-xl"></div>
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-16 h-16 rounded-full bg-gold/30 blur-lg"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-gold font-semibold text-sm">CURSO #1 EM TRÁFEGO IMOBILIÁRIO</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Transforme Seu Negócio Imobiliário com{" "}
            <span className="text-gradient-gold">Tráfego Pago de Alta Performance</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Descubra estratégias comprovadas para atrair leads qualificados, 
            fechar vendas de imóveis de luxo e se tornar referência no mercado digital.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="hero" 
              size="xl"
              className="min-w-64"
            >
              <Play className="w-5 h-5" />
              Inscreva-se Agora e Comece a Vender Mais!
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 min-w-64"
            >
              Ver Demonstração Gratuita
            </Button>
          </div>
          
          {/* Urgency Text */}
          <p className="text-gold font-semibold text-lg mb-12 animate-pulse">
            ⚡ Vagas limitadas! Garante sua vaga no curso que está revolucionando o mercado imobiliário.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">500+</div>
              <div className="text-gray-300">Corretores Treinados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">R$ 50M+</div>
              <div className="text-gray-300">Em Vendas Geradas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">98%</div>
              <div className="text-gray-300">Taxa de Satisfação</div>
            </div>
          </div>
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