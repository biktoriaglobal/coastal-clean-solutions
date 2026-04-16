import { Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Shield, title: "Confianza Total", desc: "Equipo verificado, asegurado y con referencias comprobables en toda la costa.", color: "bg-primary/10 text-primary" },
  { icon: Clock, title: "Disponibilidad Total", desc: "7 días a la semana, incluidos festivos. Adaptados al turismo costero.", color: "bg-secondary/10 text-secondary" },
  { icon: Award, title: "Equipo Profesional", desc: "Personal formado, uniformado y con experiencia en la costa valenciana.", color: "bg-accent/10 text-accent" },
];

const AboutSection = () => (
  <section id="nosotros" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
    <div className="container relative">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
        >
          Nosotros
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
        >
          ¿Por qué Limpieza Efficiente?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-xl mx-auto text-lg"
        >
          Somos un equipo local especializado en la limpieza profesional de la costa valenciana. Conocemos cada pueblo, cada necesidad.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="text-center bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-primary/20"
          >
            <div className={`w-16 h-16 rounded-2xl ${v.color} flex items-center justify-center mx-auto mb-5`}>
              <v.icon className="w-8 h-8" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-3">{v.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
