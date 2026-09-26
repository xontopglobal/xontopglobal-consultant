import { useState } from "react";
import {
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
  List,
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

export default function Navbar({
  onConsult,
  onDeployGuide,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo / Brand */}
        <a
          href="#top"
          onClick={close}
          className="flex items-center gap-2"
        >
          

          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight text-slate-900">
              Xontopglobal
            </span>
            <span className="block text-[12px] font-semibold tracking-wide text-slate-500">
              CONSULTANT
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
              WHATSAPP_TEXT
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <WhatsappLogo size={18} weight="fill" />
            WhatsApp
          </a>

          <button
            type="button"
            onClick={onConsult}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Free Consultation
          </button>

          <button
            type="button"
            onClick={onDeployGuide}
            className="flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            <GithubLogo size={18} weight="fill" />
            Connect GitHub
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <X size={22} weight="bold" />
          ) : (
            <List size={22} weight="bold" />
          )}
        </button>
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {link.label}
                </a>
              ))}

              <button
                type="button"
                onClick={() => {
                  close();
                  onConsult();
                }}
                className="mt-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
              >
                Free Consultation
              </button>

              <button
                type="button"
                onClick={() => {
                  close();
                  onDeployGuide();
                }}
                className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700"
              >
                Connect GitHub
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-2 pt-3">
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                  WHATSAPP_TEXT
                )}`}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white"
              >
                <WhatsappLogo size={18} weight="fill" />
                WhatsApp
              </a>

              <button
                type="button"
                onClick={() => {
                  onConsult();
                  close();
                }}
                className="rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
              >
                Free Consultation
              </button>

              <button
                type="button"
                onClick={() => {
                  onDeployGuide();
                  close();
                }}
                className="rounded-full border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-800"
              >
                Connect GitHub
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Screen-reader brand name */}
      <span className="sr-only">{BRAND_NAME}</span>
    </header>
  );
}