import { Phone, MapPin, Mail, Sparkles } from "lucide-react";

const cities = [
  "Valencia", "El Saler", "Cullera", "Gandía", "Oliva",
  "Dénia", "Jávea", "Moraira", "Calpe", "Altea",
];

const Footer = () => (
  <footer className="bg-foreground py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-hero-gradient opacity-5" />
    <div className="container relative">
      <div className="grid md:grid-cols-4 gap-10 text-primary-foreground/80 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-hero-gradient flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground">Limpieza Efficiente</h3>
          </div>
          <p className="leading-relaxed">Servicios de limpieza profesional en toda la costa valenciana. De Valencia a Altea, tu costa siempre limpia.</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-wide text-xs">Servicios</h4>
          <ul className="space-y-2">
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">Pisos Turísticos</a></li>
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">Limpieza Post-Obra</a></li>
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">Comunidades de Vecinos</a></li>
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">Locales y Oficinas</a></li>
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">Limpieza a Domicilio</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-wide text-xs">Zonas de Servicio</h4>
          <ul className="space-y-1.5">
            {cities.map((city) => (
              <li key={city} className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
                <MapPin className="w-3 h-3 text-secondary shrink-0" />
                <a href="#zonas">{city}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-wide text-xs">Contacto</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" /> <a href="tel:603140026">603 140 026</a></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-secondary" /> <a href="mailto:limpieza@max-efficiency.es">limpieza@max-efficiency.es</a></li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> Valencia – Altea</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-8 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Limpieza Efficiente. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
