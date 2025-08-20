
import React from 'react';
import { ArrowRight, Shield, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80"></div>
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left animate-slide-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-6">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Escritório de Inteligência Fiscal</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="block">Consultoria</span>
                <span className="block gradient-text bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Tributária
                </span>
                <span className="block">Empresarial</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Escritório de inteligência fiscal com anos de experiência no mercado tributário empresarial. 
                Oferecemos soluções estratégicas para otimizar seus resultados fiscais.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button 
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => scrollToSection('servicos')}
                >
                  Nossos Serviços
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline"
                  className="text-white border-white/60 hover:bg-white hover:text-primary"
                  onClick={() => scrollToSection('contato')}
                >
                  Fale Conosco
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Shield className="w-8 h-8 text-white mr-3" />
                  </div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-white/80 text-sm">Segurança</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <TrendingUp className="w-8 h-8 text-white mr-3" />
                  </div>
                  <div className="text-2xl font-bold text-white">+10</div>
                  <div className="text-white/80 text-sm">Anos Experiência</div>
                </div>
                <div className="text-center lg:text-left col-span-2 md:col-span-1">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Users className="w-8 h-8 text-white mr-3" />
                  </div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-white/80 text-sm">Clientes Atendidos</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block animate-scale-in">
              <div className="relative">
                <div className="w-96 h-96 mx-auto">
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl rotate-6 animate-pulse-slow"></div>
                  <div className="absolute inset-4 bg-white/30 backdrop-blur-sm rounded-3xl -rotate-3"></div>
                  <div className="absolute inset-8 bg-white/40 backdrop-blur-sm rounded-3xl rotate-2 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Award className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">CR6</h3>
                      <p className="text-lg">Consultoria</p>
                      <p className="text-sm opacity-80">Inteligência Fiscal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
