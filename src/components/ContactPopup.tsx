import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin, X } from "lucide-react";

export function ContactPopup() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem("arovia_contact_dismissed");
    if (dismissed) {
      setHasDismissed(true);
      return;
    }

    // Trigger popup when scrolling past 50%
    const handleScroll = () => {
      if (hasDismissed || isOpen) return;
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollY / (docHeight - winHeight);
      
      if (scrollPercent > 0.5) {
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasDismissed, isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setHasDismissed(true);
    sessionStorage.setItem("arovia_contact_dismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="bg-background border border-border/60 shadow-xl rounded-md p-5 w-80 relative">
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors p-1"
          aria-label="Close popup"
        >
          <X size={16} />
        </button>
        
        <h4 className="font-display text-lg mb-2 pr-6">
          {language === "pl" ? "Potrzebujesz pomocy z kredytem?" : "Need Mortgage Assistance?"}
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          {language === "pl" 
            ? "Skontaktuj się z nami, aby szybko ułożyć plan działania." 
            : "Get in touch with us to outline an actionable plan."}
        </p>

        <div className="space-y-3">
          <a href="tel:+48123456789" className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors group">
            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Phone size={14} className="text-primary" />
            </div>
            +48 123 456 789
          </a>
          <a href="mailto:info@aroviafinance.com" className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors group">
            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Mail size={14} className="text-primary" />
            </div>
            info@aroviafinance.com
          </a>
          <Link to="/contact" className="flex items-center justify-center w-full py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors mt-4" onClick={handleClose}>
            {language === "pl" ? "Porozmawiajmy" : "Let's Talk"}
          </Link>
        </div>
      </div>
    </div>
  );
}
