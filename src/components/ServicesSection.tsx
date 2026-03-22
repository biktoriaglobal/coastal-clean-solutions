import { motion } from "framer-motion";
import { Sparkles, HardHat, Building2, Briefcase, CheckCircle2 } from "lucide-react";
import turisticImg from "@/assets/turistic-clean.jpg";
import beforeAfterImg from "@/assets/before-after.jpg";
import communityImg from "@/assets/community-clean.jpg";
import officeImg from "@/assets/office-clean.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Pisos Turísticos",
    subtitle: "Desde 50€ / servicio",
    note: "No incluye lavandería",
    img: turisticImg,
    alt: "Limpieza de piso turístico en la costa valenciana",
    items: [
      "Limpieza profunda de baños y cocina",
      "Repaso de superficies y suelos",
      "Cristales interiores",
      "Desinfección de puntos de contacto (mandos, pomos)",
      "Disponibilidad 7 días / semana",
      "Check-list de revisión tras cada limpieza",
    ],
  },
  {
    icon: HardHat,
    title: "Limpieza Post-Obra",
    subtitle: "8€ / m²",
    note: "Maquinaria industrial incluida",
    img: beforeAfterImg,
    alt: "Antes y después de limpieza post-obra",
    items: [
      "Eliminación de polvo fino y restos de cemento",
      "Limpieza de pintura en marcos",
      "Cristales a fondo",
      "Aspiradoras industriales y productos específicos",
    ],
  },
  {
    icon: Building2,
    title: "Comunidades de Vecinos",
    subtitle: "Presupuesto personalizado",
    note: "Frecuencia adaptable",
    img: communityImg,
    alt: "Limpieza de comunidad de vecinos",
    items: [
      "Escaleras, rellanos y portales",
      "Limpieza de ascensores",
      "Mantenimiento preventivo",
      "Frecuencia: diaria, semanal o quincenal",
    ],
  },
  {
    icon: Briefcase,
    title: "Locales y Oficinas",
    subtitle: "Presupuesto personalizado",
    note: "Fuera de horario comercial",
    img: officeImg,
    alt: "Limpieza profesional de oficinas",
    items: [
      "Limpieza fuera de horario comercial",
      "Desinfección de puestos de trabajo",
      "Zonas comunes y baños",
      "Sin interrumpir la actividad",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const ServicesSection = () => (
  <section id="servicios" className="py-20 bg-coast-gradient">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Nuestros Servicios</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Soluciones de limpieza profesional adaptadas a cada necesidad en toda la costa valenciana.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img src={s.img} alt={s.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                  <span className="text-sm font-semibold text-primary">{s.subtitle}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4 italic">{s.note}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
