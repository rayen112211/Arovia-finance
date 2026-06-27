import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t, language } = useLanguage();
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Tagline */}
          <div className="lg:col-span-4">
            <Link to="/" className="group flex items-center mb-6 w-40 lg:w-48">
              <img src="/arovia-logo-white.png" alt="Arovia Finance" className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-90" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
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
          <div className="lg:col-span-5">
            <h4 className="text-gold font-semibold tracking-wider text-xs uppercase mb-6">{t.nav.contact}</h4>
            <div className="flex flex-col gap-5">
              {/* Phone item */}
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-gold mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-medium text-primary-foreground/60">{language === 'pl' ? 'Jay Arora (angielski)' : 'Jay Arora (English)'}</span>
                    <a href="tel:+48574100669" className="text-[15.5px] font-semibold text-primary-foreground/95 hover:text-gold transition-colors whitespace-nowrap">+48 574 100 669</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-medium text-primary-foreground/60">{language === 'pl' ? 'Anna Jakimiak (polski i angielski)' : 'Anna Jakimiak (Polish & English)'}</span>
                    <a href="tel:+48695660944" className="text-[15.5px] font-semibold text-primary-foreground/95 hover:text-gold transition-colors whitespace-nowrap">+48 695 660 944</a>
                  </div>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-gold mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-primary-foreground/60">{language === 'pl' ? 'E-mail' : 'Email'}</span>
                  <a href="mailto:info@aroviafinance.com" className="text-[15.5px] font-semibold text-primary-foreground/95 hover:text-gold transition-colors whitespace-nowrap">info@aroviafinance.com</a>
                </div>
              </div>

              {/* Address item */}
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-primary-foreground/60">{language === 'pl' ? 'Adres' : 'Address'}</span>
                  <span className="text-[15.5px] font-semibold text-primary-foreground/95 leading-normal">
                    {t.contactPreview.locationValue}
                  </span>
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
