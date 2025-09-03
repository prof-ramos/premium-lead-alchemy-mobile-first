import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Award, Users, TrendingUp, Star } from "lucide-react";

const InstructorSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="secondary" className="mb-4 text-gold bg-gold/10 border-gold/20">
              Conheça Seu Instrutor
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 md:mb-6">
              Aprenda com Quem Já{" "}
              <span className="text-gold">Transformou o Mercado</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Método testado e aprovado por centenas de corretores que alcançaram resultados extraordinários
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Profile Card */}
            <Card className="relative overflow-hidden shadow-luxury border-0">
              <CardContent className="p-0">
                {/* Instructor Photo - Placeholder */}
                <div className="relative">
                  <div className="aspect-[4/5] bg-gradient-to-br from-navy/5 via-gold/10 to-navy/5 flex items-center justify-center">
                    <div className="w-32 h-32 bg-navy/10 rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-navy/30" />
                    </div>
                  </div>
                  
                  {/* Play Button Overlay for Video */}
                  <div className="absolute inset-0 bg-navy/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer group">
                    <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center shadow-gold transform group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-navy ml-1 fill-navy" />
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold text-navy font-semibold">
                      <Award className="w-3 h-3 mr-1" />
                      Especialista #1
                    </Badge>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                    [Nome do Instrutor]
                  </h3>
                  <p className="text-gold font-semibold mb-4 text-lg">
                    Especialista em Tráfego Imobiliário de Luxo
                  </p>
                  
                  {/* Credentials */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                      <span>15+ anos no mercado imobiliário</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                      <span>R$ 200M+ em vendas geradas para clientes</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                      <span>Criador da metodologia "Tráfego Premium"</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                      <span>Palestrante em eventos nacionais</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-gold text-gold hover:bg-gold hover:text-navy"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Assistir Vídeo de Apresentação (1min)
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Success Metrics & Story */}
            <div className="space-y-8">
              {/* Story */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-6">
                  Uma História de <span className="text-gold">Transformação</span>
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    "Comecei como corretor tradicional, batendo de porta em porta. 
                    Em 2018, descobri o poder do marketing digital e transformei 
                    completamente minha abordagem."
                  </p>
                  <p>
                    "Hoje, ajudo centenas de corretores a atrair clientes de alto 
                    padrão através de estratégias digitais comprovadas, sem precisar 
                    sair de casa para prospectar."
                  </p>
                </div>
              </div>

              {/* Success Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <Card className="p-4 md:p-6 text-center border-gold/20 hover:shadow-gold transition-all">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-navy mb-1">500+</div>
                  <div className="text-sm text-gray-600">Alunos Formados</div>
                </Card>

                <Card className="p-4 md:p-6 text-center border-gold/20 hover:shadow-gold transition-all">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-navy mb-1">300%</div>
                  <div className="text-sm text-gray-600">Aumento Médio</div>
                </Card>

                <Card className="p-4 md:p-6 text-center border-gold/20 hover:shadow-gold transition-all">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-navy mb-1">98%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </Card>

                <Card className="p-4 md:p-6 text-center border-gold/20 hover:shadow-gold transition-all">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-navy mb-1">5.0</div>
                  <div className="text-sm text-gray-600">Avaliação</div>
                </Card>
              </div>

              {/* Quote */}
              <Card className="p-6 md:p-8 bg-gradient-to-br from-gold/5 to-navy/5 border-gold/20">
                <blockquote className="text-lg md:text-xl text-navy font-medium italic text-center">
                  "Minha missão é democratizar o acesso às estratégias de tráfego 
                  que só os grandes players do mercado conheciam."
                </blockquote>
                <div className="text-center mt-4">
                  <div className="w-12 h-1 bg-gold mx-auto"></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;