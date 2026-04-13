import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function FloatingButton() {
  const { language } = useLanguage();

  return (
    <a
      href="tel:+48123456789"
      className="fixed bottom-6 right-6 z-40 bg-primary text-gold p-4 rounded-full shadow-2xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 group ring-4 ring-background flex items-center justify-center"
      aria-label={language === "pl" ? "Zadzwoń do nas" : "Call us"}
    >
      <Phone size={24} className="group-hover:animate-pulse" />
    </a>
  );
}
