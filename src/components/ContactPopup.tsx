import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin, X } from "lucide-react";

export function ContactPopup() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem("arovia_contact_dismissed_v3");
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
    sessionStorage.setItem("arovia_contact_dismissed_v3", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="bg-background border border-border/60 shadow-xl rounded-xl p-6 w-[340px] relative">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-1"
          aria-label="Close popup"
        >
          <X size={16} />
        </button>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-xl">✓</span>
            </div>
            <h4 className="font-display text-lg mb-2">
              {language === "pl" ? "Dziękujemy!" : "Thank You!"}
            </h4>
            <p className="text-sm text-muted-foreground">
              {language === "pl" 
                ? "Skontaktujemy się z Tobą wkrótce." 
                : "We will get back to you soon."}
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6 pr-4 pl-4 pt-2">
              <h4 className="font-display text-[17px] leading-snug font-medium text-foreground">
                {language === "pl" ? "Zamów bezpośrednią rozmowę z ekspertem" : "Request a direct call with our expert"}
              </h4>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="flex items-center border-b border-border/80 focus-within:border-primary transition-colors pb-1">
                <span className="text-muted-foreground mr-2 text-sm">+48</span>
                <input 
                  type="tel" 
                  placeholder={language === "pl" ? "Wpisz numer telefonu *" : "Enter phone number *"} 
                  className="w-full bg-transparent py-1.5 text-sm focus:outline-none placeholder:text-muted-foreground/60 text-foreground" 
                  required 
                />
              </div>
              
              <div className="border-b border-border/80 focus-within:border-primary transition-colors pb-1">
                <input 
                  type="text" 
                  placeholder={language === "pl" ? "Imię i nazwisko *" : "Full name *"} 
                  className="w-full bg-transparent py-1.5 text-sm focus:outline-none placeholder:text-muted-foreground/60 text-foreground" 
                  required 
                />
              </div>

              <div className="border-b border-border/80 focus-within:border-primary transition-colors pb-1">
                <input 
                  type="email" 
                  placeholder={language === "pl" ? "E-mail *" : "E-mail *"} 
                  className="w-full bg-transparent py-1.5 text-sm focus:outline-none placeholder:text-muted-foreground/60 text-foreground" 
                  required 
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3 rounded-full bg-primary text-primary-foreground text-[12px] font-semibold tracking-wider hover:bg-primary/90 transition-colors mt-6 uppercase"
              >
                {language === "pl" ? "Zamów rozmowę" : "Request Call"}
              </button>
            </form>

            <div className="mt-5 text-center">
              <p className="text-[10px] text-muted-foreground">
                {language === "pl" ? "Nie wysyłamy materiałów reklamowych." : "We do not send promotional materials."}
              </p>
            </div>
            
            <div className="mt-5 pt-4 border-t border-border/40 flex justify-center gap-6">
              <a href="tel:+48123456789" className="text-muted-foreground hover:text-primary transition-colors" title={language === "pl" ? "Zadzwoń" : "Call"}>
                <Phone size={14} />
              </a>
              <a href="mailto:info@aroviafinance.com" className="text-muted-foreground hover:text-primary transition-colors" title={language === "pl" ? "Napisz e-mail" : "Email"}>
                <Mail size={14} />
              </a>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors" title={language === "pl" ? "Strona kontaktu" : "Contact Page"} onClick={handleClose}>
                <MapPin size={14} />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
