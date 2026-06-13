import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Authentic stock image for Experience Hero
const warsawImgUrl = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2574&auto=format&fit=crop"; 
// Authentic portrait for advisor
const advisorImgUrl = "/robbie.jpg";
const annaImgUrl = "/anna.jpg";
const fallbackOfficeImgUrl = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop";

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
          <img
            src={warsawImgUrl}
            alt="Professional office interior"
            className="w-full h-full object-cover opacity-10"
            onError={(e) => {
              e.currentTarget.src = fallbackOfficeImgUrl;
            }}
          />
          <div className="absolute inset-0 bg-primary" />
        </div>
        
        {/* Decorative line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />

        <div className="relative section-padding section-container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow mb-6 inline-flex">
                <span className="w-8 h-px bg-border" />
                {t.experience.label}
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* ─── ROBBIE'S SECTION ─── */}
          <div className="flex flex-col">
            <ScrollReveal>
              <div className="relative rounded-sm aspect-[4/5] img-zoom mb-8 overflow-hidden border border-border/40">
                <img 
                  src={advisorImgUrl} 
                  alt="Robbie - Financial Advisor" 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    e.currentTarget.src = fallbackOfficeImgUrl;
                  }}
                />
                <div className="absolute inset-0 bg-primary/5 transition-colors duration-500 hover:bg-transparent" />
              </div>
            </ScrollReveal>
            
            <div className="space-y-12 flex-1">
              {sections.map((section, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-border/50 to-transparent" />
                    <div className="space-y-4">
                      <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-base lg:text-lg text-pretty whitespace-pre-line">
                        {section.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ─── ANNA'S SECTION ─── */}
          <div className="flex flex-col">
            <ScrollReveal delay={100}>
              <div className="relative rounded-sm aspect-[4/5] img-zoom mb-8 overflow-hidden border border-border/40">
                <img 
                  src={annaImgUrl} 
                  alt="Anna - Financial Advisor" 
                  className="w-full h-full object-cover object-top" 
                  onError={(e) => {
                    e.currentTarget.src = fallbackOfficeImgUrl;
                  }}
                />
                <div className="absolute inset-0 bg-primary/5 transition-colors duration-500 hover:bg-transparent" />
              </div>
            </ScrollReveal>
            
            <div className="space-y-12 flex-1">
              <ScrollReveal delay={180}>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-border/50 to-transparent" />
                  <div className="space-y-4">
                    <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                      {('annaExperience' in t) ? (t.annaExperience as any).title : "Leadership & Client Engagement"}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg text-pretty whitespace-pre-line">
                      {('annaExperience' in t) ? (t.annaExperience as any).text : ""}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
          
        </div>
      </Section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 lg:py-32 bg-cream border-y border-border/40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cream" />
        </div>
        <div className="relative section-padding section-container text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="eyebrow justify-center mb-6 inline-flex">
              <span className="w-8 h-px bg-gold" />
              {t.ctaSection.title}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-5">
              {t.ctaSection.title}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              {t.ctaSection.description}
            </p>
            <Button variant="premium" size="xl" asChild className="group">
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
