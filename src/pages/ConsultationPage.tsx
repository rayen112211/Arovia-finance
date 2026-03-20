import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Lightbulb, Target, TrendingUp } from "lucide-react";
import handshakeImg from "@/assets/handshake.jpg";

export default function ConsultationPage() {
  const { t } = useLanguage();
  const c = t.consultationPage;

  const benefits = [
    { icon: Lightbulb, title: c.benefit1Title, text: c.benefit1Text },
    { icon: Target, title: c.benefit2Title, text: c.benefit2Text },
    { icon: TrendingUp, title: c.benefit3Title, text: c.benefit3Text },
  ];

  const steps = [c.step1, c.step2, c.step3, c.step4];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={handshakeImg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        </div>
        
        {/* Decorative line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

        <div className="relative section-padding section-container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow mb-6 inline-flex">
                <span className="w-8 h-px bg-gold" />
                {c.label}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] text-primary-foreground leading-[1.06] mb-8">
                {c.title}
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed">
                {c.intro}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <Section className="py-24 lg:py-32">
        {/* Benefits Row */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-28 border-b border-border pb-24">
          {benefits.map((b, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="text-center group">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                  <b.icon className="text-gold" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl lg:text-2xl text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Form & Process Row */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: What Happens */}
          <div className="lg:pr-10 lg:sticky lg:top-32">
            <ScrollReveal direction="left">
              <span className="eyebrow mb-6 inline-flex text-primary">
                <span className="w-8 h-px bg-primary/30" />
                The Process
              </span>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-10 leading-[1.1]">
                {c.whatHappens}
              </h2>
              
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors duration-300">
                      <span className="text-sm font-display text-primary group-hover:text-gold-dark">{i + 1}</span>
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-lg mb-1">{step}</p>
                      <p className="text-muted-foreground text-sm">Clear and transparent from day one.</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges/info */}
              <div className="mt-16 p-6 bg-muted/30 rounded-sm border border-border">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Commitment Free</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Your first consultation is entirely complimentary. We only move forward if you are completely comfortable with the proposed strategy and understand all options available to you.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <div className="lg:-mt-10">
            <ScrollReveal direction="right" delay={200}>
              <div className="premium-card p-8 sm:p-10 lg:p-12 shadow-xl border-border/60 relative overflow-hidden">
                {/* Form header accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold/50 to-gold" />
                
                <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-8">
                  {c.formTitle}
                </h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="form-label">{c.formName}</label>
                    <input type="text" className="form-input" placeholder="e.g. Michał Kowalski" required />
                  </div>
                  <div>
                    <label className="form-label">{c.formEmail}</label>
                    <input type="email" className="form-input" placeholder="michal@example.com" required />
                  </div>
                  <div>
                    <label className="form-label">{c.formPhone}</label>
                    <input type="tel" className="form-input" placeholder="+48 ___ ___ ___" />
                  </div>
                  <div>
                    <label className="form-label">{c.formMessage}</label>
                    <textarea 
                      rows={5} 
                      className="form-textarea" 
                      placeholder="Briefly describe what you're looking to achieve..." 
                      required
                    />
                  </div>
                  <Button variant="gold" size="xl" className="w-full mt-4 text-[15px] shadow-md hover:shadow-lg">
                    {c.formSubmit}
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground mt-6">
                    By submitting this form, you agree to our privacy policy. Your information is kept strictly confidential.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>
    </>
  );
}
