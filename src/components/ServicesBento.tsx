import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AirplaneTakeoff,
  ArrowRight,
  Building,
  Check,
  CreditCard,
  Handshake,
  MapPin,
  PaperPlaneTilt,
  Plugs,
  Sparkle,
} from "@phosphor-icons/react";
import {
  BRAND_NAME,
  CAC_PACKAGES,
  IMPORT_SYLLABUS,
  SERVICE_IMAGES,
  SERVICES,
  WHATSAPP_LINK,
} from "../constants";
import { toast } from "sonner";

type TabKey = "web" | "social" | "google" | "seo" | "cac" | "flight" | "coach";

const ICON_MAP = {
  web: Sparkle,
  social: PaperPlaneTilt,
  google: MapPin,
  seo: Plugs,
  cac: Building,
  flight: AirplaneTakeoff,
  coach: Handshake,
};

export default function ServicesBento() {
  const [tab, setTab] = useState<TabKey>("web");
  const active = SERVICES.find((s) => s.id === tab) ?? SERVICES[0];

  return (
    <section id="services" className="bg-white py-20 lg:py-28 dark:bg-[#0B1B33]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Seven pillars. One partner.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Whatever your next move is — launching online, registering your
            company, or flying out — {BRAND_NAME} handles it end-to-end.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {SERVICES.map((s) => {
            const Icon = ICON_MAP[s.id as TabKey] ?? Sparkle;
            const isActive = tab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setTab(s.id as TabKey)}
                className={
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition sm:text-sm " +
                  (isActive
                    ? "border-transparent bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white")
                }
              >
                <Icon size={16} weight="bold" />
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Active panel */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-10 overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10"
        >
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            {/* Left: description + features */}
            <div className="border-b border-slate-200 bg-slate-50/60 p-8 lg:border-b-0 lg:border-r dark:border-white/10 dark:bg-white/5">
              <div
                className={`inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${active.accent} text-white shadow-lg`}
              >
                {(() => {
                  const Icon = ICON_MAP[tab] ?? Sparkle;
                  return <Icon size={24} weight="bold" />;
                })()}
              </div>
              <h3 className="mt-5 text-2xl font-extrabold text-slate-900 dark:text-white">
                {active.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                {active.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {active.description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400"
              >
                Get a free assessment <ArrowRight size={16} weight="bold" />
              </a>
            </div>

            {/* Right: features checklist */}
            <div className="p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                What's included
              </p>
              <ul className="mt-4 space-y-3">
                {active.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: "easeOut" }}
                    className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      <Check size={13} weight="bold" />
                    </span>
                    {f}
                  </motion.li>
                ))}
              </ul>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                  `Hello ${BRAND_NAME}! I'm interested in "${active.title}". Can we talk?`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition hover:brightness-110"
              >
                Start with {active.tagline} <ArrowRight size={16} weight="bold" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* CAC packages */}
        <CACPackages />
        {/* Digital Importation Academy */}
        <ImportAcademy />
        {/* Flight inquiry */}
        <FlightDesk />
        {/* Conference & Executive Consulting */}
        <ConferenceConsulting />
      </div>
    </section>
  );
}

function ConferenceConsulting() {
  return (
    <div id="conference" className="mt-24 scroll-mt-24">
      {/* Hero image banner */}
      <div className="relative mb-8 overflow-hidden rounded-3xl">
        <img
          src={SERVICE_IMAGES.conferenceConsulting.hero}
          alt={SERVICE_IMAGES.conferenceConsulting.alt}
          className="h-56 w-full object-cover lg:h-72"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
        <div className="absolute bottom-5 left-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
            <Sparkle size={12} weight="fill" /> Executive Consulting
          </span>
          <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
            Masterclasses, Conferences & Strategy Sessions
          </h3>
        </div>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Conference Discussion & Executive Consulting
          </span>
          <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Learn from industry leaders — live or virtual
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Join executive roundtables, masterclass workshops, and one-on-one
            strategy sessions designed to accelerate your business growth.
            From keynote conferences to intimate coaching circles.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Book a strategy session <ArrowRight size={16} weight="bold" />
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { title: "Executive Boardroom Strategy", desc: "Private 1-on-1 sessions with senior consultants for tailored growth plans." },
            { title: "Masterclass Workshops", desc: "Interactive group sessions on procurement, scaling, and market entry." },
            { title: "Keynote Conferences", desc: "Annual flagship events featuring industry leaders and panel discussions." },
            { title: "Virtual Roundtables", desc: "Small-group online discussions with peers facing similar challenges." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {item.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery strip */}
      <div className="mt-10 grid grid-cols-3 gap-3">
        {SERVICE_IMAGES.conferenceConsulting.gallery.map((url, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={url}
              alt={`Conference gallery ${i + 1}`}
              className="h-32 w-full object-cover transition-transform hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CACPackages() {
  const [selected, setSelected] = useState(CAC_PACKAGES[1].id);
  const pkg = CAC_PACKAGES.find((p) => p.id === selected) ?? CAC_PACKAGES[0];
  return (
    <div id="cac" className="mt-24 scroll-mt-24">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          CAC Registration Hub
        </span>
        <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Register your business with the CAC — stress-free
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          We handle Business Name, Limited Liability Company (LTD), and
          Incorporated Trustees (NGO) registration end-to-end, including TIN,
          SCUML, affidavits, and documentation.
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {CAC_PACKAGES.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={
              "relative rounded-2xl border p-6 text-left transition " +
              (selected === p.id
                ? "border-indigo-500 bg-indigo-50/60 shadow-lg shadow-indigo-500/10 dark:border-indigo-400 dark:bg-indigo-500/10"
                : "border-slate-200 bg-white hover:border-indigo-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-400/40")
            }
          >
            {p.popular && (
              <span className="absolute -top-2.5 left-4 rounded-full bg-indigo-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                Most popular
              </span>
            )}
            <p className="text-sm font-extrabold text-slate-900 dark:text-white">
              {p.name}
            </p>
            <p className="mt-2 text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
              {p.price}
            </p>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {p.priceNote}
            </p>
            <ul className="mt-4 space-y-2">
              {p.features.slice(0, 3).map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                >
                  <Check size={12} weight="bold" className="mt-0.5 shrink-0 text-indigo-500" />
                  {f}
                </li>
              ))}
              <li className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                +{p.features.length - 3} more
              </li>
            </ul>
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-indigo-200/70 bg-gradient-to-r from-indigo-50 to-cyan-50 p-6 sm:flex-row sm:items-center dark:border-indigo-400/20 dark:from-indigo-500/10 dark:to-cyan-500/10">
        <div>
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            {pkg.name} — {pkg.price}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Requirements to start: valid ID, passport photo, and business name(s)
            or trustees' details.
          </p>
        </div>
        <a
          href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
            `Hello Xontopglobal Consultant! I want to register a "${pkg.name}" with the CAC.`
          )}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500"
        >
          Start {pkg.name} <ArrowRight size={16} weight="bold" />
        </a>
      </div>
    </div>
  );
}

function ImportAcademy() {
  return (
    <div id="import" className="mt-24 scroll-mt-24">
      {/* Hero image banner */}
      <div className="relative mb-8 overflow-hidden rounded-3xl">
        <img
          src={SERVICE_IMAGES.importation.hero}
          alt={SERVICE_IMAGES.importation.alt}
          className="h-56 w-full object-cover lg:h-72"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
        <div className="absolute bottom-5 left-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-500/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
            <Sparkle size={12} weight="fill" /> Digital Importation Academy
          </span>
          <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
            Source from China directly — no middlemen
          </h3>
        </div>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="flex items-center gap-3 rounded-2xl border border-rose-200/70 bg-rose-50/60 p-4 dark:border-rose-400/20 dark:bg-rose-500/10">
            <CreditCard size={22} weight="fill" className="shrink-0 text-rose-500" />
            <p className="text-xs text-slate-700 dark:text-slate-200">
              <span className="font-bold">Who it's for:</span> aspiring
              importers, resellers, and SMEs wanting verified suppliers, safe
              payment rails, and reliable clearing without agency fees.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {IMPORT_SYLLABUS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5"
            >
              <span className="bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-2xl font-extrabold text-transparent">
                {item.step}
              </span>
              <p className="mt-1.5 text-sm font-bold text-slate-900 dark:text-white">
                {item.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery strip */}
      <div className="mt-10 grid grid-cols-3 gap-3">
        {SERVICE_IMAGES.importation.gallery.map((url, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src={url}
              alt={`Importation gallery ${i + 1}`}
              className="h-32 w-full object-cover transition-transform hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FlightDesk() {
  const [trip, setTrip] = useState<"oneway" | "round">("round");
  const [from, setFrom] = useState("Lagos (LOS)");
  const [to, setTo] = useState("London (LHR)");
  const [cabin, setCabin] = useState("Economy");
  const [date, setDate] = useState("");
  const [pax, setPax] = useState("1 Adult");

  const submit = () => {
    const text = encodeURIComponent(
      `Hello Xontopglobal Consultant Travel Desk!

✈️ Flight Inquiry
Trip: ${trip === "round" ? "Round-trip" : "One-way"}
Route: ${from} → ${to}
Cabin: ${cabin}
Date: ${date || "Flexible"}
Passengers: ${pax}

Please send me the best fare.`
    );
    window.open(`${WHATSAPP_LINK}?text=${text}`, "_blank");
    toast.success("Opening WhatsApp with your flight inquiry…");
  };

  return (
    <div id="travel" className="mt-24 scroll-mt-24">
      {/* Hero image banner */}
      <div className="relative mb-8 overflow-hidden rounded-3xl">
        <img
          src={SERVICE_IMAGES.flightBooking.hero}
          alt={SERVICE_IMAGES.flightBooking.alt}
          className="h-56 w-full object-cover lg:h-72"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
        <div className="absolute bottom-5 left-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
            <AirplaneTakeoff size={12} weight="fill" /> Flight & Travel Desk
          </span>
          <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
            Get the best fare, fast
          </h3>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-cyan-200/70 bg-gradient-to-br from-cyan-50 via-sky-50 to-white dark:border-cyan-400/20 dark:from-cyan-500/10 dark:via-sky-500/5 dark:to-white/5">
        <div className="grid lg:grid-cols-[1fr_1.2fr]">
          <div className="p-8 lg:p-10">
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Domestic and international bookings, visa consultation, and
              itinerary planning — as a licensed agent with 24/7 support.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Competitive airline fares",
                "Visa & travel document guidance",
                "Group & corporate bookings",
                "24/7 WhatsApp support",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-200"
                >
                  <Check size={15} weight="bold" className="text-cyan-600 dark:text-cyan-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-cyan-200/50 p-8 lg:border-l lg:border-t-0 dark:border-cyan-400/10">
            <div className="flex gap-2">
              {(["round", "oneway"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTrip(t)}
                  className={
                    "flex-1 rounded-full py-2.5 text-xs font-bold transition " +
                    (trip === t
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "bg-white text-slate-600 border border-slate-200 dark:bg-white/5 dark:text-slate-300 dark:border-white/10")
                  }
                >
                  {t === "round" ? "Round-trip" : "One-way"}
                </button>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Field label="From">
                <select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
                >
                  {["Lagos (LOS)", "Abuja (ABV)", "Port Harcourt (PHC)", "London (LHR)", "Dubai (DXB)", "Accra (ACC)"].map(
                    (c) => (
                      <option key={c}>{c}</option>
                    )
                  )}
                </select>
              </Field>
              <Field label="To">
                <select
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
                >
                  {["London (LHR)", "Dubai (DXB)", "New York (JFK)", "Lagos (LOS)", "Accra (ACC)", "Jeddah (JED)"].map(
                    (c) => (
                      <option key={c}>{c}</option>
                    )
                  )}
                </select>
              </Field>
              <Field label="Cabin class">
                <select
                  value={cabin}
                  onChange={(e) => setCabin(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
                >
                  {["Economy", "Premium Economy", "Business", "First"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <Field label="Passengers">
                <select
                  value={pax}
                  onChange={(e) => setPax(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100"
                >
                  {["1 Adult", "2 Adults", "1 Adult + 1 Child", "2 Adults + 1 Child", "3+ Travelers", "Group (10+)"].map(
                    (c) => (
                      <option key={c}>{c}</option>
                    )
                  )}
                </select>
              </Field>
              <Field label="Preferred date (optional)">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900 dark:text-slate-100 dark:[color-scheme:dark]"
                />
              </Field>
              <div className="flex items-end">
                <button
                  onClick={submit}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-600/25 transition hover:brightness-110"
                >
                  <PaperPlaneTilt size={16} weight="fill" />
                  Get Fare Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        {label}
      </span>
      {children}
    </label>
  );
}