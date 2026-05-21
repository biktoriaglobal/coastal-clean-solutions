import { Check, MessageCircle, Globe, Zap, BadgeCheck, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";

const buildPlans = (t: (k: string) => string) => [
  {
    name: t("pricing.tourist.name"),
    price: t("pricing.tourist.price"),
    unit: t("pricing.tourist.unit"),
    features: [
      t("checklist.i1"),
      t("checklist.i6"),
      t("checklist.i8"),
      t("hero.badge"),
    ],
    extras: [t("calc.tourist.sub")],
    highlight: true,
    badge: t("pricing.tourist.popular"),
  },
  {
    name: t("pricing.postobra.name"),
    price: "8€",
    unit: "/ m²",
    features: [
      t("checklist.i2"),
      t("checklist.i5"),
      t("checklist.i3"),
      t("services.postobra.note"),
    ],
    highlight: false,
    badge: null as string | null,
  },
  {
    name: t("pricing.community.name"),
    price: t("pricing.community.price"),
    unit: "",
    features: [
      t("services.community.note"),
      t("checklist.i3"),
      t("services.office.note"),
      t("checklist.i6"),
    ],
    highlight: false,
    badge: null as string | null,
  },
  {
    name: t("pricing.home.name"),
    price: t("pricing.home.price"),
    unit: "",
    features: [
      t("checklist.i3"),
      t("checklist.i2"),
      t("checklist.i4"),
      t("services.community.note"),
    ],
    highlight: false,
    badge: t("pricing.home.new"),
  },
];

const PricingSection = () => {
  const { t } = useLang();
  const plans = buildPlans(t);
  return (
  <section id="tarifas" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
    <div className="container relative">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
        >
          <Zap className="w-4 h-4" /> {t("pricing.tag")}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
        >
          {t("pricing.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-xl mx-auto text-lg"
        >
          {t("pricing.subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-secondary/15 text-secondary border border-secondary/30 font-bold text-sm"
        >
          <BadgeCheck className="w-5 h-5" />
          {t("pricing.badge")}
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`rounded-2xl p-7 flex flex-col relative overflow-hidden transition-all duration-300 ${
              p.highlight
                ? "bg-hero-gradient text-primary-foreground shadow-card-hover ring-2 ring-primary/30 glow-primary"
                : "bg-card shadow-card hover:shadow-card-hover border border-border/50"
            }`}
          >
            {p.badge && (
              <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {p.badge}
              </span>
            )}
            <h3 className={`font-display text-lg font-bold mb-2 ${p.highlight ? "text-primary-foreground" : "text-foreground"}`}>
              {p.name}
            </h3>
            <div className="mb-6">
              <span className={`text-3xl font-bold ${p.highlight ? "text-primary-foreground" : "text-primary"}`}>{p.price}</span>
              <span className={`text-sm ml-1 ${p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.unit}</span>
            </div>
            <ul className="space-y-2.5 mb-3 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className={`w-4 h-4 shrink-0 ${p.highlight ? "text-secondary" : "text-accent"}`} />
                  <span className={p.highlight ? "text-primary-foreground/90" : "text-foreground/80"}>{f}</span>
                </li>
              ))}
            </ul>
            {p.extras && p.extras.length > 0 && (
              <div className="mb-6 space-y-1">
                {p.extras.map((e) => (
                  <p key={e} className={`text-xs italic pl-6 ${p.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>• {e}</p>
                ))}
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              <Button
                className="w-full gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-white border-0"
                asChild
              >
                <a
                  href={`https://api.whatsapp.com/send/?phone=34601902204&text=${encodeURIComponent(`Hola! Me interesa el servicio de ${p.name}`)}&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </Button>
              <Button
                className={`w-full gap-2 bg-[hsl(217,91%,50%)] hover:bg-[hsl(217,91%,42%)] text-white border-0`}
                asChild
              >
                <a href="#contacto">
                  <Globe className="w-4 h-4" /> Contacto Web
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default PricingSection;
