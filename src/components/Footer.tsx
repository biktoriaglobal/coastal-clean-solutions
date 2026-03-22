import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-16">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 text-primary-foreground/80 text-sm">
        <div>
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">LimpCosta</h3>
          <p className="leading-relaxed">Servicios de limpieza profesional en toda la costa valenciana. De Valencia a Altea.</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-wide text-xs">Servicios</h4>
          <ul className="space-y-2">
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">Pisos Turísticos</a></li>
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">Limpieza Post-Obra</a></li>
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">Comunidades de Vecinos</a></li>
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">Locales y Oficinas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-wide text-xs">Contacto</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> <a href="tel:601902204">601 902 204</a></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@limpcosta.es</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Valencia – Altea</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-8 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} LimpCosta. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
