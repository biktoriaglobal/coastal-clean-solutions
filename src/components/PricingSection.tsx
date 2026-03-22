import { Check, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Pisos Turísticos",
    price: "Desde 50€",
    unit: "/ servicio",
    features: ["Limpieza profunda completa", "Desinfección puntos de contacto", "Check-list de revisión", "7 días a la semana"],
    highlight: true,
  },
  {
    name: "Post-Obra",
    price: "8€",
    unit: "/ m²",
    features: ["Eliminación polvo y cemento", "Cristales a fondo", "Limpieza de marcos", "Productos específicos"],
    highlight: false,
  },
  {
    name: "Comunidades / Oficinas",
    price: "A medida",
    unit: "",
    features: ["Frecuencia adaptable", "Visita técnica gratuita", "Horario flexible", "Mantenimiento preventivo"],
    highlight: false,
  },
];

const PricingSection = () => (
  <section id="tarifas" className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Precios</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Tarifas Transparentes</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">Sin sorpresas. Precios claros para cada servicio.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl p-8 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
              p.highlight
                ? "bg-hero-gradient text-primary-foreground shadow-card-hover ring-2 ring-primary/20"
                : "bg-card shadow-card hover:shadow-card-hover"
            }`}
          >
            {p.highlight && (
              <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                Popular
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
                  <Check className={`w-4 h-4 shrink-0 ${p.highlight ? "text-secondary" : "text-accent"}`} />
                  <span className={p.highlight ? "text-primary-foreground/90" : "text-foreground/80"}>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <Button
                variant={p.highlight ? "secondary" : "default"}
                className="w-full gap-2"
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
                variant={p.highlight ? "outline" : "outline"}
                className={`w-full gap-2 ${p.highlight ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" : ""}`}
                asChild
              >
                <a href="#contacto">
                  <Globe className="w-4 h-4" /> Contacto Web
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
