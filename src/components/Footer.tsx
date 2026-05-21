import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLang } from "@/i18n/LanguageContext";

const cities = [
  "Valencia", "El Saler", "El Perelló", "Sueca", "Cullera",
  "Tavernes de la Valldigna", "Xeraco", "Gandía", "Oliva", "Pego",
  "Dénia", "Ondara", "Jávea", "Benissa", "Moraira", "Calpe", "Altea",
];

const Footer = () => {
  const { t } = useLang();
  return (
  <footer className="bg-foreground py-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-hero-gradient opacity-5" />
    <div className="container relative">
      <div className="grid md:grid-cols-4 gap-10 text-primary-foreground/80 text-sm">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Limpieza Efficiente" className="h-12 w-auto bg-primary-foreground/10 rounded-lg p-1" />
            <h3 className="font-display text-xl font-bold text-primary-foreground leading-tight">Limpieza<br/>Efficiente</h3>
          </div>
          <p className="leading-relaxed">{t("footer.about")}</p>
          <p className="mt-4 text-xs text-primary-foreground/60">{t("footer.group")} <span className="text-secondary font-semibold">Grupo Max Efficiency</span>.</p>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-wide text-xs">{t("footer.services")}</h4>
          <ul className="space-y-2">
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">{t("services.tourist.title")}</a></li>
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">{t("services.postobra.title")}</a></li>
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">{t("services.community.title")}</a></li>
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">{t("services.office.title")}</a></li>
            <li className="hover:text-primary-foreground transition-colors"><a href="#servicios">{t("services.home.title")}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-wide text-xs">{t("footer.zones")}</h4>
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
          <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-wide text-xs">{t("footer.contact")}</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" /> <a href="tel:+34601902204">601 902 204</a></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-secondary" /> <a href="mailto:limpieza@max-efficiency.es">limpieza@max-efficiency.es</a></li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> Valencia – Altea</li>
          </ul>
          <h4 className="font-semibold text-primary-foreground mt-6 mb-3 uppercase tracking-wide text-xs">{t("footer.legal")}</h4>
          <ul className="space-y-1.5">
            <li className="hover:text-primary-foreground transition-colors"><Link to="/legal#aviso-legal">{t("footer.legal.aviso")}</Link></li>
            <li className="hover:text-primary-foreground transition-colors"><Link to="/legal#privacidad">{t("footer.legal.privacy")}</Link></li>
            <li className="hover:text-primary-foreground transition-colors"><Link to="/legal#cookies">{t("footer.legal.cookies")}</Link></li>
            <li className="hover:text-primary-foreground transition-colors"><Link to="/legal#condiciones">{t("footer.legal.terms")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-8 text-center text-xs text-primary-foreground/40 space-y-1">
        <p>© {new Date().getFullYear()} Limpieza Efficiente — Grupo Max Efficiency. {t("footer.rights")}</p>
        <p>{t("footer.compliance")}</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
