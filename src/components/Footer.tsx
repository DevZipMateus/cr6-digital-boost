
import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CR6</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">CR6 Consultoria</h3>
                  <p className="text-background/70 text-sm">Inteligência Fiscal</p>
                </div>
              </div>
              
              <p className="text-background/80 mb-6 leading-relaxed max-w-md">
                Escritório de inteligência fiscal com anos de experiência no mercado tributário empresarial. 
                Oferecemos soluções estratégicas para otimizar seus resultados fiscais.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-background/80">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">
                    RUA M (LOT POLTRONIERI), 416 - B. LIVERDADE<br />
                    CEP: 99.706-044 - ERECHIM/RS
                  </span>
                </div>
                
                <div className="flex items-center space-x-3 text-background/80">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a 
                    href="tel:5554999571408" 
                    className="text-sm hover:text-primary transition-colors"
                  >
                    (54) 9 9957-1408
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-background/80">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a 
                    href="mailto:financeirocr6@gmail.com" 
                    className="text-sm hover:text-primary transition-colors"
                  >
                    financeirocr6@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Navegação</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('inicio')}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('sobre')}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicos')}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contato')}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Principais Serviços</h4>
              <ul className="space-y-3 text-sm text-background/80">
                <li>Consultoria Tributária</li>
                <li>Planejamento Tributário</li>
                <li>BPO Empresarial</li>
                <li>Terceirização Contábil</li>
                <li>Terceirização Fiscal</li>
                <li>Certificado Digital</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} CR6 Consultoria. Todos os direitos reservados.</p>
              <p className="mt-1">
                Responsável: Rita Eliane Cervinski | 
                <a 
                  href="https://www.cr6consultoria.com.br" 
                  className="hover:text-primary transition-colors ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cr6consultoria.com.br
                  <ExternalLink className="w-3 h-3 inline ml-1" />
                </a>
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <a 
                href="https://wa.me/5554999571408" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/80 hover:text-green-400 transition-colors text-sm"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:financeirocr6@gmail.com"
                className="text-background/80 hover:text-primary transition-colors text-sm"
              >
                E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
