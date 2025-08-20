
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5554999571408"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppFloat;
