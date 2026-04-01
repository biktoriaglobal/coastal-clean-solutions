import { useState, useEffect } from "react";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tarifas", href: "#tarifas" },
  { label: "Zonas", href: "#zonas" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-card/95 backdrop-blur-2xl shadow-lg border-b border-border" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-hero-gradient flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className={`font-display text-xl font-bold transition-colors duration-300 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Costa<span className="text-gradient-primary">Limpia</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${scrolled ? "text-muted-foreground hover:text-primary hover:bg-primary/5" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"}`}
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="ml-3 bg-hero-gradient hover:opacity-90 shadow-md glow-primary" asChild>
            <a href="tel:601902204" className="gap-2">
              <Phone className="w-4 h-4" /> 601 902 204
            </a>
          </Button>
        </div>
        <button className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-2xl border-b border-border pb-4 shadow-xl">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button size="sm" className="w-full bg-hero-gradient" asChild>
              <a href="tel:601902204" className="gap-2">
                <Phone className="w-4 h-4" /> 601 902 204
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
