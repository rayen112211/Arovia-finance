import { Link } from "react-router-dom";
import { MessageSquare, Globe, TrendingUp, MapPin, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const skylineImgUrl = "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&q=80&w=1800";

const features = [
  {
    icon: MessageSquare,
    title: "English-Language Support",
    desc: "We provide clear communication and consultation in English at every step.",
  },
  {
    icon: Globe,
    title: "International Banking Experience",
    desc: "Jay's background in international markets and institutions gives our clients a real advantage.",
  },
  {
    icon: TrendingUp,
    title: "Foreign Income Specialists",
    desc: "We understand complex international income structures and non-resident requirements.",
  },
  {
    icon: MapPin,
    title: "Relocation & Expat Experts",
    desc: "We support expats and their families in making a smooth transition to Poland.",
  },
];

const helpItems = [
  "Mortgages in Poland for foreign nationals",
  "Investment property financing",
  "Business financing for international companies",
  "Income from abroad or multiple countries",
  "Company structure and financing solutions",
  "Relocation and settling in Poland",
];

export default function InternationalClientsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[480px] flex items-center overflow-hidden">
        {/* Skyline background */}
        <div className="absolute inset-0">
          <img
            src={skylineImgUrl}
            alt="City skyline"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = "/anna_and_robbie.jpg"; }}
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>

        <div className="relative section-padding section-container py-16 lg:py-24 max-w-3xl">
          <ScrollReveal>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-primary-foreground mb-4">
              International Clients
            </h1>
            <div className="w-10 h-px bg-gold mb-6" />
            <p className="text-xl text-primary-foreground/85 font-light mb-4">
              Expert financial guidance for clients from around the world.
            </p>
            <p className="text-primary-foreground/65 text-base leading-relaxed max-w-xl">
              Whether you're relocating to Poland, purchasing property, running a business or earning income abroad, we provide clear support throughout the financing process.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── WHY INTERNATIONAL CLIENTS CHOOSE US ─── */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl text-center text-foreground mb-3">
              Why International Clients Choose Us
            </h2>
            <div className="w-10 h-px bg-gold mx-auto mb-14" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} direction="up" delay={i * 100}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-5">
                    <f.icon size={24} strokeWidth={1.25} className="text-gold" />
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
              <h2 className="font-display text-3xl lg:text-4xl text-center text-foreground mb-3">We Help With</h2>
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
      <section className="bg-primary py-14">
        <div className="section-padding section-container flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-primary-foreground mb-1">
              Moving to Poland or investing here?
            </h2>
            <p className="text-primary-foreground/60 text-sm">Let's make the process simple and stress-free.</p>
          </div>
          <Button variant="premium" size="lg" asChild className="flex-shrink-0 rounded-md">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
