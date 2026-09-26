import { useCallback, useState } from "react";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesBento from "./components/ServicesBento";
import TravelBookingHub from "./components/TravelBookingHub";
import ConsultationAndContact from "./components/ConsultationAndContact";
import AIChatBot from "./components/AIChatBot"
import JumiaAffiliateBanner from "./components/JumiaAffiliateBanner";

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

        <JumiaAffiliateBanner />
        {/* Travel Partner Offers */}
        <section className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">

            {/* Trip.com */}
            <a
              href="https://trip.tpk.mx/3Rp5kDQe"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Travel Partner
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    Book Hotels & Flights with Trip.com
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Explore flights, hotels and travel deals through Trip.com.
                  </p>
                </div>

                <span className="shrink-0 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white">
                  Book Now →
                </span>
              </div>
            </a>

            {/* Airalo */}
            <a
              href="https://airalo.tpk.mx/PSfnbCIg"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    Travel Connectivity
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    Get an Airalo eSIM
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Stay connected when travelling internationally with an Airalo eSIM.
                  </p>
                </div>

                <span className="shrink-0 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">
                  Get eSIM →
                </span>
              </div>
            </a>

          </div>
        </section>
        <ServicesBento />
        <TravelBookingHub />
      </main>

      <ConsultationAndContact />
      <AIChatBot open={chatOpen} onOpen={() => setChatOpen(true)} onClose={() => setChatOpen(false)} />
    </div>
  );
}