import { ArrowRight, AirplaneTakeoff, Building, ChartLineUp, Globe, Handshake, MapPin, PaperPlaneTilt } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { BRAND_NAME, SERVICES } from "../constants";

const ICON_MAP = {
    web: Globe,
    social: PaperPlaneTilt,
    google: MapPin,
    seo: ChartLineUp,
    cac: Building,
    flight: AirplaneTakeoff,
    coach: Handshake,
};

export default function ServicesDirectory() {
    return (
        <section id="services" className="bg-white py-16 dark:bg-[#0B1B33] sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                        Services
                    </span>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Choose a service to view its own page
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-300">
                        Explore what {BRAND_NAME} offers, then contact us directly when you are ready to get started.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service) => {
                        const Icon = ICON_MAP[service.id as keyof typeof ICON_MAP] ?? Globe;
                        return (
                            <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-400/40"
                            >
                                <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}>
                                    <Icon size={24} weight="bold" />
                                </div>
                                <h3 className="mt-5 text-lg font-extrabold text-slate-900 dark:text-white">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                                    {service.tagline}
                                </p>
                                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                    {service.description}
                                </p>
                                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition group-hover:gap-3 dark:text-white">
                                    View service page <ArrowRight size={16} weight="bold" />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
