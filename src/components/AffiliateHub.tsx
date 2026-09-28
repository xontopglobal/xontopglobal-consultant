import { Airplane, ArrowSquareOut, GlobeHemisphereWest, ShoppingBagOpen, WifiHigh } from "@phosphor-icons/react";

const partners = [
    {
        name: "Jumia",
        label: "Shop & discover deals",
        href: "https://jforce.jumia.com.ng/s/gHkbkeJ",
        icon: ShoppingBagOpen,
        className: "from-orange-500 to-amber-500",
    },
    {
        name: "Trip.com",
        label: "Flights, hotels & travel",
        href: "https://trip.tpk.mx/3Rp5kDQe",
        icon: Airplane,
        className: "from-sky-500 to-blue-600",
    },
    {
        name: "Airalo",
        label: "eSIM connectivity abroad",
        href: "https://airalo.tpk.mx/PSfnbCIg",
        icon: WifiHigh,
        className: "from-emerald-500 to-teal-600",
    },
];

export default function AffiliateHub() {
    return (
        <section className="bg-[#F4F7FB] py-12 dark:bg-[#081525] sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                        Partner links
                    </span>
                    <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                        Useful travel & shopping partners
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        Quick access to partner services that can support your shopping, travel and connectivity needs.
                    </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {partners.map((partner) => {
                        const Icon = partner.icon;
                        return (
                            <a
                                key={partner.name}
                                href={partner.href}
                                target="_blank"
                                rel="noopener noreferrer sponsored"
                                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                            >
                                <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${partner.className} text-white`}>
                                    <Icon size={25} weight="bold" />
                                </div>
                                <div className="mt-5 flex items-center justify-between gap-3">
                                    <div>
                                        <h3 className="font-extrabold text-slate-900 dark:text-white">{partner.name}</h3>
                                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{partner.label}</p>
                                    </div>
                                    <ArrowSquareOut size={18} className="text-slate-400 transition group-hover:text-emerald-600" />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export function PartnerIntroIcon() {
    return <GlobeHemisphereWest size={22} weight="duotone" />;
}
