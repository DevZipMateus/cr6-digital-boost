
import React from 'react';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="gradient-text">CR6 Consultoria</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Escritório de inteligência fiscal e know-how de profissionais com anos de experiência 
              no mercado tributário empresarial, com objetivo pleno de oferecer resultados exigidos 
              pelo mercado empresarial.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div className="animate-slide-up">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Nossa Expertise
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A CR6 Consultoria tem foco nas análises técnicas, gestão estratégica, 
                  tributária e financeira. Oferecemos um atendimento humanizado e personalizado, 
                  com expertise para gerar resultados aos clientes.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Análises Técnicas</h4>
                      <p className="text-muted-foreground text-sm">
                        Estudos aprofundados para identificar oportunidades de otimização tributária
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Gestão Estratégica</h4>
                      <p className="text-muted-foreground text-sm">
                        Planejamento tributário alinhado aos objetivos do seu negócio
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Segurança das Informações</h4>
                      <p className="text-muted-foreground text-sm">
                        Garantimos total confidencialidade e proteção dos dados empresariais
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="animate-slide-up">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-primary rounded-xl p-6 text-white text-center" role="img" aria-label="10 anos de experiência">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-white/90 text-sm">Anos de Experiência</div>
                </div>
                <div className="bg-gradient-accent rounded-xl p-6 text-white text-center" role="img" aria-label="500 clientes atendidos">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-white/90 text-sm">Clientes Atendidos</div>
                </div>
                <div className="bg-corporate rounded-xl p-6 text-white text-center" role="img" aria-label="100% de segurança">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-white/90 text-sm">Segurança</div>
                </div>
                <div className="bg-success rounded-xl p-6 text-white text-center" role="img" aria-label="Suporte 24 horas por dia">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-white/90 text-sm">Suporte</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Oferecer serviços de consultoria tributária empresarial, com alto desempenho 
                na prestação de serviços tributários, garantindo a segurança das informações.
              </p>
            </div>

            {/* Visão */}
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida a melhor consultoria tributária empresarial do mercado, 
                contribuindo com o crescimento dos nossos clientes.
              </p>
            </div>

            {/* Valores */}
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-corporate rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Nossos Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atendimento humanizado e personalizado, com expertise para gerar resultados. 
                Prezamos pela ética, princípios e honestidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
