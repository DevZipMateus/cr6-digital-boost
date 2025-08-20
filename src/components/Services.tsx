
import React from 'react';
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Users, 
  RefreshCw,
  DollarSign,
  Award,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'BPO',
      description: 'Business Process Outsourcing para otimização dos processos empresariais com foco em resultados.',
      features: ['Gestão de Processos', 'Otimização Operacional', 'Redução de Custos']
    },
    {
      icon: Calculator,
      title: 'Consultoria Tributária',
      description: 'Análise especializada para identificar oportunidades de economia tributária e conformidade fiscal.',
      features: ['Análise Fiscal', 'Compliance Tributário', 'Revisão de Tributos']
    },
    {
      icon: TrendingUp,
      title: 'Planejamento Tributário',
      description: 'Estratégias personalizadas para otimizar a carga tributária de forma legal e eficiente.',
      features: ['Elisão Fiscal', 'Regime Tributário', 'Economia de Impostos']
    },
    {
      icon: FileText,
      title: 'Terceirização Contábil',
      description: 'Serviços contábeis completos com tecnologia avançada e profissionais especializados.',
      features: ['Escrituração', 'Demonstrações', 'Análises Gerenciais']
    },
    {
      icon: Shield,
      title: 'Terceirização Fiscal',
      description: 'Gestão completa das obrigações fiscais com segurança e pontualidade nas entregas.',
      features: ['Obrigações Acessórias', 'Apuração de Impostos', 'Monitoramento Fiscal']
    },
    {
      icon: RefreshCw,
      title: 'Reforma Tributária',
      description: 'Consultoria especializada para adequação às mudanças da reforma tributária.',
      features: ['Adequação Legal', 'Migração de Regimes', 'Impacto Tributário']
    },
    {
      icon: DollarSign,
      title: 'Precificação de Custo',
      description: 'Análise detalhada de custos para definição estratégica de preços e margens.',
      features: ['Análise de Custos', 'Formação de Preços', 'Margem de Lucro']
    },
    {
      icon: Award,
      title: 'Certificado Digital',
      description: 'Emissão e renovação de certificados digitais para assinatura eletrônica segura.',
      features: ['e-CPF', 'e-CNPJ', 'Renovação Automática']
    },
    {
      icon: Settings,
      title: 'Sistema eGestor ERP',
      description: 'Implementação e suporte do sistema ERP para gestão integrada da empresa.',
      features: ['Implantação', 'Treinamento', 'Suporte Técnico']
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title">
              Nossos <span className="gradient-text">Serviços</span>
            </h2>
            <p className="section-subtitle">
              Oferecemos um portfólio completo de serviços especializados em consultoria tributária 
              e gestão empresarial, sempre focados em gerar resultados para nossos clientes.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="service-card animate-slide-up">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center animate-scale-in">
            <div className="bg-gradient-primary rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Pronto para Otimizar sua Gestão Tributária?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos ajudar sua empresa 
                a reduzir custos e aumentar a eficiência fiscal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold"
                  onClick={() => scrollToSection('contato')}
                >
                  Solicitar Consultoria
                </Button>
                <a 
                  href="https://wa.me/5554999571408" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white border-2 border-white/60 rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
