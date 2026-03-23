import { motion } from "framer-motion";
import { Sparkles, HardHat, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cleaning.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Equipo profesional de limpieza en la Costa Valenciana" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/70 to-primary/30" />
      <div className="absolute inset-0 bg-hero-gradient opacity-20" />
    </div>
    <div className="container relative z-10 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-8 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-secondary-foreground animate-pulse" />
          De Valencia a Altea · 7 días a la semana
        </motion.span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground leading-[1.05] mb-8 tracking-tight">
          Tu costa
          <span className="block text-secondary drop-shadow-lg">siempre brillante</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/75 mb-12 max-w-lg leading-relaxed font-light">
          Limpieza profesional de pisos turísticos, post-obra, comunidades y oficinas. Resultados impecables garantizados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="text-base px-8 py-6 bg-hero-gradient hover:opacity-90 shadow-xl border-0" asChild>
            <a href="#servicios" className="gap-2">
              <Sparkles className="w-5 h-5" /> Limpieza Turística
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-md" asChild>
            <a href="#calculadora" className="gap-2">
              <HardHat className="w-5 h-5" /> Presupuesto Post-Obra
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
    >
      <a href="#servicios" className="flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
        <span className="text-xs font-medium tracking-widest uppercase">Descubre más</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </motion.div>
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M0 80H1440V40C1440 40 1320 0 1080 20C840 40 720 60 480 40C240 20 120 0 0 20V80Z" fill="hsl(220 20% 97%)" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
