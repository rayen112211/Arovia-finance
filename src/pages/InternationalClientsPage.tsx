import { Link } from "react-router-dom";
import { MessageSquare, Globe, TrendingUp, MapPin, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const skylineImgUrl = "/warsaw-night.jpg";

export default function InternationalClientsPage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: MessageSquare,
      title: t.international.feat1Title,
      desc: t.international.feat1Desc,
    },
    {
      icon: Globe,
      title: t.international.feat2Title,
      desc: t.international.feat2Desc,
    },
    {
      icon: TrendingUp,
      title: t.international.feat3Title,
      desc: t.international.feat3Desc,
    },
    {
      icon: MapPin,
      title: t.international.feat4Title,
      desc: t.international.feat4Desc,
    },
  ];

  const helpItems = [
    t.international.help1,
    t.international.help2,
    t.international.help3,
    t.international.help4,
    t.international.help5,
    t.international.help6,
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[480px] flex items-center overflow-hidden">
        {/* Skyline background */}
        <div className="absolute inset-0">
          <img
            src={skylineImgUrl}
            alt="City skyline"
            className="w-full h-full object-cover brightness-115"
            onError={(e) => { e.currentTarget.src = "/anna_and_robbie.jpg"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        </div>

        <div className="relative section-padding section-container py-16 lg:py-24 max-w-3xl">
          <ScrollReveal>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-primary-foreground mb-4">
              {t.international.heroTitle}
            </h1>
            <div className="w-10 h-px bg-gold mb-6" />
            <p className="text-xl text-primary-foreground/85 font-light mb-4">
              {t.international.heroSub}
            </p>
            <p className="text-primary-foreground/65 text-base leading-relaxed max-w-xl">
              {t.international.heroDesc}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── WHY INTERNATIONAL CLIENTS CHOOSE US ─── */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl text-center text-foreground mb-3">
              {t.international.whyTitle}
            </h2>
            <div className="w-10 h-px bg-gold mx-auto mb-14" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} direction="up" delay={i * 100}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-5">
                    <f.icon size={36} strokeWidth={1.25} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">{f.title}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WE HELP WITH ─── */}
      <section className="py-20 lg:py-24 bg-secondary">
        <div className="section-padding section-container">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-3xl lg:text-4xl text-center text-foreground mb-3">{t.international.helpTitle}</h2>
              <div className="w-10 h-px bg-gold mx-auto mb-12" />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                {helpItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2.5 border-b border-border/50">
                    <Check size={16} strokeWidth={2} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/75 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA BAR ─── */}
      <section className="bg-cream py-16 border-y border-border/40">
        <div className="section-padding section-container max-w-3xl text-center flex flex-col items-center gap-6">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl text-primary mb-3">
              {t.international.ctaTitle}
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">{t.international.ctaDesc}</p>
          </div>
          <Button variant="premium" className="rounded-md" size="lg" asChild>
            <Link to="/contact">{t.nav.cta}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
