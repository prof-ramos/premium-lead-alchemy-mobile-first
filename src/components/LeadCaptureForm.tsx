import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle,
  Lock,
  Gift
} from "lucide-react";

interface LeadCaptureFormProps {
  variant?: "hero" | "popup" | "footer";
  title?: string;
  subtitle?: string;
  buttonText?: string;
  showBonusOffer?: boolean;
}

const LeadCaptureForm = ({ 
  variant = "hero", 
  title,
  subtitle,
  buttonText = "Inscrever-se Agora",
  showBonusOffer = false
}: LeadCaptureFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    city: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Here you would integrate with your lead capture tool
      // Example: await submitToRDStation(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "✅ Inscrição Realizada com Sucesso!",
        description: "Verifique seu email para acessar o curso e os bônus exclusivos.",
        duration: 5000
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", city: "" });

      // Track conversion (you would integrate with Facebook Pixel, Google Analytics, etc.)
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
    ? "p-8 max-w-md mx-auto shadow-luxury border-2 border-gold/30"
    : variant === "footer"
    ? "p-6 bg-white/10 backdrop-blur-sm border-white/20"
    : "p-8 bg-white/95 backdrop-blur-sm shadow-luxury border-2 border-gold/30";

  return (
    <Card className={cardClass}>
      {showBonusOffer && (
        <div className="bg-gold/10 rounded-lg p-4 mb-6 border border-gold/30">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-gold" />
            <span className="font-bold text-gold">BÔNUS LIMITADO</span>
          </div>
          <p className="text-sm text-foreground">
            Primeiros 100 inscritos ganham R$ 3.085 em materiais extras!
          </p>
        </div>
      )}

      {title && (
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
          {title}
        </h3>
      )}

      {subtitle && (
        <p className="text-muted-foreground text-center mb-6 leading-relaxed">
          {subtitle}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4" />
            Nome Completo *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
            className="border-border/50 focus:border-gold"
          />
        </div>

        <div>
          <Label htmlFor="email" className="flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4" />
            E-mail Profissional *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            className="border-border/50 focus:border-gold"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
            <Phone className="w-4 h-4" />
            WhatsApp *
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            required
            className="border-border/50 focus:border-gold"
          />
        </div>

        <div>
          <Label htmlFor="city" className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4" />
            Cidade de Atuação
          </Label>
          <Input
            id="city"
            type="text"
            placeholder="São Paulo, SP"
            value={formData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            className="border-border/50 focus:border-gold"
          />
        </div>

        <Button 
          type="submit" 
          variant="hero" 
          size="lg" 
          className="w-full shadow-luxury" 
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

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
          <Lock className="w-4 h-4" />
          <span>Dados 100% seguros e protegidos</span>
        </div>

        <div className="text-xs text-muted-foreground text-center leading-relaxed">
          Ao se inscrever, você concorda em receber comunicações sobre o curso. 
          Seus dados estão seguros conosco.
        </div>
      </form>
    </Card>
  );
};

export default LeadCaptureForm;