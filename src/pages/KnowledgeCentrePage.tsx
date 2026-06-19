import { Link } from "react-router-dom";
import { Home, Briefcase, Globe, Building, BookOpen, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const heroImgUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1400";

const categories = [
  { icon: Home, label: "Mortgages", slug: "mortgages" },
  { icon: Briefcase, label: "Business Finance", slug: "business-finance" },
  { icon: Globe, label: "International Clients", slug: "international-clients" },
  { icon: Building, label: "Property Investors", slug: "property-investors" },
  { icon: BookOpen, label: "Financial Education", slug: "financial-education" },
];

const articles = [
  {
    slug: "5-steps-mortgage-foreigner",
    category: "MORTGAGES",
    title: "5 Steps to Getting a Mortgage in Poland as a Foreigner",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    date: "May 15, 2024",
  },
  {
    slug: "business-finance-growth",
    category: "BUSINESS FINANCE",
    title: "How to Finance Your Business Growth in Poland",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    date: "May 10, 2024",
  },
  {
    slug: "buying-property-expat",
    category: "INTERNATIONAL CLIENTS",
    title: "Buying Property in Poland as an Expat – What You Need to Know",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    date: "May 5, 2024",
  },
];

export default function KnowledgeCentrePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[380px] items-center">
            <div className="py-20 lg:py-24 pr-0 lg:pr-16">
              <ScrollReveal>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-primary-foreground mb-4">
                  Knowledge Centre
                </h1>
                <div className="w-10 h-px bg-gold mb-6" />
                <p className="text-primary-foreground/80 text-base leading-relaxed mb-3">
                  Insights, guides and expert advice to help you make informed financial decisions.
                </p>
                <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-md">
                  Stay up to date with the latest articles on mortgages, business finance, property investment and more.
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
            <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-10">Browse by Topic</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.slug} direction="up" delay={i * 80}>
                <Link
                  to={`/knowledge-centre?category=${cat.slug}`}
                  className="group flex flex-col items-center text-center p-6 rounded-sm border border-border/50 bg-background hover:border-gold/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors duration-300">
                    <cat.icon size={22} strokeWidth={1.25} className="text-gold" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                    {cat.label}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LATEST ARTICLES ─── */}
      <section className="py-12 lg:py-16 bg-secondary">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-10">Latest Articles</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article, i) => (
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
                      Read more <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA BAR ─── */}
      <section className="bg-primary py-14">
        <div className="section-padding section-container flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-primary-foreground mb-1">
              Need personalised advice?
            </h2>
            <p className="text-primary-foreground/60 text-sm">Book a consultation with our team.</p>
          </div>
          <Button variant="premium" size="lg" asChild className="flex-shrink-0 rounded-md">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
