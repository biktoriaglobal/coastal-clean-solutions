import beforeAfterImg from "@/assets/before-after.jpg";
import { useLang } from "@/i18n/LanguageContext";

const BeforeAfterSection = () => {
  const { t } = useLang();
  return (
  <section className="py-24">
    <div className="container max-w-5xl">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">{t("ba.tag")}</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">{t("ba.title")}</h2>
        <p className="text-muted-foreground text-lg">{t("ba.subtitle")}</p>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-card-hover">
        <img src={beforeAfterImg} alt={t("ba.title")} className="w-full h-auto" />
      </div>
      <div className="flex justify-center gap-8 mt-8">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-destructive" />
          <span className="text-sm font-medium text-muted-foreground">{t("ba.before")}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-sm font-medium text-muted-foreground">{t("ba.after")}</span>
        </div>
      </div>
    </div>
  </section>
  );
};

export default BeforeAfterSection;
