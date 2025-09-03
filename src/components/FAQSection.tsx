import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HelpCircle, MessageCircle, Phone, Mail, Clock } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quem pode fazer o curso?",
      answer: "O curso é ideal para corretores de imóveis que desejam vender propriedades de médio e alto padrão usando marketing digital. Tanto iniciantes quanto experientes podem se beneficiar, pois abordamos desde o básico até estratégias avançadas.",
      isExpanded: true // Most common question - expanded by default
    },
    {
      question: "Preciso de experiência prévia em marketing digital?",
      answer: "Não! O curso foi desenvolvido para ser completo, do básico ao avançado. Começamos pelos fundamentos e evoluímos gradualmente. Mesmo se você nunca fez um anúncio online, conseguirá acompanhar e implementar as estratégias.",
      isExpanded: true // Very common concern - expanded by default
    },
    {
      question: "Como funciona o acesso ao curso?",
      answer: "Você recebe acesso imediato a uma área de membros exclusiva com videoaulas organizadas por módulos, materiais complementares em PDF, templates prontos e acesso ao grupo VIP no Telegram para networking e suporte.",
      isExpanded: false
    },
    {
      question: "Quanto tempo tenho para concluir o curso?",
      answer: "O acesso é vitalício! Você pode estudar no seu ritmo, rever as aulas quantas vezes quiser e sempre ter acesso às atualizações do conteúdo. Recomendamos dedicar 2-3 horas por semana para melhores resultados.",
      isExpanded: false
    },
    {
      question: "O curso funciona para qualquer cidade do Brasil?",
      answer: "Sim! As estratégias são aplicáveis em todo o território nacional. Inclusive, temos casos de sucesso de corretores em cidades pequenas, médias e grandes metrópoles. O digital não tem fronteiras geográficas.",
      isExpanded: false
    },
    {
      question: "Qual o investimento necessário em tráfego pago?",
      answer: "Você pode começar com apenas R$ 20-30 por dia. O curso ensina como otimizar cada real investido para gerar o máximo de leads qualificados. Muitos alunos recuperam o investimento do curso já na primeira venda gerada pelas campanhas.",
      isExpanded: true // Very important concern - expanded by default
    },
    {
      question: "Existe algum suporte durante o curso?",
      answer: "Sim! Você terá acesso ao grupo VIP exclusivo com outros corretores, lives semanais de tira-dúvidas comigo e com a equipe, além de suporte direto para esclarecer dúvidas sobre implementação das estratégias.",
      isExpanded: false
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos garantia incondicional de 30 dias. Se você não estiver satisfeito com o conteúdo ou não conseguir implementar as estratégias, devolvemos 100% do seu investimento, sem perguntas e sem burocracia.",
      isExpanded: true // Trust factor - expanded by default
    },
    {
      question: "O curso substitui um gestor de tráfego?",
      answer: "O objetivo é te capacitar para ser autônomo nas suas campanhas, mas você também pode usar o conhecimento para contratar e supervisionar um gestor de tráfego com mais propriedade, garantindo melhores resultados e ROI.",
      isExpanded: false
    },
    {
      question: "Quando começam as aulas?",
      answer: "O curso é 100% online e você tem acesso imediato após a confirmação do pagamento. Pode começar a estudar hoje mesmo e implementar as primeiras estratégias ainda esta semana!",
      isExpanded: false
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-6">
            <HelpCircle className="w-5 h-5 text-gold" />
            <span className="text-gold font-bold text-sm uppercase tracking-wide">
              Dúvidas Frequentes
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Respondemos Suas <span className="text-gradient-gold">Principais Dúvidas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as questões mais comuns para que você tome a melhor decisão 
            para transformar seu negócio imobiliário.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 shadow-card border-border/50">
            <Accordion 
              type="multiple" 
              defaultValue={faqs
                .map((faq, index) => faq.isExpanded ? `item-${index}` : '')
                .filter(Boolean)
              } 
              className="w-full"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                  <AccordionTrigger className="text-left hover:text-primary text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Support Channels */}
        <div className="text-center mb-12">
          <Card className="p-8 bg-gradient-section border-border/50 shadow-card max-w-4xl mx-auto">
            <MessageCircle className="w-16 h-16 text-gold mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe está pronta para esclarecer qualquer questão antes da sua inscrição. 
              Escolha o canal de sua preferência:
            </p>
            
            {/* Support Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-gold/20 hover:shadow-gold transition-all">
                <Phone className="w-10 h-10 text-gold mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Atendimento rápido e personalizado
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4" />
                  <span>Seg a Sex: 9h às 18h</span>
                </div>
                <Button variant="hero" size="sm" className="w-full">
                  <MessageCircle className="w-4 h-4" />
                  (11) 99999-9999
                </Button>
              </Card>

              <Card className="p-6 border-gold/20 hover:shadow-gold transition-all">
                <Mail className="w-10 h-10 text-gold mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">E-mail</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Para dúvidas mais detalhadas
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4" />
                  <span>Resposta em até 24h</span>
                </div>
                <Button variant="outline" size="sm" className="w-full border-gold text-gold hover:bg-gold hover:text-navy">
                  <Mail className="w-4 h-4" />
                  suporte@trafegoimo.com
                </Button>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                <MessageCircle className="w-5 h-5" />
                Falar com Especialista Agora
              </Button>
              <Button variant="outline" size="lg">
                Ver Mais Depoimentos
              </Button>
            </div>
          </Card>
        </div>

        {/* Quick Facts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">24h</div>
            <div className="text-muted-foreground text-sm">Suporte Máximo para Resposta</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">30 Dias</div>
            <div className="text-muted-foreground text-sm">Garantia Incondicional</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">Vitalício</div>
            <div className="text-muted-foreground text-sm">Acesso ao Conteúdo</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">100%</div>
            <div className="text-muted-foreground text-sm">Foco em Resultados Práticos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;