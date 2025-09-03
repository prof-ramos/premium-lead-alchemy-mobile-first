import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { X, Download, Star, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadMagnetPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Show popup after 30 seconds or when user tries to exit
    const timer = setTimeout(() => {
      if (!localStorage.getItem('leadMagnetShown')) {
        setIsOpen(true);
      }
    }, 30000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem('leadMagnetShown')) {
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call for lead magnet
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mark as shown to prevent repeated popups
      localStorage.setItem('leadMagnetShown', 'true');
      
      toast({
        title: "🎉 E-book Enviado com Sucesso!",
        description: "Verifique seu email para fazer o download das 5 Dicas de Tráfego Pago.",
        duration: 5000
      });

      // Track lead magnet conversion
      if (window.trackLeadEvent) {
        window.trackLeadEvent('Lead', {
          content_name: '5 Dicas de Tráfego Pago para Corretores',
          value: 0,
          currency: 'BRL'
        });
      }

      setIsOpen(false);
      setEmail("");

    } catch (error) {
      toast({
        title: "❌ Erro no Envio",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('leadMagnetShown', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="max-w-lg w-full p-8 shadow-luxury border-2 border-gold/30 relative animate-scale-in">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 hover:bg-gray-100"
          onClick={handleClose}
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Content */}
        <div className="text-center mb-6">
          <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Download className="w-10 h-10 text-gold" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            🎁 E-book <span className="text-gold">Gratuito</span>!
          </h3>
          
          <h4 className="text-xl font-semibold text-foreground mb-4">
            "5 Dicas de Tráfego Pago para Corretores"
          </h4>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            Descubra estratégias práticas para gerar seus primeiros leads qualificados 
            ainda esta semana, mesmo sem experiência prévia.
          </p>

          <div className="space-y-2 text-left mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm">Como segmentar o público certo no Facebook</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm">Textos que convertem cliques em leads</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm">Orçamento mínimo para começar</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm">Métricas essenciais para acompanhar</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm">Erros que custam caro (e como evitá-los)</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="popup-email" className="sr-only">
              E-mail para receber o e-book
            </Label>
            <Input
              id="popup-email"
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-border/50 focus:border-gold text-center"
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
                Enviando...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Baixar E-book Gratuito
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            100% gratuito • Sem spam • Você pode cancelar a qualquer momento
          </p>
        </form>

        {/* Trust Elements */}
        <div className="flex items-center justify-center gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-gold fill-gold" />
          ))}
          <span className="text-sm text-muted-foreground ml-2">
            Já baixado por 2.500+ corretores
          </span>
        </div>
      </Card>
    </div>
  );
};

export default LeadMagnetPopup;