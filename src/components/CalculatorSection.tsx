import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CalculatorSection = () => {
  const [m2, setM2] = useState("");
  const price = m2 ? Number(m2) * 8 : 0;

  return (
    <section id="calculadora" className="py-20 bg-coast-gradient">
      <div className="container max-w-2xl">
        <div className="bg-card rounded-2xl shadow-card p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Calculadora Post-Obra</h2>
              <p className="text-sm text-muted-foreground">Calcula tu presupuesto al instante</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
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
            <div className="bg-muted rounded-lg px-6 py-3 text-center min-w-[160px]">
              <p className="text-xs text-muted-foreground">Precio estimado</p>
              <p className="text-3xl font-bold text-primary">{price.toLocaleString("es-ES")}€</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Precio: 8€/m²</p>
          <Button className="mt-6 w-full sm:w-auto" asChild>
            <a
              href={`https://wa.me/34601902204?text=Hola!%20Necesito%20presupuesto%20post-obra%20para%20${m2 || "___"}%20m²%20(estimado%20${price}€)`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar presupuesto por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
