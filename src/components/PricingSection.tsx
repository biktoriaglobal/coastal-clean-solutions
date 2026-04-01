import { Check, MessageCircle, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Pisos Turísticos",
    price: "Desde 50€",
    unit: "/ servicio",
    features: ["Limpieza profunda completa", "Desinfección puntos de contacto", "Check-list de revisión", "7 días a la semana"],
    highlight: true,
    badge: "⭐ Popular",
  },
  {
    name: "Post-Obra",
    price: "8€",
    unit: "/ m²",
    features: ["Eliminación polvo y cemento", "Cristales a fondo", "Limpieza de marcos", "Productos específicos"],
    highlight: false,
    badge: null,
  },
  {
    name: "Comunidades / Oficinas",
    price: "A medida",
    unit: "",
    features: ["Frecuencia adaptable", "Visita técnica gratuita", "Horario flexible", "Mantenimiento preventivo"],
    highlight: false,
    badge: null,
  },
];

const PricingSection = () => (
  <section id="tarifas" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
    <div className="container relative">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
        >
          <Zap className="w-4 h-4" /> Precios
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
        >
          Tarifas Transparentes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-xl mx-auto text-lg"
        >
          Sin sorpresas. Precios claros para cada servicio.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`rounded-2xl p-8 flex flex-col relative overflow-hidden transition-all duration-300 ${
              p.highlight
                ? "bg-hero-gradient text-primary-foreground shadow-card-hover ring-2 ring-primary/30 glow-primary"
                : "bg-card shadow-card hover:shadow-card-hover border border-border/50"
            }`}
          >
            {p.badge && (
              <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {p.badge}
              </span>
            )}
            <h3 className={`font-display text-xl font-bold mb-2 ${p.highlight ? "text-primary-foreground" : "text-foreground"}`}>
              {p.name}
            </h3>
            <div className="mb-6">
              <span className={`text-4xl font-bold ${p.highlight ? "text-primary-foreground" : "text-primary"}`}>{p.price}</span>
              <span className={`text-sm ml-1 ${p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.unit}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className={`w-4 h-4 shrink-0 ${p.highlight ? "text-accent" : "text-secondary"}`} />
                  <span className={p.highlight ? "text-primary-foreground/90" : "text-foreground/80"}>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <Button
                variant={p.highlight ? "secondary" : "default"}
                className={`w-full gap-2 ${p.highlight ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "bg-hero-gradient text-primary-foreground hover:opacity-90"}`}
                asChild
              >
                <a
                  href={`https://wa.me/34601902204?text=${encodeURIComponent(`Hola! Me interesa el servicio de ${p.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                className={`w-full gap-2 ${p.highlight ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" : "hover:bg-primary/5"}`}
                asChild
              >
                <a href="#contacto">
                  <Globe className="w-4 h-4" /> Contacto Web
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
