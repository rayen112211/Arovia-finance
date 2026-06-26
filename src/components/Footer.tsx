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
            <div className="flex flex-col gap-6">
              {/* Phone item */}
              <div className="grid grid-cols-[24px_80px_1fr] items-start gap-x-3">
                <Phone size={22} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-[13px] text-gold/80 font-bold uppercase tracking-wider mt-1.5">{language === 'pl' ? 'Telefon' : 'Phone'}</span>
                <div className="flex flex-col gap-3">
                  <a href="tel:+48574100669" className="group flex flex-col">
                    <span className="text-[16px] font-semibold text-primary-foreground/95 group-hover:text-gold transition-colors">+48 574 100 669</span>
                    <span className="text-[11.5px] text-primary-foreground/60">{language === 'pl' ? 'Jay Arora (angielski)' : 'Jay Arora (English)'}</span>
                  </a>
                  <a href="tel:+48695660944" className="group flex flex-col">
                    <span className="text-[16px] font-semibold text-primary-foreground/95 group-hover:text-gold transition-colors">+48 695 660 944</span>
                    <span className="text-[11.5px] text-primary-foreground/60">{language === 'pl' ? 'Anna Jakimiak (polski i angielski)' : 'Anna Jakimiak (Polish & English)'}</span>
                  </a>
                </div>
              </div>

              {/* Email item */}
              <a href="mailto:info@aroviafinance.com" className="grid grid-cols-[24px_80px_1fr] items-start gap-x-3 group">
                <Mail size={22} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-[13px] text-gold/80 font-bold uppercase tracking-wider mt-1.5">{language === 'pl' ? 'E-mail' : 'Email'}</span>
                <div className="flex flex-col">
                  <span className="text-[16px] font-semibold text-primary-foreground/95 group-hover:text-gold transition-colors">info@aroviafinance.com</span>
                </div>
              </a>

              {/* Address item */}
              <div className="grid grid-cols-[24px_80px_1fr] items-start gap-x-3">
                <MapPin size={22} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-[13px] text-gold/80 font-bold uppercase tracking-wider mt-1.5">{language === 'pl' ? 'Adres' : 'Address'}</span>
                <div className="flex flex-col">
                  <span className="text-[16px] font-semibold text-primary-foreground/95 leading-relaxed">{t.contactPreview.locationValue}</span>
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
