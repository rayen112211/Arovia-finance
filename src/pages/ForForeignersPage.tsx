import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Globe, FileText, Building2, HelpCircle } from "lucide-react";

const foreignersImgUrl = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2669&auto=format&fit=crop";
const fallbackForeignersImgUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop";

export default function ForForeignersPage() {
  const { t } = useLanguage();
  const page = t.foreignersPage;

  const sections = [
    {
      title: page.whoWeHelpTitle,
      text: page.whoWeHelpText,
      icon: Globe,
    },
    {
      title: page.processTitle,
      text: page.processText,
      icon: CheckCircle2,
    },
    {
      title: page.banksTitle,
      text: page.banksText,
      icon: Building2,
    },
    {
      title: page.documentsTitle,
      text: page.documentsText,
      icon: FileText,
    },
  ];

  const faqs = [
    { q: page.faq1Q, a: page.faq1A },
    { q: page.faq2Q, a: page.faq2A },
    { q: page.faq3Q, a: page.faq3A },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={foreignersImgUrl}
            alt="Consultation for expats in Poland"
            className="w-full h-full object-cover opacity-15"
            onError={(e) => {
              e.currentTarget.src = fallbackForeignersImgUrl;
            }}
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/10 to-transparent" />

        <div className="relative section-padding section-container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow inline-flex items-center justify-center mb-6 text-gold">
                <span className="w-8 h-px bg-gold/50" />
                {page.label}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] text-primary-foreground leading-[1.06] mb-8">
                {page.title}
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
                {page.intro}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <Section className="py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-24">
          {sections.map((section, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="premium-card p-10 h-full flex flex-col transition-all duration-300 border-l-4 border-l-gold bg-white">
                <div className="mb-8 w-14 h-14 rounded-full bg-muted/60 flex items-center justify-center">
                  <section.icon className="text-primary" size={24} strokeWidth={1.25} />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-4">
                  {section.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {section.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ─── FAQ ─── */}
        <div className="max-w-4xl mx-auto border-t border-border/40 pt-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="text-primary" size={28} strokeWidth={1.25} />
              </div>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">
                {page.faqTitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="p-8 rounded-md bg-cream border border-border/40">
                  <h4 className="font-display text-xl text-foreground mb-3">{faq.q}</h4>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60" />
        <div className="relative section-padding section-container text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl text-primary-foreground leading-[1.1] mb-5">
              {page.ctaTitle}
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed text-lg">
              {page.ctaText}
            </p>
            <Button variant="outline" size="xl" asChild className="bg-transparent border-gold text-gold hover:bg-gold hover:text-primary">
              <Link to="/consultation">{page.ctaBtn}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
