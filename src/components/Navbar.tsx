import { useEffect, useRef, useState } from "react";
import {
  GithubLogo,
  WhatsappLogo,
  List,
  X,
  CaretDown,
  AirplaneInFlight,
  Bed,
  Globe,
  Briefcase,
  GraduationCap,
  Buildings,
  Phone,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import {
  BRAND_NAME,
  WHATSAPP_LINK,
  WHATSAPP_TEXT,
} from "../constants";

interface NavbarProps {
  onConsult: () => void;
  onDeployGuide: () => void;
}

type MenuName =
  | "services"
  | "cac"
  | "travel"
  | "academy"
  | null;

export default function Navbar({
  onConsult,
  onDeployGuide,
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuName>(null);
  const navRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const closeAll = () => {
    setOpen(false);
    setMenu(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenu(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  const toggleMenu = (name: MenuName) => {
    setMenu(menu === name ? null : name);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    closeAll();
  };

  const goToServices = () => {
    navigate("/services");
    closeAll();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <nav
        ref={navRef}
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* BRAND */}
        <a
          href="#top"
          onClick={closeAll}
          className="group flex items-center"
        >
          <div className="flex flex-col leading-none">
            <span className="text-[17px] font-black tracking-tight text-green-700 transition group-hover:text-green-800 sm:text-[19px]">
              Xontopglobal
            </span>

            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-[3px] w-4 rounded-full bg-green-600" />

              <span className="text-[10px] font-extrabold tracking-[0.2em] text-red-600 sm:text-[11px]">
                CONSULTANT
              </span>
            </div>

            <span className="mt-1 hidden text-[7px] font-semibold tracking-wide text-slate-500 sm:block">
              TRAVEL • EDUCATION • BUSINESS • IMMIGRATION
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 md:flex">
          {/* SERVICES */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("services")}
              className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-green-50 hover:text-green-700"
            >
              Services

              <CaretDown
                size={14}
                weight="bold"
                className={`transition ${menu === "services" ? "rotate-180" : ""
                  }`}
              />
            </button>

            {menu === "services" && (
              <div className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                <button
                  type="button"
                  onClick={goToServices}
                  className="flex w-full gap-3 rounded-xl p-3 text-left hover:bg-green-50"
                >
                  <Briefcase
                    size={22}
                    weight="duotone"
                    className="text-green-600"
                  />

                  <div>
                    <p className="font-bold text-slate-900">
                      Business & Digital Services
                    </p>

                    <p className="text-xs text-slate-500">
                      Websites, apps, SEO and digital solutions.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={goToServices}
                  className="flex w-full gap-3 rounded-xl p-3 text-left hover:bg-green-50"
                >
                  <Globe
                    size={22}
                    weight="duotone"
                    className="text-green-600"
                  />

                  <div>
                    <p className="font-bold text-slate-900">
                      Travel & Immigration
                    </p>

                    <p className="text-xs text-slate-500">
                      Travel and visa support.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={goToServices}
                  className="flex w-full gap-3 rounded-xl p-3 text-left hover:bg-green-50"
                >
                  <GraduationCap
                    size={22}
                    weight="duotone"
                    className="text-green-600"
                  />

                  <div>
                    <p className="font-bold text-slate-900">
                      Training & Academy
                    </p>

                    <p className="text-xs text-slate-500">
                      Importation and business training.
                    </p>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* CAC REGISTRATION */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("cac")}
              className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-green-50 hover:text-green-700"
            >
              CAC Registration

              <CaretDown
                size={14}
                weight="bold"
                className={`transition ${menu === "cac" ? "rotate-180" : ""
                  }`}
              />
            </button>

            {menu === "cac" && (
              <div className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                <button
                  type="button"
                  onClick={goToServices}
                  className="flex w-full gap-3 rounded-xl p-3 text-left hover:bg-green-50"
                >
                  <Buildings
                    size={22}
                    weight="duotone"
                    className="text-green-600"
                  />

                  <div>
                    <p className="font-bold text-slate-900">
                      Company Registration
                    </p>

                    <p className="text-xs text-slate-500">
                      Register your company with CAC.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={goToServices}
                  className="flex w-full gap-3 rounded-xl p-3 text-left hover:bg-green-50"
                >
                  <Briefcase
                    size={22}
                    weight="duotone"
                    className="text-green-600"
                  />

                  <div>
                    <p className="font-bold text-slate-900">
                      Business Name Registration
                    </p>

                    <p className="text-xs text-slate-500">
                      Start and formalize your business.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={goToServices}
                  className="flex w-full gap-3 rounded-xl p-3 text-left hover:bg-green-50"
                >
                  <Buildings
                    size={22}
                    weight="duotone"
                    className="text-green-600"
                  />

                  <div>
                    <p className="font-bold text-slate-900">
                      CAC Support
                    </p>

                    <p className="text-xs text-slate-500">
                      Professional registration assistance.
                    </p>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* TRAVEL DESK */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("travel")}
              className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
            >
              Travel Desk

              <CaretDown
                size={14}
                weight="bold"
                className={`transition ${menu === "travel" ? "rotate-180" : ""
                  }`}
              />
            </button>

            {menu === "travel" && (
              <div className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                <button
                  type="button"
                  onClick={() => scrollTo("travel-booking")}
                  className="flex w-full gap-3 rounded-xl p-3 text-left hover:bg-cyan-50"
                >
                  <AirplaneInFlight
                    size={22}
                    weight="duotone"
                    className="text-cyan-600"
                  />

                  <div>
                    <p className="font-bold text-slate-900">
                      Flights
                    </p>

                    <p className="text-xs text-slate-500">
                      Domestic and international bookings.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("travel-booking")}
                  className="flex w-full gap-3 rounded-xl p-3 text-left hover:bg-cyan-50"
                >
                  <Bed
                    size={22}
                    weight="duotone"
                    className="text-cyan-600"
                  />

                  <div>
                    <p className="font-bold text-slate-900">
                      Hotels
                    </p>

                    <p className="text-xs text-slate-500">
                      Find accommodation for your trip.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("travel-booking")}
                  className="flex w-full gap-3 rounded-xl p-3 text-left hover:bg-cyan-50"
                >
                  <Globe
                    size={22}
                    weight="duotone"
                    className="text-cyan-600"
                  />

                  <div>
                    <p className="font-bold text-slate-900">
                      Visa Consultation
                    </p>

                    <p className="text-xs text-slate-500">
                      Visa guidance and travel documentation.
                    </p>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* IMPORTATION ACADEMY */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("academy")}
              className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-green-50 hover:text-green-700"
            >
              Importation Academy

              <CaretDown
                size={14}
                weight="bold"
                className={`transition ${menu === "academy" ? "rotate-180" : ""
                  }`}
              />
            </button>

            {menu === "academy" && (
              <div className="absolute right-0 top-full mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                <button
                  type="button"
                  onClick={goToServices}
                  className="flex w-full gap-3 rounded-xl p-3 text-left hover:bg-green-50"
                >
                  <GraduationCap
                    size={22}
                    weight="duotone"
                    className="text-green-600"
                  />

                  <div>
                    <p className="font-bold text-slate-900">
                      Digital Importation
                    </p>

                    <p className="text-xs text-slate-500">
                      Learn how to import products.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={goToServices}
                  className="flex w-full gap-3 rounded-xl p-3 text-left hover:bg-green-50"
                >
                  <Briefcase
                    size={22}
                    weight="duotone"
                    className="text-green-600"
                  />

                  <div>
                    <p className="font-bold text-slate-900">
                      Business Training
                    </p>

                    <p className="text-xs text-slate-500">
                      Practical entrepreneurship training.
                    </p>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* CONTACT */}
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-green-700"
          >
            <Phone size={15} />
            Contact
          </button>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-2 lg:flex">
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

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
            setMenu(null);
          }}
          className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={22} weight="bold" />
          ) : (
            <List size={22} weight="bold" />
          )}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl md:hidden">
          {/* MOBILE SERVICES */}
          <button
            type="button"
            onClick={() => toggleMenu("services")}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-green-50"
          >
            Services

            <CaretDown
              className={
                menu === "services" ? "rotate-180" : ""
              }
            />
          </button>

          {menu === "services" && (
            <div className="ml-3 border-l-2 border-green-100 pl-3">
              <button
                type="button"
                onClick={goToServices}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-green-50"
              >
                Business & Digital Services
              </button>

              <button
                type="button"
                onClick={goToServices}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-green-50"
              >
                Travel & Immigration
              </button>

              <button
                type="button"
                onClick={goToServices}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-green-50"
              >
                Training & Academy
              </button>
            </div>
          )}

          {/* MOBILE CAC */}
          <button
            type="button"
            onClick={() => toggleMenu("cac")}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-green-50"
          >
            CAC Registration

            <CaretDown
              className={
                menu === "cac" ? "rotate-180" : ""
              }
            />
          </button>

          {menu === "cac" && (
            <div className="ml-3 border-l-2 border-green-100 pl-3">
              <button
                type="button"
                onClick={goToServices}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-green-50"
              >
                Company Registration
              </button>

              <button
                type="button"
                onClick={goToServices}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-green-50"
              >
                Business Name Registration
              </button>

              <button
                type="button"
                onClick={goToServices}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-green-50"
              >
                CAC Support
              </button>
            </div>
          )}

          {/* MOBILE TRAVEL */}
          <button
            type="button"
            onClick={() => toggleMenu("travel")}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-cyan-50"
          >
            Travel Desk

            <CaretDown
              className={
                menu === "travel" ? "rotate-180" : ""
              }
            />
          </button>

          {menu === "travel" && (
            <div className="ml-3 border-l-2 border-cyan-100 pl-3">
              <button
                type="button"
                onClick={() => scrollTo("travel-booking")}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-cyan-50"
              >
                ✈️ Flights
              </button>

              <button
                type="button"
                onClick={() => scrollTo("travel-booking")}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-cyan-50"
              >
                🏨 Hotels
              </button>

              <button
                type="button"
                onClick={() => scrollTo("travel-booking")}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-cyan-50"
              >
                🌍 Visa Consultation
              </button>
            </div>
          )}

          {/* MOBILE ACADEMY */}
          <button
            type="button"
            onClick={() => toggleMenu("academy")}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-green-50"
          >
            Importation Academy

            <CaretDown
              className={
                menu === "academy" ? "rotate-180" : ""
              }
            />
          </button>

          {menu === "academy" && (
            <div className="ml-3 border-l-2 border-green-100 pl-3">
              <button
                type="button"
                onClick={goToServices}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-green-50"
              >
                Digital Importation
              </button>

              <button
                type="button"
                onClick={goToServices}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-green-50"
              >
                Business Training
              </button>
            </div>
          )}

          {/* MOBILE CONTACT */}
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="flex w-full items-center gap-2 rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Phone size={17} />
            Contact
          </button>

          {/* MOBILE ACTIONS */}
          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                WHATSAPP_TEXT
              )}`}
              target="_blank"
              rel="noreferrer"
              onClick={closeAll}
              className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <WhatsappLogo size={18} weight="fill" />
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => {
                onConsult();
                closeAll();
              }}
              className="rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
            >
              Free Consultation
            </button>

            <button
              type="button"
              onClick={() => {
                onDeployGuide();
                closeAll();
              }}
              className="flex items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-800"
            >
              <GithubLogo size={18} weight="fill" />
              Connect GitHub
            </button>
          </div>
        </div>
      )}

      <span className="sr-only">{BRAND_NAME}</span>
    </header>
  );
}