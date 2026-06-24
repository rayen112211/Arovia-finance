import { Link, useParams } from "react-router-dom";
import { ArrowRight, Linkedin, Facebook, Instagram } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const relatedArticles = [
  {
    slug: "business-finance-growth",
    title: "How to Finance Your Business Growth in Poland",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
  },
  {
    slug: "buying-property-expat",
    title: "Buying Property in Poland as an Expat – What You Need to Know",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400",
  },
  {
    slug: "loan-to-value",
    title: "Understanding Loan-to-Value (LTV) in Poland",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400",
  },
];

// Static article content — in a real build this would come from a CMS/data source
const articleData: Record<string, {
  category: string;
  title: string;
  date: string;
  image: string;
  body: React.ReactNode;
}> = {
  "5-steps-mortgage-foreigner": {
    category: "MORTGAGES",
    title: "5 Steps to Getting a Mortgage in Poland as a Foreigner",
    date: "May 15, 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    body: (
      <>
        <p className="text-foreground/70 leading-relaxed mb-5">
          Buying a property in Poland as a foreigner is very possible and more straightforward than you think. The key is understanding the process and preparing the right way.
        </p>
        <p className="text-foreground/70 leading-relaxed mb-8">
          Here are five important steps to guide you through the process.
        </p>
        <h2 className="font-display text-2xl text-foreground mb-4">1. Check Your Eligibility</h2>
        <p className="text-foreground/70 leading-relaxed mb-6">
          Foreigners can get a mortgage in Poland, but the requirements may differ depending on your residency status, income source and the lender. EU citizens generally have the same rights as Polish nationals, while non-EU citizens may need additional documentation.
        </p>
        <h2 className="font-display text-2xl text-foreground mb-4">2. Gather the Right Documents</h2>
        <p className="text-foreground/70 leading-relaxed mb-6">
          You'll typically need proof of income, valid residence permit or visa, bank statements, and a PESEL number. Working with an experienced broker helps ensure you have exactly what each lender requires.
        </p>
        <h2 className="font-display text-2xl text-foreground mb-4">3. Assess Your Budget</h2>
        <p className="text-foreground/70 leading-relaxed mb-6">
          Polish banks typically require a minimum down payment of 10–20% of the property value. Factor in additional costs such as notary fees, agency fees, and property transfer tax.
        </p>
        <h2 className="font-display text-2xl text-foreground mb-4">4. Choose the Right Lender</h2>
        <p className="text-foreground/70 leading-relaxed mb-6">
          Not all Polish banks offer mortgages to foreign nationals, and those that do have varying criteria. An independent broker gives you access to all available options and can negotiate better terms.
        </p>
        <h2 className="font-display text-2xl text-foreground mb-4">5. Submit Your Application</h2>
        <p className="text-foreground/70 leading-relaxed mb-6">
          Once you've chosen a property and lender, your broker will submit the application, liaise with the bank's analysts, and guide you through to completion.
        </p>
      </>
    ),
  },
  "business-finance-growth": {
    category: "BUSINESS FINANCE",
    title: "How to Finance Your Business Growth in Poland",
    date: "May 10, 2024",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    body: (
      <>
        <p className="text-foreground/70 leading-relaxed mb-5">
          Growing a business in Poland requires the right financial strategy. Whether you need working capital, investment funding, or equipment financing, understanding your options is essential.
        </p>
        <h2 className="font-display text-2xl text-foreground mb-4">Business Loans</h2>
        <p className="text-foreground/70 leading-relaxed mb-6">
          Polish banks offer a range of business financing products, from short-term revolving credit to long-term investment loans. The key is matching the right product to your business needs.
        </p>
      </>
    ),
  },
  "buying-property-expat": {
    category: "INTERNATIONAL CLIENTS",
    title: "Buying Property in Poland as an Expat – What You Need to Know",
    date: "May 5, 2024",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    body: (
      <>
        <p className="text-foreground/70 leading-relaxed mb-5">
          Poland has become an increasingly popular destination for expats looking to purchase property. With competitive prices and a growing economy, it offers excellent opportunities for both homebuyers and investors.
        </p>
        <h2 className="font-display text-2xl text-foreground mb-4">Legal Framework</h2>
        <p className="text-foreground/70 leading-relaxed mb-6">
          EU citizens can purchase property in Poland without restrictions. Non-EU citizens may require a permit for certain types of property, particularly agricultural land.
        </p>
      </>
    ),
  },
};

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const article = slug ? articleData[slug] : null;

  const categories = [
    { label: t.knowledge.mortgages, slug: "mortgages" },
    { label: t.knowledge.businessFinance, slug: "business-finance" },
    { label: t.knowledge.internationalClients, slug: "international-clients" },
    { label: t.knowledge.propertyInvestors, slug: "property-investors" },
    { label: t.knowledge.financialEducation, slug: "financial-education" },
  ];

  if (!article) {
    return (
      <div className="section-padding section-container py-32 text-center">
        <h1 className="font-display text-3xl text-foreground mb-4">{t.article.notFoundTitle}</h1>
        <p className="text-foreground/60 mb-8">{t.article.notFoundDesc}</p>
        <Button variant="premium" asChild className="rounded-md">
          <Link to="/knowledge-centre">{t.article.backBtn}</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* ─── BREADCRUMB ─── */}
      <div className="bg-secondary border-b border-border/40">
        <div className="section-padding section-container py-3">
          <nav className="flex items-center gap-2 text-xs text-foreground/50">
            <Link to="/knowledge-centre" className="hover:text-foreground transition-colors">{t.nav.media}</Link>
            <span>›</span>
            <span className="capitalize">{article.category.charAt(0) + article.category.slice(1).toLowerCase()}</span>
            <span>›</span>
            <span className="text-foreground/75 truncate max-w-xs">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="section-padding section-container py-12 lg:py-16">
        <div className="grid lg:grid-cols-[200px_1fr_280px] gap-10 lg:gap-12">
          {/* Category sidebar */}
          <aside className="hidden lg:block">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/40 mb-4">{t.article.categories}</h3>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/knowledge-centre?category=${cat.slug}`}
                    className="block text-sm text-foreground/65 hover:text-foreground hover:text-gold py-1.5 transition-colors duration-200"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Article body */}
          <article className="min-w-0">
            <ScrollReveal>
              <span className="inline-block text-xs font-bold tracking-[0.12em] text-gold mb-3">
                {article.category}
              </span>
              <h1 className="font-display text-3xl lg:text-4xl text-foreground leading-tight mb-3">
                {article.title}
              </h1>
              <p className="text-sm text-foreground/45 mb-8">{article.date}</p>

              <div className="rounded-sm overflow-hidden aspect-[16/9] mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "/anna_and_robbie1.jpg"; }}
                />
              </div>

              <div className="prose-like">
                {article.body}
              </div>
            </ScrollReveal>
          </article>

          {/* Right sidebar */}
          <aside className="hidden lg:block">
            {/* Share */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/40 mb-4">
                {t.article.share}
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={15} strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={15} strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"
                  aria-label="Share on Instagram"
                >
                  <Instagram size={15} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Related articles */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/40 mb-4">
                {t.article.related}
              </h3>
              <div className="space-y-5">
                {relatedArticles.filter((a) => a.slug !== slug).slice(0, 3).map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/knowledge-centre/${rel.slug}`}
                    className="group flex gap-3 items-start"
                  >
                    <div className="w-16 h-16 flex-shrink-0 rounded-sm overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.currentTarget.src = "/anna_and_robbie1.jpg"; }}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/75 leading-snug group-hover:text-foreground transition-colors duration-200 mb-1">
                        {rel.title}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-gold">
                        {t.knowledge.readMore} <ArrowRight size={10} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ─── BOTTOM CTA BAR ─── */}
      <section className="bg-cream py-16 border-y border-border/40">
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
