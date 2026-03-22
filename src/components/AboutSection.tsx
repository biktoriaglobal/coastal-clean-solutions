import { Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Shield, title: "Garantía de Calidad", desc: "Si no estás satisfecho, volvemos gratis. Sin preguntas." },
  { icon: Clock, title: "Disponibilidad Total", desc: "7 días a la semana, incluidos festivos. Adaptados al turismo costero." },
  { icon: Award, title: "Equipo Profesional", desc: "Personal formado, uniformado y con experiencia en la costa valenciana." },
];

const AboutSection = () => (
  <section id="nosotros" className="py-24 bg-muted/30">
    <div className="container">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Nosotros</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Sobre Nosotros</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Somos un equipo local especializado en la limpieza profesional de la costa valenciana. Conocemos cada pueblo, cada necesidad.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <v.icon className="w-8 h-8 text-primary" />
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
