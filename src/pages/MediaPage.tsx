import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Authentic stock images for Media
const handshakeImgUrl = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop"; 
const propertyImgUrl = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"; 
const heroImgUrl = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"; 
const advisorImgUrl = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop";

export default function MediaPage() {
  const { t } = useLanguage();

  const mediaItems = [
    { title: "How Banks Assess Mortgage Applications in Practice", outlet: "Arovia Insights", date: "March 2026", image: handshakeImgUrl },
    { title: "Self-Employed Borrowers: Documents That Matter Most", outlet: "Arovia Insights", date: "February 2026", image: propertyImgUrl },
    { title: "Fixed vs Variable Rate: How to Compare Total Cost", outlet: "Arovia Insights", date: "January 2026", image: heroImgUrl },
    { title: "How to Prepare for a Mortgage Consultation", outlet: "Arovia Insights", date: "December 2025", image: advisorImgUrl },
    { title: "Refinancing: When It Makes Financial Sense", outlet: "Arovia Insights", date: "November 2025", image: propertyImgUrl },
    { title: "Common Approval Delays and How to Avoid Them", outlet: "Arovia Insights", date: "October 2025", image: heroImgUrl },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-40 bg-primary overflow-hidden">
        {/* Abstract dark gradient bg */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-60" />
        
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
      <Section className="py-12 lg:py-20 relative -mt-12 lg:-mt-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {mediaItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <article className="bg-card rounded-md p-4 sm:p-5 h-full flex flex-col border border-border/40 relative">
                  
                  {/* Image wrapper */}
                  <div className="aspect-[16/10] rounded-sm overflow-hidden mb-6 img-zoom relative border border-border/20">
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
                        <span className="w-4 h-[1px] bg-gold/50" />
                        {item.outlet}
                      </span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{item.date}</span>
                    </div>
                    
                    <h3 className="font-display text-lg lg:text-xl text-foreground mt-1 mb-4 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  
                </article>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        {/* Abstract dark background overlay */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-80" />

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
