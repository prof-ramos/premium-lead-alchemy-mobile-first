import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Gift, 
  CheckCircle, 
  FileText, 
  MessageSquare, 
  Video, 
  Users,
  Sparkles,
  Crown
} from "lucide-react";

const BonusSection = () => {
  const bonuses = [
    {
      icon: <CheckCircle className="w-8 h-8 text-gold" />,
      title: "Checklist de Anúncios Prontos",
      description: "Templates testados para imóveis de alto padrão que convertem em leads qualificados",
      value: "R$ 497",
      highlight: "Implementação imediata"
    },
    {
      icon: <FileText className="w-8 h-8 text-gold" />,
      title: "Modelos de Copy que Convertem",
      description: "Textos persuasivos prontos para Facebook, Instagram e Google Ads",
      value: "R$ 697",
      highlight: "Copie e cole"
    },
    {
      icon: <Video className="w-8 h-8 text-gold" />,
      title: "Guia de Storytelling Visual",
      description: "Como criar tours virtuais irresistíveis que vendem antes da visita",
      value: "R$ 397",
      highlight: "Técnicas exclusivas"
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Grupo VIP Exclusivo",
      description: "Networking com corretores de alto padrão e suporte contínuo da comunidade",
      value: "R$ 997",
      highlight: "Acesso vitalício"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-gold" />,
      title: "Scripts de Follow-up",
      description: "Sequências de WhatsApp e e-mail que nutrem leads até o fechamento",
      value: "R$ 297",
      highlight: "Taxa 85% conversão"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      title: "Planilha de ROI Imobiliário",
      description: "Ferramenta para calcular e otimizar o retorno de cada campanha",
      value: "R$ 197",
      highlight: "Controle total"
    }
  ];

  const totalValue = bonuses.reduce((sum, bonus) => {
    return sum + parseInt(bonus.value.replace('R$ ', '').replace('.', ''));
  }, 0);

  return (
    <section className="py-20 gradient-section relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-6">
            <Gift className="w-5 h-5 text-gold" />
            <span className="text-gold font-bold text-sm uppercase tracking-wide">Bônus Exclusivos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bônus que <span className="text-gradient-gold">Aceleram Seus Resultados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ferramentas e recursos adicionais que garantem sua implementação rápida 
            e resultados ainda mais expressivos no mercado imobiliário de luxo.
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {bonuses.map((bonus, index) => (
            <Card 
              key={index}
              className="p-6 shadow-card hover:shadow-luxury transition-luxury group border-border/50 relative overflow-hidden"
            >
              {/* Bonus Number */}
              <div className="absolute top-4 right-4 bg-gold text-navy rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="mb-4 group-hover:scale-110 transition-luxury">
                {bonus.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-luxury">
                {bonus.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {bonus.description}
              </p>
              
              {/* Value and Highlight */}
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Valor:</span>
                  <span className="text-lg font-bold text-gold">{bonus.value}</span>
                </div>
                <div className="bg-gold/10 rounded-lg px-3 py-2 border-l-4 border-gold">
                  <span className="text-sm font-semibold text-foreground">{bonus.highlight}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Value Calculation */}
        <div className="bg-navy rounded-2xl p-8 text-center shadow-luxury mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <Crown className="w-64 h-64 text-gold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Valor Total dos Bônus
            </h3>
            <div className="text-6xl md:text-8xl font-bold text-gold mb-4">
              R$ {totalValue.toLocaleString('pt-BR')}
            </div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Todos esses recursos valiosos estão inclusos gratuitamente quando você se inscreve hoje. 
              São ferramentas que sozinhas já pagariam o investimento do curso completo.
            </p>
          </div>
        </div>

        {/* Limited Time Alert */}
        <div className="bg-gradient-to-r from-gold to-gold-light rounded-2xl p-8 text-center mb-12 shadow-gold">
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            🚨 Oferta Por Tempo Limitado!
          </h3>
          <p className="text-navy text-lg mb-6">
            Todos os bônus estão inclusos apenas para as primeiras <strong>100 inscrições</strong>. 
            Após isso, serão vendidos separadamente.
          </p>
          <div className="inline-flex items-center gap-2 bg-navy/20 rounded-full px-4 py-2">
            <span className="text-navy font-bold">⏰ Restam apenas</span>
            <span className="text-2xl font-bold text-navy">47 vagas</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl" className="shadow-luxury">
            <Gift className="w-5 h-5" />
            Quero Garantir Todos os Bônus Agora!
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            🎁 Todos os bônus inclusos • 🔒 Pagamento 100% seguro • ⚡ Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;