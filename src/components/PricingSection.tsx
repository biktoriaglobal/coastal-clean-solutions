import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Pisos Turísticos",
    price: "50€",
    unit: "/ servicio",
    features: ["Limpieza profunda completa", "Desinfección puntos de contacto", "Check-list de revisión", "7 días a la semana"],
    cta: "Contratar",
    href: "#contacto",
    highlight: true,
  },
  {
    name: "Post-Obra",
    price: "8€",
    unit: "/ m²",
    features: ["Maquinaria industrial", "Eliminación polvo y cemento", "Cristales a fondo", "Limpieza de marcos"],
    cta: "Calcular presupuesto",
    href: "#calculadora",
    highlight: false,
  },
  {
    name: "Comunidades / Oficinas",
    price: "A medida",
    unit: "",
    features: ["Frecuencia adaptable", "Visita técnica gratuita", "Horario flexible", "Mantenimiento preventivo"],
    cta: "Solicitar visita",
    href: "#contacto",
    highlight: false,
  },
];

const PricingSection = () => (
  <section id="tarifas" className="py-20">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Tarifas Transparentes</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Sin sorpresas. Precios claros para cada servicio.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-xl p-8 flex flex-col ${
              p.highlight
                ? "bg-hero-gradient text-primary-foreground shadow-card-hover ring-2 ring-primary/20"
                : "bg-card shadow-card"
            }`}
          >
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
                  <Check className={`w-4 h-4 ${p.highlight ? "text-secondary" : "text-accent"}`} />
                  <span className={p.highlight ? "text-primary-foreground/90" : "text-foreground/80"}>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={p.highlight ? "secondary" : "default"}
              className="w-full"
              asChild
            >
              <a href={p.href}>{p.cta}</a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
