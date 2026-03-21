import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { translations, type Language, type Translations } from "./translations";

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pl");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "pl" : "en"));
  }, []);

  const t: Translations = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
