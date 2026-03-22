import { motion } from "framer-motion";
import { Sparkles, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cleaning.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Equipo profesional de limpieza en la Costa Valenciana" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    </div>
    <div className="container relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-6">
          De Valencia a Altea · 7 días a la semana
        </span>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary-foreground leading-tight mb-6">
          Limpieza Profesional en la Costa Valenciana
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg font-body">
          Pisos turísticos, post-obra, comunidades y oficinas. Resultados impecables garantizados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <a href="#servicios" className="gap-2">
              <Sparkles className="w-5 h-5" /> Limpieza Turística
            </a>
          </Button>
          <Button size="lg" variant="outline" className="bg-card/20 border-primary-foreground/30 text-primary-foreground hover:bg-card/40" asChild>
            <a href="#calculadora" className="gap-2">
              <HardHat className="w-5 h-5" /> Presupuesto Post-Obra
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
