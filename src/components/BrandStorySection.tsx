import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Heart,
  CheckCircle,
  Star
} from "lucide-react";
import marketingSuccess from "@/assets/marketing-success.jpg";

const BrandStorySection = () => {
  const achievements = [
    {
      icon: <Users className="w-6 h-6 text-gold" />,
      number: "500+",
      label: "Corretores Treinados"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-gold" />,
      number: "R$ 50M+",
      label: "Em Vendas Geradas"
    },
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      number: "98%",
      label: "Taxa de Satisfação"
    },
    {
      icon: <Target className="w-6 h-6 text-gold" />,
      number: "6 Anos",
      label: "De Experiência Digital"
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Resultados Comprovados",
      description: "Cada estratégia foi testada e validada no mercado real, gerando milhões em vendas."
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: "Foco no Corretor",
      description: "Entendemos os desafios únicos dos corretores e criamos soluções específicas."
    },
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "Implementação Prática",
      description: "Não vendemos teoria. Cada aula tem aplicação imediata no seu negócio."
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que Confiar no <span className="text-gradient-gold">Tráfego Imobiliário de Alta Performance</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma jornada de transformação digital que nasceu da necessidade real 
            de revolucionar o modo como corretores de alto padrão conquistam seus clientes.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img 
                src={marketingSuccess} 
                alt="Marketing Digital Success" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-navy/20"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold rounded-2xl p-6 shadow-gold">
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">6+ Anos</div>
                <div className="text-navy text-sm">Transformando Negócios</div>
              </div>
            </div>
          </div>

          {/* Story Text */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Mais do que um Curso: Um Plano Prático para o Sucesso
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                O <strong>Tráfego Imobiliário de Alta Performance</strong> nasceu da experiência real 
                de especialistas com anos de vivência em marketing digital e mercado imobiliário de luxo.
              </p>
              
              <p>
                Depois de observar centenas de corretores lutando para se destacar no mercado digital, 
                desenvolvemos um método único que combina as melhores práticas de tráfego pago com 
                as especificidades do mercado imobiliário premium.
              </p>
              
              <p>
                Nossa missão é clara: <strong className="text-foreground">empoderar corretores a venderem mais, 
                com menos esforço</strong>, usando estratégias de tráfego pago que realmente funcionam 
                no mundo real, não apenas na teoria.
              </p>

              <div className="bg-gold/10 rounded-lg p-6 border-l-4 border-gold">
                <h4 className="font-bold text-foreground mb-2">Nosso Compromisso:</h4>
                <p className="text-foreground">
                  "Transformar corretores em autoridades digitais que atraem naturalmente 
                  os melhores clientes do mercado de alto padrão."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Resultados que Falam por Si
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center shadow-card border-border/50">
                <div className="flex justify-center mb-3">
                  {achievement.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Nossos Pilares de Excelência
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-8 text-center shadow-card hover:shadow-luxury transition-luxury group border-border/50"
              >
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-luxury">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-luxury">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Testimonial */}
        <div className="bg-navy rounded-2xl p-8 md:p-12 text-center shadow-luxury mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <Star className="w-96 h-96 text-gold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-gold fill-gold" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
              "Junte-se aos inúmeros corretores que já transformaram seus negócios 
              e conquistaram o mercado de alto padrão. Sua vez chegou!"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <CheckCircle className="w-6 h-6 text-gold" />
              <span className="text-gold font-semibold">Método 100% Validado no Mercado</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="shadow-luxury">
            <Shield className="w-5 h-5" />
            Quero Fazer Parte Dessa Transformação!
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            🏆 Método comprovado • 🤝 Comunidade exclusiva • 💎 Resultados garantidos
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;