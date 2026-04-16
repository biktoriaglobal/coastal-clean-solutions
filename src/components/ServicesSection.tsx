import { motion } from "framer-motion";
import { Sparkles, HardHat, Building2, Briefcase, Home, CheckCircle2, ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import turisticImg from "@/assets/turistic-clean.jpg";
import beforeAfterImg from "@/assets/before-after.jpg";
import postObraImg from "@/assets/post-obra-clean.jpg";
import communityImg from "@/assets/community-clean.jpg";
import officeImg from "@/assets/office-clean.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Pisos Turísticos",
    subtitle: "Desde 60€ / 3€ m²",
    note: "",
    img: turisticImg,
    alt: "Limpieza de piso turístico en la costa valenciana",
    color: "from-primary to-primary/80",
    items: [
      "Limpieza profunda de baños y cocina",
      "Repaso de superficies y suelos",
      "Cristales interiores",
      "Desinfección de puntos de contacto (mandos, pomos)",
      "Disponibilidad 7 días / semana",
      "Check-list de revisión tras cada limpieza",
    ],
    extras: ["Opcional: Check-in", "Lavandería (a consultar)"],
  },
  {
    icon: HardHat,
    title: "Limpieza Post-Obra",
    subtitle: "8€ / m²",
    note: "Productos y equipos específicos",
    img: null, // will use postObraImg
    alt: "Antes y después de limpieza post-obra",
    color: "from-accent to-accent/80",
    items: [
      "Eliminación de polvo fino y restos de cemento",
      "Limpieza de pintura en marcos",
      "Cristales a fondo",
      "Productos específicos para cada superficie",
    ],
    extras: [],
  },
  {
    icon: Building2,
    title: "Comunidades de Vecinos",
    subtitle: "Presupuesto personalizado",
    note: "Frecuencia adaptable",
    img: communityImg,
    alt: "Limpieza de comunidad de vecinos",
    color: "from-secondary to-secondary/80",
    items: [
      "Escaleras, rellanos y portales",
      "Limpieza de ascensores",
      "Mantenimiento preventivo",
      "Frecuencia: diaria, semanal o quincenal",
    ],
    extras: [],
  },
  {
    icon: Briefcase,
    title: "Locales y Oficinas",
    subtitle: "Presupuesto personalizado",
    note: "Fuera de horario comercial",
    img: officeImg,
    alt: "Limpieza profesional de oficinas",
    color: "from-primary to-secondary",
    items: [
      "Limpieza fuera de horario comercial",
      "Desinfección de puestos de trabajo",
      "Zonas comunes y baños",
      "Sin interrumpir la actividad",
    ],
    extras: [],
  },
  {
    icon: Home,
    title: "Limpieza a Domicilio",
    subtitle: "A consultar",
    note: "Servicio personalizado según necesidades",
    img: beforeAfterImg,
    alt: "Servicio de limpieza a domicilio",
    color: "from-accent to-primary",
    items: [
      "Limpieza general del hogar",
      "Cocina y baños a fondo",
      "Plancha y organización",
      "Frecuencia adaptable a tu ritmo",
    ],
    extras: [],
  },
];

const ServicesSection = () => (
  <section id="servicios" className="py-24 bg-coast-gradient relative overflow-hidden">
    <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[100px]" />
    <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-secondary/3 blur-[100px]" />
    <div className="container relative">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
        >
          Servicios
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-xl mx-auto text-lg"
        >
          Soluciones de limpieza profesional adaptadas a cada necesidad en toda la costa valenciana.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-secondary/15 text-secondary border border-secondary/30 font-bold text-sm"
        >
          <BadgeCheck className="w-5 h-5" />
          Presupuesto sin compromiso
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 group"
          >
            <div className="h-48 overflow-hidden relative">
              <img src={s.img || postObraImg} alt={s.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className={`absolute inset-0 bg-gradient-to-t ${s.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            </div>
            <div className="p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                  <span className="text-sm font-bold text-primary">{s.subtitle}</span>
                </div>
              </div>
              {s.note && <p className="text-xs text-muted-foreground mb-4 italic">{s.note}</p>}
              <ul className="space-y-2.5 mb-4">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              {s.extras && s.extras.length > 0 && (
                <div className="mb-4 space-y-1.5">
                  {s.extras.map((extra) => (
                    <p key={extra} className="text-xs text-muted-foreground italic pl-6">• {extra}</p>
                  ))}
                </div>
              )}
              <Button variant="outline" size="sm" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300" asChild>
                <a href="#contacto">
                  Presupuesto sin compromiso <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
