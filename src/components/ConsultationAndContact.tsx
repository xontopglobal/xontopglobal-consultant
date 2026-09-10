import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle,
  Code,
  Envelope,
  MapPin,
  
  Sparkle,
  WhatsappLogo,
} from "@phosphor-icons/react";
import {
  BRAND_NAME,
  EMAIL,
  
  SERVICE_IMAGES,
  WHATSAPP_LINK,
} from "../constants";
import { toast } from "sonner";

const ROADMAP = [
  { step: "1", title: "Choose your package", text: "Business Name, LLC, or Incorporated Trustees — we help you pick." },
  { step: "2", title: "Send your documents", text: "Valid ID, passport photo, and proposed name(s) or trustees' details." },
  { step: "3", title: "We file & follow up", text: "We handle CAC filing, TIN, SCUML, and status tracking for you." },
  { step: "4", title: "Receive your certificates", text: "Digital certificates delivered fast, with printed copies available." },
];

export default function ConsultationAndContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website & App Development",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const text = encodeURIComponent(
      `Hello Xontopglobal Consultant! I'm ${form.name || "a new client"}.

Service: ${form.service}
Email: ${form.email || "—"}
Phone: ${form.phone || "—"}

${form.message || "I'd like a consultation."}`
    );
    setTimeout(() => {
      setSending(false);
      toast.success("Opening WhatsApp — we'll reply shortly!");
      window.open(`${WHATSAPP_LINK}?text=${text}`, "_blank");
    }, 700);
  };

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 placeholder:text-slate-400";

  return (
    <>
      <section id="contact" className="bg-slate-50 py-20 lg:py-28 dark:bg-[#081426]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Free Consultation
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Let's Build Your Business for Success
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Tell us what you need — website development, CAC registration, Google Business Profile, digital marketing, travel services, or importation coaching. We'll recommend the right solution and get back to you shortly..
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 sm:p-9 dark:border-white/10 dark:bg-white/5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Full name"
                className={inputCls}
              />
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone / WhatsApp"
                className={inputCls}
              />
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email address"
                type="email"
                className={inputCls + " sm:col-span-2"}
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={inputCls + " sm:col-span-2"}
              >
                {[
                  "Website & App Development",
                  "Social Media Marketing",
                  "Google Business Profile",
                  "SEO & Organic Growth",
                  "CAC Business Registration",
                  "Flight Tickets & Travel",
                  "Digital Importation Coach",
                  "Other / Not sure yet",
                ].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us briefly about your project or question…"
                rows={4}
                className={inputCls + " sm:col-span-2 resize-none"}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-emerald-600/25 transition hover:brightness-110 disabled:opacity-60"
            >
              <WhatsappLogo size={18} weight="fill" />
                {sending ? "Connecting…" : "Let's Build Your Business for Success"}
            </button>
            <p className="mt-3 text-center text-[11px] text-slate-400 dark:text-slate-500">
              Your enquiry opens directly in WhatsApp — no forms lost, fastest reply.
            </p>
          </motion.form>

          {/* Contact channels */}
          <div className="space-y-4">
            <motion.a
        
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
              className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-emerald-400 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/50"
            >
        
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                
                </p>
                <p className="mt-0.5 text-lg font-extrabold text-slate-900 dark:text-white">
              
                </p>
              </div>
              <ArrowRight
                size={20}
                weight="bold"
                className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-500 dark:text-slate-600"
              />
            </motion.a>

            <motion.a
              href={`mailto:${EMAIL}`}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-cyan-400 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400/50"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-600/25">
                <Envelope size={22} weight="fill" />
              </span>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Email us
                </p>
                <p className="mt-0.5 truncate text-base font-extrabold text-slate-900 dark:text-white">
                  {EMAIL}
                </p>
              </div>
              <ArrowRight
                size={20}
                weight="bold"
                className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-cyan-500 dark:text-slate-600"
              />
            </motion.a>

            <motion.a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hello Xontopglobal Consultant! I'd like to chat about your services.")}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
              className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-emerald-400 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/50"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-600/25">
                <WhatsappLogo size={22} weight="fill" />
              </span>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  WhatsApp business line
                </p>
                <p className="mt-0.5 text-lg font-extrabold text-slate-900 dark:text-white">
                  
    
                </p>
              </div>
              <ArrowRight
                size={20}
                weight="bold"
                className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-500 dark:text-slate-600"
              />
            </motion.a>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white dark:border-white/10 dark:from-[#0F2744] dark:to-[#0A192F]"
            >
              <div className="flex items-center gap-3">
                <MapPin size={20} weight="fill" className="text-emerald-400" />
                <p className="text-sm font-extrabold">Serving Nigeria & clients worldwide</p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div>
                  <CalendarCheck size={18} weight="fill" className="mx-auto text-emerald-400" />
                  <p className="mt-1 text-[10px] font-semibold text-slate-300">Mon–Sat</p>
                  <p className="text-xs font-extrabold">8am – 8pm</p>
                </div>
                <div>
                  <CheckCircle size={18} weight="fill" className="mx-auto text-emerald-400" />
                  <p className="mt-1 text-[10px] font-semibold text-slate-300">Sunday</p>
                  <p className="text-xs font-extrabold">On call</p>
                </div>
                <div>
                  <Sparkle size={18} weight="fill" className="mx-auto text-emerald-400" />
                  <p className="mt-1 text-[10px] font-semibold text-slate-300">Reply time</p>
                  <p className="text-xs font-extrabold">Under 2 hrs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Conference & Masterclass Gallery */}
        <div id="masterclasses" className="mt-20">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Masterclasses & Conference Sessions
            </span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Where ideas become execution
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              From executive boardroom strategy sessions to large-scale conferences
              and interactive masterclass workshops — our consulting arm brings
              world-class learning to your doorstep.
            </p>
          </div>

          {/* Hero image */}
          <div className="mt-8 overflow-hidden rounded-3xl">
            <img
              src={SERVICE_IMAGES.conferenceConsulting.hero}
              alt={SERVICE_IMAGES.conferenceConsulting.alt}
              className="h-64 w-full object-cover transition-transform hover:scale-105"
            />
          </div>

          {/* Gallery grid */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {SERVICE_IMAGES.conferenceConsulting.gallery.map((url, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={url}
                  alt={`Masterclass gallery ${i + 1}`}
                  className="h-40 w-full object-cover transition-transform hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-indigo-200/70 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 sm:flex-row sm:items-center dark:border-indigo-400/20 dark:from-indigo-500/10 dark:to-purple-500/10">
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Ready to learn from the best?
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Upcoming masterclasses, conference dates, and private coaching slots.
              </p>
            </div>
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                `Hello Xontopglobal Consultant! I'm interested in your masterclasses and conference sessions.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500"
            >
              View Schedule <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </div>

        {/* CAC roadmap */}
        <div id="cac-flow" className="mt-20">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              CAC Step-by-Step
            </span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              From documents to certificates in 4 steps
            </h3>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ROADMAP.map((r, i) => (
              <motion.div
                key={r.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-lg font-extrabold text-white shadow-lg shadow-indigo-600/25">
                  {r.step}
                </span>
                <p className="mt-4 text-sm font-extrabold text-slate-900 dark:text-white">
                  {r.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {r.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </section>

      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#0A192F]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 text-white shadow-lg shadow-emerald-500/25">
                <Sparkle size={20} weight="fill" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                Xonto
                <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                  global
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              General consultancy &amp; digital solutions — websites, social
              media, Google Business, SEO, CAC registration, importation
              coaching, and flight bookings for growth-minded businesses.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
        
        
                href={`mailto:${EMAIL}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/15 dark:text-slate-300"
                aria-label="Email us"
              >
                <Envelope size={16} weight="bold" />
              </a>
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                  "Hello Xontopglobal Consultant! I found you through your website."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:text-slate-300"
                aria-label="WhatsApp us"
              >
                <WhatsappLogo size={16} weight="bold" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                "Website & App Development",
                "Social Media Marketing",
                "Google Business Profile",
                "SEO & Organic Growth",
                "CAC Registration",
                "Digital Importation",
                "Flight & Travel Desk",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-slate-500 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "Free Consultation", href: "#contact" },
                { label: "CAC Roadmap", href: "#cac-flow" },
                { label: "Importation Academy", href: "#import" },
                { label: "Travel Desk", href: "#travel" },
                { label: "XonBot AI", href: "#top" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-500 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2.5">
              
              </li>
              <li className="flex items-center gap-2.5">
                <Envelope size={15} weight="fill" className="shrink-0 text-cyan-600 dark:text-cyan-400" />
                <a href={`mailto:${EMAIL}`} className="break-all transition hover:text-cyan-600 dark:hover:text-cyan-400">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} weight="fill" className="shrink-0 text-slate-400" />
                Nigeria · Serving clients worldwide
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row dark:border-white/10">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-[11px] font-bold text-slate-500 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:text-slate-300 dark:hover:text-emerald-400"
          >
            <Code size={13} weight="bold" className="text-emerald-500" />
            Built for VSCode · GitHub · Netlify
          </a>
        </div>
      </div>
    </footer>
  );
}