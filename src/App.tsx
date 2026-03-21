import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ExperiencePage from "@/pages/ExperiencePage";
import ConsultationPage from "@/pages/ConsultationPage";
import OpinionsPage from "@/pages/OpinionsPage";
import MediaPage from "@/pages/MediaPage";
import CooperationPage from "@/pages/CooperationPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";

import { ScrollToTop } from "@/components/ScrollToTop";
import { ContactPopup } from "@/components/ContactPopup";

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
          <ContactPopup />
          <main className="pt-16 lg:pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/opinions" element={<OpinionsPage />} />
              <Route path="/media" element={<MediaPage />} />
              <Route path="/cooperation" element={<CooperationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
