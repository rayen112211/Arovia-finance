import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const { t, language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/experience", label: t.nav.experience },
    { to: "/consultation", label: t.nav.consultation },
    { to: "/opinions", label: t.nav.opinions },
    { to: "/media", label: t.nav.media },
    { to: "/cooperation", label: t.nav.cooperation },
    { to: "/contact", label: t.nav.contact },
  ];

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 nav-blur border-b border-border/50 shadow-[0_4px_16px_rgba(0,0,0,0.02)] py-0"
          : "bg-background/60 nav-blur border-b border-transparent py-2"
      }`}
    >
      <div className="section-padding section-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="group flex flex-col items-center gap-0 w-32"
          aria-label="Arovia Finance — Home"
        >
          <div className="font-display text-[28px] lg:text-[32px] leading-none text-navy tracking-wide uppercase transition-colors duration-300">
            Arovia
          </div>
          <div className="flex items-center gap-1.5 mt-1 w-full opacity-90 group-hover:opacity-100 transition-opacity">
            <div className="h-px bg-gold flex-grow"></div>
            <div className="text-[9px] lg:text-[10px] font-sans font-semibold text-gold uppercase tracking-[0.2em]">
              Finance
            </div>
            <div className="h-px bg-gold flex-grow"></div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200 group ${
                isActive(link.to)
                  ? "text-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.label}
              {/* Active indicator */}
              <span
                className={`absolute bottom-0 left-3 right-3 h-px bg-foreground transition-transform duration-200 origin-left ${
                  isActive(link.to) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden xl:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-muted/60"
            aria-label={`Switch to ${language === "en" ? "Polish" : "English"}`}
          >
            {language === "en" ? "PL" : "EN"}
          </button>
          <Button size="lg" className="text-sm px-6 bg-gold text-navy hover:bg-gold/90 transition-colors shadow-none rounded-md" asChild>
            <Link to="/consultation">{t.nav.cta}</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden p-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/40"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`block transition-all duration-300 ${mobileOpen ? "rotate-90" : "rotate-0"}`}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/98 nav-blur border-b border-border">
          <nav className="section-padding section-container flex flex-col gap-0.5 py-4" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2.5 px-3 rounded-md transition-colors duration-200 ${
                  isActive(link.to)
                    ? "text-foreground bg-muted"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3 mt-2 border-t border-border">
              <button
                onClick={toggleLanguage}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded hover:bg-muted/40"
              >
                {language === "en" ? "PL" : "EN"}
              </button>
              <Button size="lg" asChild className="flex-1 text-sm bg-gold text-navy hover:bg-gold/90 rounded-md">
                <Link to="/consultation" onClick={() => setMobileOpen(false)}>
                  {t.nav.cta}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
