import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/how-we-work", label: "How We Work" },
    { to: "/international-clients", label: "International Clients" },
    { to: "/knowledge-centre", label: "Knowledge Centre" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground" aria-label="Site footer">
      {/* Main footer */}
      <div className="section-padding section-container py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-8 justify-between">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="group flex items-center mb-4 w-36 lg:w-44">
              <img src="/arovia-logo-white.png" alt="Arovia Finance" className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-90" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2" aria-label="Footer navigation">
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

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-padding section-container py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {currentYear} Arovia Finance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 cursor-pointer transition-colors">
              Terms &amp; Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
