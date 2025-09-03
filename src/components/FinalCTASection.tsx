import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Crown, 
  CheckCircle, 
  Star, 
  Gift,
  Shield,
  Users,
  Zap,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-luxury-real-estate.jpg";

const FinalCTASection = () => {
  const includes = [
    "✅ Acesso vitalício ao curso completo",
    "✅ Todos os 6 módulos práticos",
    "✅ Materiais complementares (PDFs, checklists)",
    "✅ Grupo VIP exclusivo com networking",
    "✅ Lives de tira-dúvidas semanais",
    "✅ R$ 3.085 em bônus gratuitos",
    "✅ Garantia incondicional de 30 dias",
    "✅ Suporte direto da equipe especializada"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-navy/90"></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Crown className="w-24 h-24 text-gold/20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "2s" }}>
        <Star className="w-20 h-20 text-gold/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-6">
              <Crown className="w-5 h-5 text-gold" />
              <span className="text-gold font-bold text-sm uppercase tracking-wide">
                Transformação Completa
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sua Jornada para se Tornar um <span className="text-gradient-gold">Corretor de Elite</span> Começa Agora!
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Inscreva-se hoje e receba acesso imediato ao curso, todos os bônus exclusivos 
              e ao grupo VIP. Comece a atrair leads qualificados e vender mais imóveis de luxo ainda esta semana!
            </p>
          </div>

          {/* Offer Card */}
          <Card className="bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-luxury border-2 border-gold/30 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - What's Included */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                  🎯 Tudo o que Você Recebe Hoje:
                </h3>
                <div className="space-y-3">
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-navy leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Pricing */}
              <div className="text-center lg:text-left">
                <div className="bg-navy rounded-2xl p-8 text-white">
                  <div className="mb-6">
                    <div className="text-lg text-gold mb-2">Valor Normal:</div>
                    <div className="text-2xl line-through text-gray-400 mb-2">R$ 2.997</div>
                    <div className="text-lg text-gold mb-2">Valor com Bônus:</div>
                    <div className="text-2xl line-through text-gray-400 mb-4">R$ 6.082</div>
                    
                    <div className="border-t border-gold/30 pt-4">
                      <div className="text-gold text-lg font-semibold mb-2">Seu Investimento Hoje:</div>
                      <div className="text-5xl md:text-6xl font-bold text-gold mb-2">
                        12x <span className="text-3xl">de</span>
                      </div>
                      <div className="text-6xl md:text-7xl font-bold text-gold mb-2">
                        R$ 97
                      </div>
                      <div className="text-lg text-white/80">
                        ou R$ 997 à vista
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gold/10 rounded-lg p-4 border border-gold/30">
                    <div className="text-gold font-bold text-lg mb-1">💎 Economia de 84%</div>
                    <div className="text-white/90 text-sm">
                      Válido apenas para as primeiras 100 inscrições
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Garantia de 30 Dias</h3>
              <p className="text-gray-300 text-sm">Satisfação total ou seu dinheiro de volta</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <Users className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Suporte Completo</h3>
              <p className="text-gray-300 text-sm">Grupo VIP e lives semanais inclusos</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <Zap className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Acesso Imediato</h3>
              <p className="text-gray-300 text-sm">Comece a implementar hoje mesmo</p>
            </Card>
          </div>

          {/* Final CTA Buttons */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full mb-4 text-xl py-6 shadow-luxury transform hover:scale-105"
              >
                <Crown className="w-6 h-6" />
                Quero Dominar o Tráfego Pago Imobiliário Agora!
                <ArrowRight className="w-6 h-6" />
              </Button>
              
              <p className="text-gold font-semibold mb-6 animate-pulse">
                🔥 Últimas 47 vagas com desconto de 84% - Oferta expira em 2 dias!
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-white/90 text-sm">
                  🔒 <strong>Pagamento 100% Seguro</strong> • 💳 Cartão, PIX ou Boleto • ⚡ Acesso Liberado em 5 Minutos
                </p>
              </div>
            </div>
          </div>

          {/* Risk Reversal */}
          <div className="mt-12 text-center">
            <div className="bg-gold/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/30 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                🛡️ Zero Risco para Você
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Teste o método completo por 30 dias. Se não estiver satisfeito com os resultados 
                ou não conseguir implementar as estratégias, devolvemos 100% do seu investimento. 
                <strong className="text-gold"> Sem perguntas, sem burocracia.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;