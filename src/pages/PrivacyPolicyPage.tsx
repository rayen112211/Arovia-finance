import { ScrollReveal } from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { useDocumentMetadata } from "@/hooks/useDocumentMetadata";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  const title = language === "pl" 
    ? "Polityka Prywatności | RODO | Arovia Finance" 
    : "Privacy Policy | GDPR Compliance | Arovia Finance";
  const desc = language === "pl"
    ? "Zapoznaj się z Polityką Prywatności Arovia Finance. Zobacz jak przetwarzamy i chronimy dane z formularza kontaktowego."
    : "Read the Privacy Policy for Arovia Finance. Learn how we collect, store, and process your contact form details in Warsaw, Poland.";
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
              {language === "pl" ? "Polityka Prywatności" : "Privacy Policy"}
            </h1>
            <div className="w-10 h-px bg-gold" />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── POLICY CONTENT ─── */}
      <section className="py-12 lg:py-20 bg-background">
        <div className="section-padding section-container max-w-4xl">
          <ScrollReveal>
            {language === "pl" ? (
              <div className="space-y-8 text-foreground/80 leading-relaxed text-[15px] lg:text-[16px]">
                <p>
                  Niniejsza Polityka Prywatności określa zasady gromadzenia, przetwarzania i ochrony danych osobowych osób korzystających z witryny Arovia Finance, prowadzonej w Warszawie, Polska. W pełni przestrzegamy Ogólnego Rozporządzenia o Ochronie Danych (RODO).
                </p>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">1. Administrator Danych Osobowych</h2>
                  <p>
                    Administratorem Twoich danych osobowych jest Arovia Finance z siedzibą w Warszawie przy ul. Wspólnej 62, 00-684 Warszawa.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">2. Jakie Dane Gromadzimy</h2>
                  <p>
                    Gromadzimy dane przekazywane dobrowolnie za pośrednictwem formularza kontaktowego na naszej stronie. Dane te obejmują:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Imię i nazwisko</li>
                    <li>Adres e-mail</li>
                    <li>Numer telefonu</li>
                    <li>Treść wiadomości</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">3. Cel Przetwarzania Danych</h2>
                  <p>
                    Twoje dane są przetwarzane wyłącznie w celu:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Udzielenia odpowiedzi na Twoje zapytanie przesłane przez formularz</li>
                    <li>Świadczenia niezależnych usług doradztwa kredytowego i finansowego</li>
                    <li>Wypełnienia obowiązków prawnych ciążących na Administratorze</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">4. Czas Przechowywania Danych</h2>
                  <p>
                    Twoje dane osobowe będą przechowywane przez okres niezbędny do udzielenia odpowiedzi na zapytanie i prowadzenia dalszej korespondencji biznesowej, bądź do momentu cofnięcia zgody na ich przetwarzanie.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">5. Twoje Prawa</h2>
                  <p>
                    Posiadasz prawo do dostępu do swoich danych, ich sprostowania, usunięcia ("prawo do bycia zapomnianym"), ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. W celu realizacji swoich praw skontaktuj się z nami pod adresem: info@aroviafinance.com.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8 text-foreground/80 leading-relaxed text-[15px] lg:text-[16px]">
                <p>
                  This Privacy Policy defines the rules for collecting, processing, and protecting the personal data of individuals using the Arovia Finance website, based in Warsaw, Poland. We fully comply with the General Data Protection Regulation (GDPR).
                </p>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">1. Data Controller</h2>
                  <p>
                    The controller of your personal data is Arovia Finance, with its registered address at Wspolna 62, 00-684 Warsaw, Poland.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">2. What Data We Collect</h2>
                  <p>
                    We collect data voluntarily submitted through the contact form on our website. This data includes:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>First and last name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Message content</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">3. Purpose of Processing Data</h2>
                  <p>
                    Your data is processed solely for the purpose of:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Answering your enquiry submitted via the contact form</li>
                    <li>Providing independent mortgage and financial advisory services</li>
                    <li>Fulfilling legal obligations of the Controller</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">4. Data Retention Period</h2>
                  <p>
                    Your personal data will be kept for the period necessary to respond to your enquiry and conduct further business communication, or until you withdraw your consent for processing.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl text-foreground mb-3 font-semibold">5. Your Rights</h2>
                  <p>
                    You have the right to access, rectify, erase ("right to be forgotten"), restrict processing, transfer data, object, and withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal. To exercise your rights, please contact us at: info@aroviafinance.com.
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
