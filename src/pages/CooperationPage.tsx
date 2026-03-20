import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Search, BarChart3, FileText, PhoneCall, CheckCircle } from "lucide-react";

export default function CooperationPage() {
  const { t } = useLanguage();
  const p = t.process;

  const steps = [
    { icon: MessageSquare, num: "01", title: p.step1, desc: p.step1Desc },
    { icon: Search, num: "02", title: p.step2, desc: p.step2Desc },
    { icon: BarChart3, num: "03", title: p.step3, desc: p.step3Desc },
    { icon: FileText, num: "04", title: p.step4, desc: p.step4Desc },
    { icon: PhoneCall, num: "05", title: p.step5, desc: p.step5Desc },
    { icon: CheckCircle, num: "06", title: p.step6, desc: p.step6Desc },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-primary overflow-hidden">
        {/* Abstract dark gradient bg - simplified */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-60" />
        
        {/* Decorative line */}
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/10 to-transparent" />

        <div className="relative section-padding section-container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow mb-6 inline-flex">
                <span className="w-8 h-px bg-gold" />
                {t.cooperationPage.label}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] text-primary-foreground leading-[1.06] mb-8">
                {t.cooperationPage.title}
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
                {t.cooperationPage.intro}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <Section className="py-20 lg:py-28 relative -mt-16">
        <div className="max-w-4xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="flex gap-6 lg:gap-12 pb-16 relative group">
                
                {/* Vertical line connector */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[38px] lg:left-[43px] top-[72px] bottom-0 w-[1px] bg-gradient-to-b from-border/50 to-border/10 group-hover:from-gold/40 group-hover:to-gold/10 transition-colors duration-500" />
                )}
                
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-[76px] h-[76px] lg:w-[88px] lg:h-[88px] rounded-full bg-background border border-border/40 flex items-center justify-center relative z-10 group-hover:border-gold/30 transition-colors duration-400">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-muted/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
                    <step.icon className="text-foreground/70 group-hover:text-gold transition-colors duration-400" size={24} strokeWidth={1.25} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="pt-3 lg:pt-5 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display text-2xl text-gold/30 group-hover:text-gold transition-colors duration-300">
                      {step.num}
                    </span>
                    <span className="w-6 h-px bg-border group-hover:bg-gold/50 transition-colors duration-300" />
                    <span className="eyebrow !text-[11px]">Phase</span>
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                    {step.title}
                  </h3>
                  <div className="bg-card rounded-md p-6 lg:p-8 border border-border/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.02)] transition-shadow duration-400">
                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        {/* Abstract dark background - simplified */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-80" />

        <div className="relative section-padding section-container text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="eyebrow justify-center mb-6 inline-flex">
              <span className="w-8 h-px bg-gold" />
              {t.ctaSection.title}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-[1.1] mb-5">
              {t.ctaSection.title}
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed text-lg">
              {t.ctaSection.description}
            </p>
            <Button variant="gold" size="xl" asChild className="group tracking-wide">
              <Link to="/consultation">
                {t.ctaSection.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
