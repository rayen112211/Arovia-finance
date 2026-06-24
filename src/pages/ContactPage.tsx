import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const officeImgUrl = "/anna_and_robbie1.jpg";

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-foreground/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-4" : "max-h-0"}`}
      >
        <p className="text-sm text-foreground/60 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const { t, language } = useLanguage();

  const faqItems = [
    {
      q: t.contact.faq1Q,
      a: t.contact.faq1A,
    },
    {
      q: t.contact.faq2Q,
      a: t.contact.faq2A,
    },
    {
      q: t.contact.faq3Q,
      a: t.contact.faq3A,
    },
    {
      q: t.contact.faq4Q,
      a: t.contact.faq4A,
    },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-white border-b border-border/40 overflow-hidden">
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[320px] items-center">
            <div className="py-12 lg:py-16 pr-0 lg:pr-16">
              <ScrollReveal>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-foreground mb-6">
                  {t.contact.heroTitle}
                </h1>
                <div className="w-10 h-px bg-gold mb-6" />
                <p className="text-foreground/80 text-base leading-relaxed mb-4">
                  {t.contact.heroDesc}
                </p>
                <p className="text-foreground/60 text-sm leading-relaxed max-w-md">
                  {t.contact.heroSub}
                </p>
              </ScrollReveal>
            </div>
            <div className="hidden lg:block relative h-full min-h-[320px]">
              <img
                src={officeImgUrl}
                alt="Arovia Finance Warsaw Office"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "/anna_and_robbie1.jpg"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3-COLUMN CONTENT ─── */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">

            {/* ── Column 1: Get in Touch ── */}
            <ScrollReveal direction="up" delay={100}>
              <div>
                <h2 className="font-display text-2xl text-foreground mb-8">{t.contact.getInTouch}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Phone size={20} strokeWidth={1.5} className="text-gold" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs uppercase tracking-[0.1em] text-foreground/50 mb-0.5">{t.contact.phoneLabel}</p>
                      <a href="tel:+48574100669" className="group flex flex-col">
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          +48 574 100 669
                        </span>
                        <span className="text-xs text-muted-foreground">{language === 'pl' ? 'Jay Arora (klienci anglojęzyczni)' : 'Jay Arora (English-speaking clients)'}</span>
                      </a>
                      <a href="tel:+48695660944" className="group flex flex-col">
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          +48 695 660 944
                        </span>
                        <span className="text-xs text-muted-foreground">{language === 'pl' ? 'Anna Jakimiak (klienci polsko- i anglojęzyczni)' : 'Anna Jakimiak (Polish- and English-speaking clients)'}</span>
                      </a>
                    </div>
                  </div>

                  <a href="mailto:info@aroviafinance.com" className="flex items-start gap-4 group">
                    <div className="w-14 h-14 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/15 group-hover:border-gold/40 transition-colors duration-300 shadow-sm">
                      <Mail size={20} strokeWidth={1.5} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-foreground/50 mb-0.5">{t.contact.emailLabel}</p>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        info@aroviafinance.com
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <MapPin size={20} strokeWidth={1.5} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-foreground/50 mb-0.5">{t.contact.addressLabel}</p>
                      <span className="text-sm font-medium text-foreground">Warsaw, Poland</span>
                    </div>
                  </div>

                  <a href="#" className="flex items-start gap-4 group">
                    <div className="w-14 h-14 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/15 group-hover:border-gold/40 transition-colors duration-300 shadow-sm">
                      <Linkedin size={20} strokeWidth={1.5} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-foreground/50 mb-0.5">{t.contact.linkedinLabel}</p>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        Arovia Finance
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Column 2: Send Us a Message ── */}
            <ScrollReveal direction="up" delay={200}>
              <div>
                <h2 className="font-display text-2xl text-foreground mb-8">{t.contact.sendMessage}</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input
                      type="text"
                      className="form-input"
                      placeholder={t.contactPreview.name}
                      required
                      id="contact-name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-input"
                      placeholder={t.contactPreview.email}
                      required
                      id="contact-email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder={t.contactPreview.phone}
                      id="contact-phone"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={5}
                      className="form-textarea"
                      placeholder={t.contactPreview.helpText}
                      required
                      id="contact-message"
                    />
                  </div>
                  <Button
                    variant="premium"
                    size="lg"
                    type="submit"
                    className="w-full rounded-md mt-2"
                    id="contact-submit"
                  >
                    {t.contact.submitBtn}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* ── Column 3: FAQ ── */}
            <ScrollReveal direction="up" delay={300}>
              <div>
                <h2 className="font-display text-2xl text-foreground mb-8">{t.contact.faqTitle}</h2>
                <div>
                  {faqItems.map((item, i) => (
                    <AccordionItem key={i} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
}
