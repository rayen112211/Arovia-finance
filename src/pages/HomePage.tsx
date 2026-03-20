import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Building2, Compass, Home, RefreshCw, UserCheck, Quote, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedNumber } from "@/components/AnimatedNumber";

const heroImgUrl = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2400";
const advisorImgUrl = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200";
const propertyImgUrl = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200";
const fallbackMediaImgUrl = "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&q=80&w=1400";

export default function HomePage() {
  const { t, language } = useLanguage();


  const stats = [
    { value: t.trust.years, suffix: t.trust.yearsSuffix, label: t.trust.yearsLabel, isNumber: true },
    { value: t.trust.clients, suffix: t.trust.clientsSuffix, label: t.trust.clientsLabel, isNumber: true },
    { value: t.trust.banks, suffix: "", label: t.trust.banksLabel, isNumber: false },
    { value: t.trust.satisfaction, suffix: t.trust.satisfactionSuffix, label: t.trust.satisfactionLabel, isNumber: true },
  ];

  const services = [
    { icon: Home, title: t.services.homeMortgages, desc: t.services.homeMortgagesDesc, href: "/consultation" },
    { icon: RefreshCw, title: t.services.refinancing, desc: t.services.refinancingDesc, href: "/consultation" },
    { icon: UserCheck, title: t.services.firstTimeBuyer, desc: t.services.firstTimeBuyerDesc, href: "/consultation" },
    { icon: Briefcase, title: t.services.selfEmployed, desc: t.services.selfEmployedDesc, href: "/consultation" },
    { icon: Building2, title: t.services.complexCases, desc: t.services.complexCasesDesc, href: "/consultation" },
    { icon: Compass, title: t.services.independent, desc: t.services.independentDesc, href: "/consultation" },
  ];

  const processSteps = [
    { num: "01", title: t.process.step1, desc: t.process.step1Desc },
    { num: "02", title: t.process.step2, desc: t.process.step2Desc },
    { num: "03", title: t.process.step3, desc: t.process.step3Desc },
    { num: "04", title: t.process.step4, desc: t.process.step4Desc },
    { num: "05", title: t.process.step5, desc: t.process.step5Desc },
    { num: "06", title: t.process.step6, desc: t.process.step6Desc },
  ];

  const testimonials = [
    {
      name: t.testimonials.placeholderName,
      role: t.testimonials.placeholderRole,
      text: t.testimonials.placeholderText,
      initials: "PC",
    },
    {
      name: t.testimonials.placeholderName2,
      role: t.testimonials.placeholderRole2,
      text: t.testimonials.placeholderText2,
      initials: "RC",
    },
    {
      name: t.testimonials.placeholderName3,
      role: t.testimonials.placeholderRole3,
      text: t.testimonials.placeholderText3,
      initials: "EC",
    },
  ];

  const mediaItems = language === "pl"
    ? [
        {
          source: "NBP",
          title: "Jak obniżki stóp mogą wpłynąć na popyt na kredyty hipoteczne",
          description: "Syntetyczne wnioski z raportu stabilności finansowej NBP i ich znaczenie dla rynku mieszkaniowego.",
          date: "Czerwiec 2025",
          image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1400",
          href: "https://nbp.pl/wp-content/uploads/2025/06/Raport-o-stabilnosci-systemu-finansowego.-Czerwiec-2025-r._EN.pdf",
        },
        {
          source: "NBP",
          title: "Co polityka pieniężna oznacza dla kredytobiorców",
          description: "Praktyczne spojrzenie na stopy procentowe, inflację i koszt finansowania w 2024 roku.",
          date: "Maj 2025",
          image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1400",
          href: "https://nbp.pl/wp-content/uploads/2025/05/Report-on-Monetary-Policy-2024.pdf",
        },
        {
          source: "Ministerstwo Finansów",
          title: "Jak przedsiębiorca powinien przygotować rozliczenie podatkowe",
          description: "Kluczowe informacje o PIT-28 i dokumentach, które warto uporządkować przed rozmową o kredycie.",
          date: "Aktualizacja 2024/2025",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400",
          href: "https://podatki-arch.mf.gov.pl/en/your-e-pit/pit-28-for-2024/",
        },
      ]
    : [
        {
          source: "NBP",
          title: "How Rate Cuts May Affect Mortgage Demand in Poland",
          description: "A practical reading of NBP's stability report and what it may mean for mortgage activity.",
          date: "June 2025",
          image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1400",
          href: "https://nbp.pl/wp-content/uploads/2025/06/Raport-o-stabilnosci-systemu-finansowego.-Czerwiec-2025-r._EN.pdf",
        },
        {
          source: "NBP",
          title: "What Monetary Policy Means for Borrowers",
          description: "Key borrower takeaways from the NBP Report on Monetary Policy 2024.",
          date: "May 2025",
          image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1400",
          href: "https://nbp.pl/wp-content/uploads/2025/05/Report-on-Monetary-Policy-2024.pdf",
        },
        {
          source: "Ministry of Finance",
          title: "What Self-Employed Borrowers Should Prepare Financially",
          description: "Official e-PIT guidance that helps business owners organize tax records before applying.",
          date: "Updated for 2024/2025",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400",
          href: "https://podatki-arch.mf.gov.pl/en/your-e-pit/pit-28-for-2024/",
        },
      ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-24 lg:pt-28 pb-16 lg:pb-20 border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImgUrl}
            alt="Mortgage advisor in a professional office"
            className="w-full h-full object-cover object-[72%_35%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,30,68,0.62)_0%,rgba(11,30,68,0.55)_34%,rgba(11,30,68,0.2)_62%,rgba(11,30,68,0.08)_100%)]" />
        </div>

        <div className="section-padding section-container relative min-h-[72vh] lg:min-h-[78vh] flex items-center">
          <div className="max-w-[680px] bg-background/85 nav-blur border border-white/40 rounded-sm p-7 sm:p-10 lg:p-12 shadow-[0_18px_48px_rgba(0,0,0,0.12)]">
            <ScrollReveal>
              <span className="eyebrow mb-5 inline-flex">
                <span className="w-8 h-px bg-gold" />
                {t.hero.subtitle}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <h1 className="font-display text-[38px] sm:text-[50px] lg:text-[60px] text-foreground leading-[1.08] tracking-tight mb-5">
                {t.hero.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={220}>
              <p className="font-medium text-foreground/80 text-base lg:text-lg mb-4">{t.hero.trustBadges}</p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-[56ch]">
                {t.hero.description}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={380}>
              <Button variant="gold" size="xl" asChild className="h-13 px-8 text-[15px]">
                <Link to="/consultation">{t.hero.cta}</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ─── STATS ─── */}
      <Section className="py-16 lg:py-20 border-b border-border/40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="text-center group">
                <div className="font-display text-4xl lg:text-5xl text-primary mb-1.5 flex justify-center items-center">
                  {stat.isNumber ? (
                    <AnimatedNumber end={Number(stat.value)} suffix={stat.suffix} />
                  ) : (
                    <span>{stat.value}</span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-[0.1em] font-medium">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ─── ABOUT ─── */}
      <Section className="py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm shadow-md img-zoom">
                <img
                  src={advisorImgUrl}
                  alt="Financial advisor at Arovia Finance"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-primary/5" />
              </div>
              {/* Decorative element - Thinner, cleaner lines */}
              <div className="absolute -bottom-6 -right-6 w-1/3 h-1/3 border border-border rounded-sm -z-10 bg-muted/20" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <SectionHeader label={t.about.label} title={t.about.title} />
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="default" size="lg" asChild>
                  <Link to="/experience">
                    {t.nav.experience} <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/consultation">
                    {t.nav.cta}
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ─── SERVICES ─── */}
      <Section variant="muted" className="py-24 lg:py-32">
        <ScrollReveal>
          <SectionHeader label={t.services.label} title={t.services.title} align="center" />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <Link to={service.href} className="group block h-full">
                <div className="bg-card rounded-md p-10 h-full flex flex-col border border-border/40 hover:border-border/80 hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-400 ease-out">
                  <div className="mb-8 w-14 h-14 rounded-full bg-muted/60 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-400">
                    <service.icon
                      className="text-foreground/70 group-hover:text-gold transition-colors duration-400"
                      size={24}
                      strokeWidth={1.25}
                    />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {service.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-gold transition-colors duration-200">
                    {t.nav.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ─── PROCESS ─── */}
      <Section className="py-24 lg:py-32">
        <ScrollReveal>
          <SectionHeader label={t.process.label} title={t.process.title} align="center" />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {processSteps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="relative group">
                <span className="font-display text-6xl text-gold/15 group-hover:text-gold/25 transition-colors duration-300 leading-none block mb-2">
                  {step.num}
                </span>
                <h3 className="font-display text-lg lg:text-xl text-foreground mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={500}>
          <div className="text-center mt-14">
             <Button variant="default" size="lg" asChild>
               <Link to="/cooperation">
                 {t.nav.cooperation} <ArrowRight size={16} />
               </Link>
             </Button>
           </div>
         </ScrollReveal>
       </Section>

      {/* ─── TESTIMONIALS ─── */}
      <Section variant="muted" className="py-24 lg:py-32">
        <ScrollReveal>
          <SectionHeader label={t.testimonials.label} title={t.testimonials.title} align="center" />
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card rounded-md p-10 h-full flex flex-col border border-border/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.02)] transition-shadow duration-400">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote size={24} className="text-muted-foreground/30" strokeWidth={1} />
                </div>
                <p className="text-[15px] text-foreground/80 leading-relaxed flex-1 italic">
                  "{item.text}"
                </p>
                {/* Stars */}
                <div className="flex gap-0.5 my-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-gold text-base">★</span>
                  ))}
                </div>
                <div className="pt-4 border-t border-border flex items-center gap-3">
                  {/* Avatar with initials */}
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold text-primary-foreground">
                      {item.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={400}>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/opinions">
                {t.testimonials.viewAll} <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* ─── MEDIA PREVIEW ─── */}
      <Section className="py-24 lg:py-32">
        <ScrollReveal>
          <SectionHeader label={t.mediaSection.label} title={t.mediaSection.title} align="center" />
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {mediaItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block h-full cursor-pointer"
                aria-label={`${item.title} (${item.source})`}
              >
                <div className="aspect-[16/10] rounded-sm overflow-hidden mb-4 img-zoom border border-border/40 group-hover:border-border/80 transition-colors">
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
                <span className="eyebrow text-[10px] mb-2">
                  <span className="w-4 h-[1px] bg-gold/50" />
                  {item.source}
                </span>
                <h3 className="font-display text-xl text-foreground mb-2 leading-snug group-hover:text-gold transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.description}</p>
                <span className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
                  {item.date} <ExternalLink size={13} className="opacity-70" />
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/media">
                {t.mediaSection.viewAll} <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-28 lg:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={propertyImgUrl} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-primary/95" />
        </div>
        {/* Decorative elements - Cleaned up to be more subtle */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-border/5 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-border/5 to-transparent" />

        <div className="relative section-padding section-container text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="eyebrow justify-center mb-6 inline-flex">
              <span className="w-8 h-px bg-gold" />
              {t.nav.consultation}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-[1.1] mb-5">
              {t.ctaSection.title}
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed">
              {t.ctaSection.description}
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/consultation">{t.ctaSection.cta}</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CONTACT PREVIEW ─── */}
      <Section className="py-20 lg:py-24">
        <ScrollReveal>
          <SectionHeader
            label={t.contactPreview.label}
            title={t.contactPreview.title}
            align="center"
          />
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { icon: Mail, label: t.contactPreview.email, value: "info@aroviafinance.com", href: "mailto:info@aroviafinance.com" },
            { icon: Phone, label: t.contactPreview.phone, value: "+48 123 456 789", href: "tel:+48123456789" },
            { icon: MapPin, label: t.contactPreview.location, value: t.contactPreview.locationValue, href: undefined },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="text-center group">
                <div className="w-12 h-12 rounded-full bg-primary/6 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/10 transition-colors duration-300">
                  <item.icon className="text-gold" size={18} strokeWidth={1.5} />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-[0.1em] mb-1.5">
                  {item.label}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-gold transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="text-sm font-medium text-foreground">{item.value}</div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
