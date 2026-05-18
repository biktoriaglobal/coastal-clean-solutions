import { useState } from "react";
import { Calculator, Sparkles, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CalculatorSection = () => {
  const [m2, setM2] = useState("");
  const [m2Tourist, setM2Tourist] = useState("");
  const pricePostObra = m2 ? Number(m2) * 8 : 0;
  const priceTourist = m2Tourist ? Number(m2Tourist) * 3 : 0;

  return (
    <section id="calculadora" className="py-20 bg-coast-gradient">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" /> Calculadoras
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-2">Calcula tu Presupuesto al Instante</h2>
          <div className="inline-flex items-center gap-2 mt-3 px-5 py-2 rounded-full bg-secondary/15 text-secondary border border-secondary/30 font-bold text-sm">
            <BadgeCheck className="w-4 h-4" />
            Presupuesto sin compromiso
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Post-Obra Calculator */}
          <div className="bg-card rounded-2xl shadow-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">Post-Obra</h3>
                <p className="text-xs text-muted-foreground">8€ / m²</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Metros cuadrados (m²)</label>
                <Input
                  type="number"
                  min="1"
                  placeholder="Ej: 120"
                  value={m2}
                  onChange={(e) => setM2(e.target.value)}
                  className="text-lg"
                />
              </div>
              <div className="bg-muted rounded-lg px-5 py-3 text-center">
                <p className="text-xs text-muted-foreground">Precio estimado</p>
                <p className="text-3xl font-bold text-primary">{pricePostObra.toLocaleString("es-ES")}€</p>
              </div>
            </div>
            <Button className="mt-5 w-full gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-white border-0" asChild>
              <a
                href={`https://wa.me/34603140026?text=Hola!%20Necesito%20presupuesto%20post-obra%20para%20${m2 || "___"}%20m²%20(estimado%20${pricePostObra}€)`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar por WhatsApp
              </a>
            </Button>
          </div>

          {/* Piso Turístico Calculator */}
          <div className="bg-card rounded-2xl shadow-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">Piso Turístico</h3>
                <p className="text-xs text-muted-foreground">3€ / m²</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Metros cuadrados (m²)</label>
                <Input
                  type="number"
                  min="1"
                  placeholder="Ej: 80"
                  value={m2Tourist}
                  onChange={(e) => setM2Tourist(e.target.value)}
                  className="text-lg"
                />
              </div>
              <div className="bg-muted rounded-lg px-5 py-3 text-center">
                <p className="text-xs text-muted-foreground">Precio estimado</p>
                <p className="text-3xl font-bold text-secondary">{priceTourist.toLocaleString("es-ES")}€</p>
              </div>
            </div>
            <Button className="mt-5 w-full gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-white border-0" asChild>
              <a
                href={`https://wa.me/34603140026?text=Hola!%20Necesito%20presupuesto%20piso%20turístico%20para%20${m2Tourist || "___"}%20m²%20(estimado%20${priceTourist}€)`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
