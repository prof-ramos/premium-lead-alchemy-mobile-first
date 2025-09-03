import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Clock, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Zap,
  Target,
  Timer,
  Flame
} from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const UrgencySection = () => {
  const urgencyPoints = [
    {
      icon: <TrendingUp className="w-6 h-6 text-gold" />,
      title: "Mercado Cada Vez Mais Competitivo",
      description: "A cada dia que passa, mais corretores descobrem o poder do tráfego pago. Seja pioneiro na sua região."
    },
    {
      icon: <Users className="w-6 h-6 text-gold" />,
      title: "Vagas Realmente Limitadas",
      description: "Para garantir qualidade no suporte, limitamos a apenas 100 alunos por turma. Já temos 53 inscritos."
    },
    {
      icon: <Timer className="w-6 h-6 text-gold" />,
      title: "Preço Promocional Temporário",
      description: "Esta é a última turma com desconto especial. Próxima turma será 40% mais cara."
    }
  ];

  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 animate-pulse">
        <Flame className="w-16 h-16 text-gold/30" />
      </div>
      <div className="absolute bottom-20 left-10 animate-pulse" style={{ animationDelay: "1s" }}>
        <Zap className="w-20 h-20 text-gold/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-bold text-sm uppercase tracking-wide animate-pulse">
              Última Chance
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Não Deixe Essa <span className="text-gradient-gold">Oportunidade Passar!</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            O mercado imobiliário está cada vez mais digital. Enquanto você hesita, 
            seus concorrentes estão se capacitando e conquistando seus futuros clientes.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Oferta Expira em:</h3>
            <p className="text-gray-300">Após esse prazo, o preço voltará ao valor normal</p>
          </div>
          
          <CountdownTimer className="max-w-2xl mx-auto" />
        </div>

        {/* Urgency Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {urgencyPoints.map((point, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/15 transition-luxury"
            >
              <div className="flex justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{point.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{point.description}</p>
            </Card>
          ))}
        </div>

        {/* Scarcity Alert */}
        <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">Atenção: Vagas Limitadas!</h3>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              Para garantir a qualidade do suporte e acompanhamento personalizado, 
              esta turma está limitada a apenas <strong className="text-red-400">100 corretores</strong>.
            </p>
            
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white">Vagas Preenchidas:</span>
                <span className="text-red-400 font-bold">53/100</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: '53%' }}
                ></div>
              </div>
            </div>
            
            <p className="text-gold font-semibold text-lg animate-pulse">
              🚨 Restam apenas 47 vagas para esta turma promocional!
            </p>
          </div>
        </div>

        {/* Social Proof Alert */}
        <div className="bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ⚡ Últimas Inscrições (Tempo Real)
          </h3>
          <div className="space-y-2 max-w-2xl mx-auto">
            <p className="text-gray-300">• Marina S. (São Paulo) - Há 3 minutos</p>
            <p className="text-gray-300">• Roberto L. (Rio de Janeiro) - Há 7 minutos</p>
            <p className="text-gray-300">• Ana C. (Brasília) - Há 12 minutos</p>
            <p className="text-gray-300">• Carlos M. (Porto Alegre) - Há 18 minutos</p>
          </div>
          <p className="text-gold font-semibold mt-4">
            Não seja o último a descobrir essas estratégias!
          </p>
        </div>

        {/* Final Urgency Message */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Enquanto Você Pensa, Seus Concorrentes <span className="text-gold">Estão Agindo</span>
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Cada dia que passa sem aplicar essas estratégias é dinheiro deixado na mesa 
            e clientes conquistados pelos seus concorrentes que já dominam o digital.
          </p>
          
          <Button variant="hero" size="xl" className="shadow-luxury animate-pulse">
            <Target className="w-5 h-5" />
            Garantir Minha Vaga Agora Mesmo!
          </Button>
          
          <p className="text-gold font-semibold mt-6 animate-bounce">
            ⏰ Últimas 47 vagas disponíveis nesta turma!
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;