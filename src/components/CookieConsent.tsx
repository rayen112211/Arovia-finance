import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    localStorage.setItem("cookieConsent", choice);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-primary text-primary-foreground border-t border-gold/30 shadow-[0_-8px_32px_rgba(0,0,0,0.15)] animate-fade-up">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="text-center md:text-left max-w-3xl">
          <p className="text-xs sm:text-sm text-primary-foreground/90 leading-relaxed">
            {language === "pl" ? (
              <>
                Używamy plików cookies, aby ułatwić Ci korzystanie z naszego serwisu. Przeglądając naszą stronę, wyrażasz zgodę na ich używanie. Szczegółowe informacje dotyczące przetwarzania danych znajdziesz w naszej{" "}
                <Link to="/privacy-policy" className="text-gold underline hover:opacity-85 transition-opacity">
                  Polityce Prywatności
                </Link>
                .
              </>
            ) : (
              <>
                We use cookies to improve your experience on our website. By browsing this website, you agree to our use of cookies. For more details on how we handle your data, please see our{" "}
                <Link to="/privacy-policy" className="text-gold underline hover:opacity-85 transition-opacity">
                  Privacy Policy
                </Link>
                .
              </>
            )}
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto justify-center sm:justify-start">
          <button
            onClick={() => handleChoice("declined")}
            className="px-4 py-2 text-xs font-semibold text-primary-foreground/75 hover:text-primary-foreground transition-colors"
          >
            {language === "pl" ? "Odrzuć" : "Decline"}
          </button>
          <Button
            variant="premium"
            className="px-6 py-2 h-auto text-xs font-semibold rounded-md shadow-sm"
            onClick={() => handleChoice("accepted")}
          >
            {language === "pl" ? "Akceptuj" : "Accept"}
          </Button>
        </div>
      </div>
    </div>
  );
}
