import { Link, useSearchParams } from "react-router-dom";
import { Home, Briefcase, Globe, Building, BookOpen, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const heroImgUrl = "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1400";

export default function KnowledgeCentrePage() {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  const categories = [
    { icon: Home, label: t.knowledge.mortgages, slug: "mortgages" },
    { icon: Briefcase, label: t.knowledge.businessFinance, slug: "business-finance" },
    { icon: Globe, label: t.knowledge.internationalClients, slug: "international-clients" },
    { icon: Building, label: t.knowledge.propertyInvestors, slug: "property-investors" },
    { icon: BookOpen, label: t.knowledge.financialEducation, slug: "financial-education" },
  ];

  const articles = [
    {
      slug: "5-steps-mortgage-foreigner",
      category: t.knowledge.mortgages.toUpperCase(),
      categorySlug: "mortgages",
      title: "5 Steps to Getting a Mortgage in Poland as a Foreigner", // In a real app, article titles/content would also be translated or come from CMS
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      date: "May 15, 2024",
    },
    {
      slug: "business-finance-growth",
      category: t.knowledge.businessFinance.toUpperCase(),
      categorySlug: "business-finance",
      title: "How to Finance Your Business Growth in Poland",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      date: "May 10, 2024",
    },
    {
      slug: "buying-property-expat",
      category: t.knowledge.internationalClients.toUpperCase(),
      categorySlug: "international-clients",
      title: "Buying Property in Poland as an Expat – What You Need to Know",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      date: "May 5, 2024",
    },
  ];

  const filteredArticles = activeCategory
    ? articles.filter((a) => a.categorySlug === activeCategory)
    : articles;

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-white border-b border-border/40 overflow-hidden">
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[380px] items-center">
            <div className="py-12 lg:py-16 pr-0 lg:pr-16">
              <ScrollReveal>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-foreground mb-4">
                  {t.knowledge.heroTitle}
                </h1>
                <div className="w-10 h-px bg-gold mb-6" />
                <p className="text-foreground/80 text-base leading-relaxed mb-3">
                  {t.knowledge.heroDesc}
                </p>
                <p className="text-foreground/60 text-sm leading-relaxed max-w-7xl">
                  {t.knowledge.heroSub}
                </p>
              </ScrollReveal>
            </div>
            <div className="hidden lg:block relative h-full min-h-[380px]">
              <img
                src={heroImgUrl}
                alt="Knowledge Centre"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "/anna_and_robbie1.jpg"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── BROWSE BY TOPIC ─── */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-10">{t.knowledge.browseTopic}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => {
              const isActive = activeCategory === cat.slug;
              return (
                <ScrollReveal key={cat.slug} direction="up" delay={i * 80}>
                  <Link
                    to={isActive ? "/knowledge-centre" : `/knowledge-centre?category=${cat.slug}`}
                    className={`group flex flex-col items-center text-center p-6 rounded-sm border transition-all duration-300 hover:-translate-y-1 ${
                      isActive
                        ? "border-gold bg-gold/5 shadow-[0_8px_32px_rgba(212,175,55,0.1)]"
                        : "border-border/50 bg-background hover:border-gold/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${
                      isActive ? "bg-gold/20" : "bg-primary/5 group-hover:bg-gold/15"
                    }`}>
                      <cat.icon size={32} strokeWidth={1.25} className="text-gold" />
                    </div>
                    <span className={`text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-foreground font-bold" : "text-foreground/80 group-hover:text-foreground"
                    }`}>
                      {cat.label}
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── LATEST ARTICLES ─── */}
      <section className="py-12 lg:py-16 bg-secondary">
        <div className="section-padding section-container">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10">
              <h2 className="font-display text-2xl lg:text-3xl text-foreground">
                {activeCategory
                  ? `${t.knowledge.latestArticles} — ${categories.find(c => c.slug === activeCategory)?.label || ''}`
                  : t.knowledge.latestArticles}
              </h2>
              {activeCategory && (
                <Link
                  to="/knowledge-centre"
                  className="text-xs font-semibold tracking-wider text-gold hover:text-primary uppercase transition-colors"
                >
                  {language === 'pl' ? 'Pokaż wszystkie tematy' : 'Show all topics'} &rarr;
                </Link>
              )}
            </div>
          </ScrollReveal>

          {filteredArticles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredArticles.map((article, i) => (
                <ScrollReveal key={article.slug} direction="up" delay={i * 100}>
                  <Link
                    to={`/knowledge-centre/${article.slug}`}
                    className="group block bg-background rounded-sm overflow-hidden border border-border/40 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.currentTarget.src = "/anna_and_robbie1.jpg"; }}
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block text-xs font-bold tracking-[0.12em] text-gold mb-3">
                        {article.category}
                      </span>
                      <h3 className="font-display text-xl text-foreground leading-snug mb-4 group-hover:text-primary transition-colors duration-200">
                        {article.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/50 group-hover:text-gold transition-colors duration-200">
                        {t.knowledge.readMore} <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal>
              <div className="text-center py-12 px-4 rounded-sm border border-dashed border-border/60 bg-background/50 max-w-lg mx-auto">
                <p className="text-foreground/70 mb-2">
                  {language === 'pl'
                    ? 'Brak artykułów w tej kategorii.'
                    : 'No articles found in this category.'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {language === 'pl'
                    ? 'Zapraszamy wkrótce po nowe poradniki i analizy.'
                    : 'Check back soon for new guides and insights.'}
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ─── BOTTOM CTA BAR ─── */}
      <section className="bg-background py-16 border-t border-border/40">
        <div className="section-padding section-container max-w-3xl text-center flex flex-col items-center gap-6">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl text-primary mb-3">
              {t.knowledge.ctaTitle}
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">{t.knowledge.ctaDesc}</p>
          </div>
          <Button variant="premium" className="rounded-md" size="lg" asChild>
            <Link to="/contact">{t.nav.cta}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
