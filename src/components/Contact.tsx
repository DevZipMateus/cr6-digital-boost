
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Entre em <span className="gradient-text">Contato</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para atender você e oferecer as melhores soluções 
              em consultoria tributária para sua empresa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-slide-up">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border h-full">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                      <address className="text-muted-foreground not-italic">
                        RUA M (LOT POLTRONIERI), 416<br />
                        B. LIVERDADE - CEP: 99.706-044<br />
                        ERECHIM/RS
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                      <a 
                        href="tel:5554999571408"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (54) 9 9957-1408
                      </a>
                      <br />
                      <a 
                        href="https://wa.me/5554999571408" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm mt-1"
                      >
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-corporate rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                      <a 
                        href="mailto:financeirocr6@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        financeirocr6@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Horário de Atendimento</h4>
                      <p className="text-muted-foreground">
                        Segunda à Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Contato Rápido</h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="https://wa.me/5554999571408" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-hero bg-green-500 hover:bg-green-600 text-center"
                    >
                      WhatsApp
                    </a>
                    <a 
                      href="mailto:financeirocr6@gmail.com"
                      className="btn-secondary text-center"
                    >
                      E-mail
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Envie sua Mensagem
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="w-full"
                        aria-describedby="name-error"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="w-full"
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(00) 00000-0000"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Assunto *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Assunto da mensagem"
                        className="w-full"
                        aria-describedby="subject-error"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva como podemos ajudá-lo..."
                      rows={6}
                      className="w-full"
                      aria-describedby="message-error"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-hero w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" aria-hidden="true"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 animate-fade-in">
            <div className="bg-card rounded-2xl p-4 shadow-lg border border-border">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.123456789!2d-52.2743!3d-27.6336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM4JzAxLjAiUyA1MsKwMTYnMjcuNSJX!5e0!3m2!1spt-BR!2sbr!4v1642789012345"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização CR6 Consultoria - Erechim/RS"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
