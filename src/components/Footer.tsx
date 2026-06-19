import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.experience },
    { to: "/how-we-work", label: t.nav.cooperation },
    { to: "/international-clients", label: t.nav.foreigners },
    { to: "/knowledge-centre", label: t.nav.media },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary text-primary-foreground" aria-label="Site footer">
      <div className="section-padding section-container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand & Tagline */}
          <div className="lg:col-span-2">
            <Link to="/" className="group flex items-center mb-6 w-40 lg:w-48">
              <img src="/arovia-logo-white.png" alt="Arovia Finance" className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-90" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold tracking-wider text-xs uppercase mb-6">{t.nav.home} / {t.nav.experience}</h4>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-primary-foreground/65 hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-gold font-semibold tracking-wider text-xs uppercase mb-6">{t.nav.contact}</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+48733985458" className="flex items-start gap-3 group">
                <Phone size={18} className="text-gold mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-primary-foreground/50 uppercase tracking-wider">{t.contactPreview.phone}</span>
                  <span className="text-sm text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">+48 733 985 458</span>
                </div>
              </a>
              <a href="mailto:contact@aroviafinance.pl" className="flex items-start gap-3 group">
                <Mail size={18} className="text-gold mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-primary-foreground/50 uppercase tracking-wider">{t.contactPreview.email}</span>
                  <span className="text-sm text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">contact@aroviafinance.pl</span>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-primary-foreground/50 uppercase tracking-wider">{t.contactPreview.location}</span>
                  <span className="text-sm text-primary-foreground/80">{t.contactPreview.locationValue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 bg-[hsl(222,47%,8%)]">
        <div className="section-padding section-container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {currentYear} Arovia Finance. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 cursor-pointer transition-colors">
              {t.footer.privacy}
            </span>
            <span className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 cursor-pointer transition-colors">
              {t.footer.terms}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
