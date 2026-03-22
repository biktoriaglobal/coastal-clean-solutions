import { motion } from "framer-motion";
import { Sparkles, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cleaning.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-16">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Equipo profesional de limpieza en la Costa Valenciana" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
    </div>
    <div className="container relative z-10 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-block px-5 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-8 shadow-lg"
        >
          De Valencia a Altea · 7 días a la semana
        </motion.span>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-primary-foreground leading-[1.1] mb-8">
          Limpieza
          <span className="block text-secondary">Profesional</span>
          en la Costa Valenciana
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg leading-relaxed">
          Pisos turísticos, post-obra, comunidades y oficinas. Resultados impecables garantizados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="text-base px-8 py-6 shadow-lg" asChild>
            <a href="#servicios" className="gap-2">
              <Sparkles className="w-5 h-5" /> Limpieza Turística
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-card/10 border-primary-foreground/30 text-primary-foreground hover:bg-card/20 backdrop-blur-sm" asChild>
            <a href="#calculadora" className="gap-2">
              <HardHat className="w-5 h-5" /> Presupuesto Post-Obra
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
    {/* Decorative bottom wave */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M0 80H1440V40C1440 40 1320 0 1080 20C840 40 720 60 480 40C240 20 120 0 0 20V80Z" fill="hsl(210 20% 98%)" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
