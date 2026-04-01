import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "María García",
    role: "Propietaria Airbnb · Gandía",
    rating: 5,
    text: "Desde que trabajo con CostaLimpia, mis reseñas en Airbnb han subido de 4.2 a 4.9. Son puntuales, meticulosos y siempre dejan el piso perfecto para los huéspedes.",
    avatar: "MG",
  },
  {
    name: "Carlos Ruiz",
    role: "Constructora · Dénia",
    rating: 5,
    text: "La limpieza post-obra que nos hicieron fue impecable. Entregamos la vivienda sin una mota de polvo. Precio justo y resultado profesional. Ya les hemos contratado 3 veces.",
    avatar: "CR",
  },
  {
    name: "Laura Martínez",
    role: "Presidenta Comunidad · Valencia",
    rating: 5,
    text: "Llevamos un año con ellos para la limpieza de nuestra comunidad. Las zonas comunes están siempre impecables y la comunicación es excelente. Muy recomendable.",
    avatar: "LM",
  },
  {
    name: "Pedro Sánchez",
    role: "Propietario local · Jávea",
    rating: 5,
    text: "Limpian nuestro restaurante cada noche fuera de horario. Son discretos, eficientes y de confianza total. La mejor inversión que hemos hecho para nuestro negocio.",
    avatar: "PS",
  },
  {
    name: "Ana López",
    role: "Gestora turística · Altea",
    rating: 5,
    text: "Gestiono 12 apartamentos turísticos y CostaLimpia se encarga de todos. Nunca he tenido una queja de un huésped por limpieza. Son mi mano derecha.",
    avatar: "AL",
  },
  {
    name: "Roberto Vidal",
    role: "Arquitecto · Cullera",
    rating: 5,
    text: "Tras la reforma de un chalet de 200m², dejaron todo reluciente en un solo día. Profesionalidad total. Los recomiendo sin dudarlo a todos mis clientes.",
    avatar: "RV",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-secondary text-secondary" : "fill-muted text-muted"}`}
      />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className="py-24 bg-coast-gradient relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
    <div className="container relative">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4"
        >
          <Star className="w-4 h-4 fill-secondary" /> 5.0 de media
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
        >
          Lo que dicen nuestros clientes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-xl mx-auto text-lg"
        >
          La satisfacción de nuestros clientes es nuestra mejor carta de presentación
        </motion.p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-primary/20 relative"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                {t.avatar}
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
            <StarRating rating={t.rating} />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
