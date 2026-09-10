import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
      GithubLogo,
      List,
      Sparkle,
      WhatsappLogo,
  X,
} from "@phosphor-icons/react";
import {
    BRAND_NAME,
    NAV_LINKS,
    WHATSAPP_LINK,
    WHATSAPP_TEXT,
  } from "../constants";


interface NavbarProps {
  onConsult: () => void;
  onDeployGuide: () => void;
}

export default function Navbar({ onConsult, onDeployGuide }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#0A192F]/85">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 text-white shadow-lg shadow-emerald-500/25">
            <Sparkle size={20} weight="fill" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
            Xonto
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              global
            </span>
            <span className="ml-1.5 text-xs font-bold text-slate-400 dark:text-slate-500">
              Consultant
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
    
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
            aria-label="Call Xontopglobal Consultant"
          >
            
          </a>
          <a
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-500"
          >
            <WhatsappLogo size={18} weight="fill" />
            WhatsApp
          </a>
          <button
            onClick={onDeployGuide}
            className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
          >
            <GithubLogo size={18} weight="bold" />
            Connect GitHub
          </button>
          <button
            onClick={onConsult}
            className="rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Free Consultation
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-700 lg:hidden dark:border-white/15 dark:text-slate-200"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden dark:border-white/10 dark:bg-[#0A192F]"
          >
            <div className="space-y-1 px-4 py-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 pt-3">
                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white"
                >
                  <WhatsappLogo size={18} weight="fill" /> WhatsApp
                </a>
                <button
                  onClick={() => {
                    onConsult();
                    close();
                  }}
                  className="flex-1 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
                >
                  Free Consultation
                </button>
                <button
                  onClick={() => {
                    onDeployGuide();
                    close();
                  }}
                  className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
                >
                  Connect GitHub
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">{BRAND_NAME}</span>
    </header>
  );
}