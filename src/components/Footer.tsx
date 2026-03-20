import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: "/experience", label: t.nav.experience },
    { to: "/consultation", label: t.nav.consultation },
    { to: "/opinions", label: t.nav.opinions },
    { to: "/cooperation", label: t.nav.cooperation },
    { to: "/media", label: t.nav.media },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary text-primary-foreground" aria-label="Site footer">
      {/* Main footer */}
      <div className="section-padding section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="group flex flex-col items-start gap-0 mb-6">
              <div className="font-display text-3xl leading-none text-primary-foreground tracking-wide flex items-baseline transition-colors duration-300 hover:text-gold">
                Arovia<span className="text-gold ml-0.5">.</span>
              </div>
              <div className="text-[11px] font-sans font-medium text-primary-foreground/60 uppercase tracking-[0.25em] pl-0.5 mt-1.5 transition-colors duration-300">
                Finance
              </div>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs mt-3">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="mailto:info@aroviafinance.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 hover:-translate-y-1"
                aria-label="Email Arovia Finance"
              >
                <Mail size={16} strokeWidth={1.5} />
              </a>
              <a
                href="tel:+48123456789"
                className="w-10 h-10 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 hover:-translate-y-1"
                aria-label="Call Arovia Finance"
              >
                <Phone size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.12em] text-primary-foreground/40 mb-5">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-primary-foreground/65 hover:text-gold transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs uppercase tracking-[0.12em] text-primary-foreground/40 mb-5">
              {t.contactPreview.label}
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@aroviafinance.com"
                className="flex items-center gap-3 group"
              >
                <Mail size={14} strokeWidth={1.5} className="text-gold/70 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/65 group-hover:text-primary-foreground/90 transition-colors duration-200">
                  info@aroviafinance.com
                </span>
              </a>
              <a
                href="tel:+48123456789"
                className="flex items-center gap-3 group"
              >
                <Phone size={14} strokeWidth={1.5} className="text-gold/70 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/65 group-hover:text-primary-foreground/90 transition-colors duration-200">
                  +48 123 456 789
                </span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={14} strokeWidth={1.5} className="text-gold/70 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/65">
                  {t.contactPreview.locationValue}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-padding section-container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/35">
            © {currentYear} Arovia Finance. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <button className="text-xs text-primary-foreground/35 hover:text-primary-foreground/60 cursor-pointer transition-colors duration-200">
              {t.footer.privacy}
            </button>
            <button className="text-xs text-primary-foreground/35 hover:text-primary-foreground/60 cursor-pointer transition-colors duration-200">
              {t.footer.terms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
