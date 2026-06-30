import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useDocumentMetadata } from "@/hooks/useDocumentMetadata";

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

  const title = language === "pl"
    ? "Kontakt | Biuro Arovia Finance w Warszawie"
    : "Contact Us | Arovia Finance Warsaw Office";
  const desc = language === "pl"
    ? "Skontaktuj się z niezależnymi doradcami: Jay Arora i Anna Jakimiak. Umów się na profesjonalną konsultację kredytową w Warszawie."
    : "Get in touch with independent advisors Jay Arora & Anna Jakimiak. Contact our Warsaw office for expert financial consultations.";
  useDocumentMetadata(title, desc);

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
                <h1 className="font-display text-[2.8rem] sm:text-[3.6rem] lg:text-[4.5rem] leading-[1.06] text-foreground mb-6">
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
                <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-6">
                  {language === 'pl' ? 'Skontaktuj się z nami' : 'Get in Touch'}
                </h3>
                <div className="space-y-6 text-foreground/80 text-[15px] lg:text-[16px] leading-relaxed">
                  <p className="font-medium text-foreground text-lg leading-snug">
                    {language === 'pl'
                      ? 'Szukasz profesjonalnej porady finansowej lub wsparcia kredytowego?'
                      : 'Looking for expert financial advice or loan support?'}
                  </p>
                  <p>
                    {language === 'pl'
                      ? 'Napisz nam, czego potrzebujesz — jako mały, dedykowany zespół w Arovia Finance stosujemy indywidualne podejście do każdego zapytania. Dokładnie przeanalizujemy Twoją sytuację i wrócimy do Ciebie z jasnymi, praktycznymi opcjami i kolejnymi krokami.'
                      : 'Tell us what you need — as a small, dedicated team at Arovia Finance, we take a personal approach to every enquiry and will carefully review your situation before getting back to you with clear, practical options and next steps.'}
                  </p>
                  <p>
                    {language === 'pl'
                      ? 'Bez call center. Bez szablonowych porad. Po prostu proste wskazówki dopasowane do Ciebie.'
                      : 'No call centres. No generic advice. Just straightforward guidance tailored to you.'}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-border/40 space-y-6">
                  {/* Phone Item */}
                  <div className="flex items-start gap-4">
                    <Phone className="text-gold mt-1 flex-shrink-0" size={20} />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <span className="text-[13px] font-medium text-muted-foreground">{language === 'pl' ? 'Jay Arora (angielski)' : 'Jay Arora (English)'}</span>
                        <a href="tel:+48574100669" className="text-[16px] font-semibold text-foreground hover:text-gold transition-colors">+48 574 100 669</a>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-medium text-muted-foreground">{language === 'pl' ? 'Anna Jakimiak (polski i angielski)' : 'Anna Jakimiak (Polish & English)'}</span>
                        <a href="tel:+48695660944" className="text-[16px] font-semibold text-foreground hover:text-gold transition-colors">+48 695 660 944</a>
                      </div>
                    </div>
                  </div>

                  {/* Email Item */}
                  <div className="flex items-start gap-4">
                    <Mail className="text-gold mt-1 flex-shrink-0" size={20} />
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium text-muted-foreground">{language === 'pl' ? 'E-mail' : 'Email'}</span>
                      <a href="mailto:info@aroviafinance.com" className="text-[16px] font-semibold text-foreground hover:text-gold transition-colors">info@aroviafinance.com</a>
                    </div>
                  </div>

                  {/* Address Item */}
                  <div className="flex items-start gap-4">
                    <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium text-muted-foreground">{language === 'pl' ? 'Adres' : 'Address'}</span>
                      <span className="text-[16px] font-semibold text-foreground leading-normal">
                        {t.contactPreview.locationValue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Column 2: Send Us a Message ── */}
            <ScrollReveal direction="up" delay={200}>
              <div>
                <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-8">{t.contact.sendMessage}</h2>
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
                <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-8">{t.contact.faqTitle}</h2>
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
