import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "João Silva",
      role: "Corretor Especialista em Imóveis de Luxo",
      location: "São Paulo, SP",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "Depois de aplicar as técnicas do curso, minha campanha no Instagram gerou 20 leads quentes em uma semana! Fechei 3 contratos no primeiro mês.",
      results: "3x mais leads qualificados"
    },
    {
      name: "Maria Santos",
      role: "Corretora Sênior",
      location: "Rio de Janeiro, RJ",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "O curso me deu a confiança para investir em tráfego pago. Hoje meu negócio é 100% digital e não dependo mais de indicações apenas.",
      results: "100% negócio digitalizado"
    },
    {
      name: "Carlos Oliveira",
      role: "Diretor Comercial Imobiliária Premium",
      location: "Brasília, DF",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "Implementei as estratégias na minha equipe de 15 corretores. O resultado foi um aumento de 250% nas vendas em 6 meses!",
      results: "250% aumento em vendas"
    },
    {
      name: "Ana Costa",
      role: "Corretora Independente",
      location: "Belo Horizonte, MG",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "As ferramentas de copy e storytelling revolucionaram meus anúncios. Agora cada post gera dezenas de comentários interessados.",
      results: "10x mais engajamento"
    },
    {
      name: "Roberto Lima",
      role: "Especialista em Imóveis Comerciais",
      location: "Porto Alegre, RS",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "O grupo VIP é incrível! O networking me ajudou a fechar negócios em outras cidades através de parcerias com outros corretores do curso.",
      results: "Negócios em 5 cidades"
    },
    {
      name: "Patricia Mendes",
      role: "Corretora Top Performer",
      location: "Fortaleza, CE",
      image: "/placeholder.svg",
      rating: 5,
      testimonial: "Em 90 dias saí de 2 vendas por mês para 8 vendas! O método de segmentação é revolucionário para imóveis de alto padrão.",
      results: "4x mais vendas mensais"
    }
  ];

  return (
    <section className="py-20 gradient-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-navy blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Histórias de <span className="text-gradient-gold">Sucesso Reais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Veja como corretores como você transformaram seus negócios e multiplicaram seus resultados 
            com as estratégias do Tráfego Imobiliário de Alta Performance.
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold fill-gold" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground ml-2">4.9/5</span>
            <span className="text-muted-foreground">(500+ avaliações)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-luxury transition-luxury group border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <div className="mb-4">
                <Quote className="w-8 h-8 text-gold mb-4" />
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.testimonial}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gold text-navy font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
                <div className="bg-gold/10 rounded-lg p-3 border-l-4 border-gold">
                  <div className="text-sm font-semibold text-gold">Resultado:</div>
                  <div className="text-sm text-foreground">{testimonial.results}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-gold mb-2">500+</div>
              <div className="text-muted-foreground">Corretores Transformados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">R$ 50M+</div>
              <div className="text-muted-foreground">Em Vendas Geradas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">98%</div>
              <div className="text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">6 Meses</div>
              <div className="text-muted-foreground">Tempo Médio p/ Resultados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;