import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  Video, 
  Download, 
  Users, 
  CheckCircle, 
  Clock,
  Target,
  Zap
} from "lucide-react";

const CourseOverviewSection = () => {
  const modules = [
    {
      number: "01",
      title: "Fundamentos do Tráfego Pago Imobiliário",
      description: "Base sólida em Facebook Ads, Google Ads e Instagram para imóveis de luxo",
      duration: "2h 30min"
    },
    {
      number: "02", 
      title: "Segmentação Avançada de Público",
      description: "Como encontrar e conquistar compradores de alto padrão no digital",
      duration: "2h 15min"
    },
    {
      number: "03",
      title: "Copywriting que Converte em Imóveis",
      description: "Textos persuasivos que transformam interesse em visitas agendadas",
      duration: "2h 45min"
    },
    {
      number: "04",
      title: "Criativos e Storytelling Visual",
      description: "Tours virtuais irresistíveis e fotos que vendem antes da visita",
      duration: "2h 20min"
    },
    {
      number: "05",
      title: "Otimização e Métricas Avançadas",
      description: "Analytics, conversões e ROI para maximizar cada real investido",
      duration: "2h 10min"
    },
    {
      number: "06",
      title: "Funil Completo de Vendas Imobiliárias",
      description: "Do primeiro clique ao contrato assinado: automação que funciona",
      duration: "2h 35min"
    }
  ];

  const features = [
    {
      icon: <Video className="w-6 h-6 text-gold" />,
      title: "Aulas em Vídeo Práticas",
      description: "Videoaulas curtas (5-12 min) focadas em implementação imediata"
    },
    {
      icon: <Download className="w-6 h-6 text-gold" />,
      title: "Materiais Complementares",
      description: "PDFs, checklists e templates prontos para usar nas suas campanhas"
    },
    {
      icon: <Users className="w-6 h-6 text-gold" />,
      title: "Grupo VIP Exclusivo",
      description: "Networking com corretores de alto padrão e suporte contínuo"
    },
    {
      icon: <Zap className="w-6 h-6 text-gold" />,
      title: "Lives de Tira-Dúvidas",
      description: "Sessões semanais para acelerar seus resultados e esclarecer dúvidas"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que Você Vai <span className="text-gradient-gold">Aprender</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um método completo e sistemático para dominar o tráfego pago imobiliário, 
            do básico ao avançado, com foco em resultados práticos e mensuráveis.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Seis Módulos Práticos e Objetivos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card 
                key={index}
                className="p-6 shadow-card hover:shadow-luxury transition-luxury group border-border/50 hover:border-gold/30"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gold text-navy rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {module.number}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-luxury">
                      {module.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {module.description}
                    </p>
                    <div className="flex items-center gap-2 text-gold text-sm font-semibold">
                      <Clock className="w-4 h-4" />
                      {module.duration}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Ferramentas e Suporte Exclusivos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 text-center shadow-card hover:shadow-luxury transition-luxury group border-border/50"
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-luxury">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Guarantee Box */}
        <div className="bg-gradient-gold rounded-2xl p-8 text-center shadow-luxury mb-12">
          <div className="max-w-3xl mx-auto">
            <CheckCircle className="w-16 h-16 text-navy mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Garantia Incondicional de 30 Dias
            </h3>
            <p className="text-navy/80 text-lg leading-relaxed">
              Se você não estiver 100% satisfeito com o curso ou não conseguir implementar as estratégias, 
              devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl" className="shadow-luxury">
            <Target className="w-5 h-5" />
            Quero Dominar o Tráfego Imobiliário Agora!
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            🎯 Acesso vitalício • 📚 Todos os materiais inclusos • 👥 Grupo VIP exclusivo
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseOverviewSection;