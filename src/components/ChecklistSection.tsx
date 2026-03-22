import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  "Limpieza profunda de baños (sanitarios, mamparas, espejos)",
  "Cocina completa (encimera, fregadero, electrodomésticos exteriores)",
  "Repaso de superficies y mobiliario",
  "Fregado de suelos con desinfectante",
  "Cristales interiores",
  "Desinfección de mandos, pomos e interruptores",
  "Retirada de basura y bolsas",
  "Revisión final con check-list firmado",
];

const ChecklistSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container max-w-3xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Check-List Limpieza Turística
        </h2>
        <p className="text-muted-foreground">
          Esto es exactamente lo que hacemos en cada servicio. Total transparencia para los propietarios de Airbnb y apartamentos turísticos.
        </p>
      </div>
      <div className="bg-card rounded-xl shadow-card p-8">
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ChecklistSection;
