import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const fallbackMediaImgUrl = "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&q=80&w=1400";

export default function MediaPage() {
  const { t, language } = useLanguage();

  const mediaItems = language === "pl"
    ? [
        {
          source: "NBP",
          title: "Jak obniżki stóp mogą wpłynąć na popyt na kredyty hipoteczne",
          description: "Wnioski z Raportu o stabilności systemu finansowego NBP oraz ich praktyczne znaczenie dla rynku mieszkaniowego.",
          date: "Czerwiec 2025",
          image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1400",
          href: "https://nbp.pl/wp-content/uploads/2025/06/Raport-o-stabilnosci-systemu-finansowego.-Czerwiec-2025-r._EN.pdf",
        },
        {
          source: "NBP",
          title: "Co polityka pieniężna oznacza dla kredytobiorców",
          description: "Najważniejsze elementy raportu o polityce pieniężnej i ich wpływ na koszt finansowania.",
          date: "Maj 2025",
          image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1400",
          href: "https://nbp.pl/wp-content/uploads/2025/05/Report-on-Monetary-Policy-2024.pdf",
        },
        {
          source: "Ministerstwo Finansów",
          title: "Jak przedsiębiorca powinien przygotować rozliczenie podatkowe",
          description: "Przewodnik e-PIT (PIT-28), który pomaga uporządkować dokumenty przed procesem kredytowym.",
          date: "Aktualizacja 2024/2025",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400",
          href: "https://podatki-arch.mf.gov.pl/en/your-e-pit/pit-28-for-2024/",
        },
      ]
    : [
        {
          source: "NBP",
          title: "How Rate Cuts May Affect Mortgage Demand in Poland",
          description: "A practical summary of the NBP Financial Stability Report and potential mortgage market effects.",
          date: "June 2025",
          image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1400",
          href: "https://nbp.pl/wp-content/uploads/2025/06/Raport-o-stabilnosci-systemu-finansowego.-Czerwiec-2025-r._EN.pdf",
        },
        {
          source: "NBP",
          title: "What Monetary Policy Means for Borrowers",
          description: "Key borrower implications from the NBP Report on Monetary Policy 2024.",
          date: "May 2025",
          image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1400",
          href: "https://nbp.pl/wp-content/uploads/2025/05/Report-on-Monetary-Policy-2024.pdf",
        },
        {
          source: "Ministry of Finance",
          title: "What Self-Employed Borrowers Should Prepare Financially",
          description: "Official e-PIT (PIT-28) guidance useful for organizing tax records before mortgage applications.",
          date: "Updated for 2024/2025",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400",
          href: "https://podatki-arch.mf.gov.pl/en/your-e-pit/pit-28-for-2024/",
        },
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
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block h-full cursor-pointer"
                aria-label={`${item.title} (${item.source})`}
              >
                <article className="bg-card rounded-md p-4 sm:p-5 h-full flex flex-col border border-border/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-border/80 transition-all duration-300 relative">
                  
                  {/* Image wrapper */}
                  <div className="aspect-[16/10] rounded-sm overflow-hidden mb-6 img-zoom relative border border-border/20">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = fallbackMediaImgUrl;
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col px-2 pb-2">
                    <div className="flex justify-between items-start mb-3 gap-4">
                      <span className="eyebrow text-[10px]">
                        <span className="w-4 h-[1px] bg-gold/50" />
                        {item.source}
                      </span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{item.date}</span>
                    </div>
                    
                    <h3 className="font-display text-lg lg:text-xl text-foreground mt-1 mb-3 leading-snug group-hover:text-gold transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                    <span className="text-xs font-medium text-foreground/70 inline-flex items-center gap-1.5 mt-auto">
                      {language === "pl" ? "Otwórz źródło" : "Open source"} <ExternalLink size={12} />
                    </span>
                  </div>
                  
                </article>
              </a>
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
