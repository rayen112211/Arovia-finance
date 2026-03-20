import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Authentic stock image for Experience Hero
const warsawImgUrl = "https://images.unsplash.com/photo-1549749504-20412e84d436?q=80&w=2574&auto=format&fit=crop"; 
// Authentic portrait for advisor
const advisorImgUrl = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop";

export default function ExperiencePage() {
  const { t, language } = useLanguage();
  const exp = t.experience;

  const sections = [
    { title: exp.bankingTitle, text: exp.bankingText },
    { title: exp.transitionTitle, text: exp.transitionText },
    { title: exp.specialisationTitle, text: exp.specialisationText },
    { title: exp.polandTitle, text: exp.polandText },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={warsawImgUrl} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-primary/95" />
        </div>
        
        {/* Decorative line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

        <div className="relative section-padding section-container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow mb-6 inline-flex">
                <span className="w-8 h-px bg-gold" />
                {exp.label}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] text-primary-foreground leading-[1.06] mb-8">
                {exp.title}
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
                {exp.intro}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <Section className="py-24 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Image */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-32">
                <div className="relative rounded-sm aspect-[4/5] img-zoom mb-8 overflow-hidden border border-border/40">
                  <img 
                    src={advisorImgUrl} 
                    alt="Financial advisor" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-primary/5 transition-colors duration-500 hover:bg-transparent" />
                </div>
                
                {/* Highlight box */}
                <div className="bg-muted/50 p-6 rounded-sm border border-border">
                  <h4 className="font-semibold text-foreground mb-4">
                    {language === "pl" ? "Główne obszary wsparcia" : "Core Expertise"}
                  </h4>
                  <ul className="space-y-3">
                    {(language === "pl"
                      ? ["Kredyty hipoteczne", "Refinansowanie", "Klienci z działalnością gospodarczą", "Złożone sytuacje finansowe", "Dochody zagraniczne"]
                      : ["Home Purchase Mortgages", "Refinancing Strategy", "Self-Employed Clients", "Complex Credit Structures", "Expat & Foreign Income"]
                    ).map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground items-start">
                        <CheckCircle2 className="text-gold flex-shrink-0 w-4 h-4 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right Column: Story Text */}
          <div className="lg:col-span-3 pb-12">
            <div className="space-y-16">
              {sections.map((section, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="relative pl-6 lg:pl-10">
                    {/* Decorative side line */}
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-gold/50 to-transparent" />
                    
                    <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg text-pretty">
                      {section.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary" />
        </div>
        <div className="relative section-padding section-container text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="eyebrow justify-center mb-6 inline-flex">
              <span className="w-8 h-px bg-gold" />
              {t.ctaSection.title}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-[1.1] mb-5">
              {t.ctaSection.title}
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed">
              {t.ctaSection.description}
            </p>
            <Button variant="gold" size="xl" asChild className="group">
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
