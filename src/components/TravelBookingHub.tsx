import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AirplaneInFlight,
  Bed,
  CheckCircle,
  Download,
  Globe,
  Suitcase,
  X,
} from "@phosphor-icons/react";
import { FlightTab, HotelTab } from "./TravelBookingForms";
import { VisaTab } from "./VisaBookingForm";
import type { SavedBooking } from "../types";

function getBookings(): SavedBooking[] {
  return JSON.parse(localStorage.getItem("xg_bookings") || "[]");
}

export default function TravelBookingHub() {
  const [tab, setTab] = useState<"flight" | "hotel" | "visa">("flight");
  const [showBookings, setShowBookings] = useState(false);
  const [bookings, setBookings] = useState<SavedBooking[]>(getBookings());
  const [confirmation, setConfirmation] = useState<SavedBooking | null>(null);

  const handleBook = useCallback((b: SavedBooking) => {
    setBookings(getBookings());
    setConfirmation(b);
  }, []);

  const tabs = [
    { key: "flight" as const, label: "Flights", icon: AirplaneInFlight },
    { key: "hotel" as const, label: "Hotels", icon: Bed },
    { key: "visa" as const, label: "Visa", icon: Globe },
  ];

  return (
    <section id="travel-booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-[#0A192F] dark:to-[#0d1f3c]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-1.5 text-xs font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
            <AirplaneInFlight className="w-3.5 h-3.5" /> Travel & Mobility Desk
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Book Flights, Hotels & Visas
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Search live routes, browse curated hotels, and get expert visa guidance with instant WhatsApp confirmation.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 dark:bg-slate-900 dark:border-slate-700 dark:shadow-black/20">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 sm:px-6 dark:border-slate-700">
            <div className="flex gap-1">
              {tabs.map((t) => (
                <button key={t.key} onClick={() => setTab(t.key)}
                  className={`relative flex items-center gap-2 px-4 py-3.5 text-sm font-medium transition ${tab === t.key ? "text-cyan-700 dark:text-cyan-400" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"}`}>
                  <t.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{t.label}</span>
                  {tab === t.key && <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600 rounded-full" />}
                </button>
              ))}
            </div>
            <button onClick={() => setShowBookings(true)}
              className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200 transition dark:bg-slate-800 dark:text-slate-300">
              <Download className="w-3.5 h-3.5" /> My Bookings ({bookings.length})
            </button>
          </div>

          <div className="p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div key={tab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}>
                {tab === "flight" && <FlightTab onBook={handleBook} />}
                {tab === "hotel" && <HotelTab onBook={handleBook} />}
                {tab === "visa" && <VisaTab onBook={handleBook} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bookings Drawer */}
      <AnimatePresence>
        {showBookings && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex justify-end">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowBookings(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-md bg-white shadow-2xl dark:bg-slate-900 overflow-y-auto">
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/90 backdrop-blur-sm px-6 py-4 dark:border-slate-700 dark:bg-slate-900/90">
                <h3 className="font-semibold text-slate-900 dark:text-white">My Travel Bookings</h3>
                <button onClick={() => setShowBookings(false)} className="rounded-full p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800"><X className="w-5 h-5" /></button>
              </div>
              <div className="p-6 space-y-3">
                {bookings.length === 0 ? (
                  <div className="text-center py-12 text-slate-400">
                    <Suitcase className="w-10 h-10 mx-auto mb-3 opacity-50" />
                    <p className="text-sm">No bookings yet. Start planning your trip!</p>
                  </div>
                ) : bookings.map((b) => (
                  <div key={b.id} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${b.type === "flight" ? "bg-cyan-100 text-cyan-700" : b.type === "hotel" ? "bg-emerald-100 text-emerald-700" : "bg-indigo-100 text-indigo-700"}`}>{b.type}</span>
                      <span className="text-[10px] text-slate-400">{b.reference}</span>
                    </div>
                    <h4 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{b.title}</h4>
                    <p className="mt-1 text-xs text-slate-500">{b.details}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{b.price}</span>
                      <span className="text-[10px] text-slate-400">{b.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmation && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setConfirmation(null)} />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl dark:bg-slate-900">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">Booking Confirmed!</h3>
              <p className="mt-1 text-sm text-slate-500">Reference: <span className="font-mono font-bold text-slate-900 dark:text-white">{confirmation.reference}</span></p>
              <div className="mt-4 rounded-lg bg-slate-50 p-3 text-left dark:bg-slate-800">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{confirmation.title}</p>
                <p className="text-xs text-slate-500 mt-1">{confirmation.details}</p>
                <p className="text-sm font-bold text-cyan-700 mt-2 dark:text-cyan-400">{confirmation.price}</p>
              </div>
              <button onClick={() => setConfirmation(null)}
                className="mt-4 w-full rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition dark:bg-white dark:text-slate-900">
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}