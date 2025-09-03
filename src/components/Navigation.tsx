import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'inicio', label: 'Início', href: '#hero' },
  { id: 'beneficios', label: 'Benefícios', href: '#benefits' },
  { id: 'depoimentos', label: 'Depoimentos', href: '#testimonials' },
  { id: 'modulos', label: 'Módulos', href: '#course-overview' },
  { id: 'bonus', label: 'Bônus', href: '#bonus' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'inscricao', label: 'Inscrição', href: '#inscription' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy/95 backdrop-blur-md shadow-luxury border-b border-gold/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('#hero')}
                className="text-xl lg:text-2xl font-bold text-white hover:text-gold transition-colors"
                aria-label="Voltar ao início da página"
              >
                Tráfego <span className="text-gold">Imobiliário</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-gold font-medium transition-colors duration-200 text-sm xl:text-base"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:flex">
              <Button
                variant="hero"
                size="sm"
                onClick={() => scrollToSection('#inscription')}
                className="font-semibold text-sm xl:text-base"
                aria-label="Ir para seção de inscrição no curso"
              >
                Quero me inscrever agora
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gold p-2 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-navy/98 backdrop-blur-lg border-t border-gold/20">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-white hover:text-gold font-medium py-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gold/20">
                <Button
                  variant="hero"
                  size="sm"
                  onClick={() => scrollToSection('#inscription')}
                  className="w-full font-semibold"
                >
                  Quero me inscrever agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;