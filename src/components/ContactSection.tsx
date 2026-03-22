import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", service: "", m2: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola! Soy ${form.name}. Necesito: ${form.service}${form.m2 ? ` (${form.m2} m²)` : ""}. Mi teléfono: ${form.phone}`;
    window.open(`https://wa.me/34601902204?text=${encodeURIComponent(msg)}`, "_blank");
    toast({ title: "¡Mensaje enviado!", description: "Te redirigimos a WhatsApp." });
  };

  return (
    <section id="contacto" className="py-20 bg-coast-gradient">
      <div className="container max-w-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Solicita Presupuesto</h2>
          <p className="text-muted-foreground">Rellena el formulario y te contactamos en menos de 1 hora.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-8 space-y-5">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Nombre</label>
            <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Teléfono</label>
            <Input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="601 902 204" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Tipo de servicio</label>
            <Select onValueChange={(v) => setForm({ ...form, service: v })}>
              <SelectTrigger><SelectValue placeholder="Selecciona un servicio" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Limpieza Turística">Limpieza Turística</SelectItem>
                <SelectItem value="Post-Obra">Post-Obra</SelectItem>
                <SelectItem value="Comunidad de Vecinos">Comunidad de Vecinos</SelectItem>
                <SelectItem value="Local / Oficina">Local / Oficina</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {form.service === "Post-Obra" && (
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Metros cuadrados</label>
              <Input type="number" min="1" value={form.m2} onChange={(e) => setForm({ ...form, m2: e.target.value })} placeholder="Ej: 120" />
              {form.m2 && (
                <p className="text-xs text-muted-foreground mt-1">Estimado: {(Number(form.m2) * 8).toLocaleString("es-ES")}€</p>
              )}
            </div>
          )}
          <Button type="submit" className="w-full gap-2" size="lg">
            <Send className="w-4 h-4" /> Enviar por WhatsApp
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
