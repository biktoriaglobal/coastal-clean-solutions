import { useState } from "react";
import { Send, Upload, X, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLang } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", m2: "", message: "" });
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hola! Soy ${form.name}.`,
      `Necesito: ${form.service}${form.m2 ? ` (${form.m2} m²)` : ""}.`,
      form.email ? `Email: ${form.email}` : "",
      `Teléfono: ${form.phone}`,
      form.message ? `Mensaje: ${form.message}` : "",
      photo ? `(Foto adjunta enviada por web)` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://api.whatsapp.com/send/?phone=34601902204&text=${encodeURIComponent(lines)}&type=phone_number&app_absent=0`, "_blank");
    toast({ title: t("contact.toast.title"), description: t("contact.toast.desc") });
  };

  return (
    <section id="contacto" className="py-24 bg-coast-gradient">
      <div className="container max-w-xl">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">{t("contact.tag")}</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground text-lg">{t("contact.subtitle")}</p>
          <div className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full bg-secondary/15 text-secondary border border-secondary/30 font-bold text-sm">
            <BadgeCheck className="w-4 h-4" />
            {t("contact.badge")}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card-hover p-8 md:p-10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.name")} *</label>
              <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t("contact.name.placeholder")} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.phone")} *</label>
              <Input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="601 902 204" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.email")}</label>
            <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="limpieza@max-efficiency.es" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.service")} *</label>
            <Select onValueChange={(v) => setForm({ ...form, service: v })}>
              <SelectTrigger><SelectValue placeholder={t("contact.service.placeholder")} /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Limpieza Turística">{t("services.tourist.title")}</SelectItem>
                <SelectItem value="Post-Obra">{t("services.postobra.title")}</SelectItem>
                <SelectItem value="Comunidad de Vecinos">{t("services.community.title")}</SelectItem>
                <SelectItem value="Local / Oficina">{t("services.office.title")}</SelectItem>
                <SelectItem value="Limpieza a Domicilio">{t("services.home.title")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {form.service === "Post-Obra" && (
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.m2")}</label>
              <Input type="number" min="1" value={form.m2} onChange={(e) => setForm({ ...form, m2: e.target.value })} placeholder={t("calc.m2.placeholder")} />
              {form.m2 && (
                <p className="text-xs text-muted-foreground mt-1">{t("contact.estimated")}: {(Number(form.m2) * 8).toLocaleString("es-ES")}€</p>
              )}
            </div>
          )}
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.message")}</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t("contact.message.placeholder")}
              rows={4}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.photo")}</label>
            {photoPreview ? (
              <div className="relative inline-block">
                <img src={photoPreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg border border-border" />
                <button
                  type="button"
                  onClick={removePhoto}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <label className="flex items-center justify-center gap-2 w-full h-24 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-colors">
                <Upload className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{t("contact.photo.upload")}</span>
                <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
              </label>
            )}
          </div>
          <Button type="submit" className="w-full gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-white border-0" size="lg">
            <Send className="w-4 h-4" /> {t("contact.submit")}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            {t("contact.alt")} <a href="mailto:limpieza@max-efficiency.es" className="text-primary underline">limpieza@max-efficiency.es</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
