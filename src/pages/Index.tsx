import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ImpactMetricsSection from "@/components/ImpactMetricsSection";
import InstructorSection from "@/components/InstructorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CourseOverviewSection from "@/components/CourseOverviewSection";
import SensorySection from "@/components/SensorySection";
import BonusSection from "@/components/BonusSection";
import BrandStorySection from "@/components/BrandStorySection";
import UrgencySection from "@/components/UrgencySection";
import FinalCTASection from "@/components/FinalCTASection";
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadMagnetPopup from "@/components/LeadMagnetPopup";
import TrackingPixels from "@/components/TrackingPixels";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Pular para o conteúdo principal
      </a>
      
      {/* Tracking Pixels */}
      <TrackingPixels />
      
      {/* Lead Magnet Popup */}
      <LeadMagnetPopup />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton variant="fixed" />
      
      {/* Fixed Navigation */}
      <Navigation />
      
      <div id="hero">
        <HeroSection />
      </div>

      <div id="main-content">
        <div id="benefits">
          <BenefitsSection />
        </div>
        
        <ImpactMetricsSection />
        
        <InstructorSection />
        
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        
        <div id="course-overview">
          <CourseOverviewSection />
        </div>
        
        <SensorySection />
        
        <div id="bonus">
          <BonusSection />
        </div>
        
        <BrandStorySection />
        <UrgencySection />
        
        <div id="inscription">
          <FinalCTASection />
        </div>
        
        <div id="faq">
          <FAQSection />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-navy py-8 md:py-12">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Tráfego Imobiliário de <span className="text-gold">Alta Performance</span>
            </h3>
            <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
              Transformando corretores em autoridades digitais que atraem naturalmente 
              os melhores clientes do mercado de alto padrão.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-gray-400 text-xs md:text-sm">
              <span>© 2024 Tráfego Imobiliário</span>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
              <span className="hidden sm:inline">•</span>
              <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
