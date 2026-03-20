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
      name: "Michał Kowalski",
      role: "Business Owner, Warsaw",
      initials: "MK",
      text: "Arovia Finance understood our complex business structure from the start. They secured us a mortgage that three other brokers said was impossible. The level of expertise and patience was exceptional throughout the entire process.",
      rating: 5,
    },
    {
      name: "Anna Wiśniewska",
      role: "First Home Buyer",
      initials: "AW",
      text: "As a first-time buyer, the mortgage process felt overwhelming. Arovia made everything simple and transparent. Every step was explained clearly, and I always knew exactly where things stood. Truly outstanding service.",
      rating: 5,
    },
    {
      name: "Tomasz & Katarzyna Nowak",
      role: "Property Investors",
      initials: "TN",
      text: "Professional, thorough, and genuinely invested in finding the best outcome. The attention to detail was beyond anything we've experienced with other advisors. We've now used Arovia for three separate property purchases.",
      rating: 5,
    },
    {
      name: "Paweł Zieliński",
      role: "Self-Employed Consultant",
      initials: "PZ",
      text: "Being self-employed made getting a mortgage incredibly difficult. Arovia Finance knew exactly how to present my financial situation to lenders. They found us an excellent deal when others had turned us away.",
      rating: 5,
    },
    {
      name: "Marta Dąbrowska",
      role: "Refinancing Client",
      initials: "MD",
      text: "We saved a significant amount on our monthly repayments after Arovia reviewed our existing loan structure. The process was smooth and they handled all the paperwork. Highly recommended.",
      rating: 5,
    },
    {
      name: "Robert & Ewa Jankowski",
      role: "Home Buyers, Kraków",
      initials: "RJ",
      text: "Arovia Finance went above and beyond to help us secure our dream home. Their understanding of how banks make decisions gave us a genuine advantage. We felt supported every step of the way.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-primary overflow-hidden">
        {/* Abstract dark gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-light to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        {/* Decorative line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

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
      <Section className="py-20 lg:py-28 relative -mt-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="premium-card p-8 h-full flex flex-col group bg-card">
                <div className="mb-5 flex justify-between items-start">
                  <Quote size={32} className="text-gold/40 group-hover:text-gold/60 transition-colors duration-300" strokeWidth={1} />
                  <div className="flex gap-0.5 mt-2">
                    {[...Array(item.rating)].map((_, j) => (
                      <span key={j} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                </div>
                
                <p className="text-base text-muted-foreground leading-relaxed flex-1 mb-8 italic">
                  "{item.text}"
                </p>
                
                <div className="pt-5 border-t border-border flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                    <span className="text-sm font-semibold text-primary-foreground group-hover:text-primary">
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
        {/* Abstract dark background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-navy-light to-primary" />
        <div className="absolute inset-0 bg-primary/40" />
        {/* Soft grid/line effect */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

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
