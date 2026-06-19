import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const officeImgUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900";

const faqItems = [
  {
    q: "Do you work with foreign clients?",
    a: "Yes. We specialise in helping international clients, expats and foreign nationals navigate the Polish financial system. We provide full support in English.",
  },
  {
    q: "Can you help with business loans?",
    a: "Absolutely. We assist business owners, entrepreneurs and companies of all sizes with financing solutions including business loans, investment finance and cash-flow products.",
  },
  {
    q: "Do you charge a fee?",
    a: "Our advisory service is typically free of charge to clients. Our remuneration is covered by the lender upon successful completion, meaning our advice is fully independent.",
  },
  {
    q: "How long does the process take?",
    a: "Timelines vary depending on the complexity of your case and the lender. A straightforward mortgage can take 4–8 weeks from consultation to approval. We'll keep you informed every step of the way.",
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-foreground/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-48 pb-4" : "max-h-0"}`}
      >
        <p className="text-sm text-foreground/60 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[380px] items-center">
            <div className="py-20 lg:py-24 pr-0 lg:pr-16">
              <ScrollReveal>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-primary-foreground mb-4">
                  Contact Us
                </h1>
                <div className="w-10 h-px bg-gold mb-6" />
                <p className="text-primary-foreground/75 text-base leading-relaxed mb-2">
                  We're here to help.
                </p>
                <p className="text-primary-foreground/60 text-base leading-relaxed">
                  Let's discuss your plans and find the right financial solution for you.
                </p>
              </ScrollReveal>
            </div>
            <div className="hidden lg:block relative h-full min-h-[380px]">
              <img
                src={officeImgUrl}
                alt="Arovia Finance office"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "/anna_and_robbie1.jpg"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3-COLUMN CONTENT ─── */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-padding section-container">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">

            {/* ── Column 1: Get in Touch ── */}
            <ScrollReveal direction="up" delay={100}>
              <div>
                <h2 className="font-display text-2xl text-foreground mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <a href="tel:+48733985458" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                      <Phone size={16} strokeWidth={1.5} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-foreground/50 mb-0.5">Phone</p>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        +48 733 985 458
                      </span>
                    </div>
                  </a>

                  <a href="mailto:contact@aroviafinance.pl" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                      <Mail size={16} strokeWidth={1.5} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-foreground/50 mb-0.5">Email</p>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        contact@aroviafinance.pl
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={16} strokeWidth={1.5} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-foreground/50 mb-0.5">Address</p>
                      <span className="text-sm font-medium text-foreground">Warsaw, Poland</span>
                    </div>
                  </div>

                  <a href="#" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/10 transition-colors">
                      <Linkedin size={16} strokeWidth={1.5} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-foreground/50 mb-0.5">LinkedIn</p>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        Arovia Finance
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Column 2: Send Us a Message ── */}
            <ScrollReveal direction="up" delay={200}>
              <div>
                <h2 className="font-display text-2xl text-foreground mb-8">Send Us a Message</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your Name"
                      required
                      id="contact-name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Email Address"
                      required
                      id="contact-email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="Phone Number"
                      id="contact-phone"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={5}
                      className="form-textarea"
                      placeholder="How can we help you?"
                      required
                      id="contact-message"
                    />
                  </div>
                  <Button
                    variant="premium"
                    size="lg"
                    type="submit"
                    className="w-full rounded-md mt-2"
                    id="contact-submit"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* ── Column 3: FAQ ── */}
            <ScrollReveal direction="up" delay={300}>
              <div>
                <h2 className="font-display text-2xl text-foreground mb-8">FAQ</h2>
                <div>
                  {faqItems.map((item, i) => (
                    <AccordionItem key={i} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
}
