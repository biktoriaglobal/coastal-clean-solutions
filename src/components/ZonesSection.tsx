import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const zones = [
  "Valencia", "El Saler", "Cullera", "Gandía", "Oliva", "Dénia", "Jávea", "Moraira", "Calpe", "Altea",
];

const ZonesSection = () => (
  <section id="zonas" className="py-20">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Zonas de Actuación</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Cubrimos toda la costa desde Valencia hasta Altea. Servicio de limpieza profesional en los principales municipios costeros.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {zones.map((z, i) => (
          <motion.div
            key={z}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center gap-2 bg-card rounded-full px-5 py-3 shadow-card hover:shadow-card-hover transition-shadow cursor-default"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium text-foreground text-sm">{z}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ZonesSection;
