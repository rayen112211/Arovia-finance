import { useLanguage } from "@/i18n/LanguageContext";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

// Authentic stock image for Contact Hero/location
const warsawImgUrl = "https://images.unsplash.com/photo-1549749504-20412e84d436?q=80&w=2574&auto=format&fit=crop"; // Warsaw skyline or similar premium corporate location

export default function ContactPage() {
  const { t, language } = useLanguage();
  const c = t.contactPage;

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-36 bg-primary overflow-hidden">
        {/* Abstract dark gradient bg - simplified for elegance */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-60" />
        
        {/* Decorative line */}
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/10 to-transparent" />

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

      {/* ─── CONTACT SECTION ─── */}
      <Section className="py-12 lg:py-16 relative -mt-12 lg:-mt-24">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-card rounded-md p-8 sm:p-10 lg:p-12 border border-border/40 hover:shadow-[0_8px_32px_rgba(0,0,0,0.02)] transition-shadow duration-400 relative overflow-hidden h-full">
                {/* Form header accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/80 to-gold/30" />
                
                <h2 className="font-display text-2xl lg:text-3xl text-foreground mb-8">
                  {c.formTitle}
                </h2>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">{c.formName}</label>
                      <input type="text" className="form-input" placeholder={language === "pl" ? "np. Anna Wiśniewska" : "e.g. Anna Wisniewska"} required />
                    </div>
                    <div>
                      <label className="form-label">{c.formEmail}</label>
                      <input type="email" className="form-input" placeholder="anna@example.com" required />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">{c.formPhone}</label>
                      <input type="tel" className="form-input" placeholder="+48 ___ ___ ___" />
                    </div>
                    <div>
                      <label className="form-label">{c.formSubject}</label>
                      <input type="text" className="form-input" placeholder={language === "pl" ? "Krótko: czego dotyczy sprawa?" : "How can we help?"} />
                    </div>
                  </div>
                  
                  <div>
                    <label className="form-label">{c.formMessage}</label>
                    <textarea 
                      rows={6} 
                      className="form-textarea" 
                      placeholder={language === "pl" ? "Podaj najważniejsze informacje dotyczące sprawy..." : "Please provide any relevant details..."} 
                      required
                    />
                  </div>
                  
                  <Button variant="gold" size="xl" className="w-full mt-4 text-[15px] shadow-md hover:shadow-lg">
                    {c.formSubmit}
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Details & Map wrapper */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <ScrollReveal direction="left" delay={200}>
              <div className="bg-card rounded-md p-8 sm:p-10 border border-border/40">
                <h2 className="font-display text-2xl text-foreground mb-8">
                  {c.detailsTitle}
                </h2>
                
                <div className="space-y-8">
                  {[
                    { icon: Mail, label: t.contactPreview.email, value: "info@aroviafinance.com", href: "mailto:info@aroviafinance.com" },
                    { icon: Phone, label: t.contactPreview.phone, value: "+48 123 456 789", href: "tel:+48123456789" },
                    { icon: MapPin, label: t.contactPreview.location, value: t.contactPreview.locationValue, href: undefined },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start group">
                      <div className="w-12 h-12 rounded-full bg-muted/60 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-400">
                        <item.icon className="text-foreground/70 group-hover:text-gold transition-colors duration-400" size={20} strokeWidth={1.25} />
                      </div>
                      <div className="pt-1">
                        <div className="text-xs text-muted-foreground uppercase tracking-[0.1em] font-medium mb-1">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a href={item.href} className="text-[15px] font-medium text-foreground hover:text-gold transition-colors duration-200 block">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-[15px] font-medium text-foreground leading-snug">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={300}>
              <div className="relative rounded-sm overflow-hidden aspect-[4/3] img-zoom group border border-border/40">
                <img 
                  src={warsawImgUrl} 
                  alt="Warsaw skyline" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500" />
                {/* Decorative overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/95 nav-blur p-4 rounded-sm border border-border/50 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <MapPin size={16} className="text-gold" /> {language === "pl" ? "Spotkania w Warszawie lub online." : "Available for meetings in Warsaw or online."}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </Section>
    </>
  );
}
