import { useState } from "react";
import { Calculator, Sparkles, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CalculatorSection = () => {
  const [m2, setM2] = useState("");
  const pricePostObra = m2 ? Number(m2) * 8 : 0;

  return (
    <section id="calculadora" className="py-20 bg-coast-gradient">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" /> Calculadora
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
                href={`https://api.whatsapp.com/send/?phone=34601902204&text=${encodeURIComponent(`Hola! Necesito presupuesto post-obra para ${m2 || "___"} m² (estimado ${pricePostObra}€)`)}&type=phone_number&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar por WhatsApp
              </a>
            </Button>
          </div>

          {/* Piso Turístico — consultar */}
          <div className="bg-card rounded-2xl shadow-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground">Piso Turístico</h3>
                <p className="text-xs text-muted-foreground">Presupuesto personalizado</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-foreground/80 flex-1">
              <p>
                Cada piso turístico es diferente. El precio depende del <strong>tamaño</strong>,
                el <strong>estado</strong> y los <strong>extras</strong> (check-in, lavandería).
              </p>
              <p>
                Trabajamos también <strong>por horas</strong>: no es lo mismo un piso grande casi
                vacío que uno pequeño muy cargado. Cuéntanos tu caso y te damos un presupuesto a medida.
              </p>
            </div>
            <Button className="mt-5 w-full gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-white border-0" asChild>
              <a
                href={`https://api.whatsapp.com/send/?phone=34601902204&text=${encodeURIComponent("Hola! Necesito presupuesto para un piso turístico. Os cuento: tamaño, estado y si necesito check-in o lavandería.")}&type=phone_number&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir presupuesto por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
