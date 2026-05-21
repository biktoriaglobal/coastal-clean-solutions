import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://api.whatsapp.com/send/?phone=34601902204&text=Hola%2C%20me%20gustaría%20solicitar%20presupuesto%20para%20un%20servicio%20de%20limpieza%20para%20&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
