import { ArrowLeft, ArrowRight, CheckCircle, ChatCircleText } from "@phosphor-icons/react";
import { Link, useParams } from "react-router-dom";
import { BRAND_NAME, SERVICES, WHATSAPP_LINK } from "../../constants";
import BEForwardAffiliateBanner from "../BEForwardAffiliateBanner";

export default function ServicePage() {
    const { serviceId } = useParams();

    const service = SERVICES.find(
        (item) =>
            String(item.id).trim().toLowerCase() ===
            String(serviceId).trim().toLowerCase()
    );

    if (!service) {
        return (
            <main className="min-h-[70vh] bg-[#F4F7FB] px-4 py-20 dark:bg-[#081525]">
                <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
                    <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Service not found</h1>
                    <p className="mt-3 text-slate-600 dark:text-slate-300">Please return to the services directory and choose a service.</p>
                    <Link to="/services" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white">
                        <ArrowLeft size={16} /> Back to services
                    </Link>
                </div>
            </main>
        );
    }

    const whatsapp = `${WHATSAPP_LINK}?text=${encodeURIComponent(`Hello ${BRAND_NAME}! I'm interested in ${service.title}. I would like more information.`)}`;

    return (
        <main className="bg-[#F4F7FB] py-10 dark:bg-[#081525] sm:py-16">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-emerald-600 dark:text-slate-300">
                    <ArrowLeft size={16} /> All services
                </Link>

                <BEForwardAffiliateBanner />
                <section className="mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
                    <div className={`bg-gradient-to-br ${service.accent} p-8 text-white sm:p-12`}>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Xontopglobal Consultant</p>
                        <h1 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">{service.title}</h1>
                        <p className="mt-4 max-w-2xl text-base font-semibold text-white/90 sm:text-lg">{service.tagline}</p>
                    </div>

                    <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">How we can help</h2>
                            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>

                            <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                {service.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                                        <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-emerald-500" />
                                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                <ChatCircleText size={25} weight="bold" />
                            </div>
                            <h2 className="mt-5 text-xl font-extrabold text-slate-900 dark:text-white">Ready to discuss your project?</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                Tell us what you need and we can guide you through the next steps.
                            </p>
                            <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-500">
                                Chat on WhatsApp <ArrowRight size={16} weight="bold" />
                            </a>
                            <Link to="/#contact" className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 dark:border-white/15 dark:text-white">
                                Contact form
                            </Link>
                        </aside>
                    </div>
                </section>
            </div>
        </main>
    );
}
