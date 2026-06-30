import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import HomePage from "@/pages/HomePage";
import ContactPage from "@/pages/ContactPage";
import AboutPage from "@/pages/AboutPage";
import HowWeWorkPage from "@/pages/HowWeWorkPage";
import InternationalClientsPage from "@/pages/InternationalClientsPage";
import KnowledgeCentrePage from "@/pages/KnowledgeCentrePage";
import ArticlePage from "@/pages/ArticlePage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsPage from "@/pages/TermsPage";
import NotFound from "@/pages/NotFound";

import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingButton } from "@/components/FloatingButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <FloatingButton />
          <main className="pt-16 lg:pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/how-we-work" element={<HowWeWorkPage />} />
              <Route path="/international-clients" element={<InternationalClientsPage />} />
              <Route path="/knowledge-centre" element={<KnowledgeCentrePage />} />
              <Route path="/knowledge-centre/:slug" element={<ArticlePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <CookieConsent />
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
