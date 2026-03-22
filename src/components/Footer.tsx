import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 text-primary-foreground/80 text-sm">
        <div>
          <h3 className="font-display text-lg font-bold text-primary-foreground mb-3">LimpCosta</h3>
          <p>Servicios de limpieza profesional en toda la costa valenciana. De Valencia a Altea.</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-3">Servicios</h4>
          <ul className="space-y-1.5">
            <li>Pisos Turísticos</li>
            <li>Limpieza Post-Obra</li>
            <li>Comunidades de Vecinos</li>
            <li>Locales y Oficinas</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-3">Contacto</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 601 902 204</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Valencia – Altea</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} LimpCosta. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
