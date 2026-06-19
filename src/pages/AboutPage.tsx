import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Star, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Button } from "@/components/ui/button";

const officeImgUrl = "https://images.unsplash.com/photo-1600210491892-03d54079d9f2?auto=format&fit=crop&q=80&w=1400";

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      desc: "We give honest advice and always put our clients' interests first.",
    },
    {
      icon: Users,
      title: "Relationships",
      desc: "We build long-term relationships based on trust, respect and personal service.",
    },
    {
      icon: Star,
      title: "Excellence",
      desc: "We are committed to high standards, continuous learning and the best possible outcomes.",
    },
    {
      icon: Globe,
      title: "International Perspective",
      desc: "We understand the unique needs of international clients and provide support in English and Polish.",
    },
  ];

  const stats = [
    { value: 15, suffix: "+", label: "Years of experience in finance and banking" },
    { value: 1000, suffix: "+", label: "Clients supported across Poland and internationally" },
    { value: 20, suffix: "+", label: "Lending partners and financial institutions" },
    { prefix: "Extensive", label: "International banking background" },
  ];

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[520px] items-center">
            {/* Left copy */}
            <div className="py-20 lg:py-28 pr-0 lg:pr-16">
              <ScrollReveal>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-5">
                  About Us
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-primary-foreground mb-8">
                  People you can trust with your financial future.
                </h1>
                <div className="w-10 h-px bg-gold mb-8" />
                <p className="text-primary-foreground/75 text-base leading-relaxed mb-4">
                  Arovia Finance was founded by Anna Rosinska and Jay [Surname] to provide independent, client-focused financial advice with integrity, transparency and a personal approach.
                </p>
                <p className="text-primary-foreground/75 text-base leading-relaxed">
                  We combine international banking experience with deep knowledge of the Polish market to help clients make confident financial decisions.
                </p>
              </ScrollReveal>
            </div>

            {/* Right image */}
            <div className="hidden lg:block relative h-full min-h-[520px]">
              <img
                src="/anna_and_robbie.jpg"
                alt="Anna Rosinska and Jay — Founders of Arovia Finance"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MEET THE FOUNDERS ─── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl text-center text-foreground mb-3">Meet the Founders</h2>
            <div className="w-10 h-px bg-gold mx-auto mb-14" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {/* Anna */}
            <ScrollReveal direction="up" delay={100}>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 w-full sm:w-44 h-56 sm:h-56 rounded-sm overflow-hidden">
                  <img
                    src="/anna.jpg"
                    alt="Anna Rosinska"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-foreground mb-1">Anna Rosinska</h3>
                  <p className="text-sm font-semibold text-gold tracking-wide mb-4">Co-Founder &amp; Financial Advisor</p>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                    With over 15 years of experience in finance and banking, Anna specialises in helping individuals and families secure the right mortgage and financial solutions.
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                    Her clients value her professionalism, attention to detail and commitment to finding the best outcomes for their unique circumstances.
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all duration-200"
                  >
                    Learn more about Anna <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Jay */}
            <ScrollReveal direction="up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 w-full sm:w-44 h-56 sm:h-56 rounded-sm overflow-hidden">
                  <img
                    src="/robbie.jpg"
                    alt="Jay — Co-Founder"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-foreground mb-1">Jay [Surname]</h3>
                  <p className="text-sm font-semibold text-gold tracking-wide mb-4">Co-Founder &amp; Financial Advisor</p>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-3">
                    Jay brings over 20 years of international banking experience, having worked with leading financial institutions across Europe and the Middle East.
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                    He specialises in supporting business owners, investors and international clients with complex financing needs.
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all duration-200"
                  >
                    Learn more about Jay <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── OUR VALUES ─── */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="section-padding section-container">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl text-center text-foreground mb-3">Our Values</h2>
            <div className="w-10 h-px bg-gold mx-auto mb-14" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} direction="up" delay={i * 100}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-5">
                    <v.icon size={24} strokeWidth={1.25} className="text-gold" />
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
            <h2 className="font-display text-2xl lg:text-3xl text-center text-primary-foreground mb-3">Experience You Can Rely On</h2>
            <div className="w-10 h-px bg-gold mx-auto mb-12" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="flex flex-col items-center text-center px-4">
                  {/* Icon placeholder */}
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
                    {i === 0 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>}
                    {i === 1 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                    {i === 2 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                    {i === 3 && <Globe size={20} strokeWidth={1.5} className="text-gold" />}
                  </div>
                  <div className="font-display text-4xl lg:text-5xl font-light text-primary-foreground mb-2">
                    {stat.prefix ? (
                      stat.prefix
                    ) : (
                      <><AnimatedNumber value={stat.value!} />{stat.suffix}</>
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
      <section className="py-20 lg:py-28 bg-background">
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
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
              <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-6">Let's Work Together</h2>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Your financial goals are unique. We're here to listen, guide you through the options and help you make the right decisions with confidence.
              </p>
              <Button variant="premium" size="lg" asChild className="rounded-md">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
