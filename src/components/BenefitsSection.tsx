import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Award, Users, Zap, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "Gere Leads Prontos para Comprar",
      description: "Aprenda a segmentar compradores de alto padrão e encha seu funil com clientes qualificados que estão prontos para investir."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold" />,
      title: "Feche Mais Negócios",
      description: "Domine técnicas de copywriting e follow-up para transformar cliques em contratos assinados e aumentar sua taxa de conversão."
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "Seja uma Autoridade Digital",
      description: "Destaque-se no mercado com campanhas que reforçam sua expertise e atraem olhares para suas propriedades exclusivas."
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Networking Exclusivo",
      description: "Conecte-se com uma comunidade de corretores de alto padrão e compartilhe estratégias que realmente funcionam."
    },
    {
      icon: <Zap className="w-8 h-8 text-gold" />,
      title: "Resultados Rápidos",
      description: "Implementação imediata com ferramentas prontas e templates testados que aceleram seus primeiros resultados."
    },
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Suporte Garantido",
      description: "Suporte completo com lives de tira-dúvidas e acesso ao grupo VIP para nunca ficar sem orientação."
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que Escolher o <span className="text-gradient-gold">Tráfego Imobiliário</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme os desafios do mercado imobiliário em oportunidades de crescimento 
            com estratégias comprovadas que já geraram milhões em vendas.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 shadow-card hover:shadow-luxury transition-luxury group hover:transform hover:scale-105 border-border/50"
            >
              <div className="mb-6 group-hover:scale-110 transition-luxury">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-luxury">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl" className="shadow-luxury">
            Quero Transformar Meu Negócio Agora!
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            ✅ Acesso imediato • ✅ Garantia de satisfação • ✅ Suporte completo
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;