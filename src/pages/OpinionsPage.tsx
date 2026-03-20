import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";

export default function OpinionsPage() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Private Client",
      role: "Business Owner, Warsaw",
      initials: "MK",
      text: "Arovia Finance understood our business structure from the first meeting and guided us through each stage without delays.",
      rating: 5,
    },
    {
      name: "Private Client",
      role: "First Home Buyer",
      initials: "AW",
      text: "As first-time buyers, we needed clear guidance. Everything was explained in plain language and the process felt fully under control.",
      rating: 5,
    },
    {
      name: "Private Client",
      role: "Property Investors",
      initials: "TN",
      text: "Professional support, strong communication, and very good attention to detail. We felt confident from document review to final decision.",
      rating: 5,
    },
    {
      name: "Private Client",
      role: "Self-Employed Consultant",
      initials: "PZ",
      text: "Our self-employed income was properly structured for lender assessment, which made a difficult case straightforward.",
      rating: 5,
    },
    {
      name: "Private Client",
      role: "Refinancing Client",
      initials: "MD",
      text: "Refinancing options were presented clearly and the full process was smooth, including communication with the bank and documents.",
      rating: 5,
    },
    {
      name: "Private Client",
      role: "Home Buyers, Kraków",
      initials: "RJ",
      text: "A practical, calm approach and strong lender-side knowledge made the entire mortgage journey much easier.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-primary overflow-hidden">
        {/* Abstract dark gradient bg - simplified */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        
        {/* Decorative line */}
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/10 to-transparent" />

        <div className="relative section-padding section-container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow mb-6 inline-flex">
                <span className="w-8 h-px bg-gold" />
                {t.opinionsPage.label}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] text-primary-foreground leading-[1.06] mb-8">
                {t.opinionsPage.title}
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
                {t.opinionsPage.intro}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS GRID ─── */}
      <Section className="py-20 lg:py-28 relative -mt-14 lg:-mt-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-card rounded-md p-8 h-full flex flex-col group border border-border/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.02)] transition-shadow duration-500">
                <div className="mb-5 flex justify-between items-start">
                  <Quote size={32} className="text-foreground/10 group-hover:text-gold/40 transition-colors duration-500" strokeWidth={1} />
                  <div className="flex gap-0.5 mt-2">
                    {[...Array(item.rating)].map((_, j) => (
                      <span key={j} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                </div>
                
                <p className="text-base text-muted-foreground leading-relaxed flex-1 mb-8 italic">
                  "{item.text}"
                </p>
                
                <div className="pt-5 border-t border-border/40 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-muted/60 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-500">
                    <span className="text-sm font-semibold text-foreground/70 group-hover:text-gold transition-colors duration-500">
                      {item.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{item.name}</div>
                    <div className="text-[13px] text-muted-foreground">{item.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        {/* Abstract dark background - simplified */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-80" />
        
        {/* Soft line effect */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-border/10 to-transparent" />

        <div className="relative section-padding section-container text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="eyebrow justify-center mb-6 inline-flex">
              <span className="w-8 h-px bg-gold" />
              {t.ctaSection.title}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-[1.1] mb-5">
              {t.ctaSection.title}
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed text-lg">
              {t.ctaSection.description}
            </p>
            <Button variant="gold" size="xl" asChild className="group tracking-wide">
              <Link to="/consultation">
                {t.ctaSection.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
