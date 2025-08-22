import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CR6</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CR6 Consultoria</h1>
                <p className="text-xs text-muted-foreground">Inteligência Fiscal</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </button>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>(54) 9 9957-1408</span>
                </div>
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>financeirocr6@gmail.com</span>
                </div>
              </div>
              <Button 
                className="btn-hero"
                onClick={() => scrollToSection('contato')}
              >
                Fale Conosco
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </button>
              <div className="pt-4 border-t border-border">
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>(54) 9 9957-1408</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>financeirocr6@gmail.com</span>
                  </div>
                </div>
                <Button 
                  className="btn-hero w-full"
                  onClick={() => scrollToSection('contato')}
                >
                  Fale Conosco
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
