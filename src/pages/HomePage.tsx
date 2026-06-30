import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Globe,
  Users,
  MessageCircle,
  Heart,
  Home,
  FileText,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { useDocumentMetadata } from "@/hooks/useDocumentMetadata";

// ─── Image URLs ───────────────────────────────────────────────────────────────
const heroTeamImg = "/anna_and_robbie.jpg";
const officeImg = "/a-relationship-built-on-trust.jpg";
const skylineImg = "/warsaw.jpg";

export default function HomePage() {
  const { t, language } = useLanguage();

  const title = language === "pl"
    ? "Arovia Finance | Ekspert Kredytowy Warszawa"
    : "Arovia Finance | Independent Mortgage Advisory Warsaw";
  const desc = language === "pl"
    ? "Niezależny doradca kredytowy w Warszawie. Kredyty hipoteczne, konsolidacyjne i finansowanie firm. Ponad 15 lat doświadczenia w bankowości."
    : "Expert independent mortgage and business finance advisory in Warsaw, Poland. Over 15 years of banking experience. Get personalized guidance.";
  useDocumentMetadata(title, desc);

  // ─── Knowledge Centre articles (mirrored from KnowledgeCentrePage) ────────────
  const kcArticles = [
    {
      slug: "5-steps-mortgage-foreigner",
      category: "MORTGAGES",
      title: "5 Steps to Getting a Mortgage in Poland as a Foreigner",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    },
    {
      slug: "business-finance-growth",
      category: "BUSINESS FINANCE",
      title: "How to Finance Your Business Growth in Poland",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    },
    {
      slug: "buying-property-expat",
      category: "INTERNATIONAL CLIENTS",
      title: "Buying Property in Poland as an Expat – What You Need to Know",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    },
  ];

  // ─── Why Clients Choose ───────────────────────────────────────────────────────
  const whyItems = [
    {
      icon: Globe,
      title: t.home.why1Title,
      desc: t.home.why1Desc,
    },
    {
      icon: Briefcase,
      title: t.home.why2Title,
      desc: t.home.why2Desc,
    },
    {
      icon: MessageCircle,
      title: t.home.why3Title,
      desc: t.home.why3Desc,
    },
    {
      icon: Heart,
      title: t.home.why4Title,
      desc: t.home.why4Desc,
    },
  ];

  // ─── Services (How We Can Help) ───────────────────────────────────────────────
  const services = [
    {
      icon: Home,
      title: t.home.help1Title,
      desc: t.home.help1Desc,
      href: "/contact",
    },
    {
      icon: Briefcase,
      title: t.home.help2Title,
      desc: t.home.help2Desc,
      href: "/contact",
    },
    {
      icon: Building2,
      title: t.home.help3Title,
      desc: t.home.help3Desc,
      href: "/contact",
    },
    {
      icon: Globe,
      title: t.home.help4Title,
      desc: t.home.help4Desc,
      href: "/international-clients",
    },
    {
      icon: FileText,
      title: t.home.help5Title,
      desc: t.home.help5Desc,
      href: "/contact",
    },
  ];

  // ─── Process Steps ────────────────────────────────────────────────────────────
  const processSteps = [
    {
      num: "1",
      icon: Users,
      title: t.home.process1Title,
      desc: t.home.process1Desc,
    },
    {
      num: "2",
      icon: FileText,
      title: t.home.process2Title,
      desc: t.home.process2Desc,
    },
    {
      num: "3",
      icon: CheckCircle,
      title: t.home.process3Title,
      desc: t.home.process3Desc,
    },
    {
      num: "4",
      icon: Building2,
      title: t.home.process4Title,
      desc: t.home.process4Desc,
    },
    {
      num: "5",
      icon: CheckCircle,
      title: t.home.process5Title,
      desc: t.home.process5Desc,
    },
    {
      num: "6",
      icon: Heart,
      title: t.home.process6Title,
      desc: t.home.process6Desc,
    },
  ];

  // ─── Testimonials ─────────────────────────────────────────────────────────────
  const testimonials = [
    {
      icon: Home,
      quote: t.home.success1Quote,
      label: t.home.success1Label,
      location: t.home.success1Loc,
    },
    {
      icon: Briefcase,
      quote: t.home.success2Quote,
      label: t.home.success2Label,
      location: t.home.success2Loc,
    },
    {
      icon: Building2,
      quote: t.home.success3Quote,
      label: t.home.success3Label,
      location: t.home.success3Loc,
    },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 1. HERO                                                              */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white min-h-[72vh] flex items-center">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-white" />

        {/* Hero image — right half */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0">
          <img
            src={heroTeamImg}
            alt="Jay Arora and Anna Jakimiak, Founders of Arovia Finance"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              e.currentTarget.src = "/anna_and_robbie1.jpg";
            }}
          />
          {/* Left-side gradient fade into white */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/80 to-transparent" />
        </div>

        {/* Mobile top-gradient over image */}
        <div className="absolute inset-0 bg-white/80 lg:hidden z-[1]" />

        {/* Content */}
        <div className="relative z-10 section-padding section-container w-full py-16 lg:py-24 grid lg:grid-cols-2 gap-0">
          <div className="max-w-[600px]">
            <ScrollReveal>
              <h1 className="font-display text-[2.4rem] sm:text-[3rem] lg:text-[3.4rem] text-foreground leading-[1.07] tracking-tight mb-6">
                {t.home.heroTitle}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-foreground/80 text-base lg:text-lg leading-relaxed mb-8 max-w-[52ch]">
                {t.home.heroDesc}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="premium"
                  className="px-7 py-3 h-auto text-sm rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/contact">{t.home.heroBtn1}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary/20 text-primary hover:bg-primary/5 px-7 py-3 h-auto text-sm rounded-md"
                >
                  <Link to="/how-we-work">{t.home.heroBtn2}</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Name-card overlay — visible on desktop, bottom-right of image */}
        <div className="hidden lg:block absolute bottom-8 right-8 xl:bottom-12 xl:right-[max(2rem,calc((100vw-1280px)/2+2rem))] z-20">
          <ScrollReveal delay={400}>
            <div className="bg-white/95 backdrop-blur-sm border border-border/40 p-6 max-w-[300px] shadow-2xl">
              <div className="w-8 h-px bg-gold mb-3" />
              <p className="font-display text-foreground text-lg leading-snug mb-1">
                {t.home.nameCardName}
              </p>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                {t.home.nameCardTitle}
              </p>
              <p className="text-foreground/75 text-xs leading-relaxed">
                {t.home.nameCardDesc}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 2. WHY CLIENTS CHOOSE AROVIA FINANCE                                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[hsl(var(--cream))] border-b border-border/40">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground text-center mb-16">
              {t.home.whyTitle}
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
            {whyItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300 shadow-sm">
                    <item.icon
                      size={32}
                      className="text-gold"
                      strokeWidth={1.25}
                    />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 3. THE BEST FINANCIAL DECISIONS (About/trust section)               */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left: Office image */}
            <ScrollReveal direction="left">
              <div className="relative overflow-hidden rounded-sm shadow-md img-zoom aspect-[4/3]">
                <img
                  src={officeImg}
                  alt="Arovia Finance office"
                  className="w-full h-full object-cover"
                />
                {/* Logo overlay on image */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src="/arovia-logo-white.png"
                    alt="Arovia Finance"
                    className="w-56 opacity-90 drop-shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Text */}
            <ScrollReveal direction="right">
              <div>
                <span className="eyebrow mb-4 inline-flex">
                  <span className="w-6 h-px bg-gold" />
                  {t.home.trustEyebrow}
                </span>
                <h2 className="font-display text-[1.9rem] sm:text-[2.4rem] lg:text-[2.6rem] text-foreground leading-[1.1] mb-6">
                  {t.home.trustTitle}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                  <p>{t.home.trustP1}</p>
                  <p>{t.home.trustP2}</p>
                </div>
                <div className="mt-8">
                  <Button
                    asChild
                    variant="premium"
                    className="px-6 py-2.5 h-auto text-sm rounded-md"
                  >
                    <Link to="/about">{t.home.trustBtn}</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 4. HOW WE CAN HELP — 5-card services                               */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[hsl(var(--cream))] border-y border-border/40">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-2xl lg:text-3xl text-foreground text-center mb-14">
              {t.home.helpTitle}
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <Link to={s.href} className="group block h-full">
                  <div className="bg-white border border-border/50 p-8 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-gold/15 flex items-center justify-center mb-6 group-hover:bg-gold/25 transition-colors duration-300 shadow-sm">
                      <s.icon
                        size={40}
                        className="text-gold"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-display text-lg lg:text-[1.15rem] text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed flex-1">
                      {s.desc}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 5. A CLEAR AND TRANSPARENT PROCESS — horizontal 6-step             */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-2xl lg:text-3xl text-foreground text-center mb-14">
              {t.home.processTitle}
            </h2>
          </ScrollReveal>

          {/* Cream boxed container with steps */}
          <ScrollReveal>
            <div className="bg-[hsl(var(--cream))] border border-border/40 rounded-sm px-5 sm:px-10 py-10 sm:py-16">
              <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 lg:gap-4">
                {processSteps.map((step, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col items-center lg:flex-1 text-center"
                  >
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary flex items-center justify-center mb-5 shadow-md">
                      <step.icon
                        size={32}
                        className="text-primary-foreground"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="font-sans text-lg lg:text-xl text-gold font-bold mb-2">
                      {step.num}
                    </span>
                    <h3 className="font-display text-base lg:text-lg text-foreground leading-snug mb-3 max-w-[150px]">
                      {step.title}
                    </h3>
                    <p className="text-[13px] lg:text-[14px] text-muted-foreground leading-relaxed max-w-[150px]">
                      {step.desc}
                    </p>

                    {/* Arrow connector (placed absolutely between icons) */}
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-10 -translate-y-1/2 right-0 translate-x-1/2 text-gold/50 z-10 pointer-events-none">
                        <ArrowRight size={24} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="text-center mt-10">
              <Button
                asChild
                variant="premium"
                className="px-8 py-3 h-auto text-sm rounded-md font-semibold"
              >
                <Link to="/how-we-work">{t.home.processBtn}</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 6. LOCAL EXPERTISE. INTERNATIONAL PERSPECTIVE. — navy skyline banner */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-primary">
        {/* Warsaw skyline background */}
        <div className="absolute inset-0 z-0">
          <img
            src={skylineImg}
            alt="Warsaw skyline"
            className="w-full h-full object-cover opacity-80 brightness-125 contrast-100"
          />
          <div className="absolute inset-0 bg-primary/30" />
        </div>

        <div className="relative z-10 section-padding section-container max-w-3xl">
          <ScrollReveal>
            <span className="eyebrow text-gold/80 mb-5 inline-flex">
              <span className="w-6 h-px bg-gold" />
              {t.home.localEyebrow}
            </span>
            <h2 className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] text-primary-foreground leading-[1.08] mb-6">
              {t.home.localTitle}
            </h2>
            <p className="text-primary-foreground/70 text-base leading-relaxed mb-8 max-w-[50ch]">
              {t.home.localDesc}
            </p>
            <Button
              asChild
              variant="premium"
              className="px-7 py-3 h-auto text-sm rounded-md"
            >
              <Link to="/international-clients">{t.home.localBtn}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 7. CLIENT SUCCESS STORIES — 3 cards                                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-background border-b border-border/40">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-2xl lg:text-3xl text-foreground text-center mb-14">
              {t.home.successTitle}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((test, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white border border-border/50 p-8 h-full flex flex-col shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote
                      size={28}
                      className="text-gold/50"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-[15px] text-foreground/80 leading-relaxed italic flex-1 mb-6">
                    "{test.quote}"
                  </p>
                  {/* Footer: icon + label + location */}
                  <div className="pt-5 border-t border-border/40 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <test.icon size={18} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {test.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {test.location}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 8. INSIGHTS & RESOURCES — 3 article cards + dark KC box            */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[hsl(var(--cream))]">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-2xl lg:text-3xl text-foreground text-center mb-14">
              {t.home.insightsTitle}
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Article cards × 3 */}
            {kcArticles.map((article, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <Link
                  to={`/knowledge-centre/${article.slug}`}
                  className="group block bg-white border border-border/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden img-zoom">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-semibold text-gold uppercase tracking-[0.15em] block mb-2">
                      {article.category}
                    </span>
                    <h3 className="font-display text-[1rem] text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <span className="text-xs text-primary font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t.home.readMore} <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}

            {/* Dark Knowledge Centre promo box */}
            <ScrollReveal delay={300}>
              <div className="bg-primary flex flex-col justify-between p-8 h-full min-h-[240px]">
                <div>
                  <div className="w-8 h-px bg-gold mb-5" />
                  <p className="text-primary-foreground text-lg lg:text-xl leading-relaxed font-display">
                    {t.home.insightsPromoBox}
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    asChild
                    variant="premium"
                    className="px-5 py-2.5 h-auto text-xs rounded-md w-full sm:w-auto"
                  >
                    <Link to="/knowledge-centre">{t.home.insightsPromoBtn}</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── PARTNER TRUST BADGE ─── */}
      <section className="py-8 bg-white border-t border-border/40">
        <div className="section-padding section-container flex flex-col items-center justify-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            {language === 'pl' ? 'Partner Biznesowy' : 'Business Partner'}
          </span>
          <img
            src="/logo-partner-ang-01.svg"
            alt="ANG Odpowiedzialne Finanse"
            className="h-10 sm:h-12 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </section>

    </>
  );
}

