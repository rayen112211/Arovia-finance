import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { useDocumentMetadata } from "@/hooks/useDocumentMetadata";

export default function TermsPage() {
  const { language } = useLanguage();

  const title = language === "pl" 
    ? "Regulamin Serwisu | Arovia Finance" 
    : "Terms of Use | Website Rules | Arovia Finance";
  const desc = language === "pl"
    ? "Regulamin korzystania z witryny Arovia Finance. Zobacz warunki prawne, prawa autorskie i wyłączenie odpowiedzialności."
    : "Website terms of use for Arovia Finance. Review legal rules, intellectual property protection, and liability disclaimers.";
  useDocumentMetadata(title, desc);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-white border-b border-border/40 overflow-hidden py-12 lg:py-16">
        <div className="section-padding section-container">
          <ScrollReveal>
            <span className="eyebrow mb-4 inline-flex">
              <span className="w-8 h-px bg-gold" />
              {language === "pl" ? "Dokumenty" : "Legal"}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              {language === "pl" ? "Regulamin Serwisu" : "Terms of Use"}
            </h1>
            <div className="w-10 h-px bg-gold" />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── TERMS CONTENT ─── */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="section-padding section-container max-w-4xl">
          <ScrollReveal>
            {language === "pl" ? (
              <div className="space-y-8 text-foreground/80 leading-relaxed text-[15px] lg:text-[16px]">
                <p>
                  Witamy na stronie internetowej Arovia Finance. Korzystając z tej witryny, akceptujesz poniższe warunki korzystania. Jeśli nie zgadzasz się z którymkolwiek z zapisów, prosimy o opuszczenie strony.
                </p>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">1. Własność Intelektualna</h2>
                  <p>
                    Wszelkie treści zamieszczone na tej stronie, w tym teksty, grafiki, logo, nazwy handlowe oraz kod źródłowy, są własnością Arovia Finance lub zostały użyte za zgodą właścicieli i podlegają ochronie prawnej na podstawie przepisów o prawie autorskim i własności przemysłowej w Polsce. Kopiowanie, modyfikowanie lub rozpowszechnianie tych materiałów bez pisemnej zgody Arovia Finance jest zabronione.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">2. Korzystanie ze Strony</h2>
                  <p>
                    Strona internetowa służy celom informacyjnym i ma na celu przedstawienie oferty usług doradztwa kredytowego i finansowego. Użytkownik zobowiązuje się do korzystania ze strony w sposób zgodny z obowiązującym prawem, dobrymi obyczajami oraz niniejszym Regulaminem.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">3. Wyłączenie Odpowiedzialności</h2>
                  <p>
                    Materiały i informacje opublikowane na tej stronie mają charakter wyłącznie ogólny i informacyjny i nie stanowią oferty handlowej ani porady finansowej, prawnej czy inwestycyjnej w rozumieniu Kodeksu Cywilnego. Choć dokładamy starań, aby dane były rzetelne i aktualne, nie gwarantujemy pełnej bezbłędności i nie ponosimy odpowiedzialności za decyzje podjęte na ich podstawie.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">4. Prawo Właściwe</h2>
                  <p>
                    Wszelkie spory wynikające z korzystania z niniejszej witryny będą rozstrzygane przez właściwe polskie sądy powszechne, a prawem właściwym jest prawo polskie.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8 text-foreground/80 leading-relaxed text-[15px] lg:text-[16px]">
                <p>
                  Welcome to the Arovia Finance website. By accessing and browsing this website, you accept and agree to comply with the following Terms of Use. If you do not agree with any part of these terms, please do not use our website.
                </p>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">1. Intellectual Property</h2>
                  <p>
                    All content displayed on this website, including texts, graphics, logos, trade names, and source code, is the property of Arovia Finance or used with permission, and is protected by copyright and industrial property laws in Poland. Copying, modifying, or distributing these materials without the prior written consent of Arovia Finance is strictly prohibited.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">2. Website Use</h2>
                  <p>
                    This website is for informational purposes only, introducing our independent mortgage and financial advisory services. You agree to use this site in compliance with all applicable laws, regulations, and these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">3. Disclaimer of Liability</h2>
                  <p>
                    The materials and information published on this website are of a general nature and do not constitute professional financial, legal, or investment advice, nor do they constitute a commercial offer under the Polish Civil Code. While we make every effort to ensure accuracy, we do not guarantee that the content is error-free, and we accept no liability for decisions made based on this information.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">4. Governing Law</h2>
                  <p>
                    Any disputes arising out of the use of this website shall be governed by and construed in accordance with the laws of Poland, and subject to the exclusive jurisdiction of the Polish courts.
                  </p>
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
