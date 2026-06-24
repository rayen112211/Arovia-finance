import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Star, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const officeImgUrl = "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1600";

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t.about.val1Title,
      desc: t.about.val1Desc,
    },
    {
      icon: Users,
      title: t.about.val2Title,
      desc: t.about.val2Desc,
    },
    {
      icon: Star,
      title: t.about.val3Title,
      desc: t.about.val3Desc,
    },
    {
      icon: Globe,
      title: t.about.val4Title,
      desc: t.about.val4Desc,
    },
  ];

  const stats = [
    { value: 15, suffix: "+", label: t.about.stat1Label },
    { value: 1000, suffix: "+", label: t.about.stat2Label },
    { value: 20, suffix: "+", label: t.about.stat3Label },
    { prefix: t.about.stat4Prefix, label: t.about.stat4Label },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-white border-b border-border/40 overflow-hidden">
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[520px] items-center">
            {/* Left copy */}
            <div className="py-16 lg:py-24 pr-0 lg:pr-16">
              <ScrollReveal>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-5">
                  {t.about.eyebrow}
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-foreground mb-8">
                  {t.about.heroTitle}
                </h1>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="text-foreground/75 text-base leading-relaxed mb-4">
                  {t.about.heroP1}
                </p>
                <p className="text-foreground/75 text-base leading-relaxed">
                  {t.about.heroP2}
                </p>
              </ScrollReveal>
            </div>

            {/* Right image */}
            <div className="hidden lg:block relative h-full min-h-[520px]">
              <img
                src="/anna_and_robbie-hq.jpg"
                alt="Anna Rosinska and Jay — Founders of Arovia Finance"
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.src = "/anna_and_robbie1-hq.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MEET THE FOUNDERS ─── */}
      <section className="py-16 lg:py-32 bg-background">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-4xl lg:text-5xl text-center text-foreground mb-4">{t.about.foundersTitle}</h2>
            <div className="w-12 h-px bg-gold mx-auto mb-20 lg:mb-28" />
          </ScrollReveal>

          <div className="space-y-24 lg:space-y-32">
            {/* Jay */}
            <ScrollReveal direction="up" delay={100}>
              <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-center">
                <div className="order-2 lg:order-1 flex-1">
                  <h3 className="font-display text-3xl lg:text-4xl text-foreground mb-2">Jay Arora</h3>
                  <p className="text-base font-semibold text-gold tracking-wide mb-6">Co-Founder &amp; Financial Advisor</p>
                  <div className="space-y-5 mb-8">
                    <p className="text-base text-foreground/75 leading-relaxed">
                      {t.about.jayP1}
                    </p>
                    <p className="text-base text-foreground/75 leading-relaxed">
                      {t.about.jayP2}
                    </p>
                    <p className="text-base text-foreground/75 leading-relaxed">
                      {t.about.jayP3}
                    </p>
                  </div>
                  <div className="pl-6 border-l-2 border-gold/50 mb-8">
                    <p className="text-base font-medium text-foreground italic">
                      "{t.about.jayHighlight}"
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold tracking-wider uppercase mb-1">
                      {t.about.jayLangTitle}
                    </p>
                    <p className="text-base text-foreground/85">
                      {t.about.jayLang}
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2 w-full rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src="/robbie-hq.jpg"
                    alt="Jay Arora"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Anna */}
            <ScrollReveal direction="up" delay={200}>
              <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-20 items-center">
                <div className="order-1 w-full rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src="/anna-hq.jpg"
                    alt="Anna Rosinska"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="order-2 flex-1">
                  <h3 className="font-display text-3xl lg:text-4xl text-foreground mb-2">Anna Jakimiak</h3>
                  <p className="text-base font-semibold text-gold tracking-wide mb-6">Co-Founder &amp; Financial Advisor</p>
                  <div className="space-y-5 mb-8">
                    <p className="text-base text-foreground/75 leading-relaxed">
                      {t.about.annaP1}
                    </p>
                    <p className="text-base text-foreground/75 leading-relaxed">
                      {t.about.annaP2}
                    </p>
                  </div>
                  <div className="pl-6 border-l-2 border-gold/50 mb-8">
                    <p className="text-base font-medium text-foreground italic">
                      "{t.about.annaHighlight}"
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gold tracking-wider uppercase mb-1">
                      {t.about.annaLangTitle}
                    </p>
                    <p className="text-base text-foreground/85">
                      {t.about.annaLang}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── OUR VALUES ─── */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl text-center text-foreground mb-3">{t.about.valuesTitle}</h2>
            <div className="w-10 h-px bg-gold mx-auto mb-14" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} direction="up" delay={i * 100}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-5">
                    <v.icon size={36} strokeWidth={1.25} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">{v.title}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE STATS BAR ─── */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-2xl lg:text-3xl text-center text-primary-foreground mb-3">{t.about.statsTitle}</h2>
            <div className="w-10 h-px bg-gold mx-auto mb-12" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="flex flex-col items-center text-center px-4">
                  {/* Icon placeholder */}
                  <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                    {i === 0 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>}
                    {i === 1 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                    {i === 2 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                    {i === 3 && <Globe size={28} strokeWidth={1.5} className="text-gold" />}
                  </div>
                  <div className="font-display text-4xl lg:text-5xl font-light text-primary-foreground mb-2">
                    {stat.prefix ? (
                      stat.prefix
                    ) : (
                      <><AnimatedNumber end={stat.value!} />{stat.suffix}</>
                    )}
                  </div>
                  <p className="text-xs text-primary-foreground/60 leading-relaxed max-w-[140px]">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LET'S WORK TOGETHER ─── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <ScrollReveal direction="up" delay={100}>
              <div className="rounded-sm overflow-hidden aspect-[4/3]">
                <img
                  src={officeImgUrl}
                  alt="Arovia Finance office"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "/anna_and_robbie1.jpg"; }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-6">{t.about.workTogetherTitle}</h2>
              <p className="text-foreground/70 leading-relaxed mb-8">
                {t.about.workTogetherDesc}
              </p>
              <Button variant="premium" size="lg" asChild className="rounded-md">
                <Link to="/contact">{t.nav.cta}</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
