import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Suitcase } from "@phosphor-icons/react";
import { VISA_COUNTRIES, WHATSAPP_LINK } from "../constants";
import type { VisaType, SavedBooking } from "../types";
import { toast } from "sonner";

const genRef = () => "XG-" + Math.random().toString(36).slice(2, 8).toUpperCase();
const fmtNGN = (n: number) => "₦" + n.toLocaleString();

function saveBooking(b: SavedBooking) {
  const list: SavedBooking[] = JSON.parse(localStorage.getItem("xg_bookings") || "[]");
  list.unshift(b);
  localStorage.setItem("xg_bookings", JSON.stringify(list.slice(0, 20)));
}

export function VisaTab({ onBook }: { onBook: (b: SavedBooking) => void }) {
  const [countryId, setCountryId] = useState("uk");
  const [visaId, setVisaId] = useState<string | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [packageType, setPackageType] = useState<"review" | "vip" | "mock">("vip");

  const country = VISA_COUNTRIES.find((c) => c.id === countryId)!;
  const visa = country?.visaTypes.find((v) => v.id === visaId) as VisaType | undefined;
  const readiness = visa ? Math.round((Object.values(checked).filter(Boolean).length / visa.requirements.length) * 100) : 0;

  const book = () => {
    if (!visa) return;
    const pkgLabel = packageType === "vip" ? "VIP End-to-End Processing" : packageType === "review" ? "Self-Service Document Review" : "Mock Interview Prep";
    const pkgFee = packageType === "vip" ? 150000 : packageType === "review" ? 50000 : 80000;
    const ref = genRef();
    const booking: SavedBooking = {
      id: crypto.randomUUID(), type: "visa",
      title: `${visa.name} - ${country.name}`,
      details: `${pkgLabel} | Readiness: ${readiness}% | Biometric: ${visa.biometricRequired ? "Yes" : "No"}`,
      price: fmtNGN(visa.feeNGN + pkgFee), date: new Date().toISOString().slice(0, 10),
      reference: ref, createdAt: Date.now(),
    };
    saveBooking(booking); onBook(booking);
    const msg = encodeURIComponent(`Visa Consultation Booking
Ref: ${ref}
Destination: ${country.name}
Visa Type: ${visa.name}
Category: ${visa.category}
Package: ${pkgLabel}
Embassy Fee: ${fmtNGN(visa.feeNGN)}
Service Fee: ${fmtNGN(pkgFee)}
Document Readiness: ${readiness}%
Processing Time: ${visa.processingDays}`);
    window.open(`${WHATSAPP_LINK}?text=${msg}`, "_blank");
    toast.success("Visa consultation booked!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {VISA_COUNTRIES.map((c) => (
          <button key={c.id} onClick={() => { setCountryId(c.id); setVisaId(null); setChecked({}); }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${countryId === c.id ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25" : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"}`}>
            <Globe className="inline w-3.5 h-3.5 mr-1" />{c.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {country?.visaTypes.map((v) => (
          <button key={v.id} onClick={() => { setVisaId(v.id); setChecked({}); }}
            className={`rounded-xl border p-4 text-left transition ${visaId === v.id ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500/20 dark:bg-indigo-900/20" : "border-slate-200 bg-white hover:border-indigo-300 dark:bg-slate-800 dark:border-slate-700"}`}>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">{v.name}</div>
            <div className="mt-1 text-xs text-slate-500">{v.category}</div>
            <div className="mt-2 flex items-center gap-3 text-xs">
              <span className="font-medium text-indigo-600 dark:text-indigo-400">{fmtNGN(v.feeNGN)}</span>
              <span className="text-slate-400">{v.processingDays}</span>
            </div>
          </button>
        ))}
      </div>
      {visa && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Suitcase className="w-4 h-4 text-indigo-600" /> Document Checklist
              </h4>
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${readiness >= 80 ? "bg-emerald-100 text-emerald-700" : readiness >= 50 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}>
                {readiness}% Ready
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden mb-4">
              <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500" style={{ width: `${readiness}%` }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {visa.requirements.map((req, i) => (
                <label key={i} className="flex items-start gap-2 cursor-pointer group">
                  <input type="checkbox" checked={!!checked[`${visa.id}-${i}`]}
                    onChange={(e) => setChecked((p) => ({ ...p, [`${visa.id}-${i}`]: e.target.checked }))}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                  <span className="text-sm text-slate-700 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">{req}</span>
                </label>
              ))}
            </div>
            {visa.biometricRequired && (
              <p className="mt-3 text-xs text-amber-600 flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Biometric enrollment required at visa application center.</p>
            )}
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:bg-slate-800 dark:border-slate-700">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Choose Your Package</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {([
                { key: "review", label: "Document Review", desc: "Self-service with expert checklist review", fee: 50000 },
                { key: "vip", label: "VIP Processing", desc: "End-to-end application handling & submission", fee: 150000 },
                { key: "mock", label: "Mock Interview", desc: "Consulate interview prep with feedback", fee: 80000 },
              ] as const).map((pkg) => (
                <button key={pkg.key} onClick={() => setPackageType(pkg.key)}
                  className={`rounded-lg border p-3 text-left transition ${packageType === pkg.key ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20" : "border-slate-200 hover:border-indigo-300 dark:border-slate-700"}`}>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{pkg.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{pkg.desc}</div>
                  <div className="text-xs font-bold text-indigo-600 mt-1 dark:text-indigo-400">{fmtNGN(pkg.fee)}</div>
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm">
                <span className="text-slate-500">Total: </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {fmtNGN(visa.feeNGN + (packageType === "vip" ? 150000 : packageType === "review" ? 50000 : 80000))}
                </span>
              </div>
              <button onClick={book}
                className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 active:scale-[0.98] transition">
                Book Consultation
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
