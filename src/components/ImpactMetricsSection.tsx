import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  DollarSign,
  Star,
  Zap
} from "lucide-react";

const ImpactMetricsSection = () => {
  const mainMetrics = [
    {
      icon: <Users className="w-10 h-10 text-gold" />,
      value: "500+",
      label: "Corretores Formados",
      description: "Já transformaram seus negócios com nosso método"
    },
    {
      icon: <DollarSign className="w-10 h-10 text-gold" />,
      value: "R$ 50M+",
      label: "Em Vendas Geradas",
      description: "Volume de negócios criado pelos nossos alunos"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-gold" />,
      value: "300%",
      label: "Aumento Médio de Leads",
      description: "Crescimento típico nos primeiros 90 dias"
    },
    {
      icon: <Award className="w-10 h-10 text-gold" />,
      value: "98%",
      label: "Taxa de Satisfação",
      description: "Dos alunos recomendam o curso"
    }
  ];

  const additionalStats = [
    { icon: <Target className="w-6 h-6 text-gold" />, label: "85% taxa de conversão", value: "Lead para cliente" },
    { icon: <Zap className="w-6 h-6 text-gold" />, label: "30 dias", value: "Para primeiros resultados" },
    { icon: <Star className="w-6 h-6 text-gold" />, label: "R$ 2.3M", value: "Maior venda de um aluno" },
    { icon: <Users className="w-6 h-6 text-gold" />, label: "15+ cidades", value: "Cases de sucesso" }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-32 h-32 bg-gold/5 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-24 h-24 bg-gold/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="secondary" className="mb-4 text-gold bg-gold/10 border-gold/20">
              Resultados Comprovados
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              O Impacto do Nosso{" "}
              <span className="text-gold">Método Comprovado</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Números reais de transformação no mercado imobiliário brasileiro. 
              Estes são os resultados que nossos alunos alcançam consistentemente.
            </p>
          </div>

          {/* Main Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {mainMetrics.map((metric, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-gold/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="p-6 md:p-8 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white font-semibold mb-2 text-lg">
                    {metric.label}
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    {metric.description}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {additionalStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-white font-semibold text-sm md:text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-gold text-xs md:text-sm">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Reinforcement */}
          <div className="text-center">
            <Card className="inline-block bg-gold/10 backdrop-blur-sm border-gold/20 p-6 md:p-8">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                    ))}
                  </div>
                  <span className="text-white font-semibold">5.0/5</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-gold/30"></div>
                <span className="text-gray-200 text-sm md:text-base">
                  Baseado em +400 avaliações reais
                </span>
                <div className="hidden sm:block w-px h-6 bg-gold/30"></div>
                <span className="text-gold font-semibold text-sm md:text-base">
                  Método 100% testado
                </span>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-200 mb-6 text-lg">
              <strong className="text-gold">Estes resultados não são garantidos</strong>, mas representam o que é possível 
              quando você aplica consistentemente nossas estratégias comprovadas.
            </p>
            <Button variant="hero" size="xl" className="shadow-gold">
              <TrendingUp className="w-5 h-5" />
              Quero Estes Resultados Também
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetricsSection;