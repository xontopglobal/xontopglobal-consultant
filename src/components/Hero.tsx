import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Compass,
  PhoneCall,
  Rocket,
  ShieldCheck,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { BRAND_NAME, PHONE_TEL, QUOTE_PRESETS, SERVICES, SERVICE_IMAGES, WHATSAPP_LINK } from "../constants";

const STATS = [
  { value: "350+", label: "Projects delivered" },
  { value: "7", label: "Service pillars" },
  { value: "98%", label: "Client satisfaction" },
  { value: "24/7", label: "Support & travel desk" },
];

export default function Hero() {
  const [active, setActive] = useState(SERVICES[0].id);
  const [ticker, setTicker] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setTicker((t) => (t + 1) % QUOTE_PRESETS.length);
    }, 2800);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const q = QUOTE_PRESETS[ticker];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#F4F7FB] dark:bg-[#0A192F]"
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-emerald-400/25 blur-3xl dark:bg-emerald-500/15" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl dark:bg-cyan-500/15" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(14,165,233,0.08),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
        {/* Left copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300"
          >
            <ShieldCheck size={15} weight="fill" />
            CAC Accredited &amp; Certified Digital Partners
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Grow your business with{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {BRAND_NAME}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" }}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
          >
            One trusted partner for websites &amp; apps, social media marketing,
            Google Business registration, SEO, CAC company registration, digital
            importation coaching, and flights — built to take you global.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-600/30 transition hover:brightness-110"
            >
              Explore Our Services
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={`https://wa.me/2348037490042?text=${encodeURIComponent(`Hello ${BRAND_NAME}! I'd like a consultation.`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-white/20 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
            >
              <WhatsappLogo size={18} weight="fill" />
              Chat With Us
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-bold text-slate-500 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
            >
              <PhoneCall size={18} weight="fill" /> {PHONE_TEL}
            </a>
          </motion.div>

          {/* Service quick pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: "easeOut" }}
            className="mt-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              What do you need today?
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href="#services"
                  onClick={() => setActive(s.id)}
                  className={
                    "rounded-full border px-4 py-2 text-xs font-semibold transition " +
                    (active === s.id
                      ? "border-emerald-500 bg-emerald-500 text-white shadow-md shadow-emerald-500/30"
                      : "border-slate-300 bg-white/70 text-slate-600 hover:border-emerald-400 hover:text-emerald-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400")
                  }
                >
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

                  {/* Right visual: quote ticker + stats + floating image badges */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Floating image badges */}
            <div className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-1/2 lg:block">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mb-3 overflow-hidden rounded-2xl border-2 border-white shadow-xl"
              >
                <img
                  src={SERVICE_IMAGES.importation.gallery[0]}
                  alt="Cargo dispatch"
                  className="h-16 w-16 object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="mb-3 overflow-hidden rounded-2xl border-2 border-white shadow-xl"
              >
                <img
                  src={SERVICE_IMAGES.flightBooking.gallery[0]}
                  alt="Flight booking"
                  className="h-16 w-16 object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="overflow-hidden rounded-2xl border-2 border-white shadow-xl"
              >
                <img
                  src={SERVICE_IMAGES.conferenceConsulting.gallery[0]}
                  alt="Conference session"
                  className="h-16 w-16 object-cover"
                />
              </motion.div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-black/40">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">
                <Compass size={13} weight="fill" /> Instant Quote Guide
              </span>
              <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
                Typical investment
              </span>
            </div>

            <AnimatedQuote key={q.label} quote={q} />

            <div className="mt-6 grid grid-cols-2 gap-3">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 dark:border-white/5 dark:bg-white/5"
                >
                  <p className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-2xl font-extrabold text-transparent dark:from-emerald-400 dark:to-cyan-400">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 -left-5 hidden -rotate-3 items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-xs font-bold text-white shadow-xl lg:flex dark:bg-white dark:text-slate-900">
            <Rocket size={16} weight="fill" className="text-emerald-400" />
            Deploy-ready · GitHub → Netlify
          </div>
          <div className="absolute -top-4 -right-4 hidden rotate-3 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-lg lg:flex dark:bg-slate-800 dark:text-slate-100">
            <CheckCircle size={15} weight="fill" className="text-emerald-500" />
            Fully verified business
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedQuote({
  quote,
}: {
  quote: { label: string; price: string; time: string };
}) {
  return (
    <div className="mt-5 overflow-hidden">
      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
        {quote.label}
      </h3>
      <p className="mt-1 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-3xl font-extrabold text-transparent dark:from-emerald-400 dark:to-cyan-400">
        {quote.price}
      </p>
      <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
        Delivery: {quote.time}
      </p>
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
        <motion.div
          key={quote.label + "-bar"}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.8, ease: "linear" }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
        />
      </div>
    </div>
  );
}