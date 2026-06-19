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

// ─── Image URLs ───────────────────────────────────────────────────────────────
const heroTeamImg = "/anna_and_robbie.jpg";
const officeImg =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900";
const skylineImg =
  "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80&w=1600";

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
    title: "International Banking Experience",
    desc: "Decades of experience across European financial markets and international banking institutions.",
  },
  {
    icon: Briefcase,
    title: "Personal & Business Finance Expertise",
    desc: "Comprehensive solutions for both personal mortgage finance and complex business funding needs.",
  },
  {
    icon: MessageCircle,
    title: "English & Polish Client Support",
    desc: "Fully bilingual service, ensuring clear communication in English and Polish at every step.",
  },
  {
    icon: Heart,
    title: "Relationship-Driven Approach",
    desc: "We build long-term client relationships based on trust, transparency and personal care.",
  },
];

// ─── Services (How We Can Help) ───────────────────────────────────────────────
const services = [
  {
    icon: Home,
    title: "Mortgage Finance",
    desc: "Helping you secure the right mortgage solution for your home.",
    href: "/consultation",
  },
  {
    icon: Briefcase,
    title: "Business Finance",
    desc: "Tailored financing solutions for business growth, expansion and cash flow.",
    href: "/consultation",
  },
  {
    icon: Building2,
    title: "Investment Property Finance",
    desc: "Finance solutions for property investors and landlords.",
    href: "/consultation",
  },
  {
    icon: Globe,
    title: "International Clients",
    desc: "Supporting expats and foreign income earners in Poland.",
    href: "/international-clients",
  },
  {
    icon: FileText,
    title: "Complex Financial Cases",
    desc: "Specialist support for unique and challenging situations.",
    href: "/consultation",
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────
const processSteps = [
  {
    num: "1",
    icon: Users,
    title: "Consultation",
    desc: "We get to know you and your goals.",
  },
  {
    num: "2",
    icon: FileText,
    title: "Financial Review",
    desc: "We analyse your circumstances and explore the options available to you.",
  },
  {
    num: "3",
    icon: CheckCircle,
    title: "Strategy",
    desc: "We create a tailored financing strategy.",
  },
  {
    num: "4",
    icon: Building2,
    title: "Lender Engagement",
    desc: "We negotiate the best terms on your behalf.",
  },
  {
    num: "5",
    icon: CheckCircle,
    title: "Approval & Completion",
    desc: "We guide you through to a successful outcome.",
  },
  {
    num: "6",
    icon: Heart,
    title: "Ongoing Support",
    desc: "We're here for you, beyond the deal.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    icon: Home,
    quote:
      "Arovia helped us secure a mortgage in Poland when we were still abroad. The whole process was smooth and stress-free.",
    label: "Property Purchase",
    location: "Warsaw",
  },
  {
    icon: Briefcase,
    quote:
      "Thanks to Jay's guidance, we obtained financing for our business expansion. His advice was excellent.",
    label: "Business Finance",
    location: "Logistics Company",
  },
  {
    icon: Building2,
    quote:
      "Professional, responsive and always looking for the best advice on property investment. Highly recommend.",
    label: "Investment Property",
    location: "Kraków",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 1. HERO                                                              */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary min-h-[88vh] flex items-center">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(222,47%,16%)]" />

        {/* Hero image — right half */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0">
          <img
            src={heroTeamImg}
            alt="Anna Rosinska and Jay Arora, Founders of Arovia Finance"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              e.currentTarget.src = "/anna_and_robbie1.jpg";
            }}
          />
          {/* Left-side gradient fade into navy */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/60 to-transparent" />
        </div>

        {/* Mobile top-gradient over image */}
        <div className="absolute inset-0 bg-primary/60 lg:hidden z-[1]" />

        {/* Content */}
        <div className="relative z-10 section-padding section-container w-full py-24 lg:py-32 grid lg:grid-cols-2 gap-0">
          <div className="max-w-[600px]">
            <ScrollReveal>
              <h1 className="font-display text-[2.4rem] sm:text-[3rem] lg:text-[3.4rem] text-primary-foreground leading-[1.07] tracking-tight mb-6">
                A Trusted Financial Partner for Individuals, Entrepreneurs and
                International Clients
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-primary-foreground/75 text-base lg:text-lg leading-relaxed mb-8 max-w-[52ch]">
                Whether you're buying a home, growing a business, investing in
                property or relocating to Poland, we help you make confident
                financial decisions with expert guidance and personal support.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-gold text-primary hover:bg-gold/90 font-semibold px-7 py-3 h-auto text-sm rounded-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/consultation">Book a Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 px-7 py-3 h-auto text-sm rounded-none"
                >
                  <Link to="/how-we-work">How We Work</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Name-card overlay — visible on desktop, bottom-right of image */}
          <div className="hidden lg:flex items-end justify-end pb-10 pr-0">
            <ScrollReveal delay={400}>
              <div className="bg-primary/90 backdrop-blur-sm border border-primary-foreground/20 p-5 max-w-[280px] shadow-2xl">
                <div className="w-8 h-px bg-gold mb-3" />
                <p className="font-display text-primary-foreground text-lg leading-snug mb-1">
                  Anna Rosinska &amp; Jay Arora
                </p>
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                  Founders of Arovia Finance
                </p>
                <p className="text-primary-foreground/65 text-xs leading-relaxed">
                  Combining international banking experience with a personal,
                  client-focused approach.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 2. WHY CLIENTS CHOOSE AROVIA FINANCE                                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-background border-b border-border/40">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-2xl lg:text-3xl text-foreground text-center mb-14">
              Why Clients Choose Arovia Finance
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {whyItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                    <item.icon
                      size={26}
                      className="text-gold"
                      strokeWidth={1.25}
                    />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
      <section className="py-20 lg:py-28 bg-background">
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
                    className="w-32 opacity-70 drop-shadow-lg"
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
                  A Relationship Built on Trust
                </span>
                <h2 className="font-display text-[1.9rem] sm:text-[2.4rem] lg:text-[2.6rem] text-foreground leading-[1.1] mb-6">
                  The best financial decisions are rarely the quickest ones.
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                  <p>
                    They require experience, careful analysis and a trusted
                    partner who understands both the opportunities and the
                    challenges ahead.
                  </p>
                  <p>
                    At Arovia Finance, we help individuals, entrepreneurs and
                    international clients navigate important financial decisions
                    with confidence, providing independent guidance tailored to
                    their unique circumstances and ambitions.
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-gold text-primary hover:bg-gold/90 font-semibold px-6 py-2.5 h-auto text-sm rounded-none"
                  >
                    <Link to="/about">Learn More About Us</Link>
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
      <section className="py-20 lg:py-28 bg-[hsl(var(--cream))] border-y border-border/40">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-2xl lg:text-3xl text-foreground text-center mb-14">
              How We Can Help
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <Link to={s.href} className="group block h-full">
                  <div className="bg-white border border-border/50 p-7 h-full flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                      <s.icon
                        size={22}
                        className="text-gold"
                        strokeWidth={1.25}
                      />
                    </div>
                    <h3 className="font-display text-base lg:text-[1.05rem] text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">
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
      <section className="py-20 lg:py-28 bg-background">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-2xl lg:text-3xl text-foreground text-center mb-14">
              A Clear and Transparent Process
            </h2>
          </ScrollReveal>

          {/* Cream boxed container with steps */}
          <ScrollReveal>
            <div className="bg-[hsl(var(--cream))] border border-border/40 rounded-sm px-8 py-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-2">
                {processSteps.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 sm:gap-0 sm:flex-1"
                  >
                    {/* Step block */}
                    <div className="flex flex-col items-center sm:w-full">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-3 shadow-sm">
                        <step.icon
                          size={20}
                          className="text-primary-foreground"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="font-display text-xs text-gold font-bold mb-1">
                        {step.num}
                      </span>
                      <h3 className="font-display text-sm text-foreground text-center leading-snug mb-1 max-w-[90px]">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground text-center leading-snug max-w-[90px]">
                        {step.desc}
                      </p>
                    </div>

                    {/* Arrow connector (not after last item) */}
                    {i < processSteps.length - 1 && (
                      <div className="hidden sm:flex items-center justify-center text-gold/50 mx-1 mt-[-2.5rem]">
                        <ArrowRight size={18} />
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
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 h-auto text-sm rounded-none font-semibold"
              >
                <Link to="/how-we-work">View Full Process</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 6. LOCAL EXPERTISE. INTERNATIONAL PERSPECTIVE. — navy skyline banner */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-primary">
        {/* Warsaw skyline background */}
        <div className="absolute inset-0 z-0">
          <img
            src={skylineImg}
            alt="Warsaw skyline"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>

        <div className="relative z-10 section-padding section-container max-w-3xl">
          <ScrollReveal>
            <span className="eyebrow text-gold/80 mb-5 inline-flex">
              <span className="w-6 h-px bg-gold" />
              Supporting International Clients in Poland
            </span>
            <h2 className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] text-primary-foreground leading-[1.08] mb-6">
              Local expertise. International perspective.
            </h2>
            <p className="text-primary-foreground/70 text-base leading-relaxed mb-8 max-w-[50ch]">
              Whether you're relocating to Poland, purchasing property or
              earning income abroad, we provide guidance and support throughout
              the financing process, in English.
            </p>
            <Button
              asChild
              className="bg-gold text-primary hover:bg-gold/90 font-semibold px-7 py-3 h-auto text-sm rounded-none"
            >
              <Link to="/international-clients">Learn More</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 7. CLIENT SUCCESS STORIES — 3 cards                                */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-background border-b border-border/40">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-2xl lg:text-3xl text-foreground text-center mb-14">
              Client Success Stories
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
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
                    "{t.quote}"
                  </p>
                  {/* Footer: icon + label + location */}
                  <div className="pt-5 border-t border-border/40 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <t.icon size={18} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {t.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {t.location}
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
      <section className="py-20 lg:py-28 bg-[hsl(var(--cream))]">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-2xl lg:text-3xl text-foreground text-center mb-14">
              Insights &amp; Resources
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
                      Read more <ArrowRight size={12} />
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
                  <p className="text-primary-foreground text-base leading-relaxed font-display">
                    Visit our Knowledge Centre for more articles and guides
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-gold text-primary hover:bg-gold/90 font-semibold px-5 py-2.5 h-auto text-xs rounded-none w-full sm:w-auto"
                  >
                    <Link to="/knowledge-centre">Visit Knowledge Centre</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* 9. CONTACT CTA BAR — eyebrow + heading + inline form + contact info */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
            {/* Left: Heading + contact details */}
            <ScrollReveal direction="left">
              <div>
                <span className="eyebrow text-gold/80 mb-5 inline-flex">
                  <span className="w-6 h-px bg-gold" />
                  Let's Discuss Your Plans
                </span>
                <h2 className="font-display text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] text-primary-foreground leading-[1.1] mb-5">
                  Every financial journey begins with a conversation.
                </h2>
                <p className="text-primary-foreground/65 text-base leading-relaxed mb-10">
                  Whether you're purchasing a property, expanding a business or
                  exploring financing options in Poland, we're here to help.
                </p>

                {/* Contact details */}
                <div className="space-y-5">
                  {[
                    {
                      icon: Phone,
                      label: "+48 733 985 458",
                      href: "tel:+48733985458",
                    },
                    {
                      icon: Mail,
                      label: "contact@aroviafinance.pl",
                      href: "mailto:contact@aroviafinance.pl",
                    },
                    {
                      icon: MapPin,
                      label: "Warsaw, Poland",
                      href: undefined,
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      href: "https://linkedin.com",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                        <item.icon
                          size={16}
                          className="text-gold"
                          strokeWidth={1.5}
                        />
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="text-primary-foreground/80 text-sm">
                          {item.label}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Mini contact form */}
            <ScrollReveal direction="right">
              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-11 px-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-gold/60 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-11 px-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-gold/60 transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-11 px-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-gold/60 transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm resize-none focus:outline-none focus:border-gold/60 transition-colors"
                />
                <Button
                  type="submit"
                  className="bg-gold text-primary hover:bg-gold/90 font-semibold px-8 py-3 h-auto text-sm rounded-none w-full"
                >
                  Book a Consultation
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
