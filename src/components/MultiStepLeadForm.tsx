import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle,
  Lock,
  Gift,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface MultiStepLeadFormProps {
  variant?: "hero" | "popup" | "footer";
  title?: string;
  subtitle?: string;
  buttonText?: string;
  showBonusOffer?: boolean;
}

type FormStep = 1 | 2 | 'success';

const MultiStepLeadForm = ({ 
  variant = "hero", 
  title = "Quero me inscrever agora",
  subtitle = "Preencha seus dados e garanta sua vaga",
  buttonText = "Reservar minha vaga",
  showBonusOffer = false
}: MultiStepLeadFormProps) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    city: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "⚠️ Campos obrigatórios",
        description: "Por favor, preencha seu nome e e-mail para continuar.",
        variant: "destructive"
      });
      return;
    }

    setCurrentStep(2);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setCurrentStep('success');

      // Track conversion
      // Example: fbq('track', 'Lead');
      // Example: gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXX/XXXXX' });

    } catch (error) {
      toast({
        title: "❌ Erro na Inscrição",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const cardClass = variant === "popup" 
    ? "max-w-lg mx-auto shadow-luxury border-2 border-gold/30"
    : variant === "footer"
    ? "bg-white/10 backdrop-blur-sm border-white/20"
    : "bg-white/95 backdrop-blur-sm shadow-luxury border-2 border-gold/30";

  if (currentStep === 'success') {
    return (
      <Card className={cardClass}>
        <CardContent className="p-6 md:p-8 text-center">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">
            🎉 Sua vaga foi <span className="text-gold">reservada!</span>
          </h3>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            Parabéns, <strong className="text-navy">{formData.name.split(' ')[0]}</strong>! 
            Você acaba de garantir sua vaga no curso mais completo de Tráfego Imobiliário do Brasil.
          </p>
          
          <div className="bg-gold/10 rounded-lg p-4 mb-6 border border-gold/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="font-bold text-gold">PRÓXIMOS PASSOS</span>
            </div>
            <div className="space-y-2 text-sm text-navy">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                <span>Verifique seu e-mail (inclusive spam/promoções)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                <span>Acesse o link de confirmação em até 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                <span>Prepare-se para transformar seus resultados</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="hero" 
              size="lg" 
              className="flex-1"
              onClick={() => {
                const email = formData.email;
                window.open(`mailto:${email}`, '_blank');
              }}
            >
              <Mail className="w-4 h-4" />
              Abrir meu E-mail
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex-1 border-gold text-gold hover:bg-gold hover:text-navy"
            >
              <Phone className="w-4 h-4" />
              Suporte WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cardClass}>
      <CardContent className="p-4 md:p-6 lg:p-8">
        {showBonusOffer && (
          <div className="bg-gold/10 rounded-lg p-3 md:p-4 mb-4 md:mb-6 border border-gold/30">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-gold" />
              <span className="font-bold text-gold">BÔNUS LIMITADO</span>
            </div>
            <p className="text-xs md:text-sm text-foreground">
              Primeiros 100 inscritos ganham R$ 3.085 em materiais extras!
            </p>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep >= 1 ? 'bg-gold text-navy' : 'bg-gray-200 text-gray-500'
            }`}>
              1
            </div>
            <div className={`w-12 h-1 ${currentStep >= 2 ? 'bg-gold' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep >= 2 ? 'bg-gold text-navy' : 'bg-gray-200 text-gray-500'
            }`}>
              2
            </div>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-3 md:mb-4 text-foreground">
          {title}
        </h3>

        <p className="text-sm md:text-base text-muted-foreground text-center mb-4 md:mb-6 leading-relaxed">
          {currentStep === 1 ? "Comece preenchendo seus dados básicos" : "Complete suas informações"}
        </p>

        {currentStep === 1 ? (
          <form onSubmit={handleStep1Submit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="flex items-center gap-2 mb-2 text-sm md:text-base">
                <User className="w-4 h-4 flex-shrink-0" />
                Nome Completo *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="h-12 md:h-11 text-base border-border/50 focus:border-gold"
              />
            </div>

            <div>
              <Label htmlFor="email" className="flex items-center gap-2 mb-2 text-sm md:text-base">
                <Mail className="w-4 h-4 flex-shrink-0" />
                E-mail Profissional *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="h-12 md:h-11 text-base border-border/50 focus:border-gold"
              />
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full h-12 md:h-14 text-base md:text-lg shadow-luxury mt-6"
            >
              <ArrowRight className="w-5 h-5" />
              Continuar
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Dados 100% seguros e protegidos</span>
            </div>
          </form>
        ) : (
          <form onSubmit={handleFinalSubmit} className="space-y-4">
            <div>
              <Label htmlFor="phone" className="flex items-center gap-2 mb-2 text-sm md:text-base">
                <Phone className="w-4 h-4 flex-shrink-0" />
                WhatsApp *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
                className="h-12 md:h-11 text-base border-border/50 focus:border-gold"
              />
            </div>

            <div>
              <Label htmlFor="city" className="flex items-center gap-2 mb-2 text-sm md:text-base">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Cidade de Atuação
              </Label>
              <Input
                id="city"
                type="text"
                placeholder="São Paulo, SP"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="h-12 md:h-11 text-base border-border/50 focus:border-gold"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button 
                type="button"
                variant="outline" 
                size="lg" 
                className="sm:w-auto border-gold text-gold hover:bg-gold/10"
                onClick={() => setCurrentStep(1)}
              >
                Voltar
              </Button>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="flex-1 h-12 md:h-14 text-base md:text-lg shadow-luxury" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-navy border-t-transparent"></div>
                    Processando...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {buttonText}
                  </>
                )}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Dados 100% seguros e protegidos</span>
            </div>
          </form>
        )}

        <div className="text-xs text-muted-foreground text-center leading-relaxed px-2 mt-4">
          Ao se inscrever, você concorda em receber comunicações sobre o curso. 
          Seus dados estão seguros conosco.
        </div>
      </CardContent>
    </Card>
  );
};

export default MultiStepLeadForm;