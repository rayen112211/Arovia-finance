import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import signingImg from "@/assets/signing-documents.jpg";
import propertyImg from "@/assets/property.jpg";
import heroImg from "@/assets/hero-consultation.jpg";
import advisorImg from "@/assets/advisor-portrait.jpg";

export default function MediaPage() {
  const { t } = useLanguage();

  const mediaItems = [
    { title: "How Banks Really Assess Your Mortgage Application", outlet: "Financial Times Poland", date: "March 2025", image: signingImg },
    { title: "Self-Employed? Here's How to Strengthen Your Mortgage Case", outlet: "Business Insider PL", date: "January 2025", image: propertyImg },
    { title: "Bringing International Expertise to the Polish Mortgage Market", outlet: "Puls Biznesu", date: "November 2024", image: heroImg },
    { title: "Complex Structures: A Guide for Business Owners Seeking Finance", outlet: "Forbes Poland", date: "September 2024", image: advisorImg },
    { title: "The Advantage of Working With an Independent Broker", outlet: "Rzeczpospolita", date: "July 2024", image: propertyImg },
    { title: "Understanding Refinancing Opportunities in Today's Market", outlet: "Gazeta Wyborcza", date: "May 2024", image: heroImg },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-40 bg-primary overflow-hidden">
        {/* Abstract dark gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-bl from-primary via-navy-dark to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative section-padding section-container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow mb-6 inline-flex">
                <span className="w-8 h-px bg-gold" />
                {t.mediaPage.label}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] text-primary-foreground leading-[1.06] mb-8">
                {t.mediaPage.title}
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
                {t.mediaPage.intro}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── MEDIA GRID ─── */}
      <Section className="py-12 lg:py-20 relative -mt-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {mediaItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="group block h-full cursor-default">
                <div className="premium-card p-4 sm:p-5 h-full flex flex-col bg-card relative">
                  
                  {/* Image wrapper */}
                  <div className="aspect-[16/10] rounded-sm overflow-hidden mb-6 img-zoom shadow-sm relative cursor-default">
                    <img 
                      src={item.image} 
                      alt="" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col px-2 pb-2">
                    <div className="flex justify-between items-start mb-3 gap-4">
                      <span className="eyebrow text-[10px]">
                        <span className="w-4 h-px bg-gold" />
                        {item.outlet}
                      </span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{item.date}</span>
                    </div>
                    
                    <h3 className="font-display text-lg lg:text-xl text-foreground mt-1 mb-4 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        {/* Abstract dark background overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-navy-light to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-80" />

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
