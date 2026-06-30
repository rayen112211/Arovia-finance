import { Link, useParams } from "react-router-dom";
import { ArrowRight, Linkedin, Facebook, Instagram } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useDocumentMetadata } from "@/hooks/useDocumentMetadata";

const getRelatedArticles = (language: string) => [
  {
    slug: "business-finance-growth",
    title: language === "pl" ? "Jak sfinansować rozwój firmy w Polsce" : "How to Finance Your Business Growth in Poland",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
  },
  {
    slug: "buying-property-expat",
    title: language === "pl" ? "Zakup nieruchomości w Polsce przez obcokrajowca – co musisz wiedzieć" : "Buying Property in Poland as an Expat – What You Need to Know",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400",
  },
  {
    slug: "loan-to-value",
    title: language === "pl" ? "Zrozumieć wskaźnik Loan-to-Value (LTV) w Polsce" : "Understanding Loan-to-Value (LTV) in Poland",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400",
  },
  {
    slug: "property-investment-guide",
    title: language === "pl" ? "Maksymalizacja ROI: Przewodnik po inwestycjach rentierskich w Polsce" : "Maximizing ROI: Guide to Buy-to-Let Investments in Poland",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400",
  },
];

// Static bilingual article content
const articleData: Record<string, Record<"en" | "pl", {
  category: string;
  title: string;
  date: string;
  image: string;
  body: React.ReactNode;
}>> = {
  "5-steps-mortgage-foreigner": {
    en: {
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
    pl: {
      category: "KREDYTY HIPOTECZNE",
      title: "5 kroków do uzyskania kredytu hipotecznego w Polsce przez obcokrajowca",
      date: "15 maja 2024",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
      body: (
        <>
          <p className="text-foreground/70 leading-relaxed mb-5">
            Zakup nieruchomości w Polsce przez obcokrajowca jest w pełni możliwy i prostszy niż mogłoby się wydawać. Kluczem jest zrozumienie procesu i odpowiednie przygotowanie się.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-8">
            Oto pięć ważnych kroków, które poprowadzą Cię przez ten proces.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">1. Sprawdź swoje uprawnienia</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Obcokrajowcy mogą uzyskać kredyt hipoteczny w Polsce, ale wymagania mogą różnić się w zależności od statusu rezydenta, źródła dochodu oraz banku. Obywatele UE mają zazwyczaj takie same prawa jak obywatele Polski, podczas gdy obywatele spoza UE mogą potrzebować dodatkowych dokumentów lub zezwoleń.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">2. Zgromadź odpowiednie dokumenty</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Zazwyczaj potrzebne będą dowód tożsamości, potwierdzenie dochodów, ważna karta pobytu lub wiza, wyciągi bankowe oraz numer PESEL. Współpraca z doświadczonym ekspertem kredytowym pozwala upewnić się, że posiadasz dokładnie to, czego wymaga dany bank.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">3. Oszacuj swój budżet</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Polskie banki wymagają wkładu własnego na poziomie minimum 10–20% wartości nieruchomości. Należy również uwzględnić koszty dodatkowe, takie jak opłaty notarialne, prowizje agencji i podatek PCC.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">4. Wybierz odpowiedniego kredytodawcę</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Nie wszystkie polskie banki chętnie udzielają kredytów cudzoziemcom, a kryteria mogą się różnić. Niezależny pośrednik zapewnia dostęp do wszystkich ofert rynkowych i pomaga wynegocjować najlepsze warunki.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">5. Złóż wniosek</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Po wyborze nieruchomości i banku, Twój ekspert złoży wnioski, będzie w kontakcie z analitykami bankowymi i poprowadzi Cię przez proces aż do wypłaty środków.
          </p>
        </>
      ),
    },
  },
  "business-finance-growth": {
    en: {
      category: "BUSINESS FINANCE",
      title: "How to Finance Your Business Growth in Poland",
      date: "May 10, 2024",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
      body: (
        <>
          <p className="text-foreground/70 leading-relaxed mb-5">
            Growing a business in Poland requires a sound financial strategy. Whether you need working capital, investment funding, or equipment financing, understanding your options is essential.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">Commercial Banking Products</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Polish banks offer a wide range of commercial financing solutions. These include revolving lines of credit for working capital, long-term investment loans for development, and factoring to improve liquidity. Matching the right financial instrument to your cashflow pattern is vital for sustainable expansion.
          </p>
        </>
      ),
    },
    pl: {
      category: "FINANSOWANIE FIRM",
      title: "Jak sfinansować rozwój firmy w Polsce",
      date: "10 maja 2024",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
      body: (
        <>
          <p className="text-foreground/70 leading-relaxed mb-5">
            Rozwój firmy w Polsce wymaga stabilnej strategii finansowej. Niezależnie od tego, czy potrzebujesz kapitału obrotowego, funduszy na inwestycje, czy finansowania maszyn, kluczowe jest zrozumienie dostępnych opcji.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">Produkty bankowości korporacyjnej</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Polskie banki oferują szeroki wachlarz rozwiązań dla firm. Należą do nich linie obrotowe na finansowanie bieżącej działalności, długoterminowe kredyty inwestycyjne na rozwój oraz usługi faktoringowe poprawiające płynność finansową. Dopasowanie właściwego instrumentu finansowego do przepływów pieniężnych jest niezbędne dla stabilnego rozwoju firmy.
          </p>
        </>
      ),
    },
  },
  "buying-property-expat": {
    en: {
      category: "INTERNATIONAL CLIENTS",
      title: "Buying Property in Poland as an Expat – What You Need to Know",
      date: "May 5, 2024",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      body: (
        <>
          <p className="text-foreground/70 leading-relaxed mb-5">
            Poland has become an increasingly popular destination for expats looking to purchase property. With competitive prices and a growing economy, it offers excellent opportunities for both homebuyers and investors.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">Legal Framework for Foreign Expats</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Citizens of the European Economic Area (EEA) can purchase apartments in Poland without restrictions or permits. However, non-EEA nationals may require a special permit from the Ministry of Internal Affairs and Administration to purchase detached houses or property in border zones. Getting professional advice early avoids costly legal delays.
          </p>
        </>
      ),
    },
    pl: {
      category: "KLIENCI MIĘDZYNARODOWI",
      title: "Zakup nieruchomości w Polsce przez obcokrajowca – co musisz wiedzieć",
      date: "5 maja 2024",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      body: (
        <>
          <p className="text-foreground/70 leading-relaxed mb-5">
            Polska stała się coraz bardziej popularnym kierunkiem dla obcokrajowców chcących kupić nieruchomość. Oferuje doskonałe możliwości zarówno dla osób kupujących na własne potrzeby, jak i dla inwestorów.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">Ramy prawne dla cudzoziemców</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Obywatele Europejskiego Obszaru Gospodarczego (EOG) mogą kupować samodzielne lokale mieszkalne w Polsce bez żadnych ograniczeń ani zezwoleń. Jednak obywatele spoza EOG mogą potrzebować specjalnego zezwolenia Ministerstwa Spraw Wewnętrznych i Administracji (MSWiA) na zakup domów jednorodzinnych lub gruntów w strefach przygranicznych.
          </p>
        </>
      ),
    },
  },
  "property-investment-guide": {
    en: {
      category: "PROPERTY INVESTORS",
      title: "Maximizing ROI: Guide to Buy-to-Let Investments in Poland",
      date: "June 25, 2026",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
      body: (
        <>
          <p className="text-foreground/70 leading-relaxed mb-5">
            Buying property for rental yield (Buy-to-Let) in Poland has grown into a highly popular investment strategy. The strong rental market driven by students, corporate professionals, and expats creates solid growth potential.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">Selecting the Right Location</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Warsaw, Kraków, Wrocław, and Gdańsk remain the premier destinations, offering excellent liquidity and stable rental demand. However, smaller academic centers can sometimes yield higher cash-on-cash returns due to lower initial purchase prices.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">Financing and Tax Considerations</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Most Polish banks require at least a 20% down payment for commercial or investment property mortgages. Additionally, tax laws mandate a flat-rate lump sum tax on private rental income (ryczałt). Working with a financial advisor helps secure optimum financing terms.
          </p>
        </>
      ),
    },
    pl: {
      category: "INWESTORZY W NIERUCHOMOŚCI",
      title: "Maksymalizacja ROI: Przewodnik po inwestycjach rentierskich w Polsce",
      date: "25 czerwca 2026",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
      body: (
        <>
          <p className="text-foreground/70 leading-relaxed mb-5">
            Zakup nieruchomości pod wynajem (Buy-to-Let) w Polsce to niezwykle popularna strategia inwestycyjna. Silny rynek najmu napędzany przez studentów, profesjonalistów i ekspatów stwarza solidny potencjał wzrostu wartości kapitału.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">Wybór odpowiedniej lokalizacji</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Warszawa, Kraków, Wrocław i Gdańsk pozostają głównymi ośrodkami, oferując doskonałą płynność i stabilny popyt na najem. Z kolei mniejsze ośrodki akademickie mogą czasem zapewnić wyższy procentowy zwrot ze względu na niższe ceny zakupu.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">Finansowanie i kwestie podatkowe</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Większość polskich banków wymaga co najmniej 20% wkładu własnego przy kredytach na nieruchomości inwestycyjne. Dodatkowo, przepisy nakładają podatek ryczałtowy od przychodów z najmu prywatnego. Współpraca z ekspertem finansowym pozwala na optymalizację kosztów kredytowych.
          </p>
        </>
      ),
    },
  },
  "loan-to-value": {
    en: {
      category: "FINANCIAL EDUCATION",
      title: "Understanding Loan-to-Value (LTV) in Poland",
      date: "June 20, 2026",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
      body: (
        <>
          <p className="text-foreground/70 leading-relaxed mb-5">
            Loan-to-Value (LTV) is one of the most critical metrics used by Polish banks when evaluating mortgage applications. It represents the ratio of the loan amount to the appraised value of the property.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">Minimum Down Payment Limits</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            By regulation of the Polish Financial Supervision Authority (KNF), banks require at least a 10% or 20% down payment (resulting in a maximum LTV of 80% to 90%). Having a 20% down payment (80% LTV) generally unlocks better interest margins and avoids compulsory low down payment insurance (ubezpieczenie niskiego wkładu).
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">Impact on Rates and Costs</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Lenders offer lower margins to borrowers with lower LTV ratios because it reduces their credit risk. Knowing how to calculate your LTV and plan your savings path can save you tens of thousands of zlotys over the mortgage term.
          </p>
        </>
      ),
    },
    pl: {
      category: "EDUKACJA FINANSOWA",
      title: "Zrozumieć wskaźnik Loan-to-Value (LTV) w Polsce",
      date: "20 czerwca 2026",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
      body: (
        <>
          <p className="text-foreground/70 leading-relaxed mb-5">
            Wskaźnik Loan-to-Value (LTV) to jeden z najważniejszych parametrów ocenianych przez banki w Polsce przy decyzji o przyznaniu kredytu hipotecznego. Określa on stosunek kwoty wnioskowanego kredytu do wartości rynkowej nieruchomości.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">Limity wkładu własnego w Polsce</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Zgodnie z Rekomendacją S Komisji Nadzoru Finansowego (KNF), minimalny wkład własny wynosi zazwyczaj 10% lub 20% wartości nieruchomości (LTV na poziomie maksymalnie 80-90%). Posiadanie wkładu własnego na poziomie 20% (LTV do 80%) pozwala uniknąć konieczności płacenia ubezpieczenia niskiego wkładu i gwarantuje niższe marże bankowe.
          </p>
          <h2 className="font-display text-2xl text-foreground mb-4">Wpływ na koszty kredytu</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            Niższa wartość LTV zmniejsza ryzyko kredytowe banku, co pozwala na uzyskanie lepszych warunków marżowych. Dobre zaplanowanie struktury finansowania pozwala zaoszczędzić tysiące złotych w całym okresie kredytowania.
          </p>
        </>
      ),
    },
  },
};

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const langKey = language === "pl" ? "pl" : "en";
  const article = slug ? (articleData[slug]?.[langKey] || null) : null;

  const seoTitle = article 
    ? `${article.title} | Arovia Finance` 
    : "Article Not Found | Arovia Finance";
  const seoDesc = article 
    ? `Read: ${article.title}. Expert financial insights and guidance from Arovia Finance Warsaw.`
    : "The requested article could not be found.";
  useDocumentMetadata(seoTitle, seoDesc);

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

  const related = getRelatedArticles(language);

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
                {related.filter((a) => a.slug !== slug).slice(0, 3).map((rel) => (
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
