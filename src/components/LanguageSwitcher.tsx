import { Globe } from "lucide-react";
import { useLang, LANGS, Lang } from "@/i18n/LanguageContext";

const LanguageSwitcher = ({ scrolled }: { scrolled: boolean }) => {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full px-1 py-1 border transition-colors duration-300 ${
        scrolled
          ? "bg-muted border-border"
          : "bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-md"
      }`}
      role="group"
      aria-label="Language selector"
    >
      <Globe className={`w-3.5 h-3.5 ml-1.5 ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`} />
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code as Lang)}
          aria-pressed={lang === l.code}
          className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${
            lang === l.code
              ? "bg-hero-gradient text-primary-foreground shadow-sm"
              : scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-primary-foreground/70 hover:text-primary-foreground"
          }`}
        >
          {l.flag} {l.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
