import { useCallback, useState } from "react";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesBento from "./components/ServicesBento";
import TravelBookingHub from "./components/TravelBookingHub";
import ConsultationAndContact from "./components/ConsultationAndContact";
import AIChatBot from "./components/AIChatBot";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-slate-900 antialiased dark:bg-[#0A192F] dark:text-white">
      <Toaster position="top-right" richColors />
      <Navbar
        onConsult={() => scrollTo("contact")}
        onDeployGuide={() => scrollTo("services")}
      />

      <main>
        <Hero />
        <ServicesBento />
        <TravelBookingHub />
      </main>

      <ConsultationAndContact />
      <AIChatBot open={chatOpen} onOpen={() => setChatOpen(true)} onClose={() => setChatOpen(false)} />
    </div>
  );
}