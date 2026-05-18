import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const zones = [
  { name: "Valencia", highlight: true },
  { name: "El Saler", highlight: false },
  { name: "El Perelló", highlight: false },
  { name: "Sueca", highlight: false },
  { name: "Cullera", highlight: false },
  { name: "Tavernes de la Valldigna", highlight: false },
  { name: "Xeraco", highlight: false },
  { name: "Gandía", highlight: true },
  { name: "Oliva", highlight: false },
  { name: "Pego", highlight: false },
  { name: "Dénia", highlight: true },
  { name: "Ondara", highlight: false },
  { name: "Jávea", highlight: true },
  { name: "Benissa", highlight: false },
  { name: "Moraira", highlight: false },
  { name: "Calpe", highlight: false },
  { name: "Altea", highlight: true },
];

const ZonesSection = () => (
  <section id="zonas" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-coast-gradient" />
    <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/5 blur-[80px]" />
    <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-secondary/5 blur-[80px]" />
    <div className="container relative">
      <div className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
        >
          <Navigation className="w-4 h-4" /> Cobertura
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
        >
          Zonas de Actuación
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-xl mx-auto text-lg"
        >
          Cubrimos toda la costa desde Valencia hasta Altea. Servicio de limpieza profesional en los principales municipios costeros.
        </motion.p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {zones.map((z, i) => (
          <motion.div
            key={z.name}
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.08, y: -4 }}
            className={`flex items-center gap-2 rounded-full px-6 py-3.5 shadow-card hover:shadow-card-hover transition-all cursor-default ${
              z.highlight
                ? "bg-hero-gradient text-primary-foreground"
                : "bg-card text-foreground border border-border/50"
            }`}
          >
            <MapPin className={`w-4 h-4 ${z.highlight ? "text-primary-foreground" : "text-primary"}`} />
            <span className="font-display font-bold text-sm">{z.name}</span>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8 text-sm text-muted-foreground"
      >
        ¿Tu municipio no aparece? <a href="#contacto" className="text-primary font-semibold hover:underline">Consúltanos</a> — probablemente también te cubrimos.
      </motion.p>
    </div>
  </section>
);

export default ZonesSection;
