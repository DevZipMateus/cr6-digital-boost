
import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white animate-fade-in">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Inteligência Fiscal Especializada</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block">Consultoria</span>
                <span className="block gradient-text bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Tributária
                </span>
                <span className="block">Empresarial</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Escritório de inteligência fiscal com anos de experiência no mercado tributário empresarial, 
                oferecendo resultados exigidos pelo mercado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  className="btn-hero bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                  onClick={() => scrollToSection('contato')}
                >
                  Solicitar Consultoria
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a 
                  href="https://wa.me/5554999571408" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/60 rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                >
                  WhatsApp
                </a>
              </div>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-white/90">Análises Técnicas Especializadas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-white/90">Gestão Estratégica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-white/90">Atendimento Personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-white/90">Segurança das Informações</span>
                </div>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="animate-slide-up">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
                  <div className="text-4xl font-bold text-white mb-2">10+</div>
                  <div className="text-white/80 text-sm">Anos de Experiência</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-white/80 text-sm">Empresas Atendidas</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/80 text-sm">Conformidade</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/80 text-sm">Suporte</div>
                </div>
              </div>

              {/* Services Preview */}
              <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Principais Serviços</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-white/90">
                  <div>• Consultoria Tributária</div>
                  <div>• Planejamento Tributário</div>
                  <div>• BPO Empresarial</div>
                  <div>• Terceirização Fiscal</div>
                  <div>• Certificado Digital</div>
                  <div>• Sistema ERP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('sobre')}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Rolar para próxima seção"
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
