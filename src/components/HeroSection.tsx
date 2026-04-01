import { motion } from "framer-motion";
import { Sparkles, HardHat, ArrowDown, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cleaning.jpg";
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { value: 500, suffix: "+", label: "Servicios realizados" },
  { value: 10, suffix: "", label: "Municipios cubiertos" },
  { value: 98, suffix: "%", label: "Clientes satisfechos" },
  { value: 7, suffix: "/7", label: "Días disponibles" },
];

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Equipo profesional de limpieza en la Costa Valenciana" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/75 to-primary/40" />
      <div className="absolute inset-0 bg-hero-gradient opacity-15" />
    </div>

    {/* Animated particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary-foreground/10"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>

    <div className="container relative z-10 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-8 shadow-xl"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-secondary-foreground animate-pulse" />
          De Valencia a Altea · 7 días a la semana
        </motion.span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground leading-[1.05] mb-8 tracking-tight">
          Tu costa,
          <motion.span
            className="block text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, hsl(165 80% 65%), hsl(35 95% 60%))" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            siempre limpia
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl text-primary-foreground/75 mb-12 max-w-lg leading-relaxed font-light"
        >
          Limpieza profesional de pisos turísticos, post-obra, comunidades y oficinas en toda la costa valenciana.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="text-base px-8 py-6 bg-hero-gradient hover:opacity-90 shadow-xl border-0 glow-primary" asChild>
            <a href="#servicios" className="gap-2">
              <Sparkles className="w-5 h-5" /> Limpieza Turística
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-md" asChild>
            <a href="#calculadora" className="gap-2">
              <HardHat className="w-5 h-5" /> Presupuesto Post-Obra
            </a>
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-primary-foreground/5 backdrop-blur-xl rounded-2xl p-6 border border-primary-foreground/10"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs md:text-sm text-primary-foreground/60 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
    >
      <a href="#servicios" className="flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
        <span className="text-xs font-medium tracking-widest uppercase">Descubre más</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </motion.div>
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M0 80H1440V40C1440 40 1320 0 1080 20C840 40 720 60 480 40C240 20 120 0 0 20V80Z" fill="hsl(210 30% 98%)" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
