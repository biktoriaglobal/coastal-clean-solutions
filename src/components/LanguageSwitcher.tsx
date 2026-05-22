import { ChevronDown } from "lucide-react";
import { useLang, LANGS, Lang } from "@/i18n/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = ({ scrolled }: { scrolled: boolean }) => {
  const { lang, setLang } = useLang();
  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 border text-xs font-bold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
          scrolled
            ? "bg-hero-gradient text-primary-foreground border-transparent shadow-md"
            : "bg-primary-foreground/15 text-primary-foreground border-primary-foreground/30 backdrop-blur-md hover:bg-primary-foreground/25"
        }`}
        aria-label="Language selector"
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown className="w-3 h-3 opacity-80" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[7rem]">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code as Lang)}
            className={`gap-2 text-xs font-semibold cursor-pointer ${
              lang === l.code ? "bg-primary/10 text-primary" : ""
            }`}
          >
            <span className="text-sm">{l.flag}</span>
            <span>{l.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
