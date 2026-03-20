import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Home, RefreshCw, Briefcase, Building2, Compass,
  Phone, Mail, MapPin, ArrowRight, Quote, UserCheck
} from "lucide-react";
import heroImg from "@/assets/hero-consultation.jpg";
import advisorImg from "@/assets/advisor-portrait.jpg";
import signingImg from "@/assets/signing-documents.jpg";
import propertyImg from "@/assets/property.jpg";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export default function HomePage() {
  const { t } = useLanguage();

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

  const mediaItems = [
    { title: t.mediaSection.placeholderTitle, outlet: t.mediaSection.placeholderOutlet, date: t.mediaSection.placeholderDate, image: signingImg },
    { title: t.mediaSection.placeholderTitle2, outlet: t.mediaSection.placeholderOutlet2, date: t.mediaSection.placeholderDate2, image: propertyImg },
    { title: t.mediaSection.placeholderTitle3, outlet: t.mediaSection.placeholderOutlet3, date: t.mediaSection.placeholderDate3, image: heroImg },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center bg-primary overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        </div>

        {/* Decorative gold line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

        <div className="relative section-padding section-container py-32 lg:py-44">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow mb-8 inline-flex">
                <span className="w-8 h-px bg-gold" />
                {t.hero.subtitle}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] text-primary-foreground leading-[1.06] mb-6 lg:mb-8">
                {t.hero.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <p className="text-lg sm:text-xl text-primary-foreground/65 max-w-xl leading-relaxed mb-10">
                {t.hero.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={360}>
              <div className="flex flex-wrap gap-5 items-center">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/consultation">{t.hero.cta}</Link>
                </Button>
                <div className="hidden sm:flex items-center gap-3 pl-5 border-l border-primary-foreground/20 h-10">
                  <span className="text-sm text-primary-foreground/80 font-medium tracking-wide">{t.hero.trustBadges}</span>
                </div>
              </div>
              {/* Mobile trust badge */}
              <div className="sm:hidden mt-6 flex items-center gap-3">
                  <span className="text-xs text-primary-foreground/80 font-medium tracking-wide">{t.hero.trustBadges}</span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ─── STATS ─── */}
      <Section className="py-14 lg:py-16 border-b border-border">
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
              <div className="relative overflow-hidden rounded-sm shadow-2xl img-zoom">
                <img
                  src={advisorImg}
                  alt="Financial advisor at Arovia Finance"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border border-gold/20 rounded-sm -z-10" />
              <div className="absolute -bottom-3 -right-3 w-1/3 h-1/3 bg-gold/10 rounded-sm -z-10" />
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <Link to={service.href} className="group block h-full">
                <div className="premium-card p-8 h-full flex flex-col cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                  <div className="mb-5 w-12 h-12 rounded-full bg-primary/6 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                    <service.icon
                      className="text-gold group-hover:scale-110 transition-transform duration-300"
                      size={22}
                      strokeWidth={1.5}
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
              <div className="premium-card p-8 h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote size={28} className="text-gold/40" strokeWidth={1.5} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.text}
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
              <div className="group block cursor-default">
                <div className="aspect-video rounded-sm overflow-hidden mb-5 img-zoom shadow-sm cursor-default">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="eyebrow text-[10px]">
                  <span className="w-4 h-px bg-gold" />
                  {item.outlet}
                </span>
                <h3 className="font-display text-lg text-foreground mt-2 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
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
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

        <div className="relative section-padding section-container text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="eyebrow justify-center mb-6 inline-flex">
              <span className="w-8 h-px bg-gold" />
              {t.ctaSection.title}
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
