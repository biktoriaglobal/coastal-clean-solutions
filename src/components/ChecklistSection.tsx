import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";

const ChecklistSection = () => {
  const { t } = useLang();
  const items = [
    t("checklist.i1"), t("checklist.i2"), t("checklist.i3"), t("checklist.i4"),
    t("checklist.i5"), t("checklist.i6"), t("checklist.i7"), t("checklist.i8"),
  ];
  return (
  <section className="py-20 bg-muted/50">
    <div className="container max-w-3xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          {t("checklist.title")}
        </h2>
        <p className="text-muted-foreground">
          {t("checklist.subtitle")}
        </p>
      </div>
      <div className="bg-card rounded-xl shadow-card p-8">
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
  );
};

export default ChecklistSection;
