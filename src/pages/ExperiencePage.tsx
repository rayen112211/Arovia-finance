import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import advisorImg from "@/assets/advisor-portrait.jpg";
import warsawImg from "@/assets/warsaw-skyline.jpg";

export default function ExperiencePage() {
  const { t } = useLanguage();
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
          <img src={warsawImg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
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
              <div className="sticky top-32">
                <div className="relative rounded-sm shadow-xl img-zoom mb-8">
                  <img 
                    src={advisorImg} 
                    alt="Financial advisor" 
                    className="w-full aspect-[4/5] object-cover rounded-sm" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-sm" />
                </div>
                
                {/* Highlight box */}
                <div className="bg-muted/50 p-6 rounded-sm border border-border">
                  <h4 className="font-semibold text-foreground mb-4">Core Expertise</h4>
                  <ul className="space-y-3">
                    {["Premium Mortgage Solutions", "Refinancing & Structuring", "Self-Employed Clients", "Complex Business Lending", "Expat & Foreign Income"].map((item, i) => (
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
          <img src={warsawImg} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-primary/80" />
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
