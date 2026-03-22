import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#inicio" className="font-display text-xl font-bold text-primary">
          LimpCosta
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" asChild>
            <a href="tel:601902204" className="gap-2">
              <Phone className="w-4 h-4" /> 601 902 204
            </a>
          </Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card border-b border-border pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button size="sm" className="w-full" asChild>
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
