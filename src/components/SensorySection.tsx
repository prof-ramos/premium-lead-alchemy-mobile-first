import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Star, Zap } from "lucide-react";
import luxuryProperty from "@/assets/luxury-property.jpg";

const SensorySection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${luxuryProperty})` }}
      >
        <div className="absolute inset-0 bg-navy/85"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gold/10 blur-2xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gold/15 blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Emotional Icons */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="animate-pulse">
              <Heart className="w-12 h-12 text-gold" />
            </div>
            <div className="animate-pulse" style={{ animationDelay: "1s" }}>
              <TrendingUp className="w-12 h-12 text-gold" />
            </div>
            <div className="animate-pulse" style={{ animationDelay: "2s" }}>
              <Star className="w-12 h-12 text-gold" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Viva a Emoção de <br />
            <span className="text-gradient-gold">Dominar o Mercado Imobiliário</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="bg-gold/20 rounded-full p-3 flex-shrink-0">
                  <Zap className="w-6 h-6 text-gold" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-3">Imagine a Satisfação...</h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    De ver sua caixa de entrada cheia de mensagens de clientes prontos para comprar, 
                    atraídos por anúncios que destacam o luxo e a exclusividade de suas propriedades.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="bg-gold/20 rounded-full p-3 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-gold" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-3">Sinta o Poder...</h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    De controlar suas campanhas digitais com total confiança, transformando cada clique 
                    em uma oportunidade real de negócio fechado e comissão garantida.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-start gap-4">
                <div className="bg-gold/20 rounded-full p-3 flex-shrink-0">
                  <Star className="w-6 h-6 text-gold" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-3">Experimente a Liberdade...</h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    De trabalhar com clientes qualificados que valorizam seu tempo e expertise, 
                    eliminando para sempre a dependência de indicações e prospecção manual.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emotional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">90%</div>
              <div className="text-white text-lg">Redução no Tempo de Prospecção</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">5x</div>
              <div className="text-white text-lg">Mais Leads Qualificados</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">300%</div>
              <div className="text-white text-lg">Aumento na Taxa de Conversão</div>
            </div>
          </div>

          <div className="bg-gold/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/30 mb-8">
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              "Pare de competir por migalhas. Comece a dominar o mercado de luxo 
              com campanhas que atraem <span className="text-gold">os clientes certos</span>, 
              no <span className="text-gold">momento certo</span>, pelo <span className="text-gold">valor certo</span>."
            </p>
          </div>

          <Button variant="hero" size="xl" className="shadow-luxury">
            <Heart className="w-5 h-5" />
            Quero Viver Essa Transformação Agora!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SensorySection;