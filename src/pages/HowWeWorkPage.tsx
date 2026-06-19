import { Link } from "react-router-dom";
import { Search, FileText, Lightbulb, Handshake, CheckCircle, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const heroImgUrl = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1400";
const promiseImgUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900";

const steps = [
  {
    num: "1",
    icon: Search,
    title: "Consultation",
    desc: "We get to know you, your goals and your current financial situation.",
  },
  {
    num: "2",
    icon: FileText,
    title: "Financial Review",
    desc: "We analyse your circumstances and explore the options available to you.",
  },
  {
    num: "3",
    icon: Lightbulb,
    title: "Strategy",
    desc: "We create a tailored strategy to achieve the best possible outcome.",
  },
  {
    num: "4",
    icon: Handshake,
    title: "Lender Engagement",
    desc: "We approach suitable lenders and negotiate the most competitive terms on your behalf.",
  },
  {
    num: "5",
    icon: CheckCircle,
    title: "Approval & Completion",
    desc: "We guide you through the application, approval and completion process.",
  },
  {
    num: "6",
    icon: Heart,
    title: "Ongoing Support",
    desc: "We're here for you beyond the deal, whenever you need us.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[400px] items-center">
            <div className="py-20 lg:py-28 pr-0 lg:pr-16">
              <ScrollReveal>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-primary-foreground mb-6">
                  How We Work
                </h1>
                <div className="w-10 h-px bg-gold mb-6" />
                <p className="text-primary-foreground/75 text-base leading-relaxed max-w-md">
                  A clear, transparent process designed around you.
                </p>
                <p className="text-primary-foreground/65 text-base leading-relaxed mt-3 max-w-md">
                  We guide you every step of the way, making complex decisions simple.
                </p>
              </ScrollReveal>
            </div>
            <div className="hidden lg:block relative h-full min-h-[400px]">
              <img
                src={heroImgUrl}
                alt="Financial advisor at work"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "/anna_and_robbie1.jpg"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS + SIDEBAR ─── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">
            {/* Steps list */}
            <div className="space-y-0">
              {steps.map((step, i) => (
                <ScrollReveal key={step.num} direction="up" delay={i * 80}>
                  <div className="flex gap-6 py-8 border-b border-border/50 last:border-0 group">
                    {/* Number + icon */}
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground text-sm font-bold">{step.num}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="pt-1.5">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon size={18} strokeWidth={1.5} className="text-gold flex-shrink-0" />
                        <h3 className="font-display text-xl text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-sm text-foreground/65 leading-relaxed max-w-lg">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Our Promise sidebar */}
            <div className="lg:sticky lg:top-28 self-start">
              <ScrollReveal direction="left" delay={200}>
                <div className="bg-primary rounded-sm p-8 mb-6">
                  <h3 className="font-display text-2xl text-primary-foreground mb-6">Our Promise</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                      <span className="text-primary-foreground/80 text-sm leading-relaxed">Clear communication.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                      <span className="text-primary-foreground/80 text-sm leading-relaxed">Honest advice.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                      <span className="text-primary-foreground/80 text-sm leading-relaxed">Solutions tailored to you.</span>
                    </li>
                  </ul>
                  <p className="text-primary-foreground/60 text-sm italic">Your success is our priority.</p>
                </div>

                <div className="rounded-sm overflow-hidden aspect-[4/3]">
                  <img
                    src={promiseImgUrl}
                    alt="Arovia Finance office environment"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = "/anna_and_robbie1.jpg"; }}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA BAR ─── */}
      <section className="bg-primary py-14">
        <div className="section-padding section-container flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-primary-foreground mb-1">
              Ready to take the next step?
            </h2>
            <p className="text-primary-foreground/60 text-sm">Let's discuss your goals and how we can help.</p>
          </div>
          <Button variant="premium" size="lg" asChild className="flex-shrink-0 rounded-md">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
